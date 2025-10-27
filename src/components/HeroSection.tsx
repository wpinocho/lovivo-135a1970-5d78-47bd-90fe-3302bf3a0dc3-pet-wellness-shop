import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export const HeroSection = () => {
  const scrollToSelector = () => {
    const selectorElement = document.getElementById('pet-selector')
    if (selectorElement) {
      selectorElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600&h=1200&fit=crop"
          alt="Peaceful dog and cat"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="heading-japanese text-5xl md:text-7xl font-light text-foreground mb-6">
            純粋な健康
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Pure Wellness
          </p>
          <p className="text-japanese text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Premium nutrition and supplements crafted with care for your beloved companions. 
            Inspired by Japanese principles of balance, purity, and mindful living.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base"
              onClick={scrollToSelector}
            >
              Find Perfect Nutrition
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-base"
              onClick={() => {
                const productsElement = document.getElementById('featured-products')
                if (productsElement) {
                  productsElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Explore Products
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToSelector}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}