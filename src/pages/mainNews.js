import React, { Component } from 'react'
import NewsItem from './newsItem';

export class mainNews extends Component {
  imgNot = "https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=996&t=st=1696393488~exp=1696394088~hmac=b77a7c6811da51789c4ca152d23adb5fa3b3f7712898a0fa0666d888fe9409aa";
  desData = "Description not Found ";
  constructor() {
    super();
    console.log("hello i am Dugresh Bisen");
    this.state = {
      page: 1,
      articles: [],
      loading: true
    }
  }
  //   async componentDidMount() {
  //     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=eaf3288912f14bda82e2b223e48b9b2f";
  //     let urlData = await fetch(url);
  //     let newData = await urlData.json();
  //     this.setState({ articles: newData.articles,
  //     loading: false });
  //   }

  //   prevePage = async () => {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=eaf3288912f14bda82e2b223e48b9b2f&page=${this.state.page - 1}`;
  //     let urlData = await fetch(url);
  //     let newData = await urlData.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: newData.articles
  //     });
  //   };

  //   nextPage = async () => {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=eaf3288912f14bda82e2b223e48b9b2f&page=${this.state.page + 1}`;
  //     let urlData = await fetch(url);
  //     let newData = await urlData.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: newData.articles
  //     });
  //   };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const { page } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=eaf3288912f14bda82e2b223e48b9b2f&page=${page}`;

    try {
      let urlData = await fetch(url);
      let newData = await urlData.json();

      this.setState({
        articles: newData.articles,
        loading: false // Set loading to false once data is fetched
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can add error handling here, such as displaying an error message to the user.
      this.setState({ loading: false });
    }
  }

  prevePage = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1, loading: true }),
      () => this.fetchData()
    );
  };

  nextPage = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1, loading: true }),
      () => this.fetchData()
    );
  };

  render() {
    const { articles, page, loading } = this.state;

    return (
      <div className='container mt-3'>
        <h3>News wallah Today Top News</h3>
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            articles.map((element) => {
              return (
                <div className="col-md-3 mb-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : " "}
                    description={element.description ? element.description.slice(0, 70) : this.desData}
                    imgurl={element.urlToImage ? element.urlToImage : this.imgNot}
                    newsUrl={element.url ? element.url : " "}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="container d-flex justify-content-between mb-5">
          <button disabled={page <= 1 || loading} type="button" className="btn btn-danger" onClick={this.prevePage}>
            &larr; Previous
          </button>
          <button type="button" className="btn btn-success" onClick={this.nextPage}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default mainNews;
