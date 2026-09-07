import { createRoot } from "react-dom/client";      // Vull utilizar una funció que es diu createRoot del package react-dom

const root = document.getElementById("root");       // Pillem el div amb id "root", l'entry point de react

const reactRoot = createRoot(root);                 // Diem a react on volem establir l'arrel de React amb createRoot()
reactRoot.render(                                   // Renderitzem el contingut amb el mètode .render()
  <>
    <h1>Hola desde React</h1>
    <h2>Subtítulo</h2>
    <ul className="list">
      <li>Hola</li>
      <li>Hola</li>
      <li>Hola</li>
      <li>Hola</li>
      <li>Hola</li>
    </ul>
  </>
);