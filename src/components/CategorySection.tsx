import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

interface Category {
  name: string
  description: string
  image: string
  collectionId?: string
}

const categories: Category[] = [
  {
    name: 'Premium Dog Food',
    description: 'Complete nutrition for dogs of all ages and breeds',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop'
  },
  {
    name: 'Premium Cat Food',
    description: 'Balanced meals crafted for feline health',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop'
  },
  {
    name: 'Health Supplements',
    description: 'Support wellness from joint health to digestion',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop'
  }
]

export const CategorySection = () => {
  const navigate = useNavigate()

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-japanese text-3xl md:text-4xl font-light text-foreground mb-4">
            Our Categories
          </h2>
          <p className="text-japanese text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully curated products for every aspect of your pet's wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-japanese text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/')}
                  >
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}