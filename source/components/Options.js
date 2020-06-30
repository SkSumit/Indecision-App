import React from 'react';
import Option from './Option'


const Options = (props) =>{
    const option = props.options;
    return (
            <div>
              <div className="widget-header ">
                <h3>Your options!</h3>
                <button className='button button--link' disabled = { option.length ==0 } onClick={props.removeAll}> Remove All Options</button>
              </div>
               {option.length ==0 && <p className='widget-text'>Enter options to get started!</p>}
                
                {option.map((option,index) => {
                  return <Option count={index+1} key={option} optionText={option} removeOne={props.removeOne} />;
                })}
            </div>
          );
  }
  
  export default Options