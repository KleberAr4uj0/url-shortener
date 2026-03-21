import { Url } from "../interfaces/url";
import { ShortUrl } from "../interfaces/shorrt-url";

import { UrlRepository } from "../repository/url-repository";
import { NotFoundError } from "../error/error";
import { UrlService } from "./url-service";


describe("UrlService", () => {
    let urlRepository: jest.Mocked<UrlRepository>;
    let urlService: UrlService;

    beforeEach(() => {
        urlRepository = {
            insertUrl: jest.fn(),
            selectUrl: jest.fn(),
        }

        urlService = new UrlService(urlRepository);
    });

    it("should generate a short URL", async () => {
        const url: Url = { url: "https://example.com" };

        const shortUrl = await urlService.generateShortUrl(url);

        expect(shortUrl).toBeDefined();
        expect(urlRepository.insertUrl).toHaveBeenCalled();
    });

    it("should get the original URL", async () => {
        const shortUrl: ShortUrl = { short_url: "abc123" };

        urlRepository.selectUrl.mockResolvedValue("https://example.com");

        const originalUrl = await urlService.getOriginalUrl(shortUrl);

        expect(originalUrl).toBe("https://example.com");
    });

    it("should throw NotFoundError if original URL is not found", async () => {
        const shortUrl: ShortUrl = { short_url: "notfound" };

        urlRepository.selectUrl.mockResolvedValue(null);

        await expect(urlService.getOriginalUrl(shortUrl)).rejects.toThrow(
            NotFoundError,
        );
    });
});