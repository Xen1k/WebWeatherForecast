const { Router } = require("express");
const router = Router();
const axios = require('axios').default;
const { transliterate } = require("transliteration");

router.post('/forecast', async (req, res) => {
    try {
        const dataFromApi = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${transliterate(req.body.city)}&type=like&units=metric&lang=ru&APPID=ce1c597881d261bca53cbdbfe3403662`);
        res.json(dataFromApi.data.list[0]);
    }
    catch {
        res.end(0);
    }
})

module.exports = router;
