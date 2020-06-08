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

const CategoryScreen: React.FC<Props> = (props) => {
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
        // const payload = JSON.stringify(data)
        const goBack = props.navigation.getParam('goBack') || 'ChechOut'    
        console.log('selectionItem goBack',goBack)
        const payload = {...data,category: item.category}
        dispatch({
            type: action.ADD_NEW_ITEM,
            payload: payload
        })
        props.navigation.navigate(goBack)
        // props.navigation.goBack()
    }
    
    const [item, setItem] = useState({
        itemName: 'Pro',
        description: '',
        category: {
            id: 1,
            name: 'Drink'
        }
    })
    
    const itemSelection = (categor: any) => {
        // console.log('itemSelection handler', item)
        setItem({
            ...item,
            category:{id: categor.id, name: categor.name}
        })
        setValue([{
            'category': categor.name
        }])
    }
   
    return (
        <View style={{height:'100%'}}>
            <Controller
                as={<Input label='Name' autoCapitalize="none" errorMessage= {errors.firstName && 'This is required'}/>}
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

export default CategoryScreen