import { createAppContainer, withOrientation } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginPage from './src/pages/LoginPage'
import SeriesPage from './src/pages/SeriesPage';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Login'
    }
  },
  'Main':
  {
    screen:SeriesPage,
    navigationOptions:{
      title:'SeriesPage'
    }
  }
},
  {
    defaultNavigationOptions: {
      title: 'Series',
      headerStyle: {
        backgroundColor: '#0000ff'
      },
      headerTintColor: 'white',
      headerTitleStyle:
      {
        color: 'white',
        fontSize: 30
      }
    }
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;