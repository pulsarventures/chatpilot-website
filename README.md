# ChatPilot.dev Website Clone

A GitHub Pages repository that replicates the ChatPilot.dev website with modern animations and smooth scrolling functionality.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Custom Color Scheme**: Orange primary (#FFB74D), green buttons (#044C30), and professional grays
- **Brand Logo**: Custom logo integration in the navigation
- **Interactive Elements**: Smooth scrolling navigation and scroll-to-top button
- **Performance Optimized**: Lightweight and fast-loading static site

## Sections

1. **Hero Section**: Orange primary background with animated text
2. **Built For Your Team**: Three-column layout showcasing target audiences
3. **Beyond Traditional Chatbots**: Comparison between traditional and ChatPilot approach
4. **Core Use Cases**: Four key use cases with hover animations
5. **Key Features**: Six feature cards with detailed descriptions
6. **Technical Architecture**: Integration capabilities and tools
7. **The ChatPilot Advantage**: Four advantage points with gradient cards
8. **Call-to-Action**: Final section with demo request button

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Smooth scrolling, animations, and interactions
- **Google Fonts**: Inter font family for typography

## Configuration

The website uses a centralized configuration system in `config.js`:

```javascript
const CONFIG = {
    calendly_url: "https://calendly.com/spradhip",
    pulsar_ventures_url: "https://pulsarventures.co",
    // ... other settings
};
```

**Benefits:**
- ✅ Update URLs in one place (`config.js`)
- ✅ No need to search/replace across multiple files
- ✅ Easy to maintain and update
- ✅ Consistent across all links

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Or deploy to GitHub Pages for live hosting

## GitHub Pages Deployment

This repository is configured for GitHub Pages deployment:

1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Save and your site will be available at `https://yourusername.github.io/cp-website`

## Customization

The website uses CSS custom properties and modular JavaScript, making it easy to customize:

- **URLs**: Update all external links in `config.js` (Calendly, Pulsar Ventures, etc.)
- **Colors**: Primary (#FFB74D), Button (#044C30), Secondary (#54595F), Text (#020202/#030303)
- **Logo**: Replace `logo.svg` with your own logo file
- **Animations**: Modify animations in the JavaScript file
- **Content**: Update content in the HTML file

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
