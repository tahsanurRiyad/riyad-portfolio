

const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      longDescription: "A comprehensive e-commerce platform built from scratch with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The platform handles thousands of products and supports multiple payment methods.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search & Filters",
        "Shopping Cart & Checkout Process",
        "Stripe Payment Integration",
        "Order Management System",
        "Admin Dashboard",
        "Responsive Design",
        "Email Notifications"
      ],
      challenges: "One of the main challenges was implementing real-time inventory management to prevent overselling. I solved this by implementing optimistic locking and database transactions to ensure data consistency.",
      results: "The platform successfully handles 1000+ daily transactions with 99.9% uptime. Average page load time is under 2 seconds, and the conversion rate improved by 35% compared to the previous solution.",
      github: "#",
      live: "#",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      longDescription: "A collaborative task management application designed for teams to organize, track, and complete projects efficiently. Built with Vue.js frontend and Express.js backend, featuring real-time collaboration through Socket.io and robust data persistence with PostgreSQL.",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      features: [
        "Real-time Collaboration",
        "Project & Task Organization",
        "Team Member Management",
        "File Attachments",
        "Due Date Tracking",
        "Activity Timeline",
        "Kanban Board View",
        "Email Notifications"
      ],
      challenges: "The biggest challenge was implementing real-time synchronization across multiple users without conflicts. I implemented operational transformation algorithms to handle concurrent edits and maintain data consistency.",
      results: "The app is used by 500+ teams with 99.5% user satisfaction rate. Real-time updates happen within 100ms, and the collaborative features reduced project completion time by 25%.",
      github: "#",
      live: "#",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business metrics",
      longDescription: "An advanced analytics dashboard that transforms complex business data into actionable insights. Built with React and D3.js for interactive visualizations, powered by a Python Flask backend that processes and analyzes large datasets in real-time.",
      tech: ["React", "D3.js", "Python", "Flask"],
      features: [
        "Interactive Data Visualizations",
        "Real-time Metrics Tracking",
        "Custom Report Generation",
        "Data Export Capabilities",
        "Multi-tenant Architecture",
        "Role-based Access Control",
        "Automated Alerts",
        "Mobile Responsive Charts"
      ],
      challenges: "Processing and visualizing large datasets (10M+ records) while maintaining smooth user interactions was challenging. I implemented data pagination, caching strategies, and optimized D3.js rendering to handle large datasets efficiently.",
      results: "The dashboard processes 10M+ data points daily with sub-second query response times. Business teams report 40% faster decision-making and 60% reduction in manual reporting time.",
      github: "#",
      live: "#",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop"
      ]
    }
  ];

  export default projectsData;