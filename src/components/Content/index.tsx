import React from 'react';
import Image from 'next/image';

import desertImage from 'public/image/desert.jpeg';

const Content = (): React.ReactElement => {
  return (
    <Image
      src={desertImage}
      alt="picture of desert"
      width={300}
      height={300}
      layout={'fixed'}
    />
  );
};

export default Content;
