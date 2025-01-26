import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonBlock({text, onClick}) {
    return (
        <Button variant="outlined" color="error" onClick={onClick}>{text}</Button>
    );
}