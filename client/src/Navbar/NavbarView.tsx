import { Navbar, Nav, Form, OverlayTrigger, Tooltip, Button, Col } from 'react-bootstrap';
import "./Navbar.css";

const NavbarView = (): JSX.Element => (
    <Navbar collapseOnSelect expand='lg' bg={'dark'} variant={'dark'}>
        <Navbar.Brand className="navbar-title"> Xenik Weather </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse>
            <Nav>
                <Nav.Link className="d-lg-none navlink-container" href="/search">Поиск</Nav.Link>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Погода в популярных городах</Tooltip>}
                >
                    <Nav.Link className="navlink-container" href="/trending">Популярные</Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Информация о создателе сайта</Tooltip>}
                >
                    <Nav.Link className="navlink-container" href="/info">Информация</Nav.Link>
                </OverlayTrigger>
            </Nav>
            <Form className="d-none d-lg-block" style={{ width: '100%' }} >
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', paddingRight: '2%' }}>
                    <Form.Control style={{ width: 230, marginRight: '2%' }} name='city' type='text' placeholder="Введите город" />
                    <Button variant="primary" type="submit"> Искать </Button>
                </div>
            </Form>
        </Navbar.Collapse>
    </Navbar >
)

export default NavbarView;