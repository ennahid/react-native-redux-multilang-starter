import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Explore from '../screens/Explore';
import Saved from '../screens/Saved';
import Inbox from '../screens/Inbox';
import Trip from '../screens/Trip';

const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
  },
  Saved: {
    screen: Saved,
  },
  Trip: {
    screen: Trip,
  },
  Inbox: {
    screen: Inbox,
  },
  Profile: {
    screen: Inbox,
  },
});
export default createAppContainer(TabNavigator);
