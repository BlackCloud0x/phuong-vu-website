import { Gallery4, Gallery4Item } from "@/components/ui/gallery4";
import aiCodeImage from "@/assets/project-ai-code.jpg";

const projects: Gallery4Item[] = [
  {
    id: "ai-code-assistant",
    title: "AI Companion for Astrology",
    description: "A compassionate companion for everyday decisions, guided by astrology",
    image: aiCodeImage,
    href: "/projects/ai-code-assistant"
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