# A birthday surprise for Ayoti ♥
A responsive, romantic static website designed for GitHub Pages.

## Before publishing
1. Open `script.js` and change `BIRTHDAY_DATE` to her birthday using `YYYY-MM-DD`.
   - The countdown automatically counts down to the next occurrence of that date.
2. Add your photos to `assets/photos/` and keep these exact filenames:
   - `photo-1.jpg`
   - `photo-2.jpg`
   - `photo-3.jpg`
   You can use `.jpg` images; resize very large photos before uploading for faster mobile loading.
3. Add a music file you have permission to use at `assets/audio/our-song.mp3`.
   - Browsers block autoplay. She can start the music with the button at the top.
4. Optional: replace the three gallery captions or edit the hidden letter in `index.html`.

## Publish with GitHub Pages
1. Create a new public GitHub repository, for example `ayoti-birthday`.
2. Upload **all files and folders inside this project** to the repository root. `index.html` must be at the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main**, folder **/(root)**, then click **Save**.
6. Wait for GitHub Pages to finish deploying. Your page will be available at:
   `https://YOUR-USERNAME.github.io/ayoti-birthday/`

## Notes
- This is a static site: no server, database, or paid hosting is required.
- The site is mobile-first and supports reduced-motion preferences.
- Google Fonts are loaded online; system fallback fonts are provided.
- Replace the placeholder gallery photos and add your own music before sharing the link.
