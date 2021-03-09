export default function NumberButton({ buttonValue, id }) {
  return (
    <button type="button" id={id}>
      {buttonValue}
    </button>
  );
}
