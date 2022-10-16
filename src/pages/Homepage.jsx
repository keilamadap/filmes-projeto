import Header from "../components/Header";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";
import { useState } from "react";

const itensPerPage = 30;

const Homepage = () => {
  //pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [moviePerPage, setMoviePerPage] = useState(15);
  //pagination

  const onLeftClickHandler = () => {
    console.log(" volta");
  };
  const onRightClickhandler = () => {
    console.log("avanca");
  };

  return (
    <main className="homepage">
      <Header />
      <Movie />
      <Pagination
        page={page}
        totalPages={totalPages}
        onLeftClickHandler={onLeftClickHandler}
        onRightClickhandler={onRightClickhandler}
      />
      ;
    </main>
  );
};

export default Homepage;
