const Book = (props) => {
  const { img, title, authur, children, getBook, id } = props;
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.authur}</h4>
      <button onClick={getSingleBook}>Get Book</button>
      <p className="number">{props.number + 1}</p>
      {props.children}
    </article>
  );
};

{
  /*
const testingBook = books.map((book) => {
  return <Book img={book.img} title={book.title} authur={book.authur} key={book.id }/>;
});

OR
//using spread operator for getting properties

const testingBook = books.map((book) => {
  return <Book {...book} key={book.id} disPlayit={displayValue} />;
});

*/
}

export default Book;
