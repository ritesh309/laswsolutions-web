// Service Icons - Using string-based SVG paths
export const serviceIcons = {
  taxLegal: {
    viewBox: "0 0 24 24",
    path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  },
  incomeTax: {
    viewBox: "0 0 24 24",
    path: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
  },
  gst: {
    viewBox: "0 0 24 24",
    path: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V7m0 12v-1m-6.5-.24L12 10m6.5-.24L12 14m-6.5 2.47l6.5-4.23m6.5 4.23l-6.5-4.23M12 20a8 8 0 110-16 8 8 0 010 16z"
  },
  audit: {
    viewBox: "0 0 24 24",
    path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  companyWorks: {
    viewBox: "0 0 24 24",
    path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2z"
  },
  otherTax: {
    viewBox: "0 0 24 24",
    path: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
  }
};

// Benefit Icons - Using string-based SVG paths
export const benefitIcons = {
  expertise: {
    viewBox: "0 0 24 24",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.045 4.01 1.096 7.847 3.04 11.382M12 21.056a11.955 11.955 0 01-8.618-3.04A12.007 12.007 0 002.944 12c.045-4.01 1.096-7.847 3.04-11.382"
  },
  clientCentric: {
    viewBox: "0 0 24 24",
    path: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V7m0 12v-1m-6.5-.24L12 10m6.5-.24L12 14m-6.5 2.47l6.5-4.23m6.5 4.23l-6.5-4.23M12 20a8 8 0 110-16 8 8 0 010 16z"
  },
  holistic: {
    viewBox: "0 0 24 24",
    path: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 8a8 8 0 01-8-8c0-1.077.26-2.088.72-3M7 12a5 5 0 005 5m0 0a5 5 0 005-5m0 0a5 5 0 01-5-5m0 0a5 5 0 01-5 5m5 5v-1m0 0a5 5 0 01-5-5m5 5v-1m-5-1a5 5 0 015 5m0-5V7"
  }
};

// Website Data
export const websiteData = {
  stats: [
    {
      number: "15+",
      title: "Years of Experience",
      description: "Proven track record of success"
    },
    {
      number: "500+",
      title: "Satisfied Clients",
      description: "Building lasting relationships"
    },
    {
      number: "98%",
      title: "Success Rate",
      description: "Dedicated to achieving your goals"
    }
  ],

  services: [
    {
      icon: serviceIcons.taxLegal,
      title: "TAX & Legal Services",
      description: "Comprehensive advisory and compliance services for all your tax and legal requirements, ensuring adherence to regulations and optimizing your financial position."
    },
    {
      icon: serviceIcons.incomeTax,
      title: "Income Tax",
      description: "Expert assistance with income tax planning, filing, and representation, minimizing liabilities and maximizing returns for individuals and businesses."
    },
    {
      icon: serviceIcons.gst,
      title: "GST",
      description: "Seamless Goods and Services Tax (GST) registration, compliance, return filing, and advisory services to keep your business GST-compliant."
    },
    {
      icon: serviceIcons.audit,
      title: "AUDIT",
      description: "Independent and thorough auditing services to ensure financial transparency, accuracy, and compliance with accounting standards and regulations."
    },
    {
      icon: serviceIcons.companyWorks,
      title: "COMPANY WORKS",
      description: "Assistance with company registration, secretarial compliance, corporate governance, and other essential legal formalities for businesses."
    },
    {
      icon: serviceIcons.otherTax,
      title: "All Other Tax Works",
      description: "Comprehensive support for various other tax-related matters, including advisory on indirect taxes, international taxation, and tax litigation support."
    }
  ],

  benefits: [
    {
      icon: benefitIcons.expertise,
      title: "Unmatched Expertise",
      description: "Our team comprises highly qualified and experienced legal and tax professionals dedicated to providing accurate and insightful advice."
    },
    {
      icon: benefitIcons.clientCentric,
      title: "Client-Centric Approach",
      description: "We prioritize your needs, offering personalized solutions and clear communication every step of the way. Your success is our priority."
    },
    {
      icon: benefitIcons.holistic,
      title: "Holistic Solutions",
      description: "From complex tax planning to intricate legal matters, we offer integrated solutions to address all your financial and legal challenges."
    }
  ],

  testimonials: [
    {
      quote: "Law Solutions Associates has been instrumental in managing our company's tax compliance. Their expertise in GST and Income Tax is truly exceptional. Highly recommended!",
      name: "John Doe",
      position: "CEO, Tech Innovations",
      avatarSrc: "https://placehold.co/60x60/e0e0e0/888888?text=JD",
      avatarAlt: "Client Avatar"
    },
    {
      quote: "Their team provided invaluable guidance during our company registration process. Professional, efficient, and always available to answer our queries. A fantastic experience!",
      name: "Anjali Sharma",
      position: "Founder, Creative Minds",
      avatarSrc: "https://placehold.co/60x60/e0e0e0/888888?text=AS",
      avatarAlt: "Client Avatar"
    },
    {
      quote: "I approached Law Solutions Associates for my personal income tax filing, and they made the entire process seamless and stress-free. Their attention to detail is commendable.",
      name: "Ravi Kumar",
      position: "Individual Client",
      avatarSrc: "https://placehold.co/60x60/e0e0e0/888888?text=RK",
      avatarAlt: "Client Avatar"
    },
    {
      quote: "The audit services provided were thorough and professional, giving us complete confidence in our financial statements. A truly reliable partner for any business.",
      name: "Sarah Patel",
      position: "CFO, Global Ventures",
      avatarSrc: "https://placehold.co/60x60/e0e0e0/888888?text=SP",
      avatarAlt: "Client Avatar"
    }
  ],

  team: [
    {
      name: "Mr. R.K. Sharma",
      position: "Senior Legal Counsel",
      description: "Specializing in corporate law and taxation, Mr. Sharma brings over 20 years of experience in complex legal advisory.",
      imageSrc: "https://placehold.co/150x150/333333/ffffff?text=Partner+1",
      imageAlt: "Team Member 1"
    },
    {
      name: "Ms. Priya Singh",
      position: "Taxation Expert",
      description: "An authority in GST and Income Tax, Ms. Singh ensures optimal tax strategies and compliance for our diverse clientele.",
      imageSrc: "https://placehold.co/150x150/333333/ffffff?text=Partner+2",
      imageAlt: "Team Member 2"
    },
    {
      name: "Mr. Alok Verma",
      position: "Audit & Compliance Lead",
      description: "With a keen eye for detail, Mr. Verma leads our audit division, ensuring financial integrity and regulatory adherence.",
      imageSrc: "https://placehold.co/150x150/333333/ffffff?text=Partner+3",
      imageAlt: "Team Member 3"
    }
  ],

  contactInfo: {
    phones: ["991873511", "7800051882", "9022290143, 9455711484"],
    email: "lawsolution2015@gmail.com",
    website: "http://lawsolution.co.in"
  },

  callToAction: {
    title: "Ready to Transform Your Legal & Tax Landscape?",
    description: "Connect with our experts today for a personalized consultation and discover how we can help you achieve your goals.",
    buttonText: "Schedule a Consultation",
    buttonHref: "#contact"
  }
}; 