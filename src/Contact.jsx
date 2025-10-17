import React from "react";

function Contact() {

    const [name, setName] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // submit logic here
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <label htmlFor="user-name">Name <span id="name-warning"></span></label>
            <input
                id="user-name"
                name="user-name"
                type="text"
                maxLength={30}
                autoComplete="off"
                value={name}
                onChange={(e) => { setName(e.target.value); console.log('name:', e.target.value); }}
            />
            <button id="submit" type="submit">Send</button>
        </form>
    );
}

export default Contact;