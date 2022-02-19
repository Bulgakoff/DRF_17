import React from 'react'
import UserList from './components/User.js'
import TodoList from './components/Todo.js'

import axios from 'axios'



class App extends React.Component {

    constructor(props) {
        super(props)
        // const user1 = {id: 1, username: 'admin123', date_joined: '2022-01-02'}
        // const user2 = {id: 2, username: 'Alesha', date_joined: '2022-01-04'}
        // const users = [user1, user2]
        //
        // const todo1 = {id: 1, text: 'отжатся отт стенки 10 раз', created_at: '2022-01-02', user_id: user1}
        // const todo2 = {id: 2, text: 'убрать в багажнике', created_at: '2022-01-05', user_id: user1}
        // const todo3 = {id: 3, text: 'участие в соревнованиях', created_at: '2022-01-06', user_id: user2}
        // const todo4 = {id: 4, text: 'ВНЕСТИ МУСОР', created_at: '2022-01-07', user_id: user2}
        // const todoes = [todo1, todo2, todo3, todo4]
        // //
        // const project1 = {id: 1, name: 'спорт'}
        // const project2 = {id: 2, name: 'семья'}
        // const project3 = {id: 3, name: 'авто'}
        // const projects = [project1, project2, project3]
        // //
        // const ptu1 = {id: 1, project_id: project1, todo_id: todo1}
        // const ptu2 = {id: 2, project_id: project2, todo_id: todo4}
        // const ptu3 = {id: 3, project_id: project3, todo_id: todo2}
        // const ptu4 = {id: 4, project_id: project1, todo_id: todo3}
        // const ptus = [ptu1, ptu2, ptu3, ptu4]

        this.state = {
            // 'users': users,
            // 'todoes': todoes,
            // 'projects': projects,
            // 'ptus': ptus
            'users': [],
            'todoes': [],
            // 'projects': [],
            // 'ptus': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/user_base')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <div className="App">
                <UserList items={this.state.users}/>
                {/*<TodoList items={this.state.todoes}/>*/}
            </div>
        )
    }

}

export default App;