import styles from "./Form.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();

  const onSubmit = async (data) => {
    history(-1)
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
        
        <input type="submit" value="Send request" className={styles.button}/>
      </form>
    </div>
  );
};

export default Form;

/* const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const history = useNavigate();

  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Subscription request</h1>

      <label className={styles.label} htmlFor="first-name">
        First Name:{" "}
      </label>
      <input
        className={styles.input}
        value={firstNameValue}
        type="text"
        id="first-name"
        placeholder="Monica"
        onChange={(e) => setFirstNameValue(e.target.value)}
      />

      <label htmlFor="last-name">Last Name: </label>
      <input
        value={lastNameValue}
        type="text"
        id="last-name"
        placeholder="Geller"
        onChange={(e) => setLastNameValue(e.target.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        value={emailValue}
        type="email"
        id="email"
        placeholder="monika_geller73@gmail.com"
        onChange={(e) => setEmailValue(e.target.value)}
      />

      <p>
        See subscription details
        <a href="https://help.netflix.com/en/node/24926">here</a>
      </p>

      <input type="submit" value='send request'/>

      <Button
        content={
          <span>
            <i className="bx bx-play"></i>
            Send request
          </span>
        }
      />
      <Button
        content={
          <span>
            <i className="bx bx-play"></i>
            Go Back
          </span>
        }
        func={() => {
          history(-1);
        }}
      /> 
    </form>
  ); */
