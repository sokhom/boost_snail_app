import React ,{useState} from 'react'
import { View, StyleSheet ,Modal, Button} from 'react-native'
import { Text, Icon } from 'react-native-elements'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'
import { Header } from 'react-native/Libraries/NewAppScreen'
import HeaderButton from '../components/HeaderButton'
import Customer from '../screen/customer'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'


interface Props  {
  navigation: NavigationScreenProp<NavigationState,NavigationParams>,
  actionMenu?: () => void
}

interface Props1 {
  actionMenu?: () => void
}



const checkOut: React.FC<Props> = (props) => {
  
  return (
    <View>
      <Customer {...props}>   
       
      </Customer>      
    </View>
  )
}

const myModal: React.FC<Props> = (props) =>{
  const [modalVisible, SetModalVisible] = useState(true)
  return (
    <View  
      style={{width:'20%', height:'40%',
        backgroundColor:'red',
        margin: 15
      }}
    >
      <Button
        title = 'Close Modal'
        onPress = {()=> props.navigation.goBack()}
      />
        <Text>HHHHHH</Text>
      </View>
  )
}
const navigationOptionsa = (navData: any,props: Props1) => {
    // console.log(navData)
    return {
        headerTitle: 'CheckOut',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu'
                    iconName='ios-menu'
                    onPress={()=>{navData.navigation.toggleDrawer()}}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='More'
                    iconName='ios-more'                    
                    onPress={()=> {navData.navigation.navigate('MyModal')}}
                />
               
            </HeaderButtons>
        )
    }    
}
const config = (props: Props1) => {
  return {
    Checkout: {
      screen: checkOut,
      navigationOptions: (navData: any) =>  navigationOptionsa(navData,{...props})
    }
 }
}
const props = {  
  actionMenu: () => {
    console.log('Helllo')
  }
}
const CheckOutNav1 = createStackNavigator(config({...props}))
const CustomerNav = createStackNavigator({
  Checkout: {
    screen: CheckOutNav1
  },
  MyModal: {
    screen: myModal
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})

export default CustomerNav
