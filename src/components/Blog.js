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
            <h3>From Internet</h3>
            <p>
              {`I'm`} always aware of the last technologies and services that
              could increase the value on products and brands.
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
                      data-img-url="https://trainee.empatiaindustries.com/content/images/size/w960/2023/05/Tipos_de_Variable.png"
                    />
                    <a
                      className="aali_tm_full_link"
                      target="_blank"
                      href="https://trainee.empatiaindustries.com/tipos-de-variables/"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a
                        href="https://trainee.empatiaindustries.com/tag/fundamentos/"
                        target="_blank"
                      >
                        Resources
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        href="https://trainee.empatiaindustries.com/tipos-de-variables/"
                        target="_blank"
                      >
                        Variables in Dart
                      </a>
                    </h3>
                    <span className="date">June 2, 2023</span>
                  </div>
                  <div className="button">
                    <div className="aali_tm_learn_more">
                      <a
                        href="https://trainee.empatiaindustries.com/tipos-de-variables/"
                        target="_blank"
                      >
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
                      data-img-url="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEyfHxlbXByZW5kaW1pZW50b3xlbnwwfHx8fDE2ODk5NjQ5OTd8MA&ixlib=rb-4.0.3&q=80&w=960"
                    />
                    <a
                      className="aali_tm_full_link"
                      target="_blank"
                      href="https://trainee.empatiaindustries.com/taller-emprendimiento-1/"
                    />
                  </div>
                  <div className="details">
                    <span className="category">
                      <a
                        href="https://trainee.empatiaindustries.com/tag/consultoria-y-teletrabajo/"
                        target="_blank"
                      >
                        Business
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        href="https://trainee.empatiaindustries.com/taller-emprendimiento-1/"
                        target="_blank"
                      >
                        Business Workshop 1
                      </a>
                    </h3>
                    <span className="date">July 21, 2023</span>
                  </div>
                  <div className="button">
                    <div className="aali_tm_learn_more">
                      <a
                        href="https://trainee.empatiaindustries.com/taller-emprendimiento-1/"
                        target="_blank"
                      >
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
