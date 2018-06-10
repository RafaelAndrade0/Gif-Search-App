import React from 'react';
import Header from './Components/Header';
import Search from './Components/Search';
import ResultGif from './Components/ResultGif';
import Footer from './Components/Footer';
import { Grid, Paper } from '@material-ui/core';
import './styles/app.css';

const API_KEY = 'cRF5tXGlJ7NNawCf8MjTLGx2BqpPXLfa';

class App extends React.Component {

  state = {
    snakbar_show: false,
    gifs: []
  };

  handleGetGif = async (e) => {
    e.preventDefault();

    const search_input = e.target.actualSearch.value;
    let limit_number = 0;

    if(search_input !== '') {
      const url_api = `http://api.giphy.com/v1/gifs/search?q=${search_input}&api_key=${API_KEY}&limit=2`;
      const api_call = await fetch(url_api);
      const data = await api_call.json();
      console.log(data.data);
      this.setState(() => ({ gifs: data.data }));
    }
  
  };

  handleSnackbarClick = () => {
    this.setState(() => ({ snakbar_show: true }));
  };

  handleSnackbarClose = () => {
    this.setState(() => ({ snakbar_show: false }));
  };

  handleEverything = (e) => {
    this.handleGetGif(e);
    this.handleSnackbarClick();
  };

  render() {

    return (

      <div>
        <Header />
        <Grid container>
          <Grid item sm>
          </Grid>

          <Grid item sm>
            <Paper className="paper_style" elevation={8}>
              <Search
                handleEverything={this.handleEverything}
              />
              <ResultGif
                snakbar_show={this.state.snakbar_show}
                handleSnackbarClick={this.handleSnackbarClick}
                handleSnackbarClose={this.handleSnackbarClose}
                gif_array={this.state.gifs}
              />
            </Paper>
          </Grid>

          <Grid item sm>
          </Grid>

        </Grid>

        <Footer />
      </div>

    );
  }
}

export default App;
