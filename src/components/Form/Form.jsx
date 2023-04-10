import { useState } from "react";
import validation from "./validation";
import { useNavigate } from "react-router-dom";

const Form = ({ login }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    Email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    Email: "",
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="Email"
          value={userData.Email}
          onChange={handleInputChange}
        />
        {errors.Email && <p>{errors.Email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
