

# The Guide

### How to installation

```
## Main(Stabil) Version 
npm install -S git+ssh://git@bitbucket.org/nexcloud/nexcomponent-ui.git

## Development Version
npm install -S "git+ssh://git@bitbucket.org/nexcloud/nexcomponent-ui.git#development"

## Other Version 
npm install -S "git+ssh://git@bitbucket.org/nexcloud/nexcomponent-ui.git#<branch-name>"
```

### How to update

if you have installed the previous nexcomponent, to update it is recommended to run the command

```
npm update nexcomponent-ui --save
```

### How to import

```javascript
import './App.css';
import { Button } from 'nexcomponent-ui';

functionApp() {
 return (

  <div className="App">
   <Button label="tes" />
  </div>

 );
}

export default App;
```

License
MIT © nexsoft

