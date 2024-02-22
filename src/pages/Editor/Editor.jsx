import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";

import { EditorData } from "../../data/dummy";
import { Header } from "../../components";

import "../css/Editor.css";

const Editor = () => {
  const [data, setData] = useState(EditorData);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <div id="text-editor">
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={data}
          onChange={setData}
          className="editor-input"
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
};

export default Editor;
