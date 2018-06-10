import React from 'react';
import { TextField, Typography} from '@material-ui/core';
import '../styles/search.css';
 
export default (props) => (
    <div>
        <Typography variant="title" gutterBottom align={'center'}>
            Ache uma gif! Ou 2. ¯\_(ツ)_/¯
        </Typography>

        <form onSubmit={props.handleEverything} className="formStyle">
            <TextField
                autoFocus
                placeholder="Digite o tema da gif e aperte enter. Ex: Game of Thrones"
                name="actualSearch"
                fullWidth
                margin={'dense'}
            />
        </form>

    </div>
);