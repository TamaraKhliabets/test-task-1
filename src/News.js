import React, {Component} from 'react';
import DATA from './data';

export default class News extends Component {
    render() {
        let news = DATA.map((e, i) => {
            return (
                <li key={i}>
                    <div>{e.title}</div>
                    <div>{e.author}</div>
                    <img src={e.urlToImage} alt={e.title}/>
                    <div>{e.description}</div>
                    <div>
                        <a href={e.url}>{e.source.name}</a>
                    </div>
                </li>
            )
        });
        return (
            <ul>
                {news}
            </ul>
        )
    }
}
