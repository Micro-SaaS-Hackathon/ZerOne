import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import SubPage from "./pages/SubPage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/subpage" element={<SubPage />} />
          {/* Redirect root path to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          {/* Catch all other routes and redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
