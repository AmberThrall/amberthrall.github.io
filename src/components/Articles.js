import React from 'react';
import moment from 'moment';
import { Link, useSearchParams } from 'react-router-dom';
import index from '../posts/index.json';
import '../css/Articles.css';
import PropTypes from 'prop-types';

class Articles extends React.Component {
    static get propTypes() {
        return {
            params: PropTypes.any,
            setParams: PropTypes.any,
        }
    }

    render() {
        let selectedTags = this.props.params.get("tags") || "";
        selectedTags = selectedTags.split(",").filter((x) => x !== "");

        const allTags = index.map((article) => { return article.tags }).flat().filter((v, i, a) => a.indexOf(v) === i);
        const tagSelect = allTags.map((tag, id) => {
            return <button className={selectedTags.includes(tag) ? "pure-button pure-button-active tagButton" : "pure-button tagButton"} key={id} onClick={() => {
                let newTags = selectedTags.slice();
                if (newTags.includes(tag))
                    newTags.splice(newTags.indexOf(tag), 1);
                else
                    newTags.push(tag);

                this.props.setParams( newTags.length === 0 ? {} : { tags: newTags.join(",") });
                selectedTags = newTags;
            }}>{tag}</button>;
        });

        const articles = index.slice().map((article, id) => {
            return { ...article, id: id };
        }).sort((a, b) => {
            return moment(a.posted).isAfter(moment(b.posted)) ? -1 : 1;
        }).filter((article) => {
            if (selectedTags.length === 0)
                return true;
            return article.tags.filter((tag) => selectedTags.includes(tag)).length > 0;
        }).map((article) => {
            return [moment(article.posted).year(), (
                <li key={article.id}>
                    <span className="timelineDate">{moment(article.posted).format("MMM Do")}</span>
                    <span className="timelineContent">
                        <Link to={"/article?id=" + (article.id + 1)}>{article.title}</Link><br />
                        <span className="articleTags">Tags: {article.tags.join(", ")}</span>
                    </span>
                </li>
            )];
        });

        const years = index.map((article) => { return moment(article.posted).year() }).filter((v, i, a) => a.indexOf(v) === i);
        const content = years.reverse().map((year) => {
            const articlesList = articles.filter((x) => x[0] === year).map((x) => { return x[1]; });
            if (articlesList.length === 0)
                return;

            return (
                <div key={year}>
                    <span className="timelineYear">{year}</span>
                    <ul className="timelineList">
                        {articles.filter((x) => x[0] === year).map((x) => { return x[1]; })}
                    </ul>
                </div>
            );
        });

        return (
            <>
                <h1>Articles</h1>
                {tagSelect}
                <div className="timeline">
                    {content}
                </div>
            </>
        );
    }
}

function ArticlesWrapper(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    return <Articles {...props} params={searchParams} setParams={setSearchParams} />;
}

export default ArticlesWrapper;
