import Link from "next/link"
import Image from "next/image"

import logoPRS from "/public/prs-logo.png"
import logoPRSWhite from "/public/prs-logo-w.png"

import logoPRSCrop from "/public/prs-logo-sm.png"
import logoPRSCropWhite from "/public/prs-logo-sm-w.png"

export function SiteLogo({ variant }: { variant?: "GREEN" | "WHITE" }) {
  return (
    <Link href="/" className="shrink-0">
      {variant === "WHITE" ? (
        <Image
          src={logoPRSWhite}
          alt="Logo PRS"
          // className="h-[21px] w-[100px]"
          className="h-[25px] w-[120px] dark:hidden sm:hidden md:block"
        />
      ) : (
        <Image
          src={logoPRS}
          alt="Logo PRS"
          // className="h-[21px] w-[100px]"
          className="h-[25px] w-[120px] dark:hidden sm:hidden md:block"
        />
      )}
      <Image
        src={logoPRSWhite}
        alt="Logo PRS"
        // className="h-[21px] w-[100px]"
        className="h-[25px] w-[120px] hidden dark:block"
      />

      {variant === "WHITE" ? (
        <Image
          src={logoPRSCropWhite}
          alt="Logo PRS"
          // className="h-[21px] w-[100px]"
          className="h-[50px] w-[34.5px] scale-90 dark:hidden hidden sm:block md:hidden"
        />
      ) : (
        <Image
          src={logoPRSCrop}
          alt="Logo PRS"
          // className="h-[21px] w-[100px]"
          className="h-[50px] w-[34.5px] scale-90 dark:hidden hidden sm:block md:hidden"
        />
      )}
      {/* <Image
        src={logoPRSCropWhite}
        alt="Logo PRS"
        // className="h-[21px] w-[100px]"
        className="h-[100px] w-[69px] scale-90 dark:block hidden sm:block md:hidden"
      /> */}
    </Link>
  )
}
