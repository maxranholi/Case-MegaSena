import axios from "axios";

export const selectGame = (setData, setNumbers, setName, setGameNumber) => {
  axios
    .get(
      `https://apiloterias.com.br/app/resultado?loteria=quina&token=G3VxuMWAVANPw3W`
    )
    .then((res) => {
      setData(res.data);
      setNumbers(res.data.dezenas);
      setName(res.data.nome);
      setGameNumber(res.data.numero_concurso);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
