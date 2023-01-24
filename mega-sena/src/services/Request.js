import axios from "axios";

export const selectGame = (setData, setNumbers, setName, setGameNumber, prize) => {
  axios
    .get(
      `https://apiloterias.com.br/app/resultado?loteria=${prize}&token=G3VxuMWAVANPw3W`
    )
    .then((res) => {
      setData(res.data);
      setNumbers(res.data.dezenas);
      setName(res.data.nome);
      setGameNumber(res.data.numero_concurso);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
