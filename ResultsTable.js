import React from "react";

export default ({ results }) => (
  <table border="1" style={{ marginTop: "10px" }}>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Genre</th>
        <th>Lead Actor</th>
      </tr>
    </thead>
    <tbody>
      {results.map(result => (
        <tr key={result.id}>
          <td>{result.id}</td>
          <td>{result.name}</td>
          <td>{result.genre}</td>
          <td>{result.lead_actor}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
