import Table from 'react-bootstrap/Table';

export default function Report_Table({regData}) {
  const {fName, email, password, rememberMe} = regData;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={3}>Registration Form</th>
        </tr>
        <tr>
          <th>#</th>
          <th>Attributes</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>First Name</td>
          <td>{fName}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Email</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Password</td>
          <td>{password}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Remember</td>
          <td>{rememberMe ? 'True' : 'False'}</td>
        </tr>
      </tbody>
    </Table>
  );
}