import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppLevelStateForA} from '../actions/index';
import App from './app';

export  class StepA extends Component{
     constructor(props)
     {
       super(props);
     this.navToB=this.navToB.bind(this);
     }
    navToB()
    {
  
      this.props.history.push("/stepb");
    }
    render(){

        return(
         
          <div className="progressDiv">
          <ul id="progressbar">
                 <li className="active">Account Setup</li>
                 <li >Social Profiles</li>
                 <li>Personal Details</li>
               </ul>   
          
          <form data-toggle="validator" role="form" onSubmit={this.navToB}>
         
           
          <div className="form">
            <div className='form-group'>
          <h5>CREATE YOUR ACCOUNT</h5>
          </div>
            {/* <h5>CREATE YOUR ACCOUNT</h5> */}
            <App placeholders={[{index:0,key:"Email"},{key:"Password",index:1},{key:"Confirm Password",index:2}]}
                values={this.props.stepAData}
                setStateForThisComp={this.props.setAppLevelStateForA}
                shouldUsePassword={true}
            />
         
              <button className="button" type="submit">Next</button>
            </div>
          </form>
          </div>
        ) 

    }
}

function mapStateToProps(state){
  return {
       stepAData:state.stepAData
  }
}
export default  connect(mapStateToProps,{setAppLevelStateForA})(StepA);


