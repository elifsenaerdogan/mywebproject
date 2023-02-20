import React, {Component} from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap";
import BookDetail from "./BookDetail";


class App extends Component {
  state = {currentCategory: "",books : [],currentBook :"",currentBookWriter:"",currentBookPublisher:"",currentBookNumberPages:""
  };

  componentDidMount() {
    this.getBooks();
  }

  changeCategory = (category) => {
    this.setState({currentCategory:category.categoryName});
    this.getBooks(category.id);

  }

  changeBook = (book) => {
    this.setState({currentBook:book.book_name});
    this.setState({currentBookWriter:book.writer_name});
    this.setState({currentBookPublisher:book.publisher_name});
    this.setState({currentBookNumberPages:book.number_pages});
  };

  getBooks = id => {
    let url="http://localhost:8090/book/books";
    if(id){
      url += "/category/" + id
    }
    fetch(url)
      .then(response => response.json())
      .then(data=>this.setState({books:data}));

  }

  render() {
    let productInfo={title:"Seçili Kitap"};
    let categoryInfo={title:"Kategoriler"};
    let bookdetailInfo={title:"Kitap Bilgileri"};
    return(
      <div>
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
                            changeCategory={this.changeCategory}
                            info={categoryInfo}/>
            </Col>
            <Col xs="9">

              <ProductList books={this.state.books}
                           changeBook={this.changeBook}
                           currentBook={this.state.currentBook}
                           currentCategory={this.state.currentCategory}
                           info={productInfo}  />
            </Col>
            <Col>
              <BookDetail  currentBook={this.state.currentBook}
                           currentBookWriter={this.state.currentBookWriter}
                           currentBookPublisher={this.state.currentBookPublisher}
                           currentBookNumberPages={this.state.currentBookNumberPages}
                           info={bookdetailInfo}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

