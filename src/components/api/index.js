const KEY =
  "?client_id=43c6cacf9563d9639ba0a6dab9ef7da31f2baf1a0565433400b7c1daef4b41b5";
const URL = 'https://api.unsplash.com/photos/';
const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=6&page=${page}`);
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.error);
    }
    return data;
};
const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.error);
    }
    return data;
};

export { fetchImages, fetchImageStats };
