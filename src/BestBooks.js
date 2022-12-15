import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import BookModal from './BookModal';
import UpdateBooks from './updateBooks';

class BestBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      search: '',
      isModalShown: false,
      showUpdateModal: false,
      bookToUpdate: null
    }
  }
  componentDidMount = () => {
    // fetch our books from the backend
    this.bookData();
  }

  showModal = () => {
    this.setState({
      isModalShown: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalShown: false,
    })
  }
  OpenUpdateModal = (book) => this.setState({ showUpdateModal: true, bookToUpdate:book})
  closeUpdateModal = () => this.setState({ showUpdateModal: false, bookToUpdate: null})
    
  

  bookData = async () => {
    try {
      console.log('fetching books')
      //  let bookData = await axios.get(`${process.env.MONGODB_URL}/books`);
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      console.log(bookData)
      this.setState({
        books: bookData.data,
      })
    } catch (err) {
      console.log('There is an error: ', err);
    }
  }
  postBook = async () => {
    try {
      let bookAdded = await axios.post(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: [...this.state.books, bookAdded.data]
      });
    } catch (err) {
      console.log('An error has occured ', err)
    }
  }

  deleteBook = async (id) => {
    console.log("inside delete function")
    try {
      let url = `https://can-of-books-yido.onrender.com/books/${id}`;
      await axios.delete(url);
      let deletedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: deletedBooks,
      });
    } catch (err) {
      console.log('An error has occured ', err)
    }
  }

  updateRequest = async (book) => {
    console.log(book);
    let response = await axios.put(process.env.REACT_APP_SERVER + `/books/${book._id}`, book);
    let updateBooks = response.data;
    console.log(this.state.books, updateBooks);

    this.bookData();
  }

  handleChange = (e) => {
    console.log('hand change running', e.traget.value)
    this.setState({ search: e.target.value });
  }



  render() {
    console.log(this.state)
    return (
      <div style={{ height: '700px', width: '100%' }}>
        {this.state.books.length > 0 ? (


          <Carousel>
            {this.state.books.map(book => {
              return (
                <Carousel.Item>
                  <img
                    className="d-bock w-100"
                    src="https://via.placeholder.com/150"
                    alt={book.title}
                  />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>{book.status}</p>

                    <Button
                      varient="danger"
                      onClick={() => this.deleteBook(book._id)}
                    >
                      Delete the book!
                    </Button>
                    <Button
                    varient="update"
                    onClick={() => this.OpenUpdateModal(book)}
                    >
                      Edit a book entry!
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>



        ) : (
          <h3>No books found!</h3>)
        }

        <Button onClick={this.showModal}>
Add a book.
        </Button>
        <BookModal show={this.state.isModalShown} handleClosedModal={this.closeModal}/>
        {this.state.bookToUpdate?
        <UpdateBooks show={this.state.showUpdateModal} handleClosedModal={this.closeUpdateModal} book={this.state.bookToUpdate} handleUpdate={this.updateRequest}/>
:null
        }



      </div>
    )


  }
}


export default BestBooks;