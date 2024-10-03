import React from "react";
// import PropTypes from "prop-types";

function Button({ text, color }) {
    return (
        <button className={`px-2 py-2 ${color} text-sm text-zinc-100 rounded m-2`}>
            {text}
        </button>
    );
}

// Button.propTypes = {
//     text: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
// };

export default Button;
