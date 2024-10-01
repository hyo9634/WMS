import React, { useEffect } from "react";
import { DatePicker, Space, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import * as H from "../../../styles/pageStyles";
import theme from "../../../styles/theme";


const statusOption = [
  { value: "전체", label: "전체" },
  { value: "미승인", label: "미승인" },
  { value: "승인", label: "승인" },
  { value: "반려", label: "반려" },
];
const arriveNameOption = [
  { value: "서울 창고", label: "서울 창고" },
  { value: "부산 창고", label: "부산 창고" },
  { value: "대구 창고", label: "대구 창고" },
  { value: "광주 창고", label: "광주 창고" },
  { value: "인천 창고", label: "인천 창고" },
  { value: "귤로벌마트", label: "귤로벌마트" },
];
const itemOption = [
  { value: "귤", label: "귤" },
  { value: "한라봉", label: "한라봉" },
  { value: "사과", label: "사과" },
  { value: "레몬", label: "레몬" },
  { value: "감귤", label: "감귤" },
];


export default function SearchNotDoneContent({
  data,
  status,
  setStatus,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  arriveName,
  setArriveName,
  item,
  setItem,
  fetchData,
}) {
  const { RangePicker } = DatePicker;
  console.log("SearchContent 렌더링"); // 렌더링될 때마다 출력
  console.log("fetchData: ", fetchData);


  const handleArriveNameChange = (value) => {
    console.log("ArriveName changed to: ", value);
    const selectedValue = value;
    // 수신지가 '귤로벌마트'일 경우 arrive_storage_id를 null로 보내도록 처리
    if (selectedValue === "귤로벌마트") {
      setArriveName(null); // arrive_storage_id를 null로 설정
      //setOutboundMart(1);
    } else {
      setArriveName(value); // 다른 창고명은 그대로 설정
      //setOutboundMart(0);
    }
  };
  const handleDateChange = (dates, dateStrings) => {
    console.log("Dates changed to: ", dates, dateStrings);
    if (dates) {
      setStartDate(dateStrings[0]); // 시작일
      setEndDate(dateStrings[1]); // 종료일
    } else {
      setStartDate(null);
      setEndDate(null);
    }


  };
  return (
    <div>
      <Select
        showSearch
        placeholder="진행 상태"
        value={status || undefined}
        onChange={(value) => setStatus(value)}
        options={statusOption}
        style={{ width: "auto", minWidth: "150px", marginRight: "3px" }}
      />
      <Space direction="vertical" size={12} style={{marginRight: "3px"}}>
        <RangePicker
          placeholder={["시작일", "종료일"]}
          onChange={handleDateChange}
        />
      </Space>
      <Select
        showSearch
        placeholder="수신지"
        value={arriveName || undefined}
        onChange={handleArriveNameChange}
        options={arriveNameOption}
        style={{ width: "auto", minWidth: "150px", marginRight: "3px" }}
      />
      <Select
        showSearch
        placeholder="품목"
        value={item || undefined}
        onChange={(value) => setItem(value)}
        options={itemOption}
        style={{ width: "auto", minWidth: "150px", marginRight: "3px" }}
      />
      <button onClick={fetchData} style={{backgroundColor: theme.colors.glbWhite, border: "none"}}><SearchOutlined/></button>


    </div>
  );
}


      
      // {/* 데이터 리스트 렌더링 */}
      // {/* data와 data.data가 존재하고, data.data가 배열인지 확인 */}
      // {/* data : data가 null이나 undefined인지 확인 */}
      // {/* Array.isArray(data.data) : .map() 메서드를 사용하기 위해서 data.data가 배열인지 확인 */}
      // {/* data.data.length : 길이가 0이면 출력할 데이터가 없는 것이므로 false를 반환 */}
      // {console.log(data)}
      // {data && Array.isArray(data.data) && data.data.length > 0 ? (
      //   <ul>
      //     {data.data.map((item, index) => (
      //       <li key={index}>
      //         {/* 체크박스와 출고 ID 표시 */}
      //         <input
      //           type="checkbox"
      //           checked={outboundIds.includes(item.outboundId)}
      //           onChange={() => handleCheckboxChange(item.outboundId)}
      //         />
      //         <p>출고 ID: {item.outboundId}</p>
      //         <p>진행상태: {item.status}</p>
      //         <p>출고 창고명: {item.departStorageName}</p>
      //         <p>도착지 이름: {item.arriveName}</p>
      //         <p>상품 목록: {item.products}</p>
      //         <p>요청 날짜: {item.requestDate}</p>
      //       </li>
      //     ))}
      //   </ul>
      // ) : (
      //   <p>데이터가 없습니다.</p> // 데이터를 찾을 수 없을 때 출력
      // )}
      // {/* 승인 버튼 추가 */}
      // {/* <button onClick={approveOutboundRequests}>승인</button>
      // <button onClick={rejectOutboundRequests}>반려</button> */}





// import styled from "@emotion/styled";
// import * as H from "../../../styles/pageStyles";

// export default function SearchNotDoneContent({
//   status,
//   setStatus,
//   startDate,
//   setStartDate,
//   endDate,
//   setEndDate,
//   arriveName,
//   setArriveName,
//   item,
//   setItem,
//   fetchData,
// }) {
//   console.log("SearchContent 렌더링"); // 렌더링될 때마다 출력
//   console.log("fetchData: ", fetchData);


//   const handleArriveNameChange = (e) => {
//     const selectedValue = e.target.value;

//     // 수신지가 '귤로벌마트'일 경우 arrive_storage_id를 null로 보내도록 처리
//     if (selectedValue === "귤로벌마트") {
//       setArriveName(null); // arrive_storage_id를 null로 설정
//       //setOutboundMart(1);
//     } else {
//       setArriveName(selectedValue); // 다른 창고명은 그대로 설정
//       //setOutboundMart(0);
//     }
//   };


//   return (
//     <div>
//       <label>진행 상태</label>
//       <select value={status}
//       onChange={(e) => setStatus(e.target.value)}>
//         <option value="" disabled selected hidden>선택</option>
//         <option>미승인</option>
//         <option>승인</option>
//         <option>반려</option>
//       </select>

//       <label>요청 날짜</label>
//       <input
//         type="date"
//         value={startDate}
//         onChange={(e) => setStartDate(e.target.value)}
//       />
//       <input
//         type="date"
//         value={endDate}
//         onChange={(e) => setEndDate(e.target.value)}
//       />

//       <label>수신지</label>
//       <select
//         value={arriveName}
//         onChange={handleArriveNameChange}>
//         <option value="" disabled selected hidden>선택</option>
//         <option>서울 창고</option>
//         <option>부산 창고</option>
//         <option>대구 창고</option>
//         <option>광주 창고</option>
//         <option>인천 창고</option>
//         <option>귤로벌마트</option>
//       </select>

//       <label>품목</label>
//       <select value={item}
//       onChange={(e) => setItem(e.target.value)}>
//         <option value="" disabled selected hidden>선택</option>
//         <option>귤</option>
//         <option>한라봉</option>
//         <option>사과</option>
//         <option>레몬</option>
//         <option>감귤</option>
//       </select>


//       <button onClick={fetchData}>검색</button>
//     </div>
//   );
// }


// // {/* 데이터 리스트 렌더링 */}
// //       {/* data와 data.data가 존재하고, data.data가 배열인지 확인 */}
// //       {/* data : data가 null이나 undefined인지 확인 */}
// //       {/* Array.isArray(data.data) : .map() 메서드를 사용하기 위해서 data.data가 배열인지 확인 */}
// //       {/* data.data.length : 길이가 0이면 출력할 데이터가 없는 것이므로 false를 반환 */}
// //       {data && Array.isArray(data.data) && data.data.length > 0 ? (
// //         <ul>
// //           {data.data.map((item, index) => (
// //             <li key={index}>
// //               {/* 체크박스와 출고 ID 표시 */}
// //               <input
// //                 type="checkbox"
// //                 checked={outboundIds.includes(item.outboundId)}
// //                 onChange={() => handleCheckboxChange(item.outboundId)}
// //               />

// //               <p>출고 ID: {item.outboundId}</p>
// //               <p>진행상태: {item.status}</p>
// //               <p>출고 창고명: {item.departStorageName}</p>
// //               <p>도착지 이름: {item.arriveName}</p>
// //               <p>상품 목록: {item.products}</p>
// //               <p>요청 날짜: {item.requestDate}</p>
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>데이터가 없습니다.</p> // 데이터를 찾을 수 없을 때 출력
// //       )}

// //       {/* 승인 버튼 추가 */}
// //       <button onClick={approveOutboundRequests}>승인</button>
// //       <button onClick={rejectOutboundRequests}>반려</button>