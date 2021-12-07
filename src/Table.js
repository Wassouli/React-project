import React,{Component} from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Company</th>
        <th>Role</th>
        <th>RH</th>
        <th>Contrat</th>
        <th>SA</th>
        <th>lieu</th>
        <th>lien</th>
        <th>Delete</th>
      </tr>
    </thead>
  )
}
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.Company}</td>
        <td>{row.Role}</td>
        <td>{row.RH}</td>
        <td>{row.Contrat}</td>
        <td>{row.SA}</td>
        <td>{row.lieu}</td>
        <td ><a href={row.lien}>{row.lien}</a></td>
        <td> 
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>


      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const {characterData, removeCharacter} = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}
export default Table
