/* @ds-bundle: {"format":4,"namespace":"ExportPartnersDesignSystem_46ff24","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fe51bcf77357","components/core/Button.jsx":"ffe7ceded25a","components/core/Card.jsx":"4983f01ede05","components/core/Logo.jsx":"206a34700bcb","components/core/SectionHeading.jsx":"2837d09aa7e8","components/core/ServiceCard.jsx":"4a13ca18f6e4","components/core/StatCard.jsx":"6a8705ce07a1","components/forms/Checkbox.jsx":"56d3e5d1f4f7","components/forms/Input.jsx":"79f16507e5d8","components/forms/Select.jsx":"06902097a3c2","components/forms/Textarea.jsx":"dd0b3351dc07","ui_kits/website/ContactScreen.jsx":"a13ce951e02b","ui_kits/website/Footer.jsx":"d00becdecc87","ui_kits/website/HomeScreen.jsx":"7c585c85dd13","ui_kits/website/Navbar.jsx":"469c53576e56","ui_kits/website/ServiceScreen.jsx":"524e423d3fc5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ExportPartnersDesignSystem_46ff24 = window.ExportPartnersDesignSystem_46ff24 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / category label. */
function Badge({
  children,
  variant = 'orange',
  size = 'md',
  style = {},
  ...rest
}) {
  const palettes = {
    orange: {
      bg: 'var(--ep-orange-050)',
      fg: 'var(--ep-orange-700)'
    },
    navy: {
      bg: 'var(--ep-surface-sunken)',
      fg: 'var(--ep-navy)'
    },
    green: {
      bg: 'var(--ep-green-050)',
      fg: 'var(--ep-green)'
    },
    success: {
      bg: 'var(--ep-success-bg)',
      fg: 'var(--ep-success)'
    },
    warning: {
      bg: 'var(--ep-warning-bg)',
      fg: 'var(--ep-warning)'
    },
    danger: {
      bg: 'var(--ep-danger-bg)',
      fg: 'var(--ep-danger)'
    },
    info: {
      bg: 'var(--ep-info-bg)',
      fg: 'var(--ep-info)'
    },
    solid: {
      bg: 'var(--ep-orange)',
      fg: '#fff'
    }
  };
  const p = palettes[variant] || palettes.orange;
  const dims = size === 'sm' ? {
    fontSize: 11,
    padding: '3px 8px'
  } : {
    fontSize: 12,
    padding: '5px 11px'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: p.bg,
      color: p.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-pill)',
      ...dims,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Export Partners primary action button.
 * Variants: primary (orange), secondary (navy), outline, ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14,
      height: 36,
      gap: 6
    },
    md: {
      padding: '11px 22px',
      fontSize: 15,
      height: 44,
      gap: 8
    },
    lg: {
      padding: '15px 30px',
      fontSize: 17,
      height: 54,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast), box-shadow var(--dur-fast), color var(--dur-fast)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--ep-orange)',
      color: '#fff',
      boxShadow: 'var(--shadow-orange)'
    },
    secondary: {
      background: 'var(--ep-navy)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ep-navy)',
      borderColor: 'var(--ep-line-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ep-orange-600)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--ep-orange-600)'
    },
    secondary: {
      background: 'var(--ep-navy-deep)'
    },
    outline: {
      borderColor: 'var(--ep-navy)',
      background: 'var(--ep-surface-muted)'
    },
    ghost: {
      background: 'var(--ep-orange-050)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. `elevated` for shadow, `bordered` for hairline, `feature` for orange top accent. */
function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  hover = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--sp-4)',
    md: 'var(--sp-6)',
    lg: 'var(--sp-8)'
  };
  const variants = {
    elevated: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      border: 'none'
    },
    bordered: {
      background: 'var(--surface-card)',
      boxShadow: 'none',
      border: '1px solid var(--border-default)'
    },
    feature: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      border: 'none',
      borderTop: '3px solid var(--ep-orange)'
    },
    navy: {
      background: 'var(--ep-gradient-navy)',
      boxShadow: 'var(--shadow-lg)',
      border: 'none',
      color: '#fff'
    }
  };
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => hover && setH(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      transform: h ? 'translateY(-4px)' : 'none',
      boxShadow: h ? 'var(--shadow-lg)' : variants[variant].boxShadow,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Export Partners logo. Renders the official brand image asset.
 * Point `src` at the asset that matches the background (navy wordmark on light,
 * white wordmark on dark, or the standalone mark). Never recolor or redraw.
 */
function Logo({
  variant = 'wordmark',
  src,
  height = 32,
  alt = 'Export Partners',
  style = {},
  ...rest
}) {
  const defaults = {
    wordmark: 'assets/logo-navy.png',
    // navy + orange on light bg
    black: 'assets/logo-black.png',
    // black + orange
    white: 'assets/logo-white.png',
    // white + orange on dark bg
    mark: 'assets/icon-mark.png' // standalone growth mark
  };
  const finalSrc = src || defaults[variant] || defaults.wordmark;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: finalSrc,
    alt: alt,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + heading + optional intro. Consistent section intro block. */
function SectionHeading({
  eyebrow = null,
  title,
  intro = null,
  align = 'left',
  invert = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: align === 'center' ? 720 : 640,
      margin: align === 'center' ? '0 auto' : 0,
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--ep-orange)',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-h2)',
      fontWeight: 800,
      color: invert ? '#fff' : 'var(--text-heading)'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-lead)',
      color: invert ? 'rgba(255,255,255,0.78)' : 'var(--text-muted)'
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Service tile: icon + title + description + optional link. Composes Card. */
function ServiceCard({
  icon = null,
  title,
  description,
  linkLabel = null,
  onClick,
  hover = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    variant: "feature",
    hover: hover,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: 'var(--ep-orange-050)',
      color: 'var(--ep-orange-600)',
      fontSize: 26,
      marginBottom: 18
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      fontWeight: 700,
      color: 'var(--text-heading)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      flexGrow: 1,
      margin: 0
    }
  }, description), linkLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      marginTop: 18,
      alignSelf: 'flex-start',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ep-orange-600)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, linkLabel, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2192")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big metric display — for "70% lower costs", "15+ years", "24h response". */
function StatCard({
  value,
  label,
  sublabel = null,
  accent = 'orange',
  align = 'left',
  style = {},
  ...rest
}) {
  const accents = {
    orange: 'var(--ep-orange)',
    navy: 'var(--ep-navy)',
    green: 'var(--ep-green)',
    white: '#fff'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)',
      color: accents[accent] || accents.orange
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      color: accent === 'white' ? 'rgba(255,255,255,0.9)' : 'var(--text-heading)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 13,
      color: accent === 'white' ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Controlled via `checked`/`onChange`. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'cb-' + String(label).toLowerCase().replace(/\s+/g, '-').slice(0, 24) : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? 'var(--ep-orange)' : 'var(--border-default)'}`,
      background: checked ? 'var(--ep-orange)' : 'var(--ep-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.2 2.3L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, hint, and error state. */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'inp-' + String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--ep-danger)' : focus ? 'var(--ep-orange)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)',
      fontFamily: 'var(--font-body)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      background: 'var(--ep-white)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${borderColor}`,
      outline: 'none',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      width: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--ep-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match the brand. */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  style = {},
  wrapStyle = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'sel-' + String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--ep-danger)' : focus ? 'var(--ep-orange)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)',
      fontFamily: 'var(--font-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      background: 'var(--ep-white)',
      padding: '11px 40px 11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${borderColor}`,
      outline: 'none',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      width: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'object' ? o.value : o;
    const lbl = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ep-navy-500)',
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--ep-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'ta-' + String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--ep-danger)' : focus ? 'var(--ep-orange)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)',
      fontFamily: 'var(--font-body)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      background: 'var(--ep-white)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${borderColor}`,
      outline: 'none',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--ep-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Contact / request screen with working form.
function ContactScreen() {
  const {
    Button,
    Card,
    Input,
    Textarea,
    Select,
    Checkbox,
    SectionHeading,
    Badge
  } = window.ExportPartnersDesignSystem_46ff24;
  const [sent, setSent] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ep-surface-muted)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Share your request",
    intro: "Tell us your product type, quantity and target country. Our certified team replies within 24 hours."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['✉️', 'info@exportpartners.com.tr'], ['📍', 'Istanbul, Türkiye'], ['🌐', 'www.exportpartners.com.tr']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 16,
      color: 'var(--ep-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--ep-orange-050)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "green"
  }, "Amazon SPN Verified Service Provider"))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      marginBottom: 10
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--ep-navy)',
      margin: '0 0 8px'
    }
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ep-ink-muted)',
      margin: '0 0 20px'
    }
  }, "Thanks \u2014 we\u2019ll be in touch within 24 hours."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme Ltd."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service",
    placeholder: "Choose a service",
    options: ['Amazon', 'Etsy', 'Trademark Registration', 'Export Dept. Support', 'Supplier Sourcing']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Your request",
    rows: 4,
    placeholder: "Product type, quantity, target country, quality expectations\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to be contacted about my export request.",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !agree,
    onClick: () => setSent(true)
  }, "Send request"))))));
}
window.EPContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Site footer.
function Footer({
  onNav
}) {
  const cols = [{
    h: 'Services',
    items: ['Amazon Consulting', 'Etsy Consulting', 'Trademark Registration', 'Export Dept. Support']
  }, {
    h: 'Company',
    items: ['About us', 'Amazon SPN', 'Careers', 'Blog']
  }, {
    h: 'Contact',
    items: ['Istanbul, Türkiye', 'info@exportpartners.com.tr', '+90 000 000 00 00']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ep-navy-deep)',
      color: 'rgba(255,255,255,0.72)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px var(--container-pad) 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Export Partners",
    style: {
      height: 30,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 260,
      margin: 0
    }
  }, "Your global solution partner for e-export. Amazon SPN-certified consultancy based in T\xFCrkiye.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: '#fff',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '18px var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Export Partners Dan\u0131\u015Fmanl\u0131k"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit'
    }
  }, "Terms"))));
}
window.EPFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home screen: hero, trust strip, services, why-us, CTA band.
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Badge,
    StatCard,
    ServiceCard,
    SectionHeading
  } = window.ExportPartnersDesignSystem_46ff24;
  const services = [{
    icon: '🛒',
    t: 'Amazon Consulting',
    d: 'FBA setup, listing SEO, PPC and launch — managed end to end as an Amazon SPN partner.'
  }, {
    icon: '🎨',
    t: 'Etsy Consulting',
    d: 'Store setup, SEO, ads and Pinterest traffic to take your workshop global.'
  }, {
    icon: '®',
    t: 'Trademark Registration',
    d: 'Domestic & international brand registration with guidance through incentive steps.'
  }, {
    icon: '🌍',
    t: 'Export Dept. Support',
    d: 'A full export team on demand — cut fixed operational costs by more than 70%.'
  }, {
    icon: '🏢',
    t: 'Company Formation',
    d: 'US, UK and international company setup, EORI & VAT registration handled for you.'
  }, {
    icon: '📦',
    t: 'Supplier Sourcing',
    d: 'Reliable, verified Turkish manufacturers matched to your demand, with video proof.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ep-gradient-navy)',
      color: '#fff',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '84px var(--container-pad) 92px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid",
    style: {
      marginBottom: 20
    }
  }, "Amazon SPN Verified"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '0 0 20px'
    }
  }, "Your global", /*#__PURE__*/React.createElement("br", null), "solution ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ep-orange)'
    }
  }, "partner")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.8)',
      maxWidth: 480,
      margin: '0 0 32px'
    }
  }, "We run your entire e-export journey \u2014 from Amazon and Etsy to trademark registration and supplier sourcing. We are your partner, not your competitor."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Start your export"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('services'),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.35)'
    }
  }, "Explore services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icon-mark.png",
    alt: "",
    style: {
      width: 260,
      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--ep-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px var(--container-pad)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "70%",
    label: "Lower operating costs",
    sublabel: "vs. an in-house team"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "15+",
    label: "Years in export & finance",
    accent: "navy"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "24h",
    label: "Average response time",
    accent: "green"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "2018",
    label: "Selling our own brands",
    accent: "navy"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we do",
    title: "Everything you need to sell abroad",
    intro: "One accountable partner across the full e-export stack.",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22,
      marginTop: 44
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.t,
    icon: /*#__PURE__*/React.createElement("span", null, s.icon),
    title: s.t,
    description: s.d,
    linkLabel: "Learn more",
    onClick: () => onNav('services')
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ep-surface-muted)',
      padding: '80px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why Export Partners",
    title: "We are brand owners and sellers too",
    intro: "Since 2018 we have sold our own brands on Amazon and marketplaces. We bring practical, proven know-how \u2014 not theory."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '28px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, ['Data-driven, rational and transparent process management', 'Bilingual TR / EN support at every step', 'Long-term partnership, not one-off orders'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontSize: 16,
      color: 'var(--ep-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ep-orange)',
      fontWeight: 800
    }
  }, "\u2713"), " ", t)))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/marka-tescil.jpg",
    alt: "Trademark registration",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ep-gradient-orange)',
      padding: '64px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: '#fff',
      margin: '0 0 8px'
    }
  }, "Ready to start exporting?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,0.92)',
      margin: 0
    }
  }, "Fill out the form and our certified team replies within 24 hours.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Get a free consultation"))));
}
window.EPHomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navbar.jsx
try { (() => {
// Top navigation bar for the Export Partners website.
function Navbar({
  current,
  onNav
}) {
  const {
    Button
  } = window.ExportPartnersDesignSystem_46ff24;
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--ep-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-navy.png",
    alt: "Export Partners",
    style: {
      height: 30,
      cursor: 'pointer'
    },
    onClick: () => onNav('home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 34
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNav(l.id),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      color: current === l.id ? 'var(--ep-orange-600)' : 'var(--ep-navy)',
      textDecoration: 'none'
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('contact')
  }, "Get a free quote"))));
}
window.EPNavbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreen.jsx
try { (() => {
// Service detail screen (Amazon consulting).
function ServiceScreen({
  onNav
}) {
  const {
    Button,
    Badge,
    Card,
    SectionHeading
  } = window.ExportPartnersDesignSystem_46ff24;
  const steps = [{
    n: '01',
    t: 'Product & market analysis',
    d: 'High-conversion keyword research, competition and profit-margin analysis to pick the right product.'
  }, {
    n: '02',
    t: 'Listing & A+ content',
    d: 'SEO-optimized titles, descriptions and search terms plus a catalog that maximizes visuals.'
  }, {
    n: '03',
    t: 'Logistics & FBA',
    d: 'Cargo plan on the Amazon panel, warehouse barcodes and shipment to FBA or intermediate warehouses.'
  }, {
    n: '04',
    t: 'Launch & advertising',
    d: 'Coupons, promotions, PPC and external traffic to move your listing to the front pages.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ep-surface-muted)',
      borderBottom: '1px solid var(--ep-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ep-ink-muted)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      color: 'var(--ep-ink-muted)'
    }
  }, "Home"), " \u203A ", /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('services'),
    style: {
      cursor: 'pointer',
      color: 'var(--ep-ink-muted)'
    }
  }, "Services"), " \u203A ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ep-navy)'
    }
  }, "Amazon")), /*#__PURE__*/React.createElement(Badge, {
    variant: "green",
    style: {
      marginBottom: 16
    }
  }, "Amazon SPN Verified"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      color: 'var(--ep-navy)',
      margin: '0 0 14px',
      maxWidth: 680
    }
  }, "Amazon Consulting"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--ep-ink-muted)',
      maxWidth: 620,
      margin: '0 0 28px'
    }
  }, "As an Amazon SPN partner, we securely connect to your seller account and manage every step \u2014 from private-label product selection to organic sales."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Talk to a consultant"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "A proven, four-stage process"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 22,
      marginTop: 40
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    variant: "bordered",
    padding: "lg",
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--ep-orange)',
      marginBottom: 10
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--ep-navy)',
      margin: '0 0 8px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ep-ink-muted)',
      margin: 0
    }
  }, s.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ep-navy)',
      padding: '64px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    invert: true,
    align: "center",
    title: "Work with an Amazon-recognized partner",
    intro: "Not just consultancy \u2014 direct, secure technical access to your account through Amazon's official network."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('home'),
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.35)'
    }
  }, "Back to home")))));
}
window.EPServiceScreen = ServiceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
