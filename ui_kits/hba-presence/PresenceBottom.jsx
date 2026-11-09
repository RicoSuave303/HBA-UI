const { Button: QB, Badge: QBadge, Tag: QTag, Card: QCard, Tabs: QTabs, Eyebrow: QEyebrow } = window.HoodleDesignSystem_ee4a2a;

function MarketMapSection({ go }) {
  const { m, viewAs } = useView(); const { builders, nonMembers, extraMembers } = HBA_DATA;
  const eo = viewAs === 'eo';
  const [f, setF] = React.useState('all'); const [invited, setInvited] = React.useState(new Set());
  const members = [...builders.map(b => ({ ...b, sub: `${b.type} · ${b.city}` })), ...extraMembers.map(b => ({ ...b, sub: b.city }))];
  const pts = [
    ...(f !== 'non' ? members.map(b => ({ kind: 'member', lat: b.lat, lng: b.lng, name: b.name, sub: 'Member · ' + b.sub, id: b.id })) : []),
    ...(f !== 'mem' ? nonMembers.map(b => ({ kind: 'non', hl: eo, lat: b.lat, lng: b.lng, name: b.name, sub: 'Not yet a member · ' + b.city })) : [])
  ];
  const total = members.length + nonMembers.length;
  return <section style={{ padding: m ? '48px 0' : '80px 0' }}>
    <Wrap>
      <SectionHead id="map" eyebrow="Market map" title={eo ? 'Every builder in your territory, member or not' : 'Every new-home builder in the metro'}
        sub={eo ? `Hoodle tracks ${total} active builders and developers across your 8 counties. ${nonMembers.length} aren't members yet.` : 'See who is building near you. Member builders carry the HBA badge on their Hoodle page.'} />
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.8fr) minmax(0,1fr)', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <QTag selected={f === 'all'} onClick={() => setF('all')}>All builders · {total}</QTag>
            <QTag selected={f === 'mem'} onClick={() => setF('mem')}>Members · {members.length}</QTag>
            <QTag selected={f === 'non'} onClick={() => setF('non')}>Not yet members · {nonMembers.length}</QTag>
          </div>
          <LeafletMap points={pts} height={m ? 320 : 460} onPick={p => p.id && go('builder', { id: p.id })} />
          <div style={{ display: 'flex', gap: 20, font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--teal-500)', border: '2px solid #fff', boxShadow: '0 0 0 1px var(--ink-200)' }}></span>HBA member</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff', border: `2px ${eo ? 'solid var(--gold-500)' : 'dashed var(--ink-500)'}` }}></span>Not yet a member</span>
          </div>
        </div>
        <QCard padding={0} style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', maxHeight: m ? 'none' : 520 }}>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border-subtle)', font: '600 14px var(--font-sans)', color: 'var(--text-strong)' }}>{eo ? 'Recruit: builders not yet members' : 'Member builders'}</div>
          <div style={{ overflowY: 'auto' }}>
            {(eo ? nonMembers : builders).map(b => <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', flex: 'none', background: eo ? '#fff' : 'var(--teal-500)', border: eo ? '2px solid var(--gold-500)' : 0 }}></span>
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ font: '500 14px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>{b.name}</div><div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>{b.city}{b.type ? ' · ' + b.type : ''}</div></div>
              {eo ? <QB size="sm" variant={invited.has(b.name) ? 'ghost' : 'secondary'} disabled={invited.has(b.name)} onClick={() => setInvited(s => new Set(s).add(b.name))}>{invited.has(b.name) ? 'Invited' : 'Invite'}</QB>
                : <QB size="sm" variant="ghost" onClick={() => go('builder', { id: b.id })}>View</QB>}
            </div>)}
          </div>
        </QCard>
      </div>
    </Wrap>
  </section>;
}

function Join() {
  const { m } = useView();
  const [track, setTrack] = React.useState('b');
  const lead = track === 'b'
    ? [['users-round', 'Buyer leads, not just meetings', 'Buyers find your homes on Hoodle and contact you directly. No ad spend.'], ['store', 'A full Hoodle storefront', 'Neighborhoods, floor plans, photos, video tours and reviews, set up for you.'], ['badge-check', 'A badge that travels', 'Your HBA membership shows on every Hoodle page buyers and REALTORS see.']]
    : [['megaphone', 'Reach every member builder', 'Put your products in front of the 118 builders and developers in the HBA.'], ['sparkles', 'Featured in Parade homes', 'Buyers save the products they see in Parade homes, and you see which ones.'], ['badge-check', 'A badge that travels', 'Your HBA membership shows on your Hoodle company page.']];
  const also = ['Advocacy on codes, fees and permits', 'Networking and councils', 'Education and NAHB member rebates'];
  return <section id="join" style={{ background: 'var(--ink-900)', color: '#fff', padding: m ? '48px 0' : '88px 0' }}>
    <Wrap>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.6fr)', gap: m ? 28 : 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <QEyebrow align="start" size="sm" tone="inverse">Join the HBA</QEyebrow>
          <h2 style={{ margin: 0, font: `500 ${m ? 30 : 42}px/1.12 var(--font-sans)`, letterSpacing: '-0.02em' }}>Membership that helps you sell more homes.</h2>
          <p style={{ margin: 0, font: '400 16px/1.6 var(--font-sans)', color: 'rgba(255,255,255,.75)' }}>Local, state and national membership in one. Hoodle is included for every member.</p>
          <div style={{ display: 'flex', gap: 6, background: 'rgba(255,255,255,.08)', padding: 4, borderRadius: 'var(--radius-md)', width: 'fit-content' }}>
            {[['b', 'Builders & developers'], ['a', 'Associate members']].map(([v, l]) => <button key={v} type="button" onClick={() => setTrack(v)} style={{ height: 34, padding: '0 14px', border: 0, borderRadius: 6, background: track === v ? '#fff' : 'transparent', color: track === v ? 'var(--ink-900)' : 'rgba(255,255,255,.8)', font: '500 13px var(--font-sans)', cursor: 'pointer' }}>{l}</button>)}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}><QB size="lg">Apply to join</QB><QB size="lg" variant="ghost" style={{ color: '#fff' }}>Talk to membership</QB></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {lead.map(([i, t, d]) => <div key={t} style={{ display: 'flex', gap: 18, padding: 22, borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)' }}>
            <span style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--teal-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={i} size={20} /></span>
            <div><div style={{ font: '500 17px/1.3 var(--font-sans)' }}>{t}</div><div style={{ font: '400 14px/1.55 var(--font-sans)', color: 'rgba(255,255,255,.72)', marginTop: 4 }}>{d}</div></div>
          </div>)}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: m ? 10 : 24, paddingTop: 8 }}>
            <span style={{ font: '500 13px var(--font-sans)', color: 'var(--gold-300)' }}>Plus</span>
            {also.map(a => <span key={a} style={{ display: 'flex', alignItems: 'center', gap: 6, font: '400 13px var(--font-sans)', color: 'rgba(255,255,255,.8)' }}><Icon name="check" size={15} color="var(--teal-300)" />{a}</span>)}
          </div>
        </div>
      </div>
    </Wrap>
  </section>;
}

function Advocacy() {
  const { m } = useView(); const { advocacy } = HBA_DATA;
  return <section style={{ padding: m ? '48px 0' : '72px 0', borderBottom: '1px solid var(--border-subtle)' }}>
    <Wrap style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,2fr)', gap: 32, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <QEyebrow align="start" size="sm">Advocacy</QEyebrow>
        <h3 style={{ margin: 0, font: '500 24px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>The voice of Front Range builders</h3>
        <a href="#" onClick={e => e.preventDefault()} style={{ font: '500 14px var(--font-sans)' }}>Read the advocacy report →</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: 24 }}>
        {advocacy.map(a => <div key={a.label} style={{ borderTop: '2px solid var(--gold-500)', paddingTop: 16 }}>
          <div style={{ font: '500 36px/1 var(--font-sans)', color: 'var(--teal-600)', letterSpacing: '-0.02em' }}>{a.stat}</div>
          <div style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-body)', marginTop: 10 }}>{a.label}</div>
        </div>)}
      </div>
    </Wrap>
  </section>;
}

function EventsNews() {
  const { m } = useView(); const { events, news } = HBA_DATA;
  return <section style={{ padding: m ? '48px 0' : '80px 0' }}>
    <Wrap>
      <SectionHead id="events" eyebrow="Events & news" title="What's happening" />
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1.5fr) minmax(0,1fr)', gap: m ? 32 : 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {events.map(e => <div key={e.title} style={{ display: 'flex', gap: 18, alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ width: 60, flex: 'none', textAlign: 'center' }}><div style={{ font: '500 11px var(--font-sans)', letterSpacing: '.12em', color: 'var(--teal-600)' }}>{e.date.split(' ')[0]}</div><div style={{ font: '500 26px/1.1 var(--font-sans)', color: 'var(--text-strong)' }}>{e.date.split(' ')[1]}</div></div>
            <div style={{ flex: 1 }}><div style={{ font: '500 15px/1.35 var(--font-sans)', color: 'var(--text-strong)' }}>{e.title}</div><div style={{ font: '400 13px var(--font-sans)', color: 'var(--text-muted)', marginTop: 2 }}>{e.where}</div></div>
            {!m && <QBadge tone="neutral">{e.tag}</QBadge>}
          </div>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {news.map(n => <a key={n.title} href="#" onClick={e => e.preventDefault()} style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none' }}>
            <div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>{n.date}</div>
            <div style={{ font: '500 15px/1.4 var(--font-sans)', color: 'var(--text-strong)', marginTop: 2 }}>{n.title}</div>
          </a>)}
        </div>
      </div>
    </Wrap>
  </section>;
}

function Sponsors() {
  const { m } = useView(); const { sponsorTiers } = HBA_DATA;
  return <section id="sponsors" style={{ background: 'var(--surface-sunken)', padding: m ? '48px 0' : '72px 0' }}>
    <Wrap>
      <div style={{ textAlign: 'center', marginBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <QEyebrow size="sm">Our partners</QEyebrow>
        <h3 style={{ margin: 0, font: '500 24px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>Thank you to our sponsors</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {sponsorTiers.map((t, ti) => <div key={t.tier} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ font: '500 11px var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{t.tier}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            {t.names.map(n => <div key={n} style={{ width: m ? 150 : [260, 200, 170][ti], height: [96, 76, 64][ti], background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, padding: 10, boxSizing: 'border-box', textAlign: 'center' }}>
              <span style={{ font: `600 ${[16, 14, 13][ti]}px/1.25 var(--font-sans)`, color: 'var(--ink-700)' }}>{n}</span>
              <span style={{ font: '400 10px var(--font-sans)', color: 'var(--ink-400)' }}>logo</span>
            </div>)}
          </div>
        </div>)}
      </div>
    </Wrap>
  </section>;
}

function ComingSoon() {
  const { m } = useView();
  const items = [['graduation-cap', 'Education & CE', 'Courses and continuing-education credits'], ['briefcase', 'Jobs board', 'Open roles with member companies'], ['trophy', 'Awards', 'Parade winners and annual awards']];
  return <section style={{ padding: m ? '40px 0 56px' : '64px 0 88px' }}>
    <Wrap>
      <div style={{ font: '500 13px var(--font-sans)', color: 'var(--text-muted)', marginBottom: 14 }}>Coming to this page</div>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: 14 }}>
        {items.map(([i, t, d]) => <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 18, borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-strong)' }}>
          <span style={{ color: 'var(--ink-400)' }}><Icon name={i} size={22} /></span>
          <div><div style={{ font: '500 14px var(--font-sans)', color: 'var(--ink-700)' }}>{t}</div><div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>{d}</div></div>
        </div>)}
      </div>
    </Wrap>
  </section>;
}

function PresencePage(p) {
  const { viewAs } = useView();
  return <>
    {viewAs === 'eo' && <EoBar />}
    <Hero {...p} />
    <SubNav scrollToId={p.scrollToId} />
    <Members {...p} />
    <ParadeBand {...p} />
    <KeepGoing {...p} />
    <MarketMapSection {...p} />
    <Join />
    <Advocacy />
    <EventsNews />
    <Sponsors />
    <ComingSoon />
  </>;
}

Object.assign(window, { PresencePage });
