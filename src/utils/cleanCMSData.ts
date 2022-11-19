const shoudCleanList = ['button', 'relative_url', 'external_url', 'image', 'svg_image'];

const shouldClean = (obj: any) => {
  if (typeof obj.length === 'number') {
    if (
      obj[0] &&
      obj[0].id &&
      obj[0].type &&
      obj[0].value &&
      shoudCleanList.includes(obj[0].type)
    ) {
      return true;
    }
  }
  return false;
};

const cleanItem = (item: any) => {
  let newItem = { ...item[0] };

  if (newItem.type === 'image' || newItem.type === 'svg_image') {
    newItem = {
      id: newItem.id,
      type: newItem.type,
      ...newItem.value,
    };
    newItem = {
      ...newItem,
      ...newItem.image,
      ...newItem.svg_image,
    };
    delete newItem.image;
    delete newItem.svg_image;
  }

  if (newItem.type === 'button') {
    newItem = {
      id: newItem.id,
      type: newItem.type,
      ...newItem.value,
    };
    if (newItem.link) {
      newItem = {
        ...newItem,
        link: { ...newItem.link[0] },
      };
    }
  }

  return newItem;
};

const cleanCMSData = (data: any) => {
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === 'object' && data[key] !== null) {
      if (typeof data[key].length === 'number' && data[key].length !== 0) {
        // console.log('array');
        console.log(`-------------------------${key}---------------------------`);
        if (shouldClean(data[key])) {
          console.log('-------------------------BEFORE-------------------------');
          console.log(data[key]);
          const item = cleanItem(data[key]);
          console.log('-------------------------AFTER-------------------------');
          console.log(item);
        } else {
          console.log('<<<<<<<<<<<<<<<<<<<<<<<<<DEEPER>>>>>>>>>>>>>>>>>>>>>>>>');
          cleanCMSData(data[key][0].value);
        }
      }
    }
  });
};

export default cleanCMSData;
