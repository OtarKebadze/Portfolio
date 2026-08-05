import express from 'express'
import Persona from '../models/Persona.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const persona = await Persona.findOne()
    if (!persona) return res.status(404).json({ mensaje: 'No hay datos aún' })
    res.json(persona)
  } catch (error) {
    res.status(500).json({ mensaje: 'Error del servidor' })
  }
})

// POST - guardar persona
router.post('/', async (req, res) => {
  try {
    const persona = new Persona(req.body)
    await persona.save()
    res.status(201).json(persona)
  } catch (error) {
    res.status(400).json({ mensaje: error.message })
  }
})

// PUT - actualizar persona
router.put('/', async (req, res) => {
  try {
    const persona = await Persona.findOneAndUpdate(
      {},
      req.body,
      { returnDocument: 'after', runValidators: true }
    )
    if (!persona) return res.status(404).json({ mensaje: 'No hay datos para actualizar' })
    res.json(persona)
  } catch (error) {
    res.status(400).json({ mensaje: error.message })
  }
})

// DELETE - eliminar persona
router.delete('/', async (req, res) => {
  try {
    const persona = await Persona.findOneAndDelete({})
    if (!persona) return res.status(404).json({ mensaje: 'No hay datos para eliminar' })
    res.json({ mensaje: 'Datos eliminados correctamente ✅' })
  } catch (error) {
    res.status(500).json({ mensaje: error.message })
  }
})

export default router