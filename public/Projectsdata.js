// src/data/Projectsdata.js

const projects = [
  {
    title: "PlantCare",
    shortDescription: "A plant care tracking application with CRUD features, theming, and personalized dashboards.",
    image: "public/Screenshot 2025-06-29 133854.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://mango-f8850.web.app/",
    githubLinks: {
      client: "https://github.com/rjlam1/Mango",
      server: "https://github.com/rjlam1/Mango-Server"
    },
    features: [
      "Product catalog with categories and filters",
      "User authentication and profiles",
      "Shopping cart functionality",
      "Secure payment processing",
      "Admin dashboard for product management"
    ],
    challenges: "Implementing real-time inventory updates and handling concurrent user sessions during high traffic periods.",
    futurePlans: "Add recommendation engine, implement AR product preview, and expand to mobile app."
  },
  {
    title: "Task Management App",
    shortDescription: "A task management and collaboration tool with real-time sync and team features.",
    image: "public/Screenshot 2025-06-29 135019.png",
    techStack: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveLink: "https://artifactare.web.app/",
    githubLinks: {
      client: "https://github.com/rjlam1/Artifactares",
      server: "https://github.com/rjlam1/Artifactare-Server"
    },
    features: [
      "Create, update, and delete tasks",
      "Drag-and-drop interface",
      "Real-time collaboration",
      "Team management",
      "Progress tracking"
    ],
    challenges: "Synchronizing real-time updates across multiple clients while maintaining data consistency.",
    futurePlans: "Add calendar integration, time tracking, and reporting dashboards."
  },
  {
    title: "JobFinder",
    shortDescription: "A job listing platform to explore companies, search jobs, and apply directly.",
    image: "public/Screenshot 2025-06-29 134400.png",
    techStack: ["Next.js", "TypeScript", "Spoonacular API", "Tailwind CSS"],
    liveLink: "https://splendid-pony-adb6c7.netlify.app/",
    githubLinks: {
      client: "https://github.com/rjlam1/Job-Track",
      server: "https://github.com/shafiul-dev/ecommerce-platform-server"
    },
    features: [
      "Search recipes by ingredients or name",
      "Filter by dietary restrictions",
      "Save favorite recipes",
      "Meal planning calendar",
      "Nutritional information"
    ],
    challenges: "Handling API rate limits and optimizing performance with large datasets.",
    futurePlans: "Add user-generated content, shopping list generator, and cooking timer."
  }
];

export default projects;
