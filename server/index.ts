import express, { Request, Response } from "express";
import namesRouter from './src/routes/names'
import { getNameInfo } from "./src/handlers";
const app = express();
app.use(express.json());
app.use(namesRouter)
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello, this is Node.js, Express.js and TypeScript."
    })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Marktrix Server is running on port ${port}`);
})