import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import BookType from './models/bookType';
import WatchlistPage from './pages/WatchlistPage';

function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [watchlist, setWatchlist] = useState<BookType[]>([]);

  useEffect(() => {
    axios.get('https://santosnr6.github.io/Data/childrens_books.json')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  const toggleBookInWatchlist = (id : number) => {
    if(watchlist.some(book => book.id === id)) {
      console.log("Ta bort från watchlist");
      const filteredWatchlist = watchlist.filter(book => book.id !== id);
      setWatchlist(filteredWatchlist);
    } else {
      console.log("Lägg till i watchlist");
      setWatchlist(watchlist => {
        const foundBook = books.find(book => book.id === id);
        return foundBook ? [...watchlist, foundBook] : watchlist;
      });
    }
  }

  return (
   <div className="app">
    <Routes>
      <Route path="/" element={ <HomePage books={ books } /> } />
      <Route path="/book/:id" element={ <BookPage 
                                          books={ books } 
                                          watchlist={ watchlist }
                                          toggleBookInWatchlist={ toggleBookInWatchlist }
                                        /> } />
      <Route path="/watchlist" element={ <WatchlistPage watchlist={ watchlist } />} />
    </Routes>
   </div>
  )
}

export default App
