const { Button: AB, Badge: ABadge, Tabs: ATabs, Card: ACard, Dialog: ADialog, Input: AInput, Select: ASelect, Checkbox: ACheck, ListingCard: AListing, IconButton: AIconButton } = window.HoodleDesignSystem_ee4a2a;

const RATES = [['loved', 'Loved it', 'heart'], ['ok', 'It\'s OK', 'meh'], ['no', 'Not for me', 'thumbs-down']];

function ModelHomeSheet({ id, onClose, go, saved, toggleSave, ratings, setRating, notes, setNote, requireUser, notify }) {
  const { m } = useView(); const { homes, builders, products, INT } = HBA_DATA;
  const [gal, setGal] = React.useState(0);
  const h = homes.find(x => x.id === id); if (!h) return null;
  const b = builders.find(x => x.id === h.builder);
  const prods = products.slice(0, 4 + (h.no % 3));
  const imgs = [h.img, ...INT.slice(0, 3)];
  const rate = ratings[h.id]; const note = notes[h.id] || '';
  return <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--scrim)', zIndex: 60, display: 'flex', justifyContent: 'flex-end' }}>
    <div onClick={e => e.stopPropagation()} style={{ width: m ? '100%' : 520, height: '100%', background: '#fff', overflowY: 'auto', boxShadow: 'var(--shadow-overlay)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <Img src={imgs[gal]} style={{ width: '100%', aspectRatio: '4 / 3' }} />
        <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between' }}>
          <ABadge tone="solid" style={{ height: 28, padding: '0 10px', fontSize: 13 }}>Parade home #{h.no}</ABadge>
          <AIconButton label="Close" variant="overlay" size="sm" icon={<Icon name="x" size={16} />} onClick={onClose} />
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 12, display: 'flex', gap: 6 }}>
          {imgs.map((s, i) => <button key={i} type="button" onClick={() => setGal(i)} style={{ width: 48, height: 36, padding: 0, border: i === gal ? '2px solid #fff' : '2px solid transparent', borderRadius: 6, overflow: 'hidden', cursor: 'pointer', background: 'none', boxShadow: 'var(--shadow-sm)' }}><Img src={s} style={{ width: '100%', height: '100%' }} /></button>)}
        </div>
      </div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <h2 style={{ margin: 0, font: '500 26px/1.2 var(--font-sans)', color: 'var(--text-strong)' }}>{h.name}</h2>
            <AB size="sm" variant="secondary" iconLeft={<Icon name="heart" size={15} style={saved.homes.has(h.id) ? { fill: 'var(--teal-500)' } : null} />} onClick={() => toggleSave('homes', h.id)}>{saved.homes.has(h.id) ? 'Saved' : 'Save'}</AB>
          </div>
          <div style={{ font: '600 20px var(--font-sans)', color: 'var(--text-strong)' }}>{h.price}</div>
          <div style={{ font: '400 14px var(--font-sans)', color: 'var(--text-body)' }}>{h.beds} bd  ·  {h.baths} ba  ·  {h.sqft.toLocaleString()} sq ft</div>
          <div style={{ font: '400 14px var(--font-sans)', color: 'var(--text-muted)' }}>{h.hood}, {h.city} · Open Thu–Sun 12–5</div>
        </div>
        <button type="button" onClick={() => { onClose(); go('builder', { id: b.id }); }} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', background: '#fff', cursor: 'pointer', textAlign: 'left' }}>
          <Img src={b.img} style={{ width: 44, height: 44, borderRadius: 8 }} />
          <span style={{ flex: 1 }}><span style={{ display: 'block', font: '500 14px var(--font-sans)', color: 'var(--text-strong)' }}>Built by {b.name}</span><span style={{ display: 'flex', alignItems: 'center', gap: 4, font: '400 12px var(--font-sans)', color: 'var(--gold-700)', marginTop: 2 }}><Icon name="badge-check" size={13} />HBA of Metro Denver member</span></span>
          <Icon name="chevron-right" size={18} color="var(--ink-400)" />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ font: '600 15px var(--font-sans)', color: 'var(--text-strong)' }}>How did you like it?</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
            {RATES.map(([v, l, i]) => { const on = rate === v; return <button key={v} type="button" onClick={() => requireUser(() => { setRating(h.id, on ? null : v); })} style={{ height: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, borderRadius: 'var(--radius-md)', border: `1px solid ${on ? 'var(--teal-500)' : 'var(--border-default)'}`, background: on ? 'var(--teal-50)' : '#fff', color: on ? 'var(--teal-700)' : 'var(--ink-700)', font: '500 13px var(--font-sans)', cursor: 'pointer' }}><Icon name={i} size={18} />{l}</button>; })}
          </div>
          <textarea placeholder="Private notes: what you'd change, rooms you loved…" value={note} onFocus={() => requireUser(() => {})} onChange={e => setNote(h.id, e.target.value)} rows={3} style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-strong)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '10px 12px', resize: 'vertical', outline: 'none' }}></textarea>
          <div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="lock" size={13} />Only you can see ratings and notes.</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ font: '600 15px var(--font-sans)', color: 'var(--text-strong)', marginBottom: 6 }}>Products in this home</div>
          {prods.map(p => { const on = saved.products.has(p.id); return <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ flex: 1 }}><div style={{ font: '500 14px var(--font-sans)', color: 'var(--text-strong)' }}>{p.name}</div><div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>{p.by} · Parade sponsor</div></div>
            <AB size="sm" variant={on ? 'secondary' : 'ghost'} iconLeft={<Icon name={on ? 'check' : 'plus'} size={15} />} onClick={() => toggleSave('products', p.id)}>{on ? 'Saved' : 'Want this'}</AB>
          </div>; })}
        </div>
        <AB size="lg" fullWidth iconLeft={<Icon name="message-circle" size={18} />} onClick={() => requireUser(() => notify(b.name + ' will follow up about ' + h.name + '.'))}>Ask {b.name} about this home</AB>
      </div>
    </div>
  </div>;
}

function RegisterDialog({ open, onClose, onDone }) {
  const [first, setFirst] = React.useState('Alex'); const [email, setEmail] = React.useState('alex@example.com');
  return <ADialog open={open} title="Create your free Hoodle account" onClose={onClose} width={460}
    footer={<><AB variant="ghost" onClick={onClose}>Not now</AB><AB onClick={() => onDone({ first, email })}>Create account</AB></>}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <p style={{ margin: 0 }}>Save Parade homes, rate what you tour and keep talking with builders after the event.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <AInput label="First name" value={first} onChange={e => setFirst(e.target.value)} />
        <AInput label="ZIP code" defaultValue="80016" />
      </div>
      <AInput label="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <ASelect label="When are you planning to buy?" options={['In the next 3 months', '3–6 months', '6–12 months', 'Just looking']} defaultValue="3–6 months" />
      <ACheck label="Enter me in the daily Parade giveaway" defaultChecked />
    </div>
  </ADialog>;
}

function AccountPage({ user, go, saved, toggleSave, ratings, notes, openHome, requireUser }) {
  const { m } = useView(); const { homes, builders, products } = HBA_DATA;
  const [tab, setTab] = React.useState('homes');
  if (!user) return <Wrap style={{ padding: '80px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
    <h1 style={{ margin: 0, font: '500 28px var(--font-sans)', color: 'var(--text-strong)' }}>Sign in to see your saved homes</h1>
    <AB onClick={() => requireUser(() => {})}>Create a free account</AB>
  </Wrap>;
  const savedHomes = homes.filter(h => saved.homes.has(h.id));
  const rated = homes.filter(h => ratings[h.id] || notes[h.id]).sort((a, b) => ['loved', 'ok', 'no'].indexOf(ratings[a.id]) - ['loved', 'ok', 'no'].indexOf(ratings[b.id]));
  const prods = products.filter(p => saved.products.has(p.id));
  const bs = builders.filter(b => saved.builders.has(b.id));
  const bname = id => (builders.find(b => b.id === id) || {}).name;
  const empty = t => <div style={{ padding: 40, textAlign: 'center', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-lg)', font: '400 14px var(--font-sans)', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>{t}<AB size="sm" variant="secondary" onClick={() => go('showcase')}>Browse Parade homes</AB></div>;
  return <div style={{ background: 'var(--surface-sunken)', minHeight: '70vh' }}>
    <Wrap style={{ padding: m ? '28px 20px 56px' : '48px 32px 88px' }}>
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 20, justifyContent: 'space-between', alignItems: m ? 'flex-start' : 'flex-end', marginBottom: 28 }}>
        <div>
          <div style={{ font: '400 14px var(--font-sans)', color: 'var(--text-muted)' }}>My Hoodle</div>
          <h1 style={{ margin: '4px 0 0', font: `500 ${m ? 28 : 36}px/1.15 var(--font-sans)`, color: 'var(--text-strong)', letterSpacing: '-0.015em' }}>Welcome back, {user.first}</h1>
        </div>
        <div style={{ display: 'flex', gap: m ? 24 : 36 }}>
          <Stat value={savedHomes.length} label="saved homes" /><Stat value={Object.values(ratings).filter(r => r === 'loved').length} label="loved" /><Stat value={prods.length} label="products" />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 16, borderRadius: 'var(--radius-lg)', background: '#fff', border: '1px solid var(--border-subtle)', marginBottom: 28 }}>
        <Icon name="gift" size={20} color="var(--gold-700)" />
        <span style={{ flex: 1, font: '400 14px/1.45 var(--font-sans)', color: 'var(--text-body)' }}><b style={{ fontWeight: 600, color: 'var(--text-strong)' }}>You're entered in today's Parade giveaway.</b> Check in at any Parade home to enter again tomorrow.</span>
      </div>
      <ATabs tabs={[{ value: 'homes', label: 'Saved homes', count: savedHomes.length }, { value: 'rated', label: 'Ratings & notes', count: rated.length }, { value: 'products', label: 'Products', count: prods.length }, { value: 'builders', label: 'Builders', count: bs.length }]} value={tab} onChange={setTab} />
      <div style={{ paddingTop: 24 }}>
        {tab === 'homes' && (savedHomes.length ? <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))', gap: 20 }}>
          {savedHomes.map(h => <AListing key={h.id} image={h.img} status={'Parade #' + h.no} price={h.price} beds={h.beds} baths={h.baths} sqft={h.sqft} name={h.name} community={h.hood} location={bname(h.builder)} saved onSave={() => toggleSave('homes', h.id)} onClick={() => openHome(h.id)} />)}
        </div> : empty('No saved homes yet.'))}
        {tab === 'rated' && (rated.length ? <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {rated.map((h, i) => { const r = RATES.find(x => x[0] === ratings[h.id]); return <ACard key={h.id} padding={14} interactive onClick={() => openHome(h.id)}>
            <div style={{ display: 'flex', gap: 14, alignItems: m ? 'flex-start' : 'center', flexDirection: m ? 'column' : 'row' }}>
              <Img src={h.img} style={{ width: m ? '100%' : 120, height: m ? 140 : 80, borderRadius: 8, flex: 'none' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ font: '600 15px var(--font-sans)', color: 'var(--text-strong)' }}>#{h.no} {h.name} <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>· {bname(h.builder)}</span></div>
                {notes[h.id] && <div style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-body)', marginTop: 4, fontStyle: 'italic' }}>"{notes[h.id]}"</div>}
              </div>
              {r && <ABadge tone={r[0] === 'loved' ? 'brand' : r[0] === 'ok' ? 'neutral' : 'danger'}>{r[1]}</ABadge>}
            </div>
          </ACard>; })}
        </div> : empty('Rate the homes you tour to compare them here.'))}
        {tab === 'products' && (prods.length ? <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))', gap: 14 }}>
          {prods.map(p => <ACard key={p.id} padding={16}><div style={{ font: '600 14px var(--font-sans)', color: 'var(--text-strong)' }}>{p.name}</div><div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)', marginTop: 2 }}>{p.by}</div><div style={{ marginTop: 12 }}><AB size="sm" variant="ghost" onClick={() => toggleSave('products', p.id)}>Remove</AB></div></ACard>)}
        </div> : empty('Tap "Want this" on products inside Parade homes.'))}
        {tab === 'builders' && <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2,minmax(0,1fr))', gap: 14 }}>
          {(bs.length ? bs : builders.slice(0, 1)).map((b, i) => <ACard key={b.id} padding={16} interactive onClick={() => go('builder', { id: b.id })}>
            <div style={{ display: 'flex', gap: 14 }}>
              <Img src={b.img} style={{ width: 52, height: 52, borderRadius: 8, flex: 'none' }} />
              <div style={{ flex: 1 }}>
                <div style={{ font: '600 15px var(--font-sans)', color: 'var(--text-strong)' }}>{b.name}</div>
                <div style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-body)', marginTop: 4 }}>{i === 0 ? '"Thanks for touring The Willow. We can move the office to the main floor. Want to see a revised plan?"' : 'No messages yet.'}</div>
                {i === 0 && <div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)', marginTop: 6 }}>Replied 2 days after the Parade</div>}
              </div>
            </div>
          </ACard>)}
        </div>}
      </div>
    </Wrap>
  </div>;
}

Object.assign(window, { ModelHomeSheet, RegisterDialog, AccountPage });
