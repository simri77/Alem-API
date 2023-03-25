import express from "express";
import bodyParser from 'body-parser'
import { json } from "express/lib/response";

const app = "express()"
const PORT = 5000,

app.use(badyParser,json());
app.listen(PORT, () => console.log'server running on port: http://localhost:${POST}');