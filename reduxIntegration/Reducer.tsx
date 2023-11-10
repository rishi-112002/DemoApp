import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state: { value: number }) => {
            state.value += 1
        },
        decrement: (state: { value: number }) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    }
})

export const insertSlice = createSlice({
    name: 'insert',
    initialState: {
        number: 0
    },
    reducers: {
        inputNumber: (state, action:PayloadAction<any>) => {
            state.number = action.payload
        }
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { inputNumber } = insertSlice.actions
