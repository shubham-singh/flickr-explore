export const searchString = (page, text) => {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0d40a2dcb848d1b3a053382566f6eb1c&text=${text}&page=${page}&format=json&nojsoncallback=1`;
}

export const getRecentString = (page) => {
 return `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0d40a2dcb848d1b3a053382566f6eb1c&page=${page}&format=json&nojsoncallback=1`
}

