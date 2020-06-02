import React ,{useState} from 'react'
import { View, StyleSheet ,Modal, Button,} from 'react-native'
import { Text, Icon, Header} from 'react-native-elements'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'
import { Header as HeaderItem} from 'react-native/Libraries/NewAppScreen'
import HeaderButton from '../components/HeaderButton'
import Items  from '../screen/item'
import {NavProps} from '../utils/NavProps'
import ItemList from '../screen/item/ItemList'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'
import ItemScreen from '../screen/item/ItemScreen'
import ItemSelector from '../screen/item/ItemSelector'



interface Props1 {
  actionMenu?: () => void
} 
interface Props extends NavProps { 
  actionMenu?: () => void
} 




const ItemCate: React.FC<Props> = (props) => {
  
  return (
    <View>
      <Items {...props}>   
       
      </Items>      
    </View>
  )
}

const myModal: React.FC<Props> = (props) =>{
  const [modalVisible, SetModalVisible] = useState(true)
  return (
    <View  
      style={{width:'100%', height:'100%',
        backgroundColor:'none',
        margin: 0
      }}
    >     
      <Header
        leftComponent={ 
          <Icon
         reverse = {false}
          size = {24}
          name='times'
          type='font-awesome'
          color='#5f6368'          
          onPress={() => props.navigation.goBack()} 
        />
      }
        centerComponent={{ text: 'Creat New Item', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
       <ItemScreen {...props}/>
    </View>
  )
}


const selectionModal: React.FC<Props> = (props) =>{
  const [modalVisible, SetModalVisible] = useState(true)
  return (
    <View  
      style={{width:'100%', height:'100%',
        backgroundColor:'none',
        margin: 0
      }}
    >     
      <Header
        leftComponent={ 
          <Icon
          reverse = {false}
          size = {24}
          name='angle-left'
          type='font-awesome'
          color='#5f6368'
          onPress={() => props.navigation.goBack()} 
        />
      }
        centerComponent={{ text: 'Categories', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
       <ItemSelector {...props}/>
    </View>
  )
}
const navigationOptionsa = (navData: any,props: Props1) => {
    // console.log(navData)
    return {
        headerTitle: 'Items',
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

const itemListNavOption = (navData: any,props: Props1) => {
  
  return {
      headerTitle: 'Item List',    
      headerRight: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item 
                  title='More'
                  iconName='ios-add'                    
                  onPress={()=> {navData.navigation.navigate('MyModal')}}
              />
          </HeaderButtons>
      )
  }    
}
const config = (props: Props1) => {
  return {
    Items: {
      screen: ItemCate,
      navigationOptions: (navData: any) =>  navigationOptionsa(navData,{...props})
    },
    ItemList:{
      screen: ItemList,
      navigationOptions:(navData: any) => itemListNavOption(navData,{...props})
    }
 }
}
const props = {  
  actionMenu: () => {
    console.log('Helllo')
  }
}
const CheckOutNav1 = createStackNavigator(config({...props}))

const ItemNav = createStackNavigator({
  Checkout: {
    screen: CheckOutNav1
  },
  MyModal: {
    screen: myModal
  },
  SelectionModal: {
    screen: selectionModal
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})

export default ItemNav
