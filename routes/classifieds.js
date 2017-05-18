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
        .catch(err => {
            res.send(err)
        })

});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    return knex('classifieds')
        .where('id', req.params.id)
        .select(["id", "title", "description", "price", "item_image"])
        .then(classifieds => {
            res.json(classifieds[0]);
        })
        .catch(err => {
            res.send(err)
        })
});

router.post('/', (req, res, next) => {
    knex('classifieds')
        .returning(['id', 'title', 'description', 'price', 'item_image'
      ])
        .insert(
              title: req.body.title,
              description: req.body.description,
              price: req.body.price,
              itemImage:
            )
        .then(classifieds => {
            res.json(classifieds)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router;
