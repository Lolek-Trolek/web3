import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movies")}>Movies</button>
    </nav>
  );
};


const App = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer/>
     </>
  );
};

export default App;
