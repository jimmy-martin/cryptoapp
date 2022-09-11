const {
    default: axios
} = require("axios");

axios.defaults.baseURL = "https://api.coincap.io/v2";

module.exports = {

    getConvertedPrice: async (price) => {
        try {
            const response = await axios.get('/rates/euro');
            const convertedPrice = price / response.data.data.rateUsd;
            return convertedPrice.toFixed(2);
        } catch (error) {
            console.log(error);
        }
    },

    show: async (req, res) => {
        try {
            const id = req.params.id;
            const response = await axios.get('/assets/' + id);
            const crypto = response.data.data;
            crypto.priceUsd = parseFloat(crypto.priceUsd).toFixed(2)
            crypto.priceEur = await module.exports.getConvertedPrice(crypto.priceUsd);
            res.render('pages/show', {
                crypto: crypto,
            });
        } catch (error) {
            console.log(error);
        }

    },

    showAll: async (req, res) => {
        try {
            const response = await axios.get('/assets');
            const cryptos = response.data.data;
            res.render('pages/showAll', {
                cryptos: cryptos,
            });
        } catch (error) {
            console.log(error);
        }

    },


};