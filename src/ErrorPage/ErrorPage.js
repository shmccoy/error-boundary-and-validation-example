import React from 'react'

class ErrorPage extends React.Component {
    state = {error: null};

    // Static method
    static getDerivedStateFromError(error) {
        // Called when an error is thrown in a child component
        console.error(error);
        // Store the error in the state
        return {error: true};
    }

    render() {
        if (this.state.error) {
            return <h1>Oh no! The page is broken!!!</h1>
        }
        return this.props.children
    }
}

export default ErrorPage
