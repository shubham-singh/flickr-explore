export const GET_RECENT = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env["API_KEY"]}&format=json&nojsoncallback=1`;