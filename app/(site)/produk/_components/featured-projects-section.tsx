import type { FeaturedProject } from "@/types"
import Image from "next/image"

export default function FeaturedProjectsSection({
  featuredProjects,
  heading,
}: {
  featuredProjects: FeaturedProject[]
  heading?: string
}) {
  return (
    <div className="container mx-auto py-8 bg-gray-100  to-green-900">
      <h2 className="py-8 text-2xl font-bold">
        {heading || "Beberapa Portofolio Kami"}
      </h2>
      <div className="flex flex-col sm:grid grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8">
        {featuredProjects.map((featuredProject, i) => (
          <FeaturedProject key={i} project={featuredProject} />
        ))}
      </div>
    </div>
  )
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function FeaturedProject({ project }: { project: FeaturedProject }) {
  return (
    <div className="relative rounded-xl">
      <div className="flex justify-center relative w-full">
        <div className="flex justify-center relative w-auto h-full flex-grow">
          <Carousel
            className="w-full rounded-xl "
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {project.images.map((projectImage, index) => (
                <CarouselItem key={index}>
                  <Image
                    key={index}
                    src={projectImage}
                    alt="Project Image"
                    className=" mx-auto w-full bg-gray-50 rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/* <div className="flex sm:flex-row sm:h-14 items-center flex-col justify-between">
        {project.title && (
          <div className="flex p-2 gap-1 justify-center items-center">
            {project.logo && (
              <Image
                src={project.logo}
                alt="Project Logo Image"
                className="h-12 w-auto"
              />
            )}
            <h3 className="font-bold text-lg">{project.title}</h3>
          </div>
        )}
        {project.client?.name && (
          <div className="flex p-2 gap-1 justify-center items-center text-lg py-2">
            {project.client?.logo && (
              <Image
                src={project.client?.logo}
                alt="Client Logo Image"
                className="h-12 w-auto"
              />
            )}
            <span className="font-bold text-lg">{project.client?.name}</span>
          </div>
        )}
      </div> */}
      <div className="p-0.5 absolute top-2.5 left-2.5 bg-white opacity-80 overflow-hidden rounded-full size-14 border flex-shrink-0 sm:hidden md:block">
        {project.logo ? (
          <Image
            src={project.logo}
            alt="Project Logo Image"
            className="h-12 w-auto"
          />
        ) : (
          project.client?.logo && (
            <Image
              src={project.logo || project.client.logo}
              alt="Project Logo Image"
              className="h-12 w-auto"
            />
          )
        )}
      </div>
      <div className="flex p-2.5 absolute w-full rounded-b-xl bottom-0 left-0 gap-2.5 bg-gradient-to-b from-foreground/25 to-foreground/100">
        <div className="flex-grow flex text-background flex-col justify-center">
          <h3 className="text-nowrap font-semibold text-lg">{project.title}</h3>
          {project.client?.name && (
            <h4 className="text-nowrap text-sm">
              by <span className="bold">{project.client?.name}</span>
            </h4>
          )}
        </div>
      </div>
    </div>
  )
}
