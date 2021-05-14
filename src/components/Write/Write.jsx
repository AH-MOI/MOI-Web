import React from "react";
import { GrFormClose } from "react-icons/gr";
import "./Write.scss";
import { ReactComponent as Option } from "../../assets/images/option.svg";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import WriteSelectBox from "./WriteSelectBox/WriteSelectBox";
import { techs } from "../../models/techs";
import { withRouter } from "react-router-dom";

const Write = ({
  tag,
  setTag,
  keyPressListener,
  hashTag,
  removeHashTag,
  setTitle,
  setContent,
  date,
  setDate,
  selectedItem,
  setSelectedItem,
  removeSelectedItem,
  show,
  setShow,
}) => {
  const person = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];
  return (
    <>
      <div className="Write">
        <div className="Write-Container">
          <input
            type="text"
            className="Write-Container-Title"
            placeholder="제목을 입력해주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="Write-Container-HashTag">
            <div className="Write-Container-HashTag-Show">
              {hashTag.map((value, idx) => (
                <div key={idx} className="Write-Container-HashTag-Show-Item">
                  <span>{value}</span>
                  <GrFormClose onClick={() => removeHashTag(value)} />
                </div>
              ))}
            </div>
            <input
              value={tag}
              type="text"
              className="Write-Container-HashTag-Insert"
              placeholder="태그를 입력해주세요"
              onChange={(e) => setTag(e.target.value)}
              onKeyPress={(e) => keyPressListener(e)}
            />
          </div>
          <textarea
            type="text"
            className="Write-Container-Content"
            placeholder="내용을 입력해주세요"
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="Write-Container-Info">
            <div className="Write-Container-Info-top">
              <div className="Write-Container-Info-top-Date">
                <p>날짜 선택</p>
                <DatePicker
                  locale={ko}
                  dateFormat="yyyy-MM-dd"
                  className="Write-Container-Info-top-Date-Picker"
                  minDate={new Date()}
                  closeOnScroll={true}
                  placeholderText="날짜를 선택해주세요"
                  selected={date}
                  onChange={(_date) => setDate(_date)}
                />
              </div>
              <div className="Write-Container-Info-top-Member">
                <p>인원 설정</p>
                <div
                  className="Write-Container-Info-top-Member-Select"
                  onClick={() => setShow(true)}
                >
                  <span>기술 스택</span>
                  <Option />

                  {show && (
                    <WriteSelectBox
                      item={techs}
                      setShow={setShow}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
                      removeSelectedItem={removeSelectedItem}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="Write-Container-Info-hashTag">
              {selectedItem.map((menu, idx) => (
                <div className="Write-Container-Info-hashTag-selecMenu">
                  <span key={idx}>{menu}</span>
                  <select
                    onChange={(e) => {
                      setChangeCount(e.target.value);
                      setCount(idx);
                      let data = {
                        number: e.target.value,
                        menu: menu,
                        idx: idx,
                      };
                      setAll([...all, data]);
                    }}
                  >
                    {person.map((person, _idx) => (
                      <option key={_idx} value={person}>
                        {person}
                      </option>
                    ))}
                  </select>
                  <GrFormClose onClick={() => removeSelectedItem(menu)} />
                </div>
              ))}
            </div>
          </div>
          <div className="createButton">
            <span
              onClick={() => {
                history.push("/");
              }}
            >
              작성하기
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Write);
