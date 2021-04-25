//These are all the routes for the reviews table 

const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

//GET reviews by ClientID
app.get('/projects/reviewsby/:ClientID', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(connection);
            logger.error('Problem obtaining MySQL connection', err)
            res.status(400).send('Problem obtaining MySQL connection');
        } else {
            var ClientID = req.params.ClientID; 
            connection.query("SELECT * FROM Reviews WHERE Reviews.ClientID = ? ",[ClientID], function (err, result, fields) {
                if (err) {
                    logger.error('', err);
                    res.status(400).send('failed');
                }
                else {
                    res.status(200).json(JSON.parse(JSON.stringify(result))); 
                }
            });
        }
    })
});

//GET reviews for ContractorID
app.get('/projects/reviewsof/:ContractorID', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(connection);
            logger.error('Problem obtaining MySQL connection', err)
            res.status(400).send('Problem obtaining MySQL connection');
        } else {
            var ContractorID = req.params.ContractorID; 
            connection.query("SELECT * FROM Reviews WHERE Reviews.ContractorID = ? ",[ContractorID], function (err, result, fields) {
                if (err) {
                    logger.error('', err);
                    res.status(400).send('failed');
                }
                else {
                    res.status(200).json(JSON.parse(JSON.stringify(result))); 
                }
            });
        }
    })
});
