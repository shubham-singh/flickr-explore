export const searchString = (text) => {
    const api = process.env.API_KEY;
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&text=${text}&format=json&nojsoncallback=1`;
}

// export const searchString = (text) =>
//   `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=da882cb7d784ac6c7783c3508d61b607&text=${text}&format=json&nojsoncallback=1`;
// export const searchString = (text) =>
//   `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=da882cb7d784ac6c7783c3508d61b607&text=${text}&format=json&nojsoncallback=1&api_sig=fb2bb2023114e476ed042810fbe3355a`;
