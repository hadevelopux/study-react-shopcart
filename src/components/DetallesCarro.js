import { Component } from "react";

const styles = {
    detallesCarro: {
        backgroundColor: '#67c1f5',
        position: 'absolute',
        marginTop: '23px',
        boxShadow: '0 10px 30px rgb(0,0,0,0.8)',
        borderRadium: '30px',
        width: '300px',
        right: 0,
    },
    ul: {
        margin: '0',
        padding: '0',
        background: 'linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)',
    },
    productos: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        borderBottom: '1px solid #171d25',
        color: '#fff',
        textShadow: '1px 1px 0px rgba( 0, 0, 0, 0.3 )',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        marginRight: '10px',
    },
}

class DetallesCarro extends Component {
    render() {
        const { carro } = this.props

        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x =>
                        <li style={styles.productos} key={x.name}>
                            <span style={styles.title}>
                                <img style={styles.img} alt={x.name} src={x.img} width='50' height='32' />
                                <spa>
                                    {x.name}
                                </spa>
                            </span>
                            <span>
                                ({x.cantidad})
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro;
