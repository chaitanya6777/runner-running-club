# RUNER Running Club

A fully functional React application for the RUNER Running Club website featuring modular component structure, responsive design, and modern web technologies.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modular Components**: Clean, reusable React components for easy maintenance
- **Modern UI**: Red (#e31e24) and black color scheme with smooth transitions and hover effects
- **Interactive Elements**: Newsletter subscription form with React hooks (useState)
- **Rich Content**: Multiple sections including hero banner, features, events, testimonials, and blog

## Components

- `Header.js` - Navigation header with logo, nav links, and contact info
- `HeroSection.js` - Hero banner with main title and upcoming event widget
- `WhoWeAreSection.js` - About section with images and statistics
- `FeaturesSection.js` - Features cards with icons and red CTA card
- `ExclusiveFeaturesSection.js` - Dark section with image gallery
- `ChallengesSection.js` - Events/marathons list with sponsor logos
- `CTABannerSection.js` - Call-to-action banner with background image
- `TestimonialsSection.js` - Customer testimonials grid
- `BlogSection.js` - Blog posts grid with featured and side posts
- `Footer.js` - Footer with newsletter form and contact info

## Technologies Used

- **React 18.2.0** - JavaScript library for building user interfaces
- **React Hooks** - useState for form handling
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Oswald (headings) and Roboto (body text)
- **CSS3** - Modern styling with flexbox and grid layouts

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

Build the app for production:

```bash
npm run build
```

The build folder will contain the optimized production files.

## Project Structure

```
runner-running-club/
├── public/
│   └── index.html          # HTML template with CDN links
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── HeroSection.js
│   │   ├── WhoWeAreSection.js
│   │   ├── FeaturesSection.js
│   │   ├── ExclusiveFeaturesSection.js
│   │   ├── ChallengesSection.js
│   │   ├── CTABannerSection.js
│   │   ├── TestimonialsSection.js
│   │   ├── BlogSection.js
│   │   └── Footer.js
│   ├── styles/
│   │   └── App.css         # All CSS styles
│   ├── App.js              # Main application component
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## License

All rights reserved © 2024 RUNER Running Club