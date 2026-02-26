import { Url } from "../interfaces/url";
import pool from "../database/database";
import { ShortUrl } from "../interfaces/shorrt-url";



export class UrlRepository {
    async selectUrl(shortUrl: ShortUrl): Promise<string | null> {
        const query = "SELECT url FROM urls WHERE short_url = $1";
        const values = [shortUrl.short_url];
        const result = await pool.query<Url>(query, values);

        if(result.rows.length === 0){
            return null;
        }
        return result.rows[0].url;
        
    }
    async insertUrl(url: Url,code: string): Promise<void> {
        const query = "INSERT INTO urls (url, short_url) VALUES ($1, $2)";
        const values = [url.url, code];
        await pool.query(query, values);
    }
}