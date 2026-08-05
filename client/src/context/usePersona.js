import { useContext } from 'react'
import { PersonaContext } from './PersonaContext'

export function usePersona() {
  return useContext(PersonaContext)
}