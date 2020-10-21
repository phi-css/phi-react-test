import React, { Component } from 'react'

export default class Blockquote extends Component {
    render() {
        return (
            <div className="row">
                <blockquote>
                    <p>This is a blockquote</p>
                </blockquote>
            </div>
        )
    }
}
