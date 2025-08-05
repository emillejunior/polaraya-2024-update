import Link from "next/link"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Metadata } from "next"
import { pageMeta } from "@/api/data/meta"

export const metadata: Metadata = pageMeta.tentangKami

export default function AboutPage() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-4 font-semibold">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Beranda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Tentang Kami</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-8">
          <h1 className="py-8 font-bold text-4xl">Tentang Pola Raya Studio</h1>
          <div className="flex flex-col gap-3">
            <p className="max-w-prose">
              Kami adalah perusahaan penyedia maket paling terkemuka untuk
              berbagai bisnis di Indonesia.
            </p>

            <p className="max-w-prose">
              Produk kami dikenal karena kualitasnya yang luar biasa dan
              perhatian extra terhadap detail, dan kami terus berupaya untuk
              memasukkan inovasi teknologi terkini ke dalam desain kami.
            </p>

            <p className="max-w-prose">
              Dengan pengalaman lebih dari 40 tahun, kami telah membangun
              reputasi keunggulan dan dipercaya oleh perusahaan-perusahaan
              terkenal dan juga pemerintah untuk memberikan produk dan layanan
              maket yang terbaik.
            </p>

            <p className="max-w-prose">
              Kepuasan pelanggan adalah prioritas utama kami, dan kami
              berdedikasi untuk melampaui harapan klien kami.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
