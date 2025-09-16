import { Gallery4, Gallery4Item } from "@/components/ui/gallery4";
import aiCodeImage from "@/assets/project-ai-code.jpg";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import smartHomeImage from "@/assets/project-smart-home.jpg";
import mobileAppImage from "@/assets/project-mobile-app.jpg";

const projects: Gallery4Item[] = [
  {
    id: "ai-code-assistant",
    title: "AI-Powered Code Assistant",
    description: "A machine learning-based code completion tool that helps developers write better code faster.",
    image: aiCodeImage,
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    href: "/projects/ai-code-assistant"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: ecommerceImage,
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    href: "/projects/ecommerce-platform"
  },
  {
    id: "smart-home-dashboard",
    title: "Smart Home Dashboard",
    description: "IoT dashboard for monitoring and controlling connected home devices in real-time.",
    image: smartHomeImage,
    technologies: ["React", "Firebase", "Arduino", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    href: "/projects/smart-home-dashboard"
  },
  {
    id: "mobile-trading-app",
    title: "Mobile Trading App",
    description: "A comprehensive cryptocurrency trading platform with real-time market data and portfolio management.",
    image: mobileAppImage,
    technologies: ["React Native", "TypeScript", "GraphQL", "Redux"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    href: "/projects/mobile-trading-app"
  }
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-background">
      <Gallery4 items={projects} />
    </div>
  );
};
export default ProjectsSection;