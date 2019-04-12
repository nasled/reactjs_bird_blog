import React from 'react';
import axios from 'axios';

const NEWSAPI_KEY = "---";
const NEWSAPI_ENDPOINT = "https://newsapi.org/v2/";
const NEWSAPI_QUERY = "birds";

class NewsApiSideBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isLoaded: false,
          articles: []
      }
    }
    componentDidMount() {
        axios
            .get(NEWSAPI_ENDPOINT + "everything?q=" + NEWSAPI_QUERY + "&apiKey=" + NEWSAPI_KEY)
            .then(res => {
                const data = res.data;
                this.setState({
                    articles: data.articles.slice(0, 5),
                    isLoaded: true
                })
            })
    }

    render() {
        return (
            <div>
                <div className="sidebar-module sidebar-module-inset">
                    <h4>Bird's News</h4>
                    <p> Bellow you can find the latest news about birds from <a href="https://newsapi.org/">News API</a>!</p>
                </div>
                <div className="sidebar-module">
                    <ol className="list-unstyled">
                        { this.state.articles.map(article => <li type="circle"><a target="blank" href={article.url}>{article.title}</a></li>) }
                    </ol>
                </div>
            </div>
        )
    }
}

export default NewsApiSideBar;
