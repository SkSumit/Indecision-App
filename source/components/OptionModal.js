import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>{
    return (
        <div className="modal">
            {props.selectedOption && <h1>Selected for you <h3>{props.selectedOption}</h3></h1>}
        </div>
    )
}

export default OptionModal