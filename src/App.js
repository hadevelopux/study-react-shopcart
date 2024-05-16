import { Component } from "react";

class App extends Component {
    state = {
        productos: [
            { name: 'ELDEN RING', price: 60, img: '/productos/eldenring.jpg' },
            { name: 'Hades II', price: 30, img: '/productos/hades2.jpg' },
            { name: 'HELLDIVERS™ 2', price: 40, img: '/productos/helldivers2.jpg' },
        ]
    }
    render() {
        return (
            <div>
                Hola mundo
            </div>
        )
    }
}

export default App;
