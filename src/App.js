import { Component } from "react";
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';

class App extends Component {
    state = {
        productos: [
            { name: 'ELDEN RING', price: 60, developer: 'FromSoftware Inc', img: '/productos/eldenring.jpg' },
            { name: 'Hades II', price: 30, developer: 'Supergiant Games', img: '/productos/hades2.jpg' },
            { name: 'HELLDIVERS™ 2', price: 40, developer: 'Arrowhead Game Studios', img: '/productos/helldivers2.jpg' },
        ]
    }
    render() {
        return (
            <div>
                <Navbar />
                <Layout>
                    <Title />
                    <Productos
                        agregarAlCarro={this.agregarAlCarro}
                        productos={this.state.productos}
                    />
                </Layout>
            </div>
        )
    }
}

export default App;
