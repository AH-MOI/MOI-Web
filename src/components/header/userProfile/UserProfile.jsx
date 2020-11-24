import Axios from 'axios';
import { Logout } from 'lib/requestApi';
import React, { useCallback, useEffect, useState } from 'react';
import "./UserProfile.scss";

const UserProfile = () => {
    const [modal, setModal] = useState(false);
    const [modify, setModify] = useState(false);
    const [tel, setTel] = useState("010-0000-0000");
    const [git, setGit] = useState("https://github.com/cutyapple");
    const [field, setFiled] = useState("Frontend");
    const [stack, setStack] = useState("#React");
    const [initState, setInitState] = useState({tel, git, field, stack});

    useEffect(()=>{
        // Axios.get("https://localhost:8888/")
    }, [])

    const showModal = useCallback(() => {
        setModal(true);
    }, [modal]);

    const dropModal= useCallback(() => {
        setModal(false);
    }, [modal])

    const onTelChange = useCallback((e) => {
        setTel(e.target.value);
    }, [tel])

    const onGitChange = useCallback((e) => {
        setGit(e.target.value);
    }, [git]);

    const onFieldChange = useCallback((e) => {
        setFiled(e.target.value);
    }, [field])

    const onStackChange = useCallback((e) => {
        setStack(e.target.value);
    }, [stack]);
    
    const onSaveClick = useCallback(() => {
        try{
            
            alert("저장되었습니다.");
            setModify(false);
            setInitState(tel, git, field, stack);
        } catch {
            alert("저장에 실패했습니다.")
        }
    }, [modify]);

    const logout = () => {
        alert("로그아웃되었습니다.")
        dropModal();
    }

    const onSaveCancleClick = useCallback(() => {
        setTel(initState.tel);
        setGit(initState.git);
        setFiled(initState.field);
        setStack(initState.stack);
        setModify(!modify);
    }, [tel, git, field, stack, modify])

    const onModifyClick = useCallback(() => {
        setModify(!modify);
    }, [modify]);

    return (
        <div className="user-modal" >
            {modify ? 
            <>
                <div className="user-modal-wrap profile-wrap">
                    <label>프로필</label>
                    <div className="user-modal-item-wrap user-profile-wrap">
                        <span>프로필</span>
                        <img src="" className="user-profile" />
                    </div>
                    <div className="user-modal-grid">
                        <div className="user-modal-item-wrap">
                            <span>이름</span>
                            <span>{"유시온"}</span>
                        </div>
                        <div className="user-modal-item-wrap">
                            <span>아이디</span>
                            <span>{"cutyapple"}</span>
                        </div>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>학교</span>
                        <span>{"대덕소프트웨어마이스터고등학교"}</span>
                    </div>
                </div>
                <div className="user-modal-wrap contact-wrap">
                    <label htmlFor="">연락 정보</label>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>전화번호</span>
                        <input type="tel" value={tel} onChange={onTelChange} placeholder="전화번호를 입력하세요"/>
                    </div>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>Github</span>
                        <input type="url" value={git} onChange={onGitChange} placeholder="깃허브 주소를 입력하세요."/>
                    </div>
                </div>
                <div className="user-modal-wrap major-wrap">
                    <label htmlFor="">전공</label>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>분야</span>
                        <input type="text" value={field} onChange={onFieldChange} placeholder="전공분야를 입력하세요." />
                    </div>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>기술스택</span>
                        <input type="text" value={stack} onChange={onStackChange} placeholder="기술스택을 입력하세요" />
                    </div>
                </div>
                <div className="footer">
                    <button className="modify-save footer-btn" onClick={onSaveClick}>저장</button>
                    <button className="modify-cancle footer-btn" onClick={onSaveCancleClick}>취소</button>
                </div>
            </> :
            <>
                <div className="user-modal-wrap profile-wrap">
                    <label>프로필</label>
                    <div className="none-modify-user-modal-item-wrap user-modal-item-wrap user-profile-wrap">
                        <span>프로필</span>
                        <img src="" className="user-profile" />
                    </div>
                    <div className="user-modal-grid">
                        <div className="user-modal-item-wrap">
                            <span>이름</span>
                            <span>유시온</span>
                        </div>
                        <div className="user-modal-item-wrap">
                            <span>아이디</span>
                            <span>cutyapple</span>
                        </div>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>학교</span>
                        <span>대덕소프트웨어마이스터고등학교</span>
                    </div>
                </div>
                <div className="user-modal-wrap contact-wrap">
                    <label htmlFor="">연락 정보</label>
                    <div className="user-modal-item-wrap">
                        <span>전화번호</span>
                        <span>{tel}</span>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>Github</span>
                        <a href={git}>{git}</a>
                    </div>
                </div>
                <div className="user-modal-wrap major-wrap">
                    <label htmlFor="">전공</label>
                    <div className="user-modal-item-wrap">
                        <span>분야</span>
                        <span>{field}</span>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>기술스택</span>
                        <span>{stack}</span>
                    </div>
                </div>
                <div className="footer">
                    <button className="modify footer-btn" onClick={onModifyClick}>수정</button>
                    <button className="logout-btn footer-btn" onClick={showModal}>로그아웃</button>
                </div>
                {modal && <div className="modal-background">
                    <div className="modal-overlay" onClick={dropModal}/>
                    <div className="save-cancle-modal">
                        <p className="save-cancle-modal-text">정말 로그아웃하시겠습니까?</p>
                        <div className="save-cancle-button-wrap">
                            <button onClick={Logout}>네</button>
                            <button onClick={dropModal}>아니요</button>
                        </div>
                    </div>
                </div>}
            </>
            }       
        </div>
    );
};

export default UserProfile;
