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
}