const express =require('express');
const cors =require('cors');
const bodyParser =require('body-parser');
const applicationRoutes =require('./routes/applicationRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/applications', applicationRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
