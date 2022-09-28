import "../assets/styles/index.css";
import "../assets/styles/App.css";
import Card from "./Card";
import Menu from "../components/Menu"

function Ofrenda() {
    
    const ofrendas=[
        {
            imagen: <div className="anemoculus" ><img src="/imgs/Anemoculus_mapa.png" alt="NO FUNCIA LA IMAGEN" /></div>,
            titulo: <h2 id="anemoculus">Anemoculus perdido</h2>,
            descripcion: (<div> <p>
                Una sustancia que ha acumulado una intensa energía Anemo. Ofrécela a la
                Estatua para recuperar la energía perdida a lo largo de los años.
              </p>
              <br />
              <p>A continuación te presentamos la ubicación de todos los anemoculus:</p></div>)
        },
        {
            imagen: <div className="geoculus" ><img src="/imgs/Geoculus_mapa.png" alt="" /></div>,
            titulo: <h2 id="geoculus">Geóculus perdido</h2>,
            descripcion: <div><p>
            Una sustancia que ha acumulado una intensa energía Geo. Ofrécela a la
            Estatua para recuperar la energía perdida a lo largo de los años.
          </p>
          <br />
          <p>A continuación te presentamos la ubicación de todos los Geoculus:</p></div>
        },
        {
            imagen: <div className="electroculus" ><img src="/imgs/Electroculus_mapa.png" alt="" /></div>,
            titulo: <h2 id="electroculus">Electroculus perdido</h2>,
            descripcion: <div><p>
            Una sustancia que ha acumulado una intensa energía Electro. Ofréscela a
            una Estatua para que recupere la energía perdida a lo largo de los años.
          </p>
          <br />
          <p>
            A continuación te presentamos la ubicación de todos los Elctroculus:
          </p></div>
        },
        {
            imagen: <div className="agata"><img src="/imgs/Agata_escarlata_mapa.png" alt="" /></div>,
            titulo: <h2 id="agata">Agata escarlata</h2>,
            descripcion: <div><p>
            Un cristal creado mediante la combinación de una gran fuerza vital y una
            extraña energía de Espinadragón. Es el mejor nutriente para el Árbol
            frioeterno, que tan ferviente desea crecer.
          </p>
          <br />
          <p>A continuación te presentamos la ubicación de todos los anemoculus:</p></div>
        },
        {
            imagen: <div className="dendro" ><img src="/imgs/Dendroculus_mapa.png" alt="" /></div>,
            titulo: <h2 id="dendro">Dendroculus perdido</h2>,
            descripcion: <div><p>
            Una sustancia que ha acumulado una intensa energía Dendro. Ofrécesela a
            una Estatua para que recupere la energía perdida a lo largo de los años.
          </p>
          <br />
          <p>
            A continuación te presentamos la ubicación de todos los anemoculus::
          </p></div>
        }

    ]

    return ( 
        <div className="fondo">
            <Menu />
            <br />
            {ofrendas.map((ofrendas) => {
                return(<Card title={ofrendas.titulo} img={ofrendas.imagen}  desc={ofrendas.descripcion}/>)
            })}
        </div>
     );
}

export default Ofrenda;