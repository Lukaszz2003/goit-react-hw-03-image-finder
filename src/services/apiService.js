import axios from 'axios';

const KEY = '38129363-ebf30580ea635c0303c0013d8';

const pageLimit = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const { data } = await axios({
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
      page: page,
    },
  });

  return data;
};
