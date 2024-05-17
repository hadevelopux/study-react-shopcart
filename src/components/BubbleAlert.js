import { Component } from "react";

const styles = {
    bubbleAlert: {
        color: '#fff',
        fontSize: '0.9rem',
        marginLeft: '5px',
    }
};

class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) { return '' }
        return n > 9 ? '9+' : n
    }

    render() {
        const { value } = this.props
        return (
            <div style={styles.bubbleAlert}>
                ({this.getNumber(value)})
            </div>
        )
    }
}

export default BubbleAlert;
