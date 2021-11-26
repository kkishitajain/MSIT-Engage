
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import JobItem from './JobItem'
import defNews from './defNews.png';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroller';
const config=require('./config2');
export class JobSearch extends Component {

    static defaultProps={
    }
    static propTypes = {

    }
    constructor(props){
        super();
        this.state = {
            articles:[],
            page:1,
            totalArticles:0,
            loading:true,
            what:"javascript",
            where:"london"
        }
    }

    fetchMoreData = async () => {
        let p=this.state.page;

        let url=`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${config.app_id}&app_key=${config.api_key}&results_per_page=20&what=${this.state.what}&where=${this.state.where}&content-type=application/json`;
        let data= await fetch(url);
        let parsedData=await data.json();
        let art=this.state.articles;
        this.setState({
            totalArticles:parsedData.count,
            articles: art.concat(parsedData.results),
            page:p+1
        });
      };


    async componentDidMount(){
        let url=`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${config.app_id}&app_key=${config.api_key}&results_per_page=20&what=${this.state.what}&where=${this.state.where}&content-type=application/json`;
        let data= await fetch(url);
        let parsedData=await data.json();
        this.setState({
            totalArticles:parsedData.count,
            articles: parsedData.results,
            loading:false
        });
    }


    handleClick = async (e)=>{
        e.preventDefault();
        this.componentDidMount();
    }
    handleOnChange = (e)=>{
        console.log(e.target);
        this.setState({...this.state,[e.target.name]:e.target.value});

        // this.setState({
        //     what:parsedData.count,
        //     where: parsedData.results
        // });
    }

    render() {
        return (
            <div className="container my-3">


            <form className="my-5 mx-5 text-center">
                <div className="mb-3">
                    <label className="form-label"><h5 className="mx-2">Skill: </h5></label>
                    <input size="20" type="text" className="" onChange={this.handleOnChange} name="what" value={this.state.what} />
                
                    <label className="form-label"><h5 className="mx-2">Location:</h5></label>
                    <input  onChange={this.handleOnChange} name="where" value={this.state.where} />
                    <button type="submit" className="btn btn-primary mx-3" onClick={this.handleClick}>Search</button>
                </div>
                
            </form>


            <h1 className="text-center" style={{margin:"30px 0px"}}>Job Results on {this.state.what} in {this.state.where}</h1>
            {this.state.loading && <Spinner />}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                loadMore={this.fetchMoreData}
                hasMore={this.state.articles.length!==this.state.totalArticles}
                loader={<Spinner/>}
                >
            <div>
                {this.state.articles.map((elem)=>{
                    return (
                        <div key={elem.url}>
                        <JobItem title={elem.company.display_name} description={elem.description} role={elem.title} location={elem.location.display_name} salary={elem.salary_min} url={elem.redirect_url}/>
                        </div>
                    );
                })}
            </div>
            </InfiniteScroll>
            </div>
        )
    }
}
export default JobSearch
