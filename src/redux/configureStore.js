import { createStore, combineReducers } from 'redux';
import { Leaders } from './leaders';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })
    );

    return store;
}