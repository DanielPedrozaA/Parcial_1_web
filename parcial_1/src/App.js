import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './Components/LogIn';
import UserImages from './Components/UserImages';
import UserProfile from "./Components/UserProfile";
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-primary mx-2" onClick={() => changeLanguage('en')}>
            English
          </button>
          <button className="btn btn-outline-primary mx-2" onClick={() => changeLanguage('es')}>
            Español
          </button>
        </div>

        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/home" element={
            <>
              <header className="bg-light py-3">
                <UserImages />
              </header>
              <main>
                <UserProfile />
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
