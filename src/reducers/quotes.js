export default (state = [], action) => {
  let myquote
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'UPVOTE_QUOTE':
      myquote = state.find(q => q.id === action.quoteId)
      myquote = {...myquote, votes: myquote.votes + 1}
      idx = state.findIndex(q => q.id === action.quoteId)
      return [...state.slice(0, idx), myquote, ...state.slice(idx + 1) ]

    case 'DOWNVOTE_QUOTE':
      myquote = state.find(q => q.id === action.quoteId)
      myquote = {...myquote, votes: myquote.votes === 0 ? myquote.votes : myquote.votes - 1}
      idx = state.findIndex(q => q.id === action.quoteId)
      return [...state.slice(0, idx), myquote, ...state.slice(idx + 1) ]

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    default:
      return state
  }
}
