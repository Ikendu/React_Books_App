import { useState } from "react";
import { books } from "./books";
//import Book from "./Book";

const Booklist = () => {
  const [bookList, setBookList] = useState(books);

  const deleAll = () => {
    setBookList([]);
  };
  const restoreAll = () => {
    setBookList(books);
  };
  const deleSingle = (id) => {
    const newBooks = bookList.filter((book) => book.id !== id);
    setBookList(newBooks);
  };

  const allBook = bookList.map((item) => {
    const { id, tittle, img, authur } = item;
    return (
      <article className="book" key={id}>
        <p className="number">{id}</p>
        <img src={img} alt={tittle} />
        <h3>{tittle}</h3>
        <p>{authur}</p>
        <button onClick={() => deleSingle(id)}>remove</button>
      </article>
    );
  });

  return (
    <div>
      <div className="header">
        <h1>Ikendu Book</h1>
        <p>
          A practice website done with Reactjs and CSS by Chibundu David Aniede
        </p>
      </div>
      <section className="booklist">>{allBook}</section>
      <div>
        <button type="button" onClick={deleAll}>
          Remove All
        </button>
        <button type="button" onClick={restoreAll}>
          Restore All
        </button>
      </div>
    </div>
  );
};

export default Booklist;
