# SYNC_FE

SYNC_FE 프로젝트는 협업 툴을 개발하기 위해 시작되었습니다.

## 프로젝트 목적

SYNC_FE의 주된 목적은 Slack, Confluence와 같은 강력한 협업 툴을 제공하여 팀원 간의 원활한 커뮤니케이션과 협업을 가능하게 하는 것입니다.

## 기술 스택

- **React 18**: 사용자 인터페이스를 구축하기 위해 사용
- **TypeScript**: 정적 타입 체킹을 통해 코드의 안정성과 가독성을 향상

## 백엔드 URL

백엔드 서버는 아래 방식으로 접근할 수 있습니다.

```javascript
import config from 'config/config';

const userInfoUrl = `${config.backendUrl}/api/user/info`;
```

[https://158.247.197.212:9090]

## 실행 방법

프로젝트를 실행하기 위해서는 다음 명령어들을 순서대로 실행합니다.

1. 의존성 설치:

   ```sh
   yarn install
   ```

2. 개발 서버 실행:
   ```sh
   yarn craco-start:dev
   ```

## 개발 컨벤션

- **Alias 활용**: 프로젝트 내에서 모듈을 쉽게 참조할 수 있도록 alias를 사용합니다.
- **Index 파일에 export 추가**: 신규 파일을 추가할 때마다 반드시 해당 파일을 index에 export합니다.
- **배럴 파일 패턴**: 모듈을 쉽게 가져올 수 있도록 배럴 파일 패턴을 사용합니다.
- **Razy를 통한 트리 쉐이킹**: 오래 걸리는 작업은 Razy를 통해 트리 쉐이킹을 사용하여 최적화합니다.

## 팝업 모달 사용법

```

import useModal from '@hooks/useModal';

const [openModal, closeModal, isModalOpen] = useModal();

// openModal // 파라미터로 전달받은 컴포넌트를 모달로 여는 function
// closeModal // 현재 열려있는 모달을 닫는 function
// isModalOpen // 현재 열려있는 모달의 boolean

```
