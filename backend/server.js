require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5173;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:5173";

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (only in production)
// if (import.meta.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// Use routes defined in the 'routes' module
app.use(routes);

// Connect to the MongoDB database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})
.then(() => {
    console.log("Successfully connected to MongoDB.");
})
.catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
    process.exit(1);
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
