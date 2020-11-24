import { INFO } from 'lib/requestUrl';
import { ACCESS_TOKEN, ACCESS_TOKEN_NAME, BASE_URL_LIST, checkIsLogin, methodType, requestApiWithoutBodyWithToken, Logout   , requestApiWithBodyWithToken } from 'lib/requestApi';  
import React, { useCallback, useEffect, useState } from 'react';
import "./UserProfile.scss";

const UserProfile = (props) => {
    const {userInfo: info }=  props;
    const [userInfo, setUserInfo] = useState({
        area: info.area,
        birthday: info.birthday,
        github: info.github,
        hashtag: info.hashtag,
        id: info.id,
        name: info.name,
        phoneNumber: info.phoneNumber,
        profile: info.profile,
        school: info.school,
        star: info.star
    })

    const [modal, setModal] = useState(false);
    const [modify, setModify] = useState(false);
    const [initState, setInitState] = useState({area: userInfo.area, github: userInfo.github, hashTag: userInfo.github, phoneNumber: userInfo.phoneNumber, profile: userInfo.profile});

    useEffect(() => {
        try {
            
            const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
            const res = requestApiWithoutBodyWithToken(BASE_URL_LIST.BLUE, methodType.GET, INFO.getUserInfo(), {
                headers: {
                    [ACCESS_TOKEN_NAME]: accessToken
                }
            })

            res.then(res => { setUserInfo({...res.data})});

        } catch (err) {
            console.log(err);
        }
    }, []);

    const onUserInfoChange = useCallback((name, e) => {
        setUserInfo({ ...userInfo, [name]: e.target.value });
    }, [userInfo]);

    const showModal = useCallback(() => {
        setModal(true);
    }, [modal]);

    const dropModal= useCallback(() => {
        setModal(false);
    }, [modal])

    console.log(userInfo);  
    
    const onSaveClick = async() => {
        try{
            const ress = await requestApiWithBodyWithToken(BASE_URL_LIST.BLUE, methodType.PATCH, INFO.putStd(), {
                area: userInfo.area,
                github: userInfo.github,
                profile: userInfo.profile,
                hashtag: userInfo.hashtag,
                phoneNumber: userInfo.phoneNumber,
            })

            alert("저장되었습니다.");
            setModify(false);
            
            setInitState({area: userInfo.area, github: userInfo.github, hashTag: userInfo.github, phoneNumber: userInfo.phoneNumber, profile: userInfo.profile});
            
        } catch {
            alert("저장에 실패했습니다.")
        }
    };

    const onSaveCancleClick = useCallback(() => {
        setUserInfo({ ...userInfo, ...initState });
        setModify(!modify);
    }, [userInfo])

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
                            <span>{userInfo.name}</span>
                        </div>
                        <div className="user-modal-item-wrap">
                            <span>아이디</span>
                            <span>{userInfo.id}</span>
                        </div>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>학교</span>
                        <span>{`${userInfo.school}소프트웨어마이스터고등학교`}</span>
                    </div>  
                </div>
                <div className="user-modal-wrap contact-wrap">
                    <label htmlFor="">연락 정보</label>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>전화번호</span>
                        <input type="tel" value={userInfo.phoneNumber} onChange={(e) => onUserInfoChange("phoneNumber",e )} placeholder="전화번호를 입력하세요"/>
                    </div>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>Github</span>
                        <input type="url" value={userInfo.github} onChange={(e) => onUserInfoChange("github",e )} placeholder="깃허브 주소를 입력하세요."/>
                    </div>
                </div>
                <div className="user-modal-wrap major-wrap">
                    <label htmlFor="">전공</label>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>분야</span>
                        <input type="text" value={userInfo.area} onChange={(e) => onUserInfoChange("area",e )} placeholder="전공분야를 입력하세요." />
                    </div>
                    <div className="modifiable-user-modal-item-wrap user-modal-item-wrap">
                        <span>기술스택</span>
                        <input type="text" value={userInfo.hashtag} onChange={(e) => onUserInfoChange("hashtag",e )} placeholder="기술스택을 입력하세요" />
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
                            <span>{userInfo.name}</span>
                        </div>
                        <div className="user-modal-item-wrap">
                            <span>아이디</span>
                            <span>{userInfo.id}</span>
                        </div>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>학교</span>
                        <span>{`${userInfo.school}소프트웨어마이스터고등학교`}</span>
                    </div>
                </div>
                <div className="user-modal-wrap contact-wrap">
                    <label htmlFor="">연락 정보</label>
                    <div className="user-modal-item-wrap">
                        <span>전화번호</span>
                        <span>{userInfo.phoneNumber}</span>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>Github</span>
                        <a href={userInfo.github}>{userInfo.github}</a>
                    </div>
                </div>
                <div className="user-modal-wrap major-wrap">
                    <label htmlFor="">전공</label>
                    <div className="user-modal-item-wrap">
                        <span>분야</span>
                        <span>{userInfo.area}</span>
                    </div>
                    <div className="user-modal-item-wrap">
                        <span>기술스택</span>
                        <span>{userInfo.hashtag}</span>
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
