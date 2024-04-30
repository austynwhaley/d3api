import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 4000;

// Middleware
app.use(express.json());

// MongoDB Connection
const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/d3db';
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as mongoose.ConnectOptions)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Define routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
