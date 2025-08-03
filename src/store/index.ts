import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import counterReducer from '@/store/modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type GetStateFnType = () => typeof store.getState
type IRootState = ReturnType<GetStateFnType> // 拿到返回值类型
type DispatchType = typeof store.dispatch // 函数类型

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export const useAppDispatch: () => DispatchType = useDispatch

export default store
