import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AdminDropdownMenu, AdminTopMenu, BeauticianDropdownMenu, BeauticianTopMenu, UserDropdownMenu, UserTopMenu } from '../Data/Navdata'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/features/userSlice'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector(state => state.user)
    //For Logout
    const handleLogout = () => {
        localStorage.clear()
        dispatch(logoutUser());
        navigate('/')
    }
    //render navbar according to roles
    const role = user && user.role !== undefined ? user.role : 0;
    let TopMenu;
    let DropdownMenu;

    switch (role) {
        case 0:
            TopMenu = UserTopMenu;
            DropdownMenu = UserDropdownMenu;
            break;
        case 1:
            TopMenu = AdminTopMenu;
            DropdownMenu = AdminDropdownMenu;
            break;
        case 2:
            TopMenu = BeauticianTopMenu;
            DropdownMenu = BeauticianDropdownMenu;
            break;
        default:
            TopMenu = UserTopMenu;
            DropdownMenu = UserDropdownMenu;
            break;
    }

    return (
        <>
            <header className="p-3">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            {TopMenu.map(menu => {
                                return (
                                    <>
                                        <li><Link to={menu.path} className="nav-link px-2 link-body-emphasis">{menu.name}</Link></li>
                                    </>
                                )
                            })}
                        </ul>
                        <Link to='/notification'>
                            <div className="position-relative mx-2">
                                <i className="fa-solid fa-bell fa-xl"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {user && user.notification.length}
                                </span>
                            </div>
                        </Link>
                        <p className='mx-2 my-0' style={{cursor:'pointer'}}>
                            {user?.name}
                        </p>
                        <div className="dropdown text-end mx-2">
                            <Link to="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://i.pinimg.com/564x/3d/cd/4a/3dcd4af5bc9e06d36305984730ab7888.jpg" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </Link>
                            <ul className="dropdown-menu text-small">

                                {DropdownMenu.map(menu => {
                                    return (
                                        <>
                                            <li><Link className="dropdown-item" to={menu.path}><i className={menu.icon}></i>{menu.name}</Link></li>
                                        </>
                                    )
                                })}
                                {role === 2 && (
                                    <>
                                        <li>
                                            <Link className="dropdown-item" to={`/viewbprofile`}>
                                                <i className="fa-solid fa-user"></i> Profile
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                    </>
                                )}
                                
                                <li onClick={handleLogout}>
                                    <Link className="dropdown-item" to="/login">
                                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header