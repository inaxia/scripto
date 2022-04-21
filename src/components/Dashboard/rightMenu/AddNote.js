import { useState } from 'react';
import './RightMenu.css';
import { addData } from "../../../firebase";
import { nanoid } from 'nanoid';



const AddNote = (props) => {
// 	const [noteText, setNoteText] = useState('');
// 	const characterLimit = 200;

	

	const [text , setText] = useState("");
	const [name, setName] = useState("");
	const characterLimit = 200;
  
	  const submit = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setName(props.names);
			addData(props.names, text,);
		}
		setText("");
	};
	  
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setText(event.target.value)
		}
	};
	return (
		<>
		<div className="post new">
            {/* <textarea rows='1' placeholder='Heading' value={text} onChange={(e) => setText(e.target.value)} ></textarea> */}
            <textarea rows='5' placeholder='Start Writing...' className="feedText" value={text} onChange={handleChange}  ></textarea>

            {/* <textarea rows='5' placeholder='Start Writing...' value={noteText} onChange={handleChange} ></textarea> */}
            <div className=' row note-footer'>
              <button className='publish col' onClick={submit}>
                Publish
              </button>
			  <div className="col d-flex justify-content-end">
			  {characterLimit - text.length} Remaining
			  </div>
            </div>
        </div>
				</>

		
	);
};

export default AddNote;
