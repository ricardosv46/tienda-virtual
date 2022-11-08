import {
  TypedUseSelectorHook,
  useSelector as useAppSelector,
  useDispatch as useAppDispatch
} from 'react-redux'
import { Appdispatch, RootState } from '../store'

export const useDispatch = () => useAppDispatch<Appdispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector
