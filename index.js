import { Select } from "./select/select";
import "./select/styles.scss";
const select = new Select("#select", {
  placeholder: "please choose element",
  // selectedId: '2',
  data: [
    { id: "1", value: "React" },
    { id: "2", value: "Angular" },
    { id: "3", value: "Vue" },
    { id: "4", value: "Ember" },
    { id: "5", value: "Vanila.js" },
    { id: "6", value: "Nest" },
  ],
  onSelect(item) {
    console.log("Selected Item", item);
  },
});

window.all = select;
