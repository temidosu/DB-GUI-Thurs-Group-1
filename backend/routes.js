const pool = require('./db')
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

const accountRoutes = require('./routes/accountRoutes');
const initRoutes = require('./routes/initRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');
const typeRoutes = require('./routes/typeRoutes');
const jobRoutes = require('./routes/jobsRoutes');


module.exports = function routes(app, logger) {
	app.use("/api/", accountRoutes);
	app.use("/api/", initRoutes);
	app.use("/api/", projectsRoutes);
	//app.use("/api/",reviewsRoutes);
	//app.use("/api/",typeRoutes);

	// GET /
	app.get('/', (req, res) => {
		res.status(200).send('Go to 0.0.0.0:3000.');
	});
}
