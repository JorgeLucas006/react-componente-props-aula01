const Carta = (props) => {
  return (
    <p>
      Estou escrevendo esta carta por causa da atividade de Props de react
      <br /><br />
      De: {props.from} <br />
      Para: {props.to}
    </p>
  )
}

export default Carta;