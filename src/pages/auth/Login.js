/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Checkbox, Row, Col, Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux';
import { callMockData } from 'redux/reducers/authReducer';
import { doAlert } from '../../components/alert/AlertComponent';

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jimmy',
    lastName: 'Greeny23',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['not_loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class Login extends React.PureComponent {
  componentDidMount() {
    this.props.callMockData();
  }

  render() {
    return (
      <>
        <div
          style={{
            border: '1px solid blue',
            padding: '10px',
          }}
        >
          <h2>Login here</h2>
          <Button
            onClick={() => doAlert('This is a message', 'success')}
            type="primary"
          >
            click me Now
          </Button>
          <Checkbox>Checkbox</Checkbox>
          <div>
            <Row gutter={8}>
              <Col lg={12} xs={24} style={{ border: '1px solid skyblue' }}>
                col-12
              </Col>
              <Col lg={12} xs={24} style={{ border: '1px solid skyblue' }}>
                col-12
              </Col>
            </Row>
            <div style={{ overflowX: 'scroll' }}>
              <Table dataSource={data} style={{ color: 'blue' }}>
                <ColumnGroup title="Name">
                  <Column
                    title="First Name"
                    dataIndex="firstName"
                    key="firstName"
                  />
                  <Column
                    title="Last Name"
                    dataIndex="lastName"
                    key="lastName"
                  />
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                  title="Tags"
                  dataIndex="tags"
                  key="tags"
                  render={tags => (
                    <span>
                      {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                          {tag}
                        </Tag>
                      ))}
                    </span>
                  )}
                />
                <Column
                  title="Action"
                  key="action"
                  render={(text, record) => (
                    <span>
                      <a>Invite {record.lastName}</a>
                      <Divider type="vertical" />
                      <a>Delete</a>
                    </span>
                  )}
                />
              </Table>
            </div>
          </div>
          {this.props.mockData.content.map((entry, indx) => (
            // eslint-disable-next-line react/no-array-index-key
            <h5 key={indx}>{entry.first_name}</h5>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  mockData: state.mockData,
});
const mapDispatchToProps = dispatch => ({
  callMockData: () => dispatch(callMockData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
