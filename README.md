# Node Swagger Boilerplate
이 프로젝트는 Express, TypeScript, Swagger를 사용한 Node.js 애플리케이션의 예입니다.<br/><br/><br/>
## 설치 방법
프로젝트에 필요한 패키지를 설치하기 위해 다음 명령을 실행하세요:<br/><br/>
```
yarn install
```
프로젝트에 필요한 모든 종속성을 설치합니다.<br/><br/><br/><br/>
## 실행 방법
이 프로젝트는 다음의 npm 스크립트를 제공합니다:<br/><br/>
```
yarn start
```
ts-node를 사용하여 Express 애플리케이션을 실행합니다.<br/><br/>

```
yarn build
```
TypeScript 파일을 컴파일하고, Swagger 파일을 번들링합니다.<br/><br/>

```
yarn serve
```
빌드된 JavaScript 파일을 Node.js로 실행합니다.<br/><br/><br/><br/>
## Swagger
이 프로젝트는 Swagger UI를 사용하여 API 문서를 제공합니다.<br/>
애플리케이션을 실행한 후에는 웹 브라우저를 사용하여 http://localhost:3000/api-docs 주소로 접속하면 Swagger 문서를 볼 수 있습니다.<br/>