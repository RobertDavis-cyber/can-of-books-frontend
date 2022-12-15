import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


class UpdateBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.book._id,
            title: this.props.book.title,
            description: this.props.book.description,
            status: this.props.book.status
        }
    }

    handleTitle = (e) => {
        this.setState({ title: e.target.value });
    }
    handleDescription = (e) => {
        this.setState({ description: e.target.value });
    }
    handleStatus = (e) => {
        this.setState({ status: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let book = {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status,
            _id: this.state._id
        }
        this.props.handleUpdate(book);
        this.props.handleClosedModal();
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClosedModal}>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId='bookName'>
                                <Form.Label>Update Book Name</Form.Label>
                                <Form.Control type="text" name="title" onChange={this.handleTitle} placeholder={this.props.book.title}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Update Book Description</Form.Label>
                                <Form.Control type="text"name="description" onChange={this.handleDescription} placeholder={this.props.book.description} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="status">
                                <Form.Label>Update Book Status</Form.Label>
                                <Form.Control type="text" name="status" onChange={this.handleStatus} placeholder={this.props.book.status} />
                            </Form.Group>
                            <Button variant="secondary" type='submit'>
                                Update this Book
                            </Button>

                        </Form>
                    
                </Modal>
            </div>
        )
    }
}

export default UpdateBooks;
