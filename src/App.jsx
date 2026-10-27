import { useEffect, useMemo, useState } from 'react'
import { league, stats, teams, results, standings, standingsPCL2, gallery, sponsors, champions, awards } from './data'

const teamBy = Object.fromEntries(teams.map((t) => [t.short, t]))

function CricketBall({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      {/* base ball */}
      <circle cx="20" cy="20" r="18" fill="#CC1100" />
      {/* highlight */}
      <ellipse cx="14" cy="13" rx="5" ry="4" fill="#DD3322" opacity="0.6" />
      {/* vertical seam line left */}
      <path d="M15 4 C11 10 11 30 15 36" stroke="white" strokeWidth="1.4" fill="none" />
      {/* vertical seam line right */}
      <path d="M25 4 C29 10 29 30 25 36" stroke="white" strokeWidth="1.4" fill="none" />
      {/* dashed stitches left seam */}
      <line x1="13" y1="9"  x2="16" y2="9"  stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="12" y1="13" x2="15" y2="13" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="12" y1="17" x2="15" y2="17" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="12" y1="21" x2="15" y2="21" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="12" y1="25" x2="15" y2="25" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="13" y1="29" x2="16" y2="29" stroke="white" strokeWidth="1" strokeLinecap="round" />
      {/* dashed stitches right seam */}
      <line x1="24" y1="9"  x2="27" y2="9"  stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="13" x2="28" y2="13" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="17" x2="28" y2="17" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="21" x2="28" y2="21" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="25" y1="25" x2="28" y2="25" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="24" y1="29" x2="27" y2="29" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function TennisBall({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <circle cx="10" cy="10" r="9" fill="#5BBF00" />
      <path d="M4 6.5 Q10 10 4 13.5" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <path d="M16 6.5 Q10 10 16 13.5" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </svg>
  )
}

const NAV = [
  ['about', 'About'],
  ['standings', 'Standings'],
  ['teams', 'Teams'],
  ['champions', 'Champions'],
  ['awards', 'Awards'],
  ['gallery', 'Gallery'],
  ['contact', 'Contact'],
]

function Logo({ size = 44 }) {
  return (
    <img src="/logo.png" alt="Super Peel League" width={size} height={size} style={{ objectFit: 'contain' }} />
  )
}

function TeamBadge({ code, size = 'md' }) {
  const t = teamBy[code]
  return (
    <span className={`badge badge-${size}`} style={{ background: t.color }} title={t.name}>
      {t.short}
    </span>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Logo />
          <span className="brand-name">Super <span className="gold">Peel</span> League</span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={league.registerUrl} className="btn btn-gold nav-cta" onClick={() => setOpen(false)}>
            Register
          </a>
        </nav>
        <button className={`burger ${open ? 'open' : ''}`} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = Math.max(0, new Date(target).getTime() - now)
  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor(diff / 36e5) % 24,
    mins: Math.floor(diff / 6e4) % 60,
    secs: Math.floor(diff / 1e3) % 60,
  }
}

function Hero() {
  const c = useCountdown(league.seasonStart)
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Season {league.season} · Opens {league.seasonOpening}</span>
          <div className="league-tags">
            <span className="league-tag"><CricketBall size={14} /> PCL</span>
            <span className="league-tag"><TennisBall size={14} /> SPL</span>
          </div>
          <p className="lead">{league.tagline}. Multiple Teams. One Goal. All summer long.</p>
          <div className="hero-actions">
            <a href="#standings" className="btn btn-gold">View Standings</a>
            <a href={league.registerUrl} className="btn btn-ghost">Register a Team</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-label">Season {league.season} starts in</div>
          <div className="countdown">
            {[['Days', c.days], ['Hrs', c.hours], ['Min', c.mins], ['Sec', c.secs]].map(([l, v]) => (
              <div key={l}>
                <b>{String(v).padStart(2, '0')}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
          <div className="hero-card-label">Opening Day</div>
          <div className="champ-hero">
            <span>📅</span>
            <div>
              <strong>{league.seasonOpening}</strong>
              <small><CricketBall size={14} /> PCL Hard Ball &nbsp;·&nbsp; <TennisBall size={14} /> SPL Tennis Ball</small>
            </div>
          </div>
        </div>
      </div>
      <div className="ticker">
        <div className="ticker-track">
          {[...results, ...results].map((r, i) => (
            <span key={i}>
              <b className={r.league === 'pcl' ? 'pcl' : ''}>{r.stage}</b> {teamBy[r.home].short} {r.homeScore} v {teamBy[r.away].short} {r.awayScore} — {r.result}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHead({ kicker, title, children }) {
  return (
    <div className="section-head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div>
          <SectionHead kicker="About the league" title="Cricket, Peel style" />
          <p>
            The Super Peel League brings together the best club cricketers from Brampton, Mississauga and GTA in a
            fast-paced cricket format. Founded by local players for local players, it is about competitive cricket,
            community and growing the game across Peel Region.
          </p>
          <p>
            Matches run every weekday from May to September, wrapping up with semi-finals and a Finals Day under the
            lights.
          </p>
          <div className="about-champs">
            {champions.map((c) => (
              <div key={c.season} className="about-champ-chip">
                <span className="about-champ-ball">
                  {c.league === 'Peel Cricket League' ? <CricketBall size={16} /> : <TennisBall size={16} />}
                </span>
                <div>
                  <small>{c.season}</small>
                  <strong>🏆 {c.champion}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const STANDING_TABLES = [
  { id: 'pcl2', label: 'PCL Season 2', kicker: <><CricketBall size={13} />{' '}Peel Cricket League — Hard Ball</>, data: standingsPCL2 },
  { id: 'spl8', label: 'SPL Season 8', kicker: <><TennisBall size={13} />{' '}Super Peel League — Tennis Ball</>, data: standings },
]

function Standings() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STANDING_TABLES.length), 5000)
    return () => clearInterval(id)
  }, [])

  const cur = STANDING_TABLES[active]
  const rows = [...cur.data].sort((a, b) => b.pts - a.pts || parseFloat(b.nrr) - parseFloat(a.nrr))

  return (
    <section className="section" id="standings">
      <div className="container">
        <div className="standings-top">
          <SectionHead kicker={cur.kicker} title="Points Table">Top four qualify for the semi-finals.</SectionHead>
          <div className="standings-toggle">
            {STANDING_TABLES.map((t, i) => (
              <button key={t.id} className={active === i ? 'active' : ''} onClick={() => setActive(i)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr><th>#</th><th className="left">Team</th><th>P</th><th>W</th><th>L</th><th>NR</th><th>NRR</th><th>Pts</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.team} className={i < 4 ? 'q' : ''}>
                  <td>{i + 1}</td>
                  <td className="left team-cell"><TeamBadge code={r.team} size="sm" />{teamBy[r.team].name}</td>
                  <td>{r.p}</td><td>{r.w}</td><td>{r.l}</td><td>{r.nr}</td>
                  <td className={r.nrr.startsWith('+') ? 'pos' : 'neg'}>{r.nrr}</td>
                  <td><b>{r.pts}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Teams() {
  return (
    <section className="section section-dark" id="teams">
      <div className="container">
        <SectionHead kicker="Peel Region Cricket" title="League Teams" />
        <div className="team-grid">
          {teams.map((t) => (
            <article key={t.short} className="team-card" style={{ '--team': t.color }}>
              <div className="team-crest">{t.short}</div>
              <h3>{t.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HallOfChampions() {
  const spl = champions.filter((c) => c.league === 'Super Peel League')
  const pcl = champions.filter((c) => c.league === 'Peel Cricket League')
  return (
    <section className="section section-alt" id="champions">
      <div className="container">
        <SectionHead kicker="Hall of Champions" title="Season Winners">
          A record of every champion and runner-up across all SPL and PCL seasons.
        </SectionHead>
        <div className="champ-leagues">
          {[
            { key: 'pcl', title: <><CricketBall size={16} /> Peel Cricket League (PCL) — Hard Ball</>, rows: pcl },
            { key: 'spl', title: <><TennisBall size={16} /> Super Peel League (SPL) — Tennis Ball</>, rows: spl },
          ].map(({ key, title, rows }) => (
            <div key={key} className="champ-league-block">
              <h3 className="champ-league-title">{title}</h3>
              <div className="champ-grid">
                {rows.map((c) => (
                  <article key={c.season} className="champ-card">
                    <div className="champ-img-wrap">
                      <img src={c.src} alt={c.season} loading="lazy" />
                      <span className="champ-badge">🏆</span>
                    </div>
                    <div className="champ-info">
                      <span className="champ-season">{c.season}</span>
                      <strong className="champ-name">{c.champion}</strong>
                      {c.runnerUp !== '—' && (
                        <span className="champ-runner">Runners-Up: {c.runnerUp}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function awardIcon(award) {
  if (award.includes('Batter') || award.includes('Batsman') || award.includes('Runs') || award.includes('4s') || award.includes('6s')) return '🏏'
  if (award.includes('Bowler') || award.includes('Wickets') || award.includes('Dots')) return '⚡'
  if (award.includes('Fielder') || award.includes('Catches') || award.includes('catch')) return '🧤'
  return '🏅'
}

function AwardCard({ a }) {
  return (
    <article className={`award-card${a.src ? ' award-card-photo' : ''}`}>
      {a.src ? (
        <div className="award-img-wrap">
          <img src={a.src} alt={a.player} loading="lazy" />
        </div>
      ) : (
        <div className="award-icon">{awardIcon(a.award)}</div>
      )}
      <div className="award-ribbon">{a.award}</div>
      <span className="award-season">{a.season}</span>
      <strong className="award-player">{a.player}</strong>
      {a.team !== '—' && <span className="award-team">{a.team}</span>}
    </article>
  )
}

function SeasonAwards() {
  const featured = awards.filter((a) => a.src)
  const pclAwards = awards.filter((a) => !a.src && a.season.startsWith('PCL'))
  const splAwards = awards.filter((a) => !a.src && a.season.startsWith('SPL'))
  return (
    <section className="section section-dark" id="awards">
      <div className="container">
        <SectionHead kicker="Individual Honours" title="Season Awards" />
        {/* Top row: Addy + PCL Awards side by side */}
        <div className="awards-layout">
          <div className="awards-featured-col">
            {featured.map((a) => <AwardCard key={`${a.season}-${a.award}`} a={a} />)}
          </div>
          <div className="awards-group">
            <h3 className="awards-group-title"><CricketBall size={15} /> PCL Awards — Hard Ball</h3>
            <div className="awards-rest-grid">
              {pclAwards.map((a) => <AwardCard key={`${a.season}-${a.award}`} a={a} />)}
            </div>
          </div>
        </div>
        {/* SPL Awards full width below */}
        <div className="awards-spl-section">
          <h3 className="awards-group-title"><TennisBall size={15} /> SPL Awards — Tennis Ball</h3>
          <div className="awards-spl-grid">
            {splAwards.map((a) => <AwardCard key={`${a.season}-${a.award}`} a={a} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const cats = ['All', ...new Set(gallery.map((g) => g.category))]
  const [cat, setCat] = useState('All')
  const [idx, setIdx] = useState(null)
  const items = useMemo(() => (cat === 'All' ? gallery : gallery.filter((g) => g.category === cat)), [cat])

  useEffect(() => {
    if (idx === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setIdx(null)
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [idx, items.length])

  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionHead kicker="Moments" title="Gallery" />
        <div className="chips">
          {cats.map((c) => (
            <button key={c} className={c === cat ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="gallery">
          {items.map((g, i) => (
            <button
              key={g.src}
              className={`tile ${cat === 'All' && g.tall ? 'tall' : ''} ${cat === 'All' && g.wide ? 'wide' : ''}`}
              onClick={() => setIdx(i)}
            >
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span className="tile-cap">{g.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div className="lightbox" onClick={() => setIdx(null)}>
          <button className="lb-close" aria-label="Close">×</button>
          <button className="lb-nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + items.length) % items.length) }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={items[idx].src} alt={items[idx].caption} />
            <figcaption>{items[idx].caption} <span>{idx + 1} / {items.length}</span></figcaption>
          </figure>
          <button className="lb-nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % items.length) }}>›</button>
        </div>
      )}
    </section>
  )
}

function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Proudly supported by</span>
          <h2>Our <span className="gold">Sponsors</span></h2>
          <p>Thank you to our partners who make the Super Peel League possible.</p>
        </div>
        <div className="sponsor-cards">
          {sponsors.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="sponsor-card">
              <img src={s.logo} alt={s.name} />
              <div className="sponsor-card-body">
                <strong>{s.name}</strong>
                <span>{s.tagline}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `Name: ${f.get('name')}\nTeam: ${f.get('team')}\nPhone: ${f.get('phone')}\n\n${f.get('message')}`
    window.location.href = `mailto:${league.email}?subject=${encodeURIComponent('SPL enquiry: ' + f.get('type'))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <section className="section section-alt" id="contact">
      <div className="container contact">
        <div>
          <SectionHead kicker="Get involved" title="Play, Sponsor or Volunteer" />
          <p>Registrations for Season {league.season} are open. Whether you want to enter a team, join as a player, or partner with the league — we'd love to hear from you.</p>
          <ul className="contact-list">
            <li><span>✉</span><a href={`mailto:${league.email}`}>{league.email}</a></li>
            {league.phones.map((p) => (
              <li key={p}><span>☎</span><a href={`tel:${p.replace(/[^\d+]/g, '')}`}>{p}</a></li>
            ))}
            <li><span>📍</span>{league.location}, Ontario</li>
          </ul>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="row">
            <label>Name<input name="name" required /></label>
            <label>Phone<input name="phone" type="tel" /></label>
          </div>
          <label>I'm interested in
            <select name="type">
              <option>Registering a team</option>
              <option>Joining as a player</option>
              <option>Sponsorship</option>
              <option>Volunteering</option>
              <option>Something else</option>
            </select>
          </label>
          <label>Team / Club (optional)<input name="team" /></label>
          <label>Message<textarea name="message" rows="4" required /></label>
          <button className="btn btn-gold" type="submit">{sent ? 'Opening your email app…' : 'Send Enquiry'}</button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand"><Logo size={36} /><span className="brand-name">Super <span className="gold">Peel</span> League</span></div>
        <nav>{NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <div className="socials">
          {Object.entries(league.socials).map(([k, url]) => (
            <a key={k} href={url} target="_blank" rel="noreferrer">{k}</a>
          ))}
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} {league.name}. Peel Region, Ontario.</div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Standings />
        <Teams />
        <HallOfChampions />
        <SeasonAwards />
        <Gallery />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
