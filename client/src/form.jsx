import React, { Component } from 'react';

class Form  extends Component {
    state = { 
        username:"default",
        password:null
     }
     constructor(){
         super();
         this.saveData.bind(this);
     }
    render() { 
        return  <form > 
        User Name: <input name='username' onChange={this.saveData} type='text' placeholder='Enter your user name here' />
        <p/>
        Password: <input name='password' type='password' placeholder='Enter your password here' />
        <p/>
        <input type='submit' value='Next' />
       <span>{this.saveData()}</span> 
</form> 
    }
    saveData(e){
       this.setState({
           username:e.target.value
       }) 
    }
}
 
export default Form ;