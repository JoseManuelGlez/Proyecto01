import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
********************************************************************
let introduction = ["hello", "i", "am", "sarah"];                  *
let [greeting, pronoun, , noun] = introduction; DESESTRUCTURACION  *
console.log(greeting);                                             *
console.log(pronoun);                                              *
********************************************************************
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};*
let{name, job} = person;                                           *
console.log(name);                                                 *
console.log(country);                                              *
//console.log(job);                                                *
********************************************************************
function ListCard(){                                               *
  const users=[{                                                   *
    id: 0,                                                         *
    name: pedro,                                                   *   
  },                                                               *
{                                                                  *
  id: 1,                                                           *
  name: juan,                                                      *
}                                                                  *
]                                                                  *
}                                                                  *
                                                                   *
return(                                                            *     
  {user map((item)=>{                                              *
    return (<Card name={item.name}\>                               *
      );                                                           * 
    )                                                              * 
  }                                                                * 
)                                                                  * 
********************************************************************
return <Card name={user.name} lastname={user.lasName} />

function nameFunction ({name, lastName}){
  {name} {lasName} DESESTRUCTURACION
}



Que elemento debemos usar para el header
Spread en javascript hacer analisis
Set estructura de datos
buscar el libro
leer que es BEM en css


freepik.es pagina para imagenes sin copyright
*/
