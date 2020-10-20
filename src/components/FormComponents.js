import React, { Component } from 'react'

export default class FormComponents extends Component {
    render() {
        return (
            <div className="row">
                <form>
                    <label for="nameField">Name</label>
                    <input id="nameField" type="text" placeholder="CJ Patoilo" />
                    <label for="ageRangeField">Age Range</label>
                    <select id="ageRangeField">
                        <option value="0-13">0-13</option>
                        <option value="14-17">14-17</option>
                        <option value="18-23">18-23</option>
                        <option value="24+">24+</option>
                    </select>
                    <label for="commentField">Comment</label>
                    <textarea id="commentField" placeholder="Hi CJ …"></textarea>
                    <div class="checkbox-input">
                        <input id="confirmField" type="checkbox" />
                        <label class="label-inline" for="confirmField">Send a copy to yourself</label>
                    </div>
                    <div class="radio-input">
                    <input id="radio" type="radio" />
                    <label class="label-inline" for="radio">Radio button</label>
                </div>
                <input class="button" type="submit" value="Send" />
            </form>
            </div>
        )
    }
}
