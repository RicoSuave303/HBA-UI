const { Button: BB, Badge: BBadge, Tabs: BTabs, Card: BCard, ListingCard: BListing, Input: BInput, IconButton: BIconButton } = window.HoodleDesignSystem_ee4a2a;

function BuilderPage({ id, go, saved, toggleSave, openHome, notify }) {
  const { m } = useView(); const { builders, neighborhoods, homes, P, hba } = HBA_DATA;
  const b = builders.find(x => x.id === id) || builders[0];
  const [tab, setTab] = React.useState('n');
  const hoods = neighborhoods[b.id] || [{ name: b.city + ' Ranch', city: b.city, from: b.from, plans: 4, img: b.img }, { name: 'The Reserve', city: b.city, from: b.from, plans: 3, img: P[9] }];
  const paradeHomes = homes.filter(h => h.builder === b.id);
  const avail = [
    { id: b.id + 'a', name: 'The Aspen', price: b.from.replace('k', ',900').replace('$', '$'), beds: 3, baths: 2.5, sqft: 2140, img: P[10], hood: hoods[0].name },
    { id: b.id + 'b', name: 'The Blue Spruce', price: 'Priced from ' + b.from, beds: 4, baths: 3, sqft: 2690, img: P[11], hood: hoods[0].name },
    { id: b.id + 'c', name: 'The Columbine', price: 'Priced from ' + b.from, beds: 4, baths: 3.5, sqft: 3010, img: P[8], hood: hoods[1] ? hoods[1].name : hoods[0].name }
  ];
  const isSaved = saved.builders.has(b.id);
  return <div>
    <Wrap><Crumbs items={[{ label: hba.name, onClick: () => go('hba') }, { label: 'Members', onClick: () => go('hba', { anchor: 'members' }) }, { label: b.name }]} /></Wrap>
    <Wrap pad={!m}>
      <Img src={b.img} alt="" style={{ width: '100%', height: m ? 200 : 300, borderRadius: m ? 0 : 'var(--radius-xl)' }} />
    </Wrap>
    <Wrap>
      <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 16 : 24, alignItems: m ? 'flex-start' : 'flex-end', marginTop: m ? -36 : -44, position: 'relative' }}>
        <div style={{ width: m ? 76 : 104, height: m ? 76 : 104, borderRadius: 'var(--radius-lg)', background: '#fff', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '400 11px var(--font-sans)', color: 'var(--ink-400)', flex: 'none' }}>Builder logo</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 4 }}>
          <h1 style={{ margin: 0, font: `500 ${m ? 28 : 36}px/1.15 var(--font-sans)`, letterSpacing: '-0.015em', color: 'var(--text-strong)' }}>{b.name}</h1>
          <div style={{ font: '400 14px var(--font-sans)', color: 'var(--text-muted)' }}>{b.type} · {b.city}, CO · Building for {b.years} years</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <HbaBadge onClick={() => go('hba')} />
            {b.elite && <BBadge tone="ink" style={{ height: 34, padding: '0 12px' }}>Hoodle Elite™ Verified</BBadge>}
            <BBadge tone="neutral" style={{ height: 34, padding: '0 12px' }}>NAHB member</BBadge>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <BB variant="secondary" iconLeft={<Icon name="heart" size={16} style={isSaved ? { fill: 'var(--teal-500)' } : null} />} onClick={() => toggleSave('builders', b.id)}>{isSaved ? 'Saved' : 'Save'}</BB>
          <BB iconLeft={<Icon name="message-circle" size={16} />} onClick={() => notify('Message form opened below.')}>Contact builder</BB>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,auto)', gap: m ? 18 : 48, justifyContent: 'start', padding: '28px 0', borderBottom: '1px solid var(--border-subtle)', marginTop: 24 }}>
        <Stat value={b.neighborhoods} label="neighborhoods" /><Stat value={b.homes} label="available homes" /><Stat value={b.from} label="homes from" /><Stat value="4.8" label="rating · 126 reviews" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) 340px', gap: m ? 32 : 48, padding: m ? '28px 0 56px' : '36px 0 88px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, minWidth: 0 }}>
          {paradeHomes.length > 0 && <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 18, alignItems: m ? 'stretch' : 'center', padding: 18, borderRadius: 'var(--radius-lg)', background: 'var(--surface-brand-soft)' }}>
            <Img src={paradeHomes[0].img} style={{ width: m ? '100%' : 140, height: 96, borderRadius: 'var(--radius-md)' }} />
            <div style={{ flex: 1 }}>
              <div style={{ font: '500 12px var(--font-sans)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--teal-700)' }}>In the Parade of Homes</div>
              <div style={{ font: '600 17px/1.35 var(--font-sans)', color: 'var(--text-strong)', marginTop: 4 }}>#{paradeHomes[0].no} {paradeHomes[0].name} at {paradeHomes[0].hood}</div>
              <div style={{ font: '400 13px var(--font-sans)', color: 'var(--text-body)', marginTop: 2 }}>Open Thu–Sun, 12–5 PM through Aug 23</div>
            </div>
            <BB onClick={() => openHome(paradeHomes[0].id)}>View model home</BB>
          </div>}
          <BTabs tabs={[{ value: 'n', label: 'Neighborhoods', count: hoods.length }, { value: 'h', label: 'Available homes', count: b.homes }, { value: 'p', label: 'Floor plans' }, { value: 'r', label: 'Reviews' }]} value={tab} onChange={setTab} />
          {tab === 'n' && <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2,minmax(0,1fr))', gap: 20 }}>
            {hoods.map(h => <BCard key={h.name} padding={0} interactive style={{ overflow: 'hidden' }}>
              <Img src={h.img} style={{ width: '100%', aspectRatio: '16 / 9' }} />
              <div style={{ padding: '14px 16px 16px' }}>
                <div style={{ font: '600 16px var(--font-sans)', color: 'var(--text-strong)' }}>{h.name}</div>
                <div style={{ font: '400 13px var(--font-sans)', color: 'var(--text-muted)', marginTop: 2 }}>{h.city} · {h.plans} floor plans · from {h.from}</div>
              </div>
            </BCard>)}
          </div>}
          {tab === 'h' && <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))', gap: 20 }}>
            {[...paradeHomes, ...avail].map(h => <BListing key={h.id} image={h.img} price={h.price} beds={h.beds} baths={h.baths} sqft={h.sqft} name={h.name} community={h.hood} status={h.status} saved={saved.homes.has(h.id)} onSave={() => toggleSave('homes', h.id)} onClick={() => h.no && openHome(h.id)} />)}
          </div>}
          {(tab === 'p' || tab === 'r') && <div style={{ padding: 40, textAlign: 'center', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-lg)', font: '400 14px var(--font-sans)', color: 'var(--text-muted)' }}>Existing Hoodle builder-page section. Not recreated in this prototype.</div>}
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16, position: m ? 'static' : 'sticky', top: 96 }}>
          <ContactCard builder={b} notify={notify} />
          <BCard padding={18}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <Icon name="badge-check" size={22} color="var(--gold-700)" />
              <div>
                <div style={{ font: '600 14px/1.4 var(--font-sans)', color: 'var(--text-strong)' }}>Verified HBA member since 2004</div>
                <div style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-muted)', marginTop: 2 }}>{b.name} is a member of the HBA of Metro Denver, the Colorado Association of Home Builders and NAHB.</div>
                <a href="#" onClick={e => { e.preventDefault(); go('hba'); }} style={{ display: 'inline-block', marginTop: 8, font: '500 13px var(--font-sans)' }}>See all HBA members →</a>
              </div>
            </div>
          </BCard>
          <BCard padding={18}>
            <div style={{ font: '600 14px var(--font-sans)', color: 'var(--text-strong)', marginBottom: 12 }}>REALTORS who show these homes</div>
            {[['Dana Ruiz', 'Compass · Aurora'], ['Marcus Bell', 'eXp Realty · Denver']].map(([n, c]) => <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
              <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--ink-100)', color: 'var(--ink-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 13px var(--font-sans)' }}>{n.split(' ').map(s => s[0]).join('')}</span>
              <div style={{ flex: 1 }}><div style={{ font: '500 14px var(--font-sans)', color: 'var(--text-strong)' }}>{n}</div><div style={{ font: '400 12px var(--font-sans)', color: 'var(--text-muted)' }}>{c}</div></div>
            </div>)}
          </BCard>
        </aside>
      </div>
    </Wrap>
  </div>;
}

function ContactCard({ builder, notify }) {
  const [sent, setSent] = React.useState(false);
  return <BCard padding={20}>
    {sent ? <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
      <Icon name="circle-check" size={28} color="var(--success-500)" />
      <div style={{ font: '600 16px var(--font-sans)', color: 'var(--text-strong)' }}>Message sent</div>
      <div style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-muted)' }}>{builder.name} usually replies within a day. You'll find the conversation in My Hoodle.</div>
    </div> : <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ font: '600 16px var(--font-sans)', color: 'var(--text-strong)' }}>Contact {builder.name}</div>
      <BInput label="Name" placeholder="Your name" />
      <BInput label="Email" placeholder="you@example.com" />
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ font: '500 14px var(--font-sans)', color: 'var(--text-strong)' }}>Message</span>
        <textarea defaultValue={"I'm interested in your homes and would like to schedule a tour."} rows={3} style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-strong)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '10px 12px', resize: 'vertical', outline: 'none' }}></textarea>
      </label>
      <BB fullWidth onClick={() => { setSent(true); notify('Message sent to ' + builder.name + '.'); }}>Send message</BB>
    </div>}
  </BCard>;
}

Object.assign(window, { BuilderPage });
