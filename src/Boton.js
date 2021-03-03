export default function Calculadora(props) {
  return (
    <div>
      <button id={props.id}>{props.text}</button>
    </div>
  );
}
