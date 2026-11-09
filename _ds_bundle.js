/* @ds-bundle: {"format":4,"namespace":"HoodleDesignSystem_ee4a2a","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ListingCard","sourcePath":"components/display/ListingCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"3535d2932427","components/actions/IconButton.jsx":"58c6ed31879f","components/brand/Eyebrow.jsx":"7aa013382839","components/display/Badge.jsx":"cee79dc2c718","components/display/Card.jsx":"7e38590c0df0","components/display/ListingCard.jsx":"17ae61cad0ca","components/display/Tag.jsx":"ddb7b4cc5f68","components/feedback/Dialog.jsx":"99cadd1bd74e","components/feedback/Toast.jsx":"8164dd2b93f2","components/feedback/Tooltip.jsx":"0130b7579c03","components/forms/Checkbox.jsx":"b78a37cc4dea","components/forms/Input.jsx":"fac4579b8a1b","components/forms/Radio.jsx":"59578facf965","components/forms/Select.jsx":"987fa72926a1","components/forms/Switch.jsx":"b23dc3519f28","components/navigation/Tabs.jsx":"d3097b55f036","exports/github-hba-ui/ui_kits/hba-presence/Account.jsx":"01d660fe339c","exports/github-hba-ui/ui_kits/hba-presence/BuilderPage.jsx":"fd67a7757956","exports/github-hba-ui/ui_kits/hba-presence/PresenceBottom.jsx":"a8e8734e0d32","exports/github-hba-ui/ui_kits/hba-presence/PresenceTop.jsx":"a96220a69de1","exports/github-hba-ui/ui_kits/hba-presence/Shell.jsx":"501c630ae314","exports/github-hba-ui/ui_kits/hba-presence/ShowcasePage.jsx":"2e6a128eafe7","exports/github-hba-ui/ui_kits/hba-presence/data.js":"a0e74d0732cf","ui_kits/hba-presence/Account.jsx":"01d660fe339c","ui_kits/hba-presence/BuilderPage.jsx":"fd67a7757956","ui_kits/hba-presence/PresenceBottom.jsx":"a8e8734e0d32","ui_kits/hba-presence/PresenceTop.jsx":"a96220a69de1","ui_kits/hba-presence/Shell.jsx":"501c630ae314","ui_kits/hba-presence/ShowcasePage.jsx":"2e6a128eafe7","ui_kits/hba-presence/data.js":"a0e74d0732cf","ui_kits/vendor-platform/Landing.jsx":"ac25f659109c","ui_kits/vendor-platform/Marketplace.jsx":"13fbb5f84d38","ui_kits/vendor-platform/Placements.jsx":"9df834595420","ui_kits/vendor-platform/Pricing.jsx":"3bc477dc51ad","ui_kits/vendor-platform/Profile.jsx":"08f4fb621de3","ui_kits/vendor-platform/Signup.jsx":"d4da36e20000","ui_kits/vendor-platform/VendorShell.jsx":"272a1350b4bb","ui_kits/vendor-platform/data.js":"ae6aba4ae155"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HoodleDesignSystem_ee4a2a = window.HoodleDesignSystem_ee4a2a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: 'var(--teal-500)',
    hov: 'var(--teal-600)',
    prs: 'var(--teal-700)',
    fg: '#fff',
    bd: 'transparent'
  },
  secondary: {
    bg: '#fff',
    hov: 'var(--teal-50)',
    prs: 'var(--teal-100)',
    fg: 'var(--teal-600)',
    bd: 'var(--teal-500)'
  },
  ink: {
    bg: 'var(--ink-900)',
    hov: 'var(--ink-800)',
    prs: 'var(--ink-700)',
    fg: '#fff',
    bd: 'transparent'
  },
  ghost: {
    bg: 'transparent',
    hov: 'var(--ink-50)',
    prs: 'var(--ink-100)',
    fg: 'var(--ink-900)',
    bd: 'transparent'
  },
  danger: {
    bg: 'var(--danger-500)',
    hov: '#B02F26',
    prs: '#962820',
    fg: '#fff',
    bd: 'transparent'
  }
};
const S = {
  sm: {
    h: 'var(--control-sm)',
    px: 12,
    fs: 13
  },
  md: {
    h: 'var(--control-md)',
    px: 18,
    fs: 14
  },
  lg: {
    h: 'var(--control-lg)',
    px: 24,
    fs: 16
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false),
    [f, setF] = React.useState(false);
  const v = V[variant] || V.primary,
    s = S[size] || S.md;
  const bg = disabled ? variant === 'ghost' ? 'transparent' : 'var(--ink-100)' : p ? v.prs : h ? v.hov : v.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? '100%' : undefined,
      font: `500 ${s.fs}px/1 var(--font-sans)`,
      color: disabled ? 'var(--ink-400)' : v.fg,
      background: bg,
      border: `1px solid ${disabled && variant === 'secondary' ? 'var(--border-default)' : v.bd}`,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled,
  onClick,
  active,
  style
}) {
  const [h, setH] = React.useState(false);
  const d = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const m = {
    ghost: {
      bg: h ? 'var(--ink-50)' : 'transparent',
      fg: 'var(--ink-900)',
      bd: 'transparent'
    },
    outline: {
      bg: h ? 'var(--ink-50)' : '#fff',
      fg: 'var(--ink-900)',
      bd: 'var(--border-default)'
    },
    brand: {
      bg: h ? 'var(--teal-600)' : 'var(--teal-500)',
      fg: '#fff',
      bd: 'transparent'
    },
    overlay: {
      bg: h ? '#fff' : 'rgba(255,255,255,.92)',
      fg: 'var(--ink-900)',
      bd: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      borderRadius: variant === 'overlay' ? 'var(--radius-pill)' : 'var(--radius-control)',
      background: m.bg,
      color: active ? 'var(--teal-500)' : m.fg,
      border: `1px solid ${m.bd}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      boxShadow: variant === 'overlay' ? 'var(--shadow-sm)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  rules = true,
  tone = 'ink',
  align = 'center',
  size = 'md',
  style
}) {
  const color = tone === 'brand' ? 'var(--teal-500)' : tone === 'inverse' ? '#fff' : 'var(--ink-900)';
  const fs = size === 'sm' ? 12 : size === 'lg' ? 18 : 14;
  const rw = size === 'sm' ? 24 : size === 'lg' ? 56 : 40;
  const rule = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: rw,
      height: 'var(--stroke-rule)',
      background: 'var(--gold-500)',
      flex: 'none'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: align === 'start' ? 'flex-start' : 'center',
      gap: fs * 1.2,
      ...style
    }
  }, rules && align === 'center' && rule, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${fs}px/1.2 var(--font-sans)`,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      marginRight: 'calc(var(--tracking-eyebrow) * -1)'
    }
  }, children), rules && rule);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  brand: ['var(--teal-50)', 'var(--teal-700)'],
  gold: ['var(--gold-100)', 'var(--gold-900)'],
  neutral: ['var(--ink-100)', 'var(--ink-700)'],
  success: ['var(--success-50)', 'var(--success-500)'],
  warning: ['var(--warning-50)', 'var(--warning-500)'],
  danger: ['var(--danger-50)', 'var(--danger-500)'],
  info: ['var(--info-50)', 'var(--info-500)'],
  solid: ['var(--teal-500)', '#fff'],
  ink: ['var(--ink-900)', '#fff']
};
function Badge({
  children,
  tone = 'brand',
  dot,
  style
}) {
  const [bg, fg] = T[tone] || T.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      font: '500 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  padding = 24,
  interactive,
  tone = 'default',
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const bg = tone === 'sunken' ? 'var(--surface-sunken)' : tone === 'brand' ? 'var(--surface-brand-soft)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: bg,
      borderRadius: 'var(--radius-card)',
      border: tone === 'default' ? '1px solid var(--border-subtle)' : '1px solid transparent',
      padding,
      boxShadow: tone === 'default' ? interactive && h ? 'var(--shadow-card-hover)' : 'var(--shadow-card)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transform: interactive && h ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ListingCard.jsx
try { (() => {
function ListingCard({
  image,
  imageAlt = '',
  price,
  name,
  community,
  location,
  beds,
  baths,
  sqft,
  status,
  saved,
  onSave,
  onClick,
  imageSlot
}) {
  const [h, setH] = React.useState(false);
  const facts = [beds != null && `${beds} bd`, baths != null && `${baths} ba`, sqft != null && `${Number(sqft).toLocaleString()} sq ft`].filter(Boolean);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: h ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : undefined,
      transition: 'box-shadow var(--duration-base) var(--ease-standard)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--ink-100)'
    }
  }, imageSlot || (image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 12px var(--font-sans)',
      color: 'var(--ink-400)'
    }
  }, "Home photo")), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solid",
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, status), onSave && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": saved ? 'Unsave' : 'Save',
    onClick: e => {
      e.stopPropagation();
      onSave();
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: 0,
      background: 'rgba(255,255,255,.94)',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      color: saved ? 'var(--teal-500)' : 'var(--ink-900)',
      font: '16px/1 var(--font-sans)'
    }
  }, saved ? '♥' : '♡')), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/1.2 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, price), facts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, facts.join('  ·  ')), name && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)',
      marginTop: 4
    }
  }, name, community && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, " at ", community)), location && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, location)));
}
Object.assign(__ds_scope, { ListingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ListingCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  icon
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-pressed": !!selected,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: onRemove ? '0 8px 0 14px' : '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${selected ? 'var(--teal-500)' : h ? 'var(--ink-400)' : 'var(--border-default)'}`,
      background: selected ? 'var(--teal-50)' : '#fff',
      color: selected ? 'var(--teal-700)' : 'var(--ink-800)',
      font: '500 13px/1 var(--font-sans)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, icon, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      lineHeight: 1,
      color: 'var(--ink-500)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose,
  width = 480,
  inline
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: 'calc(100vw - 32px)',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-overlay)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 20px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      border: 0,
      borderRadius: 8,
      background: 'transparent',
      cursor: 'pointer',
      font: '22px/1 var(--font-sans)',
      color: 'var(--ink-500)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 24px',
      font: '400 15px/1.55 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '16px 24px',
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  default: 'var(--ink-900)',
  success: 'var(--success-500)',
  danger: 'var(--danger-500)',
  brand: 'var(--teal-500)'
};
function Toast({
  children,
  tone = 'default',
  action,
  onAction,
  onClose
}) {
  const dot = tone === 'default' ? 'var(--teal-300)' : '#fff';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 44,
      padding: '10px 12px 10px 16px',
      borderRadius: 'var(--radius-md)',
      background: T[tone] || T.default,
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
      font: '400 14px/1.4 var(--font-sans)',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dot,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: 'transparent',
      color: tone === 'default' ? 'var(--teal-200)' : '#fff',
      font: '600 14px var(--font-sans)',
      cursor: 'pointer',
      padding: '4px 6px',
      textDecoration: tone === 'default' ? 'none' : 'underline'
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      color: 'rgba(255,255,255,.75)',
      font: '18px/1 var(--font-sans)',
      cursor: 'pointer',
      padding: '2px 4px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top',
  open
}) {
  const [h, setH] = React.useState(false);
  const show = open ?? h;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onFocus: () => setH(true),
    onBlur: () => setH(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: 'var(--ink-900)',
      color: '#fff',
      font: '400 12px/1.4 var(--font-sans)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  description
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 18,
      height: 18,
      marginTop: 1,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${on ? 'var(--teal-500)' : 'var(--border-strong)'}`,
      background: on ? 'var(--teal-500)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 9,
      borderRight: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'translateY(-1px) rotate(45deg)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelS = {
  font: '500 14px/1.3 var(--font-sans)',
  color: 'var(--text-strong)'
};
const helpS = e => ({
  font: '400 12px/1.4 var(--font-sans)',
  color: e ? 'var(--danger-500)' : 'var(--text-muted)'
});
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  value,
  defaultValue,
  placeholder,
  type = 'text',
  disabled,
  onChange,
  style,
  id,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const h = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelS
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--ink-50)' : '#fff',
      border: `1px solid ${error ? 'var(--danger-500)' : f ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-control)',
      boxShadow: f ? error ? '0 0 0 3px rgba(200,55,45,.2)' : 'var(--focus-ring)' : 'none',
      color: 'var(--text-muted)',
      transition: 'box-shadow var(--duration-fast)'
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: `400 ${size === 'lg' ? 16 : 14}px var(--font-sans)`,
      color: 'var(--text-strong)'
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: helpS(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column'
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value,
      lab = typeof o === 'string' ? o : o.label,
      on = cur === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      onChange: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 18,
        height: 18,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: `1.5px solid ${on ? 'var(--teal-500)' : 'var(--border-strong)'}`,
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--teal-500)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, lab));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const labelS = {
  font: '500 14px/1.3 var(--font-sans)',
  color: 'var(--text-strong)'
};
const helpS = e => ({
  font: '400 12px/1.4 var(--font-sans)',
  color: e ? 'var(--danger-500)' : 'var(--text-muted)'
});
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  placeholder,
  size = 'md',
  disabled,
  onChange,
  style,
  id
}) {
  const [f, setF] = React.useState(false);
  const h = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelS
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: uid,
    value: value,
    defaultValue: defaultValue ?? (placeholder ? '' : undefined),
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 36px 0 12px',
      font: '400 14px var(--font-sans)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--ink-50)' : '#fff',
      border: `1px solid ${error ? 'var(--danger-500)' : f ? 'var(--border-focus)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-control)',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      outline: 0,
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      width: 7,
      height: 7,
      borderRight: '1.5px solid var(--ink-600)',
      borderBottom: '1.5px solid var(--ink-600)',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: helpS(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 36,
      height: 20,
      borderRadius: 999,
      background: on ? 'var(--teal-500)' : 'var(--ink-300)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline'
}) {
  const [v, setV] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const cur = value ?? v;
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: pill ? 4 : 24,
      borderBottom: pill ? 'none' : '1px solid var(--border-default)',
      background: pill ? 'var(--ink-50)' : 'transparent',
      padding: pill ? 4 : 0,
      borderRadius: pill ? 'var(--radius-md)' : 0,
      width: pill ? 'fit-content' : undefined
    }
  }, tabs.map(t => {
    const val = t.value ?? t,
      lab = t.label ?? t,
      on = cur === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: pill ? {
        height: 32,
        padding: '0 14px',
        border: 0,
        borderRadius: 6,
        background: on ? '#fff' : 'transparent',
        boxShadow: on ? 'var(--shadow-xs)' : 'none',
        font: '500 13px var(--font-sans)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        cursor: 'pointer'
      } : {
        height: 44,
        padding: 0,
        border: 0,
        background: 'transparent',
        marginBottom: -1,
        borderBottom: `var(--stroke-roof) solid ${on ? 'var(--teal-500)' : 'transparent'}`,
        font: '500 14px var(--font-sans)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        cursor: 'pointer'
      }
    }, lab, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--text-subtle)',
        fontWeight: 400
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// exports/github-hba-ui/ui_kits/hba-presence/Account.jsx
try { (() => {
const {
  Button: AB,
  Badge: ABadge,
  Tabs: ATabs,
  Card: ACard,
  Dialog: ADialog,
  Input: AInput,
  Select: ASelect,
  Checkbox: ACheck,
  ListingCard: AListing,
  IconButton: AIconButton
} = window.HoodleDesignSystem_ee4a2a;
const RATES = [['loved', 'Loved it', 'heart'], ['ok', 'It\'s OK', 'meh'], ['no', 'Not for me', 'thumbs-down']];
function ModelHomeSheet({
  id,
  onClose,
  go,
  saved,
  toggleSave,
  ratings,
  setRating,
  notes,
  setNote,
  requireUser,
  notify
}) {
  const {
    m
  } = useView();
  const {
    homes,
    builders,
    products,
    INT
  } = HBA_DATA;
  const [gal, setGal] = React.useState(0);
  const h = homes.find(x => x.id === id);
  if (!h) return null;
  const b = builders.find(x => x.id === h.builder);
  const prods = products.slice(0, 4 + h.no % 3);
  const imgs = [h.img, ...INT.slice(0, 3)];
  const rate = ratings[h.id];
  const note = notes[h.id] || '';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim)',
      zIndex: 60,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: m ? '100%' : 520,
      height: '100%',
      background: '#fff',
      overflowY: 'auto',
      boxShadow: 'var(--shadow-overlay)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: imgs[gal],
    style: {
      width: '100%',
      aspectRatio: '4 / 3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      right: 12,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(ABadge, {
    tone: "solid",
    style: {
      height: 28,
      padding: '0 10px',
      fontSize: 13
    }
  }, "Parade home #", h.no), /*#__PURE__*/React.createElement(AIconButton, {
    label: "Close",
    variant: "overlay",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    }),
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      display: 'flex',
      gap: 6
    }
  }, imgs.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => setGal(i),
    style: {
      width: 48,
      height: 36,
      padding: 0,
      border: i === gal ? '2px solid #fff' : '2px solid transparent',
      borderRadius: 6,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'none',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: s,
    style: {
      width: '100%',
      height: '100%'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 26px/1.2 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.name), /*#__PURE__*/React.createElement(AB, {
    size: "sm",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 15,
      style: saved.homes.has(h.id) ? {
        fill: 'var(--teal-500)'
      } : null
    }),
    onClick: () => toggleSave('homes', h.id)
  }, saved.homes.has(h.id) ? 'Saved' : 'Save')), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.price), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, h.beds, " bd  \xB7  ", h.baths, " ba  \xB7  ", h.sqft.toLocaleString(), " sq ft"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, h.hood, ", ", h.city, " \xB7 Open Thu\u2013Sun 12\u20135")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      onClose();
      go('builder', {
        id: b.id
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: '#fff',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    style: {
      width: 44,
      height: 44,
      borderRadius: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Built by ", b.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      font: '400 12px var(--font-sans)',
      color: 'var(--gold-700)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 13
  }), "HBA of Metro Denver member")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-400)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "How did you like it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, RATES.map(([v, l, i]) => {
    const on = rate === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => requireUser(() => {
        setRating(h.id, on ? null : v);
      }),
      style: {
        height: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${on ? 'var(--teal-500)' : 'var(--border-default)'}`,
        background: on ? 'var(--teal-50)' : '#fff',
        color: on ? 'var(--teal-700)' : 'var(--ink-700)',
        font: '500 13px var(--font-sans)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 18
    }), l);
  })), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Private notes: what you'd change, rooms you loved\u2026",
    value: note,
    onFocus: () => requireUser(() => {}),
    onChange: e => setNote(h.id, e.target.value),
    rows: 3,
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  }), "Only you can see ratings and notes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, "Products in this home"), prods.map(p => {
    const on = saved.products.has(p.id);
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 14px var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 12px var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, p.by, " \xB7 Parade sponsor")), /*#__PURE__*/React.createElement(AB, {
      size: "sm",
      variant: on ? 'secondary' : 'ghost',
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: on ? 'check' : 'plus',
        size: 15
      }),
      onClick: () => toggleSave('products', p.id)
    }, on ? 'Saved' : 'Want this'));
  })), /*#__PURE__*/React.createElement(AB, {
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    }),
    onClick: () => requireUser(() => notify(b.name + ' will follow up about ' + h.name + '.'))
  }, "Ask ", b.name, " about this home"))));
}
function RegisterDialog({
  open,
  onClose,
  onDone
}) {
  const [first, setFirst] = React.useState('Alex');
  const [email, setEmail] = React.useState('alex@example.com');
  return /*#__PURE__*/React.createElement(ADialog, {
    open: open,
    title: "Create your free Hoodle account",
    onClose: onClose,
    width: 460,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AB, {
      variant: "ghost",
      onClick: onClose
    }, "Not now"), /*#__PURE__*/React.createElement(AB, {
      onClick: () => onDone({
        first,
        email
      })
    }, "Create account"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Save Parade homes, rate what you tour and keep talking with builders after the event."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "First name",
    value: first,
    onChange: e => setFirst(e.target.value)
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "ZIP code",
    defaultValue: "80016"
  })), /*#__PURE__*/React.createElement(AInput, {
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(ASelect, {
    label: "When are you planning to buy?",
    options: ['In the next 3 months', '3–6 months', '6–12 months', 'Just looking'],
    defaultValue: "3\u20136 months"
  }), /*#__PURE__*/React.createElement(ACheck, {
    label: "Enter me in the daily Parade giveaway",
    defaultChecked: true
  })));
}
function AccountPage({
  user,
  go,
  saved,
  toggleSave,
  ratings,
  notes,
  openHome,
  requireUser
}) {
  const {
    m
  } = useView();
  const {
    homes,
    builders,
    products
  } = HBA_DATA;
  const [tab, setTab] = React.useState('homes');
  if (!user) return /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: '80px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 28px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Sign in to see your saved homes"), /*#__PURE__*/React.createElement(AB, {
    onClick: () => requireUser(() => {})
  }, "Create a free account"));
  const savedHomes = homes.filter(h => saved.homes.has(h.id));
  const rated = homes.filter(h => ratings[h.id] || notes[h.id]).sort((a, b) => ['loved', 'ok', 'no'].indexOf(ratings[a.id]) - ['loved', 'ok', 'no'].indexOf(ratings[b.id]));
  const prods = products.filter(p => saved.products.has(p.id));
  const bs = builders.filter(b => saved.builders.has(b.id));
  const bname = id => (builders.find(b => b.id === id) || {}).name;
  const empty = t => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, t, /*#__PURE__*/React.createElement(AB, {
    size: "sm",
    variant: "secondary",
    onClick: () => go('showcase')
  }, "Browse Parade homes"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: m ? '28px 20px 56px' : '48px 32px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 20,
      justifyContent: 'space-between',
      alignItems: m ? 'flex-start' : 'flex-end',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "My Hoodle"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '4px 0 0',
      font: `500 ${m ? 28 : 36}px/1.15 var(--font-sans)`,
      color: 'var(--text-strong)',
      letterSpacing: '-0.015em'
    }
  }, "Welcome back, ", user.first)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: m ? 24 : 36
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: savedHomes.length,
    label: "saved homes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: Object.values(ratings).filter(r => r === 'loved').length,
    label: "loved"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: prods.length,
    label: "products"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 16,
      borderRadius: 'var(--radius-lg)',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 14px/1.45 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "You're entered in today's Parade giveaway."), " Check in at any Parade home to enter again tomorrow.")), /*#__PURE__*/React.createElement(ATabs, {
    tabs: [{
      value: 'homes',
      label: 'Saved homes',
      count: savedHomes.length
    }, {
      value: 'rated',
      label: 'Ratings & notes',
      count: rated.length
    }, {
      value: 'products',
      label: 'Products',
      count: prods.length
    }, {
      value: 'builders',
      label: 'Builders',
      count: bs.length
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, tab === 'homes' && (savedHomes.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, savedHomes.map(h => /*#__PURE__*/React.createElement(AListing, {
    key: h.id,
    image: h.img,
    status: 'Parade #' + h.no,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    sqft: h.sqft,
    name: h.name,
    community: h.hood,
    location: bname(h.builder),
    saved: true,
    onSave: () => toggleSave('homes', h.id),
    onClick: () => openHome(h.id)
  }))) : empty('No saved homes yet.')), tab === 'rated' && (rated.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, rated.map((h, i) => {
    const r = RATES.find(x => x[0] === ratings[h.id]);
    return /*#__PURE__*/React.createElement(ACard, {
      key: h.id,
      padding: 14,
      interactive: true,
      onClick: () => openHome(h.id)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: m ? 'flex-start' : 'center',
        flexDirection: m ? 'column' : 'row'
      }
    }, /*#__PURE__*/React.createElement(Img, {
      src: h.img,
      style: {
        width: m ? '100%' : 120,
        height: m ? 140 : 80,
        borderRadius: 8,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, "#", h.no, " ", h.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: 'var(--text-muted)'
      }
    }, "\xB7 ", bname(h.builder))), notes[h.id] && /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/1.5 var(--font-sans)',
        color: 'var(--text-body)',
        marginTop: 4,
        fontStyle: 'italic'
      }
    }, "\"", notes[h.id], "\"")), r && /*#__PURE__*/React.createElement(ABadge, {
      tone: r[0] === 'loved' ? 'brand' : r[0] === 'ok' ? 'neutral' : 'danger'
    }, r[1])));
  })) : empty('Rate the homes you tour to compare them here.')), tab === 'products' && (prods.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 14
    }
  }, prods.map(p => /*#__PURE__*/React.createElement(ACard, {
    key: p.id,
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, p.by), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(AB, {
    size: "sm",
    variant: "ghost",
    onClick: () => toggleSave('products', p.id)
  }, "Remove"))))) : empty('Tap "Want this" on products inside Parade homes.')), tab === 'builders' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(2,minmax(0,1fr))',
      gap: 14
    }
  }, (bs.length ? bs : builders.slice(0, 1)).map((b, i) => /*#__PURE__*/React.createElement(ACard, {
    key: b.id,
    padding: 16,
    interactive: true,
    onClick: () => go('builder', {
      id: b.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    style: {
      width: 52,
      height: 52,
      borderRadius: 8,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-body)',
      marginTop: 4
    }
  }, i === 0 ? '"Thanks for touring The Willow. We can move the office to the main floor. Want to see a revised plan?"' : 'No messages yet.'), i === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "Replied 2 days after the Parade")))))))));
}
Object.assign(window, {
  ModelHomeSheet,
  RegisterDialog,
  AccountPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/github-hba-ui/ui_kits/hba-presence/Account.jsx", error: String((e && e.message) || e) }); }

// exports/github-hba-ui/ui_kits/hba-presence/BuilderPage.jsx
try { (() => {
const {
  Button: BB,
  Badge: BBadge,
  Tabs: BTabs,
  Card: BCard,
  ListingCard: BListing,
  Input: BInput,
  IconButton: BIconButton
} = window.HoodleDesignSystem_ee4a2a;
function BuilderPage({
  id,
  go,
  saved,
  toggleSave,
  openHome,
  notify
}) {
  const {
    m
  } = useView();
  const {
    builders,
    neighborhoods,
    homes,
    P,
    hba
  } = HBA_DATA;
  const b = builders.find(x => x.id === id) || builders[0];
  const [tab, setTab] = React.useState('n');
  const hoods = neighborhoods[b.id] || [{
    name: b.city + ' Ranch',
    city: b.city,
    from: b.from,
    plans: 4,
    img: b.img
  }, {
    name: 'The Reserve',
    city: b.city,
    from: b.from,
    plans: 3,
    img: P[9]
  }];
  const paradeHomes = homes.filter(h => h.builder === b.id);
  const avail = [{
    id: b.id + 'a',
    name: 'The Aspen',
    price: b.from.replace('k', ',900').replace('$', '$'),
    beds: 3,
    baths: 2.5,
    sqft: 2140,
    img: P[10],
    hood: hoods[0].name
  }, {
    id: b.id + 'b',
    name: 'The Blue Spruce',
    price: 'Priced from ' + b.from,
    beds: 4,
    baths: 3,
    sqft: 2690,
    img: P[11],
    hood: hoods[0].name
  }, {
    id: b.id + 'c',
    name: 'The Columbine',
    price: 'Priced from ' + b.from,
    beds: 4,
    baths: 3.5,
    sqft: 3010,
    img: P[8],
    hood: hoods[1] ? hoods[1].name : hoods[0].name
  }];
  const isSaved = saved.builders.has(b.id);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: hba.name,
      onClick: () => go('hba')
    }, {
      label: 'Members',
      onClick: () => go('hba', {
        anchor: 'members'
      })
    }, {
      label: b.name
    }]
  })), /*#__PURE__*/React.createElement(Wrap, {
    pad: !m
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    alt: "",
    style: {
      width: '100%',
      height: m ? 200 : 300,
      borderRadius: m ? 0 : 'var(--radius-xl)'
    }
  })), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: m ? 16 : 24,
      alignItems: m ? 'flex-start' : 'flex-end',
      marginTop: m ? -36 : -44,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: m ? 76 : 104,
      height: m ? 76 : 104,
      borderRadius: 'var(--radius-lg)',
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 11px var(--font-sans)',
      color: 'var(--ink-400)',
      flex: 'none'
    }
  }, "Builder logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: `500 ${m ? 28 : 36}px/1.15 var(--font-sans)`,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, b.type, " \xB7 ", b.city, ", CO \xB7 Building for ", b.years, " years"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(HbaBadge, {
    onClick: () => go('hba')
  }), b.elite && /*#__PURE__*/React.createElement(BBadge, {
    tone: "ink",
    style: {
      height: 34,
      padding: '0 12px'
    }
  }, "Hoodle Elite\u2122 Verified"), /*#__PURE__*/React.createElement(BBadge, {
    tone: "neutral",
    style: {
      height: 34,
      padding: '0 12px'
    }
  }, "NAHB member"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BB, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16,
      style: isSaved ? {
        fill: 'var(--teal-500)'
      } : null
    }),
    onClick: () => toggleSave('builders', b.id)
  }, isSaved ? 'Saved' : 'Save'), /*#__PURE__*/React.createElement(BB, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    }),
    onClick: () => notify('Message form opened below.')
  }, "Contact builder"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,auto)',
      gap: m ? 18 : 48,
      justifyContent: 'start',
      padding: '28px 0',
      borderBottom: '1px solid var(--border-subtle)',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: b.neighborhoods,
    label: "neighborhoods"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: b.homes,
    label: "available homes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: b.from,
    label: "homes from"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4.8",
    label: "rating \xB7 126 reviews"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) 340px',
      gap: m ? 32 : 48,
      padding: m ? '28px 0 56px' : '36px 0 88px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      minWidth: 0
    }
  }, paradeHomes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 18,
      alignItems: m ? 'stretch' : 'center',
      padding: 18,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-brand-soft)'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: paradeHomes[0].img,
    style: {
      width: m ? '100%' : 140,
      height: 96,
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-sans)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--teal-700)'
    }
  }, "In the Parade of Homes"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 17px/1.35 var(--font-sans)',
      color: 'var(--text-strong)',
      marginTop: 4
    }
  }, "#", paradeHomes[0].no, " ", paradeHomes[0].name, " at ", paradeHomes[0].hood), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, "Open Thu\u2013Sun, 12\u20135 PM through Aug 23")), /*#__PURE__*/React.createElement(BB, {
    onClick: () => openHome(paradeHomes[0].id)
  }, "View model home")), /*#__PURE__*/React.createElement(BTabs, {
    tabs: [{
      value: 'n',
      label: 'Neighborhoods',
      count: hoods.length
    }, {
      value: 'h',
      label: 'Available homes',
      count: b.homes
    }, {
      value: 'p',
      label: 'Floor plans'
    }, {
      value: 'r',
      label: 'Reviews'
    }],
    value: tab,
    onChange: setTab
  }), tab === 'n' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(2,minmax(0,1fr))',
      gap: 20
    }
  }, hoods.map(h => /*#__PURE__*/React.createElement(BCard, {
    key: h.name,
    padding: 0,
    interactive: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: h.img,
    style: {
      width: '100%',
      aspectRatio: '16 / 9'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, h.city, " \xB7 ", h.plans, " floor plans \xB7 from ", h.from))))), tab === 'h' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, [...paradeHomes, ...avail].map(h => /*#__PURE__*/React.createElement(BListing, {
    key: h.id,
    image: h.img,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    sqft: h.sqft,
    name: h.name,
    community: h.hood,
    status: h.status,
    saved: saved.homes.has(h.id),
    onSave: () => toggleSave('homes', h.id),
    onClick: () => h.no && openHome(h.id)
  }))), (tab === 'p' || tab === 'r') && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Existing Hoodle builder-page section. Not recreated in this prototype.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: m ? 'static' : 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(ContactCard, {
    builder: b,
    notify: notify
  }), /*#__PURE__*/React.createElement(BCard, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 22,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Verified HBA member since 2004"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, b.name, " is a member of the HBA of Metro Denver, the Colorado Association of Home Builders and NAHB."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('hba');
    },
    style: {
      display: 'inline-block',
      marginTop: 8,
      font: '500 13px var(--font-sans)'
    }
  }, "See all HBA members \u2192")))), /*#__PURE__*/React.createElement(BCard, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, "REALTORS who show these homes"), [['Dana Ruiz', 'Compass · Aurora'], ['Marcus Bell', 'eXp Realty · Denver']].map(([n, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--ink-100)',
      color: 'var(--ink-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 13px var(--font-sans)'
    }
  }, n.split(' ').map(s => s[0]).join('')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, c)))))))));
}
function ContactCard({
  builder,
  notify
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(BCard, {
    padding: 20
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 28,
    color: "var(--success-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, builder.name, " usually replies within a day. You'll find the conversation in My Hoodle.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Contact ", builder.name), /*#__PURE__*/React.createElement(BInput, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(BInput, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    defaultValue: "I'm interested in your homes and would like to schedule a tour.",
    rows: 3,
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(BB, {
    fullWidth: true,
    onClick: () => {
      setSent(true);
      notify('Message sent to ' + builder.name + '.');
    }
  }, "Send message")));
}
Object.assign(window, {
  BuilderPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/github-hba-ui/ui_kits/hba-presence/BuilderPage.jsx", error: String((e && e.message) || e) }); }

// exports/github-hba-ui/ui_kits/hba-presence/PresenceBottom.jsx
try { (() => {
const {
  Button: QB,
  Badge: QBadge,
  Tag: QTag,
  Card: QCard,
  Tabs: QTabs,
  Eyebrow: QEyebrow
} = window.HoodleDesignSystem_ee4a2a;
function MarketMapSection({
  go
}) {
  const {
    m,
    viewAs
  } = useView();
  const {
    builders,
    nonMembers,
    extraMembers
  } = HBA_DATA;
  const eo = viewAs === 'eo';
  const [f, setF] = React.useState('all');
  const [invited, setInvited] = React.useState(new Set());
  const members = [...builders.map(b => ({
    ...b,
    sub: `${b.type} · ${b.city}`
  })), ...extraMembers.map(b => ({
    ...b,
    sub: b.city
  }))];
  const pts = [...(f !== 'non' ? members.map(b => ({
    kind: 'member',
    lat: b.lat,
    lng: b.lng,
    name: b.name,
    sub: 'Member · ' + b.sub,
    id: b.id
  })) : []), ...(f !== 'mem' ? nonMembers.map(b => ({
    kind: 'non',
    hl: eo,
    lat: b.lat,
    lng: b.lng,
    name: b.name,
    sub: 'Not yet a member · ' + b.city
  })) : [])];
  const total = members.length + nonMembers.length;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    id: "map",
    eyebrow: "Market map",
    title: eo ? 'Every builder in your territory, member or not' : 'Every new-home builder in the metro',
    sub: eo ? `Hoodle tracks ${total} active builders and developers across your 8 counties. ${nonMembers.length} aren't members yet.` : 'See who is building near you. Member builders carry the HBA badge on their Hoodle page.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.8fr) minmax(0,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QTag, {
    selected: f === 'all',
    onClick: () => setF('all')
  }, "All builders \xB7 ", total), /*#__PURE__*/React.createElement(QTag, {
    selected: f === 'mem',
    onClick: () => setF('mem')
  }, "Members \xB7 ", members.length), /*#__PURE__*/React.createElement(QTag, {
    selected: f === 'non',
    onClick: () => setF('non')
  }, "Not yet members \xB7 ", nonMembers.length)), /*#__PURE__*/React.createElement(LeafletMap, {
    points: pts,
    height: m ? 320 : 460,
    onPick: p => p.id && go('builder', {
      id: p.id
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--teal-500)',
      border: '2px solid #fff',
      boxShadow: '0 0 0 1px var(--ink-200)'
    }
  }), "HBA member"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#fff',
      border: `2px ${eo ? 'solid var(--gold-500)' : 'dashed var(--ink-500)'}`
    }
  }), "Not yet a member"))), /*#__PURE__*/React.createElement(QCard, {
    padding: 0,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      maxHeight: m ? 'none' : 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, eo ? 'Recruit: builders not yet members' : 'Member builders'), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto'
    }
  }, (eo ? nonMembers : builders).map(b => /*#__PURE__*/React.createElement("div", {
    key: b.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      flex: 'none',
      background: eo ? '#fff' : 'var(--teal-500)',
      border: eo ? '2px solid var(--gold-500)' : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, b.city, b.type ? ' · ' + b.type : '')), eo ? /*#__PURE__*/React.createElement(QB, {
    size: "sm",
    variant: invited.has(b.name) ? 'ghost' : 'secondary',
    disabled: invited.has(b.name),
    onClick: () => setInvited(s => new Set(s).add(b.name))
  }, invited.has(b.name) ? 'Invited' : 'Invite') : /*#__PURE__*/React.createElement(QB, {
    size: "sm",
    variant: "ghost",
    onClick: () => go('builder', {
      id: b.id
    })
  }, "View"))))))));
}
function Join() {
  const {
    m
  } = useView();
  const [track, setTrack] = React.useState('b');
  const lead = track === 'b' ? [['users-round', 'Buyer leads, not just meetings', 'Buyers find your homes on Hoodle and contact you directly. No ad spend.'], ['store', 'A full Hoodle storefront', 'Neighborhoods, floor plans, photos, video tours and reviews, set up for you.'], ['badge-check', 'A badge that travels', 'Your HBA membership shows on every Hoodle page buyers and REALTORS see.']] : [['megaphone', 'Reach every member builder', 'Put your products in front of the 118 builders and developers in the HBA.'], ['sparkles', 'Featured in Parade homes', 'Buyers save the products they see in Parade homes, and you see which ones.'], ['badge-check', 'A badge that travels', 'Your HBA membership shows on your Hoodle company page.']];
  const also = ['Advocacy on codes, fees and permits', 'Networking and councils', 'Education and NAHB member rebates'];
  return /*#__PURE__*/React.createElement("section", {
    id: "join",
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      padding: m ? '48px 0' : '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.6fr)',
      gap: m ? 28 : 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(QEyebrow, {
    align: "start",
    size: "sm",
    tone: "inverse"
  }, "Join the HBA"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `500 ${m ? 30 : 42}px/1.12 var(--font-sans)`,
      letterSpacing: '-0.02em'
    }
  }, "Membership that helps you sell more homes."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,.75)'
    }
  }, "Local, state and national membership in one. Hoodle is included for every member."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      background: 'rgba(255,255,255,.08)',
      padding: 4,
      borderRadius: 'var(--radius-md)',
      width: 'fit-content'
    }
  }, [['b', 'Builders & developers'], ['a', 'Associate members']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    type: "button",
    onClick: () => setTrack(v),
    style: {
      height: 34,
      padding: '0 14px',
      border: 0,
      borderRadius: 6,
      background: track === v ? '#fff' : 'transparent',
      color: track === v ? 'var(--ink-900)' : 'rgba(255,255,255,.8)',
      font: '500 13px var(--font-sans)',
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(QB, {
    size: "lg"
  }, "Apply to join"), /*#__PURE__*/React.createElement(QB, {
    size: "lg",
    variant: "ghost",
    style: {
      color: '#fff'
    }
  }, "Talk to membership"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, lead.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 18,
      padding: 22,
      borderRadius: 'var(--radius-lg)',
      background: 'rgba(255,255,255,.05)',
      border: '1px solid rgba(255,255,255,.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--teal-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 17px/1.3 var(--font-sans)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.55 var(--font-sans)',
      color: 'rgba(255,255,255,.72)',
      marginTop: 4
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: m ? 10 : 24,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--gold-300)'
    }
  }, "Plus"), also.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '400 13px var(--font-sans)',
      color: 'rgba(255,255,255,.8)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--teal-300)"
  }), a)))))));
}
function Advocacy() {
  const {
    m
  } = useView();
  const {
    advocacy
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '72px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,2fr)',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(QEyebrow, {
    align: "start",
    size: "sm"
  }, "Advocacy"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 24px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "The voice of Front Range builders"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: '500 14px var(--font-sans)'
    }
  }, "Read the advocacy report \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: 24
    }
  }, advocacy.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      borderTop: '2px solid var(--gold-500)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 36px/1 var(--font-sans)',
      color: 'var(--teal-600)',
      letterSpacing: '-0.02em'
    }
  }, a.stat), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-body)',
      marginTop: 10
    }
  }, a.label))))));
}
function EventsNews() {
  const {
    m
  } = useView();
  const {
    events,
    news
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    id: "events",
    eyebrow: "Events & news",
    title: "What's happening"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.5fr) minmax(0,1fr)',
      gap: m ? 32 : 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, events.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.title,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      flex: 'none',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px var(--font-sans)',
      letterSpacing: '.12em',
      color: 'var(--teal-600)'
    }
  }, e.date.split(' ')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 26px/1.1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, e.date.split(' ')[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.35 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, e.where)), !m && /*#__PURE__*/React.createElement(QBadge, {
    tone: "neutral"
  }, e.tag)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, news.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.title,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'block',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, n.date), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.4 var(--font-sans)',
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, n.title)))))));
}
function Sponsors() {
  const {
    m
  } = useView();
  const {
    sponsorTiers
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "sponsors",
    style: {
      background: 'var(--surface-sunken)',
      padding: m ? '48px 0' : '72px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(QEyebrow, {
    size: "sm"
  }, "Our partners"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 24px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Thank you to our sponsors")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, sponsorTiers.map((t, ti) => /*#__PURE__*/React.createElement("div", {
    key: t.tier,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, t.tier), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 12
    }
  }, t.names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: m ? 150 : [260, 200, 170][ti],
      height: [96, 76, 64][ti],
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: 10,
      boxSizing: 'border-box',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 ${[16, 14, 13][ti]}px/1.25 var(--font-sans)`,
      color: 'var(--ink-700)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px var(--font-sans)',
      color: 'var(--ink-400)'
    }
  }, "logo")))))))));
}
function ComingSoon() {
  const {
    m
  } = useView();
  const items = [['graduation-cap', 'Education & CE', 'Courses and continuing-education credits'], ['briefcase', 'Jobs board', 'Open roles with member companies'], ['trophy', 'Awards', 'Parade winners and annual awards']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '40px 0 56px' : '64px 0 88px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "Coming to this page"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: 14
    }
  }, items.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: 18,
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, d)))))));
}
function PresencePage(p) {
  const {
    viewAs
  } = useView();
  return /*#__PURE__*/React.createElement(React.Fragment, null, viewAs === 'eo' && /*#__PURE__*/React.createElement(EoBar, null), /*#__PURE__*/React.createElement(Hero, p), /*#__PURE__*/React.createElement(SubNav, {
    scrollToId: p.scrollToId
  }), /*#__PURE__*/React.createElement(Members, p), /*#__PURE__*/React.createElement(ParadeBand, p), /*#__PURE__*/React.createElement(KeepGoing, p), /*#__PURE__*/React.createElement(MarketMapSection, p), /*#__PURE__*/React.createElement(Join, null), /*#__PURE__*/React.createElement(Advocacy, null), /*#__PURE__*/React.createElement(EventsNews, null), /*#__PURE__*/React.createElement(Sponsors, null), /*#__PURE__*/React.createElement(ComingSoon, null));
}
Object.assign(window, {
  PresencePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/github-hba-ui/ui_kits/hba-presence/PresenceBottom.jsx", error: String((e && e.message) || e) }); }

// exports/github-hba-ui/ui_kits/hba-presence/PresenceTop.jsx
try { (() => {
const {
  Button: PB,
  Badge: PBadge,
  Tabs: PTabs,
  Tag: PTag,
  Input: PInput,
  Card: PCard,
  Eyebrow: PEyebrow,
  IconButton: PIconButton
} = window.HoodleDesignSystem_ee4a2a;
function EoBar() {
  const {
    m
  } = useView();
  const {
    eo
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: m ? '16px 20px' : '14px 32px',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: m ? 'column' : 'row',
      columnGap: 32,
      rowGap: 12,
      alignItems: m ? 'flex-start' : 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: m ? 'none' : '1 1 420px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.4 var(--font-sans)'
    }
  }, "Your page is built and live. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontWeight: 400
    }
  }, "Pre-filled from public data. Claim it to edit."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      columnGap: m ? 20 : 28,
      rowGap: 8,
      flex: m ? 'none' : '1 1 auto',
      flexWrap: 'wrap',
      order: m ? 0 : 3,
      width: m ? 'auto' : '100%'
    }
  }, [[eo.visits, 'buyer visits'], [eo.leads, 'leads sent to members'], [eo.registrations, 'Parade registrations'], [eo.nonMembers, 'builders not yet members']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--teal-200)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'rgba(255,255,255,.7)'
    }
  }, l)))), /*#__PURE__*/React.createElement(PB, {
    size: "sm",
    variant: "primary"
  }, "Claim this page")));
}
function Hero({
  go,
  scrollToId
}) {
  const {
    m
  } = useView();
  const {
    hba,
    HERO,
    parade
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '28px 0 40px' : '56px 0 72px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: m ? 28 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      border: '1px dashed var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 10px/1.2 var(--font-sans)',
      color: 'var(--ink-400)',
      textAlign: 'center',
      padding: 6,
      boxSizing: 'border-box'
    }
  }, "HBA logo"), /*#__PURE__*/React.createElement(PEyebrow, {
    align: "start",
    size: "sm",
    tone: "brand",
    rules: false
  }, "Official member directory")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: `500 ${m ? 36 : 54}px/1.08 var(--font-sans)`,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, hba.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: `400 ${m ? 17 : 19}px/1.6 var(--font-sans)`,
      color: 'var(--text-body)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, hba.value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    style: {
      marginTop: 2
    }
  }), hba.territory), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    onClick: () => scrollToId('members'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    })
  }, "Find a member builder"), /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    variant: "secondary",
    onClick: () => scrollToId('join')
  }, "Join the HBA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,auto)',
      gap: m ? 18 : 36,
      paddingTop: 22,
      borderTop: '1px solid var(--border-subtle)',
      justifyContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: hba.members,
    label: "member companies"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: hba.builders,
    label: "builders & developers"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: hba.counties,
    label: "metro counties"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: hba.since,
    label: "serving since"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: HERO,
    alt: "New homes under construction",
    style: {
      width: '100%',
      aspectRatio: m ? '4 / 3' : '5 / 6',
      borderRadius: 'var(--radius-xl)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go('showcase'),
    style: {
      position: 'absolute',
      left: m ? 12 : -28,
      bottom: m ? 12 : 32,
      right: m ? 12 : 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 14,
      paddingRight: 18,
      background: '#fff',
      border: 0,
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ticket",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, parade.name, " \xB7 ", parade.dates), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, parade.homes, " homes \xB7 tickets ", parade.price, " online")), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--teal-600)",
    style: {
      marginLeft: 6
    }
  })))));
}
function SubNav({
  scrollToId
}) {
  const {
    m
  } = useView();
  const items = [['members', 'Members'], ['parade', 'Parade of Homes'], ['map', 'Market map'], ['join', 'Join'], ['events', 'Events & news'], ['sponsors', 'Sponsors']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: m ? 60 : 72,
      zIndex: 15,
      background: 'rgba(255,255,255,.96)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'flex',
      gap: m ? 20 : 32,
      overflowX: 'auto',
      height: 48,
      alignItems: 'center'
    }
  }, items.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      scrollToId(id);
    },
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-700)',
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, l))));
}
function BuilderTile({
  b,
  onOpen,
  saved,
  onSave
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onOpen,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: h ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'box-shadow var(--duration-base) var(--ease-standard)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    alt: b.name,
    style: {
      width: '100%',
      aspectRatio: '16 / 10'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(PIconButton, {
    label: saved ? 'Saved' : 'Save builder',
    variant: "overlay",
    size: "sm",
    active: saved,
    onClick: onSave,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16,
      style: saved ? {
        fill: 'var(--teal-500)'
      } : null
    })
  })), b.elite && /*#__PURE__*/React.createElement(PBadge, {
    tone: "ink",
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, "Hoodle Elite")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, b.type, " \xB7 ", b.city), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, b.neighborhoods, " neighborhoods \xB7 ", b.homes, " homes \xB7 from ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, b.from)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(HbaBadge, {
    size: "sm"
  }))));
}
function Members({
  go,
  saved,
  toggleSave
}) {
  const {
    m
  } = useView();
  const {
    builders,
    associates,
    hba
  } = HBA_DATA;
  const [tab, setTab] = React.useState('b');
  const [f, setF] = React.useState('All');
  const [q, setQ] = React.useState('');
  const types = ['All', 'Production builder', 'Semi-custom', 'Custom builder', 'Townhomes & paired'];
  const list = builders.filter(b => (f === 'All' || b.type === f) && (!q || (b.name + b.city).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    id: "members",
    eyebrow: "Member directory",
    title: "Build with a member of the HBA",
    sub: "Every member builder has a full Hoodle page: their neighborhoods, available homes, floor plans and reviews. Look for the member badge."
  }), /*#__PURE__*/React.createElement(PTabs, {
    tabs: [{
      value: 'b',
      label: 'Builders & developers',
      count: hba.builders
    }, {
      value: 'a',
      label: 'Associate members',
      count: hba.associates
    }],
    value: tab,
    onChange: setTab
  }), tab === 'b' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 12,
      alignItems: m ? 'stretch' : 'center',
      margin: '20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(PInput, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    placeholder: "Search builders or cities",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: m ? '100%' : 280
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 2
    }
  }, types.map(t => /*#__PURE__*/React.createElement(PTag, {
    key: t,
    selected: f === t,
    onClick: () => setF(t)
  }, t === 'All' ? 'All types' : t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(4,minmax(0,1fr))',
      gap: 20
    }
  }, list.map(b => /*#__PURE__*/React.createElement(BuilderTile, {
    key: b.id,
    b: b,
    saved: saved.builders.has(b.id),
    onSave: () => toggleSave('builders', b.id),
    onOpen: () => go('builder', {
      id: b.id
    })
  }))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)',
      font: '400 14px var(--font-sans)'
    }
  }, "No member builders match that search."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "See all ", hba.builders, " member builders"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      margin: '20px 0 24px',
      maxWidth: 640
    }
  }, "Product and service companies that supply the Front Range's builders. Full company pages are coming to Hoodle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,minmax(0,1fr))',
      gap: 14
    }
  }, associates.map(a => /*#__PURE__*/React.createElement(PCard, {
    key: a.name,
    padding: 16,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'var(--ink-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building-2",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, a.cat)))))));
}
function ParadeBand({
  go,
  requireUser
}) {
  const {
    m
  } = useView();
  const {
    parade,
    homes
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "parade",
    style: {
      background: 'var(--teal-500)',
      color: '#fff',
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: m ? 32 : 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    align: "start",
    size: "sm",
    tone: "inverse"
  }, "HBA of Metro Denver presents"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `500 ${m ? 34 : 48}px/1.08 var(--font-sans)`,
      letterSpacing: '-0.02em'
    }
  }, "Parade of Homes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,.88)',
      maxWidth: 460
    }
  }, parade.homes, " new homes from ", parade.builders, " member builders, open across the metro for ", parade.days, " days. Plan your route, save your favorites and pick up where you left off after the Parade ends."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,auto)',
      gap: m ? 18 : 36,
      justifyContent: 'start',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    inverse: true,
    value: parade.dates,
    label: "dates"
  }), /*#__PURE__*/React.createElement(Stat, {
    inverse: true,
    value: "12\u20135",
    label: "Thu\u2013Sun"
  }), /*#__PURE__*/React.createElement(Stat, {
    inverse: true,
    value: parade.price,
    label: "online tickets"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    variant: "ink",
    onClick: () => go('showcase'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Explore the Parade"), /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    variant: "secondary",
    onClick: () => requireUser(() => go('account')),
    style: {
      borderColor: '#fff'
    }
  }, "Register free"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 12,
      height: m ? 280 : 420
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: homes[0].img,
    style: {
      gridRow: '1 / 3',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement(Img, {
    src: homes[2].img,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement(Img, {
    src: homes[4].img,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  }))));
}
function KeepGoing({
  requireUser,
  go
}) {
  const {
    m
  } = useView();
  const steps = [['heart', 'Save homes & builders', 'Keep a shortlist across every Parade home and neighborhood.'], ['notebook-pen', 'Rate & take notes', 'Mark the homes you loved most and least, with private notes.'], ['message-circle', 'Stay in touch with the builder', 'Your conversation with the builder carries on after the event.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: m ? '40px 0' : '56px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.9fr) minmax(0,2fr)',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 24px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Don't lose the homes you love."), /*#__PURE__*/React.createElement(PB, {
    onClick: () => requireUser(() => go('account')),
    style: {
      width: 'fit-content'
    }
  }, "Create a free Hoodle account")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: 20
    }
  }, steps.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: '#fff',
      color: 'var(--teal-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d)))))));
}
Object.assign(window, {
  EoBar,
  Hero,
  SubNav,
  BuilderTile,
  Members,
  ParadeBand,
  KeepGoing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/github-hba-ui/ui_kits/hba-presence/PresenceTop.jsx", error: String((e && e.message) || e) }); }

// exports/github-hba-ui/ui_kits/hba-presence/Shell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Eyebrow,
  Tooltip
} = window.HoodleDesignSystem_ee4a2a;
const ViewCtx = React.createContext({
  m: false,
  viewAs: 'buyer'
});
const useView = () => React.useContext(ViewCtx);
function toPascal(n) {
  return n.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
}
function Icon({
  name,
  size = 18,
  stroke = 1.75,
  color,
  style
}) {
  const node = window.lucide && window.lucide.icons[toPascal(name)];
  if (!node) return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      display: 'inline-block'
    }
  });
  const kids = node[0] === 'svg' ? node[2] : node;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    }
  }, kids.map(([t, a], i) => React.createElement(t, {
    key: i,
    ...a
  })));
}
function Img({
  src,
  alt = '',
  style,
  label = 'Photo'
}) {
  const [err, setErr] = React.useState(false);
  if (!src || err) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-400)',
      font: '400 12px var(--font-sans)',
      ...style
    }
  }, label);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErr(true),
    style: {
      objectFit: 'cover',
      display: 'block',
      ...style
    }
  });
}
function Wrap({
  children,
  style,
  pad = true
}) {
  const {
    m
  } = useView();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: pad ? m ? '0 20px' : '0 32px' : 0,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  sub,
  action,
  id
}) {
  const {
    m
  } = useView();
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      alignItems: m ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 640
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    align: "start",
    size: "sm"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `500 ${m ? 26 : 34}px/1.2 var(--font-sans)`,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      textWrap: 'pretty'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, sub)), action);
}
function HbaBadge({
  onClick,
  size = 'md',
  inverse
}) {
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    title: "Verified member of the HBA of Metro Denver",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: sm ? 28 : 34,
      padding: sm ? '0 10px 0 8px' : '0 14px 0 10px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${inverse ? 'rgba(255,255,255,.5)' : 'var(--gold-500)'}`,
      background: inverse ? 'rgba(255,255,255,.1)' : 'var(--gold-50)',
      color: inverse ? '#fff' : 'var(--ink-900)',
      font: `500 ${sm ? 12 : 13}px/1 var(--font-sans)`,
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: sm ? 15 : 17,
    color: inverse ? '#fff' : 'var(--gold-700)'
  }), "HBA of Metro Denver ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'rgba(255,255,255,.75)' : 'var(--gold-700)',
      fontWeight: 400
    }
  }, "\xB7 Member"));
}
function TopNav({
  onHome,
  onAccount,
  user
}) {
  const {
    m
  } = useView();
  const links = ['Neighborhoods', 'Builders', 'Agents', 'Mortgage'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      height: m ? 60 : 72,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onHome,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    },
    "aria-label": "Hoodle home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hoodle-logo-tm-teal.png",
    alt: "hoodle",
    style: {
      height: m ? 26 : 32,
      display: 'block'
    }
  })), !m && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-800)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), m ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: user ? 'My Hoodle' : 'Sign in',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user-round"
    }),
    onClick: onAccount,
    active: !!user
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "menu"
    })
  })) : user ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAccount,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: 0,
      background: 'none',
      cursor: 'pointer',
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 13px var(--font-sans)'
    }
  }, user.first[0]), "My Hoodle") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onAccount
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    onClick: onAccount
  }, "Sign up \u2014 free"))));
}
function Footer() {
  const {
    m
  } = useView();
  const cols = [['Explore', ['Neighborhoods', 'Builders', 'Agents', 'Lenders']], ['Partners', ['For builders', 'For REALTORS', 'For HBAs', 'For vendors']], ['Company', ['About Hoodle', 'Blog', 'Privacy', 'Terms']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'rgba(255,255,255,.72)',
      padding: m ? '40px 0 28px' : '56px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: m ? '1 / -1' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hoodle-logo-tm-white.png",
    alt: "hoodle",
    style: {
      height: 30,
      width: 'fit-content'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.6 var(--font-sans)',
      maxWidth: 300
    }
  }, "The new-home marketplace. Builders, neighborhoods and new-build listings, all in one place.")), cols.map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: '#fff'
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: '400 14px var(--font-sans)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,.12)',
      font: '400 12px var(--font-sans)'
    }
  }, "\xA9 2026 Hoodle, Inc. Sample data for demonstration.")));
}
function LeafletMap({
  points,
  height = 420,
  center = [39.72, -104.93],
  zoom = 9,
  onPick
}) {
  const ref = React.useRef(null),
    mapRef = React.useRef(null),
    layerRef = React.useRef(null);
  React.useEffect(() => {
    if (!window.L || mapRef.current) return;
    const map = L.map(ref.current, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    }).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);
    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(ref.current);
    return () => {
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);
  React.useEffect(() => {
    const g = layerRef.current;
    if (!g) return;
    g.clearLayers();
    points.forEach(p => {
      let mk;
      if (p.kind === 'home') {
        mk = L.marker([p.lat, p.lng], {
          icon: L.divIcon({
            className: '',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            html: `<div style="width:30px;height:30px;border-radius:50%;background:#009788;color:#fff;border:2px solid #fff;box-shadow:0 2px 6px rgba(16,24,40,.3);display:flex;align-items:center;justify-content:center;font:600 12px Poppins,sans-serif">${p.no}</div>`
          })
        });
      } else if (p.kind === 'member') {
        mk = L.circleMarker([p.lat, p.lng], {
          radius: p.hl ? 9 : 7,
          color: '#fff',
          weight: 2,
          fillColor: '#009788',
          fillOpacity: 1
        });
      } else {
        mk = L.circleMarker([p.lat, p.lng], {
          radius: p.hl ? 9 : 7,
          color: p.hl ? '#CEA565' : '#6B7684',
          weight: p.hl ? 3 : 2,
          fillColor: '#fff',
          fillOpacity: 1,
          dashArray: p.hl ? null : '2 2'
        });
      }
      mk.bindTooltip(`<b style="font-weight:600">${p.name}</b><br>${p.sub || ''}`, {
        direction: 'top',
        offset: [0, -8]
      });
      if (onPick) mk.on('click', () => onPick(p));
      mk.addTo(g);
    });
  }, [points]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      height,
      width: '100%',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      background: 'var(--ink-100)',
      position: 'relative',
      zIndex: 0
    }
  });
}
function Stat({
  value,
  label,
  inverse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 28px/1.1 var(--font-sans)',
      color: inverse ? '#fff' : 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: inverse ? 'rgba(255,255,255,.78)' : 'var(--text-muted)'
    }
  }, label));
}
function Crumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      padding: '16px 0'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), it.onClick ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      it.onClick();
    },
    style: {
      color: 'var(--text-link)'
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, it.label))));
}
Object.assign(window, {
  ViewCtx,
  useView,
  Icon,
  Img,
  Wrap,
  SectionHead,
  HbaBadge,
  TopNav,
  Footer,
  LeafletMap,
  Stat,
  Crumbs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/github-hba-ui/ui_kits/hba-presence/Shell.jsx", error: String((e && e.message) || e) }); }

// exports/github-hba-ui/ui_kits/hba-presence/ShowcasePage.jsx
try { (() => {
const {
  Button: SB,
  Badge: SBadge,
  Tag: STag,
  Card: SCard,
  ListingCard: SListing,
  Dialog: SDialog,
  Select: SSelect,
  Input: SInput,
  Eyebrow: SEyebrow
} = window.HoodleDesignSystem_ee4a2a;
function ShowcasePage({
  go,
  saved,
  toggleSave,
  openHome,
  requireUser,
  user,
  notify
}) {
  const {
    m
  } = useView();
  const {
    parade,
    homes,
    builders,
    sponsorTiers,
    hba
  } = HBA_DATA;
  const [area, setArea] = React.useState('All areas');
  const [tix, setTix] = React.useState(false);
  const areas = ['All areas', 'North', 'South', 'East', 'West'];
  const areaOf = h => h.lat > 39.85 ? 'North' : h.lat < 39.6 ? 'South' : h.lng > -104.9 ? 'East' : 'West';
  const list = homes.filter(h => area === 'All areas' || areaOf(h) === area);
  const bname = id => (builders.find(b => b.id === id) || {}).name;
  const participating = builders.filter(b => homes.some(h => h.builder === b.id));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-500)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0 0',
      font: '400 13px var(--font-sans)',
      color: 'rgba(255,255,255,.8)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('hba');
    },
    style: {
      color: '#fff'
    }
  }, hba.name), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Parade of Homes"))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: m ? 24 : 48,
      padding: m ? '24px 20px 40px' : '40px 32px 64px',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SEyebrow, {
    align: "start",
    size: "sm",
    tone: "inverse"
  }, hba.name, " presents"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: `500 ${m ? 40 : 64}px/1.02 var(--font-sans)`,
      letterSpacing: '-0.025em'
    }
  }, "Parade of Homes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,.9)',
      maxWidth: 520
    }
  }, parade.homes, " new homes. ", parade.builders, " member builders. ", parade.days, " days across the metro. Register free to plan your route, rate every home you tour and keep your favorites after the Parade."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(SB, {
    size: "lg",
    variant: "ink",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 18
    }),
    onClick: () => setTix(true)
  }, "Get tickets \xB7 ", parade.price), /*#__PURE__*/React.createElement(SB, {
    size: "lg",
    variant: "secondary",
    style: {
      borderColor: '#fff'
    },
    onClick: () => requireUser(() => notify('You\'re registered. Start saving homes.'))
  }, user ? 'You\'re registered' : 'Register free'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'rgba(255,255,255,.2)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, [['calendar-days', 'Dates', parade.dates], ['clock', 'Hours', parade.hours], ['ticket', 'Tickets', parade.price + ' online, all homes'], ['map-pinned', 'Homes', parade.homes + ' across 8 counties']].map(([i, l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'var(--teal-600)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--teal-100)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'rgba(255,255,255,.75)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.35 var(--font-sans)'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gold-50)',
      borderBottom: '1px solid var(--gold-100)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      alignItems: m ? 'flex-start' : 'center',
      gap: 12,
      padding: m ? '14px 20px' : '14px 32px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 14px/1.4 var(--font-sans)',
      color: 'var(--gold-900)'
    }
  }, parade.giveaway, ". Registered visitors are entered every day they check in."), /*#__PURE__*/React.createElement(SB, {
    size: "sm",
    variant: "ink",
    onClick: () => requireUser(() => notify('You\'re entered in today\'s giveaway.'))
  }, user ? 'Entered today' : 'Enter the giveaway'))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '40px 0' : '64px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Parade map",
    title: "Plan your route",
    sub: "Tap a number to see the home, the builder and the products inside."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, areas.map(a => /*#__PURE__*/React.createElement(STag, {
    key: a,
    selected: area === a,
    onClick: () => setArea(a)
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.6fr) minmax(0,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LeafletMap, {
    points: list.map(h => ({
      kind: 'home',
      no: h.no,
      lat: h.lat,
      lng: h.lng,
      name: `#${h.no} ${h.name}`,
      sub: `${bname(h.builder)} · ${h.city}`,
      id: h.id
    })),
    height: m ? 300 : 440,
    center: [39.7, -104.95],
    zoom: 9,
    onPick: p => openHome(p.id)
  }), /*#__PURE__*/React.createElement(SCard, {
    padding: 0,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: m ? 'none' : 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto'
    }
  }, list.map(h => /*#__PURE__*/React.createElement("button", {
    key: h.id,
    type: "button",
    onClick: () => openHome(h.id),
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      width: '100%',
      padding: '12px 16px',
      border: 0,
      borderBottom: '1px solid var(--border-subtle)',
      background: '#fff',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 12px var(--font-sans)'
    }
  }, h.no), /*#__PURE__*/React.createElement(Img, {
    src: h.img,
    style: {
      width: 56,
      height: 42,
      borderRadius: 6,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, bname(h.builder), " \xB7 ", h.city)), saved.homes.has(h.id) && /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 16,
    color: "var(--teal-500)",
    style: {
      fill: 'var(--teal-500)'
    }
  })))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '0 0 40px' : '0 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Parade homes",
    title: "Tour the homes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, list.map(h => /*#__PURE__*/React.createElement(SListing, {
    key: h.id,
    image: h.img,
    status: '#' + h.no + ' · ' + h.status,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    sqft: h.sqft,
    name: h.name,
    community: h.hood,
    location: bname(h.builder),
    saved: saved.homes.has(h.id),
    onSave: () => toggleSave('homes', h.id),
    onClick: () => openHome(h.id)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: m ? '40px 0' : '64px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Participating builders",
    title: `${parade.builders} member builders`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 14
    }
  }, participating.map(b => /*#__PURE__*/React.createElement(SCard, {
    key: b.id,
    interactive: true,
    padding: 16,
    onClick: () => go('builder', {
      id: b.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, homes.filter(h => h.builder === b.id).length, " Parade home \xB7 ", b.city)), /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 18,
    color: "var(--gold-700)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Parade sponsors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, sponsorTiers.flatMap(t => t.names).map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 52,
      padding: '0 18px',
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      font: '600 13px var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Questions? ", parade.contact)))), /*#__PURE__*/React.createElement(SDialog, {
    open: tix,
    title: "Parade of Homes tickets",
    onClose: () => setTix(false),
    width: 440,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SB, {
      variant: "ghost",
      onClick: () => setTix(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(SB, {
      onClick: () => {
        setTix(false);
        notify('Tickets sent to your email. See you at the Parade.');
      }
    }, "Buy tickets"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "One ticket covers every home, every open day. Sold by ", hba.name, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SSelect, {
    label: "Adult tickets \xB7 $12",
    options: ['1', '2', '3', '4'],
    defaultValue: "2"
  }), /*#__PURE__*/React.createElement(SSelect, {
    label: "Kids under 12",
    options: ['Free', '1', '2', '3'],
    defaultValue: "Free"
  })), /*#__PURE__*/React.createElement(SInput, {
    label: "Email for tickets",
    placeholder: "you@example.com",
    defaultValue: user ? user.email : ''
  }))));
}
Object.assign(window, {
  ShowcasePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/github-hba-ui/ui_kits/hba-presence/ShowcasePage.jsx", error: String((e && e.message) || e) }); }

// exports/github-hba-ui/ui_kits/hba-presence/data.js
try { (() => {
(() => {
  const U = id => `https://images.unsplash.com/photo-${id}?w=900&q=70&auto=format&fit=crop`;
  const P = ['1568605114967-8130f3a36994', '1570129477492-45c003edd2be', '1564013799919-ab600027ffc6', '1512917774080-9991f1c4c750', '1600596542815-ffad4c1539a9', '1600585154340-be6161a56a0c', '1580587771525-78b9dba3b914', '1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c', '1600566753190-17f0baa2a6c3', '1583608205776-bfd35f0d9f83', '1605276374104-dee2a0ed3cd6'].map(U);
  const INT = ['1600210492486-724fe5c67fb0', '1600566752355-35792bedcfea', '1556911220-bff31c812dba', '1484154218962-a197022b5858'].map(U);
  const HERO = U('1600585154340-be6161a56a0c').replace('w=900', 'w=1600');
  const hba = {
    name: 'HBA of Metro Denver',
    short: 'Metro Denver HBA',
    territory: 'Adams, Arapahoe, Boulder, Broomfield, Denver, Douglas, Elbert & Jefferson counties',
    counties: 8,
    members: 642,
    builders: 118,
    associates: 524,
    since: 1946,
    value: 'The builders, developers and trade partners who build the Front Range, in one place buyers can actually find.',
    site: 'hbadenver.com'
  };
  const builders = [{
    id: 'frontrange',
    name: 'Front Range Homes',
    type: 'Production builder',
    city: 'Aurora',
    neighborhoods: 4,
    homes: 37,
    from: '$489k',
    img: P[0],
    lat: 39.705,
    lng: -104.735,
    member: true,
    years: 22,
    elite: true
  }, {
    id: 'aspen',
    name: 'Aspen Ridge Homebuilders',
    type: 'Semi-custom',
    city: 'Castle Rock',
    neighborhoods: 2,
    homes: 14,
    from: '$629k',
    img: P[1],
    lat: 39.372,
    lng: -104.856,
    member: true,
    years: 15
  }, {
    id: 'timberline',
    name: 'Timberline Builders Co.',
    type: 'Custom builder',
    city: 'Golden',
    neighborhoods: 1,
    homes: 6,
    from: '$1.2M',
    img: P[7],
    lat: 39.755,
    lng: -105.221,
    member: true,
    years: 31,
    elite: true
  }, {
    id: 'platte',
    name: 'Platte River Homes',
    type: 'Production builder',
    city: 'Brighton',
    neighborhoods: 3,
    homes: 28,
    from: '$452k',
    img: P[2],
    lat: 39.985,
    lng: -104.820,
    member: true,
    years: 9
  }, {
    id: 'highline',
    name: 'Highline Homes',
    type: 'Townhomes & paired',
    city: 'Thornton',
    neighborhoods: 2,
    homes: 19,
    from: '$415k',
    img: P[5],
    lat: 39.905,
    lng: -104.955,
    member: true,
    years: 12
  }, {
    id: 'summit',
    name: 'Summit Crest Homes',
    type: 'Semi-custom',
    city: 'Parker',
    neighborhoods: 2,
    homes: 11,
    from: '$715k',
    img: P[4],
    lat: 39.518,
    lng: -104.762,
    member: true,
    years: 18
  }, {
    id: 'evergreen',
    name: 'Evergreen Craft Builders',
    type: 'Custom builder',
    city: 'Arvada',
    neighborhoods: 1,
    homes: 4,
    from: '$985k',
    img: P[3],
    lat: 39.832,
    lng: -105.150,
    member: true,
    years: 26
  }, {
    id: 'meadowlark',
    name: 'Meadowlark Homes',
    type: 'Production builder',
    city: 'Erie',
    neighborhoods: 2,
    homes: 22,
    from: '$559k',
    img: P[6],
    lat: 40.050,
    lng: -105.050,
    member: true,
    years: 7
  }];
  const nonMembers = [{
    name: 'Cobalt Peak Builders',
    city: 'Commerce City',
    lat: 39.845,
    lng: -104.860
  }, {
    name: 'Larkspur Custom Homes',
    city: 'Larkspur',
    lat: 39.228,
    lng: -104.887
  }, {
    name: 'Bear Creek Homeworks',
    city: 'Lakewood',
    lat: 39.690,
    lng: -105.110
  }, {
    name: 'Northfield Residential',
    city: 'Broomfield',
    lat: 39.935,
    lng: -105.070
  }, {
    name: 'Sandstone Homes',
    city: 'Littleton',
    lat: 39.600,
    lng: -105.020
  }, {
    name: 'Two Rivers Building Co.',
    city: 'Westminster',
    lat: 39.870,
    lng: -105.060
  }, {
    name: 'Prairie Sky Homes',
    city: 'Bennett',
    lat: 39.759,
    lng: -104.427
  }, {
    name: 'Elbert Timber Frame',
    city: 'Elizabeth',
    lat: 39.360,
    lng: -104.600
  }];
  const extraMembers = [{
    name: 'Cherry Creek Custom',
    city: 'Centennial',
    lat: 39.580,
    lng: -104.880
  }, {
    name: 'Red Rocks Renovation & Build',
    city: 'Morrison',
    lat: 39.653,
    lng: -105.191
  }, {
    name: 'Horizon Peak Homes',
    city: 'Highlands Ranch',
    lat: 39.540,
    lng: -104.970
  }, {
    name: 'Longs View Builders',
    city: 'Longmont',
    lat: 40.167,
    lng: -105.101
  }, {
    name: 'Cottonwood Homes',
    city: 'Englewood',
    lat: 39.648,
    lng: -104.988
  }, {
    name: 'Ironwood Builders',
    city: 'Castle Pines',
    lat: 39.472,
    lng: -104.896
  }];
  const associates = [{
    name: 'Peak Windows & Doors',
    cat: 'Windows & doors'
  }, {
    name: 'Mile High Lighting',
    cat: 'Lighting'
  }, {
    name: 'Rocky Mountain Flooring',
    cat: 'Flooring'
  }, {
    name: 'Alpine Title Co.',
    cat: 'Title & escrow'
  }, {
    name: 'Colorado Home Lending',
    cat: 'Mortgage'
  }, {
    name: 'Foothills Cabinetry',
    cat: 'Cabinets'
  }, {
    name: 'Front Range Solar',
    cat: 'Energy'
  }, {
    name: 'Cascade Plumbing Supply',
    cat: 'Plumbing'
  }];
  const neighborhoods = {
    frontrange: [{
      name: 'Cedar Ridge',
      city: 'Aurora',
      from: '$489k',
      plans: 6,
      img: P[0]
    }, {
      name: 'Harvest Trails',
      city: 'Aurora',
      from: '$512k',
      plans: 5,
      img: P[9]
    }, {
      name: 'Sky Ranch West',
      city: 'Watkins',
      from: '$469k',
      plans: 4,
      img: P[10]
    }, {
      name: 'Prairie Point',
      city: 'Aurora',
      from: '$535k',
      plans: 5,
      img: P[11]
    }]
  };
  const homes = [{
    id: 'h1',
    no: 12,
    name: 'The Willow',
    builder: 'frontrange',
    hood: 'Cedar Ridge',
    city: 'Aurora',
    price: '$524,900',
    beds: 4,
    baths: 2.5,
    sqft: 2480,
    img: P[0],
    lat: 39.712,
    lng: -104.742,
    status: 'Parade model'
  }, {
    id: 'h2',
    no: 18,
    name: 'The Summit',
    builder: 'aspen',
    hood: 'Crystal Valley',
    city: 'Castle Rock',
    price: '$689,000',
    beds: 4,
    baths: 3.5,
    sqft: 3120,
    img: P[1],
    lat: 39.365,
    lng: -104.842,
    status: 'Parade model'
  }, {
    id: 'h3',
    no: 7,
    name: 'Clear Creek Residence',
    builder: 'timberline',
    hood: 'Mesa Top',
    city: 'Golden',
    price: '$1,395,000',
    beds: 5,
    baths: 4.5,
    sqft: 4610,
    img: P[7],
    lat: 39.740,
    lng: -105.205,
    status: 'Parade model'
  }, {
    id: 'h4',
    no: 22,
    name: 'The Juniper',
    builder: 'platte',
    hood: 'River Bend',
    city: 'Brighton',
    price: '$468,500',
    beds: 3,
    baths: 2.5,
    sqft: 2090,
    img: P[2],
    lat: 39.990,
    lng: -104.805,
    status: 'Move-in ready'
  }, {
    id: 'h5',
    no: 4,
    name: 'The Aurora II',
    builder: 'summit',
    hood: 'Stonegate',
    city: 'Parker',
    price: '$749,900',
    beds: 5,
    baths: 3.5,
    sqft: 3480,
    img: P[4],
    lat: 39.525,
    lng: -104.775,
    status: 'Parade model'
  }, {
    id: 'h6',
    no: 15,
    name: 'The Larimer',
    builder: 'highline',
    hood: 'North Park',
    city: 'Thornton',
    price: '$429,000',
    beds: 3,
    baths: 2.5,
    sqft: 1780,
    img: P[5],
    lat: 39.912,
    lng: -104.940,
    status: 'Parade model'
  }];
  const products = [{
    id: 'p1',
    name: 'Quartz waterfall island',
    by: 'Foothills Cabinetry'
  }, {
    id: 'p2',
    name: 'Tankless water heater',
    by: 'Cascade Plumbing Supply'
  }, {
    id: 'p3',
    name: 'Wide-plank white oak floors',
    by: 'Rocky Mountain Flooring'
  }, {
    id: 'p4',
    name: 'Black-frame picture windows',
    by: 'Peak Windows & Doors'
  }, {
    id: 'p5',
    name: 'Dedicated movie room',
    by: 'Mile High Lighting'
  }, {
    id: 'p6',
    name: 'Rooftop solar + battery',
    by: 'Front Range Solar'
  }];
  const parade = {
    name: 'Parade of Homes',
    dates: 'Aug 6–23',
    hours: 'Thu–Sun · 12–5 PM',
    price: '$12',
    homes: 42,
    builders: 28,
    days: 18,
    giveaway: 'Daily giveaway: a $500 lighting package from Mile High Lighting',
    contact: 'parade@hbadenver.com'
  };
  const events = [{
    date: 'OCT 16',
    title: 'Builder & REALTOR mixer',
    where: 'Denver Design District',
    tag: 'Networking'
  }, {
    date: 'NOV 04',
    title: 'Housing affordability forum',
    where: 'History Colorado Center',
    tag: 'Advocacy'
  }, {
    date: 'DEC 09',
    title: 'Annual installation gala',
    where: 'The Brown Palace',
    tag: 'Members'
  }];
  const news = [{
    date: 'Sep 22',
    title: 'Metro permits up 6% year over year'
  }, {
    date: 'Sep 10',
    title: 'Parade of Homes results: 42 homes, 18 days'
  }, {
    date: 'Aug 28',
    title: 'New energy code: what builders need to know'
  }];
  const advocacy = [{
    stat: '$20',
    label: 'returned for every $1 of dues, through code and fee work (HBA claim format)'
  }, {
    stat: '14',
    label: 'local ordinances reviewed with builder input this year'
  }, {
    stat: '3',
    label: 'impact-fee increases delayed or reduced'
  }];
  const sponsorTiers = [{
    tier: 'Presenting',
    names: ['Colorado Home Lending']
  }, {
    tier: 'Gold',
    names: ['Peak Windows & Doors', 'Mile High Lighting', 'Front Range Solar']
  }, {
    tier: 'Silver',
    names: ['Rocky Mountain Flooring', 'Alpine Title Co.', 'Foothills Cabinetry', 'Cascade Plumbing Supply']
  }];
  const eo = {
    visits: '18.4k',
    leads: '1,236',
    registrations: '6,812',
    nonMembers: nonMembers.length
  };
  window.HBA_DATA = {
    hba,
    builders,
    nonMembers,
    extraMembers,
    associates,
    neighborhoods,
    homes,
    products,
    parade,
    events,
    news,
    advocacy,
    sponsorTiers,
    eo,
    HERO,
    INT,
    P
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "exports/github-hba-ui/ui_kits/hba-presence/data.js", error: String((e && e.message) || e) }); }

// ui_kits/hba-presence/Account.jsx
try { (() => {
const {
  Button: AB,
  Badge: ABadge,
  Tabs: ATabs,
  Card: ACard,
  Dialog: ADialog,
  Input: AInput,
  Select: ASelect,
  Checkbox: ACheck,
  ListingCard: AListing,
  IconButton: AIconButton
} = window.HoodleDesignSystem_ee4a2a;
const RATES = [['loved', 'Loved it', 'heart'], ['ok', 'It\'s OK', 'meh'], ['no', 'Not for me', 'thumbs-down']];
function ModelHomeSheet({
  id,
  onClose,
  go,
  saved,
  toggleSave,
  ratings,
  setRating,
  notes,
  setNote,
  requireUser,
  notify
}) {
  const {
    m
  } = useView();
  const {
    homes,
    builders,
    products,
    INT
  } = HBA_DATA;
  const [gal, setGal] = React.useState(0);
  const h = homes.find(x => x.id === id);
  if (!h) return null;
  const b = builders.find(x => x.id === h.builder);
  const prods = products.slice(0, 4 + h.no % 3);
  const imgs = [h.img, ...INT.slice(0, 3)];
  const rate = ratings[h.id];
  const note = notes[h.id] || '';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--scrim)',
      zIndex: 60,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: m ? '100%' : 520,
      height: '100%',
      background: '#fff',
      overflowY: 'auto',
      boxShadow: 'var(--shadow-overlay)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: imgs[gal],
    style: {
      width: '100%',
      aspectRatio: '4 / 3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      right: 12,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(ABadge, {
    tone: "solid",
    style: {
      height: 28,
      padding: '0 10px',
      fontSize: 13
    }
  }, "Parade home #", h.no), /*#__PURE__*/React.createElement(AIconButton, {
    label: "Close",
    variant: "overlay",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    }),
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      display: 'flex',
      gap: 6
    }
  }, imgs.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => setGal(i),
    style: {
      width: 48,
      height: 36,
      padding: 0,
      border: i === gal ? '2px solid #fff' : '2px solid transparent',
      borderRadius: 6,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'none',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: s,
    style: {
      width: '100%',
      height: '100%'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '500 26px/1.2 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.name), /*#__PURE__*/React.createElement(AB, {
    size: "sm",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 15,
      style: saved.homes.has(h.id) ? {
        fill: 'var(--teal-500)'
      } : null
    }),
    onClick: () => toggleSave('homes', h.id)
  }, saved.homes.has(h.id) ? 'Saved' : 'Save')), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.price), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, h.beds, " bd  \xB7  ", h.baths, " ba  \xB7  ", h.sqft.toLocaleString(), " sq ft"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, h.hood, ", ", h.city, " \xB7 Open Thu\u2013Sun 12\u20135")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      onClose();
      go('builder', {
        id: b.id
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: '#fff',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    style: {
      width: 44,
      height: 44,
      borderRadius: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Built by ", b.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      font: '400 12px var(--font-sans)',
      color: 'var(--gold-700)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 13
  }), "HBA of Metro Denver member")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-400)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "How did you like it?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, RATES.map(([v, l, i]) => {
    const on = rate === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => requireUser(() => {
        setRating(h.id, on ? null : v);
      }),
      style: {
        height: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${on ? 'var(--teal-500)' : 'var(--border-default)'}`,
        background: on ? 'var(--teal-50)' : '#fff',
        color: on ? 'var(--teal-700)' : 'var(--ink-700)',
        font: '500 13px var(--font-sans)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 18
    }), l);
  })), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Private notes: what you'd change, rooms you loved\u2026",
    value: note,
    onFocus: () => requireUser(() => {}),
    onChange: e => setNote(h.id, e.target.value),
    rows: 3,
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  }), "Only you can see ratings and notes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, "Products in this home"), prods.map(p => {
    const on = saved.products.has(p.id);
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 14px var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 12px var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, p.by, " \xB7 Parade sponsor")), /*#__PURE__*/React.createElement(AB, {
      size: "sm",
      variant: on ? 'secondary' : 'ghost',
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: on ? 'check' : 'plus',
        size: 15
      }),
      onClick: () => toggleSave('products', p.id)
    }, on ? 'Saved' : 'Want this'));
  })), /*#__PURE__*/React.createElement(AB, {
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    }),
    onClick: () => requireUser(() => notify(b.name + ' will follow up about ' + h.name + '.'))
  }, "Ask ", b.name, " about this home"))));
}
function RegisterDialog({
  open,
  onClose,
  onDone
}) {
  const [first, setFirst] = React.useState('Alex');
  const [email, setEmail] = React.useState('alex@example.com');
  return /*#__PURE__*/React.createElement(ADialog, {
    open: open,
    title: "Create your free Hoodle account",
    onClose: onClose,
    width: 460,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AB, {
      variant: "ghost",
      onClick: onClose
    }, "Not now"), /*#__PURE__*/React.createElement(AB, {
      onClick: () => onDone({
        first,
        email
      })
    }, "Create account"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Save Parade homes, rate what you tour and keep talking with builders after the event."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AInput, {
    label: "First name",
    value: first,
    onChange: e => setFirst(e.target.value)
  }), /*#__PURE__*/React.createElement(AInput, {
    label: "ZIP code",
    defaultValue: "80016"
  })), /*#__PURE__*/React.createElement(AInput, {
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(ASelect, {
    label: "When are you planning to buy?",
    options: ['In the next 3 months', '3–6 months', '6–12 months', 'Just looking'],
    defaultValue: "3\u20136 months"
  }), /*#__PURE__*/React.createElement(ACheck, {
    label: "Enter me in the daily Parade giveaway",
    defaultChecked: true
  })));
}
function AccountPage({
  user,
  go,
  saved,
  toggleSave,
  ratings,
  notes,
  openHome,
  requireUser
}) {
  const {
    m
  } = useView();
  const {
    homes,
    builders,
    products
  } = HBA_DATA;
  const [tab, setTab] = React.useState('homes');
  if (!user) return /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: '80px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 28px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Sign in to see your saved homes"), /*#__PURE__*/React.createElement(AB, {
    onClick: () => requireUser(() => {})
  }, "Create a free account"));
  const savedHomes = homes.filter(h => saved.homes.has(h.id));
  const rated = homes.filter(h => ratings[h.id] || notes[h.id]).sort((a, b) => ['loved', 'ok', 'no'].indexOf(ratings[a.id]) - ['loved', 'ok', 'no'].indexOf(ratings[b.id]));
  const prods = products.filter(p => saved.products.has(p.id));
  const bs = builders.filter(b => saved.builders.has(b.id));
  const bname = id => (builders.find(b => b.id === id) || {}).name;
  const empty = t => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, t, /*#__PURE__*/React.createElement(AB, {
    size: "sm",
    variant: "secondary",
    onClick: () => go('showcase')
  }, "Browse Parade homes"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: m ? '28px 20px 56px' : '48px 32px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 20,
      justifyContent: 'space-between',
      alignItems: m ? 'flex-start' : 'flex-end',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "My Hoodle"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '4px 0 0',
      font: `500 ${m ? 28 : 36}px/1.15 var(--font-sans)`,
      color: 'var(--text-strong)',
      letterSpacing: '-0.015em'
    }
  }, "Welcome back, ", user.first)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: m ? 24 : 36
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: savedHomes.length,
    label: "saved homes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: Object.values(ratings).filter(r => r === 'loved').length,
    label: "loved"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: prods.length,
    label: "products"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 16,
      borderRadius: 'var(--radius-lg)',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 14px/1.45 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "You're entered in today's Parade giveaway."), " Check in at any Parade home to enter again tomorrow.")), /*#__PURE__*/React.createElement(ATabs, {
    tabs: [{
      value: 'homes',
      label: 'Saved homes',
      count: savedHomes.length
    }, {
      value: 'rated',
      label: 'Ratings & notes',
      count: rated.length
    }, {
      value: 'products',
      label: 'Products',
      count: prods.length
    }, {
      value: 'builders',
      label: 'Builders',
      count: bs.length
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, tab === 'homes' && (savedHomes.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, savedHomes.map(h => /*#__PURE__*/React.createElement(AListing, {
    key: h.id,
    image: h.img,
    status: 'Parade #' + h.no,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    sqft: h.sqft,
    name: h.name,
    community: h.hood,
    location: bname(h.builder),
    saved: true,
    onSave: () => toggleSave('homes', h.id),
    onClick: () => openHome(h.id)
  }))) : empty('No saved homes yet.')), tab === 'rated' && (rated.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, rated.map((h, i) => {
    const r = RATES.find(x => x[0] === ratings[h.id]);
    return /*#__PURE__*/React.createElement(ACard, {
      key: h.id,
      padding: 14,
      interactive: true,
      onClick: () => openHome(h.id)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: m ? 'flex-start' : 'center',
        flexDirection: m ? 'column' : 'row'
      }
    }, /*#__PURE__*/React.createElement(Img, {
      src: h.img,
      style: {
        width: m ? '100%' : 120,
        height: m ? 140 : 80,
        borderRadius: 8,
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 15px var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, "#", h.no, " ", h.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: 'var(--text-muted)'
      }
    }, "\xB7 ", bname(h.builder))), notes[h.id] && /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 13px/1.5 var(--font-sans)',
        color: 'var(--text-body)',
        marginTop: 4,
        fontStyle: 'italic'
      }
    }, "\"", notes[h.id], "\"")), r && /*#__PURE__*/React.createElement(ABadge, {
      tone: r[0] === 'loved' ? 'brand' : r[0] === 'ok' ? 'neutral' : 'danger'
    }, r[1])));
  })) : empty('Rate the homes you tour to compare them here.')), tab === 'products' && (prods.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 14
    }
  }, prods.map(p => /*#__PURE__*/React.createElement(ACard, {
    key: p.id,
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, p.by), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(AB, {
    size: "sm",
    variant: "ghost",
    onClick: () => toggleSave('products', p.id)
  }, "Remove"))))) : empty('Tap "Want this" on products inside Parade homes.')), tab === 'builders' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(2,minmax(0,1fr))',
      gap: 14
    }
  }, (bs.length ? bs : builders.slice(0, 1)).map((b, i) => /*#__PURE__*/React.createElement(ACard, {
    key: b.id,
    padding: 16,
    interactive: true,
    onClick: () => go('builder', {
      id: b.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    style: {
      width: 52,
      height: 52,
      borderRadius: 8,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-body)',
      marginTop: 4
    }
  }, i === 0 ? '"Thanks for touring The Willow. We can move the office to the main floor. Want to see a revised plan?"' : 'No messages yet.'), i === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "Replied 2 days after the Parade")))))))));
}
Object.assign(window, {
  ModelHomeSheet,
  RegisterDialog,
  AccountPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hba-presence/Account.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hba-presence/BuilderPage.jsx
try { (() => {
const {
  Button: BB,
  Badge: BBadge,
  Tabs: BTabs,
  Card: BCard,
  ListingCard: BListing,
  Input: BInput,
  IconButton: BIconButton
} = window.HoodleDesignSystem_ee4a2a;
function BuilderPage({
  id,
  go,
  saved,
  toggleSave,
  openHome,
  notify
}) {
  const {
    m
  } = useView();
  const {
    builders,
    neighborhoods,
    homes,
    P,
    hba
  } = HBA_DATA;
  const b = builders.find(x => x.id === id) || builders[0];
  const [tab, setTab] = React.useState('n');
  const hoods = neighborhoods[b.id] || [{
    name: b.city + ' Ranch',
    city: b.city,
    from: b.from,
    plans: 4,
    img: b.img
  }, {
    name: 'The Reserve',
    city: b.city,
    from: b.from,
    plans: 3,
    img: P[9]
  }];
  const paradeHomes = homes.filter(h => h.builder === b.id);
  const avail = [{
    id: b.id + 'a',
    name: 'The Aspen',
    price: b.from.replace('k', ',900').replace('$', '$'),
    beds: 3,
    baths: 2.5,
    sqft: 2140,
    img: P[10],
    hood: hoods[0].name
  }, {
    id: b.id + 'b',
    name: 'The Blue Spruce',
    price: 'Priced from ' + b.from,
    beds: 4,
    baths: 3,
    sqft: 2690,
    img: P[11],
    hood: hoods[0].name
  }, {
    id: b.id + 'c',
    name: 'The Columbine',
    price: 'Priced from ' + b.from,
    beds: 4,
    baths: 3.5,
    sqft: 3010,
    img: P[8],
    hood: hoods[1] ? hoods[1].name : hoods[0].name
  }];
  const isSaved = saved.builders.has(b.id);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: hba.name,
      onClick: () => go('hba')
    }, {
      label: 'Members',
      onClick: () => go('hba', {
        anchor: 'members'
      })
    }, {
      label: b.name
    }]
  })), /*#__PURE__*/React.createElement(Wrap, {
    pad: !m
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    alt: "",
    style: {
      width: '100%',
      height: m ? 200 : 300,
      borderRadius: m ? 0 : 'var(--radius-xl)'
    }
  })), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: m ? 16 : 24,
      alignItems: m ? 'flex-start' : 'flex-end',
      marginTop: m ? -36 : -44,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: m ? 76 : 104,
      height: m ? 76 : 104,
      borderRadius: 'var(--radius-lg)',
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 11px var(--font-sans)',
      color: 'var(--ink-400)',
      flex: 'none'
    }
  }, "Builder logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: `500 ${m ? 28 : 36}px/1.15 var(--font-sans)`,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, b.type, " \xB7 ", b.city, ", CO \xB7 Building for ", b.years, " years"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(HbaBadge, {
    onClick: () => go('hba')
  }), b.elite && /*#__PURE__*/React.createElement(BBadge, {
    tone: "ink",
    style: {
      height: 34,
      padding: '0 12px'
    }
  }, "Hoodle Elite\u2122 Verified"), /*#__PURE__*/React.createElement(BBadge, {
    tone: "neutral",
    style: {
      height: 34,
      padding: '0 12px'
    }
  }, "NAHB member"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BB, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16,
      style: isSaved ? {
        fill: 'var(--teal-500)'
      } : null
    }),
    onClick: () => toggleSave('builders', b.id)
  }, isSaved ? 'Saved' : 'Save'), /*#__PURE__*/React.createElement(BB, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    }),
    onClick: () => notify('Message form opened below.')
  }, "Contact builder"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,auto)',
      gap: m ? 18 : 48,
      justifyContent: 'start',
      padding: '28px 0',
      borderBottom: '1px solid var(--border-subtle)',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: b.neighborhoods,
    label: "neighborhoods"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: b.homes,
    label: "available homes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: b.from,
    label: "homes from"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4.8",
    label: "rating \xB7 126 reviews"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) 340px',
      gap: m ? 32 : 48,
      padding: m ? '28px 0 56px' : '36px 0 88px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      minWidth: 0
    }
  }, paradeHomes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 18,
      alignItems: m ? 'stretch' : 'center',
      padding: 18,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-brand-soft)'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: paradeHomes[0].img,
    style: {
      width: m ? '100%' : 140,
      height: 96,
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-sans)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--teal-700)'
    }
  }, "In the Parade of Homes"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 17px/1.35 var(--font-sans)',
      color: 'var(--text-strong)',
      marginTop: 4
    }
  }, "#", paradeHomes[0].no, " ", paradeHomes[0].name, " at ", paradeHomes[0].hood), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, "Open Thu\u2013Sun, 12\u20135 PM through Aug 23")), /*#__PURE__*/React.createElement(BB, {
    onClick: () => openHome(paradeHomes[0].id)
  }, "View model home")), /*#__PURE__*/React.createElement(BTabs, {
    tabs: [{
      value: 'n',
      label: 'Neighborhoods',
      count: hoods.length
    }, {
      value: 'h',
      label: 'Available homes',
      count: b.homes
    }, {
      value: 'p',
      label: 'Floor plans'
    }, {
      value: 'r',
      label: 'Reviews'
    }],
    value: tab,
    onChange: setTab
  }), tab === 'n' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(2,minmax(0,1fr))',
      gap: 20
    }
  }, hoods.map(h => /*#__PURE__*/React.createElement(BCard, {
    key: h.name,
    padding: 0,
    interactive: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: h.img,
    style: {
      width: '100%',
      aspectRatio: '16 / 9'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, h.city, " \xB7 ", h.plans, " floor plans \xB7 from ", h.from))))), tab === 'h' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, [...paradeHomes, ...avail].map(h => /*#__PURE__*/React.createElement(BListing, {
    key: h.id,
    image: h.img,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    sqft: h.sqft,
    name: h.name,
    community: h.hood,
    status: h.status,
    saved: saved.homes.has(h.id),
    onSave: () => toggleSave('homes', h.id),
    onClick: () => h.no && openHome(h.id)
  }))), (tab === 'p' || tab === 'r') && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Existing Hoodle builder-page section. Not recreated in this prototype.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: m ? 'static' : 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(ContactCard, {
    builder: b,
    notify: notify
  }), /*#__PURE__*/React.createElement(BCard, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 22,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Verified HBA member since 2004"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, b.name, " is a member of the HBA of Metro Denver, the Colorado Association of Home Builders and NAHB."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('hba');
    },
    style: {
      display: 'inline-block',
      marginTop: 8,
      font: '500 13px var(--font-sans)'
    }
  }, "See all HBA members \u2192")))), /*#__PURE__*/React.createElement(BCard, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, "REALTORS who show these homes"), [['Dana Ruiz', 'Compass · Aurora'], ['Marcus Bell', 'eXp Realty · Denver']].map(([n, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--ink-100)',
      color: 'var(--ink-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 13px var(--font-sans)'
    }
  }, n.split(' ').map(s => s[0]).join('')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, c)))))))));
}
function ContactCard({
  builder,
  notify
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(BCard, {
    padding: 20
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 28,
    color: "var(--success-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, builder.name, " usually replies within a day. You'll find the conversation in My Hoodle.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Contact ", builder.name), /*#__PURE__*/React.createElement(BInput, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(BInput, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    defaultValue: "I'm interested in your homes and would like to schedule a tour.",
    rows: 3,
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(BB, {
    fullWidth: true,
    onClick: () => {
      setSent(true);
      notify('Message sent to ' + builder.name + '.');
    }
  }, "Send message")));
}
Object.assign(window, {
  BuilderPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hba-presence/BuilderPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hba-presence/PresenceBottom.jsx
try { (() => {
const {
  Button: QB,
  Badge: QBadge,
  Tag: QTag,
  Card: QCard,
  Tabs: QTabs,
  Eyebrow: QEyebrow
} = window.HoodleDesignSystem_ee4a2a;
function MarketMapSection({
  go
}) {
  const {
    m,
    viewAs
  } = useView();
  const {
    builders,
    nonMembers,
    extraMembers
  } = HBA_DATA;
  const eo = viewAs === 'eo';
  const [f, setF] = React.useState('all');
  const [invited, setInvited] = React.useState(new Set());
  const members = [...builders.map(b => ({
    ...b,
    sub: `${b.type} · ${b.city}`
  })), ...extraMembers.map(b => ({
    ...b,
    sub: b.city
  }))];
  const pts = [...(f !== 'non' ? members.map(b => ({
    kind: 'member',
    lat: b.lat,
    lng: b.lng,
    name: b.name,
    sub: 'Member · ' + b.sub,
    id: b.id
  })) : []), ...(f !== 'mem' ? nonMembers.map(b => ({
    kind: 'non',
    hl: eo,
    lat: b.lat,
    lng: b.lng,
    name: b.name,
    sub: 'Not yet a member · ' + b.city
  })) : [])];
  const total = members.length + nonMembers.length;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    id: "map",
    eyebrow: "Market map",
    title: eo ? 'Every builder in your territory, member or not' : 'Every new-home builder in the metro',
    sub: eo ? `Hoodle tracks ${total} active builders and developers across your 8 counties. ${nonMembers.length} aren't members yet.` : 'See who is building near you. Member builders carry the HBA badge on their Hoodle page.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.8fr) minmax(0,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QTag, {
    selected: f === 'all',
    onClick: () => setF('all')
  }, "All builders \xB7 ", total), /*#__PURE__*/React.createElement(QTag, {
    selected: f === 'mem',
    onClick: () => setF('mem')
  }, "Members \xB7 ", members.length), /*#__PURE__*/React.createElement(QTag, {
    selected: f === 'non',
    onClick: () => setF('non')
  }, "Not yet members \xB7 ", nonMembers.length)), /*#__PURE__*/React.createElement(LeafletMap, {
    points: pts,
    height: m ? 320 : 460,
    onPick: p => p.id && go('builder', {
      id: p.id
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--teal-500)',
      border: '2px solid #fff',
      boxShadow: '0 0 0 1px var(--ink-200)'
    }
  }), "HBA member"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#fff',
      border: `2px ${eo ? 'solid var(--gold-500)' : 'dashed var(--ink-500)'}`
    }
  }), "Not yet a member"))), /*#__PURE__*/React.createElement(QCard, {
    padding: 0,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      maxHeight: m ? 'none' : 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      borderBottom: '1px solid var(--border-subtle)',
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, eo ? 'Recruit: builders not yet members' : 'Member builders'), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto'
    }
  }, (eo ? nonMembers : builders).map(b => /*#__PURE__*/React.createElement("div", {
    key: b.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      flex: 'none',
      background: eo ? '#fff' : 'var(--teal-500)',
      border: eo ? '2px solid var(--gold-500)' : 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, b.city, b.type ? ' · ' + b.type : '')), eo ? /*#__PURE__*/React.createElement(QB, {
    size: "sm",
    variant: invited.has(b.name) ? 'ghost' : 'secondary',
    disabled: invited.has(b.name),
    onClick: () => setInvited(s => new Set(s).add(b.name))
  }, invited.has(b.name) ? 'Invited' : 'Invite') : /*#__PURE__*/React.createElement(QB, {
    size: "sm",
    variant: "ghost",
    onClick: () => go('builder', {
      id: b.id
    })
  }, "View"))))))));
}
function Join() {
  const {
    m
  } = useView();
  const [track, setTrack] = React.useState('b');
  const lead = track === 'b' ? [['users-round', 'Buyer leads, not just meetings', 'Buyers find your homes on Hoodle and contact you directly. No ad spend.'], ['store', 'A full Hoodle storefront', 'Neighborhoods, floor plans, photos, video tours and reviews, set up for you.'], ['badge-check', 'A badge that travels', 'Your HBA membership shows on every Hoodle page buyers and REALTORS see.']] : [['megaphone', 'Reach every member builder', 'Put your products in front of the 118 builders and developers in the HBA.'], ['sparkles', 'Featured in Parade homes', 'Buyers save the products they see in Parade homes, and you see which ones.'], ['badge-check', 'A badge that travels', 'Your HBA membership shows on your Hoodle company page.']];
  const also = ['Advocacy on codes, fees and permits', 'Networking and councils', 'Education and NAHB member rebates'];
  return /*#__PURE__*/React.createElement("section", {
    id: "join",
    style: {
      background: 'var(--ink-900)',
      color: '#fff',
      padding: m ? '48px 0' : '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.6fr)',
      gap: m ? 28 : 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(QEyebrow, {
    align: "start",
    size: "sm",
    tone: "inverse"
  }, "Join the HBA"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `500 ${m ? 30 : 42}px/1.12 var(--font-sans)`,
      letterSpacing: '-0.02em'
    }
  }, "Membership that helps you sell more homes."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,.75)'
    }
  }, "Local, state and national membership in one. Hoodle is included for every member."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      background: 'rgba(255,255,255,.08)',
      padding: 4,
      borderRadius: 'var(--radius-md)',
      width: 'fit-content'
    }
  }, [['b', 'Builders & developers'], ['a', 'Associate members']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    type: "button",
    onClick: () => setTrack(v),
    style: {
      height: 34,
      padding: '0 14px',
      border: 0,
      borderRadius: 6,
      background: track === v ? '#fff' : 'transparent',
      color: track === v ? 'var(--ink-900)' : 'rgba(255,255,255,.8)',
      font: '500 13px var(--font-sans)',
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(QB, {
    size: "lg"
  }, "Apply to join"), /*#__PURE__*/React.createElement(QB, {
    size: "lg",
    variant: "ghost",
    style: {
      color: '#fff'
    }
  }, "Talk to membership"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, lead.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 18,
      padding: 22,
      borderRadius: 'var(--radius-lg)',
      background: 'rgba(255,255,255,.05)',
      border: '1px solid rgba(255,255,255,.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--teal-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 17px/1.3 var(--font-sans)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.55 var(--font-sans)',
      color: 'rgba(255,255,255,.72)',
      marginTop: 4
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: m ? 10 : 24,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--gold-300)'
    }
  }, "Plus"), also.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '400 13px var(--font-sans)',
      color: 'rgba(255,255,255,.8)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--teal-300)"
  }), a)))))));
}
function Advocacy() {
  const {
    m
  } = useView();
  const {
    advocacy
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '72px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,2fr)',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(QEyebrow, {
    align: "start",
    size: "sm"
  }, "Advocacy"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 24px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "The voice of Front Range builders"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: '500 14px var(--font-sans)'
    }
  }, "Read the advocacy report \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: 24
    }
  }, advocacy.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      borderTop: '2px solid var(--gold-500)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 36px/1 var(--font-sans)',
      color: 'var(--teal-600)',
      letterSpacing: '-0.02em'
    }
  }, a.stat), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-body)',
      marginTop: 10
    }
  }, a.label))))));
}
function EventsNews() {
  const {
    m
  } = useView();
  const {
    events,
    news
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    id: "events",
    eyebrow: "Events & news",
    title: "What's happening"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.5fr) minmax(0,1fr)',
      gap: m ? 32 : 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, events.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.title,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      flex: 'none',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px var(--font-sans)',
      letterSpacing: '.12em',
      color: 'var(--teal-600)'
    }
  }, e.date.split(' ')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 26px/1.1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, e.date.split(' ')[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.35 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, e.where)), !m && /*#__PURE__*/React.createElement(QBadge, {
    tone: "neutral"
  }, e.tag)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, news.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.title,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'block',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, n.date), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.4 var(--font-sans)',
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, n.title)))))));
}
function Sponsors() {
  const {
    m
  } = useView();
  const {
    sponsorTiers
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "sponsors",
    style: {
      background: 'var(--surface-sunken)',
      padding: m ? '48px 0' : '72px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(QEyebrow, {
    size: "sm"
  }, "Our partners"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 24px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Thank you to our sponsors")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, sponsorTiers.map((t, ti) => /*#__PURE__*/React.createElement("div", {
    key: t.tier,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, t.tier), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 12
    }
  }, t.names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: m ? 150 : [260, 200, 170][ti],
      height: [96, 76, 64][ti],
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: 10,
      boxSizing: 'border-box',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 ${[16, 14, 13][ti]}px/1.25 var(--font-sans)`,
      color: 'var(--ink-700)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px var(--font-sans)',
      color: 'var(--ink-400)'
    }
  }, "logo")))))))));
}
function ComingSoon() {
  const {
    m
  } = useView();
  const items = [['graduation-cap', 'Education & CE', 'Courses and continuing-education credits'], ['briefcase', 'Jobs board', 'Open roles with member companies'], ['trophy', 'Awards', 'Parade winners and annual awards']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '40px 0 56px' : '64px 0 88px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "Coming to this page"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: 14
    }
  }, items.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: 18,
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, d)))))));
}
function PresencePage(p) {
  const {
    viewAs
  } = useView();
  return /*#__PURE__*/React.createElement(React.Fragment, null, viewAs === 'eo' && /*#__PURE__*/React.createElement(EoBar, null), /*#__PURE__*/React.createElement(Hero, p), /*#__PURE__*/React.createElement(SubNav, {
    scrollToId: p.scrollToId
  }), /*#__PURE__*/React.createElement(Members, p), /*#__PURE__*/React.createElement(ParadeBand, p), /*#__PURE__*/React.createElement(KeepGoing, p), /*#__PURE__*/React.createElement(MarketMapSection, p), /*#__PURE__*/React.createElement(Join, null), /*#__PURE__*/React.createElement(Advocacy, null), /*#__PURE__*/React.createElement(EventsNews, null), /*#__PURE__*/React.createElement(Sponsors, null), /*#__PURE__*/React.createElement(ComingSoon, null));
}
Object.assign(window, {
  PresencePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hba-presence/PresenceBottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hba-presence/PresenceTop.jsx
try { (() => {
const {
  Button: PB,
  Badge: PBadge,
  Tabs: PTabs,
  Tag: PTag,
  Input: PInput,
  Card: PCard,
  Eyebrow: PEyebrow,
  IconButton: PIconButton
} = window.HoodleDesignSystem_ee4a2a;
function EoBar() {
  const {
    m
  } = useView();
  const {
    eo
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: m ? '16px 20px' : '14px 32px',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: m ? 'column' : 'row',
      columnGap: 32,
      rowGap: 12,
      alignItems: m ? 'flex-start' : 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: m ? 'none' : '1 1 420px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18,
    color: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.4 var(--font-sans)'
    }
  }, "Your page is built and live. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.7)',
      fontWeight: 400
    }
  }, "Pre-filled from public data. Claim it to edit."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      columnGap: m ? 20 : 28,
      rowGap: 8,
      flex: m ? 'none' : '1 1 auto',
      flexWrap: 'wrap',
      order: m ? 0 : 3,
      width: m ? 'auto' : '100%'
    }
  }, [[eo.visits, 'buyer visits'], [eo.leads, 'leads sent to members'], [eo.registrations, 'Parade registrations'], [eo.nonMembers, 'builders not yet members']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--teal-200)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'rgba(255,255,255,.7)'
    }
  }, l)))), /*#__PURE__*/React.createElement(PB, {
    size: "sm",
    variant: "primary"
  }, "Claim this page")));
}
function Hero({
  go,
  scrollToId
}) {
  const {
    m
  } = useView();
  const {
    hba,
    HERO,
    parade
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '28px 0 40px' : '56px 0 72px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: m ? 28 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      border: '1px dashed var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 10px/1.2 var(--font-sans)',
      color: 'var(--ink-400)',
      textAlign: 'center',
      padding: 6,
      boxSizing: 'border-box'
    }
  }, "HBA logo"), /*#__PURE__*/React.createElement(PEyebrow, {
    align: "start",
    size: "sm",
    tone: "brand",
    rules: false
  }, "Official member directory")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: `500 ${m ? 36 : 54}px/1.08 var(--font-sans)`,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, hba.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: `400 ${m ? 17 : 19}px/1.6 var(--font-sans)`,
      color: 'var(--text-body)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, hba.value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    style: {
      marginTop: 2
    }
  }), hba.territory), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    onClick: () => scrollToId('members'),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    })
  }, "Find a member builder"), /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    variant: "secondary",
    onClick: () => scrollToId('join')
  }, "Join the HBA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,auto)',
      gap: m ? 18 : 36,
      paddingTop: 22,
      borderTop: '1px solid var(--border-subtle)',
      justifyContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: hba.members,
    label: "member companies"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: hba.builders,
    label: "builders & developers"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: hba.counties,
    label: "metro counties"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: hba.since,
    label: "serving since"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: HERO,
    alt: "New homes under construction",
    style: {
      width: '100%',
      aspectRatio: m ? '4 / 3' : '5 / 6',
      borderRadius: 'var(--radius-xl)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go('showcase'),
    style: {
      position: 'absolute',
      left: m ? 12 : -28,
      bottom: m ? 12 : 32,
      right: m ? 12 : 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 14,
      paddingRight: 18,
      background: '#fff',
      border: 0,
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ticket",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, parade.name, " \xB7 ", parade.dates), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, parade.homes, " homes \xB7 tickets ", parade.price, " online")), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--teal-600)",
    style: {
      marginLeft: 6
    }
  })))));
}
function SubNav({
  scrollToId
}) {
  const {
    m
  } = useView();
  const items = [['members', 'Members'], ['parade', 'Parade of Homes'], ['map', 'Market map'], ['join', 'Join'], ['events', 'Events & news'], ['sponsors', 'Sponsors']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: m ? 60 : 72,
      zIndex: 15,
      background: 'rgba(255,255,255,.96)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'flex',
      gap: m ? 20 : 32,
      overflowX: 'auto',
      height: 48,
      alignItems: 'center'
    }
  }, items.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      scrollToId(id);
    },
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-700)',
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, l))));
}
function BuilderTile({
  b,
  onOpen,
  saved,
  onSave
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onOpen,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: h ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'box-shadow var(--duration-base) var(--ease-standard)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    alt: b.name,
    style: {
      width: '100%',
      aspectRatio: '16 / 10'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(PIconButton, {
    label: saved ? 'Saved' : 'Save builder',
    variant: "overlay",
    size: "sm",
    active: saved,
    onClick: onSave,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16,
      style: saved ? {
        fill: 'var(--teal-500)'
      } : null
    })
  })), b.elite && /*#__PURE__*/React.createElement(PBadge, {
    tone: "ink",
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, "Hoodle Elite")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, b.type, " \xB7 ", b.city), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, b.neighborhoods, " neighborhoods \xB7 ", b.homes, " homes \xB7 from ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, b.from)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(HbaBadge, {
    size: "sm"
  }))));
}
function Members({
  go,
  saved,
  toggleSave
}) {
  const {
    m
  } = useView();
  const {
    builders,
    associates,
    hba
  } = HBA_DATA;
  const [tab, setTab] = React.useState('b');
  const [f, setF] = React.useState('All');
  const [q, setQ] = React.useState('');
  const types = ['All', 'Production builder', 'Semi-custom', 'Custom builder', 'Townhomes & paired'];
  const list = builders.filter(b => (f === 'All' || b.type === f) && (!q || (b.name + b.city).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    id: "members",
    eyebrow: "Member directory",
    title: "Build with a member of the HBA",
    sub: "Every member builder has a full Hoodle page: their neighborhoods, available homes, floor plans and reviews. Look for the member badge."
  }), /*#__PURE__*/React.createElement(PTabs, {
    tabs: [{
      value: 'b',
      label: 'Builders & developers',
      count: hba.builders
    }, {
      value: 'a',
      label: 'Associate members',
      count: hba.associates
    }],
    value: tab,
    onChange: setTab
  }), tab === 'b' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      gap: 12,
      alignItems: m ? 'stretch' : 'center',
      margin: '20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(PInput, {
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    placeholder: "Search builders or cities",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: m ? '100%' : 280
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 2
    }
  }, types.map(t => /*#__PURE__*/React.createElement(PTag, {
    key: t,
    selected: f === t,
    onClick: () => setF(t)
  }, t === 'All' ? 'All types' : t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(4,minmax(0,1fr))',
      gap: 20
    }
  }, list.map(b => /*#__PURE__*/React.createElement(BuilderTile, {
    key: b.id,
    b: b,
    saved: saved.builders.has(b.id),
    onSave: () => toggleSave('builders', b.id),
    onOpen: () => go('builder', {
      id: b.id
    })
  }))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)',
      font: '400 14px var(--font-sans)'
    }
  }, "No member builders match that search."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "See all ", hba.builders, " member builders"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      margin: '20px 0 24px',
      maxWidth: 640
    }
  }, "Product and service companies that supply the Front Range's builders. Full company pages are coming to Hoodle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : 'repeat(4,minmax(0,1fr))',
      gap: 14
    }
  }, associates.map(a => /*#__PURE__*/React.createElement(PCard, {
    key: a.name,
    padding: 16,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'var(--ink-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building-2",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, a.cat)))))));
}
function ParadeBand({
  go,
  requireUser
}) {
  const {
    m
  } = useView();
  const {
    parade,
    homes
  } = HBA_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "parade",
    style: {
      background: 'var(--teal-500)',
      color: '#fff',
      padding: m ? '48px 0' : '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: m ? 32 : 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PEyebrow, {
    align: "start",
    size: "sm",
    tone: "inverse"
  }, "HBA of Metro Denver presents"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `500 ${m ? 34 : 48}px/1.08 var(--font-sans)`,
      letterSpacing: '-0.02em'
    }
  }, "Parade of Homes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,.88)',
      maxWidth: 460
    }
  }, parade.homes, " new homes from ", parade.builders, " member builders, open across the metro for ", parade.days, " days. Plan your route, save your favorites and pick up where you left off after the Parade ends."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,auto)',
      gap: m ? 18 : 36,
      justifyContent: 'start',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    inverse: true,
    value: parade.dates,
    label: "dates"
  }), /*#__PURE__*/React.createElement(Stat, {
    inverse: true,
    value: "12\u20135",
    label: "Thu\u2013Sun"
  }), /*#__PURE__*/React.createElement(Stat, {
    inverse: true,
    value: parade.price,
    label: "online tickets"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    variant: "ink",
    onClick: () => go('showcase'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Explore the Parade"), /*#__PURE__*/React.createElement(PB, {
    size: "lg",
    variant: "secondary",
    onClick: () => requireUser(() => go('account')),
    style: {
      borderColor: '#fff'
    }
  }, "Register free"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 12,
      height: m ? 280 : 420
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: homes[0].img,
    style: {
      gridRow: '1 / 3',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement(Img, {
    src: homes[2].img,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement(Img, {
    src: homes[4].img,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-lg)'
    }
  }))));
}
function KeepGoing({
  requireUser,
  go
}) {
  const {
    m
  } = useView();
  const steps = [['heart', 'Save homes & builders', 'Keep a shortlist across every Parade home and neighborhood.'], ['notebook-pen', 'Rate & take notes', 'Mark the homes you loved most and least, with private notes.'], ['message-circle', 'Stay in touch with the builder', 'Your conversation with the builder carries on after the event.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: m ? '40px 0' : '56px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,.9fr) minmax(0,2fr)',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 24px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Don't lose the homes you love."), /*#__PURE__*/React.createElement(PB, {
    onClick: () => requireUser(() => go('account')),
    style: {
      width: 'fit-content'
    }
  }, "Create a free Hoodle account")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)',
      gap: 20
    }
  }, steps.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: '#fff',
      color: 'var(--teal-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d)))))));
}
Object.assign(window, {
  EoBar,
  Hero,
  SubNav,
  BuilderTile,
  Members,
  ParadeBand,
  KeepGoing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hba-presence/PresenceTop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hba-presence/Shell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Eyebrow,
  Tooltip
} = window.HoodleDesignSystem_ee4a2a;
const ViewCtx = React.createContext({
  m: false,
  viewAs: 'buyer'
});
const useView = () => React.useContext(ViewCtx);
function toPascal(n) {
  return n.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
}
function Icon({
  name,
  size = 18,
  stroke = 1.75,
  color,
  style
}) {
  const node = window.lucide && window.lucide.icons[toPascal(name)];
  if (!node) return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      display: 'inline-block'
    }
  });
  const kids = node[0] === 'svg' ? node[2] : node;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    }
  }, kids.map(([t, a], i) => React.createElement(t, {
    key: i,
    ...a
  })));
}
function Img({
  src,
  alt = '',
  style,
  label = 'Photo'
}) {
  const [err, setErr] = React.useState(false);
  if (!src || err) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-400)',
      font: '400 12px var(--font-sans)',
      ...style
    }
  }, label);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErr(true),
    style: {
      objectFit: 'cover',
      display: 'block',
      ...style
    }
  });
}
function Wrap({
  children,
  style,
  pad = true
}) {
  const {
    m
  } = useView();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: pad ? m ? '0 20px' : '0 32px' : 0,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  sub,
  action,
  id
}) {
  const {
    m
  } = useView();
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      alignItems: m ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: 640
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    align: "start",
    size: "sm"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `500 ${m ? 26 : 34}px/1.2 var(--font-sans)`,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      textWrap: 'pretty'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, sub)), action);
}
function HbaBadge({
  onClick,
  size = 'md',
  inverse
}) {
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    title: "Verified member of the HBA of Metro Denver",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: sm ? 28 : 34,
      padding: sm ? '0 10px 0 8px' : '0 14px 0 10px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${inverse ? 'rgba(255,255,255,.5)' : 'var(--gold-500)'}`,
      background: inverse ? 'rgba(255,255,255,.1)' : 'var(--gold-50)',
      color: inverse ? '#fff' : 'var(--ink-900)',
      font: `500 ${sm ? 12 : 13}px/1 var(--font-sans)`,
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: sm ? 15 : 17,
    color: inverse ? '#fff' : 'var(--gold-700)'
  }), "HBA of Metro Denver ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: inverse ? 'rgba(255,255,255,.75)' : 'var(--gold-700)',
      fontWeight: 400
    }
  }, "\xB7 Member"));
}
function TopNav({
  onHome,
  onAccount,
  user
}) {
  const {
    m
  } = useView();
  const links = ['Neighborhoods', 'Builders', 'Agents', 'Mortgage'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      height: m ? 60 : 72,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onHome,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    },
    "aria-label": "Hoodle home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hoodle-logo-tm-teal.png",
    alt: "hoodle",
    style: {
      height: m ? 26 : 32,
      display: 'block'
    }
  })), !m && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-800)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), m ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: user ? 'My Hoodle' : 'Sign in',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user-round"
    }),
    onClick: onAccount,
    active: !!user
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "menu"
    })
  })) : user ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAccount,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: 0,
      background: 'none',
      cursor: 'pointer',
      font: '500 14px var(--font-sans)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 13px var(--font-sans)'
    }
  }, user.first[0]), "My Hoodle") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onAccount
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    onClick: onAccount
  }, "Sign up \u2014 free"))));
}
function Footer() {
  const {
    m
  } = useView();
  const cols = [['Explore', ['Neighborhoods', 'Builders', 'Agents', 'Lenders']], ['Partners', ['For builders', 'For REALTORS', 'For HBAs', 'For vendors']], ['Company', ['About Hoodle', 'Blog', 'Privacy', 'Terms']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'rgba(255,255,255,.72)',
      padding: m ? '40px 0 28px' : '56px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: m ? '1 / -1' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hoodle-logo-tm-white.png",
    alt: "hoodle",
    style: {
      height: 30,
      width: 'fit-content'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.6 var(--font-sans)',
      maxWidth: 300
    }
  }, "The new-home marketplace. Builders, neighborhoods and new-build listings, all in one place.")), cols.map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: '#fff'
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: '400 14px var(--font-sans)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,.12)',
      font: '400 12px var(--font-sans)'
    }
  }, "\xA9 2026 Hoodle, Inc. Sample data for demonstration.")));
}
function LeafletMap({
  points,
  height = 420,
  center = [39.72, -104.93],
  zoom = 9,
  onPick
}) {
  const ref = React.useRef(null),
    mapRef = React.useRef(null),
    layerRef = React.useRef(null);
  React.useEffect(() => {
    if (!window.L || mapRef.current) return;
    const map = L.map(ref.current, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    }).setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);
    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);
    const ro = new ResizeObserver(() => map.invalidateSize());
    ro.observe(ref.current);
    return () => {
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);
  React.useEffect(() => {
    const g = layerRef.current;
    if (!g) return;
    g.clearLayers();
    points.forEach(p => {
      let mk;
      if (p.kind === 'home') {
        mk = L.marker([p.lat, p.lng], {
          icon: L.divIcon({
            className: '',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            html: `<div style="width:30px;height:30px;border-radius:50%;background:#009788;color:#fff;border:2px solid #fff;box-shadow:0 2px 6px rgba(16,24,40,.3);display:flex;align-items:center;justify-content:center;font:600 12px Poppins,sans-serif">${p.no}</div>`
          })
        });
      } else if (p.kind === 'member') {
        mk = L.circleMarker([p.lat, p.lng], {
          radius: p.hl ? 9 : 7,
          color: '#fff',
          weight: 2,
          fillColor: '#009788',
          fillOpacity: 1
        });
      } else {
        mk = L.circleMarker([p.lat, p.lng], {
          radius: p.hl ? 9 : 7,
          color: p.hl ? '#CEA565' : '#6B7684',
          weight: p.hl ? 3 : 2,
          fillColor: '#fff',
          fillOpacity: 1,
          dashArray: p.hl ? null : '2 2'
        });
      }
      mk.bindTooltip(`<b style="font-weight:600">${p.name}</b><br>${p.sub || ''}`, {
        direction: 'top',
        offset: [0, -8]
      });
      if (onPick) mk.on('click', () => onPick(p));
      mk.addTo(g);
    });
  }, [points]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      height,
      width: '100%',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      background: 'var(--ink-100)',
      position: 'relative',
      zIndex: 0
    }
  });
}
function Stat({
  value,
  label,
  inverse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 28px/1.1 var(--font-sans)',
      color: inverse ? '#fff' : 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: inverse ? 'rgba(255,255,255,.78)' : 'var(--text-muted)'
    }
  }, label));
}
function Crumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      padding: '16px 0'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), it.onClick ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      it.onClick();
    },
    style: {
      color: 'var(--text-link)'
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, it.label))));
}
Object.assign(window, {
  ViewCtx,
  useView,
  Icon,
  Img,
  Wrap,
  SectionHead,
  HbaBadge,
  TopNav,
  Footer,
  LeafletMap,
  Stat,
  Crumbs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hba-presence/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hba-presence/ShowcasePage.jsx
try { (() => {
const {
  Button: SB,
  Badge: SBadge,
  Tag: STag,
  Card: SCard,
  ListingCard: SListing,
  Dialog: SDialog,
  Select: SSelect,
  Input: SInput,
  Eyebrow: SEyebrow
} = window.HoodleDesignSystem_ee4a2a;
function ShowcasePage({
  go,
  saved,
  toggleSave,
  openHome,
  requireUser,
  user,
  notify
}) {
  const {
    m
  } = useView();
  const {
    parade,
    homes,
    builders,
    sponsorTiers,
    hba
  } = HBA_DATA;
  const [area, setArea] = React.useState('All areas');
  const [tix, setTix] = React.useState(false);
  const areas = ['All areas', 'North', 'South', 'East', 'West'];
  const areaOf = h => h.lat > 39.85 ? 'North' : h.lat < 39.6 ? 'South' : h.lng > -104.9 ? 'East' : 'West';
  const list = homes.filter(h => area === 'All areas' || areaOf(h) === area);
  const bname = id => (builders.find(b => b.id === id) || {}).name;
  const participating = builders.filter(b => homes.some(h => h.builder === b.id));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--teal-500)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0 0',
      font: '400 13px var(--font-sans)',
      color: 'rgba(255,255,255,.8)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('hba');
    },
    style: {
      color: '#fff'
    }
  }, hba.name), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Parade of Homes"))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: m ? 24 : 48,
      padding: m ? '24px 20px 40px' : '40px 32px 64px',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SEyebrow, {
    align: "start",
    size: "sm",
    tone: "inverse"
  }, hba.name, " presents"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: `500 ${m ? 40 : 64}px/1.02 var(--font-sans)`,
      letterSpacing: '-0.025em'
    }
  }, "Parade of Homes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,.9)',
      maxWidth: 520
    }
  }, parade.homes, " new homes. ", parade.builders, " member builders. ", parade.days, " days across the metro. Register free to plan your route, rate every home you tour and keep your favorites after the Parade."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(SB, {
    size: "lg",
    variant: "ink",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "ticket",
      size: 18
    }),
    onClick: () => setTix(true)
  }, "Get tickets \xB7 ", parade.price), /*#__PURE__*/React.createElement(SB, {
    size: "lg",
    variant: "secondary",
    style: {
      borderColor: '#fff'
    },
    onClick: () => requireUser(() => notify('You\'re registered. Start saving homes.'))
  }, user ? 'You\'re registered' : 'Register free'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 1,
      background: 'rgba(255,255,255,.2)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, [['calendar-days', 'Dates', parade.dates], ['clock', 'Hours', parade.hours], ['ticket', 'Tickets', parade.price + ' online, all homes'], ['map-pinned', 'Homes', parade.homes + ' across 8 counties']].map(([i, l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'var(--teal-600)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--teal-100)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'rgba(255,255,255,.75)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.35 var(--font-sans)'
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gold-50)',
      borderBottom: '1px solid var(--gold-100)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'flex',
      flexDirection: m ? 'column' : 'row',
      alignItems: m ? 'flex-start' : 'center',
      gap: 12,
      padding: m ? '14px 20px' : '14px 32px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 14px/1.4 var(--font-sans)',
      color: 'var(--gold-900)'
    }
  }, parade.giveaway, ". Registered visitors are entered every day they check in."), /*#__PURE__*/React.createElement(SB, {
    size: "sm",
    variant: "ink",
    onClick: () => requireUser(() => notify('You\'re entered in today\'s giveaway.'))
  }, user ? 'Entered today' : 'Enter the giveaway'))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '40px 0' : '64px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Parade map",
    title: "Plan your route",
    sub: "Tap a number to see the home, the builder and the products inside."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, areas.map(a => /*#__PURE__*/React.createElement(STag, {
    key: a,
    selected: area === a,
    onClick: () => setArea(a)
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.6fr) minmax(0,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(LeafletMap, {
    points: list.map(h => ({
      kind: 'home',
      no: h.no,
      lat: h.lat,
      lng: h.lng,
      name: `#${h.no} ${h.name}`,
      sub: `${bname(h.builder)} · ${h.city}`,
      id: h.id
    })),
    height: m ? 300 : 440,
    center: [39.7, -104.95],
    zoom: 9,
    onPick: p => openHome(p.id)
  }), /*#__PURE__*/React.createElement(SCard, {
    padding: 0,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: m ? 'none' : 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto'
    }
  }, list.map(h => /*#__PURE__*/React.createElement("button", {
    key: h.id,
    type: "button",
    onClick: () => openHome(h.id),
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      width: '100%',
      padding: '12px 16px',
      border: 0,
      borderBottom: '1px solid var(--border-subtle)',
      background: '#fff',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: 'none',
      borderRadius: '50%',
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 12px var(--font-sans)'
    }
  }, h.no), /*#__PURE__*/React.createElement(Img, {
    src: h.img,
    style: {
      width: 56,
      height: 42,
      borderRadius: 6,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, h.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, bname(h.builder), " \xB7 ", h.city)), saved.homes.has(h.id) && /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 16,
    color: "var(--teal-500)",
    style: {
      fill: 'var(--teal-500)'
    }
  })))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: m ? '0 0 40px' : '0 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Parade homes",
    title: "Tour the homes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, list.map(h => /*#__PURE__*/React.createElement(SListing, {
    key: h.id,
    image: h.img,
    status: '#' + h.no + ' · ' + h.status,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    sqft: h.sqft,
    name: h.name,
    community: h.hood,
    location: bname(h.builder),
    saved: saved.homes.has(h.id),
    onSave: () => toggleSave('homes', h.id),
    onClick: () => openHome(h.id)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: m ? '40px 0' : '64px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Participating builders",
    title: `${parade.builders} member builders`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))',
      gap: 14
    }
  }, participating.map(b => /*#__PURE__*/React.createElement(SCard, {
    key: b.id,
    interactive: true,
    padding: 16,
    onClick: () => go('builder', {
      id: b.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: b.img,
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, homes.filter(h => h.builder === b.id).length, " Parade home \xB7 ", b.city)), /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 18,
    color: "var(--gold-700)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px var(--font-sans)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Parade sponsors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, sponsorTiers.flatMap(t => t.names).map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      height: 52,
      padding: '0 18px',
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      font: '600 13px var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Questions? ", parade.contact)))), /*#__PURE__*/React.createElement(SDialog, {
    open: tix,
    title: "Parade of Homes tickets",
    onClose: () => setTix(false),
    width: 440,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SB, {
      variant: "ghost",
      onClick: () => setTix(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(SB, {
      onClick: () => {
        setTix(false);
        notify('Tickets sent to your email. See you at the Parade.');
      }
    }, "Buy tickets"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "One ticket covers every home, every open day. Sold by ", hba.name, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SSelect, {
    label: "Adult tickets \xB7 $12",
    options: ['1', '2', '3', '4'],
    defaultValue: "2"
  }), /*#__PURE__*/React.createElement(SSelect, {
    label: "Kids under 12",
    options: ['Free', '1', '2', '3'],
    defaultValue: "Free"
  })), /*#__PURE__*/React.createElement(SInput, {
    label: "Email for tickets",
    placeholder: "you@example.com",
    defaultValue: user ? user.email : ''
  }))));
}
Object.assign(window, {
  ShowcasePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hba-presence/ShowcasePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hba-presence/data.js
try { (() => {
(() => {
  const U = id => `https://images.unsplash.com/photo-${id}?w=900&q=70&auto=format&fit=crop`;
  const P = ['1568605114967-8130f3a36994', '1570129477492-45c003edd2be', '1564013799919-ab600027ffc6', '1512917774080-9991f1c4c750', '1600596542815-ffad4c1539a9', '1600585154340-be6161a56a0c', '1580587771525-78b9dba3b914', '1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c', '1600566753190-17f0baa2a6c3', '1583608205776-bfd35f0d9f83', '1605276374104-dee2a0ed3cd6'].map(U);
  const INT = ['1600210492486-724fe5c67fb0', '1600566752355-35792bedcfea', '1556911220-bff31c812dba', '1484154218962-a197022b5858'].map(U);
  const HERO = U('1600585154340-be6161a56a0c').replace('w=900', 'w=1600');
  const hba = {
    name: 'HBA of Metro Denver',
    short: 'Metro Denver HBA',
    territory: 'Adams, Arapahoe, Boulder, Broomfield, Denver, Douglas, Elbert & Jefferson counties',
    counties: 8,
    members: 642,
    builders: 118,
    associates: 524,
    since: 1946,
    value: 'The builders, developers and trade partners who build the Front Range, in one place buyers can actually find.',
    site: 'hbadenver.com'
  };
  const builders = [{
    id: 'frontrange',
    name: 'Front Range Homes',
    type: 'Production builder',
    city: 'Aurora',
    neighborhoods: 4,
    homes: 37,
    from: '$489k',
    img: P[0],
    lat: 39.705,
    lng: -104.735,
    member: true,
    years: 22,
    elite: true
  }, {
    id: 'aspen',
    name: 'Aspen Ridge Homebuilders',
    type: 'Semi-custom',
    city: 'Castle Rock',
    neighborhoods: 2,
    homes: 14,
    from: '$629k',
    img: P[1],
    lat: 39.372,
    lng: -104.856,
    member: true,
    years: 15
  }, {
    id: 'timberline',
    name: 'Timberline Builders Co.',
    type: 'Custom builder',
    city: 'Golden',
    neighborhoods: 1,
    homes: 6,
    from: '$1.2M',
    img: P[7],
    lat: 39.755,
    lng: -105.221,
    member: true,
    years: 31,
    elite: true
  }, {
    id: 'platte',
    name: 'Platte River Homes',
    type: 'Production builder',
    city: 'Brighton',
    neighborhoods: 3,
    homes: 28,
    from: '$452k',
    img: P[2],
    lat: 39.985,
    lng: -104.820,
    member: true,
    years: 9
  }, {
    id: 'highline',
    name: 'Highline Homes',
    type: 'Townhomes & paired',
    city: 'Thornton',
    neighborhoods: 2,
    homes: 19,
    from: '$415k',
    img: P[5],
    lat: 39.905,
    lng: -104.955,
    member: true,
    years: 12
  }, {
    id: 'summit',
    name: 'Summit Crest Homes',
    type: 'Semi-custom',
    city: 'Parker',
    neighborhoods: 2,
    homes: 11,
    from: '$715k',
    img: P[4],
    lat: 39.518,
    lng: -104.762,
    member: true,
    years: 18
  }, {
    id: 'evergreen',
    name: 'Evergreen Craft Builders',
    type: 'Custom builder',
    city: 'Arvada',
    neighborhoods: 1,
    homes: 4,
    from: '$985k',
    img: P[3],
    lat: 39.832,
    lng: -105.150,
    member: true,
    years: 26
  }, {
    id: 'meadowlark',
    name: 'Meadowlark Homes',
    type: 'Production builder',
    city: 'Erie',
    neighborhoods: 2,
    homes: 22,
    from: '$559k',
    img: P[6],
    lat: 40.050,
    lng: -105.050,
    member: true,
    years: 7
  }];
  const nonMembers = [{
    name: 'Cobalt Peak Builders',
    city: 'Commerce City',
    lat: 39.845,
    lng: -104.860
  }, {
    name: 'Larkspur Custom Homes',
    city: 'Larkspur',
    lat: 39.228,
    lng: -104.887
  }, {
    name: 'Bear Creek Homeworks',
    city: 'Lakewood',
    lat: 39.690,
    lng: -105.110
  }, {
    name: 'Northfield Residential',
    city: 'Broomfield',
    lat: 39.935,
    lng: -105.070
  }, {
    name: 'Sandstone Homes',
    city: 'Littleton',
    lat: 39.600,
    lng: -105.020
  }, {
    name: 'Two Rivers Building Co.',
    city: 'Westminster',
    lat: 39.870,
    lng: -105.060
  }, {
    name: 'Prairie Sky Homes',
    city: 'Bennett',
    lat: 39.759,
    lng: -104.427
  }, {
    name: 'Elbert Timber Frame',
    city: 'Elizabeth',
    lat: 39.360,
    lng: -104.600
  }];
  const extraMembers = [{
    name: 'Cherry Creek Custom',
    city: 'Centennial',
    lat: 39.580,
    lng: -104.880
  }, {
    name: 'Red Rocks Renovation & Build',
    city: 'Morrison',
    lat: 39.653,
    lng: -105.191
  }, {
    name: 'Horizon Peak Homes',
    city: 'Highlands Ranch',
    lat: 39.540,
    lng: -104.970
  }, {
    name: 'Longs View Builders',
    city: 'Longmont',
    lat: 40.167,
    lng: -105.101
  }, {
    name: 'Cottonwood Homes',
    city: 'Englewood',
    lat: 39.648,
    lng: -104.988
  }, {
    name: 'Ironwood Builders',
    city: 'Castle Pines',
    lat: 39.472,
    lng: -104.896
  }];
  const associates = [{
    name: 'Peak Windows & Doors',
    cat: 'Windows & doors'
  }, {
    name: 'Mile High Lighting',
    cat: 'Lighting'
  }, {
    name: 'Rocky Mountain Flooring',
    cat: 'Flooring'
  }, {
    name: 'Alpine Title Co.',
    cat: 'Title & escrow'
  }, {
    name: 'Colorado Home Lending',
    cat: 'Mortgage'
  }, {
    name: 'Foothills Cabinetry',
    cat: 'Cabinets'
  }, {
    name: 'Front Range Solar',
    cat: 'Energy'
  }, {
    name: 'Cascade Plumbing Supply',
    cat: 'Plumbing'
  }];
  const neighborhoods = {
    frontrange: [{
      name: 'Cedar Ridge',
      city: 'Aurora',
      from: '$489k',
      plans: 6,
      img: P[0]
    }, {
      name: 'Harvest Trails',
      city: 'Aurora',
      from: '$512k',
      plans: 5,
      img: P[9]
    }, {
      name: 'Sky Ranch West',
      city: 'Watkins',
      from: '$469k',
      plans: 4,
      img: P[10]
    }, {
      name: 'Prairie Point',
      city: 'Aurora',
      from: '$535k',
      plans: 5,
      img: P[11]
    }]
  };
  const homes = [{
    id: 'h1',
    no: 12,
    name: 'The Willow',
    builder: 'frontrange',
    hood: 'Cedar Ridge',
    city: 'Aurora',
    price: '$524,900',
    beds: 4,
    baths: 2.5,
    sqft: 2480,
    img: P[0],
    lat: 39.712,
    lng: -104.742,
    status: 'Parade model'
  }, {
    id: 'h2',
    no: 18,
    name: 'The Summit',
    builder: 'aspen',
    hood: 'Crystal Valley',
    city: 'Castle Rock',
    price: '$689,000',
    beds: 4,
    baths: 3.5,
    sqft: 3120,
    img: P[1],
    lat: 39.365,
    lng: -104.842,
    status: 'Parade model'
  }, {
    id: 'h3',
    no: 7,
    name: 'Clear Creek Residence',
    builder: 'timberline',
    hood: 'Mesa Top',
    city: 'Golden',
    price: '$1,395,000',
    beds: 5,
    baths: 4.5,
    sqft: 4610,
    img: P[7],
    lat: 39.740,
    lng: -105.205,
    status: 'Parade model'
  }, {
    id: 'h4',
    no: 22,
    name: 'The Juniper',
    builder: 'platte',
    hood: 'River Bend',
    city: 'Brighton',
    price: '$468,500',
    beds: 3,
    baths: 2.5,
    sqft: 2090,
    img: P[2],
    lat: 39.990,
    lng: -104.805,
    status: 'Move-in ready'
  }, {
    id: 'h5',
    no: 4,
    name: 'The Aurora II',
    builder: 'summit',
    hood: 'Stonegate',
    city: 'Parker',
    price: '$749,900',
    beds: 5,
    baths: 3.5,
    sqft: 3480,
    img: P[4],
    lat: 39.525,
    lng: -104.775,
    status: 'Parade model'
  }, {
    id: 'h6',
    no: 15,
    name: 'The Larimer',
    builder: 'highline',
    hood: 'North Park',
    city: 'Thornton',
    price: '$429,000',
    beds: 3,
    baths: 2.5,
    sqft: 1780,
    img: P[5],
    lat: 39.912,
    lng: -104.940,
    status: 'Parade model'
  }];
  const products = [{
    id: 'p1',
    name: 'Quartz waterfall island',
    by: 'Foothills Cabinetry'
  }, {
    id: 'p2',
    name: 'Tankless water heater',
    by: 'Cascade Plumbing Supply'
  }, {
    id: 'p3',
    name: 'Wide-plank white oak floors',
    by: 'Rocky Mountain Flooring'
  }, {
    id: 'p4',
    name: 'Black-frame picture windows',
    by: 'Peak Windows & Doors'
  }, {
    id: 'p5',
    name: 'Dedicated movie room',
    by: 'Mile High Lighting'
  }, {
    id: 'p6',
    name: 'Rooftop solar + battery',
    by: 'Front Range Solar'
  }];
  const parade = {
    name: 'Parade of Homes',
    dates: 'Aug 6–23',
    hours: 'Thu–Sun · 12–5 PM',
    price: '$12',
    homes: 42,
    builders: 28,
    days: 18,
    giveaway: 'Daily giveaway: a $500 lighting package from Mile High Lighting',
    contact: 'parade@hbadenver.com'
  };
  const events = [{
    date: 'OCT 16',
    title: 'Builder & REALTOR mixer',
    where: 'Denver Design District',
    tag: 'Networking'
  }, {
    date: 'NOV 04',
    title: 'Housing affordability forum',
    where: 'History Colorado Center',
    tag: 'Advocacy'
  }, {
    date: 'DEC 09',
    title: 'Annual installation gala',
    where: 'The Brown Palace',
    tag: 'Members'
  }];
  const news = [{
    date: 'Sep 22',
    title: 'Metro permits up 6% year over year'
  }, {
    date: 'Sep 10',
    title: 'Parade of Homes results: 42 homes, 18 days'
  }, {
    date: 'Aug 28',
    title: 'New energy code: what builders need to know'
  }];
  const advocacy = [{
    stat: '$20',
    label: 'returned for every $1 of dues, through code and fee work (HBA claim format)'
  }, {
    stat: '14',
    label: 'local ordinances reviewed with builder input this year'
  }, {
    stat: '3',
    label: 'impact-fee increases delayed or reduced'
  }];
  const sponsorTiers = [{
    tier: 'Presenting',
    names: ['Colorado Home Lending']
  }, {
    tier: 'Gold',
    names: ['Peak Windows & Doors', 'Mile High Lighting', 'Front Range Solar']
  }, {
    tier: 'Silver',
    names: ['Rocky Mountain Flooring', 'Alpine Title Co.', 'Foothills Cabinetry', 'Cascade Plumbing Supply']
  }];
  const eo = {
    visits: '18.4k',
    leads: '1,236',
    registrations: '6,812',
    nonMembers: nonMembers.length
  };
  window.HBA_DATA = {
    hba,
    builders,
    nonMembers,
    extraMembers,
    associates,
    neighborhoods,
    homes,
    products,
    parade,
    events,
    news,
    advocacy,
    sponsorTiers,
    eo,
    HERO,
    INT,
    P
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hba-presence/data.js", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/Landing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button: LB,
  Badge: LBadge,
  Card: LCard,
  Eyebrow: LEyebrow
} = window.HoodleDesignSystem_ee4a2a;
function LandingHero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0 88px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.08fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(LEyebrow, {
    align: "start",
    size: "sm",
    tone: "brand",
    rules: false
  }, "Hoodle for Vendors"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 60px/1.04 var(--font-sans)',
      letterSpacing: '-0.028em',
      color: 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, "Your Next Customer Is Building Their Next Home."), /*#__PURE__*/React.createElement(Lead, {
    style: {
      fontSize: 19,
      maxWidth: 500
    }
  }, "Connect with homebuilders, reach new homeowners, and grow your business where the new-construction journey begins."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(LB, {
    size: "lg",
    onClick: () => go('signup'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Grow My Business on Hoodle"), /*#__PURE__*/React.createElement(LB, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('pricing', {
      anchor: 'ads'
    })
  }, "Explore Advertising Opportunities")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      paddingTop: 8
    }
  }, [['hard-hat', 'Builders sourcing suppliers'], ['key-round', 'Buyers moving into new homes']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '400 14px var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16
  })), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 560
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: VD.HERO,
    alt: "New residential development",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '88%',
      height: 440,
      borderRadius: 'var(--radius-xl)'
    }
  }), /*#__PURE__*/React.createElement(Img, {
    src: VD.HERO2,
    alt: "Inside a newly built home",
    style: {
      position: 'absolute',
      right: 24,
      bottom: 0,
      width: 230,
      height: 190,
      borderRadius: 'var(--radius-lg)',
      border: '6px solid #fff',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 34,
      width: 330,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Evergreen Outdoor Co."), /*#__PURE__*/React.createElement(DemoTag, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, [['86', 'New leads'], ['14', 'Quote requests'], ['9', 'Builder connections']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 22px/1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px/1.3 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, l)))), /*#__PURE__*/React.createElement(LineChart, {
    data: VD.demoSeries,
    h: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      top: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['blinds', 'Motorized shades'], ['fence', 'Cedar privacy fence'], ['trees', 'Front-yard packages']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 14px 0 10px',
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: 'var(--shadow-md)',
      font: '500 13px var(--font-sans)',
      color: 'var(--ink-800)',
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16,
    color: "var(--teal-600)"
  }), t))))));
}
function Audiences({
  go
}) {
  const A = [{
    k: 'builder',
    t: 'Sell to Builders',
    s: 'Builders developing new residential communities need dependable suppliers and installers, lot after lot.',
    img: VD.EXT[11],
    icon: 'hard-hat',
    cta: 'Reach builders',
    b: ['Get discovered by residential builders', 'Showcase products, services and capabilities', 'Build professional relationships', 'Receive quote requests', 'Explore longer-term supply and installation work']
  }, {
    k: 'home',
    t: 'Sell to Homeowners',
    s: 'People buying and moving into new homes need a lot of things at once, and usually in the first 90 days.',
    img: VD.INT[1],
    icon: 'key-round',
    cta: 'Reach homeowners',
    b: ['Reach buyers preparing to move', 'Promote products needed right after purchase', 'Showcase home upgrades and services', 'Receive inquiries and quote requests', 'Build long-term customer relationships']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Head, {
    center: true,
    eyebrow: "Two audiences, one marketplace",
    title: "Builders and homeowners, in one place",
    sub: "Serve one audience or both. Your profile shows each side only what's relevant to them."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, A.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.k,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: a.img,
    style: {
      width: '100%',
      height: 230
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '500 26px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, a.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 15px/1.6 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, a.s), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, a.b.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      font: '400 15px/1.45 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--teal-600)",
    style: {
      marginTop: 1
    }
  }), x))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(LB, {
    variant: "secondary",
    onClick: () => go('signup'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, a.cta))))))));
}
function HowItWorks() {
  const S = [['store', 'Create your vendor business profile', 'Logo, service area, products and who you serve.'], ['credit-card', 'Choose a subscription and advertising strategy', 'A plan sets up your presence. Advertising adds reach.'], ['search', 'Get discovered by builders and homeowners', 'Appear in search, on profiles and in move-in journeys.'], ['messages-square', 'Manage leads, relationships, quotes and results', 'One dashboard from first message to accepted order.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "How Hoodle works",
    title: "Up and running in an afternoon"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 48,
      right: 48,
      height: 1,
      background: 'var(--border-default)'
    }
  }), S.map(([i, t, d], n) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: '#fff',
      border: '1px solid var(--border-default)',
      color: 'var(--teal-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-sans)',
      color: 'var(--teal-700)',
      letterSpacing: '.08em'
    }
  }, "STEP ", n + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px/1.35 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.55 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, d))))));
}
function AdGallery({
  go
}) {
  const [sel, setSel] = React.useState('neighborhood');
  const cur = PLACEMENTS.find(p => p.id === sel);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Head, {
    inverse: true,
    eyebrow: "Advertising opportunities",
    title: "Be there when the decision gets made",
    sub: "Six placements across the new-home journey. Every ad is labelled Sponsored, and none implies a builder's endorsement.",
    action: /*#__PURE__*/React.createElement(LB, {
      variant: "secondary",
      style: {
        borderColor: '#fff',
        color: '#fff',
        background: 'transparent'
      },
      onClick: () => go('pricing', {
        anchor: 'ads'
      })
    }, "See advertising packages")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '340px minmax(0,1fr)',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, PLACEMENTS.map(p => {
    const on = p.id === sel;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      type: "button",
      onClick: () => setSel(p.id),
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start',
        textAlign: 'left',
        padding: 16,
        borderRadius: 'var(--radius-lg)',
        border: '1px solid ' + (on ? 'rgba(255,255,255,.24)' : 'transparent'),
        background: on ? 'rgba(255,255,255,.08)' : 'transparent',
        cursor: 'pointer',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        flex: 'none',
        borderRadius: 9,
        background: on ? 'var(--teal-500)' : 'rgba(255,255,255,.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon,
      size: 17
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '500 15px var(--font-sans)'
      }
    }, p.label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '400 13px/1.45 var(--font-sans)',
        color: 'rgba(255,255,255,.65)',
        marginTop: 3
      }
    }, p.sub)));
  })), /*#__PURE__*/React.createElement("div", {
    key: sel,
    style: {
      animation: 'vpFade .35s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(cur.C, null)))));
}
function Industries({
  go
}) {
  const [more, setMore] = React.useState(false);
  const list = more ? VD.categories : VD.categories.slice(0, 12);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Head, {
    eyebrow: "Industries we serve",
    title: "Built for the trades and products of a new home"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,minmax(0,1fr))',
      gap: 12
    }
  }, list.map(c => /*#__PURE__*/React.createElement(IndustryTile, {
    key: c.id,
    c: c,
    onClick: () => go('results', {
      cat: c.id
    })
  })), more && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-strong)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.3 var(--font-sans)'
    }
  }, "Don't see yours? Suggest a category"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(LB, {
    variant: "ghost",
    onClick: () => setMore(!more),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: more ? 'chevron-up' : 'chevron-down',
      size: 16
    })
  }, more ? 'Show fewer' : `Show all ${VD.categories.length} categories`))));
}
function IndustryTile({
  c,
  onClick
}) {
  const [h, setH] = React.useState(false);
  const aud = {
    both: 'Builders & homeowners',
    builder: 'Mostly builders',
    homeowner: 'Mostly homeowners'
  }[c.aud];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: 16,
      minHeight: 124,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid ' + (h ? 'var(--teal-300)' : 'var(--border-subtle)'),
      background: h ? 'var(--teal-50)' : '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'all var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, aud));
}
function RoiPreview() {
  const K = [['Profile views', '4,812'], ['Ad impressions', '38.2k'], ['Ad clicks', '1,146'], ['Leads received', '86'], ['Quote requests', '14'], ['Builder connections', '9'], ['Orders', '11'], ['Advertising spend', '$1,200'], ['Lead conversion', '12.8%']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 0',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.4fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(LEyebrow, {
    align: "start",
    size: "sm",
    tone: "brand",
    rules: false
  }, "Vendor success & ROI"), /*#__PURE__*/React.createElement(H2, null, "See exactly what your listing and ads are doing"), /*#__PURE__*/React.createElement(Lead, null, "Views, clicks, leads, quotes and orders in one place, split by builder and homeowner. Return on ad spend appears only when revenue can actually be attributed.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-subtle)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Performance \xB7 last 30 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Example vendor dashboard")), /*#__PURE__*/React.createElement(DemoTag, null, "Demonstration data, not real results")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, K.map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: '14px 16px',
      borderRight: i % 3 < 2 ? '1px solid var(--border-subtle)' : 0,
      borderBottom: i < 6 ? '1px solid var(--border-subtle)' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 22px/1.2 var(--font-sans)',
      color: 'var(--text-strong)',
      marginTop: 4
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Leads by week"), /*#__PURE__*/React.createElement(LineChart, {
    data: VD.demoSeries,
    h: 110
  })))));
}
function FinalCta({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0',
      background: 'var(--teal-500)',
      color: '#fff',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(H2, {
    inverse: true,
    size: 44
  }, "Get Your Business in Front of the People Building What's Next."), /*#__PURE__*/React.createElement(LB, {
    size: "lg",
    variant: "ink",
    onClick: () => go('signup'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Join Hoodle as a Vendor")));
}
function LandingPage(p) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LandingHero, p), /*#__PURE__*/React.createElement(Audiences, p), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(AdGallery, p), /*#__PURE__*/React.createElement(Industries, p), /*#__PURE__*/React.createElement(RoiPreview, null), /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(PricingBlock, _extends({}, p, {
    compact: true
  })))), /*#__PURE__*/React.createElement(FinalCta, p));
}
Object.assign(window, {
  LandingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/Marketplace.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button: MB,
  Badge: MBadge,
  Tag: MTag,
  Input: MInput,
  Select: MSelect,
  Checkbox: MCheck,
  Card: MCard,
  IconButton: MIconButton
} = window.HoodleDesignSystem_ee4a2a;
const MODE_CATS = {
  homeowner: ['moving', 'coverings', 'landscaping', 'fencing', 'furniture', 'smarthome', 'outdoor', 'cleaning'],
  builder: ['windows', 'flooring', 'cabinets', 'landscaping', 'plumbing', 'hvac', 'roofing', 'painting']
};
const fitsMode = (v, mode) => v.serves === 'both' || v.serves === mode;
function ModeToggle({
  mode,
  setMode,
  inverse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: inverse ? 'rgba(255,255,255,.14)' : 'var(--ink-50)',
      border: inverse ? 0 : '1px solid var(--border-subtle)'
    }
  }, [['homeowner', 'house', "I'm a homeowner"], ['builder', 'hard-hat', "I'm a builder"]].map(([v, i, l]) => {
    const on = mode === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => setMode(v),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 38,
        padding: '0 16px',
        border: 0,
        borderRadius: 'var(--radius-pill)',
        background: on ? '#fff' : 'transparent',
        color: on ? 'var(--ink-900)' : inverse ? '#fff' : 'var(--text-muted)',
        font: '500 14px var(--font-sans)',
        cursor: 'pointer',
        boxShadow: on ? 'var(--shadow-sm)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 16
    }), l);
  }));
}
function SearchBar({
  q,
  setQ,
  city,
  setCity,
  cat,
  setCat,
  onSearch,
  mode
}) {
  const cats = [{
    value: '',
    label: 'All categories'
  }, ...VD.categories.map(c => ({
    value: c.id,
    label: c.name
  }))];
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch();
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr) auto',
      gap: 0,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px',
      height: 52
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: mode === 'builder' ? 'Search suppliers, trades or products' : 'Search services, products or businesses',
    style: {
      border: 0,
      outline: 'none',
      font: '400 15px var(--font-sans)',
      color: 'var(--text-strong)',
      width: '100%',
      background: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border-subtle)',
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(MSelect, {
    value: city,
    onChange: e => setCity(e.target.value),
    options: VD.cities,
    style: {
      border: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border-subtle)',
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(MSelect, {
    value: cat,
    onChange: e => setCat(e.target.value),
    options: cats
  })), /*#__PURE__*/React.createElement(MB, {
    size: "lg",
    type: "submit"
  }, "Search"));
}
function VendorCard({
  v,
  row,
  compact,
  go,
  onQuote,
  onContact,
  saved,
  onSave,
  mode
}) {
  const [h, setH] = React.useState(false);
  const open = () => go && go('profile', {
    id: v.id,
    mode
  });
  const actions = !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(MB, {
    size: "sm",
    onClick: () => onQuote(v)
  }, "Request quote"), /*#__PURE__*/React.createElement(MB, {
    size: "sm",
    variant: "secondary",
    onClick: () => onContact(v)
  }, "Contact vendor"), /*#__PURE__*/React.createElement(MB, {
    size: "sm",
    variant: "ghost",
    onClick: open
  }, "View profile"));
  const meta = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 17px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, v.name), v.sponsored && /*#__PURE__*/React.createElement(Sponsored, {
    by: v.name,
    why: `Shown because you're browsing ${VD.catName(v.cat)}${mode ? ' as a ' + mode : ''}.`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-700)',
      fontWeight: 500
    }
  }, VD.catName(v.cat)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), v.area)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.55 var(--font-sans)',
      color: 'var(--text-body)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, v.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, v.services.slice(0, 3).map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-50)',
      font: '400 12px var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    v: v.rating,
    n: v.reviews
  }), /*#__PURE__*/React.createElement(Serves, {
    s: v.serves
  })));
  const heart = onSave && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(MIconButton, {
    label: saved ? 'Saved' : 'Save vendor',
    variant: "overlay",
    size: "sm",
    active: saved,
    onClick: onSave,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16,
      style: saved ? {
        fill: 'var(--teal-500)'
      } : null
    })
  }));
  const base = {
    background: '#fff',
    borderRadius: 'var(--radius-card)',
    border: '1px solid ' + (v.sponsored ? 'var(--ink-200)' : 'var(--border-subtle)'),
    boxShadow: h ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'box-shadow var(--duration-base) var(--ease-standard)'
  };
  if (row) return /*#__PURE__*/React.createElement("article", {
    onClick: open,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      display: 'grid',
      gridTemplateColumns: '260px minmax(0,1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      minHeight: 220
    }
  }), heart, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    name: v.name,
    size: 44
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, meta, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6
    }
  }, actions)));
  return /*#__PURE__*/React.createElement("article", {
    onClick: open,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.img,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '16 / 9'
    }
  }), heart, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: -22
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    name: v.name,
    size: 48
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 18px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      flex: 1
    }
  }, meta, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, actions)));
}
function MarketHome({
  go,
  mode,
  setMode,
  onQuote,
  onContact,
  saved,
  toggleSave
}) {
  const [q, setQ] = React.useState('');
  const [city, setCity] = React.useState('All Denver metro');
  const [cat, setCat] = React.useState('');
  const pri = MODE_CATS[mode].map(id => VD.categories.find(c => c.id === id));
  const featured = VD.vendors.filter(v => v.sponsored && fitsMode(v, mode)).slice(0, 3);
  const fresh = VD.vendors.filter(v => !v.sponsored && fitsMode(v, mode)).slice(0, 3);
  const P = {
    go,
    onQuote,
    onContact,
    mode
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '72px 0 64px',
      background: 'var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: mode === 'builder' ? VD.EXT[11] : VD.EXT[5],
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: .38
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(16,24,40,.3), rgba(16,24,40,.75))'
    }
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(ModeToggle, {
    mode: mode,
    setMode: setMode,
    inverse: true
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 54px/1.06 var(--font-sans)',
      letterSpacing: '-0.025em',
      color: '#fff',
      maxWidth: 820,
      textWrap: 'balance'
    }
  }, mode === 'builder' ? 'Suppliers and trades for every community you build.' : 'Everything Your New Home Needs. All in One Place.'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 18px/1.55 var(--font-sans)',
      color: 'rgba(255,255,255,.85)',
      maxWidth: 600
    }
  }, mode === 'builder' ? 'Find materials, installation crews and supply partners serving the Denver metro.' : 'Discover trusted products, services, and professionals for your next chapter.'), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1000,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    q,
    setQ,
    city,
    setCity,
    cat,
    setCat,
    mode,
    onSearch: () => go('results', {
      q,
      city,
      cat,
      mode
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/32px var(--font-sans)',
      color: 'rgba(255,255,255,.7)'
    }
  }, "Popular:"), pri.slice(0, 5).map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    type: "button",
    onClick: () => go('results', {
      cat: c.id,
      mode
    }),
    style: {
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,.35)',
      background: 'rgba(255,255,255,.08)',
      color: '#fff',
      font: '500 13px var(--font-sans)',
      cursor: 'pointer'
    }
  }, c.name))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 26px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, mode === 'builder' ? 'Browse by trade' : 'Browse by what you need'), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, mode === 'builder' ? 'Prioritised for builders' : 'Prioritised for new homeowners')), /*#__PURE__*/React.createElement(MB, {
    variant: "ghost",
    onClick: () => go('results', {
      mode
    }),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "All ", VD.categories.length, " categories")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8,minmax(0,1fr))',
      gap: 12
    }
  }, pri.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    type: "button",
    onClick: () => go('results', {
      cat: c.id,
      mode
    }),
    style: {
      padding: '18px 12px',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, c.name)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 26px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, mode === 'builder' ? 'Featured suppliers' : 'Featured for new homeowners'), /*#__PURE__*/React.createElement(Sponsored, {
    why: "Featured vendors pay for this section. Results below are ranked by relevance."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, featured.map(v => /*#__PURE__*/React.createElement(VendorCard, _extends({
    key: v.id,
    v: v
  }, P, {
    saved: saved.has(v.id),
    onSave: () => toggleSave(v.id)
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '24px 0 88px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 26px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 20
    }
  }, "New on Hoodle"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, fresh.map(v => /*#__PURE__*/React.createElement(VendorCard, _extends({
    key: v.id,
    v: v
  }, P, {
    saved: saved.has(v.id),
    onSave: () => toggleSave(v.id)
  })))))));
}
function Results({
  go,
  params,
  mode,
  setMode,
  onQuote,
  onContact,
  saved,
  toggleSave
}) {
  const [q, setQ] = React.useState(params.q || '');
  const [city, setCity] = React.useState(params.city || 'All Denver metro');
  const [cat, setCat] = React.useState(params.cat || '');
  const [price, setPrice] = React.useState([]);
  const [rated, setRated] = React.useState(false);
  const [promo, setPromo] = React.useState(false);
  const [cert, setCert] = React.useState(false);
  const [spec, setSpec] = React.useState([]);
  React.useEffect(() => {
    setCat(params.cat || '');
    setQ(params.q || '');
    if (params.mode) setMode(params.mode);
  }, [params]);
  const base = VD.vendors.filter(v => fitsMode(v, mode) && (!cat || v.cat === cat) && (city === 'All Denver metro' || v.cities.includes(city)) && (!q || (v.name + v.desc + v.services.join(' ') + VD.catName(v.cat)).toLowerCase().includes(q.toLowerCase())));
  const list = base.filter(v => (!price.length || price.includes(v.price)) && (!rated || v.rating && v.rating >= 4) && (!promo || v.promo) && (!cert || v.certs.length) && (!spec.length || spec.some(s => v.specialties.includes(s))));
  const sp = list.find(v => v.sponsored);
  const organic = list.filter(v => v !== sp).sort((a, b) => (b.rating || 0) - (a.rating || 0));
  const specs = [...new Set(base.flatMap(v => v.specialties))];
  const tog = (arr, set, x) => set(arr.includes(x) ? arr.filter(y => y !== x) : [...arr, x]);
  const clear = () => {
    setPrice([]);
    setRated(false);
    setPromo(false);
    setCert(false);
    setSpec([]);
  };
  const P = {
    go,
    onQuote,
    onContact,
    mode
  };
  const FH = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      minHeight: '80vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(ModeToggle, {
    mode: mode,
    setMode: setMode
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('market');
    },
    style: {
      font: '500 14px var(--font-sans)'
    }
  }, "Marketplace home")), /*#__PURE__*/React.createElement(SearchBar, {
    q,
    setQ,
    city,
    setCity,
    cat,
    setCat,
    mode,
    onSearch: () => {}
  }))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: '248px minmax(0,1fr)',
      gap: 32,
      padding: '32px 32px 88px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FH, null, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, [{
    id: '',
    name: 'All categories'
  }, ...MODE_CATS[mode].map(id => VD.categories.find(c => c.id === id))].map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    type: "button",
    onClick: () => setCat(c.id),
    style: {
      textAlign: 'left',
      padding: '7px 10px',
      borderRadius: 8,
      border: 0,
      background: cat === c.id ? '#fff' : 'transparent',
      boxShadow: cat === c.id ? 'var(--shadow-xs)' : 'none',
      font: `${cat === c.id ? 600 : 400} 14px var(--font-sans)`,
      color: cat === c.id ? 'var(--teal-700)' : 'var(--text-body)',
      cursor: 'pointer'
    }
  }, c.name)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FH, null, "Price range"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, ['$', '$$', '$$$', 'Quote'].map(p => /*#__PURE__*/React.createElement(MTag, {
    key: p,
    selected: price.includes(p),
    onClick: () => tog(price, setPrice, p)
  }, p === 'Quote' ? 'Quote only' : p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FH, null, "Show only"), /*#__PURE__*/React.createElement(MCheck, {
    label: "Rated 4.0+ (vendors with reviews)",
    checked: rated,
    onChange: e => setRated(e.target ? e.target.checked : e)
  }), /*#__PURE__*/React.createElement(MCheck, {
    label: "Has a current offer",
    checked: promo,
    onChange: e => setPromo(e.target ? e.target.checked : e)
  }), /*#__PURE__*/React.createElement(MCheck, {
    label: "Lists a certification",
    checked: cert,
    onChange: e => setCert(e.target ? e.target.checked : e)
  })), specs.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FH, null, "Specialties"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, specs.map(s => /*#__PURE__*/React.createElement(MTag, {
    key: s,
    selected: spec.includes(s),
    onClick: () => tog(spec, setSpec, s)
  }, s)))), /*#__PURE__*/React.createElement(MB, {
    variant: "ghost",
    size: "sm",
    onClick: clear,
    style: {
      width: 'fit-content'
    }
  }, "Clear filters")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 26px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, cat ? VD.catName(cat) : 'All vendors', city !== 'All Denver metro' ? ' in ' + city : ' in Denver metro'), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, list.length, " ", list.length === 1 ? 'vendor' : 'vendors', " serving ", mode === 'builder' ? 'builders' : 'homeowners', " \xB7 sorted by relevance")), /*#__PURE__*/React.createElement(MSelect, {
    size: "sm",
    options: ['Best match', 'Highest rated', 'Newest'],
    defaultValue: "Best match"
  })), sp && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(VendorCard, _extends({
    row: true,
    v: sp
  }, P, {
    saved: saved.has(sp.id),
    onSave: () => toggleSave(sp.id)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      paddingLeft: 4
    }
  }, "One sponsored result per page. Everything below is ranked by relevance to your search.")), organic.map(v => /*#__PURE__*/React.createElement(VendorCard, _extends({
    row: true,
    key: v.id,
    v: {
      ...v,
      sponsored: false
    }
  }, P, {
    saved: saved.has(v.id),
    onSave: () => toggleSave(v.id)
  }))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 56,
      textAlign: 'center',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-strong)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search-x",
    size: 30,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 17px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "No vendors match yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: 380
    }
  }, "Try a wider area or fewer filters. New vendors join every week."), /*#__PURE__*/React.createElement(MB, {
    variant: "secondary",
    onClick: () => {
      clear();
      setCity('All Denver metro');
      setQ('');
    }
  }, "Reset search")))));
}
Object.assign(window, {
  VendorCard,
  MarketHome,
  Results,
  ModeToggle,
  fitsMode
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/Marketplace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/Placements.jsx
try { (() => {
const {
  Button: PlB,
  Badge: PlBadge
} = window.HoodleDesignSystem_ee4a2a;
function Frame({
  url,
  children,
  h = 380
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-lg)',
      background: '#fff',
      height: h,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 12px',
      background: 'var(--ink-50)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--ink-200)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      flex: 1,
      height: 20,
      borderRadius: 6,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      font: '400 11px/20px var(--font-sans)',
      color: 'var(--ink-500)',
      padding: '0 10px'
    }
  }, url)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      position: 'relative'
    }
  }, children));
}
function MiniVendor({
  v,
  cta = 'Request quote',
  sponsored = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.img,
    style: {
      width: '100%',
      height: 78
    }
  }), sponsored && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      left: 6
    }
  }, /*#__PURE__*/React.createElement(Sponsored, {
    by: v.name,
    inverse: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, VD.catName(v.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: '500 11px var(--font-sans)',
      color: 'var(--teal-700)'
    }
  }, cta, " \u2192")));
}
const pv = id => VD.vendors.find(v => v.id === id);
function PlacementNeighborhood() {
  return /*#__PURE__*/React.createElement(Frame, {
    url: "hoodle.com/neighborhoods/cedar-ridge-aurora"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 4,
      height: 110
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: VD.EXT[0],
    style: {
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement(Img, {
    src: VD.EXT[9],
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Cedar Ridge"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Aurora, CO \xB7 4 builders \xB7 from $489k"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 12,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Planning your new home? Explore local services"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Sponsored")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MiniVendor, {
    v: pv('mileshade')
  }), /*#__PURE__*/React.createElement(MiniVendor, {
    v: pv('evergreen')
  }), /*#__PURE__*/React.createElement(MiniVendor, {
    v: pv('bluebird'),
    cta: "Get a moving quote"
  })))));
}
function PlacementBuilder() {
  return /*#__PURE__*/React.createElement(Frame, {
    url: "hoodle.com/builders/front-range-homes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    name: "Front Range Homes",
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Front Range Homes"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Production builder \xB7 Aurora"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '600 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 14,
    color: "var(--teal-600)"
  }), "Builder's design partners"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)',
      margin: '2px 0 8px'
    }
  }, "Listed by Front Range Homes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(PlBadge, {
    tone: "neutral"
  }, "Keystone Cabinet & Stone"), /*#__PURE__*/React.createElement(PlBadge, {
    tone: "neutral"
  }, "Summit Floor Supply"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--ink-300)',
      borderRadius: 'var(--radius-md)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Local suppliers in this area"), /*#__PURE__*/React.createElement(Sponsored, {
    why: "Shown to visitors of builder pages in Aurora."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 10px var(--font-sans)',
      color: 'var(--text-muted)',
      margin: '2px 0 8px'
    }
  }, "Paid placements. Not affiliated with or endorsed by Front Range Homes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(MiniVendor, {
    v: pv('peak'),
    sponsored: false,
    cta: "View supplier"
  }), /*#__PURE__*/React.createElement(MiniVendor, {
    v: pv('evergreen'),
    sponsored: false,
    cta: "View supplier"
  })))));
}
function PlacementMarket() {
  const rows = [pv('evergreen'), pv('frfence'), pv('alpine')];
  return /*#__PURE__*/React.createElement(Frame, {
    url: "hoodle.com/marketplace/landscaping?near=aurora"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Landscaping near Aurora ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\xB7 14 vendors")), rows.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.id,
    style: {
      display: 'flex',
      gap: 10,
      padding: 10,
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (i === 0 ? 'var(--ink-200)' : 'var(--border-subtle)'),
      background: i === 0 ? 'var(--ink-50)' : '#fff',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.img,
    style: {
      width: 64,
      height: 48,
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, v.name), i === 0 && /*#__PURE__*/React.createElement(Sponsored, {
    by: v.name
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, VD.catName(v.cat), " \xB7 ", v.area.split(',')[0])), /*#__PURE__*/React.createElement(Rating, {
    v: v.rating,
    n: v.reviews,
    size: 11
  })))));
}
function PlacementMoveIn() {
  return /*#__PURE__*/React.createElement(Frame, {
    url: "hoodle.com/my-home/move-in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Your new home \xB7 Cedar Ridge"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "18 days until move-in")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['Before moving in', 'First 30 days', 'First 90 days', 'Long-term'].map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      font: '500 11px var(--font-sans)',
      background: i === 0 ? 'var(--teal-500)' : 'var(--ink-50)',
      color: i === 0 ? '#fff' : 'var(--ink-600)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: VD.INT[0],
    style: {
      width: '100%',
      height: 110
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(Sponsored, {
    by: "Mile High Shade & Blind",
    why: "Shown because you said you move in within 30 days.",
    inverse: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Shades installed before you move in"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Mile High Shade & Blind \xB7 15% off whole-home"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PlB, {
    size: "sm"
  }, "Book a free measure")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Your checklist"), ['Schedule movers', 'Window coverings', 'Internet setup', 'Security system'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      font: '400 12px var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i === 0 ? 'circle-check' : 'circle',
    size: 14,
    color: i === 0 ? 'var(--teal-600)' : 'var(--ink-300)'
  }), t))))));
}
function PlacementEmail() {
  return /*#__PURE__*/React.createElement(Frame, {
    url: "Inbox \xB7 Hoodle <hello@hoodle.com>"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-50)',
      height: '100%',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      maxWidth: 380,
      margin: '0 auto',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: vLogo('teal'),
    alt: "hoodle",
    style: {
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Your first 30 days: services worth planning"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px/1.5 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, "You told us you're moving into Aurora this month. Here are a few things new homeowners book early."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: 10,
      border: '1px solid var(--border-subtle)',
      borderRadius: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: VD.EXT[4],
    style: {
      width: 64,
      height: 48,
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 9px var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Sponsored"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Free backyard design consult"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 10px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Evergreen Outdoor Co."))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 9px/1.5 var(--font-sans)',
      color: 'var(--ink-500)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 8,
      marginTop: 4
    }
  }, "You're getting this because you opted in to move-in tips. ", /*#__PURE__*/React.createElement("u", null, "Email preferences"), " \xB7 ", /*#__PURE__*/React.createElement("u", null, "Unsubscribe"))))));
}
function PlacementCategory() {
  const v = pv('evergreen');
  return /*#__PURE__*/React.createElement(Frame, {
    url: "hoodle.com/marketplace/landscaping/aurora"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Landscaping in Aurora"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: v.img,
    style: {
      width: '100%',
      height: 170
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      background: 'var(--ink-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Sponsored, {
    by: v.name,
    why: "Featured Landscaping vendor for the Aurora market."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 10px var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--teal-700)'
    }
  }, "Featured landscaping vendor \xB7 Aurora"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px/1.5 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, v.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(PlB, {
    size: "sm"
  }, "Request a quote")))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12
  }), "Slot limits and exclusivity are set by Hoodle per market.")));
}
const PLACEMENTS = [{
  id: 'neighborhood',
  label: 'Neighborhood pages',
  sub: 'Local services module for people exploring a community',
  C: PlacementNeighborhood,
  icon: 'house'
}, {
  id: 'builder',
  label: 'Builder profile pages',
  sub: 'Supplier discovery, kept apart from the builder\'s own partners',
  C: PlacementBuilder,
  icon: 'hard-hat'
}, {
  id: 'market',
  label: 'Vendor marketplace',
  sub: 'Featured position inside relevant category results',
  C: PlacementMarket,
  icon: 'store'
}, {
  id: 'movein',
  label: 'Move-in dashboards',
  sub: 'Recommendations matched to a homeowner\'s move-in stage',
  C: PlacementMoveIn,
  icon: 'key-round'
}, {
  id: 'email',
  label: 'Sponsored emails',
  sub: 'Offers inside opted-in homeowner emails',
  C: PlacementEmail,
  icon: 'mail'
}, {
  id: 'category',
  label: 'Featured category',
  sub: 'Premium spot for one category in one market',
  C: PlacementCategory,
  icon: 'star'
}];
Object.assign(window, {
  PLACEMENTS,
  Frame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/Placements.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/Pricing.jsx
try { (() => {
const {
  Button: RB,
  Badge: RBadge,
  Card: RCard,
  Dialog: RDialog,
  Select: RSelect,
  Input: RInput,
  Eyebrow: REyebrow
} = window.HoodleDesignSystem_ee4a2a;
function BillingToggle({
  annual,
  setAnnual
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-50)',
      border: '1px solid var(--border-subtle)'
    }
  }, [[false, 'Monthly'], [true, 'Annual · save ~20%']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    onClick: () => setAnnual(v),
    style: {
      height: 34,
      padding: '0 16px',
      border: 0,
      borderRadius: 'var(--radius-pill)',
      background: annual === v ? '#fff' : 'transparent',
      boxShadow: annual === v ? 'var(--shadow-sm)' : 'none',
      font: '500 13px var(--font-sans)',
      color: annual === v ? 'var(--text-strong)' : 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, l)));
}
const planPrice = (p, annual) => annual ? Math.round(p.monthly * 0.8) : p.monthly;
function PlanCard({
  p,
  annual,
  selected,
  onPick,
  cta = 'Choose '
}) {
  const on = selected || selected === undefined && p.pop;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 28,
      borderRadius: 'var(--radius-xl)',
      border: on ? '2px solid var(--teal-500)' : '1px solid var(--border-default)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      boxShadow: on ? 'var(--shadow-md)' : 'none'
    }
  }, p.pop && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -12,
      left: 24
    }
  }, /*#__PURE__*/React.createElement(RBadge, {
    tone: "solid"
  }, "Most popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 44px/1 var(--font-sans)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }, "$", planPrice(p, annual)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "/ month", annual ? ', billed annually*' : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, p.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      font: '400 14px/1.45 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--teal-600)",
    style: {
      marginTop: 1
    }
  }), f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(RB, {
    fullWidth: true,
    variant: on ? 'primary' : 'secondary',
    onClick: () => onPick && onPick(p.id)
  }, selected ? 'Selected' : cta + p.name)));
}
function AdProductRow({
  a,
  onAsk
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 10,
      background: 'var(--teal-50)',
      color: 'var(--teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, a.name), /*#__PURE__*/React.createElement(Proposed, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, a.where)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-body)',
      width: 130,
      textAlign: 'right'
    }
  }, "Custom pricing"), /*#__PURE__*/React.createElement(RB, {
    size: "sm",
    variant: "secondary",
    onClick: () => onAsk(a.id)
  }, "Contact Hoodle"));
}
function PricingBlock({
  go,
  compact,
  openAd
}) {
  const [annual, setAnnual] = React.useState(false);
  const ads = compact ? VD.adProducts.slice(0, 4) : VD.adProducts;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(REyebrow, {
    align: "start",
    size: "sm",
    tone: "brand",
    rules: false
  }, "Step 1 \xB7 Subscription"), /*#__PURE__*/React.createElement(H2, null, "Establish your business presence"), /*#__PURE__*/React.createElement(Lead, null, "Your subscription puts your business profile, catalog, quotes and messages on Hoodle.")), /*#__PURE__*/React.createElement(BillingToggle, {
    annual: annual,
    setAnnual: setAnnual
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      maxWidth: 860
    }
  }, VD.plans.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.id,
    p: p,
    annual: annual,
    onPick: () => go('signup', {
      plan: p.id,
      annual
    })
  }))), annual && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 12
    }
  }, "*Annual billing is about 20% off monthly pricing. Final annual amount is shown at checkout.")), /*#__PURE__*/React.createElement("div", {
    id: "ads"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 680,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(REyebrow, {
    align: "start",
    size: "sm",
    tone: "brand",
    rules: false
  }, "Step 2 \xB7 Advertising, optional"), /*#__PURE__*/React.createElement(H2, null, "Add visibility when you want more reach"), /*#__PURE__*/React.createElement(Lead, null, "Advertising is a separate purchase on top of any plan. Packages below are proposed and priced per market. Talk to Hoodle for availability.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, ads.map(a => /*#__PURE__*/React.createElement(AdProductRow, {
    key: a.id,
    a: a,
    onAsk: id => openAd(id)
  }))), compact && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(RB, {
    variant: "ghost",
    onClick: () => go('pricing', {
      anchor: 'ads'
    }),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "All plans and packages"))));
}
function PricingPage(p) {
  const faqs = [['Is a subscription required to advertise?', 'Yes. A subscription creates your business profile, which is where every ad sends people.'], ['How do renewals work?', 'Subscriptions renew each month or year on your billing date. Sponsorship terms and renewal dates are listed on each campaign invoice before you approve it.'], ['Can I change plans?', 'Upgrade any time and the difference is prorated. Downgrades take effect at the end of your billing period.'], ['Is there a fee on orders?', 'Not today. Hoodle may introduce a marketplace transaction fee in the future. Any fee would be announced in advance and shown in your payout settings.']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(REyebrow, {
    size: "sm",
    tone: "brand"
  }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 52px/1.08 var(--font-sans)',
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "Subscribe for presence. Advertise for reach."), /*#__PURE__*/React.createElement(Lead, {
    style: {
      maxWidth: 620
    }
  }, "Two separate purchases. Start with a plan, then add advertising in the markets and categories that matter to you."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 0 88px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(PricingBlock, p))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(RCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Marketplace Sponsor Ads"), /*#__PURE__*/React.createElement(RBadge, {
    tone: "success",
    dot: true
  }, "Available today")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      margin: '10px 0 0'
    }
  }, "Set a bid and budget from your dashboard to be featured in marketplace categories. Placement is ranked by your bid and Hoodle Score.")), /*#__PURE__*/React.createElement(RCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Fixed-price sponsorships"), /*#__PURE__*/React.createElement(Proposed, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      margin: '10px 0 0'
    }
  }, "A set monthly price for a specific placement, market or neighborhood. Slot counts and exclusivity are set by Hoodle and shown before you buy.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 0 96px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(H2, {
    size: 30
  }, "Billing questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, faqs.map(([q, a]) => /*#__PURE__*/React.createElement("details", {
    key: q,
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      font: '500 16px var(--font-sans)',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: '400 15px/1.6 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, a)))))));
}
function AdInquiryDialog({
  open,
  pkg,
  onClose,
  onSent,
  vendorName
}) {
  const [sent, setSent] = React.useState(false);
  const [p, setP] = React.useState(pkg || 'neighborhood');
  React.useEffect(() => {
    if (open) {
      setSent(false);
      setP(pkg || 'neighborhood');
    }
  }, [open, pkg]);
  const prod = VD.adProducts.find(a => a.id === p);
  return /*#__PURE__*/React.createElement(RDialog, {
    open: open,
    title: sent ? 'Request sent' : 'Request an advertising package',
    onClose: onClose,
    width: 520,
    footer: sent ? /*#__PURE__*/React.createElement(RB, {
      onClick: onClose
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RB, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(RB, {
      onClick: () => {
        setSent(true);
        onSent && onSent(prod);
      }
    }, "Send request"))
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 32,
    color: "var(--success-500)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Hoodle's partnerships team will confirm availability and pricing for ", /*#__PURE__*/React.createElement("b", null, prod.name), ". Nothing is charged until you approve a written quote."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Prototype only. No request was sent.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(RSelect, {
    label: "Package",
    value: p,
    onChange: e => setP(e.target.value),
    options: VD.adProducts.map(a => ({
      value: a.id,
      label: a.name
    }))
  }), p === 'neighborhood' ? /*#__PURE__*/React.createElement(RSelect, {
    label: "Neighborhood",
    options: VD.neighborhoods,
    defaultValue: VD.neighborhoods[0]
  }) : /*#__PURE__*/React.createElement(RSelect, {
    label: "Market",
    options: VD.cities.slice(1),
    defaultValue: "Aurora"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(RSelect, {
    label: "Category",
    options: VD.categories.map(c => c.name),
    defaultValue: "Landscaping"
  }), /*#__PURE__*/React.createElement(RSelect, {
    label: "Start",
    options: ['November 2026', 'December 2026', 'January 2027'],
    defaultValue: "November 2026"
  })), /*#__PURE__*/React.createElement(RInput, {
    label: "Business",
    defaultValue: vendorName || 'Evergreen Outdoor Co.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderRadius: 'var(--radius-md)',
      background: 'var(--ink-50)',
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-body)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    color: "var(--ink-500)",
    style: {
      marginTop: 2
    }
  }), "Pricing for this package hasn't been published. Hoodle will reply with price, slot availability and renewal terms.")));
}
Object.assign(window, {
  PricingBlock,
  PricingPage,
  PlanCard,
  BillingToggle,
  planPrice,
  AdInquiryDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/Profile.jsx
try { (() => {
const {
  Button: FB,
  Badge: FBadge,
  Tabs: FTabs,
  Card: FCard,
  Dialog: FDialog,
  Input: FInput,
  Select: FSelect,
  Tag: FTag
} = window.HoodleDesignSystem_ee4a2a;
const vCatalog = v => VD.catalog[v.id] || v.services.map((s, i) => ({
  id: v.id + i,
  name: s,
  kind: 'Service',
  price: 'Quote only',
  aud: v.serves === 'both' ? i % 2 ? 'homeowner' : 'builder' : v.serves,
  img: [v.img, ...VD.EXT, ...VD.INT][i + 3],
  desc: v.desc
}));
function QuoteDialog({
  v,
  open,
  onClose,
  mode,
  product,
  onSent
}) {
  const canB = v && v.serves !== 'homeowner',
    canH = v && v.serves !== 'builder';
  const [who, setWho] = React.useState('homeowner');
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open && v) {
      setSent(false);
      setWho(mode === 'builder' && canB ? 'builder' : canH ? 'homeowner' : 'builder');
    }
  }, [open, v && v.id]);
  if (!v) return null;
  const items = vCatalog(v).filter(p => p.aud === who || p.aud === 'both').map(p => p.name);
  return /*#__PURE__*/React.createElement(FDialog, {
    open: open,
    onClose: onClose,
    width: 560,
    title: sent ? 'Quote request sent' : 'Request a quote from ' + v.name,
    footer: sent ? /*#__PURE__*/React.createElement(FB, {
      onClick: onClose
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FB, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(FB, {
      onClick: () => {
        setSent(true);
        onSent && onSent(v, who);
      }
    }, "Send request"))
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 32,
    color: "var(--success-500)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, v.name, " will reply in your Hoodle messages, usually within a business day. Your contact details are shared only with this vendor."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Prototype only. Nothing was sent.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, canB && canH && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [['homeowner', 'For my home'], ['builder', 'For a builder project']].map(([k, l]) => /*#__PURE__*/React.createElement(FTag, {
    key: k,
    selected: who === k,
    onClick: () => setWho(k)
  }, l))), who === 'homeowner' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FSelect, {
    label: "What do you need?",
    options: items.length ? items : v.services,
    defaultValue: product || undefined
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Neighborhood or address",
    defaultValue: "Cedar Ridge, Aurora"
  }), /*#__PURE__*/React.createElement(FSelect, {
    label: "When?",
    options: ['Before I move in', 'Within 30 days', '1–3 months', 'Just planning'],
    defaultValue: "Within 30 days"
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "Budget (optional)",
    placeholder: "e.g. $5,000\u20138,000"
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Details",
    rows: 3,
    placeholder: "Size of the area, style you like, anything the vendor should know"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FSelect, {
    label: "Category",
    options: v.services,
    defaultValue: product || undefined
  }), /*#__PURE__*/React.createElement(FSelect, {
    label: "Project type",
    options: ['New community', 'Additional phase', 'Model homes', 'Scattered lots', 'Common areas']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Location",
    defaultValue: "Aurora, CO"
  }), /*#__PURE__*/React.createElement(FInput, {
    label: "Quantity / volume",
    placeholder: "e.g. 48 lots, phase 2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(FInput, {
    label: "Estimated scope",
    placeholder: "Front yards, per plan"
  }), /*#__PURE__*/React.createElement(FSelect, {
    label: "Desired timeline",
    options: ['Start within 30 days', 'Next quarter', '6+ months', 'Budgeting only']
  })), /*#__PURE__*/React.createElement(FInput, {
    label: "Budget (optional)",
    placeholder: "Per lot or total"
  }), /*#__PURE__*/React.createElement(UploadSlot, {
    label: "Plans or spec sheets",
    h: 64
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Additional requirements",
    rows: 2,
    placeholder: "Insurance, HOA rules, warranty expectations"
  }))));
}
function MessageDialog({
  v,
  open,
  onClose,
  onSent
}) {
  const [sent, setSent] = React.useState(false);
  const [t, setT] = React.useState('');
  React.useEffect(() => {
    if (open && v) {
      setSent(false);
      setT(`Hi ${v.name}, I found you on Hoodle and have a question about your ${v.services[0].toLowerCase()}.`);
    }
  }, [open, v && v.id]);
  if (!v) return null;
  return /*#__PURE__*/React.createElement(FDialog, {
    open: open,
    onClose: onClose,
    width: 480,
    title: sent ? 'Message sent' : 'Message ' + v.name,
    footer: sent ? /*#__PURE__*/React.createElement(FB, {
      onClick: onClose
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FB, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(FB, {
      onClick: () => {
        setSent(true);
        onSent && onSent(v);
      }
    }, "Send"))
  }, sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Your message is in your Hoodle inbox. You'll get an email when ", v.name, " replies.") : /*#__PURE__*/React.createElement(TextArea, {
    label: "Message",
    value: t,
    onChange: e => setT(e.target.value),
    rows: 4
  }));
}
function ConnectDialog({
  v,
  open,
  onClose,
  onSent
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!v) return null;
  return /*#__PURE__*/React.createElement(FDialog, {
    open: open,
    onClose: onClose,
    width: 480,
    title: sent ? 'Connection requested' : 'Connect with ' + v.name,
    footer: sent ? /*#__PURE__*/React.createElement(FB, {
      onClick: onClose
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FB, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(FB, {
      onClick: () => {
        setSent(true);
        onSent && onSent(v);
      }
    }, "Send request"))
  }, sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, v.name, " will see your request in Builder Connections. Once accepted, you can share project details and quotes directly.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Builder connections let you keep a supplier relationship, share quotes and message across projects."), /*#__PURE__*/React.createElement(FInput, {
    label: "Your company",
    defaultValue: "Front Range Homes"
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Note (optional)",
    rows: 2,
    placeholder: "Communities or phases you're sourcing for"
  })));
}
function Fact({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flex: 'none',
      borderRadius: 9,
      background: 'var(--ink-50)',
      color: 'var(--ink-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/1.45 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, value)));
}
function ProfilePage({
  params,
  go,
  mode,
  onQuote,
  onContact,
  onConnect,
  saved,
  toggleSave,
  me,
  notify
}) {
  const base = VD.vendors.find(x => x.id === params.id) || VD.vendors[0];
  const v = me && base.id === 'evergreen' ? {
    ...base,
    name: me.biz,
    desc: me.desc,
    serves: me.serves,
    cat: me.cat
  } : base;
  const tabs = [{
    value: 'overview',
    label: 'Overview'
  }, ...(v.serves !== 'homeowner' && v.builder ? [{
    value: 'builders',
    label: 'For Builders'
  }] : []), ...(v.serves !== 'builder' && v.home ? [{
    value: 'homeowners',
    label: 'For Homeowners'
  }] : []), {
    value: 'catalog',
    label: 'Products & services',
    count: vCatalog(v).length
  }, {
    value: 'portfolio',
    label: 'Portfolio'
  }, {
    value: 'reviews',
    label: 'Reviews',
    count: v.reviews || undefined
  }];
  const [tab, setTab] = React.useState('overview');
  React.useEffect(() => setTab(params.tab || (mode === 'builder' && tabs.some(t => t.value === 'builders') ? 'builders' : 'overview')), [params.id]);
  const isSaved = saved.has(v.id);
  const port = [v.img, ...VD.EXT.slice(0, 3), ...VD.INT.slice(0, 2)];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('market');
    }
  }, "Marketplace"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('results', {
        cat: v.cat
      });
    }
  }, VD.catName(v.cat)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, v.name)), /*#__PURE__*/React.createElement(Img, {
    src: v.img,
    style: {
      width: '100%',
      height: 320,
      borderRadius: 'var(--radius-xl)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-end',
      marginTop: -48,
      padding: '0 28px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      boxShadow: 'var(--shadow-md)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    name: v.name,
    size: 112
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 36px/1.15 var(--font-sans)',
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-700)',
      fontWeight: 500
    }
  }, VD.catName(v.cat)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), v.area), /*#__PURE__*/React.createElement(Rating, {
    v: v.rating,
    n: v.reviews,
    size: 14
  }), /*#__PURE__*/React.createElement(Serves, {
    s: v.serves
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement(FB, {
    variant: "ghost",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16,
      style: isSaved ? {
        fill: 'var(--teal-500)'
      } : null
    }),
    onClick: () => toggleSave(v.id)
  }, isSaved ? 'Saved' : 'Save'), /*#__PURE__*/React.createElement(FB, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    }),
    onClick: () => onContact(v)
  }, "Send message"), v.serves !== 'homeowner' && /*#__PURE__*/React.createElement(FB, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "handshake",
      size: 16
    }),
    onClick: () => onConnect(v)
  }, "Connect"), /*#__PURE__*/React.createElement(FB, {
    onClick: () => onQuote(v)
  }, "Request quote"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(FTabs, {
    tabs: tabs,
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 48,
      paddingTop: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, tab === 'overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.65 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, v.desc)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 12
    }
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, v.services.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-50)',
      font: '400 14px var(--font-sans)',
      color: 'var(--ink-800)'
    }
  }, s)))), v.serves === 'both' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, [['builders', 'hard-hat', 'For Builders', v.builder.capacity], ['homeowners', 'house', 'For Homeowners', v.home.offers.slice(0, 2).join(', ')]].map(([k, i, t, s]) => /*#__PURE__*/React.createElement(FCard, {
    key: k,
    interactive: true,
    padding: 20,
    onClick: () => setTab(k)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    color: "var(--teal-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, s)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, port.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement(Img, {
    key: i,
    src: s,
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-md)'
    }
  })))), tab === 'builders' && v.builder && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Working with builders"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Fact, {
    icon: "gauge",
    label: "Volume capacity",
    value: v.builder.capacity
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: "map",
    label: "Geographic coverage",
    value: v.builder.coverage
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: "briefcase",
    label: "Project experience",
    value: v.builder.experience
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: "file-text",
    label: "Commercial inquiries",
    value: v.builder.inquiry
  })), /*#__PURE__*/React.createElement(FCard, {
    tone: "sunken",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Sourcing for a community?"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Send scope, volume and timeline in one request.")), /*#__PURE__*/React.createElement(FB, {
    onClick: () => onQuote(v, 'builder')
  }, "Request a builder quote")))), tab === 'homeowners' && v.home && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "For your new home"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, v.home.offers.map((o, i) => /*#__PURE__*/React.createElement(FCard, {
    key: o,
    padding: 0,
    interactive: true,
    onClick: () => onQuote(v, 'homeowner'),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: port[i % port.length],
    style: {
      width: '100%',
      height: 130
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, o), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    color: "var(--teal-600)"
  }))))), /*#__PURE__*/React.createElement(Fact, {
    icon: "wrench",
    label: "Installation",
    value: v.home.install
  })), tab === 'catalog' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap: 18
    }
  }, vCatalog(v).map(p => /*#__PURE__*/React.createElement(FCard, {
    key: p.id,
    padding: 0,
    interactive: true,
    onClick: () => go('product', {
      id: v.id,
      pid: p.id
    }),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: p.img,
    style: {
      width: '100%',
      aspectRatio: '16 / 9'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement(FBadge, {
    tone: "neutral"
  }, p.kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "For ", p.aud === 'builder' ? 'builders' : p.aud === 'homeowner' ? 'homeowners' : 'builders & homeowners'))))), tab === 'portfolio' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, port.map((s, i) => /*#__PURE__*/React.createElement(Img, {
    key: i,
    src: s,
    style: {
      width: '100%',
      aspectRatio: i === 0 ? 'auto' : '1',
      gridRow: i === 0 ? 'span 2' : 'auto',
      gridColumn: i === 0 ? 'span 2' : 'auto',
      height: i === 0 ? '100%' : 'auto',
      borderRadius: 'var(--radius-md)'
    }
  }))), tab === 'reviews' && (v.rating ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px minmax(0,1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 48px/1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, v.rating.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      margin: '6px 0 16px'
    }
  }, v.reviews, " reviews"), [5, 4, 3, 2, 1].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, s, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 3,
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: [78, 15, 4, 2, 1][i] + '%',
      height: '100%',
      borderRadius: 3,
      background: 'var(--teal-500)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DemoTag, null, "Sample reviews for the prototype"), [['Jordan P.', 'Homeowner · Aurora', 'Responsive and easy to schedule. The crew finished in two days.', true], ['Purchasing team', 'Builder · south metro', 'Consistent on per-lot pricing across two phases.', false]].map(([n, r, t, ver]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      paddingBottom: 16,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, r), ver && /*#__PURE__*/React.createElement(FBadge, {
    tone: "success"
  }, "Verified order")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: '400 14px/1.6 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, t))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48,
      textAlign: 'center',
      border: '1px dashed var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-square-dashed",
    size: 28,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 16px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "No reviews yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: 380
    }
  }, "Reviews come from customers who ordered or requested a quote through Hoodle.")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'sticky',
      top: 96
    }
  }, v.promo && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--teal-500)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--teal-100)'
    }
  }, "Current offer"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 17px/1.4 var(--font-sans)',
      marginTop: 6
    }
  }, v.promo), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(FB, {
    variant: "ink",
    size: "sm",
    onClick: () => onQuote(v, 'homeowner')
  }, "Claim offer"))), /*#__PURE__*/React.createElement(FCard, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Fact, {
    icon: "map-pin",
    label: "Service locations",
    value: v.cities.join(', ')
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: "calendar-clock",
    label: "Availability",
    value: v.avail
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: "building-2",
    label: "In business since",
    value: v.since
  }), /*#__PURE__*/React.createElement(Fact, {
    icon: "award",
    label: "Certifications",
    value: v.certs.length ? v.certs.join(', ') : 'None listed'
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      notify('Thanks. Hoodle will review this listing.');
    },
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flag",
    size: 14
  }), "Report this listing")))));
}
function ProductPage({
  params,
  go,
  onQuote,
  onContact,
  mode
}) {
  const v = VD.vendors.find(x => x.id === params.id) || VD.vendors[0];
  const all = vCatalog(v);
  const p = all.find(x => x.id === params.pid) || all[0];
  const [g, setG] = React.useState(0);
  const imgs = [p.img, ...VD.INT.slice(0, 3)];
  return /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: '16px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('profile', {
        id: v.id
      });
    }
  }, v.name), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('profile', {
        id: v.id,
        tab: 'catalog'
      });
    }
  }, "Products & services"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: imgs[g],
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-xl)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10
    }
  }, imgs.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => setG(i),
    style: {
      padding: 0,
      border: i === g ? '2px solid var(--teal-500)' : '2px solid transparent',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'none'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: s,
    style: {
      width: '100%',
      aspectRatio: '4 / 3'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(FBadge, {
    tone: "neutral"
  }, p.kind), /*#__PURE__*/React.createElement(FBadge, {
    tone: "brand"
  }, "For ", p.aud === 'builder' ? 'builders' : p.aud === 'homeowner' ? 'homeowners' : 'builders & homeowners')), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 34px/1.15 var(--font-sans)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.015em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 24px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, p.price), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.65 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FB, {
    size: "lg",
    onClick: () => onQuote(v, p.aud === 'builder' ? 'builder' : 'homeowner', p.name)
  }, "Request a quote"), /*#__PURE__*/React.createElement(FB, {
    size: "lg",
    variant: "secondary",
    onClick: () => onContact(v)
  }, "Ask a question")), /*#__PURE__*/React.createElement(FCard, {
    interactive: true,
    padding: 16,
    onClick: () => go('profile', {
      id: v.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    name: v.name,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    v: v.rating,
    n: v.reviews,
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, v.area))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-400)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 22px var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 16
    }
  }, "More from ", v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 18
    }
  }, all.filter(x => x.id !== p.id).slice(0, 3).map(x => /*#__PURE__*/React.createElement(FCard, {
    key: x.id,
    padding: 0,
    interactive: true,
    onClick: () => go('product', {
      id: v.id,
      pid: x.id
    }),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: x.img,
    style: {
      width: '100%',
      aspectRatio: '16 / 9'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, x.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, x.price)))))));
}
Object.assign(window, {
  ProfilePage,
  ProductPage,
  QuoteDialog,
  MessageDialog,
  ConnectDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/Signup.jsx
try { (() => {
const {
  Button: GB,
  Badge: GBadge,
  Card: GCard,
  Input: GInput,
  Select: GSelect,
  Radio: GRadio,
  Switch: GSwitch,
  Tag: GTag,
  Checkbox: GCheck
} = window.HoodleDesignSystem_ee4a2a;
const STEPS = ['Account', 'Plan', 'Payment', 'Business profile', 'First listing', 'Go live'];
function TextArea({
  label,
  value,
  onChange,
  rows = 3,
  placeholder
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: onChange,
    rows: rows,
    placeholder: placeholder,
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none'
    }
  }));
}
function UploadSlot({
  label,
  h = 96
}) {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setDone(!done),
    style: {
      height: h,
      borderRadius: 'var(--radius-md)',
      border: '1px dashed ' + (done ? 'var(--teal-500)' : 'var(--border-strong)'),
      background: done ? 'var(--teal-50)' : '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      cursor: 'pointer',
      color: done ? 'var(--teal-700)' : 'var(--ink-500)',
      font: '500 13px var(--font-sans)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: done ? 'circle-check' : 'upload',
    size: 20
  }), done ? label + ' added' : 'Upload ' + label.toLowerCase());
}
function SignupPage({
  go,
  params,
  onFinish,
  openAd,
  me,
  inbox
}) {
  const [step, setStep] = React.useState(me ? 5 : 0);
  const [d, setD] = React.useState(() => me || {
    biz: 'Evergreen Outdoor Co.',
    first: 'Maria',
    email: 'maria@evergreenoutdoor.co',
    serves: 'both',
    plan: params.plan || 'pro',
    annual: !!params.annual,
    cat: 'landscaping',
    cities: ['Aurora', 'Parker', 'Centennial', 'Castle Rock'],
    desc: VD.vendors[0].desc,
    prod: 'Backyard design consult',
    kind: 'Service',
    quoteOnly: false,
    price: 'Free',
    aud: 'homeowner'
  });
  const set = (k, v) => setD(s => ({
    ...s,
    [k]: v
  }));
  const plan = VD.plans.find(p => p.id === d.plan);
  const [busy, setBusy] = React.useState(false);
  const next = () => {
    if (step === 2) {
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        setStep(3);
      }, 900);
      return;
    }
    if (step === 4) {
      onFinish(d);
    }
    setStep(s => Math.min(5, s + 1));
  };
  const titles = [['Create your vendor account', 'Tell us who you are and who you serve.'], ['Choose your plan', 'You can change plans any time.'], ['Payment', 'Your subscription starts today.'], ['Build your business profile', 'This is what builders and homeowners see.'], ['Add your first product or service', 'You can add more from your dashboard.'], ['Your profile is live', 'Here\'s what to do next.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      minHeight: 'calc(100vh - 72px)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px minmax(0,1fr)',
      gap: 48,
      padding: '48px 32px 96px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 120,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Vendor setup"), STEPS.map((s, i) => {
    const st = i < step ? 'done' : i === step ? 'cur' : 'todo';
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      type: "button",
      disabled: i > step || step === 5,
      onClick: () => setStep(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        border: 0,
        background: st === 'cur' ? '#fff' : 'transparent',
        boxShadow: st === 'cur' ? 'var(--shadow-xs)' : 'none',
        cursor: i <= step && step < 5 ? 'pointer' : 'default',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '600 12px var(--font-sans)',
        background: st === 'done' ? 'var(--teal-500)' : st === 'cur' ? 'var(--teal-50)' : '#fff',
        color: st === 'done' ? '#fff' : st === 'cur' ? 'var(--teal-700)' : 'var(--ink-400)',
        border: st === 'todo' ? '1px solid var(--border-default)' : st === 'cur' ? '1px solid var(--teal-300)' : 0
      }
    }, st === 'done' ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${st === 'cur' ? 600 : 500} 14px var(--font-sans)`,
        color: st === 'todo' ? 'var(--ink-400)' : 'var(--text-strong)'
      }
    }, s));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: 14,
      borderRadius: 'var(--radius-md)',
      border: '1px dashed var(--ink-300)',
      font: '400 12px/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Prototype. No account is created and no card is charged.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: step === 3 || step === 2 ? 'minmax(0,1fr) 340px' : 'minmax(0,1fr)',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '500 30px/1.2 var(--font-sans)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.015em'
    }
  }, titles[step][0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: '400 15px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, titles[step][1])), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(GInput, {
    label: "Business name",
    value: d.biz,
    onChange: e => set('biz', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(GInput, {
    label: "Your first name",
    value: d.first,
    onChange: e => set('first', e.target.value)
  }), /*#__PURE__*/React.createElement(GInput, {
    label: "Work email",
    value: d.email,
    onChange: e => set('email', e.target.value)
  })), /*#__PURE__*/React.createElement(GInput, {
    label: "Password",
    type: "password",
    defaultValue: "password123"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Who do you serve?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, [['builder', 'hard-hat', 'Builders'], ['homeowner', 'house', 'Homeowners'], ['both', 'users-round', 'Both']].map(([v, i, l]) => {
    const on = d.serves === v;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => set('serves', v),
      style: {
        padding: 16,
        borderRadius: 'var(--radius-md)',
        border: on ? '2px solid var(--teal-500)' : '1px solid var(--border-default)',
        background: on ? 'var(--teal-50)' : '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        cursor: 'pointer',
        color: on ? 'var(--teal-700)' : 'var(--ink-700)',
        font: '500 14px var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 20
    }), l);
  })))), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(BillingToggle, {
    annual: d.annual,
    setAnnual: v => set('annual', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, VD.plans.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.id,
    p: p,
    annual: d.annual,
    selected: d.plan === p.id,
    onPick: () => set('plan', p.id),
    cta: "Choose "
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Advertising is optional and purchased separately after setup.")), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(GInput, {
    label: "Name on card",
    defaultValue: d.first + ' Alvarez'
  }), /*#__PURE__*/React.createElement(GInput, {
    label: "Card number",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "credit-card",
      size: 16
    }),
    defaultValue: "4242 4242 4242 4242"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(GInput, {
    label: "Expiry",
    defaultValue: "08 / 29"
  }), /*#__PURE__*/React.createElement(GInput, {
    label: "CVC",
    defaultValue: "123"
  }), /*#__PURE__*/React.createElement(GInput, {
    label: "ZIP",
    defaultValue: "80016"
  })), /*#__PURE__*/React.createElement(GInput, {
    label: "Promo code",
    placeholder: "Optional"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), "In production, payments are processed by Stripe.")), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px minmax(0,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(UploadSlot, {
    label: "Logo",
    h: 120
  }), /*#__PURE__*/React.createElement(UploadSlot, {
    label: "Cover photo",
    h: 120
  })), /*#__PURE__*/React.createElement(GSelect, {
    label: "Primary category",
    value: d.cat,
    onChange: e => set('cat', e.target.value),
    options: VD.categories.map(c => ({
      value: c.id,
      label: c.name
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Service area"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, VD.cities.slice(1).map(c => /*#__PURE__*/React.createElement(GTag, {
    key: c,
    selected: d.cities.includes(c),
    onClick: () => set('cities', d.cities.includes(c) ? d.cities.filter(x => x !== c) : [...d.cities, c])
  }, c)))), /*#__PURE__*/React.createElement(TextArea, {
    label: "Business overview",
    value: d.desc,
    onChange: e => set('desc', e.target.value)
  })), step === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement(UploadSlot, {
    label: "Photo",
    h: 110
  }), /*#__PURE__*/React.createElement(GInput, {
    label: "Name",
    value: d.prod,
    onChange: e => set('prod', e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(GSelect, {
    label: "Type",
    value: d.kind,
    onChange: e => set('kind', e.target.value),
    options: ['Product', 'Service', 'Package']
  }), /*#__PURE__*/React.createElement(GSelect, {
    label: "Offered to",
    value: d.aud,
    onChange: e => set('aud', e.target.value),
    options: [{
      value: 'homeowner',
      label: 'Homeowners'
    }, {
      value: 'builder',
      label: 'Builders'
    }, {
      value: 'both',
      label: 'Both'
    }]
  })), /*#__PURE__*/React.createElement(GSwitch, {
    label: "Quote only (no listed price)",
    checked: d.quoteOnly,
    onChange: v => set('quoteOnly', v)
  }), !d.quoteOnly && /*#__PURE__*/React.createElement(GInput, {
    label: "Price",
    value: d.price,
    onChange: e => set('price', e.target.value)
  })), step === 5 && /*#__PURE__*/React.createElement(GoLive, {
    d: d,
    go: go,
    openAd: openAd,
    inbox: inbox,
    plan: plan
  }), step < 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 8,
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(GB, {
    variant: "ghost",
    disabled: step === 0,
    onClick: () => setStep(s => s - 1)
  }, "Back"), /*#__PURE__*/React.createElement(GB, {
    onClick: next,
    disabled: busy
  }, busy ? 'Processing…' : step === 2 ? `Pay $${planPrice(plan, d.annual)}${d.annual ? '/mo annually' : ' and continue'}` : step === 4 ? 'Publish my profile' : 'Continue'))), step === 2 && /*#__PURE__*/React.createElement(GCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Order summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      font: '400 14px var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, plan.name, " plan \xB7 ", d.annual ? 'annual' : 'monthly'), /*#__PURE__*/React.createElement("span", null, "$", planPrice(plan, d.annual), "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 0',
      font: '600 15px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Due today"), /*#__PURE__*/React.createElement("span", null, d.annual ? 'Shown at checkout' : '$' + plan.monthly)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Renews ", d.annual ? 'yearly' : 'monthly', " until you cancel. Cancel any time from Subscription & Billing.")), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 120,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Preview"), /*#__PURE__*/React.createElement(VendorCard, {
    v: {
      ...VD.vendors[0],
      name: d.biz,
      cat: d.cat,
      area: d.cities.join(', ') || 'Add a service area',
      desc: d.desc,
      serves: d.serves,
      sponsored: false,
      rating: null
    },
    compact: true
  })))));
}
function GoLive({
  d,
  go,
  openAd,
  inbox,
  plan
}) {
  const checks = [['Account created', true], [plan.name + ' plan active', true], ['Business profile published', true], ['First listing live: ' + d.prod, true], ['Set up payouts in Settings', false]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, checks.map(([t, ok]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: '400 15px var(--font-sans)',
      color: ok ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ok ? 'circle-check' : 'circle-dashed',
    size: 20,
    color: ok ? 'var(--teal-600)' : 'var(--ink-400)'
  }), t)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(GB, {
    variant: "secondary",
    onClick: () => go('profile', {
      id: 'evergreen'
    }),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "eye",
      size: 16
    })
  }, "View public profile"), /*#__PURE__*/React.createElement(GB, {
    variant: "ghost",
    onClick: () => go('results', {
      cat: d.cat
    })
  }, "See it in the marketplace"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--ink-900)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '500 12px var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--teal-200)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "megaphone",
    size: 15
  }), "Optional next step"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px/1.3 var(--font-sans)'
    }
  }, "Advertise in a neighborhood"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.55 var(--font-sans)',
      color: 'rgba(255,255,255,.75)'
    }
  }, "Appear in the \"Explore local services\" module on the neighborhood pages buyers are browsing."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GB, {
    onClick: () => openAd('neighborhood')
  }, "Request neighborhood package"))), /*#__PURE__*/React.createElement(GCard, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Inbox"), inbox.length > 0 && /*#__PURE__*/React.createElement(GBadge, {
    tone: "brand"
  }, inbox.length, " new")), inbox.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)',
      padding: '8px 0'
    }
  }, "No inquiries yet. They'll appear here when builders and homeowners contact you.") : inbox.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    style: {
      display: 'flex',
      gap: 12,
      padding: '10px 0',
      borderTop: '1px solid var(--border-subtle)',
      animation: 'vpFade .4s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      flex: 'none',
      background: m.who === 'Builder' ? 'var(--ink-800)' : 'var(--teal-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.who === 'Builder' ? 'hard-hat' : 'house',
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px var(--font-sans)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, m.src)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.45 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, m.text)))))));
}
Object.assign(window, {
  SignupPage,
  TextArea,
  UploadSlot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/Signup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/VendorShell.jsx
try { (() => {
const {
  Button: XB,
  Badge: XBadge,
  Tooltip: XTip,
  Eyebrow: XEyebrow
} = window.HoodleDesignSystem_ee4a2a;
const vLogo = k => {
  const el = document.getElementById('vlogo-' + k);
  return el ? el.src : '../../assets/hoodle-logo-tm-' + k + '.png';
};
function vPascal(n) {
  return n.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
}
function Icon({
  name,
  size = 18,
  stroke = 1.75,
  color,
  style
}) {
  const node = window.lucide && (window.lucide.icons[vPascal(name)] || window.lucide.icons.Circle);
  if (!node) return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      display: 'inline-block',
      flex: 'none'
    }
  });
  const kids = node[0] === 'svg' ? node[2] : node;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    }
  }, kids.map(([t, a], i) => React.createElement(t, {
    key: i,
    ...a
  })));
}
function Img({
  src,
  alt = '',
  style,
  label = 'Photo'
}) {
  const [err, setErr] = React.useState(false);
  if (!src || err) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-400)',
      font: '400 12px var(--font-sans)',
      ...style
    }
  }, label);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErr(true),
    style: {
      objectFit: 'cover',
      display: 'block',
      ...style
    }
  });
}
function Wrap({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
function H2({
  children,
  inverse,
  size = 38
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `500 ${size}px/1.14 var(--font-sans)`,
      letterSpacing: '-0.018em',
      color: inverse ? '#fff' : 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, children);
}
function Lead({
  children,
  inverse,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.6 var(--font-sans)',
      color: inverse ? 'rgba(255,255,255,.8)' : 'var(--text-body)',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function Head({
  eyebrow,
  title,
  sub,
  center,
  inverse,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: center ? 'center' : 'space-between',
      gap: 24,
      marginBottom: 40,
      textAlign: center ? 'center' : 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 680,
      alignItems: center ? 'center' : 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(XEyebrow, {
    align: center ? 'center' : 'start',
    size: "sm",
    tone: inverse ? 'inverse' : 'brand',
    rules: false
  }, eyebrow), /*#__PURE__*/React.createElement(H2, {
    inverse: inverse
  }, title), sub && /*#__PURE__*/React.createElement(Lead, {
    inverse: inverse
  }, sub)), action);
}
function Sponsored({
  by,
  why,
  inverse
}) {
  return /*#__PURE__*/React.createElement(XTip, {
    content: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        maxWidth: 240
      }
    }, "Paid placement", by ? ' by ' + by : '', ". ", why || 'Shown because it matches the category and area you are browsing.', " Not an endorsement by Hoodle or any builder.")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-pill)',
      background: inverse ? 'rgba(255,255,255,.92)' : 'var(--ink-100)',
      color: 'var(--ink-700)',
      font: '500 11px/1 var(--font-sans)',
      letterSpacing: '.02em',
      cursor: 'help',
      whiteSpace: 'nowrap'
    }
  }, "Sponsored", /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 12
  })));
}
function DemoTag({
  children = 'Demo data'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-pill)',
      border: '1px dashed var(--ink-300)',
      color: 'var(--ink-500)',
      font: '500 11px/1 var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flask-conical",
    size: 12
  }), children);
}
function Proposed() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-50)',
      border: '1px solid var(--ink-200)',
      color: 'var(--ink-600)',
      font: '500 11px/1 var(--font-sans)'
    }
  }, "Proposed");
}
function Rating({
  v,
  n,
  size = 13
}) {
  if (!v) return /*#__PURE__*/React.createElement("span", {
    style: {
      font: `400 ${size}px var(--font-sans)`,
      color: 'var(--text-muted)'
    }
  }, "No reviews yet");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: `500 ${size}px var(--font-sans)`,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: size + 1,
    color: "var(--teal-600)",
    style: {
      fill: 'var(--teal-600)'
    }
  }), v.toFixed(1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, "(", n, ")"));
}
function Monogram({
  name,
  size = 48
}) {
  const t = name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('');
  return /*#__PURE__*/React.createElement("div", {
    title: "Logo placeholder",
    style: {
      width: size,
      height: size,
      flex: 'none',
      borderRadius: size > 60 ? 'var(--radius-lg)' : 'var(--radius-md)',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `600 ${Math.round(size * .34)}px var(--font-sans)`,
      color: 'var(--teal-700)',
      letterSpacing: '.02em'
    }
  }, t);
}
function Serves({
  s
}) {
  const map = {
    both: [['hard-hat', 'Builders'], ['house', 'Homeowners']],
    builder: [['hard-hat', 'Builders']],
    homeowner: [['house', 'Homeowners']]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 10
    }
  }, map[s].map(([i, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: '400 12px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 13
  }), l)));
}
function TopNav({
  screen,
  go
}) {
  const links = [['Neighborhoods', null], ['Builders', null], ['Marketplace', 'market'], ['For Vendors', 'landing']];
  const act = s => s === 'market' && ['market', 'results', 'profile', 'product'].includes(screen) || s === 'landing' && ['landing', 'pricing', 'signup'].includes(screen);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go('landing'),
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer'
    },
    "aria-label": "Hoodle"
  }, /*#__PURE__*/React.createElement("img", {
    src: vLogo('teal'),
    alt: "hoodle",
    style: {
      height: 32,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      height: '100%'
    }
  }, links.map(([l, s]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      s && go(s);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      font: '500 14px var(--font-sans)',
      color: act(s) ? 'var(--teal-700)' : 'var(--ink-800)',
      textDecoration: 'none',
      boxShadow: act(s) ? 'inset 0 -2px 0 var(--teal-500)' : 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(XB, {
    variant: "ghost",
    onClick: () => go('signup')
  }, "Vendor sign in"), /*#__PURE__*/React.createElement(XB, {
    onClick: () => go('signup')
  }, "Join as a vendor")));
}
function Footer({
  go
}) {
  const cols = [['Homebuyers', ['Neighborhoods', 'Builders', 'Marketplace', 'Move-in planner']], ['Vendors', ['Hoodle for Vendors', 'Pricing', 'Advertising', 'Vendor sign in']], ['Company', ['About Hoodle', 'Advertising policy', 'Privacy', 'Terms']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'rgba(255,255,255,.72)',
      padding: '56px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: vLogo('white'),
    alt: "hoodle",
    style: {
      height: 30,
      width: 'fit-content'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.6 var(--font-sans)',
      maxWidth: 320
    }
  }, "The marketplace for new construction: neighborhoods, builders, and the products and services that come with a new home.")), cols.map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: '#fff'
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      font: '400 14px var(--font-sans)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,.12)',
      font: '400 12px var(--font-sans)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Hoodle, Inc."), /*#__PURE__*/React.createElement("span", null, "Prototype. Sample businesses and demonstration data only. Sponsored placements are always labelled."))));
}
function LineChart({
  data,
  w = 520,
  h = 160,
  color = 'var(--teal-500)',
  fill = true
}) {
  const max = Math.max(...data) * 1.1,
    step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - v / max * h]);
  const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: "100%",
    height: h,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, [0.25, .5, .75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    x2: w,
    y1: h * g,
    y2: h * g,
    stroke: "var(--ink-100)",
    strokeWidth: "1"
  })), fill && /*#__PURE__*/React.createElement("path", {
    d: d + ` L ${w} ${h} L 0 ${h} Z`,
    fill: "var(--teal-50)"
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "2.25",
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round"
  }));
}
function Bars({
  data,
  h = 120,
  color = 'var(--teal-500)'
}) {
  const max = Math.max(...data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: h
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: v / max * 100 + '%',
      background: i === data.length - 1 ? color : 'var(--teal-100)',
      borderRadius: '4px 4px 0 0'
    }
  })));
}
Object.assign(window, {
  vLogo,
  Icon,
  Img,
  Wrap,
  H2,
  Lead,
  Head,
  Sponsored,
  DemoTag,
  Proposed,
  Rating,
  Monogram,
  Serves,
  TopNav,
  Footer,
  LineChart,
  Bars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/VendorShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vendor-platform/data.js
try { (() => {
(() => {
  const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;
  const EXT = ['1568605114967-8130f3a36994', '1570129477492-45c003edd2be', '1564013799919-ab600027ffc6', '1512917774080-9991f1c4c750', '1600596542815-ffad4c1539a9', '1600585154340-be6161a56a0c', '1580587771525-78b9dba3b914', '1613490493576-7fde63acd811', '1600607687939-ce8a6c25118c', '1600566753190-17f0baa2a6c3', '1583608205776-bfd35f0d9f83', '1605276374104-dee2a0ed3cd6'].map(i => U(i));
  const INT = ['1600210492486-724fe5c67fb0', '1600566752355-35792bedcfea', '1556911220-bff31c812dba', '1484154218962-a197022b5858'].map(i => U(i));
  const HERO = U('1600585154340-be6161a56a0c', 1800);
  const HERO2 = U('1600210492486-724fe5c67fb0', 900);
  const categories = [{
    id: 'windows',
    name: 'Windows & Doors',
    icon: 'door-open',
    aud: 'both'
  }, {
    id: 'flooring',
    name: 'Flooring',
    icon: 'layers',
    aud: 'builder'
  }, {
    id: 'cabinets',
    name: 'Cabinets & Countertops',
    icon: 'archive',
    aud: 'both'
  }, {
    id: 'landscaping',
    name: 'Landscaping',
    icon: 'trees',
    aud: 'both'
  }, {
    id: 'fencing',
    name: 'Fencing',
    icon: 'fence',
    aud: 'both'
  }, {
    id: 'coverings',
    name: 'Window Coverings',
    icon: 'blinds',
    aud: 'homeowner'
  }, {
    id: 'furniture',
    name: 'Furniture',
    icon: 'sofa',
    aud: 'homeowner'
  }, {
    id: 'appliances',
    name: 'Appliances',
    icon: 'refrigerator',
    aud: 'both'
  }, {
    id: 'smarthome',
    name: 'Smart Home & Security',
    icon: 'shield-check',
    aud: 'both'
  }, {
    id: 'hvac',
    name: 'HVAC',
    icon: 'fan',
    aud: 'both'
  }, {
    id: 'plumbing',
    name: 'Plumbing & Electrical',
    icon: 'plug-zap',
    aud: 'builder'
  }, {
    id: 'roofing',
    name: 'Roofing',
    icon: 'house',
    aud: 'builder'
  }, {
    id: 'interior',
    name: 'Interior Design',
    icon: 'palette',
    aud: 'homeowner'
  }, {
    id: 'painting',
    name: 'Painting',
    icon: 'paint-roller',
    aud: 'both'
  }, {
    id: 'outdoor',
    name: 'Pools & Outdoor Living',
    icon: 'sun',
    aud: 'homeowner'
  }, {
    id: 'moving',
    name: 'Moving & Storage',
    icon: 'truck',
    aud: 'homeowner'
  }, {
    id: 'cleaning',
    name: 'Cleaning & Maintenance',
    icon: 'sparkles',
    aud: 'homeowner'
  }];
  const catName = id => (categories.find(c => c.id === id) || {}).name || id;

  // serves: 'both' | 'builder' | 'homeowner'. rating null = no reviews yet.
  const vendors = [{
    id: 'evergreen',
    name: 'Evergreen Outdoor Co.',
    cat: 'landscaping',
    serves: 'both',
    area: 'Aurora, Parker, Centennial & Castle Rock',
    cities: ['Aurora', 'Parker', 'Centennial', 'Castle Rock'],
    desc: 'Landscape design and installation for new homes, from front-yard builder packages to full backyard builds.',
    services: ['Builder landscape packages', 'Backyard design', 'Sod & irrigation', 'Xeriscaping'],
    rating: 4.8,
    reviews: 37,
    price: '$$',
    avail: 'Booking 3–4 weeks out',
    specialties: ['Xeriscape', 'Irrigation'],
    certs: [],
    img: EXT[4],
    sponsored: true,
    since: 2011,
    crews: 6,
    builder: {
      capacity: 'Up to 40 lots / month across 6 crews',
      coverage: 'South & east metro',
      experience: 'Front-yard packages for production and semi-custom communities',
      inquiry: 'Commercial bids, per-lot pricing, community common areas'
    },
    home: {
      offers: ['Backyard design consult', 'Patio & fire-pit packages', 'Drip irrigation retrofit', 'Seasonal maintenance plans'],
      install: 'Design, permit help and installation by in-house crews'
    },
    promo: 'Free backyard design consult for homes closed in the last 12 months'
  }, {
    id: 'peak',
    name: 'Peak Windows & Doors',
    cat: 'windows',
    serves: 'both',
    area: 'Denver metro & Front Range',
    cities: ['Denver', 'Aurora', 'Lakewood', 'Thornton', 'Parker', 'Castle Rock'],
    desc: 'Energy-efficient windows and entry doors supplied to builders and installed for homeowners.',
    services: ['Vinyl & fiberglass windows', 'Entry doors', 'Patio sliders', 'Installation'],
    rating: 4.6,
    reviews: 52,
    price: '$$$',
    avail: 'Builder lead time 6–8 weeks',
    specialties: ['Energy Star', 'Black-frame'],
    certs: ['Energy Star partner'],
    img: EXT[5],
    sponsored: true,
    since: 2004,
    crews: 9,
    builder: {
      capacity: 'Supply and install for 150+ homes / month',
      coverage: 'Entire Front Range',
      experience: 'Production and custom builders across 8 counties',
      inquiry: 'Volume pricing, spec sheets, community-wide supply'
    },
    home: {
      offers: ['Window upgrades after move-in', 'Smart-lock entry doors', 'Patio door replacement'],
      install: 'Factory-certified installers'
    },
    promo: null
  }, {
    id: 'mileshade',
    name: 'Mile High Shade & Blind',
    cat: 'coverings',
    serves: 'homeowner',
    area: 'Denver, Aurora, Lakewood, Littleton',
    cities: ['Denver', 'Aurora', 'Lakewood', 'Littleton'],
    desc: 'Blinds, shades and motorized window treatments measured and installed for new homeowners, often before move-in day.',
    services: ['Motorized shades', 'Cellular shades', 'Shutters', 'Free measure'],
    rating: 4.9,
    reviews: 84,
    price: '$$',
    avail: 'Measure within 1 week',
    specialties: ['Motorized', 'Blackout'],
    certs: [],
    img: INT[0],
    sponsored: true,
    since: 2015,
    home: {
      offers: ['Whole-home shade packages', 'Motorized bedroom blackout', 'Patio door vertical shades'],
      install: 'Measured and installed in one to two visits'
    },
    promo: '15% off whole-home packages booked before move-in'
  }, {
    id: 'frfence',
    name: 'Front Range Fence Works',
    cat: 'fencing',
    serves: 'both',
    area: 'North & east metro',
    cities: ['Thornton', 'Brighton', 'Aurora', 'Commerce City'],
    desc: 'Cedar, vinyl and steel fencing for builder lots and new backyards.',
    services: ['Cedar privacy fence', 'Vinyl fence', 'Gates', 'HOA-compliant designs'],
    rating: null,
    reviews: 0,
    price: '$$',
    avail: 'Installs in 2–3 weeks',
    specialties: ['HOA-compliant'],
    certs: [],
    img: EXT[1],
    sponsored: false,
    since: 2019,
    crews: 4,
    builder: {
      capacity: 'Perimeter and lot fencing, up to 25 lots / month',
      coverage: 'North & east metro',
      experience: 'Community perimeter fencing',
      inquiry: 'Per-linear-foot bids'
    },
    home: {
      offers: ['Backyard privacy fence', 'Dog-run fencing', 'Gate upgrades'],
      install: 'Permit and HOA paperwork included'
    },
    promo: null
  }, {
    id: 'summitfloor',
    name: 'Summit Floor Supply',
    cat: 'flooring',
    serves: 'builder',
    area: 'Denver metro',
    cities: ['Denver', 'Lakewood', 'Arvada', 'Westminster'],
    desc: 'LVP, hardwood and tile supplied at volume to residential builders, with installation crews available.',
    services: ['LVP & hardwood supply', 'Tile', 'Install crews', 'Design-center samples'],
    rating: null,
    reviews: 0,
    price: 'Quote',
    avail: 'Stocked locally',
    specialties: ['LVP', 'White oak'],
    certs: [],
    img: INT[1],
    sponsored: false,
    since: 2008,
    crews: 12,
    builder: {
      capacity: 'Warehouse in Commerce City, 12 install crews',
      coverage: 'Denver metro',
      experience: 'Design-center programs for production builders',
      inquiry: 'Volume programs, design-center sample boards'
    },
    promo: null
  }, {
    id: 'keystone',
    name: 'Keystone Cabinet & Stone',
    cat: 'cabinets',
    serves: 'both',
    area: 'Denver metro',
    cities: ['Denver', 'Aurora', 'Littleton', 'Castle Rock'],
    desc: 'Cabinetry and quartz countertops for builder design centers and post-closing kitchen upgrades.',
    services: ['Cabinet packages', 'Quartz countertops', 'Islands', 'Built-ins'],
    rating: 4.4,
    reviews: 19,
    price: '$$$',
    avail: 'Lead time 5 weeks',
    specialties: ['Quartz', 'Custom built-ins'],
    certs: [],
    img: INT[2],
    sponsored: false,
    since: 2009,
    crews: 5,
    builder: {
      capacity: 'Cabinet + top packages for up to 60 homes / month',
      coverage: 'Denver metro',
      experience: 'Production design-center programs',
      inquiry: 'Spec packages and plan takeoffs'
    },
    home: {
      offers: ['Pantry & mudroom built-ins', 'Kitchen island upgrades'],
      install: 'In-house fabrication and install'
    },
    promo: null
  }, {
    id: 'bluebird',
    name: 'Bluebird Moving & Storage',
    cat: 'moving',
    serves: 'homeowner',
    area: 'Denver metro',
    cities: ['Denver', 'Aurora', 'Parker', 'Thornton', 'Lakewood'],
    desc: 'Local moves timed to new-home closings, with short-term storage when your build date slips.',
    services: ['Local moving', 'Packing', 'Short-term storage'],
    rating: 4.7,
    reviews: 61,
    price: '$$',
    avail: 'Weekends book 3 weeks out',
    specialties: ['Closing-date flexibility'],
    certs: [],
    img: EXT[2],
    sponsored: false,
    since: 2013,
    home: {
      offers: ['Closing-day moves', 'Storage between homes', 'Packing service'],
      install: 'Licensed and insured crews'
    },
    promo: 'Free storage for 30 days if your closing date moves'
  }, {
    id: 'clearline',
    name: 'Clearline Smart Home',
    cat: 'smarthome',
    serves: 'both',
    area: 'Denver metro & Boulder',
    cities: ['Denver', 'Boulder', 'Broomfield', 'Erie'],
    desc: 'Pre-wire, security and smart-home systems for builders, plus setup for new homeowners.',
    services: ['Structured wiring', 'Security systems', 'Smart-home setup', 'Wi-Fi'],
    rating: null,
    reviews: 0,
    price: '$$',
    avail: 'Next-week installs',
    specialties: ['Pre-wire', 'Mesh Wi-Fi'],
    certs: [],
    img: EXT[7],
    sponsored: false,
    since: 2017,
    crews: 7,
    builder: {
      capacity: 'Pre-wire for up to 80 homes / month',
      coverage: 'North metro & Boulder County',
      experience: 'Builder pre-wire programs',
      inquiry: 'Per-plan pre-wire pricing'
    },
    home: {
      offers: ['Smart-home setup visit', 'Camera & alarm packages'],
      install: 'Setup in one visit'
    },
    promo: null
  }, {
    id: 'alpine',
    name: 'Alpine Comfort HVAC',
    cat: 'hvac',
    serves: 'both',
    area: 'South metro',
    cities: ['Littleton', 'Highlands Ranch', 'Parker', 'Castle Rock'],
    desc: 'Heating and cooling systems for new construction, plus maintenance plans for new homeowners.',
    services: ['New-construction HVAC', 'Heat pumps', 'Maintenance plans'],
    rating: 4.5,
    reviews: 28,
    price: '$$',
    avail: 'Maintenance visits weekly',
    specialties: ['Heat pumps'],
    certs: ['NATE-certified technicians'],
    img: EXT[9],
    sponsored: false,
    since: 2006,
    crews: 8,
    builder: {
      capacity: 'Rough-in to trim for 50 homes / month',
      coverage: 'South metro',
      experience: 'Production and semi-custom',
      inquiry: 'Per-plan bids'
    },
    home: {
      offers: ['First-year maintenance plan', 'Air-quality upgrades'],
      install: 'Same-week service'
    },
    promo: null
  }, {
    id: 'sparrow',
    name: 'Sparrow Home Cleaning',
    cat: 'cleaning',
    serves: 'homeowner',
    area: 'Denver & Aurora',
    cities: ['Denver', 'Aurora'],
    desc: 'Move-in deep cleans for new construction dust, then recurring cleaning.',
    services: ['Move-in deep clean', 'Recurring cleaning', 'Window washing'],
    rating: null,
    reviews: 0,
    price: '$',
    avail: 'Book 1 week out',
    specialties: ['Construction dust'],
    certs: [],
    img: INT[3],
    sponsored: false,
    since: 2021,
    home: {
      offers: ['Move-in deep clean', 'Biweekly cleaning'],
      install: 'Insured, background-checked cleaners'
    },
    promo: null
  }];
  const catalog = {
    evergreen: [{
      id: 'e1',
      name: 'Builder front-yard package',
      kind: 'Service',
      price: 'Quote only',
      aud: 'builder',
      img: EXT[4],
      desc: 'Sod, two trees, shrub bed and irrigation per lot. Priced per plan.'
    }, {
      id: 'e2',
      name: 'Backyard design consult',
      kind: 'Service',
      price: 'Free',
      aud: 'homeowner',
      img: EXT[0],
      desc: 'On-site consult and a scaled plan for your new backyard.'
    }, {
      id: 'e3',
      name: 'Patio & fire-pit package',
      kind: 'Package',
      price: 'From $8,900',
      aud: 'homeowner',
      img: EXT[6],
      desc: 'Paver patio up to 300 sq ft, gas fire pit and lighting.'
    }, {
      id: 'e4',
      name: 'Drip irrigation retrofit',
      kind: 'Service',
      price: 'From $1,250',
      aud: 'homeowner',
      img: EXT[3],
      desc: 'Convert spray zones to drip for water-wise beds.'
    }]
  };
  const cities = ['All Denver metro', 'Aurora', 'Parker', 'Castle Rock', 'Centennial', 'Denver', 'Lakewood', 'Littleton', 'Thornton', 'Brighton', 'Boulder'];
  const plans = [{
    id: 'basic',
    name: 'Basic',
    monthly: 49,
    features: ['Up to 10 products or services', 'Up to 50 orders', 'Basic analytics', 'Email support', 'Business profile in the marketplace', 'Quote requests & messages']
  }, {
    id: 'pro',
    name: 'Professional',
    monthly: 99,
    features: ['Unlimited products and services', 'Unlimited orders', 'Advanced analytics', 'Priority support', 'Business profile in the marketplace', 'Quote requests, leads & builder connections'],
    pop: true
  }];
  const adProducts = [{
    id: 'featured',
    name: 'Featured Vendor Placement',
    where: 'Top of category results in the marketplace',
    icon: 'star'
  }, {
    id: 'category',
    name: 'Local Category Sponsorship',
    where: 'One market + one category, limited slots',
    icon: 'map-pin'
  }, {
    id: 'neighborhood',
    name: 'Neighborhood Sponsorship',
    where: '"Explore local services" module on neighborhood pages',
    icon: 'house'
  }, {
    id: 'builder',
    name: 'Builder Audience Advertising',
    where: 'Supplier discovery on builder-facing pages',
    icon: 'hard-hat'
  }, {
    id: 'movein',
    name: 'Move-In Journey Sponsorship',
    where: 'New-homeowner dashboard, by move-in stage',
    icon: 'key-round'
  }, {
    id: 'email',
    name: 'Sponsored Email Campaign',
    where: 'Opted-in homeowner emails',
    icon: 'mail'
  }, {
    id: 'multi',
    name: 'Multi-Location Package',
    where: 'Several markets or categories, one contract',
    icon: 'layers'
  }];
  const neighborhoods = ['Cedar Ridge · Aurora', 'Harvest Trails · Aurora', 'Stonegate · Parker', 'Crystal Valley · Castle Rock', 'River Bend · Brighton', 'Mesa Top · Golden'];

  // Demo performance series (clearly labelled as demo in UI)
  const demoSeries = [32, 41, 38, 52, 49, 63, 58, 71, 69, 84, 80, 96];
  window.VD = {
    categories,
    catName,
    vendors,
    catalog,
    cities,
    plans,
    adProducts,
    neighborhoods,
    demoSeries,
    EXT,
    INT,
    HERO,
    HERO2
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vendor-platform/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ListingCard = __ds_scope.ListingCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
