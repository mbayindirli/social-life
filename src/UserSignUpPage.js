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
<form>
  <h1 align= "center">Sign Up</h1>
  <div>
   <label>Username</label>
   <input name="username" onChange={this.onChange} />
  </div>
  <div>
     <label>Display Name</label>
     <input name="displayName" onChange={this.onChange}/>
  </div>
   <div>
       <label>Password</label>
       <input name="password" type="password" onChange={this.onChange}/>
   </div>
   <div>
          <label>Repeat Password</label>
          <input name ="passwordRepeat" type="password" onChange={this.onChange}/>
   </div>
   <div>
    <button onClick={this.onClickSignUp}>Sign Up</button>
   </div>
  </form>
);}
}
export default UserSignUpPage;