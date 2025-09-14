// Configuration file for ChatPilot.dev website
// Update URLs here to change them across the entire site

const CONFIG = {
    // External URLs
    calendly_url: "https://calendly.com/spradhip",
    pulsar_ventures_url: "https://pulsarventures.co",
    
    // Internal navigation
    navigation: {
        benefits: "#benefits",
        product: "#product", 
        contact: "#contact",
        home: "#home"
    },
    
    // Contact information
    contact: {
        email: "admin@pulsarventures.co",
        company: "Pulsar Ventures"
    },
    
    // Social media
    social: {
        twitter: "yourusername",
        github: "yourusername"
    }
};

// Make config available globally
window.CONFIG = CONFIG;
