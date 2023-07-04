import { Children } from "react";
import "./index.css";

const books = [
  {
    img: "./images/book-1.jpg",
    title: "Iron Flame",
    authur: "Rebecca Yarros",
  },
  {
    img: "./images/book-2.jpg",
    title: "The Housemaid",
    authur: "Freida McFadden",
  },
  {
    img: "./images/book-3.jpg",
    title: "Unbroken Bonds of Battle: A Modern Warriors Book of Heroism",
    authur: "Johnny Joey Jones",
  },
  {
    img: "./images/book-4.jpg",
    title: "Atomic Habit",
    authur: "James Clear",
  },
  {
    img: "./images/book-5.jpg",
    title: "Outlive: The Science and Art of Longevity",
    authur: "Peter Attia MD",
  },
  {
    img: "./images/book-6.jpg",
    title: "Verity",
    authur: "Colleen Hoover",
  },
];

const allBooks = books.map((book) => {
  return (
    <article className="book">
      <h4>{book.authur}</h4>
      <img src={book.img} />
      <h2>{book.title}</h2>
      {book.children}
    </article>
  );
});

const BookItems = () => {
  return <>{allBooks}</>;
};

function Booklist() {
  return (
    <section className="booklist">
      {/*display Books using Array of Objects*/}
      <BookItems />

      {/*display Books using props*/}
      <Book
        img="./images/book-1.jpg"
        title="Iron Flame"
        authur="Rebecca Yarros"
      >
        <p>I am a child prop</p>
      </Book>
      <Book
        img="./images/book-2.jpg"
        title="The Housemaid"
        authur="Freida McFadden"
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <h2>{props.title}</h2>
      <img src={props.img} />
      <h4>{props.authur}</h4>
      {props.children}
    </article>
  );
};

export default Booklist;
