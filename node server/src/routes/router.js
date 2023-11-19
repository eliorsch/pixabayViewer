// src\routes\router.js
// the main app's router
// handle routing all requests to their endpoints (controllers)

import express from "express";
import GETimagesController from '../controllers/GETimagesController.js'

// create router
const router = express.Router();

// handle GET requests for /images
router.get('/images', GETimagesController);

export default router;