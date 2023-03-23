import styles from "./Form.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../Main/Button/Button";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();

  const onSubmit = async (data) => {
    history(-1);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1 className={styles.title}>Subscription request</h1>
        <p className={styles.form_field}>
          <label>First Name: </label>
          <input
            name="firstName"
            {...register("firstName", { required: true })}
            placeholder="Monica"
            className={styles.input}
          />
          {errors.firstName && <i>This field is required</i>}
        </p>

        <p className={styles.form_field}>
          <label>Last Name: </label>
          <input
            name="lastName"
            {...register("lastName", { required: true })}
            placeholder="Geller"
            className={styles.input}
          />
          {errors.lastName && <i>This field is required</i>}
        </p>

        <p className={styles.form_field}>
          <label>Email: </label>
          <input
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            placeholder="monica_geller@gmail.com"
            className={styles.input}
          />
          {errors.email && <i>Invalid email address</i>}
        </p>
        <p className={styles.buttons}>
          <button
            type="submit"
            className={styles.buttons_input}
            aria-label="Send request"
          >
            Send request
          </button>
        </p>
        <Button
          feature="form"
          func={onSubmit}
          content={<i id="leftContent" className="bx bx-chevron-left"></i>}
        />
      </form>
    </div>
  );
};

export default Form;
