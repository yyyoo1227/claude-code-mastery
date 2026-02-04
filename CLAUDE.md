# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개발자 웹 이력서 프로젝트 - HTML, CSS, JavaScript, TailwindCSS 기반 반응형 웹사이트

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택

- HTML5 (시맨틱 마크업)
- CSS3
- JavaScript (ES6+)
- TailwindCSS (CDN 사용)

## 개발 명령어

```bash
# 로컬 서버 실행 (Live Server 또는 Python)
npx live-server
# 또는
python -m http.server 8000
```

## 아키텍처

정적 웹사이트 구조:
- `index.html`: 메인 페이지 (섹션: 헤더, 히어로, 기술스택, 경력, 프로젝트, 연락처, 푸터)
- `css/style.css`: 커스텀 스타일
- `js/main.js`: 인터랙션 로직 (스크롤 애니메이션, 모바일 메뉴)
- `assets/images/`: 이미지 리소스

## TailwindCSS 사용

CDN 방식으로 TailwindCSS 사용:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
