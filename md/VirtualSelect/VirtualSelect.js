'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('react-virtualized/dist/commonjs/List');

var _List2 = _interopRequireDefault(_List);

var _AutoSizer = require('react-virtualized/dist/commonjs/AutoSizer');

var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

var _strings = require('./../../lib/strings');

require('./VirtualSelect.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONTAINER_CLASS = 'md-text-field-container md-full-width md-text-field-container--input';
var HR_CLASS = 'md-divider md-divider--text-field md-divider--expand-from-left';
var HR_CLASS_HAS_FOCUS = 'md-divider md-divider--text-field md-divider--expand-from-left md-divider--text-field-expanded md-divider--text-field-active';
var HR_CLASS_HAS_ERROR = 'md-divider md-divider--text-field md-divider--expand-from-left md-divider--text-field-error';
var LABEL_CLASS_HAS_FOCUS = 'md-floating-label md-floating-label--floating md-floating-label--active md-floating-label--floating';
var LABEL_CLASS = 'md-floating-label md-floating-label--inactive md-floating-label--inactive-sized';
var LABEL_CLASS_HAS_VALUE = 'md-floating-label md-floating-label--floating';
var LABEL_CLASS_HAS_ERROR = 'md-floating-label md-floating-label--error md-floating-label--floating';
var INPUT_CLASS = 'md-text-field md-text md-text-field--inline-indicator md-full-width md-text-field--floating-margin';
var MENU_ITEM_CLASS = 'VirtualSelect-menu-item';
var MENU_CLASS = 'md-paper md-paper--1 VirtualSelect-menu';
var ERROR_CONTAINER_CLASS = 'md-text-field-message-container md-text-field-message-container--error md-full-width';
var ERROR_CLASS = 'md-text-field-message md-text-field-message--active';

function safeGet(object, prop) {

  return object ? object[prop] : object;
}

//eslint-disable-next-line
var defaultMenuItemRenderer = function defaultMenuItemRenderer(_ref) {
  var item = _ref.item,
      index = _ref.index,
      labelKey = _ref.labelKey;
  return _react2.default.createElement(
    'span',
    null,
    safeGet(item, labelKey) || ''
  );
};

//eslint-disable-next-line
var defaultGetSelectedLabel = function defaultGetSelectedLabel(_ref2) {
  var item = _ref2.item,
      labelKey = _ref2.labelKey;
  return labelKey ? safeGet(item, labelKey) || '' : item;
};

//eslint-disable-next-line
var defaultGetSelectedValue = function defaultGetSelectedValue(_ref3) {
  var item = _ref3.item,
      valueKey = _ref3.valueKey;
  return valueKey ? safeGet(item, valueKey) : item;
};

function getLabelClass(_ref4) {
  var hasFocus = _ref4.hasFocus,
      value = _ref4.value,
      error = _ref4.error;


  if (error) return LABEL_CLASS_HAS_ERROR;

  if (hasFocus) return LABEL_CLASS_HAS_FOCUS;

  if (value) return LABEL_CLASS_HAS_VALUE;

  return LABEL_CLASS;
}

function getHrClass(_ref5) {
  var hasFocus = _ref5.hasFocus,
      error = _ref5.error;


  if (error) return HR_CLASS_HAS_ERROR;

  if (hasFocus) return HR_CLASS_HAS_FOCUS;

  return HR_CLASS;
}

var VirtualSelect = function (_Component) {
  _inherits(VirtualSelect, _Component);

  function VirtualSelect(props) {
    _classCallCheck(this, VirtualSelect);

    var _this = _possibleConstructorReturn(this, (VirtualSelect.__proto__ || Object.getPrototypeOf(VirtualSelect)).call(this, props));

    var items = props.items,
        defaultValue = props.defaultValue,
        labelKey = props.labelKey,
        getSelectedLabel = props.getSelectedLabel;


    _this.state = {
      hasFocus: false,
      openMenu: false,
      value: getSelectedLabel({ item: defaultValue, labelKey: labelKey }),
      items: items
    };

    _this.blur = _this.blur.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleRowClick = _this.handleRowClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.setInputRef = _this.setInputRef.bind(_this);
    _this.rowRenderer = _this.rowRenderer.bind(_this);

    return _this;
  }

  _createClass(VirtualSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      var state = {};

      if (this.props.items !== nextProps.items) {

        state.items = nextProps.items.slice(); // clona o array
      }

      if (this.props.defaultValue !== nextProps.defaultValue) {
        var _props = this.props,
            getSelectedLabel = _props.getSelectedLabel,
            labelKey = _props.labelKey;


        state.value = getSelectedLabel({ item: nextProps.defaultValue, labelKey: labelKey });
      }

      if (state) this.setState(state);
    }
  }, {
    key: 'setInputRef',
    value: function setInputRef(element) {

      if (element) this.input = element;
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {

      this.setState({
        hasFocus: true,
        openMenu: true
      });

      var onFocus = this.props.onFocus;


      if (onFocus) onFocus(e);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(_ref6) {
      var _this2 = this;

      var item = _ref6.item;
      var _props2 = this.props,
          onSelect = _props2.onSelect,
          getSelectedLabel = _props2.getSelectedLabel,
          getSelectedValue = _props2.getSelectedValue,
          labelKey = _props2.labelKey,
          valueKey = _props2.valueKey;


      this.setState({
        value: getSelectedLabel({ item: item, labelKey: labelKey }),
        hasFocus: false,
        openMenu: false
      }, function () {

        if (onSelect) {

          var selectedValue = getSelectedValue({ item: item, valueKey: valueKey });

          onSelect(selectedValue);
        }

        _this2.input.blur();
      });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var items = this.state.items;

      //eslint-disable-next-line

      switch (e.key) {
        case 'Enter':
          if (items.length) {

            this.handleSelect({ item: items[0] });
          }
          break;
        case 'Tab':
          this.input.blur();
          break;

      }
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu() {

      this.setState({
        openMenu: false
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {

      var value = e.target.value;

      var _props3 = this.props,
          items = _props3.items,
          labelKey = _props3.labelKey,
          getSelectedLabel = _props3.getSelectedLabel;


      var valueToSearch = (0, _strings.removeSymbols)(value);

      var regex = new RegExp(valueToSearch, 'ig');

      this.setState({
        items: items.filter(function (l) {
          return getSelectedLabel({ item: l, labelKey: labelKey }).match(regex);
        }),
        value: value,
        openMenu: true
      });
    }
  }, {
    key: 'handleRowClick',
    value: function handleRowClick(_ref7) {
      var item = _ref7.item,
          event = _ref7.event;


      event.preventDefault();
      event.stopPropagation();

      this.handleSelect({ item: item });
    }
  }, {
    key: 'blur',
    value: function blur(e) {

      this.setState({
        hasFocus: false
      });

      var onBlur = this.props.onBlur;


      if (onBlur) onBlur(e);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {

      e.persist();

      var isRelatedToMenu = e.relatedTarget && e.relatedTarget.className.indexOf(MENU_CLASS) > -1;

      if (!isRelatedToMenu) {
        var _state = this.state,
            value = _state.value,
            items = _state.items;


        if (value) {

          this.handleSelect({ item: items[0] });
        }
        /* this.setState({
          hasFocus: false,
        });*/
      }
    }
  }, {
    key: 'rowRenderer',
    value: function rowRenderer(_ref8) {
      var _this3 = this;

      var key = _ref8.key,
          index = _ref8.index,
          style = _ref8.style,
          props = _objectWithoutProperties(_ref8, ['key', 'index', 'style']);

      var items = this.state.items;
      var _props4 = this.props,
          menuItemRenderer = _props4.menuItemRenderer,
          menuItemClassName = _props4.menuItemClassName,
          labelKey = _props4.labelKey;


      var item = items[index];

      return _react2.default.createElement(
        'div',
        {
          key: key,
          onClick: function onClick(event) {
            return _this3.handleRowClick(_extends({ event: event, item: item, index: index }, props));
          },
          className: menuItemClassName,
          role: 'presentation'
          // tabIndex={index}
          , style: style
        },
        menuItemRenderer(_extends({ item: item, index: index, labelKey: labelKey }, props))
      );
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this4 = this;

      var _state2 = this.state,
          items = _state2.items,
          hasFocus = _state2.hasFocus,
          openMenu = _state2.openMenu;


      if (!hasFocus || !openMenu) return null;

      var _props5 = this.props,
          menuWidth = _props5.menuWidth,
          menuRowHeight = _props5.menuRowHeight,
          menuClassName = _props5.menuClassName,
          menuMaxItems = _props5.menuMaxItems;


      var lengthToRender = items.length > menuMaxItems ? menuMaxItems : items.length;
      var menuHeight = lengthToRender * menuRowHeight;

      return _react2.default.createElement(
        _AutoSizer2.default,
        null,
        function (_ref9) {
          var width = _ref9.width;
          return _react2.default.createElement(_List2.default, {
            tabIndex: -1 // makes unfocusable
            , width: 500,
            height: menuHeight,
            rowCount: items.length,
            rowHeight: menuRowHeight,
            rowRenderer: _this4.rowRenderer,
            className: menuClassName
          });
        }
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state3 = this.state,
          hasFocus = _state3.hasFocus,
          value = _state3.value;
      var _props6 = this.props,
          id = _props6.id,
          label = _props6.label,
          className = _props6.className,
          error = _props6.error,
          errorText = _props6.errorText,
          placeholder = _props6.placeholder;


      var hrClassName = getHrClass({ hasFocus: hasFocus, value: value, error: error });

      var labelClassName = getLabelClass({ hasFocus: hasFocus, value: value, error: error });

      return _react2.default.createElement(
        'div',
        { className: [CONTAINER_CLASS, className].join(' ') },
        _react2.default.createElement(
          'label',
          {
            htmlFor: id,
            className: labelClassName
          },
          label
        ),
        _react2.default.createElement('input', {
          id: true,
          ref: this.setInputRef,
          className: INPUT_CLASS,
          onFocus: this.handleFocus,
          placeholder: placeholder,
          onKeyDown: this.handleKeyDown,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          value: value
        }),
        _react2.default.createElement('hr', {
          className: hrClassName
        }),
        error && _react2.default.createElement(
          'div',
          { className: ERROR_CONTAINER_CLASS },
          _react2.default.createElement(
            'span',
            { 'aria-hidden': 'false', className: ERROR_CLASS },
            errorText
          )
        ),
        this.renderMenu()
      );
    }
  }]);

  return VirtualSelect;
}(_react.Component);

VirtualSelect.propTypes = {
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  label: _propTypes2.default.string,
  id: _propTypes2.default.oneOf([_propTypes2.default.string, _propTypes2.default.number]),
  // menuHeight: PropTypes.number,
  menuWidth: _propTypes2.default.number,
  menuRowHeight: _propTypes2.default.number,
  menuClassName: _propTypes2.default.string,
  menuMaxItems: _propTypes2.default.number,
  className: _propTypes2.default.string,
  // value: PropTypes.any,
  items: _propTypes2.default.array.isRequired,
  getSelectedLabel: _propTypes2.default.func.isRequired,
  getSelectedValue: _propTypes2.default.func.isRequired,
  menuItemRenderer: _propTypes2.default.func.isRequired,
  menuItemClassName: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  onSelect: _propTypes2.default.func,
  labelKey: _propTypes2.default.string,
  valueKey: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  errorText: _propTypes2.default.string
};

VirtualSelect.defaultProps = {
  onFocus: null,
  onBlur: null,
  label: null,
  id: null,
  menuHeight: 300,
  menuWidth: null,
  menuRowHeight: 35,
  menuClassName: MENU_CLASS,
  placeholder: undefined,
  menuItemClassName: MENU_ITEM_CLASS,
  getSelectedLabel: defaultGetSelectedLabel,
  getSelectedValue: defaultGetSelectedValue,
  menuItemRenderer: defaultMenuItemRenderer,
  menuMaxItems: 15,
  defaultValue: undefined,
  items: [],
  className: null,
  onSelect: null,
  labelKey: null,
  valueKey: null,
  error: false,
  errorText: null
};

exports.default = VirtualSelect;