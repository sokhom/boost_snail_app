import React, {useState, useEffect, } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {View, Alert } from 'react-native'
import {Text, Input, Button } from 'react-native-elements'
import {NavProps} from '../../utils/NavProps'
import { useForm, Controller  } from "react-hook-form";
import * as action from '../../redux/actions/CustomerActs'


interface Props extends NavProps {

} 

const ItemScreen: React.FC<Props> = (props) => {
    const { control, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    // const categor = props.navigation.getParam('selectionItem') || {id:0, name: 'None'}
    
    // console.log('selectionItem categor',categor)
    const onSubmit = (data: any) => {
        const payload = JSON.stringify(data)
        console.log('JSON.stringify(data)', data.name)
        dispatch({
            type: action.ADD_NEW_ITEM,
            payload: data
        })       
    }
    useEffect(()=>{
        // props.navigation.goBack()
        console.log('ItemScreen useEffect',)
    },[onSubmit])
    // console.log('useSelector',useSelector(state=>state))
    const [item, setItem] = useState({
        itemName: 'Pro',
        description: '',
        category: {
            id: 1,
            name: 'Drink'
        }
    })
   
    return (
        <View>
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
                as={<Input label="Category" autoCapitalize="none" onFocus = {() => props.navigation.navigate('SelectionModal',{categor:item.category})}/>}
                control={control}
                name="category"
                onChange={args => args[0].nativeEvent.text}
                defaultValue={item.category.name}
                onFocus = {() => {console.log('select from .....')} }
            />
            <Button
                title="Save" 
                containerStyle={{ marginTop: 0, flex: 1 }}
                activeOpacity={0.8}
                onPress={handleSubmit(onSubmit)} 
            />
        </View>
    )
}

export default ItemScreen