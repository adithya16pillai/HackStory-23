import App from './App';
import {name as appName} from './app.json';
import { AppRegistry, Platform } from 'react-native';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    AppRegistry.runApplication('X', { rootTag });
}