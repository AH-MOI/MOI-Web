import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_NAME,
  BASE_URL_LIST,
  checkIsLogin,
  methodType,
  requestApiWithoutBodyWithToken,
} from "../../lib/requestApi";
import { INFO } from "lib/requestUrl";
import Modal from "components/header/logModal/LogModal";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import UserProfile from "./userProfile/UserProfile";
import PNG from "../../assets/images/CutyApple.png";
const activeStyle = {
  color: "#ffffff",
  fontSize: "18px",
};

const Header = () => {
  const [userInfo, setUserInfo] = useState({
    area: "",
    birthday: "",
    github: "",
    hashtag: "",
    id: "",
    introduce: "",
    name: "",
    phoneNumber: "",
    profile: "",
    school: "",
    star: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);

  const dropRef = useRef();

  function handleClick(e) {
    if (!e.target.closest(`.${dropRef.current.className}`) && open) {
      setOpen(false);

      const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
      const res = requestApiWithoutBodyWithToken(
        BASE_URL_LIST.BLUE,
        methodType.GET,
        INFO.getUserInfo(),
        {
          headers: {
            [ACCESS_TOKEN_NAME]: accessToken,
          },
        }
      );

      res.then((res) => {
        setUserInfo({ ...res.data });
      });
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  useEffect(() => {
    checkIsLogin().then((isLogin) => {
      setIsLogin(isLogin);
    });

    const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
    const res = requestApiWithoutBodyWithToken(
      BASE_URL_LIST.BLUE,
      methodType.GET,
      INFO.getUserInfo(),
      {
        headers: {
          [ACCESS_TOKEN_NAME]: accessToken,
        },
      }
    );

    res.then((res) => {
      setUserInfo({ ...res.data });
    });
  }, []);

  return (
    <div className="header-container" ref={dropRef}>
      <p className="logo-text header-item">MOI</p>
      <div></div>
      <NavLink
        exact
        to={"/"}
        className="header-link header-item"
        activeStyle={activeStyle}
      >
        프로젝트 찾기
      </NavLink>
      <NavLink
        exact
        to={"/devFind"}
        className="header-link header-item"
        activeStyle={activeStyle}
      >
        개발자 찾기
      </NavLink>
      <NavLink
        exact
        to={"/progress"}
        className="header-link header-item"
        activeStyle={activeStyle}
      >
        프로젝트 현황
      </NavLink>
      <div></div>
      {isLogin ? (
        <div
          className="user-wrap header-item"
          onClick={() => setOpen((open) => !open)}
        >
          <div className="user-img"></div>
          <p className="user-name">{userInfo.name}</p>
        </div>
      ) : (
        <button
          onClick={() => {
            setModal(true);
          }}
          className="header-login-btn header-item"
        >
          로그인
        </button>
      )}
      {modal && <Modal modal={modal} setModal={setModal} />}
      {open && <UserProfile userInfo={userInfo} />}
    </div>
  );
};

export default Header;
