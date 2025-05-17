export const faqData = [
  {
    question: "What are the main mobile operators in Uzbekistan?",
    answer: "The main mobile operators in Uzbekistan are Beeline, Ucell, Mobiuz, Humans, OQ, and UzTelecom.",
    category: "general"
  },
  {
    question: "How can I check my balance?",
    answer: "Each operator has different USSD codes:\n- Beeline: *102#\n- Ucell: *100#\n- Mobiuz: *100#\n- Humans: *100#\n- OQ: *100#\n- UzTelecom: *100#",
    category: "balance"
  },
  {
    question: "How do I activate internet packages?",
    answer: "You can activate internet packages through:\n- USSD codes specific to each operator\n- Official mobile applications\n- Official websites\n- By visiting service centers",
    category: "internet"
  },
  {
    question: "What documents are needed to get a new SIM card?",
    answer: "To get a new SIM card in Uzbekistan, you need:\n- Passport or ID card\n- Temporary or permanent registration (if applicable)\n- Completed application form (provided at service centers)",
    category: "services"
  },
  {
    question: "How can I contact customer service?",
    answer: "Customer service contact numbers:\n- Beeline: 0611\n- Ucell: 8123\n- Mobiuz: 0890\n- Humans: 1234\n- OQ: 1235\n- UzTelecom: 1099",
    category: "support"
  }
];

export const operatorLinks = {
  beeline: {
    name: "Beeline",
    url: "https://beeline.uz",
    description: "One of the largest mobile operators in Uzbekistan offering voice and data services.",
    primaryColor: "#FFC800",
    secondaryColor: "#000000",
    logoText: "B",
    tagline: "Live on the bright side"
  },
  ucell: {
    name: "Ucell",
    url: "https://ucell.uz",
    description: "A major telecommunications provider with extensive coverage across Uzbekistan.",
    primaryColor: "#652D86",
    secondaryColor: "#FFFFFF",
    logoText: "U",
    tagline: "The future is now"
  },
  mobiuz: {
    name: "Mobiuz",
    url: "https://mobi.uz",
    description: "A growing mobile operator with competitive data packages and services.",
    primaryColor: "#E30613",
    secondaryColor: "#FFFFFF",
    logoText: "M",
    tagline: "Connect with confidence"
  },
  humans: {
    name: "Humans",
    url: "https://humans.uz",
    description: "A digital-first operator offering innovative mobile and financial services.",
    primaryColor: "#00A0E3",
    secondaryColor: "#FFFFFF",
    logoText: "H",
    tagline: "Digital life simplified"
  },
  oq: {
    name: "OQ",
    url: "https://oq.uz",
    description: "A modern telecom provider focused on digital solutions and customer experience.",
    primaryColor: "#FF6B00",
    secondaryColor: "#FFFFFF",
    logoText: "OQ",
    tagline: "Simply connected"
  },
  uztelecom: {
    name: "UzTelecom",
    url: "https://uztelecom.uz",
    description: "The national telecommunications provider offering fixed-line, mobile, and internet services.",
    primaryColor: "#0056A4",
    secondaryColor: "#FFFFFF",
    logoText: "UT",
    tagline: "Connecting Uzbekistan"
  }
};

export const categories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General Information" },
  { id: "balance", name: "Balance & Payments" },
  { id: "internet", name: "Internet & Data" },
  { id: "services", name: "Services" },
  { id: "support", name: "Customer Support" }
];

// Add theme configuration
export const themeConfig = {
  light: {
    primary: "#3498db",
    secondary: "#2c3e50",
    background: "#f5f7fa",
    cardBackground: "#ffffff",
    text: "#333333",
    lightText: "#666666"
  },
  dark: {
    primary: "#3498db",
    secondary: "#ecf0f1",
    background: "#2c3e50",
    cardBackground: "#34495e",
    text: "#ecf0f1",
    lightText: "#bdc3c7"
  }
};

// Add featured FAQs for homepage
export const featuredFAQs = [
  "What are the main mobile operators in Uzbekistan?",
  "How can I check my balance?",
  "How can I contact customer service?"
];

// Add popular services
export const popularServices = [
  {
    id: "internet",
    name: "Internet Packages",
    icon: "wifi",
    description: "Compare internet packages from all operators"
  },
  {
    id: "minutes",
    name: "Call Minutes",
    icon: "phone",
    description: "Find the best call minute packages"
  },
  {
    id: "roaming",
    name: "Roaming Services",
    icon: "globe",
    description: "International roaming options and rates"
  },
  {
    id: "payments",
    name: "Payment Methods",
    icon: "credit-card",
    description: "Ways to pay for telecom services"
  }
];

// Add language options
export const languages = [
  { code: "en", name: "English" },
  { code: "uz", name: "O'zbekcha" },
  { code: "ru", name: "Русский" }
];