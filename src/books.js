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

export const allBooks = books.map((book) => {
  const displayTitle = () => {
    alert(book.title);
  };
  return (
    <div>
      <article className="book" key={book.id}>
        <img src={book.img} />
        <h2>{book.title}</h2>
        <h4>{book.authur}</h4>
        <button onClick={displayTitle}>Display title</button>
        {book.children}
      </article>
    </div>
  );
});
