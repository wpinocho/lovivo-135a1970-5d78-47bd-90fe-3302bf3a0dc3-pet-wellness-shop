import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { PetSelector } from '@/components/PetSelector'
import { CategorySection } from '@/components/CategorySection'
import { CTASection } from '@/components/CTASection'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'
import { useState } from 'react'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    loading,
    filteredProducts,
  } = logic

  const [selectedPet, setSelectedPet] = useState<{
    petType: string
    age: string
    breed: string
  } | null>(null)

  const handlePetSelection = (petType: string, age: string, breed: string) => {
    setSelectedPet({ petType, age, breed })
  }

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Pet Selector */}
      <PetSelector onSelectionComplete={handlePetSelection} />

      {/* Category Section */}
      <CategorySection />

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-japanese text-3xl md:text-4xl font-light text-foreground mb-4">
              {selectedPet 
                ? `Recommended for Your ${selectedPet.petType === 'dog' ? 'Dog' : 'Cat'}`
                : 'Featured Products'
              }
            </h2>
            <p className="text-japanese text-muted-foreground">
              Premium nutrition and supplements for optimal wellness
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}