import React, {Component} from 'react';
require('../../scss/style.scss');

export default class App extends Component {
 constructor(props){
   super(props);
   this.state= {
     stepa:true, stepb:false, stepc: false,
     email:"", password:"", confirmPassword:"",
     name:"", age:"", sex:"",
     tw:"", fb:"", gp:""
   }

   this.step1=this.step1.bind(this);
   this.step2=this.step2.bind(this);
   this.step3=this.step3.bind(this);

   this.email=this.email.bind(this);
   this.password=this.password.bind(this);
   this.confirmPassword=this.confirmPassword.bind(this);

   this.name=this.name.bind(this);
   this.age=this.age.bind(this);
   this.sex=this.sex.bind(this);

   this.fb=this.fb.bind(this);
   this.tw=this.tw.bind(this);
   this.gp=this.gp.bind(this);

   this.restart=this.restart.bind(this);

 }
  restart(){
    this.setState( {
      stepa:true, stepb:false, stepc: false,
      email:"", password:"", confirmPassword:"",
      name:"", age:"", sex:"",
      tw:"", fb:"", gp:""
    });
  }

  step1() {
    this.setState({stepa:true, stepb:false, stepc: false});   
  }
   
  step2() {
    // if((this.state.password)===(this.state.confirmPassword))
      this.setState({stepa:false, stepb:true, stepc: false});
  }
   step3() {
      this.setState({stepb:false, stepa:false, stepc: true});
   }

   email(e) {
     this.setState({email: e.target.value});
   }
   password(e) {
     this.setState({password: e.target.value});
   }
   confirmPassword(e) {
     this.setState({confirmPassword: e.target.value});
   }

   name(e) {
     this.setState({name: e.target.value});
   }
   age(e) {
     this.setState({age: e.target.value});
   }
   sex(e) {
     this.setState({sex: e.target.value});
   }
 
   fb(e) {
     this.setState({fb: e.target.value});
   }
   tw(e) {
     this.setState({tw: e.target.value});
   }
   gp(e) {
     this.setState({gp: e.target.value});
   }
 

 render() {
   var stepA = (
    <div className="progressDiv">
    <ul id="progressbar">
           <li className="active">Account Setup</li>
           <li >Social Profiles</li>
           <li>Personal Details</li>
         </ul>   
       
     <form onSubmit={this.step2}>
       <div className="form">
        <h5>CREATE YOUR ACCOUNT</h5>
         <input id="email" type="email" placeholder="Email" onChange={this.email} value={this.state.email} required/>
         <input type="password" placeholder="Password" onChange={this.password} value={this.state.password} required />
         <input type="Password" placeholder="Confirm Password" onChange={this.confirmPassword} value={this.state.confirmPassword} required/>
         <button className="button" type="submit" >Next</button>
       </div>
     </form>
     </div>  
   );

   var stepB = (
    <div className="progressDiv">
    <ul id="progressbar">
           <li className="active">Account Setup</li>
           <li className="active">Social Profiles</li>
           <li>Personal Details</li>
         </ul>   
     <form onSubmit={this.step3}>
       <div className="form">
        <h5>SOCIAL PROFILES</h5>
        <h6>Your preference on the social network</h6>
         <input type="text" placeholder="Name" onChange={this.name} value={this.state.name} required/>
         <input type="text" placeholder="Age" onChange={this.age} value={this.state.age} required/>
         <input type="text" placeholder="sex" onChange={this.sex} value={this.state.sex} required/>
         <button  className="button" onClick={this.step1}>Back</button>
         <button  className="button" type="submit" >Next</button>
       </div>
     </form>
     </div>
   );

   var stepC = (
    <div className="progressDiv">
    <ul id="progressbar">
           <li className="active">Account Setup</li>
           <li className="active">Social Profiles</li>
           <li className="active">Personal Details</li>
         </ul>   
     <form onSubmit={this.restart}>
       <div className="form">
        <h5>PERSONAL DETAILS</h5>
        <h6>We will never sell it</h6>
         <input type="text" placeholder="fb" onChange={this.fb} value={this.state.fb} required/>
         <input type="text" placeholder="twi" onChange={this.tw} value={this.state.tw} required/>
         <input type="text" placeholder="gplus" onChange={this.gp} value={this.state.gp} required/>
         <button  className="button" onClick={this.step2}>Back</button>
          <button className="button">Submit</button>
       </div>
     </form>
     </div>
   );

   return (
     <div>
       {this.state.stepa ? stepA : ''}
       {this.state.stepb ? stepB : ''}
       {this.state.stepc ? stepC : ''}
     </div>
   );
 }
}
