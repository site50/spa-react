import React from "react";
import axios from "axios";
import './App.css';
class Articles extends React.Component {
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
				date: `${article.publishedAt}`,
				title: `${article.title}`,
				tag: `${article.tag}`,
				description: `${article.description}`,
				urlToImage: `${article.urlToImage}`,
				url: `${article.url}`
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
	render() {
		const { isLoading, articles} = this.state;
		const numb=this.props.numb;
		return (<div>  
			<React.Fragment>
			<div>
			{!isLoading ? (
				articles.slice(0,numb).map(article => { //3 передать сколько показать на странице 3 штуки №7 , input
					const { date, title, description,urlToImage, url } = article;
					return (
						<div className="block1" style={this.props.style}  key={title}>
						<h4>DATE: {date}</h4>
						<h2>TITLE:{title}</h2>
						<p >tag:#date, #title, #description,#img,#url </p>
						<p>description:{description}</p>
						<p>IMG:<img src={urlToImage}/></p>
						<p>URL:{url}</p>
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
export default Articles;