const express = require("express")
const app = express.Router()
const pool = require('../db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

// GET all projects
app.get('/projects/all/', (req, res) => {
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
app.get('/projects/clients/:ClientID', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var ClientID = req.params.ClientID;
			connection.query("SELECT * FROM Projects JOIN Users ON Projects.clientID = Users.user_id WHERE Projects.ClientID = ? ", [ClientID], function (err, result, fields) {
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

//GET project by ContractorID
app.get('/projects/contractors/:ContractorID', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var ContractorID = req.params.ContractorID;
			connection.query("SELECT * FROM Projects JOIN Users ON Projects.contractorID = Users.user_id WHERE Projects.ContractorID = ? ", [ContractorID], function (err, result, fields) {
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

//GET project by ProjectID
app.get('/projects/:job_id', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var job_id = req.params.job_id;
			connection.query("SELECT * FROM Projects WHERE Projects.job_id = ? ", [job_id], function (err, result, fields) {
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

// POST: Create new project
app.post('/project', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var data = req.body;
			connection.query('INSERT INTO Projects VALUES ?', data, (err, result) => {
				res.status(200).end(JSON.stringify(result));
			})
		}
	})
})

app.put('/accept/:id', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var id = req.params.id; 
			connection.query('UPDATE Projects SET Status = "In Progress" WHERE job_id = ?', id, (err, result) => {
				connection.release(); 
				if (err) {
					logger.error("Problem accepting project ", err);
                    res.status(400).send('project acceptance failed');
				}
				else{
					res.status(200).end('project accepted')
				}
			})
		}
	})
})

app.put('/decline/:id', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var id = req.params.id; 
			connection.query('UPDATE Projects SET Status = "Denied" WHERE job_id = ?', id, (err, result) => {
				connection.release(); 
				if (err) {
					logger.error("Problem declining project ", err);
                    res.status(400).send('project decline failed');
				}
				else{
					res.status(200).end('project decline')
				}
			})
		}
	})
})

app.post('/project', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) {
			console.log(connection);
			logger.error('Problem obtaining MySQL connection', err)
			res.status(400).send('Problem obtaining MySQL connection');
		} else {
			var data = req.body;
			console.log("data", data);
			connection.query('INSERT INTO Projects VALUES(default, ?, ?, ?, ?, ?, ?, NOW())', [data.ContractorID, data.ClientID, data.Status, data.ProjectName, data.Description, data.Deadline], (err, result) => {
				connection.release();
				if (err) {
					logger.error("Problem creating project: ", err);
					res.status(400).send('project request failed');
				}
				else {
					res.status(200).end('created new project')
				}
			})
		}
	})
})


module.exports = app;
