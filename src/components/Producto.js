import { Component } from "react"
import Button from './Button'

const styles = {
    producto: {
        color: '#fff',
        background: 'linear-gradient(to right,  rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.5) 100%)',
        width: '30%',
        padding: '15px',
        borderRadius: '5px',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img: {
        width: '100%',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
    },
    price: {
        color: '#BEEE11',
        padding: '6px 8px',
        marginLeft: '15px',
        background: 'rgba(103, 193, 245, 0.1)',
        borderRadius: '5px',
    },
    developer: {
        color: '#67c1f5',
        marginTop: '0',
    },
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props

        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <div style={styles.container}>
                    <div style={styles.title}>
                        <h3>{producto.name}</h3>
                        <p style={styles.price}>${producto.price}</p>
                    </div>
                    <Button onClick={() => agregarAlCarro(producto)}>
                        Agregar al carro
                    </Button>
                </div>
                <p style={styles.developer}>{producto.developer}</p>
            </div>
        )
    }
}

export default Producto
