import React from "react";
import {useState} from 'react';
import Articles from "./Articles";
const type_style = [
	{ id:1,backgroundColor: 'выбрать фон',color: 'цвет шрифта' },
	{ id:1,backgroundColor: 'lightblue',color: 'green' },
	{ id:2,backgroundColor: 'pink', color: 'red' },
	{ id:3,backgroundColor: 'lightseagreen', color: 'blue' },
	{ id:3,backgroundColor: '#1a1a1a', color: '#e3e3e3' },
];
const listSize = [
	{ id:0,fontSize: '0.7rem' },
	{ id:1,fontSize: '1rem' },
	{ id:2,fontSize: '1.5rem' },
	{ id:3,fontSize: '2rem' },
];
function Settings() {
	const [style1, setStyle1] = useState();
	const [style2, setStyle2] = useState();
	const [size, setSize] = useState('1rem');
	const [numb, setNumb]=useState(2);
	return (
		<div className="setting">
		<h5>Выбрать цвет фона: <select value={style1} onChange={e => setStyle1(String(e.target.value))} >	
		{type_style.map(friend => (
			<option key={friend.id} value={friend.backgroundColor}>
			{friend.backgroundColor} 
			</option>
			
		))}
		</select>
		</h5>
		<h5>
		Выбрать цвет шрифта: <select value={style2} onChange={e1 => setStyle2(String(e1.target.value))} >
		{type_style.map(friend1 => (
			<option key={friend1.id} value={friend1.color}>
			{friend1.color} 
			</option>
			
		))}
		</select>
		</h5>
		<h5>
		Выбрать количество новостей для показа:<input  type="text"  value={numb}  placeholder="numb"
		onChange={(e) => { setNumb(e.target.value); }} />
		</h5>
		<h5>
		Изменить шрифт:
		
		
		<select
		value={size}
		onChange={e => setSize(String(e.target.value))}
		>
		{listSize.map(friend => (
			<option key={friend.id} value={friend.fontSize}>
			{friend.fontSize}
			</option>
		))}
		</select>
		
		</h5>
		
		
		<Articles style={{backgroundColor:style1,color:style2,fontSize:size}} numb={numb}/>	
		</div>	
	)
}		
export default Settings;