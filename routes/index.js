const express = require('express')
const router = express.Router()



router.get('/:id', (req, res, next) => {
  // get a game by id
  const id = req.params.id
  gameUtils.getGameComments(id)
    .then(game => {
      if (game) {
        res.json(game)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})

module.exports = router
