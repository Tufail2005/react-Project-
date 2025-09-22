import "./InputBox.css";

export function InputBox({ onChange, label, placeholder }) {
  return (
    <div>
      <div className="label">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="inputbox"
      />
    </div>
  );
}
