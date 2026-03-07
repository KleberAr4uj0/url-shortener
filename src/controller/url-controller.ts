import { UrlService } from "../service/url-service";
import { Request, Response } from "express";

export class UrlController {
    constructor(private urlService: UrlService) { }

    createShortUrl = async(req: Request<{}, {}, { url: string }>, res: Response) => {
        const { url } = req.body;
        const shortUrl = await this.urlService.generateShortUrl({ url });
        res.status(201).json({ shortUrl: `http://localhost:3000/${shortUrl}` });
    }

    redirectOriginalUrl = async (req: Request<{ code: string }>, res: Response) => {
        const { code } = req.params;
        const originalUrl = await this.urlService.getOriginalUrl({ short_url: code});
        res.redirect(originalUrl);
    }
 }