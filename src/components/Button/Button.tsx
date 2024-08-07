import "./Button.scss";

export default function Button({ className = "", onClick = () => {}, children }) {
  return (
    <button className={`Button-styling rounded-xl p-2 text-white ${className}`} {...{ onClick }}>
      {children}
    </button>
  );
}
