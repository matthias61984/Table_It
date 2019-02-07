const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/users");
//const axios = require("axios");


// const config = {
//   headers: {
//     'user-key': 'process.env.apiKey'
//   }
// };

// axios.defaults.headers.common['user-key'] = 'process.env.apiKey'

// axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&count=25&sort=rating", {config})
//     .then((response) => {
//       for(var i = 0; i < 25; i++)
//       console.log(response.data.restaurants[i]);
//     })
//     .
//   catch ((error) => {
//     console.log("axios error:", error);
  // });
//   });
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use("*",function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;