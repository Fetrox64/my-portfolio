const Blog = () => {
  return (
    <div className="aali_tm_section" id="blog">
      <div className="aali_tm_news">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>My Latest Updates</span>
            <h3>From Empatía Blog</h3>
            <p>
              {`I'm`} always aware for the last technologies and services that
              could increasse the value on products and brands
            </p>
          </div>
          <div className="news_list">
            <ul>
              {/* 1 */}
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/42-29.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="https://blog.empatiaindustries.com/content/images/size/w2000/2021/09/calendly-2.png"
                    />
                    <a
                      className="aali_tm_full_link"
                      href="https://blog.empatiaindustries.com/administra-y-agenda/"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://blog.empatiaindustries.com/tag/resources/">
                        Resources
                      </a>
                    </span>
                    <h3 className="title">
                      <a href="https://blog.empatiaindustries.com/administra-y-agenda/">
                        Schedule your meetings smartly with Calendly
                      </a>
                    </h3>
                    <span className="date">September 15, 2021</span>
                  </div>
                  <div className="button">
                    <div className="aali_tm_learn_more">
                      <a href="https://blog.empatiaindustries.com/administra-y-agenda/">
                        Full Story
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {/* 2 */}
              <li className="wow fadeInRight" data-wow-duration="1s">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/42-29.jpg" alt="aali image" />
                    <div
                      className="main"
                      data-img-url="https://blog.empatiaindustries.com/content/images/size/w2000/2021/08/New-Project-1.png"
                    />
                    <a
                      className="aali_tm_full_link"
                      href="https://blog.empatiaindustries.com/gatsby-shopify-webinar/"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="https://blog.empatiaindustries.com/tag/events/">
                        Events
                      </a>
                    </span>
                    <h3 className="title">
                      <a href="https://blog.empatiaindustries.com/gatsby-shopify-webinar/">
                        Headless Shopify: From first commit to first sale
                      </a>
                    </h3>
                    <span className="date">August 24, 2021</span>
                  </div>
                  <div className="button">
                    <div className="aali_tm_learn_more">
                      <a href="https://blog.empatiaindustries.com/gatsby-shopify-webinar/">
                        Full Story
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
