const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

// POST /signup
app.post('/signup', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var data = req.body
      // for(const [key, value] of Object.entries(req.body)){
      //   data[key] = value
      // }
      connection.query('INSERT INTO Users SET ?', data, (err, result) => {
          if (err) {
            logger.error("Problem signing up: ", err);
            res.status(400).send('sign up failed');
          }
          else {
            res.status(200).end('sign up success')
          }
        })
    }
  })
})
// POST /login
app.post('/login', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      const email = req.body.email; 
      const password = req.body.password;
      connection.query('SELECT * from `db`.`Users` WHERE userEmail = ? AND userPassword = ?', [email, password], (err, result) => {
        if (err) {
          logger.error("Login failed", err);
          res.status(501).send('Login failed:', err);
        }
        else {
          if (result.length <= 0) {
            res.status(502).end('No user with given email')
          }
          else {
            if (password == result[0].userPassword) {
              res.status(200).end(JSON.stringify(result[0]))
            }
            else {
              res.status(503).end('Password incorrect')
            }
          }
        }
      })
    }
  })
})

app.get('/users', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      connection.query("SELECT * FROM Users", function (err, result, fields) {
        if (err) {
          logger.error('', err);
          res.status(400).send('failed');
        }
        else {
          res.status(200).json(JSON.parse(JSON.stringify(result)))
        }
      });
    }
  })
});

//Get Workers 
app.get('/workers', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      connection.query("SELECT * FROM Users JOIN Workers ON Users.user_id = Workers.userID WHERE role_id = 2", function (err, result, fields) {
        if (err) {
          logger.error('', err);
          res.status(400).send('failed');
        }
        else {
          res.status(200).json(JSON.parse(JSON.stringify(result)))
        }
      });
    }
  })
});

//Get Available Workers 
app.get('/workers/available', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      connection.query("SELECT * FROM Users JOIN Workers ON Users.user_id = Workers.userID WHERE role_id = 2 AND Workers.job_id IS NULL", function (err, result, fields) {
        if (err) {
          logger.error('', err);
          res.status(400).send('failed');
        }
        else {
          res.status(200).json(JSON.parse(JSON.stringify(result)))
        }
      });
    }
  })
});

//Get Contractors
app.get('/contractors', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      connection.query("SELECT * FROM Users WHERE role_id = 3", function (err, result, fields) {
        if (err) {
          logger.error('', err);
          res.status(400).send('failed');
        }
        else {
          res.status(200).json(JSON.parse(JSON.stringify(result)))
        }
      });
    }
  })
});

//Get Available Contractors
app.get('/contractors/available', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      connection.query("SELECT * FROM Users JOIN Projects ON Users.user_id = Projects.ContractorID WHERE role_id = 3", function (err, result, fields) {
        if (err) {
          logger.error('', err);
          res.status(400).send('failed');
        }
        else {
          res.status(200).json(JSON.parse(JSON.stringify(result)))
        }
      });
    }
  })
});

//Get user info for given ID
app.get('/userInfo/:userID', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var userID = req.params.userID
      connection.query("SELECT * FROM Users WHERE user_ID = ?", userID, function (err, result, fields) {
        if (err) {
          logger.error('', err);
          res.status(400).send('failed');
        }
        else {
          res.status(200).json(JSON.parse(JSON.stringify(result)))
        }
      });
    }
  })
});

module.exports = app;