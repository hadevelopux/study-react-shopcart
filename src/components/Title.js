import { Component } from "react";

const styles = {
    title: {
        color: '#fff',
        fontWeight: '400',
        textTransform: 'uppercase',
        fontSize: '26px',
    }
}

class Title extends Component {
    render() {
        return (
            <h1 style={styles.title}>Destacados y recomendados</h1>
        )
    }
}

export default Title;
