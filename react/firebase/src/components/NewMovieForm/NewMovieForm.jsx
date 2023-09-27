import styles from "./NewMovieForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

const NewMovieForm = ({ submitFunc }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitFunc)}>
      <div className={styles.field}>
        <label>Title</label>
        <input
          className={errors.title ? styles.input_error : ""}
          type="text"
          placeholder="title"
          {...register("title")}
        />
        <div className={styles.error_container}>
          {errors.title && (
            <span className={styles.error_message}>{errors.title.message}</span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label>Year</label>
        <input
          className={errors.year ? styles.input_error : ""}
          type="number"
          {...register("year")}
        />
      </div>
      <div className={styles.error_container}>
        {errors.year && (
          <span className={styles.error_message}>{errors.year.message}</span>
        )}
      </div>
      <div className={styles.field}>
        <label>Genre</label>
        <input
          className={errors.genre ? styles.input_error : ""}
          type="text"
          placeholder="genre"
          {...register("genre")}
        />
        <div className={styles.error_container}>
          {errors.genre && (
            <span className={styles.error_message}>{errors.genre.message}</span>
          )}
        </div>
      </div>
      <div className={styles.field}>
        <label>Director</label>
        <input
          className={errors.director ? styles.input_error : ""}
          type="text"
          placeholder="director"
          {...register("director")}
        />
        <div className={styles.error_container}>
          {errors.director && (
            <span className={styles.error_message}>
              {errors.director.message}
            </span>
          )}
        </div>
      </div>
      <div className={styles.field}>
        <label>Image Link</label>
        <input
          className={errors.imageLink ? styles.input_error : ""}
          type="text"
          placeholder="URL"
          {...register("imageLink")}
        />
        <div className={styles.error_container}>
          {errors.imageLink && (
            <span className={styles.error_message}>
              {errors.imageLink.message}
            </span>
          )}
        </div>
      </div>
      <button>Create Movie</button>
    </form>
  );
};

export default NewMovieForm;
