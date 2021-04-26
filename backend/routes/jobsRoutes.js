
// // Get all jobs
// app.get('/jobs', (req, res) => {
// 	pool.getConnection((err, connection) => {
// 		if (err) {
// 			console.log(connection);
// 			logger.error('Problem obtaining MySQL connection', err)
// 			res.status(400).send('Problem obtaining MySQL connection');
// 		} else {
// 			connection.query("SELECT * FROM Project_Requests", function (err, result, fields) {
// 				if (err) {
// 					logger.error('', err);
// 					res.status(400).send('failed');
// 				}
// 				else {
// 					res.status(200).json(JSON.parse(JSON.stringify(result)))
// 				}
// 			});
// 		}
// 	})
// });

// // Get only ongoing jobs
// app.get('/jobs/ongoing', (req, res) => {
// 	pool.getConnection((err, connection) => {
// 		if (err) {
// 			console.log(connection);
// 			logger.error('Problem obtaining MySQL connection', err)
// 			res.status(400).send('Problem obtaining MySQL connection');
// 		} else {
// 			connection.query("SELECT * FROM Project_Requests WHERE Status = 'Ongoing'", function (err, result, fields) {
// 				if (err) {
// 					logger.error('', err);
// 					res.status(400).send('failed');
// 				}
// 				else {
// 					res.status(200).json(JSON.parse(JSON.stringify(result)))
// 				}
// 			});
// 		}
// 	})
// });

// // Get only completed jobs
// app.get('/jobs/completed', (req, res) => {
// 	pool.getConnection((err, connection) => {
// 		if (err) {
// 			console.log(connection);
// 			logger.error('Problem obtaining MySQL connection', err)
// 			res.status(400).send('Problem obtaining MySQL connection');
// 		} else {
// 			connection.query("SELECT * FROM Project_Requests WHERE Status = 'Completed'", function (err, result, fields) {
// 				if (err) {
// 					logger.error('', err);
// 					res.status(400).send('failed');
// 				}
// 				else {
// 					res.status(200).json(JSON.parse(JSON.stringify(result)))
// 				}
// 			});
// 		}
// 	})
// });


// // Get only cancelled jobs
// app.get('/jobs/cancelled', (req, res) => {
// 	pool.getConnection((err, connection) => {
// 		if (err) {
// 			console.log(connection);
// 			logger.error('Problem obtaining MySQL connection', err)
// 			res.status(400).send('Problem obtaining MySQL connection');
// 		} else {
// 			connection.query("SELECT * FROM Project_Requests WHERE Status = 'Cancelled'", function (err, result, fields) {
// 				if (err) {
// 					logger.error('', err);
// 					res.status(400).send('failed');
// 				}
// 				else {
// 					res.status(200).json(JSON.parse(JSON.stringify(result)))
// 				}
// 			});
// 		}
// 	})
// });