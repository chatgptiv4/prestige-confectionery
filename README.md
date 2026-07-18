# Prestige Confectionery Website

A premium, visually stunning website for Prestige Confectionery — a cake, confectionery, and catering business based in Lagos, Nigeria.

![Prestige Confectionery](https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80)

## Overview

This website showcases Prestige Confectionery's premium brand identity with a sophisticated Pink & Black color palette. It features smooth animations, mobile-first design, and seamless WhatsApp integration for effortless customer inquiries.

**Live Demo:** Open `index.html` in your browser

## Features

### Design
- **Brand Identity**: Premium Pink & Black color scheme
- **Typography**: Playfair Display (headings) + Inter (body)
- **Mobile-First**: Optimized for mobile devices (primary user platform)
- **Custom Cursor**: Animated cursor with hover effects
- **Smooth Scrolling**: Lenis smooth scroll implementation

### Sections
1. **Navigation** — Sticky header with mobile hamburger menu
2. **Hero** — Full-screen with animated stats and floating cards
3. **Menu/Catalog** — Filterable product grid with WhatsApp links
4. **Catering Services** — Package cards with pricing
5. **Birthday Surprises** — Step-by-step service showcase
6. **Gallery** — Masonry grid with category filters and lightbox
7. **About/Story** — Brand story with CEO introduction
8. **Testimonials** — Auto-rotating carousel
9. **Order/Inquiry** — WhatsApp-integrated form
10. **Contact** — Social links and embedded map
11. **Footer** — Newsletter signup and quick links

### Animations (GSAP)
- Staggered hero entrance animations
- Scroll-triggered fade-up reveals
- Parallax effects on images
- Magnetic button hover effects
- Counter animations for statistics
- Gallery lightbox transitions
- Custom cursor interactions

### WhatsApp Integration
- Floating WhatsApp button (mobile-optimized)
- Pre-filled inquiry messages
- Form submissions open WhatsApp directly
- Click-to-chat throughout the site

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox
- **JavaScript (Vanilla)** — No frameworks
- **GSAP** — Advanced animations & ScrollTrigger
- **Lenis** — Smooth scrolling
- **Lucide Icons** — Modern icon set
- **Google Fonts** — Playfair Display & Inter

## File Structure

```
prestige-confectionery/
├── index.html              # Main HTML file
├── css/
│   ├── main.css           # Core styles
│   └── animations.css     # Animation utilities
├── js/
│   ├── main.js            # Main functionality
│   └── animations.js      # GSAP animations
├── assets/
│   ├── images/            # Image assets (add your own)
│   └── icons/             # Icon assets
└── README.md              # This file
```

## Setup Instructions

### 1. Clone or Download
```bash
# Clone the repository
git clone [repository-url]

# Or download and extract the ZIP file
```

### 2. Open in Browser
```bash
# Navigate to project folder
cd prestige-confectionery

# Open index.html in your browser
open index.html

# Or serve with a local server
npx serve .
```

### 3. Customize

#### Update Brand Information
Edit `index.html`:
- Replace placeholder phone number (`2349074106868`) with actual WhatsApp number
- Update social media links
- Add real business location

#### Replace Images
Replace Unsplash URLs in `index.html` with your own images:
```html
<!-- Current placeholder -->
<img src="https://images.unsplash.com/photo/..." alt="...">

<!-- Replace with your image -->
<img src="assets/images/your-cake.jpg" alt="Custom cake description">
```

#### Update Pricing
Edit prices in the Menu section:
```html
<span class="menu-card-price">From ₦25,000</span>
```

#### Customize Colors (Optional)
Edit `css/main.css`:
```css
:root {
    --color-pink: #E91E63;        /* Your brand pink */
    --color-pink-dark: #C2185B;   /* Darker shade */
    --color-black: #0A0A0A;       /* Primary text */
}
```

## WhatsApp Integration Setup

### 1. Get WhatsApp Business Number
Ensure you have a WhatsApp Business account with a dedicated phone number.

### 2. Update All Links
Replace `2349074106868` with your actual number in:
- `index.html` — All WhatsApp links
- `js/main.js` — Form submission handler

Format: Country code + phone number (no + or spaces)
Example: `2348012345678`

### 3. Test Links
Click any "Order on WhatsApp" button to verify it opens WhatsApp with a pre-filled message.

## Customization Guide

### Adding New Menu Items

1. Copy an existing `.menu-card` in `index.html`
2. Update:
   - Image URL
   - Title
   - Description
   - Price
   - WhatsApp link (product name in message)
3. Set appropriate `data-category` attribute

### Adding Gallery Images

1. Add new `.gallery-item` in the Gallery section
2. Set `data-category` for filtering
3. Include high-quality image (recommended: 800px width)

### Updating Testimonials

1. Edit `.testimonial-card` elements
2. Update:
   - Quote text
   - Customer name
   - Location/role
   - Avatar image URL

### Changing Business Hours/Location

Edit the Contact section in `index.html`:
```html
<div class="contact-details">
    <span class="contact-label">Service Area</span>
    <span class="contact-value">Your Location</span>
</div>
```

## Performance Optimization

### Image Optimization
- Use WebP format with JPEG fallback
- Recommended sizes:
  - Hero: 800x1000px
  - Menu cards: 600x450px
  - Gallery: 800x600px minimum
- Enable lazy loading (already implemented)

### Animation Performance
- Animations use `transform` and `opacity` only
- GSAP animations are GPU-accelerated
- ScrollTrigger uses efficient scroll handling
- `will-change` applied to animated elements

### Mobile Optimization
- Touch targets minimum 44px
- Reduced motion support (`prefers-reduced-motion`)
- Mobile-first CSS approach
- Optimized font loading

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Android 90+

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states (pink outline)
- Alt text on all images
- Reduced motion media query support
- Color contrast compliant (WCAG AA)

## SEO

- Meta description included
- Semantic heading hierarchy
- Open Graph tags ready for customization
- Structured data ready for implementation
- Fast load times (optimized assets)

## Credits

- **Design & Development**: VHLabs (Haliyah — UX/UI Design, Kabir — Development)
- **Client**: Prestige Confectionery, Osundeyi Priscillia
- **Images**: Unsplash (placeholder images — replace with your own)
- **Icons**: Lucide Icons
- **Fonts**: Google Fonts (Playfair Display, Inter)

## License

This project is created for Prestige Confectionery. All rights reserved.

## Support

For technical support or customization requests, contact VHLabs.

---

**Prestige Confectionery** — Crafted for Celebrations 🎂
