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
      name: 'Categery',
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
    console.log('onItermPress', props)
    props.navigation.navigate('ItemList')
}
class Item extends Component<Props, State> {

   
    render(){
        console.log('customer props:',this.props)
        const renderItem = (itemData: any) =>{ 
            return(               
            <ListItem
                    key={itemData.in}
                    // leftAvatar={{ source: { uri: itemData.item.avatar_url } }}
                    title={itemData.item.name}
                    subtitle={itemData.item.subtitle}
                    topDivider = {false}
                    onPress = {()=>onItermPress(this.props,itemData)}
                    bottomDivider
                    chevron
                />            
            ) 
        }
        const actions = ['Add','Remove']
       const onPopupEvent = (eventName: string, index: number | undefined) => {

            console.log('from custom popup menu')
            
          }
        return(
            <View>
               
                
                <FlatList
                    data = {list}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {(itemData) => {
                        console.log('itemdata',itemData)
                        return renderItem(itemData)
                    }}
                    style={{ width: '100%' }}
                /> 
            </View>
        )
    }
}

export default Item