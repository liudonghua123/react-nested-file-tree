import React from 'react'
import PropTypes from 'prop-types';
import FileView from './FileView'
import FolderView from './FolderView'

function NestedFileTreeView (props) {
  const { directory,
    maxFolderLevel,
    expended,
    className,
    fileClickHandler,
    folderClickHandler,
    fileClassName,
    folderClassName,
    selectedFilePath,
    selectedClassName,
    fileTemplate,
    folderTemplate } = props

  const passedProps = {
    fileClickHandler,
    fileClassName,
    folderClassName,
    selectedFilePath,
    selectedClassName,
    fileTemplate
  }

  return (
    <ul data-level='0' className={className}>
      {
        directory && directory['_contents'].map(file => {
          return (
            <FileView
              key={`root-file-${file.path}`}
              file={file}
              {...passedProps} />
          )
        })
      }
      {
        directory && Object.keys(directory)
        .filter(k => { return k !== '_contents' })
        .map(prop => {
          return (
            <FolderView
              key={`root-folder-${prop}`}
              level={1}
              expended={expended}
              maxFolderLevel={maxFolderLevel}
              folderObj={directory[prop]}
              name={prop}
              parentPath=''
              folderClickHandler={folderClickHandler}
              folderTemplate={folderTemplate}
              {...passedProps} />
          )
        })
      }
    </ul>
  )
}

NestedFileTreeView.propTypes = {
  directory: PropTypes.object.isRequired,
  maxFolderLevel: PropTypes.number,
  expended: PropTypes.bool,
  className: PropTypes.string,
  fileClickHandler: PropTypes.func,
  folderClickHandler: PropTypes.func,
  fileClassName: PropTypes.string,
  folderClassName: PropTypes.string,
  selectedFilePath: PropTypes.string,
  selectedClassName: PropTypes.string,
  folderTemplate: PropTypes.func,
  fileTemplate: PropTypes.func
}

export default NestedFileTreeView
