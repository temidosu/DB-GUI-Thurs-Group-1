@temidosu
temidosu Prototype client, Contractor, and worker
Latest commit e355d99 4 days ago
 History
 2 contributors
@SeeMorton1@temidosu
65 lines (60 sloc)  1.87 KB
  

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
