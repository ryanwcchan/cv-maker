// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

export default function GeneralInfo() {

    // const submitForm = (e) => {
    //     e.preventDefault()
    // }

    return (
        <>
            <div className="general-info-container">
                <h1 className="cv-name">JOHN SMITH</h1>
                <div className="contact-info">
                    <h2>johnsmith@email.com | (123)-456-7890 | 123 Main St, Anytown, USA 12345</h2>
                </div>
            </div>
            {/* <div className="general-info-container">
                <h1>General Information</h1>
                <Form className="general-info-form" onSubmit={submitForm} >
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="phone" placeholder="Enter phone" />
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>
            </div> */}
        </>
    )
}