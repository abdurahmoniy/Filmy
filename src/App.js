import Layout from "./components/Layout";
import "./App.css";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import Content from "./components/Content";
import { styles } from "./components/style";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className={``}>
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
