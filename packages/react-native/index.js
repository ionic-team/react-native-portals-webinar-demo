/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {addPortal, register} from '@ionic/portals-react-native';

register('PORTALS_KEY_HERE');

/*
 * Portal definition
 */
const countPortal = {
  name: 'count',
  startDir: 'portals/count',
  liveUpdate: {
    appId: 'cde08656',
    channel: 'production',
    syncOnAdd: true,
  },
};
addPortal(countPortal);

AppRegistry.registerComponent(appName, () => App);
