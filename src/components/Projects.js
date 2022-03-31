import React from 'react';
import projects from '../projects.json';

class Projects extends React.Component {
    render() {
        const projs = projects.map((project, id) => {
            const tags = project.tags.join(', ');
            const urls = project.urls.map((url, id) => {
                return <><span key={id} className="tags">{url.label}: <a href={url.url} target="_blank" rel="noreferrer">{url.url}</a></span><br /></>;
            });
            return (
                <li className="listItem" key={id}>
                    <h2 className="title">{project.name}</h2>
                    <span className="description">{project.description}</span><br />
                    <span className="tags">Tags: {tags}</span><br />
                    {urls}
                </li>
            );
        });

        return (
            <>
                <h1>Projects</h1>
                <p>
                    Below is a select collection of projects I&apos;ve worked on. More projects can be viewed on my GitHub page: <a href="https://github.com/AmberThrall/" target="_blank" rel="noreferrer">https://github.com/AmberThrall</a>
                </p>
                <ul className="list">
                    {projs}
                </ul>
            </>
        );
    }
}

export default Projects;
