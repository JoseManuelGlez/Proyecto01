import "../assets/styles/App.css";

function Menu(){
    return(
<div>
    <br />
    <br />
    <h2>Indíce de las ofrendas</h2>
    <ul><a href="#anemoculus"><u>Anemoculus perdido</u></a></ul>
    <ul><a href="#geoculus"><u>Geóculus perdido</u></a></ul>
    <ul><a href="#electroculus"><u>Electroculus perdido</u></a></ul>
    <ul><a href="#agata"><u>Agata escarlata</u></a></ul>
    <ul><a href="#dendro"><u>Dendroculus perdido</u></a></ul>
</div>
    );
}

export default Menu;

//<p id="asd">Derechos Reservados</p>
//LUGAR EN DONDE NOS LLEVA AL CLICK (EL ID icono ES EL DESTINO QUE APUNTO EL HREF)
//<a href="#asd"> <img className="icono" src={logoApp} alt="" /></a>
//LUGAR PARA DAR CLICK PARA LLEVARNOS A OTRA PARTE DE LA PAGINA (HREF APUNTA AL ID icono)