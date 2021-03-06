import React from 'react'
// import {Link} from 'react-router-dom'

const ProjectItem = ({item}) => {
    return (
        <tr>
           {/*<td><Link to={`project/${item.id}`}>{item.id}</Link></td>*/}
            <td>{item.id}</td>
            <td>{item.name}</td>
        </tr>
    )
}


const ProjectList = ({items}) => {
    return (
        <table>
            <h1>О проектах :</h1>
            <tr>
                <th>ID</th>
                <th>name</th>
            </tr>
            {items.map((item) => <ProjectItem item={item} />)}
        </table>
    )
}


export default ProjectList