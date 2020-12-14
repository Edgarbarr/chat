const crypto = require("crypto");

const fs = require("fs");

function genKeyPair(public, private) {
    const keyPair = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem"
        }
    });

    fs.writeFileSync(__dirname + `/${public}.pem`, keyPair.publicKey);
    fs.writeFileSync(__dirname + `/${private}.pem`, keyPair.privateKey);
}
// genKeyPair("private", "pub");
//running this will create those keys in config if you run and overwrite then everyone logged in will get invalid keys

