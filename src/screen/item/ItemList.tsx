import React, {Component, useEffect} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, ScrollView  } from 'react-native'
import { Text, ListItem, SearchBar, Image, CheckBox  } from 'react-native-elements'
import {CustomerModel} from '../../models/CustomerModel'
import {NavProps} from '../../utils/NavProps'
import {FETCH_ITEMS} from '../../redux/actions/CustomerActs'

const list = [
    {
      id: 1,
      name: 'All Items',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: ''
    },
    {
      id: 2,
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id: 2,
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id: 2,
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id: 2,
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    }
  ]

interface Props extends NavProps {} 
interface State {
  customer: {}
}


const onItermPress=(props:Props,item: any)=>{
    console.log('onItermPress', props)
    props.navigation.navigate('MyModal')
}

const ItemList: React.FC<Props> = (props) => {    
  const list1 = useSelector((state: any) => { return state.item.data}) 
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type: FETCH_ITEMS
    })
  },[])

        console.log('customer state:',list1)       
        const renderItem = (itemData: any) =>{ 
            return(           
                <ListItem
                    key={itemData.in}
                    leftAvatar={{ source: { uri: itemData.item.avatar_url } }}
                    title={itemData.item.name}                  
                    subtitle={itemData.item.subtitle}
                    topDivider = {false}
                    onPress = {()=>onItermPress(props,itemData)}
                    bottomDivider
                />                                  
            ) 
        }
        const actions = ['Add','Remove']
       const onPopupEvent = (eventName: string, index: number | undefined) => {

            console.log('from custom popup menu')
            
          }
        return(
            <View>
                <SearchBar
                    placeholder="Type Here..."
                    // onChangeText={this.updateSearch}
                    // value={search}
                    platform ={'ios'}
                /> 
                <ScrollView>
                <FlatList
                    data = {list1}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {(itemData) => {
                        console.log('itemdata',itemData)
                        return renderItem(itemData)
                    }}
                    style={{ width: '100%' }}
                /> 
                </ScrollView>   
            </View>
        )
    
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})
export default ItemList