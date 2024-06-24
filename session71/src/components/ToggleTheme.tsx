import { useDispatch, UseDispatch,useSelector } from "react-redux"
import { check } from "../store/reducers/toggleTheme";

export default function ToggleTheme() {
  const state: any = useSelector((state)=>state);
  const dispatch = useDispatch();
  return (
    <div>Bài 3
       <div
      className={`w-[250px] h-[250px] ${
        state.check === true ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col items-center justify-center gap-5`}
    >
      <input onChange={() => dispatch(check())} type="checkbox" />
      <p>{state.check === true ? "Tối" : "Sáng"}</p>
    </div>
    </div>
  )
}
