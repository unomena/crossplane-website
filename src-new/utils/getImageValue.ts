const getImageValue = (value: ImageValue) => {
  if (value.image) {
    return value.image;
  }
  return value.svg_image;
};

export default getImageValue;
