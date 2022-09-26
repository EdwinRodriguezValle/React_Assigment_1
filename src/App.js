import React from "react";
import "./App.css";
//Componentes:
import Button from "./components/Button";
import Productos from "./components/Products";
import Tile from "./components/Tile";
//Imágenes
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png"
import out_story from "./assets/our_story.png";


function App() {
    return (
        <>
            <h1> BOLSAS Y ACCESORIO PARA MUJERES </h1>

            <nav>
                <Button isDisabled={false} clickHandler={() => console.log("Nuestra Colección.")}>
                    Nuestra Colección
                </Button>
                <Button isDisabled={false} clickHandler={() => console.log("Ordena tu pedido.")}>
                    Ordena tu pedido
                </Button>
                <Button isDisabled={true} clickHandler={() => console.log("Nueva colección")}>
                    Nueva colección
                </Button>
            </nav>

            <main>
                <Productos
                    label="Bolsa de cuero genuino"
                    img={bag_1}
                    title="Bolsa deportivo elegante"
                    price={40}
                > </Productos>

                <Productos
                    label="Bolsa marron casual"
                    img={bag_2}
                    title="Bolsa deportiva"
                    price={85}
                ></Productos>
                <Productos
                    label="Bolsa verde militar elegante"
                    img={bag_3}
                    title="Bolsa elegante de color militar"
                    price={451}
                ></Productos>
                <Productos
                    label="Cartera profesional"
                    img={bag_4}
                    title="Carterirta"
                    price={200}
                ></Productos>

            </main>

            <footer>
                <Tile title="Nuestra Marca">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at atque dignissimos
                        dolores ducimus et illo impedit ipsa ipsum molestias mollitia natus odio quisquam quo quos
                        ratione, reiciendis vitae?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae dolor perferendis.
                        Ab blanditiis id iste, iure laudantium magni odio. Accusamus blanditiis hic ipsam iusto laborum.
                        Cum repudiandae voluptate voluptatibus!</p>
                </Tile>

                <Tile img={brand} mgDescription={"Marca de la empresa"}/>

                <Tile img={out_story} imgDescription={"Esta es nuestra historia"}/>
                <Tile>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eum perspiciatis quibusdam
                        saepe similique sunt suscipit voluptatibus. Asperiores, perspiciatis quaerat!</p>
                </Tile>


            </footer>

        </>
    );
}

export default App;
