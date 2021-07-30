export const searchString = (text) => {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0d40a2dcb848d1b3a053382566f6eb1c&text=${text}&format=json&nojsoncallback=1`;
}