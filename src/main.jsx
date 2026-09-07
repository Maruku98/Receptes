import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

const root = document.getElementById("root");

const reactRoot = createRoot(root);
reactRoot.render(                             
  <>
    <App />
  </>
);