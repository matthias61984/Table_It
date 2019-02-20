import axios from "axios";

//var zKey = require("dotenv").config();
const config = {
    headers: {
      'user-key': '4ef06bf14aba6e0bcd3f7668a7b86e17'
    }
  };

axios.defaults.headers.common['user-key'] = '4ef06bf14aba6e0bcd3f7668a7b86e17'




export default {
    getRandomRestaurantArray: function(lat , long) {
    return axios.get("https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + long , {config})
        .then((response) => {
            const randomRestArray = [];
            for(var i = 0; i < 20; i++) {
                randomRestArray.push(response.data.restaurants[i]);
            }
            return randomRestArray;
        })
        .catch ((error) => {
            console.log("axios error:", error);
        });
    },
    
    getRestaurantByID : function(resID) {
        return axios.get("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + resID , {config})
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log("axios error:" , error);
        });
    },

    getUserbyUsername: function(username) {
        return axios.get("/api/users/login/" + username);
    },

    getUserByID : function(id) {
        return axios.get("/api/users/" + id)
    },

    removeUser : function(id) {
        return axios.delete("/api/users/" + id);
    },

    createUser : function(userData) {
        return axios.post("/api/users" , userData).then(res => res);
    },

    updateFavorites : function(id , userData) {
        return axios.put("/api/users/" + id , userData);
    },

    getFavorites : function(id) {
        return axios.get("/api/users/favorites/" + id);

    },
    removeFavorites : function(id , userData) {
        return axios.put("/api/favorites/" + id , userData);
    }

}