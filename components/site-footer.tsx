import Image from "next/image"
import { MaxWidthWrapper } from "./max-width-wrapper"

import logoPRSWhite from "/public/prs-logo-w.png"
import Link from "next/link"

import TiktokLogo from "@/components/icons/tiktok.svg"
import LinkedinLogo from "@/components/icons/linkedin.svg"
import InstagramLogo from "@/components/icons/instagram.svg"
import { MailIcon, PhoneIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-8 bg-[#095C67] text-white text-center sm:text-left">
      <MaxWidthWrapper>
        {/* <div className="flex justify-between"> */}
        {/* <div className="grid grid-cols-[auto_1fr_auto]"> */}
        <div className="grid grid-rows-3 gap-4 sm:grid-rows-1 p-2 lg:px-8 sm:grid-cols-[1fr_1fr_auto]">
          <div className="sm:p-2">
            <Image
              src={logoPRSWhite}
              alt="Logo PRS"
              // className="h-[21px] w-[100px]"
              // className="h-[25px] w-[120px]"
              className="h-[35px] w-[168px] mx-auto sm:mx-0"
            />
            <p className="text-lg font-bold py-3">PT. Pola Raya Studio</p>
            <p className="text-gray-100 text-sm">
              Jl. Dalang, RT.5/RW.5, Munjul, <br />
              Kec. Cipayung, Kota Jakarta Timur, <br />
              Daerah Khusus Ibukota Jakarta 13850
            </p>
          </div>
          <div className="sm:p-2">
            <p className="font-bold py-3">Kontak</p>
            <ul className="text-gray-100 text-sm flex flex-col gap-3">
              <li className="flex gap-1.5 items-center justify-center sm:justify-start">
                <PhoneIcon className="size-4" />
                <span>+62 811-1916-7121 (Amin)</span>
              </li>

              <li className="flex gap-1.5 items-center justify-center sm:justify-start">
                <PhoneIcon className="size-4" />
                <span>+62 812-8364-7509 (Yoan)</span>
              </li>

              <li className="flex gap-1.5 items-center justify-center sm:justify-start">
                <MailIcon className="size-4" />
                <span>contact@polaraya.com</span>
              </li>
            </ul>
          </div>
          <div className="sm:p-2">
            <p className="font-bold py-3">Media Sosial</p>
            <ul className="text-gray-100 text-sm flex flex-col gap-3">
              <li className="flex gap-1.5 items-center justify-center sm:justify-start">
                <Image
                  src={InstagramLogo}
                  alt="Tiktok Logo"
                  className="text-white size-4 invert"
                />
                <Link href="https://www.instagram.com/polarayastudio_/">
                  @polarayastudio_
                </Link>
              </li>
              <li className="flex gap-1.5 items-center justify-center sm:justify-start">
                <Image
                  src={LinkedinLogo}
                  alt="Tiktok Logo"
                  className="text-white size-4 invert"
                />
                <Link href="https://id.linkedin.com/company/polaraya">
                  Pola Raya Studio
                </Link>
              </li>
              <li className="flex gap-1.5 items-center justify-center sm:justify-start">
                <Image
                  src={TiktokLogo}
                  alt="Tiktok Logo"
                  className="text-white size-4 invert"
                />
                <Link href="https://www.tiktok.com/@polarayamaket">
                  @polarayamaket
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-200">
          &copy; {new Date().getFullYear()} Pola Raya Studio, Inc. All rights
          reserved.
        </p>
      </MaxWidthWrapper>
    </footer>
  )
}
