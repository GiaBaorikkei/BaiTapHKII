import { Nav } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="bg-light vh-100 p-3">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Dashboard</Nav.Link>
        <Nav.Link eventKey="link-1">Commmerce</Nav.Link>
        <Nav.Link eventKey="link-2">Analytics</Nav.Link>
        <Nav.Link eventKey="link-3">Crypto</Nav.Link>
        <Nav.Link eventKey="link-4">Helpdesk</Nav.Link>
        <Nav.Link eventKey="link-5">Monitoring</Nav.Link>
        <Nav.Link eventKey="link-6">Fitness</Nav.Link>
        <Nav.Link eventKey="link-7">Application</Nav.Link>
        <Nav.Link eventKey="link-8">Elements</Nav.Link>
        <Nav.Link eventKey="link-9">Forms</Nav.Link>
        <Nav.Link eventKey="link-10">Plugins</Nav.Link>
        <Nav.Link eventKey="link-11">Datagrid</Nav.Link>
        <Nav.Link eventKey="link-12">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;