import React from 'react';

export const PaginationButtons = ({ pageNumber, setPageNumber, pageLimit }) => {
  return (
    <div className='pagination-buttons__container'>
      <button
        className='pagination-button'
        aria-label='prev page'
        disabled={pageNumber === 1}
        onClick={() => setPageNumber(pageNumber - 1)}>
        Prev
      </button>
      <button
        className='pagination-button'
        aria-label='next page'
        disabled={!pageLimit}
        onClick={() => setPageNumber(pageNumber + 1)}>
        Next
      </button>
    </div>
  );
};
