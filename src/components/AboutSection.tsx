import pixelAvatar from "@/assets/pixel-avatar.png";
const AboutSection = () => {
  return <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative bg-background min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-stretch justify-center w-full">
          {/* Avatar */}
          <div className="lg:w-2/5 w-full">
            <div className="relative h-full">
              <div className="glass-card p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl h-full flex items-center justify-center min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
                <img src={pixelAvatar} alt="Pixel Art Avatar" className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-cover rounded-xl sm:rounded-2xl animate-float shadow-2xl" />
              </div>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl sm:rounded-3xl opacity-50 blur-xl -z-10 animate-glow" />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-3/5 w-full">
            <div className="glass-card p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">About Me</h2>
              <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed flex-1">
                <p className="leading-relaxed">
                  I'm a passionate Software Engineer with a love for creating elegant 
                  solutions to complex problems. With a focus on web technologies and 
                  user experience, I transform ideas into pixel-perfect applications.
                </p>
                <p className="leading-relaxed">
                  My expertise spans modern web frameworks, cloud technologies, and 
                  product strategy. I believe in building software that not only works 
                  beautifully but also creates meaningful impact for users.
                </p>
              </div>
              
              {/* Skills */}
              <div className="mt-8 sm:mt-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-4 sm:mb-6">Core Skills</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {["React", "TypeScript", "Node.js", "Product Strategy", "UI/UX Design"].map((skill) => (
                    <span key={skill} className="px-4 sm:px-6 py-3 sm:py-4 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm sm:text-base lg:text-lg font-medium backdrop-blur-sm whitespace-nowrap hover:bg-primary/30 transition-all duration-300 shadow-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;