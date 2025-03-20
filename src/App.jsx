import DefaultLayout from './layouts/DefaultLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import CreateFilmPage from './pages/CreateFilmPage';
import GlobalContext from './contexts/globalContext';
import { useState } from 'react';

function App() {

  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            <BrowserRouter>
              <Routes>
                <Route Component={ DefaultLayout }>
                  {/* qui vanno le pagine */}
                  <Route path='/' Component={HomePage}/>
                  <Route path='/movies/:id' Component={MoviePage} />
                  <Route path="/movies/create" Component={CreateFilmPage} />
                </Route>
              </Routes>     
            </BrowserRouter>
        </GlobalContext.Provider>
    </>
  )
}

export default App
