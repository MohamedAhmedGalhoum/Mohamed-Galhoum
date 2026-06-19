export const Hero = () => {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg content */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Background image"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        </div>
        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20a663",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `slow-drift ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        {/* Content */}
        <div>
            <div>
                {/* left Column - text Content */}
                <div>
                    <div>
                        
                    </div>
                </div>
                {/* right Column - Profile Image */}
                
            </div>
        </div>
      </section>
    );
}