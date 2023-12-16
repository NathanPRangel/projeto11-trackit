import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage.jsx";
import Register from "./pages/Register.jsx";
import Habits from "./pages/Habits.jsx";
import Today from "./pages/Today.jsx";
import Historic from "./pages/Historic.jsx";

import { UserDataProvider } from './context/UserDataContext.jsx'
import { ProgressBarProvider } from "./context/ProgressBarContext.jsx";

axios.defaults.headers.common['Authorization'] = 'QHuPiPmVdHshIxfAx1P0c7cn';


function App() {

  return (
    <UserDataProvider>
      <ProgressBarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </BrowserRouter>
      </ProgressBarProvider>
    </UserDataProvider>
  )
}

export default App
