import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Please enter a title"),
  year: yup.number().required("Please enter a year").min(1900).max(2025),
  director: yup.string().required("Please enter a director"),
  genre: yup.string().required("Please enter a genre"),
  imageLink: yup
    .string()
    .required("Please add image link")
    .url("Image link must be a URL"),
});
