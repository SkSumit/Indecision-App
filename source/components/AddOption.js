
import React from 'react';

export default class AddOption extends React.Component {
   state = {
    error:undefined
   }
   
    onFormSubmit = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.addOption(option)
      if(!error){
        e.target.elements.option.value=' '
      }
      this.setState(()=>({error}))
  
    }
  
    render() {
      return (
        <div>
          <h3 className='errormsg'>{this.state.error} </h3>
          <form className='add-option' onSubmit={this.onFormSubmit}>
           <input type="text" name="option"></input>
           <button className='button'>Add Option</button>
          </form>
        </div>
      );
    }
  }