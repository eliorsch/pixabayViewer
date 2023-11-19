// fetchImagesList.js
import axios from "axios";

const NODE_SERVER_URL = `http://192.168.149.69:3000/images`;
// const PIXABAY_API_URL = 'https://pixabay.com/api/';
// const PIXABAY_API_KEY = '25540812-faf2b76d586c1787d2dd02736';


// this function handle fetching data fron the server
export default async function fetchImagesList(category, page, items_in_page) {
  try {
    const response = await axios.get(NODE_SERVER_URL, {
      params: {
        // key: PIXABAY_API_KEY,
        q: category,
        page,
        items: items_in_page,
      },
    });
    let {data} = response;
    if (Array.isArray(data.hits)) {
      return data;
    } else throw new TypeError("the api server didnt return a list of images!");
  } catch (err) {
    console.error(err);
    throw err;
  }
}
