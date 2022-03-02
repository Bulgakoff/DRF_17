import React from 'react'


const UserItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.date_joined}</td>
        </tr>

    )
}


const UserList = ({items}) => {
    return (
        <table>
            <h1>О пользователях :</h1>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>date_joined</th>
            </tr>
            {items.map((item) => <UserItem item={item}/>)}
        </table>
    )
}

export default UserList