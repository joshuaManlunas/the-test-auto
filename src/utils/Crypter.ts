import * as crypto from 'crypto'

const unlockKey = process.env.KEY || 'ChangeMe'
const algorithm = 'aes-256-ctr';
const secretKey = crypto.createHash('sha256').update(unlockKey).digest()
// slice up the returned byte array to just use the first 16 bits
const iv = crypto.createHash('sha256').update('ChangeMeToo').digest().slice(0, 16)

/**
 * Encrypts data using the fixed IV and UNLOCK KEY
 * @param data
 */
export const encrypt = (data: string) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

    return {
        ENC: encrypted.toString('hex')
    };
};

/**
 * decrypts incoming data object using the fixed IV and UNLOCK KEY
 * @param data is an object literal
 */
export const decrypt = (data) => {

    // @ts-ignore
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(data.ENC, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

// SAMPLE USAGE
// let encryptedData = encrypt('secret_sauce')
// console.log(encryptedData)
//
// let decryptedData = decrypt(encryptedData)
// console.log(decryptedData)
