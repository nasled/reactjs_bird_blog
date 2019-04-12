import React from 'react';

const dataJsonFile = './../data/posts.json';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isLoaded: false,
          post: [],
          id: 0
      }
    }

    componentDidMount() {
        document.title = 'Post Page';
        const { id } = this.props.match.params;

        fetch(dataJsonFile, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error(res.statusText);
            }
        })
        .then(json => {
            for (var i in json.result) {
                if (parseInt(json.result[i].id) === parseInt(id)) {
                    this.setState({
                        post: json.result[i],
                        isLoaded: true
                    });
                }
            }
        });
    }

    render() {
        const { isLoaded, post } = this.state;

        if (!isLoaded) {
          return <div>Loading...</div>;
        }

        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-meta">{new Date(post.date).toUTCString()} by <a href="/about/">{post.author}</a></p>
                <p><img width="480" src={post.image} alt="" /></p>
                <p>{post.summary}</p>
                <p>{post.fullText}</p>
            </div>
        );
    }
}
export default Home;