const { Button: PB, Badge: PBadge, Tabs: PTabs, Tag: PTag, Input: PInput, Card: PCard, Eyebrow: PEyebrow, IconButton: PIconButton } = window.HoodleDesignSystem_ee4a2a;

function EoBar() {
  const { m } = useView(); const { eo } = HBA_DATA;
  return <div style={{ background: 'var(--ink-900)', color: '#fff' }}>
    <Wrap style={{ padding: m ? '16px 20px' : '14px 32px', display: 'flex', flexWrap: 'wrap', flexDirection: m ? 'column' : 'row', columnGap: 32, rowGap: 12, alignItems: m ? 'flex-start' : 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: m ? 'none' : '1 1 420px', minWidth: 0 }}>
        <Icon name="sparkles" size={18} color="var(--gold-500)" />
        <span style={{ font: '500 14px/1.4 var(--font-sans)' }}>Your page is built and live. <span style={{ color: 'rgba(255,255,255,.7)', fontWeight: 400 }}>Pre-filled from public data. Claim it to edit.</span></span>
      </div>
      <div style={{ display: 'flex', columnGap: m ? 20 : 28, rowGap: 8, flex: m ? 'none' : '1 1 auto', flexWrap: 'wrap', order: m ? 0 : 3, width: m ? 'auto' : '100%' }}>
        {[[eo.visits, 'buyer visits'], [eo.leads, 'leads sent to members'], [eo.registrations, 'Parade registrations'], [eo.nonMembers, 'builders not yet members']].map(([v, l]) => <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 6, whiteSpace: 'nowrap' }}><span style={{ font: '600 16px var(--font-sans)', color: 'var(--teal-200)' }}>{v}</span><span style={{ font: '400 12px var(--font-sans)', color: 'rgba(255,255,255,.7)' }}>{l}</span></div>)}
      </div>
      <PB size="sm" variant="primary">Claim this page</PB>
    </Wrap>
  </div>;
}

function Hero({ go, scrollToId }) {
  const { m } = useView(); const { hba, HERO, parade } = HBA_DATA;
  return <section style={{ padding: m ? '28px 0 40px' : '56px 0 72px' }}>
    <Wrap style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.05fr) minmax(0,1fr)', gap: m ? 28 : 56, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '400 10px/1.2 var(--font-sans)', color: 'var(--ink-400)', textAlign: 'center', padding: 6, boxSizing: 'border-box' }}>HBA logo</div>
          <PEyebrow align="start" size="sm" tone="brand" rules={false}>Official member directory</PEyebrow>
        </div>
        <h1 style={{ margin: 0, font: `500 ${m ? 36 : 54}px/1.08 var(--font-sans)`, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>{hba.name}</h1>
        <p style={{ margin: 0, font: `400 ${m ? 17 : 19}px/1.6 var(--font-sans)`, color: 'var(--text-body)', maxWidth: 520, textWrap: 'pretty' }}>{hba.value}</p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-muted)', maxWidth: 520 }}><Icon name="map-pin" size={16} style={{ marginTop: 2 }} />{hba.territory}</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <PB size="lg" onClick={() => scrollToId('members')} iconLeft={<Icon name="search" />}>Find a member builder</PB>
          <PB size="lg" variant="secondary" onClick={() => scrollToId('join')}>Join the HBA</PB>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,auto)', gap: m ? 18 : 36, paddingTop: 22, borderTop: '1px solid var(--border-subtle)', justifyContent: 'start' }}>
          <Stat value={hba.members} label="member companies" /><Stat value={hba.builders} label="builders & developers" /><Stat value={hba.counties} label="metro counties" /><Stat value={hba.since} label="serving since" />
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <Img src={HERO} alt="New homes under construction" style={{ width: '100%', aspectRatio: m ? '4 / 3' : '5 / 6', borderRadius: 'var(--radius-xl)' }} />
        <button type="button" onClick={() => go('showcase')} style={{ position: 'absolute', left: m ? 12 : -28, bottom: m ? 12 : 32, right: m ? 12 : 'auto', display: 'flex', alignItems: 'center', gap: 14, padding: 14, paddingRight: 18, background: '#fff', border: 0, borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--teal-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="ticket" size={22} /></span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ font: '600 15px var(--font-sans)', color: 'var(--text-strong)' }}>{parade.name} · {parade.dates}</span>
            <span style={{ font: '400 13px var(--font-sans)', color: 'var(--text-muted)' }}>{parade.homes} homes · tickets {parade.price} online</span>
          </span>
          <Icon name="arrow-right" size={18} color="var(--teal-600)" style={{ marginLeft: 6 }} />
        </button>
      </div>
    </Wrap>
  </section>;
}

function SubNav({ scrollToId }) {
  const { m } = useView();
  const items = [['members', 'Members'], ['parade', 'Parade of Homes'], ['map', 'Market map'], ['join', 'Join'], ['events', 'Events & news'], ['sponsors', 'Sponsors']];
  return <div style={{ position: 'sticky', top: m ? 60 : 72, zIndex: 15, background: 'rgba(255,255,255,.96)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
    <Wrap style={{ display: 'flex', gap: m ? 20 : 32, overflowX: 'auto', height: 48, alignItems: 'center' }}>
      {items.map(([id, l]) => <a key={id} href={'#' + id} onClick={e => { e.preventDefault(); scrollToId(id); }} style={{ font: '500 14px var(--font-sans)', color: 'var(--ink-700)', whiteSpace: 'nowrap', textDecoration: 'none' }}>{l}</a>)}
    </Wrap>
  </div>;
}

function BuilderTile({ b, onOpen, saved, onSave }) {
  const [h, setH] = React.useState(false);
  return <article onClick={onOpen} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: '#fff', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)', boxShadow: h ? 'var(--shadow-card-hover)' : 'var(--shadow-card)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow var(--duration-base) var(--ease-standard)', display: 'flex', flexDirection: 'column' }}>
    <div style={{ position: 'relative' }}>
      <Img src={b.img} alt={b.name} style={{ width: '100%', aspectRatio: '16 / 10' }} />
      <div style={{ position: 'absolute', top: 10, right: 10 }} onClick={e => e.stopPropagation()}>
        <PIconButton label={saved ? 'Saved' : 'Save builder'} variant="overlay" size="sm" active={saved} onClick={onSave} icon={<Icon name="heart" size={16} style={saved ? { fill: 'var(--teal-500)' } : null} />} />
      </div>
      {b.elite && <PBadge tone="ink" style={{ position: 'absolute', top: 12, left: 12 }}>Hoodle Elite</PBadge>}
    </div>
    <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
      <div style={{ font: '600 16px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>{b.name}</div>
      <div style={{ font: '400 13px var(--font-sans)', color: 'var(--text-muted)' }}>{b.type} · {b.city}</div>
      <div style={{ font: '400 13px var(--font-sans)', color: 'var(--text-body)' }}>{b.neighborhoods} neighborhoods · {b.homes} homes · from <b style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{b.from}</b></div>
      <div style={{ marginTop: 'auto', paddingTop: 8 }}><HbaBadge size="sm" /></div>
    </div>
  </article>;
}

function Members({ go, saved, toggleSave }) {
  const { m } = useView(); const { builders, associates, hba } = HBA_DATA;
  const [tab, setTab] = React.useState('b'); const [f, setF] = React.useState('All'); const [q, setQ] = React.useState('');
  const types = ['All', 'Production builder', 'Semi-custom', 'Custom builder', 'Townhomes & paired'];
  const list = builders.filter(b => (f === 'All' || b.type === f) && (!q || (b.name + b.city).toLowerCase().includes(q.toLowerCase())));
  return <section style={{ padding: m ? '48px 0' : '80px 0' }}>
    <Wrap>
      <SectionHead id="members" eyebrow="Member directory" title="Build with a member of the HBA" sub="Every member builder has a full Hoodle page: their neighborhoods, available homes, floor plans and reviews. Look for the member badge." />
      <PTabs tabs={[{ value: 'b', label: 'Builders & developers', count: hba.builders }, { value: 'a', label: 'Associate members', count: hba.associates }]} value={tab} onChange={setTab} />
      {tab === 'b' ? <>
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 12, alignItems: m ? 'stretch' : 'center', margin: '20px 0 24px' }}>
          <PInput iconLeft={<Icon name="search" size={16} />} placeholder="Search builders or cities" value={q} onChange={e => setQ(e.target.value)} style={{ width: m ? '100%' : 280 }} />
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>{types.map(t => <PTag key={t} selected={f === t} onClick={() => setF(t)}>{t === 'All' ? 'All types' : t}</PTag>)}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(4,minmax(0,1fr))', gap: 20 }}>
          {list.map(b => <BuilderTile key={b.id} b={b} saved={saved.builders.has(b.id)} onSave={() => toggleSave('builders', b.id)} onOpen={() => go('builder', { id: b.id })} />)}
        </div>
        {list.length === 0 && <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)', font: '400 14px var(--font-sans)' }}>No member builders match that search.</div>}
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}><PB variant="secondary" iconRight={<Icon name="arrow-right" size={16} />}>See all {hba.builders} member builders</PB></div>
      </> : <>
        <p style={{ font: '400 15px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '20px 0 24px', maxWidth: 640 }}>Product and service companies that supply the Front Range's builders. Full company pages are coming to Hoodle.</p>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,minmax(0,1fr))', gap: 14 }}>
          {associates.map(a => <PCard key={a.name} padding={16} interactive>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--ink-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, color: 'var(--ink-500)' }}><Icon name="building-2" size={18} /></div>
            <div style={{ font: '600 14px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>{a.name}</div>
            <div style={{ font: '400 12px/1.4 var(--font-sans)', color: 'var(--text-muted)', marginTop: 2 }}>{a.cat}</div>
          </PCard>)}
        </div>
      </>}
    </Wrap>
  </section>;
}

function ParadeBand({ go, requireUser }) {
  const { m } = useView(); const { parade, homes } = HBA_DATA;
  return <section id="parade" style={{ background: 'var(--teal-500)', color: '#fff', padding: m ? '48px 0' : '80px 0' }}>
    <Wrap style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.1fr)', gap: m ? 32 : 64, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <PEyebrow align="start" size="sm" tone="inverse">HBA of Metro Denver presents</PEyebrow>
        <h2 style={{ margin: 0, font: `500 ${m ? 34 : 48}px/1.08 var(--font-sans)`, letterSpacing: '-0.02em' }}>Parade of Homes</h2>
        <p style={{ margin: 0, font: '400 17px/1.6 var(--font-sans)', color: 'rgba(255,255,255,.88)', maxWidth: 460 }}>{parade.homes} new homes from {parade.builders} member builders, open across the metro for {parade.days} days. Plan your route, save your favorites and pick up where you left off after the Parade ends.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,auto)', gap: m ? 18 : 36, justifyContent: 'start', padding: '6px 0' }}>
          <Stat inverse value={parade.dates} label="dates" /><Stat inverse value="12–5" label="Thu–Sun" /><Stat inverse value={parade.price} label="online tickets" />
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <PB size="lg" variant="ink" onClick={() => go('showcase')} iconRight={<Icon name="arrow-right" size={18} />}>Explore the Parade</PB>
          <PB size="lg" variant="secondary" onClick={() => requireUser(() => go('account'))} style={{ borderColor: '#fff' }}>Register free</PB>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: '1fr 1fr', gap: 12, height: m ? 280 : 420 }}>
        <Img src={homes[0].img} style={{ gridRow: '1 / 3', width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />
        <Img src={homes[2].img} style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />
        <Img src={homes[4].img} style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-lg)' }} />
      </div>
    </Wrap>
  </section>;
}

function KeepGoing({ requireUser, go }) {
  const { m } = useView();
  const steps = [['heart', 'Save homes & builders', 'Keep a shortlist across every Parade home and neighborhood.'], ['notebook-pen', 'Rate & take notes', 'Mark the homes you loved most and least, with private notes.'], ['message-circle', 'Stay in touch with the builder', 'Your conversation with the builder carries on after the event.']];
  return <section style={{ background: 'var(--surface-sunken)', padding: m ? '40px 0' : '56px 0' }}>
    <Wrap style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,.9fr) minmax(0,2fr)', gap: 32, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ margin: 0, font: '500 24px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>Don't lose the homes you love.</h3>
        <PB onClick={() => requireUser(() => go('account'))} style={{ width: 'fit-content' }}>Create a free Hoodle account</PB>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: 20 }}>
        {steps.map(([i, t, d]) => <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ width: 40, height: 40, flex: 'none', borderRadius: 'var(--radius-md)', background: '#fff', color: 'var(--teal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-xs)' }}><Icon name={i} size={19} /></span>
          <div><div style={{ font: '600 14px/1.4 var(--font-sans)', color: 'var(--text-strong)' }}>{t}</div><div style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-muted)', marginTop: 2 }}>{d}</div></div>
        </div>)}
      </div>
    </Wrap>
  </section>;
}

Object.assign(window, { EoBar, Hero, SubNav, BuilderTile, Members, ParadeBand, KeepGoing });
