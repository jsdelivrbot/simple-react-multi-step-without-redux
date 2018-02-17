import React, {Component} from 'react';

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

  }
    step1() {
      this.setState({stepa:true, stepb:false, stepc: false});
      console.log(document.getElementById('email'))
      document.getElementById('email').value = this.state.email;
    }
    
    step2() {
      if(!(this.state.email=="") && !(this.state.password=="") && !(this.state.confirmPassword=="")) {
        this.setState({stepa:false, stepb:true, stepc: false});
      }
      else
        console.log(!(this.state.email==" ") && !(this.state.password=="") && !(this.state.confirmPassword==""))
    }
    step3() {
      if(!(this.state.age=="") && !(this.state.name=="") && !(this.state.sex==""))
        this.setState({stepb:false, stepa:false, stepc: true});
      else
        console.log('hi')
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
    componentDidMount() {
    }

  render() {
    var stepA = (
      <form>
        <div>
          <input id="email" type="email" placeholder="Email" onChange={this.email} required/>
          <input type="password" placeholder="Password" onChange={this.password} required />
          <input type="Password" placeholder="Confirm Password" onChange={this.confirmPassword} required/>
          <button type="submit" onClick={this.step2}>Next</button>
        </div>
      </form>
    );

    var hi = '<p> Hi</p>'

    var stepB = (
      <form>
        <div>
          <input type="text" placeholder="Name" onChange={this.name} required/>
          <input type="text" placeholder="Age" onChange={this.age} required/>
          <input type="text" placeholder="sex" onChange={this.sex} required/>
          <button type="submit" onClick={this.step1}>Back</button>
          <button type="submit" onClick={this.step3}>Next</button>
        </div>
      </form>
    );

    var stepC = (
      <form>
        <div>
          <input type="text" placeholder="fb" required/>
          <input type="text" placeholder="twi" required/>
          <input type="text" placeholder="gplus" required/>
          <button type="submit" onClick={this.step2}>Back</button>
          <button>Submit</button>
        </div>
      </form>
    );
    
    // if(this.state.stepa) {
    //   return stepA
    // } else if(this.state.stepb) {
    //   return stepB
    // } else {
    //   return stepC
    // }

    return (
      <div>
        {this.state.stepa ? stepA : ''}
        {this.state.stepb ? stepB : ''}
        {this.state.stepc ? stepC : ''}
      </div>
    );
  }
}
