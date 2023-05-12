import { useState } from "react";
import validation from "./validation";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css"
const Form = ({ login }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    navigate("/home");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className={style.background}>
    <form onSubmit={handleSubmit} className={style.gridContainer}>
        <div className={style.container}>
        <label htmlFor="email">Email</label>
        <input
          className={style.input}
          type="text"
          name="email"
          value={userData.Email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          className={style.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit" className={style.LoginButton}>Login</button>
      </div>
      </form>
      </div>
  );
};

export default Form;
