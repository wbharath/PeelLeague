export const league = {
  name: 'Super Peel League',
  short: 'SPL',
  tagline: 'The premier cricket league of Peel Region, Ontario',
  season: '2027',
  seasonStart: '2027-05-15T10:00:00-04:00',
  email: 'info@superpeelleague.ca',
  phone: '+1 (905) 555-0142',
  location: 'Brampton · Mississauga · Caledon',
  registerUrl: '#contact',
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
  },
}

export const stats = [
  { value: '14+', label: 'Teams' },
  { value: '150+', label: 'Players' },
  { value: '60+', label: 'Matches / Season' },
  { value: '5', label: 'Grounds' },
]

// All teams across SPL seasons — combined Peel Region roster
export const teams = [
  // SPL Season 8
  { name: 'Black Caps CC',        short: 'BCC', color: '#111827' },
  { name: 'Stallions',            short: 'STL', color: '#dc2626' },
  { name: 'Mississauga Royals',   short: 'MRY', color: '#7c3aed' },
  { name: 'City View Royals',     short: 'CVR', color: '#1d4ed8' },
  { name: 'Toronto Stallions',    short: 'TST', color: '#059669' },
  { name: 'Brampton Eagles',      short: 'BEA', color: '#d97706' },
  { name: 'Gujarat Smashers',     short: 'GJS', color: '#0891b2' },
  // SPL Season 7
  { name: 'Brampton Sharks',      short: 'BSH', color: '#374151' },
  { name: 'Derry Cricket Club',   short: 'DCC', color: '#b45309' },
  { name: 'Rising Knights',       short: 'RKN', color: '#6d28d9' },
  { name: 'United South',         short: 'UNS', color: '#065f46' },
  { name: 'Sauga Warriors XI',    short: 'SWX', color: '#be123c' },
  { name: 'Kaipulla CC',          short: 'KCC', color: '#0369a1' },
  { name: 'GSC Warriors',         short: 'GSC', color: '#ca8a04' },
  { name: 'Telugu Titans',        short: 'TTN', color: '#4f46e5' },
  { name: 'Brampton Blaze',       short: 'BBZ', color: '#db2777' },
  { name: 'MG Boys',              short: 'MGB', color: '#16a34a' },
  { name: 'NovaStars',            short: 'NST', color: '#9333ea' },
  { name: 'Legion XI',            short: 'LGX', color: '#64748b' },
]

// SPL Season 8 knockout results (for ticker)
export const results = [
  { date: '2026-10-06', stage: 'SPL S8 Final',  home: 'CVR', homeScore: '101/2 (13.2)',  away: 'BCC', awayScore: '100/9 (14.0)',  result: 'City View Royals won by 8 wickets' },
  { date: '2026-10-03', stage: 'SPL S8 SF2',    home: 'CVR', homeScore: '186/2 (13.2)',  away: 'STL', awayScore: '184/7 (15.0)',  result: 'City View Royals won by 8 wickets' },
  { date: '2026-10-02', stage: 'SPL S8 SF1',    home: 'BCC', homeScore: '152/10 (14.2)', away: 'MRY', awayScore: '99/10 (13.5)', result: 'Black Caps CC won by 53 runs' },
]

// SPL Season 8 — League Stage standings
export const standings = [
  { team: 'BCC', p: 6, w: 5, l: 1, nr: 0, nrr: '+3.893' },
  { team: 'STL', p: 6, w: 4, l: 2, nr: 0, nrr: '+0.403' },
  { team: 'MRY', p: 6, w: 4, l: 2, nr: 0, nrr: '-0.257' },
  { team: 'CVR', p: 6, w: 3, l: 3, nr: 0, nrr: '-0.029' },
  { team: 'TST', p: 6, w: 3, l: 3, nr: 0, nrr: '-1.779' },
  { team: 'BEA', p: 6, w: 1, l: 5, nr: 0, nrr: '-2.024' },
  { team: 'GJS', p: 6, w: 1, l: 5, nr: 0, nrr: '-3.048' },
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

// Season award winners — no player photos, text-only display
export const awards = [
  // SPL Season 8
  { season: 'SPL Season 8 · 2026', award: 'Player of the Tournament', player: 'Gaggi Mand',       team: 'Black Caps CC' },
  { season: 'SPL Season 8 · 2026', award: 'Best Batter',              player: 'Gaggi Mand',       team: 'Black Caps CC' },
  { season: 'SPL Season 8 · 2026', award: 'Best Bowler',              player: 'Raviraj Shelke',   team: 'Mississauga Royals' },
  { season: 'SPL Season 8 · 2026', award: 'Best Fielder',             player: 'Jashandeep Singh', team: 'Black Caps CC' },
  // SPL Season 7
  { season: 'SPL Season 7 · 2026', award: 'Player of the Tournament', player: 'Pathik Tadvi',     team: 'Rising Knights' },
  { season: 'SPL Season 7 · 2026', award: 'Best Batter',              player: 'Pathik Tadvi',     team: 'Rising Knights' },
  { season: 'SPL Season 7 · 2026', award: 'Best Bowler',              player: 'Abdul',            team: 'Derry Cricket Club' },
  { season: 'SPL Season 7 · 2026', award: 'Best Fielder',             player: 'Vamsi Vasireddy',  team: 'Derry Cricket Club' },
]

export const champions = [
  // SPL Seasons
  { season: 'SPL Season 8', league: 'Super Peel League',   champion: 'City View Royals',      runnerUp: 'Black Caps CC',       src: g('6') },
  { season: 'SPL Season 7', league: 'Super Peel League',   champion: 'Derry Cricket Club',    runnerUp: '—',                   src: g('8') },
  { season: 'SPL Season 4', league: 'Super Peel League',   champion: 'Stallions CC',          runnerUp: '—',                   src: g('11') },
  // PCL Seasons
  { season: 'PCL Season 2', league: 'Peel Cricket League', champion: 'Swarajya CC',           runnerUp: 'Haryana Hurricanes',  src: g('wa1') },
  { season: 'PCL-1 Hard Ball', league: 'Peel Cricket League', champion: 'Telugu Titans',      runnerUp: 'Cosmic CC',           src: g('4') },
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
