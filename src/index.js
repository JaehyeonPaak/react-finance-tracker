// index.js is the first file to 

import ReactDOM from 'react-dom/client';
// ReactDOM is exporting some React DOM object
// ReactDOM은 React로 작성된 UI를 실제 DOM에 렌더링하기 위한 라이브러리이다.

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Let ReactDOM know the main place where the React application gets rendered to 
root.render(<App />);
// Tell React what should be rendered in that div
// ReactDOM.render() 메서드는 App 컴포넌트를 id가 root인 실제 DOM 요소에 렌더링한다.
