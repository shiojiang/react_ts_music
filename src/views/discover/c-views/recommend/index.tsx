import type { ReactNode } from 'react'
import { memo, FC } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector, useAppDispatch } from '@/store'
import { increment, decrement } from '@/store/modules/counter'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // test react-redux
  const { count, message } = useAppSelector(
    (state: any) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()

  const handleIncrement = (num: number) => () => {
    dispatch(increment(num))
  }

  const handleDecrement = (num: number) => () => {
    dispatch(decrement(num))
  }

  return (
    <div>
      <div>Recommend</div>
      <br />
      <button onClick={handleIncrement(1)}>+1</button>
      <button onClick={handleDecrement(1)}>-1</button>
      <div>{count}</div>
      <div>{message}</div>
    </div>
  )
}

export default memo(Recommend)
