import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function Bai8() {
  return (
    <div>
        Bai8 <br />
        <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
        >
        <Tab eventKey="home" title="Trang chủ">
            Đây là trang chủ
        </Tab>
        <Tab eventKey="profile" title="Giới thiệu">
            Đây là trang giới thiệu
        </Tab>
        <Tab eventKey="longer-tab" title="Liên hệ">
            Đây là trang liên hệ
        </Tab>
        </Tabs>
    </div>
  )
}
