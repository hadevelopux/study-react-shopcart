import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
        color: '#fff',
        textTransform: 'uppercase',
    },
    span: {
        fontWeight: '100',
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                Shop<span style={styles.span}>Cart</span>
            </div>
        )
    }
}

export default Logo;
