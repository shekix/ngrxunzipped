import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


export const groceryAction = createActionGroup({
    source:"Grocery Api",
    events:{
        'Load groceries':emptyProps(),
        'Load groceries Success':props<{payload:Grocery[]}>(),
        'Load groceris Failure':emptyProps()
}
})

