import { Route, Routes } from 'react-router-dom';

import { MainPage } from './mainPage/mainPage';
import { Register } from './register/register';
import { Signin } from './signin/signin';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};
