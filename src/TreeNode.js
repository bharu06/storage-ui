import React, { Component} from "react";
import { FaFolder, FaFolderOpen, FaFile, FaDownload } from 'react-icons/fa';

export default class TreeNode extends Component{
  constructor(props) {
    super(props);

    this.nextPage = (path) => {
      window.location.href = window.location.origin + `?path=${path}`;
    }
  }

  render(){
    const entity = this.props.entity || {};
    return(
      <div className="container">
        <h4 onClick={() => this.nextPage(entity.path)}>
          {entity.directory?
            <FaFolder onClick={() => this.props.getContentsInAFolder(entity.path)}/> :
            <FaFile/>}
          {entity.name}
        </h4>
        {
          entity.directory? null:
          <a href={`http://localhost:8080/files?path=${entity.path}`}><FaDownload/></a>
        }
      </div>
    );
  }
}
