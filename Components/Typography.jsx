import React from 'react'

const Typography = ({ variant = "p", children , className }) => {
  const Tag = variant;
  return (
    <div>
      <Tag className={ className}>
        {children}
      </Tag>
    </div>
  );
};

export default Typography