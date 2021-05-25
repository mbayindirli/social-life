import React from 'react';
import {signup,changeLanguage} from '../api/apiCalls'
import logo from '../assets/hoaxify.png';
import {withTranslation} from 'react-i18next';
import { Link,HashRouter as Router,Route, Switch, Redirect } from "react-router-dom";
//class component(StateFull)Durum barındıran
class TopBar extends React.Component{
onChangeLanguage=language=>{
const{i18n}=this.props;
i18n.changeLanguage(language);
changeLanguage(language);
}
render(){
const {t}=this.props;
return(

<div className="shadow-sm mb-2">

  <nav className="navbar navbar-light bg-light container navbar-expand">
   <Link className="navbar-brand"  to="/login">
    <img src={logo} width="60" alt="Hoaxify Logo Tasarım"/>
   Hoaxify</Link>
   <ul className="navbar-nav ml-auto">
   <li> <Link className="nav-link" to="/login">
           {t('Login')}
      </Link>
   </li>
    <li>
    <Link className="nav-link" to="/signup">
               {t('Sign Up')}
          </Link>

      </li>
   </ul>
  </nav>
    </div>
);}
}
export default withTranslation()(TopBar);