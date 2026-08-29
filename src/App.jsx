import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ConfirmOTP from "./pages/public/ConfirmOTP";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/confirm-otp" element={<ConfirmOTP />} />
      </Routes>
    </Router>

  );
}

export default App;