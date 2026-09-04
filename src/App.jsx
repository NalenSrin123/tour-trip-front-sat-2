import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListCategory from "./pages/admin/categories/ListCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list-category" element={<ListCategory />} />
      </Routes>
    </Router>
  );
}

export default App;