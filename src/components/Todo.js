import React, { useState } from 'react';
import { db } from '../config/firebase';
import { Modal, Button, Input, Form } from 'antd';

const Todo = ({ todo }) => {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = e => {
        if (input === '') return;
        db.collection('todos')
            .doc(todo.id)
            .set({ todo: input }, { merge: true });
        setShow(false);
        setInput('');
    };

    return (
        <li className='todo__item'>
            <span>{todo.todo}</span>
            <div className='btn__area'>
                <Button onClick={e => setShow(true)}>수정</Button>
                <Button
                    onClick={e => db.collection('todos').doc(todo.id).delete()}>
                    삭제
                </Button>
            </div>
            <Modal
                title='수정하기'
                visible={show}
                onCancel={e => setShow(false)}
                footer={[]}>
                <Form layout='inline' onFinish={updateTodo}>
                    <Form.Item>
                        <Input
                            type='text'
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder={todo.todo}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            수정
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </li>
    );
};

export default Todo;
