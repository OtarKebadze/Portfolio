import { useEffect, useState } from 'react'
import { PersonaContext } from './PersonaContext'

export function PersonaProvider({ children }) {
  const [persona, setPersona] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/persona')
      .then(res => res.json())
      .then(data => {
        setPersona(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return (
    <PersonaContext.Provider value={{ persona, loading, error }}>
      {children}
    </PersonaContext.Provider>
  )
}