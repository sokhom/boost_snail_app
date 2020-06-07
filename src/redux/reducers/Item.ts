import * as actions from '../actions/CustomerActs'
import Item from '../../screen/item'

interface Action {
    type: string,
    payload: any
}

export interface Item {
  id: number,
  name: String,
  avatar_url: String,
  subtitle: String,
  category: {
    id: number,
    name: String
  }
}

interface ItemState {
    data: Item[],
    filter: Item[],
    loading: boolean
}

const intialState: ItemState = {    
    data: [],
    filter: [],
    loading: false
}

const reducer = (state:ItemState = intialState, action: Action): ItemState => {
    // console.log('item reducer', state)
    switch(action.type){
        case actions.FETCH_ITEMS:         
            return {
                ...state,
                filter: state.data.filter((item: any) => item.name === '')
            }
        case actions.ADD_NEW_ITEM: {
            const {name='', description='', category = {id:0, name:''}}= action.payload            
            const data = {
                id: 0,
                name: name,
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: description,
                category: category
              }            
            return {
                ...state,
                data: [...state.data, data]
            }
        }
        case actions.SEARCH_ITEM: {
          const {search=''}= action.payload
          const filter = state.data.filter((item: any) => {
            return item.name === search || search === ''
           })
          return {
            ...state,
            filter: [...filter]
          }    
        }
            
        default:
            return state    
    }
}
export default reducer
