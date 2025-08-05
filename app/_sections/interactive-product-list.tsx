"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  // CardContent
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Product {
  id: string
  title: string
  description: string
  images: StaticImageData[]
  href?: string
}

interface ProductListProps {
  products: Product[]
}

export function InteractiveProductList({ products }: ProductListProps) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640) // Adjust this breakpoint as needed
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  useEffect(() => {
    if (products.length > 0 && !activeProduct) {
      setActiveProduct(products[0])
    }
  }, [products, activeProduct])

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="flex flex-col sm:flex-row overflow-hidden">
      <div className="relative aspect-video sm:aspect-square sm:w-2/5 lg:w-5/12">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {product.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video sm:aspect-square w-full h-full">
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex-1 p-4 sm:p-6 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {product.description}
        </p>
        {product.href && (
          <div className="flex">
            <Link className={buttonVariants()} href={product.href}>
              Pelajari
            </Link>
          </div>
        )}
      </div>
    </Card>
  )

  const SkeletonLoader = () => (
    <Card className="flex flex-col sm:flex-row overflow-hidden">
      <Skeleton className="aspect-video sm:aspect-square sm:w-1/3" />
      <div className="flex-1 p-4 sm:p-6 flex flex-col">
        <Skeleton className="h-6 w-2/3 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-10 w-32" />
      </div>
    </Card>
  )

  if (isMobile === null) {
    return (
      <div className="container mx-auto px-4 py-8">
        <SkeletonLoader />
        <div className="flex flex-wrap gap-2 mt-4">
          {products.map((_, index) => (
            <Skeleton key={index} className="h-10 w-24" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {isMobile ? (
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {activeProduct && (
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={activeProduct} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <Button
                key={product.id}
                variant="outline"
                size="sm"
                className={cn(
                  activeProduct?.id === product.id
                    ? "bg-gradient-to-r from-teal-400 to-green-500 text-white"
                    : "bg-white",
                  "active:from-teal-400 active:to-green-500 active:bg-gradient-to-r active:text-white",
                  "focus:from-teal-400 focus:to-green-500 focus:bg-gradient-to-r focus:text-white"
                )}
                onClick={() => setActiveProduct(product)}
              >
                {product.title}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
