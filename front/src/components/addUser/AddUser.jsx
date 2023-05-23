import React from 'react';
import './AddUser.scss';
import axios from 'axios';

const AddUser = () => {
  const [data, setData] = React.useState({
    fullName: '',
    Age: '',
    BusinessTravel: '',
    DailyRate: '',
    Department: '',
    Education: '',
    EducationField: '',
    Gender: '',
    HourlyRate: '',
    JobInvolvement: '',
    JobLevel: '',
    MaritalStatus: '',
    MonthlyIncome: '',
    NumCompaniesWorked: '',
    OverTime: '',
    StandardHours: '',
    TotalWorkingYears: '',
    YearsAtCompany: '',
    YearsInCurrentRole: '',
    YearsSinceLastPromotion: '',
    YearsWithCurrManager: '',
  });

  const setTravel = (id) => {
    setData({
      ...data,
      BusinessTravel: id,
    });
  };
  const setGenders = (id) => {
    setData({
      ...data,
      Gender: id,
    });
  };
  const setDepartments = (id) => {
    setData({
      ...data,
      Department: id,
    });
  };
  const setFamily = (id) => {
    setData({
      ...data,
      MaritalStatus: id,
      EducationField: 1,
    });
  };
  const setOver = (id) => {
    setData({
      ...data,
      OverTime: id,
    });
  };

  console.log(data);
  const sendTest = () => {
    //'https://bright-wasp-long-johns.cyclic.app/person/create'
    axios
      .post('http://localhost:5001/person/create', {
        fullName: data.fullName,
        age: data.Age,
        BusinessTravel: data.BusinessTravel,
        DailyRate: data.DailyRate,
        Department: data.Department,
        Education: data.Education,
        EducationField: data.EducationField,
        Gender: data.Gender,
        HourlyRate: data.HourlyRate,
        JobInvolvement: data.JobInvolvement,
        JobLevel: data.JobLevel,
        MaritalStatus: data.MaritalStatus,
        MonthlyIncome: data.MonthlyIncome,
        NumCompaniesWorked: data.NumCompaniesWorked,
        OverTime: data.OverTime,
        StandardHours: data.StandardHours,
        TotalWorkingYears: data.TotalWorkingYears,
        YearsAtCompany: data.YearsAtCompany,
        YearsInCurrentRole: data.YearsInCurrentRole,
        YearsSinceLastPromotion: data.YearsSinceLastPromotion,
        YearsWithCurrManager: data.YearsWithCurrManager,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="maindiv">
      <div className="bl">
        <div className="col-4 col-md-12 block">
          <div className="question">
            <div className="questionTxt">Фио</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, fullName: e.target.value })}></input>
          </div>

          <div className="question">
            <div className="questionTxt">Возраст</div>
          </div>
          <div className="answers">
            <input type="text" onChange={(e) => setData({ ...data, Age: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Деловые поездки</div>
          </div>

          <div className="answers">
            <nav id="nav">
              <ul>
                <li>
                  <a href="#" id="Travel">
                    {data.BusinessTravel === ''
                      ? 'Выбрать'
                      : data.BusinessTravel === 1
                      ? 'Часто'
                      : data.BusinessTravel === 2
                      ? 'Редко'
                      : 'Нет'}
                  </a>
                  <ul className="second">
                    <li>
                      <a href="#" type="button" onClick={() => setTravel(1)}>
                        Часто
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setTravel(2)}>
                        Редко
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setTravel(3)}>
                        Нет
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>

          <div className="question">
            <div className="questionTxt">Дневная норма (часов)</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, DailyRate: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Отдел</div>
          </div>
          <div className="answers">
            <nav id="nav">
              <ul>
                <li>
                  <a href="#" id="Department">
                    {data.Department === ''
                      ? 'Выбрать'
                      : data.Department === 1
                      ? 'Исследовательская разработка'
                      : data.Department === 2
                      ? 'Продажи'
                      : 'Человеческие ресурсы'}
                  </a>
                  <ul className="second">
                    <li>
                      <a href="#" onClick={() => setDepartments(1)}>
                        Исследовательская разработка
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setDepartments(2)}>
                        Продажи
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setDepartments(3)}>
                        Человеческие ресурсы
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="question">
            <div className="questionTxt">Образование</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, Education: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Лет с момента последнего повышения</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) =>
                setData({ ...data, YearsSinceLastPromotion: +e.target.value })
              }></input>
          </div>
        </div>
        <div className="col-4 col-md-12 block">
          <div className="question">
            <div className="questionTxt">Пол</div>
          </div>
          <div className="answers">
            <nav id="nav">
              <ul>
                <li>
                  <a href="#" id="gender">
                    {data.Gender === '' ? 'Выбрать' : data.Gender === 1 ? 'Мужской' : 'Женский'}
                  </a>
                  <ul className="second">
                    <li>
                      <a href="#" onClick={() => setGenders(1)}>
                        Мужской
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setGenders(0)}>
                        Женский
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="question">
            <div className="questionTxt">Почасовая ставка</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, HourlyRate: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Вовлеченность в работу</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, JobInvolvement: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Уровень работы</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, JobLevel: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Семейное положение</div>
          </div>
          <div className="answers">
            <nav id="nav">
              <ul>
                <li>
                  <a href="#" id="FamilyPos">
                    {data.MaritalStatus === ''
                      ? 'Выбрать'
                      : data.MaritalStatus === 1
                      ? 'Женат(замужем)'
                      : data.MaritalStatus === 2
                      ? 'Разведён(разведена)'
                      : 'Не женат(не замужем)'}
                  </a>
                  <ul className="second">
                    <li>
                      <a href="#" onClick={() => setFamily(1)}>
                        Женат(замужем)
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setFamily(2)}>
                        Разведён(разведена)
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setFamily(3)}>
                        Не женат(не замужем)
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="question">
            <div className="questionTxt">Ежемесячный доход</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, MonthlyIncome: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Количество компаний в которых работал</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, NumCompaniesWorked: +e.target.value })}></input>
          </div>
        </div>
        <div className="col-4 col-md-12 block">
          <div className="question">
            <div className="questionTxt">Сверхурочные</div>
          </div>
          <div className="answers">
            <nav id="nav">
              <ul>
                <li>
                  <a href="#" id="Over">
                    {data.OverTime === '' ? 'Выбрать' : data.OverTime === 1 ? 'Да' : 'Нет'}
                  </a>
                  <ul className="second">
                    <li>
                      <a href="#" onClick={() => setOver(1)}>
                        Да
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setOver(2)}>
                        Нет
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="question">
            <div className="questionTxt">Стандартные часы</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, StandardHours: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Всего рабочих лет </div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, TotalWorkingYears: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Сфера образования</div>
          </div>
          <div className="question">
            <div className="questionTxt">Лет в компании</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, YearsAtCompany: +e.target.value })}></input>
          </div>
          <div className="question">
            <div className="questionTxt">Лет в Нынешней роли</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, YearsInCurrentRole: +e.target.value })}></input>
          </div>

          <div className="question">
            <div className="questionTxt"> Годы работы с Нынешним менеджером</div>
          </div>
          <div className="answers">
            <input
              type="text"
              onChange={(e) => setData({ ...data, YearsWithCurrManager: +e.target.value })}></input>
          </div>
          <div className="answers">
            <nav id="nav">
              {/* <ul>
                                <li><a href="#" id="field">Выбрать</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyEducationField}>Человеческие ресурсы</a></li>
                                        <li><a href="#" onClick={CopyEducationField1}>Наука о жизни</a></li>
                                        <li><a href="#" onClick={CopyEducationField2}>Маркетинг</a></li>
                                        <li><a href="#" onClick={CopyEducationField3}>Медицина</a></li>
                                        <li><a href="#" onClick={CopyEducationField4}>Другое</a></li>
                                        <li><a href="#" onClick={CopyEducationField5}>Техническая степень</a></li>
                                    </ul>
                                </li>
                            </ul> */}
            </nav>
          </div>
        </div>
      </div>
      <div className="accept">
        <button type="submit" onClick={sendTest}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default AddUser;
