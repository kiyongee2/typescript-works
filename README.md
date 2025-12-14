### node js 프로젝트 만든 후 typescript 프로젝트 만들기

1. node js 설치

npm init -y

1. typescript 설치

npm i -D typescript ts-node  //D → —save-dev

3 .tsonfig.json 만들기

tsc —init

1. package.json
    
    ```
    "scripts": {
        "dev": "ts-node src",
        "build": "tsc && node dist"
      },
    ```
    
2. src/index.ts 만들기

touch src/index.ts  → git bash에서 실행

### 실행 - index.ts

npm run dev
