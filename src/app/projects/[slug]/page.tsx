import ProjectPageClient from '@/components/ProjectPageClient';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'task-manager' },
    { slug: 'voodoo-test' },
    { slug: 'wedding-website' },
    { slug: 'tax-manager' }
  ];
}

const projectDetails = {
  'task-manager': {
    title: "Frontend Task Manager",
    description: "A modern task management application with drag-and-drop functionality and real-time updates. Built with React and TypeScript, featuring a clean and intuitive user interface.",
    features: [
      "Real-time task synchronization",
      "Drag and drop interface",
      "Task categories and priorities",
      "User authentication",
      "Responsive design"
    ],
    technologies: [
      { name: "React", icon: "react", color: "blue" },
      { name: "TypeScript", icon: "typescript", color: "blue" },
      { name: "Firebase", icon: "firebase", color: "orange" },
      { name: "Tailwind CSS", icon: "tailwind", color: "cyan" }
    ],
    highlights: [
      "Implemented real-time data synchronization using Firebase",
      "Created intuitive drag-and-drop interface for task management",
      "Built secure user authentication system",
      "Developed responsive design for all devices",
      "Implemented task filtering and search functionality"
    ],
    githubUrl: "#",
    liveUrl: "http://frontend-taskmanager.s3-website.eu-north-1.amazonaws.com/",
    image: "/images/grd.png",
    color: "from-blue-500 to-blue-700"
  },
  'voodoo-test': {
    title: "Voodoo Test",
    description: "E-commerce platform with modern UI/UX design. Features a comprehensive product catalog, shopping cart functionality, and user authentication system.",
    features: [
      "Product catalog with categories",
      "Shopping cart functionality",
      "User authentication",
      "Responsive design",
      "Payment integration"
    ],
    technologies: [
      { name: "React", icon: "react", color: "blue" },
      { name: "Redux", icon: "redux", color: "purple" },
      { name: "Styled Components", icon: "styled-components", color: "pink" },
      { name: "Node.js", icon: "nodejs", color: "green" }
    ],
    highlights: [
      "Developed comprehensive product catalog with categories",
      "Implemented shopping cart functionality",
      "Created user authentication system",
      "Built responsive design for all devices",
      "Integrated payment processing system"
    ],
    githubUrl: "#",
    liveUrl: "https://leshamer2255.github.io/Voodoo-Test/",
    image: "/images/магазин.png",
    color: "from-purple-500 to-purple-700"
  },
  'wedding-website': {
    title: "Wedding Website",
    description: "Interactive wedding invitation website built with Tilda. Features a beautiful timeline, RSVP form, photo gallery, and interactive elements to engage guests.",
    features: [
      "Interactive timeline",
      "RSVP form",
      "Photo gallery",
      "Location map",
      "Countdown timer"
    ],
    technologies: [
      { name: "Tilda", icon: "tilda", color: "blue" },
      { name: "JavaScript", icon: "javascript", color: "yellow" },
      { name: "CSS3", icon: "css3", color: "blue" },
      { name: "HTML5", icon: "html5", color: "orange" }
    ],
    highlights: [
      "Created interactive timeline of the couple's journey",
      "Implemented RSVP form with data collection",
      "Built photo gallery with lightbox functionality",
      "Added interactive map for venue location",
      "Developed countdown timer to the wedding day"
    ],
    githubUrl: "#",
    liveUrl: "https://project12826877.tilda.ws/",
    image: "/images/wedding.png",
    color: "from-pink-500 to-pink-700"
  },
  'tax-manager': {
    title: "Tax Manager",
    description: "Comprehensive tax management system for businesses and individuals. Features automated calculations, document management, and reporting capabilities.",
    features: [
      "Automated tax calculations",
      "Document management",
      "Financial reporting",
      "User dashboard",
      "Multi-user support"
    ],
    technologies: [
      { name: "React", icon: "react", color: "blue" },
      { name: "Node.js", icon: "nodejs", color: "green" },
      { name: "MongoDB", icon: "mongodb", color: "green" },
      { name: "Express", icon: "express", color: "gray" }
    ],
    highlights: [
      "Developed automated tax calculation engine",
      "Implemented secure document management system",
      "Created comprehensive financial reporting",
      "Built user-friendly dashboard interface",
      "Integrated multi-user authentication system"
    ],
    githubUrl: "#",
    liveUrl: "https://tax-manager-demo.com",
    image: "/images/grd.png",
    color: "from-green-500 to-green-700"
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <Link 
              href="/"
              className="inline-flex items-center text-blue-500 hover:text-blue-600"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <ProjectPageClient project={project} />;
} 