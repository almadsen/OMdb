import './Pagination.css';
export default function Pagination({
  currentPage,
  numberOfPages,
  handlePagination,
}) {
  return (
    <div className="pages">
      {currentPage - 1 === 0 ? null : (
        <>
          <b
            onClick={() => handlePagination(currentPage - 1)}
            className="pages-left"
          >
            &lt;
          </b>
          <b onClick={() => handlePagination(currentPage - 1)}>
            {currentPage - 1}
          </b>
        </>
      )}
      <b className="actualPage">{currentPage}</b>
      {currentPage < numberOfPages && (
        <b onClick={() => handlePagination(currentPage + 1)}>
          {currentPage + 1}
        </b>
      )}
      {currentPage < numberOfPages - 1 && (
        <>
          <b>...</b>
          <b onClick={() => handlePagination(numberOfPages)}>{numberOfPages}</b>
        </>
      )}
      {currentPage < numberOfPages && (
        <b
          onClick={() => handlePagination(currentPage + 1)}
          className="pages-right"
        >
          &gt;
        </b>
      )}
    </div>
  );
}
