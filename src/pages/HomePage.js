import React from 'react';
import {signup,changeLanguage} from '../api/apiCalls'
import {withTranslation} from 'react-i18next';
//class component(StateFull)Durum barındıran
class HomePage extends React.Component{
onChangeLanguage=language=>{
const{i18n}=this.props;
i18n.changeLanguage(language);
changeLanguage(language);
}
render(){return(
   <div>
   <img src="https://www.countryflags.io/tr/flat/64.png"alt="Turkish Flag"onClick={()=>this.onChangeLanguage('tr')}></img>
    <img src="https://www.countryflags.io/US/flat/64.png"alt="US Flag"onClick={()=>this.onChangeLanguage('en')}></img>
     <div>
          hello world
          </div>
   </div>

);}
}
export default withTranslation()(HomePage);