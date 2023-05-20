import React from 'react'
import DashboardWrapper, { DashboardWrapperMain } from '../components/dashboard-wrapper/DashboardWrapper'
import { SummaryBoxSpecial, SummaryBoxSpecialHappiness } from '../components/summary-box/SummaryBox'
import './Dashboard.scss'
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate();
    const person = useSelector((state) => state.persons.persons).find(person => person._id === id)
    const persons = useSelector((state) => state.persons)
    return (
        persons.persons.length?
        (
            <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-5 col-md-12">
                        <SummaryBoxSpecial name={person.fullName} yearsAtCompany={person.YearsAtCompany} age={person.age} mood={person.mood} />
                    </div>
                    <div className="col-7 hide-md">
                        <SummaryBoxSpecialHappiness happiness={person.happiness*10} />
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="row">
                        </div>
                    </div>
                </div>

            </DashboardWrapperMain>

        </DashboardWrapper>
        ) : ('')
    )
}

export default Dashboard
