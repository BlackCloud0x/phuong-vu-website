import pixelAvatar from "@/assets/pixel-avatar.png";
const AboutSection = () => {
  return <section id="about" className="py-20 px-6 relative">
      {/* Light overlay for consistency */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <img src={pixelAvatar} alt="Pixel Art Avatar" className="w-64 h-64 object-cover rounded-2xl animate-float" />
              </div>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-xl -z-10 animate-glow" />
            </div>
          </div>

          {/* About Content */}
          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-card-foreground leading-relaxed">
              <p>
                I'm a passionate Software Engineer with a love for creating elegant 
                solutions to complex problems. With a focus on web technologies and 
                user experience, I transform ideas into pixel-perfect applications.
              </p>
              <p>
                My journey in software development spans across multiple domains, 
                from AI-powered tools to e-commerce platforms and IoT solutions. 
                I believe in writing clean, maintainable code that not only works 
                but tells a story.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-8">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;