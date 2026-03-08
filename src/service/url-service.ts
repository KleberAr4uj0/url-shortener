import { UrlRepository } from "../repository/url-repository";
import { Url } from "../interfaces/url";
import { ShortUrl } from "../interfaces/shorrt-url";
import { NotFoundError } from "../error/error";
import { generateCode } from "../utils/generate-code";


export class UrlService {
    constructor(private urlRepository: UrlRepository) { }

    
    async generateShortUrl(Url: Url): Promise<string> {
        const code = await generateCode();
        await this.urlRepository.insertUrl(Url, code);
        return code;
    }
    async getOriginalUrl(ShortUrl: ShortUrl): Promise<string>{
        const url = await this.urlRepository.selectUrl(ShortUrl);

        if(!url){
            throw new NotFoundError("URL not found");
        }
        return url;
    }
}