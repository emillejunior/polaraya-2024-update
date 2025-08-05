"use server"

import { supabase } from "@/lib/supabase/client"
// import { supabase } from "@/lib/supabase/server"

export async function createSubmission(data: {
  name: string
  email: string
  phone?: string
  profession?: string
  message?: string
  subject?: string
}) {
  const submissionDate = new Date()

  const submissionData = {
    name: data.name || "-",
    email: data.email || "-",
    phone: data.phone || "-",
    message: data.message || "-",
    profession: data.profession || "-",
    // subject: data.subject || "Website Inquiry",
    status: "NEW",
    // createdAt: submissionDate,
    updatedAt: submissionDate,
  }
  console.log("createSubmission...", { submissionData })
  try {
    const { error } = await supabase.from("Submission").insert([submissionData])
    // .select()
    // .single()

    if (error) {
      // console.error("Supabase error:", error)
      console.error(
        "Supabase error stringified:",
        JSON.stringify(error, null, 2)
      )

      return {
        error: {
          message: "Sorry, a system error occurred. Please try again later.",
        },
      }
    }

    // console.log({ createdSubmission })
    console.log("New submission received")

    return {
      success: true,
      message: `New submission received`,
    }
  } catch (e) {
    console.error("Unexpected error:", e)
    return {
      error: {
        message: "Sorry, a system error occurred. Please try again later.",
      },
    }
  }
}
