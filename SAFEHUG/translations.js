// Translation system for SafeHug website
const translations = {
    fr: {
        // Navigation
        'nav.accueil': 'Accueil',
        'nav.produit': 'Le Produit',
        'nav.specs': 'Spécifications',
        'nav.utilisation': 'Utilisation',
        'nav.urgence': 'Urgence',
        'nav.flottes': 'Flottes',
        'nav.avantage': 'Avontag',
        'nav.materiau': 'Matériau',
        'nav.commander': 'Commander',
        
        // Hero
        'hero.cta': 'Découvrir le produit',
        'hero.secondary': 'Commander maintenant',
        
        // Sections
        'product.titre': 'Le Produit SafeHug',
        'specs.titre': 'Spécifications Techniques',
        'how_it_works.titre': 'Comment Utiliser SafeHug',
        'how_it_works.sous_titre': 'Simple et pratique en 3 étapes',
        'emergency.titre': 'SafeHug pour les Services d\'Urgence',
        'emergency.sous_titre': 'Un outil indispensable pour les secouristes',
        'ambulance.titre': 'Intégration Ambulance & Flottes',
        'ambulance.sous_titre': 'Solution pour les professionnels de l\'urgence',
        'avantages.titre': 'Avontag - Premium',
        'material.titre': 'Matériau Transparent Premium',
        'faq.titre': 'Questions Fréquentes',
        'faq.sous_titre': 'Tout ce que vous devez savoir sur SafeHug',
        'contact.titre': 'Commander SafeHug',
        'contact.sous_titre': 'Contactez-nous pour passer commande',
        
        // How It Works Steps
        'how_it_works.step1.titre': 'Insérez votre carte',
        'how_it_works.step2.titre': 'Installez sur la ceinture',
        'how_it_works.step3.titre': 'C\'est prêt !',
        'how_it_works.quick_setup': 'Configuration en moins de 30 secondes'
    },
    en: {
        // Navigation
        'nav.accueil': 'Home',
        'nav.produit': 'The Product',
        'nav.specs': 'Specifications',
        'nav.utilisation': 'How It Works',
        'nav.urgence': 'Emergency',
        'nav.flottes': 'Fleets',
        'nav.avantage': 'Benefits',
        'nav.materiau': 'Material',
        'nav.commander': 'Order Now',
        
        // Hero
        'hero.cta': 'Discover the product',
        'hero.secondary': 'Order now',
        
        // Sections
        'product.titre': 'The SafeHug Product',
        'specs.titre': 'Technical Specifications',
        'how_it_works.titre': 'How to Use SafeHug',
        'how_it_works.sous_titre': 'Simple and practical in 3 steps',
        'emergency.titre': 'SafeHug for Emergency Services',
        'emergency.sous_titre': 'An essential tool for first responders',
        'ambulance.titre': 'Ambulance & Fleet Integration',
        'ambulance.sous_titre': 'Solution for emergency professionals',
        'avantages.titre': 'Premium Benefits',
        'material.titre': 'Premium Transparent Material',
        'faq.titre': 'Frequently Asked Questions',
        'faq.sous_titre': 'Everything you need to know about SafeHug',
        'contact.titre': 'Order SafeHug',
        'contact.sous_titre': 'Contact us to place an order',
        
        // How It Works Steps
        'how_it_works.step1.titre': 'Insert your card',
        'how_it_works.step2.titre': 'Install on the belt',
        'how_it_works.step3.titre': 'It\'s ready!',
        'how_it_works.quick_setup': 'Setup in under 30 seconds'
    }
};

let currentLanguage = 'fr';

// Function to translate all elements with data-i18n attribute
function translatePage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('safehug_language', lang);
    
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // If element is an input with placeholder, update placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.getAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[lang][key]);
                }
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language switcher UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    console.log('Translated to ' + lang + ': ' + elements.length + ' elements');
}

// Make it globally accessible
window.changeLanguage = function(lang) {
    translatePage(lang);
};

// Initialize language on page load
window.initLanguage = function() {
    const savedLang = localStorage.getItem('safehug_language');
    const browserLang = navigator.language || navigator.userLanguage;
    
    if (savedLang && translations[savedLang]) {
        setTimeout(() => translatePage(savedLang), 100);
    } else if (browserLang && browserLang.startsWith('en')) {
        setTimeout(() => translatePage('en'), 100);
    }
    
    console.log('Language system initialized');
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initLanguage);
} else {
    window.initLanguage();
}

