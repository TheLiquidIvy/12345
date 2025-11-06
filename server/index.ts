
import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contact';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
