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
        connection.release(); 
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
        connection.release();
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
      connection.query("SELECT * FROM Users LEFT JOIN Workers ON Users.user_id = Workers.userID WHERE role_id = 2", function (err, result, fields) {
        connection.release();
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

//Get Workers by ZipCode 

app.get('/workersZip/:zipcode', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var zipcode = req.params.zipcode; 
      connection.query("SELECT * FROM Users WHERE role_id = 2 AND ZipCode = ?", [zipcode], function (err, result, fields) {
        connection.release();
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

//Get Workers by Search Query  

app.get('/workersQuery/:query', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var query = req.params.query;  
      connection.query("SELECT * FROM Users LEFT JOIN Workers ON Users.user_id = Workers.userID WHERE Users.role_id = 2 AND Users.firstName like ? OR Users.lastName like ? OR Workers.skillTags like ?", [query,query,query], function (err, result, fields) {
        connection.release();
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

//Get Workers by Search Query AND ZipCode  

app.get('/workersZipAndQuery/:zipcode/:query', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var zipcode = req.params.zipcode; 
      var query = req.params.query;  
      connection.query("SELECT * FROM Users LEFT JOIN Workers ON Users.user_id = Workers.userID WHERE role_id = 2 AND Users.ZipCode = ? AND Users.firstName like ? OR Users.lastName like ? OR Workers.skillTags like ?", [zipcode,query,query,query], function (err, result, fields) {
        connection.release();
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
        connection.release();
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

//Get Contractors by ZipCode 

app.get('/contractorsZip/:zipcode', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var zipcode = req.params.zipcode; 
      connection.query("SELECT * FROM Users WHERE role_id = 3 AND ZipCode = ?", [zipcode], function (err, result, fields) {
        connection.release();
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

//Get Contractors by Search Query  

app.get('/contractorsQuery/:query', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var query = req.params.query;  
      connection.query("SELECT * FROM Users WHERE role_id = 3 AND firstName like ? OR lastName like ?", [query,query], function (err, result, fields) {
        connection.release();
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

//Get Contractors by Search Query AND ZipCode  

app.get('/contractorsZipAndQuery/:zipcode/:query', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var zipcode = req.params.zipcode; 
      var query = req.params.query;  
      connection.query("SELECT * FROM Users WHERE role_id = 3 AND ZipCode = ? AND firstName like ? OR lastName like ?", [zipcode, query,query], function (err, result, fields) {
        connection.release();
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

app.get('/userInfo/:userID', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(connection);
      logger.error('Problem obtaining MySQL connection', err)
      res.status(400).send('Problem obtaining MySQL connection');
    } else {
      var userID = req.params.userID
      connection.query("SELECT * FROM Users WHERE user_ID = ?", userID, function (err, result, fields) {
        connection.release();
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