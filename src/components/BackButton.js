import React from 'react';

import { useHistory } from 'react-router-dom';

export const BackButton = ({ children }) => {
  let history = useHistory();
  return (
    <button type='button' onClick={() => history.goBack()}>
      {children}
    </button>
  );
};
