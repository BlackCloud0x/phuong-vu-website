import pixelAvatar from "@/assets/pixel-avatar.png";
const AboutSection = () => {
  return <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center max-w-5xl mx-auto">
          {/* Avatar */}
          <div className="flex-shrink-0 md:w-auto w-full flex justify-center">
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img src={pixelAvatar} alt="Pixel Art Avatar" className="w-40 h-40 object-cover rounded-xl animate-float" />
              </div>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl opacity-50 blur-xl -z-10 animate-glow" />
            </div>
          </div>

          {/* About Content */}
          <div className="glass-card p-8 rounded-2xl flex-1 min-h-[200px] flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed">
              <p>
                I'm a passionate Software Engineer with a love for creating elegant 
                solutions to complex problems. With a focus on web technologies and 
                user experience, I transform ideas into pixel-perfect applications.
              </p>
              <p>
                My expertise spans modern web frameworks, cloud technologies, and 
                product strategy. I believe in building software that not only works 
                beautifully but also creates meaningful impact for users.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Product Strategy", "UI/UX Design"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;