import { NextFunction, Request, Response } from "express";
import { urlSchema } from "../schema/validation-url-schema";

export const validateUrl = (req: Request, res: Response, next: NextFunction) => { 
    const { error } = urlSchema.validate(req.body); 
    if (error) { 
        return res.status(400).json({ error: "Invalid URL" }); 
    } 
    next();
}