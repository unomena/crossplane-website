import React, { useEffect } from 'react';

type Props = {
  content: string;
};

const DangerousDiv = ({ content }: Props) => {
  useEffect(() => {
    const anchors = document.getElementsByClassName('dangerousDiv')[0].getElementsByTagName('a');

    for (const a of anchors) {
      if (a.hostname && a.hostname !== location.hostname) {
        a.setAttribute('target', '_blank');
      }
    }
  }, []);

  return <div className="dangerousDiv" dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default DangerousDiv;
