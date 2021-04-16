const pool = require('./db')
const path = require('path')
const fs = require('fs')

module.exports = function routes(app, logger) {
	// GET /
	app.get('/', (req, res) => {
		res.status(200).send('Go to 0.0.0.0:3000.');
	});

	// POST /reset
	app.post('/reset', (req, res) => {
		// obtain a connection from our pool of connections
		pool.getConnection(function (err, connection) {
			if (err) {
				console.log(connection);
				// if there is an issue obtaining a connection, release the connection instance and log the error
				logger.error('Problem obtaining MySQL connection', err)
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				// if there is no issue obtaining a connection, execute query
				connection.query('drop table if exists test_table', function (err, rows, fields) {
					if (err) {
						// if there is an error with the query, release the connection instance and log the error
						connection.release()
						logger.error("Problem dropping the table test_table: ", err);
						res.status(400).send('Problem dropping the table');
					} else {
						// if there is no error with the query, execute the next query and do not release the connection yet
						connection.query('CREATE TABLE `db`.`test_table` (`id` INT NOT NULL AUTO_INCREMENT, `value` VARCHAR(45), PRIMARY KEY (`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);', function (err, rows, fields) {
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
	//POST /init_dummies
	//Resets the database only to dummy database
	app.post('/init_dummies', (req, res) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.log(connection);
				logger.error('Problem obtaining connection', err)
				res.status(400).send('Problem obtaining connection');
			} else {
				var dummies = fs.readFileSync(path.join(__dirname, './dummies.sql')).toString()
				connection.query(dummies, (err, result) => {
					if (err) {
						connection.release()
						logger.error('Problem initializing dummy data: ', err);
						res.status(400).send('Problem initializing dummy data:', err);
					} else {
						connection.release()
						res.status(200).send('Successfully initialized dummy data')
					}
				})

			}
		})
	})
	// app.post('/signup',(req,res) => {
	//   pool.getConnection((err,connection) => {
	//     if(err) {
	//       logger.error('Problem obtaining MySQL connection', err)
	//       res.status(400).send('Problem obtaining MySQL connection'); 
	//     }else{
	//       const type = req.body.type+'s'
	//       const name = "'"+req.body.name+"',"
	//       const password = "'" + req.body.password + "',"
	//       const email = "'" + req.body.email + "',"
	//       connection.query('INSERT INTO `db`.+type+' (name,password,email)')
	//     }
	//   })
	// })

	// POST /multplynumber
	app.post('/multplynumber', (req, res) => {
		console.log(req.body.product);
		// obtain a connection from our pool of connections
		pool.getConnection(function (err, connection) {
			if (err) {
				// if there is an issue obtaining a connection, release the connection instance and log the error
				logger.error('Problem obtaining MySQL connection', err)
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				// if there is no issue obtaining a connection, execute query and release connection
				connection.query('INSERT INTO `db`.`test_table` (`value`) VALUES(\'' + req.body.product + '\')', function (err, rows, fields) {
					connection.release();
					if (err) {
						// if there is an error with the query, log the error
						logger.error("Problem inserting into test table: \n", err);
						res.status(400).send('Problem inserting into table');
					} else {
						res.status(200).send(`added ${req.body.product} to the table!`);
					}
				});
			}
		});
	});

	// GET /checkdb
	app.get('/values', (req, res) => {
		// obtain a connection from our pool of connections
		pool.getConnection(function (err, connection) {
			if (err) {
				// if there is an issue obtaining a connection, release the connection instance and log the error
				logger.error('Problem obtaining MySQL connection', err)
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				// if there is no issue obtaining a connection, execute query and release connection
				connection.query('SELECT value FROM `db`.`test_table`', function (err, rows, fields) {
					connection.release();
					if (err) {
						logger.error("Error while fetching values: \n", err);
						res.status(400).json({
							"data": [],
							"error": "Error obtaining values"
						})
					} else {
						res.status(200).json({
							"data": rows
						});
					}
				});
			}
		});
	});

	// GET /login
	app.post('/login', (req, res) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.log(connection);
				logger.error('Problem obtaining MySQL connection', err);
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				const email = "'" + req.body.email + "'"
				const password = req.body.password;
				connection.query('SELECT * from `db`.`Users` WHERE userEmail = ' + email, (err, result) => {
					if (err) {
						logger.error("Login failed", err);
						res.status(400).send('Login failed:', err);
					}
					else {
						if (result.length <= 0) {
							res.status(400).end('no user found');
						}
						else {
							if (password == result[0].userPassword) {
								res.status(200).end(JSON.stringify(result[0].user_id));
							}
							else {
								res.status(400).end('incorrect password');
							}
						}
					}
				})
			}
		})
	})

	// GET /userinfo
	app.get('/users', (req, res) => {
		// obtain a connection from our pool of connections
		pool.getConnection(function (err, connection) {
			if (err) {
				// if there is an issue obtaining a connection, release the connection instance and log the error
				logger.error('Problem obtaining MySQL connection', err)
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				// if there is no issue obtaining a connection, execute query and release connection
				connection.query('SELECT * FROM `db`.`Users`', function (err, rows, fields) {
					connection.release();
					if (err) {
						logger.error("Error while fetching values: \n", err);
						res.status(400).json({
							"data": [],
							"error": "Error obtaining values"
						})
					} else {
						res.status(200).json({
							"data": rows
						});
					}
				});
			}
		});
	});


	// GET /userinfo
	app.get('/userinfo', (req, res) => {
		var user_id = req.params.user_id
		// obtain a connection from our pool of connections
		pool.getConnection(function (err, connection) {
			if (err) {
				// if there is an issue obtaining a connection, release the connection instance and log the error
				logger.error('Problem obtaining MySQL connection', err)
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				// if there is no issue obtaining a connection, execute query and release connection
				connection.query('SELECT * FROM `db`.`Users` WHERE user_id = ?', user_id, function (err, rows, fields) {
					connection.release();
					if (err) {
						logger.error("Error while fetching values: \n", err);
						res.status(400).json({
							"data": [],
							"error": "Error obtaining values"
						})
					} else {
						res.status(200).json({
							"data": rows
						});
					}
				});
			}
		});
	});

	// GET /userByLocation
	app.get('/userByLocation', (req, res) => {
		var location_id = req.params.location_id
		// obtain a connection from our pool of connections
		pool.getConnection(function (err, connection) {
			if (err) {
				// if there is an issue obtaining a connection, release the connection instance and log the error
				logger.error('Problem obtaining MySQL connection', err)
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				// if there is no issue obtaining a connection, execute query and release connection
				connection.query('SELECT * FROM `db`.`Users` WHERE location_id = ?', location_id, function (err, rows, fields) {
					connection.release();
					if (err) {
						logger.error("Error while fetching values: \n", err);
						res.status(400).json({
							"data": [],
							"error": "Error obtaining values"
						})
					} else {
						res.status(200).json({
							"data": rows
						});
					}
				});
			}
		});
	});

	// GET /phoneNumber
	app.get('/phoneNumber', (req, res) => {
		var user_id = req.params.user_id
		// obtain a connection from our pool of connections
		pool.getConnection(function (err, connection) {
			if (err) {
				// if there is an issue obtaining a connection, release the connection instance and log the error
				logger.error('Problem obtaining MySQL connection', err)
				res.status(400).send('Problem obtaining MySQL connection');
			} else {
				// if there is no issue obtaining a connection, execute query and release connection
				connection.query('SELECT phoneNumber FROM `db`.`Users` WHERE user_id = ?', user_id, function (err, rows, fields) {
					connection.release();
					if (err) {
						logger.error("Error while fetching values: \n", err);
						res.status(400).json({
							"data": [],
							"error": "Error obtaining values"
						})
					} else {
						res.status(200).json({
							"data": rows
						});
					}
				});
			}
		});
	});

}
