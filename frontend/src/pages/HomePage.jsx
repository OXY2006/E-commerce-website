import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Poster from "../components/Poster";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Poster />
        </div>
      </div>
    </>
  );
}

export default HomePage;