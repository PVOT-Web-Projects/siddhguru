import { Route, Routes } from "react-router-dom";
import "./global.scss";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/siddhguru" element={<Home />} />
        <Route />
      </Routes>
    </Layout>
  );
}

export default App;
