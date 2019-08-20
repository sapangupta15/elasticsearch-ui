import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout/Layout';
import SearchApp from "./containers/SearchApp/SearchApp";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            paper: '#000',
            default: '#313740'
            // default: "#414956"
        }

    }
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <div>
              <CssBaseline />
              <Layout>
                  <SearchApp />
              </Layout>
          </div>
      </MuiThemeProvider>
  );
}

export default App;
