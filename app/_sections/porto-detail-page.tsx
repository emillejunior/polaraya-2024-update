import { PortoSectionList } from "@/components/porto-section-list"
import Image, { StaticImageData } from "next/image"
import { PortoItem } from "../(site)/portofolio/page"
// import { PortoSectionList } from './porto-section-list'

interface ImageGalleryProps {
  images: string[] | StaticImageData[]
}

function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative aspect-video">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

interface PortfolioDetailPageProps {
  hero: {
    backgroundImage: string | StaticImageData
    title: string
    description: string
  }
  gallery1: string[] | StaticImageData[]
  relatedPortfolios: PortoItem[]
  gallery2?: string[] | StaticImageData[]
}

export default function PortfolioDetailPage({
  hero,
  gallery1,
  relatedPortfolios,
  gallery2,
}: PortfolioDetailPageProps) {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={hero.backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{hero.title}</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Section 2: Image Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Galeri Foto</h2>
          <ImageGallery images={gallery1} />
        </div>
      </section>

      {/* Section 3: Related Portfolios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Proyek Terkait
          </h2>
          <PortoSectionList items={relatedPortfolios} />
        </div>
      </section>

      {/* Section 4: Another Image Gallery */}
      {gallery2 && gallery2.length && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Galeri Foto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gallery2.map((src, index) => (
                <div key={index} className="relative aspect-video">
                  <Image
                    src={src}
                    alt={`Highlight image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
