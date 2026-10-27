// All site content lives here. Edit this file to update teams, fixtures,
// standings, photos and contact details — no need to touch the components.
// Everything below is PLACEHOLDER content; replace it with real league data.

export const league = {
  name: 'Super Peel League',
  short: 'SPL',
  tagline: 'The premier cricket league of Peel Region, Ontario',
  season: '2027',
  seasonStart: '2027-05-15T10:00:00-04:00', // drives the countdown in the hero
  email: 'info@superpeelleague.ca',
  phone: '+1 (905) 555-0142',
  location: 'Brampton · Mississauga · Caledon',
  registerUrl: '#contact', // swap for a Google Form / registration link
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
  },
}

export const stats = [
  { value: '8', label: 'Teams' },
  { value: '120+', label: 'Players' },
  { value: '56', label: 'Matches / Season' },
  { value: '5', label: 'Grounds' },
]

export const teams = [
  { name: 'Brampton Blasters', short: 'BRB', city: 'Brampton', captain: 'A. Singh', color: '#e63946' },
  { name: 'Mississauga Mavericks', short: 'MSM', city: 'Mississauga', captain: 'R. Patel', color: '#1d8bf1' },
  { name: 'Caledon Chargers', short: 'CLC', city: 'Caledon', captain: 'J. Thomas', color: '#16a34a' },
  { name: 'Malton Monarchs', short: 'MLM', city: 'Malton', captain: 'S. Khan', color: '#9333ea' },
  { name: 'Port Credit Pirates', short: 'PCP', city: 'Mississauga', captain: 'D. Fernando', color: '#111827' },
  { name: 'Streetsville Strikers', short: 'STS', city: 'Mississauga', captain: 'V. Reddy', color: '#f97316' },
  { name: 'Bolton Bulls', short: 'BOB', city: 'Caledon', captain: 'M. Ali', color: '#b45309' },
  { name: 'Springdale Spartans', short: 'SPS', city: 'Brampton', captain: 'K. Gill', color: '#0d9488' },
]

export const fixtures = [
  { date: '2027-05-15', time: '10:00 AM', home: 'BRB', away: 'MSM', ground: 'Teramoto Park, Brampton' },
  { date: '2027-05-15', time: '2:30 PM', home: 'CLC', away: 'BOB', ground: 'Caledon East Cricket Ground' },
  { date: '2027-05-16', time: '10:00 AM', home: 'MLM', away: 'PCP', ground: 'Wildwood Park, Mississauga' },
  { date: '2027-05-16', time: '2:30 PM', home: 'STS', away: 'SPS', ground: 'Churchill Meadows, Mississauga' },
  { date: '2027-05-22', time: '10:00 AM', home: 'MSM', away: 'CLC', ground: 'Wildwood Park, Mississauga' },
  { date: '2027-05-22', time: '2:30 PM', home: 'BOB', away: 'BRB', ground: 'Teramoto Park, Brampton' },
]

export const results = [
  { date: '2026-09-13', stage: 'Final', home: 'BRB', homeScore: '178/6 (20)', away: 'MSM', awayScore: '171/8 (20)', result: 'Brampton Blasters won by 7 runs' },
  { date: '2026-09-06', stage: 'Semi-final 2', home: 'MSM', homeScore: '162/4 (18.2)', away: 'CLC', awayScore: '158/9 (20)', result: 'Mississauga Mavericks won by 6 wickets' },
  { date: '2026-09-05', stage: 'Semi-final 1', home: 'BRB', homeScore: '191/5 (20)', away: 'STS', awayScore: '149 (18.4)', result: 'Brampton Blasters won by 42 runs' },
]

// Final 2026 league-stage standings. NRR = net run rate.
export const standings = [
  { team: 'BRB', p: 14, w: 11, l: 3, nr: 0, nrr: '+1.284' },
  { team: 'MSM', p: 14, w: 10, l: 3, nr: 1, nrr: '+0.912' },
  { team: 'CLC', p: 14, w: 8, l: 5, nr: 1, nrr: '+0.341' },
  { team: 'STS', p: 14, w: 8, l: 6, nr: 0, nrr: '+0.118' },
  { team: 'MLM', p: 14, w: 6, l: 8, nr: 0, nrr: '-0.205' },
  { team: 'SPS', p: 14, w: 5, l: 8, nr: 1, nrr: '-0.430' },
  { team: 'PCP', p: 14, w: 4, l: 10, nr: 0, nrr: '-0.877' },
  { team: 'BOB', p: 14, w: 3, l: 11, nr: 0, nrr: '-1.163' },
]

const g = (n) => `/gallery/${n}.jpeg`
export const gallery = [
  // Champions — graphic posters
  { src: g('6'),   caption: 'SPL Season 8 Champions — City View Royals',         category: 'Champions', wide: true },
  { src: g('wa1'), caption: 'PCL Season 2 Champions — Swarajya CC',               category: 'Champions', wide: true },
  { src: g('4'),   caption: 'PCL-1 Champions — Telugu Titans (Hard Ball)',         category: 'Champions' },
  { src: g('11'),  caption: 'SPL Season 4 Champions — Stallions Cricket Club',     category: 'Champions' },
  // Runners-Up — graphic posters
  { src: g('7'),   caption: 'SPL Season 8 Runners-Up — Black Caps',               category: 'Runners-Up', wide: true },
  { src: g('2'),   caption: 'PCL Season 2 Runners-Up — Haryana Hurricanes',       category: 'Runners-Up', wide: true },
  { src: g('wa2'), caption: 'PCL-1 Runners-Up — Cosmic CC (Hard Ball)',           category: 'Runners-Up' },
  // Real team photos
  { src: g('8'),   caption: 'SPL Season 7 Champions — DCC Team',                  category: 'Teams', wide: true },
  { src: g('9'),   caption: 'Viking Royals — Trophy Presentation',                category: 'Teams' },
  { src: g('10'),  caption: 'City View Royals (CVR) — Team Photo',                category: 'Teams' },
  { src: g('15'),  caption: 'Brampton Sharks — Team Photo',                       category: 'Teams' },
  { src: g('16'),  caption: 'Champions lift the trophy',                          category: 'Teams', tall: true },
  { src: g('19'),  caption: 'Award winners with trophies & cups',                 category: 'Teams' },
  { src: g('25'),  caption: 'Squad celebration — medals & trophies',              category: 'Teams', wide: true },
  { src: g('27'),  caption: 'Team celebration — season medals',                   category: 'Teams' },
  { src: g('29'),  caption: 'Runners-Up — Group photo with trophy',               category: 'Teams' },
  // Trophies & Awards
  { src: g('35'),  caption: 'PCL 2026 Champions Trophy',                          category: 'Trophies', tall: true },
  { src: g('41'),  caption: 'PCL 2026 Runners-Up Trophy',                         category: 'Trophies', tall: true },
  { src: g('12'),  caption: 'Season trophies on display',                         category: 'Trophies' },
  { src: g('17'),  caption: 'SPL Season 6 Trophies',                              category: 'Trophies' },
  { src: g('34'),  caption: 'SPL Season 7 — Champions & Runners-Up Trophies',    category: 'Trophies' },
  { src: g('33'),  caption: 'Next generation — SPL Season 7 trophies',            category: 'Trophies' },
  { src: g('36'),  caption: 'PCL 2026 Champions Medals',                          category: 'Trophies' },
  { src: g('37'),  caption: 'PCL 2026 Runners-Up Medals & Awards',               category: 'Trophies' },
  { src: g('22'),  caption: 'SPL trophies ready for Finals Day',                  category: 'Trophies' },
  { src: g('26'),  caption: 'Trophies laid out on the pitch',                     category: 'Trophies' },
  // Match Day
  { src: g('20'),  caption: 'Finals Day — trophies and medals at the ground',     category: 'Match Day' },
  { src: g('21'),  caption: 'Ground setup with sponsor boards',                   category: 'Match Day' },
  { src: g('23'),  caption: 'Coin toss before the match',                         category: 'Match Day' },
  { src: g('18'),  caption: 'Individual award presentation',                      category: 'Match Day' },
  { src: g('28'),  caption: 'Trophy handover — organizer presents the cup',       category: 'Match Day' },
  { src: g('30'),  caption: 'Individual award winner',                            category: 'Match Day' },
  { src: g('32'),  caption: 'SPL Season 7 — Champions plaque presentation',       category: 'Match Day' },
  { src: g('38'),  caption: 'Organizers with trophy table at finals',             category: 'Match Day' },
  { src: g('39'),  caption: 'Finals Day setup at the ground',                     category: 'Match Day' },
  { src: g('40'),  caption: 'PCL Finals — trophies on display',                   category: 'Match Day' },
  { src: g('3'),   caption: 'PCL 2026 Weekday League — Awards & Recognitions',   category: 'Match Day' },
]

export const awards = [
  {
    season: 'SPL Season 7 · 2026',
    award: 'Best Batsman',
    player: 'TBC',
    team: '—',
    src: '/gallery/30.jpeg',
  },
]

export const champions = [
  // SPL Seasons
  { season: 'SPL Season 8', league: 'Super Peel League', champion: 'City View Royals',    runnerUp: 'Black Caps',          src: g('6') },
  { season: 'SPL Season 7', league: 'Super Peel League', champion: 'DCC',                 runnerUp: '—',                   src: g('8') },
  { season: 'SPL Season 4', league: 'Super Peel League', champion: 'Stallions Cricket Club', runnerUp: '—',                src: g('11') },
  // PCL Seasons
  { season: 'PCL Season 2', league: 'Peel Cricket League', champion: 'Swarajya CC',       runnerUp: 'Haryana Hurricanes',  src: g('wa1') },
  { season: 'PCL-1 Hard Ball', league: 'Peel Cricket League', champion: 'Telugu Titans',  runnerUp: 'Cosmic CC',           src: g('4') },
]

export const sponsors = [
  {
    name: 'Affinity Law',
    tagline: 'Barristers & Solicitors — Call 1-866-99-31-LAW',
    logo: '/sponsors/42.jpeg',
    url: '#contact',
  },
  {
    name: 'Dental Square',
    tagline: 'Complete Family & Cosmetic Dentistry — Brampton',
    logo: '/sponsors/43.jpeg',
    url: '#contact',
  },
  {
    name: 'Rejoice Physiocare',
    tagline: 'Physiotherapy in Mississauga — 905-507-0888',
    logo: '/sponsors/45.jpeg',
    url: '#contact',
  },
]
