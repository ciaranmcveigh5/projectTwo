import React from 'react'

function Contact() {
    return (
        <React.Fragment>
            <h1>Contact Us</h1>

            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                    Email:
                    <input type="text" name="email" />
                    Message:
                    <input style={messageStyle} type="text" name="message" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    )
}

const messageStyle = {
    width: '390px',
    height: '90px'
}

export default Contact