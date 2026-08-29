import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateCategory from "./pages/admin/categories/CreateCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* redirect the root path to the categories page */}
        <Route path="/" element={<Navigate to="/admin/categories" replace />} />
        <Route path="/admin/categories" element={<CreateCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
