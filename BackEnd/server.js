const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/media', require('./routes/mediaRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('api/admin', require('./routes/adminRoutes'));

mongoose.connect(process.env.MONGO_URI).then(() =>  {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
   
});