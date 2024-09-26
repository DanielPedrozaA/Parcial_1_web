import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './Components/LogIn';
import UserImages from './Components/UserImages';
import UserProfile from "./Components/UserProfile"



const App = () => {
  return (
    <Router>
      <div>
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
