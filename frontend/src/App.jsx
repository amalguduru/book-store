import Signup from "./components/Signup";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import ContactUs from "./contactUs/contactUs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
