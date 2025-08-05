import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { routes } from "@/api/data/routes"

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
            {route.children?.length ? (
              <>
                <NavigationMenuTrigger className="text-base">
                  {route.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:w-[800px] md:grid-cols-3 lg:w-[1000px]">
                    {route.children.map((routeGroup) => (
                      <div key={routeGroup.title}>
                        <p className="text-muted-foreground text-sm px-1 py-1.5">
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
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle(), "text-base")}
              >
                <Link href={route.href}>{route.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
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
      <NavigationMenuLink asChild>
        <Link href={href} passHref>
          <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent duration-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
