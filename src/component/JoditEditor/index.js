import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import { Grid } from '@material-ui/core';

export default function TestJoditEditor({}) {
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

	return (
        
            <JoditEditor
            	//ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} 
                onChange={newContent => console.log(newContent)}
            />
            
        );
}