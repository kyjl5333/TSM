# React Native 개발환경 구축 가이드 (Android)

이 문서는 Windows 환경에서 Android용 React Native 개발환경을 처음부터 설정하는 과정을 단계별로 안내합니다.

## 📋 사전 요구사항

- Windows 운영체제
- 관리자 권한
- 안정적인 인터넷 연결

## 🛠 1. 기본 도구 설치

### 1.1 Node.js 설치
**Node.js 22.20.0 버전을 설치해야 합니다.**

**방법 1: 공식 웹사이트에서 다운로드**
- [Node.js 공식 사이트](https://nodejs.org/)에서 22.20.0 버전 다운로드
- 설치 후 터미널에서 버전 확인:
```bash
node --version  # v22.20.0이 출력되어야 함
npm --version
```

**방법 2: nvm 사용 (권장)**
```bash
# Windows는 nvm-windows 사용
# https://github.com/coreybutler/nvm-windows 에서 다운로드

# Node.js 22.20.0 설치
nvm install 22.20.0
nvm use 22.20.0

# 기본 버전으로 설정
nvm alias default 22.20.0
```

### 1.2 패키지 매니저 선택
- **npm**: Node.js와 함께 자동 설치
- **Yarn**: 선택사항, 더 빠른 설치 속도
```bash
npm install -g yarn
```

## 📱 2. React Native CLI 설치

```bash
npm install -g @react-native-community/cli
```

설치 확인:
```bash
npx react-native --version
```

## 🤖 3. Android 개발 환경 설정

### 3.1 Java Development Kit (JDK) 설치
React Native는 JDK 17을 권장합니다.

```bash
# Windows
# Oracle JDK 또는 OpenJDK 다운로드하여 설치
```

### 3.2 Android Studio 설치
1. [Android Studio 공식 사이트](https://developer.android.com/studio)에서 다운로드
2. 설치 과정에서 다음 항목들 포함:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

### 3.3 Android SDK 설정
Android Studio 실행 후:
1. **SDK Manager** 열기 (Tools → SDK Manager)
2. **SDK Tools** 탭에서 설치:
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools

### 3.4 환경변수 설정

**Windows (시스템 환경변수):**
- `ANDROID_HOME`: `C:\Users\USERNAME\AppData\Local\Android\Sdk`
- PATH에 추가: `%ANDROID_HOME%\platform-tools`

터미널 재시작 후 확인:
```bash
adb --version
```

## 🚀 4. 기존 프로젝트 설정 (Expo Router 사용)

팀에서 개발 중인 프로젝트를 로컬에서 실행하기 위한 단계입니다.

### 4.1 Expo CLI 설치
```bash
npm install -g @expo/cli
```

### 4.2 프로젝트 클론 및 의존성 설치
```bash
# 프로젝트 클론 (front 브랜치, 폴더명을 tsm_app으로 설정)
git clone -b front https://github.com/chang-yeon84/Changyeon_SW_TSM.git tsm_app
cd tsm_app

# 의존성 설치
npm install
# 또는 yarn을 사용하는 경우
yarn install
```

### 4.3 Expo 개발 서버 실행
```bash
npx expo start
```

### 4.4 Android에서 실행
**방법 1: Android 에뮬레이터 사용**
1. Android Studio에서 AVD Manager 실행
2. 가상 기기 생성 및 실행
3. Expo 개발 서버에서 `a` 키 입력

**방법 2: 실제 Android 기기 사용**
1. 기기에서 개발자 옵션 활성화
2. USB 디버깅 활성화
3. Google Play Store에서 "Expo Go" 앱 설치
4. Expo 개발 서버의 QR 코드를 Expo Go 앱으로 스캔

## 🔍 5. 개발환경 검증

### 5.1 React Native Doctor 실행
```bash
npx @react-native-community/cli doctor
```

### 5.2 Expo Doctor 실행 (Expo 프로젝트용)
```bash
npx expo doctor
```

이 명령어들로 환경 설정 문제를 자동으로 진단할 수 있습니다.

### 5.3 기본 앱 실행 확인
- Expo: Expo Go 앱 또는 Android 에뮬레이터에서 앱이 정상 실행되면 성공

## 🛠 6. 추가 도구 설치 (선택사항)

### 6.1 VS Code 확장 프로그램
- React Native Tools
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Expo Tools

### 6.2 디버깅 도구
```bash
# Flipper (메타에서 개발한 디버깅 도구)
npm install -g flipper

# React DevTools
npm install -g react-devtools
```

## ❌ 7. 자주 발생하는 문제 해결

### 7.1 Expo 관련 문제

**Expo Go에서 앱이 로드되지 않는 경우:**
```bash
# 캐시 클리어 후 재시작
npx expo start --clear
```

**Metro bundler 오류:**
```bash
npx expo start --reset-cache
```

**의존성 설치 문제:**
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
npm install
```

### 7.2 Android 관련 문제

**Android 빌드 실패:**
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

**Gradle 버전 충돌:**
```bash
cd android
./gradlew wrapper --gradle-version 7.5.1
```

### 7.3 일반적인 문제

**권한 문제 (Windows):**
```bash
# PowerShell을 관리자 권한으로 실행 후
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**패키지 버전 충돌:**
```bash
# package-lock.json 삭제 후 재설치
rm package-lock.json
rm -rf node_modules
npm install
```

## 📚 8. 참고 자료

- [React Native 공식 문서](https://reactnative.dev/docs/environment-setup)
- [Expo 공식 문서](https://docs.expo.dev/)
- [Expo Router 문서](https://expo.github.io/router/)
- [Android Studio 설정 가이드](https://developer.android.com/studio/install)

## ✅ 9. 체크리스트

환경 설정이 완료되었는지 확인하세요:

**기본 환경:**
- [ ] Node.js 22.20.0 설치됨
- [ ] React Native CLI 설치됨  
- [ ] Expo CLI 설치됨
- [ ] JDK 17 설치됨
- [ ] Android Studio 및 SDK 설치됨
- [ ] 환경변수 설정 완료

**프로젝트 실행:**
- [ ] 프로젝트 클론 완료 (`git clone -b front`)
- [ ] `cd tsm_app` 이동 완료
- [ ] `npm install` 성공
- [ ] `npx expo start` 실행 성공
- [ ] Android 에뮬레이터 또는 Expo Go에서 앱 실행 성공

**검증:**
- [ ] `npx @react-native-community/cli doctor` 통과
- [ ] `npx expo doctor` 통과

---

**💡 팁**: 환경 설정 중 문제가 발생하면 공식 문서를 먼저 확인하고, 팀 슬랙이나 이슈 트래커에 질문을 남겨주세요.