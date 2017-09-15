'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSidebar = require('react-sidebar');

var _reactSidebar2 = _interopRequireDefault(_reactSidebar);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _styles = require('material-ui/styles');

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _ImageAvatar = require('./ImageAvatar');

var _ImageAvatar2 = _interopRequireDefault(_ImageAvatar);

var _Grid = require('../../layout/Grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('11111111 createStyleSheet', _styles.createStyleSheet);

var LARGE_SCREEN_WIDTH = 933;

var styleSheet = function styleSheet(theme) {
  return {
    NavigationSideBar: {
      width: 290
    },
    flex: {
      flex: 1
    },
    backgroundCover: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    avatarInfo: {
      color: '#ffffff',
      background: 'rgba(0, 0, 0, 0.3)',
      paddingTop: 8,
      paddingBottom: 8
    },
    avatarImage: {
      paddingTop: 16,
      paddingBottom: 16
    }
  };
};

var Navigation = function (_PureComponent) {
  _inherits(Navigation, _PureComponent);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ isOpen: !_this.state.isOpen });
    };

    var isLargeScreen = screen.width >= LARGE_SCREEN_WIDTH;

    _this.state = {
      isLargeScreen: isLargeScreen,
      isOpen: isLargeScreen,
      width: 0
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'render',


    // utilizar metodos abaixo caso queira controlar onResize
    // componentWillMount() {
    //   this.updateDimensions();
    // }
    // componentDidMount() {
    //   window.addEventListener('resize', this.updateDimensions);
    // }
    //
    // componentWillUnmount() {
    //   window.removeEventListener('resize', this.updateDimensions);
    // }
    //
    // updateDimensions() {
    //   console.log('loucura loucura', screen.width);
    //   // this.setState({ width: screen.width });
    // }

    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          topMenuTitle = _props.topMenuTitle,
          topMenuContent = _props.topMenuContent,
          sideMenu = _props.sideMenu,
          avatarImg = _props.avatarImg,
          avatarTitle = _props.avatarTitle,
          avatarSubTitle = _props.avatarSubTitle,
          sideMenuHeaderBg = _props.sideMenuHeaderBg,
          sideMenuFooter = _props.sideMenuFooter,
          classes = _props.classes;
      var _state = this.state,
          isOpen = _state.isOpen,
          isLargeScreen = _state.isLargeScreen;


      return _react2.default.createElement(
        'div',
        { className: 'Navigation' },
        _react2.default.createElement(
          _reactSidebar2.default,
          {
            sidebar: _react2.default.createElement(
              'div',
              { className: classes.NavigationSideBar },
              _react2.default.createElement(
                'div',
                {
                  className: classes.backgroundCover,
                  style: { backgroundImage: 'url(' + sideMenuHeaderBg + ')' }
                },
                _react2.default.createElement(
                  _Grid.Container,
                  { className: classes.avatarImage },
                  _react2.default.createElement(
                    _Grid.Row,
                    null,
                    _react2.default.createElement(
                      _Grid.Col,
                      { xs: 12 },
                      _react2.default.createElement(
                        _ImageAvatar2.default,
                        { src: avatarImg },
                        'U'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _Grid.Container,
                  { className: classes.avatarInfo },
                  _react2.default.createElement(
                    _Grid.Row,
                    null,
                    _react2.default.createElement(
                      _Grid.Col,
                      { xs: 12 },
                      _react2.default.createElement(
                        _Typography2.default,
                        { type: 'body1', style: { color: '#ffffff' } },
                        avatarTitle,
                        _react2.default.createElement('br', null),
                        avatarSubTitle
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                sideMenu
              ),
              _react2.default.createElement(
                'div',
                { style: { position: 'absolute', bottom: 0, width: '100%' } },
                _react2.default.createElement(
                  'div',
                  { style: { width: '100%', textAlign: 'right' } },
                  sideMenuFooter
                )
              )
            ),
            docked: isLargeScreen && isOpen,
            sidebarClassName: 'NavigationSideBar',
            open: isOpen,
            onSetOpen: function onSetOpen(state) {
              return _this2.setState({ isOpen: state });
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'NavigationTopBar' },
            _react2.default.createElement(
              _AppBar2.default,
              { position: 'static' },
              _react2.default.createElement(
                _Toolbar2.default,
                null,
                _react2.default.createElement(
                  _IconButton2.default,
                  { onClick: this.handleToggle, color: 'contrast', 'aria-label': 'Menu' },
                  _react2.default.createElement(_Menu2.default, null)
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { type: 'title', color: 'inherit', className: classes.flex },
                  topMenuTitle
                ),
                topMenuContent
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'NavigationContent' },
            children
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.PureComponent);

Navigation.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element,
  showNavigation: _propTypes2.default.bool,
  sideMenu: _propTypes2.default.any,
  topMenuTitle: _propTypes2.default.any,
  topMenuContent: _propTypes2.default.any,
  sideMenuTitle: _propTypes2.default.any,
  sideMenuFooter: _propTypes2.default.any,
  sideMenuHeaderBg: _propTypes2.default.string,
  avatarImg: _propTypes2.default.string,
  avatarTitle: _propTypes2.default.string,
  avatarSubTitle: _propTypes2.default.string
};

Navigation.defaultProps = {
  children: null,
  showNavigation: false,
  topMenuTitle: '',
  topMenuContent: '',
  sideMenuTitle: '',
  sideMenuFooter: null,
  sideMenu: null,
  sideMenuHeaderBg: '',
  avatarImg: '',
  avatarTitle: '',
  avatarSubTitle: ''
};

exports.default = (0, _styles.withStyles)(styleSheet)(Navigation);