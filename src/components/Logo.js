import { Component } from "react"

const styles = {
    logo: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: '700',
        fontSize: '2rem',
        color: '#fff',
        textTransform: 'uppercase',
    },
    span: {
        fontWeight: '100',
    },
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                {`Shop`}
                <div style={styles.span}>Cart</div>
            </div>
        )
    }
}

export default Logo
