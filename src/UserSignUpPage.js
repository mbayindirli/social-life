import React from 'react';
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
    <button>Sign Up</button>
   </div>
  </form>
);}
}
export default UserSignUpPage;