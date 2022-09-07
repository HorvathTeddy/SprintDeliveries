import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../components/screens/HomeScreen'
import DispoDetailsScreen from '../components/screens/DispoDetailsScreen'
import Basket from '../components/screens/Basket'
import MenuDetailsScreen from '../components/screens/MenuDetailsScreen'
import OrderDetails from '../components/screens/OrderDetails'
import OrdersScreen from '../components/screens/OrdersScreen'
import { FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const RootNavigator = () => 
{
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen 
                name='HomeTabs'
                component={HomeTabs}
            >
            </Stack.Screen>
            {/* <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen> */}
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator()

const HomeTabs = () =>
{
    return (
        <Tab.Navigator barStyle={{backgroundColor: '#fff'}}>
            <Tab.Screen 
            name='Home' 
            component={HomeStackNavigator} 
            options={{tabBarIcon: ({color}) => 
                <Foundation name='home' size={24} color={'black'} 
            />,}}
            />
            <Tab.Screen 
            name='Orders' 
            component={OrdersStackNavigator} 
            options={{tabBarIcon: ({color}) => 
                <MaterialIcons name='list-alt' size={24} color={'black'} 
            />,}}
            />
            <Tab.Screen 
            name='Profile' 
            component={MenuDetailsScreen} 
            options={{tabBarIcon: ({color}) => 
                <FontAwesome5 name='user-alt' size={24} color={'black'} 
            />,}}
            />
        </Tab.Navigator> 
    )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () =>
{
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Dispos" component={HomeScreen} />
            <HomeStack.Screen name="Dispo" component={DispoDetailsScreen} />
            <HomeStack.Screen name="Menu" component={MenuDetailsScreen} />
            <HomeStack.Screen name="Basket" component={Basket} />
        </HomeStack.Navigator>
    )
}

const OrdersStack = createNativeStackNavigator()

const OrdersStackNavigator = () =>
{
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Orders" component={OrdersScreen} />
            <OrdersStack.Screen name="Order" component={OrderDetails} />
        </OrdersStack.Navigator>
    )
}

export default RootNavigator