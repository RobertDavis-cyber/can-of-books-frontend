import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Carousel extends React.Component {

  render() {
    return (
      <div style={{ height: '500px', width: '100%' }}>
        <Carousel>
          <Carousel.Item>
            {/* We need an image to render :( */}
            <>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
            <h4>Title</h4>
            <p>{this.book.title}</p>
            <h4>Description</h4>
            <p>{this.description}</p>
            <h4>Status</h4>
            <p>{this.status}</p>
            <Button
            onClick={() => this.handleDeleteBook(Book)}>delete book</Button>
          </Carousel.Caption>
          </>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Carousel;
