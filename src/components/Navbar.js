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
        padding: '20px 50px',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1200px',
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <div style={styles.container}>
                    <Logo />
                    <Carro />
                </div>
            </nav>
        )
    }
}

export default Navbar;
