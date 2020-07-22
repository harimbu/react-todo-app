import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import { db, firebase } from './config/firebase';
import { Button, Input, Form } from 'antd';

import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('todos')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setTodos(
                    snapshot.docs.map(doc => ({
                        todo: doc.data().todo,
                        id: doc.id
                    }))
                )
            );
    }, []);

    const addTodo = e => {
        if (input === '') return;
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('');
    };

    return (
        <div className='container'>
            <h1>React Todo App</h1>
            <Form onFinish={addTodo} layout='inline'>
                <Form.Item>
                    <Input
                        type='text'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        입력
                    </Button>
                </Form.Item>
            </Form>
            <ul className='todo__list'>
                {todos.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default App;
