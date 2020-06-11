import React, { useState } from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'

import {Icon, Avatar, ListItem, Tile} from 'react-native-elements'
import {NavProps} from '../../utils/NavProps'

interface Props extends NavProps {

}

const CategoryLabel: React.FC<Props> = (props) => {
    const [labeColor, setLabelColor] = useState([
        {label:'1', color:'#CE93D8', isCheck: false},
        {label:'2', color:'#673ab7', isCheck: false},
        {label:'3', color:'#009688', isCheck: false},
        {label:'4', color:'#8bc34a', isCheck: false},
        {label:'5', color:'#ffeb3b', isCheck: false},
        {label:'6', color:'#ffc107', isCheck: false},
        {label:'7', color:'#ff9800', isCheck: false},
        {label:'8', color:'#795548', isCheck: false},
        {label:'9', color:'#9e9e9e', isCheck: false},
        {label:'10', color:'#607d8b', isCheck: false}
    ])
    const itemSelectionHandler = props.navigation.getParam('itemSelectionHandler')

    const [color, setColor] = useState('#9e9e9e')
    const onItermPress=(item: any)=>{
       
        setLabelColor(
            labeColor.map((d)=> {
                return {...d, isCheck: (d.label === item.label || false)}
            })
        )
        props.navigation.setParams({selectionItem: item})
        setColor(item.color)
        itemSelectionHandler(item.color)
    }
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <View style={[styles.categoryLabelColor, {backgroundColor: color}]}/>
            </View>
            <Text style={{fontSize: 12}}>SELECT COLOR CATEGORIES</Text>
            <FlatList                          
                scrollEnabled = {true}
                data = {labeColor}
                keyExtractor={(item, index) => index.toString()}                
                renderItem= {({item, index}) =>{ 
                    // console.log('category label',styles.categoryLabel)
                   return (
                        <ListItem 
                            key={index}  
                            activeOpacity = {1}                           
                            containerStyle = {[styles.categoryLabel,{ backgroundColor: item.color}]} 
                            onPress = {() => {
                                onItermPress(item)
                            }}
                            checkmark = {item.isCheck}
                        />
                   )
                }

                }
                // horizontal = {true}
                numColumns = {5}
                style={{  width: '100%', height: '100%'}}
            />
            <View><Text>Heelllo</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%', 
        width: '100%',
        // alignItems: "center" 
        // backgroundColor: 'red',
        padding: 10
       
    },
    categoryLabel: {         
        minWidth: 50,
        maxWidth: 50,
        height: 50,
        maxHeight:50,
       
    },
    categoryColorTitle: {
        fontSize: 12,       
    },
    categoryLabelColor: {
        minWidth: 80,
        minHeight: 80,
        marginBottom: 10
    }
  });
export default CategoryLabel