# 데이터베이스 테이블 

# 최종 백엔-드 아키텍처 (Clean Architecture Inspired)
```
Tsm/
└──api/                  # API 계층 
    │   ├── controllers/      # 1. 요청 수신 및 응답 반환
    │   │   ├── user.controller.js
    │   │   └── schedule.controller.js
    │   ├── middlewares/      # 2. 컨트롤러 실행 전/후 공통 처리
    │   │   ├── auth.middleware.js      # (인증) 로그인 여부 검증
    │   │   └── validator.middleware.js # (검증) 요청 데이터 형식 검증
    │   └── routes/           # 3. URL과 컨트롤러 연결 (라우팅)
    │       ├── index.js                # 모든 라우터 통합
    │       ├── user.routes.js          # /users
    │       └── schedule.routes.js      # /schedules
    │
    ├── config/                 # 애플리케이션 설정
    │   ├── index.js              # 모든 설정을 통합하여 내보내기
    │   ├── database.config.js    # DB 연결 정보
    │   └── externalAPI.config.js # 외부 API 키 및 URL
    │
    ├── dal/                    # 데이터 접근 계층 (Data Access Layer)
    │   ├── models/           # A. DB 스키마 정의 (Mongoose/Sequelize)
    │   │   ├── index.js
    │   │   ├── user.model.js
    │   │   └── schedule.model.js
    │   └── repositories/     # B. DB 통신 로직 추상화
    │       ├── user.repository.js
    │       └── schedule.repository.js
    │
    ├── services/               #  비즈니스 로직 (애플리케이션의 핵심)
    │   ├── user.service.js       # 사용자 관련 핵심 로직
    │   ├── schedule.service.js   # 일정 관리 핵심 로직
    │   └── external/         # 외부 서비스 연동 로직
    │       ├── map.service.js      # 지도 API (경로, 시간 계산)
    │       ├── weather.service.js  # 날씨 API
    │       └── oauth.service.js    # 소셜 로그인
```
