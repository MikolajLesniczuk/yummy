import { Link } from 'react-router-dom';
import s from './mainPage.module.css';

export const MainPage = () => {
  return (
    <div className={s.container}>
      <div>
        <div className={s.section}>
          <div className={s.logo}></div>
          <div className={s.text}>Welcome to the App!</div>
          <div className={s.text}>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </div>
        </div>
        <div className={s.buton}>
          <Link to="/register">
            <button className={s.register}>Register </button>
          </Link>

          <Link to="/signin">
            <button className={s.signin}>Sign in </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
