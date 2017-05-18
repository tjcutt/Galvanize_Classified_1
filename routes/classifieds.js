
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get("/", (req, res, next) => {
  return knex("classifieds")
    .select(["id", "title", "description", "price", "item_image"])
    .then((classifieds) => {
    res.json(classifieds)
    })
    .catch( err => {
      res.send(err)
    })

});

router.get('/:id', (req, res, next) => {
    return knex('classifieds')
        .where('id', req.params.id)
        .select(["id", "title", "description", "price", "item_image"])
        .then(classifieds => {
            res.json(classifieds);
        })
        .catch( err => {
          res.send(err)
        })
});



module.exports = router;
