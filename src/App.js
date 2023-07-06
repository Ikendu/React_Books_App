import "./index.css";
import { books } from "./books";
//import Book from "./Book";

const allBooks = books.map((book, index) => {
  const displayTitle = () => {
    alert(book.title);
  };
  //added getBook function
  const getSingleBook = (id) => {
    getBook(book.id);
  };
  return (
    <div>
      <article className="book" key={book.id}>
        <img src={book.img} />
        <h2>{book.title}</h2>
        <h4>{book.authur}</h4>
        <button onClick={displayTitle}>Display title</button>
        <button onClick={getSingleBook}>Get Authur</button>
        <span className="number">{index + 1}</span>
        {book.children}
      </article>
    </div>
  );
});

const displayValue = () => {
  alert("gibberlishes");
};

const getBook = (id) => {
  const theBook = books.find((book) => book.id === id);
  console.log(theBook);
  alert(theBook.authur);
};

const BookItems = () => {
  return (
    <>
      {allBooks} {getBook}
    </>
  );
};
function Booklist() {
  return (
    <>
      <div className="header">
        <h1>Amazon Best Selling Books</h1>
        <p>
          A practice website done with Reactjs and CSS by Chibundu David Aniede
        </p>
      </div>

      <section className="booklist">
        {/*direct annoymous function to get books using Book component
        {books.map((book, index) => (
          <Book {...book} key={book.id} getBook={getBook} number={index} />
        ))}*/}
        {/*display Books using Array of Objects*/}
        <BookItems />
        {/*
       using the constructor
      {testingBook} 
      */}

        {/*
        display Books using props*
        <Book
          id={1}
          img="./images/book-1.jpg"
          title="Iron Flame"
          authur="Rebecca Yarros"
          disPlayit={displayValue}
        >
          <p>I am a child prop</p>
        </Book>
        <Book
          id={2}
          img="./images/book-2.jpg"
          title="The Housemaid"
          authur="Freida McFadden"
          getBook={getBook}
        />
        */}
      </section>
    </>
  );
}

export default Booklist;
