const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

// POST /signup
app.post('/register', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      const role = req.body.role
      const firstName = "'" + req.body.firstName
      const lastName = "'" + req.body.lastname
      const userName = "'" + req.body.userName
      const location = "'" + req.body.location
      const userPassword = "'" + req.body.userPassword
      const userEmail = "'" + req.body.userEmail
      const phoneNumber = "'" + req.body.phoneNumber
      connection.query("INSERT INTO 'db'.'Users' (role_id,location_id,userName,userPassword,userEmail,firstName,lastName,phoneNumber) VALUES = (?,?,?,?,?,?,?,?);",
        [role, location, userName, userPassword, userEmail, firstName, lastName, phoneNumber], (err, result) => {
          if (err) {
            logger.error("Problem registering:", err);
            res.status(400).send('Registration failed');
          }
          else {
            res.status(200).end('Successfully Registered')
          }
        })
    }
  })
})
// POST /login
app.post('/login', (req, res) => {
  getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      const email = "'" + req.body.email + "'"
      const password = req.body.password;
      connection.query('SELECT * from `db`.`Users` WHERE email = ' + email, (err, result) => {
        if (err) {
          logger.error("Login failed", err);
          res.status(400).send('Login failed:', err);
        }
        else {
          if (result.length <= 0) {
            res.status(400).end('No user with given email')
          }
          else {
            if (password == result[0].password) {
              res.status(200).end(JSON.stringify(result[0].user_id))
            }
            else {
              res.status(400).end('Password incorrect')
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

module.exports = app;