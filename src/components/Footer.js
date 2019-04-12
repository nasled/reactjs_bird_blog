import React     from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="blog-footer">
                <p>Blog was built using <a href="https://getbootstrap.com">Bootstrap</a> and <a href="https://reactjs.org/">React</a> by <a href="https://github.com/nasled">@nasled</a>.</p>
                <p><a href="#top">Back to top</a></p>
            </footer>
        )
    }
}
export default Footer;