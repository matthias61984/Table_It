const express = require("express");
const apiRoutes = require("./routes/api/users");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT =  process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tableit");
app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        // intercept OPTIONS method
        if ('OPTIONS' == req.method) return res.send(200);
        else return next()
    }
)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if(process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}

app.use(express.static(path.join(__dirname,"./build")));
app.use("/api", apiRoutes);


app.use("*", function (req, res) {
    return res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

