import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ msg: "success from api"});
});

app.listen(ENV.PORT, () => console.log("hehehe 3000"));