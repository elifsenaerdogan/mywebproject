import React, {Component} from 'react';
import {Table} from "reactstrap";

class ProductList extends Component {

  state = {
    books : [],

  };

  changeBook = (book) => {
    this.setState({currentBook:book.book_name});
    this.setState({currentBookWriter:book.writer_name});
    this.setState({currentBookPublisher:book.publisher_name});
    this.setState({currentBookNumberPages:book.number_pages});
  };

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Kitap Adı
            </th>
          </tr>
          </thead>
          <tbody>
          {this.props.books.map(book =>
            <tr
              onClick = { () =>  this.props.changeBook(book)} key={book.id}>
              <th scope="row">{book.id}
              </th>
              <td>
                {book.book_name}
              </td>

            </tr>
          )
          }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;

