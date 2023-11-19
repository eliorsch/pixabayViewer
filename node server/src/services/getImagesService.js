// src\services\getImagesService.js
// get the images data from pixabay api or internal storage

import pixabayQuery from "./pixabayQueryService.js";

// a constant for time to refresh the data in cache from pixabay api 
const REFRESH_SECONDS = 60;

/**
 * get the results images data for quary 
 * @param {string} q 
 * @returns array of data
 */
export default async function getImages(q = "") {
 if (serviceCache.get(q)){
  // if serviceCache has the current quary: return quary from serviceCache
  return serviceCache.get(q);
 }
 else {
 // else: quary pixabay for data and store it in cache before returning it
  let data = await pixabayQuery(q);
  serviceCache.set(q, data);
  return data;
 }
}

// ----- CACHING -----


// this is a very simple cache to prevent unnecessary queries to pixabay
// this is for service's internal use only
const serviceCache = {
  // the actual cache
  cache: {},

  // register the data by key and the time its created
  set: function (key, value) {
    this.cache[key] = value;
    setTimeout(() => {
      delete this.cache[key];
    }, REFRESH_SECONDS*1000);
  },

  // get data by key from cache
  get: function (key) {
    return this.cache[key];
  },
};
