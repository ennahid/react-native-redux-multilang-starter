import {createStackNavigator} from 'react-navigation-stack';
import OffreInfoPage from '../pages/OffreInfoPage';
import BottomNav from './BottomNav';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: BottomNav,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    offreInfoPage: {
      screen: OffreInfoPage,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default MainNavigator;
