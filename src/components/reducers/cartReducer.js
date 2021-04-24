import Item1 from '../../images/nike.jpg'
import Item2 from '../../images/adidas.jpg'
import Item3 from '../../images/vans.jpg'
import Item4 from '../../images/converse.jpg'
import Item5 from '../../images/boots.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Nike', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit velit posuere neque lobortis porttitor. Integer venenatis urna quam, id suscipit mauris rhoncus eget. Etiam sit amet diam ex.", price:389000,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit velit posuere neque lobortis porttitor. Integer venenatis urna quam, id suscipit mauris rhoncus eget. Etiam sit amet diam ex.", price:400000,img:Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit velit posuere neque lobortis porttitor. Integer venenatis urna quam, id suscipit mauris rhoncus eget. Etiam sit amet diam ex.", price:220000,img:Item3},
        {id:4,title:'Converse', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit velit posuere neque lobortis porttitor. Integer venenatis urna quam, id suscipit mauris rhoncus eget. Etiam sit amet diam ex.", price:560000,img:Item4},
        {id:5,title:'Boots', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit velit posuere neque lobortis porttitor. Integer venenatis urna quam, id suscipit mauris rhoncus eget. Etiam sit amet diam ex.", price:279000,img:Item5},
    ],
    addedItems:[],
    total: 0
}

const cartReducer= (state = initState,action)=>{

    // Home Component
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        // check if action id exists
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += 1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            // calculating
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total:newTotal
        }
    }

    // Cart Component
    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    if(action.type === SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        // if quantity = 0, then remove it
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.lokal - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }

    if(action.type === ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
    } else {
        return state
    }
    
}

export default cartReducer