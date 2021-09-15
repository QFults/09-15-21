const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
})

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
