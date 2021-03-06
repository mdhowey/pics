import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const rowHeight = 10 // from row-height in CSS

    const spans = Math.ceil(height / rowHeight);

    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img 
          ref={this.imageRef}
          alt={description} 
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;