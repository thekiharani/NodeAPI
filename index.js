import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoute);

// routes
app.get('/', (req, res) => {
    console.log('We are here...');
    res.send('Finally, you are noding!');
});

app.listen(PORT, () =>
    console.log(`Server Running on Port: http://127.0.0.1:${PORT}`)
);
