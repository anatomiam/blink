import React from 'react'

export default class Circles extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.circles}
                </div>
            </React.Fragment>
        )
    }
}