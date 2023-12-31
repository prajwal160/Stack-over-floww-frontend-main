import React from 'react'

import './Tags.css'

import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import TagsList from './TagsList'

const Tags = () => {

  const tagsList = [{
    id: 1,
    // tagName: "javascript",
    tagName: <a href="https://stackoverflow.com/questions/tagged/javascript" target="_blank" rel="noreferrer">javascript</a>,
    tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
  }, {
    id: 2,
    // tagName: "python",
     tagName: <a href="https://stackoverflow.com/questions/tagged/python" target="_blank" rel="noreferrer">python</a>,
    tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
  }, {
    id: 3,
    // tagName: "c#",
    tagName: <a href="https://stackoverflow.com/questions/tagged/c%23" target="_blank" rel="noreferrer">c#</a>,
    tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"
  }, {
    id: 4,
    // tagName: "java",
    tagName: <a href="https://stackoverflow.com/questions/tagged/java" target="_blank" rel="noreferrer">java</a>,
    tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. "
  }, {
    id: 5,
    // tagName: "php",
    tagName: <a href="https://stackoverflow.com/questions/tagged/php" target="_blank" rel="noreferrer">php</a>,
    tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
  }, {
    id: 6,
    // tagName: "html",
    tagName: <a href="https://stackoverflow.com/questions/tagged/html" target="_blank">html</a>,
    tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
  }, {
    id: 7,
    // tagName: "android",
    tagName: <a href="https://stackoverflow.com/questions/tagged/android" target="_blank" rel="noreferrer">android</a>,
    tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
  }, {
    id: 8,
    // tagName: "css",
    tagName: <a href="https://stackoverflow.com/questions/tagged/css" target="_blank" rel="noreferrer">css</a>,
    tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"
  }, {
    id: 9,
    // tagName: "Reactjs",
    tagName: <a href="https://stackoverflow.com/questions/tagged/reactjs" target="_blank" rel="noreferrer">Reactjs</a>,
    tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
  }, {
    id: 10,
    // tagName: "node.js",
    tagName: <a href="https://stackoverflow.com/questions/tagged/node.js" target="_blank" rel="noreferrer">node.js</a>,
    tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. "
  }]
  return (
    <div className="tagsPage">
      <div className="home-container-1">
        <LeftsideBar />
      </div>
      <div className="home-container-2" id="tagspage">

        <div id="plain-text">
          <h1 className='tags-h1'>Tags</h1>
          <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p><br />
          <p className='tags-p'> Using the right tags makes it easier for others to find and answer your question.</p>
        </div>
        <div className="tags-list-container">
          {
            tagsList.map((tag) => (
              <TagsList tag={tag} key={tagsList.id} />
            ))
          }
        </div>
      </div>


    </div>





  )
}

export default Tags
