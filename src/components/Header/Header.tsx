import React from 'react'
import './Header.scss'
import Logo from '/src/assets/Logo.svg';
import Bell from '/src/assets/Bell.svg';

export function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <span className="burger__menu"></span>
                    </li>
                    <li className="nav__item">
                        <img src={Logo} alt="Логотип"/>
                    </li>
                    <li className="nav__item">
                        Главная
                    </li>
                    <li className="nav__item">
                        Все события
                    </li>
                    <li className="nav__item">
                        Подписки
                    </li>
                    <li className="nav__item">
                        Категории
                    </li>
                    <li className="nav__item">
                        Помощь
                    </li>
                    <li className="nav__item_block">
                        <div className="nav__block">
                            <span className="nav__notifications"><img src={Bell} alt="Уведомления"/></span>
                            <a href="#" className="nav__link nav__link_register">Зарегистрироваться</a>
                            <a href="#" className="nav__link nav__link_login">Войти</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}