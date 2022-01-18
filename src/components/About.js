import React from 'react';

class About extends React.Component {
    render() {
        return (
            <>
                <h1>My Name is Amber Thrall</h1>
                <p>
                    I am a mathematician and computer scientist interested in backend development and algebra. 
                    I received a bachelors of science in mathematics from Univeristy of Washington in 2018.
                </p>
                <p>
                    As a mathematician, I have published two articles relating to eigenvalues:
                    <ul>
                        <ol key="1">P. Paparella and A. Thrall. Realizing Suleĭmanova spectra via permutative matrices, II, in press, <i>Linear Algebra Appl.</i>, 2019. DOI: <a href='http://dx.doi.org/10.1016/j.laa.2018.12.030' target="_blank">10.1016/j.laa.2018.12.030</a>.</ol>
                        <ol key="2">S. Hoover, D. McCormick, P. Paparella, and A. Thrall. On the realizability of the critical points of a realizable list, in press, <i>Linear Algebra Appl.</i>, 2018. DOI: <a href='https://doi.org/10.1016/j.laa.2018.06.024' target="_blank">10.1016/j.laa.2018.06.024</a>.</ol>
                    </ul>
                </p>
                <p>
                    This website serves as a portfolio showcasing select projects as well as hosting my writing on math and technology.
                </p>
                <p>
                    I am currently available for hire. If interested please email me at <a href="mailto:amber@thrall.me" target="_blank">amber@thrall.me</a>. 
                    A copy of my CV is available <a href="/cv.pdf" target="_blank">here</a>.
                </p>
            </>
        );
    }
}

export default About;


