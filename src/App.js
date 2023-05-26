import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routers from "./Router";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        <Routes>
          {routers.map((route, indedx) => (
            <Route {...route} key={indedx} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
