import { Component } from 'react';
import anime from '../asset/imgs/anime.jpg'
class Home extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ADMIN HOME</h2>
        <img
          src={anime}
          width="800px"
          height="600px"
          alt=""
        />
      </div>
    );
  }
}

export default Home;
