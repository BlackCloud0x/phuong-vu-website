import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Code, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import aiCodeImage from "@/assets/project-ai-code.jpg";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
const projectContent = [{
  title: "Project Overview",
  description: "Last summer, I kept hearing the same thing from people I care about: they love astrology, but the apps are in English, and there's no Vietnamese-first experience that feels natural. There wasn't a Vietnamese astrology API either, and realistically, the market might be too small for someone to build one soon. I decided it was the perfect opportunity to build with Cursor my first project that my friends and family could actually use.\n\nI also notice that most astrology apps are pretty passive: open, read, close. That's not how a real reading feels. Real readings are conversations—follow-ups, context, what-if questions. With modern LLMs, I saw an opportunity to utilize AI to replicate the experience of talking with an actual \"astrologer\" any time without awkward scheduling or high session fees.",
  content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(6_182_212),rgb(16_185_129))] flex items-center justify-center text-white rounded-lg p-6">
        <div className="text-center">
          
          
        </div>
      </div>
}, {
  title: "Key Features",
  description: "I solved the lack of a Vietnamese astrology API by piping data from a reliable English provider and translating it with an LLM. I tested multiple models via OpenRouter and chose DeepSeek for its balance of accuracy and cost, which also let me offer instant switching between Vietnamese and English in the app. This setup fits a personal project, but it may not scale commercially because it pays twice—once for the astrology API and once for the LLM—to deliver a single feature.\n\n\nFor the Astrology Companion, I prompt‑engineered it to ground every answer in the natal chart, layer in current transits so guidance evolves over time, and speak like a warm, friendly friend. With transits and timing in context, answers change day to day, giving people a reason to come back for something genuinely new and personal. I also added light meditation‑style music to help users slow down, think, and reflect on their questions.",
  content: <div className="h-full w-full flex items-center justify-center text-white">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop" className="h-full w-full object-cover rounded-lg" alt="Code features interface" />
      </div>
}, {
  title: "Technical Stack",
  description: "**IDE:** Cursor\n\n**Mobile Development Framework:** React Native, Expo, Typescript\n\n**UI & Styling:** React Native Paper, React Native Reanimated\n\n**Backend & Database:** Supabase for PostgreSQL database, Authentication, Edge functions\n\n**External Integrations:** Astrology API, Openrouter API, Deepseek & Gemini API, Revenue Cat",
  content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(249_115_22),rgb(234_179_8))] flex items-center justify-center text-white rounded-lg p-4">
        <div className="text-center">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Python</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">TensorFlow</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">React</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">TypeScript</span>
          </div>
          <Code className="w-12 h-12 mx-auto" />
        </div>
      </div>
}, {
  title: "Project Information",
  description: "Duration: 6 months\nTeam Size: 3 developers\nMy Role: Lead Developer & ML Engineer\nStatus: Live & Deployed\n\nThis project represents a significant advancement in developer tooling, combining state-of-the-art machine learning with practical software development needs.",
  content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(236_72_153),rgb(99_102_241))] flex items-center justify-center text-white rounded-lg p-6">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Button variant="secondary" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1" />
                Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-1" />
                Code
              </a>
            </Button>
          </div>
          <Brain className="w-12 h-12 mx-auto" />
          <p className="text-sm font-medium">Production Ready</p>
        </div>
      </div>
}];
const AICodeAssistant = () => {
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="px-4 py-2 border-2 border-primary/50 rounded-lg font-bold text-lg tracking-wider text-foreground bg-primary/10 backdrop-blur-sm">
              PHUONG VU
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Project Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">AI Companion for Astrology</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A compassionate companion for everyday decisions, guided by astrology</p>
          </div>

          {/* Sticky Scroll Content */}
          <StickyScroll content={projectContent} />
        </div>
      </main>
    </div>;
};
export default AICodeAssistant;