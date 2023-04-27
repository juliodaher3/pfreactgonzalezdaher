import React, { Component } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <div className="UserSection">
          <CardUser
            name="Zapato"
            
            description="Verde y de mal caracter"
            img="https://ih1.redbubble.net/image.1455301172.5828/st,small,507x507-pad,600x600,f8f8f8.jpg"
            backgroundColor="yellow"
          />
        </div>

        <div className="UserSection">
          <CardUser
            name="Chu-Chu Nezumi"
            
            description="chu chu"
            img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d1fae55-1b80-4bf5-b8a4-acb458a92dfd/dbhc96i-7e127c1a-a656-45df-a375-23cfe8ee74fd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkMWZhZTU1LTFiODAtNGJmNS1iOGE0LWFjYjQ1OGE5MmRmZFwvZGJoYzk2aS03ZTEyN2MxYS1hNjU2LTQ1ZGYtYTM3NS0yM2NmZThlZTc0ZmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6t6gBgyMGQ-aJ9DKMfV_wefzOM9MwGPsREliz_mLU4Q"
            backgroundColor="yellow"
          />
        </div>

        <div className="UserSection">
          <CardUser
            name="Lambtron"
            
            description="Rashitos"
            img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6a81898-696e-4bb3-89d1-5d59a7b4c190/d2snlxr-093d3742-979c-424a-9281-4fa663020fe0.jpg/v1/fill/w_412,h_371,q_75,strp/chinpokomon_by_krow000666_d2snlxr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzcxIiwicGF0aCI6IlwvZlwvZjZhODE4OTgtNjk2ZS00YmIzLTg5ZDEtNWQ1OWE3YjRjMTkwXC9kMnNubHhyLTA5M2QzNzQyLTk3OWMtNDI0YS05MjgxLTRmYTY2MzAyMGZlMC5qcGciLCJ3aWR0aCI6Ijw9NDEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8z9DQaazCUG2qqrgsYu2CEg1msMhfzzHt_hW_zuU0sY"
            backgroundColor="yellow"
          />
        </div>
        

      </div>
    );
  }
}

export default App;
