import React from 'react';

class About extends React.Component {
    componentDidMount() {
        document.title = 'About Me';
    }

    render() {
      return (
        <div className="blog-post">
            <h2 className="blog-post-title">About Me</h2>
            <p></p>
            <p>Hi All. </p>
            <p></p>
            <p>My hobbies are</p>
            <ul>
                <li>swimming</li>
                <li>gym</li>
                <li>diving</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States">hiking</a></li>
                <li>snowboarding</li>
                <li>traveling</li>
                <li>bicycling</li>
                <li>going opera</li>
                <li><a target="_blank" rel="noopener noreferrer"  href="https://en.wikipedia.org/wiki/List_of_museums_in_New_York_City">going museums</a></li>
                <li>cook health food</li>
            </ul>
        </div>
      )
    }
}
export default About;