import React from 'react'
import BrokenComponent from '../BrokenComponent/BrokenComponent'
import ErrorPage from  '../ErrorPage/ErrorPage'


class ErrorBoundaryExample extends React.Component {
    render() {
        return (
            <ErrorPage>
              <div className="error-example-page">
                  <h2>This page will brake when I click the button</h2>
                  <BrokenComponent />
              </div>
            </ErrorPage>
        );
    }
}

export default ErrorBoundaryExample
