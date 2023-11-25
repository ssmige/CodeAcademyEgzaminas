import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientsList from "./components/ClientsList/ClientsList";
import EditClient from "./components/EditClient/EditClient";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClientsList />} />
        <Route path="/edit/:id" element={<EditClient />} />
        <Route path="/delete/:id" />
        <Route pathe="create" />
      </Routes>
    </div>
  );
}

export default App;
