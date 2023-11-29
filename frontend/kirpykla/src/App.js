import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientsList from "./components/ClientsList/ClientsList";
import EditClient from "./components/EditClient/EditClient";
import NewClient from "./components/NewClient/NewClient";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<ClientsList />} />
        <Route path="/edit/:id" element={<EditClient />} />
        <Route path="/delete/:id" />
        <Route pathe="/" element={<NewClient />} />
      </Routes>
    </div>
  );
}

export default App;
