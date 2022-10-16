import React from "react";

const Pagination = ({
  page,
  moviePerPage,
  totalPages,
  onLeftClickHandler,
  onRightClickhandler,
}) => {
  return (
    <div className="pagination-container">
      <button onClick={onLeftClickHandler}> ⏪ </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClickhandler}> ⏩ </button>
    </div>
  );
};

export default Pagination;
