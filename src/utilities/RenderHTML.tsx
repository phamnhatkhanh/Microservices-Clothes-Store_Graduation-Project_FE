import React from 'react';

type RenderHTMLProps = {
    htmlString: string;

  };
const RenderHTML = ({ htmlString }:RenderHTMLProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default RenderHTML;
