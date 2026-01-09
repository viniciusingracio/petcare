"use client"

import { useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function AuthCallback() {
  useEffect(() => {
    supabase.auth.getSession().then(() => {
      // sessão já foi salva
      window.location.href = "/pets"
    })
  }, [])

  return <p>Autenticando...</p>
}