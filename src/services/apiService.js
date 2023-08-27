import axios from 'axios';

const api = async (query, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    page,
    key: '38129363-ebf30580ea635c0303c0013d8',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const { data } = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  if (data.totalHits === 0) {
    throw new Error('Nothing Found');
  }
  return data;
};

export default api;
