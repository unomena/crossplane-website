import React, { createContext, useContext } from 'react';

const NewsBannerContext = createContext<{ newsBannerData: NewsBanner }>({
  newsBannerData: {
    banner_id: '',
    text: '',
    button: [
      {
        id: '',
        value: {
          text: '',
          link: [
            {
              id: '',
              type: '',
              value: '',
            },
          ],
          style_type: 'whiteOutlined',
        },
      },
    ],
  },
});

export const NewsBannerProvider = ({
  newsBannerData,
  children,
}: {
  newsBannerData: NewsBanner;
  children: React.ReactNode;
}) => {
  return (
    <NewsBannerContext.Provider
      value={{
        newsBannerData,
      }}
    >
      {children}
    </NewsBannerContext.Provider>
  );
};

const useNewsBanner = () => {
  const context = useContext(NewsBannerContext);

  return context;
};

export default useNewsBanner;
