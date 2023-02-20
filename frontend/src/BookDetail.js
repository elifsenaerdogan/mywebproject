import React, {Component} from 'react';
import {Table} from "reactstrap";


class BookDetail extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}
        </h3>
        <Table bordered>
          <thead>
          <tr>
            <th>#</th>
            <th>Kitap Adı </th>
            <th>Yazar Adı</th>
            <th>Yayınevi</th>
            <th>Sayfa Sayısı</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{this.props.currentBook}</td>
            <td>{this.props.currentBookWriter}</td>
            <td>{this.props.currentBookPublisher}</td>
            <td>{this.props.currentBookNumberPages}</td>
          </tr>

          </tbody>
        </Table>

      </div>
    );
  }
}

export default BookDetail;

