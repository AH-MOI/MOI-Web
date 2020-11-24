import React, { useState } from 'react';
import "./LogModal.scss";

const LogModal = (props) => {
    const { modal } = props;
    const { setModal } = props;

    const [logMode, setLogMode] = useState(true);

    return (
        <div className="modal-wrap">
            <div className="overlay" onClick={() => {setModal(false)}}></div>
            <div className="modal-container">
                <div className="modal-header">
                    <p className="modal-header-text">{logMode ? "로그인" : "회원가입"}</p>
                </div>
                
                {logMode ?    
                <form className="modal-body">
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">아이디</label>
                        <input type="text" className="login-input" placeholder="아이디"/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">비밀번호</label>
                        <input type="password" className="login-input" placeholder="비밀번호"/>
                    </div>
                    <div className="login-wrap btn-wrap">
                        <button className="login-btn" type="submit">로그인 하기</button>
                    </div>
                    <div className="login-wrap register-text">
                        <span className="non-register">계정이 없으시다면?</span>
                        <button className="register" onClick={() => {setLogMode(false)}}>회원가입</button>
                    </div>
                </form> : 
                <form className="modal-body">
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">아이디</label>
                        <input type="text" className="login-input" placeholder="아이디"/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">비밀번호</label>
                        <input type="password" className="login-input" placeholder="비밀번호"/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">비밀번호확인</label>
                        <input type="password" className="login-input" placeholder="비밀번호확인"/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">이름</label>
                        <input type="text" className="login-input" placeholder="이름"/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">생년월일</label>
                        <input type="date" className="login-input" />
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">학교</label>
                        <div className="school-radio-wrap">
                            <div className="login-radio-wrap">
                                <span className="login-radio-span">광주</span>
                                <input type="radio" className="login-input login-radio" name="school"/>
                            </div>
                            <div className="login-radio-wrap">
                                <span className="login-radio-span">대구</span>
                                <input type="radio" className="login-input login-radio" name="school"/>
                            </div>
                            <div className="login-radio-wrap">
                                <span className="login-radio-span">대덕</span>
                                <input type="radio" className="login-input login-radio" name="school"/>
                            </div>
                        </div>
                    </div>
                    <div className="login-wrap btn-wrap">
                        <button className="login-btn" type="submit">회원가입</button>
                    </div>
                    <div className="login-wrap register-text">
                        <span className="non-register">계정이 있으시다면?</span>
                        <button className="register" onClick={() => {setLogMode(true)}}>로그인</button>
                    </div>
                </form>
                }
            </div>
        </div>
    );
};

export default LogModal;