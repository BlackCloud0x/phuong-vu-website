import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Code, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import astrologyAppImage from "@/assets/astrology-app-screenshot.jpeg";
import astrologyChatImage from "@/assets/astrology-chat-screenshot.jpeg";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
const projectContent = [{
  title: "Project Overview",
  description: "Last summer, I kept hearing the same thing from my friends in Vietnam: they love astrology, but the apps are in English, and there's no Vietnamese-first experience that feels natural.\n\nThere wasn't a Vietnamese astrology API either, and realistically, the market might be too small for someone to build one soon. I decided it was the perfect opportunity to build with Cursor my first project that my friends and family could actually use.\n\nI also notice that most astrology apps are pretty passive: open, read, close. That's not how a real reading feels. Real readings are conversations—follow-ups, context, what-if questions. With modern LLMs, I saw an opportunity to utilize AI to replicate the experience of talking with an actual \"astrologer\" any time without awkward scheduling or high session fees.",
  content: <div className="h-full w-full flex items-center justify-center text-white rounded-lg p-2 mobile-screenshot">
        <img src={astrologyAppImage} alt="Astrology app interface showing daily readings" className="h-full w-auto object-contain rounded-lg" />
      </div>
}, {
  title: "Key Features",
  description: "I solved the lack of a Vietnamese astrology API by piping data from a reliable English provider and translating it with an LLM. I tested multiple models via OpenRouter and chose DeepSeek for its balance of accuracy and cost, which also let me offer instant switching between Vietnamese and English in the app. This setup fits a personal project, but it may not scale commercially because it pays twice—once for the astrology API and once for the LLM—to deliver a single feature.\n\n\nFor the Astrology Companion, I prompt‑engineered it to ground every answer in the natal chart, layer in current transits so guidance evolves over time, and speak like a warm, friendly friend. With transits and timing in context, answers change day to day, giving people a reason to come back for something genuinely new and personal. I also added light meditation‑style music to help users slow down, think, and reflect on their questions.",
  content: <div className="h-full w-full flex items-center justify-center text-white rounded-lg p-2 mobile-screenshot">
        <img src={astrologyChatImage} alt="Astrology chat interface showing conversation with AI assistant" className="h-full w-auto object-contain rounded-lg" />
      </div>
}, {
  title: "Technical Stack",
  description: "**IDE:** Cursor\n\n**Mobile Development Framework:** React Native, Expo, Typescript\n\n**UI & Styling:** React Native Paper, React Native Reanimated\n\n**Backend & Database:** Supabase for PostgreSQL database, Authentication, Edge functions\n\n**External Integrations:** Astrology API, Openrouter API, Deepseek & Gemini API, Revenue Cat",
  content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(249_115_22),rgb(234_179_8))] flex items-center justify-center text-white rounded-lg p-4">
        <div className="text-center">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Cursor</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">React Native</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">TypeScript</span>
            <span className="px-2 py-1 bg-white/20 rounded text-xs">Supabase</span>
          </div>
          <Code className="w-12 h-12 mx-auto" />
        </div>
      </div>
}, {
  title: "On Reflection",
  description: "This app won't change the world, but it changed my world a little. It taught me to build for the people I love, in the language they actually live in, and to let software listen more than it speaks.\n\nI've spent my whole career in tech, but not as a coder. Maybe that's why this moment feels so bright: AI turned \"someday\" into \"ship it\" . That's far from the end of coding though—it's the start of more voices building what they wish existed",
  content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(236_72_153),rgb(99_102_241))] flex items-center justify-center text-white rounded-lg p-6">
        <div className="text-center space-y-3">
          <Button variant="secondary" size="sm" asChild>
            <Link to="/projects/ai-companion/demo">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Link>
          </Button>
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
          
          {/* Mobile Content Gallery */}
          <div className="mt-16 lg:hidden">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Project Gallery</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory">
              {/* App Screenshots */}
              <div className="flex-shrink-0 snap-center">
                <div className="w-72 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-lg">
                  <img 
                    src={astrologyAppImage} 
                    alt="Astrology app interface showing daily readings" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-2">Daily Astrology Readings</p>
              </div>
              <div className="flex-shrink-0 snap-center">
                <div className="w-72 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-lg">
                  <img 
                    src={astrologyChatImage} 
                    alt="Astrology chat interface showing conversation with AI assistant" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-2">AI Companion Chat</p>
              </div>
              
              {/* Tech Stack Box */}
              <div className="flex-shrink-0 snap-center">
                <div className="w-72 h-96 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <span className="px-3 py-2 bg-white/20 rounded-lg text-sm font-medium">Cursor</span>
                      <span className="px-3 py-2 bg-white/20 rounded-lg text-sm font-medium">React Native</span>
                      <span className="px-3 py-2 bg-white/20 rounded-lg text-sm font-medium">TypeScript</span>
                      <span className="px-3 py-2 bg-white/20 rounded-lg text-sm font-medium">Supabase</span>
                      <span className="px-3 py-2 bg-white/20 rounded-lg text-sm font-medium">OpenRouter</span>
                      <span className="px-3 py-2 bg-white/20 rounded-lg text-sm font-medium">DeepSeek</span>
                    </div>
                    <Code className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-lg font-semibold">Tech Stack</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-2">Technologies Used</p>
              </div>
              
              {/* On Reflection Box */}
              <div className="flex-shrink-0 snap-center">
                <div className="w-72 h-96 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-2xl p-6 shadow-lg flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30" asChild>
                      <Link to="/projects/ai-companion/demo">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-2">Project Links</p>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default AICodeAssistant;