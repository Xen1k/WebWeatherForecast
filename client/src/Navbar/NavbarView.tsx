import { Navbar, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchFormController from '../Search/SearchForm/SearchFormController';
import "./Navbar.css";

const NavbarView = (): JSX.Element => (
    <Navbar collapseOnSelect expand='lg' bg={'dark'} variant={'dark'}>
        <Navbar.Brand className="navbar-title"> Xenik Weather </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse>
            <Nav>
                <Nav.Link className="d-lg-none navlink-container" as={Link} to="/search">Поиск</Nav.Link>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Погода в популярных городах</Tooltip>}
                >
                    <Nav.Link className="navlink-container" as={Link} to="/trending">Популярные</Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Информация о создателе сайта</Tooltip>}
                >
                    <Nav.Link className="navlink-container" as={Link} to="/info">Информация</Nav.Link>
                </OverlayTrigger>
            </Nav>
            <div className="d-none d-lg-block" style={{ width: '100%' }} >
                <SearchFormController
                    inputStyle={{ width: 230, marginRight: '1%' }}
                    style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', paddingRight: '2%' }}
                />
            </div>
        </Navbar.Collapse>
    </Navbar >
)

export default NavbarView;