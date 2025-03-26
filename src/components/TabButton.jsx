export default function TabButton({children, onClick}) {
  // document.querySelector("button").addEventListener("click", () => {});

  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  ); // This is a prop set by React.
}
