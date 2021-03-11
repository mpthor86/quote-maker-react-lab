export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      index = state.quote.findIndex(q => q.id === action.id)
      return [...state.quote.slice(0, index), ...state.quote.slice(index + 1) ]

    default:
      return state
  }
  
}
