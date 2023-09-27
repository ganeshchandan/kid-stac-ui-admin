import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/manageUsers">Users</Nav.Link>
      <Nav.Link href="/manageVendors">Vendors</Nav.Link>
      <Nav.Link href="/manageCategory">Category</Nav.Link>
      <Nav.Link href="/manageEvents">Events</Nav.Link>
    </Nav>
  );
};

export default Navigation;
