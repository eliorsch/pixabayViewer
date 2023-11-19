// src\services\arrayPaigingService.js
//handle paiging in array of data

/**
 * paiging service for any array 
 * @param {[*]} arr 
 * @param {integer} page number of page
 * @param {integer} itemsInPage number of items in every page
 * @returns {[]} arr or portion of it
 */
function paiging(arr, page, itemsInPage) {
  // input validation
  if (!Array.isArray(arr) || !Number.isInteger(page) || !Number.isInteger(itemsInPage)) return arr;
  const maxPageNumber = Math.ceil(arr.length / itemsInPage);

  // if items in page is less then 1 or bigger then the array, return the entier array
  if (itemsInPage < 1 || itemsInPage > arr.length) return arr;

  //if page is smaller the 1 return first page
  if (page < 1) page = 1;

  //if page is bigger the max page number, return last page;
  if (page > maxPageNumber) page = maxPageNumber;

  // the first iem in the page is the next after the last item in the previou page
  const firstItem = (page - 1) * itemsInPage + 1;

  /// return the page's items
  return arr.slice(firstItem - 1, (firstItem - 1)  + itemsInPage);
}

export default paiging;
