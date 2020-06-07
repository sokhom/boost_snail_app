import React, {useState, useEffect, useCallback, } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {View, Alert } from 'react-native'
import {Text, Input, Button } from 'react-native-elements'
import {NavProps} from '../../utils/NavProps'
import { useForm, Controller  } from "react-hook-form";
import * as action from '../../redux/actions/CustomerActs'


interface Props extends NavProps {
    // goBack: () => void
} 

const ItemScreen: React.FC<Props> = (props) => {
    const { control, handleSubmit, errors,setValue  } = useForm();
    const dispatch = useDispatch();
   
    const [save,setSave] = useState({})

    const saveItemHandler = (data: any) => {
         dispatch({
            type: action.ADD_NEW_ITEM,
            payload: data
        })    
    }

    const onSubmit = (data: any) => {
        const payload = JSON.stringify(data)
        const goBack = props.navigation.getParam('goBack') || 'ChechOut'    
        console.log('selectionItem goBack',goBack)
        dispatch({
            type: action.ADD_NEW_ITEM,
            payload: data
        })
        props.navigation.navigate(goBack)
    }
    
    const [item, setItem] = useState({
        itemName: 'Pro',
        description: '',
        category: {
            id: 1,
            name: 'Drink'
        }
    })
    // const callBack = useCallback(async (data)=>{
    //      dispatch({
    //         type: action.ADD_NEW_ITEM,
    //         payload: data
    //     })    
    
    //     // props.navigation.goBack()   
    //     // props.navigation.navigate('ItemList')
    // },[dispatch])

    // useEffect(()=>{
    //     console.log('itemSelection handler save', save)
    //     if(save){
    //         dispatch({
    //             type: action.ADD_NEW_ITEM,
    //             payload: save
    //         })
    //     } 
    //     // props.navigation.navigate('ItemList')
    
    //     return () => {
    //         console.log('ItemScreen useEffect call back',)
    //         props.navigation.navigate('ItemList')
    //         // setSave({})
    //     }
    
    // },[save])
    // // console.log('useSelector',useSelector(state=>state))
    const itemSelection = (item: any) => {
        // console.log('itemSelection handler', item)
        setItem({
            ...item,
            category:{id: item.id, name: item.name}
        })
        setValue([{
            'category': item.name
        }])
    }
   
    return (
        <View style={{height:'100%'}}>
            <Controller
                as={<Input label='Item name' autoCapitalize="none" errorMessage= {errors.firstName && 'This is required'}/>}
                control={control}
                name="name"
                onChange={args => args[0].nativeEvent.text}
                rules={{ required: true }}
                defaultValue={item.itemName}
            />
            <Controller
                as={<Input label="Description" autoCapitalize="none"/>}
                control={control}
                name="description"
                onChange={args => args[0].nativeEvent.text}
                defaultValue={item.description}
            />
            <Controller
                as={
                    <Input value={item.category.name} label="Category" autoCapitalize="none" 
                        onFocus = {() => props.navigation.navigate('SelectionModal',{categor:item.category
                        ,itemSelectionHandler: itemSelection})}
                    />
                }
                control={control}
                name="category"
                onChange={args => args[0].nativeEvent.text}
                defaultValue={item.category.name}
                onFocus = {() => {console.log('select from .....')} }
            />
            <Button
                title="Save" 
                containerStyle={{ marginTop: 0, flex: 1 }}
                // activeOpacity={0.8}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    )
}

export default ItemScreen