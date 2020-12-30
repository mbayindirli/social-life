import React from 'react';
import axios from 'axios';
//class component(StateFull)Durum barındıran
class UserSignUpPage extends React.Component{
state={
username:null,
displayName:null,
password:null,
passwordRepeat:null
}
onChange=event=>{
const{name,value}=event.target
this.setState({
[name]:value
})
}
onClickSignUp=event=>{
event.preventDefault();//Browser form elemanlarını bizim yerimize bir yere göndermesinin önüne geçmek için kullanılır.Bu sayede durdurmuş oluyoruz
const user={
username:this.state.username,
displayName:this.state.displayName,
password:this.state.password
}

axios.post('/api/1.0/users',user);
}

//her class component render fonksionunu illaki owerride etmeli
render(){return(
<div className="container">
<form>
  <h1 align= "center">Sign Up</h1>
  <div className="form-group">
   <label>Username</label>
   <input className="form-control" name="username" onChange={this.onChange} />
  </div>
  <div className="form-group">
     <label>Display Name</label>
     <input className="form-control" name="displayName" onChange={this.onChange}/>
  </div>
   <div className="form-group">
       <label>Password</label>
       <input className="form-control" name="password" type="password" onChange={this.onChange}/>
   </div>
   <div className="form-group">
          <label>Repeat Password</label>
          <input className="form-control" name ="passwordRepeat" type="password" onChange={this.onChange}/>
   </div>
   <div className="text-center">
    <button className="btn btn-info" onClick={this.onClickSignUp}>Sign Up</button>
   </div>
  </form>
    </div>
);}
}
export default UserSignUpPage;