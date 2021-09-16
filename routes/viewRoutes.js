const router = require('express').Router()
const { Item } = require('../models')

router.get('/', (req, res) => Item.findAll()
  .then(items => items.map(({ dataValues }) => dataValues))
  .then(items => res.render('index', { items }))
  .catch(err => console.log(err)))

// router.get('/', (req, res) => {
//   res.render('index', { name: 'John Doe' })
// })

// router.get('/jane', (req, res) => {
//   res.render('index', { name: 'Jane Doe' })
// })

// router.get('/name/:name', (req, res) => {
//   res.render('index', { name: req.params.name })
// })

module.exports = router
