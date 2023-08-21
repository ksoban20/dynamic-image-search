import axios from 'axios';

export const dynamicSearch = async (term) => {
  const res = await axios.get(
    `https://api.pexels.com/v1/search?query=${term}`,
    {
      headers: {
        Authorization:
          'XjSDnft2bmLpIcjHVyedjFNPjL1Reqjz3zHnrCAIMBK4y7pSMPn1V4Cn',
      },
    }
  );
  return res.data.photos;
};
