import { UrlRepository } from "../repository/url-repository";

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
}