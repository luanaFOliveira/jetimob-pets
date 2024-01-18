import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import PetInfo from './Views/Pet/PetInfo';
import PetList from './Views/Pet/ListPets';
import NewPet from './Views/Pet/NewPet';
import EditPet from './Views/Pet/EditPet';
import NewUser from './Views/User/NewUser';

const router = createBrowserRouter([
  {
      path:"/",
      element:<PetList/>,
  },
  {
    path:"/home",
    element:<Home/>,
  },
  {
    path:"/pets",
    element:<PetList/>,
  },
  {
    path:"/pet/:id",
    element:<PetInfo/>,
  },
  {
    path:"/new_pet",
    element:<NewPet/>,
  },
  {
    path:"/edit_pet/:id",
    element:<EditPet/>,
  },
  {
    path:"/new_user",
    element:<NewUser/>,
  },
  
  
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <RouterProvider router={router}/>,
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
