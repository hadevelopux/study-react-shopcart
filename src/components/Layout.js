import { Component } from "react"

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        width: '1200px',
    },
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout
