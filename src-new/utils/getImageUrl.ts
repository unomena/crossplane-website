const getImageUrl = (image: ImageType) => {
  if (image) {
    if (image.value.image) {
      return image.value.image.url;
    } else if (image.value.svg_image) {
      return image.value.svg_image.url;
    }
  }
  return null;
};

export default getImageUrl;
