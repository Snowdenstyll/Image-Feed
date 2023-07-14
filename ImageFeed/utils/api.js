export const fetchImages = async () => {
    try {
      const response = await fetch('https://picsum.photos/list/');
      const json = await response.json();
      return json;
  } catch (error) {
      console.error(error);
  }
};

export const getImageFromId = id =>
  `https://unsplash.it/${600}/${600}?image=${id}`;
