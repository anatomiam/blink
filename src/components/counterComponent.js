import React from 'react'

// const styles = {

// }

export default class Counter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.seconds}
                </div>
            </React.Fragment>
        )
    }
}