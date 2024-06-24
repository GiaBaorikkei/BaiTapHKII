import {
    DashboardOutlined,
    UserOutlined,
    MoneyCollectOutlined,
    LineChartOutlined,
    FileOutlined,
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { functionShow } from "../store/reducers/function";

export default function Function() {
    const state: any = useSelector((state) => state);
    const dispatch = useDispatch();
  return (
    <div>Bài 5
        <div
      className={`${
        state.functionShow === true ? "w-[200px]" : "w-[50px]"
      } bg-slate-700 text-white p-4 flex flex-col gap-4`}
    >
      <div className="h-[30px] flex items-center gap-3">
        <DashboardOutlined />
        <div>{state.functionShow === true ? "Bảng điều khiển" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <UserOutlined />
        <div>{state.functionShow === true ? "Tài khoản" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <MoneyCollectOutlined />
        <div>{state.functionShow === true ? "Tài sản" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <LineChartOutlined />
        <div>{state.functionShow === true ? "Thống kê" : ""}</div>
      </div>
      <div className="h-[30px] flex items-center gap-3">
        <FileOutlined />
        <div>{state.functionShow === true ? "Tài liệu" : ""}</div>
      </div>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => dispatch(functionShow())}
      >
        {state.functionShow === true ? (
          <div className="h-[30px] flex items-center gap-3">
            <LeftOutlined />
            <div>Thu gọn</div>
          </div>
        ) : (
          <div className="h-[30px]">
            <RightOutlined />
          </div>
        )}
      </div>
    </div>
    </div>
  )
}
