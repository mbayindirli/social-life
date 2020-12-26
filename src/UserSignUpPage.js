import React from 'react';
//class component(StateFull)Durum barındıran
class UserSignUpPage extends React.Component{
state={
username:null,
displayName:null,
password:null,
passwordRepeat:null
}
onChangeUserName=event=>{
this.setState({
username:event.target.value
})
}
onChangePassword=event=>{
this.setState({
password:event.target.value
})
}

onChangePasswordRepeat=event=>{
this.setState({
passwordRepeat:event.target.value
})
}


onChangeDisplayName=event=>{
this.setState({
displayName:event.target.value
})
}
//her class component render fonksionunu illaki owerride etmeli
render(){return(
<form>
  <h1 align= "center">Sign Up</h1>
  <div>
   <label>Username</label>
   <input onChange={this.onChangeUserName} />
  </div>
  <div>
     <label>Display Name</label>
     <input onChange={this.onChangeDisplayName}/>
  </div>
   <div>
       <label>Password</label>
       <input type="password" onChange={this.onChangePassword}/>
   </div>
   <div>
          <label>Repeat Password</label>
          <input type="password" onChange={this.onChangePasswordRepeat}/>
   </div>
   <div>
    <button>Sign Up</button>
   </div>
  </form>
);}
}
export default UserSignUpPage;