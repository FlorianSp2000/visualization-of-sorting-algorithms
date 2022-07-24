import React from 'react';
import p5 from 'p5';
import sketch from './constants/Sketch';

class ImageSort extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.sketch = new p5(sketch, this.myRef.current)
  }
  render() {
    return (
      <div ref={this.myRef}>
        
      </div>
    );
  }
}

export default ImageSort;