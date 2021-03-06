import React, { useState } from 'react'
import {StyleSheet, View, FlatList, Text, Dimensions } from 'react-native'

import {Icon, Avatar, ListItem, Tile} from 'react-native-elements'
import {NavProps} from '../../utils/NavProps'
import ImagePicker from '../../components/ImagePicker'
import LabelColor from '../../components/LabelColor'




interface Props extends NavProps {}

const ItemAvatar: React.FC<Props> = (props) => {

    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    
    // const [labeColor, setLabelColor] = useState([
    //     {label:'1', color:'#CE93D8', isCheck: false},
    //     {label:'2', color:'#673ab7', isCheck: false},
    //     {label:'3', color:'#009688', isCheck: false},
    //     {label:'4', color:'#8bc34a', isCheck: false},
    //     {label:'5', color:'#ffeb3b', isCheck: false},
    //     {label:'6', color:'#ffc107', isCheck: false},
    //     {label:'7', color:'#ff9800', isCheck: false},
    //     {label:'8', color:'#795548', isCheck: false},
    //     {label:'9', color:'#9e9e9e', isCheck: false},
    //     {label:'10', color:'#607d8b', isCheck: false}
    // ])
    const selectLabelColorHandler = props.navigation.getParam('selectLabelColorHandler')

    // const [color, setColor] = useState('#9e9e9e')
    // const onItermPress=(item: any)=>{
       
    //     setLabelColor(
    //         labeColor.map((d)=> {
    //             return {...d, isCheck: (d.label === item.label || false)}
    //         })
    //     )
    //     props.navigation.setParams({selectionItem: item})
    //     setColor(item.color)
    //     itemSelectionHandler(item.color)
    // }
    // const [widthColor,setWidthColor] = useState((windowWidth-20)/5)
    
    // console.log('windowHeight',windowWidth)
    // console.log('windowHeight',windowHeight)
    // console.log('widthColor',widthColor)
    return (
        <View style={styles.container}>
            {/* <View style={{alignItems:'center'}}>
                <View style={[styles.categoryLabelColor, {backgroundColor: color}]}/>
            </View>
            <Text style={{fontSize: 12}}>CHOOSE LABEL COLOR</Text>
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
                            containerStyle = {[styles.categoryLabel,{width: widthColor},{ backgroundColor: item.color}]}
                            onPress = {() => {
                                onItermPress(item)
                            }}
                            checkmark = {item.isCheck && <Icon name='md-checkmark' type='ionicon' color='#ffff'></Icon>}
                        />
                    )
                    }
                }
                numColumns = {5}
                style={{ width: '100%', maxHeight: 100}}
            /> */}
            <LabelColor {...props} onPressColor={selectLabelColorHandler}/>
            <ImagePicker/>    
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        padding: 10
       
    }
  });
export default ItemAvatar