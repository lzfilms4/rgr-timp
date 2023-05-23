import React from 'react'
import { useForm } from "react-hook-form";
import './Login.scss'
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth, fetchRegister } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm({
      defaultValues: {
        email: "tsest@test.ru",
        password: "123145",
      },
      mode: "onChange",
    });
    const onSubmit = async (values) => {
      const data = await dispatch(fetchAuth(values));
      if (!data.payload) {
        return alert("Не удалось авторизоваться");
      }
      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
    };
    if (isAuth) {
      return <Navigate to="/" />;
    }
    return (
        <div className="row login">
            <div className="col-5 col-md-12">
                <div >
                    <h2>
                        Автоматизированная система оценки настроения сотрудников
                    </h2>
                    <h4>
                        Вход в аккаунт
                    </h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            // className={styles.field}
                            label="E-Mail"
                            type="email"
                            {...register("email", { required: "Укажите почту" })}
                            fullWidth
                        />
                        <input
                            // className={styles.field}
                            label="Пароль"
                            {...register("password", { required: "Укажите пароль" })}
                        />
                        <input
                            type="submit"
                            label="Отправить"
                        />
                    </form>
                </div>
            </div>
        </div>
      
    );
}
