import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class BookModal extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.isModalShown} onHide={this.props.handleClosedModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>add book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                        <Form>
                            <Form.Group controlId='bookName'>
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter book name"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text"name="description" placeholder="Add description" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Label>Book Status</Form.Label>
                                <Form.Control type="text" name="status" placeholder="The status" />
                            </Form.Group>
                            <Button variant="secondary" onClick={this.props.hideModal}>
                                Close
                            </Button>

                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default BookModal;