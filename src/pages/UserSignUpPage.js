import React from 'react';
import {signup} from '../api/apiCalls'
//class component(StateFull)Durum barındıran
class UserSignUpPage extends React.Component{
state={
userName:null,
displayName:null,
password:null,
passwordRepeat:null,
pandingApiCall:false,
errors:{}
}
onChange=event=>{
const{name,value}=event.target
const errors={...this.state.errors}//errors objesinin kopyesini aldık üç nokta ile
errors[name]=undefined
this.setState({
[name]:value,
errors
})
}
onClickSignUp = async event=>{
event.preventDefault();//Browser form elemanlarını bizim yerimize bir yere göndermesinin önüne geçmek için kullanılır.Bu sayede durdurmuş oluyoruz
const user={
userName:this.state.userName,
displayName:this.state.displayName,
password:this.state.password
};
try{
this.setState({pandingApiCall:true});
const response=await signup(user)
}catch(error){
console.log(error.response.data);
if(error.response.data.validationError){
this.setState({errors:error.response.data.validationError})
}
}
this.setState({pandingApiCall:false});
//
//signup(user).then((response)=>{
//this.setState({pandingApiCall:false});
//}).catch(error=>{//javascript asenkron calışır backendten cevabı beklemeden diğer kod satırını işler bundan dolayı
////istek sonrası işlemin gerçekleşip gerçekleşmediğini farklı şekilde axios sonrası catch ya da then ile yakalarız
//this.setState({pandingApiCall:false});
//});
};


//her class component render fonksionunu illaki owerride etmeli
render(){return(
<div className="container">
<form>
  <h1 align= "center">Sign Up</h1>
  <div className="form-group">
   <label>Username</label>
    <input className={this.state.errors.userName?"form-control is-invalid":"form-control"} name="userName" onChange={this.onChange} />
    <div class="invalid-feedback">
    {this.state.errors.userName}
     </div>
  </div>
  <div className="form-group">
     <label>Display Name</label>
     <input  className={this.state.errors.displayName?"form-control is-invalid":"form-control"} name="displayName" onChange={this.onChange}/>
   <div class="invalid-feedback">
      {this.state.errors.displayName}
       </div>
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
    <button disabled={this.state.pandingApiCall} className="primary" onClick={this.onClickSignUp}>
         {this.state.pandingApiCall?<span className="spinner-border spinner-border-sm"></span>:''}
         Sign Up
    </button>
   </div>
  </form>
    </div>
);}
}
export default UserSignUpPage;