import crypto from 'crypto';


export async function generateCode(): Promise<string> {
    return crypto.randomBytes(3).toString('hex');
}