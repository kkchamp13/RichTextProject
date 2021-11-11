import React, { createRef, useRef, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import JoditEditor from "jodit-react";

export default function Image({ imageUrl }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [titleImage, setTitleImage] = useState("")

  const config = {
    readonly: false,

    height: 500,

    buttons: [
      "source",
      "|",
      "bold",
      "strikethrough",
      "underline",
      "italic",
      "|",
      "font",
      "fontsize",
      "paragraph",
      "brush",
      "|",
      "left",
      "center",
      "right",
      "justify",
      "|",
      "ul",
      "ol",
      "|",
      "outdent",
      "indent",
      "|",
      "image",
      "table",
      "link",
      "|",
      "hr",
      "copyformat",
      "eraser",
      "fullsize",
      "|",
      "undo",
      "redo",
      "|",
    ],
    
    // image:{
    //   "dialogWidth": 600,
    //   "openOnDblClick": true,
    //   "editSrc": true,
    //   "useImageEditor": true,
    //   "editTitle": true,
    //   "editAlt": true,
    //   "editLink": true,
    //   "editSize": true,
    //   "editBorderRadius": true,
    //   "editMargins": true,
    //   "editClass": true,
    //   "editStyle": true,
    //   "editId": true,
    //   "editAlign": true,
    //   "showPreview": true,
    //   "selectImageAfterClose": true
    // }
  };

  // Concat image(in html format) in latest content
  useEffect(() =>{
    

  })


  useEffect(() => {
    if (imageUrl != "") {
      setContent(
        content.concat(`<img src="${imageUrl}" alt="" width="300px" ></img>`)
        
      );
    }
  }, [setContent, imageUrl]);

  return (
    <div style={{ height: 500, width: 1000, border: "1px solid black" }}>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        editimage={true}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => console.log(newContent)}
      />
    </div>
  );
}
