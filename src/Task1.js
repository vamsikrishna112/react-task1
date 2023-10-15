import {useState} from 'react';
import './styles.css';
function Task1(){
    const [text, settext] = useState('');

    const wordcount = () => {
        var a = text.split(" ");
        return a.filter(word => word !== "").length;
    }
    
    return(
        <div class="border">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea rows="7" cols="30" onKeyUp={(msg) => settext(msg.target.value)} class="message"></textarea>
            <p>Word count: {wordcount()}</p>
        </div>
    )
}

export default Task1;