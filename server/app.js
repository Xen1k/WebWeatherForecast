const express = require("express");
const app = express();

const cors = require('cors')
app.use(cors({origin: true, credentials: true}));

app.use(express.json({extended: true}));
app.use("/", require("./forecast"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log("Started server!"));
