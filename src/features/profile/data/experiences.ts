import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "fantech-nepal",
    companyName: "Fantech Nepal",
    companyLogo: "/images/fantech logo.png",
    positions: [
      {
        id: "fantech-web-developer",
        title: "Web Developer",
        employmentPeriod: {
          start: "08.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop and maintain web applications for Fantech Nepal's e-commerce platform
- Build responsive websites using modern web technologies
- Implement user-friendly interfaces for online gaming and tech product sales
- Collaborate with team to enhance website functionality and user experience
- Optimize website performance and ensure cross-browser compatibility
- Integrate payment systems and inventory management features`,
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MySQL",
          "WordPress",
          "E-commerce",
          "Responsive Design",
          "Web Optimization",
          "Teamwork",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "pebbles-nepal",
    companyName: "Pebbles Nepal",
    companyLogo: "/images/pebbles nepal.png",
    positions: [
      {
        id: "pebbles-web-developer",
        title: "Web Developer",
        employmentPeriod: {
          start: "08.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop web solutions for Pebbles Nepal (sister company of Fantech Nepal)
- Create and maintain company websites and digital platforms
- Work on e-commerce solutions and online presence
- Ensure consistent branding and user experience across platforms
- Collaborate with Fantech Nepal team for integrated solutions`,
        skills: [
          "Web Development",
          "E-commerce",
          "Digital Marketing",
          "Cross-platform Integration",
          "Brand Consistency",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "hukut-store",
    companyName: "Hukut Store",
    companyLogo: "/images/hukut logo.png",
    positions: [
      {
        id: "hukut-videographer",
        title: "Videographer/Editor",
        employmentPeriod: {
          start: "2023",
          end: "12.2024",
        },
        employmentType: "Contract",
        icon: "design",
        description: `- Create engaging video content for product marketing and promotions
- Edit and post-process videos for social media and e-commerce platforms
- Develop visual storytelling strategies for brand promotion
- Manage video production workflow from concept to final delivery
- Optimize videos for different platforms and audiences`,
        skills: [
          "Video Editing",
          "Adobe Premiere Pro",
          "After Effects",
          "Content Creation",
          "Social Media Marketing",
          "Visual Storytelling",
          "Brand Promotion",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "freelance-android",
    companyName: "Freelance Android Development",
    companyLogo: "/images/companies/google-play.svg",
    positions: [
      {
        id: "android-developer",
        title: "Android Developer",
        employmentPeriod: {
          start: "2017",
        },
        employmentType: "Freelance",
        icon: "code",
        description: `Independent Android app development with published apps on Google Play Store:
- [Nepali Date Converter BS/AD](https://play.google.com/store/apps/dev?id=6002867904479723419) - Easy BS to AD Nepali date converter with 1K+ downloads
- Rain Nepal - Weather & Safety - Weather app for Nepal
- Dashain Countdown 2025 - Nepal - Cultural celebration countdown app
- Alpha Flashlight - Lightweight - Utility app with 4.8 star rating

Focus on creating minimal, everyday use apps for the Nepali community with emphasis on local needs and cultural relevance.`,
        skills: [
          "Android Development",
          "Java",
          "Kotlin",
          "Android Studio",
          "Google Play Store",
          "UI/UX Design",
          "Local Market Research",
          "App Publishing",
          "User Experience",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
