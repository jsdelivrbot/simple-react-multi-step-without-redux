import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
require('../../scss/style.scss');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={values:[{key:"",index:0},{key:"",index:1},{key:"",index:2}]};
  }
   
  renderInputs(){
    console.log(this.props)
 
    return _.map(this.props.placeholders,placeholder =>{
      let type="";
      let validate=""

      if(this.props.shouldUsePassword)
       (placeholder.index===0? type="email":type="password")
      else
        type="text";
       
      return(
      <div className='form-group' key={placeholder.index} > 
      <input  className='form-control' required key={placeholder.index} placeholder={placeholder.key} 
      value={this.props.values[placeholder.index].key} 
      type={type}
      onChange={event=>{
          switch(placeholder.index)
          {
          case 0:
          this.onInputChange(0,event.target.value);
          break;
          case 1:
           this.onInputChange(1,event.target.value);
           break;
          case 2:
            this.onInputChange(2,event.target.value);
            break;
          }
      }} /> 
      </div>
      )
    });
  } 


  onInputChange(i,value){
    const values=[];   
      _.map(this.props.values,value => {
        values.push(value);
  })

     console.log(values)
     values[i].key=value;
    console.log("reachded")
     this.props.setStateForThisComp(values);

   
  }

  render(){
    return(
    <div>
      {this.renderInputs()}
    </div>
    
  )
}
}
