import Layout from "./Layout";
import Ofrenda from "../components/Ofrenda"

function App() {
  return (
    <>
      <Layout>
        <Ofrenda></Ofrenda>
      </Layout>
    </>
  );
}

export default App;

//ESTA CLASE IMPORTA LAYOUT, POR LO TANDO OFRENDAS APARECERA EN EL CHILDREN DEL LAYOUT
