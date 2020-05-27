# Airbnb
## 에어비앤비 - 7팀
- FE - [Taek](https://github.com/seungdeng17)⚛️, [Huey](https://github.com/hu2y) 🏄‍♂️
- BE - [Jack](https://github.com/guswns1659) :elephant:

## 팀 그라운드 룰
- 오전 11시 스크럼 `google hangout`을 사용 
- wiki에 각자 당일 스크럼 기록
    - 컨디션, 하루 목표 등등 다양하게!
    - 전날 구현하면서 느낀 아쉬움과 오늘은 어떻게 행동할건지 적어보기. 

## git branch
- master: 배포용 브랜치
- dev: 개발 브랜치(default branch)
- deploy : 배포 연습용 브랜치
- 작업을 시작할 때: 자신의 클래스 개발 브랜치에서 feature-<클래스>/issue-번호 으로 브랜치 생성
    ex) feature-iOS/issue-32
- 배포 주기 : 수, 금 17:00


## commit message
| 타입 | 설명 |
|--|--|
|Feat|새로운 기능 추가|
|Fix|버그 수정|
|Docs|문서 수정|
|Refactor|코드 리팩토링|
|Style|코드 포맷팅 (코드 변경이 없는 경우)|
|Test|테스트 코드 작성|
|Chore|소스 코드를 건들지 않는 작업(빌드 업무 수정)|

```
 [#43] Feat: boilerPlate
```
 - 이슈 단위로 개발한다.
 - 작업을 완료되면, 작업하던 브랜치에서 개발 브랜치(dev)로 Pull Request를 생성한다. jack은 로컬에서 merge.
 - 머지를 완료했으면 기능(feature)브랜치는 github과 local git에 모두 삭제한다. 
 - dev에서 master로 pull request 할 때 BE 나 FE 코드에 충돌나는 경우, 코드를 작성한 팀원에게 알린다.

#### Issue 관리
- [클래스명] Issue 제목
```
[BE] 배포
[React] 버튼컴포넌트 구현
[Vue] 모달창 구현
```

#### PR 관리
- [클래스명 #Issue번호] PR 제목
- Auto Close를 사용할 필요가 있는 경우 PR에 Close Keyword를 적어서 Issue Close가 가능합니다.

```
[BE #1] DB 설계
```


#### 공유사항
 - git ignore는 각자 작성
 - BE가 구현한 API에 대해서는 Spring rest Docs로 작성해 URL 공유
 - API URL는 백엔드가 정하고 데이터 형식은 다같이
