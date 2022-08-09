import React from 'react';
import Image from 'next/image';

import desertImage from 'public/image/desert.jpeg';

const Content = (): React.ReactElement => {
  return <Image src={desertImage} alt="picture of desert" />;
};

export default Content;
