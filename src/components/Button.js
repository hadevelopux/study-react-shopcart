import { Component } from "react"

const styles = {
    button: {
        color: '#fff',
        textShadow: '1px 1px 0px rgba( 0, 0, 0, 0.3 )',
        backgroundColor: '#6fa720',
        background: 'linear-gradient( to right, #75b022 5%, #588a1b 95%)',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button
