import React from "react";
import './Contact.css'
function Contact() {

    const [name, setName] = React.useState("");
    const [nameError, setNameError] = React.useState("");

    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");


    const [message, setMessage] = React.useState("");
    const [messageError, setMessageError] = React.useState("");

    function handleSubmit(e) {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        setEmailError("")
        setNameError("")
        if (!nameRegex.test(name)) {
            setNameError("Please enter a valid name")
            e.preventDefault();

        } else if (!emailRegex.test(email)) {

            setEmailError("Please enter a valid email")
            e.preventDefault();

        } else if (!message) {
            setMessageError("Please enter a message")
            e.preventDefault();
        } else {
            setEmailError("")
            setNameError("")

        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>

            <label htmlFor="user-name">Name <span id="name-warning" >{nameError}</span></label>
            <input
                id="user-name"
                name="user-name"
                type="text"
                maxLength={30}
                autoComplete="off"
                value={name}
                onChange={(e) => { setName(e.target.value); console.log('name:', e.target.value); }}
            />
            <label htmlFor="user-email">Email <span id="email-warning" >{emailError}</span></label>
            <input
                id="user-email"
                name="user-email"
                type="text"
                autoComplete="off"
                value={email}
                onChange={(e) => { setEmail(e.target.value); console.log('email:', e.target.value); }}
            />
            <label htmlFor="user-message">Message <span id="message-warning" >{messageError}</span></label>
            <textarea
                id="user-message"
                maxLength={200}
                autoComplete="off"
                value={message}
                onChange={(e) => { setMessage(e.target.value); console.log('message:', e.target.value); }}
            />
            <button id="submit" type="submit">Send</button>
        </form>
    )
}

export default Contact