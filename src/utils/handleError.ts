const handleError = (message: string, error: any) => {
  console.log('-');
  console.log(`---------------- error start ----------------`);
  console.log(`${message} error ${error?.response?.status}`);
  console.log(`error url: ${error?.response?.config?.baseURL}${error?.response?.config?.url}`);
  console.log(`---------------- error end ----------------`);
  console.log('-');
};

export default handleError;
