import React, { Component } from 'react'

export default class Typography extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                </div>
                <div class="row">
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                    <ol>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ol>
                    <dl>
                        <dt>Description list item</dt>
                        <dd>Description list item</dd>
                    </dl>
                </div>
                <div className="row">
                    <p>
                        Tempor non quis cupidatat laboris deserunt nisi cillum sit eu non dolore pariatur nisi. Dolor officia aute sunt eu aliquip consequat nulla voluptate consectetur reprehenderit. Officia sint nostrud anim et deserunt sint do officia eiusmod. Deserunt enim sit incididunt magna adipisicing nisi. Ea qui cillum ullamco ullamco esse voluptate ipsum aute nulla sunt. Id voluptate laboris ea nisi consectetur.
                    </p>
                    <p>

                        Amet nisi id nisi esse et. Voluptate ea non laboris sit nulla adipisicing esse id incididunt dolore excepteur duis. Magna eu consectetur sunt est.
                    </p>
                    <p>
                        Fugiat ex minim occaecat minim do aute occaecat exercitation aliqua nisi. Deserunt pariatur velit commodo commodo ut est ea exercitation nulla quis qui magna exercitation. Dolor eiusmod enim aliqua tempor amet quis eu do elit sint aliqua magna ipsum. Minim amet dolor officia aliqua mollit qui aliquip dolore. Eiusmod labore proident dolor eiusmod. Nisi deserunt qui do cupidatat aliquip esse anim. Ea aute enim in est exercitation qui pariatur reprehenderit commodo cillum aliquip velit.
                    </p>
                </div>
                <div class="row">
                    <p>
                        Below text is written using kbd tag
                        <kbd>ctl + v</kbd><br />This is code word written in code tag<code>code</code>
                        <samp>Loading...</samp>
                    </p>
                </div>
            </div>
        )
    }
}
