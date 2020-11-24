import React, { useCallback, useState } from 'react';
import { AUTH } from 'lib/requestUrl';
import { ACCESS_TOKEN, REFRESH_TOKEN, BASE_URL_LIST, methodType, requestApiWithBodyWithoutToken } from 'lib/requestApi';
import "./LogModal.scss";

const LogModal = (props) => {
    const [log, setLog] = useState({
        id: "",
        password: "",
        confirmPassword: "",
        name: "",
        birthday: "",
        school: ""
    })

    const onChange = useCallback((name, e) => {
        setLog({...log, [name]: e.target.value});
    }, [log])


    const { modal } = props;
    const { setModal } = props;

    const [logMode, setLogMode] = useState(true);

    const onSubmit = async(e) => {
        e.preventDefault();

        if(!!logMode) {
            try {
                const res = await requestApiWithBodyWithoutToken(BASE_URL_LIST.BLUE, methodType.POST, AUTH.login(), {
                    id: log.id,
                    password: log.password
                });

                window.localStorage.setItem(ACCESS_TOKEN, res.data[ACCESS_TOKEN]);
                window.localStorage.setItem(REFRESH_TOKEN, res.data[REFRESH_TOKEN]);

                alert("로그인에 성공했습니다.")
                setModal(false);
            } catch(err) {
                switch (err.status) {
                    case 404: {
                        alert("아이디 또는 비밀번호가 틀렸습니다.");
                        break;
                    }
                    default: {}
                }
            }
        } else {
            try {
                const res = await requestApiWithBodyWithoutToken(BASE_URL_LIST.BLUE, methodType.POST, AUTH.register(), {
                    id: log.id,
                    password: log.password,
                    confirmPassword: log.confirmPassword,
                    name: log.name,
                    birthday: log.birthday,
                    school: log.school
                });

                alert("회원가입에 성공했습니다.")
                setModal(false);
            } catch(err) {
                switch (err.status) {
                    case 400: {
                        alert("입력 정보가 잘못되었습니다.");
                        break;
                    }
                    default: {}
                }
            }
        }
    }

    return (
        <div className="modal-wrap">
            <div className="overlay" onClick={() => {setModal(false)}}></div>
            <div className="modal-container">
                <div className="modal-header">
                    <p className="modal-header-text">{logMode ? "로그인" : "회원가입"}</p>
                </div>
                {logMode ?    
                <form className="modal-body" onSubmit={onSubmit}>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">아이디</label>
                        <input type="text" className="login-input" placeholder="아이디" onChange={(e) => onChange("id", e)} value={log.id}/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">비밀번호</label>
                        <input type="password" className="login-input" placeholder="비밀번호" onChange={(e) => onChange("password", e)} value={log.password}/>
                    </div>
                    <div className="login-wrap btn-wrap">
                        <button className="login-btn" type="submit">로그인 하기</button>
                    </div>
                    <div className="login-wrap register-text">
                        <span className="non-register">계정이 없으시다면?</span>
                        <button className="register" onClick={() => {setLogMode(false)}}>회원가입</button>
                    </div>
                </form> : 
                <form className="modal-body" onSubmit={onSubmit}>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">아이디</label>
                        <input type="text" className="login-input" placeholder="아이디" onChange={(e) => onChange("id", e)} value={log.id}/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">비밀번호</label>
                        <input type="password" className="login-input" placeholder="비밀번호" onChange={(e) => onChange("password", e)} value={log.password}/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">비밀번호확인</label>
                        <input type="password" className="login-input" placeholder="비밀번호확인" onChange={(e) => onChange("confirmPassword", e)} value={log.confirmPassword}/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">이름</label>
                        <input type="text" className="login-input" placeholder="이름" onChange={(e) => onChange("name", e)} value={log.name}/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">생년월일</label>
                        <input type="date" className="login-input" onChange={(e) => onChange("birthday", e)} value={log.birthday}/>
                    </div>
                    <div className="login-wrap">
                        <label htmlFor="login-input" className="login-label">학교</label>
                        <div className="school-radio-wrap">
                            <div className="login-radio-wrap">
                                <span className="login-radio-span">광주</span>
                                <input type="radio" className="login-input login-radio" name="school" onClick={(e) => onChange("school", e)} value={"광주"}/>
                            </div>
                            <div className="login-radio-wrap">
                                <span className="login-radio-span">대구</span>
                                <input type="radio" className="login-input login-radio" name="school" onClick={(e) => onChange("school", e)} value={"대구"}/>
                            </div>
                            <div className="login-radio-wrap">
                                <span className="login-radio-span">대덕</span>
                                <input type="radio" className="login-input login-radio" name="school" onClick={(e) => onChange("school", e)} value={"대덕"}/>
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