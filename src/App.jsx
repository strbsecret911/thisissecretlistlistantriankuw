import PublicList from "./pages/PublicList.jsx";
import Admin from "./pages/Admin.jsx";

export default function App() {
  const hash = window.location.hash || "#/";
  const isAdmin = hash.startsWith("#/admin");
  return isAdmin ? <Admin /> : <PublicList />;
}
