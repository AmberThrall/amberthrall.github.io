import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import index from '../posts/index.json';
import '../css/Articles.css';

class Articles extends React.Component {
    render() {
        const numArticles = index.length;
        const articles = index.slice().reverse().map((article, id) => {
            const actualId = numArticles - id;
            const tags = article.tags.join(', ');
            return (
                <li className="articleItem" key={actualId}>
                    <h2 className="articleTitle"><Link to={"/article?id=" + (actualId)}>{actualId + ": " + article.title}</Link></h2>
                    <span className="articleTags">Tags: {tags}</span><br />
                    <span className="articlePosted">Posted: {moment(article.posted).format('MMM Do, YYYY')}</span>
                </li>
            );
        });

        return (
            <>
                <h1>Articles</h1>
                <p>
                    This is the archives for the Monday Medley, a newsletter that goes out, you guessed it, every Monday. I republish it here for sharing and referencing, but if you'd like to sign up you can do so right here:
                </p>
                <ul className="articleList">
                    {articles}
                </ul>
            </>
        );
    }
}

export default Articles;


