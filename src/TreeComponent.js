import React, { Component} from "react";
import axios from 'axios';
import TreeNode from './TreeNode.js';

class TreeComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.getContentsInAFolder = this.getContentsInAFolder.bind(this);
    this.getURLPathParam = this.getURLPathParam.bind(this);
  }

  getURLPathParam() {
    var url = new URL(window.location.href);
    let pathParam = url.searchParams.get("path");
    if (pathParam) {
      return pathParam;
    }
    return "/";
  }

  getContentsInAFolder(path) {
    axios.get(`http://localhost:8080/contents?path=${path}`)
      .then(res => {
        console.log(res);
        const data = res.data;
        this.setState({ data });
    });
  }

  componentDidMount() {
    const path = this.getURLPathParam();
    this.getContentsInAFolder(path);
  }

  render(){
    let path = this.getURLPathParam();
    return(
      <div className="test">
        <div className="">
          <form action={`http://localhost:8080/files?path=${path}`} method="post" enctype="multipart/form-data">
            Select File to upload:
            <input type="file" name="file" id="file"/>
            <input className="btn btn-primary" type="submit" value="Upload Image" name="submit"/>
          </form>
        </div>
        <div className="container">
          {
            this.state.data.map((entity, index) => (
              <TreeNode
                key={index}
                entity={entity}
                getContentsInAFolder={this.getContentsInAFolder}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default TreeComponent;
