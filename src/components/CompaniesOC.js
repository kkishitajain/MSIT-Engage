//rcep     PREV-NEXT:
import React, { Component } from 'react'

import { Notes } from './Notes'

export class CompaniesOC extends Component {
    
    render() {
        
        return (
            <Notes/>
        )
    }
}

export default CompaniesOC

//INFINITE SCROLLING NEWS:
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import NewsItem from './NewsItem'
// import defNews from './defNews.png';
// import Spinner from './Spinner';
// import InfiniteScroll from 'react-infinite-scroller';

// export class News extends Component {

//     static defaultProps={
//         country:"in",
//         pageSize:12,
//         category:"general",
//     }
//     static propTypes = {

//     }
//     constructor(props){
//         super();
//         console.log("constr from news");
//         this.state = {
//             articles:[],
//             page:1,
//             totalArticles:0,
//             loading:true
//         }
//         document.title="NewsTimes - "+props.category;
//     }

//     fetchMoreData = async () => {
//         let p=this.state.page;

//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//         let data= await fetch(url);
//         let parsedData=await data.json();
//         let art=this.state.articles;
//         this.setState({
//             totalArticles:parsedData.totalResults,
//             articles: art.concat(parsedData.articles),
//             page:p+1
//         });
//       };


//     async componentDidMount(){
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         let data= await fetch(url);
//         let parsedData=await data.json();
//         this.setState({
//             totalArticles:parsedData.totalResults,
//             articles: parsedData.articles,
//             loading:false
//         });
//     }

//     render() {
//         return (
//             <div className="container my-3">
//             <h1 className="text-center" style={{margin:"30px 0px"}}>NewsTimes - Top Headlines on {this.props.category}</h1>
//             {this.state.loading && <Spinner />}
//             <InfiniteScroll
//                 dataLength={this.state.articles.length}
//                 loadMore={this.fetchMoreData}
//                 hasMore={this.state.articles.length!==this.state.totalArticles}
//                 loader={<Spinner/>}
//                 >
//             <div className="row">
//                 {this.state.articles.map((elem)=>{
//                     return (
//                         <div className="col-md-4" key={elem.url}>
//                         <NewsItem title={elem.title} description={elem.description} imgUrl={elem.urlToImage==null?defNews:elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name}/>
//                         </div>
//                     );
//                 })}
//             </div>
//             </InfiniteScroll>
//             </div>
//         )
//     }
// }
// export default News