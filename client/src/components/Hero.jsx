import { useState, useEffect } from 'react'
import avatar from '../assets/avatar.jpg'
import { usePersona } from '../context/usePersona'

const roles = [
  'Fullstack Developer',
  'Frontend Developer', 
  'Backend Developer',
  'Problem Solver',
  'Passionate Coder',
  'Technology Lover',
  'Always Learning'
]

function Hero() {
  const { persona, loading, error } = usePersona()
  const [currentRole, setCurrentRole] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentRole(prev => (prev + 1) % roles.length)
        setVisible(true)
      }, 500)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  if (loading) return <p className="loading">Cargando...</p>
  if (error) return <p className="loading">Error al cargar datos.</p>

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{persona.nombre}</h1>
          <h2 className={`hero-role ${visible ? 'role-visible' : 'role-hidden'}`}>
            {roles[currentRole]}
          </h2>
          <p>{persona.descripcion}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={avatar} alt={persona.nombre} className="hero-avatar" />
        </div>
      </div>
    </section>
  )
}

export default Hero