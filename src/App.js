import { Children } from "react";
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
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
      <Book
        img="./images/book-3.jpg"
        title="Unbroken Bonds of Battle: A Modern Warriors Book of Heroism"
        authur="Johnny Joey Jones"
      />
      <Book
        img="./images/book-4.jpg"
        title="Atomic Habit"
        authur="James Clear"
      />
      <Book
        img="./images/book-5.jpg"
        title="Outlive: The Science and Art of Longevity"
        authur="Peter Attia MD"
      />
      <Book img="./images/book-6.jpg" title="Verity" authur="Colleen Hoover" />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h4>{props.authur}</h4>
      {props.children}
    </article>
  );
};

export default Booklist;
