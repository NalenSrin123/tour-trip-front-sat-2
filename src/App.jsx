import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddNewTour from "./pages/admin/bookings/AddNewTour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/add-new-tour" element={<AddNewTour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;