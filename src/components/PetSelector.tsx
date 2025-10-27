import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dog, Cat } from 'lucide-react'

interface PetSelectorProps {
  onSelectionComplete: (petType: string, age: string, breed: string) => void
}

export const PetSelector = ({ onSelectionComplete }: PetSelectorProps) => {
  const [petType, setPetType] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [breed, setBreed] = useState<string>('')

  const ageGroups = {
    dog: ['Puppy (0-12 months)', 'Adult (1-7 years)', 'Senior (7+ years)'],
    cat: ['Kitten (0-12 months)', 'Adult (1-7 years)', 'Senior (7+ years)']
  }

  const breeds = {
    dog: ['Small Breed', 'Medium Breed', 'Large Breed', 'Giant Breed'],
    cat: ['Domestic Shorthair', 'Domestic Longhair', 'Siamese', 'Persian', 'Maine Coon']
  }

  const handleSubmit = () => {
    if (petType && age && breed) {
      onSelectionComplete(petType, age, breed)
      // Scroll to products
      const productsElement = document.getElementById('featured-products')
      if (productsElement) {
        productsElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="pet-selector" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-japanese text-3xl md:text-4xl font-light text-foreground mb-4">
            Find Perfect Nutrition
          </h2>
          <p className="text-japanese text-muted-foreground">
            Tell us about your companion to receive personalized recommendations
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="p-8">
            {/* Pet Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-4">
                Select Your Pet
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setPetType('dog')
                    setAge('')
                    setBreed('')
                  }}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    petType === 'dog'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Dog className={`h-12 w-12 mx-auto mb-3 ${
                    petType === 'dog' ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <span className="block text-center font-medium">Dog</span>
                </button>
                <button
                  onClick={() => {
                    setPetType('cat')
                    setAge('')
                    setBreed('')
                  }}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    petType === 'cat'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Cat className={`h-12 w-12 mx-auto mb-3 ${
                    petType === 'cat' ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <span className="block text-center font-medium">Cat</span>
                </button>
              </div>
            </div>

            {/* Age Selection */}
            {petType && (
              <div className="mb-8 animate-fade-in">
                <label className="block text-sm font-medium text-foreground mb-4">
                  Age Group
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ageGroups[petType as keyof typeof ageGroups].map((ageGroup) => (
                    <button
                      key={ageGroup}
                      onClick={() => setAge(ageGroup)}
                      className={`p-4 rounded-lg border-2 transition-all text-sm ${
                        age === ageGroup
                          ? 'border-primary bg-primary/5 font-medium'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {ageGroup}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Breed Selection */}
            {petType && age && (
              <div className="mb-8 animate-fade-in">
                <label className="block text-sm font-medium text-foreground mb-4">
                  Breed Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {breeds[petType as keyof typeof breeds].map((breedType) => (
                    <button
                      key={breedType}
                      onClick={() => setBreed(breedType)}
                      className={`p-4 rounded-lg border-2 transition-all text-sm ${
                        breed === breedType
                          ? 'border-primary bg-primary/5 font-medium'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {breedType}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            {petType && age && breed && (
              <div className="animate-fade-in">
                <Button 
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full"
                >
                  View Recommended Products
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}