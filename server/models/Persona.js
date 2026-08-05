import { Schema, model } from 'mongoose'

const personaSchema = new Schema({
  nombre: { type: String, required: true },
  rol: { type: String, required: true },
  descripcion: { type: String, required: true },
  skills: [
    {
      nombre: { type: String, required: true },
      nivel: { type: Number, required: true }
    }
  ],
  certificados: [
    {
      nombre: { type: String, required: true },
      institucion: { type: String, required: true }
    }
  ],
  proyectos: [
    {
      nombre: { type: String, required: true },
      descripcion: { type: String, required: true },
      stack: [{ type: String }],
      github: { type: String },
      demo: { type: String, default: null }
    }
  ],
  redes: {
    github: { type: String },
    linkedin: { type: String },
    email: { type: String }
  }
})

export default model('Persona', personaSchema)