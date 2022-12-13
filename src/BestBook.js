import React from 'react';
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';

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
        this.bookData();
    }

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
           <h2>These are the best books</h2>
        )
    }
}

export default BestBooks;