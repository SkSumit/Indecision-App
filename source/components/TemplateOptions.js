
import React from 'react';


  export default class TemplateOptions extends React.Component {
    state = {
     value:undefined
    }
    
     onFormSubmit = () => {
        const user = document.querySelector('select')
        
        this.props.dropdownValue(user.options[user.selectedIndex].value)
      }
   
     render() {
       return (
        <div className='templateOptions'>
        
        <label htmlFor="users"><h4>Too Lazy? Select from curated options below</h4></label>
            <select  onClick={this.onFormSubmit}  className="button" name="users" >
                <option></option>
                <option value="Atharva">Atharva</option>
                <option value="Amitesh">Amitesh</option>
                <option value="Charlotte">Charlotte</option>
                <option value="Sameer">Sameer</option>
                <option value="Siddhi">Siddhi</option>
                <option value="Sumit">Sumit</option>
                <option value="Yash">Yash</option>
                <option value="Ishwar">Ishwar</option>
            </select>
           
      
      </div>
       );
     }
   }

