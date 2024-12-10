import LanguageProvider from "../../Component/providers/LanguageProvider";
import {Routes} from "react-router-dom";
import clientRoutes from "../Routes/clientRoutes";
import React from "react";

export const INSTALL_DATA = `## Main(Stabil) Version 
npm install -S git+ssh://git@bitbucket.org/nexcloud/nexcomponent-ui.git

## Development Version
npm install -S "git+ssh://git@bitbucket.org/nexcloud/nexcomponent-ui.git#development"

## Other Version 
npm install -S "git+ssh://git@bitbucket.org/nexcloud/nexcomponent-ui.git#<branch-name>"`


export const UPDATE_DATA = `npm update nexcomponent-ui --save`

export const IMPORT_DATA = `import './App.css';
import { ButtonV223 } from 'nexcomponent-ui';

functionApp() {
 return (

  <div className="App">
   <ButtonV223 buttonType={"primary"} label="tes" />
  </div>

 );
}

export default App;`


export const USAGE_LANGUAGE = `<LanguageProvider defaultLanguage={"id"}>
  <App />
</LanguageProvider>`

export const HOOKS_LANGUAGE = `const LanguageSetter = () => {
  const {language, changeLanguage} = useLanguage()
  return (
    <div>
      CURRENT - {language}
      <ButtonV223
        buttonType={"primary"}
        secondaryColor={"white"}
        label="change"
        size={"xs"}
        onClick={() => language === 'id' ? changeLanguage('en') : changeLanguage('id')}
      />
      <br/>
    </div>
  );
};`