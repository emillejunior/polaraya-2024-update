"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  // SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ChangeEvent, FormEvent, useState } from "react"
import { CheckCircleIcon, LoaderCircleIcon } from "lucide-react"
// import { createSubmission } from "../actions"
import { createSubmission } from "../form-action"
// import { debugLog } from "@/lib/utils"

export function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      name,
      email,
      phone,
      profession,
      message: message + ` (Skala = ${maquetteScale}, Tipe = ${maquetteType})`,
    }
    try {
      setIsPosting(true)
      // TODO: HANDLE FORM SUBMISSION
      const res = await createSubmission(data)
      console.log({ res })
      if (res.success) setIsSuccess(true)
      // if (res.error?.message) setErrorMessage(res.error.message)
    } catch (err) {
      console.log(err)
    } finally {
      setIsPosting(false)
    }
  }

  const [isPosting, setIsPosting] = useState(false)
  const [isSuccess, setIsSuccess] = useState<boolean>()
  const [errorMessage, setErrorMessage] = useState("")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [profession, setProfession] = useState("")
  const [maquetteType, setMaquetteType] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [maquetteScale, setMaquetteScale] = useState("")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "name") setName(e.target.value)
    if (e.target.name === "email") setEmail(e.target.value)
    if (e.target.name === "phone") setPhone(e.target.value)
    if (e.target.name === "profession") setProfession(e.target.value)
    if (e.target.name === "maquetteType") setMaquetteType(e.target.value)
    if (e.target.name === "message") setMessage(e.target.value)
    if (e.target.name === "maquette-scale") setMaquetteScale(e.target.value)
  }

  const handleProfessionChange = (value: string) => {
    setProfession(value)
  }
  const handleInterestChange = (value: string) => {
    setMaquetteType(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center gap-5 text-center">
        {isSuccess ? (
          <div className="flex flex-col items-center gap-1">
            <div className="p-6">
              <CheckCircleIcon size={54} className="text-green-800" />
            </div>

            <p className="py-0">Berhasil disimpan.</p>
            <p className="py-0">Tim kami akan segera menghubungi Anda.</p>
            <p className="py-0">Terima Kasih.</p>
          </div>
        ) : (
          <>
            <Input
              name="name"
              value={name}
              disabled={isPosting}
              onChange={handleChange}
              type="text"
              placeholder="Nama"
              required
            />
            <Input
              name="email"
              value={email}
              disabled={isPosting}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
            />
            <Input
              name="phone"
              value={phone}
              disabled={isPosting}
              onChange={handleChange}
              type="text"
              placeholder="Nomer HP"
              required
            />

            {/* <Input
              name="maquetteType"
              value={maquetteType}
              disabled={isPosting}
              onChange={handleChange}
              type="text"
              placeholder="Tipe Maket"
              required
            /> */}
            <Select onValueChange={handleProfessionChange}>
              <SelectTrigger aria-label="Pilih Profesi" className="w-full">
                <SelectValue placeholder="Profesi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Arsitek</SelectItem>
                <SelectItem value="corcomm">Corcomm</SelectItem>
                <SelectItem value="purchasing">Purchasing</SelectItem>
                <SelectItem value="lainnya">Lainnya</SelectItem>
              </SelectContent>
            </Select>

            {/* <Input
              name="profession"
              value={profession}
              disabled={isPosting}
              onChange={handleChange}
              type="text"
              placeholder="Profesi"
              required
            /> */}
            <Select onValueChange={handleInterestChange}>
              <SelectTrigger aria-label="Pilih Tipe Maket" className="w-full">
                <SelectValue placeholder="Tipe Maket" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rumahtipe">Rumah Tipe</SelectItem>
                <SelectItem value="siteplan/masterplan">
                  Siteplan/Masterplan
                </SelectItem>
                <SelectItem value="miniatur">Miniatur</SelectItem>
                <SelectItem value="lainnya">Lainnya</SelectItem>
              </SelectContent>
            </Select>
            <Input
              name="maquette-scale"
              value={maquetteScale}
              disabled={isPosting}
              onChange={handleChange}
              type="text"
              placeholder="Skala Maket (contoh: 1:100)"
              required
            />

            <Textarea
              name="message"
              value={message}
              disabled={isPosting}
              onChange={handleChange}
              // type="text"
              placeholder="Pesan"
              required
            />
            {/* <Input name="lead_name" placeholder="Nama" /> */}
            {/* <Input name="lead_phone" placeholder="Nomer Handphone" /> */}
            {/* <Input name="lead_company" placeholder="Perusahaan" /> */}
            <Button
              type="submit"
              disabled={isPosting || !email || !phone}
              className="flex gap-2"
            >
              {isPosting ? (
                <>
                  <LoaderCircleIcon size={16} className="animate-spin" />
                  <span>Mengupload..</span>
                </>
              ) : (
                "Konsultasi Sekarang"
              )}
            </Button>
            {errorMessage && <p>{errorMessage}</p>}
          </>
        )}
      </div>
    </form>
  )
}
