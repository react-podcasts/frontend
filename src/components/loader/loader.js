import React from 'react';
import { ReactComponent as LoaderIcon } from './loader.svg';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <LoaderIcon
        className="loader__icon"
        width="24"
        height="24"
        aria-hidden="true"
      />
      <span className="loader__text">Loading...</span>
    </div>
  );
};

export default Loader;
