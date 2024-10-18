![header](https://capsule-render.vercel.app/api?type=venom&color=0:FFA500,100:FF4500&height=300&section=header&text=WMS%20귤로벌%20프로젝트&fontSize=40&fontColor=222222 )


## 📌 프로젝트 소개

<img src="https://github.com/user-attachments/assets/a9726406-91b9-41a6-8843-48e27123a427" width="50" height="50"/> 
<br>
<img src="https://github.com/user-attachments/assets/072cfbcb-f5c8-41fd-848f-2a8db066308b"  width="300" height="300"/>
<img src="https://github.com/user-attachments/assets/305c0389-c6c5-4510-9ad1-2913c1f474f7"  width="300" height="300"/>
<img src="https://github.com/user-attachments/assets/1aff0f16-c30d-4907-a332-27f27cc800fc"  width="400" height="300"/>


안녕하세요, 저희는 팀 LCW(Logistics Coding Warriors)입니다.

신세계 I&C 스파로스 아카데미에서 자바 웹 백엔드에 대해 함께 공부하며 발전해나가고자 합니다.

2차 프로젝트는 WMS 웹 애플리케이션을 구현하는 것을 목표로 신선 식품(귤, 감귤, 한라봉, 사과, 레몬)을 각 지역으로 

지역 내 창고 간 거래에 집중한 시스템을 개발했습니다.

1차 프로젝트 이후 입출고에 
<br>
<br>

## 🛠 기술 스택
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Stars](https://img.shields.io/github/stars/your-username/your-repo)
![Forks](https://img.shields.io/github/forks/your-username/your-repo)


- **프론트엔드**: React
- **백엔드**: Spring Boot, MyBatis
- **데이터베이스**: MySQL, Google Cloud Storage
- **협업툴**: Slack, Notion
- **현상관리**: Git, Github
- **테스트도구**: Postman, Spring Boot Test
<br>
<br>

## 🚀 기능

- **👨‍👧 회원 가입 및 로그인**
- **💡 사용자 정보 수정**
- **🚀 관리자 페이지에서 사용자 관리**
- **🌍 창고 검색 및 등록**
- **🔖 입고 요청 및 승인**
- **🔖 출고 요청 및 승인**
- **📦 재고 관리**
- **🚚 운송장관리**
- **🔎 페이징 및 검색 기능**
- **📊 입출고 및 재고 대시보드**
- **📬 개인 메시지 알림 기능**
<br>

### 📑 기능 상세

👨‍👧 회원 가입 및 로그인
- 회원가입을 통해 계정을 생성하고 생성된 계정으로 로그인하여 서비스를 이용할 수 있습니다.

💡 사용자 정보 수정
사용자는 자신의 프로필 정보를 수정할 수 있으며, 비밀번호 변경도 가능합니다.

🚀 관리자 페이지에서 사용자 관리
관리자는 사용자 목록을 확인하고, 사용자 계정의 상태를 활성화/비활성화하거나 삭제할 수 있습니다.

🌍 창고 검색 및 등록
창고 정보를 검색하고, 새로운 창고를 등록할 수 있는 기능을 제공합니다.

🔖 입고 요청 및 승인
사용자는 물품 입고를 요청할 수 있으며, 관리자는 이를 승인하여 입고 처리를 할 수 있습니다.

🔖 출고 요청 및 승인
물품 출고를 요청하고, 관리자가 이를 승인하여 출고 처리를 할 수 있습니다.

📦 재고 관리
창고에 저장된 물품의 재고를 확인하고, 재고를 관리할 수 있는 기능을 제공합니다.

🚚 운송장 관리
물품 운송에 필요한 운송장을 생성하고, 운송 상태를 관리할 수 있습니다.

🔎 페이징 및 검색 기능
사용자와 창고 목록에서 페이징 처리 및 검색 기능을 통해 데이터를 효율적으로 조회할 수 있습니다.

📊 입출고 및 재고 대시보드
대시보드를 통해 입출고 및 재고 현황을 시각화된 차트로 확인할 수 있습니다.

📬 개인 메시지 알림 기능
사용자가 입고/출고 요청 및 승인과 관련된 알림을 개인 메시지로 받을 수 있습니다.

<br>
<br>


## 🔧 폴더 구조

```bash

프로젝트 루트/
├── ssg-WMS/                    # 백엔드(Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── lcw/lcw2_back/ # Java 소스 코드
│   │   │   │       ├── auth/                 # 인증 토큰
│   │   │   │       ├── config/               # 설정 파일 (Google Cloud Storage, WebConfig 등)
│   │   │   │       ├── controller/           # 컨트롤러 계층 (HTTP 요청 처리)
│   │   │   │       ├── domain/               # VO 모델
│   │   │   │       ├── dto/                  # DTO 모델
│   │   │   │       ├── exception/            # 예외 처리 관련 클래스
│   │   │   │       ├── utils/                # 유틸리티 클래스 모음
│   │   │   │       ├── mapper/               # MyBatis Mapper 인터페이스
│   │   │   │       ├── repository/           # 데이터베이스 레포지토리 (MyBatis Mapper)
│   │   │   │       ├── service/              # 서비스 계층 (비즈니스 로직 처리)
│   │   │   └── resources/      # 리소스 파일 폴더
│   │   │       ├── application.properties    # 애플리케이션 전역 설정 파일
│   │   │       ├── application-jwt.properties# JWT 설정 파일
│   │   │       └── mapper/                   # MyBatis Mapper XML 파일
│   │   └── test/                             # 테스트 코드 폴더
│   ├── build.gradle                          # Gradle 빌드
│   └── settings.gradle                       # Gradle 설정 파일
│
├── frontend/                   # 프론트엔드(React)
│   ├── pages/                  # 주요 페이지 컴포넌트
│   ├── public/                 # 정적 파일
│   │   ├── fonts/              # 웹폰트 파일
│   │   └── img/                # 이미지 파일
│   ├── src/                    # React 소스 코드
│   │   ├── apollo/             # Apollo 클라이언트 설정 폴더
│   │   ├── axios/              # Axios 클라이언트 설정 폴더
│   │   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── info/               # 사용자 정보 관련 컴포넌트
│   │   ├── layout/             # 레이아웃 관련 컴포넌트
│   │   ├── lib/                # 라이브러리 파일
│   │   ├── notice/             # 공지사항 관련 컴포넌트
│   │   ├── sse/                # Server-Sent Events 관련 설정
│   │   └── styles/             # 전역 스타일 (Emotion, Styled-components)
│   └── package.json            # 프로젝트 정보 및 의존성
└──                    

```
<br>
<br>



## ✨ 역할과 회고
설계 단계에서 필요한 와이어프레임을 작성하기 위해 피그마를 사용하였습니다.
![와이어프레임_최종](https://github.com/user-attachments/assets/f8377b36-db98-460f-b5a3-d3f4d885fff3)

이번 프로젝트에서 프론트 부분을 맡아 리액트 라이브러리를 사용하였습니다.
페이지 전역에 쓰일 요소(alert, popup 등)들의 디자인과 구성을 설계하고
요소들의 적절한 위치를 조정하고 요소들이 알맞게 버튼 등과 연결되어 상호작용하는지를 확인하고 수정하는 과정을 맡았습니다.
이 과정에서 HTML,CSS,JS의 태그들을 사용하고 익히는 경험을 할 수 있었습니다.
<br>
<br>
![unnamed](https://github.com/user-attachments/assets/4659ec98-bb2e-4b20-9f5c-524fdc40f9ec)





<br>
<br>
