const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');  


//ROUTES FOR creating either client, Contractor, or worker

app.post('/createcontractor', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			connection.query('INSERT INTO Contractor VALUES ?', accountType, (err, result) => {
				if (err) {
					logger.error("Error creating contractor: ", err);
					res.status(400).send('Error creating contractor');
				}
				else {
					res.status(200).end('Account type contractor created successfully')
				}
			})
		}
	})
})

app.post('/createclient', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			connection.query('INSERT INTO Contractor VALUES ?', accountType, (err, result) => {
				if (err) {
					logger.error("Error creating contractor: ", err);
					res.status(400).send('Error creating contractor');
				}
				else {
					res.status(200).end('Account type contractor created successfully')
				}
			})
		}
	})
})

app.post('/createworker', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			const workType = req.body.workType;
			const part_or_full_time = req.body.part_or_full_time;

			connection.query('INSERT INTO worker VALUES ?', workType, part_or_full_time, (err, result) => {
				if (err) {
					logger.error("Error creating worker: ", err);
					res.status(400).send('Error creating worker');
				}
				else {
					res.status(200).end('Account type worker created successfully')
				}
			})
		}
	})
})
