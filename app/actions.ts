"use server"

import { headers } from "next/headers"
// import prisma from "../db/prisma"

export async function createSubmission(data: {
  name: string
  email: string
  phone?: string
  profession?: string
  message?: string
  subject?: string
}) {
  console.log("createSubmission...", data)

  return {
    success: true,
    message: `createSubmission success`,
  }
}
