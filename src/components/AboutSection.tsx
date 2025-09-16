import pixelAvatar from "@/assets/pixel-avatar.png";
const AboutSection = () => {
  return <section id="about" className="py-20 px-6 relative">
      {/* Light overlay for consistency */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="glass-card p-4 rounded-2xl">
                <img src={pixelAvatar} alt="Pixel Art Avatar" className="w-48 h-48 object-cover rounded-xl animate-float" />
              </div>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-xl -z-10 animate-glow" />
            </div>
          </div>

          {/* About Content */}
          <div className="glass-card p-6 rounded-2xl max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-card-foreground leading-relaxed">
              <p>
                I'm a passionate Software Engineer with a love for creating elegant 
                solutions to complex problems. With a focus on web technologies and 
                user experience, I transform ideas into pixel-perfect applications.
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