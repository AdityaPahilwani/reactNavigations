/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './Navigator';
import {name as appName} from './app.json';
import {enableScreens} from 'react-native-screens';
import {addPlugin, Flipper} from 'react-native-flipper';
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

const TO_JS = 0;
let id = 0;

let _connection = undefined;
const buffer = [];
const BATCH_SIZE = 50;
addPlugin({
  getId() {
    return 'com.sylvanaar.flipper.bridgespy';
  },
  onConnect(connection) {
    _connection = connection;

    MessageQueue.spy(info => {
      if (info.module !== 'Flipper' && _connection) {
        info.time = Date.now();
        info.id = (id++).toString();
        info.type = info.type === TO_JS ? 'N->JS' : 'JS->N';

        buffer.push(info);
        if (buffer.length === 1 || buffer.length === BATCH_SIZE)
          setTimeout(() => {
            try {
              JSON.stringify(buffer); // is there a better way to check for cycles?
              _connection?.send('newRow', buffer);
            } catch {
              // ignore
            } finally {
              buffer.length = 0;
            }
          }, 50);
      }
    });
    connection.receive('getData', (data, responder) => {
      responder.success({
        ack: true,
      });
    });
  },
  onDisconnect() {
    _connection = undefined;
    MessageQueue.spy(false);
  },
  runInBackground() {
    return false;
  },
});
enableScreens();
AppRegistry.registerComponent(appName, () => Navigator);
