import React from 'react';
import {changeLanguage,login} from '../api/apiCalls'
import {withTranslation} from 'react-i18next';
class LoginPage extends React.Component{
state={
username:null,
password:null
}

onChange=event=>{
const{name,value}=event.target;
this.setState({
[name]:value
})
}
//basic auth decode edilen bir yapısı vardır bu yüzden tercih edilmez
onClickLogin=event=>{
event.preventDefault();//form başka yerlere submit edilmesimesinin önüne geciliyor
const creds={
username:this.state.username,
password:this.state.password
};
login(creds);
}

onChangeLanguage=language=>{
const{i18n}=this.props;
i18n.changeLanguage(language);
changeLanguage(language);
}

render(){return(
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
         <button className="primary"onClick={this.onClickLogin}>
           {this.props.t('Login')}
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
export default withTranslation()(LoginPage);