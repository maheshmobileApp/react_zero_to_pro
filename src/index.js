import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//Import Login screen
// import LoginScreen from './login';
// import ParentComponent from './parentComponent';
// import IfElseConditonalRenderingComponent from './ConditonalRendering/IfElseConditonalRendering';
// import TernaryOperatorRenderingComponent from './ConditonalRendering/ternaryOperatorRendering';
// import SwitchCaseRenderingComponent from './ConditonalRendering/switchCaseRendering';
// import LogicalAndOperatorComponent from './ConditonalRendering/Logical&&Operator';
// import UsersList from './users/UsersList';
// import ListAndKeysComponent from './listsAndKeys/listAndKeys';
// import ComponentVariableRendering from './ConditonalRendering/ComponentRendering';
// import ListAndUniqeKeysComponent from './listsAndKeys/listAndUniqeKey';
import ButtonEvent from './events/ButtonEvents';
import CounterComponent from './UseState/counter';
import TodoTaskComponent from './UseState/todoTask';
import OnchangeTextWithUseState from './UseState/onchageTextWithUseState';
import ObjectStateComponent from './UseState/objectState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LoginScreen/> */}
    {/* <ParentComponent /> */}
    {/* <UsersList /> */}
    {/* <IfElseConditonalRenderingComponent isLoggedIn={false} /> */}
    {/* <TernaryOperatorRenderingComponent isLoggedIn={true} /> 
    success, error, loading, warning
    */}
    {/* <SwitchCaseRenderingComponent status={'success'} /> */}
    {/* <ComponentVariableRendering isLoggedIn={false} /> */}
    {/* <ListAndUniqeKeysComponent /> */}
    {/* <ButtonEvent /> */}
    {/* <CounterComponent/> */}
    <ObjectStateComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// App -> React Component

// Login Screen 
// Profile Screen 