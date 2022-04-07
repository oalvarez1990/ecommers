import axios from "axios";
import { setCart } from "./cartActions";
import { setIsLoading } from "./appActions";
import { getConfig } from "utils";


export const purchasesActions = {
    setPurchases: "SET_PURCHASES"
}

export const setPurchases = purchases => ({
    type: purchasesActions.setPurchases,
    payload: purchases
})

export const purchaseCartThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getConfig())
            .then(() => {
                dispatch(setCart([]));
                dispatch(getPurchasesThunk());
            })
            .finally(() => dispatch(setIsLoading(false)));
    }
}

export const getPurchasesThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true));
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
            .then(res => dispatch(setPurchases(res.data.data.purchases)))
            .finally(() => dispatch(setIsLoading(false)));
    }
}
