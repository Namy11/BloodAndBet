import { Outlet } from "react-router-dom";

import Head from "./components/Head";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main>
        <Head />
      </main>
      <header>
        <Header />
      </header>
      <Outlet />
    </>
  );
}

export default App;
