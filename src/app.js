import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
require('babel-core/register');
require('babel-polyfill');

const app = express();
dotenv.config();

const server = require('http').Server(app);

// Middleware
app.use(express.json());
app.use(
	cors({
		credentials: 'same-origin',
	})
);

// Router
const coinRouters = require('./routes/coin');

app.use('/api', coinRouters);

const port = process.env.PORT || 8000;
server.listen(port, () => {
	console.log(`Server is running on port : ${port}`);
});
