import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUnblock({text, onClick}) {
    return (
            <Button variant="outlined" onClick={onClick}>{text}</Button>
    );
}