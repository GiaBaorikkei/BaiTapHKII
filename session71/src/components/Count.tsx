import { useDispatch, UseDispatch, useSelector, UseSelector} from "react-redux"
import { decrease, increase, reset } from "../store/reducers/countReducer"
export default function Count() {
    const state:any = useSelector(state => state)
    const dispatch = useDispatch();
  return (
    <div>Bài 1
        <p>Giá trị count: {state.count}</p>
        <button onClick={()=>dispatch(increase())}>tăng</button>
        <button onClick={()=>dispatch(decrease())}>giảm</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}
