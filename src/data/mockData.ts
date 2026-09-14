import { ServiceItem, TeamMember, Testimonial } from '../types';

export const PRACTICE_INFO = {
  name: 'Lehmann Family Dental',
  doctorName: 'Dr. Grant Lehmann, DDS',
  phone: '(641) 357-3315',
  phoneRaw: 'tel:+16413573315',
  email: 'info@lehmannfamilydental.com',
  address: {
    street: '108 S 4th St',
    city: 'Clear Lake',
    state: 'IA',
    zip: '50428',
    full: '108 S 4th St, Clear Lake, IA 50428'
  },
  hours: [
    { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Thursday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Friday', hours: '8:00 AM – 12:00 PM' },
    { day: 'Saturday – Sunday', hours: 'Closed' }
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lehmann+Family+Dental+108+S+4th+St+Clear+Lake+IA+50428',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    category: 'restorative',
    shortDesc: 'Fillings, Crowns and bridges',
    fullDesc: 'High-quality comprehensive general dental care including long-lasting composite tooth-colored fillings, custom precision crowns, and dental bridges to maintain full chewing strength, bite alignment, and oral comfort.',
    benefits: ['Tooth-colored natural fillings', 'Durable custom ceramic crowns', 'Fixed bridge restoration', 'Gentle local anesthesia'],
    duration: '45 - 60 min',
    idealFor: 'Cavities, broken or fractured teeth, missing tooth gaps',
    imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    iconName: 'Cpu'
  },
  {
    id: 'dental-cleanings',
    title: 'Dental Cleanings',
    category: 'preventive',
    shortDesc: 'We LOVE to prevent future dental problems. Our Gentle yet thorough Hygienists use routine cleanings paired with detailed examination and digital x-rays to keep your smile bright!',
    fullDesc: 'We LOVE to prevent future dental problems. Our Gentle yet thorough Hygienists use routine cleanings paired with detailed examination and digital x-rays to keep your smile bright! Routine checkups safeguard your gums, preserve enamel, and catch issues before they cause discomfort.',
    benefits: ['Gentle yet thorough hygiene', 'Detailed comprehensive examination', 'Low-radiation digital x-rays', 'Customized homecare tips'],
    duration: '45 - 60 min',
    idealFor: 'Recommended every 6 months for everyone in the family',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles'
  },
  {
    id: 'pediatric-care',
    title: 'Pediatric care',
    category: 'preventive',
    shortDesc: 'We love meeting and caring for children of all ages. Call and ask how we will make the first appointment a fun experience.',
    fullDesc: 'We love meeting and caring for children of all ages. Call and ask how we will make the first appointment a fun experience! Our team takes special care to ensure young patients feel safe, respected, and enthusiastic about visiting the dentist.',
    benefits: ['Fun, anxiety-free atmosphere', 'Care for children of all ages', 'Gentle examinations & cleanings', 'Positive dental habits early on'],
    duration: '30 - 45 min',
    idealFor: 'Infants, toddlers, children, and teens of all ages',
    imageUrl: '/images/pediatric.jpg',
    iconName: 'HeartHandshake'
  },
  {
    id: 'implants',
    title: 'Implants',
    category: 'restorative',
    shortDesc: "Free of charge dental implant consultations. Come see if you're an implant candidate. Will give you a fair flat rate for treatment if you choose to get a tooth back.",
    fullDesc: "Free of charge dental implant consultations. Come see if you're an implant candidate. Will give you a fair flat rate for treatment if you choose to get a tooth back. Dental implants provide a permanent, secure foundation that functions and looks like a natural tooth.",
    benefits: ['Free of charge consultation', 'Candidacy evaluation & 3D planning', 'Fair flat rate for treatment', 'Permanent, lifelike tooth replacement'],
    duration: 'Consultation & Phased plan',
    idealFor: 'Single missing tooth, multiple teeth, or full arch restoration',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck'
  },
  {
    id: 'same-day-emergency',
    title: 'Same Day Emergency Dentistry',
    category: 'specialty',
    shortDesc: 'When you are in pain, we will move mountains to get you out of pain the same day.',
    fullDesc: 'When you are in pain, we will move mountains to get you out of pain the same day. Whether it is an unexpected toothache, cracked molar, broken restoration, or trauma, call (641) 357-3315 and our team will prioritize your immediate relief.',
    benefits: ['Same-day emergency appointments', 'Fast pain relief & diagnosis', 'Direct priority phone line', 'Gentle and compassionate care'],
    duration: 'Immediate triage',
    idealFor: 'Severe toothaches, cracked teeth, swollen gums, trauma',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Zap'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic dentistry',
    category: 'cosmetic',
    shortDesc: 'Veneers, esthetic composites. and Invisalign™',
    fullDesc: 'Transform your smile with artistic precision. We provide custom ultra-thin porcelain veneers, seamless tooth-colored esthetic composites (bonding), and Invisalign™ clear aligners to bring balance, symmetry, and luminous beauty to your teeth.',
    benefits: ['Custom porcelain veneers', 'Esthetic composites & bonding', 'Invisalign™ clear aligners', 'Natural, radiant appearance'],
    duration: 'Personalized consultation',
    idealFor: 'Chipped teeth, gaps, stains, or smile rejuvenation',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    iconName: 'Smile'
  },
  {
    id: 'extractions',
    title: 'Extractions',
    category: 'restorative',
    shortDesc: 'Saving teeth is the name of the game, but when one does need to come out, we can gently remove teeth.',
    fullDesc: 'Saving teeth is the name of the game, but when one does need to come out, we can gently remove teeth. We use modern, gentle anesthetic techniques to ensure zero discomfort, followed by step-by-step recovery guidance and options to restore your smile.',
    benefits: ['Gentle & comfortable tooth removal', 'Modern numbing techniques', 'Careful preservation of surrounding bone', 'Clear, supportive recovery care'],
    duration: '45 - 60 min',
    idealFor: 'Non-restorable teeth, severe crowding, or problematic wisdom teeth',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity'
  },
  {
    id: 'root-canals',
    title: 'Root Canals',
    category: 'restorative',
    shortDesc: 'We will comfortably treat teeth that require root canal therapy.',
    fullDesc: 'We will comfortably treat teeth that require root canal therapy. Modern root canal treatment eliminates infection and relieves dental pain quickly while preserving your natural tooth root for years of continued function.',
    benefits: ['Comfortable pain-relieving therapy', 'Preserves your natural tooth', 'Prevents spread of infection', 'Capped with durable porcelain crown'],
    duration: '60 - 90 min',
    idealFor: 'Infected tooth nerve, deep decay, lingering sensitivity',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck'
  },
  {
    id: 'invisalign',
    title: 'Invisalign',
    category: 'cosmetic',
    shortDesc: 'We are proud of the extensive training, we offer the highest end !',
    fullDesc: 'We are proud of the extensive training, we offer the highest end ! Discreet, custom-engineered clear aligners that gently guide teeth into ideal alignment without metal wires or brackets. Removable for meals, brushing, and speaking with confidence.',
    benefits: ['Extensive specialized training', 'Highest-end clear aligner systems', 'Discreet, comfortable & removable', 'Digital 3D smile visualization'],
    duration: '6 - 18 months avg.',
    idealFor: 'Crooked teeth, spacing, crowding, or relapse from braces',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    iconName: 'AlignCenter'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-grant-lehmann',
    name: 'Dr. Grant Lehmann, DDS',
    role: 'Lead Dentist & Practice Owner',
    credentials: 'DDS, University of Iowa College of Dentistry • BS Mechanical Engineering, Iowa State',
    bio: 'Dr. Grant Lehmann was raised in nearby Hampton, Iowa. Prior to pursuing dentistry, he earned his degree in Mechanical Engineering at Iowa State University, bringing an analytical eye for structural precision, aesthetics, and modern dental engineering to patient care. Dr. Lehmann graduated from the University of Iowa College of Dentistry and is passionate about restorative dental surgery, cosmetic transformations, and delivering patient-focused care where comfort always comes first.',
    education: 'University of Iowa College of Dentistry (2021)',
    specialty: 'Restorative, Oral Surgery, Family & Cosmetic Dentistry',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sarah-rdh',
    name: 'Sarah, RDH',
    role: 'Registered Dental Hygienist',
    credentials: 'BS in Dental Hygiene • Certified in Local Anesthesia',
    bio: 'Sarah has been keeping Clear Lake smiles sparkling with gentle, thorough preventive care. She is known for her warm conversational demeanor and tips for stress-free oral hygiene.',
    specialty: 'Preventive Care, Periodontal Therapy, Pediatric Prophylaxis',
    imageUrl: 'https://images.unsplash.com/photo-1594824813501-4895085e6837?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'emily-cda',
    name: 'Emily, CDA',
    role: 'Lead Clinical Dental Assistant',
    credentials: 'Certified Dental Assistant • Expanded Functions Dental Auxiliary',
    bio: 'Emily works chairside with Dr. Lehmann, ensuring every patient is completely relaxed, comfortably seated, and informed throughout their treatment.',
    specialty: 'Chairside Patient Comfort, Digital Scanning & Impressions',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jessica-coordinator',
    name: 'Jessica M.',
    role: 'Patient Care & Insurance Coordinator',
    credentials: 'Dental Administration & Financial Care Specialist',
    bio: 'Jessica assists patients with appointment scheduling, maximizing dental insurance benefits, and navigating treatment plans with zero unexpected surprises.',
    specialty: 'Insurance Maximization, Flexible Scheduling, Financing',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
];

export const CORE_VALUES = [
  {
    id: 'flexible-financing',
    number: '01',
    title: 'Flexible Financing',
    description: 'We believe exceptional dental care should be accessible to everyone. We offer flexible payment arrangements, help navigate insurance benefits, and provide upfront, honest cost estimates with zero surprises.',
    iconName: 'CreditCard'
  },
  {
    id: 'light-sedation',
    number: '02',
    title: 'Light Sedation Available',
    description: 'Keep dental anxiety at bay with gentle, light sedation options. Designed for nervous patients or sensitive procedures so your time in the chair is calm, relaxed, and completely comfortable.',
    iconName: 'Smile'
  },
  {
    id: 'pain-relief',
    number: '03',
    title: 'If You Are in Pain, We Will Help',
    description: 'Emergency dental relief when you need it most. We deliberately reserve dedicated same-day slots in our schedule so patients in discomfort or distress are seen and treated promptly.',
    iconName: 'Zap'
  },
  {
    id: 'children',
    number: '04',
    title: 'We See Children',
    description: 'Welcoming toddlers, children, and teens with genuine patience, warmth, and fun prizes. We ensure young patients feel safe, heard, and excited about building healthy smiles for life.',
    iconName: 'Heart'
  },
  {
    id: 'extractions-root-canals',
    number: '05',
    title: 'Extractions & Root Canals In-Office',
    description: 'From wisdom tooth removal to gentle root canal therapies, Dr. Lehmann performs comprehensive surgical and restorative procedures right here in Clear Lake—saving you unnecessary referrals.',
    iconName: 'Activity'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Julie Walrod',
    badge: '4 reviews',
    rating: 5,
    treatment: 'Comprehensive Family Care',
    quote: 'Highly recommend Grant Lehmann! He and his staff are the best ever! I have finally found a dentist I can trust and his whole team are so kind, caring and compassionate!',
    date: '6 months ago',
    initials: 'JW'
  },
  {
    id: '2',
    name: 'Dylan Muckey',
    badge: 'Local Guide · 11 reviews',
    rating: 5,
    treatment: 'Honest Care & Honest Opinion',
    quote: 'Would highly recommend Lehmann Family Dental to anyone looking for high quality dental care and an honest opinion. Dr. Lehmann and his staff are friendly, knowledgeable, and aren’t just out to get your money. They are very open, and will explain everything.',
    date: '5 months ago',
    initials: 'DM'
  },
  {
    id: '3',
    name: 'Brandon Hanson',
    badge: '5 reviews',
    rating: 5,
    treatment: 'Routine Cleanings & Exam',
    quote: 'Fantastic! Absolutely love Lehmann Family Dental! Dr. Lehmann is gentle, skilled, and genuinely caring—the best dentist I’ve ever had. The entire staff is friendly, professional, and makes every visit comfortable and efficient.',
    date: '6 months ago',
    initials: 'BH'
  },
  {
    id: '4',
    name: 'Tayla Baker',
    badge: '1 review',
    rating: 5,
    treatment: 'Pediatric Care & Extractions',
    quote: 'Dr. Grant is so good and patient with littles, his assistant is very informative when it comes to explaining processes for visits. They do a phenomenal job of keeping patients calm and happy during extractions and fillings. We love coming and earning prizes out of the chest!',
    date: 'a year ago',
    initials: 'TB'
  },
  {
    id: '5',
    name: 'Victoria Stubblefield',
    badge: '6 reviews',
    rating: 5,
    treatment: 'Emergency Root Canal',
    quote: 'I have had great experiences at Lehmann Dental. They performed a painless-emergency root canal on me and have even seen me afterwards for follow up concerns. The front desk staff and hygienist have always been extremely helpful.',
    date: 'a year ago',
    initials: 'VS'
  },
  {
    id: '6',
    name: 'Bianca Reich',
    badge: '3 reviews',
    rating: 5,
    treatment: 'Same-Day Dental Emergency',
    quote: 'I had a last minute dental emergency and gave Lehmann Family Dental a call which led to me getting seen that same day. The staff was welcoming, friendly, and very helpful. I 100% recommend Lehmann Family Dental to anybody looking for a dentist!',
    date: '6 months ago',
    initials: 'BR'
  },
  {
    id: '7',
    name: 'Sarah Orchard',
    badge: '4 reviews',
    rating: 5,
    treatment: 'Wisdom Teeth Extractions',
    quote: 'Dr. Lehman did a stellar job removing my daughter’s and son’s buried wisdom teeth. The whole staff was reassuring and knowledgeable. Recovery was a breeze.',
    date: '5 months ago',
    initials: 'SO'
  },
  {
    id: '8',
    name: 'Ashley Billings',
    badge: '5 reviews',
    rating: 5,
    treatment: 'Gentle Root Canal Treatment',
    quote: 'I went in extremely embarrassed due to a bad tooth and they were absolutely amazing with me! He was able to do a root canal which honestly, I was very comfortable with throughout the entire process. I didn\'t feel pain or have any discomfort.',
    date: '3 years ago',
    initials: 'AB'
  },
  {
    id: '9',
    name: 'amanda manahan',
    badge: '6 reviews',
    rating: 5,
    treatment: 'Extractions & Pain Relief',
    quote: 'Would definitely recommend, I have ignored my oral hygiene for many years. And today they were able to get me in and got 2 teeth pulled which end 3 weeks of pain that I was trying to treat myself. Rave to their whole team.',
    date: '2 years ago',
    initials: 'AM'
  },
  {
    id: '10',
    name: 'Judy Marquardt',
    badge: '9 reviews',
    rating: 5,
    treatment: 'Painless Dental Care',
    quote: 'THE BEST DENTIST OFFICE!!! ALL Staff and Dr Grant are very friendly, knowledgeable and calm. They have helped me get over my fear of dentists. I have rescheduled appointments and they are so easy to work with. Dr Grant does painless work.',
    date: 'a year ago',
    initials: 'JM'
  },
  {
    id: '11',
    name: 'Tommy Frey',
    badge: '8 reviews',
    rating: 5,
    treatment: 'Emergency Chipped Tooth',
    quote: 'Everyone at Lehmann Dental is always very helpful and friendly. I called about my chipped tooth when they were closed over the weekend and left a message. They called me first thing Monday morning and got me in that morning.',
    date: 'a year ago',
    initials: 'TF'
  },
  {
    id: '12',
    name: 'Adam Green',
    badge: 'Local Guide · 23 reviews',
    rating: 5,
    treatment: 'Best Experience in Years',
    quote: 'Amazing staff, clean building. Very knowledgeable employees and Dr. Lehmann is everything you could want out of a dentist. Without a doubt the best dentist office I have been to in a very long time.',
    date: '2 months ago',
    initials: 'AG'
  }
];

export const INSURANCES_ACCEPTED = [
  'Delta Dental',
  'Wellmark / Blue Cross Blue Shield',
  'MetLife Dental',
  'Cigna Dental',
  'Principal Financial',
  'Guardian',
  'Aetna Dental',
  'Humana',
  'UnitedHealthcare'
];
