import { ActionTypes } from '../Constants/ActionTypes'
import { FavoriteState, WeatherActions, WeatherData } from '../types'

const initialState: FavoriteState = {
  favItems: <Array<WeatherData | null>>[],
}

const favoriteReducer = (
  state: FavoriteState = initialState,
  action: WeatherActions
) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favItems: [...state.favItems, action.payload],
      }
    case ActionTypes.REMOVE_FROM_FAVORITES:
      console.log('identify the id ', action.payload.id)
      return {
        ...state,
        favItems: [
          ...state.favItems.filter(
            (details: WeatherData | null) =>
              details && details.id !== action.payload.id
          ),
        ],
      }

    default:
      return state
  }
}

export default favoriteReducer
