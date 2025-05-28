import React, { useReducer, useState } from 'react';
import {
    Box,
    Button,
    Container,
    List,
    ListItem,
    ListItemText,
    IconButton,
    TextField,
    Typography,
    Paper
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
        default:
            return state;
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState('');
    const [editId, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            dispatch({ type: 'EDIT_TODO', payload: { id: editId, text } });
            setEditId(null);
        } else {
            dispatch({ type: 'ADD_TODO', payload: text });
        }
        setText('');
    };

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setText(todo.text);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Todo App with useReducer + MUI
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Enter todo"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained">
                        {editId ? 'Update' : 'Add'}
                    </Button>
                </Box>

                <List>
                    {todos.map((todo) => (
                        <ListItem
                            key={todo.id}
                            secondaryAction={
                                <Box>
                                    <IconButton edge="end" onClick={() => handleEdit(todo)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            }
                        >
                            <ListItemText primary={todo.text} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default TodoApp;
