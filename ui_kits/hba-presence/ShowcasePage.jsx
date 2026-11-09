const { Button: SB, Badge: SBadge, Tag: STag, Card: SCard, ListingCard: SListing, Dialog: SDialog, Select: SSelect, Input: SInput, Eyebrow: SEyebrow } = window.HoodleDesignSystem_ee4a2a;

function ShowcasePage({ go, saved, toggleSave, openHome, requireUser, user, notify }) {
  const { m } = useView(); const { parade, homes, builders, sponsorTiers, hba } = HBA_DATA;
  const [area, setArea] = React.useState('All areas'); const [tix, setTix] = React.useState(false);
  const areas = ['All areas', 'North', 'South', 'East', 'West'];
  const areaOf = h => h.lat > 39.85 ? 'North' : h.lat < 39.6 ? 'South' : h.lng > -104.9 ? 'East' : 'West';
  const list = homes.filter(h => area === 'All areas' || areaOf(h) === area);
  const bname = id => (builders.find(b => b.id === id) || {}).name;
  const participating = builders.filter(b => homes.some(h => h.builder === b.id));
  return <div>
    <section style={{ background: 'var(--teal-500)', color: '#fff' }}>
      <Wrap><div style={{ padding: '14px 0 0', font: '400 13px var(--font-sans)', color: 'rgba(255,255,255,.8)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <a href="#" onClick={e => { e.preventDefault(); go('hba'); }} style={{ color: '#fff' }}>{hba.name}</a><Icon name="chevron-right" size={14} /><span>Parade of Homes</span></div></Wrap>
      <Wrap style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.2fr) minmax(0,1fr)', gap: m ? 24 : 48, padding: m ? '24px 20px 40px' : '40px 32px 64px', alignItems: 'end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SEyebrow align="start" size="sm" tone="inverse">{hba.name} presents</SEyebrow>
          <h1 style={{ margin: 0, font: `500 ${m ? 40 : 64}px/1.02 var(--font-sans)`, letterSpacing: '-0.025em' }}>Parade of Homes</h1>
          <p style={{ margin: 0, font: '400 17px/1.6 var(--font-sans)', color: 'rgba(255,255,255,.9)', maxWidth: 520 }}>{parade.homes} new homes. {parade.builders} member builders. {parade.days} days across the metro. Register free to plan your route, rate every home you tour and keep your favorites after the Parade.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
            <SB size="lg" variant="ink" iconLeft={<Icon name="ticket" size={18} />} onClick={() => setTix(true)}>Get tickets · {parade.price}</SB>
            <SB size="lg" variant="secondary" style={{ borderColor: '#fff' }} onClick={() => requireUser(() => notify('You\'re registered. Start saving homes.'))}>{user ? 'You\'re registered' : 'Register free'}</SB>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.2)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          {[['calendar-days', 'Dates', parade.dates], ['clock', 'Hours', parade.hours], ['ticket', 'Tickets', parade.price + ' online, all homes'], ['map-pinned', 'Homes', parade.homes + ' across 8 counties']].map(([i, l, v]) => <div key={l} style={{ background: 'var(--teal-600)', padding: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Icon name={i} size={18} color="var(--teal-100)" />
            <div style={{ font: '400 12px var(--font-sans)', color: 'rgba(255,255,255,.75)' }}>{l}</div>
            <div style={{ font: '500 15px/1.35 var(--font-sans)' }}>{v}</div>
          </div>)}
        </div>
      </Wrap>
    </section>

    <div style={{ background: 'var(--gold-50)', borderBottom: '1px solid var(--gold-100)' }}>
      <Wrap style={{ display: 'flex', flexDirection: m ? 'column' : 'row', alignItems: m ? 'flex-start' : 'center', gap: 12, padding: m ? '14px 20px' : '14px 32px' }}>
        <Icon name="gift" size={20} color="var(--gold-700)" />
        <span style={{ flex: 1, font: '500 14px/1.4 var(--font-sans)', color: 'var(--gold-900)' }}>{parade.giveaway}. Registered visitors are entered every day they check in.</span>
        <SB size="sm" variant="ink" onClick={() => requireUser(() => notify('You\'re entered in today\'s giveaway.'))}>{user ? 'Entered today' : 'Enter the giveaway'}</SB>
      </Wrap>
    </div>

    <section style={{ padding: m ? '40px 0' : '64px 0' }}>
      <Wrap>
        <SectionHead eyebrow="Parade map" title="Plan your route" sub="Tap a number to see the home, the builder and the products inside." />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>{areas.map(a => <STag key={a} selected={area === a} onClick={() => setArea(a)}>{a}</STag>)}</div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.6fr) minmax(0,1fr)', gap: 20 }}>
          <LeafletMap points={list.map(h => ({ kind: 'home', no: h.no, lat: h.lat, lng: h.lng, name: `#${h.no} ${h.name}`, sub: `${bname(h.builder)} · ${h.city}`, id: h.id }))} height={m ? 300 : 440} center={[39.7, -104.95]} zoom={9} onPick={p => openHome(p.id)} />
          <SCard padding={0} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: m ? 'none' : 440 }}>
            <div style={{ overflowY: 'auto' }}>
              {list.map(h => <button key={h.id} type="button" onClick={() => openHome(h.id)} style={{ display: 'flex', gap: 12, alignItems: 'center', width: '100%', padding: '12px 16px', border: 0, borderBottom: '1px solid var(--border-subtle)', background: '#fff', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ width: 28, height: 28, flex: 'none', borderRadius: '50%', background: 'var(--teal-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 12px var(--font-sans)' }}>{h.no}</span>
                <Img src={h.img} style={{ width: 56, height: 42, borderRadius: 6, flex: 'none' }} />
                <span style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', font: '500 14px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>{h.name}</span><span style={{ display: 'block', font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>{bname(h.builder)} · {h.city}</span></span>
                {saved.homes.has(h.id) && <Icon name="heart" size={16} color="var(--teal-500)" style={{ fill: 'var(--teal-500)' }} />}
              </button>)}
            </div>
          </SCard>
        </div>
      </Wrap>
    </section>

    <section style={{ padding: m ? '0 0 40px' : '0 0 64px' }}>
      <Wrap>
        <SectionHead eyebrow="Parade homes" title="Tour the homes" />
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))', gap: 20 }}>
          {list.map(h => <SListing key={h.id} image={h.img} status={'#' + h.no + ' · ' + h.status} price={h.price} beds={h.beds} baths={h.baths} sqft={h.sqft} name={h.name} community={h.hood} location={bname(h.builder)} saved={saved.homes.has(h.id)} onSave={() => toggleSave('homes', h.id)} onClick={() => openHome(h.id)} />)}
        </div>
      </Wrap>
    </section>

    <section style={{ background: 'var(--surface-sunken)', padding: m ? '40px 0' : '64px 0' }}>
      <Wrap>
        <SectionHead eyebrow="Participating builders" title={`${parade.builders} member builders`} />
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))', gap: 14 }}>
          {participating.map(b => <SCard key={b.id} interactive padding={16} onClick={() => go('builder', { id: b.id })}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <Img src={b.img} style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', flex: 'none' }} />
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ font: '600 15px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>{b.name}</div><div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>{homes.filter(h => h.builder === b.id).length} Parade home · {b.city}</div></div>
              <Icon name="badge-check" size={18} color="var(--gold-700)" />
            </div>
          </SCard>)}
        </div>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ font: '500 11px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Parade sponsors</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>{sponsorTiers.flatMap(t => t.names).map(n => <div key={n} style={{ height: 52, padding: '0 18px', display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', font: '600 13px var(--font-sans)', color: 'var(--ink-700)' }}>{n}</div>)}</div>
          <div style={{ font: '400 13px var(--font-sans)', color: 'var(--text-muted)' }}>Questions? {parade.contact}</div>
        </div>
      </Wrap>
    </section>

    <SDialog open={tix} title="Parade of Homes tickets" onClose={() => setTix(false)} width={440}
      footer={<><SB variant="ghost" onClick={() => setTix(false)}>Cancel</SB><SB onClick={() => { setTix(false); notify('Tickets sent to your email. See you at the Parade.'); }}>Buy tickets</SB></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <p style={{ margin: 0 }}>One ticket covers every home, every open day. Sold by {hba.name}.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <SSelect label="Adult tickets · $12" options={['1', '2', '3', '4']} defaultValue="2" />
          <SSelect label="Kids under 12" options={['Free', '1', '2', '3']} defaultValue="Free" />
        </div>
        <SInput label="Email for tickets" placeholder="you@example.com" defaultValue={user ? user.email : ''} />
      </div>
    </SDialog>
  </div>;
}

Object.assign(window, { ShowcasePage });
