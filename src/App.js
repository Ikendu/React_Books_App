import { Children } from "react";
import "./index.css";

const books = [
  {
    id: 1,
    img: "./images/book-1.jpg",
    title: "Iron Flame",
    authur: "Rebecca Yarros",
  },
  {
    id: 2,
    img: "./images/book-2.jpg",
    title: "The Housemaid",
    authur: "Freida McFadden",
  },
  {
    id: 3,
    img: "./images/book-3.jpg",
    title: "Unbroken Bonds of Battle: A Modern Warriors Book of Heroism",
    authur: "Johnny Joey Jones",
  },
  {
    id: 4,
    img: "./images/book-4.jpg",
    title: "Atomic Habit",
    authur: "James Clear",
  },
  {
    id: 5,
    img: "./images/book-5.jpg",
    title: "Outlive: The Science and Art of Longevity",
    authur: "Peter Attia MD",
  },
  {
    id: 6,
    img: "./images/book-6.jpg",
    title: "Verity",
    authur: "Colleen Hoover",
  },
];

const allBooks = books.map((book) => {
  return (
    <div>
      <article className="book" key={book.id}>
        <img src={book.img} />
        <h2>{book.title}</h2>
        <h4>{book.authur}</h4>
        {book.children}
      </article>
    </div>
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
      {/* {testingBook} */}

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
  const { img, title, authur, children } = props;
  return (
    <article className="book">
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h4>{props.authur}</h4>
      {props.children}
    </article>
  );
};
{
  /*
const testingBook = books.map((book) => {
  return <Book img={book.img} title={book.title} authur={book.authur} />;
});
*/
}

export default Booklist;
