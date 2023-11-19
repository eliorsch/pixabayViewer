// src\services\sortImagesService.js
// sort an array of images data
// also define sorting parameters and methods,

/**
 * sort an array of images data
 * @param {Array} data 
 * @param {"views" | "downloads" | "id"| "likes"} sortBy 
 * @returns data or sorted copy
 */
export default function sortImages(data, sortBy) {
  if (sortBy in methods) {
    return data.sort(methods[sortBy]);
  } else return data;
}

//  sorting methods
const methods = {
  views: (a, b) => parseInt(a.views) - parseInt(b.views),
  downloads: (a, b) => parseInt(a.downloads) - parseInt(b.downloads),
  id: (a, b) => parseInt(a.id) - parseInt(b.id),
  likes: (a, b) => parseInt(a.likes) - parseInt(b.likes),
};

/// sorting parameters
export const sortParamrters = ["views", "downloads", "id", "likes"];
