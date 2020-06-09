import React, {useState, useEffect, useCallback, } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {StyleSheet, View, Alert, TouchableOpacity } from 'react-native'
import {Text, Input, Button, Overlay } from 'react-native-elements'
import {NavProps} from '../../utils/NavProps'
import { useForm, Controller  } from "react-hook-form";
import * as action from '../../redux/actions/Item.act'


interface Props extends NavProps {
    // goBack: () => void
} 

const CategoryScreen: React.FC<Props> = (props) => {
    const [visible1, setVisible] = useState(false);

    const { control, handleSubmit, errors, setValue } = useForm();
    const dispatch = useDispatch();   
    
    const saveItemHandler = (data: any) => {
         dispatch({
            type: action.ADD_NEW_ITEM,
            payload: data
        })    
    }

    const onSubmit = (data: any) => {        
        const goBack = props.navigation.getParam('goBack') || 'ChechOut'    
        console.log('selectionItem goBack',goBack)
        const payload = {...data,category: item.category}
        dispatch({
            type: action.ADD_NEW_CATEGORY,
            payload: payload
        })
        props.navigation.navigate(goBack)
    }
    
    const [item, setItem] = useState({
        itemName: '',
        description: '',
        category: {
            id: 1,
            name: 'Drink'
        }
    })
    
    // const itemSelection = (categor: any) => {        
    //     setItem({
    //         ...item,
    //         category:{id: categor.id, name: categor.name}
    //     })
    //     setValue([{
    //         'category': categor.name
    //     }])
    // }

    
    const toggleOverlay = () => {
        // setVisible(!visible1);
        // Alert.alert(
        // "Alert Title",
        // "My Alert Msg",
        // [
        //     {
        //     text: "Cancel",
        //     onPress: () => console.log("Cancel Pressed"),
        //     style: "cancel"
        //     },
        //     { text: "OK", onPress: () => console.log("OK Pressed") }
        // ],
        // { cancelable: false }
        // );
    };
   
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.categoryLabel} onPress={toggleOverlay} >
            </TouchableOpacity>
            {/* <Overlay isVisible={visible1} onBackdropPress={toggleOverlay} >
                <Text>Hello from Overlay!</Text>
            </Overlay>             */}
            <Controller
                as={<Input placeholder ='Category name' autoCapitalize="none" errorMessage= {errors.firstName && 'This is required'}/>}
                control={control}
                name="name"
                onChange={args => args[0].nativeEvent.text}
                rules={{ required: true }}
                defaultValue={item.itemName}
            />
            {/* <Controller
                as={<Input label="Description" autoCapitalize="none"/>}
                control={control}
                name="description"
                onChange={args => args[0].nativeEvent.text}
                defaultValue={item.description}
            /> */}
            {/* <Controller
                as={
                    <Input value={item.category.name} label="Item" autoCapitalize="none"
                        onFocus = {() => props.navigation.navigate('SelectionModal',{categor:item.category
                        ,itemSelectionHandler: itemSelection})}
                    />
                }
                control={control}
                name="category"
                onChange={args => args[0].nativeEvent.text}
                defaultValue={item.category.name}
                onFocus = {() => {console.log('select from .....')} }
            /> */}
            <Button
                title="Save" 
                containerStyle={{ marginTop: 0}}
                activeOpacity={0.8}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%', 
        alignItems: "center" 
    },
    categoryLabel: {
      width:'25%',
      height:'10%', 
      backgroundColor: 'gray',
      justifyContent: "center",
      padding: 10,
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
  

export default CategoryScreen