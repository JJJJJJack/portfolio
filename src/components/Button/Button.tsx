import "./Button.scss";

export default function Button({ onClick = () => {}, children }) {
  return (
    <button className="Button-styling rounded-xl p-2 text-white" {...{ onClick }}>
      {children}
    </button>
  );
}
