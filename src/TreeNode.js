import React, { Component} from "react";
import { FaFolder, FaFolderOpen, FaFile, FaDownload, FaSpinner } from 'react-icons/fa';

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
      <div className="">
        <div className='row'>
          <div className="">
            {entity.directory?
              <FaFolder onClick={() => this.props.getContentsInAFolder(entity.path)}/> :
              <FaFile/>}

          </div>
          <div className="col-sm-4" onClick={() => this.nextPage(entity.path)}>
            <span className=""> {entity.name} </span>
          </div>
          <div className="col-sm-6">
            {
              entity.directory? null:
              <a href={`http://localhost:8080/files?path=${entity.path}`}><FaDownload/></a>
            }
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}
