//These are all the routes for the reviews table 
const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

//GET all reviews
app.get('/reviews', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(connection);
            logger.error('Problem obtaining MySQL connection', err)
            res.status(400).send('Problem obtaining MySQL connection');
        } else {
            connection.query("SELECT * FROM Reviews JOIN Users ON ", function (err, result, fields) {
                connection.release(); 
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

//GET REVIEW by reviewerID
app.get('/reviewsByReviewerID/:reviewerID', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var ReviewerID = req.params.ReviewerID;
			connection.query("SELECT * FROM Reviews WHERE ReviewerID = ? ", [ReviewerID], function (err, result, fields) {
				connection.release();
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

// GET REVIEW by reviewedID
app.get('/reviewsByReviewedID/:reviewedID', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var ReviewedID = req.params.ReviewedID;
			connection.query("SELECT * FROM Reviews JOIN Users ON Reviews.ReviewerID = Users.user_id WHERE ReviewedID = ?", [ReviewedID], function (err, result, fields) {
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

///GET REVIEW by ProjectID
app.get('/reviewsByProject/:projectID', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(connection);
            logger.error('Problem obtaining MySQL connection', err)
            res.status(400).send('Problem obtaining MySQL connection');
        } else {
            var prjID = req.params.projectID; 
            connection.query("SELECT * FROM Reviews WHERE ProjectID = ? ",[projectID], function (err, result, fields) {
                connection.release(); 
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

// POST /newreview
app.post('/createreview', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(connection);
        logger.error('Problem obtaining MySQL connection', err)
        res.status(400).send('Problem obtaining MySQL connection');
      } else {
        var reviewer = req.params.reviewer; 
        var reviewed = req.params.reviewed; 
        var textreview = req.body.textreview;
        var score = req.params.score;
        var project = req.params.project;

        
        connection.query('INSERT INTO Reviews (ReviewerID, ReviewedID, ReviewText, ReviewScore, ProjectID) VALUES (?,?,?,?,?)', [reviewer, reviewed, textreview, score, project], (err, result) => {
            connection.release(); 
            if (err) {
              logger.error("Problem creating review: ", err);
              res.status(400).send('review failed');
            }
            else {
              res.status(200).end('review posted')
            }
          })
      }
    })
  });

module.exports = app;