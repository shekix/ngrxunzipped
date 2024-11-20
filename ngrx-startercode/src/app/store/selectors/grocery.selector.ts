import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";




//export const selectGroceries = (state:{groceries:Grocery[]})=>state.groceries
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceryType =(type:string)=> createSelector(
    selectGroceries,
    (state)=>{
        return state.filter(item => item.type === type)
    }
)