import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";

import "./FormInput.css";

const FormInput = (props) => {
    const [isActive, setActive] = useState(false);
    const [value, setValue] = useState("");

    const onFormClick = () => {
        setActive(true);
    };

    const onFormInput = (e) => {
        setValue(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.submitNote({ note: value });
    };

    return (
        <form className="form">
            <Form.Control
                size="lg"
                type="text"
                placeholder={isActive === true ? "" : "Add Note"}
                className=" border-dark text-center"
                style={
                    isActive === true ? { height: "200px" } : { height: "50px" }
                }
                value={value}
                onClick={onFormClick}
                onChange={onFormInput}
                onSubmit={onFormSubmit}
            />
            <button className="icon btn">
                <PlusCircleFill
                    color="royalblue"
                    size={40}
                    onClick={onFormSubmit}
                />
            </button>
        </form>
    );
};

export default FormInput;
