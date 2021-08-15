const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// GET Route
router.get('/', (req, res) => {
    const sqlQuery = `
        SELECT * FROM "galleryItems"
        ORDER BY "id"
    `;
    pool.query(sqlQuery)
        .then((dbRes) => {
            console.log('GET from DB')
            res.send(dbRes.rows)
        })
        .catch((error) => {
            console.log('GET error', error);
            res.sendStatus(500);
        })
}); // END GET Route

//POST 
router.post('/', (req, res) => {

    let sqlQuery = `
    INSERT INTO 
        "galleryItems" ("title", "path", "description", "likes")
    VALUES 
        ($1, $2, $3, $4)
    `;
    console.log('sqlQuery is', sqlQuery)

    let sqlParams = [
        req.body.title,
        req.body.path,
        req.body.description,
        req.body.likes
    ]
    console.log('sqlParams', sqlParams);

    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('router.post error', error);
            res.sendStatus(500);
        });
});

// PUT Route
router.put('/:id', (req, res) => {
    
    let sqlQuery = `
        UPDATE "galleryItems"
        SET "likes" = likes + 1
        WHERE "id" = $1
    `;
    let sqlParams = [
        req.params.id
    ];
    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            console.log('PUT /list', dbRes)
            res.sendStatus(200);
        }).catch((error) => {
            console.log('PUT error in route.PUT', error)
            res.sendStatus(500);
        });
}); // END PUT Route




//DELETE 
router.delete('/:id', (req, res) => {
    let sqlParams = req.params.id
    console.log(sqlParams);
    let sqlQuery = `
        DELETE FROM "galleryItems"
        WHERE id=$1    
    `;

    pool.query(sqlQuery, [sqlParams])
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('router.delete error', error);
            res.sendStatus(500);
        })
})

module.exports = router;