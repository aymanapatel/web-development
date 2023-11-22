import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * createSlice: API fn for Redux Logic
 * PayLoadAction: TS type for contents of object
 */
interface AymanCounterState {
  value: number;
}

const initialState: AymanCounterState = {
  value: 120
};

/**
 * `createSlice` will automagically create state of name: `<name>/<reducer-name>` 
 * Example: `counter/incremented`
 */
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      /*
      Normally Redux Reducer w/o return
      // This return is immutable. 
      return {
         ...state
      }
      */
      state.value++; // IMMR Library makes it possible to do the above return immutability
    },
    // decrement

    // reset

    // amountAdded
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
  }
});


/**
 * Actions
 * @param: incremented: ActionCreatorWithoutPayload<string>
 * @param amountAdded:
 */
export const { incremented, amountAdded} = counterSlice.actions;

/**
 * Reducer
 */
export default counterSlice.reducer;
