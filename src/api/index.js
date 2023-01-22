const KEY = 'CXB4NaIvOVsPqI_06tP_G5lS99MIgVPb4x1Vbv1aVk0';

const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    //simulate Error
    //const response = await fetch(`${URL}?client_id=${KEY}&per_page=3&page=abc`);
    const response = await fetch(
        `${URL}?client_id=${KEY}&per_page=3&page=${page}`,
    );
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages };
