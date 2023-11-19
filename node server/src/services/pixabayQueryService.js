// src\services\pixabayQueryService.js
// get the data from pixabay api

import axios from 'axios';

const PIXABAY_API_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '25540812-faf2b76d586c1787d2dd02736';


export default async function pixabayQuery (q = '') {
  try {
    const response = await axios.get(PIXABAY_API_URL, {
      params: {
        key: PIXABAY_API_KEY,
        q,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw handlePixabayError(error);
  }
};

// handling errors in case of problem with fetchin from pixabay api
function handlePixabayError  (error)  {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return new Error(`Pixabay API Error: ${error.response.status} - ${error.response.data.message}`);
  } else if (error.request) {
    // The request was made but no response was received
    return new Error('Pixabay API Request Error: No response received');
  } else {
    // Something happened in setting up the request that triggered an Error
    return new Error(`Pixabay API Setup Error: ${error.message}`);
  }
};

