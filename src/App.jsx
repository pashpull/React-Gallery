import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Contacts from './screens/Contacts/Contacts';
import About from './screens/About/About';
import useFetch from './hooks/useFetch';
import ImagesContext from './context/context';

function App() {
  const {
    photos,
    isLoading,
    searchValue,
    setSearchValue,
    page,
    setPage,
    totalPages,
  } = useFetch();

  const value = {
    photos,
    isLoading,
    searchValue,
    setSearchValue,
    page,
    setPage,
    totalPages,
  };

  return (
    <ImagesContext.Provider value={value}>
      <HashRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<h1>Page is not found</h1>} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </ImagesContext.Provider>
  );
}

export default App;
