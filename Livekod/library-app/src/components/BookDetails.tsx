import './styles/bookDetails.css';
import BookType from '../models/bookType';

type Props = {
    book : BookType,
    watchlist : BookType[],
    toggleBookInWatchlist : (id : number) => void
}

function BookDetails({ book, watchlist, toggleBookInWatchlist } : Props) {

    const isInWatchlist = (id : number) => {
        return watchlist.some(book => book.id === id)
    }

  return (
    <article className="book-details">
        <div className="book-details-header">
            <h1 className="book-details-title">{ book.title }</h1>
            <h4 className="book-details-author">{ book.author }</h4>
        </div>
        <p className="book-details-plot">
            { book.plot }
        </p>
        <div className="book-details-group">
            <p className="book-details-info"><strong>Audience: </strong>{ book.audience }</p>
            <p className="book-details-info"><strong>First Published: </strong>{ book.year }</p>
            <p className="book-details-info"><strong>Pages: </strong>{ book.pages }</p>
            <p className="book-details-info"><strong>Publisher: </strong>{ book.publisher }</p>
        </div>
        <button onClick={ () => toggleBookInWatchlist(book.id) } className="book-details-btn">
            { isInWatchlist(book.id) ? "I have read it!" : "Oh, I want to read it!" }
        </button>
    </article>
  )
}

export default BookDetails
