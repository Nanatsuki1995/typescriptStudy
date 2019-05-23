import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App status={true} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
