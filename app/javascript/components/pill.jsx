import React from 'react';

class Pill extends React.Component {
  render(){
    const { option, url, text } = this.props;
    const className = 'component-pill ' + option;
    return (
      (!url || (url == null) || (url.length == 0)) ?
        <div className={className}>
          {text}
        </div>  
      :
        <a className={className} href={url} target="_blank">
          {text} <i className="fas fa-arrow-circle-right"></i>
        </a>
    );
  }

}
export default Pill;