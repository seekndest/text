import { useState, useEffect } from "react"


function NoteTaker() {
    const [text, setText] = useState("");
    useEffect(() => {
        const savedNote = localStorage.getItem('savedNote');
        if (savedNote) {
            setText(savedNote)
        }
    }, [])
    useEffect(() => {
    localStorage.setItem("savedNote", text);
    }, [text])
    return (
        <div>
            <h1>Мои заметки</h1>
            <textarea value={text} onChange={(e) => {setText(e.target.value)}}></textarea>
        </div>
    )
}

export default NoteTaker;