import { customAlphabet } from "nanoid"


const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nanoid = customAlphabet(characters, 6)

export async  function generateCode (): Promise<string> {
    const code = nanoid()
    return code
}