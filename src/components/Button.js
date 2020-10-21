import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="row">
                <button className="button">Button</button>
                <button className="button button-secondary">Button</button>
                <button className="button button-ghost">Button</button>
                <button className="button button-disabled">Button</button>
            </div>
        )
    }
}
