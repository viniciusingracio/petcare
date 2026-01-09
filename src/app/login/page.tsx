"use client"
import { supabase } from "@/lib/supabase"

export default function Login() {
  async function login() {
    await supabase.auth.signInWithOtp({
      email: "vinicius@email.com"
    })
    alert("Cheque seu email")
  }

  return <button onClick={login}>Entrar</button>
}