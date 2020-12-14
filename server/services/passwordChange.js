const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./config/.env"),
});
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const fs = require("fs");

function passwordChange(user) {
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
      let url = `http://localhost:3000/change-password/${emailToken}`;
      const htmlEmail = `
            <h3>Click to change password:</h3>
            <a href="${url}">Change Passsword</a>
        `;
      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: "Password change for Kelson & Friends Chat App",
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
module.exports = passwordChange;
