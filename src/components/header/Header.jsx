import Modal from 'components/header/logModal/LogModal';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.scss";
import UserProfile from './userProfile/UserProfile';

const activeStyle = {
    color: "#ffffff",
    fontSize: "18px"
}

const Header = () => {
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);
    
    const dropRef = useRef();

    const ClickHandle = (event) => {
        if (!event.target.closest(`.${dropRef.current.className}`) && open) {
            setOpen(false);
        }
      }

    useEffect(() => {
        window.addEventListener("click", ClickHandle);

        return () => {
            window.removeEventListener("click", ClickHandle);
        }
    })

    const isLogin = true;
    

    return (
        <div className="header-container" ref={dropRef}>
            <p className="logo-text header-item">MOI</p>
            <div></div>
            <NavLink to={"/"} className="header-link header-item" activeStyle={activeStyle}>
                프로젝트 찾기
            </NavLink>            
            <NavLink to={"/1"} className="header-link header-item" activeStyle={activeStyle}>
                개발자 찾기
            </NavLink>            
            <NavLink to={"/2"} className="header-link header-item" activeStyle={activeStyle}>
                프로젝트 현황
            </NavLink>
            <div></div>
            {isLogin ? 
                <div className="user-wrap header-item" onClick={() => setOpen(open => !open)}>
                    <img src="" className="user-img" />
                    <p className="user-name">{"유시온"}</p>
                </div> : 
                <button onClick={() => {setModal(true)}} className="header-login-btn header-item">
                    로그인
                </button>}
            {modal && <Modal modal={modal} setModal={setModal} />}
            {open && <UserProfile />}
        </div>
    );
};

export default Header;