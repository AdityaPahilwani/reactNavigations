/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import {Navigation} from 'react-native-navigation';
import App from './App';
import Setting from './Setting';
import {name as appName} from './app.json';

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#fd0054',
  },
  topBar: {
    title: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#fd0054',
    },
  },
  animations: {
    push: {
      content: {
        translationX: {
          from: require('react-native').Dimensions.get('window').width,
          to: 0,
          duration: 500,
        },
      },
    },
    pop: {
      content: {
        translationX: {
          from: -require('react-native').Dimensions.get('window').width,
          to: 0,
          duration: 500,
        },
      },
    },
  },
});

Navigation.registerComponent('Home', () => App);
Navigation.registerComponent('Setting', () => Setting);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'stack',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
