import React, {Component} from "react";
import './style.css';

import TextInputBookDetails from './TextInputBookDetails'


class Popup extends Component {

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <span>{<TextInputBookDetails
                        closePopup={this.props.closePopup}
                        onOkButtonChange={this.props.onOkButtonChange}/>}</span>
                </div>
            </div>
        );
    }
}

export default Popup;
