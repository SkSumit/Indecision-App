
import React from 'react';

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'
import TemplateOptions from './TemplateOptions'
import curatedOptions from './CuratedOption'
import Footer from './Footer'




export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption :undefined
  };
 
    componentDidMount = () => {
  
      try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if(options){
         this.setState(()=>({options}))
        }
        
      } catch (error) {
        
      }
    
     
    }
  
    componentDidUpdate = (prevProps,prevState) => {
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
      }
    };
  
  
    addOption = (option) =>{
      if(!option){
        return 'Invalid Input!'
      }else if(this.state.options.indexOf(option) > -1){
        return 'This option already exsists!'
      }
      this.setState( (prevState)=>({options : prevState.options.concat(option)}))
    }
    handlePick =()=> {
        const number = Math.floor(Math.random() * this.state.options.length)
        const suggestion = this.state.options[number]
       
        this.setState( ()=>({selectedOption:suggestion}))
    }
  
    removeAll =() =>{
      this.setState( ()=>({ options : []}))
    }

    closeModal =() =>{
      this.setState( ()=>({selectedOption:false}))
    }
  
    removeOne = (option) =>{
      this.setState((prevState)=>{
        return {
          options:prevState.options.filter((element)=>{
            return element !== option
  
          })
        }
      })
    }
    
    dropdownValue = (value) =>{
      if(value){
       
        this.removeAll()
        const curatedOptionList = curatedOptions(value)
        
        curatedOptionList.forEach(element => {
          this.setState( (prevState)=>({options : prevState.options.concat(element)}))
        });
        
      }
    }
    render() {
      return (
        <div>
          <Header />
            <div className='container-main'>
              <Action hasOption ={ this.state.options.length > 0} handlePick = {this.handlePick}/>
              <TemplateOptions dropdownValue = {this.dropdownValue}/>
              <OptionModal  closeModal={this.closeModal} selectedOption={this.state.selectedOption} />
              <div className='widget'>
                <Options options={this.state.options} removeAll = {this.removeAll} removeOne={this.removeOne}/>
                <AddOption addOption = {this.addOption} />
              </div>
              
             
            </div>
            <Footer/>
          
          
        </div>
      )
    }
  }
  