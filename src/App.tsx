import React from 'react';
import './App.css';


function Paragraph(props: any) {
    return (
        <h5>
            <b>{props.text1}</b>
            {props.link ? <a href={props.link} target="_blank" rel="noreferrer noopener">{props.text2}</a> :
                props.text2}
        </h5>
    );
}


function Page() {
    return (
        <div className="App">
            <header className="App-header">
                <article className="App-article">
                    <h2>Mikhail Anishchanka</h2>
                    <Paragraph text1={"bio:"} text2={"Software Engineer at LeverX Group, BSc ITE"} />
                    <Paragraph text1={"stack:"} text2={"Python, NodeJS, TypeScript, C++/Qt, React, PostgreSQL, MongoDB, Docker"} />
                    <Paragraph text1={"code:"} text2={"GitHub"} link={"https://github.com/rdfsx"} />
                    <Paragraph text1={"contact:"} text2={"Telegram"} link={"https://t.me/rdfsx"} />
                    <Paragraph text1={"social media:"} text2={"Linkedin"}
                               link={"https://linkedin.com/in/mikhail-anishchanka"} />
                    <Paragraph text1={"english:"} text2={"B1"} />
                    <br />
                    <h5>© 2022 | website is under construction</h5>
                </article>
            </header>
        </div>
    );
}


function App() {
    return (
        <Page />
  );
}

export default App;
