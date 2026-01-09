import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Banner {
  title: string;
  description: string;
  image: string;
  icon: string;
}

interface HeroSectionProps {
  banners: Banner[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onScrollToSection: (id: string) => void;
}

const HeroSection = ({
  banners,
  currentSlide,
  onSlideChange,
  onScrollToSection,
}: HeroSectionProps) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next slide
      onSlideChange((currentSlide + 1) % banners.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right - previous slide
      onSlideChange(currentSlide === 0 ? banners.length - 1 : currentSlide - 1);
    }
  };

  return (
    <section 
      className="relative h-[600px] overflow-hidden bg-gray-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-start pt-[20%]">
            <div className="max-w-2xl text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-yellow-400">
                {banner.title}
              </h2>
              <p className="text-xl sm:text-2xl mb-8 text-gray-100">
                {banner.description}
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-20 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 h-auto"
                onClick={() => onScrollToSection("contact-form")}
              >
                Записаться на ремонт
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-orange-600 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;