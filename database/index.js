// connection to mongodb

// either connect to a local mongodb server or visit... 
// mongodb Atlas and make a cloud mongodb server we could connect to. its free
//i would recommend the mongodb atlas since we can all access it at the same time and it has a GuI
// all my comments dealing with the connection and the models are if we were to use mongoose. if you guys wanna use vanilla instead just disregard
// https://mongoosejs.com/docs/index.html mongoose docs/ mongoose makes it so we can make database schemas using javascript

// const mongoose = require('mongoose');  <------ using mongoose/ can use vanilla instead


// mongoose.Promise = global.Promise; <----- this turns everything to promises if we wanted to use promise style instead of callbacks

// var db = mongoose.connect('MONGO BY URL HERE, { useNewUrlParser: true, useUnifiedTopology: true }) <-- useNewUrlParser and UnifiedTop i would add to take away deprecation warnings on mongoose
// .then(()=>{console.log('MongoDB is connected')}); a console log to verify connection

// module.exports = db;
