import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Index from './container'
import './index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Index />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
