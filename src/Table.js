import React,{Component} from 'react';

const TableHeader= ()=>{
  return (
    <thead>
      <tr class="row"> 
        <th class="col-sm-2">Company</th>
        <th  class="col-sm-2">Role</th>
        <th  class="col-sm-2">RH</th>
        <th  class="col-sm-1">Contrat</th>
        <th  class="col-sm-1">SA</th>
        <th  class="col-sm-2">Address</th>
        <th  class="col-sm-1">Link</th>
        <th  class="col-sm-1">Delete</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr class="row" key={index}>
        <td class="col-sm-2">{row.Company}</td>
        <td class="col-sm-2">{row.Role}</td>
        <td class="col-sm-2">{row.RH}</td>
        <td class="col-sm-1">{row.Contrat}</td>
        <td class="col-sm-1">{row.SA}</td>
        <td class="col-sm-2">{row.lieu}</td>
        <td class="col-sm-1"><a href={row.lien}>go-to</a></td>
        <td class="col-sm-1"> <button onClick={() => props.removeCharacter(index)} >Delete</button></td>
      </tr>
    )
  }
  )
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
