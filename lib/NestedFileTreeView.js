'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FileView = require('./FileView');

var _FileView2 = _interopRequireDefault(_FileView);

var _FolderView = require('./FolderView');

var _FolderView2 = _interopRequireDefault(_FolderView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NestedFileTreeView(props) {
  var directory = props.directory,
      maxFolderLevel = props.maxFolderLevel,
      expended = props.expended,
      className = props.className,
      fileClickHandler = props.fileClickHandler,
      folderClickHandler = props.folderClickHandler,
      fileClassName = props.fileClassName,
      folderClassName = props.folderClassName,
      selectedFilePath = props.selectedFilePath,
      selectedClassName = props.selectedClassName,
      fileTemplate = props.fileTemplate,
      folderTemplate = props.folderTemplate;


  var passedProps = {
    fileClickHandler: fileClickHandler,
    fileClassName: fileClassName,
    folderClassName: folderClassName,
    selectedFilePath: selectedFilePath,
    selectedClassName: selectedClassName,
    fileTemplate: fileTemplate
  };

  return _react2.default.createElement(
    'ul',
    { 'data-level': '0', className: className },
    directory && directory['_contents'].map(function (file) {
      return _react2.default.createElement(_FileView2.default, _extends({
        key: 'root-file-' + file.path,
        file: file
      }, passedProps));
    }),
    directory && Object.keys(directory).filter(function (k) {
      return k !== '_contents';
    }).map(function (prop) {
      return _react2.default.createElement(_FolderView2.default, _extends({
        key: 'root-folder-' + prop,
        level: 1,
        expended: expended,
        maxFolderLevel: maxFolderLevel,
        folderObj: directory[prop],
        name: prop,
        parentPath: '',
        folderClickHandler: folderClickHandler,
        folderTemplate: folderTemplate
      }, passedProps));
    })
  );
}

NestedFileTreeView.propTypes = {
  directory: _propTypes2.default.object.isRequired,
  maxFolderLevel: _propTypes2.default.number,
  expended: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  fileClickHandler: _propTypes2.default.func,
  folderClickHandler: _propTypes2.default.func,
  fileClassName: _propTypes2.default.string,
  folderClassName: _propTypes2.default.string,
  selectedFilePath: _propTypes2.default.string,
  selectedClassName: _propTypes2.default.string,
  folderTemplate: _propTypes2.default.func,
  fileTemplate: _propTypes2.default.func
};

exports.default = NestedFileTreeView;