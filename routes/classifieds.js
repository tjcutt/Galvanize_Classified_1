
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get("/", (req, res, next) => {
  knex("classifieds")
    .select("id", "name", "message", "created_at")
    // .orderBy("created_at", "ASC")
    .then((data) => {
      console.log('payload', data)
      res.send("payload", {
        payload: payload
      });
    })
    .catch((error) => {
      next(error);
    });
});

// Post
//
// router.post("/", (req, res, next) => {
// knex("classifieds")
//   .returning(*)
//   // .insert({
//   //   name: req.body.name,
//   //   message: req.body.message
//   // })
//   .then(() => {
//     // console.log(req.body.name);
//     res.send("post");
//   });
// });
//
// router.put('/', (req, res, next) => {
// knex('classifieds')
//   .where('id', req.body.id)
//   .first()
//   .update({name: req.body.name, message: req.body.message})
//   .then(() => {
//     res.status(200).send(true);
//   })
// })
//
// router.delete('/', (req, res, next) => {
// console.log('delete log', req.body.id);
// knex('classifieds')
//   .where('id', req.body.id)
//   .first()
//   .del()
//   .then(() => {
//     res.status(200).send(true);
//   })
// })


module.exports = router;
