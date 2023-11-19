// app.js
// the app's main file

import express, { json } from "express";
import router from "./routes/router.js";
import generalServerErrors from "./errors/generalServerErrors.js";

// create express server
const app = express();

// json parser middleware
app.use(json());

// use /routes/router to handle requests routes
app.use(router);

//general error handler
app.use(generalServerErrors);

export default app;
