import { UrlService } from "../service/url-service";
import { Request, Response } from "express";

export class UrlController {
    constructor(private urlService: UrlService) { }

    createShortUrl = async(req: Request<{}, {}, { url: string }>, res: Response) => {
        const { url } = req.body;
        const shortUrl = await this.urlService.generateShortUrl({ url });
        res.status(201).json({ shortUrl: `http://localhost:3000/${shortUrl}` });
    }
 }