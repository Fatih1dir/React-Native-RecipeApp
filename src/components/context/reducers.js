export default function (state, action) {
    switch (action.type) {
        case 'ADD_INGREDIENT2LIST':
            const { name } = action.payload;
            if (state.ingredientList.includes(name)) {
                return state;
            }
            const newList = [...state.ingredientList, name];
            return {...state, ingredientList: newList}

        default:
            return state;
    }
}
