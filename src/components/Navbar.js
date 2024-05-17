import { Component } from "react";
import Logo from './Logo';
import Carro from './Carro';

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#171d25',
        position: 'relative',
        padding: '20px',
    },
    container: {
        width: '1200px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    }
};

class Navbar extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        
        return (
            <nav style={styles.navbar}>
                <div style={styles.container}>
                    <Logo />
                    <Carro
                        carro={carro}
                        esCarroVisible={esCarroVisible}
                        mostrarCarro={mostrarCarro}
                    />
                </div>
            </nav>
        )
    }
}

export default Navbar;
