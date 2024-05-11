export default function Button({ id, name, onClick }) {
  return (
    <button className={`btn-container ${id}`} id={id} onClick={onClick}>
      {name}
    </button>
  );
}