/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let excusaAleatoria = Math.random() * 10;
  document.querySelector(".excusa1").innerHTML = GeneradorExcusa();
  console.log("Hello Rigo from the console!");
};
let GeneradorExcusa = () => {
  let quien = [
    " mi perro",
    "el gato",
    " mi hermana",
    " mi primo",
    " el vecino",
    " un amigo"
  ];
  let accion = [" se comio", "rompio", "perdio", "regalo", "escondio", "mojo"];
  let que = [
    "el celular",
    "la tarea",
    "la laptop",
    "el auto",
    "las llaves",
    "el dinero"
  ];
  let cuando = [
    "antes de salir",
    "cuando estaba durmiendo",
    "cuando me bañaba",
    "antes de clases",
    "cuando hacia ejercicio",
    "cuando estaba comiendo"
  ];

  let quienExcusa = Math.floor(Math.random() * quien.length);
  let accionExcusa = Math.floor(Math.random() * accion.length);
  let queExcusa = Math.floor(Math.random() * que.length);
  let cuandoExcusa = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienExcusa] +
    " " +
    accion[accionExcusa] +
    " " +
    que[queExcusa] +
    " " +
    cuando[cuandoExcusa]
  );
};
