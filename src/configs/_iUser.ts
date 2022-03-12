interface _iUser {
    DEFAULT: { //user alias
        accessNumber: string, //should be encrypted and decrypted on the fly
        userPassword: string //should be encrypted and decrypted on the fly
    }
}