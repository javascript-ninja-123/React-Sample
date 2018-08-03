import React, {PropTypes} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import MyAsset from './containers/myAsset/myAsset';

 class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={MyAsset}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
