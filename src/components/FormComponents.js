import React, { Component } from 'react'

export default class htmlFormComponents extends Component {
    render() {
        return (
            <div className="row">
                <form>
                    <label htmlFor="nameField">Name</label>
                    <input id="nameField" type="text" placeholder="CJ Patoilo" />
                    <label htmlFor="ageRangeField">Age Range</label>
                    <select id="ageRangeField">
                        <option value="0-13">0-13</option>
                        <option value="14-17">14-17</option>
                        <option value="18-23">18-23</option>
                        <option value="24+">24+</option>
                    </select>
                    <label htmlFor="commentField">Comment</label>
                    <textarea id="commentField" placeholder="Hi CJ …"></textarea>
                    <div className="checkbox-input">
                        <input id="confirmField" type="checkbox" />
                        <label className="label-inline" htmlFor="confirmField">Send a copy to yourself</label>
                    </div>
                    <div className="radio-input">
                    <input id="radio" type="radio" />
                    <label className="label-inline" htmlFor="radio">Radio button</label>
                </div>
                <input className="button" type="submit" value="Send" />
            </form>
            </div>
        )
    }
}
