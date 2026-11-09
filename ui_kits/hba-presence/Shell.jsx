const { Button, IconButton, Badge, Eyebrow, Tooltip } = window.HoodleDesignSystem_ee4a2a;
const ViewCtx = React.createContext({ m: false, viewAs: 'buyer' });
const useView = () => React.useContext(ViewCtx);

function toPascal(n){ return n.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join(''); }
function Icon({ name, size = 18, stroke = 1.75, color, style }) {
  const node = window.lucide && window.lucide.icons[toPascal(name)];
  if (!node) return <span style={{ width: size, height: size, display: 'inline-block' }}></span>;
  const kids = node[0] === 'svg' ? node[2] : node;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', display: 'block', ...style }}>
    {kids.map(([t, a], i) => React.createElement(t, { key: i, ...a }))}
  </svg>;
}

function Img({ src, alt = '', style, label = 'Photo' }) {
  const [err, setErr] = React.useState(false);
  if (!src || err) return <div style={{ background: 'var(--ink-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-400)', font: '400 12px var(--font-sans)', ...style }}>{label}</div>;
  return <img src={src} alt={alt} onError={() => setErr(true)} style={{ objectFit: 'cover', display: 'block', ...style }} />;
}

function Wrap({ children, style, pad = true }) {
  const { m } = useView();
  return <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: pad ? (m ? '0 20px' : '0 32px') : 0, boxSizing: 'border-box', ...style }}>{children}</div>;
}

function SectionHead({ eyebrow, title, sub, action, id }) {
  const { m } = useView();
  return <div id={id} style={{ display: 'flex', flexDirection: m ? 'column' : 'row', alignItems: m ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 28 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 640 }}>
      {eyebrow && <Eyebrow align="start" size="sm">{eyebrow}</Eyebrow>}
      <h2 style={{ margin: 0, font: `500 ${m ? 26 : 34}px/1.2 var(--font-sans)`, letterSpacing: '-0.01em', color: 'var(--text-strong)', textWrap: 'pretty' }}>{title}</h2>
      {sub && <p style={{ margin: 0, font: '400 16px/1.6 var(--font-sans)', color: 'var(--text-body)', textWrap: 'pretty' }}>{sub}</p>}
    </div>
    {action}
  </div>;
}

function HbaBadge({ onClick, size = 'md', inverse }) {
  const sm = size === 'sm';
  return <button type="button" onClick={onClick} title="Verified member of the HBA of Metro Denver"
    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: sm ? 28 : 34, padding: sm ? '0 10px 0 8px' : '0 14px 0 10px', borderRadius: 'var(--radius-pill)', border: `1px solid ${inverse ? 'rgba(255,255,255,.5)' : 'var(--gold-500)'}`, background: inverse ? 'rgba(255,255,255,.1)' : 'var(--gold-50)', color: inverse ? '#fff' : 'var(--ink-900)', font: `500 ${sm ? 12 : 13}px/1 var(--font-sans)`, cursor: onClick ? 'pointer' : 'default', whiteSpace: 'nowrap' }}>
    <Icon name="badge-check" size={sm ? 15 : 17} color={inverse ? '#fff' : 'var(--gold-700)'} />
    HBA of Metro Denver <span style={{ color: inverse ? 'rgba(255,255,255,.75)' : 'var(--gold-700)', fontWeight: 400 }}>· Member</span>
  </button>;
}

function TopNav({ onHome, onAccount, user }) {
  const { m } = useView();
  const links = ['Neighborhoods', 'Builders', 'Agents', 'Mortgage'];
  return <header style={{ position: 'sticky', top: 0, zIndex: 20, background: '#fff', borderBottom: '1px solid var(--border-subtle)' }}>
    <Wrap style={{ height: m ? 60 : 72, display: 'flex', alignItems: 'center', gap: 32 }}>
      <button type="button" onClick={onHome} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer' }} aria-label="Hoodle home">
        <img src="../../assets/hoodle-logo-tm-teal.png" alt="hoodle" style={{ height: m ? 26 : 32, display: 'block' }} />
      </button>
      {!m && <nav style={{ display: 'flex', gap: 28 }}>{links.map(l => <a key={l} href="#" onClick={e => e.preventDefault()} style={{ font: '500 14px var(--font-sans)', color: 'var(--ink-800)', textDecoration: 'none' }}>{l}</a>)}</nav>}
      <div style={{ flex: 1 }}></div>
      {m ? <div style={{ display: 'flex', gap: 4 }}>
          <IconButton label={user ? 'My Hoodle' : 'Sign in'} icon={<Icon name="user-round" />} onClick={onAccount} active={!!user} />
          <IconButton label="Menu" icon={<Icon name="menu" />} />
        </div>
        : user ? <button type="button" onClick={onAccount} style={{ display: 'flex', alignItems: 'center', gap: 10, border: 0, background: 'none', cursor: 'pointer', font: '500 14px var(--font-sans)', color: 'var(--ink-900)' }}>
            <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--teal-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 13px var(--font-sans)' }}>{user.first[0]}</span>My Hoodle</button>
        : <div style={{ display: 'flex', gap: 8 }}><Button variant="ghost" onClick={onAccount}>Sign in</Button><Button onClick={onAccount}>Sign up — free</Button></div>}
    </Wrap>
  </header>;
}

function Footer() {
  const { m } = useView();
  const cols = [['Explore', ['Neighborhoods', 'Builders', 'Agents', 'Lenders']], ['Partners', ['For builders', 'For REALTORS', 'For HBAs', 'For vendors']], ['Company', ['About Hoodle', 'Blog', 'Privacy', 'Terms']]];
  return <footer style={{ background: 'var(--ink-900)', color: 'rgba(255,255,255,.72)', padding: m ? '40px 0 28px' : '56px 0 32px' }}>
    <Wrap>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : '2fr 1fr 1fr 1fr', gap: 32 }}>
        <div style={{ gridColumn: m ? '1 / -1' : 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <img src="../../assets/hoodle-logo-tm-white.png" alt="hoodle" style={{ height: 30, width: 'fit-content' }} />
          <p style={{ margin: 0, font: '400 14px/1.6 var(--font-sans)', maxWidth: 300 }}>The new-home marketplace. Builders, neighborhoods and new-build listings, all in one place.</p>
        </div>
        {cols.map(([h, ls]) => <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ font: '500 13px var(--font-sans)', color: '#fff' }}>{h}</div>
          {ls.map(l => <span key={l} style={{ font: '400 14px var(--font-sans)' }}>{l}</span>)}
        </div>)}
      </div>
      <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.12)', font: '400 12px var(--font-sans)' }}>© 2026 Hoodle, Inc. Sample data for demonstration.</div>
    </Wrap>
  </footer>;
}

function LeafletMap({ points, height = 420, center = [39.72, -104.93], zoom = 9, onPick }) {
  const ref = React.useRef(null), mapRef = React.useRef(null), layerRef = React.useRef(null);
  React.useEffect(() => {
    if (!window.L || mapRef.current) return;
    const map = L.map(ref.current, { scrollWheelZoom: false, zoomControl: true, attributionControl: true }).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors', maxZoom: 18 }).addTo(map);
    mapRef.current = map; layerRef.current = L.layerGroup().addTo(map);
    const ro = new ResizeObserver(() => map.invalidateSize()); ro.observe(ref.current);
    return () => { ro.disconnect(); map.remove(); mapRef.current = null; };
  }, []);
  React.useEffect(() => {
    const g = layerRef.current; if (!g) return; g.clearLayers();
    points.forEach(p => {
      let mk;
      if (p.kind === 'home') {
        mk = L.marker([p.lat, p.lng], { icon: L.divIcon({ className: '', iconSize: [30, 30], iconAnchor: [15, 15],
          html: `<div style="width:30px;height:30px;border-radius:50%;background:#009788;color:#fff;border:2px solid #fff;box-shadow:0 2px 6px rgba(16,24,40,.3);display:flex;align-items:center;justify-content:center;font:600 12px Poppins,sans-serif">${p.no}</div>` }) });
      } else if (p.kind === 'member') {
        mk = L.circleMarker([p.lat, p.lng], { radius: p.hl ? 9 : 7, color: '#fff', weight: 2, fillColor: '#009788', fillOpacity: 1 });
      } else {
        mk = L.circleMarker([p.lat, p.lng], { radius: p.hl ? 9 : 7, color: p.hl ? '#CEA565' : '#6B7684', weight: p.hl ? 3 : 2, fillColor: '#fff', fillOpacity: 1, dashArray: p.hl ? null : '2 2' });
      }
      mk.bindTooltip(`<b style="font-weight:600">${p.name}</b><br>${p.sub || ''}`, { direction: 'top', offset: [0, -8] });
      if (onPick) mk.on('click', () => onPick(p));
      mk.addTo(g);
    });
  }, [points]);
  return <div ref={ref} style={{ height, width: '100%', borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: 'var(--ink-100)', position: 'relative', zIndex: 0 }}></div>;
}

function Stat({ value, label, inverse }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span style={{ font: '500 28px/1.1 var(--font-sans)', color: inverse ? '#fff' : 'var(--text-strong)', letterSpacing: '-0.01em' }}>{value}</span>
    <span style={{ font: '400 13px/1.4 var(--font-sans)', color: inverse ? 'rgba(255,255,255,.78)' : 'var(--text-muted)' }}>{label}</span>
  </div>;
}

function Crumbs({ items }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', font: '400 13px var(--font-sans)', color: 'var(--text-muted)', padding: '16px 0' }}>
    {items.map((it, i) => <React.Fragment key={i}>
      {i > 0 && <Icon name="chevron-right" size={14} />}
      {it.onClick ? <a href="#" onClick={e => { e.preventDefault(); it.onClick(); }} style={{ color: 'var(--text-link)' }}>{it.label}</a> : <span style={{ color: 'var(--text-strong)' }}>{it.label}</span>}
    </React.Fragment>)}
  </div>;
}

Object.assign(window, { ViewCtx, useView, Icon, Img, Wrap, SectionHead, HbaBadge, TopNav, Footer, LeafletMap, Stat, Crumbs });
