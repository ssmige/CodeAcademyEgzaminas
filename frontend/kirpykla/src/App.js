import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientsList from "./components/ClientsList/ClientsList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClientsList />} />
        <Route path="/edit/:id" />
        <Route path="/delete/:id" />
        <Route pathe="create" />
      </Routes>
    </div>
  );
}

export default App;
