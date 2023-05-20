import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import {useSelector} from "react-redux";


const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const {persons} = useSelector((state) => state.persons)
    const personsSorted = JSON.parse(JSON.stringify(persons))
    const personsNew = persons.length? personsSorted.sort((a,b) => b.YearsSinceLastPromotion - a.YearsSinceLastPromotion) : 0
    console.log(personsNew)
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = 0

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
            </div>
            <div className="sidebar__menu">

                <div className="sidebar__menu__block">
                    <div className="sidebar__menu__title"> Сотрудники</div>

                    <div className="sidebar__menu__line"></div>
                    <Link to={'PersonsList'} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                            <i className='bx bx-list-ol'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Топ-лист
                            </div>
                    </Link>
                    <div className="sidebar__menu__line"></div>
                    
                    <Link to ="addUser" className={`sidebar__menu__item add`}>
                        <div className="sidebar__menu__item__txt add__txt" onClick={closeSidebar}>
                        </div>
                    </Link>

                </div>

                <div className="sidebar__menu__block">
                    <div className="sidebar__menu__title"> Новые сотрудники</div>
                    <div className="sidebar__menu__line"></div>

                    {
                        persons.length? personsNew.map((el,id) =>
                            (
                            <div key={id}>
                                <Link to={`/personsList/${el._id}`} className={`sidebar__menu__item`} onClick={closeSidebar}>
                                    <div className="sidebar__menu__item__icon">
                                        <i className='bx bx-user'></i>
                                    </div>
                                    <div className="sidebar__menu__item__txt">
                                        {el.fullName.split(' ')[0]}  {el.YearsSinceLastPromotion}
                                    </div>

                                    {/*<div className="sidebar__menu__item__icon">*/}
                                    {/*    <i className='bx bx-user'></i>*/}
                                    {/*</div>*/}
                                </Link>
                                <div className="sidebar__menu__line"></div>
                            </div>
                        )
                        ) : ('')
                    }

                    <Link to={'/add'} className={`sidebar__menu__item add`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__txt add__txt">

                            </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default Sidebar
