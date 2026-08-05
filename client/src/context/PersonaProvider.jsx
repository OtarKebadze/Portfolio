import { useEffect, useState } from 'react'
import { PersonaContext } from './PersonaContext'


export function PersonaProvider({ children }) {
  const [persona, setPersona] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://portfolio-glde.onrender.com')
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