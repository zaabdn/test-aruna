import "./App.css";
import { useState } from "react";

function App() {
  const [input1, setInput1] = useState({ value: 0, checked: false });
  const [input2, setInput2] = useState({ value: 0, checked: false });
  const [input3, setInput3] = useState({ value: 0, checked: false });

  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (type: string) => {
    let total = 0;

    if (
      [input1.checked, input2.checked, input3.checked].filter(
        (item) => item === true
      ).length > 1
    ) {
      const filter = [input1, input2, input3].filter(
        (item) => item.checked === true
      );

      if (type === "+") {
        setError("");
        for (let i = 0; i < filter.length; i++) {
          total += filter[i].value;
        }
        setResult(total);
      } else if (type === "-") {
        setError("");
        for (let i = 0; i < filter.length; i++) {
          total -= filter[i].value;
        }
        setResult(total);
      } else if (type === "x") {
        setError("");
        for (let i = 0; i < filter.length; i++) {
          total *= filter[i].value;
        }
        setResult(total);
      } else if (type === "/") {
        setError("");
        for (let i = 0; i < filter.length; i++) {
          total /= filter[i].value;
        }
        setResult(total);
      }
    } else {
      setError("Gagal karena form yang tersedia hanya satu.");
    }
  };

  return (
    <div>
      <div style={{ padding: 20 }}>
        <div>
          <input
            type="number"
            onChange={(e) =>
              setInput1({
                value: parseInt(e.target.value),
                checked: input1.checked,
              })
            }
            style={{ padding: 5 }}
          />
          <input
            type="checkbox"
            onClick={() =>
              setInput1({ value: input1.value, checked: !input1.checked })
            }
          />
        </div>
        <div style={{ marginTop: 12, marginBottom: 12 }}>
          <input
            type="number"
            onChange={(e) =>
              setInput2({
                value: parseInt(e.target.value),
                checked: input2.checked,
              })
            }
            style={{ padding: 5 }}
          />
          <input
            type="checkbox"
            onClick={() =>
              setInput2({ value: input2.value, checked: !input2.checked })
            }
          />
        </div>
        <div>
          <input
            type="number"
            onChange={(e) =>
              setInput3({
                value: parseInt(e.target.value),
                checked: input3.checked,
              })
            }
            style={{ padding: 5 }}
          />
          <input
            type="checkbox"
            onClick={() =>
              setInput3({ value: input3.value, checked: !input3.checked })
            }
          />
        </div>
        <div
          style={{
            marginTop: 12,
          }}
        >
          <button onClick={() => handleSubmit("+")}>+</button>
          <button
            onClick={() => handleSubmit("-")}
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            -
          </button>
          <button onClick={() => handleSubmit("x")}>x</button>
          <button onClick={() => handleSubmit("/")} style={{ marginLeft: 5 }}>
            /
          </button>
        </div>
        <div style={{ marginTop: 12 }}>
          <p>{error === "" ? `Hasil ${result}` : error}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
