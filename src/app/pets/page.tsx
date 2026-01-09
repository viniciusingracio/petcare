"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Pets() {
  const [pets, setPets] = useState<any[]>([])
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")

  async function loadPets() {
    const { data } = await supabase.from("pets").select("*").order("created_at", { ascending: false })
    setPets(data || [])
  }

  async function addPet() {
    if (!name || !species) return

    await supabase.from("pets").insert({
      name,
      species,
    })

    setName("")
    setSpecies("")
    loadPets()
  }

  useEffect(() => {
    loadPets()
  }, [])

  return (
    <div style={{ padding: 24 }}>
      <h1>Meus pets</h1>

      <div style={{ marginBottom: 16 }}>
        <input
          placeholder="Nome do pet"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Espécie (cão, gato...)"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <button onClick={addPet}>Adicionar</button>
      </div>

      {pets.map((p) => (
        <div key={p.id}>
          {p.name} ({p.species})
        </div>
      ))}
    </div>
  )
}