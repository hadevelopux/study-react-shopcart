import { Component } from "react";
import Button from './Button';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    }
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)

        return (
            <div>
                <Button onClick={mostrarCarro}>
                    <div style={styles.button}>
                        Carro
                        <span>
                            {cantidad !== 0
                                ? <BubbleAlert value={cantidad} />
                                : null}
                        </span>
                    </div>
                </Button>
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
            </div>
        )
    }
}

export default Carro;
