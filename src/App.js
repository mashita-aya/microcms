import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/hell" replace />} />
        <Route path="/hell" element={<NewsList />} />
        <Route path="/hell/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
