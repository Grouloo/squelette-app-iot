import React, { useEffect, useState } from "react"
import "./App.css"
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import readRealtime from "./functions/readRealtime"
import postRealtime from "./functions/writeRealtime"

const firebaseConfig = {}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export default function App() {
  // Remplacer par vos propres variables
  const [data, setData] = useState()

  useEffect(() => {
    // Remplacer par vos propres appels à la base de données
    readRealtime("foo", setData)
  })

  return (
    <div className="App">
      <h1>Bienvenue sur votre application</h1>

      <p>{data}</p>
    </div>
  )
}
