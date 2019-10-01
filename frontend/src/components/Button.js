import React from "react";

function Button(props){
    return <button
        onClick={props.onClick}
        type="button"
        className={props.className}>{props.children}</button>
}

Button.defaultProps = {
    className: '',
};

export default Button;