
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, Product, Purchases } from './pages';
import { Footer, NavBar, LoadingScreen } from './components';
import { useSelector } from 'react-redux';
import ProtectedRoutes from 'components/ProtectedRoutes';

function App() {

  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <HashRouter>

      { isLoading && <LoadingScreen /> }

      <NavBar />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>

        </Routes>
        
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
