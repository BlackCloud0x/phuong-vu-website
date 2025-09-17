import pixelAvatar from "@/assets/pixel-avatar.png";
import pixelLandscape from "@/assets/pixel-landscape-about.png";

const AboutSection = () => {
  return <section 
    id="about" 
    className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative bg-background"
    style={{
      backgroundImage: `url(${pixelLandscape})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Background overlay */}
    <div className="absolute inset-0 bg-black/30" />
    <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-center w-full mx-auto">
          {/* Avatar */}
          <div className="flex-shrink-0 lg:w-auto w-full flex justify-center">
            <div className="relative">
              <div className="glass-card bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20">
                <img src={pixelAvatar} alt="Pixel Art Avatar" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg sm:rounded-xl animate-float" />
              </div>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl sm:rounded-2xl opacity-50 blur-xl -z-10 animate-glow" />
            </div>
          </div>

          {/* About Content */}
          <div className="glass-card bg-white/95 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/20 flex-1 min-h-[200px] flex flex-col justify-center w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">About Me</h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-none">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">I am a first-year MBA candidate at the Yale School of Management. My experience spans product management and strategy at technology startups across all stages, from pre-seed ventures to Series D companies. Most recently, I led country expansion for ByteDance's education product in Vietnam and co-founded an AI platform that enables creators to build and monetize virtual influencers</p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                My expertise spans modern web frameworks, cloud technologies, and 
                product strategy. I believe in building software that not only works 
                beautifully but also creates meaningful impact for users.
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Product", "Growth", "Strategy", "AI Native", "Entrepreneurial"].map(skill => <span key={skill} className="px-3 sm:px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium backdrop-blur-sm whitespace-nowrap">
                    {skill}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;