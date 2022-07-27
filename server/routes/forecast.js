const { Router } = require("express");
const router = Router();
const axios = require('axios').default;

router.post('/forecast', async (req, res) => {


    const dataFromApi = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${req.body.city}&type=like&units=metric&lang=ru&APPID=ce1c597881d261bca53cbdbfe3403662`);

    if (dataFromApi.data.list[0])
        res.json(dataFromApi.data.list[0])
    else
        res.end(0);
})


module.exports = router;
