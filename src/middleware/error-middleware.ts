import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../error/error";



export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
     if (err instanceof NotFoundError) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Internal server error' });
}
