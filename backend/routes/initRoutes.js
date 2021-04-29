const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

app.post('/init_dummies',(req,res) => {
    pool.getConnection((err,connection) => {
      if(err) {
        console.log(connection);
        logger.error('Problem obtaining connection',err)
        res.status(400).send('Problem obtaining connection');
      }else{
        var dummies = fs.readFileSync(path.join(__dirname,'../dummies.mysql')).toString()
        connection.query(dummies,(err,result) => {
          if(err){
            connection.release()
            logger.error('Problem initializing dummy data: ', err);
            res.status(400).send('Problem initializing dummy data:', err);
          }else{
            connection.release()
            res.status(200).send('Successfully initialized dummy data')
          }
        })
      
      }
    })
  })


  app.post('/reset', (req, res) => {
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection){
      if (err){
        console.log(connection);
        // if there is an issue obtaining a connection, release the connection instance and log the error
        logger.error('Problem obtaining MySQL connection', err)
        res.status(400).send('Problem obtaining MySQL connection'); 
      } else {
        // if there is no issue obtaining a connection, execute query
        connection.query('drop table if exists test_table', function (err, rows, fields) {
          connection.release(); 
          if (err) { 
            // if there is an error with the query, release the connection instance and log the error
            connection.release()
            logger.error("Problem dropping the table test_table: ", err); 
            res.status(400).send('Problem dropping the table'); 
          } else {
            // if there is no error with the query, execute the next query and do not release the connection yet
            connection.query('CREATE TABLE `db`.`test_table` (`id` INT NOT NULL AUTO_INCREMENT, `value` VARCHAR(45), PRIMARY KEY (`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);', function (err, rows, fields) {
              connection.release(); 
              if (err) { 
                // if there is an error with the query, release the connection instance and log the error
                connection.release()
                logger.error("Problem creating the table test_table: ", err);
                res.status(400).send('Problem creating the table'); 
              } else { 
                // if there is no error with the query, release the connection instance
                connection.release()
                res.status(200).send('created the table'); 
              }
            });
          }
        });
      }
    });
  });

  module.exports = app;