const router = require('express').Router()
const { Item } = require('../models')

router.get('/items', (req, res) =>
  Item.findAll()
    .then(items => res.json(items))
    .catch(err => console.log(err)))

router.post('/items', (req, res) =>
  Item.create(req.body)
    .then(item => res.json(item))
    .catch(err => console.log(err)))

router.put('/items/:id', (req, res) =>
  Item.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err)))

router.delete('/items/:id', (req, res) =>
  Item.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err)))

module.exports = router
