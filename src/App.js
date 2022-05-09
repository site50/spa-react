import React from "react";
import './App.css';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Articles from "./Articles";
import Settings from "./Settings";
import Help from "./Help";
import About from "./About";
import Description from "./Description";
import Button from "@material-ui/core/Button";
import {useState} from 'react';
function App (){
	const [box, setBox]=useState(false);
	return<div className="button_menu"><Help/>
	<Button  variant="contained"  onClick={()=>setBox(!box)} ><span className="b_m">&#9776;</span> </Button>
	<div  >
	<h1 style={{textAlign:'center'}}>Тестовое задание на JS</h1>
	<h1 style={{textAlign:'center'}}>SPA на React JS</h1>
	<Router >   
	{box? <div className="menu_all">
		<div className="close_box" onClick={()=>setBox(!box)}>X</div>
		<div id="menu">
		<Link to="/">Тестовое задание</Link>
		</div>
		<div id="menu">
		<Link to="/Articles">Главная</Link>
		</div>
		<div id="menu">
		<Link to="/Settings">Настройки</Link>
		</div>
		<div id="menu">
		<Link to="/About">О нас</Link>
		</div>
		<div id="menu">
		<Link to="/Description">Детальная страница просмотра новостей</Link>
		</div>
	</div>	:''}
	<div className="">
	<Route path="/app" component={App} />
	<Route path="/Articles" component={Articles} />
	<Route path="/Settings" component={Settings} />
	<Route path="/About" component={About} />
	<Route path="/Description" component={Description} />
	</div>
	</Router>
	</div>
	</div>
}
export default App;