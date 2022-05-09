import React from "react";
import SakuraPetals from "./Sakura";

const Projets = () => {
  return (
    <section id="slideshow">
      <SakuraPetals />
      <div className="entire-content">
        <div className="content-carrousel">
          <div>
            <img
              src="/src/images/sakura-tree.png"
              alt="arbre de sakura"
              className="tree"
            />
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://images.pexels.com/photos/758733/pexels-photo-758733.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            />
            <h1>Cool</h1>
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://images.pexels.com/photos/21261/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
            />
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://images.pexels.com/photos/567973/pexels-photo-567973.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            />
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            />
          </div>
          <div>
            <img
              className="carousel-img"
              src="https://images.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;
