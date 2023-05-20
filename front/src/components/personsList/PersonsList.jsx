import React from 'react';
import './personsList.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersons } from '../../redux/slices/personsSlice';
import { Link } from 'react-router-dom';

const PersonsList = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPersons());
  }, []); // загрузка
  const persons = useSelector((state) => state.persons);
  return (
    <div className="mainPers">
      <div className="personsList">
        <div className="personsList__block">
          {persons.persons.map((el, id) => (
            <Link to={`/personsList/${el._id}`} key={id}>
              <div>{el.fullName}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PersonsList;
