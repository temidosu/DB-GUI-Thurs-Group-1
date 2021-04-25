const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

// GET all projects
app.get('/projects', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(connection);
            logger.error('Problem obtaining MySQL connection', err)
            res.status(400).send('Problem obtaining MySQL connection');
        } else {
            connection.query("SELECT * FROM Projects JOIN Users ON Projects.clientID = Users.user_id", function (err, result, fields) {
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

//GET project by ClientID
app.get('/projects/:ClientID', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(connection);
            logger.error('Problem obtaining MySQL connection', err)
            res.status(400).send('Problem obtaining MySQL connection');
        } else {
            var ClientID = req.params.ClientID; 
            connection.query("SELECT * FROM Projects JOIN Users ON Projects.clientID = Users.user_id WHERE Projects.ClientID = ? ",[ClientID], function (err, result, fields) {
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
//GET SPECIFIC PROJECT
// app.get('/projectRequests/1', (req, res) => {
//     getConnection((err, connection) => {
//         if (err) {
//             console.log(connection);
//             logger.error('Problem obtaining MySQL connection', err)
//             res.status(400).send('Problem obtaining MySQL connection');
//         } else {
//             ProjectID = req.body.ProjectID
//             connection.query("SELECT * FROM Project_Requests WHERE ProjectID = ?",ProjectID, function (err, result, fields) {
//                 if (err) {
//                     logger.error('', err);
//                     res.status(400).send('failed');
//                 }
//                 else {
//                     res.status(200).json(JSON.parse(JSON.stringify(result)))
//                 }
//             });
//         }
//     })
// });
module.exports = app;
