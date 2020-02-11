import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from 'src/screens/home';
import Category from 'src/screens/shop/category';
import WishList from 'src/screens/wishlist';

import Blogs from '../screens/blog/blogs';
import Forum from '../screens/forum/forum';
import Specialists from '../screens/specialists/specialists';
import Places from '../screens/places/places';

import ProfileStack from './profile-stack';
import CartStack from './cart-stack';

import Tabbar from 'src/containers/Tabbar';

import { homeTabs } from 'src/config/navigator';

const Tabs = createBottomTabNavigator(
  {
    [homeTabs.home]: {
      screen: Home,
    },
    [homeTabs.blogs]: {
      screen: Blogs,
    },
    [homeTabs.places]: {
      screen: Places,
    },
    // <-- TAB TIENDA START ->
    [homeTabs.shop]: {
      screen: Category,
    },
    // <-- TAB TIENDA END ->
    [homeTabs.specialists]: {
      screen: Specialists,
    },
    // [homeTabs.wish_list]: {
    //   screen: WishList,
    // },
    // [homeTabs.cart]: {
    //   screen: CartStack,
    //   navigationOptions: ({ navigation }) => {
    //     const {state: {index}} = navigation
    //     return {
    //       tabBarVisible: index === 0,
    //     }
    //   },
    // },
    [homeTabs.forum]: {
      screen: Forum,
    },
    [homeTabs.me]: {
      screen: ProfileStack,
    },
  },
  {
    defaultNavigationOptions: {
      // tabBarVisible: false
    },
    tabBarComponent: props => <Tabbar {...props}/>,
  }
);

export default Tabs;
