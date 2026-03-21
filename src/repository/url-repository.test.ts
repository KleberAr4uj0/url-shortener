import { UrlRepository } from "../repository/url-repository";
import pool from "../database/database";
import { Url } from "../interfaces/url";
import { ShortUrl } from "../interfaces/shorrt-url";

jest.mock("../database/databasepg", () => ({
  query: jest.fn(),
}));

describe("UrlRepositoryPG", () => {
  const repo = new UrlRepository();

  describe("selectUrl", () => {
    it("should select the original URL from the database", async () => {
      const shortUrl: ShortUrl = { short_url: "abc123" };
      const values = [shortUrl.short_url];
      const url = "https://example.com";

      (pool.query as jest.Mock).mockResolvedValueOnce({
        rows: [{ url }],
      });

      const result = await repo.selectUrl(shortUrl);

      expect(pool.query).toHaveBeenCalledWith(
        "SELECT url FROM urls WHERE short_url = $1",
        values,
      );
      expect(result).toBe(url);
    });

    it("should return null if URL is not found", async () => {
      const shortUrl: ShortUrl = { short_url: "notfound" };

      (pool.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

      const result = await repo.selectUrl(shortUrl);

      expect(result).toBeNull();
    });
  });

  describe("insertUrl", () => {
    it("should insert a new URL into the database", async () => {
      const url: Url = { url: "https://example.com" };
      const code = "abc123";
      const values = [url.url, code];
      await repo.insertUrl(url, code);

      expect(pool.query).toHaveBeenCalledWith(
        "INSERT INTO urls (url, short_url) VALUES ($1, $2)",
        values,
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
