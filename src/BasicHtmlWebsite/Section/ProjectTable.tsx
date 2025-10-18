import { Table } from "react-bootstrap";

export const ProjecTable = () => {
  return (
    <div>
      <Table
        bordered
        style={{ width: "25rem", height: "25rem", fontSize: "18px" }}
        className="px-5"
      >
        <thead>
          <tr>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML only portfolio</td>
          </tr>
          <tr>
            <td>Calculator</td>
          </tr>
          <tr>
            <td>Quiz App</td>
          </tr>
          <tr>
            <td>Countdown Timer</td>
          </tr>
          <tr>
            <td>Product Upcoming Page</td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
