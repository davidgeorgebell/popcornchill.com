import React from 'react';

export const PaginationButtons = ({ pageNumber, setPageNumber, pageLimit }) => {
  return (
    <div className='pagination-buttons__container'>
      <button
        aria-label='prev page'
        disabled={pageNumber === 1}
        onClick={() => setPageNumber(pageNumber - 1)}>
        PREV
      </button>
      <button
        aria-label='next page'
        disabled={!pageLimit}
        onClick={() => setPageNumber(pageNumber + 1)}>
        NEXT
      </button>
    </div>
  );
};
