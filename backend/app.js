import express from 'express';
import db from './src/db.js';
import cors from "cors";
import userRoutes from './src/routes/UserRoute.js';
import taskRoutes from './src/routes/TaskRoute.js';
import notesRoutes from './src/routes/NotesRoute.js';
import Task from './src/model/Task.js';
import Notes from './src/model/Notes.js';

const app = express();
const PORT = 8000

app.use(express.json());
app.use(express.static('public'))
app.use(cors({credentials: true, origin: 'http://localhost:5173'}))

app.use('/user', userRoutes)
app.use('/task', taskRoutes)
app.use('/notes', notesRoutes)

Task.associate()
Notes.associate()

db.sync({ alter: true }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

