import React, {Component, useState, useEffect, useLayoutEffect} from 'react'
import { View, StyleSheet, FlatList  } from 'react-native'
import { Text, ListItem, SearchBar, Image, CheckBox  } from 'react-native-elements'
import {CustomerModel} from '../../models/CustomerModel'
import {NavProps} from '../../utils/NavProps'
import Item from '.'

// const list = [
//     {
//       id: 1,
//       name: 'Food',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//       subtitle: ''
//     },
//     {
//       id: 2,
//       name: 'Drink',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//       subtitle: 'Vice Chairman'
//     },
//     {
//       id: 2,
//       name: 'UseFull',
//       avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//       subtitle: 'Vice Chairman'
//     }
//   ]

interface Props extends NavProps {} 
interface State {}
const ItemSelector: React.FC<Props> = (props) =>{   

    const [list,setList] = useState([
        {
          id: 1,
          name: 'Food',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: '',
          isCheck: false
        },
        {
          id: 2,
          name: 'Drink',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman',
          isCheck: false
        },
        {
          id: 2,
          name: 'UseFull',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman',
          isCheck: false
        }
      ])
    
    console.log('customer props:',props)     
    console.log(props.navigation.getParam('categor'))
    const categor = props.navigation.getParam('categor') || {id:0, name: 'None'}
    
    const onItermPress=(item: any)=>{
        console.log('onItermPress', item)
        // props.navigation.navigate('MyModal')      
        setList(
            list.map((d)=> {
                return {...d, isCheck: (d.name === item.name || false)}
            })
        ) 
        // props.navigation.setParams({selectionItem: item})      
    }

    // useLayoutEffect(()=>{
    //     console.log('useLayoutEffect')
    // },[])
    // useEffect( () => {
    //     console.log('useEffect')
    //     const selectionItem =  list.filter((item:any) =>  item.isCheck === true)
    //     props.navigation.setParams({selectionItem: selectionItem})
    // },[onItermPress])

    const renderItem = (itemData: any) =>{ 
        const isCheck = itemData.item.name === categor.name || false
        return(    
            <ListItem
                key={itemData.in}
                leftAvatar={{ source: { uri: itemData.item.avatar_url } }}
                title={itemData.item.name}
                // subtitle={itemData.item.subtitle}
                rightTitle = {
                    <CheckBox  
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o' 
                        checked={itemData.item.isCheck}
                        onPress = {()=>onItermPress(itemData.item)}
                    />
                }
                subtitle={
                    <View style={styles.subtitleView}>                        
                    <Text style={styles.ratingText}>5 months ago</Text>
                    </View>
                }
                topDivider = {false}
                onPress = {()=>onItermPress(itemData.item)}
                bottomDivider
            />                                  
        )
    }
    
    const onPopupEvent = (eventName: string, index: number | undefined) => {
        console.log('from custom popup menu')        
    }

    return (
        <View>
            <SearchBar
                placeholder="Type Here..."
                // onChangeText={this.updateSearch}
                // value={search}
                platform ={'ios'}
            />                
            <FlatList
                data = {list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(itemData) => {
                    console.log('itemdata',itemData)
                    return renderItem(itemData)
                }}
                style={{ width: '100%' }}
            /> 
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


export default ItemSelector