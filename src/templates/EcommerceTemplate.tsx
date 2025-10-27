import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-6 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="heading-japanese text-2xl font-light text-foreground">
              純粋
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-light"
              >
                Wellness Journal
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-8">
            <h1 className="heading-japanese text-3xl font-light text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-muted/30 py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="heading-japanese text-2xl font-light text-foreground mb-4">
              純粋
            </div>
            <p className="text-japanese text-muted-foreground mb-6 max-w-md">
              Premium pet wellness inspired by Japanese principles of balance, 
              purity, and mindful living. Every product is crafted with care 
              for your beloved companion.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4 text-foreground">Explore</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Wellness Journal
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium mb-4 text-foreground">Support</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Shipping Info
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Returns
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 純粋 Pet Wellness. Crafted with care for your companions.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}