import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
 
import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions:{
        title: 'DevRadar'
      }
    },
    Profile:{
      screen: Profile,
      navigationOptions:{
        title: 'Github'
      }
    }
  },{
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: '#24292e'
      },
      headerBackTitleVisible: false,
      headerTintColor:'#fff',
      headerTitleStyle: {
        fontSize: 19,
        fontWeight: 'bold'
      }
    }
  })
)

export default Routes