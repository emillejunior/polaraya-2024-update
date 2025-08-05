import Link from "next/link"
import { MainNav } from "./main-nav"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { MenuIcon, PhoneIcon } from "lucide-react"

import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"
import { SiteLogo } from "./site-logo"

export function SiteHeader() {
  return (
    <header className="border-b sticky top-0 py-4 z-50 bg-white dark:bg-black">
      <MaxWidthWrapper>
        <div className="flex justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon",
                    }),
                    "rounded-md"
                  )}
                >
                  <MenuIcon />
                </SheetTrigger>
                <SheetContent side={"left"}>
                  {/* <SheetHeader>
                    <SheetTitle>
                      <div className="py-2">
                        <SiteLogo />
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <MobileNav /> */}

                  <div className="h-screen flex flex-col">
                    {/* Header */}
                    <header className="flex items-center p-4">
                      <SiteLogo variant="WHITE" />
                    </header>

                    {/* Body */}
                    <div className="flex-1 overflow-auto pb-12">
                      <MobileNav />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <SiteLogo />
            <div className="hidden sm:block">
              <MainNav />
            </div>
          </div>
          {/* RIGHT */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="https://wa.me/6281119167121"
              className="inline-flex items-center group border justify-center rounded-md border-gray-200 hover:border-blue-300 transition-all bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              <PhoneIcon
                className="-ml-1 md:mr-3 h-5 w-5 group-hover:text-blue-500 text-gray-400"
                aria-hidden="true"
              />
              <span className="sm:hidden md:block block">Whatsapp</span>
              {/* <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-300" aria-hidden="true" /> */}
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
