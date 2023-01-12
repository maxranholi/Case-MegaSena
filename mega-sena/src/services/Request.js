import axios from "axios";

export const selectGame = (setData) => {
  axios
    .get(
      `https://apiloterias.com.br/app/resultado?loteria=quina&token=G3VxuMWAVANPw3W`
    )
    .then((res) => {
      setData(res.data)
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
