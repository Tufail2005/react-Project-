import "./InputBox.css";

export function InputBox({ onChange, label, placeholder, type }) {
  return (
    <div>
      <div className="label">{label}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="inputbox"
      />
    </div>
  );
}
