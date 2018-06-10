import React from 'react';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { Button } from '@material-ui/core';

const ResultGif = (props) => {
    return (
        <div>
            
            {
                props.gif_array.map((gif, index) => {
                    return (
                        <div key={index}>
                            <Typography variant="subheading" gutterBottom align={'left'}>
                                Gif #{index + 1}
                            </Typography>
                            <img 
                                src={`https://i.giphy.com/media/${gif.id}/giphy-downsized.gif`} 
                                alt={gif.id} 
                            />
                        </div>
                    
                    );
                })
            }

            <Snackbar
                anchorOrigin={{vertical:'bottom', horizontal:'center'}}
                open={props.snakbar_show}
                autoHideDuration={4000}
                onClose={props.handleSnackbarClose}
                message={<span id="message-id">Taí tua gif!</span>}
                action={
                    <Button color="inherit" size="small" onClick={props.handleSnackbarClose}>
                      Fechar
                    </Button>
                }
            />

        </div>
    );
}

export default ResultGif;