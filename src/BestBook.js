import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            search: ""
        }
    }
    bookData = async() => {
        try {
          let bookData = await axios.get(`${process.env.MONGODB_URL}/books`);
          this.setState({
            books: bookData.data,
          })
        } catch (err) {
          console.log('There is an error: ', err.response);
        }
      }


    componentDidMount = () => {
        this.fetchBooks();
    }

    fetchBooks = async (bookName) => {
        let request = {
            method: 'GET',
            url: 'http://localhost:3001/books'
        }
        if (bookName) {
            request.url += `?name=${bookName}`
        }
        console.log(request);
        let response = await axios(request);
        this.setState({
            books: response.data,
        });
    }

    handleChange = (e) => {
        console.log('hand change running', e.traget.value)
        this.setState({ search: e.target.value });
    }

    render() {

        return (

            <Carousel className="carousel">
                {this.state.books.map((book) => {
                    <Carousel.Item key={book._id}>
                        <img
                            src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{book.title}</h3>
                            <p>{book.description}</p>
                            <h2>{book.status}</h2>
                        </Carousel.Caption>

                    </Carousel.Item>
                }
                {this.state.books.length > 0 ? (
                <Carousel>
                    {booksDisplay}
                </Carousel>
        ) : ( 
            <h3>No Books found!</h3>


                
            {/* ) 
            }


                    < div id = "books-component" >
                <input onChange={this.handleChange} type="text"/>
                <button onClick={() => this.fetchBooks(this.state.search)}>Search for Book</button>
                {
                        this.state.books.map(book => {
                            return (
                                <div>
                                    <h2>{book.title}</h2>
                                    <p>{book.description}</p>
                                    <p>{book.status}</p>
                                </div>
                            )
                        })
                    } */}
            </div >
        )
    }
}

export default BestBooks;