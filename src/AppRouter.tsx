import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EnglishInSportsAndMovementPage from "./pages/EnglishInSportsAndMovementPage";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/english-in-sports-and-movement"
          element={<EnglishInSportsAndMovementPage />}
        />
      </Routes>
    </HashRouter>
  );
}
