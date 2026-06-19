import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedHeading from '../components/AnimatedHeading';
import AnimatedHeadingforMOName from '../components/AnimatedMohamedGalhoumBrand';
import HeroImage from '../components/AnimatedHeroImage';
import { Button } from '../components/Button.jsx';
import ContactButton from '../components/ContactButton.jsx';
export const Hero = () => {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg content */}
        <div className="absolute inset-0">
          <img
            src="public/hero-bg.jpg"
            alt="Background image"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        </div>
        {/* Green Dots */}
        <div className = "absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
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
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className = "grid lg:grid-cols-2 gap-12 items-center">
                {/* left Column - text Content */}
                <div className = "space-y-8">
                    <AnimatedHeadingforMOName />
                    <div className = "animate-fade-in">
                        <span className = "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className = "w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineer - Full Stack Engineer - Competitive Programmer
                        </span>
                    </div>  
                    {/* Headline */}
                    <div>
                        <AnimatedHeading />
                            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Crafting fast, scalable, and intuitive web experiences with a strong focus on{" "}
                                <span className="text-primary glow-text font-medium">
                                    Frontend Engineering
                                </span>.
                            </p>
                            <p className="mt-3 text-lg md:text-xl text-muted-foreground leading-relaxed">
                                <span className="text-primary glow-text font-medium">
                                    Competitive Programmer
                                </span>{" "}
                                passionate about algorithms, problem-solving, and{" "}
                                <span className="font-serif italic text-white">
                                    building efficient solutions
                                </span>.
                            </p>
                    </div>
                    {/* Buttons */}
                    <div className = "flex items-center gap-6">
                        <Button size="lg">Contact Me </Button>
                        <ContactButton />
                    </div>
                </div>
                {/* right Column - Profile Image */}
                <div className = "flex justify-center lg:justify-end">
                    <HeroImage />
                </div>
            </div>
        </div>
      </section>
    );
}