import React from 'react';
import {changeLanguage,login} from '../api/apiCalls'
import {withTranslation} from 'react-i18next';
import {axios} from 'axios'
class LoginPage extends React.Component{
state={
username:null,
password:null,
error:null,
pandingApiCall:false
}

onChange=event=>{
const{name,value}=event.target;
this.setState({
[name]:value,
error:null
})
}
//basic auth decode edilen bir yapısı vardır bu yüzden tercih edilmez
onClickLogin = async event=>{
event.preventDefault();//form başka yerlere submit edilmesimesinin önüne geciliyor
const creds={
username:this.state.username,
password:this.state.password
};
const {push}=this.props.history;
try{
this.setState({pandingApiCall:true})
await login(creds);
push("/");
}catch(error){
this.setState({
error:error.response.data.message
});
}
this.setState({pandingApiCall:false});
}

onChangeLanguage=language=>{
const{i18n}=this.props;
i18n.changeLanguage(language);
changeLanguage(language);
}
//componentDidMount(){
//axios.interceptors.request.use((request) => {
//    if (request) {
//        //perform the manipulation here and change the response object
//    }
//    return request;
//}, (error) => {
//    return Promise.reject(error.message);
//});
//
//}

render(){
const enableLoginButton=this.state.password&&this.state.username
return(
<div className="container">
<form>
 <h1 align= "center">{this.props.t('Login')}</h1>
  <div className="form-group">
   <label>{this.props.t('Username')}</label>
    <input className="form-control" name="username" onChange={this.onChange}/>

  </div>

   <div className="form-group">
            <label>{this.props.t('Password')}</label>
            <input  className="form-control" type="password"  name="password" onChange={this.onChange} />

     </div>

      <div className="text-center">
         <button  className="primary"onClick={this.onClickLogin}
         disabled={!enableLoginButton ||this.state.pandingApiCall}>
         {this.state.pandingApiCall?<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:''}
        {this.props.t('Login')}
         </button>
        </div>
        {this.state.error&&<div class="alert alert-danger" role="alert">
         {this.state.error}
        </div>}
        <div>
        <img src="https://www.countryflags.io/tr/flat/64.png"alt="Turkish Flag"onClick={()=>this.onChangeLanguage('tr')}></img>
         <img src="https://www.countryflags.io/US/flat/64.png"alt="US Flag"onClick={()=>this.onChangeLanguage('en')}></img>
        </div>
        </form>
        </div>

);}

}
export default withTranslation()(LoginPage);