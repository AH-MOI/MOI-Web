import React from "react";
import { GrFormClose } from "react-icons/gr";
import "./Write.scss";
import { ReactComponent as Option } from "../../assets/images/option.svg";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import WriteSelectBox from "./WriteSelectBox/WriteSelectBox";
import { techs } from "../../models/techs";

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
            <div className="Write-Container-Info-Date">
              <p>날짜 선택</p>
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                className="Write-Container-Info-Date-Picker"
                minDate={new Date()}
                closeOnScroll={true}
                placeholderText="날짜를 선택해주세요"
                selected={date}
                onChange={(_date) => setDate(_date)}
              />
            </div>
            <div className="Write-Container-Info-Member">
              <p>인원 설정</p>
              <div
                className="Write-Container-Info-Member-Select"
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
        </div>
      </div>
    </>
  );
};

export default Write;
