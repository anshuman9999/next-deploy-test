import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/sql/sql";
import "codemirror/lib/codemirror.css";

const Editor = (props) => (
  <div style={{ width: 500, height: 500 }}>
    <CodeMirror
      className="codemirror-wrapper"
      {...props}
      value={props.value}
      options={{ mode: "sql", lineNumbers: true }}
      onChange={() => null}
    />
  </div>
);

export default Editor;
