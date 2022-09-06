const {
    default: axios
} = require("axios");

axios.defaults.baseURL = "https://api.coincap.io/v2";

module.exports = {

    show: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await axios.get('/assets/' + id);
            res.send(response.data);
        } catch (error) {
            console.log(error);
        }

    },

    showAll: async (req, res) => {
        try {
            const response = await axios.get('/assets');
            res.send(response.data);
        } catch (error) {
            console.log(error);
        }

    },


};