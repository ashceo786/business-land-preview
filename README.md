# Business Land website (static HTML stage)

Open `index.html` in a browser. No build step, no libraries.

## Files
- `index.html` : homepage (hero, foil, machinery, quality, events, contact)
- `css/style.css` : all styles. Colours and sizes are tokens at the top (`:root`)
- `js/main.js` : scroll effects, counters, mobile menu, WhatsApp links and form
- `images/` : sample photos (WebP) and a temporary logo cut from the catalogue

## Dummy content to replace
- All photos except `logo.png` are free sample photos from Pexels (free to use, no credit needed). Replace with the client's own high quality photos.
- `logo.png` is cut from a low quality catalogue page. Replace with the client's original logo.
- Machine names come from the client's machine catalogue. Specs are not added yet.
- "Events" tiles are samples. Real expo videos need the client's permission.
- Numbers (60+ machines, 3 ISO standards, 7 steps, 0.5 g/m2) come from the catalogue and lab certificate. Confirm before launch.
- Email, website address and company story are not on the page yet. They wait for the client's answers.

## Notes for the WordPress step
- Replace the WhatsApp number in `js/main.js` (`WA`) and the `data-wa` links if it changes.
- The enquiry form opens WhatsApp. For WordPress, add a real form (email) as well.
- Font is self hosted in `fonts/` (Plus Jakarta Sans, SIL Open Font License). Upload the `fonts` folder with the site and keep the `css` and `fonts` folders side by side.
- The design rules are saved in `../design-system/business-land/MASTER.md`.

## Social media links (update when the accounts exist)
- Facebook and Instagram icons (top bar and footer) currently point to `https://www.facebook.com/` and `https://www.instagram.com/`.
- Search `index.html` for `class="s-fb"` and `class="s-ig"` and replace the `href` with the real page links.
- Icons are inline in `index.html` (sprite at the top of `<body>`). Original SVG files are in `images/icons/` (Simple Icons, CC0).
- To add more networks later (YouTube, LinkedIn, TikTok): add another `<symbol>` to the sprite and one `<li>` to each `.social` list.

## Video placements (all use one placeholder video for now)
Placeholder file: `videos/expo-event.mp4` (light copy of the client's expo video, 5.7 MB, loads only on click).
Posters: `images/video-poster-1.webp`, `-2`, `-3` (frames from the same video).
To replace a video: change `data-video="videos/expo-event.mp4"` and `data-title` on the button, and swap its poster image.
1. Events section: 3 tiles (expo highlights, seminar, next event). Each tile opens the player.
2. "Why Business Land" section: company introduction video card.
3. Machinery section: a small "Video" button on each of the 6 machine cards (machine in action).
Ideas for later: a short video behind the hero, a foil making video in the foil section, client testimonial videos.
Note: the placeholder video shows real people at an expo. Get the client's permission before launch.
