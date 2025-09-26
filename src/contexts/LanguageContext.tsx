import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    howItWorks: 'How It Works',
    benefits: 'Benefits',
    stories: 'Stories',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'From Dung to Dhan',
    heroSubtitle: 'गौशाला से रोज़ी — किसानों के लिए न्यायपूर्ण भुगतान',
    heroDescription: 'IoT-verified weighments, same-day payouts, local CBG production',
    joinFarmer: 'Join as Farmer',
    requestPickup: 'Request Pickup',
    
    // Stats
    farmerIncomeIncrease: 'Farmer Income Increase',
    cbgYieldEfficiency: 'CBG Yield Efficiency',
    methaneReduction: 'Methane Reduction',
    
    // Features
    empoweringRural: 'Empowering Rural India',
    empoweringDescription: 'Saubhagya connects farmers with biogas production facilities, creating sustainable income from agricultural waste while contributing to clean energy solutions.',
    forFarmers: 'For Farmers',
    forFarmersDesc: 'Turn your cattle dung into daily income with transparent, fair pricing',
    learnMore: 'Learn More',
    seeProcess: 'See Process',
    getStarted: 'Get Started',
    contactUs: 'Contact Us',
    
    // Vision & Mission
    ourVision: 'Our Vision',
    visionText: 'To transform rural India into a sustainable, prosperous ecosystem where agricultural waste becomes a source of wealth and clean energy.',
    ourMission: 'Our Mission',
    missionText: 'Empowering farmers through innovative biogas solutions, ensuring fair compensation, environmental sustainability, and energy independence for rural communities.',
    
    // Process
    processTitle: 'How It Works',
    processDesc: 'Our simple 4-step process ensures seamless collection, verification, and payment for your agricultural waste',
    collectionRequest: 'Collection Request',
    pickupTransport: 'Pickup & Transport',
    iotVerification: 'IoT Verification',
    sameDayPayment: 'Same-day Payment',
    
    // Benefits
    benefitsTitle: 'Benefits for Farmers',
    benefitsDesc: 'Discover how Saubhagya transforms agricultural waste into sustainable income',
    
    // Testimonials
    successStories: 'Success Stories',
    successDesc: 'Real farmers sharing their experiences with Saubhagya platform',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDesc: 'Get in touch with our team for support or to join our platform',
    
    // Footer
    quickLinks: 'Quick Links',
    services: 'Services',
    footerDesc: 'Empowering rural India through sustainable biogas solutions. Converting agricultural waste into wealth for farmers.',
  },
  hi: {
    // Navigation
    home: 'होम',
    about: 'हमारे बारे में',
    howItWorks: 'यह कैसे काम करता है',
    benefits: 'लाभ',
    stories: 'सफलता की कहानियां',
    contact: 'संपर्क करें',
    
    // Hero Section
    heroTitle: 'गोबर से धन तक',
    heroSubtitle: 'From Dung to Dhan — Fair payments for farmers',
    heroDescription: 'IoT-सत्यापित तौल, उसी दिन भुगतान, स्थानीय CBG उत्पादन',
    joinFarmer: 'फार्मर बनें',
    requestPickup: 'पिकअप रिक्वेस्ट करें',
    
    // Stats
    farmerIncomeIncrease: 'किसान आय वृद्धि',
    cbgYieldEfficiency: 'CBG उत्पादन दक्षता',
    methaneReduction: 'मीथेन कमी',
    
    // Features
    empoweringRural: 'ग्रामीण भारत को सशक्त बनाना',
    empoweringDescription: 'सौभाग्य किसानों को बायोगैस उत्पादन सुविधाओं से जोड़ता है, कृषि अपशिष्ट से टिकाऊ आय बनाता है और स्वच्छ ऊर्जा समाधान में योगदान देता है।',
    forFarmers: 'किसानों के लिए',
    forFarmersDesc: 'पारदर्शी, उचित मूल्य निर्धारण के साथ अपने गोबर को दैनिक आय में बदलें',
    learnMore: 'और जानें',
    seeProcess: 'प्रक्रिया देखें',
    getStarted: 'शुरू करें',
    contactUs: 'संपर्क करें',
    
    // Vision & Mission
    ourVision: 'हमारा विजन',
    visionText: 'ग्रामीण भारत को एक टिकाऊ, समृद्ध पारिस्थितिकी तंत्र में बदलना जहां कृषि अपशिष्ट धन और स्वच्छ ऊर्जा का स्रोत बन जाए।',
    ourMission: 'हमारा मिशन',
    missionText: 'नवाचार बायोगैस समाधानों के माध्यम से किसानों को सशक्त बनाना, निष्पक्ष मुआवजा, पर्यावरणीय स्थिरता और ग्रामीण समुदायों के लिए ऊर्जा स्वतंत्रता सुनिश्चित करना।',
    
    // Process
    processTitle: 'यह कैसे काम करता है',
    processDesc: 'हमारी सरल 4-चरणीय प्रक्रिया आपके कृषि अपशिष्ट के लिए निर्बाध संग्रह, सत्यापन और भुगतान सुनिश्चित करती है',
    collectionRequest: 'संग्रह अनुरोध',
    pickupTransport: 'पिकअप और परिवहन',
    iotVerification: 'IoT सत्यापन',
    sameDayPayment: 'उसी दिन भुगतान',
    
    // Benefits
    benefitsTitle: 'किसानों के लिए लाभ',
    benefitsDesc: 'जानें कि सौभाग्य कैसे कृषि अपशिष्ट को टिकाऊ आय में बदलता है',
    
    // Testimonials
    successStories: 'सफलता की कहानियां',
    successDesc: 'वास्तविक किसान सौभाग्य प्लेटफॉर्म के साथ अपने अनुभव साझा कर रहे हैं',
    
    // Contact
    contactTitle: 'संपर्क करें',
    contactDesc: 'सहायता के लिए या हमारे प्लेटफॉर्म में शामिल होने के लिए हमारी टीम से संपर्क करें',
    
    // Footer
    quickLinks: 'त्वरित लिंक',
    services: 'सेवाएं',
    footerDesc: 'टिकाऊ बायोगैस समाधानों के माध्यम से ग्रामीण भारत को सशक्त बनाना। किसानों के लिए कृषि अपशिष्ट को धन में परिवर्तित करना।',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};