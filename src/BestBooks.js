import React from 'react';
import axios from 'axios';
import { Button } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      search: ""
    }
  }
  componentDidMount = () => {
    // fetch our books from the backend
    this.requestBooks();
  }

  requestBooks = async () => {
    console.log('booksRunning')
    let response = await axios.get('http://localhost:3000/books');
    this.setState({ books: response.data });
    console.log('response')
  }
  bookData = async () => {
    try {
      // let bookData = await axios.get(`${process.env.MONGODB_URL}/books`);
      let bookData = await axios.get(`http://localhost:3001/books`);
      console.log(bookData)
      this.setState({
        books: bookData.data,
      })
    } catch (err) {
      console.log('There is an error: ', err);
    }
  }


  // componentDidMount = () => {
  //   this.bookData();
  // }

  // fetchBooks = async (bookName) => {
  //     let request = {
  //         method: 'GET',
  //         url: 'http://localhost:3001/books'
  //     }
  //     if (bookName) {
  //         request.url += `?name=${bookName}`
  //     }
  //     console.log(request);
  //     let response = await axios(request);
  //     this.setState({
  //         books: response.data,
  //     });
  // }

  handleChange = (e) => {
    console.log('hand change running', e.traget.value)
    this.setState({ search: e.target.value });
  }

  render() {
    console.log(this.state)
    return (
      <div style={{ height: '700px', width: '100%' }}>
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
                </Carousel.Caption>
                </Carousel.Item>
          )
        })}
        </Carousel>
        ) : (
          <h3>No books found!</h3>

          <Button onClick
      </div>
    )

    // return (
          // <>
          //  {/* <h2>These are the best books</h2> */}
          //  {this.state.books.length?(
          //   <Carousel books={this.state.books}/>
          //  ):<h3>No books found!</h3>}
           
   

           }
          }

           


        

        


export default BestBooks;