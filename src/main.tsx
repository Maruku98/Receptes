import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";

const root = document.getElementById("root");

if (root === null) throw new Error("No s'ha trobat l'element #root");

const reactRoot = createRoot(root);
reactRoot.render(                             
  <>
    <App />
  </>
);