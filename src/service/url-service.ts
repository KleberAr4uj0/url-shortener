import { UrlRepository } from "../repository/url-repository";
import { Url } from "../interfaces/url";

export class UrlService {
    constructor(private urlRepository: UrlRepository) { }

    private async generateCode(): Promise<string> {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    }
    async generateShortUrl(Url: Url): Promise<string> {
        const code = await this.generateCode();
        await this.urlRepository.insertUrl(Url, code);
        return code;
    }
}