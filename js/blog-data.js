/* Business Land | sample blog posts (dummy content for the client preview).
   Each post: slug, title, category, date (YYYY-MM-DD), read (minutes), author, image, imageAlt, excerpt, body (blocks).
   Block types: p, h2, ul (array of items), quote. Replace with real articles later. */
window.BLOG_POSTS = [
  {
    slug: 'what-is-alu-alu-foil',
    title: 'What is Alu Alu foil and why do tablets need it?',
    category: 'Foil',
    date: '2026-10-12', read: 5, author: 'Business Land Team',
    image: 'images/blister-macro.webp',
    imageAlt: 'Tablets sealed in Alu Alu blister packs',
    excerpt: 'Alu Alu is the strongest blister pack for medicine that fears moisture and light. Here is how it works in simple words.',
    body: [
      { t: 'p', v: 'If you have ever opened a strip of tablets and found them dry and perfect after a year on the shelf, there is a good chance they were packed in Alu Alu foil. The name simply means aluminium on both sides of the tablet.' },
      { t: 'h2', v: 'How the foil is built' },
      { t: 'p', v: 'Alu Alu is made of three layers pressed together. Each layer has one job.' },
      { t: 'ul', v: ['OPA (nylon) on the outside gives strength so the foil does not tear when it is formed into a pocket.', 'Aluminium in the middle blocks moisture, oxygen and light completely.', 'PVC on the inside lets the foil seal tightly to the lid foil.'] },
      { t: 'h2', v: 'Why it beats a normal blister' },
      { t: 'p', v: 'A clear PVC blister lets a small amount of moisture through over time. For many tablets this is fine. For sensitive medicine, such as some antibiotics and effervescent tablets, even a little moisture can spoil the product. Alu Alu closes that gap.' },
      { t: 'quote', v: 'The pocket is formed by pressing the foil, not by heating it, so the aluminium layer stays whole and the barrier stays strong.' },
      { t: 'h2', v: 'Choosing the right thickness' },
      { t: 'p', v: 'Our standard Alu Alu foil is 160 micron in total. If your tablet is large or your machine runs fast, tell us and we will suggest the best grade. Send us your tablet size on WhatsApp and we will reply the same day.' }
    ]
  },
  {
    slug: 'how-to-choose-a-blister-packing-machine',
    title: 'How to choose a blister packing machine for your plant',
    category: 'Machinery',
    date: '2026-10-05', read: 6, author: 'Business Land Team',
    image: 'images/machine-factory-floor.webp',
    imageAlt: 'Packing machines on a factory floor',
    excerpt: 'Speed, format and budget all matter. Use this short checklist before you buy your next blister machine.',
    body: [
      { t: 'p', v: 'Buying a packing machine is a big decision. The right one runs for many years. The wrong one waits in a corner. Start with these questions.' },
      { t: 'h2', v: '1. How many packs do you need per hour?' },
      { t: 'p', v: 'Work out your real daily demand, then add room to grow. A small flat-bed machine is perfect for a start-up. A larger roller machine suits plants that run all day.' },
      { t: 'h2', v: '2. What are you packing?' },
      { t: 'ul', v: ['Tablets and capsules in Alu Alu or PVC blisters.', 'Different tablet shapes, which means different moulds.', 'Do you plan to add a cartoning machine later?'] },
      { t: 'h2', v: '3. Who will service it?' },
      { t: 'p', v: 'Ask about spare parts and training before you pay. We import directly from the maker, so spare parts and manuals are one message away.' },
      { t: 'quote', v: 'Tell us your product and your target speed. We will suggest two or three machines and explain the difference in plain words.' }
    ]
  },
  {
    slug: 'seven-steps-of-our-quality-check',
    title: 'Seven steps from material to your door: our quality check',
    category: 'Quality',
    date: '2026-09-28', read: 4, author: 'Quality Desk',
    image: 'images/lab-scientist.webp',
    imageAlt: 'Scientist checking samples in a laboratory',
    excerpt: 'Every roll of foil passes through the same seven steps before it is dispatched. See what happens at each stage.',
    body: [
      { t: 'p', v: 'Pharma packing has no room for guesswork. That is why every order follows the same path, from the day the material arrives to the day it leaves our warehouse.' },
      { t: 'ul', v: ['Material arrives and is logged.', 'Quarantine and QA sampling.', 'Production planning.', 'Issuance of approved material.', 'QC inspection of the finished goods.', 'Final check against your order.', 'Careful packing and dispatch.'] },
      { t: 'h2', v: 'Why quarantine matters' },
      { t: 'p', v: 'New material is kept apart until it is tested. Nothing moves forward on trust alone. If a roll does not pass, it never reaches your line.' },
      { t: 'p', v: 'Need a certificate of analysis for your records? Ask us when you order and we will send it with your delivery.' }
    ]
  },
  {
    slug: 'sample-pharma-expo-highlights',
    title: 'Highlights from the Pharma Expo: what we saw and learned',
    category: 'Events',
    date: '2026-09-18', read: 3, author: 'Business Land Team',
    image: 'images/factory-hall.webp',
    imageAlt: 'Large production hall at a pharma exhibition',
    excerpt: 'Three days of new machines, old friends and useful ideas. A quick look back at the expo and what is coming next.',
    body: [
      { t: 'p', v: 'Our team spent three busy days at the Pharma Expo meeting suppliers, plant managers and packaging teams from across the country.' },
      { t: 'h2', v: 'What caught our eye' },
      { t: 'ul', v: ['Faster blister lines with quick-change moulds.', 'More plants asking for full barrier Alu Alu foil.', 'Strong interest in printed foil for brand protection.'] },
      { t: 'h2', v: 'Meet us at the next one' },
      { t: 'p', v: 'We will share the next event date here and on our social pages. If you would like a meeting at the expo, message us on WhatsApp and we will book a time.' }
    ]
  },
  {
    slug: 'printed-foil-protects-your-brand',
    title: 'Printed foil: a simple way to protect your brand',
    category: 'Foil',
    date: '2026-09-09', read: 4, author: 'Business Land Team',
    image: 'images/blister-colour.webp',
    imageAlt: 'Colourful printed blister foil',
    excerpt: 'Gravure and offset printing put your name and colours on the foil itself. It looks professional and it is harder to copy.',
    body: [
      { t: 'p', v: 'Plain silver foil is fine for many products. But when your brand name is printed on every strip, patients know what they are holding, and copycats find it harder to fake.' },
      { t: 'h2', v: 'Gravure or offset?' },
      { t: 'p', v: 'Gravure printing is best for long runs. It gives deep, even colour and low cost per roll. Offset printing is a good fit for shorter runs and fine detail. We can guide you based on your quantity.' },
      { t: 'h2', v: 'What we need from you' },
      { t: 'ul', v: ['Your logo file and colours.', 'Foil width and roll size.', 'The quantity you need.'] },
      { t: 'p', v: 'Send these on WhatsApp and we will come back with a sample plan and a price.' }
    ]
  },
  {
    slug: 'keeping-machines-running-maintenance-tips',
    title: 'Five simple habits that keep packing machines running',
    category: 'Machinery',
    date: '2026-08-30', read: 5, author: 'Service Desk',
    image: 'images/machine-detail.webp',
    imageAlt: 'Close up of a packing machine',
    excerpt: 'Most breakdowns start small. These five habits catch problems early and save you money.',
    body: [
      { t: 'p', v: 'A packing machine is a long term partner. A little care each day keeps it fast, accurate and quiet.' },
      { t: 'ul', v: ['Clean the machine at the end of every shift.', 'Check and oil moving parts on a fixed schedule.', 'Keep a small stock of wear parts such as seals and heater plates.', 'Train every operator, not just one person.', 'Write down every problem, even small ones.'] },
      { t: 'h2', v: 'Look for patterns' },
      { t: 'p', v: 'If the same fault shows up twice, something is wearing out. Fix it before it stops the line. Our team can help you plan spare parts for the machines we supply.' }
    ]
  }
];
