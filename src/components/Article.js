import React from 'react';
import { useSearchParams } from 'react-router-dom';
import moment from 'moment';
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import rkatex from 'remarkable-katex';
import hljs from 'highlight.js';
import NotFound from './404';
import index from '../posts/index.json';
import '../css/hljs.min.css';
import '../css/Articles.css';
import PropTypes from 'prop-types';

class Article extends React.Component {
    static get propTypes() {
        return {
            params: PropTypes.any
        }
    }

    constructor(props) {
        super(props);
        const id = (parseInt(this.props.params.get("id")) - 1) || 0;

        this.state = {
            id: id,
            article: index[id],
            content: "Loading..."
        };

        this.md = new Remarkable('full', {
            html: true,
            xhtmlOut: true,
            breaks: false,
            langPrefix: 'language-',
            linkTarget: '_blank',
            typographer: true,
            quotes: '“”‘’',
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (err) { return "error"; }
                }

                try {
                    return hljs.highlightAuto(str).value;
                } catch (err) { return "error"; }
            }
        });
        this.md.use(linkify);
        this.md.use(rkatex);
    }

    componentDidMount() {
        if (!this.state.article)
            return;

        const path = require("../posts/" + this.state.article.file);
        fetch(path).then(response => { return response.text() })
            .then(text => { this.setState({ content: this.md.render(text) }) });
    }

    render() {
        if (!this.state.article)
            return <NotFound />;

        console.log(this.state.content);

        return (
            <>
                <div className="articleItem">
                    <h1>{this.state.article.title}</h1>
                    <span className="articleTags">Tags: {this.state.article.tags.join(', ')}</span><br />
                    <span className="articlePosted">Posted: {moment(this.state.article.posted).format('MMM Do, YYYY')}</span>
                </div>
                <div className="articleContent" dangerouslySetInnerHTML={{__html: this.state.content }}></div>
           </>
        );
    }
}

function ArticleWrapper(props) {
    return <Article {...props} params={useSearchParams()[0]} />;
}

export default ArticleWrapper;
