import React from 'react';

const Apple = ({ bottom, left, transition }) => {
  const style = `all ${transition}ms linear`;
  return <div className="apple" style={{ bottom, left, transition: style }} />;
};

export default Apple;
