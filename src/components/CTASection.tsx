import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export const CTASection = () => {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our wellness tips and exclusive offers.",
      })
      setEmail('')
    }
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-japanese text-3xl md:text-4xl font-light text-foreground mb-4">
            Join Our Wellness Community
          </h2>
          <p className="text-japanese text-muted-foreground max-w-2xl mx-auto mb-8">
            Receive expert tips, exclusive offers, and the latest in pet wellness. 
            Embrace a mindful approach to your companion's health.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </div>
        </form>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-light text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Natural Ingredients</p>
          </div>
          <div>
            <div className="text-3xl font-light text-primary mb-2">50k+</div>
            <p className="text-sm text-muted-foreground">Happy Pets</p>
          </div>
          <div>
            <div className="text-3xl font-light text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}