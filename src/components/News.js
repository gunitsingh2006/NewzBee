import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27496bbe92c34bcfa56b45ef0a2b4bf7";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlePrevClick = async () => {
    console.log("prev");

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27496bbe92c34bcfa56b45ef0a2b4bf7-${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    console.log("next");

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27496bbe92c34bcfa56b45ef0a2b4bf7-${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">
          <u>NewzBee - Top Headlines</u>
        </h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        {/* thats how react works using components many time for use and if any change o</div>ccur we have to only 1 and rest will automaticly converted */}
        <div className="container  d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &laquo; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
