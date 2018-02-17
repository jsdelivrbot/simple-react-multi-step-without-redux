import React, {Component} from 'react';
require('../../scss/style.scss');

export default class App extends Component {
 constructor(props){
   super(props);
   this.state= {
     account:true, social:false, personal: false,
     email:"", password:"", confirmPassword:"",
     twitter:"", facebook:"", google:"",
     firstName:"", lastName:"", address:""
   }

   this.step1=this.step1.bind(this);
   this.step2=this.step2.bind(this);
   this.step3=this.step3.bind(this);

   this.email=this.email.bind(this);
   this.password=this.password.bind(this);
   this.confirmPassword=this.confirmPassword.bind(this);

   this.twitter=this.twitter.bind(this);
   this.facebook=this.facebook.bind(this);
   this.google=this.google.bind(this);

   this.firstName=this.firstName.bind(this);
   this.lastName=this.lastName.bind(this);
   this.address=this.address.bind(this);

   this.restart=this.restart.bind(this);

 }
  restart(){
    this.setState( {
      account:true, social:false, personal: false,
      email:"", password:"", confirmPassword:"",
      twitter:"", facebook:"", google:"",
      lastName:"", firstName:"", address:""
    });
  }

  step1() {
    this.setState({account:true, social:false, personal: false});   
  }
   
  step2() {
    // if((this.state.password)===(this.state.confirmPassword))
      this.setState({account:false, social:true, personal: false});
  }
   step3() {
      this.setState({social:false, account:false, personal: true});
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

   twitter(e) {
     this.setState({twitter: e.target.value});
   }
   facebook(e) {
     this.setState({facebook: e.target.value});
   }
   google(e) {
     this.setState({google: e.target.value});
   }
 
   firstName(e) {
     this.setState({firstName: e.target.value});
   }
   lastName(e) {
     this.setState({lastName: e.target.value});
   }
   address(e) {
     this.setState({address: e.target.value});
   }
 

 render() {
   var accountSetup = (
    <div className="progressDiv">
    <ul id="progressbar">
           <li className="active">Account Setup</li>
           <li >Social Profiles</li>
           <li>Personal Details</li>
         </ul>   
       
     <form onSubmit={this.step2}>
       <div className="form">
        <h5>CREATE YOUR ACCOUNT</h5>
        <h6>This is step 1</h6>
         <input id="email" type="email" placeholder="Email" onChange={this.email} value={this.state.email} required/>
         <input type="password" placeholder="Password" onChange={this.password} value={this.state.password} required />
         <input type="Password" placeholder="Confirm Password" onChange={this.confirmPassword} value={this.state.confirmPassword} required/>
         <button className="button" type="submit" >Next</button>
       </div>
     </form>
     </div>  
   );

   var socialProfiles = (
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
         <input type="text" placeholder="Twitter" onChange={this.twitter} value={this.state.twitter} required/>
         <input type="text" placeholder="Facebook" onChange={this.facebook} value={this.state.facebook} required/>
         <input type="text" placeholder="Google Plus" onChange={this.google} value={this.state.google} required/>
         <button  className="button" onClick={this.step1}>Back</button>
         <button  className="button" type="submit" >Next</button>
       </div>
     </form>
     </div>
   );

   var personalDetails = (
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
         <input type="text" placeholder="First Name" onChange={this.firstName} value={this.state.firstName} required/>
         <input type="text" placeholder="Last Name" onChange={this.lastName} value={this.state.lastName} required/>
         <input type="text" placeholder="Address" onChange={this.address} value={this.state.address} required/>
         <button  className="button" onClick={this.step2}>Back</button>
          <button className="button">Submit</button>
       </div>
     </form>
     </div>
   );

   return (
     <div>
       {this.state.account ? accountSetup : ''}
       {this.state.social ? socialProfiles : ''}
       {this.state.personal ? personalDetails : ''}
     </div>
   );
 }
}
