import React from "react";
import axios from "axios";
import './App.css';
class Description extends React.Component {
	state = {
		articles: [],
		isLoading: true,
		errors: null,
		numb:3,
		isActive: false 
	};
	getArticles() {
		axios
		.get(
			"https://newsapi.org/v2/everything?q=ai&apiKey=ecd61dfc11e747858c0275da8b736302"
		)
		.then(response => {
			return response.data.articles.map(article => ({
				title: `${article.title}`,
				description: `${article.description}`,
				urlToImage: `${article.urlToImage}`,
				content: `${article.content}`,
			}));
		})
		.then(articles => {
			this.setState({
				articles,
				isLoading: false,
			});
		})
		.catch(error => this.setState({ error, isLoading: false }));
	}
	componentDidMount() {
		this.getArticles();
	}
	changeColor = () => {
		this.setState({ originale_img: !this.state.originale_img });
	};
	render() {
		const { isLoading, articles} = this.state;
		const numb=this.props.numb;
		const originale_img = this.state.originale_img;
		return (<div>  
			<React.Fragment>
			<div className="need1" style={this.props.style}>
			</div>
			<div>{numb}
			{!isLoading ? (
				articles.slice(0,numb).map(article => { //3 передать сколько показать на странице 3 штуки №7 , input
					const {  title, description,content,urlToImage } = article;
					return (
						<div className="block1"  >
						<h2>TITLE:{title}</h2>
						<p>description:{description}</p>
						<p>content:{content}</p>
						<p>IMG:<img src={urlToImage} onClick={this.changeColor} className={originale_img ? "img1" : null} /></p>
						</div>
					);
				})		 
				) : (
				<div className="load_box">Загрузка данных...</div>
			)}
			</div>
			</React.Fragment>
		</div> );
		}
}
export default Description;