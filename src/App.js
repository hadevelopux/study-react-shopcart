import { Component } from "react";
import Productos from './components/Productos';

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
                <Productos
                    agregarAlCarro={() => console.log('No hace nada')}
                    productos={this.state.productos}
                />
            </div>
        )
    }
}

export default App;
