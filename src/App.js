import styles from "./App.module.scss";

const list = [
  {
    text: "sef;osdfsdflkhsdfqqqwpppkdf5648978421",
  },
  {
    text: "sadfg;lkhfs698756",
  },
  {
    text: "asdèlasfjdzfv6sd5f4gsdf6g4fd=/=",
  },
  {
    text: "sef;ossdfgsgdfg5454554",
  },
  {
    text: "sef;osdfsdfl===//=/fsdfèlkhdff",
  },
];

function App() {
  return (
    <div className={styles.App}>
      <div className={styles["notes-list"]}>
        <ul>
          {list.map((item) => {
            return <li>{item.text}</li>;
          })}
        </ul>
      </div>
      <div className={styles["visu-panel"]}>visualisation droite</div>
    </div>
  );
}

export default App;
