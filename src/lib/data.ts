export const siteConfig = {
  name: 'Page Electrical',
  fullName: 'Page Electrical Services',
  tagline: 'Your Reliable Electrical Service Provider',
  description:
    'Reliable electrical services in Hampshire. Over 30 years of experience serving homeowners and businesses across Gosport, Portsmouth and Hampshire.',
  phone: '023 9359 3998',
  phoneHref: 'tel:02393593998',
  email: 'info@page-electrical.co.uk',
  emailHref: 'mailto:info@page-electrical.co.uk',
  serviceArea: 'Hampshire',
  cities: ['Gosport', 'Portsmouth', 'Fareham', 'Southampton', 'Havant', 'Hayling Island', 'Lee-on-Solent'],
  workingHours: 'Mon-Sat, 8:00am - 6:00pm',
  yearsExperience: '30+',
  facebook: 'https://www.facebook.com/profile.php?id=100090597909548',
  instagram: 'https://www.instagram.com/',
  googleReviewUrl:
    'https://www.google.com/search?q=page+electrical+installations&rlz=1C5GCEM_enGB1115GB1117&oq=page&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIKCAMQABixAxiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTIyNWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#lrd=0x487467a24b77b8c7:0x409c1c72965f5b16,3,,,,',
};

// Image library — every image we have available.
// Real Page Electrical job photos are organised under /images/raw-from-matt/[category]/.
export const imageLibrary = [
  // Hero candidates — premium quality
  '/images/raw-from-matt/hero/staircase-lighting-1.jpg',
  '/images/raw-from-matt/hero/luxury-kitchen.jpg',
  '/images/raw-from-matt/hero/commercial-ac-rooftop.jpg',
  '/images/raw-from-matt/hero/cyberster-showroom.jpg',
  '/images/raw-from-matt/hero/drone-solar-self-build.jpg',
  // Page Electrical brand
  '/images/raw-from-matt/page-electrical/van-multistorey.jpg',
  // Electrical
  '/images/raw-from-matt/electrical/consumer-unit-closeup.jpg',
  '/images/raw-from-matt/electrical/carpark-lighting.jpg',
  '/images/raw-from-matt/electrical/residential-exterior.jpg',
  // Air conditioning
  '/images/raw-from-matt/air-conditioning/f-gas-commissioning.jpg',
  '/images/raw-from-matt/air-conditioning/mitsubishi-indoor-pink-wall.jpg',
  '/images/raw-from-matt/air-conditioning/mitsubishi-outdoor-brick.jpg',
  '/images/raw-from-matt/air-conditioning/rooftop-commercial-skyline.jpg',
  '/images/raw-from-matt/air-conditioning/outdoor-with-isolator.jpg',
  '/images/raw-from-matt/air-conditioning/mitsubishi-controller.jpg',
  '/images/raw-from-matt/air-conditioning/bms-ae200-controller.jpg',
  '/images/raw-from-matt/air-conditioning/commercial-rooftop-alt.jpg',
  '/images/raw-from-matt/air-conditioning/multi-zone-outdoor.jpg',
  // EV chargers
  '/images/raw-from-matt/ev-chargers/brick-wall-charger.jpg',
  '/images/raw-from-matt/ev-chargers/brick-wall-charger-alt.jpg',
  // Solar
  '/images/raw-from-matt/solar/residential-roof-install.jpg',
  '/images/raw-from-matt/solar/drone-self-build-progress.jpg',
  // Building services
  '/images/raw-from-matt/building-services/framing-mid-build.jpg',
  '/images/raw-from-matt/building-services/finished-partition.jpg',
  '/images/raw-from-matt/building-services/chery-bognor-regis.jpg',
  '/images/raw-from-matt/building-services/cyberster-display.jpg',
  // Bathroom electrical
  '/images/raw-from-matt/bathroom-electrical/downlights-extractor.jpg',
  '/images/raw-from-matt/bathroom-electrical/led-mirror.jpg',
  '/images/raw-from-matt/bathroom-electrical/subway-tile-finished.jpg',
  '/images/raw-from-matt/bathroom-electrical/subway-tile-in-progress.jpg',
  '/images/raw-from-matt/bathroom-electrical/shower-pendant-install.jpg',
  // Lighting
  '/images/raw-from-matt/lighting/staircase-from-above.jpg',
  // Existing assets
  '/images/about-hero.jpg',
  '/images/about-team.jpg',
  '/images/matt-page.jpg',
] as const;

export const services = [
  {
    slug: 'electrical',
    title: 'Electrical',
    short: 'Installations, repairs and rewires for homes and businesses.',
    description:
      'Full electrical installations, fault-finding, rewires, fuseboard upgrades, inspections and certification. Domestic, commercial and industrial work across Hampshire.',
    icon: 'Zap',
    image: '/images/about-hero.jpg', // electrician fitting fuseboard — perfect electrical hero
    gallery: [
      '/images/about-hero.jpg',
      '/images/service-repairs.jpg', // consumer unit close-up
      '/images/service-installations.jpg', // garden up-lighting
      '/images/hero-2.jpg', // chandelier staircase
      '/images/raw-from-matt/bathroom-electrical/shower-pendant-install.jpg',
      '/images/raw-from-matt/bathroom-electrical/downlights-extractor.jpg',
    ],
  },
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    short: 'Supply, install and maintain AC units for homes and offices.',
    description:
      'Split-system and multi-split air conditioning installation, servicing and repair. Keep homes, shops and offices comfortable year-round.',
    icon: 'Snowflake',
    image: '/images/hero-1.jpg', // 3 Mitsubishi outdoor units (real Page work)
    gallery: [
      '/images/hero-1.jpg',
      '/images/raw-from-matt/air-conditioning/f-gas-commissioning.jpg',
      '/images/raw-from-matt/air-conditioning/mitsubishi-indoor-pink-wall.jpg',
      '/images/raw-from-matt/air-conditioning/mitsubishi-outdoor-brick.jpg',
      '/images/raw-from-matt/air-conditioning/rooftop-commercial-skyline.jpg',
      '/images/raw-from-matt/air-conditioning/multi-zone-outdoor.jpg',
      '/images/raw-from-matt/air-conditioning/bms-ae200-controller.jpg',
    ],
  },
  {
    slug: 'building',
    title: 'Building Services',
    short: 'Complete mechanical and electrical installations for new builds and refurbs.',
    description:
      'End-to-end M&E for extensions, refurbishments and light commercial fit-outs. Coordinated with other trades and delivered on programme.',
    icon: 'Building2',
    image: '/images/about-team.jpg', // wood-frame M&E in progress (real Page work)
    gallery: [
      '/images/about-team.jpg',
      '/images/faq-image.jpg', // wood frame ceiling
      '/images/raw-from-matt/hero/cyberster-showroom.jpg',
      '/images/raw-from-matt/building-services/finished-partition.jpg',
      '/images/raw-from-matt/building-services/chery-bognor-regis.jpg',
    ],
  },
  {
    slug: 'solar',
    title: 'Solar & Battery',
    short: 'Solar PV and battery storage installs to cut energy bills.',
    description:
      'Solar panel design and installation, battery storage, and grid-tied systems. Help home and business owners take control of rising energy costs.',
    icon: 'Sun',
    image: '/images/service-maintenance.jpg', // FOX solar inverter + FuseBox (real Page work)
    gallery: [
      '/images/service-maintenance.jpg',
      '/images/raw-from-matt/solar/residential-roof-install.jpg',
      '/images/raw-from-matt/hero/drone-solar-self-build.jpg',
      '/images/raw-from-matt/solar/drone-self-build-progress.jpg',
    ],
  },
  {
    slug: 'ev-chargers',
    title: 'EV Chargers',
    short: 'Domestic and commercial EV charge point installation.',
    description:
      'OZEV-approved EV charge point installation for homes and workplaces. Tidy cabling, fast turnaround and clear advice on the right charger for you.',
    icon: 'PlugZap',
    image: '/images/raw-from-matt/ev-chargers/brick-wall-charger.jpg', // 778KB high-res
    gallery: [
      '/images/raw-from-matt/ev-chargers/brick-wall-charger.jpg',
      '/images/raw-from-matt/ev-chargers/brick-wall-charger-alt.jpg',
    ],
  },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];

// Recent projects thumbnails — 6 pics for the homepage strip (all high-res originals)
export const recentProjects = [
  { src: '/images/service-repairs.jpg', label: 'Fuse board upgrade' },
  { src: '/images/raw-from-matt/air-conditioning/f-gas-commissioning.jpg', label: 'AC install' },
  { src: '/images/raw-from-matt/ev-chargers/brick-wall-charger.jpg', label: 'EV charger' },
  { src: '/images/about-team.jpg', label: 'Commercial M&E' },
  { src: '/images/service-maintenance.jpg', label: 'Solar PV + battery' },
  { src: '/images/hero-2.jpg', label: 'Lighting design' },
];

export const trustPoints = [
  { label: '30+ Years in Hampshire', icon: 'Award' },
  { label: 'Certified to BS 7671', icon: 'ShieldCheck' },
  { label: 'Local Family Business', icon: 'Home' },
  { label: '5.0 Google Rating', icon: 'Star' },
];

// Hampshire/Solent service towns — used by <HampshireCoverageMap />
// Each with rough SVG coordinates (viewBox 0 0 800 500) — approximate, not OS-accurate
export const serviceTowns = [
  { slug: 'gosport', name: 'Gosport', x: 375, y: 335, primary: true },
  { slug: 'fareham', name: 'Fareham', x: 395, y: 275, primary: true },
  { slug: 'portsmouth', name: 'Portsmouth', x: 455, y: 335, primary: true },
  { slug: 'southampton', name: 'Southampton', x: 245, y: 250, primary: true },
  { slug: 'havant', name: 'Havant', x: 545, y: 290, primary: false },
  { slug: 'hayling-island', name: 'Hayling Island', x: 555, y: 355, primary: false },
  { slug: 'lee-on-solent', name: 'Lee-on-Solent', x: 340, y: 360, primary: false },
  { slug: 'stubbington', name: 'Stubbington', x: 355, y: 305, primary: false },
  { slug: 'southsea', name: 'Southsea', x: 470, y: 370, primary: false },
];

// Before/after slider examples — homepage "Our Work" section.
// Empty until Matt provides true matched-angle pairs (same camera position, before vs after).
// The previous pairs were different angles of the same job — not true before/afters.
export const beforeAfterExamples: Array<{
  before: string;
  after: string;
  label: string;
  town: string;
}> = [];

// Recently completed jobs ticker — homepage strip
// TODO FROM MATT: Update monthly with real jobs — keep 6-10 entries, remove oldest first.
export const recentCompletions = [
  { service: 'EV charger install', town: 'Gosport', when: '2 days ago' },
  { service: 'Full rewire', town: 'Portsmouth', when: 'last week' },
  { service: 'AC service', town: 'Fareham', when: '3 days ago' },
  { service: 'Fuse board upgrade', town: 'Southampton', when: '5 days ago' },
  { service: 'EICR + remedials', town: 'Havant', when: 'last week' },
  { service: 'Commercial fit-out', town: 'Southsea', when: '2 weeks ago' },
  { service: 'Split AC install', town: 'Lee-on-Solent', when: '4 days ago' },
  { service: 'Emergency fault find', town: 'Stubbington', when: 'yesterday' },
];

// Certification badge registry — used by <CertificationStrip />
// Each badge is rendered as a commented-out placeholder until Matt confirms.
// When Matt confirms, un-set `pending` to false and swap in the real badge image.
export const certificationBadges = [
  { id: 'niceic', label: 'NICEIC Approved', pending: true, scope: 'all' },
  { id: 'part-p', label: 'Part P Registered', pending: true, scope: 'all' },
  { id: '18th-edition', label: '18th Edition Qualified', pending: true, scope: 'all' },
  { id: 'insurance', label: 'Public Liability Insured', pending: true, scope: 'all' },
  { id: 'checkatrade', label: 'Checkatrade Verified', pending: true, scope: 'all' },
  { id: 'f-gas', label: 'F-Gas Registered', pending: true, scope: 'air-conditioning' },
  { id: 'ozev', label: 'OZEV Approved Installer', pending: true, scope: 'ev-chargers' },
  { id: 'mcs', label: 'MCS Certified Partner', pending: true, scope: 'solar' },
  { id: 'fmb', label: 'FMB Member', pending: true, scope: 'building' },
  { id: 'trustmark', label: 'TrustMark Registered', pending: true, scope: 'building' },
];

export const values = [
  {
    title: 'Honest',
    body: 'No upsells, no hidden fees, no scope creep. If we quote it, that is what you pay.',
    icon: 'Handshake',
  },
  {
    title: 'Tidy',
    body: 'Minimal plaster damage, hidden cabling where possible, cleaned up after every visit.',
    icon: 'Sparkles',
  },
  {
    title: 'On time',
    body: 'We turn up when we say we will. Timelines are agreed upfront and stuck to.',
    icon: 'Clock',
  },
  {
    title: 'Certified',
    body: 'All notifiable work is registered and signed off properly, with paperwork you can keep.',
    icon: 'BadgeCheck',
  },
];

export const reviews = [
  {
    quote:
      'Two Aircon units fitted — from first contact Matt was polite, professional but friendly. He was honest about what he was recommending and allowed me time to research and get other quotes. Matt and team arrived on time, were friendly, professional, tidy and the job was done in the time estimated. Great job. Thank you!',
    context: 'Air conditioning install',
  },
  {
    quote:
      'Cannot fault this company. Had them in for a full rewire. Efficient, tidy and very knowledgeable. Will defo be having them back for future works.',
    context: 'Full rewire',
  },
  {
    quote:
      'Would definitely recommend for any future jobs, came out super fast and was very quick and amazing service. 5/5 star review for me.',
    context: 'Emergency call out',
  },
  {
    quote:
      'Matt from Page Electrical Installations came out to our house at short notice — we had an intermittent fault with the lighting in our kitchen. He gave our electrics a thorough test and found the fault was with the power supply. I would highly recommend this company. Punctual, friendly, efficient and reasonably priced.',
    context: 'Fault finding',
  },
  {
    quote:
      "I've had Page Electrical Installations do 2 jobs in my house and I've been very happy with the work. Very neat, minimal impact on existing plaster work, finished in good time and cleaned well after.",
    context: 'Domestic electrical',
  },
  {
    quote:
      'Absolutely fantastic service, called as an emergency and Matt kindly squeezed us in otherwise we would have been without electricity. Clean tidy job undertaken very professional and reliable. Thank you again Matt really appreciate it.',
    context: 'Emergency repair',
  },
  {
    quote:
      'Contacted Matt regarding an EV charge point I urgently needed installing. He bent over backwards to fit me in. The actual install has been done to a top level. All cabling housed away and all tidy. He even went the extra mile and hoovered and tidied up after himself! Couldn\u2019t recommend him enough. One happy customer thank you.',
    context: 'EV charger install',
  },
  {
    quote:
      'Matt has done lots of electrical work over the years for us. I would highly recommend his services to anyone. He has a professional can-do approach and completed all works to a very high standard. Give him a message for any of your electrical needs.',
    context: 'Repeat customer',
  },
  {
    quote:
      'Excellent service from Page Electrical Installations. Reasonably priced and great aftercare. We would highly recommend this company and will certainly use them again.',
    context: 'Domestic install',
  },
  {
    quote:
      'Efficient, trustworthy, and a great guy as well. Would recommend Matt and this company to anyone, for personal or business purposes.',
    context: 'General electrical',
  },
  {
    quote:
      'Matt helped greatly with setting up the electrics to our bar system, was a gentleman with his service and helped get everything turned on quickly. Would recommend his 5 star service.',
    context: 'Commercial install',
  },
  {
    quote:
      "You will not meet a nicer guy to come see you as and when he says he would. Professional and knows his stuff. Won't rip you off by advising for expensive options like some do and will literally advise and quote for what you want with no hidden agendas and no extra fees. Helped us out in a timely manner and to be fair at a great price.",
    context: 'Domestic electrical',
  },
];

export const faqs = [
  {
    q: 'Are you NICEIC-registered and fully certified?',
    a: 'Yes. All our electricians are fully certified and our work is carried out in line with current regulations and BS 7671 standards. Every installation is tested and certified.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Yes. For most jobs we are happy to come out, assess the work and provide a clear, itemised quote with no obligation.',
  },
  {
    q: 'How quickly can you attend an emergency?',
    a: 'We prioritise emergency call-outs across Gosport, Portsmouth and the wider Hampshire area. In most cases we can attend the same day or next morning. Call 023 9359 3998 and we will get someone to you as fast as possible.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover Hampshire, including Gosport, Portsmouth, Fareham, Southampton, Havant and surrounding towns. For larger jobs we travel further across the south coast — just ask.',
  },
  {
    q: 'Do you work with commercial clients as well as homeowners?',
    a: 'Yes. We work across domestic, commercial and light industrial sectors — from single-socket repairs to full M&E installations for shops, offices and commercial units.',
  },
  {
    q: 'Do you install EV chargers?',
    a: 'Yes. We install OZEV-approved EV charge points for homes and workplaces, and can advise on the right charger for your vehicle and usage.',
  },
  {
    q: 'Do you install solar panels and battery storage?',
    a: 'Yes. We design and install solar PV and battery storage systems for homes and businesses, and can advise on payback and grid tie-in.',
  },
  {
    q: 'How long does a full rewire typically take?',
    a: 'Most 3-bedroom house rewires take 3 to 5 working days depending on access and how much of the existing wiring can be reused. We agree a clear timeline up front and stick to it.',
  },
  {
    q: 'Will the work be signed off and certified?',
    a: 'Yes. All notifiable work is registered and you receive the relevant electrical installation certificate on completion. Certificates are important for insurance, compliance and future property sales.',
  },
  {
    q: 'Do you service and maintain air conditioning units?',
    a: 'Yes. We install, service and repair split and multi-split AC systems. Regular servicing keeps units running efficiently and extends their lifespan.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Call 023 9359 3998, email info@page-electrical.co.uk or use the contact form on this site. Tell us a little about the job and we will come back to you fast.',
  },
];

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Areas' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];
