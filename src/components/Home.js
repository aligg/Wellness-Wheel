import React from 'react';
import { wellMessages } from '../../public/wellMessages';
import Message from './Message';
import Image from './Image';
import Unsplash, { toJson } from "unsplash-js";
import { unsplashKeys } from '../../secret.js';

const unsplash = new Unsplash({
  applicationId: unsplashKeys.accessKey,
  secret: unsplashKeys.secretKey,
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
      visuals: []
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
    this.gatherImages();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  gatherImages = () => {
    unsplash.search.photos("calm", 1)
    .then(toJson)
    .then((r) => {
      const urls = [];
      r.results.map((photo) => {
        urls.push({type: "image", content: photo.urls.regular})
      })
      const visuals = [...urls, ...wellMessages]

      this.setState({
        ...this.state,
        visuals: visuals,
        currIndex: Math.floor(Math.random() * visuals.length)

      })
    })
    .catch((e) => {
      console.log(e)
    })
  }

  handleKeyPress = (evt) => {
    if (evt.keyCode === 32) {
      this.setState({
        currIndex: Math.floor(Math.random() * this.state.visuals.length),
      });
    }
  }

  renderMessage = () => {
    const item = this.state.visuals[this.state.currIndex];
    if (item && item.type === 'image') {
      return (
        <Image
          image={item}
        />
      );
    }
    else if (item && item.type == 'text') {
      return (
        <Message
          item={item}
        />
      );
    }
    
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {this.renderMessage()}
      </div>
    );
  }
}

export default Home;
