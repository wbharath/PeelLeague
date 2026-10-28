export const league = {
  name: 'Super Peel League',
  short: 'SPL',
  tagline: 'The premier cricket league of Peel Region, Greater Toronto Area, Ontario',
  season: '2027',
  seasonStart: '2027-05-03T10:00:00-04:00',
  seasonOpening: 'May 3rd, 2027',
  email: 'stallionscricclub@gmail.com',
  phones: ['+1 (647) 572-1976', '+1 (647) 936-8940', '+1 (647) 609-8341'],
  location: 'Brampton · Mississauga · GTA',
  registerUrl: '#contact',
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
  },
}

export const stats = [
  { value: '70+',   label: 'Teams' },
  { value: '1050+', label: 'Players' },
  { value: '150+',  label: 'Matches / Season' },
  { value: '10+',   label: 'Grounds' },
]

// All Peel Region clubs — SPL and PCL combined
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
  // PCL Season 2
  { name: 'Swarajya CC',          short: 'SCC', color: '#166534' },
  { name: 'Haryana Hurricanes',   short: 'HHU', color: '#c2410c' },
  { name: 'Knight Watchmen',      short: 'KNW', color: '#1e40af' },
  { name: 'WI Sports Toronto',    short: 'WST', color: '#0c4a6e' },
  { name: 'Toronto Galacticos',   short: 'TGA', color: '#134e4a' },
  { name: 'Cosmic Sports Club',   short: 'CSC', color: '#581c87' },
  { name: 'GTA Capital Warriors', short: 'GCW', color: '#991b1b' },
  { name: 'Thunder Strikers',     short: 'THS', color: '#92400e' },
  { name: 'Accenture CC',         short: 'ACC', color: '#1e3a5f' },
  { name: 'WI Sports Brampton',   short: 'WSB', color: '#7f1d1d' },
  // PCL 2025
  { name: 'Supernovas CC',        short: 'SPC', color: '#f59e0b' },
]

// PCL Season 2 — League Stage standings (10 pts/win, 5 pts/tie or NR)
export const standingsPCL2 = [
  { team: 'SCC', p: 7, w: 6, l: 1, nr: 0, nrr: '+2.053', pts: 60 },
  { team: 'HHU', p: 7, w: 5, l: 2, nr: 0, nrr: '+1.725', pts: 50 },
  { team: 'KNW', p: 7, w: 5, l: 2, nr: 0, nrr: '+0.421', pts: 50 },
  { team: 'WST', p: 7, w: 4, l: 2, nr: 1, nrr: '+0.186', pts: 45 },
  { team: 'TGA', p: 7, w: 4, l: 3, nr: 0, nrr: '-0.428', pts: 40 },
  { team: 'CSC', p: 7, w: 2, l: 3, nr: 2, nrr: '-0.056', pts: 30 },
  { team: 'GCW', p: 7, w: 2, l: 4, nr: 1, nrr: '+0.527', pts: 25 },
  { team: 'THS', p: 7, w: 2, l: 4, nr: 1, nrr: '-0.869', pts: 25 },
  { team: 'TTN', p: 7, w: 0, l: 4, nr: 3, nrr: '-1.228', pts: 15 },
  { team: 'ACC', p: 7, w: 1, l: 6, nr: 0, nrr: '-2.756', pts: 10 },
]

// SPL Season 8 — League Stage standings (2 pts/win)
export const standings = [
  { team: 'BCC', p: 6, w: 5, l: 1, nr: 0, nrr: '+3.893', pts: 10 },
  { team: 'STL', p: 6, w: 4, l: 2, nr: 0, nrr: '+0.403', pts:  8 },
  { team: 'MRY', p: 6, w: 4, l: 2, nr: 0, nrr: '-0.257', pts:  8 },
  { team: 'CVR', p: 6, w: 3, l: 3, nr: 0, nrr: '-0.029', pts:  6 },
  { team: 'TST', p: 6, w: 3, l: 3, nr: 0, nrr: '-1.779', pts:  6 },
  { team: 'BEA', p: 6, w: 1, l: 5, nr: 0, nrr: '-2.024', pts:  2 },
  { team: 'GJS', p: 6, w: 1, l: 5, nr: 0, nrr: '-3.048', pts:  2 },
]

// Knockout results for the live ticker (PCL first, then SPL)
export const results = [
  { date: '2026-10-01', stage: 'PCL S2 Final', league: 'pcl', home: 'SCC', homeScore: '175/6 (20.0)',  away: 'HHU', awayScore: '113/10 (18.1)', result: 'Swarajya CC won by 62 runs' },
  { date: '2026-09-29', stage: 'PCL S2 SF',    league: 'pcl', home: 'HHU', homeScore: '207/5 (20.0)',  away: 'KNW', awayScore: '189/7 (20.0)',  result: 'Haryana Hurricanes won by 18 runs' },
  { date: '2026-09-29', stage: 'PCL S2 SF',    league: 'pcl', home: 'SCC', homeScore: '225/9 (20.0)',  away: 'WSB', awayScore: '216/10 (19.3)', result: 'Swarajya CC won by 9 runs' },
  { date: '2026-10-06', stage: 'SPL S8 Final', league: 'spl', home: 'CVR', homeScore: '101/2 (13.2)',  away: 'BCC', awayScore: '100/9 (14.0)',  result: 'City View Royals won by 8 wickets' },
  { date: '2026-10-03', stage: 'SPL S8 SF',    league: 'spl', home: 'CVR', homeScore: '186/2 (13.2)',  away: 'STL', awayScore: '184/7 (15.0)',  result: 'City View Royals won by 8 wickets' },
  { date: '2026-10-02', stage: 'SPL S8 SF',    league: 'spl', home: 'BCC', homeScore: '152/10 (14.2)', away: 'MRY', awayScore: '99/10 (13.5)',  result: 'Black Caps CC won by 53 runs' },
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

// Season award winners — PCL first, then SPL
export const awards = [
  // Special standalone award (with photo)
  { season: 'League Award',         award: 'Best Batsman of the League', player: 'Addy',               team: '—',                    src: '/gallery/30.jpeg' },
  // PCL Season 2 (2026)
  { season: 'PCL Season 2 · 2026', award: 'Player of the Tournament',   player: 'Ishan Khanna',       team: 'WI Sports Brampton' },
  { season: 'PCL Season 2 · 2026', award: 'Best Batter',                player: 'Gurpreet Singh',     team: 'Haryana Hurricanes' },
  { season: 'PCL Season 2 · 2026', award: 'Best Bowler',                player: 'Akhil Kumar',        team: 'WI Sports Brampton' },
  { season: 'PCL Season 2 · 2026', award: 'Best Fielder',               player: 'Mohdeep Singh',      team: 'WI Sports Brampton' },
  // PCL 2025
  { season: 'PCL 2025',            award: 'Orange Cap (Most Runs)',     player: 'Rohan Patel',        team: 'Supernovas CC' },
  { season: 'PCL 2025',            award: 'Purple Cap (Most Wickets)',  player: 'Deepan Chennimalai', team: 'KNIGHT Watchmen' },
  { season: 'PCL 2025',            award: 'Most 4s in Tournament',      player: 'Rohan Patel',        team: 'Supernovas CC' },
  { season: 'PCL 2025',            award: 'Most 6s in Tournament',      player: 'Rohan Patel',        team: 'Supernovas CC' },
  { season: 'PCL 2025',            award: 'Most Catches',               player: 'Snehal Thakur',      team: 'Supernovas CC' },
  { season: 'PCL 2025',            award: 'Most Dots Bowled',           player: 'Tapan',              team: 'Supernovas CC' },
  // SPL Season 8 (2026)
  { season: 'SPL Season 8 · 2026', award: 'Player of the Tournament',   player: 'Gaggi Mand',         team: 'Black Caps CC' },
  { season: 'SPL Season 8 · 2026', award: 'Best Batter',                player: 'Gaggi Mand',         team: 'Black Caps CC' },
  { season: 'SPL Season 8 · 2026', award: 'Best Bowler',                player: 'Raviraj Shelke',     team: 'Mississauga Royals' },
  { season: 'SPL Season 8 · 2026', award: 'Best Fielder',               player: 'Jashandeep Singh',   team: 'Black Caps CC' },
  // SPL Season 7 (2026)
  { season: 'SPL Season 7 · 2026', award: 'Player of the Tournament',   player: 'Pathik Tadvi',       team: 'Rising Knights' },
  { season: 'SPL Season 7 · 2026', award: 'Best Batter',                player: 'Pathik Tadvi',       team: 'Rising Knights' },
  { season: 'SPL Season 7 · 2026', award: 'Best Bowler',                player: 'Abdul',              team: 'Derry Cricket Club' },
  { season: 'SPL Season 7 · 2026', award: 'Best Fielder',               player: 'Vamsi Vasireddy',    team: 'Derry Cricket Club' },
]

export const champions = [
  // PCL Seasons (Hard Ball)
  { season: 'PCL Season 2 · Hard Ball', league: 'Peel Cricket League', champion: 'Swarajya CC',      runnerUp: 'Haryana Hurricanes', src: g('wa1') },
  { season: 'PCL Season 1 · Hard Ball', league: 'Peel Cricket League', champion: 'Telugu Titans',    runnerUp: 'Cosmic CC',          src: g('4') },
  // SPL Seasons (Tennis Ball)
  { season: 'SPL Season 8 · Tennis Ball', league: 'Super Peel League', champion: 'City View Royals', runnerUp: 'Black Caps CC',      src: g('6') },
  { season: 'SPL Season 7 · Tennis Ball', league: 'Super Peel League', champion: 'Derry Cricket Club', runnerUp: '—',               src: g('8') },
]

export const runnersUp = [
  { season: 'PCL Season 2 · Hard Ball',   league: 'Peel Cricket League', team: 'Haryana Hurricanes', src: g('ru3') },
  { season: 'PCL Season 1 · Hard Ball',   league: 'Peel Cricket League', team: 'Cosmic CC',          src: g('ru1') },
  { season: 'SPL Season 8 · Tennis Ball', league: 'Super Peel League',   team: 'Black Caps CC',      src: g('ru4') },
  { season: 'SPL Season 7 · Tennis Ball', league: 'Super Peel League',   team: 'Brampton Sharks',    src: g('ru2') },
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
