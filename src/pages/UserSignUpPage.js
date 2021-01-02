import React from 'react';
import {signup} from '../api/apiCalls'
import {withTranslation} from 'react-i18next';
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
onChangeLanguage=language=>{
const{i18n}=this.props;
i18n.changeLanguage(language);
}
onChange=event=>{
const{name,value}=event.target
const errors={...this.state.errors}//errors objesinin kopyesini aldık üç nokta ile
const {t}=this.props
errors[name]=undefined;
if(name==='password'||name==='passwordRepeat'){
if(name==='password'&&value!==this.state.passwordRepeat){
errors.passwordRepeat=t('Password Mismatch')
}else if(name==='passwordRepeat'&&value!==this.state.password){
errors.passwordRepeat=t('Password Mismatch')
}else{
errors.passwordRepeat=undefined;
}
}
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
  <h1 align= "center">{this.props.t('Sign Up')}</h1>
  <div className="form-group">
   <label>{this.props.t('Username')}</label>
    <input className={this.state.errors.userName?"form-control is-invalid":"form-control"} name="userName" onChange={this.onChange} />
    <div class="invalid-feedback">
    {this.state.errors.userName}
     </div>
  </div>
  <div className="form-group">
     <label>{this.props.t('Display Name')}</label>
     <input  className={this.state.errors.displayName?"form-control is-invalid":"form-control"} name="displayName" onChange={this.onChange}/>
   <div class="invalid-feedback">
      {this.state.errors.displayName}
       </div>
  </div>
  <div className="form-group">
          <label>{this.props.t('Password')}</label>
          <input  className={this.state.errors.password?"form-control is-invalid":"form-control"} type="password"  name="password" onChange={this.onChange}/>
           <div class="invalid-feedback">
                        {this.state.errors.password}
           </div>
   </div>
   <div className="form-group">
          <label>{this.props.t('Password Repeat')}</label>
          <input  className={this.state.errors.passwordRepeat?"form-control is-invalid":"form-control"} type="password"  name="passwordRepeat" onChange={this.onChange}/>
           <div class="invalid-feedback">
                        {this.state.errors.passwordRepeat}
           </div>
   </div>
   <div className="text-center">
    <button disabled={this.state.pandingApiCall||this.state.errors.passwordRepeat!==undefined} className="primary" onClick={this.onClickSignUp}>
         {this.state.pandingApiCall?<span className="spinner-border spinner-border-sm"></span>:''}
         {this.props.t('Sign Up')}
    </button>
   </div>
   <div>
   <img src="https://www.countryflags.io/tr/flat/64.png"alt="Turkish Flag"onClick={()=>this.onChangeLanguage('tr')}></img>
    <img src="https://www.countryflags.io/US/flat/64.png"alt="US Flag"onClick={()=>this.onChangeLanguage('en')}></img>
   </div>
  </form>
    </div>
);}
}
export default withTranslation()(UserSignUpPage);