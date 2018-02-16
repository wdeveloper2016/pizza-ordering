let id = 0;

export default function reducer(state, action) {
  if (action.type === 'ADD_TO_CART') {
    return {
      items: [
        ...state.items,
        {
          id: id++,
          ...action.payload,
        },
      ],
    };
  } else if (action.type === 'REMOVE_FROM_CART') {
    return {
      items: state.items.filter(item => item.id !== action.payload),
    };
  }

  return state;
}
