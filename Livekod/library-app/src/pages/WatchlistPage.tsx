import './styles/watchlistPage.css';
import BookType from '../models/bookType';
import Book from '../components/Book';

type Props = {
    watchlist : BookType[]
}

function WatchlistPage({ watchlist } : Props) {
  return (
    <section className="watchlist-page">
        <section className="watchlist-wrapper">
            {
                watchlist.map(book => {
                    return <Book book={ book } />
                })
            }
        </section>
    </section>
  )
}

export default WatchlistPage
