const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const adminRoutes = require('./app/routes/adminRoutes');
const servicesRoutes = require('./app/routes/servicesRoutes');
const tipsRoutes = require('./app/routes/tipsRoutes');
const userRoutes = require('./app/routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/admin', adminRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/tips', tipsRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});