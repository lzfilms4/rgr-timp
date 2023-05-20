import React, { Component } from 'react'
import './summary-box.scss'
import { Progress, } from 'antd';
import image from '../../assets/images/Avatar.png'

const SummaryBox = ({ item }) => {
    return (
        <div className='box'>
            <div className='summary-box center'>
                <div className="summary-box__info">
                    <div className="summary-box__info__title">
                        <div>{item.title}</div>
                        <span>{item.subtitle}</span>
                    </div>
                    <div className="summary-box__line"></div>
                    <div className="summary-box__info__value center">
                        {item.value}
                    </div>
                    
                </div>
                
                {/* <div className="summary-box__chart">
                    <CircularProgressbarWithChildren
                        value={item.percent}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: item.percent < 50 ? colors.red : colors.purple,
                            trailColor: 'transparent',
                            strokeLinecap: 'round'
                        })}
                    >
                        <div className="summary-box__chart__value">
                            {item.percent}%
                        </div>
                    </CircularProgressbarWithChildren>
                </div> */}
            </div>
        </div>
    )
}

export default SummaryBox

export const SummaryBoxSpecial = ({name, yearsAtCompany, age, mood, item }) => {
    const moodSum = Math.floor((mood.reduce((sum,el) => sum+el,0))/mood.length)

    return (
        <div className='box'>
            <div className="summary-box-special">
                <div className="summary-box-special__chart">
                    <img src={image} />
                </div>
                <div className="summary-box-special__title">
                    {name}
                </div>
                <div className="summary-box__line">
                </div>
                <div className="summary-box-special__value">

                    {/* {item.value} */}
                    <div className="summary-box-special__value__block">
                        <div className="summary-box-special__value__block__title"> Лет в компании</div>
                        <div className="summary-box-special__value__block__value"> {yearsAtCompany} </div>
                    </div>
                    <div className="summary-box-special__value__block">
                        <div className="summary-box-special__value__block__title"> Настроение<p>1</p></div>
                        <div className="summary-box-special__value__block__value"> {moodSum}/5 </div>
                    </div>
                    <div className="summary-box-special__value__block">
                        <div className="summary-box-special__value__block__title"> Лет в компании</div>
                        <div className="summary-box-special__value__block__value"> 3 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SummaryBoxSpecialHappiness = ({ happiness }) => {
    console.log(happiness)
    return (
        <div className='box'>
            <div className="summary-box-special">
                <div className="summary-box-special__title">
                    Предполагаемый уровень счастья
                </div>
                <div className="summary-box__line">
                </div>
                <div className="summary-box-special__chart">
                    Вероятность увольнения: {happiness <= 50 ? 'Высокая' : 'Низкая'}
                </div>
                <Progress className='summary-box__lineHappiness' percent={happiness} strokeColor={{ '0%': '#FF0000','50%': '#F2E823', '100%': '#1E9600' }} />

                <div className="summary-box-special__value">

                    {/* {item.value} */}
                    <div className="summary-box-special__value__block">
                        <div className="summary-box-special__value__block__title">   </div>
                    </div>
                    <div className="summary-box-special__value__block">
                        <div className="summary-box-special__value__block__title">   </div>
                    </div>


                </div>
                
            </div>
        </div>
    )
}