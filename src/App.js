import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import NoteCard from "./components/NoteCard";

const App = () => {
    const [notes, setNotes] = useState([]);

    const submitNote = (note) => {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
    };

    return (
        <div className="app">
            <Header />
            <FormInput submitNote={submitNote} />
            <div className="container row" style={{ margin: "75px auto" }}>
                {notes.map((item, index) => {
                    return <NoteCard key={index} data={item} />;
                })}
            </div>
            <Footer />
        </div>
    );
};

export default App;
