const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./config/.env"),
});
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const fs = require("fs");

function emailConfirm(user) {
  console.log(user);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let pathToEmailPrivate = path.join(__dirname, "../config", "private.pem");
  let emailPrivateKey = fs.readFileSync(pathToEmailPrivate, "utf8");
  jwt.sign(
    { user },
    emailPrivateKey,
    { expiresIn: "1h", algorithm: "RS256" },
    (err, emailToken) => {
      let url = `http://localhost:3000/user/confirmation/${emailToken}`;
      const htmlEmail = `
            <h3>Click to confirm account:</h3>
            <a href="${url}">Confirm Account</a>
        `;
      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: "Confirm Account for Kelson & Friends Chat App",
        html: htmlEmail,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        }
      });
    }
  );
}
module.exports = emailConfirm;
