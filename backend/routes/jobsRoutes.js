const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

// Get all jobs
app.get('/jobs', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			connection.query("SELECT * FROM Project_Requests", function (err, result, fields) {
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

// Get only ongoing jobs
app.get('/jobs/ongoing', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			connection.query("SELECT * FROM Project_Requests WHERE Status = 'Ongoing'", function (err, result, fields) {
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

// Get only completed jobs
app.get('/jobs/completed', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			connection.query("SELECT * FROM Project_Requests WHERE Status = 'Completed'", function (err, result, fields) {
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

// Get only cancelled jobs
app.get('/jobs/cancelled', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			connection.query("SELECT * FROM Project_Requests WHERE Status = 'Cancelled'", function (err, result, fields) {
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

// GET: Filter by workerID
app.get('/jobs/worker', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			const userID = req.body.userID;
			connection.query("SELECT * FROM Project_Requests WHERE userID = ?", [userID], function (err, result, fields) {
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

// GET: Filter by contractorID
app.get('/jobs/contractor', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			const ContractorID = req.body.ContractorID;
			connection.query("SELECT * FROM Project_Requests WHERE userID = ?", [ContractorID], function (err, result, fields) {
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

// GET: Filter by projectID
app.get('/jobs/project', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			const jobID = req.body.jobID;
			connection.query("SELECT * FROM Project_Requests WHERE job_id = ?", [jobID], function (err, result, fields) {
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