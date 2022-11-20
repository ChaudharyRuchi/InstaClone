const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//connect to DataBase
mongoose.connect(
  "mongodb+srv://chaudharyruchi844-gmailcom:3fkX4YFnjRwBFSW@instaclone.bvhrh0o.mongodb.net/insta_clone?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.listen(process.env.PORT || 5000, () => console.log("Server running......"));
