import React from "react";
import "./NoteCard.css";
const NoteCard = ({ data: { note } }) => {
    return (
        <div class="col-sm-6">
            <div className="card text-center">
                <div class="card-body">
                    <p class="card-text">{note}</p>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
