import React from 'react';
import Button from "react-bootstrap/Button";

const dataJsonFile = './data/posts.json';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isLoaded: false,
          posts: []
      }
    }

    componentDidMount() {
        document.title = 'Home';

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
            this.setState({
                posts: json.result,
                isLoaded: true
            });
        });
    }

    render() {
        const { isLoaded, posts } = this.state;

        if (!isLoaded) {
          return <div>Loading...</div>;
        }

        return posts.map((post) =>
            <div className="blog-post">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-meta">{new Date(post.date).toUTCString()} by <a href="/about/">{post.author}</a></p>
                <p><img width="480" src={post.image} alt="" /></p>
                <p>{post.summary}</p>
                <Button href={`post/${post.id}`}>Read More</Button>
            </div>
        );
    }
}
export default Home;