import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NavBar from './NavBar';


function FilterSideBar({nomes,width}) {
   
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <NavBar/>
            </AppBar>
            <Drawer
                PaperProps={{
                    sx: {
                    backgroundColor: "#245501",
                    color: "white"
                    }
                }}            
                sx={{
                width: width,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: width,
                boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
            >
                <Toolbar />
                <Divider />
                <Box sx={{ overflow: 'auto',marginTop:'1rem' }}>

                <Divider />
                <h2 style={{color:'white'}}>Filtros</h2>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={nomes}
                    style={{backgroundColor:'white'}}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Nome" />}
                />
                
                <List>
                    <h5 style={{color:'white'}}>Especie</h5>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Especie" />}
                    />
                </List>
                <List>
                    <h5 style={{color:'white'}}>Sexo</h5>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Sexo" />}
                    />
                </List>
                <List>
                    <h5 style={{color:'white'}}>Porte</h5>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Porte" />}
                    />
                </List>
                <List>
                    <h5 style={{color:'white'}}>Idade</h5>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Idade" />}
                    />
                </List>
                <List>
                    <h5 style={{color:'white'}}>Cuidados veterinarios</h5>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Cuidados veterinarios"
                        />
                    )}
                    />
                </List>
                <List>
                    <h5 style={{color:'white'}}>Temperamentos</h5>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Temperamentos"
                        />
                    )}
                    />
                </List>
                <List>
                    <h5 style={{color:'white'}}>Sociavel com</h5>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Sociavel com"
                        />
                    )}
                    />
                </List>
                <List>
                    <h5 style={{color:'white'}}>Vive bem em</h5>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={nomes}
                        style={{backgroundColor:'white'}}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Vive bem em"
                        />
                    )}
                    />
                </List>
                </Box>
            </Drawer>
      </Box>
    );
}

export default FilterSideBar;