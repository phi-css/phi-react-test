import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="row">
                <button class="button">Button</button>
                <button class="button button-secondary">Button</button>
                <button class="button button-ghost">Button</button>
                <button class="button button-disabled">Button</button>
            </div>
        )
    }
}
