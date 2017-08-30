import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'react-virtualized/dist/commonjs/List';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

import { removeSymbols } from './../../lib/strings';

import './VirtualSelect.scss';

const CONTAINER_CLASS = 'md-text-field-container md-full-width md-text-field-container--input';
const HR_CLASS = 'md-divider md-divider--text-field md-divider--expand-from-left';
const HR_CLASS_HAS_FOCUS = 'md-divider md-divider--text-field md-divider--expand-from-left md-divider--text-field-expanded md-divider--text-field-active';
const HR_CLASS_HAS_ERROR = 'md-divider md-divider--text-field md-divider--expand-from-left md-divider--text-field-error';
const LABEL_CLASS_HAS_FOCUS = 'md-floating-label md-floating-label--floating md-floating-label--active md-floating-label--floating';
const LABEL_CLASS = 'md-floating-label md-floating-label--inactive md-floating-label--inactive-sized';
const LABEL_CLASS_HAS_VALUE = 'md-floating-label md-floating-label--floating';
const LABEL_CLASS_HAS_ERROR = 'md-floating-label md-floating-label--error md-floating-label--floating';
const INPUT_CLASS = 'md-text-field md-text md-text-field--inline-indicator md-full-width md-text-field--floating-margin';
const MENU_ITEM_CLASS = 'VirtualSelect-menu-item';
const MENU_CLASS = 'md-paper md-paper--1 VirtualSelect-menu';
const ERROR_CONTAINER_CLASS = 'md-text-field-message-container md-text-field-message-container--error md-full-width';
const ERROR_CLASS = 'md-text-field-message md-text-field-message--active';

function safeGet(object, prop) {

  return object ? object[prop] : object;

}

//eslint-disable-next-line
const defaultMenuItemRenderer = ({ item, index, labelKey }) => <span>{safeGet(item, labelKey) || ''}</span>;

//eslint-disable-next-line
const defaultGetSelectedLabel = ({ item, labelKey }) => labelKey ? (safeGet(item, labelKey) || '') : item;

//eslint-disable-next-line
const defaultGetSelectedValue = ({ item, valueKey }) => valueKey ? safeGet(item, valueKey) : item;


function getLabelClass({ hasFocus, value, error }) {

  if (error) return LABEL_CLASS_HAS_ERROR;

  if (hasFocus) return LABEL_CLASS_HAS_FOCUS;

  if (value) return LABEL_CLASS_HAS_VALUE;

  return LABEL_CLASS;

}

function getHrClass({ hasFocus, error }) {

  if (error) return HR_CLASS_HAS_ERROR;

  if (hasFocus) return HR_CLASS_HAS_FOCUS;

  return HR_CLASS;

}

class VirtualSelect extends Component {

  constructor(props) {

    super(props);

    const {
      items,
      defaultValue,
      labelKey,
      getSelectedLabel,
    } = props;

    this.state = {
      hasFocus: false,
      openMenu: false,
      value: getSelectedLabel({ item: defaultValue, labelKey }),
      items,
    };

    this.blur = this.blur.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
    this.rowRenderer = this.rowRenderer.bind(this);


  }


  componentWillReceiveProps(nextProps) {

    const state = {};

    if (this.props.items !== nextProps.items) {

      state.items = nextProps.items.slice(); // clona o array

    }

    if (this.props.defaultValue !== nextProps.defaultValue) {

      const {
        getSelectedLabel,
        labelKey,
      } = this.props;

      state.value = getSelectedLabel({ item: nextProps.defaultValue, labelKey });

    }

    if (state) this.setState(state);

  }

  setInputRef(element) {

    if (element) this.input = element;

  }


  handleFocus(e) {

    this.setState({
      hasFocus: true,
      openMenu: true,
    });

    const { onFocus } = this.props;

    if (onFocus) onFocus(e);


  }


  handleSelect({ item }) {

    const {
      onSelect,
      getSelectedLabel,
      getSelectedValue,
      labelKey,
      valueKey,
    } = this.props;

    this.setState({
      value: getSelectedLabel({ item, labelKey }),
      hasFocus: false,
      openMenu: false,
    },
    () => {

      if (onSelect) {

        const selectedValue = getSelectedValue({ item, valueKey });

        onSelect(selectedValue);

      }

      this.input.blur();

    });

  }

  handleKeyDown(e) {

    const { items } = this.state;

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

  closeMenu() {

    this.setState({
      openMenu: false,
    });

  }


  handleChange(e) {

    const value = e.target.value;

    const {
      items,
      labelKey,
      getSelectedLabel,
    } = this.props;

    const valueToSearch = removeSymbols(value);

    const regex = new RegExp(valueToSearch, 'ig');

    this.setState({
      items: items.filter(l => getSelectedLabel({ item: l, labelKey }).match(regex)),
      value,
      openMenu: true,
    });

  }

  handleRowClick({ item, event }) {

    event.preventDefault();
    event.stopPropagation();

    this.handleSelect({ item });

  }

  blur(e) {

    this.setState({
      hasFocus: false,
    });

    const { onBlur } = this.props;

    if (onBlur) onBlur(e);

  }

  handleBlur(e) {

    e.persist();

    const isRelatedToMenu = e.relatedTarget && e.relatedTarget.className.indexOf(MENU_CLASS) > -1;

    if (!isRelatedToMenu) {

      const { value, items } = this.state;

      if (value) {

        this.handleSelect({ item: items[0] });

      }
      /* this.setState({
        hasFocus: false,
      });*/

    }

  }

  rowRenderer({
    key,
    index,
    style,
    ...props
  }) {

    const { items } = this.state;

    const {
      menuItemRenderer,
      menuItemClassName,
      labelKey,
    } = this.props;

    const item = items[index];

    return (
      <div
        key={key}
        onClick={event => this.handleRowClick({ event, item, index, ...props })}
        className={menuItemClassName}
        role="presentation"
        // tabIndex={index}
        style={style}
      >
        {menuItemRenderer({ item, index, labelKey, ...props })}
      </div>

    );

  }

  renderMenu() {

    const {
      items,
      hasFocus,
      openMenu,
    } = this.state;

    if (!hasFocus || !openMenu) return null;

    const {
      menuWidth,
      menuRowHeight,
      menuClassName,
      menuMaxItems,
    } = this.props;

    const lengthToRender = items.length > menuMaxItems ? menuMaxItems : items.length;
    const menuHeight = lengthToRender * menuRowHeight;

    return (
      <AutoSizer>
        {({ width }) => (
          <List
            tabIndex={-1} // makes unfocusable
            width={500}
            height={menuHeight}
            rowCount={items.length}
            rowHeight={menuRowHeight}
            rowRenderer={this.rowRenderer}
            className={menuClassName}
          />)}
      </AutoSizer>
    );

  }


  render() {

    const {
      hasFocus,
      value,
    } = this.state;

    const {
      id,
      label,
      className,
      error,
      errorText,
      placeholder,
    } = this.props;

    const hrClassName = getHrClass({ hasFocus, value, error });

    const labelClassName = getLabelClass({ hasFocus, value, error });

    return (
      <div className={[CONTAINER_CLASS, className].join(' ')}>
        <label
          htmlFor={id}
          className={labelClassName}
        >{label}
        </label>
        <input
          id
          ref={this.setInputRef}
          className={INPUT_CLASS}
          onFocus={this.handleFocus}
          placeholder={placeholder}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={value}
        />
        <hr
          className={hrClassName}
        />
        {error &&
          <div className={ERROR_CONTAINER_CLASS}>
            <span aria-hidden="false" className={ERROR_CLASS}>
              {errorText}
            </span>
          </div>
        }
        {this.renderMenu()}
      </div>
    );

  }
}

VirtualSelect.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  // menuHeight: PropTypes.number,
  menuWidth: PropTypes.number,
  menuRowHeight: PropTypes.number,
  menuClassName: PropTypes.string,
  menuMaxItems: PropTypes.number,
  className: PropTypes.string,
  // value: PropTypes.any,
  items: PropTypes.array.isRequired,
  getSelectedLabel: PropTypes.func.isRequired,
  getSelectedValue: PropTypes.func.isRequired,
  menuItemRenderer: PropTypes.func.isRequired,
  menuItemClassName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.any,
  onSelect: PropTypes.func,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
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
  errorText: null,
};

export default VirtualSelect;
