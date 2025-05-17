import React, { useState, useEffect } from 'react';
import './FAQ.css';
import FAQSearch from './FAQSearch';
import { filterFAQItems } from '../utils/faqInteractions';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data organized by categories
  const faqCategories = [
    {
      category: "General Services",
      items: [
        {
          question: "What services does Uzbekistan Telecom offer?",
          answer: "Uzbekistan Telecom offers a wide range of telecommunications services including fixed-line telephony, mobile services, internet connectivity (ADSL, FTTB, FTTH), IPTV, data center services, and corporate network solutions. We provide both residential and business services throughout Uzbekistan."
        },
        {
          question: "How can I check my current balance?",
          answer: "You can check your balance through several methods: 1) Log in to your personal account on our website, 2) Use our mobile app, 3) Call our automated service at *100#, or 4) Visit any Uzbekistan Telecom service center with your ID."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept various payment methods including bank cards (VISA, MasterCard, UzCard), online banking, mobile payment apps (Payme, Click), cash payments at our service centers, and through payment terminals located throughout the country."
        },
        {
          question: "How do I report a service outage?",
          answer: "You can report service outages by calling our 24/7 technical support line at 1099, through our website's support section, or via the mobile app. Please provide your account details and a description of the issue you're experiencing."
        }
      ]
    },
    {
      category: "Internet Services",
      items: [
        {
          question: "What internet plans are available for home users?",
          answer: "We offer various home internet plans with speeds ranging from 10 Mbps to 100 Mbps. Our most popular packages include: Economy (10 Mbps), Standard (30 Mbps), Premium (50 Mbps), and Ultra (100 Mbps). All plans come with unlimited data and optional add-ons like static IP addresses."
        },
        {
          question: "How do I upgrade my internet speed?",
          answer: "You can upgrade your internet speed by logging into your personal account on our website, calling our customer service at 1099, or visiting any Uzbekistan Telecom service center. Speed upgrades are typically processed within 24 hours of request."
        },
        {
          question: "What is the difference between ADSL, FTTB, and FTTH?",
          answer: "ADSL (Asymmetric Digital Subscriber Line) uses existing telephone lines with speeds up to 20 Mbps. FTTB (Fiber to the Building) brings fiber optic cable to your building with speeds up to 100 Mbps. FTTH (Fiber to the Home) brings fiber directly to your apartment/house with speeds up to 1 Gbps, offering the fastest and most reliable connection."
        },
        {
          question: "Do you provide Wi-Fi routers with internet packages?",
          answer: "Yes, we provide Wi-Fi routers with our internet packages. Depending on the plan you choose, the router may be included for free or available at a discounted price. We offer various models suitable for different connection types and home sizes."
        },
        {
          question: "What should I do if my internet is slow?",
          answer: "If you're experiencing slow internet, try these steps: 1) Restart your router, 2) Check if the issue affects all devices, 3) Run a speed test at speedtest.net, 4) Ensure no large downloads are running, 5) Check for Wi-Fi interference. If problems persist, contact our technical support at 1099 for assistance."
        }
      ]
    },
    {
      category: "Mobile Services",
      items: [
        {
          question: "How do I activate a new SIM card?",
          answer: "To activate a new SIM card, visit any Uzbekistan Telecom service center with your passport or ID. Our staff will register the SIM card in your name and activate it. Alternatively, if you purchased a SIM kit, follow the activation instructions included in the package or call our activation hotline at 1099."
        },
        {
          question: "What mobile data packages are available?",
          answer: "We offer daily, weekly, and monthly mobile data packages. Our most popular options include: Daily (1GB/day), Weekly (5GB/week), Monthly Basic (10GB/month), Monthly Standard (20GB/month), and Monthly Premium (50GB/month). You can activate these packages through our mobile app, by dialing *111#, or at any service center."
        },
        {
          question: "How can I check my remaining mobile data?",
          answer: "You can check your remaining mobile data by dialing *100#, through our mobile app, or by logging into your personal account on our website. The information is updated in real-time after each session."
        },
        {
          question: "Do you offer international roaming services?",
          answer: "Yes, we offer international roaming services in over 150 countries. To activate roaming, dial *120# or visit any service center before traveling. We recommend checking our roaming packages which can help you save on data and call costs while abroad."
        }
      ]
    },
    {
      category: "Technical Support",
      items: [
        {
          question: "How do I troubleshoot my internet connection?",
          answer: "To troubleshoot your internet connection: 1) Check all physical connections, 2) Restart your router and modem, 3) Try connecting with an Ethernet cable instead of Wi-Fi, 4) Disable VPN or proxy services, 5) Check if the issue is with a specific website or all websites. If problems persist, contact our technical support at 1099."
        },
        {
          question: "What is the typical response time for technical issues?",
          answer: "Our typical response time for technical issues is 24-48 hours. For critical issues affecting your entire service, we aim to respond within 4-6 hours. Premium business customers receive priority support with response times of 2-4 hours."
        },
        {
          question: "Do you offer technical support in English?",
          answer: "Yes, we offer technical support in Uzbek, Russian, and English. When calling our support line at 1099, you can select your preferred language from the automated menu. Our website and mobile app are also available in these three languages."
        },
        {
          question: "How do I set up my Wi-Fi router?",
          answer: "To set up your Wi-Fi router: 1) Connect the router to the power outlet, 2) Connect the internet cable to the WAN/Internet port, 3) Access the router settings by typing 192.168.1.1 or 192.168.0.1 in your browser, 4) Follow the setup wizard to configure your network name and password. For detailed instructions specific to your router model, visit our support website."
        }
      ]
    },
    {
      category: "Billing and Payments",
      items: [
        {
          question: "When is my bill due each month?",
          answer: "Bills are generated on the 1st of each month and are due by the 10th. You can view and download your bills through your personal account on our website or mobile app. We also send bill notifications via SMS and email if you've enabled these notifications."
        },
        {
          question: "What happens if I don't pay my bill on time?",
          answer: "If payment is not received by the due date, a reminder notification will be sent. After 5 days of non-payment, your service may be temporarily restricted. After 30 days of non-payment, the service may be disconnected, and reconnection fees may apply. If you anticipate payment difficulties, please contact our billing department to discuss payment arrangements."
        },
        {
          question: "How can I dispute a charge on my bill?",
          answer: "To dispute a charge, contact our billing department at 1099 or visit any service center. Please have your account details and the specific charge information ready. We investigate all billing disputes within 14 business days and provide a detailed response."
        },
        {
          question: "Do you offer automatic payment options?",
          answer: "Yes, we offer automatic payment options through bank card authorization. You can set this up through your personal account on our website or mobile app. With automatic payments, your monthly bill will be automatically charged to your designated payment method on the 5th of each month."
        }
      ]
    }
  ];

  // Calculate total FAQ count
  const totalFAQs = faqCategories.reduce((total, category) => total + category.items.length, 0);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    // Filter FAQ items based on search query
    const timer = setTimeout(() => {
      filterFAQItems(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to {totalFAQs} common questions about our telecommunication services</p>
      </div>

      <FAQSearch onSearch={handleSearch} />

      {faqCategories.map((category, categoryIndex) => (
        <div className="faq-category" key={categoryIndex}>
          <h3>{category.category}</h3>
          <div className="faq-container">
            {category.items.map((item, itemIndex) => {
              const globalIndex = categoryIndex * 100 + itemIndex; // Create unique index across categories
              return (
                <div 
                  className={`faq-item ${activeIndex === globalIndex ? 'active' : ''}`} 
                  key={globalIndex}
                >
                  <div 
                    className="faq-question" 
                    onClick={() => toggleFAQ(globalIndex)}
                  >
                    {item.question}
                  </div>
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;