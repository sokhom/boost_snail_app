import {FETCH_ITEMS, ADD_NEW_ITEM} from '../actions/CustomerActs'

interface Action {
    type: string,
    payload: any
}

export interface Item {
  id: number,
  name: String,
  avatar_url: String,
  subtitle: String
}

interface ItemState {
    data: Item[],
    loading: boolean
}

const intialState: ItemState = {
    data: [{
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
      }],
    loading: false
}

const reducer = (state:ItemState = intialState, action: Action): ItemState => {
    // console.log('item reducer', state)
    switch(action.type){
        case FETCH_ITEMS:
            return {
                ...state,
                data: state.data
            }
        case ADD_NEW_ITEM: {
            const {name='', description=''}= action.payload            
            const data = {
                id: 0,
                name: name,
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: description
              }            
            return {
                ...state,
                data: [...state.data, data]
            }
        }
            
        default:
            return state    
    }
}
export default reducer
