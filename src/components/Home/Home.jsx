import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3>Home</h3>
      </div>
    </>
  )
}

export default Home;