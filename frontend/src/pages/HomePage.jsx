import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Poster from "../components/Poster";

function Home() {
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

export default Home;