// src\controllers\GETimagesController.js
// procces the request to get quary images
// actions taken are: getting data, plus applying sorting and paiging

import paiging from '../services/arrayPaigingService.js';
import getImages from '../services/getImagesService.js';
import sortImages from '../services/sortImagesService.js';

/**
 * express request handler
 */
export default async function GETimagesController(req, res, next) {
  try {
    // extracting params from request
    const {q = '', sortBy = '', page = 1, items = 0 } = req.query;
    // quary data
    var images = await getImages(q); 
    const dataLen = images.length;
    // sort data
    images = sortImages(images, sortBy); 
    //paiging
    images = paiging(images, parseInt(page), parseInt(items)) 
    //prepare the results object
    let result = {
      hits: images,
      maxPage: Math.ceil(dataLen / items),
    }

    // return data as json
    res.json(result);
  } catch (error) {
    next(error);
  }
}
