import React, {Component} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text, ListItem } from 'react-native-elements'
import {CustomerModel} from '../../models/CustomerModel'
import {NavProps} from '../../utils/NavProps'

const list = [
    {
      id: 1,
      name: 'All Items',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: ''
    },
    {
      id: 2,
      name: 'Category',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id: 2,
      name: 'Group',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Group of itms'
    },
    {
      id: 2,
      name: 'UoM',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Unit of Measurement'
    }
  ]

interface Props extends NavProps {} 
interface State {}

const onItermPress=(props:Props,item: any)=>{
    console.log('onItermPress', item.name)
    let goTo = ''
    switch(item.name){
      case 'Category':{
        props.navigation.navigate('Categories') 
        return 
      }
        
      case 'All Items': { 
        props.navigation.navigate('ItemList') 
        return
      }
      default: return
    }   
    // props.navigation.navigate(goTo)
}
const Item: React.FC<Props> = (props) => {   
        // console.log('customer props:',this.props)
  const renderItem = (itemData: any) =>{ 
    return(               
      <ListItem
          key={itemData.index}
          // leftAvatar={{ source: { uri: itemData.item.avatar_url } }}
          title={itemData.item.name}
          subtitle={itemData.item.subtitle}
          // topDivider = {false}
          onPress = {()=>onItermPress(props,itemData.item)}
          bottomDivider
          chevron
      />            
    ) 
  }
  // const actions = ['Add','Remove']
  // const onPopupEvent = (eventName: string, index: number | undefined) => {
  //   console.log('from custom popup menu')
    
  // }
  return(
   
      <FlatList
          data = {list}
          // keyExtractor={(item, index) => index.toString()}
          renderItem = {(itemData) => {
              // console.log('itemdata',itemData)
              return renderItem(itemData)
          }}
          style={{ width: '100%' }}
      /> 
   
  )
}

export default Item