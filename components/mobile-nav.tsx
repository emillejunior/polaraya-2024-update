import Link from "next/link"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { routes } from "@/api/data/routes"
import { ScrollArea } from "./ui/scroll-area"
import { SheetClose } from "./ui/sheet"

export function MobileNav() {
  return (
    <ScrollArea className="h-full">
      <div className="text-left flex  flex-col gap-2">
        <SheetClose asChild>
          {/* <Link href="/" legacyBehavior passHref> */}
          <Link href="/">
            <div className="p-2 border font-bold rounded bg-gray-50">
              Beranda
            </div>
          </Link>
        </SheetClose>
        {routes.map((route) => (
          <div key={route.href}>
            {route.children?.length ? (
              <>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="p-2 border font-bold rounded bg-gray-50">
                      {route.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="p-2">
                        {route.children.map((routeGroup) => (
                          <div key={routeGroup.title} className="">
                            <p className="text-muted-foreground text-xs p-1.5 bg-gray-100">
                              {routeGroup.title}
                            </p>
                            {routeGroup.routes.map((leafRoute) => (
                              <ListItem
                                key={leafRoute.href}
                                href={leafRoute.href}
                                title={leafRoute.title}
                              >
                                {/* {leafRoute.description} */}
                              </ListItem>
                            ))}
                          </div>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </>
            ) : (
              <SheetClose asChild>
                {/* <Link href={route.href} legacyBehavior passHref> */}
                <Link href={route.href}>
                  <div className="p-2 border font-bold rounded bg-gray-50">
                    {route.title}
                  </div>
                </Link>
              </SheetClose>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

const ListItem = ({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children?: ReactNode
}) => {
  return (
    <li key={href} className="cursor-pointer">
      {/* <NavigationMenuLink asChild> */}
      <SheetClose asChild>
        {/* <Link href={href} legacyBehavior passHref> */}
        <Link href={href}>
          <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent duration-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </div>
        </Link>
      </SheetClose>
      {/* </NavigationMenuLink> */}
    </li>
  )
}
