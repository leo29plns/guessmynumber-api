import express, { Request, Response } from 'express';
import cors from 'cors';
import { DataHandler } from './DataHandler'
import { DataObject } from './Interfaces/DataObject'

export class Server
{
    private app: express.Application;
    private dataHandler: DataHandler;

    constructor(data: DataObject[])
    {
        this.app = express();
        this.app.use(cors());
        this.dataHandler = new DataHandler(data);
        this.setupRoutes();
    }

    private setupRoutes()
    {
        this.app.get('/', this.handleGetRequest.bind(this));
    }

    private handleGetRequest(req: Request, res: Response)
    {
        const locale = req.query.locale as string;
        const randomObject = this.dataHandler.getRandomObject(locale);
        res.json(randomObject);
    }

    start(port: number)
    {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}