import pool from "./database";

const createTable = async () => {
    try{
        await pool.query(`
      CREATE TABLE IF NOT EXISTS urls (
        id SERIAL PRIMARY KEY,
        url TEXT NOT NULL UNIQUE,
        short_url TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
        console.log("Table created successfully");
    }catch(err){
        console.log("Error creating table:", err);
    }finally{
        await pool.end();
    }
}
createTable();