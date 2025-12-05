import {
  require_babylon
} from "./chunk-CZWJT7L5.js";
import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/babylonjs-gui@8.32.0/node_modules/babylonjs-gui/babylon.gui.min.js
var require_babylon_gui_min = __commonJS({
  "node_modules/.pnpm/babylonjs-gui@8.32.0/node_modules/babylonjs-gui/babylon.gui.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(require_babylon()) : "function" == typeof define && define.amd ? define("babylonjs-gui", ["babylonjs"], e) : "object" == typeof exports ? exports["babylonjs-gui"] = e(require_babylon()) : (t.BABYLON = t.BABYLON || {}, t.BABYLON.GUI = e(t.BABYLON));
    }("undefined" != typeof self ? self : "undefined" != typeof global ? global : exports, (t) => (() => {
      "use strict";
      var e = { 597: (e2) => {
        e2.exports = t;
      } }, i = {};
      function o(t2) {
        var r2 = i[t2];
        if (void 0 !== r2) return r2.exports;
        var n2 = i[t2] = { exports: {} };
        return e[t2](n2, n2.exports, o), n2.exports;
      }
      o.d = (t2, e2) => {
        for (var i2 in e2) o.o(e2, i2) && !o.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
      }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if ("object" == typeof window) return window;
        }
      }(), o.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), o.r = (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      };
      var r = {};
      o.d(r, { default: () => De });
      var n = {};
      o.r(n), o.d(n, { AbstractButton3D: () => yt, AdvancedDynamicTexture: () => ct, AdvancedDynamicTextureInstrumentation: () => ut, BaseGradient: () => st, BaseSlider: () => G, Button: () => R, Button3D: () => xt, Checkbox: () => M, CheckboxGroup: () => Y, ColorPicker: () => k, Container: () => B, Container3D: () => Pt, Control: () => I, Control3D: () => mt, CornerHandle: () => Zt, CylinderPanel: () => Bt, DisplayGrid: () => rt, Ellipse: () => L, FluentBackplateMaterial: () => Dt, FluentButtonMaterial: () => Qt, FluentMaterial: () => Ot, FluentMaterialDefines: () => St, FocusableButton: () => N, FrameGraphGUITask: () => dt, GUI3DManager: () => Ee, GizmoHandle: () => Xt, Grid: () => D, HandMenu: () => wt, HandleMaterial: () => Yt, HandleState: () => jt, HolographicBackplate: () => kt, HolographicButton: () => Lt, HolographicSlate: () => Jt, Image: () => O, ImageBasedSlider: () => nt, ImageScrollBar: () => $, InputPassword: () => z, InputText: () => F, InputTextArea: () => A, KeyPropertySet: () => it, Line: () => Q, LinearGradient: () => lt, MRDLBackplateMaterial: () => fe, MRDLSliderBarMaterial: () => ae, MRDLSliderThumbMaterial: () => he, MathTools: () => P, Matrix2D: () => x, Measure: () => v, MeshButton3D: () => $t, MultiLine: () => W, MultiLinePoint: () => V, NearMenu: () => te, NodeRenderGraphGUIBlock: () => ft, PlanePanel: () => ee, RadialGradient: () => _t, RadioButton: () => H, RadioGroup: () => X, Rectangle: () => T, ScatterPanel: () => ie, ScrollBar: () => J, ScrollViewer: () => tt, SelectionPanel: () => Z, SelectorGroup: () => j, SideHandle: () => Kt, SlateGizmo: () => qt, Slider: () => U, Slider3D: () => pe, SliderGroup: () => K, SpherePanel: () => ge, StackPanel: () => w, StackPanel3D: () => be, Style: () => ht, TextBlock: () => S, TextWrapper: () => E, TextWrapping: () => C, ToggleButton: () => et, TouchButton3D: () => Vt, TouchHolographicButton: () => Wt, TouchHolographicButtonV3: () => Me, TouchHolographicMenu: () => Rt, TouchMeshButton3D: () => me, ValueAndUnit: () => f, Vector2WithInfo: () => y, Vector3WithInfo: () => bt, VirtualKeyboard: () => ot, VolumeBasedPanel: () => It, XmlLoader: () => gt, name: () => at });
      var a = {};
      o.r(a), o.d(a, { AbstractButton3D: () => yt, AdvancedDynamicTexture: () => ct, AdvancedDynamicTextureInstrumentation: () => ut, BaseGradient: () => st, BaseSlider: () => G, Button: () => R, Button3D: () => xt, Checkbox: () => M, CheckboxGroup: () => Y, ColorPicker: () => k, Container: () => B, Container3D: () => Pt, Control: () => I, Control3D: () => mt, CornerHandle: () => Zt, CylinderPanel: () => Bt, DisplayGrid: () => rt, Ellipse: () => L, FluentBackplateMaterial: () => Dt, FluentButtonMaterial: () => Qt, FluentMaterial: () => Ot, FluentMaterialDefines: () => St, FocusableButton: () => N, FrameGraphGUITask: () => dt, GUI3DManager: () => Ee, GizmoHandle: () => Xt, Grid: () => D, HandMenu: () => wt, HandleMaterial: () => Yt, HandleState: () => jt, HolographicBackplate: () => kt, HolographicButton: () => Lt, HolographicSlate: () => Jt, Image: () => O, ImageBasedSlider: () => nt, ImageScrollBar: () => $, InputPassword: () => z, InputText: () => F, InputTextArea: () => A, KeyPropertySet: () => it, Line: () => Q, LinearGradient: () => lt, MRDLBackplateMaterial: () => fe, MRDLSliderBarMaterial: () => ae, MRDLSliderThumbMaterial: () => he, MathTools: () => P, Matrix2D: () => x, Measure: () => v, MeshButton3D: () => $t, MultiLine: () => W, MultiLinePoint: () => V, NearMenu: () => te, NodeRenderGraphGUIBlock: () => ft, PlanePanel: () => ee, RadialGradient: () => _t, RadioButton: () => H, RadioGroup: () => X, Rectangle: () => T, ScatterPanel: () => ie, ScrollBar: () => J, ScrollViewer: () => tt, SelectionPanel: () => Z, SelectorGroup: () => j, SideHandle: () => Kt, SlateGizmo: () => qt, Slider: () => U, Slider3D: () => pe, SliderGroup: () => K, SpherePanel: () => ge, StackPanel: () => w, StackPanel3D: () => be, Style: () => ht, TextBlock: () => S, TextWrapper: () => E, TextWrapping: () => C, ToggleButton: () => et, TouchButton3D: () => Vt, TouchHolographicButton: () => Wt, TouchHolographicButtonV3: () => Me, TouchHolographicMenu: () => Rt, TouchMeshButton3D: () => me, ValueAndUnit: () => f, Vector2WithInfo: () => y, Vector3WithInfo: () => bt, VirtualKeyboard: () => ot, VolumeBasedPanel: () => It, XmlLoader: () => gt, name: () => at });
      var s = function(t2, e2) {
        return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
          t3.__proto__ = e3;
        } || function(t3, e3) {
          for (var i2 in e3) Object.prototype.hasOwnProperty.call(e3, i2) && (t3[i2] = e3[i2]);
        }, s(t2, e2);
      };
      function l(t2, e2) {
        if ("function" != typeof e2 && null !== e2) throw new TypeError("Class extends value " + String(e2) + " is not a constructor or null");
        function i2() {
          this.constructor = t2;
        }
        s(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (i2.prototype = e2.prototype, new i2());
      }
      var _ = function() {
        return _ = Object.assign || function(t2) {
          for (var e2, i2 = 1, o2 = arguments.length; i2 < o2; i2++) for (var r2 in e2 = arguments[i2]) Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
          return t2;
        }, _.apply(this, arguments);
      };
      function h(t2, e2, i2, o2) {
        var r2, n2 = arguments.length, a2 = n2 < 3 ? e2 : null === o2 ? o2 = Object.getOwnPropertyDescriptor(e2, i2) : o2;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(t2, e2, i2, o2);
        else for (var s2 = t2.length - 1; s2 >= 0; s2--) (r2 = t2[s2]) && (a2 = (n2 < 3 ? r2(a2) : n2 > 3 ? r2(e2, i2, a2) : r2(e2, i2)) || a2);
        return n2 > 3 && a2 && Object.defineProperty(e2, i2, a2), a2;
      }
      function c(t2, e2, i2, o2) {
        return new (i2 || (i2 = Promise))(function(r2, n2) {
          function a2(t3) {
            try {
              l2(o2.next(t3));
            } catch (t4) {
              n2(t4);
            }
          }
          function s2(t3) {
            try {
              l2(o2.throw(t3));
            } catch (t4) {
              n2(t4);
            }
          }
          function l2(t3) {
            var e3;
            t3.done ? r2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function(t4) {
              t4(e3);
            })).then(a2, s2);
          }
          l2((o2 = o2.apply(t2, e2 || [])).next());
        });
      }
      function u(t2, e2) {
        var i2, o2, r2, n2 = { label: 0, sent: function() {
          if (1 & r2[0]) throw r2[1];
          return r2[1];
        }, trys: [], ops: [] }, a2 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a2.next = s2(0), a2.throw = s2(1), a2.return = s2(2), "function" == typeof Symbol && (a2[Symbol.iterator] = function() {
          return this;
        }), a2;
        function s2(s3) {
          return function(l2) {
            return function(s4) {
              if (i2) throw new TypeError("Generator is already executing.");
              for (; a2 && (a2 = 0, s4[0] && (n2 = 0)), n2; ) try {
                if (i2 = 1, o2 && (r2 = 2 & s4[0] ? o2.return : s4[0] ? o2.throw || ((r2 = o2.return) && r2.call(o2), 0) : o2.next) && !(r2 = r2.call(o2, s4[1])).done) return r2;
                switch (o2 = 0, r2 && (s4 = [2 & s4[0], r2.value]), s4[0]) {
                  case 0:
                  case 1:
                    r2 = s4;
                    break;
                  case 4:
                    return n2.label++, { value: s4[1], done: false };
                  case 5:
                    n2.label++, o2 = s4[1], s4 = [0];
                    continue;
                  case 7:
                    s4 = n2.ops.pop(), n2.trys.pop();
                    continue;
                  default:
                    if (!((r2 = (r2 = n2.trys).length > 0 && r2[r2.length - 1]) || 6 !== s4[0] && 2 !== s4[0])) {
                      n2 = 0;
                      continue;
                    }
                    if (3 === s4[0] && (!r2 || s4[1] > r2[0] && s4[1] < r2[3])) {
                      n2.label = s4[1];
                      break;
                    }
                    if (6 === s4[0] && n2.label < r2[1]) {
                      n2.label = r2[1], r2 = s4;
                      break;
                    }
                    if (r2 && n2.label < r2[2]) {
                      n2.label = r2[2], n2.ops.push(s4);
                      break;
                    }
                    r2[2] && n2.ops.pop(), n2.trys.pop();
                    continue;
                }
                s4 = e2.call(t2, n2);
              } catch (t3) {
                s4 = [6, t3], o2 = 0;
              } finally {
                i2 = r2 = 0;
              }
              if (5 & s4[0]) throw s4[1];
              return { value: s4[0] ? s4[1] : void 0, done: true };
            }([s3, l2]);
          };
        }
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      var d = o(597), f = function() {
        function t2(e2, i2, o2) {
          void 0 === i2 && (i2 = t2.UNITMODE_PIXEL), void 0 === o2 && (o2 = true), this.negativeValueAllowed = o2, this._value = 1, this._unit = t2.UNITMODE_PIXEL, this.ignoreAdaptiveScaling = false, this.onChangedObservable = new d.Observable(), this._value = e2, this._unit = i2, this._originalUnit = i2;
        }
        return Object.defineProperty(t2.prototype, "isPercentage", { get: function() {
          return this._unit === t2.UNITMODE_PERCENTAGE;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isPixel", { get: function() {
          return this._unit === t2.UNITMODE_PIXEL;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "internalValue", { get: function() {
          return this._value;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "value", { get: function() {
          return this._value;
        }, set: function(t3) {
          t3 !== this._value && (this._value = t3, this.onChangedObservable.notifyObservers());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "unit", { get: function() {
          return this._unit;
        }, set: function(t3) {
          t3 !== this._unit && (this._unit = t3, this.onChangedObservable.notifyObservers());
        }, enumerable: false, configurable: true }), t2.prototype.getValueInPixel = function(t3, e2) {
          return this.isPixel ? this.getValue(t3) : this.getValue(t3) * e2;
        }, t2.prototype.updateInPlace = function(e2, i2) {
          return void 0 === i2 && (i2 = t2.UNITMODE_PIXEL), this.value === e2 && this.unit === i2 || (this._value = e2, this._unit = i2, this.onChangedObservable.notifyObservers()), this;
        }, t2.prototype.getValue = function(e2) {
          if (e2 && !this.ignoreAdaptiveScaling && this.unit !== t2.UNITMODE_PERCENTAGE) {
            var i2 = 0, o2 = 0;
            if (e2.idealWidth && (i2 = Math.ceil(this._value * e2.getSize().width / e2.idealWidth)), e2.idealHeight && (o2 = Math.ceil(this._value * e2.getSize().height / e2.idealHeight)), e2.useSmallestIdeal && e2.idealWidth && e2.idealHeight) return window.innerWidth < window.innerHeight ? i2 : o2;
            if (e2.idealWidth) return i2;
            if (e2.idealHeight) return o2;
          }
          return this._value;
        }, t2.prototype.toString = function(e2, i2) {
          switch (this._unit) {
            case t2.UNITMODE_PERCENTAGE:
              var o2 = 100 * this.getValue(e2);
              return (i2 ? o2.toFixed(i2) : o2) + "%";
            case t2.UNITMODE_PIXEL:
              var r2 = this.getValue(e2);
              return (i2 ? r2.toFixed(i2) : r2) + "px";
          }
          return this._unit.toString();
        }, t2.prototype.fromString = function(e2) {
          var i2 = t2._Regex.exec(e2.toString());
          if (!i2 || 0 === i2.length) return false;
          var o2 = parseFloat(i2[1]), r2 = this._originalUnit;
          if (this.negativeValueAllowed || o2 < 0 && (o2 = 0), 4 === i2.length) switch (i2[3]) {
            case "px":
              r2 = t2.UNITMODE_PIXEL;
              break;
            case "%":
              r2 = t2.UNITMODE_PERCENTAGE, o2 /= 100;
          }
          return (o2 !== this._value || r2 !== this._unit) && (this._value = o2, this._unit = r2, this.onChangedObservable.notifyObservers(), true);
        }, Object.defineProperty(t2, "UNITMODE_PERCENTAGE", { get: function() {
          return t2._UNITMODE_PERCENTAGE;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2, "UNITMODE_PIXEL", { get: function() {
          return t2._UNITMODE_PIXEL;
        }, enumerable: false, configurable: true }), t2._Regex = /(^-?\d*(\.\d+)?)(%|px)?/, t2._UNITMODE_PERCENTAGE = 0, t2._UNITMODE_PIXEL = 1, t2;
      }(), p = [new d.Vector2(0, 0), new d.Vector2(0, 0), new d.Vector2(0, 0), new d.Vector2(0, 0)], g = [new d.Vector2(0, 0), new d.Vector2(0, 0), new d.Vector2(0, 0), new d.Vector2(0, 0)], b = new d.Vector2(0, 0), m = new d.Vector2(0, 0), v = function() {
        function t2(t3, e2, i2, o2) {
          this.left = t3, this.top = e2, this.width = i2, this.height = o2;
        }
        return t2.prototype.copyFrom = function(t3) {
          this.left = t3.left, this.top = t3.top, this.width = t3.width, this.height = t3.height;
        }, t2.prototype.copyFromFloats = function(t3, e2, i2, o2) {
          this.left = t3, this.top = e2, this.width = i2, this.height = o2;
        }, t2.CombineToRef = function(t3, e2, i2) {
          var o2 = Math.min(t3.left, e2.left), r2 = Math.min(t3.top, e2.top), n2 = Math.max(t3.left + t3.width, e2.left + e2.width), a2 = Math.max(t3.top + t3.height, e2.top + e2.height);
          i2.left = o2, i2.top = r2, i2.width = n2 - o2, i2.height = a2 - r2;
        }, t2.prototype.addAndTransformToRef = function(t3, e2, i2, o2, r2, n2) {
          var a2 = this.left + e2, s2 = this.top + i2, l2 = this.width + o2, _2 = this.height + r2;
          p[0].copyFromFloats(a2, s2), p[1].copyFromFloats(a2 + l2, s2), p[2].copyFromFloats(a2 + l2, s2 + _2), p[3].copyFromFloats(a2, s2 + _2), b.copyFromFloats(Number.MAX_VALUE, Number.MAX_VALUE), m.copyFromFloats(0, 0);
          for (var h2 = 0; h2 < 4; h2++) t3.transformCoordinates(p[h2].x, p[h2].y, g[h2]), b.x = Math.floor(Math.min(b.x, g[h2].x)), b.y = Math.floor(Math.min(b.y, g[h2].y)), m.x = Math.ceil(Math.max(m.x, g[h2].x)), m.y = Math.ceil(Math.max(m.y, g[h2].y));
          n2.left = b.x, n2.top = b.y, n2.width = m.x - b.x, n2.height = m.y - b.y;
        }, t2.prototype.transformToRef = function(t3, e2) {
          this.addAndTransformToRef(t3, 0, 0, 0, 0, e2);
        }, t2.prototype.isEqualsTo = function(t3) {
          return this.left === t3.left && this.top === t3.top && this.width === t3.width && this.height === t3.height;
        }, t2.Empty = function() {
          return new t2(0, 0, 0, 0);
        }, t2;
      }(), y = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = 0);
          var o2 = t2.call(this, e3.x, e3.y) || this;
          return o2.buttonIndex = i2, o2;
        }
        return l(e2, t2), e2;
      }(d.Vector2), x = function() {
        function t2(t3, e2, i2, o2, r2, n2) {
          this.m = new Float32Array(6), this.fromValues(t3, e2, i2, o2, r2, n2);
        }
        return t2.prototype.fromValues = function(t3, e2, i2, o2, r2, n2) {
          return this.m[0] = t3, this.m[1] = e2, this.m[2] = i2, this.m[3] = o2, this.m[4] = r2, this.m[5] = n2, this;
        }, t2.prototype.determinant = function() {
          return this.m[0] * this.m[3] - this.m[1] * this.m[2];
        }, t2.prototype.invertToRef = function(t3) {
          var e2 = this.m[0], i2 = this.m[1], o2 = this.m[2], r2 = this.m[3], n2 = this.m[4], a2 = this.m[5], s2 = this.determinant();
          if (s2 < d.Epsilon * d.Epsilon) return t3.m[0] = 0, t3.m[1] = 0, t3.m[2] = 0, t3.m[3] = 0, t3.m[4] = 0, t3.m[5] = 0, this;
          var l2 = 1 / s2, _2 = o2 * a2 - r2 * n2, h2 = i2 * n2 - e2 * a2;
          return t3.m[0] = r2 * l2, t3.m[1] = -i2 * l2, t3.m[2] = -o2 * l2, t3.m[3] = e2 * l2, t3.m[4] = _2 * l2, t3.m[5] = h2 * l2, this;
        }, t2.prototype.multiplyToRef = function(t3, e2) {
          var i2 = this.m[0], o2 = this.m[1], r2 = this.m[2], n2 = this.m[3], a2 = this.m[4], s2 = this.m[5], l2 = t3.m[0], _2 = t3.m[1], h2 = t3.m[2], c2 = t3.m[3], u2 = t3.m[4], d2 = t3.m[5];
          return e2.m[0] = i2 * l2 + o2 * h2, e2.m[1] = i2 * _2 + o2 * c2, e2.m[2] = r2 * l2 + n2 * h2, e2.m[3] = r2 * _2 + n2 * c2, e2.m[4] = a2 * l2 + s2 * h2 + u2, e2.m[5] = a2 * _2 + s2 * c2 + d2, this;
        }, t2.prototype.transformCoordinates = function(t3, e2, i2) {
          return i2.x = t3 * this.m[0] + e2 * this.m[2] + this.m[4], i2.y = t3 * this.m[1] + e2 * this.m[3] + this.m[5], this;
        }, t2.Identity = function() {
          return new t2(1, 0, 0, 1, 0, 0);
        }, t2.IdentityToRef = function(t3) {
          t3.m[0] = 1, t3.m[1] = 0, t3.m[2] = 0, t3.m[3] = 1, t3.m[4] = 0, t3.m[5] = 0;
        }, t2.TranslationToRef = function(t3, e2, i2) {
          i2.fromValues(1, 0, 0, 1, t3, e2);
        }, t2.ScalingToRef = function(t3, e2, i2) {
          i2.fromValues(t3, 0, 0, e2, 0, 0);
        }, t2.RotationToRef = function(t3, e2) {
          var i2 = Math.sin(t3), o2 = Math.cos(t3);
          e2.fromValues(o2, i2, -i2, o2, 0, 0);
        }, t2.ComposeToRef = function(e2, i2, o2, r2, n2, a2, s2) {
          t2.TranslationToRef(e2, i2, t2._TempPreTranslationMatrix), t2.ScalingToRef(r2, n2, t2._TempScalingMatrix), t2.RotationToRef(o2, t2._TempRotationMatrix), t2.TranslationToRef(-e2, -i2, t2._TempPostTranslationMatrix), t2._TempPreTranslationMatrix.multiplyToRef(t2._TempScalingMatrix, t2._TempCompose0), t2._TempCompose0.multiplyToRef(t2._TempRotationMatrix, t2._TempCompose1), a2 ? (t2._TempCompose1.multiplyToRef(t2._TempPostTranslationMatrix, t2._TempCompose2), t2._TempCompose2.multiplyToRef(a2, s2)) : t2._TempCompose1.multiplyToRef(t2._TempPostTranslationMatrix, s2);
        }, t2._TempPreTranslationMatrix = t2.Identity(), t2._TempPostTranslationMatrix = t2.Identity(), t2._TempRotationMatrix = t2.Identity(), t2._TempScalingMatrix = t2.Identity(), t2._TempCompose0 = t2.Identity(), t2._TempCompose1 = t2.Identity(), t2._TempCompose2 = t2.Identity(), t2;
      }(), P = function() {
        function t2() {
        }
        return t2.Round = function(e2, i2) {
          return void 0 === i2 && (i2 = t2.DefaultRoundingPrecision), Math.round(e2 * i2) / i2;
        }, t2.DefaultRoundingPrecision = 100, t2;
      }(), I = function() {
        function t2(e2) {
          this.name = e2, this._alpha = 1, this._alphaSet = false, this._zIndex = 0, this._currentMeasure = v.Empty(), this._tempPaddingMeasure = v.Empty(), this._fontFamily = "", this._fontStyle = "", this._fontWeight = "", this._fontSize = new f(18, f.UNITMODE_PIXEL, false), this._width = new f(1, f.UNITMODE_PERCENTAGE, false), this._height = new f(1, f.UNITMODE_PERCENTAGE, false), this._color = "", this._style = null, this._horizontalAlignment = t2.HORIZONTAL_ALIGNMENT_CENTER, this._verticalAlignment = t2.VERTICAL_ALIGNMENT_CENTER, this._isDirty = true, this._wasDirty = false, this._tempParentMeasure = v.Empty(), this._prevCurrentMeasureTransformedIntoGlobalSpace = v.Empty(), this._cachedParentMeasure = v.Empty(), this._descendantsOnlyPadding = false, this._paddingLeft = new f(0), this._paddingRight = new f(0), this._paddingTop = new f(0), this._paddingBottom = new f(0), this._left = new f(0), this._top = new f(0), this._scaleX = 1, this._scaleY = 1, this._rotation = 0, this._transformCenterX = 0.5, this._transformCenterY = 0.5, this._transformMatrix = x.Identity(), this._invertTransformMatrix = x.Identity(), this._transformedPosition = d.Vector2.Zero(), this._isMatrixDirty = true, this._isVisible = true, this._isHighlighted = false, this._highlightColor = "#4affff", this._highlightLineWidth = 2, this._fontSet = false, this._dummyVector2 = d.Vector2.Zero(), this._downCount = 0, this._enterCount = -1, this._doNotRender = false, this._downPointerIds = {}, this._evaluatedMeasure = new v(0, 0, 0, 0), this._evaluatedParentMeasure = new v(0, 0, 0, 0), this._isEnabled = true, this._disabledColor = "#9a9a9a", this._disabledColorItem = "#6a6a6a", this._isReadOnly = false, this._gradient = null, this._rebuildLayout = false, this.onEnabledStateChangedObservable = new d.Observable(), this._customData = {}, this._isClipped = false, this._automaticSize = false, this.metadata = null, this.isHitTestVisible = true, this.isPointerBlocker = false, this.isFocusInvisible = false, this._clipChildren = true, this._clipContent = true, this.useBitmapCache = false, this._shadowOffsetX = 0, this._shadowOffsetY = 0, this._shadowBlur = 0, this._previousShadowBlur = 0, this._shadowColor = "black", this.hoverCursor = "", this._linkOffsetX = new f(0), this._linkOffsetY = new f(0), this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new d.Observable(), this.onWheelObservable = new d.Observable(), this.onPointerMoveObservable = new d.Observable(), this.onPointerOutObservable = new d.Observable(), this.onPointerDownObservable = new d.Observable(), this.onPointerUpObservable = new d.Observable(), this.onPointerClickObservable = new d.Observable(), this.onEnterPressedObservable = new d.Observable(), this.onPointerEnterObservable = new d.Observable(), this.onDirtyObservable = new d.Observable(), this.onBeforeDrawObservable = new d.Observable(), this.onAfterDrawObservable = new d.Observable(), this.onDisposeObservable = new d.Observable(), this.onIsVisibleChangedObservable = new d.Observable(), this.isSerializable = true, this._fixedRatio = 0, this._fixedRatioMasterIsWidth = true, this.animations = null, this._focusedColor = null, this.tabIndex = -1, this._isFocused = false, this._unfocusedColor = null, this.onFocusObservable = new d.Observable(), this.onBlurObservable = new d.Observable(), this.onKeyboardEventProcessedObservable = new d.Observable(), this._tmpMeasureA = new v(0, 0, 0, 0);
        }
        return Object.defineProperty(t2.prototype, "isReadOnly", { get: function() {
          return this._isReadOnly;
        }, set: function(t3) {
          this._isReadOnly = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "transformedMeasure", { get: function() {
          return this._evaluatedMeasure;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "clipChildren", { get: function() {
          return this._clipChildren;
        }, set: function(t3) {
          this._clipChildren = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "clipContent", { get: function() {
          return this._clipContent;
        }, set: function(t3) {
          this._clipContent = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "shadowOffsetX", { get: function() {
          return this._shadowOffsetX;
        }, set: function(t3) {
          this._shadowOffsetX !== t3 && (this._shadowOffsetX = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "shadowOffsetY", { get: function() {
          return this._shadowOffsetY;
        }, set: function(t3) {
          this._shadowOffsetY !== t3 && (this._shadowOffsetY = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "shadowBlur", { get: function() {
          return this._shadowBlur;
        }, set: function(t3) {
          this._shadowBlur !== t3 && (this._previousShadowBlur = this._shadowBlur, this._shadowBlur = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "shadowColor", { get: function() {
          return this._shadowColor;
        }, set: function(t3) {
          this._shadowColor !== t3 && (this._shadowColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "typeName", { get: function() {
          return this._getTypeName();
        }, enumerable: false, configurable: true }), t2.prototype.getClassName = function() {
          return this._getTypeName();
        }, Object.defineProperty(t2.prototype, "accessibilityTag", { get: function() {
          return this._accessibilityTag;
        }, set: function(t3) {
          this._accessibilityTag = t3, this.onAccessibilityTagChangedObservable.notifyObservers(t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "host", { get: function() {
          return this._host;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontOffset", { get: function() {
          return this._fontOffset;
        }, set: function(t3) {
          this._fontOffset = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "alpha", { get: function() {
          return this._alpha;
        }, set: function(t3) {
          this._alpha !== t3 && (this._alphaSet = true, this._alpha = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "highlightLineWidth", { get: function() {
          return this._highlightLineWidth;
        }, set: function(t3) {
          this._highlightLineWidth !== t3 && (this._highlightLineWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isHighlighted", { get: function() {
          return this._isHighlighted;
        }, set: function(t3) {
          this._isHighlighted !== t3 && (this._isHighlighted = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "highlightColor", { get: function() {
          return this._highlightColor;
        }, set: function(t3) {
          this._highlightColor !== t3 && (this._highlightColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "scaleX", { get: function() {
          return this._scaleX;
        }, set: function(t3) {
          this._scaleX !== t3 && (this._scaleX = t3, this._markAsDirty(), this._markMatrixAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "scaleY", { get: function() {
          return this._scaleY;
        }, set: function(t3) {
          this._scaleY !== t3 && (this._scaleY = t3, this._markAsDirty(), this._markMatrixAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "rotation", { get: function() {
          return this._rotation;
        }, set: function(t3) {
          this._rotation !== t3 && (this._rotation = t3, this._markAsDirty(), this._markMatrixAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "transformCenterY", { get: function() {
          return this._transformCenterY;
        }, set: function(t3) {
          this._transformCenterY !== t3 && (this._transformCenterY = t3, this._markAsDirty(), this._markMatrixAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "transformCenterX", { get: function() {
          return this._transformCenterX;
        }, set: function(t3) {
          this._transformCenterX !== t3 && (this._transformCenterX = t3, this._markAsDirty(), this._markMatrixAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "horizontalAlignment", { get: function() {
          return this._horizontalAlignment;
        }, set: function(t3) {
          this._horizontalAlignment !== t3 && (this._horizontalAlignment = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "verticalAlignment", { get: function() {
          return this._verticalAlignment;
        }, set: function(t3) {
          this._verticalAlignment !== t3 && (this._verticalAlignment = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fixedRatio", { get: function() {
          return this._fixedRatio;
        }, set: function(t3) {
          this._fixedRatio !== t3 && (this._fixedRatio = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fixedRatioMasterIsWidth", { get: function() {
          return this._fixedRatioMasterIsWidth;
        }, set: function(t3) {
          this._fixedRatioMasterIsWidth !== t3 && (this._fixedRatioMasterIsWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "width", { get: function() {
          return this._width.toString(this._host);
        }, set: function(t3) {
          this._fixedRatioMasterIsWidth = true, this._width.toString(this._host) !== t3 && this._width.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "widthInPixels", { get: function() {
          return this._width.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, set: function(t3) {
          isNaN(t3) || (this._fixedRatioMasterIsWidth = true, this.width = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "height", { get: function() {
          return this._height.toString(this._host);
        }, set: function(t3) {
          this._fixedRatioMasterIsWidth = false, this._height.toString(this._host) !== t3 && this._height.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "heightInPixels", { get: function() {
          return this._height.getValueInPixel(this._host, this._cachedParentMeasure.height);
        }, set: function(t3) {
          isNaN(t3) || (this._fixedRatioMasterIsWidth = false, this.height = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontFamily", { get: function() {
          return this._fontFamily;
        }, set: function(t3) {
          this._fontFamily !== t3 && (this._fontFamily = t3, this._resetFontCache());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontStyle", { get: function() {
          return this._fontStyle;
        }, set: function(t3) {
          this._fontStyle !== t3 && (this._fontStyle = t3, this._resetFontCache());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontWeight", { get: function() {
          return this._fontWeight;
        }, set: function(t3) {
          this._fontWeight !== t3 && (this._fontWeight = t3, this._resetFontCache());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "style", { get: function() {
          return this._style;
        }, set: function(t3) {
          var e2 = this;
          this._style && (this._style.onChangedObservable.remove(this._styleObserver), this._styleObserver = null), this._style = t3, this._style && (this._styleObserver = this._style.onChangedObservable.add(function() {
            e2._markAsDirty(), e2._resetFontCache();
          })), this._markAsDirty(), this._resetFontCache();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "_isFontSizeInPercentage", { get: function() {
          return this._fontSize.isPercentage;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontSizeInPixels", { get: function() {
          var t3 = this._style ? this._style._fontSize : this._fontSize;
          return t3.isPixel ? t3.getValue(this._host) : t3.getValueInPixel(this._host, this._tempParentMeasure.height || this._cachedParentMeasure.height);
        }, set: function(t3) {
          isNaN(t3) || (this.fontSize = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontSize", { get: function() {
          return this._fontSize.toString(this._host);
        }, set: function(t3) {
          this._fontSize.toString(this._host) !== t3 && this._fontSize.fromString(t3) && (this._markAsDirty(), this._resetFontCache());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "color", { get: function() {
          return this._color;
        }, set: function(t3) {
          this._color !== t3 && (this._color = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "gradient", { get: function() {
          return this._gradient;
        }, set: function(t3) {
          this._gradient !== t3 && (this._gradient = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "zIndex", { get: function() {
          return this._zIndex;
        }, set: function(t3) {
          this.zIndex !== t3 && (this._zIndex = t3, this.parent && this.parent._reOrderControl(this));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "notRenderable", { get: function() {
          return this._doNotRender;
        }, set: function(t3) {
          this._doNotRender !== t3 && (this._doNotRender = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isVisible", { get: function() {
          return this._isVisible;
        }, set: function(t3) {
          this._isVisible !== t3 && (this._isVisible = t3, this._markAsDirty(true), this.onIsVisibleChangedObservable.notifyObservers(t3));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isDirty", { get: function() {
          return this._isDirty;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "linkedMesh", { get: function() {
          return this._linkedMesh;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "descendantsOnlyPadding", { get: function() {
          return this._descendantsOnlyPadding;
        }, set: function(t3) {
          this._descendantsOnlyPadding !== t3 && (this._descendantsOnlyPadding = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingLeft", { get: function() {
          return this._paddingLeft.toString(this._host);
        }, set: function(t3) {
          this._paddingLeft.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingLeftInPixels", { get: function() {
          return this._paddingLeft.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, set: function(t3) {
          isNaN(t3) || (this.paddingLeft = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "_paddingLeftInPixels", { get: function() {
          return this._descendantsOnlyPadding ? 0 : this.paddingLeftInPixels;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingRight", { get: function() {
          return this._paddingRight.toString(this._host);
        }, set: function(t3) {
          this._paddingRight.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingRightInPixels", { get: function() {
          return this._paddingRight.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, set: function(t3) {
          isNaN(t3) || (this.paddingRight = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "_paddingRightInPixels", { get: function() {
          return this._descendantsOnlyPadding ? 0 : this.paddingRightInPixels;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingTop", { get: function() {
          return this._paddingTop.toString(this._host);
        }, set: function(t3) {
          this._paddingTop.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingTopInPixels", { get: function() {
          return this._paddingTop.getValueInPixel(this._host, this._cachedParentMeasure.height);
        }, set: function(t3) {
          isNaN(t3) || (this.paddingTop = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "_paddingTopInPixels", { get: function() {
          return this._descendantsOnlyPadding ? 0 : this.paddingTopInPixels;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingBottom", { get: function() {
          return this._paddingBottom.toString(this._host);
        }, set: function(t3) {
          this._paddingBottom.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "paddingBottomInPixels", { get: function() {
          return this._paddingBottom.getValueInPixel(this._host, this._cachedParentMeasure.height);
        }, set: function(t3) {
          isNaN(t3) || (this.paddingBottom = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "_paddingBottomInPixels", { get: function() {
          return this._descendantsOnlyPadding ? 0 : this.paddingBottomInPixels;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "left", { get: function() {
          return this._left.toString(this._host);
        }, set: function(t3) {
          this._left.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "leftInPixels", { get: function() {
          return this._left.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, set: function(t3) {
          isNaN(t3) || (this.left = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "top", { get: function() {
          return this._top.toString(this._host);
        }, set: function(t3) {
          this._top.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "topInPixels", { get: function() {
          return this._top.getValueInPixel(this._host, this._cachedParentMeasure.height);
        }, set: function(t3) {
          isNaN(t3) || (this.top = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "linkOffsetX", { get: function() {
          return this._linkOffsetX.toString(this._host);
        }, set: function(t3) {
          this._linkOffsetX.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "linkOffsetXInPixels", { get: function() {
          return this._linkOffsetX.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, set: function(t3) {
          isNaN(t3) || (this.linkOffsetX = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "linkOffsetY", { get: function() {
          return this._linkOffsetY.toString(this._host);
        }, set: function(t3) {
          this._linkOffsetY.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "linkOffsetYInPixels", { get: function() {
          return this._linkOffsetY.getValueInPixel(this._host, this._cachedParentMeasure.height);
        }, set: function(t3) {
          isNaN(t3) || (this.linkOffsetY = t3 + "px");
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "centerX", { get: function() {
          return this._currentMeasure.left + this._currentMeasure.width / 2;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "centerY", { get: function() {
          return this._currentMeasure.top + this._currentMeasure.height / 2;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isEnabled", { get: function() {
          return this._isEnabled;
        }, set: function(t3) {
          var e2 = this;
          if (this._isEnabled !== t3) {
            this._isEnabled = t3, this._markAsDirty();
            var i2 = function(t4) {
              if (t4.host) {
                for (var o2 in t4.host._lastControlOver) t4 === e2.host._lastControlOver[o2] && (t4._onPointerOut(t4, null, true), delete t4.host._lastControlOver[o2]);
                if (void 0 !== t4.children) for (var r2 = 0, n2 = t4.children; r2 < n2.length; r2++) {
                  var a2 = n2[r2];
                  i2(a2);
                }
              }
            };
            i2(this), this.onEnabledStateChangedObservable.notifyObservers(t3);
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "disabledColor", { get: function() {
          return this._disabledColor;
        }, set: function(t3) {
          this._disabledColor !== t3 && (this._disabledColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "disabledColorItem", { get: function() {
          return this._disabledColorItem;
        }, set: function(t3) {
          this._disabledColorItem !== t3 && (this._disabledColorItem = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "focusedColor", { get: function() {
          return this._focusedColor;
        }, set: function(t3) {
          this._focusedColor = t3;
        }, enumerable: false, configurable: true }), t2.prototype.onBlur = function() {
          this._isFocused && (this._isFocused = false, this.focusedColor && null != this._unfocusedColor && (this.color = this._unfocusedColor), this.onBlurObservable.notifyObservers(this));
        }, t2.prototype.onFocus = function() {
          this._isFocused = true, this.focusedColor && (this._unfocusedColor = this.color, this.color = this.focusedColor), this.onFocusObservable.notifyObservers(this);
        }, t2.prototype.keepsFocusWith = function() {
          return null;
        }, t2.prototype.focus = function() {
          this._host.moveFocusToControl(this);
        }, t2.prototype.blur = function() {
          this._host.focusedControl = null;
        }, t2.prototype.processKeyboard = function(t3) {
          "Enter" === t3.key && this.onEnterPressedObservable.notifyObservers(this), this.onKeyboardEventProcessedObservable.notifyObservers(t3, -1, this);
        }, t2.prototype._getTypeName = function() {
          return "Control";
        }, t2.prototype.getAscendantOfClass = function(t3) {
          return this.parent ? this.parent.getClassName() === t3 ? this.parent : this.parent.getAscendantOfClass(t3) : null;
        }, t2.prototype.markAsDirty = function(t3) {
          void 0 === t3 && (t3 = false), this._markAsDirty(t3);
        }, t2.prototype.markAllAsDirty = function() {
          this._markAllAsDirty();
        }, t2.prototype._resetFontCache = function() {
          this._fontSet = true, this._markAsDirty();
        }, t2.prototype.isAscendant = function(t3) {
          return !!this.parent && (this.parent === t3 || this.parent.isAscendant(t3));
        }, t2.prototype.getLocalCoordinates = function(t3) {
          var e2 = d.Vector2.Zero();
          return this.getLocalCoordinatesToRef(t3, e2), e2;
        }, t2.prototype.getLocalCoordinatesToRef = function(t3, e2) {
          return e2.x = t3.x - this._currentMeasure.left, e2.y = t3.y - this._currentMeasure.top, this;
        }, t2.prototype.getParentLocalCoordinates = function(t3) {
          var e2 = d.Vector2.Zero();
          return e2.x = t3.x - this._cachedParentMeasure.left, e2.y = t3.y - this._cachedParentMeasure.top, e2;
        }, t2.prototype.moveToVector3 = function(e2, i2) {
          if (this._host && this.parent === this._host._rootContainer) {
            this.horizontalAlignment = t2.HORIZONTAL_ALIGNMENT_LEFT, this.verticalAlignment = t2.VERTICAL_ALIGNMENT_TOP;
            var o2 = this._host._getGlobalViewport(), r2 = d.Vector3.Project(e2, d.Matrix.IdentityReadOnly, i2.getTransformMatrix(), o2);
            this._moveToProjectedPosition(r2), r2.z < 0 || r2.z > 1 ? this.notRenderable = true : this.notRenderable = false;
          } else d.Tools.Error("Cannot move a control to a vector3 if the control is not at root level");
        }, t2.prototype.getDescendantsToRef = function(t3, e2, i2) {
          void 0 === e2 && (e2 = false);
        }, t2.prototype.getDescendants = function(t3, e2) {
          var i2 = [];
          return this.getDescendantsToRef(i2, t3, e2), i2;
        }, t2.prototype.linkWithMesh = function(e2) {
          if (!this._host || this.parent && this.parent !== this._host._rootContainer) e2 && d.Tools.Error("Cannot link a control to a mesh if the control is not at root level");
          else {
            var i2 = this._host._linkedControls.indexOf(this);
            if (-1 !== i2) return this._linkedMesh = e2, void (e2 || this._host._linkedControls.splice(i2, 1));
            e2 && (this.horizontalAlignment = t2.HORIZONTAL_ALIGNMENT_LEFT, this.verticalAlignment = t2.VERTICAL_ALIGNMENT_TOP, this._linkedMesh = e2, this._host._linkedControls.push(this));
          }
        }, t2.prototype.setPadding = function(t3, e2, i2, o2) {
          var r2 = t3, n2 = null != e2 ? e2 : r2, a2 = null != i2 ? i2 : r2, s2 = null != o2 ? o2 : n2;
          this.paddingTop = r2, this.paddingRight = n2, this.paddingBottom = a2, this.paddingLeft = s2;
        }, t2.prototype.setPaddingInPixels = function(t3, e2, i2, o2) {
          var r2 = t3, n2 = null != e2 ? e2 : r2, a2 = null != i2 ? i2 : r2, s2 = null != o2 ? o2 : n2;
          this.paddingTopInPixels = r2, this.paddingRightInPixels = n2, this.paddingBottomInPixels = a2, this.paddingLeftInPixels = s2;
        }, t2.prototype._moveToProjectedPosition = function(t3) {
          var e2, i2 = this._left.getValue(this._host), o2 = this._top.getValue(this._host), r2 = null === (e2 = this.parent) || void 0 === e2 ? void 0 : e2._currentMeasure;
          r2 && this._processMeasures(r2, this._host.getContext());
          var n2 = t3.x + this._linkOffsetX.getValue(this._host) - this._currentMeasure.width / 2, a2 = t3.y + this._linkOffsetY.getValue(this._host) - this._currentMeasure.height / 2;
          this._left.ignoreAdaptiveScaling && this._top.ignoreAdaptiveScaling && (Math.abs(n2 - i2) < 0.5 && (n2 = i2), Math.abs(a2 - o2) < 0.5 && (a2 = o2)), i2 === n2 && o2 === a2 || (this.left = n2 + "px", this.top = a2 + "px", this._left.ignoreAdaptiveScaling = true, this._top.ignoreAdaptiveScaling = true, this._markAsDirty());
        }, t2.prototype._offsetLeft = function(t3) {
          this._isDirty = true, this._currentMeasure.left += t3;
        }, t2.prototype._offsetTop = function(t3) {
          this._isDirty = true, this._currentMeasure.top += t3;
        }, t2.prototype._markMatrixAsDirty = function() {
          this._isMatrixDirty = true, this._flagDescendantsAsMatrixDirty();
        }, t2.prototype._flagDescendantsAsMatrixDirty = function() {
        }, t2.prototype._intersectsRect = function(t3, e2) {
          return this._transform(e2), !(this._evaluatedMeasure.left >= t3.left + t3.width || this._evaluatedMeasure.top >= t3.top + t3.height || this._evaluatedMeasure.left + this._evaluatedMeasure.width <= t3.left || this._evaluatedMeasure.top + this._evaluatedMeasure.height <= t3.top);
        }, t2.prototype._computeAdditionalOffsetX = function() {
          return 0;
        }, t2.prototype._computeAdditionalOffsetY = function() {
          return 0;
        }, t2.prototype.invalidateRect = function() {
          if (this._transform(), this.host && this.host.useInvalidateRectOptimization) {
            this._currentMeasure.transformToRef(this._transformMatrix, this._tmpMeasureA), v.CombineToRef(this._tmpMeasureA, this._prevCurrentMeasureTransformedIntoGlobalSpace, this._tmpMeasureA);
            var t3 = this.shadowOffsetX, e2 = this.shadowOffsetY, i2 = Math.max(this._previousShadowBlur, this.shadowBlur), o2 = Math.min(Math.min(t3, 0) - 2 * i2, 0), r2 = Math.max(Math.max(t3, 0) + 2 * i2, 0), n2 = Math.min(Math.min(e2, 0) - 2 * i2, 0), a2 = Math.max(Math.max(e2, 0) + 2 * i2, 0), s2 = this._computeAdditionalOffsetX(), l2 = this._computeAdditionalOffsetY();
            this.host.invalidateRect(Math.floor(this._tmpMeasureA.left + o2 - s2), Math.floor(this._tmpMeasureA.top + n2 - l2), Math.ceil(this._tmpMeasureA.left + this._tmpMeasureA.width + r2 + s2), Math.ceil(this._tmpMeasureA.top + this._tmpMeasureA.height + a2 + l2));
          }
        }, t2.prototype._markAsDirty = function(t3) {
          void 0 === t3 && (t3 = false), (this._isVisible || t3) && (this._isDirty = true, this._markMatrixAsDirty(), this._host && this._host.markAsDirty());
        }, t2.prototype._markAllAsDirty = function() {
          this._markAsDirty(), this._font && this._prepareFont();
        }, t2.prototype._link = function(t3) {
          this._host = t3, this._host && (this.uniqueId = this._host.getScene().getUniqueId());
        }, t2.prototype._transform = function(t3) {
          if (this._isMatrixDirty || 1 !== this._scaleX || 1 !== this._scaleY || 0 !== this._rotation) {
            var e2 = this._currentMeasure.width * this._transformCenterX + this._currentMeasure.left, i2 = this._currentMeasure.height * this._transformCenterY + this._currentMeasure.top;
            t3 && (t3.translate(e2, i2), t3.rotate(this._rotation), t3.scale(this._scaleX, this._scaleY), t3.translate(-e2, -i2)), (this._isMatrixDirty || this._cachedOffsetX !== e2 || this._cachedOffsetY !== i2) && (this._cachedOffsetX = e2, this._cachedOffsetY = i2, this._isMatrixDirty = false, this._flagDescendantsAsMatrixDirty(), x.ComposeToRef(-e2, -i2, this._rotation, this._scaleX, this._scaleY, this.parent ? this.parent._transformMatrix : null, this._transformMatrix), this._transformMatrix.invertToRef(this._invertTransformMatrix), this._currentMeasure.transformToRef(this._transformMatrix, this._evaluatedMeasure));
          }
        }, t2.prototype._renderHighlight = function(t3) {
          this.isHighlighted && (t3.save(), t3.strokeStyle = this._highlightColor, t3.lineWidth = this._highlightLineWidth, this._renderHighlightSpecific(t3), t3.restore());
        }, t2.prototype._renderHighlightSpecific = function(t3) {
          t3.strokeRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height);
        }, t2.prototype._getColor = function(t3) {
          return this.gradient ? this.gradient.getCanvasGradient(t3) : this.color;
        }, t2.prototype._applyStates = function(e2) {
          this._isFontSizeInPercentage && (this._fontSet = true), this._host && this._host.useSmallestIdeal && !this._font && (this._fontSet = true), this._fontSet && (this._prepareFont(), this._fontSet = false), this._font && (e2.font = this._font), (this._color || this.gradient) && (e2.fillStyle = this._getColor(e2)), t2.AllowAlphaInheritance ? e2.globalAlpha *= this._alpha : this._alphaSet && (e2.globalAlpha = this.parent && !this.parent.renderToIntermediateTexture ? this.parent.alpha * this._alpha : this._alpha);
        }, t2.prototype._layout = function(t3, e2) {
          if (!this.isDirty && (!this.isVisible || this.notRenderable)) return false;
          if (this._isDirty || !this._cachedParentMeasure.isEqualsTo(t3)) {
            this.host._numLayoutCalls++, this._currentMeasure.addAndTransformToRef(this._transformMatrix, 0 | -this._paddingLeftInPixels, 0 | -this._paddingTopInPixels, 0 | this._paddingRightInPixels, 0 | this._paddingBottomInPixels, this._prevCurrentMeasureTransformedIntoGlobalSpace), e2.save();
            var i2 = 0;
            do {
              this._rebuildLayout = false, this._processMeasures(t3, e2), i2++;
            } while (this._rebuildLayout && i2 < 4);
            i2 >= 4 && d.Logger.Error("Layout cycle detected in GUI (Control name=".concat(this.name, ", uniqueId=").concat(this.uniqueId, ")")), e2.restore(), this.invalidateRect(), this._evaluateClippingState(t3);
          }
          return this._wasDirty = this._isDirty, this._isDirty = false, true;
        }, t2.prototype._processMeasures = function(t3, e2) {
          e2.save(), this._applyStates(e2), this._tempPaddingMeasure.copyFrom(t3), this.parent && this.parent.descendantsOnlyPadding && (this._tempPaddingMeasure.left += this.parent.paddingLeftInPixels, this._tempPaddingMeasure.top += this.parent.paddingTopInPixels, this._tempPaddingMeasure.width -= this.parent.paddingLeftInPixels + this.parent.paddingRightInPixels, this._tempPaddingMeasure.height -= this.parent.paddingTopInPixels + this.parent.paddingBottomInPixels), this._currentMeasure.copyFrom(this._tempPaddingMeasure), this._preMeasure(this._tempPaddingMeasure, e2), this._measure(), this._postMeasure(this._tempPaddingMeasure, e2), this._computeAlignment(this._tempPaddingMeasure, e2), this._currentMeasure.left = 0 | this._currentMeasure.left, this._currentMeasure.top = 0 | this._currentMeasure.top, this._currentMeasure.width = 0 | this._currentMeasure.width, this._currentMeasure.height = 0 | this._currentMeasure.height, this._additionalProcessing(this._tempPaddingMeasure, e2), this._cachedParentMeasure.copyFrom(this._tempPaddingMeasure), this._currentMeasure.transformToRef(this._transformMatrix, this._evaluatedMeasure), this.onDirtyObservable.hasObservers() && this.onDirtyObservable.notifyObservers(this), e2.restore();
        }, t2.prototype._evaluateClippingState = function(t3) {
          if (this._transform(), this._currentMeasure.transformToRef(this._transformMatrix, this._evaluatedMeasure), this.parent && this.parent.clipChildren) {
            if (t3.transformToRef(this.parent._transformMatrix, this._evaluatedParentMeasure), this._evaluatedMeasure.left > this._evaluatedParentMeasure.left + this._evaluatedParentMeasure.width) return void (this._isClipped = true);
            if (this._evaluatedMeasure.left + this._evaluatedMeasure.width < this._evaluatedParentMeasure.left) return void (this._isClipped = true);
            if (this._evaluatedMeasure.top > this._evaluatedParentMeasure.top + this._evaluatedParentMeasure.height) return void (this._isClipped = true);
            if (this._evaluatedMeasure.top + this._evaluatedMeasure.height < this._evaluatedParentMeasure.top) return void (this._isClipped = true);
          }
          this._isClipped = false;
        }, t2.prototype._measure = function() {
          this._width.isPixel ? this._currentMeasure.width = this._width.getValue(this._host) : this._currentMeasure.width *= this._width.getValue(this._host), this._height.isPixel ? this._currentMeasure.height = this._height.getValue(this._host) : this._currentMeasure.height *= this._height.getValue(this._host), 0 !== this._fixedRatio && (this._fixedRatioMasterIsWidth ? this._currentMeasure.height = this._currentMeasure.width * this._fixedRatio : this._currentMeasure.width = this._currentMeasure.height * this._fixedRatio);
        }, t2.prototype._computeAlignment = function(e2, i2) {
          var o2 = this._currentMeasure.width, r2 = this._currentMeasure.height, n2 = e2.width, a2 = e2.height, s2 = 0, l2 = 0;
          switch (this.horizontalAlignment) {
            case t2.HORIZONTAL_ALIGNMENT_LEFT:
              s2 = 0;
              break;
            case t2.HORIZONTAL_ALIGNMENT_RIGHT:
              s2 = n2 - o2;
              break;
            case t2.HORIZONTAL_ALIGNMENT_CENTER:
              s2 = (n2 - o2) / 2;
          }
          switch (this.verticalAlignment) {
            case t2.VERTICAL_ALIGNMENT_TOP:
              l2 = 0;
              break;
            case t2.VERTICAL_ALIGNMENT_BOTTOM:
              l2 = a2 - r2;
              break;
            case t2.VERTICAL_ALIGNMENT_CENTER:
              l2 = (a2 - r2) / 2;
          }
          this.descendantsOnlyPadding || (this._paddingLeft.isPixel ? (this._currentMeasure.left += this._paddingLeft.getValue(this._host), this._currentMeasure.width -= this._paddingLeft.getValue(this._host)) : (this._currentMeasure.left += n2 * this._paddingLeft.getValue(this._host), this._currentMeasure.width -= n2 * this._paddingLeft.getValue(this._host)), this._paddingRight.isPixel ? this._currentMeasure.width -= this._paddingRight.getValue(this._host) : this._currentMeasure.width -= n2 * this._paddingRight.getValue(this._host), this._paddingTop.isPixel ? (this._currentMeasure.top += this._paddingTop.getValue(this._host), this._currentMeasure.height -= this._paddingTop.getValue(this._host)) : (this._currentMeasure.top += a2 * this._paddingTop.getValue(this._host), this._currentMeasure.height -= a2 * this._paddingTop.getValue(this._host)), this._paddingBottom.isPixel ? this._currentMeasure.height -= this._paddingBottom.getValue(this._host) : this._currentMeasure.height -= a2 * this._paddingBottom.getValue(this._host)), this._left.isPixel ? this._currentMeasure.left += this._left.getValue(this._host) : this._currentMeasure.left += n2 * this._left.getValue(this._host), this._top.isPixel ? this._currentMeasure.top += this._top.getValue(this._host) : this._currentMeasure.top += a2 * this._top.getValue(this._host), this._currentMeasure.left += s2, this._currentMeasure.top += l2;
        }, t2.prototype._preMeasure = function(t3, e2) {
        }, t2.prototype._postMeasure = function(t3, e2) {
        }, t2.prototype._additionalProcessing = function(t3, e2) {
        }, t2.prototype._clipForChildren = function(t3) {
        }, t2.prototype._clip = function(e2, i2) {
          if (e2.beginPath(), t2._ClipMeasure.copyFrom(this._currentMeasure), i2) {
            i2.transformToRef(this._invertTransformMatrix, this._tmpMeasureA);
            var o2 = new v(0, 0, 0, 0);
            o2.left = Math.max(this._tmpMeasureA.left, this._currentMeasure.left), o2.top = Math.max(this._tmpMeasureA.top, this._currentMeasure.top), o2.width = Math.min(this._tmpMeasureA.left + this._tmpMeasureA.width, this._currentMeasure.left + this._currentMeasure.width) - o2.left, o2.height = Math.min(this._tmpMeasureA.top + this._tmpMeasureA.height, this._currentMeasure.top + this._currentMeasure.height) - o2.top, t2._ClipMeasure.copyFrom(o2);
          }
          if (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) {
            var r2 = this.shadowOffsetX, n2 = this.shadowOffsetY, a2 = this.shadowBlur, s2 = Math.min(Math.min(r2, 0) - 2 * a2, 0), l2 = Math.max(Math.max(r2, 0) + 2 * a2, 0), _2 = Math.min(Math.min(n2, 0) - 2 * a2, 0), h2 = Math.max(Math.max(n2, 0) + 2 * a2, 0);
            e2.rect(t2._ClipMeasure.left + s2, t2._ClipMeasure.top + _2, t2._ClipMeasure.width + l2 - s2, t2._ClipMeasure.height + h2 - _2);
          } else e2.rect(t2._ClipMeasure.left, t2._ClipMeasure.top, t2._ClipMeasure.width, t2._ClipMeasure.height);
          e2.clip();
        }, t2.prototype._render = function(t3, e2) {
          return !this.isVisible || this.notRenderable || this._isClipped ? (this._isDirty = false, false) : (this.host._numRenderCalls++, t3.save(), this._applyStates(t3), this._transform(t3), this.clipContent && this._clip(t3, e2), this.onBeforeDrawObservable.hasObservers() && this.onBeforeDrawObservable.notifyObservers(this), this.useBitmapCache && !this._wasDirty && this._cacheData ? t3.putImageData(this._cacheData, this._currentMeasure.left, this._currentMeasure.top) : this._draw(t3, e2), this.useBitmapCache && this._wasDirty && (this._cacheData = t3.getImageData(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height)), this._renderHighlight(t3), this.onAfterDrawObservable.hasObservers() && this.onAfterDrawObservable.notifyObservers(this), t3.restore(), true);
        }, t2.prototype._draw = function(t3, e2) {
        }, t2.prototype.contains = function(t3, e2) {
          return this._invertTransformMatrix.transformCoordinates(t3, e2, this._transformedPosition), t3 = this._transformedPosition.x, e2 = this._transformedPosition.y, !(t3 < this._currentMeasure.left || t3 > this._currentMeasure.left + this._currentMeasure.width || e2 < this._currentMeasure.top || e2 > this._currentMeasure.top + this._currentMeasure.height || (this.isPointerBlocker && (this._host._shouldBlockPointer = true), 0));
        }, t2.prototype._processPicking = function(t3, e2, i2, o2, r2, n2, a2, s2) {
          return !(!this._isEnabled || !this.isHitTestVisible || !this.isVisible || this._doNotRender || !this.contains(t3, e2) || (this._processObservables(o2, t3, e2, i2, r2, n2, a2, s2), 0));
        }, t2.prototype._onPointerMove = function(t3, e2, i2, o2) {
          this.onPointerMoveObservable.notifyObservers(e2, -1, t3, this, o2) && null != this.parent && !this.isPointerBlocker && this.parent._onPointerMove(t3, e2, i2, o2);
        }, t2.prototype._onPointerEnter = function(t3, e2) {
          return !(!this._isEnabled || this._enterCount > 0 || (-1 === this._enterCount && (this._enterCount = 0), this._enterCount++, this.onPointerEnterObservable.notifyObservers(this, -1, t3, this, e2) && null != this.parent && !this.isPointerBlocker && this.parent._onPointerEnter(t3, e2), 0));
        }, t2.prototype._onPointerOut = function(t3, e2, i2) {
          if (void 0 === i2 && (i2 = false), i2 || this._isEnabled) {
            this._enterCount = 0;
            var o2 = true;
            t3.isAscendant(this) || (o2 = this.onPointerOutObservable.notifyObservers(this, -1, t3, this, e2)), o2 && null != this.parent && !this.isPointerBlocker && this.parent._onPointerOut(t3, e2, i2);
          }
        }, t2.prototype._onPointerDown = function(t3, e2, i2, o2, r2) {
          return this._onPointerEnter(this, r2), -1 !== this.tabIndex && (this.host.focusedControl = this), 0 === this._downCount && (this._downCount++, this._downPointerIds[i2] = true, this.onPointerDownObservable.notifyObservers(new y(e2, o2), -1, t3, this, r2) && null != this.parent && !this.isPointerBlocker && this.parent._onPointerDown(t3, e2, i2, o2, r2), r2 && this.uniqueId !== this._host.rootContainer.uniqueId && this._host._capturedPointerIds.add(r2.event.pointerId), true);
        }, t2.prototype._onPointerUp = function(t3, e2, i2, o2, r2, n2) {
          if (this._isEnabled) {
            this._downCount = 0, delete this._downPointerIds[i2];
            var a2 = r2;
            r2 && (this._enterCount > 0 || -1 === this._enterCount) && (this._host.usePointerTapForClickEvent || (a2 = this.onPointerClickObservable.notifyObservers(new y(e2, o2), -1, t3, this, n2))), this.onPointerUpObservable.notifyObservers(new y(e2, o2), -1, t3, this, n2) && null != this.parent && !this.isPointerBlocker && this.parent._onPointerUp(t3, e2, i2, o2, a2, n2), n2 && this.uniqueId !== this._host.rootContainer.uniqueId && this._host._capturedPointerIds.delete(n2.event.pointerId), this._host.usePointerTapForClickEvent && this.isPointerBlocker && (this._host._shouldBlockPointer = false);
          }
        }, t2.prototype._onPointerPick = function(t3, e2, i2, o2, r2, n2) {
          if (!this._host.usePointerTapForClickEvent) return false;
          var a2 = r2;
          return r2 && (this._enterCount > 0 || -1 === this._enterCount) && (a2 = this.onPointerClickObservable.notifyObservers(new y(e2, o2), -1, t3, this, n2)), this.onPointerUpObservable.notifyObservers(new y(e2, o2), -1, t3, this, n2) && null != this.parent && !this.isPointerBlocker && this.parent._onPointerPick(t3, e2, i2, o2, a2, n2), this._host.usePointerTapForClickEvent && this.isPointerBlocker && (this._host._shouldBlockPointer = true), true;
        }, t2.prototype._forcePointerUp = function(t3) {
          if (void 0 === t3 && (t3 = null), null !== t3) this._onPointerUp(this, d.Vector2.Zero(), t3, 0, true);
          else for (var e2 in this._downPointerIds) this._onPointerUp(this, d.Vector2.Zero(), +e2, 0, true);
        }, t2.prototype._onWheelScroll = function(t3, e2) {
          this._isEnabled && this.onWheelObservable.notifyObservers(new d.Vector2(t3, e2)) && null != this.parent && this.parent._onWheelScroll(t3, e2);
        }, t2.prototype._onCanvasBlur = function() {
        }, t2.prototype._processObservables = function(t3, e2, i2, o2, r2, n2, a2, s2) {
          if (!this._isEnabled) return false;
          if (this._dummyVector2.copyFromFloats(e2, i2), t3 === d.PointerEventTypes.POINTERMOVE) {
            this._onPointerMove(this, this._dummyVector2, r2, o2);
            var l2 = this._host._lastControlOver[r2];
            return l2 && l2 !== this && l2._onPointerOut(this, o2), l2 !== this && this._onPointerEnter(this, o2), this._host._lastControlOver[r2] = this, true;
          }
          if (t3 === d.PointerEventTypes.POINTERDOWN) return this._onPointerDown(this, this._dummyVector2, r2, n2, o2), this._host._registerLastControlDown(this, r2), this._host._lastPickedControl = this, true;
          if (t3 === d.PointerEventTypes.POINTERUP) return this._host._lastControlDown[r2] && this._host._lastControlDown[r2]._onPointerUp(this, this._dummyVector2, r2, n2, true, o2), this._host.usePointerTapForClickEvent || delete this._host._lastControlDown[r2], true;
          if (t3 === d.PointerEventTypes.POINTERWHEEL) {
            if (this._host._lastControlOver[r2]) return this._host._lastControlOver[r2]._onWheelScroll(a2, s2), true;
          } else if (t3 === d.PointerEventTypes.POINTERTAP) return this._host._lastControlDown[r2] && this._host._lastControlDown[r2]._onPointerPick(this, this._dummyVector2, r2, n2, true, o2), delete this._host._lastControlDown[r2], true;
          return false;
        }, t2.prototype._getStyleProperty = function(t3, e2) {
          var i2, o2 = null !== (i2 = this._style && this._style[t3]) && void 0 !== i2 ? i2 : this[t3];
          return !o2 && this.parent ? this.parent._getStyleProperty(t3, e2) : this.parent ? o2 : e2;
        }, t2.prototype._prepareFont = function() {
          var e2, i2;
          if (this._font || this._fontSet) {
            this._font = this._getStyleProperty("fontStyle", "") + " " + this._getStyleProperty("fontWeight", "") + " " + this.fontSizeInPixels + "px " + this._getStyleProperty("fontFamily", "Arial"), this._fontOffset = t2._GetFontOffset(this._font, null === (i2 = null === (e2 = this._host) || void 0 === e2 ? void 0 : e2.getScene()) || void 0 === i2 ? void 0 : i2.getEngine());
            for (var o2 = 0, r2 = this.getDescendants(); o2 < r2.length; o2++) r2[o2]._markAllAsDirty();
          }
        }, t2.prototype.isDimensionFullyDefined = function(t3) {
          return this.getDimension(t3).isPixel;
        }, t2.prototype.getDimension = function(t3) {
          return "width" === t3 ? this._width : this._height;
        }, t2.prototype.clone = function(t3) {
          var e2 = {};
          this.serialize(e2, true);
          var i2 = new (d.Tools.Instantiate("BABYLON.GUI." + e2.className))();
          return i2.parse(e2, t3), i2;
        }, t2.prototype.parse = function(t3, e2, i2) {
          var o2 = this;
          return this._urlRewriter = i2, d.SerializationHelper.Parse(function() {
            return o2;
          }, t3, null), this.name = t3.name, this._parseFromContent(t3, null != e2 ? e2 : this._host), this;
        }, t2.prototype.serialize = function(t3, e2, i2) {
          if (void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = true), this.isSerializable || e2) {
            var o2 = 0, r2 = 0;
            this.host && (r2 = this.host.idealHeight, o2 = this.host.idealWidth, this.host.idealWidth = 0, this.host.idealHeight = 0), d.SerializationHelper.Serialize(this, t3), t3.name = this.name, t3.className = this.getClassName(), i2 && this._prepareFont(), this._fontFamily && (t3.fontFamily = this._fontFamily), this.fontSize && (t3.fontSize = this.fontSize), this.fontWeight && (t3.fontWeight = this.fontWeight), this.fontStyle && (t3.fontStyle = this.fontStyle), this._gradient && (t3.gradient = {}, this._gradient.serialize(t3.gradient)), d.SerializationHelper.AppendSerializedAnimations(this, t3), this.host && (this.host.idealWidth = o2, this.host.idealHeight = r2);
          }
        }, t2.prototype._parseFromContent = function(t3, e2, i2) {
          var o2, r2;
          if (t3.fontFamily && (this.fontFamily = t3.fontFamily), t3.fontSize && (this.fontSize = t3.fontSize), t3.fontWeight && (this.fontWeight = t3.fontWeight), t3.fontStyle && (this.fontStyle = t3.fontStyle), t3.gradient) {
            var n2 = d.Tools.Instantiate("BABYLON.GUI." + t3.gradient.className);
            this._gradient = new n2(), null === (o2 = this._gradient) || void 0 === o2 || o2.parse(t3.gradient);
          }
          if (t3.animations) {
            this.animations = [];
            for (var a2 = 0; a2 < t3.animations.length; a2++) {
              var s2 = t3.animations[a2], l2 = (0, d.GetClass)("BABYLON.Animation");
              l2 && this.animations.push(l2.Parse(s2));
            }
            t3.autoAnimate && this._host && this._host.getScene() && this._host.getScene().beginAnimation(this, t3.autoAnimateFrom, t3.autoAnimateTo, t3.autoAnimateLoop, t3.autoAnimateSpeed || 1);
          }
          this.fixedRatioMasterIsWidth = null !== (r2 = t3.fixedRatioMasterIsWidth) && void 0 !== r2 ? r2 : this.fixedRatioMasterIsWidth;
        }, t2.prototype.dispose = function() {
          this.onDirtyObservable.clear(), this.onBeforeDrawObservable.clear(), this.onAfterDrawObservable.clear(), this.onPointerDownObservable.clear(), this.onPointerEnterObservable.clear(), this.onPointerMoveObservable.clear(), this.onPointerOutObservable.clear(), this.onPointerUpObservable.clear(), this.onPointerClickObservable.clear(), this.onWheelObservable.clear(), this.onBlurObservable.clear(), this.onFocusObservable.clear(), this.onKeyboardEventProcessedObservable.clear(), this._styleObserver && this._style && (this._style.onChangedObservable.remove(this._styleObserver), this._styleObserver = null), this.parent && (this.parent.removeControl(this), this.parent = null), this._host && this._host._linkedControls.indexOf(this) > -1 && this.linkWithMesh(null), this.onDisposeObservable.notifyObservers(this), this.onDisposeObservable.clear();
        }, Object.defineProperty(t2, "HORIZONTAL_ALIGNMENT_LEFT", { get: function() {
          return t2._HORIZONTAL_ALIGNMENT_LEFT;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2, "HORIZONTAL_ALIGNMENT_RIGHT", { get: function() {
          return t2._HORIZONTAL_ALIGNMENT_RIGHT;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2, "HORIZONTAL_ALIGNMENT_CENTER", { get: function() {
          return t2._HORIZONTAL_ALIGNMENT_CENTER;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2, "VERTICAL_ALIGNMENT_TOP", { get: function() {
          return t2._VERTICAL_ALIGNMENT_TOP;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2, "VERTICAL_ALIGNMENT_BOTTOM", { get: function() {
          return t2._VERTICAL_ALIGNMENT_BOTTOM;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2, "VERTICAL_ALIGNMENT_CENTER", { get: function() {
          return t2._VERTICAL_ALIGNMENT_CENTER;
        }, enumerable: false, configurable: true }), t2._GetFontOffset = function(e2, i2) {
          if (t2._FontHeightSizes[e2]) return t2._FontHeightSizes[e2];
          var o2 = i2 || d.EngineStore.LastCreatedEngine;
          if (!o2) throw new Error("Invalid engine. Unable to create a canvas.");
          var r2 = o2.getFontOffset(e2);
          return t2._FontHeightSizes[e2] = r2, r2;
        }, t2.Parse = function(t3, e2, i2) {
          var o2 = d.Tools.Instantiate("BABYLON.GUI." + t3.className), r2 = d.SerializationHelper.Parse(function() {
            var t4 = new o2();
            return t4._urlRewriter = i2, t4;
          }, t3, null);
          return r2.name = t3.name, r2._parseFromContent(t3, e2, i2), r2;
        }, t2.drawEllipse = function(t3, e2, i2, o2, r2, n2) {
          n2.translate(t3, e2), n2.scale(i2, o2), n2.beginPath(), n2.arc(0, 0, 1, 0, 2 * Math.PI * r2, r2 < 0), r2 >= 1 && n2.closePath(), n2.scale(1 / i2, 1 / o2), n2.translate(-t3, -e2);
        }, t2.prototype.isReady = function() {
          return true;
        }, t2.AllowAlphaInheritance = false, t2._ClipMeasure = new v(0, 0, 0, 0), t2._HORIZONTAL_ALIGNMENT_LEFT = 0, t2._HORIZONTAL_ALIGNMENT_RIGHT = 1, t2._HORIZONTAL_ALIGNMENT_CENTER = 2, t2._VERTICAL_ALIGNMENT_TOP = 0, t2._VERTICAL_ALIGNMENT_BOTTOM = 1, t2._VERTICAL_ALIGNMENT_CENTER = 2, t2._FontHeightSizes = {}, t2.AddHeader = function() {
        }, h([(0, d.serialize)()], t2.prototype, "metadata", void 0), h([(0, d.serialize)()], t2.prototype, "isHitTestVisible", void 0), h([(0, d.serialize)()], t2.prototype, "isPointerBlocker", void 0), h([(0, d.serialize)()], t2.prototype, "isFocusInvisible", void 0), h([(0, d.serialize)()], t2.prototype, "clipChildren", null), h([(0, d.serialize)()], t2.prototype, "clipContent", null), h([(0, d.serialize)()], t2.prototype, "useBitmapCache", void 0), h([(0, d.serialize)()], t2.prototype, "shadowOffsetX", null), h([(0, d.serialize)()], t2.prototype, "shadowOffsetY", null), h([(0, d.serialize)()], t2.prototype, "shadowBlur", null), h([(0, d.serialize)()], t2.prototype, "shadowColor", null), h([(0, d.serialize)()], t2.prototype, "hoverCursor", void 0), h([(0, d.serialize)()], t2.prototype, "fontOffset", null), h([(0, d.serialize)()], t2.prototype, "alpha", null), h([(0, d.serialize)()], t2.prototype, "isSerializable", void 0), h([(0, d.serialize)()], t2.prototype, "scaleX", null), h([(0, d.serialize)()], t2.prototype, "scaleY", null), h([(0, d.serialize)()], t2.prototype, "rotation", null), h([(0, d.serialize)()], t2.prototype, "transformCenterY", null), h([(0, d.serialize)()], t2.prototype, "transformCenterX", null), h([(0, d.serialize)()], t2.prototype, "horizontalAlignment", null), h([(0, d.serialize)()], t2.prototype, "verticalAlignment", null), h([(0, d.serialize)()], t2.prototype, "fixedRatio", null), h([(0, d.serialize)()], t2.prototype, "fixedRatioMasterIsWidth", null), h([(0, d.serialize)()], t2.prototype, "width", null), h([(0, d.serialize)()], t2.prototype, "height", null), h([(0, d.serialize)()], t2.prototype, "style", null), h([(0, d.serialize)()], t2.prototype, "color", null), h([(0, d.serialize)()], t2.prototype, "gradient", null), h([(0, d.serialize)()], t2.prototype, "zIndex", null), h([(0, d.serialize)()], t2.prototype, "notRenderable", null), h([(0, d.serialize)()], t2.prototype, "isVisible", null), h([(0, d.serialize)()], t2.prototype, "descendantsOnlyPadding", null), h([(0, d.serialize)()], t2.prototype, "paddingLeft", null), h([(0, d.serialize)()], t2.prototype, "paddingRight", null), h([(0, d.serialize)()], t2.prototype, "paddingTop", null), h([(0, d.serialize)()], t2.prototype, "paddingBottom", null), h([(0, d.serialize)()], t2.prototype, "left", null), h([(0, d.serialize)()], t2.prototype, "top", null), h([(0, d.serialize)()], t2.prototype, "linkOffsetX", null), h([(0, d.serialize)()], t2.prototype, "linkOffsetY", null), h([(0, d.serialize)()], t2.prototype, "isEnabled", null), h([(0, d.serialize)()], t2.prototype, "disabledColor", null), h([(0, d.serialize)()], t2.prototype, "disabledColorItem", null), h([(0, d.serialize)()], t2.prototype, "overlapGroup", void 0), h([(0, d.serialize)()], t2.prototype, "overlapDeltaMultiplier", void 0), t2;
      }();
      (0, d.RegisterClass)("BABYLON.GUI.Control", I);
      var B = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._children = new Array(), i2._measureForChildren = v.Empty(), i2._background = "", i2._backgroundGradient = null, i2._adaptWidthToChildren = false, i2._adaptHeightToChildren = false, i2._renderToIntermediateTexture = false, i2._intermediateTexture = null, i2.delegatePickingToChildren = false, i2.logLayoutCycleErrors = false, i2.maxLayoutCycle = 3, i2.onControlAddedObservable = new d.Observable(), i2.onControlRemovedObservable = new d.Observable(), i2._inverseTransformMatrix = x.Identity(), i2._inverseMeasure = new v(0, 0, 0, 0), i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "renderToIntermediateTexture", { get: function() {
          return this._renderToIntermediateTexture;
        }, set: function(t3) {
          this._renderToIntermediateTexture !== t3 && (this._renderToIntermediateTexture = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "adaptHeightToChildren", { get: function() {
          return this._adaptHeightToChildren;
        }, set: function(t3) {
          this._adaptHeightToChildren !== t3 && (this._adaptHeightToChildren = t3, t3 && (this.height = "100%"), this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "adaptWidthToChildren", { get: function() {
          return this._adaptWidthToChildren;
        }, set: function(t3) {
          this._adaptWidthToChildren !== t3 && (this._adaptWidthToChildren = t3, t3 && (this.width = "100%"), this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backgroundGradient", { get: function() {
          return this._backgroundGradient;
        }, set: function(t3) {
          this._backgroundGradient !== t3 && (this._backgroundGradient = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "children", { get: function() {
          return this._children;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isReadOnly", { get: function() {
          return this._isReadOnly;
        }, set: function(t3) {
          this._isReadOnly = t3;
          for (var e3 = 0, i2 = this._children; e3 < i2.length; e3++) i2[e3].isReadOnly = t3;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Container";
        }, e2.prototype._flagDescendantsAsMatrixDirty = function() {
          for (var t3 = 0, e3 = this.children; t3 < e3.length; t3++) {
            var i2 = e3[t3];
            i2._isClipped = false, i2._markMatrixAsDirty();
          }
        }, e2.prototype.getChildByName = function(t3) {
          for (var e3 = 0, i2 = this.children; e3 < i2.length; e3++) {
            var o2 = i2[e3];
            if (o2.name === t3) return o2;
          }
          return null;
        }, e2.prototype.getChildByType = function(t3, e3) {
          for (var i2 = 0, o2 = this.children; i2 < o2.length; i2++) {
            var r2 = o2[i2];
            if (r2.typeName === e3) return r2;
          }
          return null;
        }, e2.prototype.containsControl = function(t3) {
          return -1 !== this.children.indexOf(t3);
        }, e2.prototype.addControl = function(t3) {
          return t3 ? (-1 !== this._children.indexOf(t3) || (t3._link(this._host), t3._markAllAsDirty(), this._reOrderControl(t3), this._markAsDirty(), this.onControlAddedObservable.notifyObservers(t3)), this) : this;
        }, e2.prototype.clearControls = function() {
          for (var t3 = 0, e3 = this.children.slice(); t3 < e3.length; t3++) {
            var i2 = e3[t3];
            this.removeControl(i2);
          }
          return this;
        }, e2.prototype.removeControl = function(t3) {
          var e3 = this._children.indexOf(t3);
          return -1 !== e3 && (this._children.splice(e3, 1), t3.parent = null), t3.linkWithMesh(null), this._host && this._host._cleanControlAfterRemoval(t3), this._markAsDirty(), this.onControlRemovedObservable.notifyObservers(t3), this;
        }, e2.prototype._reOrderControl = function(t3) {
          var e3 = t3.linkedMesh;
          this.removeControl(t3);
          for (var i2 = false, o2 = 0; o2 < this._children.length; o2++) if (this._children[o2].zIndex > t3.zIndex) {
            this._children.splice(o2, 0, t3), i2 = true;
            break;
          }
          i2 || this._children.push(t3), t3.parent = this, e3 && t3.linkWithMesh(e3), this._markAsDirty();
        }, e2.prototype._offsetLeft = function(e3) {
          t2.prototype._offsetLeft.call(this, e3);
          for (var i2 = 0, o2 = this._children; i2 < o2.length; i2++) o2[i2]._offsetLeft(e3);
        }, e2.prototype._offsetTop = function(e3) {
          t2.prototype._offsetTop.call(this, e3);
          for (var i2 = 0, o2 = this._children; i2 < o2.length; i2++) o2[i2]._offsetTop(e3);
        }, e2.prototype._markAllAsDirty = function() {
          t2.prototype._markAllAsDirty.call(this);
          for (var e3 = 0; e3 < this._children.length; e3++) this._children[e3]._markAllAsDirty();
        }, e2.prototype._getBackgroundColor = function(t3) {
          return this._backgroundGradient ? this._backgroundGradient.getCanvasGradient(t3) : this._background;
        }, e2.prototype._localDraw = function(t3) {
          (this._background || this._backgroundGradient) && (t3.save(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), t3.fillStyle = this._getBackgroundColor(t3), t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height), t3.restore());
        }, e2.prototype._link = function(e3) {
          t2.prototype._link.call(this, e3);
          for (var i2 = 0, o2 = this._children; i2 < o2.length; i2++) o2[i2]._link(e3);
        }, e2.prototype._beforeLayout = function() {
        }, e2.prototype._processMeasures = function(e3, i2) {
          !this._isDirty && this._cachedParentMeasure.isEqualsTo(e3) || (t2.prototype._processMeasures.call(this, e3, i2), this._evaluateClippingState(e3), this._renderToIntermediateTexture && (this._intermediateTexture && this._host.getScene() != this._intermediateTexture.getScene() && (this._intermediateTexture.dispose(), this._intermediateTexture = null), this._intermediateTexture ? this._intermediateTexture.scaleTo(this._currentMeasure.width, this._currentMeasure.height) : (this._intermediateTexture = new d.DynamicTexture("", { width: this._currentMeasure.width, height: this._currentMeasure.height }, this._host.getScene(), false, d.Texture.NEAREST_SAMPLINGMODE, d.Constants.TEXTUREFORMAT_RGBA, false), this._intermediateTexture.hasAlpha = true)));
        }, e2.prototype._layout = function(t3, e3) {
          var i2, o2;
          if (!this.isDirty && (!this.isVisible || this.notRenderable)) return false;
          this.host._numLayoutCalls++, this._isDirty && this._currentMeasure.transformToRef(this._transformMatrix, this._prevCurrentMeasureTransformedIntoGlobalSpace);
          var r2 = 0;
          e3.save(), this._applyStates(e3), this._beforeLayout();
          do {
            var n2 = -1, a2 = -1;
            if (this._rebuildLayout = false, this._processMeasures(t3, e3), !this._isClipped) {
              for (var s2 = 0, l2 = this._children; s2 < l2.length; s2++) {
                var _2 = l2[s2];
                _2._tempParentMeasure.copyFrom(this._measureForChildren), _2._layout(this._measureForChildren, e3) && _2.isVisible && !_2.notRenderable && (this.adaptWidthToChildren && _2._width.isPixel && (n2 = Math.max(n2, _2._currentMeasure.width + _2._paddingLeftInPixels + _2._paddingRightInPixels)), this.adaptHeightToChildren && _2._height.isPixel && (a2 = Math.max(a2, _2._currentMeasure.height + _2._paddingTopInPixels + _2._paddingBottomInPixels)));
              }
              if (this.adaptWidthToChildren && n2 >= 0) {
                var h2 = (n2 += this.paddingLeftInPixels + this.paddingRightInPixels) + "px";
                this.width !== h2 && (null === (i2 = this.parent) || void 0 === i2 || i2._markAsDirty(), this.width = h2, this._width.ignoreAdaptiveScaling = true, this._rebuildLayout = true);
              }
              if (this.adaptHeightToChildren && a2 >= 0) {
                var c2 = (a2 += this.paddingTopInPixels + this.paddingBottomInPixels) + "px";
                this.height !== c2 && (null === (o2 = this.parent) || void 0 === o2 || o2._markAsDirty(), this.height = c2, this._height.ignoreAdaptiveScaling = true, this._rebuildLayout = true);
              }
              this._postMeasure();
            }
            r2++;
          } while (this._rebuildLayout && r2 < this.maxLayoutCycle);
          return r2 >= 3 && this.logLayoutCycleErrors && d.Logger.Error("Layout cycle detected in GUI (Container name=".concat(this.name, ", uniqueId=").concat(this.uniqueId, ")")), e3.restore(), this._isDirty && (this.invalidateRect(), this._isDirty = false), true;
        }, e2.prototype._postMeasure = function() {
        }, e2.prototype._draw = function(t3, e3) {
          var i2 = this._renderToIntermediateTexture && this._intermediateTexture, o2 = i2 ? this._intermediateTexture.getContext() : t3;
          i2 && (o2.save(), o2.translate(-this._currentMeasure.left, -this._currentMeasure.top), e3 ? (this._transformMatrix.invertToRef(this._inverseTransformMatrix), e3.transformToRef(this._inverseTransformMatrix, this._inverseMeasure), o2.clearRect(this._inverseMeasure.left, this._inverseMeasure.top, this._inverseMeasure.width, this._inverseMeasure.height)) : o2.clearRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height)), this._localDraw(o2), t3.save(), this.clipChildren && this._clipForChildren(o2);
          for (var r2 = 0, n2 = this._children; r2 < n2.length; r2++) {
            var a2 = n2[r2];
            e3 && !a2._intersectsRect(e3) || a2._render(o2, e3);
          }
          i2 && (o2.restore(), t3.save(), t3.globalAlpha = this.alpha, t3.drawImage(o2.canvas, this._currentMeasure.left, this._currentMeasure.top), t3.restore()), t3.restore();
        }, e2.prototype.getDescendantsToRef = function(t3, e3, i2) {
          if (void 0 === e3 && (e3 = false), this.children) for (var o2 = 0; o2 < this.children.length; o2++) {
            var r2 = this.children[o2];
            i2 && !i2(r2) || t3.push(r2), e3 || r2.getDescendantsToRef(t3, false, i2);
          }
        }, e2.prototype._processPicking = function(e3, i2, o2, r2, n2, a2, s2, l2) {
          if (!this._isEnabled || !this.isVisible || this.notRenderable) return false;
          var _2 = t2.prototype.contains.call(this, e3, i2);
          if (!_2 && this.clipChildren) return false;
          if (this.delegatePickingToChildren) {
            for (var h2 = false, c2 = this._children.length - 1; c2 >= 0; c2--) if ((u2 = this._children[c2]).isEnabled && u2.isHitTestVisible && u2.isVisible && !u2.notRenderable && u2.contains(e3, i2)) {
              h2 = true;
              break;
            }
            if (!h2) return false;
          }
          for (c2 = this._children.length - 1; c2 >= 0; c2--) {
            var u2;
            if ((u2 = this._children[c2])._processPicking(e3, i2, o2, r2, n2, a2, s2, l2)) return u2.hoverCursor && this._host._changeCursor(u2.hoverCursor), true;
          }
          return !!_2 && !!this.isHitTestVisible && this._processObservables(r2, e3, i2, o2, n2, a2, s2, l2);
        }, e2.prototype._additionalProcessing = function(e3, i2) {
          t2.prototype._additionalProcessing.call(this, e3, i2), this._measureForChildren.copyFrom(this._currentMeasure);
        }, e2.prototype._getAdaptDimTo = function(t3) {
          return "width" === t3 ? this.adaptWidthToChildren : this.adaptHeightToChildren;
        }, e2.prototype.isDimensionFullyDefined = function(e3) {
          if (this._getAdaptDimTo(e3)) {
            for (var i2 = 0, o2 = this.children; i2 < o2.length; i2++) if (!o2[i2].isDimensionFullyDefined(e3)) return false;
            return true;
          }
          return t2.prototype.isDimensionFullyDefined.call(this, e3);
        }, e2.prototype.serialize = function(e3, i2, o2) {
          if (void 0 === i2 && (i2 = false), void 0 === o2 && (o2 = true), t2.prototype.serialize.call(this, e3, i2, o2), (this.isSerializable || i2) && (this.backgroundGradient && (e3.backgroundGradient = {}, this.backgroundGradient.serialize(e3.backgroundGradient)), this.children.length)) {
            e3.children = [];
            for (var r2 = 0, n2 = this.children; r2 < n2.length; r2++) {
              var a2 = n2[r2];
              if (a2.isSerializable || i2) {
                var s2 = {};
                a2.serialize(s2, i2, o2), e3.children.push(s2);
              }
            }
          }
        }, e2.prototype.dispose = function() {
          var e3;
          t2.prototype.dispose.call(this);
          for (var i2 = this.children.length - 1; i2 >= 0; i2--) this.children[i2].dispose();
          null === (e3 = this._intermediateTexture) || void 0 === e3 || e3.dispose();
        }, e2.prototype._parseFromContent = function(e3, i2, o2) {
          var r2;
          if (t2.prototype._parseFromContent.call(this, e3, i2, o2), this._link(i2), e3.backgroundGradient) {
            var n2 = d.Tools.Instantiate("BABYLON.GUI." + e3.backgroundGradient.className);
            this._backgroundGradient = new n2(), null === (r2 = this._backgroundGradient) || void 0 === r2 || r2.parse(e3.backgroundGradient);
          }
          if (e3.children) for (var a2 = 0, s2 = e3.children; a2 < s2.length; a2++) {
            var l2 = s2[a2];
            this.addControl(I.Parse(l2, i2, o2));
          }
        }, e2.prototype.isReady = function() {
          for (var t3 = 0, e3 = this.children; t3 < e3.length; t3++) if (!e3[t3].isReady()) return false;
          return true;
        }, h([(0, d.serialize)()], e2.prototype, "delegatePickingToChildren", void 0), h([(0, d.serialize)()], e2.prototype, "renderToIntermediateTexture", null), h([(0, d.serialize)()], e2.prototype, "maxLayoutCycle", void 0), h([(0, d.serialize)()], e2.prototype, "adaptHeightToChildren", null), h([(0, d.serialize)()], e2.prototype, "adaptWidthToChildren", null), h([(0, d.serialize)()], e2.prototype, "background", null), h([(0, d.serialize)()], e2.prototype, "backgroundGradient", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.Container", B);
      var C, T = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._thickness = 1, i2._cornerRadius = [0, 0, 0, 0], i2._cachedRadius = [0, 0, 0, 0], i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "thickness", { get: function() {
          return this._thickness;
        }, set: function(t3) {
          this._thickness !== t3 && (this._thickness = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cornerRadius", { get: function() {
          return this._cornerRadius[0];
        }, set: function(t3) {
          t3 < 0 && (t3 = 0), this._cornerRadius[0] === t3 && this._cornerRadius[1] === t3 && this._cornerRadius[2] === t3 && this._cornerRadius[3] === t3 || (this._cornerRadius[0] = this._cornerRadius[1] = this._cornerRadius[2] = this._cornerRadius[3] = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cornerRadiusX", { get: function() {
          return this._cornerRadius[0];
        }, set: function(t3) {
          this._cornerRadius[0] !== t3 && (this._cornerRadius[0] = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cornerRadiusY", { get: function() {
          return this._cornerRadius[1];
        }, set: function(t3) {
          this._cornerRadius[1] !== t3 && (this._cornerRadius[1] = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cornerRadiusZ", { get: function() {
          return this._cornerRadius[2];
        }, set: function(t3) {
          this._cornerRadius[2] !== t3 && (this._cornerRadius[2] = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cornerRadiusW", { get: function() {
          return this._cornerRadius[3];
        }, set: function(t3) {
          this._cornerRadius[3] !== t3 && (this._cornerRadius[3] = t3);
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Rectangle";
        }, e2.prototype._computeAdditionalOffsetX = function() {
          var t3 = 0;
          return 0 === this._cornerRadius[0] && 0 === this._cornerRadius[1] && 0 === this._cornerRadius[2] && 0 === this._cornerRadius[3] || (t3 += 1), this.thickness && (t3 += this.thickness / 2), t3;
        }, e2.prototype._computeAdditionalOffsetY = function() {
          var t3 = 0;
          return 0 === this._cornerRadius[0] && 0 === this._cornerRadius[1] && 0 === this._cornerRadius[2] && 0 === this._cornerRadius[3] || (t3 += 1), this.thickness && (t3 += this.thickness / 2), t3;
        }, e2.prototype._getRectangleFill = function(t3) {
          return this._getBackgroundColor(t3);
        }, e2.prototype._localDraw = function(t3) {
          t3.save(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), (this._background || this._backgroundGradient) && (t3.fillStyle = this._getRectangleFill(t3), 0 !== this._cornerRadius[0] || 0 !== this._cornerRadius[1] || 0 !== this._cornerRadius[2] || 0 !== this._cornerRadius[3] ? (this._drawRoundedRect(t3, this._thickness / 2), t3.fill()) : t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height)), this._thickness && ((this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), (this.color || this.gradient) && (t3.strokeStyle = this.gradient ? this.gradient.getCanvasGradient(t3) : this.color), t3.lineWidth = this._thickness, 0 !== this._cornerRadius[0] || 0 !== this._cornerRadius[1] || 0 !== this._cornerRadius[2] || 0 !== this._cornerRadius[3] ? (this._drawRoundedRect(t3, this._thickness / 2), t3.stroke()) : t3.strokeRect(this._currentMeasure.left + this._thickness / 2, this._currentMeasure.top + this._thickness / 2, this._currentMeasure.width - this._thickness, this._currentMeasure.height - this._thickness)), t3.restore();
        }, e2.prototype._additionalProcessing = function(e3, i2) {
          t2.prototype._additionalProcessing.call(this, e3, i2), this._measureForChildren.width -= 2 * this._thickness, this._measureForChildren.height -= 2 * this._thickness, this._measureForChildren.left += this._thickness, this._measureForChildren.top += this._thickness;
        }, e2.prototype._drawRoundedRect = function(t3, e3) {
          void 0 === e3 && (e3 = 0);
          for (var i2 = this._currentMeasure.left + e3, o2 = this._currentMeasure.top + e3, r2 = this._currentMeasure.width - 2 * e3, n2 = this._currentMeasure.height - 2 * e3, a2 = 0; a2 < this._cornerRadius.length; a2++) this._cachedRadius[a2] = Math.abs(Math.min(n2 / 2, Math.min(r2 / 2, this._cornerRadius[a2])));
          t3.beginPath(), t3.moveTo(i2 + this._cachedRadius[0], o2), t3.lineTo(i2 + r2 - this._cachedRadius[1], o2), t3.arc(i2 + r2 - this._cachedRadius[1], o2 + this._cachedRadius[1], this._cachedRadius[1], 3 * Math.PI / 2, 2 * Math.PI), t3.lineTo(i2 + r2, o2 + n2 - this._cachedRadius[2]), t3.arc(i2 + r2 - this._cachedRadius[2], o2 + n2 - this._cachedRadius[2], this._cachedRadius[2], 0, Math.PI / 2), t3.lineTo(i2 + this._cachedRadius[3], o2 + n2), t3.arc(i2 + this._cachedRadius[3], o2 + n2 - this._cachedRadius[3], this._cachedRadius[3], Math.PI / 2, Math.PI), t3.lineTo(i2, o2 + this._cachedRadius[0]), t3.arc(i2 + this._cachedRadius[0], o2 + this._cachedRadius[0], this._cachedRadius[0], Math.PI, 3 * Math.PI / 2), t3.closePath();
        }, e2.prototype._clipForChildren = function(t3) {
          0 === this._cornerRadius[0] && 0 === this._cornerRadius[1] && 0 === this._cornerRadius[2] && 0 === this._cornerRadius[3] || (this._drawRoundedRect(t3, this._thickness), t3.clip());
        }, h([(0, d.serialize)()], e2.prototype, "thickness", null), h([(0, d.serialize)()], e2.prototype, "cornerRadius", null), h([(0, d.serialize)()], e2.prototype, "cornerRadiusX", null), h([(0, d.serialize)()], e2.prototype, "cornerRadiusY", null), h([(0, d.serialize)()], e2.prototype, "cornerRadiusZ", null), h([(0, d.serialize)()], e2.prototype, "cornerRadiusW", null), e2;
      }(B);
      (0, d.RegisterClass)("BABYLON.GUI.Rectangle", T), function(t2) {
        t2[t2.Clip = 0] = "Clip", t2[t2.WordWrap = 1] = "WordWrap", t2[t2.Ellipsis = 2] = "Ellipsis", t2[t2.WordWrapEllipsis = 3] = "WordWrapEllipsis", t2[t2.HTML = 4] = "HTML";
      }(C || (C = {}));
      var S = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = "");
          var o2 = t2.call(this, e3) || this;
          return o2.name = e3, o2._text = "", o2._textWrapping = 0, o2._textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_CENTER, o2._textVerticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, o2._resizeToFit = false, o2._lineSpacing = new f(0), o2._outlineWidth = 0, o2._outlineColor = "white", o2._underline = false, o2._lineThrough = false, o2._wordDivider = " ", o2._forceResizeWidth = false, o2._applyOutlineToUnderline = false, o2.onTextChangedObservable = new d.Observable(), o2.onLinesReadyObservable = new d.Observable(), o2.reuseHTMLForWordWrapping = false, o2._linesTemp = [], o2._htmlElement = null, o2.text = i2, o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "lines", { get: function() {
          return this._lines;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "resizeToFit", { get: function() {
          return this._resizeToFit;
        }, set: function(t3) {
          this._resizeToFit !== t3 && (this._resizeToFit = t3, this._resizeToFit && (this._width.ignoreAdaptiveScaling = true, this._height.ignoreAdaptiveScaling = true), this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "textWrapping", { get: function() {
          return this._textWrapping;
        }, set: function(t3) {
          this._textWrapping !== t3 && (this._textWrapping = +t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "text", { get: function() {
          return this._text;
        }, set: function(t3) {
          this._text !== t3 && (this._text = t3 + "", this._markAsDirty(), this.onTextChangedObservable.notifyObservers(this));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "textHorizontalAlignment", { get: function() {
          return this._textHorizontalAlignment;
        }, set: function(t3) {
          this._textHorizontalAlignment !== t3 && (this._textHorizontalAlignment = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "textVerticalAlignment", { get: function() {
          return this._textVerticalAlignment;
        }, set: function(t3) {
          this._textVerticalAlignment !== t3 && (this._textVerticalAlignment = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "lineSpacing", { get: function() {
          return this._lineSpacing.toString(this._host);
        }, set: function(t3) {
          this._lineSpacing.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "outlineWidth", { get: function() {
          return this._outlineWidth;
        }, set: function(t3) {
          this._outlineWidth !== t3 && (this._outlineWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "underline", { get: function() {
          return this._underline;
        }, set: function(t3) {
          this._underline !== t3 && (this._underline = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "lineThrough", { get: function() {
          return this._lineThrough;
        }, set: function(t3) {
          this._lineThrough !== t3 && (this._lineThrough = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "applyOutlineToUnderline", { get: function() {
          return this._applyOutlineToUnderline;
        }, set: function(t3) {
          this._applyOutlineToUnderline !== t3 && (this._applyOutlineToUnderline = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "outlineColor", { get: function() {
          return this._outlineColor;
        }, set: function(t3) {
          this._outlineColor !== t3 && (this._outlineColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "wordDivider", { get: function() {
          return this._wordDivider;
        }, set: function(t3) {
          this._wordDivider !== t3 && (this._wordDivider = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "forceResizeWidth", { get: function() {
          return this._forceResizeWidth;
        }, set: function(t3) {
          this._forceResizeWidth !== t3 && (this._forceResizeWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "TextBlock";
        }, e2.prototype._processMeasures = function(e3, i2) {
          var o2;
          t2.prototype._processMeasures.call(this, e3, i2), i2.save(), this._applyStates(i2), this._fontOffset && !this.isDirty || (this._fontOffset = I._GetFontOffset(i2.font, null === (o2 = this._host.getScene()) || void 0 === o2 ? void 0 : o2.getEngine())), this._lines = this._breakLines(this._currentMeasure.width, this._currentMeasure.height, i2), this.onLinesReadyObservable.notifyObservers(this), i2.restore();
          for (var r2 = 0, n2 = 0; n2 < this._lines.length; n2++) {
            var a2 = this._lines[n2];
            a2.width > r2 && (r2 = a2.width);
          }
          if (this._resizeToFit) {
            if (0 === this._textWrapping || this._forceResizeWidth) {
              var s2 = Math.ceil(this._paddingLeftInPixels) + Math.ceil(this._paddingRightInPixels) + Math.ceil(r2);
              s2 !== this._width.getValueInPixel(this._host, this._tempParentMeasure.width) && (this._width.updateInPlace(s2, f.UNITMODE_PIXEL), this._rebuildLayout = true);
            }
            var l2 = this._paddingTopInPixels + this._paddingBottomInPixels + this._fontOffset.height * this._lines.length | 0;
            if (this._lines.length > 0 && 0 !== this._lineSpacing.internalValue) {
              var _2;
              _2 = this._lineSpacing.isPixel ? this._lineSpacing.getValue(this._host) : this._lineSpacing.getValue(this._host) * this._height.getValueInPixel(this._host, this._cachedParentMeasure.height), l2 += (this._lines.length - 1) * _2;
            }
            l2 !== this._height.internalValue && (this._height.updateInPlace(l2, f.UNITMODE_PIXEL), this._rebuildLayout = true);
          }
        }, e2.prototype._drawText = function(t3, e3, i2, o2) {
          var r2 = this._currentMeasure.width, n2 = 0;
          switch (this._textHorizontalAlignment) {
            case I.HORIZONTAL_ALIGNMENT_LEFT:
              n2 = 0;
              break;
            case I.HORIZONTAL_ALIGNMENT_RIGHT:
              n2 = r2 - e3;
              break;
            case I.HORIZONTAL_ALIGNMENT_CENTER:
              n2 = (r2 - e3) / 2;
          }
          (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (o2.shadowColor = this.shadowColor, o2.shadowBlur = this.shadowBlur, o2.shadowOffsetX = this.shadowOffsetX, o2.shadowOffsetY = this.shadowOffsetY), this.outlineWidth && o2.strokeText(t3, this._currentMeasure.left + n2, i2), o2.fillText(t3, this._currentMeasure.left + n2, i2), this._underline && this._drawLine(this._currentMeasure.left + n2, i2 + 3, this._currentMeasure.left + n2 + e3, i2 + 3, o2), this._lineThrough && this._drawLine(this._currentMeasure.left + n2, i2 - this.fontSizeInPixels / 3, this._currentMeasure.left + n2 + e3, i2 - this.fontSizeInPixels / 3, o2);
        }, e2.prototype._drawLine = function(t3, e3, i2, o2, r2) {
          if (r2.beginPath(), r2.lineWidth = Math.round(0.05 * this.fontSizeInPixels), r2.moveTo(t3, e3), r2.lineTo(i2, o2), this.outlineWidth && this.applyOutlineToUnderline) r2.stroke(), r2.fill();
          else {
            var n2 = r2.strokeStyle;
            r2.strokeStyle = r2.fillStyle, r2.stroke(), r2.strokeStyle = n2;
          }
          r2.closePath();
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3), this._renderLines(t3), t3.restore();
        }, e2.prototype._applyStates = function(e3) {
          t2.prototype._applyStates.call(this, e3), this.outlineWidth && (e3.lineWidth = this.outlineWidth, e3.strokeStyle = this.outlineColor, e3.lineJoin = "miter", e3.miterLimit = 2);
        }, e2.prototype._breakLines = function(t3, e3, i2) {
          var o2, r2;
          this._linesTemp.length = 0;
          var n2 = 4 === this._textWrapping ? this._parseHTMLText(t3, e3, i2) : this.text.split("\n");
          switch (this._textWrapping) {
            case 1:
              for (var a2 = 0, s2 = n2; a2 < s2.length; a2++) {
                var l2 = s2[a2];
                (o2 = this._linesTemp).push.apply(o2, this._parseLineWordWrap(l2, t3, i2));
              }
              break;
            case 2:
              for (var _2 = 0, h2 = n2; _2 < h2.length; _2++) l2 = h2[_2], this._linesTemp.push(this._parseLineEllipsis(l2, t3, i2));
              break;
            case 3:
              for (var c2 = 0, u2 = n2; c2 < u2.length; c2++) l2 = u2[c2], (r2 = this._linesTemp).push.apply(r2, this._parseLineWordWrapEllipsis(l2, t3, e3, i2));
              break;
            default:
              for (var d2 = 0, f2 = n2; d2 < f2.length; d2++) l2 = f2[d2], this._linesTemp.push(this._parseLine(l2, i2));
          }
          return this._linesTemp;
        }, e2.prototype._parseHTMLText = function(t3, e3, i2) {
          var o2, r2 = [];
          this._htmlElement || (this._htmlElement = document.createElement("div"), document.body.appendChild(this._htmlElement));
          var n2 = this._htmlElement;
          n2.textContent = this.text, n2.style.font = i2.font, n2.style.position = "absolute", n2.style.visibility = "hidden", n2.style.top = "-1000px", n2.style.left = "-1000px", null === (o2 = this.adjustWordWrappingHTMLElement) || void 0 === o2 || o2.call(this, n2), n2.style.width = t3 + "px", n2.style.height = e3 + "px";
          var a2 = n2.textContent;
          if (!a2) return r2;
          for (var s2 = n2.childNodes[0], l2 = document.createRange(), _2 = 0, h2 = 0, c2 = a2; h2 < c2.length; h2++) {
            var u2 = c2[h2];
            l2.setStart(s2, 0), l2.setEnd(s2, _2 + 1);
            var d2 = l2.getClientRects().length - 1;
            r2[d2] = (r2[d2] || "") + u2, _2++;
          }
          return this.reuseHTMLForWordWrapping || (n2.remove(), this._htmlElement = null), r2;
        }, e2.prototype._parseLine = function(t3, e3) {
          return void 0 === t3 && (t3 = ""), { text: t3, width: this._getTextMetricsWidth(e3.measureText(t3)) };
        }, e2.prototype._getCharsToRemove = function(t3, e3, i2) {
          var o2 = t3 > e3 ? t3 - e3 : 0, r2 = t3 / i2;
          return Math.max(Math.floor(o2 / r2), 1);
        }, e2.prototype._parseLineEllipsis = function(t3, e3, i2) {
          void 0 === t3 && (t3 = "");
          var o2 = this._getTextMetricsWidth(i2.measureText(t3)), r2 = this._getCharsToRemove(o2, e3, t3.length), n2 = Array.from && Array.from(t3);
          if (n2) for (; n2.length && o2 > e3; ) n2.splice(n2.length - r2, r2), t3 = "".concat(n2.join(""), "…"), o2 = this._getTextMetricsWidth(i2.measureText(t3)), r2 = this._getCharsToRemove(o2, e3, t3.length);
          else {
            for (; t3.length > 2 && o2 > e3; ) t3 = t3.slice(0, -r2), o2 = this._getTextMetricsWidth(i2.measureText(t3 + "…")), r2 = this._getCharsToRemove(o2, e3, t3.length);
            t3 += "…";
          }
          return { text: t3, width: o2 };
        }, e2.prototype._getTextMetricsWidth = function(t3) {
          return void 0 !== t3.actualBoundingBoxLeft ? Math.abs(t3.actualBoundingBoxLeft) + Math.abs(t3.actualBoundingBoxRight) : t3.width;
        }, e2.prototype._parseLineWordWrap = function(t3, e3, i2) {
          void 0 === t3 && (t3 = "");
          for (var o2 = [], r2 = this.wordSplittingFunction ? this.wordSplittingFunction(t3) : t3.split(this._wordDivider), n2 = this._getTextMetricsWidth(i2.measureText(t3)), a2 = 0; a2 < r2.length; a2++) {
            var s2 = a2 > 0 ? t3 + this._wordDivider + r2[a2] : r2[0], l2 = this._getTextMetricsWidth(i2.measureText(s2));
            l2 > e3 && a2 > 0 ? (o2.push({ text: t3, width: n2 }), t3 = r2[a2], n2 = this._getTextMetricsWidth(i2.measureText(t3))) : (n2 = l2, t3 = s2);
          }
          return o2.push({ text: t3, width: n2 }), o2;
        }, e2.prototype._parseLineWordWrapEllipsis = function(t3, e3, i2, o2) {
          void 0 === t3 && (t3 = "");
          for (var r2 = this._parseLineWordWrap(t3, e3, o2), n2 = 1; n2 <= r2.length; n2++) if (this._computeHeightForLinesOf(n2) > i2 && n2 > 1) {
            var a2 = r2[n2 - 2], s2 = r2[n2 - 1];
            r2[n2 - 2] = this._parseLineEllipsis(a2.text + this._wordDivider + s2.text, e3, o2);
            for (var l2 = r2.length - n2 + 1, _2 = 0; _2 < l2; _2++) r2.pop();
            return r2;
          }
          return r2;
        }, e2.prototype._renderLines = function(t3) {
          if (this._fontOffset && this._lines) {
            var e3 = this._currentMeasure.height, i2 = 0;
            switch (this._textVerticalAlignment) {
              case I.VERTICAL_ALIGNMENT_TOP:
                i2 = this._fontOffset.ascent;
                break;
              case I.VERTICAL_ALIGNMENT_BOTTOM:
                i2 = e3 - this._fontOffset.height * (this._lines.length - 1) - this._fontOffset.descent;
                break;
              case I.VERTICAL_ALIGNMENT_CENTER:
                i2 = this._fontOffset.ascent + (e3 - this._fontOffset.height * this._lines.length) / 2;
            }
            i2 += this._currentMeasure.top;
            for (var o2 = 0; o2 < this._lines.length; o2++) {
              var r2 = this._lines[o2];
              0 !== o2 && 0 !== this._lineSpacing.internalValue && (this._lineSpacing.isPixel ? i2 += this._lineSpacing.getValue(this._host) : i2 += this._lineSpacing.getValue(this._host) * this._height.getValueInPixel(this._host, this._cachedParentMeasure.height)), this._drawText(r2.text, r2.width, i2, t3), i2 += this._fontOffset.height;
            }
          }
        }, e2.prototype._computeHeightForLinesOf = function(t3) {
          var e3 = this._paddingTopInPixels + this._paddingBottomInPixels + this._fontOffset.height * t3;
          return t3 > 0 && 0 !== this._lineSpacing.internalValue && (e3 += (t3 - 1) * (this._lineSpacing.isPixel ? this._lineSpacing.getValue(this._host) : this._lineSpacing.getValue(this._host) * this._height.getValueInPixel(this._host, this._cachedParentMeasure.height))), e3;
        }, e2.prototype.isDimensionFullyDefined = function(e3) {
          return !!this.resizeToFit || t2.prototype.isDimensionFullyDefined.call(this, e3);
        }, e2.prototype.computeExpectedHeight = function() {
          var t3, e3;
          if (this.text && this.widthInPixels) {
            var i2 = null === (t3 = d.EngineStore.LastCreatedEngine) || void 0 === t3 ? void 0 : t3.createCanvas(0, 0).getContext("2d");
            if (i2) {
              this._applyStates(i2), this._fontOffset || (this._fontOffset = I._GetFontOffset(i2.font, null === (e3 = this._host.getScene()) || void 0 === e3 ? void 0 : e3.getEngine()));
              var o2 = this._lines ? this._lines : this._breakLines(this.widthInPixels - this._paddingLeftInPixels - this._paddingRightInPixels, this.heightInPixels - this._paddingTopInPixels - this._paddingBottomInPixels, i2);
              return this._computeHeightForLinesOf(o2.length);
            }
          }
          return 0;
        }, e2.prototype.dispose = function() {
          var e3;
          t2.prototype.dispose.call(this), this.onTextChangedObservable.clear(), null === (e3 = this._htmlElement) || void 0 === e3 || e3.remove(), this._htmlElement = null;
        }, h([(0, d.serialize)()], e2.prototype, "resizeToFit", null), h([(0, d.serialize)()], e2.prototype, "textWrapping", null), h([(0, d.serialize)()], e2.prototype, "text", null), h([(0, d.serialize)()], e2.prototype, "textHorizontalAlignment", null), h([(0, d.serialize)()], e2.prototype, "textVerticalAlignment", null), h([(0, d.serialize)()], e2.prototype, "lineSpacing", null), h([(0, d.serialize)()], e2.prototype, "outlineWidth", null), h([(0, d.serialize)()], e2.prototype, "underline", null), h([(0, d.serialize)()], e2.prototype, "lineThrough", null), h([(0, d.serialize)()], e2.prototype, "applyOutlineToUnderline", null), h([(0, d.serialize)()], e2.prototype, "outlineColor", null), h([(0, d.serialize)()], e2.prototype, "wordDivider", null), h([(0, d.serialize)()], e2.prototype, "forceResizeWidth", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.TextBlock", S);
      var O = function(t2) {
        function e2(i2, o2) {
          void 0 === o2 && (o2 = null);
          var r2 = t2.call(this, i2) || this;
          return r2.name = i2, r2._workingCanvas = null, r2._loaded = false, r2._stretch = e2.STRETCH_FILL, r2._source = null, r2._autoScale = false, r2._sourceLeft = 0, r2._sourceTop = 0, r2._sourceWidth = 0, r2._sourceHeight = 0, r2._svgAttributesComputationCompleted = false, r2._isSVG = false, r2._cellWidth = 0, r2._cellHeight = 0, r2._cellId = -1, r2._populateNinePatchSlicesFromImage = false, r2._imageDataCache = { data: null, key: "" }, r2.onImageLoadedObservable = new d.Observable(), r2.onSVGAttributesComputedObservable = new d.Observable(), r2.source = o2, r2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "isLoaded", { get: function() {
          return this._loaded;
        }, enumerable: false, configurable: true }), e2.prototype.isReady = function() {
          return this.isLoaded;
        }, Object.defineProperty(e2.prototype, "detectPointerOnOpaqueOnly", { get: function() {
          return this._detectPointerOnOpaqueOnly;
        }, set: function(t3) {
          this._detectPointerOnOpaqueOnly !== t3 && (this._detectPointerOnOpaqueOnly = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliceLeft", { get: function() {
          return this._sliceLeft;
        }, set: function(t3) {
          this._sliceLeft !== t3 && (this._sliceLeft = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliceRight", { get: function() {
          return this._sliceRight;
        }, set: function(t3) {
          this._sliceRight !== t3 && (this._sliceRight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliceTop", { get: function() {
          return this._sliceTop;
        }, set: function(t3) {
          this._sliceTop !== t3 && (this._sliceTop = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliceBottom", { get: function() {
          return this._sliceBottom;
        }, set: function(t3) {
          this._sliceBottom !== t3 && (this._sliceBottom = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sourceLeft", { get: function() {
          return this._sourceLeft;
        }, set: function(t3) {
          this._sourceLeft !== t3 && (this._sourceLeft = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sourceTop", { get: function() {
          return this._sourceTop;
        }, set: function(t3) {
          this._sourceTop !== t3 && (this._sourceTop = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sourceWidth", { get: function() {
          return this._sourceWidth;
        }, set: function(t3) {
          this._sourceWidth !== t3 && (this._sourceWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sourceHeight", { get: function() {
          return this._sourceHeight;
        }, set: function(t3) {
          this._sourceHeight !== t3 && (this._sourceHeight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "imageWidth", { get: function() {
          return this._imageWidth;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "imageHeight", { get: function() {
          return this._imageHeight;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "populateNinePatchSlicesFromImage", { get: function() {
          return this._populateNinePatchSlicesFromImage;
        }, set: function(t3) {
          this._populateNinePatchSlicesFromImage !== t3 && (this._populateNinePatchSlicesFromImage = t3, this._populateNinePatchSlicesFromImage && this._loaded && this._extractNinePatchSliceDataFromImage());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isSVG", { get: function() {
          return this._isSVG;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "svgAttributesComputationCompleted", { get: function() {
          return this._svgAttributesComputationCompleted;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "autoScale", { get: function() {
          return this._autoScale;
        }, set: function(t3) {
          this._autoScale !== t3 && (this._autoScale = t3, t3 && this._loaded && this.synchronizeSizeWithContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "stretch", { get: function() {
          return this._stretch;
        }, set: function(t3) {
          this._stretch !== t3 && (this._stretch = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype._rotate90 = function(t3, i2) {
          var o2, r2;
          void 0 === i2 && (i2 = false);
          var n2 = this._domImage.width, a2 = this._domImage.height, s2 = (null === (r2 = null === (o2 = this._host) || void 0 === o2 ? void 0 : o2.getScene()) || void 0 === r2 ? void 0 : r2.getEngine()) || d.EngineStore.LastCreatedEngine;
          if (!s2) throw new Error("Invalid engine. Unable to create a canvas.");
          var l2 = s2.createCanvas(a2, n2), _2 = l2.getContext("2d");
          _2.translate(l2.width / 2, l2.height / 2), _2.rotate(t3 * Math.PI / 2), _2.drawImage(this._domImage, 0, 0, n2, a2, -n2 / 2, -a2 / 2, n2, a2);
          var h2 = l2.toDataURL("image/jpg"), c2 = new e2(this.name + "rotated", h2);
          return i2 && (c2._stretch = this._stretch, c2._autoScale = this._autoScale, c2._cellId = this._cellId, c2._cellWidth = t3 % 1 ? this._cellHeight : this._cellWidth, c2._cellHeight = t3 % 1 ? this._cellWidth : this._cellHeight), this._handleRotationForSVGImage(this, c2, t3), this._imageDataCache.data = null, c2;
        }, e2.prototype._handleRotationForSVGImage = function(t3, e3, i2) {
          var o2 = this;
          t3._isSVG && (t3._svgAttributesComputationCompleted ? (this._rotate90SourceProperties(t3, e3, i2), this._markAsDirty()) : t3.onSVGAttributesComputedObservable.addOnce(function() {
            o2._rotate90SourceProperties(t3, e3, i2), o2._markAsDirty();
          }));
        }, e2.prototype._rotate90SourceProperties = function(t3, e3, i2) {
          var o2, r2, n2 = t3.sourceLeft, a2 = t3.sourceTop, s2 = t3.domImage.width, l2 = t3.domImage.height, _2 = n2, h2 = a2, c2 = t3.sourceWidth, u2 = t3.sourceHeight;
          if (0 != i2) {
            var d2 = i2 < 0 ? -1 : 1;
            i2 %= 4;
            for (var f2 = 0; f2 < Math.abs(i2); ++f2) _2 = -(a2 - l2 / 2) * d2 + l2 / 2, h2 = (n2 - s2 / 2) * d2 + s2 / 2, c2 = (o2 = [u2, c2])[0], u2 = o2[1], i2 < 0 ? h2 -= u2 : _2 -= c2, n2 = _2, a2 = h2, s2 = (r2 = [l2, s2])[0], l2 = r2[1];
          }
          e3.sourceLeft = _2, e3.sourceTop = h2, e3.sourceWidth = c2, e3.sourceHeight = u2;
        }, e2.prototype._extractNinePatchSliceDataFromImage = function() {
          var t3, e3, i2 = this._domImage.width, o2 = this._domImage.height;
          if (!this._workingCanvas) {
            var r2 = (null === (e3 = null === (t3 = this._host) || void 0 === t3 ? void 0 : t3.getScene()) || void 0 === e3 ? void 0 : e3.getEngine()) || d.EngineStore.LastCreatedEngine;
            if (!r2) throw new Error("Invalid engine. Unable to create a canvas.");
            this._workingCanvas = r2.createCanvas(i2, o2);
          }
          var n2 = this._workingCanvas.getContext("2d");
          n2.drawImage(this._domImage, 0, 0, i2, o2);
          var a2 = n2.getImageData(0, 0, i2, o2);
          this._sliceLeft = -1, this._sliceRight = -1;
          for (var s2 = 0; s2 < i2; s2++) if ((_2 = a2.data[4 * s2 + 3]) > 127 && -1 === this._sliceLeft) this._sliceLeft = s2;
          else if (_2 < 127 && this._sliceLeft > -1) {
            this._sliceRight = s2;
            break;
          }
          this._sliceTop = -1, this._sliceBottom = -1;
          for (var l2 = 0; l2 < o2; l2++) {
            var _2;
            if ((_2 = a2.data[l2 * i2 * 4 + 3]) > 127 && -1 === this._sliceTop) this._sliceTop = l2;
            else if (_2 < 127 && this._sliceTop > -1) {
              this._sliceBottom = l2;
              break;
            }
          }
        }, Object.defineProperty(e2.prototype, "domImage", { get: function() {
          return this._domImage;
        }, set: function(t3) {
          var e3 = this;
          this._domImage = t3, this._loaded = false, this._imageDataCache.data = null, this._domImage.width ? this._onImageLoaded() : this._domImage.onload = function() {
            e3._onImageLoaded();
          };
        }, enumerable: false, configurable: true }), e2.prototype._onImageLoaded = function() {
          this._imageDataCache.data = null, this._imageWidth = this._domImage.width, this._imageHeight = this._domImage.height, this._loaded = true, this._populateNinePatchSlicesFromImage && this._extractNinePatchSliceDataFromImage(), this._autoScale && this.synchronizeSizeWithContent(), this.onImageLoadedObservable.notifyObservers(this), this._markAsDirty();
        }, Object.defineProperty(e2.prototype, "source", { get: function() {
          return this._source;
        }, set: function(t3) {
          var i2, o2, r2, n2, a2, s2 = this;
          if (this._urlRewriter && t3 && (t3 = this._urlRewriter(t3)), this._source !== t3) {
            this._removeCacheUsage(this._source), this._loaded = false, this._source = t3, this._imageDataCache.data = null, t3 && (t3 = this._svgCheck(t3));
            var l2 = (null === (o2 = null === (i2 = this._host) || void 0 === i2 ? void 0 : i2.getScene()) || void 0 === o2 ? void 0 : o2.getEngine()) || d.EngineStore.LastCreatedEngine;
            if (l2) {
              if (t3 && e2.SourceImgCache.has(t3)) {
                var _2 = e2.SourceImgCache.get(t3);
                return this._domImage = _2.img, _2.timesUsed += 1, void (_2.loaded ? this._onImageLoaded() : _2.waitingForLoadCallback.push(this._onImageLoaded.bind(this)));
              }
              this._domImage = l2.createCanvasImage();
              var h2 = this._domImage, c2 = false;
              h2.style && (null === (r2 = this._source) || void 0 === r2 ? void 0 : r2.endsWith(".svg")) && (h2.style.visibility = "hidden", h2.style.position = "absolute", h2.style.top = "0", null === (a2 = null === (n2 = l2.getRenderingCanvas()) || void 0 === n2 ? void 0 : n2.parentNode) || void 0 === a2 || a2.appendChild(h2), c2 = true), t3 && e2.SourceImgCache.set(t3, { img: this._domImage, timesUsed: 1, loaded: false, waitingForLoadCallback: [this._onImageLoaded.bind(this)] }), this._domImage.onload = function() {
                if (t3) {
                  var i3 = e2.SourceImgCache.get(t3);
                  if (i3) {
                    i3.loaded = true;
                    for (var o3 = 0, r3 = i3.waitingForLoadCallback; o3 < r3.length; o3++) (0, r3[o3])();
                    return i3.waitingForLoadCallback.length = 0, void (c2 && h2.remove());
                  }
                }
                s2._onImageLoaded(), c2 && h2.remove();
              }, t3 && (d.Tools.SetCorsBehavior(t3, this._domImage), d.Tools.SetReferrerPolicyBehavior(this.referrerPolicy, this._domImage), this._domImage.src = t3);
            }
          }
        }, enumerable: false, configurable: true }), e2.ResetImageCache = function() {
          e2.SourceImgCache.clear();
        }, e2.prototype._removeCacheUsage = function(t3) {
          var i2 = t3 && e2.SourceImgCache.get(t3);
          if (i2) {
            i2.timesUsed -= 1;
            var o2 = i2.img;
            o2.parentNode && o2.parentNode.removeChild(o2), 0 === i2.timesUsed && e2.SourceImgCache.delete(t3);
          }
        }, e2.prototype._sanitizeSVG = function(t3) {
          if (-1 === t3.indexOf("<svg")) return t3;
          var e3 = new DOMParser().parseFromString(t3, "image/svg+xml"), i2 = [/^on/i, /^xlink:href$/, /^href$/];
          return ["script", "iframe", "foreignObject", "object", "embed", "link", "style"].forEach(function(t4) {
            for (var i3 = e3.getElementsByTagName(t4), o2 = i3.length - 1; o2 >= 0; o2--) i3[o2].remove();
          }), function t4(e4) {
            if (e4.attributes) for (var o2 = function(t5) {
              var o3 = e4.attributes[t5], r3 = o3.name, n2 = o3.value;
              i2.some(function(t6) {
                return t6.test(r3);
              }) && e4.removeAttribute(r3), "string" == typeof n2 && n2.trim().toLowerCase().startsWith("javascript:") && e4.removeAttribute(r3);
            }, r2 = e4.attributes.length - 1; r2 >= 0; r2--) o2(r2);
            for (r2 = 0; r2 < e4.children.length; r2++) t4(e4.children[r2]);
          }(e3.documentElement), new XMLSerializer().serializeToString(e3);
        }, e2.prototype._svgCheck = function(t3) {
          var e3 = this;
          if ("undefined" == typeof window || "undefined" == typeof document || !window.SVGSVGElement) return t3;
          if (window.SVGSVGElement && -1 !== t3.search(/(\.svg|\.svg?[?|#].*)$/gi) && t3.indexOf("#") === t3.lastIndexOf("#")) {
            this._isSVG = true;
            var i2 = (t3 = this._sanitizeSVG(t3)).split("#")[0], o2 = t3.split("#")[1], r2 = document.body.querySelector('object[data="' + i2 + '"]');
            if (r2) {
              var n2 = r2.contentDocument;
              if (n2 && n2.documentElement) {
                var a2 = n2.documentElement.getAttribute("viewBox"), s2 = Number(n2.documentElement.getAttribute("width")), l2 = Number(n2.documentElement.getAttribute("height"));
                if (n2.getElementById(o2) && a2 && s2 && l2) return this._getSVGAttribs(r2, o2), t3;
              }
              r2.addEventListener("load", function() {
                e3._getSVGAttribs(r2, o2);
              });
            } else {
              var _2 = document.createElement("object");
              _2.data = i2, _2.type = "image/svg+xml", _2.width = "0%", _2.height = "0%", document.body.appendChild(_2), _2.onload = function() {
                var t4 = document.body.querySelector('object[data="' + i2 + '"]');
                t4 && e3._getSVGAttribs(t4, o2);
              };
            }
            return i2;
          }
          return t3;
        }, e2.prototype._getSVGAttribs = function(t3, e3) {
          var i2 = t3.contentDocument;
          if (i2 && i2.documentElement) {
            var o2 = i2.documentElement.getAttribute("viewBox"), r2 = Number(i2.documentElement.getAttribute("width")), n2 = Number(i2.documentElement.getAttribute("height")), a2 = i2.getElementById(e3);
            if (o2 && r2 && n2 && a2) {
              var s2 = Number(o2.split(" ")[2]), l2 = Number(o2.split(" ")[3]), _2 = a2.getBBox(), h2 = 1, c2 = 1, u2 = 0, d2 = 0, f2 = a2.transform.baseVal.consolidate().matrix;
              a2.transform && a2.transform.baseVal.consolidate() && (h2 = f2.a, c2 = f2.d, u2 = f2.e, d2 = f2.f), this.sourceLeft = (h2 * _2.x + u2) * r2 / s2, this.sourceTop = (c2 * _2.y + d2) * n2 / l2, this.sourceWidth = _2.width * h2 * (r2 / s2), this.sourceHeight = _2.height * c2 * (n2 / l2), this._svgAttributesComputationCompleted = true, this.onSVGAttributesComputedObservable.notifyObservers(this);
            }
          }
        }, Object.defineProperty(e2.prototype, "cellWidth", { get: function() {
          return this._cellWidth;
        }, set: function(t3) {
          this._cellWidth !== t3 && (this._cellWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cellHeight", { get: function() {
          return this._cellHeight;
        }, set: function(t3) {
          this._cellHeight !== t3 && (this._cellHeight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cellId", { get: function() {
          return this._cellId;
        }, set: function(t3) {
          this._cellId !== t3 && (this._cellId = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype.contains = function(e3, i2) {
          if (!t2.prototype.contains.call(this, e3, i2)) return false;
          if (!this._detectPointerOnOpaqueOnly || !this._workingCanvas) return true;
          var o2 = 0 | this._currentMeasure.width, r2 = 0 | this._currentMeasure.height, n2 = o2 + "_" + r2, a2 = this._imageDataCache.data;
          if (!a2 || this._imageDataCache.key !== n2) {
            var s2 = this._workingCanvas.getContext("2d");
            this._imageDataCache.data = a2 = s2.getImageData(0, 0, o2, r2).data, this._imageDataCache.key = n2;
          }
          return a2[4 * ((e3 = e3 - this._currentMeasure.left | 0) + (i2 = i2 - this._currentMeasure.top | 0) * o2) + 3] > 0;
        }, e2.prototype._getTypeName = function() {
          return "Image";
        }, e2.prototype.synchronizeSizeWithContent = function() {
          this._loaded && (this.width = this._domImage.width + "px", this.height = this._domImage.height + "px");
        }, e2.prototype._processMeasures = function(i2, o2) {
          if (this._loaded) switch (this._stretch) {
            case e2.STRETCH_NONE:
            case e2.STRETCH_FILL:
            case e2.STRETCH_UNIFORM:
            case e2.STRETCH_NINE_PATCH:
              break;
            case e2.STRETCH_EXTEND:
              this._autoScale && this.synchronizeSizeWithContent(), this.parent && this.parent.parent && (this.parent.adaptWidthToChildren = true, this.parent.adaptHeightToChildren = true);
          }
          t2.prototype._processMeasures.call(this, i2, o2);
        }, e2.prototype._prepareWorkingCanvasForOpaqueDetection = function() {
          var t3, e3;
          if (this._detectPointerOnOpaqueOnly) {
            var i2 = this._currentMeasure.width, o2 = this._currentMeasure.height;
            if (!this._workingCanvas) {
              var r2 = (null === (e3 = null === (t3 = this._host) || void 0 === t3 ? void 0 : t3.getScene()) || void 0 === e3 ? void 0 : e3.getEngine()) || d.EngineStore.LastCreatedEngine;
              if (!r2) throw new Error("Invalid engine. Unable to create a canvas.");
              this._workingCanvas = r2.createCanvas(i2, o2);
            }
            this._workingCanvas.getContext("2d").clearRect(0, 0, i2, o2);
          }
        }, e2.prototype._drawImage = function(t3, e3, i2, o2, r2, n2, a2, s2, l2) {
          if (t3.drawImage(this._domImage, e3, i2, o2, r2, n2, a2, s2, l2), this._detectPointerOnOpaqueOnly) {
            var _2 = t3.getTransform(), h2 = this._workingCanvas.getContext("2d");
            h2.save();
            var c2 = n2 - this._currentMeasure.left, u2 = a2 - this._currentMeasure.top;
            h2.setTransform(_2.a, _2.b, _2.c, _2.d, (c2 + s2) / 2, (u2 + l2) / 2), h2.translate(-(c2 + s2) / 2, -(u2 + l2) / 2), h2.drawImage(this._domImage, e3, i2, o2, r2, c2, u2, s2, l2), h2.restore();
          }
        }, e2.prototype._draw = function(t3) {
          var i2, o2, r2, n2;
          if (t3.save(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), -1 == this.cellId) i2 = this._sourceLeft, o2 = this._sourceTop, r2 = this._sourceWidth ? this._sourceWidth : this._imageWidth, n2 = this._sourceHeight ? this._sourceHeight : this._imageHeight;
          else {
            var a2 = this._domImage.naturalWidth / this.cellWidth, s2 = this.cellId / a2 | 0, l2 = this.cellId % a2;
            i2 = this.cellWidth * l2, o2 = this.cellHeight * s2, r2 = this.cellWidth, n2 = this.cellHeight;
          }
          if (this._prepareWorkingCanvasForOpaqueDetection(), this._applyStates(t3), this._loaded) switch (this._stretch) {
            case e2.STRETCH_NONE:
            case e2.STRETCH_FILL:
              this._drawImage(t3, i2, o2, r2, n2, this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height);
              break;
            case e2.STRETCH_UNIFORM:
              var _2 = this._currentMeasure.width / r2, h2 = this._currentMeasure.height / n2, c2 = Math.min(_2, h2), u2 = (this._currentMeasure.width - r2 * c2) / 2, d2 = (this._currentMeasure.height - n2 * c2) / 2;
              this._drawImage(t3, i2, o2, r2, n2, this._currentMeasure.left + u2, this._currentMeasure.top + d2, r2 * c2, n2 * c2);
              break;
            case e2.STRETCH_EXTEND:
              this._drawImage(t3, i2, o2, r2, n2, this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height);
              break;
            case e2.STRETCH_NINE_PATCH:
              this._renderNinePatch(t3, i2, o2, r2, n2);
          }
          t3.restore();
        }, e2.prototype._renderNinePatch = function(t3, e3, i2, o2, r2) {
          var n2 = this.host.idealRatio, a2 = this._sliceLeft, s2 = this._sliceTop, l2 = r2 - this._sliceBottom, _2 = o2 - this._sliceRight, h2 = this._sliceRight - this._sliceLeft, c2 = this._sliceBottom - this._sliceTop, u2 = Math.round(a2 * n2), d2 = Math.round(s2 * n2), f2 = Math.round(l2 * n2), p2 = Math.round(_2 * n2), g2 = Math.round(this._currentMeasure.width) - p2 - u2 + 2, b2 = Math.round(this._currentMeasure.height) - f2 - d2 + 2, m2 = Math.round(this._currentMeasure.left) + u2 - 1, v2 = Math.round(this._currentMeasure.top) + d2 - 1, y2 = Math.round(this._currentMeasure.left + this._currentMeasure.width) - p2, x2 = Math.round(this._currentMeasure.top + this._currentMeasure.height) - f2;
          this._drawImage(t3, e3, i2, a2, s2, this._currentMeasure.left, this._currentMeasure.top, u2, d2), this._drawImage(t3, e3 + this._sliceLeft, i2, h2, s2, m2 + 1, this._currentMeasure.top, g2 - 2, d2), this._drawImage(t3, e3 + this._sliceRight, i2, _2, s2, y2, this._currentMeasure.top, p2, d2), this._drawImage(t3, e3, i2 + this._sliceTop, a2, c2, this._currentMeasure.left, v2 + 1, u2, b2 - 2), this._drawImage(t3, e3 + this._sliceLeft, i2 + this._sliceTop, h2, c2, m2 + 1, v2 + 1, g2 - 2, b2 - 2), this._drawImage(t3, e3 + this._sliceRight, i2 + this._sliceTop, _2, c2, y2, v2 + 1, p2, b2 - 2), this._drawImage(t3, e3, i2 + this._sliceBottom, a2, l2, this._currentMeasure.left, x2, u2, f2), this._drawImage(t3, e3 + this.sliceLeft, i2 + this._sliceBottom, h2, l2, m2 + 1, x2, g2 - 2, f2), this._drawImage(t3, e3 + this._sliceRight, i2 + this._sliceBottom, _2, l2, y2, x2, p2, f2);
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this.onImageLoadedObservable.clear(), this.onSVGAttributesComputedObservable.clear(), this._removeCacheUsage(this._source);
        }, e2.SourceImgCache = /* @__PURE__ */ new Map(), e2.STRETCH_NONE = 0, e2.STRETCH_FILL = 1, e2.STRETCH_UNIFORM = 2, e2.STRETCH_EXTEND = 3, e2.STRETCH_NINE_PATCH = 4, h([(0, d.serialize)()], e2.prototype, "detectPointerOnOpaqueOnly", null), h([(0, d.serialize)()], e2.prototype, "sliceLeft", null), h([(0, d.serialize)()], e2.prototype, "sliceRight", null), h([(0, d.serialize)()], e2.prototype, "sliceTop", null), h([(0, d.serialize)()], e2.prototype, "sliceBottom", null), h([(0, d.serialize)()], e2.prototype, "sourceLeft", null), h([(0, d.serialize)()], e2.prototype, "sourceTop", null), h([(0, d.serialize)()], e2.prototype, "sourceWidth", null), h([(0, d.serialize)()], e2.prototype, "sourceHeight", null), h([(0, d.serialize)()], e2.prototype, "populateNinePatchSlicesFromImage", null), h([(0, d.serialize)()], e2.prototype, "autoScale", null), h([(0, d.serialize)()], e2.prototype, "stretch", null), h([(0, d.serialize)()], e2.prototype, "source", null), h([(0, d.serialize)()], e2.prototype, "cellWidth", null), h([(0, d.serialize)()], e2.prototype, "cellHeight", null), h([(0, d.serialize)()], e2.prototype, "cellId", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.Image", O);
      var R = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          i2.name = e3, i2.thickness = 1, i2.isPointerBlocker = true;
          var o2 = null;
          return i2.pointerEnterAnimation = function() {
            o2 = i2.alpha, i2.alpha -= 0.1;
          }, i2.pointerOutAnimation = function() {
            null !== o2 && (i2.alpha = o2);
          }, i2.pointerDownAnimation = function() {
            i2.scaleX -= 0.05, i2.scaleY -= 0.05;
          }, i2.pointerUpAnimation = function() {
            i2.scaleX += 0.05, i2.scaleY += 0.05;
          }, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "image", { get: function() {
          return this._image;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "textBlock", { get: function() {
          return this._textBlock;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Button";
        }, e2.prototype._processPicking = function(e3, i2, o2, r2, n2, a2, s2, l2) {
          if (!this._isEnabled || !this.isHitTestVisible || !this.isVisible || this.notRenderable) return false;
          if (!t2.prototype.contains.call(this, e3, i2)) return false;
          if (this.delegatePickingToChildren) {
            for (var _2 = false, h2 = this._children.length - 1; h2 >= 0; h2--) {
              var c2 = this._children[h2];
              if (c2.isEnabled && c2.isHitTestVisible && c2.isVisible && !c2.notRenderable && c2.contains(e3, i2)) {
                _2 = true;
                break;
              }
            }
            if (!_2) return false;
          }
          return this._processObservables(r2, e3, i2, o2, n2, a2, s2, l2), true;
        }, e2.prototype._onPointerEnter = function(e3, i2) {
          return !!t2.prototype._onPointerEnter.call(this, e3, i2) && (!this.isReadOnly && this.pointerEnterAnimation && this.pointerEnterAnimation(), true);
        }, e2.prototype._onPointerOut = function(e3, i2, o2) {
          void 0 === o2 && (o2 = false), !this.isReadOnly && this.pointerOutAnimation && this.pointerOutAnimation(), t2.prototype._onPointerOut.call(this, e3, i2, o2);
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return !!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2) && (!this.isReadOnly && this.pointerDownAnimation && this.pointerDownAnimation(), true);
        }, e2.prototype._getRectangleFill = function(t3) {
          return this.isEnabled ? this._getBackgroundColor(t3) : this._disabledColor;
        }, e2.prototype._onPointerUp = function(e3, i2, o2, r2, n2, a2) {
          !this.isReadOnly && this.pointerUpAnimation && this.pointerUpAnimation(), t2.prototype._onPointerUp.call(this, e3, i2, o2, r2, n2, a2);
        }, e2.prototype.serialize = function(e3, i2, o2) {
          t2.prototype.serialize.call(this, e3, i2, o2), (this.isSerializable || i2) && (this._textBlock && (e3.textBlockName = this._textBlock.name), this._image && (e3.imageName = this._image.name));
        }, e2.prototype._parseFromContent = function(e3, i2) {
          t2.prototype._parseFromContent.call(this, e3, i2), e3.textBlockName && (this._textBlock = this.getChildByName(e3.textBlockName)), e3.imageName && (this._image = this.getChildByName(e3.imageName));
        }, e2.CreateImageButton = function(t3, e3, i2) {
          var o2 = new this(t3), r2 = new S(t3 + "_button", e3);
          r2.textWrapping = true, r2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_CENTER, r2.paddingLeft = "20%", o2.addControl(r2);
          var n2 = new O(t3 + "_icon", i2);
          return n2.width = "20%", n2.stretch = O.STRETCH_UNIFORM, n2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, o2.addControl(n2), o2._image = n2, o2._textBlock = r2, o2;
        }, e2.CreateImageOnlyButton = function(t3, e3) {
          var i2 = new this(t3), o2 = new O(t3 + "_icon", e3);
          return o2.stretch = O.STRETCH_FILL, o2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, i2.addControl(o2), i2._image = o2, i2;
        }, e2.CreateSimpleButton = function(t3, e3) {
          var i2 = new this(t3), o2 = new S(t3 + "_button", e3);
          return o2.textWrapping = true, o2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_CENTER, i2.addControl(o2), i2._textBlock = o2, i2;
        }, e2.CreateImageWithCenterTextButton = function(t3, e3, i2) {
          var o2 = new this(t3), r2 = new O(t3 + "_icon", i2);
          r2.stretch = O.STRETCH_FILL, o2.addControl(r2);
          var n2 = new S(t3 + "_button", e3);
          return n2.textWrapping = true, n2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_CENTER, o2.addControl(n2), o2._image = r2, o2._textBlock = n2, o2;
        }, e2;
      }(T);
      (0, d.RegisterClass)("BABYLON.GUI.Button", R);
      var w = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._isVertical = true, i2._manualWidth = false, i2._manualHeight = false, i2._doNotTrackManualChanges = false, i2._spacing = 0, i2.ignoreLayoutWarnings = false, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "isVertical", { get: function() {
          return this._isVertical;
        }, set: function(t3) {
          this._isVertical !== t3 && (this._isVertical = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "spacing", { get: function() {
          return this._spacing;
        }, set: function(t3) {
          this._spacing !== t3 && (this._spacing = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "width", { get: function() {
          return this._width.toString(this._host);
        }, set: function(t3) {
          this._doNotTrackManualChanges || (this._manualWidth = true), this._width.toString(this._host) !== t3 && this._width.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "height", { get: function() {
          return this._height.toString(this._host);
        }, set: function(t3) {
          this._doNotTrackManualChanges || (this._manualHeight = true), this._height.toString(this._host) !== t3 && this._height.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "StackPanel";
        }, e2.prototype._preMeasure = function(e3, i2) {
          for (var o2 = 0, r2 = this._children; o2 < r2.length; o2++) {
            var n2 = r2[o2];
            this._isVertical ? n2.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP : n2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT;
          }
          t2.prototype._preMeasure.call(this, e3, i2);
        }, e2.prototype._additionalProcessing = function(e3, i2) {
          t2.prototype._additionalProcessing.call(this, e3, i2), this._measureForChildren.copyFrom(e3), this._measureForChildren.left = this._currentMeasure.left, this._measureForChildren.top = this._currentMeasure.top, this.isVertical && !this._manualWidth || (this._measureForChildren.width = this._currentMeasure.width), (this.isVertical || this._manualHeight) && (this._measureForChildren.height = this._currentMeasure.height);
        }, e2.prototype._postMeasure = function() {
          for (var e3 = 0, i2 = 0, o2 = this._children.length, r2 = 0; r2 < o2; r2++) {
            var n2 = this._children[r2];
            if (n2.isVisible && !n2.notRenderable) if (this._isVertical) {
              var a2 = i2 + "px";
              n2.top !== a2 && (n2.top = a2, this._rebuildLayout = true, n2._top.ignoreAdaptiveScaling = true), this.ignoreLayoutWarnings || n2.isDimensionFullyDefined("height") ? i2 += n2._currentMeasure.height + n2._paddingTopInPixels + n2._paddingBottomInPixels + (r2 < o2 - 1 ? this._spacing : 0) : d.Logger.Warn("Control (Name:".concat(n2.name, ", UniqueId:").concat(n2.uniqueId, ") is using height in percentage mode inside a vertical StackPanel"), 1);
            } else {
              var s2 = e3 + "px";
              n2.left !== s2 && (n2.left = s2, this._rebuildLayout = true, n2._left.ignoreAdaptiveScaling = true), this.ignoreLayoutWarnings || n2.isDimensionFullyDefined("width") ? e3 += n2._currentMeasure.width + n2._paddingLeftInPixels + n2._paddingRightInPixels + (r2 < o2 - 1 ? this._spacing : 0) : d.Logger.Warn("Control (Name:".concat(n2.name, ", UniqueId:").concat(n2.uniqueId, ") is using width in percentage mode inside a horizontal StackPanel"), 1);
            }
          }
          e3 += this._paddingLeftInPixels + this._paddingRightInPixels, i2 += this._paddingTopInPixels + this._paddingBottomInPixels, this._doNotTrackManualChanges = true;
          var l2 = false, _2 = false;
          if ((!this._manualHeight || this.adaptHeightToChildren) && this._isVertical) {
            var h2 = this.height;
            this.height = i2 + "px", _2 = h2 !== this.height || !this._height.ignoreAdaptiveScaling;
          }
          if ((!this._manualWidth || this.adaptWidthToChildren) && !this._isVertical) {
            var c2 = this.width;
            this.width = e3 + "px", l2 = c2 !== this.width || !this._width.ignoreAdaptiveScaling;
          }
          _2 && (this._height.ignoreAdaptiveScaling = true), l2 && (this._width.ignoreAdaptiveScaling = true), this._doNotTrackManualChanges = false, (l2 || _2) && (this._rebuildLayout = true), t2.prototype._postMeasure.call(this);
        }, e2.prototype._getManualDim = function(t3) {
          return "width" === t3 ? this._manualWidth : this._manualHeight;
        }, e2.prototype.isDimensionFullyDefined = function(t3) {
          if ("height" === t3 ? this.isVertical : !this.isVertical && !this._getManualDim(t3)) {
            for (var e3 = 0, i2 = this._children; e3 < i2.length; e3++) if (!i2[e3].isDimensionFullyDefined(t3)) return false;
            return true;
          }
          return this.getDimension(t3).isPixel || this._getAdaptDimTo(t3);
        }, e2.prototype.serialize = function(e3, i2, o2) {
          t2.prototype.serialize.call(this, e3, i2, o2), (this.isSerializable || i2) && (e3.manualWidth = this._manualWidth, e3.manualHeight = this._manualHeight);
        }, e2.prototype._parseFromContent = function(e3, i2) {
          this._manualWidth = e3.manualWidth, this._manualHeight = e3.manualHeight, t2.prototype._parseFromContent.call(this, e3, i2);
        }, h([(0, d.serialize)()], e2.prototype, "ignoreLayoutWarnings", void 0), h([(0, d.serialize)()], e2.prototype, "isVertical", null), h([(0, d.serialize)()], e2.prototype, "spacing", null), h([(0, d.serialize)()], e2.prototype, "width", null), h([(0, d.serialize)()], e2.prototype, "height", null), e2;
      }(B);
      (0, d.RegisterClass)("BABYLON.GUI.StackPanel", w);
      var M = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._isChecked = false, i2._background = "black", i2._checkSizeRatio = 0.8, i2._thickness = 1, i2.onIsCheckedChangedObservable = new d.Observable(), i2.isPointerBlocker = true, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "thickness", { get: function() {
          return this._thickness;
        }, set: function(t3) {
          this._thickness !== t3 && (this._thickness = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "checkSizeRatio", { get: function() {
          return this._checkSizeRatio;
        }, set: function(t3) {
          t3 = Math.max(Math.min(1, t3), 0), this._checkSizeRatio !== t3 && (this._checkSizeRatio = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isChecked", { get: function() {
          return this._isChecked;
        }, set: function(t3) {
          this._isChecked !== t3 && (this._isChecked = t3, this._markAsDirty(), this.onIsCheckedChangedObservable.notifyObservers(t3));
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Checkbox";
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3);
          var e3 = this._currentMeasure.width - this._thickness, i2 = this._currentMeasure.height - this._thickness;
          if ((this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), t3.fillStyle = this._isEnabled ? this._background : this._disabledColor, t3.fillRect(this._currentMeasure.left + this._thickness / 2, this._currentMeasure.top + this._thickness / 2, e3, i2), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), this._isChecked) {
            t3.fillStyle = this._isEnabled ? this.color ? this.color : "#ffffff" : this._disabledColorItem;
            var o2 = e3 * this._checkSizeRatio, r2 = i2 * this._checkSizeRatio;
            t3.fillRect(this._currentMeasure.left + this._thickness / 2 + (e3 - o2) / 2, this._currentMeasure.top + this._thickness / 2 + (i2 - r2) / 2, o2, r2);
          }
          t3.strokeStyle = this.color, t3.lineWidth = this._thickness, t3.strokeRect(this._currentMeasure.left + this._thickness / 2, this._currentMeasure.top + this._thickness / 2, e3, i2), t3.restore();
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return !!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2) && (this.isReadOnly || (this.isChecked = !this.isChecked), true);
        }, e2.AddCheckBoxWithHeader = function(t3, i2) {
          var o2 = new w();
          o2.isVertical = false, o2.height = "30px";
          var r2 = new e2();
          r2.width = "20px", r2.height = "20px", r2.isChecked = true, r2.color = "green", r2.onIsCheckedChangedObservable.add(i2), o2.addControl(r2);
          var n2 = new S();
          return n2.text = t3, n2.width = "180px", n2.paddingLeft = "5px", n2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, n2.color = "white", o2.addControl(n2), o2;
        }, h([(0, d.serialize)()], e2.prototype, "thickness", null), h([(0, d.serialize)()], e2.prototype, "checkSizeRatio", null), h([(0, d.serialize)()], e2.prototype, "background", null), h([(0, d.serialize)()], e2.prototype, "isChecked", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.Checkbox", M);
      var E = function() {
        function t2() {
        }
        return Object.defineProperty(t2.prototype, "text", { get: function() {
          return this._characters ? this._characters.join("") : this._text;
        }, set: function(t3) {
          this._text = t3, this._characters = Array.from && Array.from(t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "length", { get: function() {
          return this._characters ? this._characters.length : this._text.length;
        }, enumerable: false, configurable: true }), t2.prototype.removePart = function(t3, e2, i2) {
          var o2;
          if (this._text = this._text.slice(0, t3) + (i2 || "") + this._text.slice(e2), this._characters) {
            var r2 = i2 ? Array.from(i2) : [];
            (o2 = this._characters).splice.apply(o2, function(t4, e3, i3) {
              if (i3 || 2 === arguments.length) for (var o3, r3 = 0, n2 = e3.length; r3 < n2; r3++) !o3 && r3 in e3 || (o3 || (o3 = Array.prototype.slice.call(e3, 0, r3)), o3[r3] = e3[r3]);
              return t4.concat(o3 || Array.prototype.slice.call(e3));
            }([t3, e2 - t3], r2, false));
          }
        }, t2.prototype.charAt = function(t3) {
          return this._characters ? this._characters[t3] : this._text.charAt(t3);
        }, t2.prototype.substr = function(t3, e2) {
          if (this._characters) {
            t3 = isNaN(t3) ? 0 : t3 >= 0 ? Math.min(t3, this._characters.length) : this._characters.length + Math.max(t3, -this._characters.length), void 0 === e2 ? e2 = this._characters.length - t3 : (isNaN(e2) || e2 < 0) && (e2 = 0);
            for (var i2 = []; --e2 >= 0; ) i2[e2] = this._characters[t3 + e2];
            return i2.join("");
          }
          return this._text.substring(t3, e2 ? e2 + t3 : void 0);
        }, t2.prototype.substring = function(t3, e2) {
          if (this._characters) {
            isNaN(t3) ? t3 = 0 : t3 > this._characters.length ? t3 = this._characters.length : t3 < 0 && (t3 = 0), void 0 === e2 ? e2 = this._characters.length : isNaN(e2) ? e2 = 0 : e2 > this._characters.length ? e2 = this._characters.length : e2 < 0 && (e2 = 0);
            for (var i2 = [], o2 = 0; t3 < e2; ) i2[o2++] = this._characters[t3++];
            return i2.join("");
          }
          return this._text.substring(t3, e2);
        }, t2.prototype.isWord = function(t3) {
          var e2 = /\w/g;
          return this._characters ? -1 !== this._characters[t3].search(e2) : -1 !== this._text.search(e2);
        }, t2;
      }(), F = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = "");
          var o2 = t2.call(this, e3) || this;
          return o2.name = e3, o2._placeholderText = "", o2._background = "#222222", o2._focusedBackground = "#000000", o2._placeholderColor = "gray", o2._thickness = 1, o2._margin = new f(10, f.UNITMODE_PIXEL), o2._autoStretchWidth = true, o2._maxWidth = new f(1, f.UNITMODE_PERCENTAGE, false), o2._blinkIsEven = false, o2._cursorOffset = 0, o2._deadKey = false, o2._addKey = true, o2._currentKey = "", o2._isTextHighlightOn = false, o2._textHighlightColor = "#d5e0ff", o2._highligherOpacity = 0.4, o2._highlightedText = "", o2._startHighlightIndex = 0, o2._endHighlightIndex = 0, o2._cursorIndex = -1, o2._outlineWidth = 0, o2._outlineColor = "white", o2._onFocusSelectAll = false, o2._isPointerDown = false, o2.promptMessage = "Please enter text:", o2.disableMobilePrompt = false, o2.onTextChangedObservable = new d.Observable(), o2.onBeforeKeyAddObservable = new d.Observable(), o2.onTextHighlightObservable = new d.Observable(), o2.onTextCopyObservable = new d.Observable(), o2.onTextCutObservable = new d.Observable(), o2.onTextPasteObservable = new d.Observable(), o2.text = i2, o2.isPointerBlocker = true, o2._focusedColor = "white", o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "outlineWidth", { get: function() {
          return this._outlineWidth;
        }, set: function(t3) {
          this._outlineWidth !== t3 && (this._outlineWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "outlineColor", { get: function() {
          return this._outlineColor;
        }, set: function(t3) {
          this._outlineColor !== t3 && (this._outlineColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "maxWidth", { get: function() {
          return this._maxWidth.toString(this._host);
        }, set: function(t3) {
          this._maxWidth.toString(this._host) !== t3 && this._maxWidth.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "maxWidthInPixels", { get: function() {
          return this._maxWidth.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "highligherOpacity", { get: function() {
          return this._highligherOpacity;
        }, set: function(t3) {
          this._highligherOpacity !== t3 && (this._highligherOpacity = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onFocusSelectAll", { get: function() {
          return this._onFocusSelectAll;
        }, set: function(t3) {
          this._onFocusSelectAll !== t3 && (this._onFocusSelectAll = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "textHighlightColor", { get: function() {
          return this._textHighlightColor;
        }, set: function(t3) {
          this._textHighlightColor !== t3 && (this._textHighlightColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "margin", { get: function() {
          return this._margin.toString(this._host);
        }, set: function(t3) {
          this._margin.toString(this._host) !== t3 && this._margin.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "marginInPixels", { get: function() {
          return this._margin.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "autoStretchWidth", { get: function() {
          return this._autoStretchWidth;
        }, set: function(t3) {
          this._autoStretchWidth !== t3 && (this._autoStretchWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thickness", { get: function() {
          return this._thickness;
        }, set: function(t3) {
          this._thickness !== t3 && (this._thickness = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "focusedBackground", { get: function() {
          return this._focusedBackground;
        }, set: function(t3) {
          this._focusedBackground !== t3 && (this._focusedBackground = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "focusedColor", { set: function(t3) {
          this._focusedColor !== t3 && (this._focusedColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "placeholderColor", { get: function() {
          return this._placeholderColor;
        }, set: function(t3) {
          this._placeholderColor !== t3 && (this._placeholderColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "placeholderText", { get: function() {
          return this._placeholderText;
        }, set: function(t3) {
          this._placeholderText !== t3 && (this._placeholderText = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "deadKey", { get: function() {
          return this._deadKey;
        }, set: function(t3) {
          this._deadKey = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "highlightedText", { get: function() {
          return this._highlightedText;
        }, set: function(t3) {
          this._highlightedText !== t3 && (this._highlightedText = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "addKey", { get: function() {
          return this._addKey;
        }, set: function(t3) {
          this._addKey = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "currentKey", { get: function() {
          return this._currentKey;
        }, set: function(t3) {
          this._currentKey = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "text", { get: function() {
          return this._textWrapper.text;
        }, set: function(t3) {
          var e3 = t3.toString();
          this._textWrapper || (this._textWrapper = new E()), this._textWrapper.text !== e3 && (this._textWrapper.text = e3, this._textHasChanged());
        }, enumerable: false, configurable: true }), e2.prototype._textHasChanged = function() {
          this._markAsDirty(), this.onTextChangedObservable.notifyObservers(this);
        }, e2.prototype._applyStates = function(e3) {
          t2.prototype._applyStates.call(this, e3), this.outlineWidth && (e3.lineWidth = this.outlineWidth, e3.strokeStyle = this.outlineColor);
        }, Object.defineProperty(e2.prototype, "width", { get: function() {
          return this._width.toString(this._host);
        }, set: function(t3) {
          (this._width.toString(this._host) !== t3 || this._autoStretchWidth) && (this._width.fromString(t3) && this._markAsDirty(), this.autoStretchWidth = false);
        }, enumerable: false, configurable: true }), e2.prototype.onBlur = function() {
          this._isFocused = false, this._scrollLeft = null, this._cursorOffset = 0, clearTimeout(this._blinkTimeout), this._markAsDirty(), this.onBlurObservable.notifyObservers(this), this._host.unRegisterClipboardEvents(), this._onClipboardObserver && this._host.onClipboardObservable.remove(this._onClipboardObserver);
          var t3 = this._host.getScene();
          this._onPointerDblTapObserver && t3 && t3.onPointerObservable.remove(this._onPointerDblTapObserver);
        }, e2.prototype.onFocus = function() {
          var t3 = this;
          if (this._isEnabled) {
            if (this._scrollLeft = null, this._isFocused = true, this._blinkIsEven = false, this._cursorOffset = 0, this._markAsDirty(), this.onFocusObservable.notifyObservers(this), "touch" === this._focusedBy && !this.disableMobilePrompt) {
              var e3 = prompt(this.promptMessage);
              return null !== e3 && (this.text = e3), void (this._host.focusedControl = null);
            }
            this._host.registerClipboardEvents(), this._onClipboardObserver = this._host.onClipboardObservable.add(function(e4) {
              switch (e4.type) {
                case d.ClipboardEventTypes.COPY:
                  t3._onCopyText(e4.event), t3.onTextCopyObservable.notifyObservers(t3);
                  break;
                case d.ClipboardEventTypes.CUT:
                  t3._onCutText(e4.event), t3.onTextCutObservable.notifyObservers(t3);
                  break;
                case d.ClipboardEventTypes.PASTE:
                  t3._onPasteText(e4.event), t3.onTextPasteObservable.notifyObservers(t3);
                  break;
                default:
                  return;
              }
            });
            var i2 = this._host.getScene();
            i2 && (this._onPointerDblTapObserver = i2.onPointerObservable.add(function(e4) {
              t3._isFocused && e4.type === d.PointerEventTypes.POINTERDOUBLETAP && t3._processDblClick(e4);
            })), this._onFocusSelectAll && this.selectAllText();
          }
        }, e2.prototype._getTypeName = function() {
          return "InputText";
        }, e2.prototype.keepsFocusWith = function() {
          return this._connectedVirtualKeyboard ? [this._connectedVirtualKeyboard] : null;
        }, e2.prototype.processKey = function(t3, e3, i2) {
          var o2;
          if (!this.isReadOnly && (!i2 || !i2.ctrlKey && !i2.metaKey || 67 !== t3 && 86 !== t3 && 88 !== t3)) {
            if (i2 && (i2.ctrlKey || i2.metaKey) && 65 === t3) return this.selectAllText(), void i2.preventDefault();
            switch (t3) {
              case 32:
                e3 = " ";
                break;
              case 191:
                i2 && i2.preventDefault();
                break;
              case 8:
                if (this._textWrapper.text && this._textWrapper.length > 0) {
                  if (this.isTextHighlightOn) return this._textWrapper.removePart(this._startHighlightIndex, this._endHighlightIndex), this._textHasChanged(), this.isTextHighlightOn = false, this._cursorOffset = this._textWrapper.length - this._startHighlightIndex, this._blinkIsEven = false, void (i2 && i2.preventDefault());
                  0 === this._cursorOffset ? this.text = this._textWrapper.substring(0, this._textWrapper.length - 1) : (r2 = this._textWrapper.length - this._cursorOffset) > 0 && (this._textWrapper.removePart(r2 - 1, r2), this._textHasChanged());
                }
                return void (i2 && i2.preventDefault());
              case 46:
                if (this.isTextHighlightOn) return this._textWrapper.removePart(this._startHighlightIndex, this._endHighlightIndex), this._textHasChanged(), this.isTextHighlightOn = false, this._cursorOffset = this._textWrapper.length - this._startHighlightIndex, void (i2 && i2.preventDefault());
                if (this._textWrapper.text && this._textWrapper.length > 0 && this._cursorOffset > 0) {
                  var r2 = this._textWrapper.length - this._cursorOffset;
                  this._textWrapper.removePart(r2, r2 + 1), this._textHasChanged(), this._cursorOffset--;
                }
                return void (i2 && i2.preventDefault());
              case 13:
                return this._host.focusedControl = null, void (this.isTextHighlightOn = false);
              case 35:
                return this._cursorOffset = 0, this._blinkIsEven = false, this.isTextHighlightOn = false, void this._markAsDirty();
              case 36:
                return this._cursorOffset = this._textWrapper.length, this._blinkIsEven = false, this.isTextHighlightOn = false, void this._markAsDirty();
              case 37:
                if (this._cursorOffset++, this._cursorOffset > this._textWrapper.length && (this._cursorOffset = this._textWrapper.length), i2 && i2.shiftKey) {
                  if (this._blinkIsEven = false, i2.ctrlKey || i2.metaKey) {
                    if (!this.isTextHighlightOn) {
                      if (this._textWrapper.length === this._cursorOffset) return;
                      this._endHighlightIndex = this._textWrapper.length - this._cursorOffset + 1;
                    }
                    return this._startHighlightIndex = 0, this._cursorIndex = this._textWrapper.length - this._endHighlightIndex, this._cursorOffset = this._textWrapper.length, this.isTextHighlightOn = true, void this._markAsDirty();
                  }
                  return this.isTextHighlightOn ? -1 === this._cursorIndex && (this._cursorIndex = this._textWrapper.length - this._endHighlightIndex, this._cursorOffset = 0 === this._startHighlightIndex ? this._textWrapper.length : this._textWrapper.length - this._startHighlightIndex + 1) : (this.isTextHighlightOn = true, this._cursorIndex = this._cursorOffset >= this._textWrapper.length ? this._textWrapper.length : this._cursorOffset - 1), this._cursorIndex < this._cursorOffset ? (this._endHighlightIndex = this._textWrapper.length - this._cursorIndex, this._startHighlightIndex = this._textWrapper.length - this._cursorOffset) : this._cursorIndex > this._cursorOffset ? (this._endHighlightIndex = this._textWrapper.length - this._cursorOffset, this._startHighlightIndex = this._textWrapper.length - this._cursorIndex) : this.isTextHighlightOn = false, void this._markAsDirty();
                }
                return this.isTextHighlightOn && (this._cursorOffset = this._textWrapper.length - this._startHighlightIndex, this.isTextHighlightOn = false), i2 && (i2.ctrlKey || i2.metaKey) && (this._cursorOffset = this._textWrapper.length, i2.preventDefault()), this._blinkIsEven = false, this.isTextHighlightOn = false, this._cursorIndex = -1, void this._markAsDirty();
              case 39:
                if (this._cursorOffset--, this._cursorOffset < 0 && (this._cursorOffset = 0), i2 && i2.shiftKey) {
                  if (this._blinkIsEven = false, i2.ctrlKey || i2.metaKey) {
                    if (!this.isTextHighlightOn) {
                      if (0 === this._cursorOffset) return;
                      this._startHighlightIndex = this._textWrapper.length - this._cursorOffset - 1;
                    }
                    return this._endHighlightIndex = this._textWrapper.length, this.isTextHighlightOn = true, this._cursorIndex = this._textWrapper.length - this._startHighlightIndex, this._cursorOffset = 0, void this._markAsDirty();
                  }
                  return this.isTextHighlightOn ? -1 === this._cursorIndex && (this._cursorIndex = this._textWrapper.length - this._startHighlightIndex, this._cursorOffset = this._textWrapper.length === this._endHighlightIndex ? 0 : this._textWrapper.length - this._endHighlightIndex - 1) : (this.isTextHighlightOn = true, this._cursorIndex = this._cursorOffset <= 0 ? 0 : this._cursorOffset + 1), this._cursorIndex < this._cursorOffset ? (this._endHighlightIndex = this._textWrapper.length - this._cursorIndex, this._startHighlightIndex = this._textWrapper.length - this._cursorOffset) : this._cursorIndex > this._cursorOffset ? (this._endHighlightIndex = this._textWrapper.length - this._cursorOffset, this._startHighlightIndex = this._textWrapper.length - this._cursorIndex) : this.isTextHighlightOn = false, void this._markAsDirty();
                }
                return this.isTextHighlightOn && (this._cursorOffset = this._textWrapper.length - this._endHighlightIndex, this.isTextHighlightOn = false), i2 && (i2.ctrlKey || i2.metaKey) && (this._cursorOffset = 0, i2.preventDefault()), this._blinkIsEven = false, this.isTextHighlightOn = false, this._cursorIndex = -1, void this._markAsDirty();
            }
            if (32 === t3 && (e3 = null !== (o2 = null == i2 ? void 0 : i2.key) && void 0 !== o2 ? o2 : " "), this._deadKey = "Dead" === e3, e3 && (-1 === t3 || 32 === t3 || 34 === t3 || 39 === t3 || t3 > 47 && t3 < 64 || t3 > 64 && t3 < 91 || t3 > 159 && t3 < 193 || t3 > 218 && t3 < 223 || t3 > 95 && t3 < 112) && (this._currentKey = e3, this.onBeforeKeyAddObservable.notifyObservers(this), e3 = this._currentKey, this._addKey && !this._deadKey)) if (this.isTextHighlightOn) this._textWrapper.removePart(this._startHighlightIndex, this._endHighlightIndex, e3), this._textHasChanged(), this._cursorOffset = this._textWrapper.length - (this._startHighlightIndex + 1), this.isTextHighlightOn = false, this._blinkIsEven = false, this._markAsDirty();
            else if (0 === this._cursorOffset) this.text += this._deadKey && (null == i2 ? void 0 : i2.key) ? i2.key : e3;
            else {
              var n2 = this._textWrapper.length - this._cursorOffset;
              this._textWrapper.removePart(n2, n2, e3), this._textHasChanged();
            }
          }
        }, e2.prototype._updateValueFromCursorIndex = function(t3) {
          if (this._blinkIsEven = false, -1 === this._cursorIndex) this._cursorIndex = t3;
          else if (this._cursorIndex < this._cursorOffset) this._endHighlightIndex = this._textWrapper.length - this._cursorIndex, this._startHighlightIndex = this._textWrapper.length - this._cursorOffset;
          else {
            if (!(this._cursorIndex > this._cursorOffset)) return this.isTextHighlightOn = false, void this._markAsDirty();
            this._endHighlightIndex = this._textWrapper.length - this._cursorOffset, this._startHighlightIndex = this._textWrapper.length - this._cursorIndex;
          }
          this.isTextHighlightOn = true, this._markAsDirty();
        }, e2.prototype._processDblClick = function(t3) {
          var e3, i2;
          this._startHighlightIndex = this._textWrapper.length - this._cursorOffset, this._endHighlightIndex = this._startHighlightIndex;
          do {
            i2 = this._endHighlightIndex < this._textWrapper.length && this._textWrapper.isWord(this._endHighlightIndex) ? ++this._endHighlightIndex : 0, e3 = this._startHighlightIndex > 0 && this._textWrapper.isWord(this._startHighlightIndex - 1) ? --this._startHighlightIndex : 0;
          } while (e3 || i2);
          this._cursorOffset = this._textWrapper.length - this._startHighlightIndex, this.isTextHighlightOn = true, this._clickedCoordinate = null, this._blinkIsEven = true, this._cursorIndex = -1, this._markAsDirty();
        }, e2.prototype.selectAllText = function() {
          this._blinkIsEven = true, this.isTextHighlightOn = true, this._startHighlightIndex = 0, this._endHighlightIndex = this._textWrapper.length, this._cursorOffset = this._textWrapper.length, this._cursorIndex = -1, this._markAsDirty();
        }, e2.prototype.processKeyboard = function(e3) {
          this.processKey(e3.keyCode, e3.key, e3), t2.prototype.processKeyboard.call(this, e3);
        }, e2.prototype._onCopyText = function(t3) {
          this.isTextHighlightOn = false;
          try {
            t3.clipboardData && t3.clipboardData.setData("text/plain", this._highlightedText);
          } catch (t4) {
          }
          this._host.clipboardData = this._highlightedText;
        }, e2.prototype._onCutText = function(t3) {
          if (this._highlightedText) {
            this._textWrapper.removePart(this._startHighlightIndex, this._endHighlightIndex), this._textHasChanged(), this.isTextHighlightOn = false, this._cursorOffset = this._textWrapper.length - this._startHighlightIndex;
            try {
              t3.clipboardData && t3.clipboardData.setData("text/plain", this._highlightedText);
            } catch (t4) {
            }
            this._host.clipboardData = this._highlightedText, this._highlightedText = "";
          }
        }, e2.prototype._onPasteText = function(t3) {
          var e3;
          e3 = t3.clipboardData && -1 !== t3.clipboardData.types.indexOf("text/plain") ? t3.clipboardData.getData("text/plain") : this._host.clipboardData;
          var i2 = this._textWrapper.length - this._cursorOffset;
          this._textWrapper.removePart(i2, i2, e3), this._textHasChanged();
        }, e2.prototype._draw = function(t3) {
          var e3, i2 = this;
          t3.save(), this._applyStates(t3), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), this._isFocused ? this._focusedBackground && (t3.fillStyle = this._isEnabled ? this._focusedBackground : this._disabledColor, t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height)) : this._background && (t3.fillStyle = this._isEnabled ? this._background : this._disabledColor, t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height)), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), this._fontOffset && !this._wasDirty || (this._fontOffset = I._GetFontOffset(t3.font, null === (e3 = this._host.getScene()) || void 0 === e3 ? void 0 : e3.getEngine()));
          var o2 = this._currentMeasure.left + this._margin.getValueInPixel(this._host, this._tempParentMeasure.width);
          this.color && (t3.fillStyle = this.color);
          var r2 = this._beforeRenderText(this._textWrapper);
          this._isFocused || this._textWrapper.text || !this._placeholderText || ((r2 = new E()).text = this._placeholderText, this._placeholderColor && (t3.fillStyle = this._placeholderColor)), this._textWidth = t3.measureText(r2.text).width;
          var n2 = 2 * this._margin.getValueInPixel(this._host, this._tempParentMeasure.width);
          this._autoStretchWidth && (this.width = Math.min(this._maxWidth.getValueInPixel(this._host, this._tempParentMeasure.width), this._textWidth + n2) + "px", this._autoStretchWidth = true);
          var a2 = this._fontOffset.ascent + (this._currentMeasure.height - this._fontOffset.height) / 2, s2 = this._width.getValueInPixel(this._host, this._tempParentMeasure.width) - n2;
          if (t3.save(), t3.beginPath(), t3.rect(o2, this._currentMeasure.top + (this._currentMeasure.height - this._fontOffset.height) / 2, s2 + 2, this._currentMeasure.height), t3.clip(), this._isFocused && this._textWidth > s2) {
            var l2 = o2 - this._textWidth + s2;
            this._scrollLeft || (this._scrollLeft = l2);
          } else this._scrollLeft = o2;
          if (this.outlineWidth && t3.strokeText(r2.text, this._scrollLeft, this._currentMeasure.top + a2), t3.fillText(r2.text, this._scrollLeft, this._currentMeasure.top + a2), this._isFocused) {
            if (this._clickedCoordinate) {
              var _2 = this._scrollLeft + this._textWidth - this._clickedCoordinate, h2 = 0;
              this._cursorOffset = 0;
              var c2 = 0;
              do {
                this._cursorOffset && (c2 = Math.abs(_2 - h2)), this._cursorOffset++, h2 = t3.measureText(r2.substr(r2.length - this._cursorOffset, this._cursorOffset)).width;
              } while (h2 < _2 && r2.length >= this._cursorOffset);
              Math.abs(_2 - h2) > c2 && this._cursorOffset--, this._blinkIsEven = false, this._clickedCoordinate = null;
            }
            if (!this._blinkIsEven) {
              var u2 = r2.substr(r2.length - this._cursorOffset), d2 = t3.measureText(u2).width, f2 = this._scrollLeft + this._textWidth - d2;
              f2 < o2 ? (this._scrollLeft += o2 - f2, f2 = o2, this._markAsDirty()) : f2 > o2 + s2 && (this._scrollLeft += o2 + s2 - f2, f2 = o2 + s2, this._markAsDirty()), this.isTextHighlightOn || t3.fillRect(f2, this._currentMeasure.top + (this._currentMeasure.height - this._fontOffset.height) / 2, 2, this._fontOffset.height);
            }
            if (clearTimeout(this._blinkTimeout), this._blinkTimeout = setTimeout(function() {
              i2._blinkIsEven = !i2._blinkIsEven, i2._markAsDirty();
            }, 500), this.isTextHighlightOn) {
              clearTimeout(this._blinkTimeout);
              var p2 = t3.measureText(r2.substring(this._startHighlightIndex)).width, g2 = this._scrollLeft + this._textWidth - p2;
              this._highlightedText = r2.substring(this._startHighlightIndex, this._endHighlightIndex);
              var b2 = t3.measureText(r2.substring(this._startHighlightIndex, this._endHighlightIndex)).width;
              g2 < o2 && ((b2 -= o2 - g2) || (b2 = t3.measureText(r2.charAt(r2.length - this._cursorOffset)).width), g2 = o2), t3.globalAlpha = this._highligherOpacity, t3.fillStyle = this._textHighlightColor, t3.fillRect(g2, this._currentMeasure.top + (this._currentMeasure.height - this._fontOffset.height) / 2, b2, this._fontOffset.height), t3.globalAlpha = 1;
            }
          }
          t3.restore(), this._thickness && (this._isFocused ? this.focusedColor && (t3.strokeStyle = this.focusedColor) : this.color && (t3.strokeStyle = this.color), t3.lineWidth = this._thickness, t3.strokeRect(this._currentMeasure.left + this._thickness / 2, this._currentMeasure.top + this._thickness / 2, this._currentMeasure.width - this._thickness, this._currentMeasure.height - this._thickness)), t3.restore();
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return !(!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2) || !this.isReadOnly && (this._clickedCoordinate = i2.x, this.isTextHighlightOn = false, this._highlightedText = "", this._cursorIndex = -1, this._isPointerDown = true, this._host._capturingControl[o2] = this, this._focusedBy = n2.event.pointerType, this._host.focusedControl === this ? (clearTimeout(this._blinkTimeout), this._markAsDirty(), 0) : !this._isEnabled || (this._host.focusedControl = this, 0)));
        }, e2.prototype._onPointerMove = function(e3, i2, o2, r2) {
          this._host.focusedControl === this && this._isPointerDown && !this.isReadOnly && (this._clickedCoordinate = i2.x, this._markAsDirty(), this._updateValueFromCursorIndex(this._cursorOffset)), t2.prototype._onPointerMove.call(this, e3, i2, o2, r2);
        }, e2.prototype._onPointerUp = function(e3, i2, o2, r2, n2) {
          this._isPointerDown = false, delete this._host._capturingControl[o2], t2.prototype._onPointerUp.call(this, e3, i2, o2, r2, n2);
        }, e2.prototype._beforeRenderText = function(t3) {
          return t3;
        }, Object.defineProperty(e2.prototype, "isTextHighlightOn", { get: function() {
          return this._isTextHighlightOn;
        }, set: function(t3) {
          this._isTextHighlightOn !== t3 && (t3 && this.onTextHighlightObservable.notifyObservers(this), this._isTextHighlightOn = t3);
        }, enumerable: false, configurable: true }), e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this.onBlurObservable.clear(), this.onFocusObservable.clear(), this.onTextChangedObservable.clear(), this.onTextCopyObservable.clear(), this.onTextCutObservable.clear(), this.onTextPasteObservable.clear(), this.onTextHighlightObservable.clear(), this.onKeyboardEventProcessedObservable.clear();
        }, h([(0, d.serialize)()], e2.prototype, "promptMessage", void 0), h([(0, d.serialize)()], e2.prototype, "disableMobilePrompt", void 0), h([(0, d.serialize)()], e2.prototype, "maxWidth", null), h([(0, d.serialize)()], e2.prototype, "highligherOpacity", null), h([(0, d.serialize)()], e2.prototype, "onFocusSelectAll", null), h([(0, d.serialize)()], e2.prototype, "textHighlightColor", null), h([(0, d.serialize)()], e2.prototype, "margin", null), h([(0, d.serialize)()], e2.prototype, "autoStretchWidth", null), h([(0, d.serialize)()], e2.prototype, "thickness", null), h([(0, d.serialize)()], e2.prototype, "focusedBackground", null), h([(0, d.serialize)()], e2.prototype, "background", null), h([(0, d.serialize)()], e2.prototype, "placeholderColor", null), h([(0, d.serialize)()], e2.prototype, "placeholderText", null), h([(0, d.serialize)()], e2.prototype, "deadKey", null), h([(0, d.serialize)()], e2.prototype, "text", null), h([(0, d.serialize)()], e2.prototype, "width", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.InputText", F);
      var D = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._rowDefinitions = new Array(), i2._rowDefinitionObservers = [], i2._columnDefinitions = new Array(), i2._columnDefinitionObservers = [], i2._cells = {}, i2._childControls = new Array(), i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "clipContent", { get: function() {
          return this._clipContent;
        }, set: function(t3) {
          for (var e3 in this._clipContent = t3, this._cells) this._cells[e3].clipContent = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "clipChildren", { get: function() {
          return this._clipChildren;
        }, set: function(t3) {
          for (var e3 in this._clipChildren = t3, this._cells) this._cells[e3].clipChildren = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "columnCount", { get: function() {
          return this._columnDefinitions.length;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "rowCount", { get: function() {
          return this._rowDefinitions.length;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "children", { get: function() {
          return this._childControls;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cells", { get: function() {
          return this._cells;
        }, enumerable: false, configurable: true }), e2.prototype.getRowDefinition = function(t3) {
          return t3 < 0 || t3 >= this._rowDefinitions.length ? null : this._rowDefinitions[t3];
        }, e2.prototype.getColumnDefinition = function(t3) {
          return t3 < 0 || t3 >= this._columnDefinitions.length ? null : this._columnDefinitions[t3];
        }, e2.prototype.addRowDefinition = function(t3, e3) {
          var i2 = this;
          return void 0 === e3 && (e3 = false), this._rowDefinitions.push(new f(t3, e3 ? f.UNITMODE_PIXEL : f.UNITMODE_PERCENTAGE)), this._rowDefinitionObservers.push(this._rowDefinitions[this.rowCount - 1].onChangedObservable.add(function() {
            return i2._markAsDirty();
          })), this._markAsDirty(), this;
        }, e2.prototype.addColumnDefinition = function(t3, e3) {
          var i2 = this;
          return void 0 === e3 && (e3 = false), this._columnDefinitions.push(new f(t3, e3 ? f.UNITMODE_PIXEL : f.UNITMODE_PERCENTAGE)), this._columnDefinitionObservers.push(this._columnDefinitions[this.columnCount - 1].onChangedObservable.add(function() {
            return i2._markAsDirty();
          })), this._markAsDirty(), this;
        }, e2.prototype.setRowDefinition = function(t3, e3, i2) {
          var o2 = this;
          if (void 0 === i2 && (i2 = false), t3 < 0 || t3 >= this._rowDefinitions.length) return this;
          var r2 = this._rowDefinitions[t3];
          return r2 && r2.isPixel === i2 && r2.value === e3 || (this._rowDefinitions[t3].onChangedObservable.remove(this._rowDefinitionObservers[t3]), this._rowDefinitions[t3] = new f(e3, i2 ? f.UNITMODE_PIXEL : f.UNITMODE_PERCENTAGE), this._rowDefinitionObservers[t3] = this._rowDefinitions[t3].onChangedObservable.add(function() {
            return o2._markAsDirty();
          }), this._markAsDirty()), this;
        }, e2.prototype.setColumnDefinition = function(t3, e3, i2) {
          var o2 = this;
          if (void 0 === i2 && (i2 = false), t3 < 0 || t3 >= this._columnDefinitions.length) return this;
          var r2 = this._columnDefinitions[t3];
          return r2 && r2.isPixel === i2 && r2.value === e3 || (this._columnDefinitions[t3].onChangedObservable.remove(this._columnDefinitionObservers[t3]), this._columnDefinitions[t3] = new f(e3, i2 ? f.UNITMODE_PIXEL : f.UNITMODE_PERCENTAGE), this._columnDefinitionObservers[t3] = this._columnDefinitions[t3].onChangedObservable.add(function() {
            return o2._markAsDirty();
          }), this._markAsDirty()), this;
        }, e2.prototype.getChildrenAt = function(t3, e3) {
          var i2 = this._cells["".concat(t3, ":").concat(e3)];
          return i2 ? i2.children : null;
        }, e2.prototype.getChildCellInfo = function(t3) {
          return t3._tag;
        }, e2.prototype._removeCell = function(e3, i2) {
          if (e3) {
            t2.prototype.removeControl.call(this, e3);
            for (var o2 = 0, r2 = e3.children; o2 < r2.length; o2++) {
              var n2 = r2[o2], a2 = this._childControls.indexOf(n2);
              -1 !== a2 && this._childControls.splice(a2, 1);
            }
            delete this._cells[i2];
          }
        }, e2.prototype._offsetCell = function(t3, e3) {
          if (this._cells[e3]) {
            this._cells[t3] = this._cells[e3];
            for (var i2 = 0, o2 = this._cells[t3].children; i2 < o2.length; i2++) o2[i2]._tag = t3;
            delete this._cells[e3];
          }
        }, e2.prototype.removeColumnDefinition = function(t3) {
          if (t3 < 0 || t3 >= this._columnDefinitions.length) return this;
          for (var e3 = 0; e3 < this._rowDefinitions.length; e3++) {
            var i2 = "".concat(e3, ":").concat(t3), o2 = this._cells[i2];
            this._removeCell(o2, i2);
          }
          for (e3 = 0; e3 < this._rowDefinitions.length; e3++) for (var r2 = t3 + 1; r2 < this._columnDefinitions.length; r2++) {
            var n2 = "".concat(e3, ":").concat(r2 - 1);
            i2 = "".concat(e3, ":").concat(r2), this._offsetCell(n2, i2);
          }
          return this._columnDefinitions[t3].onChangedObservable.remove(this._columnDefinitionObservers[t3]), this._columnDefinitions.splice(t3, 1), this._columnDefinitionObservers.splice(t3, 1), this._markAsDirty(), this;
        }, e2.prototype.removeRowDefinition = function(t3) {
          if (t3 < 0 || t3 >= this._rowDefinitions.length) return this;
          for (var e3 = 0; e3 < this._columnDefinitions.length; e3++) {
            var i2 = "".concat(t3, ":").concat(e3), o2 = this._cells[i2];
            this._removeCell(o2, i2);
          }
          for (e3 = 0; e3 < this._columnDefinitions.length; e3++) for (var r2 = t3 + 1; r2 < this._rowDefinitions.length; r2++) {
            var n2 = "".concat(r2 - 1, ":").concat(e3);
            i2 = "".concat(r2, ":").concat(e3), this._offsetCell(n2, i2);
          }
          return this._rowDefinitions[t3].onChangedObservable.remove(this._rowDefinitionObservers[t3]), this._rowDefinitions.splice(t3, 1), this._rowDefinitionObservers.splice(t3, 1), this._markAsDirty(), this;
        }, e2.prototype.addControl = function(e3, i2, o2) {
          if (void 0 === i2 && (i2 = 0), void 0 === o2 && (o2 = 0), 0 === this._rowDefinitions.length && this.addRowDefinition(1, false), 0 === this._columnDefinitions.length && this.addColumnDefinition(1, false), -1 !== this._childControls.indexOf(e3)) return d.Tools.Warn("Control (Name:".concat(e3.name, ", UniqueId:").concat(e3.uniqueId, ") is already associated with this grid. You must remove it before reattaching it")), this;
          var r2 = Math.min(i2, this._rowDefinitions.length - 1), n2 = Math.min(o2, this._columnDefinitions.length - 1), a2 = "".concat(r2, ":").concat(n2), s2 = this._cells[a2];
          return s2 || (s2 = new B(a2), this._cells[a2] = s2, s2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, s2.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, s2.clipContent = this.clipContent, s2.clipChildren = this.clipChildren, t2.prototype.addControl.call(this, s2)), s2.addControl(e3), this._childControls.push(e3), e3._tag = a2, e3.parent = this, this._markAsDirty(), this;
        }, e2.prototype.removeControl = function(t3) {
          var e3 = this._childControls.indexOf(t3);
          -1 !== e3 && this._childControls.splice(e3, 1);
          var i2 = this._cells[t3._tag];
          return i2 && (i2.removeControl(t3), t3._tag = null), this._markAsDirty(), this;
        }, e2.prototype._getTypeName = function() {
          return "Grid";
        }, e2.prototype._getGridDefinitions = function(t3) {
          for (var e3 = [], i2 = [], o2 = [], r2 = [], n2 = this._currentMeasure.width, a2 = 0, s2 = this._currentMeasure.height, l2 = 0, _2 = 0, h2 = 0, c2 = this._rowDefinitions; h2 < c2.length; h2++) (g2 = c2[h2]).isPixel ? (s2 -= p2 = g2.getValue(this._host), i2[_2] = p2) : l2 += g2.value, _2++;
          var u2 = 0;
          _2 = 0;
          for (var d2 = 0, f2 = this._rowDefinitions; d2 < f2.length; d2++) {
            var p2, g2 = f2[d2];
            r2.push(u2), g2.isPixel ? u2 += g2.getValue(this._host) : (u2 += p2 = Math.round(g2.value / l2 * s2), i2[_2] = p2), _2++;
          }
          _2 = 0;
          for (var b2 = 0, m2 = this._columnDefinitions; b2 < m2.length; b2++) (I2 = m2[b2]).isPixel ? (n2 -= P2 = I2.getValue(this._host), e3[_2] = P2) : a2 += I2.value, _2++;
          var v2 = 0;
          _2 = 0;
          for (var y2 = 0, x2 = this._columnDefinitions; y2 < x2.length; y2++) {
            var P2, I2 = x2[y2];
            o2.push(v2), I2.isPixel ? v2 += I2.getValue(this._host) : (v2 += P2 = Math.round(I2.value / a2 * n2), e3[_2] = P2), _2++;
          }
          t3(o2, r2, e3, i2);
        }, e2.prototype._additionalProcessing = function(e3, i2) {
          var o2 = this;
          this._getGridDefinitions(function(t3, e4, i3, r2) {
            for (var n2 in o2._cells) if (Object.prototype.hasOwnProperty.call(o2._cells, n2)) {
              var a2 = n2.split(":"), s2 = parseInt(a2[0]), l2 = parseInt(a2[1]), _2 = o2._cells[n2];
              _2.leftInPixels = t3[l2], _2.topInPixels = e4[s2], _2.widthInPixels = i3[l2], _2.heightInPixels = r2[s2], _2._left.ignoreAdaptiveScaling = true, _2._top.ignoreAdaptiveScaling = true, _2._width.ignoreAdaptiveScaling = true, _2._height.ignoreAdaptiveScaling = true;
            }
          }), t2.prototype._additionalProcessing.call(this, e3, i2);
        }, e2.prototype._flagDescendantsAsMatrixDirty = function() {
          for (var t3 in this._cells) Object.prototype.hasOwnProperty.call(this._cells, t3) && this._cells[t3]._markMatrixAsDirty();
        }, e2.prototype._renderHighlightSpecific = function(e3) {
          var i2 = this;
          t2.prototype._renderHighlightSpecific.call(this, e3), this._getGridDefinitions(function(t3, o2, r2, n2) {
            for (var a2 = 0; a2 < t3.length; a2++) {
              var s2 = i2._currentMeasure.left + t3[a2] + r2[a2];
              e3.beginPath(), e3.moveTo(s2, i2._currentMeasure.top), e3.lineTo(s2, i2._currentMeasure.top + i2._currentMeasure.height), e3.stroke();
            }
            for (a2 = 0; a2 < o2.length; a2++) {
              var l2 = i2._currentMeasure.top + o2[a2] + n2[a2];
              e3.beginPath(), e3.moveTo(i2._currentMeasure.left, l2), e3.lineTo(i2._currentMeasure.left + i2._currentMeasure.width, l2), e3.stroke();
            }
          }), e3.restore();
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this);
          for (var e3 = 0, i2 = this._childControls; e3 < i2.length; e3++) i2[e3].dispose();
          for (var o2 = 0; o2 < this._rowDefinitions.length; o2++) this._rowDefinitions[o2].onChangedObservable.remove(this._rowDefinitionObservers[o2]);
          for (o2 = 0; o2 < this._columnDefinitions.length; o2++) this._columnDefinitions[o2].onChangedObservable.remove(this._columnDefinitionObservers[o2]);
          this._rowDefinitionObservers.length = 0, this._rowDefinitions.length = 0, this._columnDefinitionObservers.length = 0, this._columnDefinitions.length = 0, this._cells = {}, this._childControls.length = 0;
        }, e2.prototype.serialize = function(e3, i2, o2) {
          if (t2.prototype.serialize.call(this, e3, i2, o2), this.isSerializable || i2) {
            e3.columnCount = this.columnCount, e3.rowCount = this.rowCount, e3.columns = [], e3.rows = [], e3.tags = [];
            for (var r2 = 0; r2 < this.columnCount; ++r2) {
              var n2 = this.getColumnDefinition(r2), a2 = { value: null == n2 ? void 0 : n2.getValue(this.host), unit: null == n2 ? void 0 : n2.unit };
              e3.columns.push(a2);
            }
            for (r2 = 0; r2 < this.rowCount; ++r2) {
              var s2 = this.getRowDefinition(r2);
              a2 = { value: null == s2 ? void 0 : s2.getValue(this.host), unit: null == s2 ? void 0 : s2.unit }, e3.rows.push(a2);
            }
            for (var l2 = 0, _2 = this.children; l2 < _2.length; l2++) {
              var h2 = _2[l2];
              e3.tags.push(h2._tag);
            }
          }
        }, e2.prototype._parseFromContent = function(e3, i2) {
          t2.prototype._parseFromContent.call(this, e3, i2);
          for (var o2 = [], r2 = 0, n2 = this.children; r2 < n2.length; r2++) {
            var a2 = n2[r2];
            o2.push(a2);
          }
          this.removeRowDefinition(0), this.removeColumnDefinition(0);
          for (var s2 = 0; s2 < e3.columnCount; ++s2) {
            var l2 = e3.columns[s2].value, _2 = e3.columns[s2].unit;
            this.addColumnDefinition(l2, 1 === _2);
          }
          for (s2 = 0; s2 < e3.rowCount; ++s2) {
            var h2 = e3.rows[s2].value;
            _2 = e3.rows[s2].unit, this.addRowDefinition(h2, 1 === _2);
          }
          for (s2 = 0; s2 < o2.length; ++s2) {
            var c2 = e3.tags[s2], u2 = parseInt(c2.substring(0, c2.search(":")));
            isNaN(u2) && (u2 = 0);
            var d2 = parseInt(c2.substring(c2.search(":") + 1));
            isNaN(d2) && (d2 = 0), this.addControl(o2[s2], u2, d2);
          }
        }, h([(0, d.serialize)()], e2.prototype, "clipContent", null), e2;
      }(B);
      (0, d.RegisterClass)("BABYLON.GUI.Grid", D);
      var k = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._value = d.Color3.Red(), i2._tmpColor = new d.Color3(), i2._pointerStartedOnSquare = false, i2._pointerStartedOnWheel = false, i2._squareLeft = 0, i2._squareTop = 0, i2._squareSize = 0, i2._h = 360, i2._s = 1, i2._v = 1, i2._lastPointerDownId = -1, i2.onValueChangedObservable = new d.Observable(), i2._pointerIsDown = false, i2.value = new d.Color3(0.88, 0.1, 0.1), i2.size = "200px", i2.isPointerBlocker = true, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "value", { get: function() {
          return this._value;
        }, set: function(t3) {
          this._value.equals(t3) || (this._value.copyFrom(t3), this._value.toHSVToRef(this._tmpColor), this._h = this._tmpColor.r, this._s = Math.max(this._tmpColor.g, 1e-5), this._v = Math.max(this._tmpColor.b, 1e-5), this._markAsDirty(), this._value.r <= e2._Epsilon && (this._value.r = 0), this._value.g <= e2._Epsilon && (this._value.g = 0), this._value.b <= e2._Epsilon && (this._value.b = 0), this._value.r >= 1 - e2._Epsilon && (this._value.r = 1), this._value.g >= 1 - e2._Epsilon && (this._value.g = 1), this._value.b >= 1 - e2._Epsilon && (this._value.b = 1), this.onValueChangedObservable.notifyObservers(this._value));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "width", { get: function() {
          return this._width.toString(this._host);
        }, set: function(t3) {
          this._width.toString(this._host) !== t3 && this._width.fromString(t3) && (0 === this._width.getValue(this._host) && (t3 = "1px", this._width.fromString(t3)), this._height.fromString(t3), this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "height", { get: function() {
          return this._height.toString(this._host);
        }, set: function(t3) {
          this._height.toString(this._host) !== t3 && this._height.fromString(t3) && (0 === this._height.getValue(this._host) && (t3 = "1px", this._height.fromString(t3)), this._width.fromString(t3), this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "size", { get: function() {
          return this.width;
        }, set: function(t3) {
          this.width = t3;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "ColorPicker";
        }, e2.prototype._preMeasure = function(t3) {
          t3.width < t3.height ? this._currentMeasure.height = t3.width : this._currentMeasure.width = t3.height;
        }, e2.prototype._updateSquareProps = function() {
          var t3 = 0.5 * Math.min(this._currentMeasure.width, this._currentMeasure.height), e3 = 2 * (t3 - 0.2 * t3) / Math.sqrt(2), i2 = t3 - 0.5 * e3;
          this._squareLeft = this._currentMeasure.left + i2, this._squareTop = this._currentMeasure.top + i2, this._squareSize = e3;
        }, e2.prototype._drawGradientSquare = function(t3, e3, i2, o2, r2, n2) {
          var a2 = n2.createLinearGradient(e3, i2, o2 + e3, i2);
          a2.addColorStop(0, "#fff"), a2.addColorStop(1, "hsl(" + t3 + ", 100%, 50%)"), n2.fillStyle = a2, n2.fillRect(e3, i2, o2, r2);
          var s2 = n2.createLinearGradient(e3, i2, e3, r2 + i2);
          s2.addColorStop(0, "rgba(0,0,0,0)"), s2.addColorStop(1, "#000"), n2.fillStyle = s2, n2.fillRect(e3, i2, o2, r2);
        }, e2.prototype._drawCircle = function(t3, e3, i2, o2) {
          o2.beginPath(), o2.arc(t3, e3, i2 + 1, 0, 2 * Math.PI, false), o2.lineWidth = 3, o2.strokeStyle = "#333333", o2.stroke(), o2.beginPath(), o2.arc(t3, e3, i2, 0, 2 * Math.PI, false), o2.lineWidth = 3, o2.strokeStyle = "#ffffff", o2.stroke();
        }, e2.prototype._createColorWheelCanvas = function(t3, e3) {
          var i2 = d.EngineStore.LastCreatedEngine;
          if (!i2) throw new Error("Invalid engine. Unable to create a canvas.");
          for (var o2 = i2.createCanvas(2 * t3, 2 * t3), r2 = o2.getContext("2d"), n2 = r2.getImageData(0, 0, 2 * t3, 2 * t3), a2 = n2.data, s2 = this._tmpColor, l2 = t3 * t3, _2 = t3 - e3, h2 = _2 * _2, c2 = -t3; c2 < t3; c2++) for (var u2 = -t3; u2 < t3; u2++) {
            var f2 = c2 * c2 + u2 * u2;
            if (!(f2 > l2 || f2 < h2)) {
              var p2 = Math.sqrt(f2), g2 = Math.atan2(u2, c2);
              d.Color3.HSVtoRGBToRef(180 * g2 / Math.PI + 180, p2 / t3, 1, s2);
              var b2 = 4 * (c2 + t3 + 2 * (u2 + t3) * t3);
              a2[b2] = 255 * s2.r, a2[b2 + 1] = 255 * s2.g, a2[b2 + 2] = 255 * s2.b;
              var m2, v2;
              v2 = t3 < 50 ? 0.2 : t3 > 150 ? 0.04 : -0.16 * (t3 - 50) / 100 + 0.2, m2 = (p2 - _2) / (t3 - _2), a2[b2 + 3] = m2 < v2 ? m2 / v2 * 255 : m2 > 1 - v2 ? 255 * (1 - (m2 - (1 - v2)) / v2) : 255;
            }
          }
          return r2.putImageData(n2, 0, 0), o2;
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3);
          var e3 = 0.5 * Math.min(this._currentMeasure.width, this._currentMeasure.height), i2 = 0.2 * e3, o2 = this._currentMeasure.left, r2 = this._currentMeasure.top;
          this._colorWheelCanvas && this._colorWheelCanvas.width == 2 * e3 || (this._colorWheelCanvas = this._createColorWheelCanvas(e3, i2)), this._updateSquareProps(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY, t3.fillRect(this._squareLeft, this._squareTop, this._squareSize, this._squareSize)), t3.drawImage(this._colorWheelCanvas, o2, r2), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), this._drawGradientSquare(this._h, this._squareLeft, this._squareTop, this._squareSize, this._squareSize, t3);
          var n2 = this._squareLeft + this._squareSize * this._s, a2 = this._squareTop + this._squareSize * (1 - this._v);
          this._drawCircle(n2, a2, 0.04 * e3, t3);
          var s2 = e3 - 0.5 * i2;
          n2 = o2 + e3 + Math.cos((this._h - 180) * Math.PI / 180) * s2, a2 = r2 + e3 + Math.sin((this._h - 180) * Math.PI / 180) * s2, this._drawCircle(n2, a2, 0.35 * i2, t3), t3.restore();
        }, e2.prototype._updateValueFromPointer = function(t3, i2) {
          if (this._pointerStartedOnWheel) {
            var o2 = 0.5 * Math.min(this._currentMeasure.width, this._currentMeasure.height), r2 = o2 + this._currentMeasure.left, n2 = o2 + this._currentMeasure.top;
            this._h = 180 * Math.atan2(i2 - n2, t3 - r2) / Math.PI + 180;
          } else this._pointerStartedOnSquare && (this._updateSquareProps(), this._s = (t3 - this._squareLeft) / this._squareSize, this._v = 1 - (i2 - this._squareTop) / this._squareSize, this._s = Math.min(this._s, 1), this._s = Math.max(this._s, e2._Epsilon), this._v = Math.min(this._v, 1), this._v = Math.max(this._v, e2._Epsilon));
          d.Color3.HSVtoRGBToRef(this._h, this._s, this._v, this._tmpColor), this.value = this._tmpColor;
        }, e2.prototype._isPointOnSquare = function(t3, e3) {
          this._updateSquareProps();
          var i2 = this._squareLeft, o2 = this._squareTop, r2 = this._squareSize;
          return t3 >= i2 && t3 <= i2 + r2 && e3 >= o2 && e3 <= o2 + r2;
        }, e2.prototype._isPointOnWheel = function(t3, e3) {
          var i2 = 0.5 * Math.min(this._currentMeasure.width, this._currentMeasure.height), o2 = i2 - 0.2 * i2, r2 = t3 - (i2 + this._currentMeasure.left), n2 = e3 - (i2 + this._currentMeasure.top), a2 = r2 * r2 + n2 * n2;
          return a2 <= i2 * i2 && a2 >= o2 * o2;
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          if (!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2)) return false;
          if (this.isReadOnly) return true;
          this._pointerIsDown = true, this._pointerStartedOnSquare = false, this._pointerStartedOnWheel = false, this._invertTransformMatrix.transformCoordinates(i2.x, i2.y, this._transformedPosition);
          var a2 = this._transformedPosition.x, s2 = this._transformedPosition.y;
          return this._isPointOnSquare(a2, s2) ? this._pointerStartedOnSquare = true : this._isPointOnWheel(a2, s2) && (this._pointerStartedOnWheel = true), this._updateValueFromPointer(a2, s2), this._host._capturingControl[o2] = this, this._lastPointerDownId = o2, true;
        }, e2.prototype._onPointerMove = function(e3, i2, o2, r2) {
          if (o2 == this._lastPointerDownId) {
            if (!this.isReadOnly) {
              this._invertTransformMatrix.transformCoordinates(i2.x, i2.y, this._transformedPosition);
              var n2 = this._transformedPosition.x, a2 = this._transformedPosition.y;
              this._pointerIsDown && this._updateValueFromPointer(n2, a2);
            }
            t2.prototype._onPointerMove.call(this, e3, i2, o2, r2);
          }
        }, e2.prototype._onPointerUp = function(e3, i2, o2, r2, n2, a2) {
          this._pointerIsDown = false, delete this._host._capturingControl[o2], t2.prototype._onPointerUp.call(this, e3, i2, o2, r2, n2, a2);
        }, e2.prototype._onCanvasBlur = function() {
          this._forcePointerUp(), t2.prototype._onCanvasBlur.call(this);
        }, e2.ShowPickerDialogAsync = function(t3, i2) {
          return c(this, void 0, void 0, function() {
            return u(this, function(o2) {
              switch (o2.label) {
                case 0:
                  return [4, new Promise(function(o3) {
                    i2.pickerWidth = i2.pickerWidth || "640px", i2.pickerHeight = i2.pickerHeight || "400px", i2.headerHeight = i2.headerHeight || "35px", i2.lastColor = i2.lastColor || "#000000", i2.swatchLimit = i2.swatchLimit || 20, i2.numSwatchesPerLine = i2.numSwatchesPerLine || 10;
                    var r2, n2, a2, s2, l2, _2, h2, c2 = i2.swatchLimit / i2.numSwatchesPerLine, u2 = parseFloat(i2.pickerWidth) / i2.numSwatchesPerLine, f2 = Math.floor(0.25 * u2), p2 = f2 * (i2.numSwatchesPerLine + 1), g2 = Math.floor((parseFloat(i2.pickerWidth) - p2) / i2.numSwatchesPerLine), b2 = g2 * c2 + f2 * (c2 + 1), m2 = (parseInt(i2.pickerHeight) + b2 + Math.floor(0.25 * g2)).toString() + "px", v2 = "#c0c0c0", y2 = "#535353", x2 = "#414141", P2 = "515151", B2 = d.Color3.FromHexString("#dddddd"), C2 = B2.r + B2.g + B2.b, O2 = ["R", "G", "B"], w2 = "#454545", M2 = "#f0f0f0", E2 = false, k2 = new D();
                    if (k2.name = "Dialog Container", k2.width = i2.pickerWidth, i2.savedColors) {
                      k2.height = m2;
                      var L2 = parseInt(i2.pickerHeight) / parseInt(m2);
                      k2.addRowDefinition(L2, false), k2.addRowDefinition(1 - L2, false);
                    } else k2.height = i2.pickerHeight, k2.addRowDefinition(1, false);
                    if (t3.addControl(k2), i2.savedColors) {
                      (s2 = new D()).name = "Swatch Drawer", s2.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, s2.background = y2, s2.width = i2.pickerWidth;
                      var N2, A2 = i2.savedColors.length / i2.numSwatchesPerLine;
                      N2 = 0 == A2 ? 0 : A2 + 1, s2.height = (g2 * A2 + N2 * f2).toString() + "px", s2.top = Math.floor(0.25 * g2).toString() + "px";
                      for (var z2 = 0; z2 < 2 * Math.ceil(i2.savedColors.length / i2.numSwatchesPerLine) + 1; z2++) z2 % 2 != 0 ? s2.addRowDefinition(g2, true) : s2.addRowDefinition(f2, true);
                      for (z2 = 0; z2 < 2 * i2.numSwatchesPerLine + 1; z2++) z2 % 2 != 0 ? s2.addColumnDefinition(g2, true) : s2.addColumnDefinition(f2, true);
                      k2.addControl(s2, 1, 0);
                    }
                    var Q2 = new D();
                    Q2.name = "Picker Panel", Q2.height = i2.pickerHeight;
                    var V2 = parseInt(i2.headerHeight) / parseInt(i2.pickerHeight), W2 = [V2, 1 - V2];
                    Q2.addRowDefinition(W2[0], false), Q2.addRowDefinition(W2[1], false), k2.addControl(Q2, 0, 0);
                    var H2 = new T();
                    H2.name = "Dialogue Header Bar", H2.background = "#cccccc", H2.thickness = 0, Q2.addControl(H2, 0, 0);
                    var G2 = R.CreateSimpleButton("closeButton", "a");
                    G2.fontFamily = "coreglyphs";
                    var U2 = d.Color3.FromHexString(H2.background), j2 = new d.Color3(1 - U2.r, 1 - U2.g, 1 - U2.b);
                    G2.color = j2.toHexString(), G2.fontSize = Math.floor(0.6 * parseInt(i2.headerHeight)), G2.textBlock.textVerticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, G2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_RIGHT, G2.height = G2.width = i2.headerHeight, G2.background = H2.background, G2.thickness = 0, G2.pointerDownAnimation = function() {
                    }, G2.pointerUpAnimation = function() {
                      G2.background = H2.background;
                    }, G2.pointerEnterAnimation = function() {
                      G2.color = H2.background, G2.background = "red";
                    }, G2.pointerOutAnimation = function() {
                      G2.color = j2.toHexString(), G2.background = H2.background;
                    }, G2.onPointerClickObservable.add(function() {
                      Qt2(_t2.background);
                    }), Q2.addControl(G2, 0, 0);
                    var Y2 = new D();
                    Y2.name = "Dialogue Body", Y2.background = y2;
                    var X2 = [0.4375, 0.5625];
                    Y2.addRowDefinition(1, false), Y2.addColumnDefinition(X2[0], false), Y2.addColumnDefinition(X2[1], false), Q2.addControl(Y2, 1, 0);
                    var K2 = new D();
                    K2.name = "Picker Grid", K2.addRowDefinition(0.85, false), K2.addRowDefinition(0.15, false), Y2.addControl(K2, 0, 0);
                    var Z2 = new e2();
                    Z2.name = "GUI Color Picker", i2.pickerHeight < i2.pickerWidth ? Z2.width = 0.89 : Z2.height = 0.89, Z2.value = d.Color3.FromHexString(i2.lastColor), Z2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_CENTER, Z2.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, Z2.onPointerDownObservable.add(function() {
                      h2 = Z2.name, _2 = "", Lt2(false);
                    }), Z2.onValueChangedObservable.add(function(t4) {
                      h2 == Z2.name && Et2(t4, Z2.name);
                    }), K2.addControl(Z2, 0, 0);
                    var q2 = new D();
                    q2.name = "Dialogue Right Half", q2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT;
                    var J2 = [0.514, 0.486];
                    q2.addRowDefinition(J2[0], false), q2.addRowDefinition(J2[1], false), Y2.addControl(q2, 1, 1);
                    var $2 = new D();
                    $2.name = "Swatches and Buttons";
                    var tt2 = [0.417, 0.583];
                    $2.addRowDefinition(1, false), $2.addColumnDefinition(tt2[0], false), $2.addColumnDefinition(tt2[1], false), q2.addControl($2, 0, 0);
                    var et2 = new D();
                    et2.name = "New and Current Swatches";
                    var it2 = [0.04, 0.16, 0.64, 0.16];
                    et2.addRowDefinition(it2[0], false), et2.addRowDefinition(it2[1], false), et2.addRowDefinition(it2[2], false), et2.addRowDefinition(it2[3], false), $2.addControl(et2, 0, 0);
                    var ot2 = new D();
                    ot2.name = "Active Swatches", ot2.width = 0.67, ot2.addRowDefinition(0.5, false), ot2.addRowDefinition(0.5, false), et2.addControl(ot2, 2, 0);
                    var rt2, nt2 = Math.floor(parseInt(i2.pickerWidth) * X2[1] * tt2[0] * 0.11), at2 = Math.floor(parseInt(i2.pickerHeight) * W2[1] * J2[0] * it2[1] * 0.5);
                    rt2 = i2.pickerWidth > i2.pickerHeight ? at2 : nt2;
                    var st2 = new S();
                    st2.text = "new", st2.name = "New Color Label", st2.color = v2, st2.fontSize = rt2, et2.addControl(st2, 1, 0);
                    var lt2 = new T();
                    lt2.name = "New Color Swatch", lt2.background = i2.lastColor, lt2.thickness = 0, ot2.addControl(lt2, 0, 0);
                    var _t2 = R.CreateSimpleButton("currentSwatch", "");
                    _t2.background = i2.lastColor, _t2.thickness = 0, _t2.onPointerClickObservable.add(function() {
                      Et2(d.Color3.FromHexString(_t2.background), _t2.name), Lt2(false);
                    }), _t2.pointerDownAnimation = function() {
                    }, _t2.pointerUpAnimation = function() {
                    }, _t2.pointerEnterAnimation = function() {
                    }, _t2.pointerOutAnimation = function() {
                    }, ot2.addControl(_t2, 1, 0);
                    var ht2 = new T();
                    ht2.name = "Swatch Outline", ht2.width = 0.67, ht2.thickness = 2, ht2.color = "#404040", ht2.isHitTestVisible = false, et2.addControl(ht2, 2, 0);
                    var ct2 = new S();
                    ct2.name = "Current Color Label", ct2.text = "current", ct2.color = v2, ct2.fontSize = rt2, et2.addControl(ct2, 3, 0);
                    var ut2 = new D();
                    ut2.name = "Button Grid", ut2.height = 0.8;
                    var dt2 = 1 / 3;
                    ut2.addRowDefinition(dt2, false), ut2.addRowDefinition(dt2, false), ut2.addRowDefinition(dt2, false), $2.addControl(ut2, 0, 1);
                    var ft2 = Math.floor(parseInt(i2.pickerWidth) * X2[1] * tt2[1] * 0.67).toString() + "px", pt2 = Math.floor(parseInt(i2.pickerHeight) * W2[1] * J2[0] * (parseFloat(ut2.height.toString()) / 100) * dt2 * 0.7).toString() + "px";
                    r2 = parseFloat(ft2) > parseFloat(pt2) ? Math.floor(0.45 * parseFloat(pt2)) : Math.floor(0.11 * parseFloat(ft2));
                    var gt2 = R.CreateSimpleButton("butOK", "OK");
                    gt2.width = ft2, gt2.height = pt2, gt2.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, gt2.thickness = 2, gt2.color = v2, gt2.fontSize = r2, gt2.background = y2, gt2.onPointerEnterObservable.add(function() {
                      gt2.background = x2;
                    }), gt2.onPointerOutObservable.add(function() {
                      gt2.background = y2;
                    }), gt2.pointerDownAnimation = function() {
                      gt2.background = P2;
                    }, gt2.pointerUpAnimation = function() {
                      gt2.background = x2;
                    }, gt2.onPointerClickObservable.add(function() {
                      Lt2(false), Qt2(lt2.background);
                    }), ut2.addControl(gt2, 0, 0);
                    var bt2 = R.CreateSimpleButton("butCancel", "Cancel");
                    bt2.width = ft2, bt2.height = pt2, bt2.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, bt2.thickness = 2, bt2.color = v2, bt2.fontSize = r2, bt2.background = y2, bt2.onPointerEnterObservable.add(function() {
                      bt2.background = x2;
                    }), bt2.onPointerOutObservable.add(function() {
                      bt2.background = y2;
                    }), bt2.pointerDownAnimation = function() {
                      bt2.background = P2;
                    }, bt2.pointerUpAnimation = function() {
                      bt2.background = x2;
                    }, bt2.onPointerClickObservable.add(function() {
                      Lt2(false), Qt2(_t2.background);
                    }), ut2.addControl(bt2, 1, 0), i2.savedColors && ((l2 = R.CreateSimpleButton("butSave", "Save")).width = ft2, l2.height = pt2, l2.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, l2.thickness = 2, l2.fontSize = r2, i2.savedColors.length < i2.swatchLimit ? (l2.color = v2, l2.background = y2) : zt2(l2, true), l2.onPointerEnterObservable.add(function() {
                      i2.savedColors && i2.savedColors.length < i2.swatchLimit && (l2.background = x2);
                    }), l2.onPointerOutObservable.add(function() {
                      i2.savedColors && i2.savedColors.length < i2.swatchLimit && (l2.background = y2);
                    }), l2.pointerDownAnimation = function() {
                      i2.savedColors && i2.savedColors.length < i2.swatchLimit && (l2.background = P2);
                    }, l2.pointerUpAnimation = function() {
                      i2.savedColors && i2.savedColors.length < i2.swatchLimit && (l2.background = x2);
                    }, l2.onPointerClickObservable.add(function() {
                      i2.savedColors && (0 == i2.savedColors.length && At2(true), i2.savedColors.length < i2.swatchLimit && Nt2(lt2.background, l2), Lt2(false));
                    }), i2.savedColors.length > 0 && At2(true), ut2.addControl(l2, 2, 0));
                    var mt2 = new D();
                    mt2.name = "Dialog Lower Right", mt2.addRowDefinition(0.02, false), mt2.addRowDefinition(0.63, false), mt2.addRowDefinition(0.21, false), mt2.addRowDefinition(0.14, false), q2.addControl(mt2, 1, 0);
                    var vt2 = d.Color3.FromHexString(i2.lastColor), yt2 = new D();
                    for (yt2.name = "RGB Values", yt2.width = 0.82, yt2.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, yt2.addRowDefinition(1 / 3, false), yt2.addRowDefinition(1 / 3, false), yt2.addRowDefinition(1 / 3, false), yt2.addColumnDefinition(0.1, false), yt2.addColumnDefinition(0.2, false), yt2.addColumnDefinition(0.7, false), mt2.addControl(yt2, 1, 0), z2 = 0; z2 < O2.length; z2++) {
                      var xt2 = new S();
                      xt2.text = O2[z2], xt2.color = v2, xt2.fontSize = r2, yt2.addControl(xt2, z2, 0);
                    }
                    var Pt2 = new F();
                    Pt2.width = 0.83, Pt2.height = 0.72, Pt2.name = "rIntField", Pt2.fontSize = r2, Pt2.text = (255 * vt2.r).toString(), Pt2.color = M2, Pt2.background = w2, Pt2.onFocusObservable.add(function() {
                      h2 = Pt2.name, _2 = Pt2.text, Lt2(false);
                    }), Pt2.onBlurObservable.add(function() {
                      "" == Pt2.text && (Pt2.text = "0"), Ft2(Pt2, "r"), h2 == Pt2.name && (h2 = "");
                    }), Pt2.onTextChangedObservable.add(function() {
                      h2 == Pt2.name && Ft2(Pt2, "r");
                    }), yt2.addControl(Pt2, 0, 1);
                    var It2 = new F();
                    It2.width = 0.83, It2.height = 0.72, It2.name = "gIntField", It2.fontSize = r2, It2.text = (255 * vt2.g).toString(), It2.color = M2, It2.background = w2, It2.onFocusObservable.add(function() {
                      h2 = It2.name, _2 = It2.text, Lt2(false);
                    }), It2.onBlurObservable.add(function() {
                      "" == It2.text && (It2.text = "0"), Ft2(It2, "g"), h2 == It2.name && (h2 = "");
                    }), It2.onTextChangedObservable.add(function() {
                      h2 == It2.name && Ft2(It2, "g");
                    }), yt2.addControl(It2, 1, 1);
                    var Bt2 = new F();
                    Bt2.width = 0.83, Bt2.height = 0.72, Bt2.name = "bIntField", Bt2.fontSize = r2, Bt2.text = (255 * vt2.b).toString(), Bt2.color = M2, Bt2.background = w2, Bt2.onFocusObservable.add(function() {
                      h2 = Bt2.name, _2 = Bt2.text, Lt2(false);
                    }), Bt2.onBlurObservable.add(function() {
                      "" == Bt2.text && (Bt2.text = "0"), Ft2(Bt2, "b"), h2 == Bt2.name && (h2 = "");
                    }), Bt2.onTextChangedObservable.add(function() {
                      h2 == Bt2.name && Ft2(Bt2, "b");
                    }), yt2.addControl(Bt2, 2, 1);
                    var Ct2 = new F();
                    Ct2.width = 0.95, Ct2.height = 0.72, Ct2.name = "rDecField", Ct2.fontSize = r2, Ct2.text = vt2.r.toString(), Ct2.color = M2, Ct2.background = w2, Ct2.onFocusObservable.add(function() {
                      h2 = Ct2.name, _2 = Ct2.text, Lt2(false);
                    }), Ct2.onBlurObservable.add(function() {
                      0 != parseFloat(Ct2.text) && "" != Ct2.text || (Ct2.text = "0", Dt2(Ct2, "r")), h2 == Ct2.name && (h2 = "");
                    }), Ct2.onTextChangedObservable.add(function() {
                      h2 == Ct2.name && Dt2(Ct2, "r");
                    }), yt2.addControl(Ct2, 0, 2);
                    var Tt2 = new F();
                    Tt2.width = 0.95, Tt2.height = 0.72, Tt2.name = "gDecField", Tt2.fontSize = r2, Tt2.text = vt2.g.toString(), Tt2.color = M2, Tt2.background = w2, Tt2.onFocusObservable.add(function() {
                      h2 = Tt2.name, _2 = Tt2.text, Lt2(false);
                    }), Tt2.onBlurObservable.add(function() {
                      0 != parseFloat(Tt2.text) && "" != Tt2.text || (Tt2.text = "0", Dt2(Tt2, "g")), h2 == Tt2.name && (h2 = "");
                    }), Tt2.onTextChangedObservable.add(function() {
                      h2 == Tt2.name && Dt2(Tt2, "g");
                    }), yt2.addControl(Tt2, 1, 2);
                    var St2 = new F();
                    St2.width = 0.95, St2.height = 0.72, St2.name = "bDecField", St2.fontSize = r2, St2.text = vt2.b.toString(), St2.color = M2, St2.background = w2, St2.onFocusObservable.add(function() {
                      h2 = St2.name, _2 = St2.text, Lt2(false);
                    }), St2.onBlurObservable.add(function() {
                      0 != parseFloat(St2.text) && "" != St2.text || (St2.text = "0", Dt2(St2, "b")), h2 == St2.name && (h2 = "");
                    }), St2.onTextChangedObservable.add(function() {
                      h2 == St2.name && Dt2(St2, "b");
                    }), yt2.addControl(St2, 2, 2);
                    var Ot2 = new D();
                    Ot2.name = "Hex Value", Ot2.width = 0.82, Ot2.addRowDefinition(1, false), Ot2.addColumnDefinition(0.1, false), Ot2.addColumnDefinition(0.9, false), mt2.addControl(Ot2, 2, 0);
                    var Rt2 = new S();
                    Rt2.text = "#", Rt2.color = v2, Rt2.fontSize = r2, Ot2.addControl(Rt2, 0, 0);
                    var wt2 = new F();
                    wt2.width = 0.96, wt2.height = 0.72, wt2.name = "hexField", wt2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_CENTER, wt2.fontSize = r2;
                    var Mt2 = i2.lastColor.split("#");
                    function Et2(t4, e3) {
                      h2 = e3;
                      var i3 = t4.toHexString();
                      if (lt2.background = i3, Pt2.name != h2 && (Pt2.text = Math.floor(255 * t4.r).toString()), It2.name != h2 && (It2.text = Math.floor(255 * t4.g).toString()), Bt2.name != h2 && (Bt2.text = Math.floor(255 * t4.b).toString()), Ct2.name != h2 && (Ct2.text = t4.r.toString()), Tt2.name != h2 && (Tt2.text = t4.g.toString()), St2.name != h2 && (St2.text = t4.b.toString()), wt2.name != h2) {
                        var o4 = i3.split("#");
                        wt2.text = o4[1];
                      }
                      Z2.name != h2 && (Z2.value = t4);
                    }
                    function Ft2(t4, e3) {
                      var i3 = t4.text;
                      if (/[^0-9]/g.test(i3)) t4.text = _2;
                      else if ("" != i3 && (Math.floor(parseInt(i3)) < 0 ? i3 = "0" : Math.floor(parseInt(i3)) > 255 ? i3 = "255" : isNaN(parseInt(i3)) && (i3 = "0")), h2 == t4.name && (_2 = i3), "" != i3) {
                        i3 = parseInt(i3).toString(), t4.text = i3;
                        var o4 = d.Color3.FromHexString(lt2.background);
                        h2 == t4.name && Et2("r" == e3 ? new d.Color3(parseInt(i3) / 255, o4.g, o4.b) : "g" == e3 ? new d.Color3(o4.r, parseInt(i3) / 255, o4.b) : new d.Color3(o4.r, o4.g, parseInt(i3) / 255), t4.name);
                      }
                    }
                    function Dt2(t4, e3) {
                      var i3 = t4.text;
                      if (/[^0-9.]/g.test(i3)) t4.text = _2;
                      else {
                        "" != i3 && "." != i3 && 0 != parseFloat(i3) && (parseFloat(i3) < 0 ? i3 = "0.0" : parseFloat(i3) > 1 ? i3 = "1.0" : isNaN(parseFloat(i3)) && (i3 = "0.0")), h2 == t4.name && (_2 = i3), "" != i3 && "." != i3 && 0 != parseFloat(i3) ? (i3 = parseFloat(i3).toString(), t4.text = i3) : i3 = "0.0";
                        var o4 = d.Color3.FromHexString(lt2.background);
                        h2 == t4.name && Et2("r" == e3 ? new d.Color3(parseFloat(i3), o4.g, o4.b) : "g" == e3 ? new d.Color3(o4.r, parseFloat(i3), o4.b) : new d.Color3(o4.r, o4.g, parseFloat(i3)), t4.name);
                      }
                    }
                    function kt2() {
                      if (i2.savedColors && i2.savedColors[a2]) {
                        var t4;
                        t4 = E2 ? "b" : "";
                        var e3 = R.CreateSimpleButton("Swatch_" + a2, t4);
                        e3.fontFamily = "coreglyphs";
                        var o4 = d.Color3.FromHexString(i2.savedColors[a2]), r3 = o4.r + o4.g + o4.b;
                        e3.color = r3 > C2 ? "#aaaaaa" : "#ffffff", e3.fontSize = Math.floor(0.7 * g2), e3.textBlock.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, e3.height = e3.width = g2.toString() + "px", e3.background = i2.savedColors[a2], e3.thickness = 2;
                        var n3 = a2;
                        return e3.pointerDownAnimation = function() {
                          e3.thickness = 4;
                        }, e3.pointerUpAnimation = function() {
                          e3.thickness = 3;
                        }, e3.pointerEnterAnimation = function() {
                          e3.thickness = 3;
                        }, e3.pointerOutAnimation = function() {
                          e3.thickness = 2;
                        }, e3.onPointerClickObservable.add(function() {
                          var t5;
                          E2 ? (t5 = n3, i2.savedColors && i2.savedColors.splice(t5, 1), i2.savedColors && 0 == i2.savedColors.length && (At2(false), E2 = false), Nt2("", l2)) : i2.savedColors && Et2(d.Color3.FromHexString(i2.savedColors[n3]), e3.name);
                        }), e3;
                      }
                      return null;
                    }
                    function Lt2(t4) {
                      if (void 0 !== t4 && (E2 = t4), E2) {
                        for (var e3 = 0; e3 < s2.children.length; e3++) s2.children[e3].textBlock.text = "b";
                        void 0 !== n2 && (n2.textBlock.text = "Done");
                      } else {
                        for (e3 = 0; e3 < s2.children.length; e3++) s2.children[e3].textBlock.text = "";
                        void 0 !== n2 && (n2.textBlock.text = "Edit");
                      }
                    }
                    function Nt2(t4, e3) {
                      if (i2.savedColors) {
                        "" != t4 && i2.savedColors.push(t4), a2 = 0, s2.clearControls();
                        var o4, r3 = Math.ceil(i2.savedColors.length / i2.numSwatchesPerLine);
                        if (o4 = 0 == r3 ? 0 : r3 + 1, s2.rowCount != r3 + o4) {
                          for (var n3 = s2.rowCount, l3 = 0; l3 < n3; l3++) s2.removeRowDefinition(0);
                          for (l3 = 0; l3 < r3 + o4; l3++) l3 % 2 ? s2.addRowDefinition(g2, true) : s2.addRowDefinition(f2, true);
                        }
                        s2.height = (g2 * r3 + o4 * f2).toString() + "px";
                        for (var _3 = 1, h3 = 1; _3 < r3 + o4; _3 += 2, h3++) {
                          var c3;
                          c3 = i2.savedColors.length > h3 * i2.numSwatchesPerLine ? i2.numSwatchesPerLine : i2.savedColors.length - (h3 - 1) * i2.numSwatchesPerLine;
                          for (var u3 = Math.min(Math.max(c3, 0), i2.numSwatchesPerLine), d2 = 0, p3 = 1; d2 < u3; d2++) if (!(d2 > i2.numSwatchesPerLine)) {
                            var b3 = kt2();
                            null != b3 && (s2.addControl(b3, _3, p3), p3 += 2, a2++);
                          }
                        }
                        i2.savedColors.length >= i2.swatchLimit ? zt2(e3, true) : zt2(e3, false);
                      }
                    }
                    function At2(t4) {
                      t4 ? ((n2 = R.CreateSimpleButton("butEdit", "Edit")).width = ft2, n2.height = pt2, n2.left = Math.floor(0.1 * parseInt(ft2)).toString() + "px", n2.top = (-1 * parseFloat(n2.left)).toString() + "px", n2.verticalAlignment = I.VERTICAL_ALIGNMENT_BOTTOM, n2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, n2.thickness = 2, n2.color = v2, n2.fontSize = r2, n2.background = y2, n2.onPointerEnterObservable.add(function() {
                        n2.background = x2;
                      }), n2.onPointerOutObservable.add(function() {
                        n2.background = y2;
                      }), n2.pointerDownAnimation = function() {
                        n2.background = P2;
                      }, n2.pointerUpAnimation = function() {
                        n2.background = x2;
                      }, n2.onPointerClickObservable.add(function() {
                        E2 = !E2, Lt2();
                      }), K2.addControl(n2, 1, 0)) : K2.removeControl(n2);
                    }
                    function zt2(t4, e3) {
                      e3 ? (t4.color = "#555555", t4.background = "#454545") : (t4.color = v2, t4.background = y2);
                    }
                    function Qt2(e3) {
                      i2.savedColors && i2.savedColors.length > 0 ? o3({ savedColors: i2.savedColors, pickedColor: e3 }) : o3({ pickedColor: e3 }), t3.removeControl(k2);
                    }
                    wt2.text = Mt2[1], wt2.color = M2, wt2.background = w2, wt2.onFocusObservable.add(function() {
                      h2 = wt2.name, _2 = wt2.text, Lt2(false);
                    }), wt2.onBlurObservable.add(function() {
                      if (3 == wt2.text.length) {
                        var t4 = wt2.text.split("");
                        wt2.text = t4[0] + t4[0] + t4[1] + t4[1] + t4[2] + t4[2];
                      }
                      "" == wt2.text && (wt2.text = "000000", Et2(d.Color3.FromHexString(wt2.text), "b")), h2 == wt2.name && (h2 = "");
                    }), wt2.onTextChangedObservable.add(function() {
                      var t4 = wt2.text, e3 = /[^0-9A-F]/i.test(t4);
                      if ((wt2.text.length > 6 || e3) && h2 == wt2.name) wt2.text = _2;
                      else {
                        if (wt2.text.length < 6) for (var i3 = 6 - wt2.text.length, o4 = 0; o4 < i3; o4++) t4 = "0" + t4;
                        if (3 == wt2.text.length) {
                          var r3 = wt2.text.split("");
                          t4 = r3[0] + r3[0] + r3[1] + r3[1] + r3[2] + r3[2];
                        }
                        t4 = "#" + t4, h2 == wt2.name && (_2 = wt2.text, Et2(d.Color3.FromHexString(t4), wt2.name));
                      }
                    }), Ot2.addControl(wt2, 0, 1), i2.savedColors && i2.savedColors.length > 0 && Nt2("", l2);
                  })];
                case 1:
                  return [2, o2.sent()];
              }
            });
          });
        }, e2._Epsilon = 1e-6, h([(0, d.serialize)()], e2.prototype, "value", null), h([(0, d.serialize)()], e2.prototype, "width", null), h([(0, d.serialize)()], e2.prototype, "height", null), h([(0, d.serialize)()], e2.prototype, "size", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.ColorPicker", k);
      var L = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._thickness = 1, i2._arc = 1, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "thickness", { get: function() {
          return this._thickness;
        }, set: function(t3) {
          this._thickness !== t3 && (this._thickness = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "arc", { get: function() {
          return this._arc;
        }, set: function(t3) {
          this._arc !== t3 && (this._arc = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Ellipse";
        }, e2.prototype._localDraw = function(t3) {
          t3.save(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), I.drawEllipse(this._currentMeasure.left + this._currentMeasure.width / 2, this._currentMeasure.top + this._currentMeasure.height / 2, this._currentMeasure.width / 2 - this._thickness / 2, this._currentMeasure.height / 2 - this._thickness / 2, this._arc, t3), (this._backgroundGradient || this._background) && (t3.fillStyle = this._getBackgroundColor(t3), t3.fill()), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), this._thickness && (this.color && (t3.strokeStyle = this.color), t3.lineWidth = this._thickness, t3.stroke()), t3.restore();
        }, e2.prototype._additionalProcessing = function(e3, i2) {
          t2.prototype._additionalProcessing.call(this, e3, i2), this._measureForChildren.width -= 2 * this._thickness, this._measureForChildren.height -= 2 * this._thickness, this._measureForChildren.left += this._thickness, this._measureForChildren.top += this._thickness;
        }, e2.prototype._clipForChildren = function(t3) {
          I.drawEllipse(this._currentMeasure.left + this._currentMeasure.width / 2, this._currentMeasure.top + this._currentMeasure.height / 2, this._currentMeasure.width / 2, this._currentMeasure.height / 2, this._arc, t3), t3.clip();
        }, e2.prototype._renderHighlightSpecific = function(t3) {
          I.drawEllipse(this._currentMeasure.left + this._currentMeasure.width / 2, this._currentMeasure.top + this._currentMeasure.height / 2, this._currentMeasure.width / 2 - this._highlightLineWidth / 2, this._currentMeasure.height / 2 - this._highlightLineWidth / 2, this._arc, t3), t3.stroke();
        }, h([(0, d.serialize)()], e2.prototype, "thickness", null), h([(0, d.serialize)()], e2.prototype, "arc", null), e2;
      }(B);
      (0, d.RegisterClass)("BABYLON.GUI.Ellipse", L);
      var N = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._unfocusedColor = i2.color, i2;
        }
        return l(e2, t2), e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return this.isReadOnly || this.focus(), t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2);
        }, e2;
      }(R);
      (0, d.RegisterClass)("BABYLON.GUI.FocusableButton", N);
      var A = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = "");
          var o2 = t2.call(this, e3) || this;
          return o2.name = e3, o2._textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, o2._textVerticalAlignment = I.VERTICAL_ALIGNMENT_TOP, o2._prevText = o2.text, o2._lineSpacing = new f(0), o2._maxHeight = new f(1, f.UNITMODE_PERCENTAGE, false), o2.onLinesReadyObservable = new d.Observable(), o2.text = i2, o2.isPointerBlocker = true, o2.onLinesReadyObservable.add(function() {
            return o2._updateCursorPosition();
          }), o2._highlightCursorInfo = { initialStartIndex: -1, initialRelativeStartIndex: -1, initialLineIndex: -1 }, o2._cursorInfo = { globalStartIndex: 0, globalEndIndex: 0, relativeEndIndex: 0, relativeStartIndex: 0, currentLineIndex: 0 }, o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "autoStretchHeight", { get: function() {
          return this._autoStretchHeight;
        }, set: function(t3) {
          this._autoStretchHeight !== t3 && (this._autoStretchHeight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "height", { set: function(t3) {
          this.fixedRatioMasterIsWidth = false, this._height.toString(this._host) !== t3 && (this._height.fromString(t3) && this._markAsDirty(), this._autoStretchHeight = false);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "maxHeight", { get: function() {
          return this._maxHeight.toString(this._host);
        }, set: function(t3) {
          this._maxHeight.toString(this._host) !== t3 && this._maxHeight.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "maxHeightInPixels", { get: function() {
          return this._maxHeight.getValueInPixel(this._host, this._cachedParentMeasure.height);
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "InputTextArea";
        }, e2.prototype.processKeyboard = function(t3) {
          this.isReadOnly || (this.alternativeProcessKey(t3.code, t3.key, t3), this.onKeyboardEventProcessedObservable.notifyObservers(t3));
        }, e2.prototype.alternativeProcessKey = function(t3, e3, i2) {
          if (!i2 || !i2.ctrlKey && !i2.metaKey || "c" !== e3 && "v" !== e3 && "x" !== e3) {
            switch (t3) {
              case "Period":
                i2 && i2.shiftKey && i2.preventDefault();
                break;
              case "Backspace":
                !this._isTextHighlightOn && this._cursorInfo.globalStartIndex > 0 && (this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, this._cursorInfo.globalStartIndex--), this._prevText = this._textWrapper.text, this._textWrapper.removePart(this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex), this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, i2 && i2.preventDefault(), this._blinkIsEven = false, this._isTextHighlightOn = false, this._textHasChanged();
                break;
              case "Delete":
                !this._isTextHighlightOn && this._cursorInfo.globalEndIndex < this.text.length && (this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex + 1), this._prevText = this._textWrapper.text, this._textWrapper.removePart(this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex), this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, i2 && i2.preventDefault(), this._blinkIsEven = false, this._isTextHighlightOn = false, this._textHasChanged();
                break;
              case "NumpadEnter":
              case "Enter":
                return this._prevText = this._textWrapper.text, this._textWrapper.removePart(this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex, "\n"), this._cursorInfo.globalStartIndex++, this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, this._blinkIsEven = false, this._isTextHighlightOn = false, void this._textHasChanged();
              case "End":
                return this._cursorInfo.globalStartIndex = this.text.length, this._blinkIsEven = false, this._isTextHighlightOn = false, void this._markAsDirty();
              case "Home":
                return this._cursorInfo.globalStartIndex = 0, this._blinkIsEven = false, this._isTextHighlightOn = false, void this._markAsDirty();
              case "ArrowLeft":
                return this._markAsDirty(), i2 && i2.shiftKey ? ((i2.ctrlKey || i2.metaKey) && (this._cursorInfo.globalStartIndex -= this._cursorInfo.relativeStartIndex, this._cursorInfo.globalEndIndex = this._highlightCursorInfo.initialStartIndex), this._isTextHighlightOn ? this._cursorInfo.globalEndIndex > this._highlightCursorInfo.initialStartIndex ? this._cursorInfo.globalEndIndex-- : this._cursorInfo.globalStartIndex-- : (this._highlightCursorInfo.initialLineIndex = this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialStartIndex = this._cursorInfo.globalStartIndex, this._highlightCursorInfo.initialRelativeStartIndex = this._cursorInfo.relativeStartIndex, this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, this._cursorInfo.globalStartIndex--, this._isTextHighlightOn = true), this._blinkIsEven = true, void i2.preventDefault()) : (this._isTextHighlightOn ? this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex : i2 && (i2.ctrlKey || i2.metaKey) ? (this._cursorInfo.globalStartIndex -= this._cursorInfo.relativeStartIndex, i2.preventDefault()) : this._cursorInfo.globalStartIndex > 0 && this._cursorInfo.globalStartIndex--, this._blinkIsEven = false, void (this._isTextHighlightOn = false));
              case "ArrowRight":
                if (this._markAsDirty(), i2 && i2.shiftKey) {
                  if (i2.ctrlKey || i2.metaKey) {
                    var o2 = this._lines[this._cursorInfo.currentLineIndex].text.length - this._cursorInfo.relativeEndIndex - 1;
                    this._cursorInfo.globalEndIndex += o2, this._cursorInfo.globalStartIndex = this._highlightCursorInfo.initialStartIndex;
                  }
                  return this._isTextHighlightOn ? this._cursorInfo.globalStartIndex < this._highlightCursorInfo.initialStartIndex ? this._cursorInfo.globalStartIndex++ : this._cursorInfo.globalEndIndex++ : (this._highlightCursorInfo.initialLineIndex = this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialStartIndex = this._cursorInfo.globalStartIndex, this._highlightCursorInfo.initialRelativeStartIndex = this._cursorInfo.relativeStartIndex, this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex++, this._isTextHighlightOn = true), this._blinkIsEven = true, void i2.preventDefault();
                }
                return this._isTextHighlightOn ? this._cursorInfo.globalStartIndex = this._cursorInfo.globalEndIndex : i2 && (i2.ctrlKey || i2.metaKey) ? (o2 = this._lines[this._cursorInfo.currentLineIndex].text.length - this._cursorInfo.relativeEndIndex, this._cursorInfo.globalStartIndex += o2) : this._cursorInfo.globalStartIndex < this.text.length && this._cursorInfo.globalStartIndex++, this._blinkIsEven = false, void (this._isTextHighlightOn = false);
              case "ArrowUp":
                if (this._blinkIsEven = false, i2 && (i2.shiftKey ? (this._isTextHighlightOn || (this._highlightCursorInfo.initialLineIndex = this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialStartIndex = this._cursorInfo.globalStartIndex, this._highlightCursorInfo.initialRelativeStartIndex = this._cursorInfo.relativeStartIndex), this._isTextHighlightOn = true, this._blinkIsEven = true) : this._isTextHighlightOn = false, i2.preventDefault()), 0 === this._cursorInfo.currentLineIndex) this._cursorInfo.globalStartIndex = 0;
                else {
                  var r2 = this._lines[this._cursorInfo.currentLineIndex], n2 = this._lines[this._cursorInfo.currentLineIndex - 1], a2 = 0, s2 = 0;
                  !this._isTextHighlightOn || this._cursorInfo.currentLineIndex < this._highlightCursorInfo.initialLineIndex ? (a2 = this._cursorInfo.globalStartIndex, s2 = this._cursorInfo.relativeStartIndex) : (a2 = this._cursorInfo.globalEndIndex, s2 = this._cursorInfo.relativeEndIndex);
                  var l2 = r2.text.substring(0, s2), _2 = this._contextForBreakLines.measureText(l2).width, h2 = 0, c2 = 0;
                  a2 -= s2, a2 -= n2.text.length + n2.lineEnding.length;
                  for (var u2 = 0; h2 < _2 && u2 < n2.text.length; ) a2++, u2++, c2 = Math.abs(_2 - h2), h2 = this._contextForBreakLines.measureText(n2.text.substring(0, u2)).width;
                  Math.abs(_2 - h2) > c2 && u2 > 0 && a2--, this._isTextHighlightOn ? this._cursorInfo.currentLineIndex <= this._highlightCursorInfo.initialLineIndex ? (this._cursorInfo.globalStartIndex = a2, this._cursorInfo.globalEndIndex = this._highlightCursorInfo.initialStartIndex, this._cursorInfo.relativeEndIndex = this._highlightCursorInfo.initialRelativeStartIndex) : this._cursorInfo.globalEndIndex = a2 : this._cursorInfo.globalStartIndex = a2;
                }
                return void this._markAsDirty();
              case "ArrowDown":
                if (this._blinkIsEven = false, i2 && (i2.shiftKey ? (this._isTextHighlightOn || (this._highlightCursorInfo.initialLineIndex = this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialStartIndex = this._cursorInfo.globalStartIndex, this._highlightCursorInfo.initialRelativeStartIndex = this._cursorInfo.relativeStartIndex), this._isTextHighlightOn = true, this._blinkIsEven = true) : this._isTextHighlightOn = false, i2.preventDefault()), this._cursorInfo.currentLineIndex === this._lines.length - 1) this._cursorInfo.globalStartIndex = this.text.length;
                else {
                  r2 = this._lines[this._cursorInfo.currentLineIndex];
                  var d2 = this._lines[this._cursorInfo.currentLineIndex + 1];
                  a2 = 0, s2 = 0, !this._isTextHighlightOn || this._cursorInfo.currentLineIndex < this._highlightCursorInfo.initialLineIndex ? (a2 = this._cursorInfo.globalStartIndex, s2 = this._cursorInfo.relativeStartIndex) : (a2 = this._cursorInfo.globalEndIndex, s2 = this._cursorInfo.relativeEndIndex), l2 = r2.text.substring(0, s2), _2 = this._contextForBreakLines.measureText(l2).width;
                  var f2 = 0;
                  c2 = 0, a2 += r2.text.length - s2 + r2.lineEnding.length;
                  for (var p2 = 0; f2 < _2 && p2 < d2.text.length; ) a2++, p2++, c2 = Math.abs(_2 - f2), f2 = this._contextForBreakLines.measureText(d2.text.substring(0, p2)).width;
                  Math.abs(_2 - f2) > c2 && p2 > 0 && a2--, this._isTextHighlightOn ? this._cursorInfo.currentLineIndex < this._highlightCursorInfo.initialLineIndex ? (this._cursorInfo.globalStartIndex = a2, this._cursorInfo.globalStartIndex > this._cursorInfo.globalEndIndex && (this._cursorInfo.globalEndIndex += this._cursorInfo.globalStartIndex, this._cursorInfo.globalStartIndex = this._cursorInfo.globalEndIndex - this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex -= this._cursorInfo.globalStartIndex)) : (this._cursorInfo.globalEndIndex = a2, this._cursorInfo.globalStartIndex = this._highlightCursorInfo.initialStartIndex) : this._cursorInfo.globalStartIndex = a2;
                }
                return void this._markAsDirty();
            }
            if ("a" === e3 && i2 && (i2.ctrlKey || i2.metaKey)) return this.selectAllText(), void i2.preventDefault();
            1 === (null == e3 ? void 0 : e3.length) && (null == i2 || i2.preventDefault(), this._currentKey = e3, this.onBeforeKeyAddObservable.notifyObservers(this), e3 = this._currentKey, this._addKey && (this._isTextHighlightOn = false, this._blinkIsEven = false, this._prevText = this._textWrapper.text, this._textWrapper.removePart(this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex, e3), this._cursorInfo.globalStartIndex += e3.length, this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, this._textHasChanged()));
          }
        }, e2.prototype._parseLineWordWrap = function(t3, e3, i2) {
          void 0 === t3 && (t3 = "");
          for (var o2 = [], r2 = t3.split(" "), n2 = 0, a2 = function(a3) {
            var s3 = a3 > 0 ? t3 + " " + r2[a3] : r2[0], l2 = i2.measureText(s3).width;
            if (l2 > e3) {
              a3 > 0 && (n2 = i2.measureText(t3).width, o2.push({ text: t3, width: n2, lineEnding: " " })), t3 = r2[a3];
              var _2 = "";
              t3.split("").map(function(t4) {
                i2.measureText(_2 + t4).width > e3 && (o2.push({ text: _2, width: i2.measureText(_2).width, lineEnding: "" }), _2 = ""), _2 += t4;
              }), t3 = _2, n2 = i2.measureText(t3).width;
            } else n2 = l2, t3 = s3;
          }, s2 = 0; s2 < r2.length; s2++) a2(s2);
          return o2.push({ text: t3, width: n2, lineEnding: " " }), o2;
        }, e2.prototype._breakLines = function(t3, e3) {
          var i2 = [], o2 = (this.text || this.placeholderText).split("\n");
          if (this.clipContent) for (var r2 = 0, n2 = o2; r2 < n2.length; r2++) {
            var a2 = n2[r2];
            i2.push.apply(i2, this._parseLineWordWrap(a2, t3, e3));
          }
          else for (var s2 = 0, l2 = o2; s2 < l2.length; s2++) a2 = l2[s2], i2.push(this._parseLine(a2, e3));
          return i2[i2.length - 1].lineEnding = "\n", i2;
        }, e2.prototype._parseLine = function(t3, e3) {
          return void 0 === t3 && (t3 = ""), { text: t3, width: e3.measureText(t3).width, lineEnding: " " };
        }, e2.prototype._preMeasure = function(t3, e3) {
          var i2;
          this._fontOffset && !this._wasDirty || (this._fontOffset = I._GetFontOffset(e3.font, null === (i2 = this._host.getScene()) || void 0 === i2 ? void 0 : i2.getEngine()));
          var o2 = this._beforeRenderText(this._textWrapper).text;
          !this.text && this._placeholderText && (o2 = this._placeholderText), this._textWidth = e3.measureText(o2).width;
          var r2 = 2 * this._margin.getValueInPixel(this._host, t3.width);
          if (this._autoStretchWidth) {
            var n2 = o2.split("\n").reduce(function(t4, i3) {
              return e3.measureText(i3).width > e3.measureText(t4).width ? i3 : t4;
            }, ""), a2 = e3.measureText(n2).width;
            this.width = Math.min(this._maxWidth.getValueInPixel(this._host, t3.width), a2 + r2) + "px", this.autoStretchWidth = true;
          }
          if (this._availableWidth = this._width.getValueInPixel(this._host, t3.width) - r2, this._lines = this._breakLines(this._availableWidth, e3), this._contextForBreakLines = e3, this._autoStretchHeight) {
            var s2 = this._lines.length * this._fontOffset.height + 2 * this._margin.getValueInPixel(this._host, t3.height);
            this.height = Math.min(this._maxHeight.getValueInPixel(this._host, t3.height), s2) + "px", this._autoStretchHeight = true;
          }
          if (this._availableHeight = this._height.getValueInPixel(this._host, t3.height) - r2, this._isFocused) {
            this._cursorInfo.currentLineIndex = 0;
            for (var l2 = this._lines[this._cursorInfo.currentLineIndex].text.length + this._lines[this._cursorInfo.currentLineIndex].lineEnding.length, _2 = 0; _2 + l2 <= this._cursorInfo.globalStartIndex; ) _2 += l2, this._cursorInfo.currentLineIndex < this._lines.length - 1 && (this._cursorInfo.currentLineIndex++, l2 = this._lines[this._cursorInfo.currentLineIndex].text.length + this._lines[this._cursorInfo.currentLineIndex].lineEnding.length);
          }
        }, e2.prototype._textHasChanged = function() {
          !this._prevText && this._textWrapper.text && this.placeholderText && (this._cursorInfo.currentLineIndex = 0, this._cursorInfo.globalStartIndex = 1, this._cursorInfo.globalEndIndex = 1, this._cursorInfo.relativeStartIndex = 1, this._cursorInfo.relativeEndIndex = 1), t2.prototype._textHasChanged.call(this);
        }, e2.prototype._computeScroll = function() {
          if (this._clipTextLeft = this._currentMeasure.left + this._margin.getValueInPixel(this._host, this._cachedParentMeasure.width), this._clipTextTop = this._currentMeasure.top + this._margin.getValueInPixel(this._host, this._cachedParentMeasure.height), this._isFocused && this._lines[this._cursorInfo.currentLineIndex].width > this._availableWidth) {
            var t3 = this._clipTextLeft - this._lines[this._cursorInfo.currentLineIndex].width + this._availableWidth;
            this._scrollLeft || (this._scrollLeft = t3);
          } else this._scrollLeft = this._clipTextLeft;
          if (this._isFocused) {
            var e3 = (this._cursorInfo.currentLineIndex + 1) * this._fontOffset.height, i2 = this._clipTextTop - e3;
            this._scrollTop || (this._scrollTop = i2);
          } else this._scrollTop = this._clipTextTop;
        }, e2.prototype._additionalProcessing = function() {
          this.highlightedText = "", this.onLinesReadyObservable.notifyObservers(this);
        }, e2.prototype._drawText = function(t3, e3, i2, o2) {
          var r2 = this._currentMeasure.width, n2 = this._scrollLeft;
          switch (this._textHorizontalAlignment) {
            case I.HORIZONTAL_ALIGNMENT_LEFT:
              n2 += 0;
              break;
            case I.HORIZONTAL_ALIGNMENT_RIGHT:
              n2 += r2 - e3;
              break;
            case I.HORIZONTAL_ALIGNMENT_CENTER:
              n2 += (r2 - e3) / 2;
          }
          (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (o2.shadowColor = this.shadowColor, o2.shadowBlur = this.shadowBlur, o2.shadowOffsetX = this.shadowOffsetX, o2.shadowOffsetY = this.shadowOffsetY), this.outlineWidth && o2.strokeText(t3, this._currentMeasure.left + n2, i2), o2.fillText(t3, n2, i2);
        }, e2.prototype._onCopyText = function(t3) {
          this._isTextHighlightOn = false;
          try {
            t3.clipboardData && t3.clipboardData.setData("text/plain", this._highlightedText);
          } catch (t4) {
          }
          this._host.clipboardData = this._highlightedText;
        }, e2.prototype._onCutText = function(t3) {
          if (this._highlightedText) {
            try {
              t3.clipboardData && t3.clipboardData.setData("text/plain", this._highlightedText);
            } catch (t4) {
            }
            this._host.clipboardData = this._highlightedText, this._prevText = this._textWrapper.text, this._textWrapper.removePart(this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex), this._textHasChanged();
          }
        }, e2.prototype._onPasteText = function(e3) {
          var i2;
          i2 = e3.clipboardData && -1 !== e3.clipboardData.types.indexOf("text/plain") ? e3.clipboardData.getData("text/plain") : this._host.clipboardData, this._isTextHighlightOn = false, this._prevText = this._textWrapper.text, this._textWrapper.removePart(this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex, i2);
          var o2 = i2.length - (this._cursorInfo.globalEndIndex - this._cursorInfo.globalStartIndex);
          this._cursorInfo.globalStartIndex += o2, this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, this._clickedCoordinateX = null, this._clickedCoordinateY = null, t2.prototype._textHasChanged.call(this);
        }, e2.prototype._draw = function(t3) {
          var e3, i2;
          this._computeScroll(), this._scrollLeft = null !== (e3 = this._scrollLeft) && void 0 !== e3 ? e3 : 0, this._scrollTop = null !== (i2 = this._scrollTop) && void 0 !== i2 ? i2 : 0, t3.save(), this._applyStates(t3), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), this._isFocused ? this._focusedBackground && (t3.fillStyle = this._isEnabled ? this._focusedBackground : this._disabledColor, t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height)) : this._background && (t3.fillStyle = this._isEnabled ? this._background : this._disabledColor, t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height)), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), this.color && (t3.fillStyle = this.color);
          var o2 = this._currentMeasure.height, r2 = this._currentMeasure.width, n2 = 0;
          switch (this._textVerticalAlignment) {
            case I.VERTICAL_ALIGNMENT_TOP:
              n2 = this._fontOffset.ascent;
              break;
            case I.VERTICAL_ALIGNMENT_BOTTOM:
              n2 = o2 - this._fontOffset.height * (this._lines.length - 1) - this._fontOffset.descent;
              break;
            case I.VERTICAL_ALIGNMENT_CENTER:
              n2 = this._fontOffset.ascent + (o2 - this._fontOffset.height * this._lines.length) / 2;
          }
          t3.save(), t3.beginPath(), t3.fillStyle = this.fontStyle, !this._textWrapper.text && this.placeholderText && (t3.fillStyle = this._placeholderColor), t3.rect(this._clipTextLeft, this._clipTextTop, this._availableWidth + 2, this._availableHeight + 2), t3.clip(), n2 += this._scrollTop;
          for (var a2 = 0; a2 < this._lines.length; a2++) {
            var s2 = this._lines[a2];
            0 !== a2 && 0 !== this._lineSpacing.internalValue && (this._lineSpacing.isPixel ? n2 += this._lineSpacing.getValue(this._host) : n2 += this._lineSpacing.getValue(this._host) * this._height.getValueInPixel(this._host, this._cachedParentMeasure.height)), this._drawText(s2.text, s2.width, n2, t3), n2 += this._fontOffset.height;
          }
          if (t3.restore(), this._isFocused) {
            if (!this._blinkIsEven || this._isTextHighlightOn) {
              var l2 = this._scrollLeft + t3.measureText(this._lines[this._cursorInfo.currentLineIndex].text.substring(0, this._cursorInfo.relativeStartIndex)).width;
              l2 < this._clipTextLeft ? (this._scrollLeft += this._clipTextLeft - l2, l2 = this._clipTextLeft, this._markAsDirty()) : l2 > this._clipTextLeft + this._availableWidth && (this._scrollLeft += this._clipTextLeft + this._availableWidth - l2, l2 = this._clipTextLeft + this._availableWidth, this._markAsDirty());
              var _2 = this._scrollTop + this._cursorInfo.currentLineIndex * this._fontOffset.height;
              _2 < this._clipTextTop ? (this._scrollTop += this._clipTextTop - _2, _2 = this._clipTextTop, this._markAsDirty()) : _2 + this._fontOffset.height > this._clipTextTop + this._availableHeight && this._availableHeight > this._fontOffset.height && (this._scrollTop += this._clipTextTop + this._availableHeight - _2 - this._fontOffset.height, _2 = this._clipTextTop + this._availableHeight - this._fontOffset.height, this._markAsDirty()), this._isTextHighlightOn || t3.fillRect(l2, _2, 2, this._fontOffset.height);
            }
            if (this._resetBlinking(), this._isTextHighlightOn) {
              clearTimeout(this._blinkTimeout), this._highlightedText = this.text.substring(this._cursorInfo.globalStartIndex, this._cursorInfo.globalEndIndex), t3.globalAlpha = this._highligherOpacity, t3.fillStyle = this._textHighlightColor;
              var h2 = Math.min(this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialLineIndex), c2 = Math.max(this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialLineIndex), u2 = this._scrollTop + h2 * this._fontOffset.height;
              for (a2 = h2; a2 <= c2; a2++) {
                s2 = this._lines[a2];
                var d2 = this._scrollLeft;
                switch (this._textHorizontalAlignment) {
                  case I.HORIZONTAL_ALIGNMENT_LEFT:
                    d2 += 0;
                    break;
                  case I.HORIZONTAL_ALIGNMENT_RIGHT:
                    d2 += r2 - s2.width;
                    break;
                  case I.HORIZONTAL_ALIGNMENT_CENTER:
                    d2 += (r2 - s2.width) / 2;
                }
                var f2 = a2 === h2 ? this._cursorInfo.relativeStartIndex : 0, p2 = a2 === c2 ? this._cursorInfo.relativeEndIndex : s2.text.length, g2 = t3.measureText(s2.text.substring(0, f2)).width, b2 = s2.text.substring(f2, p2), m2 = t3.measureText(b2).width;
                t3.fillRect(d2 + g2, u2, m2, this._fontOffset.height), u2 += this._fontOffset.height;
              }
              this._cursorInfo.globalEndIndex === this._cursorInfo.globalStartIndex && this._resetBlinking();
            }
          }
          t3.restore(), this._thickness && (this._isFocused ? this.focusedColor && (t3.strokeStyle = this.focusedColor) : this.color && (t3.strokeStyle = this.color), t3.lineWidth = this._thickness, t3.strokeRect(this._currentMeasure.left + this._thickness / 2, this._currentMeasure.top + this._thickness / 2, this._currentMeasure.width - this._thickness, this._currentMeasure.height - this._thickness));
        }, e2.prototype._resetBlinking = function() {
          var t3 = this;
          clearTimeout(this._blinkTimeout), this._blinkTimeout = setTimeout(function() {
            t3._blinkIsEven = !t3._blinkIsEven, t3._markAsDirty();
          }, 500);
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return !(!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2) || !this.isReadOnly && (this._clickedCoordinateX = i2.x, this._clickedCoordinateY = i2.y, this._isTextHighlightOn = false, this._highlightedText = "", this._isPointerDown = true, this._host._capturingControl[o2] = this, this._host.focusedControl === this ? (clearTimeout(this._blinkTimeout), this._markAsDirty(), 0) : !this._isEnabled || (this._host.focusedControl = this, 0)));
        }, e2.prototype._onPointerMove = function(e3, i2, o2, r2) {
          0 === r2.event.movementX && 0 === r2.event.movementY || (this._host.focusedControl === this && this._isPointerDown && !this.isReadOnly && (this._clickedCoordinateX = i2.x, this._clickedCoordinateY = i2.y, this._isTextHighlightOn || (this._highlightCursorInfo.initialLineIndex = this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialStartIndex = this._cursorInfo.globalStartIndex, this._highlightCursorInfo.initialRelativeStartIndex = this._cursorInfo.relativeStartIndex, this._isTextHighlightOn = true), this._markAsDirty()), t2.prototype._onPointerMove.call(this, e3, i2, o2, r2));
        }, e2.prototype._updateCursorPosition = function() {
          var t3;
          if (this._isFocused) if (!this._textWrapper.text && this.placeholderText) this._cursorInfo.currentLineIndex = 0, this._cursorInfo.globalStartIndex = 0, this._cursorInfo.globalEndIndex = 0, this._cursorInfo.relativeStartIndex = 0, this._cursorInfo.relativeEndIndex = 0;
          else if (this._clickedCoordinateX && this._clickedCoordinateY) {
            this._isTextHighlightOn || (this._cursorInfo = { globalStartIndex: 0, globalEndIndex: 0, relativeStartIndex: 0, relativeEndIndex: 0, currentLineIndex: 0 });
            var e3 = 0, i2 = 0, o2 = this._clickedCoordinateY - this._scrollTop, r2 = Math.floor(o2 / this._fontOffset.height);
            this._cursorInfo.currentLineIndex = Math.min(Math.max(r2, 0), this._lines.length - 1);
            for (var n2 = 0, a2 = this._clickedCoordinateX - (null !== (t3 = this._scrollLeft) && void 0 !== t3 ? t3 : 0), s2 = 0, l2 = 0; l2 < this._cursorInfo.currentLineIndex; l2++) {
              var _2 = this._lines[l2];
              e3 += _2.text.length + _2.lineEnding.length;
            }
            for (; n2 < a2 && this._lines[this._cursorInfo.currentLineIndex].text.length > i2; ) i2++, s2 = Math.abs(a2 - n2), n2 = this._contextForBreakLines.measureText(this._lines[this._cursorInfo.currentLineIndex].text.substring(0, i2)).width;
            Math.abs(a2 - n2) > s2 && i2 > 0 && i2--, e3 += i2, this._isTextHighlightOn ? e3 < this._highlightCursorInfo.initialStartIndex ? (this._cursorInfo.globalStartIndex = e3, this._cursorInfo.relativeStartIndex = i2, this._cursorInfo.globalEndIndex = this._highlightCursorInfo.initialStartIndex, this._cursorInfo.relativeEndIndex = this._highlightCursorInfo.initialRelativeStartIndex) : (this._cursorInfo.globalStartIndex = this._highlightCursorInfo.initialStartIndex, this._cursorInfo.relativeStartIndex = this._highlightCursorInfo.initialRelativeStartIndex, this._cursorInfo.globalEndIndex = e3, this._cursorInfo.relativeEndIndex = i2) : (this._cursorInfo.globalStartIndex = e3, this._cursorInfo.relativeStartIndex = i2, this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex, this._cursorInfo.relativeEndIndex = this._cursorInfo.relativeStartIndex), this._blinkIsEven = this._isTextHighlightOn, this._clickedCoordinateX = null, this._clickedCoordinateY = null;
          } else {
            this._cursorInfo.relativeStartIndex = 0, this._cursorInfo.currentLineIndex = 0;
            for (var h2 = this._lines[this._cursorInfo.currentLineIndex].text.length + this._lines[this._cursorInfo.currentLineIndex].lineEnding.length, c2 = 0; c2 + h2 <= this._cursorInfo.globalStartIndex; ) c2 += h2, this._cursorInfo.currentLineIndex < this._lines.length - 1 && (this._cursorInfo.currentLineIndex++, h2 = this._lines[this._cursorInfo.currentLineIndex].text.length + this._lines[this._cursorInfo.currentLineIndex].lineEnding.length);
            if (this._cursorInfo.relativeStartIndex = this._cursorInfo.globalStartIndex - c2, this._isTextHighlightOn) {
              if (-1 !== this._highlightCursorInfo.initialStartIndex && this._cursorInfo.globalStartIndex >= this._highlightCursorInfo.initialStartIndex) {
                for (; c2 + h2 <= this._cursorInfo.globalEndIndex; ) c2 += h2, this._cursorInfo.currentLineIndex < this._lines.length - 1 && (this._cursorInfo.currentLineIndex++, h2 = this._lines[this._cursorInfo.currentLineIndex].text.length + this._lines[this._cursorInfo.currentLineIndex].lineEnding.length);
                this._cursorInfo.relativeEndIndex = this._cursorInfo.globalEndIndex - c2;
              }
            } else this._cursorInfo.relativeEndIndex = this._cursorInfo.relativeStartIndex, this._cursorInfo.globalEndIndex = this._cursorInfo.globalStartIndex;
          }
        }, e2.prototype._updateValueFromCursorIndex = function(t3) {
        }, e2.prototype._processDblClick = function(t3) {
          var e3, i2;
          do {
            e3 = this._cursorInfo.globalStartIndex > 0 && this._textWrapper.isWord(this._cursorInfo.globalStartIndex - 1) ? --this._cursorInfo.globalStartIndex : 0, i2 = this._cursorInfo.globalEndIndex < this._textWrapper.length && this._textWrapper.isWord(this._cursorInfo.globalEndIndex) ? ++this._cursorInfo.globalEndIndex : 0;
          } while (e3 || i2);
          this._highlightCursorInfo.initialLineIndex = this._cursorInfo.currentLineIndex, this._highlightCursorInfo.initialStartIndex = this._cursorInfo.globalStartIndex, this.onTextHighlightObservable.notifyObservers(this), this._isTextHighlightOn = true, this._blinkIsEven = true, this._markAsDirty();
        }, e2.prototype.selectAllText = function() {
          this._isTextHighlightOn = true, this._blinkIsEven = true, this._highlightCursorInfo = { initialStartIndex: 0, initialRelativeStartIndex: 0, initialLineIndex: 0 }, this._cursorInfo = { globalStartIndex: 0, globalEndIndex: this._textWrapper.length, relativeEndIndex: this._lines[this._lines.length - 1].text.length, relativeStartIndex: 0, currentLineIndex: this._lines.length - 1 }, this._markAsDirty();
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this.onLinesReadyObservable.clear();
        }, h([(0, d.serialize)()], e2.prototype, "autoStretchHeight", null), h([(0, d.serialize)()], e2.prototype, "maxHeight", null), e2;
      }(F);
      (0, d.RegisterClass)("BABYLON.GUI.InputTextArea", A);
      var z = function(t2) {
        function e2() {
          return null !== t2 && t2.apply(this, arguments) || this;
        }
        return l(e2, t2), e2.prototype._getTypeName = function() {
          return "InputPassword";
        }, e2.prototype._beforeRenderText = function(t3) {
          for (var e3 = new E(), i2 = "", o2 = 0; o2 < t3.length; o2++) i2 += "•";
          return e3.text = i2, e3;
        }, e2;
      }(F);
      (0, d.RegisterClass)("BABYLON.GUI.InputPassword", z);
      var Q = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._lineWidth = 1, i2._x1 = new f(0), i2._y1 = new f(0), i2._x2 = new f(0), i2._y2 = new f(0), i2._dash = new Array(), i2._automaticSize = true, i2.isHitTestVisible = false, i2._horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, i2._verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "dash", { get: function() {
          return this._dash;
        }, set: function(t3) {
          this._dash !== t3 && (this._dash = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "connectedControl", { get: function() {
          return this._connectedControl;
        }, set: function(t3) {
          var e3 = this;
          this._connectedControl !== t3 && (this._connectedControlDirtyObserver && this._connectedControl && (this._connectedControl.onDirtyObservable.remove(this._connectedControlDirtyObserver), this._connectedControlDirtyObserver = null), t3 && (this._connectedControlDirtyObserver = t3.onDirtyObservable.add(function() {
            return e3._markAsDirty();
          })), this._connectedControl = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "x1", { get: function() {
          return this._x1.toString(this._host);
        }, set: function(t3) {
          this._x1.toString(this._host) !== t3 && this._x1.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "y1", { get: function() {
          return this._y1.toString(this._host);
        }, set: function(t3) {
          this._y1.toString(this._host) !== t3 && this._y1.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "x2", { get: function() {
          return this._x2.toString(this._host);
        }, set: function(t3) {
          this._x2.toString(this._host) !== t3 && this._x2.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "y2", { get: function() {
          return this._y2.toString(this._host);
        }, set: function(t3) {
          this._y2.toString(this._host) !== t3 && this._y2.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "lineWidth", { get: function() {
          return this._lineWidth;
        }, set: function(t3) {
          this._lineWidth !== t3 && (this._lineWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "horizontalAlignment", { set: function(t3) {
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "verticalAlignment", { set: function(t3) {
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "_effectiveX2", { get: function() {
          return (this._connectedControl ? this._connectedControl.centerX : 0) + this._x2.getValue(this._host);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "_effectiveY2", { get: function() {
          return (this._connectedControl ? this._connectedControl.centerY : 0) + this._y2.getValue(this._host);
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Line";
        }, e2.prototype._draw = function(t3) {
          t3.save(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), this._applyStates(t3), t3.strokeStyle = this._getColor(t3), t3.lineWidth = this._lineWidth, t3.setLineDash(this._dash), t3.beginPath(), t3.moveTo(this._cachedParentMeasure.left + this._x1.getValue(this._host), this._cachedParentMeasure.top + this._y1.getValue(this._host)), t3.lineTo(this._cachedParentMeasure.left + this._effectiveX2, this._cachedParentMeasure.top + this._effectiveY2), t3.stroke(), t3.restore();
        }, e2.prototype._measure = function() {
          this._currentMeasure.width = Math.abs(this._x1.getValue(this._host) - this._effectiveX2) + this._lineWidth, this._currentMeasure.height = Math.abs(this._y1.getValue(this._host) - this._effectiveY2) + this._lineWidth;
        }, e2.prototype._computeAlignment = function(t3) {
          this._currentMeasure.left = t3.left + Math.min(this._x1.getValue(this._host), this._effectiveX2) - this._lineWidth / 2, this._currentMeasure.top = t3.top + Math.min(this._y1.getValue(this._host), this._effectiveY2) - this._lineWidth / 2;
        }, e2.prototype.moveToVector3 = function(t3, e3, i2) {
          if (void 0 === i2 && (i2 = false), this._host && this.parent === this._host._rootContainer) {
            var o2 = this._host._getGlobalViewport(), r2 = d.Vector3.Project(t3, d.Matrix.IdentityReadOnly, e3.getTransformMatrix(), o2);
            this._moveToProjectedPosition(r2, i2), r2.z < 0 || r2.z > 1 ? this.notRenderable = true : this.notRenderable = false;
          } else d.Tools.Error("Cannot move a control to a vector3 if the control is not at root level");
        }, e2.prototype._moveToProjectedPosition = function(t3, e3) {
          void 0 === e3 && (e3 = false);
          var i2 = t3.x + this._linkOffsetX.getValue(this._host) + "px", o2 = t3.y + this._linkOffsetY.getValue(this._host) + "px";
          e3 ? (this.x2 = i2, this.y2 = o2, this._x2.ignoreAdaptiveScaling = true, this._y2.ignoreAdaptiveScaling = true) : (this.x1 = i2, this.y1 = o2, this._x1.ignoreAdaptiveScaling = true, this._y1.ignoreAdaptiveScaling = true);
        }, h([(0, d.serialize)()], e2.prototype, "dash", null), h([(0, d.serialize)()], e2.prototype, "x1", null), h([(0, d.serialize)()], e2.prototype, "y1", null), h([(0, d.serialize)()], e2.prototype, "x2", null), h([(0, d.serialize)()], e2.prototype, "y2", null), h([(0, d.serialize)()], e2.prototype, "lineWidth", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.Line", Q);
      var V = function() {
        function t2(t3) {
          this._multiLine = t3, this._x = new f(0), this._y = new f(0), this._point = new d.Vector3(0, 0, 0);
        }
        return Object.defineProperty(t2.prototype, "x", { get: function() {
          return this._x.toString(this._multiLine._host);
        }, set: function(t3) {
          this._x.toString(this._multiLine._host) !== t3 && this._x.fromString(t3) && this._multiLine._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "y", { get: function() {
          return this._y.toString(this._multiLine._host);
        }, set: function(t3) {
          this._y.toString(this._multiLine._host) !== t3 && this._y.fromString(t3) && this._multiLine._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "control", { get: function() {
          return this._control;
        }, set: function(t3) {
          this._control !== t3 && (this._control && this._controlObserver && (this._control.onDirtyObservable.remove(this._controlObserver), this._controlObserver = null), this._control = t3, this._control && (this._controlObserver = this._control.onDirtyObservable.add(this._multiLine.onPointUpdate)), this._multiLine._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "mesh", { get: function() {
          return this._mesh;
        }, set: function(t3) {
          this._mesh !== t3 && (this._mesh && this._meshObserver && this._mesh.getScene().onAfterCameraRenderObservable.remove(this._meshObserver), this._mesh = t3, this._mesh && (this._meshObserver = this._mesh.getScene().onAfterCameraRenderObservable.add(this._multiLine.onPointUpdate)), this._multiLine._markAsDirty());
        }, enumerable: false, configurable: true }), t2.prototype.resetLinks = function() {
          this.control = null, this.mesh = null;
        }, t2.prototype.translate = function() {
          return this._point = this._translatePoint(), this._point;
        }, t2.prototype._translatePoint = function() {
          if (null != this._mesh) return this._multiLine._host.getProjectedPositionWithZ(this._mesh.getBoundingInfo().boundingSphere.center, this._mesh.getWorldMatrix());
          if (null != this._control) return new d.Vector3(this._control.centerX, this._control.centerY, 1 - d.Epsilon);
          var t3 = this._multiLine._host, e2 = this._x.getValueInPixel(t3, Number(t3._canvas.width)), i2 = this._y.getValueInPixel(t3, Number(t3._canvas.height));
          return new d.Vector3(e2, i2, 1 - d.Epsilon);
        }, t2.prototype.dispose = function() {
          this.resetLinks();
        }, t2;
      }(), W = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._lineWidth = 1, i2.onPointUpdate = function() {
            i2._markAsDirty();
          }, i2._automaticSize = true, i2.isHitTestVisible = false, i2._horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, i2._verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, i2._dash = [], i2._points = [], i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "dash", { get: function() {
          return this._dash;
        }, set: function(t3) {
          this._dash !== t3 && (this._dash = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype.getAt = function(t3) {
          return this._points[t3] || (this._points[t3] = new V(this)), this._points[t3];
        }, e2.prototype.add = function() {
          for (var t3 = this, e3 = [], i2 = 0; i2 < arguments.length; i2++) e3[i2] = arguments[i2];
          return e3.map(function(e4) {
            return t3.push(e4);
          });
        }, e2.prototype.push = function(t3) {
          var e3 = this.getAt(this._points.length);
          return null == t3 || (t3 instanceof d.AbstractMesh ? e3.mesh = t3 : t3 instanceof I ? e3.control = t3 : null != t3.x && null != t3.y && (e3.x = t3.x, e3.y = t3.y)), e3;
        }, e2.prototype.remove = function(t3) {
          var e3;
          if (t3 instanceof V) {
            if (-1 === (e3 = this._points.indexOf(t3))) return;
          } else e3 = t3;
          var i2 = this._points[e3];
          i2 && (i2.dispose(), this._points.splice(e3, 1));
        }, e2.prototype.reset = function() {
          for (; this._points.length > 0; ) this.remove(this._points.length - 1);
        }, e2.prototype.resetLinks = function() {
          for (var t3 = 0, e3 = this._points; t3 < e3.length; t3++) {
            var i2 = e3[t3];
            null != i2 && i2.resetLinks();
          }
        }, Object.defineProperty(e2.prototype, "lineWidth", { get: function() {
          return this._lineWidth;
        }, set: function(t3) {
          this._lineWidth !== t3 && (this._lineWidth = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "horizontalAlignment", { set: function(t3) {
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "verticalAlignment", { set: function(t3) {
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "MultiLine";
        }, e2.prototype._draw = function(t3) {
          t3.save(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), this._applyStates(t3), t3.strokeStyle = this.color, t3.lineWidth = this._lineWidth, t3.setLineDash(this._dash), t3.beginPath();
          for (var e3, i2 = true, o2 = 0, r2 = this._points; o2 < r2.length; o2++) {
            var n2 = r2[o2];
            n2 && (i2 ? (t3.moveTo(n2._point.x, n2._point.y), i2 = false) : n2._point.z < 1 && e3.z < 1 ? t3.lineTo(n2._point.x, n2._point.y) : t3.moveTo(n2._point.x, n2._point.y), e3 = n2._point);
          }
          t3.stroke(), t3.restore();
        }, e2.prototype._additionalProcessing = function() {
          this._minX = null, this._minY = null, this._maxX = null, this._maxY = null;
          for (var t3 = 0, e3 = this._points; t3 < e3.length; t3++) {
            var i2 = e3[t3];
            i2 && (i2.translate(), (null == this._minX || i2._point.x < this._minX) && (this._minX = i2._point.x), (null == this._minY || i2._point.y < this._minY) && (this._minY = i2._point.y), (null == this._maxX || i2._point.x > this._maxX) && (this._maxX = i2._point.x), (null == this._maxY || i2._point.y > this._maxY) && (this._maxY = i2._point.y));
          }
          null == this._minX && (this._minX = 0), null == this._minY && (this._minY = 0), null == this._maxX && (this._maxX = 0), null == this._maxY && (this._maxY = 0);
        }, e2.prototype._measure = function() {
          null != this._minX && null != this._maxX && null != this._minY && null != this._maxY && (this._currentMeasure.width = Math.abs(this._maxX - this._minX) + this._lineWidth, this._currentMeasure.height = Math.abs(this._maxY - this._minY) + this._lineWidth);
        }, e2.prototype._computeAlignment = function() {
          null != this._minX && null != this._minY && (this._currentMeasure.left = this._minX - this._lineWidth / 2, this._currentMeasure.top = this._minY - this._lineWidth / 2);
        }, e2.prototype.dispose = function() {
          this.reset(), t2.prototype.dispose.call(this);
        }, h([(0, d.serialize)()], e2.prototype, "dash", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.MultiLine", W);
      var H = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._isChecked = false, i2._background = "black", i2._checkSizeRatio = 0.8, i2._thickness = 1, i2.group = "", i2.onIsCheckedChangedObservable = new d.Observable(), i2.isPointerBlocker = true, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "thickness", { get: function() {
          return this._thickness;
        }, set: function(t3) {
          this._thickness !== t3 && (this._thickness = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "checkSizeRatio", { get: function() {
          return this._checkSizeRatio;
        }, set: function(t3) {
          t3 = Math.max(Math.min(1, t3), 0), this._checkSizeRatio !== t3 && (this._checkSizeRatio = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isChecked", { get: function() {
          return this._isChecked;
        }, set: function(t3) {
          var e3 = this;
          this._isChecked !== t3 && (this._isChecked = t3, this._markAsDirty(), this.onIsCheckedChangedObservable.notifyObservers(t3), this._isChecked && this._host && this._host.executeOnAllControls(function(t4) {
            if (t4 !== e3 && void 0 !== t4.group) {
              var i2 = t4;
              i2.group === e3.group && (i2.isChecked = false);
            }
          }));
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "RadioButton";
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3);
          var e3 = this._currentMeasure.width - this._thickness, i2 = this._currentMeasure.height - this._thickness;
          if ((this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), I.drawEllipse(this._currentMeasure.left + this._currentMeasure.width / 2, this._currentMeasure.top + this._currentMeasure.height / 2, this._currentMeasure.width / 2 - this._thickness / 2, this._currentMeasure.height / 2 - this._thickness / 2, 1, t3), t3.fillStyle = this._isEnabled ? this._background : this._disabledColor, t3.fill(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), t3.strokeStyle = this.color, t3.lineWidth = this._thickness, t3.stroke(), this._isChecked) {
            t3.fillStyle = this._isEnabled ? this.color : this._disabledColor;
            var o2 = e3 * this._checkSizeRatio, r2 = i2 * this._checkSizeRatio;
            I.drawEllipse(this._currentMeasure.left + this._currentMeasure.width / 2, this._currentMeasure.top + this._currentMeasure.height / 2, o2 / 2 - this._thickness / 2, r2 / 2 - this._thickness / 2, 1, t3), t3.fill();
          }
          t3.restore();
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return !!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2) && (this.isReadOnly || this.isChecked || (this.isChecked = true), true);
        }, e2.AddRadioButtonWithHeader = function(t3, i2, o2, r2) {
          var n2 = new w();
          n2.isVertical = false, n2.height = "30px";
          var a2 = new e2();
          a2.width = "20px", a2.height = "20px", a2.isChecked = o2, a2.color = "green", a2.group = i2, a2.onIsCheckedChangedObservable.add(function(t4) {
            return r2(a2, t4);
          }), n2.addControl(a2);
          var s2 = new S();
          return s2.text = t3, s2.width = "180px", s2.paddingLeft = "5px", s2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, s2.color = "white", n2.addControl(s2), n2;
        }, h([(0, d.serialize)()], e2.prototype, "thickness", null), h([(0, d.serialize)()], e2.prototype, "group", void 0), h([(0, d.serialize)()], e2.prototype, "checkSizeRatio", null), h([(0, d.serialize)()], e2.prototype, "background", null), h([(0, d.serialize)()], e2.prototype, "isChecked", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.RadioButton", H);
      var G = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._thumbWidth = new f(20, f.UNITMODE_PIXEL, false), i2._minimum = 0, i2._maximum = 100, i2._value = 50, i2._isVertical = false, i2._barOffset = new f(5, f.UNITMODE_PIXEL, false), i2._isThumbClamped = false, i2._displayThumb = true, i2._step = 0, i2._lastPointerDownId = -1, i2._effectiveBarOffset = 0, i2.onValueChangedObservable = new d.Observable(), i2._pointerIsDown = false, i2.isPointerBlocker = true, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "displayThumb", { get: function() {
          return this._displayThumb;
        }, set: function(t3) {
          this._displayThumb !== t3 && (this._displayThumb = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "step", { get: function() {
          return this._step;
        }, set: function(t3) {
          this._step !== t3 && (this._step = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barOffset", { get: function() {
          return this._barOffset.toString(this._host);
        }, set: function(t3) {
          this._barOffset.toString(this._host) !== t3 && this._barOffset.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barOffsetInPixels", { get: function() {
          return this._barOffset.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbWidth", { get: function() {
          return this._thumbWidth.toString(this._host);
        }, set: function(t3) {
          this._thumbWidth.toString(this._host) !== t3 && this._thumbWidth.fromString(t3) && this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbWidthInPixels", { get: function() {
          return this._thumbWidth.getValueInPixel(this._host, this._cachedParentMeasure.width);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "minimum", { get: function() {
          return this._minimum;
        }, set: function(t3) {
          this._minimum !== t3 && (this._minimum = t3, this._markAsDirty(), this.value = Math.max(Math.min(this.value, this._maximum), this._minimum));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "maximum", { get: function() {
          return this._maximum;
        }, set: function(t3) {
          this._maximum !== t3 && (this._maximum = t3, this._markAsDirty(), this.value = Math.max(Math.min(this.value, this._maximum), this._minimum));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "value", { get: function() {
          return this._value;
        }, set: function(t3) {
          t3 = Math.max(Math.min(t3, this._maximum), this._minimum), this._value !== t3 && (this._value = t3, this._markAsDirty(), this.onValueChangedObservable.notifyObservers(this._value));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isVertical", { get: function() {
          return this._isVertical;
        }, set: function(t3) {
          this._isVertical !== t3 && (this._isVertical = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isThumbClamped", { get: function() {
          return this._isThumbClamped;
        }, set: function(t3) {
          this._isThumbClamped !== t3 && (this._isThumbClamped = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "BaseSlider";
        }, e2.prototype._getThumbPosition = function() {
          return this.isVertical ? (this.maximum - this.value) / (this.maximum - this.minimum) * this._backgroundBoxLength : (this.value - this.minimum) / (this.maximum - this.minimum) * this._backgroundBoxLength;
        }, e2.prototype._getThumbThickness = function(t3) {
          var e3 = 0;
          switch (t3) {
            case "circle":
              e3 = this._thumbWidth.isPixel ? Math.max(this._thumbWidth.getValue(this._host), this._backgroundBoxThickness) : this._backgroundBoxThickness * this._thumbWidth.getValue(this._host);
              break;
            case "rectangle":
              e3 = this._thumbWidth.isPixel ? Math.min(this._thumbWidth.getValue(this._host), this._backgroundBoxThickness) : this._backgroundBoxThickness * this._thumbWidth.getValue(this._host);
          }
          return e3;
        }, e2.prototype._prepareRenderingData = function(t3) {
          this._effectiveBarOffset = 0, this._renderLeft = this._currentMeasure.left, this._renderTop = this._currentMeasure.top, this._renderWidth = this._currentMeasure.width, this._renderHeight = this._currentMeasure.height, this._backgroundBoxLength = Math.max(this._currentMeasure.width, this._currentMeasure.height), this._backgroundBoxThickness = Math.min(this._currentMeasure.width, this._currentMeasure.height), this._effectiveThumbThickness = this._getThumbThickness(t3), this.displayThumb && (this._backgroundBoxLength -= this._effectiveThumbThickness), this.isVertical && this._currentMeasure.height < this._currentMeasure.width ? d.Logger.Error("Height should be greater than width") : (this._barOffset.isPixel ? this._effectiveBarOffset = Math.min(this._barOffset.getValue(this._host), this._backgroundBoxThickness) : this._effectiveBarOffset = this._backgroundBoxThickness * this._barOffset.getValue(this._host), this._backgroundBoxThickness -= 2 * this._effectiveBarOffset, this.isVertical ? (this._renderLeft += this._effectiveBarOffset, !this.isThumbClamped && this.displayThumb && (this._renderTop += this._effectiveThumbThickness / 2), this._renderHeight = this._backgroundBoxLength, this._renderWidth = this._backgroundBoxThickness) : (this._renderTop += this._effectiveBarOffset, !this.isThumbClamped && this.displayThumb && (this._renderLeft += this._effectiveThumbThickness / 2), this._renderHeight = this._backgroundBoxThickness, this._renderWidth = this._backgroundBoxLength));
        }, e2.prototype._updateValueFromPointer = function(t3, e3) {
          var i2;
          0 != this.rotation && (this._invertTransformMatrix.transformCoordinates(t3, e3, this._transformedPosition), t3 = this._transformedPosition.x, e3 = this._transformedPosition.y), i2 = this._isVertical ? this._minimum + (1 - (e3 - this._currentMeasure.top) / this._currentMeasure.height) * (this._maximum - this._minimum) : this._minimum + (t3 - this._currentMeasure.left) / this._currentMeasure.width * (this._maximum - this._minimum), this.value = this._step ? Math.round(i2 / this._step) * this._step : i2;
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return !!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2) && (this.isReadOnly || (this._pointerIsDown = true, this._updateValueFromPointer(i2.x, i2.y), this._host._capturingControl[o2] = this, this._lastPointerDownId = o2), true);
        }, e2.prototype._onPointerMove = function(e3, i2, o2, r2) {
          o2 == this._lastPointerDownId && (this._pointerIsDown && !this.isReadOnly && this._updateValueFromPointer(i2.x, i2.y), t2.prototype._onPointerMove.call(this, e3, i2, o2, r2));
        }, e2.prototype._onPointerUp = function(e3, i2, o2, r2, n2) {
          this._pointerIsDown = false, delete this._host._capturingControl[o2], t2.prototype._onPointerUp.call(this, e3, i2, o2, r2, n2);
        }, e2.prototype._onCanvasBlur = function() {
          this._forcePointerUp(), t2.prototype._onCanvasBlur.call(this);
        }, h([(0, d.serialize)()], e2.prototype, "displayThumb", null), h([(0, d.serialize)()], e2.prototype, "step", null), h([(0, d.serialize)()], e2.prototype, "barOffset", null), h([(0, d.serialize)()], e2.prototype, "thumbWidth", null), h([(0, d.serialize)()], e2.prototype, "minimum", null), h([(0, d.serialize)()], e2.prototype, "maximum", null), h([(0, d.serialize)()], e2.prototype, "value", null), h([(0, d.serialize)()], e2.prototype, "isVertical", null), h([(0, d.serialize)()], e2.prototype, "isThumbClamped", null), e2;
      }(I), U = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._background = "black", i2._borderColor = "white", i2._thumbColor = "", i2._isThumbCircle = false, i2._displayValueBar = true, i2._backgroundGradient = null, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "displayValueBar", { get: function() {
          return this._displayValueBar;
        }, set: function(t3) {
          this._displayValueBar !== t3 && (this._displayValueBar = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "borderColor", { get: function() {
          return this._borderColor;
        }, set: function(t3) {
          this._borderColor !== t3 && (this._borderColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backgroundGradient", { get: function() {
          return this._backgroundGradient;
        }, set: function(t3) {
          this._backgroundGradient !== t3 && (this._backgroundGradient = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbColor", { get: function() {
          return this._thumbColor;
        }, set: function(t3) {
          this._thumbColor !== t3 && (this._thumbColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isThumbCircle", { get: function() {
          return this._isThumbCircle;
        }, set: function(t3) {
          this._isThumbCircle !== t3 && (this._isThumbCircle = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Slider";
        }, e2.prototype._getBackgroundColor = function(t3) {
          return this._backgroundGradient ? this._backgroundGradient.getCanvasGradient(t3) : this._background;
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3), this._prepareRenderingData(this.isThumbCircle ? "circle" : "rectangle");
          var e3 = this._renderLeft, i2 = this._renderTop, o2 = this._renderWidth, r2 = this._renderHeight, n2 = 0;
          this.isThumbClamped && this.isThumbCircle ? (this.isVertical ? i2 += this._effectiveThumbThickness / 2 : e3 += this._effectiveThumbThickness / 2, n2 = this._backgroundBoxThickness / 2) : n2 = (this._effectiveThumbThickness - this._effectiveBarOffset) / 2, n2 = Math.max(0, n2), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY);
          var a2 = this._getThumbPosition();
          t3.fillStyle = this._getBackgroundColor(t3), this.isVertical ? this.isThumbClamped ? this.isThumbCircle ? (t3.beginPath(), t3.arc(e3 + this._backgroundBoxThickness / 2, i2, n2, Math.PI, 2 * Math.PI), t3.fill(), t3.fillRect(e3, i2, o2, r2)) : t3.fillRect(e3, i2, o2, r2 + this._effectiveThumbThickness) : t3.fillRect(e3, i2, o2, r2) : this.isThumbClamped ? this.isThumbCircle ? (t3.beginPath(), t3.arc(e3 + this._backgroundBoxLength, i2 + this._backgroundBoxThickness / 2, n2, 0, 2 * Math.PI), t3.fill(), t3.fillRect(e3, i2, o2, r2)) : t3.fillRect(e3, i2, o2 + this._effectiveThumbThickness, r2) : t3.fillRect(e3, i2, o2, r2), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), t3.fillStyle = this._getColor(t3), this._displayValueBar && (this.isVertical ? this.isThumbClamped ? this.isThumbCircle ? (t3.beginPath(), t3.arc(e3 + this._backgroundBoxThickness / 2, i2 + this._backgroundBoxLength, n2, 0, 2 * Math.PI), t3.fill(), t3.fillRect(e3, i2 + a2, o2, r2 - a2)) : t3.fillRect(e3, i2 + a2, o2, r2 - a2 + this._effectiveThumbThickness) : t3.fillRect(e3, i2 + a2, o2, r2 - a2) : this.isThumbClamped && this.isThumbCircle ? (t3.beginPath(), t3.arc(e3, i2 + this._backgroundBoxThickness / 2, n2, 0, 2 * Math.PI), t3.fill(), t3.fillRect(e3, i2, a2, r2)) : t3.fillRect(e3, i2, a2, r2)), t3.fillStyle = this._thumbColor || this._getColor(t3), this.displayThumb && ((this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowColor = this.shadowColor, t3.shadowBlur = this.shadowBlur, t3.shadowOffsetX = this.shadowOffsetX, t3.shadowOffsetY = this.shadowOffsetY), this._isThumbCircle ? (t3.beginPath(), this.isVertical ? t3.arc(e3 + this._backgroundBoxThickness / 2, i2 + a2, n2, 0, 2 * Math.PI) : t3.arc(e3 + a2, i2 + this._backgroundBoxThickness / 2, n2, 0, 2 * Math.PI), t3.fill(), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), t3.strokeStyle = this._borderColor, t3.stroke()) : (this.isVertical ? t3.fillRect(e3 - this._effectiveBarOffset, this._currentMeasure.top + a2, this._currentMeasure.width, this._effectiveThumbThickness) : t3.fillRect(this._currentMeasure.left + a2, this._currentMeasure.top, this._effectiveThumbThickness, this._currentMeasure.height), (this.shadowBlur || this.shadowOffsetX || this.shadowOffsetY) && (t3.shadowBlur = 0, t3.shadowOffsetX = 0, t3.shadowOffsetY = 0), t3.strokeStyle = this._borderColor, this.isVertical ? t3.strokeRect(e3 - this._effectiveBarOffset, this._currentMeasure.top + a2, this._currentMeasure.width, this._effectiveThumbThickness) : t3.strokeRect(this._currentMeasure.left + a2, this._currentMeasure.top, this._effectiveThumbThickness, this._currentMeasure.height))), t3.restore();
        }, e2.prototype.serialize = function(e3) {
          t2.prototype.serialize.call(this, e3), this.backgroundGradient && (e3.backgroundGradient = {}, this.backgroundGradient.serialize(e3.backgroundGradient));
        }, e2.prototype._parseFromContent = function(e3, i2) {
          if (t2.prototype._parseFromContent.call(this, e3, i2), e3.backgroundGradient) {
            var o2 = d.Tools.Instantiate("BABYLON.GUI." + e3.backgroundGradient.className);
            this.backgroundGradient = new o2(), this.backgroundGradient.parse(e3.backgroundGradient);
          }
        }, h([(0, d.serialize)()], e2.prototype, "displayValueBar", null), h([(0, d.serialize)()], e2.prototype, "borderColor", null), h([(0, d.serialize)()], e2.prototype, "background", null), h([(0, d.serialize)()], e2.prototype, "thumbColor", null), h([(0, d.serialize)()], e2.prototype, "isThumbCircle", null), e2;
      }(G);
      (0, d.RegisterClass)("BABYLON.GUI.Slider", U);
      var j = function() {
        function t2(t3) {
          this.name = t3, this._groupPanel = new w(), this._selectors = [], this._groupPanel.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, this._groupPanel.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, this._groupHeader = this._addGroupHeader(t3);
        }
        return Object.defineProperty(t2.prototype, "groupPanel", { get: function() {
          return this._groupPanel;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "selectors", { get: function() {
          return this._selectors;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "header", { get: function() {
          return this._groupHeader.text;
        }, set: function(t3) {
          "label" !== this._groupHeader.text && (this._groupHeader.text = t3);
        }, enumerable: false, configurable: true }), t2.prototype._addGroupHeader = function(t3) {
          var e2 = new S("groupHead", t3);
          return e2.width = 0.9, e2.height = "30px", e2.textWrapping = true, e2.color = "black", e2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, e2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, e2.left = "2px", this._groupPanel.addControl(e2), e2;
        }, t2.prototype._getSelector = function(t3) {
          if (!(t3 < 0 || t3 >= this._selectors.length)) return this._selectors[t3];
        }, t2.prototype.removeSelector = function(t3) {
          t3 < 0 || t3 >= this._selectors.length || (this._groupPanel.removeControl(this._selectors[t3]), this._selectors.splice(t3, 1));
        }, t2;
      }(), Y = function(t2) {
        function e2() {
          return null !== t2 && t2.apply(this, arguments) || this;
        }
        return l(e2, t2), e2.prototype.addCheckbox = function(t3, e3, i2) {
          void 0 === e3 && (e3 = function(t4) {
          }), void 0 === i2 && (i2 = false), i2 = i2 || false;
          var o2 = new M();
          o2.width = "20px", o2.height = "20px", o2.color = "#364249", o2.background = "#CCCCCC", o2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, o2.onIsCheckedChangedObservable.add(function(t4) {
            e3(t4);
          });
          var r2 = I.AddHeader(o2, t3, "200px", { isHorizontal: true, controlFirst: true });
          r2.height = "30px", r2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, r2.left = "4px", this.groupPanel.addControl(r2), this.selectors.push(r2), o2.isChecked = i2, this.groupPanel.parent && this.groupPanel.parent.parent && (o2.color = this.groupPanel.parent.parent.buttonColor, o2.background = this.groupPanel.parent.parent.buttonBackground);
        }, e2.prototype._setSelectorLabel = function(t3, e3) {
          this.selectors[t3].children[1].text = e3;
        }, e2.prototype._setSelectorLabelColor = function(t3, e3) {
          this.selectors[t3].children[1].color = e3;
        }, e2.prototype._setSelectorButtonColor = function(t3, e3) {
          this.selectors[t3].children[0].color = e3;
        }, e2.prototype._setSelectorButtonBackground = function(t3, e3) {
          this.selectors[t3].children[0].background = e3;
        }, e2;
      }(j), X = function(t2) {
        function e2() {
          var e3 = null !== t2 && t2.apply(this, arguments) || this;
          return e3._selectNb = 0, e3;
        }
        return l(e2, t2), e2.prototype.addRadio = function(t3, e3, i2) {
          void 0 === e3 && (e3 = function(t4) {
          }), void 0 === i2 && (i2 = false);
          var o2 = this._selectNb++, r2 = new H();
          r2.name = t3, r2.width = "20px", r2.height = "20px", r2.color = "#364249", r2.background = "#CCCCCC", r2.group = this.name, r2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, r2.onIsCheckedChangedObservable.add(function(t4) {
            t4 && e3(o2);
          });
          var n2 = I.AddHeader(r2, t3, "200px", { isHorizontal: true, controlFirst: true });
          n2.height = "30px", n2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, n2.left = "4px", this.groupPanel.addControl(n2), this.selectors.push(n2), r2.isChecked = i2, this.groupPanel.parent && this.groupPanel.parent.parent && (r2.color = this.groupPanel.parent.parent.buttonColor, r2.background = this.groupPanel.parent.parent.buttonBackground);
        }, e2.prototype._setSelectorLabel = function(t3, e3) {
          this.selectors[t3].children[1].text = e3;
        }, e2.prototype._setSelectorLabelColor = function(t3, e3) {
          this.selectors[t3].children[1].color = e3;
        }, e2.prototype._setSelectorButtonColor = function(t3, e3) {
          this.selectors[t3].children[0].color = e3;
        }, e2.prototype._setSelectorButtonBackground = function(t3, e3) {
          this.selectors[t3].children[0].background = e3;
        }, e2;
      }(j), K = function(t2) {
        function e2() {
          return null !== t2 && t2.apply(this, arguments) || this;
        }
        return l(e2, t2), e2.prototype.addSlider = function(t3, e3, i2, o2, r2, n2, a2) {
          void 0 === e3 && (e3 = function(t4) {
          }), void 0 === i2 && (i2 = "Units"), void 0 === o2 && (o2 = 0), void 0 === r2 && (r2 = 0), void 0 === n2 && (n2 = 0), void 0 === a2 && (a2 = function(t4) {
            return 0 | t4;
          });
          var s2 = new U();
          s2.name = i2, s2.value = n2, s2.minimum = o2, s2.maximum = r2, s2.width = 0.9, s2.height = "20px", s2.color = "#364249", s2.background = "#CCCCCC", s2.borderColor = "black", s2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, s2.left = "4px", s2.paddingBottom = "4px", s2.onValueChangedObservable.add(function(t4) {
            s2.parent.children[0].text = s2.parent.children[0].name + ": " + a2(t4) + " " + s2.name, e3(t4);
          });
          var l2 = I.AddHeader(s2, t3 + ": " + a2(n2) + " " + i2, "30px", { isHorizontal: false, controlFirst: false });
          l2.height = "60px", l2.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, l2.left = "4px", l2.children[0].name = t3, this.groupPanel.addControl(l2), this.selectors.push(l2), this.groupPanel.parent && this.groupPanel.parent.parent && (s2.color = this.groupPanel.parent.parent.buttonColor, s2.background = this.groupPanel.parent.parent.buttonBackground);
        }, e2.prototype._setSelectorLabel = function(t3, e3) {
          this.selectors[t3].children[0].name = e3, this.selectors[t3].children[0].text = e3 + ": " + this.selectors[t3].children[1].value + " " + this.selectors[t3].children[1].name;
        }, e2.prototype._setSelectorLabelColor = function(t3, e3) {
          this.selectors[t3].children[0].color = e3;
        }, e2.prototype._setSelectorButtonColor = function(t3, e3) {
          this.selectors[t3].children[1].color = e3;
        }, e2.prototype._setSelectorButtonBackground = function(t3, e3) {
          this.selectors[t3].children[1].background = e3;
        }, e2;
      }(j), Z = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = []);
          var o2 = t2.call(this, e3) || this;
          if (o2.name = e3, o2.groups = i2, o2._buttonColor = "#364249", o2._buttonBackground = "#CCCCCC", o2._headerColor = "black", o2._barColor = "white", o2._barHeight = "2px", o2._spacerHeight = "20px", o2._bars = [], o2._groups = i2, o2.thickness = 2, o2._panel = new w(), o2._panel.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, o2._panel.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, o2._panel.top = 5, o2._panel.left = 5, o2._panel.width = 0.95, i2.length > 0) {
            for (var r2 = 0; r2 < i2.length - 1; r2++) o2._panel.addControl(i2[r2].groupPanel), o2._addSpacer();
            o2._panel.addControl(i2[i2.length - 1].groupPanel);
          }
          return o2.addControl(o2._panel), o2;
        }
        return l(e2, t2), e2.prototype._getTypeName = function() {
          return "SelectionPanel";
        }, Object.defineProperty(e2.prototype, "panel", { get: function() {
          return this._panel;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "headerColor", { get: function() {
          return this._headerColor;
        }, set: function(t3) {
          this._headerColor !== t3 && (this._headerColor = t3, this._setHeaderColor());
        }, enumerable: false, configurable: true }), e2.prototype._setHeaderColor = function() {
          for (var t3 = 0; t3 < this._groups.length; t3++) this._groups[t3].groupPanel.children[0].color = this._headerColor;
        }, Object.defineProperty(e2.prototype, "buttonColor", { get: function() {
          return this._buttonColor;
        }, set: function(t3) {
          this._buttonColor !== t3 && (this._buttonColor = t3, this._setbuttonColor());
        }, enumerable: false, configurable: true }), e2.prototype._setbuttonColor = function() {
          for (var t3 = 0; t3 < this._groups.length; t3++) for (var e3 = 0; e3 < this._groups[t3].selectors.length; e3++) this._groups[t3]._setSelectorButtonColor(e3, this._buttonColor);
        }, Object.defineProperty(e2.prototype, "labelColor", { get: function() {
          return this._labelColor;
        }, set: function(t3) {
          this._labelColor !== t3 && (this._labelColor = t3, this._setLabelColor());
        }, enumerable: false, configurable: true }), e2.prototype._setLabelColor = function() {
          for (var t3 = 0; t3 < this._groups.length; t3++) for (var e3 = 0; e3 < this._groups[t3].selectors.length; e3++) this._groups[t3]._setSelectorLabelColor(e3, this._labelColor);
        }, Object.defineProperty(e2.prototype, "buttonBackground", { get: function() {
          return this._buttonBackground;
        }, set: function(t3) {
          this._buttonBackground !== t3 && (this._buttonBackground = t3, this._setButtonBackground());
        }, enumerable: false, configurable: true }), e2.prototype._setButtonBackground = function() {
          for (var t3 = 0; t3 < this._groups.length; t3++) for (var e3 = 0; e3 < this._groups[t3].selectors.length; e3++) this._groups[t3]._setSelectorButtonBackground(e3, this._buttonBackground);
        }, Object.defineProperty(e2.prototype, "barColor", { get: function() {
          return this._barColor;
        }, set: function(t3) {
          this._barColor !== t3 && (this._barColor = t3, this._setBarColor());
        }, enumerable: false, configurable: true }), e2.prototype._setBarColor = function() {
          for (var t3 = 0; t3 < this._bars.length; t3++) this._bars[t3].children[0].background = this._barColor;
        }, Object.defineProperty(e2.prototype, "barHeight", { get: function() {
          return this._barHeight;
        }, set: function(t3) {
          this._barHeight !== t3 && (this._barHeight = t3, this._setBarHeight());
        }, enumerable: false, configurable: true }), e2.prototype._setBarHeight = function() {
          for (var t3 = 0; t3 < this._bars.length; t3++) this._bars[t3].children[0].height = this._barHeight;
        }, Object.defineProperty(e2.prototype, "spacerHeight", { get: function() {
          return this._spacerHeight;
        }, set: function(t3) {
          this._spacerHeight !== t3 && (this._spacerHeight = t3, this._setSpacerHeight());
        }, enumerable: false, configurable: true }), e2.prototype._setSpacerHeight = function() {
          for (var t3 = 0; t3 < this._bars.length; t3++) this._bars[t3].height = this._spacerHeight;
        }, e2.prototype._addSpacer = function() {
          var t3 = new B();
          t3.width = 1, t3.height = this._spacerHeight, t3.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT;
          var e3 = new T();
          e3.width = 1, e3.height = this._barHeight, e3.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, e3.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, e3.background = this._barColor, e3.color = "transparent", t3.addControl(e3), this._panel.addControl(t3), this._bars.push(t3);
        }, e2.prototype.addGroup = function(t3) {
          this._groups.length > 0 && this._addSpacer(), this._panel.addControl(t3.groupPanel), this._groups.push(t3), t3.groupPanel.children[0].color = this._headerColor;
          for (var e3 = 0; e3 < t3.selectors.length; e3++) t3._setSelectorButtonColor(e3, this._buttonColor), t3._setSelectorButtonBackground(e3, this._buttonBackground);
        }, e2.prototype.removeGroup = function(t3) {
          if (!(t3 < 0 || t3 >= this._groups.length)) {
            var e3 = this._groups[t3];
            this._panel.removeControl(e3.groupPanel), this._groups.splice(t3, 1), t3 < this._bars.length && (this._panel.removeControl(this._bars[t3]), this._bars.splice(t3, 1));
          }
        }, e2.prototype.setHeaderName = function(t3, e3) {
          e3 < 0 || e3 >= this._groups.length || (this._groups[e3].groupPanel.children[0].text = t3);
        }, e2.prototype.relabel = function(t3, e3, i2) {
          if (!(e3 < 0 || e3 >= this._groups.length)) {
            var o2 = this._groups[e3];
            i2 < 0 || i2 >= o2.selectors.length || o2._setSelectorLabel(i2, t3);
          }
        }, e2.prototype.removeFromGroupSelector = function(t3, e3) {
          if (!(t3 < 0 || t3 >= this._groups.length)) {
            var i2 = this._groups[t3];
            e3 < 0 || e3 >= i2.selectors.length || i2.removeSelector(e3);
          }
        }, e2.prototype.addToGroupCheckbox = function(t3, e3, i2, o2) {
          void 0 === i2 && (i2 = function() {
          }), void 0 === o2 && (o2 = false), t3 < 0 || t3 >= this._groups.length || this._groups[t3].addCheckbox(e3, i2, o2);
        }, e2.prototype.addToGroupRadio = function(t3, e3, i2, o2) {
          void 0 === i2 && (i2 = function() {
          }), void 0 === o2 && (o2 = false), t3 < 0 || t3 >= this._groups.length || this._groups[t3].addRadio(e3, i2, o2);
        }, e2.prototype.addToGroupSlider = function(t3, e3, i2, o2, r2, n2, a2, s2) {
          void 0 === i2 && (i2 = function() {
          }), void 0 === o2 && (o2 = "Units"), void 0 === r2 && (r2 = 0), void 0 === n2 && (n2 = 0), void 0 === a2 && (a2 = 0), void 0 === s2 && (s2 = function(t4) {
            return 0 | t4;
          }), t3 < 0 || t3 >= this._groups.length || this._groups[t3].addSlider(e3, i2, o2, r2, n2, a2, s2);
        }, e2;
      }(T), q = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2._freezeControls = false, i2._bucketWidth = 0, i2._bucketHeight = 0, i2._buckets = {}, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "freezeControls", { get: function() {
          return this._freezeControls;
        }, set: function(t3) {
          if (this._freezeControls !== t3) {
            t3 || this._restoreMeasures(), this._freezeControls = false;
            var e3 = this.host.getSize(), i2 = e3.width, o2 = e3.height, r2 = this.host.getContext(), n2 = new v(0, 0, i2, o2);
            this.host._numLayoutCalls = 0, this.host._rootContainer._layout(n2, r2), t3 && (this._updateMeasures(), this._useBuckets() && this._makeBuckets()), this._freezeControls = t3, this.host.markAsDirty();
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "bucketWidth", { get: function() {
          return this._bucketWidth;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "bucketHeight", { get: function() {
          return this._bucketHeight;
        }, enumerable: false, configurable: true }), e2.prototype.setBucketSizes = function(t3, e3) {
          this._bucketWidth = t3, this._bucketHeight = e3, this._useBuckets() ? this._freezeControls && this._makeBuckets() : this._buckets = {};
        }, e2.prototype._useBuckets = function() {
          return this._bucketWidth > 0 && this._bucketHeight > 0;
        }, e2.prototype._makeBuckets = function() {
          this._buckets = {}, this._bucketLen = Math.ceil(this.widthInPixels / this._bucketWidth), this._dispatchInBuckets(this._children), this._oldLeft = null, this._oldTop = null;
        }, e2.prototype._dispatchInBuckets = function(t3) {
          for (var e3 = 0; e3 < t3.length; ++e3) {
            for (var i2 = t3[e3], o2 = Math.max(0, Math.floor((i2._customData._origLeft - this._customData.origLeft) / this._bucketWidth)), r2 = Math.floor((i2._customData._origLeft - this._customData.origLeft + i2._currentMeasure.width - 1) / this._bucketWidth), n2 = Math.floor((i2._customData._origTop - this._customData.origTop + i2._currentMeasure.height - 1) / this._bucketHeight), a2 = Math.max(0, Math.floor((i2._customData._origTop - this._customData.origTop) / this._bucketHeight)); a2 <= n2; ) {
              for (var s2 = o2; s2 <= r2; ++s2) {
                var l2 = a2 * this._bucketLen + s2, _2 = this._buckets[l2];
                _2 || (_2 = [], this._buckets[l2] = _2), _2.push(i2);
              }
              a2++;
            }
            i2 instanceof B && i2._children.length > 0 && this._dispatchInBuckets(i2._children);
          }
        }, e2.prototype._updateMeasures = function() {
          var t3 = 0 | this.leftInPixels, e3 = 0 | this.topInPixels;
          this._measureForChildren.left -= t3, this._measureForChildren.top -= e3, this._currentMeasure.left -= t3, this._currentMeasure.top -= e3, this._customData.origLeftForChildren = this._measureForChildren.left, this._customData.origTopForChildren = this._measureForChildren.top, this._customData.origLeft = this._currentMeasure.left, this._customData.origTop = this._currentMeasure.top, this._updateChildrenMeasures(this._children, t3, e3);
        }, e2.prototype._updateChildrenMeasures = function(t3, e3, i2) {
          for (var o2 = 0; o2 < t3.length; ++o2) {
            var r2 = t3[o2];
            r2._currentMeasure.left -= e3, r2._currentMeasure.top -= i2, r2._customData._origLeft = r2._currentMeasure.left, r2._customData._origTop = r2._currentMeasure.top, r2 instanceof B && r2._children.length > 0 && this._updateChildrenMeasures(r2._children, e3, i2);
          }
        }, e2.prototype._restoreMeasures = function() {
          var t3 = 0 | this.leftInPixels, e3 = 0 | this.topInPixels;
          this._measureForChildren.left = this._customData.origLeftForChildren + t3, this._measureForChildren.top = this._customData.origTopForChildren + e3, this._currentMeasure.left = this._customData.origLeft + t3, this._currentMeasure.top = this._customData.origTop + e3;
        }, e2.prototype._getTypeName = function() {
          return "ScrollViewerWindow";
        }, e2.prototype._additionalProcessing = function(e3, i2) {
          t2.prototype._additionalProcessing.call(this, e3, i2), this._parentMeasure = e3, this._measureForChildren.left = this._currentMeasure.left, this._measureForChildren.top = this._currentMeasure.top, this._measureForChildren.width = e3.width, this._measureForChildren.height = e3.height;
        }, e2.prototype._layout = function(e3, i2) {
          return this._freezeControls ? (this.invalidateRect(), false) : t2.prototype._layout.call(this, e3, i2);
        }, e2.prototype._scrollChildren = function(t3, e3, i2) {
          for (var o2 = 0; o2 < t3.length; ++o2) {
            var r2 = t3[o2];
            r2._currentMeasure.left = r2._customData._origLeft + e3, r2._currentMeasure.top = r2._customData._origTop + i2, r2._isClipped = false, r2 instanceof B && r2._children.length > 0 && this._scrollChildren(r2._children, e3, i2);
          }
        }, e2.prototype._scrollChildrenWithBuckets = function(t3, e3, i2, o2) {
          for (var r2 = Math.max(0, Math.floor(-t3 / this._bucketWidth)), n2 = Math.floor((-t3 + this._parentMeasure.width - 1) / this._bucketWidth), a2 = Math.floor((-e3 + this._parentMeasure.height - 1) / this._bucketHeight), s2 = Math.max(0, Math.floor(-e3 / this._bucketHeight)); s2 <= a2; ) {
            for (var l2 = r2; l2 <= n2; ++l2) {
              var _2 = s2 * this._bucketLen + l2, h2 = this._buckets[_2];
              if (h2) for (var c2 = 0; c2 < h2.length; ++c2) {
                var u2 = h2[c2];
                u2._currentMeasure.left = u2._customData._origLeft + i2, u2._currentMeasure.top = u2._customData._origTop + o2, u2._isClipped = false;
              }
            }
            s2++;
          }
        }, e2.prototype._draw = function(e3, i2) {
          if (this._freezeControls) {
            this._localDraw(e3), this.clipChildren && this._clipForChildren(e3);
            var o2 = 0 | this.leftInPixels, r2 = 0 | this.topInPixels;
            this._useBuckets() && null !== this._oldLeft && null !== this._oldTop ? (this._scrollChildrenWithBuckets(this._oldLeft, this._oldTop, o2, r2), this._scrollChildrenWithBuckets(o2, r2, o2, r2)) : this._scrollChildren(this._children, o2, r2), this._oldLeft = o2, this._oldTop = r2;
            for (var n2 = 0, a2 = this._children; n2 < a2.length; n2++) {
              var s2 = a2[n2];
              s2._intersectsRect(this._parentMeasure) && s2._render(e3, this._parentMeasure);
            }
          } else t2.prototype._draw.call(this, e3, i2);
        }, e2.prototype._postMeasure = function() {
          if (this._freezeControls) t2.prototype._postMeasure.call(this);
          else {
            for (var e3 = this.parentClientWidth, i2 = this.parentClientHeight, o2 = 0, r2 = this.children; o2 < r2.length; o2++) {
              var n2 = r2[o2];
              n2.isVisible && !n2.notRenderable && (n2.horizontalAlignment === I.HORIZONTAL_ALIGNMENT_CENTER && n2._offsetLeft(this._currentMeasure.left - n2._currentMeasure.left), n2.verticalAlignment === I.VERTICAL_ALIGNMENT_CENTER && n2._offsetTop(this._currentMeasure.top - n2._currentMeasure.top), e3 = Math.max(e3, n2._currentMeasure.left - this._currentMeasure.left + n2._currentMeasure.width + n2.paddingRightInPixels), i2 = Math.max(i2, n2._currentMeasure.top - this._currentMeasure.top + n2._currentMeasure.height + n2.paddingBottomInPixels));
            }
            this._currentMeasure.width !== e3 && (this._width.updateInPlace(e3, f.UNITMODE_PIXEL), this._currentMeasure.width = e3, this._rebuildLayout = true, this._isDirty = true), this._currentMeasure.height !== i2 && (this._height.updateInPlace(i2, f.UNITMODE_PIXEL), this._currentMeasure.height = i2, this._rebuildLayout = true, this._isDirty = true), t2.prototype._postMeasure.call(this);
          }
        }, e2;
      }(B), J = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._background = "black", i2._borderColor = "white", i2._tempMeasure = new v(0, 0, 0, 0), i2._invertScrollDirection = false, i2._backgroundGradient = null, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "borderColor", { get: function() {
          return this._borderColor;
        }, set: function(t3) {
          this._borderColor !== t3 && (this._borderColor = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backgroundGradient", { get: function() {
          return this._backgroundGradient;
        }, set: function(t3) {
          this._backgroundGradient !== t3 && (this._backgroundGradient = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "invertScrollDirection", { get: function() {
          return this._invertScrollDirection;
        }, set: function(t3) {
          this._invertScrollDirection = t3;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "Scrollbar";
        }, e2.prototype._getThumbThickness = function() {
          return this._thumbWidth.isPixel ? this._thumbWidth.getValue(this._host) : this._backgroundBoxThickness * this._thumbWidth.getValue(this._host);
        }, e2.prototype._getBackgroundColor = function(t3) {
          return this._backgroundGradient ? this._backgroundGradient.getCanvasGradient(t3) : this._background;
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3), this._prepareRenderingData("rectangle");
          var e3 = this._renderLeft, i2 = this._getThumbPosition();
          t3.fillStyle = this._getBackgroundColor(t3), t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height), t3.fillStyle = this._getColor(t3), this.isVertical ? (this._tempMeasure.left = e3 - this._effectiveBarOffset, this._tempMeasure.top = this._currentMeasure.top + i2, this._tempMeasure.width = this._currentMeasure.width, this._tempMeasure.height = this._effectiveThumbThickness) : (this._tempMeasure.left = this._currentMeasure.left + i2, this._tempMeasure.top = this._currentMeasure.top, this._tempMeasure.width = this._effectiveThumbThickness, this._tempMeasure.height = this._currentMeasure.height), t3.fillRect(this._tempMeasure.left, this._tempMeasure.top, this._tempMeasure.width, this._tempMeasure.height), t3.restore();
        }, e2.prototype._updateValueFromPointer = function(t3, e3) {
          0 != this.rotation && (this._invertTransformMatrix.transformCoordinates(t3, e3, this._transformedPosition), t3 = this._transformedPosition.x, e3 = this._transformedPosition.y);
          var i2 = this._invertScrollDirection ? -1 : 1;
          this._first && (this._first = false, this._originX = t3, this._originY = e3, (t3 < this._tempMeasure.left || t3 > this._tempMeasure.left + this._tempMeasure.width || e3 < this._tempMeasure.top || e3 > this._tempMeasure.top + this._tempMeasure.height) && (this.isVertical ? this.value = this.minimum + (1 - (e3 - this._currentMeasure.top) / this._currentMeasure.height) * (this.maximum - this.minimum) : this.value = this.minimum + (t3 - this._currentMeasure.left) / this._currentMeasure.width * (this.maximum - this.minimum)));
          var o2;
          o2 = this.isVertical ? -(e3 - this._originY) / (this._currentMeasure.height - this._effectiveThumbThickness) : (t3 - this._originX) / (this._currentMeasure.width - this._effectiveThumbThickness), this.value += i2 * o2 * (this.maximum - this.minimum), this._originX = t3, this._originY = e3;
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return this._first = true, t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2);
        }, e2.prototype.serialize = function(e3) {
          t2.prototype.serialize.call(this, e3), this.backgroundGradient && (e3.backgroundGradient = {}, this.backgroundGradient.serialize(e3.backgroundGradient));
        }, e2.prototype._parseFromContent = function(e3, i2) {
          if (t2.prototype._parseFromContent.call(this, e3, i2), e3.backgroundGradient) {
            var o2 = d.Tools.Instantiate("BABYLON.GUI." + e3.backgroundGradient.className);
            this.backgroundGradient = new o2(), this.backgroundGradient.parse(e3.backgroundGradient);
          }
        }, h([(0, d.serialize)()], e2.prototype, "borderColor", null), h([(0, d.serialize)()], e2.prototype, "background", null), h([(0, d.serialize)()], e2.prototype, "invertScrollDirection", null), e2;
      }(G);
      (0, d.RegisterClass)("BABYLON.GUI.Scrollbar", J);
      var $ = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._thumbLength = 0.5, i2._thumbHeight = 1, i2._barImageHeight = 1, i2._tempMeasure = new v(0, 0, 0, 0), i2._invertScrollDirection = false, i2.num90RotationInVerticalMode = 1, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "invertScrollDirection", { get: function() {
          return this._invertScrollDirection;
        }, set: function(t3) {
          this._invertScrollDirection = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backgroundImage", { get: function() {
          return this._backgroundBaseImage;
        }, set: function(t3) {
          var e3 = this;
          this._backgroundBaseImage !== t3 && (this._backgroundBaseImage = t3, this.isVertical && 0 !== this.num90RotationInVerticalMode ? t3.isLoaded ? (this._backgroundImage = t3._rotate90(this.num90RotationInVerticalMode, true), this._markAsDirty()) : t3.onImageLoadedObservable.addOnce(function() {
            var i2 = t3._rotate90(e3.num90RotationInVerticalMode, true);
            e3._backgroundImage = i2, i2.isLoaded || i2.onImageLoadedObservable.addOnce(function() {
              e3._markAsDirty();
            }), e3._markAsDirty();
          }) : (this._backgroundImage = t3, t3 && !t3.isLoaded && t3.onImageLoadedObservable.addOnce(function() {
            e3._markAsDirty();
          }), this._markAsDirty()));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbImage", { get: function() {
          return this._thumbBaseImage;
        }, set: function(t3) {
          var e3 = this;
          this._thumbBaseImage !== t3 && (this._thumbBaseImage = t3, this.isVertical && 0 !== this.num90RotationInVerticalMode ? t3.isLoaded ? (this._thumbImage = t3._rotate90(-this.num90RotationInVerticalMode, true), this._markAsDirty()) : t3.onImageLoadedObservable.addOnce(function() {
            var i2 = t3._rotate90(-e3.num90RotationInVerticalMode, true);
            e3._thumbImage = i2, i2.isLoaded || i2.onImageLoadedObservable.addOnce(function() {
              e3._markAsDirty();
            }), e3._markAsDirty();
          }) : (this._thumbImage = t3, t3 && !t3.isLoaded && t3.onImageLoadedObservable.addOnce(function() {
            e3._markAsDirty();
          }), this._markAsDirty()));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbLength", { get: function() {
          return this._thumbLength;
        }, set: function(t3) {
          this._thumbLength !== t3 && (this._thumbLength = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbHeight", { get: function() {
          return this._thumbHeight;
        }, set: function(t3) {
          this._thumbLength !== t3 && (this._thumbHeight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barImageHeight", { get: function() {
          return this._barImageHeight;
        }, set: function(t3) {
          this._barImageHeight !== t3 && (this._barImageHeight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "ImageScrollBar";
        }, e2.prototype._getThumbThickness = function() {
          return this._thumbWidth.isPixel ? this._thumbWidth.getValue(this._host) : this._backgroundBoxThickness * this._thumbWidth.getValue(this._host);
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3), this._prepareRenderingData("rectangle");
          var e3 = this._getThumbPosition(), i2 = this._renderLeft, o2 = this._renderTop, r2 = this._renderWidth, n2 = this._renderHeight;
          this._backgroundImage && (this._tempMeasure.copyFromFloats(i2, o2, r2, n2), this.isVertical ? (this._tempMeasure.copyFromFloats(i2 + r2 * (1 - this._barImageHeight) * 0.5, this._currentMeasure.top, r2 * this._barImageHeight, n2), this._tempMeasure.height += this._effectiveThumbThickness, this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure)) : (this._tempMeasure.copyFromFloats(this._currentMeasure.left, o2 + n2 * (1 - this._barImageHeight) * 0.5, r2, n2 * this._barImageHeight), this._tempMeasure.width += this._effectiveThumbThickness, this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure)), this._backgroundImage._draw(t3)), this.isVertical ? this._tempMeasure.copyFromFloats(i2 - this._effectiveBarOffset + this._currentMeasure.width * (1 - this._thumbHeight) * 0.5, this._currentMeasure.top + e3, this._currentMeasure.width * this._thumbHeight, this._effectiveThumbThickness) : this._tempMeasure.copyFromFloats(this._currentMeasure.left + e3, this._currentMeasure.top + this._currentMeasure.height * (1 - this._thumbHeight) * 0.5, this._effectiveThumbThickness, this._currentMeasure.height * this._thumbHeight), this._thumbImage && (this._thumbImage._currentMeasure.copyFrom(this._tempMeasure), this._thumbImage._draw(t3)), t3.restore();
        }, e2.prototype._updateValueFromPointer = function(t3, e3) {
          0 != this.rotation && (this._invertTransformMatrix.transformCoordinates(t3, e3, this._transformedPosition), t3 = this._transformedPosition.x, e3 = this._transformedPosition.y);
          var i2 = this._invertScrollDirection ? -1 : 1;
          this._first && (this._first = false, this._originX = t3, this._originY = e3, (t3 < this._tempMeasure.left || t3 > this._tempMeasure.left + this._tempMeasure.width || e3 < this._tempMeasure.top || e3 > this._tempMeasure.top + this._tempMeasure.height) && (this.isVertical ? this.value = this.minimum + (1 - (e3 - this._currentMeasure.top) / this._currentMeasure.height) * (this.maximum - this.minimum) : this.value = this.minimum + (t3 - this._currentMeasure.left) / this._currentMeasure.width * (this.maximum - this.minimum)));
          var o2;
          o2 = this.isVertical ? -(e3 - this._originY) / (this._currentMeasure.height - this._effectiveThumbThickness) : (t3 - this._originX) / (this._currentMeasure.width - this._effectiveThumbThickness), this.value += i2 * o2 * (this.maximum - this.minimum), this._originX = t3, this._originY = e3;
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return this._first = true, t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2);
        }, h([(0, d.serialize)()], e2.prototype, "num90RotationInVerticalMode", void 0), h([(0, d.serialize)()], e2.prototype, "invertScrollDirection", null), e2;
      }(G), tt = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3) || this;
          return o2._barSize = 20, o2._pointerIsOver = false, o2._wheelPrecision = 0.05, o2._thumbLength = 0.5, o2._thumbHeight = 1, o2._barImageHeight = 1, o2._horizontalBarImageHeight = 1, o2._verticalBarImageHeight = 1, o2._oldWindowContentsWidth = 0, o2._oldWindowContentsHeight = 0, o2._forceHorizontalBar = false, o2._forceVerticalBar = false, o2._useImageBar = i2 || false, o2.onDirtyObservable.add(function() {
            o2._horizontalBarSpace.color = o2.color, o2._verticalBarSpace.color = o2.color, o2._dragSpace.color = o2.color;
          }), o2.onPointerEnterObservable.add(function() {
            o2._pointerIsOver = true;
          }), o2.onPointerOutObservable.add(function() {
            o2._pointerIsOver = false;
          }), o2._grid = new D(), o2._useImageBar ? (o2._horizontalBar = new $(), o2._verticalBar = new $()) : (o2._horizontalBar = new J(), o2._verticalBar = new J()), o2._window = new q("scrollViewer_window"), o2._window.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, o2._window.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, o2._grid.addColumnDefinition(1), o2._grid.addColumnDefinition(0, true), o2._grid.addRowDefinition(1), o2._grid.addRowDefinition(0, true), t2.prototype.addControl.call(o2, o2._grid), o2._grid.addControl(o2._window, 0, 0), o2._verticalBarSpace = new T(), o2._verticalBarSpace.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, o2._verticalBarSpace.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, o2._verticalBarSpace.thickness = 1, o2._grid.addControl(o2._verticalBarSpace, 0, 1), o2._addBar(o2._verticalBar, o2._verticalBarSpace, true, Math.PI), o2._horizontalBarSpace = new T(), o2._horizontalBarSpace.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, o2._horizontalBarSpace.verticalAlignment = I.VERTICAL_ALIGNMENT_TOP, o2._horizontalBarSpace.thickness = 1, o2._grid.addControl(o2._horizontalBarSpace, 1, 0), o2._addBar(o2._horizontalBar, o2._horizontalBarSpace, false, 0), o2._dragSpace = new T(), o2._dragSpace.thickness = 1, o2._grid.addControl(o2._dragSpace, 1, 1), o2._grid.clipChildren = false, o2._useImageBar || (o2.barColor = "grey", o2.barBackground = "transparent"), o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "horizontalBar", { get: function() {
          return this._horizontalBar;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "verticalBar", { get: function() {
          return this._verticalBar;
        }, enumerable: false, configurable: true }), e2.prototype.addControl = function(t3) {
          return t3 ? (this._window.addControl(t3), this) : this;
        }, e2.prototype.removeControl = function(t3) {
          return this._window.removeControl(t3), this;
        }, Object.defineProperty(e2.prototype, "children", { get: function() {
          return this._window.children;
        }, enumerable: false, configurable: true }), e2.prototype._flagDescendantsAsMatrixDirty = function() {
          for (var t3 = 0, e3 = this._children; t3 < e3.length; t3++) e3[t3]._markMatrixAsDirty();
        }, Object.defineProperty(e2.prototype, "freezeControls", { get: function() {
          return this._window.freezeControls;
        }, set: function(t3) {
          this._window.freezeControls = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "bucketWidth", { get: function() {
          return this._window.bucketWidth;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "bucketHeight", { get: function() {
          return this._window.bucketHeight;
        }, enumerable: false, configurable: true }), e2.prototype.setBucketSizes = function(t3, e3) {
          this._window.setBucketSizes(t3, e3);
        }, Object.defineProperty(e2.prototype, "forceHorizontalBar", { get: function() {
          return this._forceHorizontalBar;
        }, set: function(t3) {
          this._grid.setRowDefinition(1, t3 ? this._barSize : 0, true), this._horizontalBar.isVisible = t3, this._forceHorizontalBar = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "forceVerticalBar", { get: function() {
          return this._forceVerticalBar;
        }, set: function(t3) {
          this._grid.setColumnDefinition(1, t3 ? this._barSize : 0, true), this._verticalBar.isVisible = t3, this._forceVerticalBar = t3;
        }, enumerable: false, configurable: true }), e2.prototype.resetWindow = function() {
          this._window.width = "100%", this._window.height = "100%";
        }, e2.prototype._getTypeName = function() {
          return "ScrollViewer";
        }, e2.prototype._buildClientSizes = function() {
          var t3 = this.host.idealRatio;
          this._window.parentClientWidth = this._currentMeasure.width - (this._verticalBar.isVisible || this.forceVerticalBar ? this._barSize * t3 : 0) - 2 * this.thickness, this._window.parentClientHeight = this._currentMeasure.height - (this._horizontalBar.isVisible || this.forceHorizontalBar ? this._barSize * t3 : 0) - 2 * this.thickness, this._clientWidth = this._window.parentClientWidth, this._clientHeight = this._window.parentClientHeight;
        }, e2.prototype._additionalProcessing = function(e3, i2) {
          t2.prototype._additionalProcessing.call(this, e3, i2), this._buildClientSizes();
        }, e2.prototype._postMeasure = function() {
          t2.prototype._postMeasure.call(this), this._updateScroller(), this._setWindowPosition(false);
        }, Object.defineProperty(e2.prototype, "wheelPrecision", { get: function() {
          return this._wheelPrecision;
        }, set: function(t3) {
          this._wheelPrecision !== t3 && (t3 < 0 && (t3 = 0), t3 > 1 && (t3 = 1), this._wheelPrecision = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "scrollBackground", { get: function() {
          return this._horizontalBarSpace.background;
        }, set: function(t3) {
          this._horizontalBarSpace.background !== t3 && (this._horizontalBarSpace.background = t3, this._verticalBarSpace.background = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barColor", { get: function() {
          return this._barColor;
        }, set: function(t3) {
          this._barColor !== t3 && (this._barColor = t3, this._horizontalBar.color = t3, this._verticalBar.color = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbImage", { get: function() {
          return this._barImage;
        }, set: function(t3) {
          if (this._barImage !== t3) {
            this._barImage = t3;
            var e3 = this._horizontalBar, i2 = this._verticalBar;
            e3.thumbImage = t3, i2.thumbImage = t3;
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "horizontalThumbImage", { get: function() {
          return this._horizontalBarImage;
        }, set: function(t3) {
          this._horizontalBarImage !== t3 && (this._horizontalBarImage = t3, this._horizontalBar.thumbImage = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "verticalThumbImage", { get: function() {
          return this._verticalBarImage;
        }, set: function(t3) {
          this._verticalBarImage !== t3 && (this._verticalBarImage = t3, this._verticalBar.thumbImage = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barSize", { get: function() {
          return this._barSize;
        }, set: function(t3) {
          this._barSize !== t3 && (this._barSize = t3, this._markAsDirty(), this._horizontalBar.isVisible && this._grid.setRowDefinition(1, this._barSize, true), this._verticalBar.isVisible && this._grid.setColumnDefinition(1, this._barSize, true));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbLength", { get: function() {
          return this._thumbLength;
        }, set: function(t3) {
          if (this._thumbLength !== t3) {
            t3 <= 0 && (t3 = 0.1), t3 > 1 && (t3 = 1), this._thumbLength = t3;
            var e3 = this._horizontalBar, i2 = this._verticalBar;
            e3.thumbLength = t3, i2.thumbLength = t3, this._markAsDirty();
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbHeight", { get: function() {
          return this._thumbHeight;
        }, set: function(t3) {
          if (this._thumbHeight !== t3) {
            t3 <= 0 && (t3 = 0.1), t3 > 1 && (t3 = 1), this._thumbHeight = t3;
            var e3 = this._horizontalBar, i2 = this._verticalBar;
            e3.thumbHeight = t3, i2.thumbHeight = t3, this._markAsDirty();
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barImageHeight", { get: function() {
          return this._barImageHeight;
        }, set: function(t3) {
          if (this._barImageHeight !== t3) {
            t3 <= 0 && (t3 = 0.1), t3 > 1 && (t3 = 1), this._barImageHeight = t3;
            var e3 = this._horizontalBar, i2 = this._verticalBar;
            e3.barImageHeight = t3, i2.barImageHeight = t3, this._markAsDirty();
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "horizontalBarImageHeight", { get: function() {
          return this._horizontalBarImageHeight;
        }, set: function(t3) {
          this._horizontalBarImageHeight !== t3 && (t3 <= 0 && (t3 = 0.1), t3 > 1 && (t3 = 1), this._horizontalBarImageHeight = t3, this._horizontalBar.barImageHeight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "verticalBarImageHeight", { get: function() {
          return this._verticalBarImageHeight;
        }, set: function(t3) {
          this._verticalBarImageHeight !== t3 && (t3 <= 0 && (t3 = 0.1), t3 > 1 && (t3 = 1), this._verticalBarImageHeight = t3, this._verticalBar.barImageHeight = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barBackground", { get: function() {
          return this._barBackground;
        }, set: function(t3) {
          if (this._barBackground !== t3) {
            this._barBackground = t3;
            var e3 = this._horizontalBar, i2 = this._verticalBar;
            e3.background = t3, i2.background = t3, this._dragSpace.background = t3;
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "barImage", { get: function() {
          return this._barBackgroundImage;
        }, set: function(t3) {
          this._barBackgroundImage = t3;
          var e3 = this._horizontalBar, i2 = this._verticalBar;
          e3.backgroundImage = t3, i2.backgroundImage = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "horizontalBarImage", { get: function() {
          return this._horizontalBarBackgroundImage;
        }, set: function(t3) {
          this._horizontalBarBackgroundImage = t3, this._horizontalBar.backgroundImage = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "verticalBarImage", { get: function() {
          return this._verticalBarBackgroundImage;
        }, set: function(t3) {
          this._verticalBarBackgroundImage = t3, this._verticalBar.backgroundImage = t3;
        }, enumerable: false, configurable: true }), e2.prototype._setWindowPosition = function(t3) {
          void 0 === t3 && (t3 = true);
          var e3 = this.host.idealRatio, i2 = this._window._currentMeasure.width, o2 = this._window._currentMeasure.height;
          if (t3 || this._oldWindowContentsWidth !== i2 || this._oldWindowContentsHeight !== o2) {
            this._oldWindowContentsWidth = i2, this._oldWindowContentsHeight = o2;
            var r2 = this._clientWidth - i2, n2 = this._clientHeight - o2, a2 = this._horizontalBar.value / e3 * r2 + "px", s2 = this._verticalBar.value / e3 * n2 + "px";
            a2 !== this._window.left && (this._window.left = a2, this.freezeControls || (this._rebuildLayout = true)), s2 !== this._window.top && (this._window.top = s2, this.freezeControls || (this._rebuildLayout = true));
          }
        }, e2.prototype._updateScroller = function() {
          var t3 = this._window._currentMeasure.width, e3 = this._window._currentMeasure.height;
          this._horizontalBar.isVisible && t3 <= this._clientWidth && !this.forceHorizontalBar ? (this._grid.setRowDefinition(1, 0, true), this._horizontalBar.isVisible = false, this._horizontalBar.value = 0, this._rebuildLayout = true) : !this._horizontalBar.isVisible && (t3 > this._clientWidth || this.forceHorizontalBar) && (this._grid.setRowDefinition(1, this._barSize, true), this._horizontalBar.isVisible = true, this._rebuildLayout = true), this._verticalBar.isVisible && e3 <= this._clientHeight && !this.forceVerticalBar ? (this._grid.setColumnDefinition(1, 0, true), this._verticalBar.isVisible = false, this._verticalBar.value = 0, this._rebuildLayout = true) : !this._verticalBar.isVisible && (e3 > this._clientHeight || this.forceVerticalBar) && (this._grid.setColumnDefinition(1, this._barSize, true), this._verticalBar.isVisible = true, this._rebuildLayout = true), this._buildClientSizes();
          var i2 = this.host.idealRatio;
          this._horizontalBar.thumbWidth = 0.9 * this._thumbLength * (this._clientWidth / i2) + "px", this._verticalBar.thumbWidth = 0.9 * this._thumbLength * (this._clientHeight / i2) + "px";
        }, e2.prototype._link = function(e3) {
          t2.prototype._link.call(this, e3), this._attachWheel();
        }, e2.prototype._addBar = function(t3, e3, i2, o2) {
          var r2 = this;
          t3.paddingLeft = 0, t3.width = "100%", t3.height = "100%", t3.barOffset = 0, t3.value = 0, t3.maximum = 1, t3.horizontalAlignment = I.HORIZONTAL_ALIGNMENT_CENTER, t3.verticalAlignment = I.VERTICAL_ALIGNMENT_CENTER, t3.isVertical = i2, t3.rotation = o2, t3.isVisible = false, e3.addControl(t3), t3.onValueChangedObservable.add(function() {
            r2._setWindowPosition();
          });
        }, e2.prototype._attachWheel = function() {
          var t3 = this;
          this._host && !this._onWheelObserver && (this._onWheelObserver = this.onWheelObservable.add(function(e3) {
            t3._pointerIsOver && !t3.isReadOnly && (1 == t3._verticalBar.isVisible && (e3.y < 0 && t3._verticalBar.value > 0 ? t3._verticalBar.value -= t3._wheelPrecision : e3.y > 0 && t3._verticalBar.value < t3._verticalBar.maximum && (t3._verticalBar.value += t3._wheelPrecision)), 1 == t3._horizontalBar.isVisible && (e3.x < 0 && t3._horizontalBar.value < t3._horizontalBar.maximum ? t3._horizontalBar.value += t3._wheelPrecision : e3.x > 0 && t3._horizontalBar.value > 0 && (t3._horizontalBar.value -= t3._wheelPrecision)));
          }));
        }, e2.prototype._renderHighlightSpecific = function(e3) {
          this.isHighlighted && (t2.prototype._renderHighlightSpecific.call(this, e3), this._grid._renderHighlightSpecific(e3), e3.restore());
        }, e2.prototype.dispose = function() {
          this.onWheelObservable.remove(this._onWheelObserver), this._onWheelObserver = null, t2.prototype.dispose.call(this);
        }, h([(0, d.serialize)()], e2.prototype, "wheelPrecision", null), h([(0, d.serialize)()], e2.prototype, "scrollBackground", null), h([(0, d.serialize)()], e2.prototype, "barColor", null), h([(0, d.serialize)()], e2.prototype, "barSize", null), h([(0, d.serialize)()], e2.prototype, "barBackground", null), e2;
      }(T);
      (0, d.RegisterClass)("BABYLON.GUI.ScrollViewer", tt);
      var et = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3) || this;
          o2.name = e3, o2.onIsActiveChangedObservable = new d.Observable(), o2.delegatePickingToChildren = false, o2._isActive = false, o2.group = null != i2 ? i2 : "", o2.thickness = 0, o2.isPointerBlocker = true;
          var r2 = null;
          return o2.toActiveAnimation = function() {
            o2.thickness = 1;
          }, o2.toInactiveAnimation = function() {
            o2.thickness = 0;
          }, o2.pointerEnterActiveAnimation = function() {
            r2 = o2.alpha, o2.alpha -= 0.1;
          }, o2.pointerOutActiveAnimation = function() {
            null !== r2 && (o2.alpha = r2);
          }, o2.pointerDownActiveAnimation = function() {
            o2.scaleX -= 0.05, o2.scaleY -= 0.05;
          }, o2.pointerUpActiveAnimation = function() {
            o2.scaleX += 0.05, o2.scaleY += 0.05;
          }, o2.pointerEnterInactiveAnimation = function() {
            r2 = o2.alpha, o2.alpha -= 0.1;
          }, o2.pointerOutInactiveAnimation = function() {
            null !== r2 && (o2.alpha = r2);
          }, o2.pointerDownInactiveAnimation = function() {
            o2.scaleX -= 0.05, o2.scaleY -= 0.05;
          }, o2.pointerUpInactiveAnimation = function() {
            o2.scaleX += 0.05, o2.scaleY += 0.05;
          }, o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "group", { get: function() {
          return this._group;
        }, set: function(t3) {
          this._group !== t3 && (this._group = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isActive", { get: function() {
          return this._isActive;
        }, set: function(t3) {
          var e3, i2, o2 = this;
          this._isActive !== t3 && (this._isActive = t3, this._isActive ? null === (e3 = this.toActiveAnimation) || void 0 === e3 || e3.call(this) : null === (i2 = this.toInactiveAnimation) || void 0 === i2 || i2.call(this), this._markAsDirty(), this.onIsActiveChangedObservable.notifyObservers(t3), this._isActive && this._host && this._group && this._host.executeOnAllControls(function(t4) {
            if ("ToggleButton" === t4.typeName) {
              if (t4 === o2) return;
              var e4 = t4;
              e4.group === o2.group && (e4.isActive = false);
            }
          }));
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "ToggleButton";
        }, e2.prototype._processPicking = function(e3, i2, o2, r2, n2, a2, s2, l2) {
          if (!this._isEnabled || !this.isHitTestVisible || !this.isVisible || this.notRenderable) return false;
          if (!t2.prototype.contains.call(this, e3, i2)) return false;
          if (this.delegatePickingToChildren) {
            for (var _2 = false, h2 = this._children.length - 1; h2 >= 0; h2--) {
              var c2 = this._children[h2];
              if (c2.isEnabled && c2.isHitTestVisible && c2.isVisible && !c2.notRenderable && c2.contains(e3, i2)) {
                _2 = true;
                break;
              }
            }
            if (!_2) return false;
          }
          return this._processObservables(r2, e3, i2, o2, n2, a2, s2, l2), true;
        }, e2.prototype._onPointerEnter = function(e3, i2) {
          return !!t2.prototype._onPointerEnter.call(this, e3, i2) && (this.isReadOnly || (this._isActive ? this.pointerEnterActiveAnimation && this.pointerEnterActiveAnimation() : this.pointerEnterInactiveAnimation && this.pointerEnterInactiveAnimation()), true);
        }, e2.prototype._onPointerOut = function(e3, i2, o2) {
          void 0 === o2 && (o2 = false), this.isReadOnly || (this._isActive ? this.pointerOutActiveAnimation && this.pointerOutActiveAnimation() : this.pointerOutInactiveAnimation && this.pointerOutInactiveAnimation()), t2.prototype._onPointerOut.call(this, e3, i2, o2);
        }, e2.prototype._onPointerDown = function(e3, i2, o2, r2, n2) {
          return !!t2.prototype._onPointerDown.call(this, e3, i2, o2, r2, n2) && (this.isReadOnly || (this._isActive ? this.pointerDownActiveAnimation && this.pointerDownActiveAnimation() : this.pointerDownInactiveAnimation && this.pointerDownInactiveAnimation()), true);
        }, e2.prototype._onPointerUp = function(e3, i2, o2, r2, n2, a2) {
          this.isReadOnly || (this._isActive ? this.pointerUpActiveAnimation && this.pointerUpActiveAnimation() : this.pointerUpInactiveAnimation && this.pointerUpInactiveAnimation()), t2.prototype._onPointerUp.call(this, e3, i2, o2, r2, n2, a2);
        }, e2;
      }(T);
      (0, d.RegisterClass)("BABYLON.GUI.ToggleButton", et);
      var it = function() {
      }, ot = function(t2) {
        function e2() {
          var e3 = null !== t2 && t2.apply(this, arguments) || this;
          return e3.onKeyPressObservable = new d.Observable(), e3.defaultButtonWidth = "40px", e3.defaultButtonHeight = "40px", e3.defaultButtonPaddingLeft = "2px", e3.defaultButtonPaddingRight = "2px", e3.defaultButtonPaddingTop = "2px", e3.defaultButtonPaddingBottom = "2px", e3.defaultButtonColor = "#DDD", e3.defaultButtonBackground = "#070707", e3.shiftButtonColor = "#7799FF", e3.selectedShiftThickness = 1, e3.shiftState = 0, e3._currentlyConnectedInputText = null, e3._connectedInputTexts = [], e3._onKeyPressObserver = null, e3;
        }
        return l(e2, t2), e2.prototype._getTypeName = function() {
          return "VirtualKeyboard";
        }, e2.prototype._createKey = function(t3, e3) {
          var i2 = this, o2 = R.CreateSimpleButton(t3, t3);
          return o2.width = e3 && e3.width ? e3.width : this.defaultButtonWidth, o2.height = e3 && e3.height ? e3.height : this.defaultButtonHeight, o2.color = e3 && e3.color ? e3.color : this.defaultButtonColor, o2.background = e3 && e3.background ? e3.background : this.defaultButtonBackground, o2.paddingLeft = e3 && e3.paddingLeft ? e3.paddingLeft : this.defaultButtonPaddingLeft, o2.paddingRight = e3 && e3.paddingRight ? e3.paddingRight : this.defaultButtonPaddingRight, o2.paddingTop = e3 && e3.paddingTop ? e3.paddingTop : this.defaultButtonPaddingTop, o2.paddingBottom = e3 && e3.paddingBottom ? e3.paddingBottom : this.defaultButtonPaddingBottom, o2.thickness = 0, o2.isFocusInvisible = true, o2.shadowColor = this.shadowColor, o2.shadowBlur = this.shadowBlur, o2.shadowOffsetX = this.shadowOffsetX, o2.shadowOffsetY = this.shadowOffsetY, o2.onPointerUpObservable.add(function() {
            i2.onKeyPressObservable.notifyObservers(t3);
          }), o2;
        }, e2.prototype.addKeysRow = function(t3, e3) {
          var i2 = new w();
          i2.isVertical = false, i2.isFocusInvisible = true;
          for (var o2 = null, r2 = 0; r2 < t3.length; r2++) {
            var n2 = null;
            e3 && e3.length === t3.length && (n2 = e3[r2]);
            var a2 = this._createKey(t3[r2], n2);
            (!o2 || a2.heightInPixels > o2.heightInPixels) && (o2 = a2), i2.addControl(a2);
          }
          i2.height = o2 ? o2.height : this.defaultButtonHeight, this.addControl(i2);
        }, e2.prototype.applyShiftState = function(t3) {
          if (this.children) for (var e3 = 0; e3 < this.children.length; e3++) {
            var i2 = this.children[e3];
            if (i2 && i2.children) for (var o2 = i2, r2 = 0; r2 < o2.children.length; r2++) {
              var n2 = o2.children[r2];
              if (n2 && n2.children[0]) {
                var a2 = n2.children[0];
                "⇧" === a2.text && (n2.color = t3 ? this.shiftButtonColor : this.defaultButtonColor, n2.thickness = t3 > 1 ? this.selectedShiftThickness : 0), a2.text = t3 > 0 ? a2.text.toUpperCase() : a2.text.toLowerCase();
              }
            }
          }
        }, Object.defineProperty(e2.prototype, "connectedInputText", { get: function() {
          return this._currentlyConnectedInputText;
        }, enumerable: false, configurable: true }), e2.prototype.connect = function(t3) {
          var e3 = this;
          if (!this._connectedInputTexts.some(function(e4) {
            return e4.input === t3;
          })) {
            null === this._onKeyPressObserver && (this._onKeyPressObserver = this.onKeyPressObservable.add(function(t4) {
              if (e3._currentlyConnectedInputText) {
                switch (e3._currentlyConnectedInputText._host.focusedControl = e3._currentlyConnectedInputText, t4) {
                  case "⇧":
                    return e3.shiftState++, e3.shiftState > 2 && (e3.shiftState = 0), void e3.applyShiftState(e3.shiftState);
                  case "←":
                    return void (e3._currentlyConnectedInputText instanceof A ? e3._currentlyConnectedInputText.alternativeProcessKey("Backspace") : e3._currentlyConnectedInputText.processKey(8));
                  case "↵":
                    return void (e3._currentlyConnectedInputText instanceof A ? e3._currentlyConnectedInputText.alternativeProcessKey("Enter") : e3._currentlyConnectedInputText.processKey(13));
                }
                e3._currentlyConnectedInputText instanceof A ? e3._currentlyConnectedInputText.alternativeProcessKey("", e3.shiftState ? t4.toUpperCase() : t4) : e3._currentlyConnectedInputText.processKey(-1, e3.shiftState ? t4.toUpperCase() : t4), 1 === e3.shiftState && (e3.shiftState = 0, e3.applyShiftState(e3.shiftState));
              }
            })), this.isVisible = false, this._currentlyConnectedInputText = t3, t3._connectedVirtualKeyboard = this;
            var i2 = t3.onFocusObservable.add(function() {
              e3._currentlyConnectedInputText = t3, t3._connectedVirtualKeyboard = e3, e3.isVisible = true;
            }), o2 = t3.onBlurObservable.add(function() {
              t3._connectedVirtualKeyboard = null, e3._currentlyConnectedInputText = null, e3.isVisible = false;
            });
            this._connectedInputTexts.push({ input: t3, onBlurObserver: o2, onFocusObserver: i2 });
          }
        }, e2.prototype.disconnect = function(t3) {
          if (t3) {
            var e3 = this._connectedInputTexts.filter(function(e4) {
              return e4.input === t3;
            });
            1 === e3.length && (this._removeConnectedInputObservables(e3[0]), this._connectedInputTexts = this._connectedInputTexts.filter(function(e4) {
              return e4.input !== t3;
            }), this._currentlyConnectedInputText === t3 && (this._currentlyConnectedInputText = null));
          } else {
            for (var i2 = 0, o2 = this._connectedInputTexts; i2 < o2.length; i2++) {
              var r2 = o2[i2];
              this._removeConnectedInputObservables(r2);
            }
            this._connectedInputTexts.length = 0;
          }
          0 === this._connectedInputTexts.length && (this._currentlyConnectedInputText = null, this.onKeyPressObservable.remove(this._onKeyPressObserver), this._onKeyPressObserver = null);
        }, e2.prototype._removeConnectedInputObservables = function(t3) {
          t3.input._connectedVirtualKeyboard = null, t3.input.onFocusObservable.remove(t3.onFocusObserver), t3.input.onBlurObservable.remove(t3.onBlurObserver);
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this.disconnect();
        }, e2.CreateDefaultLayout = function(t3) {
          var i2 = new e2(t3);
          return i2.addKeysRow(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "←"]), i2.addKeysRow(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]), i2.addKeysRow(["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "↵"]), i2.addKeysRow(["⇧", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]), i2.addKeysRow([" "], [{ width: "200px" }]), i2;
        }, e2.prototype._parseFromContent = function(e3, i2) {
          var o2 = this;
          t2.prototype._parseFromContent.call(this, e3, i2);
          for (var r2 = 0, n2 = this.children; r2 < n2.length; r2++) {
            var a2 = n2[r2];
            if ("StackPanel" === a2.getClassName()) for (var s2 = function(t3) {
              "Button" === t3.getClassName() && t3.name && t3.onPointerUpObservable.add(function() {
                o2.onKeyPressObservable.notifyObservers(t3.name);
              });
            }, l2 = 0, _2 = a2.children; l2 < _2.length; l2++) s2(_2[l2]);
          }
        }, e2;
      }(w);
      (0, d.RegisterClass)("BABYLON.GUI.VirtualKeyboard", ot);
      var rt = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._cellWidth = 20, i2._cellHeight = 20, i2._minorLineTickness = 1, i2._minorLineColor = "DarkGray", i2._majorLineTickness = 2, i2._majorLineColor = "White", i2._majorLineFrequency = 5, i2._background = "Black", i2._displayMajorLines = true, i2._displayMinorLines = true, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "displayMinorLines", { get: function() {
          return this._displayMinorLines;
        }, set: function(t3) {
          this._displayMinorLines !== t3 && (this._displayMinorLines = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "displayMajorLines", { get: function() {
          return this._displayMajorLines;
        }, set: function(t3) {
          this._displayMajorLines !== t3 && (this._displayMajorLines = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cellWidth", { get: function() {
          return this._cellWidth;
        }, set: function(t3) {
          this._cellWidth = t3, this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "cellHeight", { get: function() {
          return this._cellHeight;
        }, set: function(t3) {
          this._cellHeight = t3, this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "minorLineTickness", { get: function() {
          return this._minorLineTickness;
        }, set: function(t3) {
          this._minorLineTickness = t3, this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "minorLineColor", { get: function() {
          return this._minorLineColor;
        }, set: function(t3) {
          this._minorLineColor = t3, this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "majorLineTickness", { get: function() {
          return this._majorLineTickness;
        }, set: function(t3) {
          this._majorLineTickness = t3, this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "majorLineColor", { get: function() {
          return this._majorLineColor;
        }, set: function(t3) {
          this._majorLineColor = t3, this._markAsDirty();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "majorLineFrequency", { get: function() {
          return this._majorLineFrequency;
        }, set: function(t3) {
          this._majorLineFrequency = t3, this._markAsDirty();
        }, enumerable: false, configurable: true }), e2.prototype._draw = function(t3) {
          if (t3.save(), this._applyStates(t3), this._isEnabled) {
            this._background && (t3.fillStyle = this._background, t3.fillRect(this._currentMeasure.left, this._currentMeasure.top, this._currentMeasure.width, this._currentMeasure.height));
            var e3 = this._currentMeasure.width / this._cellWidth, i2 = this._currentMeasure.height / this._cellHeight, o2 = this._currentMeasure.left + this._currentMeasure.width / 2, r2 = this._currentMeasure.top + this._currentMeasure.height / 2;
            if (this._displayMinorLines) {
              t3.strokeStyle = this._minorLineColor, t3.lineWidth = this._minorLineTickness;
              for (var n2 = -e3 / 2 + 1; n2 < e3 / 2; n2++) {
                var a2 = o2 + n2 * this.cellWidth;
                t3.beginPath(), t3.moveTo(a2, this._currentMeasure.top), t3.lineTo(a2, this._currentMeasure.top + this._currentMeasure.height), t3.stroke();
              }
              for (var s2 = -i2 / 2 + 1; s2 < i2 / 2; s2++) {
                var l2 = r2 + s2 * this.cellHeight;
                t3.beginPath(), t3.moveTo(this._currentMeasure.left, l2), t3.lineTo(this._currentMeasure.left + this._currentMeasure.width, l2), t3.stroke();
              }
            }
            if (this._displayMajorLines) {
              for (t3.strokeStyle = this._majorLineColor, t3.lineWidth = this._majorLineTickness, n2 = -e3 / 2 + this._majorLineFrequency; n2 < e3 / 2; n2 += this._majorLineFrequency) a2 = o2 + n2 * this.cellWidth, t3.beginPath(), t3.moveTo(a2, this._currentMeasure.top), t3.lineTo(a2, this._currentMeasure.top + this._currentMeasure.height), t3.stroke();
              for (s2 = -i2 / 2 + this._majorLineFrequency; s2 < i2 / 2; s2 += this._majorLineFrequency) l2 = r2 + s2 * this.cellHeight, t3.moveTo(this._currentMeasure.left, l2), t3.lineTo(this._currentMeasure.left + this._currentMeasure.width, l2), t3.closePath(), t3.stroke();
            }
          }
          t3.restore();
        }, e2.prototype._getTypeName = function() {
          return "DisplayGrid";
        }, h([(0, d.serialize)()], e2.prototype, "displayMinorLines", null), h([(0, d.serialize)()], e2.prototype, "displayMajorLines", null), h([(0, d.serialize)()], e2.prototype, "background", null), h([(0, d.serialize)()], e2.prototype, "cellWidth", null), h([(0, d.serialize)()], e2.prototype, "cellHeight", null), h([(0, d.serialize)()], e2.prototype, "minorLineTickness", null), h([(0, d.serialize)()], e2.prototype, "minorLineColor", null), h([(0, d.serialize)()], e2.prototype, "majorLineTickness", null), h([(0, d.serialize)()], e2.prototype, "majorLineColor", null), h([(0, d.serialize)()], e2.prototype, "majorLineFrequency", null), e2;
      }(I);
      (0, d.RegisterClass)("BABYLON.GUI.DisplayGrid", rt);
      var nt = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.name = e3, i2._tempMeasure = new v(0, 0, 0, 0), i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "displayThumb", { get: function() {
          return this._displayThumb && null != this.thumbImage;
        }, set: function(t3) {
          this._displayThumb !== t3 && (this._displayThumb = t3, this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backgroundImage", { get: function() {
          return this._backgroundImage;
        }, set: function(t3) {
          var e3 = this;
          this._backgroundImage !== t3 && (this._backgroundImage = t3, t3 && !t3.isLoaded && t3.onImageLoadedObservable.addOnce(function() {
            return e3._markAsDirty();
          }), this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "valueBarImage", { get: function() {
          return this._valueBarImage;
        }, set: function(t3) {
          var e3 = this;
          this._valueBarImage !== t3 && (this._valueBarImage = t3, t3 && !t3.isLoaded && t3.onImageLoadedObservable.addOnce(function() {
            return e3._markAsDirty();
          }), this._markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "thumbImage", { get: function() {
          return this._thumbImage;
        }, set: function(t3) {
          var e3 = this;
          this._thumbImage !== t3 && (this._thumbImage = t3, t3 && !t3.isLoaded && t3.onImageLoadedObservable.addOnce(function() {
            return e3._markAsDirty();
          }), this._markAsDirty());
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "ImageBasedSlider";
        }, e2.prototype._draw = function(t3) {
          t3.save(), this._applyStates(t3), this._prepareRenderingData("rectangle");
          var e3 = this._getThumbPosition(), i2 = this._renderLeft, o2 = this._renderTop, r2 = this._renderWidth, n2 = this._renderHeight;
          this._backgroundImage && (this._tempMeasure.copyFromFloats(i2, o2, r2, n2), this.isThumbClamped && this.displayThumb && (this.isVertical ? this._tempMeasure.height += this._effectiveThumbThickness : this._tempMeasure.width += this._effectiveThumbThickness), this._backgroundImage._currentMeasure.copyFrom(this._tempMeasure), this._backgroundImage._draw(t3)), this._valueBarImage && (this.isVertical ? this.isThumbClamped && this.displayThumb ? this._tempMeasure.copyFromFloats(i2, o2 + e3, r2, n2 - e3 + this._effectiveThumbThickness) : this._tempMeasure.copyFromFloats(i2, o2 + e3, r2, n2 - e3) : this.isThumbClamped && this.displayThumb ? this._tempMeasure.copyFromFloats(i2, o2, e3 + this._effectiveThumbThickness / 2, n2) : this._tempMeasure.copyFromFloats(i2, o2, e3, n2), this._valueBarImage._currentMeasure.copyFrom(this._tempMeasure), this._valueBarImage._draw(t3)), this.displayThumb && (this.isVertical ? this._tempMeasure.copyFromFloats(i2 - this._effectiveBarOffset, this._currentMeasure.top + e3, this._currentMeasure.width, this._effectiveThumbThickness) : this._tempMeasure.copyFromFloats(this._currentMeasure.left + e3, this._currentMeasure.top, this._effectiveThumbThickness, this._currentMeasure.height), this._thumbImage._currentMeasure.copyFrom(this._tempMeasure), this._thumbImage._draw(t3)), t3.restore();
        }, e2.prototype.serialize = function(e3) {
          t2.prototype.serialize.call(this, e3);
          var i2 = {}, o2 = {}, r2 = {};
          this.backgroundImage.serialize(i2), this.thumbImage.serialize(o2), this.valueBarImage.serialize(r2), e3.backgroundImage = i2, e3.thumbImage = o2, e3.valueBarImage = r2;
        }, e2.prototype._parseFromContent = function(e3, i2) {
          t2.prototype._parseFromContent.call(this, e3, i2), this.backgroundImage = O.Parse(e3.backgroundImage, i2), this.thumbImage = O.Parse(e3.thumbImage, i2), this.valueBarImage = O.Parse(e3.valueBarImage, i2);
        }, h([(0, d.serialize)()], e2.prototype, "displayThumb", null), e2;
      }(G);
      (0, d.RegisterClass)("BABYLON.GUI.ImageBasedSlider", nt);
      var at = "Statics";
      I.AddHeader = function(t2, e2, i2, o2) {
        var r2 = new w("panel"), n2 = !o2 || o2.isHorizontal, a2 = !o2 || o2.controlFirst;
        r2.isVertical = !n2;
        var s2 = new S("header");
        return s2.text = e2, s2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, n2 ? s2.width = i2 : s2.height = i2, a2 ? (r2.addControl(t2), r2.addControl(s2), s2.paddingLeft = "5px") : (r2.addControl(s2), r2.addControl(t2), s2.paddingRight = "5px"), s2.shadowBlur = t2.shadowBlur, s2.shadowColor = t2.shadowColor, s2.shadowOffsetX = t2.shadowOffsetX, s2.shadowOffsetY = t2.shadowOffsetY, r2;
      };
      var st = function() {
        function t2() {
          this._colorStops = [], this._gradientDirty = true;
        }
        return t2.prototype._addColorStopsToCanvasGradient = function() {
          for (var t3 = 0, e2 = this._colorStops; t3 < e2.length; t3++) {
            var i2 = e2[t3];
            this._canvasGradient.addColorStop(i2.offset, i2.color);
          }
        }, t2.prototype.getCanvasGradient = function(t3) {
          return (this._gradientDirty || this._context !== t3) && (this._context = t3, this._canvasGradient = this._createCanvasGradient(t3), this._addColorStopsToCanvasGradient(), this._gradientDirty = false), this._canvasGradient;
        }, t2.prototype.addColorStop = function(t3, e2) {
          this._colorStops.push({ offset: t3, color: e2 }), this._gradientDirty = true;
        }, t2.prototype.removeColorStop = function(t3) {
          this._colorStops = this._colorStops.filter(function(e2) {
            return e2.offset !== t3;
          }), this._gradientDirty = true;
        }, t2.prototype.clearColorStops = function() {
          this._colorStops = [], this._gradientDirty = true;
        }, Object.defineProperty(t2.prototype, "colorStops", { get: function() {
          return this._colorStops;
        }, enumerable: false, configurable: true }), t2.prototype.getClassName = function() {
          return "BaseGradient";
        }, t2.prototype.serialize = function(t3) {
          t3.colorStops = this._colorStops, t3.className = this.getClassName();
        }, t2.prototype.parse = function(t3) {
          this._colorStops = t3.colorStops;
        }, t2;
      }(), lt = function(t2) {
        function e2(e3, i2, o2, r2) {
          var n2 = t2.call(this) || this;
          return n2._x0 = null != e3 ? e3 : 0, n2._y0 = null != i2 ? i2 : 0, n2._x1 = null != o2 ? o2 : 0, n2._y1 = null != r2 ? r2 : 0, n2;
        }
        return l(e2, t2), e2.prototype._createCanvasGradient = function(t3) {
          return t3.createLinearGradient(this._x0, this._y0, this._x1, this._y1);
        }, Object.defineProperty(e2.prototype, "x0", { get: function() {
          return this._x0;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "x1", { get: function() {
          return this._x1;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "y0", { get: function() {
          return this._y0;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "y1", { get: function() {
          return this._y1;
        }, enumerable: false, configurable: true }), e2.prototype.getClassName = function() {
          return "LinearGradient";
        }, e2.prototype.serialize = function(e3) {
          t2.prototype.serialize.call(this, e3), e3.x0 = this._x0, e3.y0 = this._y0, e3.x1 = this._x1, e3.y1 = this._y1;
        }, e2.prototype.parse = function(e3) {
          t2.prototype.parse.call(this, e3), this._x0 = e3.x0, this._y0 = e3.y0, this._x1 = e3.x1, this._y1 = e3.y1;
        }, e2;
      }(st);
      (0, d.RegisterClass)("BABYLON.GUI.LinearGradient", lt);
      var _t = function(t2) {
        function e2(e3, i2, o2, r2, n2, a2) {
          var s2 = t2.call(this) || this;
          return s2._x0 = null != e3 ? e3 : 0, s2._y0 = null != i2 ? i2 : 0, s2._r0 = null != o2 ? o2 : 0, s2._x1 = null != r2 ? r2 : 0, s2._y1 = null != n2 ? n2 : 0, s2._r1 = null != a2 ? a2 : 0, s2;
        }
        return l(e2, t2), e2.prototype._createCanvasGradient = function(t3) {
          return t3.createRadialGradient(this._x0, this._y0, this._r0, this._x1, this._y1, this._r1);
        }, Object.defineProperty(e2.prototype, "x0", { get: function() {
          return this._x0;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "x1", { get: function() {
          return this._x1;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "y0", { get: function() {
          return this._y0;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "y1", { get: function() {
          return this._y1;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "r0", { get: function() {
          return this._r0;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "r1", { get: function() {
          return this._r1;
        }, enumerable: false, configurable: true }), e2.prototype.getClassName = function() {
          return "RadialGradient";
        }, e2.prototype.serialize = function(e3) {
          t2.prototype.serialize.call(this, e3), e3.x0 = this._x0, e3.y0 = this._y0, e3.r0 = this._r0, e3.x1 = this._x1, e3.y1 = this._y1, e3.r1 = this._r1;
        }, e2.prototype.parse = function(e3) {
          t2.prototype.parse.call(this, e3), this._x0 = e3.x0, this._y0 = e3.y0, this._r0 = e3.r0, this._x1 = e3.x1, this._y1 = e3.y1, this._r1 = e3.r1;
        }, e2;
      }(st);
      (0, d.RegisterClass)("BABYLON.GUI.RadialGradient", _t);
      var ht = function() {
        function t2(t3) {
          this._fontFamily = "Arial", this._fontStyle = "", this._fontWeight = "", this._fontSize = new f(18, f.UNITMODE_PIXEL, false), this.onChangedObservable = new d.Observable(), this._host = t3;
        }
        return Object.defineProperty(t2.prototype, "fontSize", { get: function() {
          return this._fontSize.toString(this._host);
        }, set: function(t3) {
          this._fontSize.toString(this._host) !== t3 && this._fontSize.fromString(t3) && this.onChangedObservable.notifyObservers(this);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontFamily", { get: function() {
          return this._fontFamily;
        }, set: function(t3) {
          this._fontFamily !== t3 && (this._fontFamily = t3, this.onChangedObservable.notifyObservers(this));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontStyle", { get: function() {
          return this._fontStyle;
        }, set: function(t3) {
          this._fontStyle !== t3 && (this._fontStyle = t3, this.onChangedObservable.notifyObservers(this));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fontWeight", { get: function() {
          return this._fontWeight;
        }, set: function(t3) {
          this._fontWeight !== t3 && (this._fontWeight = t3, this.onChangedObservable.notifyObservers(this));
        }, enumerable: false, configurable: true }), t2.prototype.dispose = function() {
          this.onChangedObservable.clear();
        }, t2;
      }(), ct = function(t2) {
        function e2(e3, i2, o2, r2, n2, a2, s2) {
          void 0 === o2 && (o2 = 0), void 0 === n2 && (n2 = false), void 0 === a2 && (a2 = d.Texture.NEAREST_SAMPLINGMODE), void 0 === s2 && (s2 = true);
          var l2, _2, h2 = this, c2 = "object" == typeof (i2 = null != i2 ? i2 : 0) && void 0 !== i2 ? null !== (l2 = i2.width) && void 0 !== l2 ? l2 : 0 : null != i2 ? i2 : 0, u2 = "object" == typeof i2 && void 0 !== i2 ? null !== (_2 = i2.height) && void 0 !== _2 ? _2 : 0 : o2;
          if ((h2 = t2.call(this, e3, { width: c2, height: u2 }, "object" == typeof i2 && void 0 !== i2 ? i2 : r2, n2, a2, d.Constants.TEXTUREFORMAT_RGBA, s2) || this).useStandalone = false, h2.onGuiReadyObservable = new d.Observable(), h2._isDirty = false, h2._rootContainer = new B("root"), h2._lastControlOver = {}, h2._lastControlDown = {}, h2._capturingControl = {}, h2._linkedControls = new Array(), h2._isFullscreen = false, h2._fullscreenViewport = new d.Viewport(0, 0, 1, 1), h2._idealWidth = 0, h2._idealHeight = 0, h2._useSmallestIdeal = false, h2._renderAtIdealSize = false, h2._blockNextFocusCheck = false, h2._renderScale = 1, h2._cursorChanged = false, h2._defaultMousePointerId = 0, h2._rootChildrenHaveChanged = false, h2._adjustToEngineHardwareScalingLevel = false, h2._capturedPointerIds = /* @__PURE__ */ new Set(), h2._numLayoutCalls = 0, h2._numRenderCalls = 0, h2._clipboardData = "", h2.onClipboardObservable = new d.Observable(), h2.onControlPickedObservable = new d.Observable(), h2.onBeginLayoutObservable = new d.Observable(), h2.onEndLayoutObservable = new d.Observable(), h2.onBeginRenderObservable = new d.Observable(), h2.onEndRenderObservable = new d.Observable(), h2.premulAlpha = false, h2.applyYInversionOnUpdate = true, h2.disableTabNavigation = false, h2.disablePicking = false, h2.usePointerTapForClickEvent = false, h2.skipBlockEvents = 0, h2.checkPointerEveryFrame = false, h2._useInvalidateRectOptimization = true, h2._invalidatedRectangle = null, h2._alreadyRegisteredForRender = false, h2._clearMeasure = new v(0, 0, 0, 0), h2._focusProperties = { index: 0, total: -1 }, h2._onClipboardCopy = function(t3) {
            var e4 = t3, i3 = new d.ClipboardInfo(d.ClipboardEventTypes.COPY, e4);
            h2.onClipboardObservable.notifyObservers(i3), e4.preventDefault();
          }, h2._onClipboardCut = function(t3) {
            var e4 = t3, i3 = new d.ClipboardInfo(d.ClipboardEventTypes.CUT, e4);
            h2.onClipboardObservable.notifyObservers(i3), e4.preventDefault();
          }, h2._onClipboardPaste = function(t3) {
            var e4 = t3, i3 = new d.ClipboardInfo(d.ClipboardEventTypes.PASTE, e4);
            h2.onClipboardObservable.notifyObservers(i3), e4.preventDefault();
          }, h2.parseContent = h2.parseSerializedObject, !(r2 = h2.getScene()) || !h2._texture) return h2;
          h2.applyYInversionOnUpdate = s2, h2._rootElement = r2.getEngine().getInputElement();
          var f2 = i2;
          return h2.useStandalone = !!(null == f2 ? void 0 : f2.useStandalone), h2.useStandalone || (h2._renderObserver = r2.onBeforeCameraRenderObservable.add(function(t3) {
            return h2._checkUpdate(t3);
          })), h2._controlAddedObserver = h2._rootContainer.onControlAddedObservable.add(function(t3) {
            t3 && (h2._rootChildrenHaveChanged = true);
          }), h2._controlRemovedObserver = h2._rootContainer.onControlRemovedObservable.add(function(t3) {
            t3 && (h2._rootChildrenHaveChanged = true);
          }), h2._preKeyboardObserver = r2.onPreKeyboardObservable.add(function(t3) {
            if (!h2.disableTabNavigation && t3.type === d.KeyboardEventTypes.KEYDOWN && "Tab" === t3.event.code) {
              var e4 = !t3.event.shiftKey;
              return e4 && h2._focusProperties.index === h2._focusProperties.total - 1 || !e4 && 0 === h2._focusProperties.index && h2._focusProperties.total > 0 ? (h2.focusedControl = null, h2._focusProperties.index = 0, void (h2._focusProperties.total = -1)) : (h2._focusNextElement(e4), void t3.event.preventDefault());
            }
            h2._focusedControl && (t3.type === d.KeyboardEventTypes.KEYDOWN && h2._focusedControl.processKeyboard(t3.event), t3.skipOnPointerObservable = true);
          }), h2._rootContainer._link(h2), h2.hasAlpha = true, c2 && u2 || (h2._resizeObserver = r2.getEngine().onResizeObservable.add(function() {
            return h2._onResize();
          }), h2._onResize()), h2._texture.isReady = true, h2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "numLayoutCalls", { get: function() {
          return this._numLayoutCalls;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "numRenderCalls", { get: function() {
          return this._numRenderCalls;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "adjustToEngineHardwareScalingLevel", { get: function() {
          return this._adjustToEngineHardwareScalingLevel;
        }, set: function(t3) {
          this._adjustToEngineHardwareScalingLevel !== t3 && (this._adjustToEngineHardwareScalingLevel = t3, this._onResize());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "renderScale", { get: function() {
          return this._renderScale;
        }, set: function(t3) {
          t3 !== this._renderScale && (this._renderScale = t3, this._onResize());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "background", { get: function() {
          return this._background;
        }, set: function(t3) {
          this._background !== t3 && (this._background = t3, this.markAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "idealWidth", { get: function() {
          return this._idealWidth;
        }, set: function(t3) {
          this._idealWidth !== t3 && (this._idealWidth = t3, this.markAsDirty(), this._rootContainer._markAllAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "idealHeight", { get: function() {
          return this._idealHeight;
        }, set: function(t3) {
          this._idealHeight !== t3 && (this._idealHeight = t3, this.markAsDirty(), this._rootContainer._markAllAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "useSmallestIdeal", { get: function() {
          return this._useSmallestIdeal;
        }, set: function(t3) {
          this._useSmallestIdeal !== t3 && (this._useSmallestIdeal = t3, this.markAsDirty(), this._rootContainer._markAllAsDirty());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "renderAtIdealSize", { get: function() {
          return this._renderAtIdealSize;
        }, set: function(t3) {
          this._renderAtIdealSize !== t3 && (this._renderAtIdealSize = t3, this._onResize());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "idealRatio", { get: function() {
          var t3 = 0, e3 = 0;
          return this._idealWidth && (t3 = this.getSize().width / this._idealWidth), this._idealHeight && (e3 = this.getSize().height / this._idealHeight), this._useSmallestIdeal && this._idealWidth && this._idealHeight ? window.innerWidth < window.innerHeight ? t3 : e3 : this._idealWidth ? t3 : this._idealHeight ? e3 : 1;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "layer", { get: function() {
          return this._layerToDispose;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "rootContainer", { get: function() {
          return this._rootContainer;
        }, enumerable: false, configurable: true }), e2.prototype.getChildren = function() {
          return [this._rootContainer];
        }, e2.prototype.getDescendants = function(t3, e3) {
          return this._rootContainer.getDescendants(t3, e3);
        }, e2.prototype.getControlsByType = function(t3) {
          return this._rootContainer.getDescendants(false, function(e3) {
            return e3.typeName === t3;
          });
        }, e2.prototype.getControlByName = function(t3) {
          return this._getControlByKey("name", t3);
        }, e2.prototype._getControlByKey = function(t3, e3) {
          return this._rootContainer.getDescendants().find(function(i2) {
            return i2[t3] === e3;
          }) || null;
        }, Object.defineProperty(e2.prototype, "focusedControl", { get: function() {
          return this._focusedControl;
        }, set: function(t3) {
          this._focusedControl != t3 && (this._focusedControl && this._focusedControl.onBlur(), t3 && t3.onFocus(), this._focusedControl = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isForeground", { get: function() {
          return !this.layer || !this.layer.isBackground;
        }, set: function(t3) {
          this.layer && this.layer.isBackground !== !t3 && (this.layer.isBackground = !t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "clipboardData", { get: function() {
          return this._clipboardData;
        }, set: function(t3) {
          this._clipboardData = t3;
        }, enumerable: false, configurable: true }), e2.prototype.getClassName = function() {
          return "AdvancedDynamicTexture";
        }, e2.prototype.executeOnAllControls = function(t3, e3) {
          e3 || (e3 = this._rootContainer), t3(e3);
          for (var i2 = 0, o2 = e3.children; i2 < o2.length; i2++) {
            var r2 = o2[i2];
            r2.children ? this.executeOnAllControls(t3, r2) : t3(r2);
          }
        }, Object.defineProperty(e2.prototype, "useInvalidateRectOptimization", { get: function() {
          return this._useInvalidateRectOptimization;
        }, set: function(t3) {
          this._useInvalidateRectOptimization = t3;
        }, enumerable: false, configurable: true }), e2.prototype.invalidateRect = function(t3, e3, i2, o2) {
          if (this._useInvalidateRectOptimization) if (this._invalidatedRectangle) {
            var r2 = Math.ceil(Math.max(this._invalidatedRectangle.left + this._invalidatedRectangle.width - 1, i2)), n2 = Math.ceil(Math.max(this._invalidatedRectangle.top + this._invalidatedRectangle.height - 1, o2));
            this._invalidatedRectangle.left = Math.floor(Math.min(this._invalidatedRectangle.left, t3)), this._invalidatedRectangle.top = Math.floor(Math.min(this._invalidatedRectangle.top, e3)), this._invalidatedRectangle.width = r2 - this._invalidatedRectangle.left + 1, this._invalidatedRectangle.height = n2 - this._invalidatedRectangle.top + 1;
          } else this._invalidatedRectangle = new v(t3, e3, i2 - t3 + 1, o2 - e3 + 1);
        }, e2.prototype.markAsDirty = function() {
          this._isDirty = true;
        }, e2.prototype.createStyle = function() {
          return new ht(this);
        }, e2.prototype.addControl = function(t3) {
          return this._rootContainer.addControl(t3), this;
        }, e2.prototype.removeControl = function(t3) {
          return this._rootContainer.removeControl(t3), this;
        }, e2.prototype.moveToNonOverlappedPosition = function(t3, i2, o2) {
          var r2, n2;
          if (void 0 === i2 && (i2 = 1), void 0 === o2 && (o2 = 1), Array.isArray(t3)) n2 = t3;
          else {
            var a2 = this.getDescendants(true);
            n2 = void 0 === t3 ? a2.filter(function(t4) {
              return void 0 !== t4.overlapGroup;
            }) : a2.filter(function(e3) {
              return e3.overlapGroup === t3;
            });
          }
          for (var s2 = 0, l2 = n2; s2 < l2.length; s2++) {
            for (var _2 = l2[s2], h2 = d.Vector2.Zero(), c2 = new d.Vector2(_2.centerX, _2.centerY), u2 = 0, f2 = n2; u2 < f2.length; u2++) {
              var p2 = f2[u2];
              if (_2 !== p2 && e2._Overlaps(_2, p2)) {
                var g2 = c2.subtract(new d.Vector2(p2.centerX, p2.centerY)), b2 = g2.length();
                b2 > 0 && (h2 = h2.add(g2.normalize().scale(o2 / b2)));
              }
            }
            h2.length() > 0 && (h2 = h2.normalize().scale(i2 * (null !== (r2 = _2.overlapDeltaMultiplier) && void 0 !== r2 ? r2 : 1)), _2.linkOffsetXInPixels += h2.x, _2.linkOffsetYInPixels += h2.y);
          }
        }, e2.prototype.dispose = function() {
          var e3 = this.getScene();
          e3 && (this._rootElement = null, e3.onBeforeCameraRenderObservable.remove(this._renderObserver), this._resizeObserver && e3.getEngine().onResizeObservable.remove(this._resizeObserver), this._prePointerObserver && e3.onPrePointerObservable.remove(this._prePointerObserver), this._sceneRenderObserver && e3.onBeforeRenderObservable.remove(this._sceneRenderObserver), this._pointerObserver && e3.onPointerObservable.remove(this._pointerObserver), this._preKeyboardObserver && e3.onPreKeyboardObservable.remove(this._preKeyboardObserver), this._canvasPointerOutObserver && e3.getEngine().onCanvasPointerOutObservable.remove(this._canvasPointerOutObserver), this._canvasBlurObserver && e3.getEngine().onCanvasBlurObservable.remove(this._canvasBlurObserver), this._controlAddedObserver && this._rootContainer.onControlAddedObservable.remove(this._controlAddedObserver), this._controlRemovedObserver && this._rootContainer.onControlRemovedObservable.remove(this._controlRemovedObserver), this._layerToDispose && (this._layerToDispose.texture = null, this._layerToDispose.dispose(), this._layerToDispose = null), this._rootContainer.dispose(), this.onClipboardObservable.clear(), this.onControlPickedObservable.clear(), this.onBeginRenderObservable.clear(), this.onEndRenderObservable.clear(), this.onBeginLayoutObservable.clear(), this.onEndLayoutObservable.clear(), this.onGuiReadyObservable.clear(), t2.prototype.dispose.call(this));
        }, e2.prototype._onResize = function() {
          var t3 = this, i2 = this.getScene();
          if (i2) {
            var o2 = i2.getEngine();
            this.adjustToEngineHardwareScalingLevel && (this._renderScale = o2.getHardwareScalingLevel(), this._renderScale = 1 / Math.max(this._renderScale, o2.getRenderWidth() / o2.getCaps().maxTextureSize, o2.getRenderHeight() / o2.getCaps().maxTextureSize));
            var r2 = this.getSize(), n2 = o2.getRenderWidth() * this._renderScale, a2 = o2.getRenderHeight() * this._renderScale;
            if (this._renderAtIdealSize && (this._idealWidth ? (a2 = a2 * this._idealWidth / n2, n2 = this._idealWidth) : this._idealHeight && (n2 = n2 * this._idealHeight / a2, a2 = this._idealHeight)), r2.width !== n2 || r2.height !== a2) {
              if (this.scaleTo(n2, a2), this.adjustToEngineHardwareScalingLevel) {
                var s2 = 1 / o2.getHardwareScalingLevel(), l2 = this._renderScale * s2;
                this._rootContainer.scaleX = l2, this._rootContainer.scaleY = l2, this._rootContainer.widthInPixels = n2 / l2, this._rootContainer.heightInPixels = a2 / l2;
              }
              this.markAsDirty(), (this._idealWidth || this._idealHeight) && this._rootContainer._markAllAsDirty(), this._alreadyRegisteredForRender || (this._alreadyRegisteredForRender = true, d.Tools.SetImmediate(function() {
                t3.update(t3.applyYInversionOnUpdate, t3.premulAlpha, e2.AllowGPUOptimizations), t3._alreadyRegisteredForRender = false;
              }));
            }
            this.invalidateRect(0, 0, r2.width - 1, r2.height - 1);
          }
        }, e2.prototype._getGlobalViewport = function() {
          var t3, e3 = this.getSize(), i2 = this._fullscreenViewport.toGlobal(e3.width, e3.height), o2 = Math.round(i2.width / this._rootContainer.scaleX), r2 = Math.round(i2.height / this._rootContainer.scaleY), n2 = this._adjustToEngineHardwareScalingLevel ? this._renderScale / ((null === (t3 = this.getScene()) || void 0 === t3 ? void 0 : t3.getEngine().getHardwareScalingLevel()) || 1) : 1;
          return i2.x += (i2.width / n2 - o2) / 2, i2.y += (i2.height / n2 - r2) / 2, i2.width = o2, i2.height = r2, i2;
        }, e2.prototype.getProjectedPosition = function(t3, e3) {
          var i2 = this.getProjectedPositionWithZ(t3, e3);
          return new d.Vector2(i2.x, i2.y);
        }, e2.prototype.getProjectedPositionWithZ = function(t3, e3) {
          var i2 = this.getScene();
          if (!i2) return d.Vector3.Zero();
          var o2 = this._getGlobalViewport(), r2 = d.Vector3.Project(t3, e3, i2.getTransformMatrix(), o2);
          return new d.Vector3(r2.x, r2.y, r2.z);
        }, e2.prototype._checkUpdate = function(t3, i2) {
          if (!this._layerToDispose || !t3 || 0 !== (t3.layerMask & this._layerToDispose.layerMask)) {
            if (this._isFullscreen && this._linkedControls.length) {
              var o2 = this.getScene();
              if (!o2) return;
              for (var r2 = this._getGlobalViewport(), n2 = function(t4) {
                if (!t4.isVisible) return "continue";
                var e3 = t4._linkedMesh;
                if (!e3 || e3.isDisposed()) return d.Tools.SetImmediate(function() {
                  t4.linkWithMesh(null);
                }), "continue";
                var i3 = e3.getBoundingInfo ? e3.getBoundingInfo().boundingSphere.center : d.Vector3.ZeroReadOnly, n3 = d.Vector3.Project(i3, e3.getWorldMatrix(), o2.getTransformMatrix(), r2);
                if (n3.z < 0 || n3.z > 1) return t4.notRenderable = true, "continue";
                t4.notRenderable = false, a2.useInvalidateRectOptimization && t4.invalidateRect(), t4._moveToProjectedPosition(n3);
              }, a2 = this, s2 = 0, l2 = this._linkedControls; s2 < l2.length; s2++) n2(l2[s2]);
            }
            (this._isDirty || this._rootContainer.isDirty) && (this._isDirty = false, this._render(i2), i2 || this.update(this.applyYInversionOnUpdate, this.premulAlpha, e2.AllowGPUOptimizations));
          }
        }, e2.prototype._render = function(t3) {
          var e3, i2 = this.getSize(), o2 = i2.width, r2 = i2.height, n2 = this.getContext();
          if (n2.font = "18px Arial", n2.strokeStyle = "white", this.onGuiReadyObservable.hasObservers() && this._checkGuiIsReady(), this._rootChildrenHaveChanged) {
            var a2 = null === (e3 = this.getScene()) || void 0 === e3 ? void 0 : e3.activeCamera;
            a2 && (this._rootChildrenHaveChanged = false, this._checkUpdate(a2, true));
          }
          this.onBeginLayoutObservable.notifyObservers(this);
          var s2 = new v(0, 0, o2, r2);
          this._numLayoutCalls = 0, this._rootContainer._layout(s2, n2), this.onEndLayoutObservable.notifyObservers(this), this._isDirty = false, t3 || (this._invalidatedRectangle ? this._clearMeasure.copyFrom(this._invalidatedRectangle) : this._clearMeasure.copyFromFloats(0, 0, o2, r2), n2.clearRect(this._clearMeasure.left, this._clearMeasure.top, this._clearMeasure.width, this._clearMeasure.height), this._background && (n2.save(), n2.fillStyle = this._background, n2.fillRect(this._clearMeasure.left, this._clearMeasure.top, this._clearMeasure.width, this._clearMeasure.height), n2.restore()), this.onBeginRenderObservable.notifyObservers(this), this._numRenderCalls = 0, this._rootContainer._render(n2, this._invalidatedRectangle), this.onEndRenderObservable.notifyObservers(this), this._invalidatedRectangle = null);
        }, e2.prototype._changeCursor = function(t3) {
          this._rootElement && (this._rootElement.style.cursor = t3, this._cursorChanged = true);
        }, e2.prototype._registerLastControlDown = function(t3, e3) {
          this._lastControlDown[e3] = t3, this.onControlPickedObservable.notifyObservers(t3);
        }, e2.prototype._doPicking = function(t3, e3, i2, o2, r2, n2, a2, s2) {
          var l2 = this.getScene();
          if (l2 && !this.disablePicking) {
            var _2 = l2.getEngine(), h2 = this.getSize();
            if (this._isFullscreen) {
              var c2 = l2.cameraToUseForPointers || l2.activeCamera;
              if (!c2) return;
              var u2 = c2.viewport;
              t3 *= h2.width / (_2.getRenderWidth() * u2.width), e3 *= h2.height / (_2.getRenderHeight() * u2.height);
            }
            if (this._capturingControl[r2]) return this._capturingControl[r2].isPointerBlocker && (this._shouldBlockPointer = true), void this._capturingControl[r2]._processObservables(o2, t3, e3, i2, r2, n2);
            this._cursorChanged = false, this._rootContainer._processPicking(t3, e3, i2, o2, r2, n2, a2, s2) || (l2.doNotHandleCursors || this._changeCursor(""), o2 === d.PointerEventTypes.POINTERMOVE && this._lastControlOver[r2] && (this._lastControlOver[r2]._onPointerOut(this._lastControlOver[r2], i2), delete this._lastControlOver[r2])), this._cursorChanged || l2.doNotHandleCursors || this._changeCursor(""), this._manageFocus();
          }
        }, e2.prototype._cleanControlAfterRemovalFromList = function(t3, e3) {
          for (var i2 in t3) Object.prototype.hasOwnProperty.call(t3, i2) && t3[i2] === e3 && delete t3[i2];
        }, e2.prototype._cleanControlAfterRemoval = function(t3) {
          this._cleanControlAfterRemovalFromList(this._lastControlDown, t3), this._cleanControlAfterRemovalFromList(this._lastControlOver, t3);
        }, e2.prototype.pick = function(t3, e3, i2) {
          void 0 === i2 && (i2 = null), this._isFullscreen && this._scene && this._translateToPicking(this._scene, new d.Viewport(0, 0, 0, 0), i2, t3, e3);
        }, e2.prototype._translateToPicking = function(t3, e3, i2, o2, r2) {
          void 0 === o2 && (o2 = t3.pointerX), void 0 === r2 && (r2 = t3.pointerY);
          var n2 = t3.cameraToUseForPointers || t3.activeCamera, a2 = t3.getEngine(), s2 = t3.cameraToUseForPointers;
          if (n2) if (n2.rigCameras.length) for (var l2 = new d.Viewport(0, 0, 1, 1), _2 = 0, h2 = n2.rigCameras; _2 < h2.length; _2++) {
            var c2 = h2[_2];
            c2.viewport.toGlobalToRef(a2.getRenderWidth(), a2.getRenderHeight(), l2);
            var u2 = o2 / a2.getHardwareScalingLevel() - l2.x, f2 = r2 / a2.getHardwareScalingLevel() - (a2.getRenderHeight() - l2.y - l2.height);
            if (u2 < 0 || f2 < 0 || o2 > l2.width || r2 > l2.height) return;
            t3.cameraToUseForPointers = c2, e3.x = l2.x, e3.y = l2.y, e3.width = l2.width, e3.height = l2.height;
          }
          else n2.viewport.toGlobalToRef(a2.getRenderWidth(), a2.getRenderHeight(), e3);
          else e3.x = 0, e3.y = 0, e3.width = a2.getRenderWidth(), e3.height = a2.getRenderHeight();
          var p2 = o2 / a2.getHardwareScalingLevel() - e3.x, g2 = r2 / a2.getHardwareScalingLevel() - (a2.getRenderHeight() - e3.y - e3.height);
          if (this._shouldBlockPointer = false, i2) {
            var b2 = i2.event.pointerId || this._defaultMousePointerId;
            this._doPicking(p2, g2, i2, i2.type, b2, i2.event.button, i2.event.deltaX, i2.event.deltaY), (this._shouldBlockPointer && !(i2.type & this.skipBlockEvents) || this._capturingControl[b2]) && (i2.skipOnPointerObservable = true);
          } else this._doPicking(p2, g2, null, d.PointerEventTypes.POINTERMOVE, this._defaultMousePointerId, 0);
          t3.cameraToUseForPointers = s2;
        }, e2.prototype.attach = function() {
          var t3 = this, e3 = this.getScene();
          if (e3) {
            var i2 = new d.Viewport(0, 0, 0, 0);
            this._prePointerObserver = e3.onPrePointerObservable.add(function(o2) {
              if ((!e3.isPointerCaptured(o2.event.pointerId) || o2.type !== d.PointerEventTypes.POINTERUP || t3._capturedPointerIds.has(o2.event.pointerId)) && (o2.type === d.PointerEventTypes.POINTERMOVE || o2.type === d.PointerEventTypes.POINTERUP || o2.type === d.PointerEventTypes.POINTERDOWN || o2.type === d.PointerEventTypes.POINTERWHEEL || o2.type === d.PointerEventTypes.POINTERTAP)) {
                if (o2.type === d.PointerEventTypes.POINTERMOVE) {
                  if (e3.isPointerCaptured(o2.event.pointerId)) return;
                  o2.event.pointerId && (t3._defaultMousePointerId = o2.event.pointerId);
                }
                t3._translateToPicking(e3, i2, o2);
              }
            }), this._attachPickingToSceneRender(e3, function() {
              return t3._translateToPicking(e3, i2, null);
            }, false), this._attachToOnPointerOut(e3), this._attachToOnBlur(e3);
          }
        }, e2.prototype._focusNextElement = function(t3) {
          void 0 === t3 && (t3 = true);
          var e3 = [];
          if (this.executeOnAllControls(function(t4) {
            t4.isFocusInvisible || !t4.isVisible || t4.tabIndex < 0 || e3.push(t4);
          }), 0 !== e3.length) {
            e3.sort(function(t4, e4) {
              return 0 === t4.tabIndex ? 1 : 0 === e4.tabIndex ? -1 : t4.tabIndex - e4.tabIndex;
            }), this._focusProperties.total = e3.length;
            var i2 = -1;
            this._focusedControl ? (i2 = e3.indexOf(this._focusedControl) + (t3 ? 1 : -1)) < 0 ? i2 = e3.length - 1 : i2 >= e3.length && (i2 = 0) : i2 = t3 ? 0 : e3.length - 1, e3[i2].focus(), this._focusProperties.index = i2;
          }
        }, e2.prototype.registerClipboardEvents = function() {
          self.addEventListener("copy", this._onClipboardCopy, false), self.addEventListener("cut", this._onClipboardCut, false), self.addEventListener("paste", this._onClipboardPaste, false);
        }, e2.prototype.unRegisterClipboardEvents = function() {
          self.removeEventListener("copy", this._onClipboardCopy), self.removeEventListener("cut", this._onClipboardCut), self.removeEventListener("paste", this._onClipboardPaste);
        }, e2.prototype._transformUvs = function(t3) {
          var e3, i2 = this.getTextureMatrix();
          if (i2.isIdentityAs3x2()) e3 = t3;
          else {
            var o2 = d.TmpVectors.Matrix[0];
            i2.getRowToRef(0, d.TmpVectors.Vector4[0]), i2.getRowToRef(1, d.TmpVectors.Vector4[1]), i2.getRowToRef(2, d.TmpVectors.Vector4[2]);
            var r2 = d.TmpVectors.Vector4[0], n2 = d.TmpVectors.Vector4[1], a2 = d.TmpVectors.Vector4[2];
            o2.setRowFromFloats(0, r2.x, r2.y, 0, 0), o2.setRowFromFloats(1, n2.x, n2.y, 0, 0), o2.setRowFromFloats(2, 0, 0, 1, 0), o2.setRowFromFloats(3, a2.x, a2.y, 0, 1), e3 = d.TmpVectors.Vector2[0], d.Vector2.TransformToRef(t3, o2, e3);
          }
          if ((this.wrapU === d.Texture.WRAP_ADDRESSMODE || this.wrapU === d.Texture.MIRROR_ADDRESSMODE) && e3.x > 1) {
            var s2 = e3.x - Math.trunc(e3.x);
            this.wrapU === d.Texture.MIRROR_ADDRESSMODE && Math.trunc(e3.x) % 2 == 1 && (s2 = 1 - s2), e3.x = s2;
          }
          if ((this.wrapV === d.Texture.WRAP_ADDRESSMODE || this.wrapV === d.Texture.MIRROR_ADDRESSMODE) && e3.y > 1) {
            var l2 = e3.y - Math.trunc(e3.y);
            this.wrapV === d.Texture.MIRROR_ADDRESSMODE && Math.trunc(e3.x) % 2 == 1 && (l2 = 1 - l2), e3.y = l2;
          }
          return e3;
        }, e2.prototype.attachToMesh = function(t3, e3) {
          var i2 = this;
          void 0 === e3 && (e3 = true);
          var o2 = this.getScene();
          o2 && (this._pointerObserver && o2.onPointerObservable.remove(this._pointerObserver), this._pointerObserver = o2.onPointerObservable.add(function(e4) {
            if (e4.type === d.PointerEventTypes.POINTERMOVE || e4.type === d.PointerEventTypes.POINTERUP || e4.type === d.PointerEventTypes.POINTERDOWN || e4.type === d.PointerEventTypes.POINTERWHEEL) {
              e4.type === d.PointerEventTypes.POINTERMOVE && e4.event.pointerId && (i2._defaultMousePointerId = e4.event.pointerId);
              var o3 = e4.event.pointerId || i2._defaultMousePointerId;
              if (e4.pickInfo && e4.pickInfo.hit && e4.pickInfo.pickedMesh === t3) {
                var r2 = e4.pickInfo.getTextureCoordinates();
                if (r2) {
                  r2 = i2._transformUvs(r2);
                  var n2 = i2.getSize();
                  i2._doPicking(r2.x * n2.width, (i2.applyYInversionOnUpdate ? 1 - r2.y : r2.y) * n2.height, e4, e4.type, o3, e4.event.button, e4.event.deltaX, e4.event.deltaY);
                }
              } else if (e4.type === d.PointerEventTypes.POINTERUP) {
                if (i2._lastControlDown[o3] && i2._lastControlDown[o3]._forcePointerUp(o3), delete i2._lastControlDown[o3], i2.focusedControl) {
                  var a2 = i2.focusedControl.keepsFocusWith(), s2 = true;
                  if (a2) for (var l2 = 0, _2 = a2; l2 < _2.length; l2++) {
                    var h2 = _2[l2];
                    if (i2 !== h2._host) {
                      var c2 = h2._host;
                      if (c2._lastControlOver[o3] && c2._lastControlOver[o3].isAscendant(h2)) {
                        s2 = false;
                        break;
                      }
                    }
                  }
                  s2 && (i2.focusedControl = null);
                }
              } else e4.type === d.PointerEventTypes.POINTERMOVE && (i2._lastControlOver[o3] && i2._lastControlOver[o3]._onPointerOut(i2._lastControlOver[o3], e4, true), delete i2._lastControlOver[o3]);
            }
          }), t3.enablePointerMoveEvents = e3, this._attachPickingToSceneRender(o2, function() {
            var e4 = i2._defaultMousePointerId, r2 = null == o2 ? void 0 : o2.pick(o2.pointerX, o2.pointerY);
            if (r2 && r2.hit && r2.pickedMesh === t3) {
              var n2 = r2.getTextureCoordinates();
              if (n2) {
                n2 = i2._transformUvs(n2);
                var a2 = i2.getSize();
                i2._doPicking(n2.x * a2.width, (i2.applyYInversionOnUpdate ? 1 - n2.y : n2.y) * a2.height, null, d.PointerEventTypes.POINTERMOVE, e4, 0);
              }
            } else i2._lastControlOver[e4] && i2._lastControlOver[e4]._onPointerOut(i2._lastControlOver[e4], null, true), delete i2._lastControlOver[e4];
          }, true), this._attachToOnPointerOut(o2), this._attachToOnBlur(o2));
        }, e2.prototype.moveFocusToControl = function(t3) {
          this.focusedControl = t3, this._lastPickedControl = t3, this._blockNextFocusCheck = true;
        }, e2.prototype._manageFocus = function() {
          if (this._blockNextFocusCheck) return this._blockNextFocusCheck = false, void (this._lastPickedControl = this._focusedControl);
          if (this._focusedControl && this._focusedControl !== this._lastPickedControl) {
            if (this._lastPickedControl.isFocusInvisible) return;
            this.focusedControl = null;
          }
        }, e2.prototype._attachPickingToSceneRender = function(t3, e3, i2) {
          var o2 = this;
          this._sceneRenderObserver = t3.onBeforeRenderObservable.add(function() {
            o2.checkPointerEveryFrame && (o2._linkedControls.length > 0 || i2) && e3();
          });
        }, e2.prototype._attachToOnPointerOut = function(t3) {
          var e3 = this;
          this._canvasPointerOutObserver = t3.getEngine().onCanvasPointerOutObservable.add(function(t4) {
            e3._lastControlOver[t4.pointerId] && e3._lastControlOver[t4.pointerId]._onPointerOut(e3._lastControlOver[t4.pointerId], null), delete e3._lastControlOver[t4.pointerId], e3._lastControlDown[t4.pointerId] && e3._lastControlDown[t4.pointerId] !== e3._capturingControl[t4.pointerId] && (e3._lastControlDown[t4.pointerId]._forcePointerUp(t4.pointerId), delete e3._lastControlDown[t4.pointerId]);
          });
        }, e2.prototype._attachToOnBlur = function(t3) {
          var e3 = this;
          this._canvasBlurObserver = t3.getEngine().onCanvasBlurObservable.add(function() {
            Object.entries(e3._lastControlDown).forEach(function(t4) {
              t4[1]._onCanvasBlur();
            }), e3.focusedControl = null, e3._lastControlDown = {};
          });
        }, e2.prototype.serializeContent = function() {
          var t3 = this.getSize(), e3 = { root: {}, width: t3.width, height: t3.height };
          return this._rootContainer.serialize(e3.root), e3;
        }, e2.prototype.parseSerializedObject = function(t3, e3, i2) {
          if (this._rootContainer = I.Parse(t3.root, this, i2), e3) {
            var o2 = t3.width, r2 = t3.height;
            "number" == typeof o2 && "number" == typeof r2 && o2 >= 0 && r2 >= 0 ? this.scaleTo(o2, r2) : this.scaleTo(1920, 1080);
          }
        }, e2.prototype.clone = function(t3, i2) {
          var o2 = this.getScene();
          if (!o2) return this;
          var r2, n2 = this.getSize(), a2 = this.serializeContent();
          return (r2 = this._isFullscreen ? e2.CreateFullscreenUI(null != t3 ? t3 : "Clone of " + this.name) : i2 ? e2.CreateForMesh(i2, n2.width, n2.height) : new e2(null != t3 ? t3 : "Clone of " + this.name, n2.width, n2.height, o2, !this.noMipmap, this.samplingMode)).parseSerializedObject(a2), r2;
        }, e2.ParseFromSnippetAsync = function(t3, i2, o2, r2) {
          return c(this, void 0, void 0, function() {
            var n2, a2;
            return u(this, function(s2) {
              switch (s2.label) {
                case 0:
                  return n2 = null != o2 ? o2 : e2.CreateFullscreenUI("ADT from snippet"), "_BLANK" === t3 ? [2, n2] : [4, e2._LoadURLContentAsync(e2.SnippetUrl + "/" + t3.replace(/#/g, "/"), true)];
                case 1:
                  return a2 = s2.sent(), n2.parseSerializedObject(a2, i2, r2), [2, n2];
              }
            });
          });
        }, e2.prototype.parseFromSnippetAsync = function(t3, i2, o2) {
          return c(this, void 0, void 0, function() {
            return u(this, function(r2) {
              switch (r2.label) {
                case 0:
                  return [4, e2.ParseFromSnippetAsync(t3, i2, this, o2)];
                case 1:
                  return [2, r2.sent()];
              }
            });
          });
        }, e2.ParseFromFileAsync = function(t3, i2, o2, r2) {
          return c(this, void 0, void 0, function() {
            var n2, a2;
            return u(this, function(s2) {
              switch (s2.label) {
                case 0:
                  return n2 = null != o2 ? o2 : e2.CreateFullscreenUI("ADT from URL"), [4, e2._LoadURLContentAsync(t3)];
                case 1:
                  return a2 = s2.sent(), n2.parseSerializedObject(a2, i2, r2), [2, n2];
              }
            });
          });
        }, e2.prototype.parseFromURLAsync = function(t3, i2, o2) {
          return c(this, void 0, void 0, function() {
            return u(this, function(r2) {
              switch (r2.label) {
                case 0:
                  return [4, e2.ParseFromFileAsync(t3, i2, this, o2)];
                case 1:
                  return [2, r2.sent()];
              }
            });
          });
        }, e2._LoadURLContentAsync = function(t3) {
          return c(this, arguments, void 0, function(t4, e3) {
            return void 0 === e3 && (e3 = false), u(this, function(i2) {
              switch (i2.label) {
                case 0:
                  if ("" === t4) throw new Error("No URL provided");
                  return [4, new Promise(function(i3, o2) {
                    var r2 = new d.WebRequest();
                    r2.addEventListener("readystatechange", function() {
                      if (4 == r2.readyState) if (200 == r2.status) {
                        var t5 = void 0;
                        if (e3) {
                          var n2 = JSON.parse(JSON.parse(r2.responseText).jsonPayload);
                          t5 = n2.encodedGui ? new TextDecoder("utf-8").decode((0, d.DecodeBase64ToBinary)(n2.encodedGui)) : n2.gui;
                        } else t5 = r2.responseText;
                        var a2 = JSON.parse(t5);
                        i3(a2);
                      } else o2("Unable to load");
                    }), r2.open("GET", t4), r2.send();
                  })];
                case 1:
                  return [2, i2.sent()];
              }
            });
          });
        }, e2._Overlaps = function(t3, e3) {
          return !(t3.centerX > e3.centerX + e3.widthInPixels || t3.centerX + t3.widthInPixels < e3.centerX || t3.centerY + t3.heightInPixels < e3.centerY || t3.centerY > e3.centerY + e3.heightInPixels);
        }, e2.CreateForMesh = function(t3, i2, o2, r2, n2, a2, s2, l2) {
          void 0 === i2 && (i2 = 1024), void 0 === o2 && (o2 = 1024), void 0 === r2 && (r2 = true), void 0 === n2 && (n2 = false), void 0 === s2 && (s2 = this._CreateMaterial), void 0 === l2 && (l2 = d.Texture.TRILINEAR_SAMPLINGMODE);
          var _2 = (0, d.RandomGUID)(), h2 = new e2("AdvancedDynamicTexture for ".concat(t3.name, " [").concat(_2, "]"), i2, o2, t3.getScene(), true, l2, a2);
          return s2(t3, _2, h2, n2), h2.attachToMesh(t3, r2), h2;
        }, e2._CreateMaterial = function(t3, e3, i2, o2) {
          var r2 = (0, d.GetClass)("BABYLON.StandardMaterial");
          if (!r2) throw "StandardMaterial needs to be imported before as it contains a side-effect required by your code.";
          var n2 = new r2("AdvancedDynamicTextureMaterial for ".concat(t3.name, " [").concat(e3, "]"), t3.getScene());
          n2.backFaceCulling = false, n2.diffuseColor = d.Color3.Black(), n2.specularColor = d.Color3.Black(), o2 ? (n2.diffuseTexture = i2, n2.emissiveTexture = i2, i2.hasAlpha = true) : (n2.emissiveTexture = i2, n2.opacityTexture = i2), t3.material = n2;
        }, e2.CreateForMeshTexture = function(t3, i2, o2, r2, n2, a2) {
          void 0 === i2 && (i2 = 1024), void 0 === o2 && (o2 = 1024), void 0 === r2 && (r2 = true), void 0 === a2 && (a2 = d.Texture.TRILINEAR_SAMPLINGMODE);
          var s2 = new e2(t3.name + " AdvancedDynamicTexture", i2, o2, t3.getScene(), true, a2, n2);
          return s2.attachToMesh(t3, r2), s2;
        }, e2.CreateFullscreenUI = function(t3, i2, o2, r2, n2) {
          void 0 === i2 && (i2 = true), void 0 === o2 && (o2 = null), void 0 === r2 && (r2 = d.Texture.BILINEAR_SAMPLINGMODE), void 0 === n2 && (n2 = false);
          var a2 = !o2 || o2._isScene ? new e2(t3, 0, 0, o2, false, r2) : new e2(t3, o2), s2 = a2.getScene(), l2 = new d.Layer(t3 + "_layer", null, s2, !i2);
          return l2.texture = a2, a2._layerToDispose = l2, a2._isFullscreen = true, a2.useStandalone && (l2.layerMask = 0), a2.adjustToEngineHardwareScalingLevel = n2, a2.attach(), a2;
        }, e2.prototype.scale = function(e3) {
          t2.prototype.scale.call(this, e3), this.markAsDirty();
        }, e2.prototype.scaleTo = function(e3, i2) {
          t2.prototype.scaleTo.call(this, e3, i2), this.markAsDirty();
        }, e2.prototype._checkGuiIsReady = function() {
          this.guiIsReady() && (this.onGuiReadyObservable.notifyObservers(this), this.onGuiReadyObservable.clear());
        }, e2.prototype.guiIsReady = function() {
          return this._rootContainer.isReady();
        }, e2.SnippetUrl = d.Constants.SnippetUrl, e2.AllowGPUOptimizations = true, e2;
      }(d.DynamicTexture), ut = function() {
        function t2(t3) {
          this.texture = t3, this._captureRenderTime = false, this._renderTime = new d.PerfCounter(), this._captureLayoutTime = false, this._layoutTime = new d.PerfCounter(), this._onBeginRenderObserver = null, this._onEndRenderObserver = null, this._onBeginLayoutObserver = null, this._onEndLayoutObserver = null;
        }
        return Object.defineProperty(t2.prototype, "renderTimeCounter", { get: function() {
          return this._renderTime;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "layoutTimeCounter", { get: function() {
          return this._layoutTime;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "captureRenderTime", { get: function() {
          return this._captureRenderTime;
        }, set: function(t3) {
          var e2 = this;
          t3 !== this._captureRenderTime && (this._captureRenderTime = t3, t3 ? (this._onBeginRenderObserver = this.texture.onBeginRenderObservable.add(function() {
            e2._renderTime.beginMonitoring();
          }), this._onEndRenderObserver = this.texture.onEndRenderObservable.add(function() {
            e2._renderTime.endMonitoring(true);
          })) : (this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver), this._onBeginRenderObserver = null, this.texture.onEndRenderObservable.remove(this._onEndRenderObserver), this._onEndRenderObserver = null));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "captureLayoutTime", { get: function() {
          return this._captureLayoutTime;
        }, set: function(t3) {
          var e2 = this;
          t3 !== this._captureLayoutTime && (this._captureLayoutTime = t3, t3 ? (this._onBeginLayoutObserver = this.texture.onBeginLayoutObservable.add(function() {
            e2._layoutTime.beginMonitoring();
          }), this._onEndLayoutObserver = this.texture.onEndLayoutObservable.add(function() {
            e2._layoutTime.endMonitoring(true);
          })) : (this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver), this._onBeginLayoutObserver = null, this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver), this._onEndLayoutObserver = null));
        }, enumerable: false, configurable: true }), t2.prototype.dispose = function() {
          this.texture.onBeginRenderObservable.remove(this._onBeginRenderObserver), this._onBeginRenderObserver = null, this.texture.onEndRenderObservable.remove(this._onEndRenderObserver), this._onEndRenderObserver = null, this.texture.onBeginLayoutObservable.remove(this._onBeginLayoutObserver), this._onBeginLayoutObserver = null, this.texture.onEndLayoutObservable.remove(this._onEndLayoutObserver), this._onEndLayoutObserver = null, this.texture = null;
        }, t2;
      }(), dt = function(t2) {
        function e2(e3, i2, o2) {
          var r2 = t2.call(this, e3, i2) || this;
          if (o2) {
            if (!o2.useStandalone) throw new Error('AdvancedDynamicTexture "'.concat(e3, '": the texture must have been created with the useStandalone property set to true'));
          } else o2 = ct.CreateFullscreenUI(e3, void 0, { useStandalone: true });
          return r2._adt = o2, r2.outputTexture = r2._frameGraph.textureManager.createDanglingHandle(), r2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "disabled", { get: function() {
          return this._disabled;
        }, set: function(t3) {
          this._disabled = t3, this._adt.disablePicking = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "gui", { get: function() {
          return this._adt;
        }, enumerable: false, configurable: true }), e2.prototype.isReady = function() {
          return this._adt.guiIsReady() && this._adt._layerToDispose.isReady();
        }, e2.prototype.record = function() {
          var t3 = this;
          if (void 0 === this.targetTexture) throw new Error("FrameGraphGUITask: targetTexture is required");
          this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture);
          var e3 = this._frameGraph.addRenderPass(this.name);
          e3.setRenderTarget(this.outputTexture), e3.setExecuteFunc(function(e4) {
            t3._adt._checkUpdate(null), e4.render(t3._adt._layerToDispose);
          });
          var i2 = this._frameGraph.addRenderPass(this.name + "_disabled", true);
          i2.setRenderTarget(this.outputTexture), i2.setExecuteFunc(function(t4) {
          });
        }, e2.prototype.dispose = function() {
          this._adt.dispose(), t2.prototype.dispose.call(this);
        }, e2;
      }(d.FrameGraphTask), ft = function(t2) {
        function e2(e3, i2, o2) {
          var r2 = t2.call(this, e3, i2, o2) || this;
          return r2.registerInput("target", d.NodeRenderGraphBlockConnectionPointTypes.Texture), r2._addDependenciesInput(), r2.registerOutput("output", d.NodeRenderGraphBlockConnectionPointTypes.BasedOnInput), r2.target.addAcceptedConnectionPointTypes(d.NodeRenderGraphBlockConnectionPointTypes.TextureAll), r2.output._typeConnectionSource = r2.target, r2._gui = ct.CreateFullscreenUI(r2.name, void 0, { useStandalone: true }), r2._frameGraphTask = new dt(r2.name, i2, r2._gui), r2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "task", { get: function() {
          return this._frameGraphTask;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "gui", { get: function() {
          return this._frameGraphTask.gui;
        }, enumerable: false, configurable: true }), e2.prototype.getClassName = function() {
          return "GUI.NodeRenderGraphGUIBlock";
        }, Object.defineProperty(e2.prototype, "target", { get: function() {
          return this._inputs[0];
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "output", { get: function() {
          return this._outputs[0];
        }, enumerable: false, configurable: true }), e2.prototype._buildBlock = function(e3) {
          var i2;
          t2.prototype._buildBlock.call(this, e3), this.output.value = this._frameGraphTask.outputTexture, this._frameGraphTask.targetTexture = null === (i2 = this.target.connectedPoint) || void 0 === i2 ? void 0 : i2.value;
        }, e2;
      }(d.NodeRenderGraphBlock);
      (0, d.RegisterClass)("BABYLON.GUI.NodeRenderGraphGUIBlock", ft);
      var pt = "XmlLoader Exception : XML file is malformed or corrupted.", gt = function() {
        function t2(t3) {
          void 0 === t3 && (t3 = null), this._nodes = {}, this._nodeTypes = { element: 1, attribute: 2, text: 3 }, this._isLoaded = false, this._objectAttributes = { textHorizontalAlignment: 1, textVerticalAlignment: 2, horizontalAlignment: 3, verticalAlignment: 4, stretch: 5 }, t3 && (this._parentClass = t3);
        }
        return t2.prototype._getChainElement = function(t3) {
          var e2 = window;
          this._parentClass && (e2 = this._parentClass);
          var i2 = t3;
          i2 = i2.split(".");
          for (var o2 = 0; o2 < i2.length; o2++) e2 = e2[i2[o2]];
          return e2;
        }, t2.prototype._getClassAttribute = function(t3) {
          var e2 = t3.split(".");
          return (0, d.GetClass)("BABYLON.GUI." + e2[0])[e2[1]];
        }, t2.prototype._createGuiElement = function(t3, e2, i2) {
          void 0 === i2 && (i2 = true);
          try {
            var o2 = new ((0, d.GetClass)("BABYLON.GUI." + t3.nodeName))();
            e2 && i2 && e2.addControl(o2);
            for (var r2 = 0; r2 < t3.attributes.length; r2++) if (!t3.attributes[r2].name.toLowerCase().includes("datasource")) if (t3.attributes[r2].name.toLowerCase().includes("observable")) {
              var n2 = this._getChainElement(t3.attributes[r2].value);
              o2[t3.attributes[r2].name].add(n2);
            } else if ("linkWithMesh" == t3.attributes[r2].name) this._parentClass ? o2.linkWithMesh(this._parentClass[t3.attributes[r2].value]) : o2.linkWithMesh(window[t3.attributes[r2].value]);
            else if (t3.attributes[r2].value.match(/{{.*}}/)) {
              var a2 = t3.attributes[r2].value.match(/{{(.*)}}/);
              n2 = this._getChainElement(a2[1]), t3.attributes[r2].value.startsWith("{{") && t3.attributes[r2].value.endsWith("}}") || (n2 = t3.attributes[r2].value.replace(/{{.*}}/, "".concat(n2))), o2[t3.attributes[r2].name] = n2;
            } else this._objectAttributes[t3.attributes[r2].name] ? o2[t3.attributes[r2].name] = this._getClassAttribute(t3.attributes[r2].value) : "true" == t3.attributes[r2].value || "false" == t3.attributes[r2].value ? o2[t3.attributes[r2].name] = "true" == t3.attributes[r2].value : o2[t3.attributes[r2].name] = isNaN(Number(t3.attributes[r2].value)) ? t3.attributes[r2].value : Number(t3.attributes[r2].value);
            if (!t3.attributes.getNamedItem("id")) return this._nodes[t3.nodeName + Object.keys(this._nodes).length + "_gen"] = o2, o2;
            var s2 = t3.attributes.getNamedItem("id").value;
            if (s2.startsWith("{{") && s2.endsWith("}}") && (s2 = this._getChainElement(s2.substring(2, s2.length - 2))), this._nodes[s2]) throw "XmlLoader Exception : Duplicate ID, every element should have an unique ID attribute";
            return this._nodes[s2] = o2, o2;
          } catch (e3) {
            throw "XmlLoader Exception : Error parsing Control " + t3.nodeName + "," + e3 + ".";
          }
        }, t2.prototype._parseGrid = function(t3, e2, i2) {
          for (var o2, r2, n2, a2, s2, l2 = t3.children, _2 = false, h2 = -1, c2 = -1, u2 = 0, d2 = 0; d2 < l2.length; d2++) if (l2[d2].nodeType == this._nodeTypes.element) {
            if ("Row" != l2[d2].nodeName) throw "XmlLoader Exception : Expecting Row node, received " + l2[d2].nodeName;
            if (h2 += 1, n2 = l2[d2].children, !l2[d2].attributes.getNamedItem("height")) throw "XmlLoader Exception : Height must be defined for grid rows";
            r2 = Number(l2[d2].attributes.getNamedItem("height").nodeValue), _2 = !!l2[d2].attributes.getNamedItem("isPixel") && JSON.parse(l2[d2].attributes.getNamedItem("isPixel").nodeValue), e2.addRowDefinition(r2, _2);
            for (var f2 = 0; f2 < n2.length; f2++) if (n2[f2].nodeType == this._nodeTypes.element) {
              if ("Column" != n2[f2].nodeName) throw "XmlLoader Exception : Expecting Column node, received " + n2[f2].nodeName;
              if (c2 += 1, h2 > 0 && c2 > u2) throw "XmlLoader Exception : In the Grid element, the number of columns is defined in the first row, do not add more columns in the subsequent rows.";
              if (0 == h2) {
                if (!n2[f2].attributes.getNamedItem("width")) throw "XmlLoader Exception : Width must be defined for all the grid columns in the first row";
                o2 = Number(n2[f2].attributes.getNamedItem("width").nodeValue), _2 = !!n2[f2].attributes.getNamedItem("isPixel") && JSON.parse(n2[f2].attributes.getNamedItem("isPixel").nodeValue), e2.addColumnDefinition(o2, _2);
              }
              a2 = n2[f2].children;
              for (var p2 = 0; p2 < a2.length; p2++) a2[p2].nodeType == this._nodeTypes.element && (s2 = this._createGuiElement(a2[p2], e2, false), e2.addControl(s2, h2, c2), a2[p2].firstChild && this._parseXml(a2[p2].firstChild, s2));
            }
            0 == h2 && (u2 = c2), c2 = -1;
          }
          t3.nextSibling && this._parseXml(t3.nextSibling, i2);
        }, t2.prototype._parseElement = function(t3, e2, i2) {
          t3.firstChild && this._parseXml(t3.firstChild, e2), t3.nextSibling && this._parseXml(t3.nextSibling, i2);
        }, t2.prototype._prepareSourceElement = function(t3, e2, i2, o2, r2) {
          this._parentClass ? this._parentClass[i2] = o2[r2] : window[i2] = o2[r2], t3.firstChild && this._parseXml(t3.firstChild, e2, true);
        }, t2.prototype._parseElementsFromSource = function(t3, e2, i2) {
          var o2 = t3.attributes.getNamedItem("dataSource").value;
          if (!o2.includes(" in ")) throw "XmlLoader Exception : Malformed XML, Data Source must include an in";
          var r2 = true, n2 = o2.split(" in ");
          if (n2.length < 2) throw "XmlLoader Exception : Malformed XML, Data Source must have an iterator and a source";
          var a2 = n2[1];
          if (a2.startsWith("{") && a2.endsWith("}") && (r2 = false), (!r2 || a2.startsWith("[") && a2.endsWith("]")) && (a2 = a2.substring(1, a2.length - 1)), a2 = this._parentClass ? this._parentClass[a2] : window[a2], r2) for (var s2 = 0; s2 < a2.length; s2++) this._prepareSourceElement(t3, e2, n2[0], a2, s2);
          else for (var s2 in a2) this._prepareSourceElement(t3, e2, n2[0], a2, s2);
          t3.nextSibling && this._parseXml(t3.nextSibling, i2);
        }, t2.prototype._parseXml = function(t3, e2, i2) {
          if (void 0 === i2 && (i2 = false), t3.nodeType == this._nodeTypes.element) {
            i2 && t3.setAttribute("id", e2.id + (e2._children.length + 1));
            var o2 = this._createGuiElement(t3, e2);
            this._rootNode || (this._rootNode = o2), "Grid" == t3.nodeName ? this._parseGrid(t3, o2, e2) : t3.attributes.getNamedItem("dataSource") ? this._parseElementsFromSource(t3, o2, e2) : this._parseElement(t3, o2, e2);
          } else t3.nextSibling && this._parseXml(t3.nextSibling, e2, i2);
        }, t2.prototype.isLoaded = function() {
          return this._isLoaded;
        }, t2.prototype.getNodeById = function(t3) {
          return this._nodes[t3];
        }, t2.prototype.getNodes = function() {
          return this._nodes;
        }, t2.prototype.dispose = function() {
          this._rootNode && (this._rootNode.dispose(), this._rootNode = null, this._nodes = {});
        }, t2.prototype.loadLayout = function(t3, e2, i2, o2) {
          var r2 = this;
          void 0 === i2 && (i2 = null), void 0 === o2 && (o2 = null);
          var n2 = new XMLHttpRequest();
          n2.onload = function() {
            if (4 === n2.readyState && 200 === n2.status) {
              if (!n2.responseXML) {
                if (o2) return void o2(pt);
                throw pt;
              }
              var t4 = n2.responseXML.documentElement;
              r2._parseXml(t4.firstChild, e2), r2._isLoaded = true, i2 && i2();
            }
          }, n2.onerror = function() {
            o2 && o2("an error occurred during loading the layout");
          }, n2.open("GET", t3, true), n2.send();
        }, t2.prototype.loadLayoutAsync = function(t3, e2) {
          return c(this, void 0, void 0, function() {
            var i2 = this;
            return u(this, function(o2) {
              switch (o2.label) {
                case 0:
                  return [4, new Promise(function(o3, r2) {
                    i2.loadLayout(t3, e2, o3, r2);
                  })];
                case 1:
                  return [2, o2.sent()];
              }
            });
          });
        }, t2;
      }(), bt = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = 0);
          var o2 = t2.call(this, e3.x, e3.y, e3.z) || this;
          return o2.buttonIndex = i2, o2;
        }
        return l(e2, t2), e2;
      }(d.Vector3), mt = function() {
        function t2(t3) {
          this.name = t3, this._downCount = 0, this._enterCount = -1, this._downPointerIds = {}, this._isVisible = true, this._isScaledByManager = false, this.onPointerMoveObservable = new d.Observable(), this.onPointerOutObservable = new d.Observable(), this.onPointerDownObservable = new d.Observable(), this.onPointerUpObservable = new d.Observable(), this.onPointerClickObservable = new d.Observable(), this.onPointerEnterObservable = new d.Observable(), this._behaviors = new Array();
        }
        return Object.defineProperty(t2.prototype, "position", { get: function() {
          return this._node ? this._node.position : (this._position = this._position || d.Vector3.Zero(), this._position);
        }, set: function(t3) {
          this._position = t3, this._node && (this._node.position = this._position);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "scaling", { get: function() {
          return this._node ? this._node.scaling : (this._scaling = this.scaling || new d.Vector3(1, 1, 1), this._scaling);
        }, set: function(t3) {
          this._scaling = t3, this._node && (this._isScaledByManager = false, this._node.scaling = this._scaling);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "behaviors", { get: function() {
          return this._behaviors;
        }, enumerable: false, configurable: true }), t2.prototype.addBehavior = function(t3) {
          var e2 = this;
          if (-1 !== this._behaviors.indexOf(t3)) return this;
          t3.init();
          var i2 = this._host.scene;
          return i2.isLoading ? i2.onDataLoadedObservable.addOnce(function() {
            t3.attach(e2);
          }) : t3.attach(this), this._behaviors.push(t3), this;
        }, t2.prototype.removeBehavior = function(t3) {
          var e2 = this._behaviors.indexOf(t3);
          return -1 === e2 || (this._behaviors[e2].detach(), this._behaviors.splice(e2, 1)), this;
        }, t2.prototype.getBehaviorByName = function(t3) {
          for (var e2 = 0, i2 = this._behaviors; e2 < i2.length; e2++) {
            var o2 = i2[e2];
            if (o2.name === t3) return o2;
          }
          return null;
        }, Object.defineProperty(t2.prototype, "isVisible", { get: function() {
          return this._isVisible;
        }, set: function(t3) {
          if (this._isVisible !== t3) {
            this._isVisible = t3;
            var e2 = this.mesh;
            e2 && e2.setEnabled(t3);
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "typeName", { get: function() {
          return this._getTypeName();
        }, enumerable: false, configurable: true }), t2.prototype.getClassName = function() {
          return this._getTypeName();
        }, t2.prototype._getTypeName = function() {
          return "Control3D";
        }, Object.defineProperty(t2.prototype, "node", { get: function() {
          return this._node;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "mesh", { get: function() {
          return this._node instanceof d.AbstractMesh ? this._node : null;
        }, enumerable: false, configurable: true }), t2.prototype.linkToTransformNode = function(t3) {
          return this._node && (this._node.parent = t3), this;
        }, t2.prototype._prepareNode = function(t3) {
          if (!this._node) {
            if (this._node = this._createNode(t3), !this.node) return;
            this._position && (this.node.position = this._position), this._scaling && (this.node.scaling = this._scaling), this._injectGUI3DReservedDataStore(this.node).control = this;
            var e2 = this.mesh;
            e2 && (e2.isPickable = true, this._affectMaterial(e2));
          }
        }, t2.prototype._injectGUI3DReservedDataStore = function(t3) {
          var e2, i2;
          return t3.reservedDataStore = null !== (e2 = t3.reservedDataStore) && void 0 !== e2 ? e2 : {}, t3.reservedDataStore.GUI3D = null !== (i2 = t3.reservedDataStore.GUI3D) && void 0 !== i2 ? i2 : {}, t3.reservedDataStore.GUI3D;
        }, t2.prototype._createNode = function(t3) {
          return null;
        }, t2.prototype._affectMaterial = function(t3) {
          t3.material = null;
        }, t2.prototype._isTouchButton3D = function(t3) {
          return void 0 !== t3._generatePointerEventType;
        }, t2.prototype._onPointerMove = function(t3, e2) {
          this.onPointerMoveObservable.notifyObservers(e2, -1, t3, this);
        }, t2.prototype._onPointerEnter = function(t3) {
          return -1 === this._enterCount && (this._enterCount = 0), this._enterCount++, !(this._enterCount > 1 || (this.onPointerEnterObservable.notifyObservers(this, -1, t3, this), this.pointerEnterAnimation && this.pointerEnterAnimation(), 0));
        }, t2.prototype._onPointerOut = function(t3) {
          this._enterCount--, this._enterCount > 0 || (this._enterCount = 0, this.onPointerOutObservable.notifyObservers(this, -1, t3, this), this.pointerOutAnimation && this.pointerOutAnimation());
        }, t2.prototype._onPointerDown = function(t3, e2, i2, o2) {
          return this._downCount++, this._downPointerIds[i2] = this._downPointerIds[i2] + 1 || 1, 1 === this._downCount && (this.onPointerDownObservable.notifyObservers(new bt(e2, o2), -1, t3, this), this.pointerDownAnimation && this.pointerDownAnimation(), true);
        }, t2.prototype._onPointerUp = function(t3, e2, i2, o2, r2) {
          this._downCount--, this._downPointerIds[i2]--, this._downPointerIds[i2] <= 0 && delete this._downPointerIds[i2], this._downCount < 0 ? this._downCount = 0 : 0 == this._downCount && (r2 && (this._enterCount > 0 || -1 === this._enterCount) && this.onPointerClickObservable.notifyObservers(new bt(e2, o2), -1, t3, this), this.onPointerUpObservable.notifyObservers(new bt(e2, o2), -1, t3, this), this.pointerUpAnimation && this.pointerUpAnimation());
        }, t2.prototype.forcePointerUp = function(t3) {
          if (void 0 === t3 && (t3 = null), null !== t3) this._onPointerUp(this, d.Vector3.Zero(), t3, 0, true);
          else {
            for (var e2 in this._downPointerIds) this._onPointerUp(this, d.Vector3.Zero(), +e2, 0, true);
            this._downCount > 0 && (this._downCount = 1, this._onPointerUp(this, d.Vector3.Zero(), 0, 0, true));
          }
        }, t2.prototype._processObservables = function(t3, e2, i2, o2, r2) {
          if (this._isTouchButton3D(this) && i2 && (t3 = this._generatePointerEventType(t3, i2, this._downCount)), t3 === d.PointerEventTypes.POINTERMOVE) {
            this._onPointerMove(this, e2);
            var n2 = this._host._lastControlOver[o2];
            return n2 && n2 !== this && n2._onPointerOut(this), n2 !== this && this._onPointerEnter(this), this._host._lastControlOver[o2] = this, true;
          }
          return t3 === d.PointerEventTypes.POINTERDOWN ? (this._onPointerDown(this, e2, o2, r2), this._host._lastControlDown[o2] = this, this._host._lastPickedControl = this, true) : (t3 === d.PointerEventTypes.POINTERUP || t3 === d.PointerEventTypes.POINTERDOUBLETAP) && (this._host._lastControlDown[o2] && this._host._lastControlDown[o2]._onPointerUp(this, e2, o2, r2, true), delete this._host._lastControlDown[o2], true);
        }, t2.prototype._disposeNode = function() {
          this._node && (this._node.dispose(), this._node = null);
        }, t2.prototype.dispose = function() {
          this.onPointerDownObservable.clear(), this.onPointerEnterObservable.clear(), this.onPointerMoveObservable.clear(), this.onPointerOutObservable.clear(), this.onPointerUpObservable.clear(), this.onPointerClickObservable.clear(), this._disposeNode();
          for (var t3 = 0, e2 = this._behaviors; t3 < e2.length; t3++) e2[t3].detach();
        }, t2;
      }(), vt = function(t2) {
        function e2() {
          var e3 = null !== t2 && t2.apply(this, arguments) || this;
          return e3._contentResolution = 512, e3._contentScaleRatio = 2, e3;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "content", { get: function() {
          return this._content;
        }, set: function(t3) {
          if (this._content = t3, t3 && this._host && this._host.utilityLayer) {
            if (this._facadeTexture) this._facadeTexture.rootContainer.clearControls();
            else {
              var e3 = "number" == typeof this._contentResolution ? this._contentResolution : this._contentResolution.width, i2 = "number" == typeof this._contentResolution ? this._contentResolution : this._contentResolution.height;
              this._facadeTexture = new ct("Facade", e3, i2, this._host.utilityLayer.utilityLayerScene, true, d.Texture.TRILINEAR_SAMPLINGMODE), this._setFacadeTextureScaling(), this._facadeTexture.premulAlpha = true;
            }
            this._facadeTexture.addControl(t3), this._applyFacade(this._facadeTexture);
          }
        }, enumerable: false, configurable: true }), e2.prototype._setFacadeTextureScaling = function() {
          var t3;
          this._facadeTexture && ("number" != typeof this._contentResolution && (this._contentScaleRatioY = this._contentResolution.height / this._contentResolution.width * this._contentScaleRatio), this._facadeTexture.rootContainer.scaleX = this._contentScaleRatio, this._facadeTexture.rootContainer.scaleY = null !== (t3 = this._contentScaleRatioY) && void 0 !== t3 ? t3 : this._contentScaleRatio);
        }, Object.defineProperty(e2.prototype, "contentResolution", { get: function() {
          return this._contentResolution;
        }, set: function(t3) {
          var e3 = "number" == typeof t3 ? t3 : t3.width, i2 = "number" == typeof t3 ? t3 : t3.height, o2 = "number" == typeof this._contentResolution ? this._contentResolution : this._contentResolution.width, r2 = "number" == typeof this._contentResolution ? this._contentResolution : this._contentResolution.height;
          e3 === o2 && i2 === r2 || (this._contentResolution = t3, this._resetContent());
        }, enumerable: false, configurable: true }), e2.prototype._disposeFacadeTexture = function() {
          this._facadeTexture && (this._facadeTexture.dispose(), this._facadeTexture = null);
        }, e2.prototype._resetContent = function() {
          this._disposeFacadeTexture(), this.content = this._content;
        }, e2.prototype._applyFacade = function(t3) {
        }, e2;
      }(mt), yt = function(t2) {
        function e2(e3) {
          return t2.call(this, e3) || this;
        }
        return l(e2, t2), e2.prototype._getTypeName = function() {
          return "AbstractButton3D";
        }, e2.prototype._createNode = function(t3) {
          return new d.TransformNode("button" + this.name, t3);
        }, e2;
      }(vt), xt = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3) || this;
          return o2._options = _({ width: 1, height: 1, depth: 0.08 }, i2), o2.pointerEnterAnimation = function() {
            o2.mesh && (o2._currentMaterial.emissiveColor = d.Color3.Red());
          }, o2.pointerOutAnimation = function() {
            o2._currentMaterial.emissiveColor = d.Color3.Black();
          }, o2.pointerDownAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(0.95);
          }, o2.pointerUpAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(1 / 0.95);
          }, o2;
        }
        return l(e2, t2), e2.prototype._applyFacade = function(t3) {
          this._currentMaterial.emissiveTexture = t3;
        }, e2.prototype._getTypeName = function() {
          return "Button3D";
        }, e2.prototype._createNode = function(t3) {
          for (var e3 = new Array(6), i2 = 0; i2 < 6; i2++) e3[i2] = new d.Vector4(0, 0, 0, 0);
          t3.useRightHandedSystem ? e3[0].copyFromFloats(1, 0, 0, 1) : e3[1].copyFromFloats(0, 0, 1, 1);
          var o2 = (0, d.CreateBox)(this.name + "_rootMesh", { width: this._options.width, height: this._options.height, depth: this._options.depth, faceUV: e3, wrap: true }, t3);
          return this._contentScaleRatioY = this._contentScaleRatio * this._options.width / this._options.height, this._setFacadeTextureScaling(), o2;
        }, e2.prototype._affectMaterial = function(t3) {
          var e3 = new d.StandardMaterial(this.name + "Material", t3.getScene());
          e3.specularColor = d.Color3.Black(), t3.material = e3, this._currentMaterial = e3, this._resetContent();
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._disposeFacadeTexture(), this._currentMaterial && this._currentMaterial.dispose();
        }, e2;
      }(yt), Pt = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2._blockLayout = false, i2._children = new Array(), i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "children", { get: function() {
          return this._children;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "blockLayout", { get: function() {
          return this._blockLayout;
        }, set: function(t3) {
          this._blockLayout !== t3 && (this._blockLayout = t3, this._blockLayout || this._arrangeChildren());
        }, enumerable: false, configurable: true }), e2.prototype.updateLayout = function() {
          return this._arrangeChildren(), this;
        }, e2.prototype.containsControl = function(t3) {
          return -1 !== this._children.indexOf(t3);
        }, e2.prototype.addControl = function(t3) {
          return -1 !== this._children.indexOf(t3) || (t3.parent = this, t3._host = this._host, this._children.push(t3), this._host.utilityLayer && (t3._prepareNode(this._host.utilityLayer.utilityLayerScene), t3.node && (t3.node.parent = this.node), this.blockLayout || this._arrangeChildren())), this;
        }, e2.prototype._arrangeChildren = function() {
        }, e2.prototype._createNode = function(t3) {
          return new d.TransformNode("ContainerNode", t3);
        }, e2.prototype.removeControl = function(t3) {
          var e3 = this._children.indexOf(t3);
          return -1 !== e3 && (this._children.splice(e3, 1), t3.parent = null, t3._disposeNode()), this;
        }, e2.prototype._getTypeName = function() {
          return "Container3D";
        }, e2.prototype.dispose = function() {
          for (var e3 = 0, i2 = this._children; e3 < i2.length; e3++) i2[e3].dispose();
          this._children.length = 0, t2.prototype.dispose.call(this);
        }, e2.UNSET_ORIENTATION = 0, e2.FACEORIGIN_ORIENTATION = 1, e2.FACEORIGINREVERSED_ORIENTATION = 2, e2.FACEFORWARD_ORIENTATION = 3, e2.FACEFORWARDREVERSED_ORIENTATION = 4, e2;
      }(mt), It = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2._columns = 10, i2._rows = 0, i2._rowThenColum = true, i2._orientation = Pt.FACEORIGIN_ORIENTATION, i2.margin = 0, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "orientation", { get: function() {
          return this._orientation;
        }, set: function(t3) {
          var e3 = this;
          this._orientation !== t3 && (this._orientation = t3, d.Tools.SetImmediate(function() {
            e3._arrangeChildren();
          }));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "columns", { get: function() {
          return this._columns;
        }, set: function(t3) {
          var e3 = this;
          this._columns !== t3 && (this._columns = t3, this._rowThenColum = true, d.Tools.SetImmediate(function() {
            e3._arrangeChildren();
          }));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "rows", { get: function() {
          return this._rows;
        }, set: function(t3) {
          var e3 = this;
          this._rows !== t3 && (this._rows = t3, this._rowThenColum = false, d.Tools.SetImmediate(function() {
            e3._arrangeChildren();
          }));
        }, enumerable: false, configurable: true }), e2.prototype._arrangeChildren = function() {
          this._cellWidth = 0, this._cellHeight = 0;
          for (var t3 = 0, e3 = 0, i2 = 0, o2 = 0, r2 = this._children; o2 < r2.length; o2++) if ((y2 = r2[o2]).mesh) {
            i2++, y2.mesh.computeWorldMatrix(true);
            for (var n2 = y2.mesh.getBoundingInfo().boundingBox.extendSize, a2 = 0, s2 = y2.mesh.getDescendants(false); a2 < s2.length; a2++) {
              var l2 = s2[a2];
              l2.computeWorldMatrix(true);
              var _2 = l2;
              if ("function" == typeof _2.getBoundingInfo) {
                var h2 = _2.getBoundingInfo().boundingBox.extendSize;
                n2.x = Math.max(n2.x, h2.x), n2.y = Math.max(n2.y, h2.y), n2.z = Math.max(n2.z, h2.z);
              }
            }
            this._cellWidth = Math.max(this._cellWidth, 2 * n2.x), this._cellHeight = Math.max(this._cellHeight, 2 * n2.y);
          }
          this._cellWidth += 2 * this.margin, this._cellHeight += 2 * this.margin, this._rowThenColum ? (e3 = this._columns, t3 = Math.ceil(i2 / this._columns)) : (t3 = this._rows, e3 = Math.ceil(i2 / this._rows));
          var c2 = 0.5 * e3 * this._cellWidth, u2 = 0.5 * t3 * this._cellHeight, f2 = [], p2 = 0;
          if (this._rowThenColum) for (var g2 = 0; g2 < t3; g2++) for (var b2 = 0; b2 < e3 && (f2.push(new d.Vector3(b2 * this._cellWidth - c2 + this._cellWidth / 2, g2 * this._cellHeight - u2 + this._cellHeight / 2, 0)), !(++p2 > i2)); b2++) ;
          else for (b2 = 0; b2 < e3; b2++) for (g2 = 0; g2 < t3 && (f2.push(new d.Vector3(b2 * this._cellWidth - c2 + this._cellWidth / 2, g2 * this._cellHeight - u2 + this._cellHeight / 2, 0)), !(++p2 > i2)); g2++) ;
          p2 = 0;
          for (var m2 = 0, v2 = this._children; m2 < v2.length; m2++) {
            var y2;
            (y2 = v2[m2]).mesh && (this._mapGridNode(y2, f2[p2]), p2++);
          }
          this._finalProcessing();
        }, e2.prototype._finalProcessing = function() {
        }, e2;
      }(Pt), Bt = function(t2) {
        function e2() {
          var e3 = null !== t2 && t2.apply(this, arguments) || this;
          return e3._radius = 5, e3;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "radius", { get: function() {
          return this._radius;
        }, set: function(t3) {
          var e3 = this;
          this._radius !== t3 && (this._radius = t3, d.Tools.SetImmediate(function() {
            e3._arrangeChildren();
          }));
        }, enumerable: false, configurable: true }), e2.prototype._mapGridNode = function(t3, e3) {
          var i2 = t3.mesh;
          if (i2) {
            var o2 = this._cylindricalMapping(e3);
            switch (t3.position = o2, this.orientation) {
              case Pt.FACEORIGIN_ORIENTATION:
                i2.lookAt(new d.Vector3(2 * o2.x, o2.y, 2 * o2.z));
                break;
              case Pt.FACEORIGINREVERSED_ORIENTATION:
                i2.lookAt(new d.Vector3(-o2.x, o2.y, -o2.z));
                break;
              case Pt.FACEFORWARD_ORIENTATION:
                break;
              case Pt.FACEFORWARDREVERSED_ORIENTATION:
                i2.rotate(d.Axis.Y, Math.PI, 0);
            }
          }
        }, e2.prototype._cylindricalMapping = function(t3) {
          var e3 = new d.Vector3(0, t3.y, this._radius), i2 = t3.x / this._radius;
          return d.Matrix.RotationYawPitchRollToRef(i2, 0, 0, d.TmpVectors.Matrix[0]), d.Vector3.TransformNormal(e3, d.TmpVectors.Matrix[0]);
        }, e2;
      }(It), Ct = "fluentVertexShader";
      d.ShaderStore.ShadersStore[Ct] || (d.ShaderStore.ShadersStore[Ct] = "precision highp float;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 world;uniform mat4 viewProjection;varying vec2 vUV;\n#ifdef BORDER\nvarying vec2 scaleInfo;uniform float borderWidth;uniform vec3 scaleFactor;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;\n#endif\nvoid main(void) {vUV=uv;\n#ifdef BORDER\nvec3 scale=scaleFactor;float minScale=min(min(scale.x,scale.y),scale.z);float maxScale=max(max(scale.x,scale.y),scale.z);float minOverMiddleScale=minScale/(scale.x+scale.y+scale.z-minScale-maxScale);float areaYZ=scale.y*scale.z;float areaXZ=scale.x*scale.z;float areaXY=scale.x*scale.y;float scaledBorderWidth=borderWidth; \nif (abs(normal.x)==1.0) \n{scale.x=scale.y;scale.y=scale.z;if (areaYZ>areaXZ && areaYZ>areaXY)\n{scaledBorderWidth*=minOverMiddleScale;}}\nelse if (abs(normal.y)==1.0) \n{scale.x=scale.z;if (areaXZ>areaXY && areaXZ>areaYZ)\n{scaledBorderWidth*=minOverMiddleScale;}}\nelse \n{if (areaXY>areaYZ && areaXY>areaXZ)\n{scaledBorderWidth*=minOverMiddleScale;}}\nfloat scaleRatio=min(scale.x,scale.y)/max(scale.x,scale.y);if (scale.x>scale.y)\n{scaleInfo.x=1.0-(scaledBorderWidth*scaleRatio);scaleInfo.y=1.0-scaledBorderWidth;}\nelse\n{scaleInfo.x=1.0-scaledBorderWidth;scaleInfo.y=1.0-(scaledBorderWidth*scaleRatio);} \n#endif \nvec4 worldPos=world*vec4(position,1.0);\n#ifdef HOVERLIGHT\nworldPosition=worldPos.xyz;\n#endif\ngl_Position=viewProjection*worldPos;}\n");
      var Tt = "fluentPixelShader";
      d.ShaderStore.ShadersStore[Tt] || (d.ShaderStore.ShadersStore[Tt] = "precision highp float;varying vec2 vUV;uniform vec4 albedoColor;\n#ifdef INNERGLOW\nuniform vec4 innerGlowColor;\n#endif\n#ifdef BORDER\nvarying vec2 scaleInfo;uniform float edgeSmoothingValue;uniform float borderMinValue;\n#endif\n#ifdef HOVERLIGHT\nvarying vec3 worldPosition;uniform vec3 hoverPosition;uniform vec4 hoverColor;uniform float hoverRadius;\n#endif\n#ifdef TEXTURE\nuniform sampler2D albedoSampler;uniform mat4 textureMatrix;vec2 finalUV;\n#endif\nvoid main(void) {vec3 albedo=albedoColor.rgb;float alpha=albedoColor.a;\n#ifdef TEXTURE\nfinalUV=vec2(textureMatrix*vec4(vUV,1.0,0.0));albedo=texture2D(albedoSampler,finalUV).rgb;\n#endif\n#ifdef HOVERLIGHT\nfloat pointToHover=(1.0-clamp(length(hoverPosition-worldPosition)/hoverRadius,0.,1.))*hoverColor.a;albedo=clamp(albedo+hoverColor.rgb*pointToHover,0.,1.);\n#else\nfloat pointToHover=1.0;\n#endif\n#ifdef BORDER \nfloat borderPower=10.0;float inverseBorderPower=1.0/borderPower;vec3 borderColor=albedo*borderPower;vec2 distanceToEdge;distanceToEdge.x=abs(vUV.x-0.5)*2.0;distanceToEdge.y=abs(vUV.y-0.5)*2.0;float borderValue=max(smoothstep(scaleInfo.x-edgeSmoothingValue,scaleInfo.x+edgeSmoothingValue,distanceToEdge.x),\nsmoothstep(scaleInfo.y-edgeSmoothingValue,scaleInfo.y+edgeSmoothingValue,distanceToEdge.y));borderColor=borderColor*borderValue*max(borderMinValue*inverseBorderPower,pointToHover); \nalbedo+=borderColor;alpha=max(alpha,borderValue);\n#endif\n#ifdef INNERGLOW\nvec2 uvGlow=(vUV-vec2(0.5,0.5))*(innerGlowColor.a*2.0);uvGlow=uvGlow*uvGlow;uvGlow=uvGlow*uvGlow;albedo+=mix(vec3(0.0,0.0,0.0),innerGlowColor.rgb,uvGlow.x+uvGlow.y); \n#endif\ngl_FragColor=vec4(albedo,alpha);}");
      var St = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3.INNERGLOW = false, e3.BORDER = false, e3.HOVERLIGHT = false, e3.TEXTURE = false, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), Ot = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3, i2) || this;
          return o2.innerGlowColorIntensity = 0.5, o2.innerGlowColor = new d.Color3(1, 1, 1), o2.albedoColor = new d.Color3(0.3, 0.35, 0.4), o2.renderBorders = false, o2.borderWidth = 0.5, o2.edgeSmoothingValue = 0.02, o2.borderMinValue = 0.1, o2.renderHoverLight = false, o2.hoverRadius = 0.01, o2.hoverColor = new d.Color4(0.3, 0.3, 0.3, 1), o2.hoverPosition = d.Vector3.Zero(), o2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return 1 !== this.alpha;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new St());
          var o2 = this.getScene(), r2 = e3.materialDefines;
          if (!this.checkReadyOnEveryCall && e3.effect && r2._renderId === o2.getRenderId()) return true;
          if (r2._areTexturesDirty) if (r2.INNERGLOW = this.innerGlowColorIntensity > 0, r2.BORDER = this.renderBorders, r2.HOVERLIGHT = this.renderHoverLight, this._albedoTexture) {
            if (!this._albedoTexture.isReadyOrNotBlocking()) return false;
            r2.TEXTURE = true;
          } else r2.TEXTURE = false;
          var n2 = o2.getEngine();
          if (r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = [d.VertexBuffer.PositionKind];
            a2.push(d.VertexBuffer.NormalKind), a2.push(d.VertexBuffer.UVKind);
            var s2 = ["world", "viewProjection", "innerGlowColor", "albedoColor", "borderWidth", "edgeSmoothingValue", "scaleFactor", "borderMinValue", "hoverColor", "hoverPosition", "hoverRadius", "textureMatrix"], l2 = ["albedoSampler"], _2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: s2, uniformBuffersNames: _2, samplers: l2, defines: r2, maxSimultaneousLights: 4 });
            var h2 = r2.toString();
            e3.setEffect(o2.getEngine().createEffect("fluent", { attributes: a2, uniformsNames: s2, uniformBuffersNames: _2, samplers: l2, defines: h2, fallbacks: null, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), r2, this._materialContext);
          }
          return !(!e3.effect || !e3.effect.isReady() || (r2._renderId = o2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          var o2 = this.getScene(), r2 = i2.materialDefines;
          if (r2) {
            var n2 = i2.effect;
            if (n2) {
              if (this._activeEffect = n2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", o2.getTransformMatrix()), this._mustRebind(o2, n2, i2) && (this._activeEffect.setColor4("albedoColor", this.albedoColor, this.alpha), r2.INNERGLOW && this._activeEffect.setColor4("innerGlowColor", this.innerGlowColor, this.innerGlowColorIntensity), r2.BORDER && (this._activeEffect.setFloat("borderWidth", this.borderWidth), this._activeEffect.setFloat("edgeSmoothingValue", this.edgeSmoothingValue), this._activeEffect.setFloat("borderMinValue", this.borderMinValue), e3.getBoundingInfo().boundingBox.extendSize.multiplyToRef(e3.scaling, d.TmpVectors.Vector3[0]), this._activeEffect.setVector3("scaleFactor", d.TmpVectors.Vector3[0])), r2.HOVERLIGHT && (this._activeEffect.setDirectColor4("hoverColor", this.hoverColor), this._activeEffect.setFloat("hoverRadius", this.hoverRadius), this._activeEffect.setVector3("hoverPosition", this.hoverPosition)), r2.TEXTURE && this._albedoTexture)) {
                this._activeEffect.setTexture("albedoSampler", this._albedoTexture);
                var a2 = this._albedoTexture.getTextureMatrix();
                this._activeEffect.setMatrix("textureMatrix", a2);
              }
              this._afterBind(e3, this._activeEffect, i2);
            }
          }
        }, e2.prototype.getActiveTextures = function() {
          return t2.prototype.getActiveTextures.call(this);
        }, e2.prototype.hasTexture = function(e3) {
          return !!t2.prototype.hasTexture.call(this, e3);
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3);
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var e3 = t2.prototype.serialize.call(this);
          return e3.customType = "BABYLON.GUI.FluentMaterial", e3;
        }, e2.prototype.getClassName = function() {
          return "FluentMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, h([(0, d.serialize)(), (0, d.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], e2.prototype, "innerGlowColorIntensity", void 0), h([(0, d.serializeAsColor3)()], e2.prototype, "innerGlowColor", void 0), h([(0, d.serializeAsColor3)()], e2.prototype, "albedoColor", void 0), h([(0, d.serialize)(), (0, d.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], e2.prototype, "renderBorders", void 0), h([(0, d.serialize)()], e2.prototype, "borderWidth", void 0), h([(0, d.serialize)()], e2.prototype, "edgeSmoothingValue", void 0), h([(0, d.serialize)()], e2.prototype, "borderMinValue", void 0), h([(0, d.serialize)(), (0, d.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], e2.prototype, "renderHoverLight", void 0), h([(0, d.serialize)()], e2.prototype, "hoverRadius", void 0), h([(0, d.serializeAsColor4)()], e2.prototype, "hoverColor", void 0), h([(0, d.serializeAsVector3)()], e2.prototype, "hoverPosition", void 0), h([(0, d.serializeAsTexture)("albedoTexture")], e2.prototype, "_albedoTexture", void 0), h([(0, d.expandToProperty)("_markAllSubMeshesAsTexturesAndMiscDirty")], e2.prototype, "albedoTexture", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.FluentMaterial", Ot);
      var Rt = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2._backPlateMargin = 1.25, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "backPlateMargin", { get: function() {
          return this._backPlateMargin;
        }, set: function(t3) {
          if (this._backPlateMargin = t3, this._children.length >= 1) {
            for (var e3 = 0, i2 = this.children; e3 < i2.length; e3++) {
              var o2 = i2[e3];
              this._updateCurrentMinMax(o2.position);
            }
            this._updateMargins();
          }
        }, enumerable: false, configurable: true }), e2.prototype._createNode = function(t3) {
          var e3 = new d.Mesh("menu_".concat(this.name), t3);
          return this._backPlate = (0, d.CreateBox)("backPlate" + this.name, { size: 1 }, t3), this._backPlate.parent = e3, e3;
        }, e2.prototype._affectMaterial = function(t3) {
          var e3 = this;
          this._backPlateMaterial = new Ot(this.name + "backPlateMaterial", t3.getScene()), this._backPlateMaterial.albedoColor = new d.Color3(0.08, 0.15, 0.55), this._backPlateMaterial.renderBorders = true, this._backPlateMaterial.renderHoverLight = true, this._pickedPointObserver = this._host.onPickedPointChangedObservable.add(function(t4) {
            t4 ? (e3._backPlateMaterial.hoverPosition = t4, e3._backPlateMaterial.hoverColor.a = 1) : e3._backPlateMaterial.hoverColor.a = 0;
          }), this._backPlate.material = this._backPlateMaterial;
        }, e2.prototype._mapGridNode = function(t3, e3) {
          t3.mesh && (t3.position = e3.clone(), this._updateCurrentMinMax(e3));
        }, e2.prototype._finalProcessing = function() {
          this._updateMargins();
        }, e2.prototype._updateCurrentMinMax = function(t3) {
          this._currentMin || (this._currentMin = t3.clone(), this._currentMax = t3.clone()), this._currentMin.minimizeInPlace(t3), this._currentMax.maximizeInPlace(t3);
        }, e2.prototype._updateMargins = function() {
          if (this._children.length > 0) {
            this._currentMin.addInPlaceFromFloats(-this._cellWidth / 2, -this._cellHeight / 2, 0), this._currentMax.addInPlaceFromFloats(this._cellWidth / 2, this._cellHeight / 2, 0);
            var t3 = this._currentMax.subtract(this._currentMin);
            this._backPlate.scaling.x = t3.x + this._cellWidth * this.backPlateMargin, this._backPlate.scaling.y = t3.y + this._cellHeight * this.backPlateMargin, this._backPlate.scaling.z = 1e-3;
            for (var e3 = 0; e3 < this._children.length; e3++) this._children[e3].position.subtractInPlace(this._currentMin).subtractInPlace(t3.scale(0.5)), this._children[e3].position.z -= 0.01;
          }
          this._currentMin = null, this._currentMax = null;
        }, e2.prototype.addButton = function(i2) {
          var o2 = this.blockLayout;
          return o2 || (this.blockLayout = true), t2.prototype.addControl.call(this, i2), i2.isBackplateVisible = false, i2.scaling.scaleInPlace(e2.MENU_BUTTON_SCALE), o2 || (this.blockLayout = false), this;
        }, e2.prototype.addControl = function(t3) {
          return d.Logger.Warn("TouchHolographicMenu can only contain buttons. Please use the method `addButton` instead."), this;
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver);
        }, e2.MENU_BUTTON_SCALE = 1, e2;
      }(It), wt = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, i2) || this;
          return o2._handConstraintBehavior = new d.HandConstraintBehavior(), o2._handConstraintBehavior.linkToXRExperience(e3), o2.backPlateMargin = 0.15, o2.rows = 3, o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "handConstraintBehavior", { get: function() {
          return this._handConstraintBehavior;
        }, enumerable: false, configurable: true }), e2.prototype._createNode = function(e3) {
          var i2 = t2.prototype._createNode.call(this, e3);
          return this._handConstraintBehavior.attach(i2), i2;
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._handConstraintBehavior.detach();
        }, e2;
      }(Rt), Mt = "fluentBackplatePixelShader";
      d.ShaderStore.ShadersStore[Mt] || (d.ShaderStore.ShadersStore[Mt] = "uniform vec3 cameraPosition;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;uniform float _Radius_;uniform float _Line_Width_;uniform bool _Absolute_Sizes_;uniform float _Filter_Width_;uniform vec4 _Base_Color_;uniform vec4 _Line_Color_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform float _Rate_;uniform vec4 _Highlight_Color_;uniform float _Highlight_Width_;uniform vec4 _Highlight_Transform_;uniform float _Highlight_;uniform float _Iridescence_Intensity_;uniform float _Iridescence_Edge_Intensity_;uniform float _Angle_;uniform float _Fade_Out_;uniform bool _Reflected_;uniform float _Frequency_;uniform float _Vertical_Offset_;uniform sampler2D _Iridescent_Map_;uniform bool _Use_Global_Left_Index_;uniform bool _Use_Global_Right_Index_;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;void Round_Rect_Fragment_B31(\nfloat Radius,\nfloat Line_Width,\nvec4 Line_Color,\nfloat Filter_Width,\nvec2 UV,\nfloat Line_Visibility,\nvec4 Rect_Parms,\nvec4 Fill_Color,\nout vec4 Color)\n{float d=length(max(abs(UV)-Rect_Parms.xy,0.0));float dx=max(fwidth(d)*Filter_Width,0.00001);float g=min(Rect_Parms.z,Rect_Parms.w);float dgrad=max(fwidth(g)*Filter_Width,0.00001);float Inside_Rect=clamp(g/dgrad,0.0,1.0);float inner=clamp((d+dx*0.5-max(Radius-Line_Width,d-dx*0.5))/dx,0.0,1.0);Color=clamp(mix(Fill_Color,Line_Color,inner),0.0,1.0)*Inside_Rect;}\nvoid Blob_Fragment_B71(\nsampler2D Blob_Texture,\nvec4 Blob_Info1,\nvec4 Blob_Info2,\nout vec4 Blob_Color)\n{float k1=dot(Blob_Info1.xy,Blob_Info1.xy);float k2=dot(Blob_Info2.xy,Blob_Info2.xy);vec3 closer=k1<k2 ? vec3(k1,Blob_Info1.z,Blob_Info1.w) : vec3(k2,Blob_Info2.z,Blob_Info2.w);Blob_Color=closer.z*texture(Blob_Texture,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);}\nvoid Line_Fragment_B48(\nvec4 Base_Color,\nvec4 Highlight_Color,\nfloat Highlight_Width,\nvec3 Line_Vertex,\nfloat Highlight,\nout vec4 Line_Color)\n{float k2=1.0-clamp(abs(Line_Vertex.y/Highlight_Width),0.0,1.0);Line_Color=mix(Base_Color,Highlight_Color,Highlight*k2);}\nvoid Scale_RGB_B54(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=vec4(Scalar,Scalar,Scalar,1)*Color;}\nvoid Conditional_Float_B38(\nbool Which,\nfloat If_True,\nfloat If_False,\nout float Result)\n{Result=Which ? If_True : If_False;}\nvoid main()\n{float R_Q72;float G_Q72;float B_Q72;float A_Q72;R_Q72=vColor.r; G_Q72=vColor.g; B_Q72=vColor.b; A_Q72=vColor.a;vec4 Blob_Color_Q71;\n#if BLOB_ENABLE\nfloat k1=dot(vExtra2.xy,vExtra2.xy);float k2=dot(vExtra3.xy,vExtra3.xy);vec3 closer=k1<k2 ? vec3(k1,vExtra2.z,vExtra2.w) : vec3(k2,vExtra3.z,vExtra3.w);Blob_Color_Q71=closer.z*texture(_Blob_Texture_,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);\n#else\nBlob_Color_Q71=vec4(0,0,0,0);\n#endif\nvec4 Line_Color_Q48;Line_Fragment_B48(_Line_Color_,_Highlight_Color_,_Highlight_Width_,vTangent,_Highlight_,Line_Color_Q48);float X_Q67;float Y_Q67;X_Q67=vUV.x;Y_Q67=vUV.y;vec3 Incident_Q66=normalize(vPosition-cameraPosition);vec3 Reflected_Q60=reflect(Incident_Q66,vBinormal);float Product_Q63=Y_Q67*_Vertical_Offset_;float Dot_Q68=dot(Incident_Q66, Reflected_Q60);float Dot_Q57=dot(vNormal, Incident_Q66);float Result_Q38;Conditional_Float_B38(_Reflected_,Dot_Q68,Dot_Q57,Result_Q38);float Product_Q64=Result_Q38*_Frequency_;float Sum_Q69=Product_Q64+1.0;float Product_Q70=Sum_Q69*0.5;float Sum_Q62=Product_Q63+Product_Q70;float FractF_Q59=fract(Sum_Q62);vec2 Vec2_Q65=vec2(FractF_Q59,0.5);vec4 Color_Q58;\n#if IRIDESCENT_MAP_ENABLE\nColor_Q58=texture(_Iridescent_Map_,Vec2_Q65);\n#else\nColor_Q58=vec4(0,0,0,0);\n#endif\nvec4 Result_Q54;Scale_RGB_B54(Color_Q58,_Iridescence_Edge_Intensity_,Result_Q54);vec4 Result_Q55;Scale_RGB_B54(Color_Q58,_Iridescence_Intensity_,Result_Q55);vec4 Base_And_Iridescent_Q53;Base_And_Iridescent_Q53=Line_Color_Q48+vec4(Result_Q54.rgb,0.0);vec4 Base_And_Iridescent_Q56;Base_And_Iridescent_Q56=_Base_Color_+vec4(Result_Q55.rgb,0.0);vec4 Result_Q52=Base_And_Iridescent_Q53; Result_Q52.a=1.0;vec4 Result_Q35=Blob_Color_Q71+(1.0-Blob_Color_Q71.a)*Base_And_Iridescent_Q56;vec4 Color_Q31;Round_Rect_Fragment_B31(R_Q72,G_Q72,Result_Q52,_Filter_Width_,vUV,1.0,vExtra1,Result_Q35,Color_Q31);vec4 Result_Q47=_Fade_Out_*Color_Q31;vec4 Out_Color=Result_Q47;float Clip_Threshold=0.001;bool To_sRGB=false;gl_FragColor=Out_Color;}");
      var Et = "fluentBackplateVertexShader";
      d.ShaderStore.ShadersStore[Et] || (d.ShaderStore.ShadersStore[Et] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;\n#ifdef TANGENT\nattribute vec3 tangent;\n#else\nconst vec3 tangent=vec3(0.);\n#endif\nuniform float _Radius_;uniform float _Line_Width_;uniform bool _Absolute_Sizes_;uniform float _Filter_Width_;uniform vec4 _Base_Color_;uniform vec4 _Line_Color_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform float _Rate_;uniform vec4 _Highlight_Color_;uniform float _Highlight_Width_;uniform vec4 _Highlight_Transform_;uniform float _Highlight_;uniform float _Iridescence_Intensity_;uniform float _Iridescence_Edge_Intensity_;uniform float _Angle_;uniform float _Fade_Out_;uniform bool _Reflected_;uniform float _Frequency_;uniform float _Vertical_Offset_;uniform sampler2D _Iridescent_Map_;uniform bool _Use_Global_Left_Index_;uniform bool _Use_Global_Right_Index_;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;void Object_To_World_Pos_B115(\nvec3 Pos_Object,\nout vec3 Pos_World)\n{Pos_World=(world*vec4(Pos_Object,1.0)).xyz;}\nvoid PickDir_B140(\nfloat Degrees,\nvec3 DirX,\nvec3 DirY,\nout vec3 Dir)\n{float a=Degrees*3.14159/180.0;Dir=cos(a)*DirX+sin(a)*DirY;}\nvoid Round_Rect_Vertex_B139(\nvec2 UV,\nfloat Radius,\nfloat Margin,\nfloat Anisotropy,\nfloat Gradient1,\nfloat Gradient2,\nout vec2 Rect_UV,\nout vec4 Rect_Parms,\nout vec2 Scale_XY,\nout vec2 Line_UV)\n{Scale_XY=vec2(Anisotropy,1.0);Line_UV=(UV-vec2(0.5,0.5));Rect_UV=Line_UV*Scale_XY;Rect_Parms.xy=Scale_XY*0.5-vec2(Radius,Radius)-vec2(Margin,Margin);Rect_Parms.z=Gradient1; \nRect_Parms.w=Gradient2;}\nvoid Line_Vertex_B135(\nvec2 Scale_XY,\nvec2 UV,\nfloat Time,\nfloat Rate,\nvec4 Highlight_Transform,\nout vec3 Line_Vertex)\n{float angle2=(Rate*Time)*2.0*3.1416;float sinAngle2=sin(angle2);float cosAngle2=cos(angle2);vec2 xformUV=UV*Highlight_Transform.xy+Highlight_Transform.zw;Line_Vertex.x=0.0;Line_Vertex.y=cosAngle2*xformUV.x-sinAngle2*xformUV.y;Line_Vertex.z=0.0; }\nvoid Blob_Vertex_B180(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nvec3 Blob_Position,\nfloat Intensity,\nfloat Blob_Near_Size,\nfloat Blob_Far_Size,\nfloat Blob_Near_Distance,\nfloat Blob_Far_Distance,\nfloat Blob_Fade_Length,\nfloat Blob_Pulse,\nfloat Blob_Fade,\nout vec4 Blob_Info)\n{vec3 blob=Blob_Position;vec3 delta=blob-Position;float dist=dot(Normal,delta);float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);float Fade=fadeValue*Intensity*Blob_Fade;float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);}\nvoid Move_Verts_B129(\nfloat Anisotropy,\nvec3 P,\nfloat Radius,\nout vec3 New_P,\nout vec2 New_UV,\nout float Radial_Gradient,\nout vec3 Radial_Dir)\n{vec2 UV=P.xy*2.0+0.5;vec2 center=clamp(UV,0.0,1.0);vec2 delta=UV-center;vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);New_UV=center+r2*(UV-2.0*center+0.5);New_P=vec3(New_UV-0.5,P.z);Radial_Gradient=1.0-length(delta)*2.0;Radial_Dir=vec3(delta*r2,0.0);}\nvoid Object_To_World_Dir_B132(\nvec3 Dir_Object,\nout vec3 Binormal_World,\nout vec3 Binormal_World_N,\nout float Binormal_Length)\n{Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;Binormal_Length=length(Binormal_World);Binormal_World_N=Binormal_World/Binormal_Length;}\nvoid RelativeOrAbsoluteDetail_B147(\nfloat Nominal_Radius,\nfloat Nominal_LineWidth,\nbool Absolute_Measurements,\nfloat Height,\nout float Radius,\nout float Line_Width)\n{float scale=Absolute_Measurements ? 1.0/Height : 1.0;Radius=Nominal_Radius*scale;Line_Width=Nominal_LineWidth*scale;}\nvoid Edge_AA_Vertex_B130(\nvec3 Position_World,\nvec3 Position_Object,\nvec3 Normal_Object,\nvec3 Eye,\nfloat Radial_Gradient,\nvec3 Radial_Dir,\nvec3 Tangent,\nout float Gradient1,\nout float Gradient2)\n{vec3 I=(Eye-Position_World);vec3 T=(world* vec4(Tangent,0.0)).xyz;float g=(dot(T,I)<0.0) ? 0.0 : 1.0;if (Normal_Object.z==0.0) { \nGradient1=Position_Object.z>0.0 ? g : 1.0;Gradient2=Position_Object.z>0.0 ? 1.0 : g;} else {Gradient1=g+(1.0-g)*(Radial_Gradient);Gradient2=1.0;}}\nvoid Pick_Radius_B144(\nfloat Radius,\nfloat Radius_Top_Left,\nfloat Radius_Top_Right,\nfloat Radius_Bottom_Left,\nfloat Radius_Bottom_Right,\nvec3 Position,\nout float Result)\n{bool whichY=Position.y>0.0;Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);Result*=Radius;}\nvoid main()\n{vec3 Nrm_World_Q128;Nrm_World_Q128=normalize((world*vec4(normal,0.0)).xyz);vec3 Tangent_World_Q131;vec3 Tangent_World_N_Q131;float Tangent_Length_Q131;Tangent_World_Q131=(world*vec4(vec3(1,0,0),0.0)).xyz;Tangent_Length_Q131=length(Tangent_World_Q131);Tangent_World_N_Q131=Tangent_World_Q131/Tangent_Length_Q131;vec3 Binormal_World_Q132;vec3 Binormal_World_N_Q132;float Binormal_Length_Q132;Object_To_World_Dir_B132(vec3(0,1,0),Binormal_World_Q132,Binormal_World_N_Q132,Binormal_Length_Q132);float Anisotropy_Q133=Tangent_Length_Q131/Binormal_Length_Q132;vec3 Result_Q177;Result_Q177=mix(_Blob_Position_,Global_Left_Index_Tip_Position.xyz,float(_Use_Global_Left_Index_));vec3 Result_Q178;Result_Q178=mix(_Blob_Position_2_,Global_Right_Index_Tip_Position.xyz,float(_Use_Global_Right_Index_));float Result_Q144;Pick_Radius_B144(_Radius_,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q144);vec3 Dir_Q140;PickDir_B140(_Angle_,Tangent_World_N_Q131,Binormal_World_N_Q132,Dir_Q140);float Radius_Q147;float Line_Width_Q147;RelativeOrAbsoluteDetail_B147(Result_Q144,_Line_Width_,_Absolute_Sizes_,Binormal_Length_Q132,Radius_Q147,Line_Width_Q147);vec4 Out_Color_Q145=vec4(Radius_Q147,Line_Width_Q147,0,1);vec3 New_P_Q129;vec2 New_UV_Q129;float Radial_Gradient_Q129;vec3 Radial_Dir_Q129;Move_Verts_B129(Anisotropy_Q133,position,Radius_Q147,New_P_Q129,New_UV_Q129,Radial_Gradient_Q129,Radial_Dir_Q129);vec3 Pos_World_Q115;Object_To_World_Pos_B115(New_P_Q129,Pos_World_Q115);vec4 Blob_Info_Q180;\n#if BLOB_ENABLE\nBlob_Vertex_B180(Pos_World_Q115,Nrm_World_Q128,Tangent_World_N_Q131,Binormal_World_N_Q132,Result_Q177,_Blob_Intensity_,_Blob_Near_Size_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_,_Blob_Fade_,Blob_Info_Q180);\n#else\nBlob_Info_Q180=vec4(0,0,0,0);\n#endif\nvec4 Blob_Info_Q181;\n#if BLOB_ENABLE_2\nBlob_Vertex_B180(Pos_World_Q115,Nrm_World_Q128,Tangent_World_N_Q131,Binormal_World_N_Q132,Result_Q178,_Blob_Intensity_,_Blob_Near_Size_2_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_2_,_Blob_Fade_2_,Blob_Info_Q181);\n#else\nBlob_Info_Q181=vec4(0,0,0,0);\n#endif\nfloat Gradient1_Q130;float Gradient2_Q130;\n#if SMOOTH_EDGES\nEdge_AA_Vertex_B130(Pos_World_Q115,position,normal,cameraPosition,Radial_Gradient_Q129,Radial_Dir_Q129,tangent,Gradient1_Q130,Gradient2_Q130);\n#else\nGradient1_Q130=1.0;Gradient2_Q130=1.0;\n#endif\nvec2 Rect_UV_Q139;vec4 Rect_Parms_Q139;vec2 Scale_XY_Q139;vec2 Line_UV_Q139;Round_Rect_Vertex_B139(New_UV_Q129,Radius_Q147,0.0,Anisotropy_Q133,Gradient1_Q130,Gradient2_Q130,Rect_UV_Q139,Rect_Parms_Q139,Scale_XY_Q139,Line_UV_Q139);vec3 Line_Vertex_Q135;Line_Vertex_B135(Scale_XY_Q139,Line_UV_Q139,0.0,_Rate_,_Highlight_Transform_,Line_Vertex_Q135);vec3 Position=Pos_World_Q115;vec3 Normal=Dir_Q140;vec2 UV=Rect_UV_Q139;vec3 Tangent=Line_Vertex_Q135;vec3 Binormal=Nrm_World_Q128;vec4 Color=Out_Color_Q145;vec4 Extra1=Rect_Parms_Q139;vec4 Extra2=Blob_Info_Q180;vec4 Extra3=Blob_Info_Q181;gl_Position=viewProjection*vec4(Position,1);vPosition=Position;vNormal=Normal;vUV=UV;vTangent=Tangent;vBinormal=Binormal;vColor=Color;vExtra1=Extra1;vExtra2=Extra2;vExtra3=Extra3;}");
      var Ft = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3.BLOB_ENABLE = true, e3.BLOB_ENABLE_2 = true, e3.SMOOTH_EDGES = true, e3.IRIDESCENT_MAP_ENABLE = true, e3._needNormals = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), Dt = function(t2) {
        function e2(i2, o2) {
          var r2 = t2.call(this, i2, o2) || this;
          r2.radius = 0.03, r2.lineWidth = 0.01, r2.absoluteSizes = false, r2._filterWidth = 1, r2.baseColor = new d.Color4(0.0392157, 0.0666667, 0.207843, 1), r2.lineColor = new d.Color4(0.14902, 0.133333, 0.384314, 1), r2.blobIntensity = 0.98, r2.blobFarSize = 0.04, r2.blobNearDistance = 0, r2.blobFarDistance = 0.08, r2.blobFadeLength = 0.08, r2.blobNearSize = 0.22, r2.blobPulse = 0, r2.blobFade = 0, r2.blobNearSize2 = 0.22, r2.blobPulse2 = 0, r2.blobFade2 = 0, r2._rate = 0.135, r2.highlightColor = new d.Color4(0.98, 0.98, 0.98, 1), r2.highlightWidth = 0.25, r2._highlightTransform = new d.Vector4(1, 1, 0, 0), r2._highlight = 1, r2.iridescenceIntensity = 0, r2.iridescenceEdgeIntensity = 1, r2._angle = -45, r2.fadeOut = 1, r2._reflected = true, r2._frequency = 1, r2._verticalOffset = 0, r2.globalLeftIndexTipPosition = d.Vector3.Zero(), r2._globalLeftIndexTipPosition4 = d.Vector4.Zero(), r2.globalRightIndexTipPosition = d.Vector3.Zero(), r2._globalRightIndexTipPosition4 = d.Vector4.Zero(), r2.alphaMode = d.Constants.ALPHA_DISABLE, r2.backFaceCulling = false;
          var n2 = d.Tools.GetAssetUrl(e2.BLOB_TEXTURE_URL), a2 = d.Tools.GetAssetUrl(e2.IM_TEXTURE_URL);
          return r2._blobTexture = new d.Texture(n2, r2.getScene(), true, false, d.Texture.NEAREST_SAMPLINGMODE), r2._iridescentMap = new d.Texture(a2, r2.getScene(), true, false, d.Texture.NEAREST_SAMPLINGMODE), r2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return false;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new Ft());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, false, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "viewProjection", "cameraPosition", "_Radius_", "_Line_Width_", "_Absolute_Sizes_", "_Filter_Width_", "_Base_Color_", "_Line_Color_", "_Radius_Top_Left_", "_Radius_Top_Right_", "_Radius_Bottom_Left_", "_Radius_Bottom_Right_", "_Blob_Position_", "_Blob_Intensity_", "_Blob_Near_Size_", "_Blob_Far_Size_", "_Blob_Near_Distance_", "_Blob_Far_Distance_", "_Blob_Fade_Length_", "_Blob_Pulse_", "_Blob_Fade_", "_Blob_Texture_", "_Blob_Position_2_", "_Blob_Near_Size_2_", "_Blob_Pulse_2_", "_Blob_Fade_2_", "_Rate_", "_Highlight_Color_", "_Highlight_Width_", "_Highlight_Transform_", "_Highlight_", "_Iridescence_Intensity_", "_Iridescence_Edge_Intensity_", "_Angle_", "_Fade_Out_", "_Reflected_", "_Frequency_", "_Vertical_Offset_", "_Iridescent_Map_", "_Use_Global_Left_Index_", "_Use_Global_Right_Index_", "Global_Left_Index_Tip_Position", "Global_Right_Index_Tip_Position"], h2 = ["_Blob_Texture_", "_Iridescent_Map_"], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("fluentBackplate", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2, this._materialContext);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          var o2, r2;
          if (i2.materialDefines) {
            var n2 = i2.effect;
            n2 && (this._activeEffect = n2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", this.getScene().getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", null !== (r2 = null === (o2 = this.getScene().activeCamera) || void 0 === o2 ? void 0 : o2.position) && void 0 !== r2 ? r2 : d.Vector3.ZeroReadOnly), this._activeEffect.setFloat("_Radius_", this.radius), this._activeEffect.setFloat("_Line_Width_", this.lineWidth), this._activeEffect.setFloat("_Absolute_Sizes_", this.absoluteSizes ? 1 : 0), this._activeEffect.setFloat("_Filter_Width_", this._filterWidth), this._activeEffect.setDirectColor4("_Base_Color_", this.baseColor), this._activeEffect.setDirectColor4("_Line_Color_", this.lineColor), this._activeEffect.setFloat("_Radius_Top_Left_", 1), this._activeEffect.setFloat("_Radius_Top_Right_", 1), this._activeEffect.setFloat("_Radius_Bottom_Left_", 1), this._activeEffect.setFloat("_Radius_Bottom_Right_", 1), this._activeEffect.setFloat("_Blob_Intensity_", this.blobIntensity), this._activeEffect.setFloat("_Blob_Near_Size_", this.blobNearSize), this._activeEffect.setFloat("_Blob_Far_Size_", this.blobFarSize), this._activeEffect.setFloat("_Blob_Near_Distance_", this.blobNearDistance), this._activeEffect.setFloat("_Blob_Far_Distance_", this.blobFarDistance), this._activeEffect.setFloat("_Blob_Fade_Length_", this.blobFadeLength), this._activeEffect.setFloat("_Blob_Pulse_", this.blobPulse), this._activeEffect.setFloat("_Blob_Fade_", this.blobFade), this._activeEffect.setTexture("_Blob_Texture_", this._blobTexture), this._activeEffect.setFloat("_Blob_Near_Size_2_", this.blobNearSize2), this._activeEffect.setFloat("_Blob_Pulse_2_", this.blobPulse2), this._activeEffect.setFloat("_Blob_Fade_2_", this.blobFade2), this._activeEffect.setFloat("_Rate_", this._rate), this._activeEffect.setDirectColor4("_Highlight_Color_", this.highlightColor), this._activeEffect.setFloat("_Highlight_Width_", this.highlightWidth), this._activeEffect.setVector4("_Highlight_Transform_", this._highlightTransform), this._activeEffect.setFloat("_Highlight_", this._highlight), this._activeEffect.setFloat("_Iridescence_Intensity_", this.iridescenceIntensity), this._activeEffect.setFloat("_Iridescence_Edge_Intensity_", this.iridescenceEdgeIntensity), this._activeEffect.setFloat("_Angle_", this._angle), this._activeEffect.setFloat("_Fade_Out_", this.fadeOut), this._activeEffect.setFloat("_Reflected_", this._reflected ? 1 : 0), this._activeEffect.setFloat("_Frequency_", this._frequency), this._activeEffect.setFloat("_Vertical_Offset_", this._verticalOffset), this._activeEffect.setTexture("_Iridescent_Map_", this._iridescentMap), this._activeEffect.setFloat("_Use_Global_Left_Index_", 1), this._activeEffect.setFloat("_Use_Global_Right_Index_", 1), this._globalLeftIndexTipPosition4.set(this.globalLeftIndexTipPosition.x, this.globalLeftIndexTipPosition.y, this.globalLeftIndexTipPosition.z, 1), this._activeEffect.setVector4("Global_Left_Index_Tip_Position", this._globalLeftIndexTipPosition4), this._globalRightIndexTipPosition4.set(this.globalRightIndexTipPosition.x, this.globalRightIndexTipPosition.y, this.globalRightIndexTipPosition.z, 1), this._activeEffect.setVector4("Global_Right_Index_Tip_Position", this._globalRightIndexTipPosition4), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3), this._blobTexture.dispose(), this._iridescentMap.dispose();
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var e3 = t2.prototype.serialize.call(this);
          return e3.customType = "BABYLON.FluentBackplateMaterial", e3;
        }, e2.prototype.getClassName = function() {
          return "FluentBackplateMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, e2.BLOB_TEXTURE_URL = "https://assets.babylonjs.com/core/MRTK/mrtk-fluent-backplate-blob.png", e2.IM_TEXTURE_URL = "https://assets.babylonjs.com/core/MRTK/mrtk-fluent-backplate-iridescence.png", h([(0, d.serialize)()], e2.prototype, "radius", void 0), h([(0, d.serialize)()], e2.prototype, "lineWidth", void 0), h([(0, d.serialize)()], e2.prototype, "absoluteSizes", void 0), h([(0, d.serialize)()], e2.prototype, "baseColor", void 0), h([(0, d.serialize)()], e2.prototype, "lineColor", void 0), h([(0, d.serialize)()], e2.prototype, "blobIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFadeLength", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize2", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse2", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade2", void 0), h([(0, d.serialize)()], e2.prototype, "highlightColor", void 0), h([(0, d.serialize)()], e2.prototype, "highlightWidth", void 0), h([(0, d.serialize)()], e2.prototype, "iridescenceIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "iridescenceEdgeIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "fadeOut", void 0), h([(0, d.serializeAsVector3)()], e2.prototype, "globalLeftIndexTipPosition", void 0), h([(0, d.serializeAsVector3)()], e2.prototype, "globalRightIndexTipPosition", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.FluentBackplateMaterial", Dt);
      var kt = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = true);
          var o2 = t2.call(this, e3) || this;
          return o2._shareMaterials = i2, o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "renderingGroupId", { get: function() {
          return this._model.renderingGroupId;
        }, set: function(t3) {
          this._model.renderingGroupId = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "material", { get: function() {
          return this._material;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "shareMaterials", { get: function() {
          return this._shareMaterials;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "HolographicBackplate";
        }, e2.prototype._createNode = function(t3) {
          var i2, o2 = this, r2 = (0, d.CreateBox)((null !== (i2 = this.name) && void 0 !== i2 ? i2 : "HolographicBackplate") + "_CollisionMesh", { width: 1, height: 1, depth: 1 }, t3);
          r2.isPickable = true, r2.visibility = 0;
          var n2 = d.Tools.GetAssetUrl(e2.MODEL_BASE_URL);
          return d.SceneLoader.ImportMeshAsync(void 0, n2, e2.MODEL_FILENAME, t3).then(function(t4) {
            var e3 = t4.meshes[1];
            e3.name = "".concat(o2.name, "_frontPlate"), e3.isPickable = false, e3.parent = r2, o2._material && (e3.material = o2._material), o2._model = e3;
          }), r2;
        }, e2.prototype._createMaterial = function(t3) {
          this._material = new Dt(this.name + " Material", t3.getScene());
        }, e2.prototype._affectMaterial = function(t3) {
          this._shareMaterials ? this._host._touchSharedMaterials.fluentBackplateMaterial ? this._material = this._host._touchSharedMaterials.fluentBackplateMaterial : (this._createMaterial(t3), this._host._touchSharedMaterials.fluentBackplateMaterial = this._material) : this._createMaterial(t3);
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this.shareMaterials || this._material.dispose(), this._model.dispose();
        }, e2.MODEL_BASE_URL = "https://assets.babylonjs.com/core/MRTK/", e2.MODEL_FILENAME = "mrtk-fluent-backplate.glb", e2;
      }(mt), Lt = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = true);
          var o2 = t2.call(this, e3) || this;
          return o2._shareMaterials = true, o2._shareMaterials = i2, o2.pointerEnterAnimation = function() {
            o2.mesh && o2._frontPlate.setEnabled(true);
          }, o2.pointerOutAnimation = function() {
            o2.mesh && o2._frontPlate.setEnabled(false);
          }, o2;
        }
        return l(e2, t2), e2.prototype._disposeTooltip = function() {
          this._tooltipFade = null, this._tooltipTextBlock && this._tooltipTextBlock.dispose(), this._tooltipTexture && this._tooltipTexture.dispose(), this._tooltipMesh && this._tooltipMesh.dispose(), this.onPointerEnterObservable.remove(this._tooltipHoverObserver), this.onPointerOutObservable.remove(this._tooltipOutObserver);
        }, Object.defineProperty(e2.prototype, "renderingGroupId", { get: function() {
          return this._backPlate.renderingGroupId;
        }, set: function(t3) {
          this._backPlate.renderingGroupId = t3, this._textPlate.renderingGroupId = t3, this._frontPlate.renderingGroupId = t3, this._tooltipMesh && (this._tooltipMesh.renderingGroupId = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "tooltipText", { get: function() {
          return this._tooltipTextBlock ? this._tooltipTextBlock.text : null;
        }, set: function(t3) {
          var e3 = this;
          if (t3) {
            if (!this._tooltipFade) {
              var i2 = this._backPlate._scene.useRightHandedSystem;
              this._tooltipMesh = (0, d.CreatePlane)("", { size: 1 }, this._backPlate._scene);
              var o2 = (0, d.CreatePlane)("", { size: 1, sideOrientation: d.Mesh.DOUBLESIDE }, this._backPlate._scene), r2 = new d.StandardMaterial("", this._backPlate._scene);
              r2.diffuseColor = d.Color3.FromHexString("#212121"), o2.material = r2, o2.isPickable = false, this._tooltipMesh.addChild(o2), o2.position = d.Vector3.Forward(i2).scale(0.05), this._tooltipMesh.scaling.y = 1 / 3, this._tooltipMesh.position = d.Vector3.Up().scale(0.7).add(d.Vector3.Forward(i2).scale(-0.15)), this._tooltipMesh.isPickable = false, this._tooltipMesh.parent = this._backPlate, this._tooltipTexture = ct.CreateForMesh(this._tooltipMesh), this._tooltipTextBlock = new S(), this._tooltipTextBlock.scaleY = 3, this._tooltipTextBlock.color = "white", this._tooltipTextBlock.fontSize = 130, this._tooltipTexture.addControl(this._tooltipTextBlock), this._tooltipFade = new d.FadeInOutBehavior(), this._tooltipFade.delay = 500, this._tooltipMesh.addBehavior(this._tooltipFade), this._tooltipHoverObserver = this.onPointerEnterObservable.add(function() {
                e3._tooltipFade && e3._tooltipFade.fadeIn(true);
              }), this._tooltipOutObserver = this.onPointerOutObservable.add(function() {
                e3._tooltipFade && e3._tooltipFade.fadeIn(false);
              });
            }
            this._tooltipTextBlock && (this._tooltipTextBlock.text = t3);
          } else this._disposeTooltip();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "text", { get: function() {
          return this._text;
        }, set: function(t3) {
          this._text !== t3 && (this._text = t3, this._rebuildContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "imageUrl", { get: function() {
          return this._imageUrl;
        }, set: function(t3) {
          this._imageUrl !== t3 && (this._imageUrl = t3, this._rebuildContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backMaterial", { get: function() {
          return this._backMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "frontMaterial", { get: function() {
          return this._frontMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "plateMaterial", { get: function() {
          return this._plateMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "shareMaterials", { get: function() {
          return this._shareMaterials;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "HolographicButton";
        }, e2.prototype._rebuildContent = function() {
          this._disposeFacadeTexture();
          var t3 = new w();
          if (t3.isVertical = true, (0, d.IsDocumentAvailable)() && document.createElement && this._imageUrl) {
            var e3 = new O();
            e3.source = this._imageUrl, e3.paddingTop = "40px", e3.height = "180px", e3.width = "100px", e3.paddingBottom = "40px", t3.addControl(e3);
          }
          if (this._text) {
            var i2 = new S();
            i2.text = this._text, i2.color = "white", i2.height = "30px", i2.fontSize = 24, t3.addControl(i2);
          }
          this._frontPlate && (this.content = t3);
        }, e2.prototype._createNode = function(e3) {
          return this._backPlate = (0, d.CreateBox)(this.name + "BackMesh", { width: 1, height: 1, depth: 0.08 }, e3), this._frontPlate = (0, d.CreateBox)(this.name + "FrontMesh", { width: 1, height: 1, depth: 0.08 }, e3), this._frontPlate.parent = this._backPlate, this._frontPlate.position = d.Vector3.Forward(e3.useRightHandedSystem).scale(-0.08), this._frontPlate.isPickable = false, this._frontPlate.setEnabled(false), this._textPlate = t2.prototype._createNode.call(this, e3), this._textPlate.parent = this._backPlate, this._textPlate.position = d.Vector3.Forward(e3.useRightHandedSystem).scale(-0.08), this._textPlate.isPickable = false, this._backPlate;
        }, e2.prototype._applyFacade = function(t3) {
          this._plateMaterial.emissiveTexture = t3, this._plateMaterial.opacityTexture = t3;
        }, e2.prototype._createBackMaterial = function(t3) {
          var e3 = this;
          this._backMaterial = new Ot(this.name + "Back Material", t3.getScene()), this._backMaterial.renderHoverLight = true, this._pickedPointObserver = this._host.onPickedPointChangedObservable.add(function(t4) {
            t4 ? (e3._backMaterial.hoverPosition = t4, e3._backMaterial.hoverColor.a = 1) : e3._backMaterial.hoverColor.a = 0;
          });
        }, e2.prototype._createFrontMaterial = function(t3) {
          this._frontMaterial = new Ot(this.name + "Front Material", t3.getScene()), this._frontMaterial.innerGlowColorIntensity = 0, this._frontMaterial.alpha = 0.5, this._frontMaterial.renderBorders = true;
        }, e2.prototype._createPlateMaterial = function(t3) {
          this._plateMaterial = new d.StandardMaterial(this.name + "Plate Material", t3.getScene()), this._plateMaterial.specularColor = d.Color3.Black();
        }, e2.prototype._affectMaterial = function(t3) {
          this._shareMaterials ? (this._host._sharedMaterials.backFluentMaterial ? this._backMaterial = this._host._sharedMaterials.backFluentMaterial : (this._createBackMaterial(t3), this._host._sharedMaterials.backFluentMaterial = this._backMaterial), this._host._sharedMaterials.frontFluentMaterial ? this._frontMaterial = this._host._sharedMaterials.frontFluentMaterial : (this._createFrontMaterial(t3), this._host._sharedMaterials.frontFluentMaterial = this._frontMaterial)) : (this._createBackMaterial(t3), this._createFrontMaterial(t3)), this._createPlateMaterial(t3), this._backPlate.material = this._backMaterial, this._frontPlate.material = this._frontMaterial, this._textPlate.material = this._plateMaterial, this._rebuildContent();
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._disposeTooltip(), this.shareMaterials || (this._backMaterial.dispose(), this._frontMaterial.dispose(), this._plateMaterial.dispose(), this._pickedPointObserver && (this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver), this._pickedPointObserver = null));
        }, e2;
      }(xt), Nt = "fluentButtonPixelShader";
      d.ShaderStore.ShadersStore[Nt] || (d.ShaderStore.ShadersStore[Nt] = "uniform vec3 cameraPosition;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;uniform float _Edge_Width_;uniform vec4 _Edge_Color_;uniform bool _Relative_Width_;uniform float _Proximity_Max_Intensity_;uniform float _Proximity_Far_Distance_;uniform float _Proximity_Near_Radius_;uniform float _Proximity_Anisotropy_;uniform float _Selection_Fuzz_;uniform float _Selected_;uniform float _Selection_Fade_;uniform float _Selection_Fade_Size_;uniform float _Selected_Distance_;uniform float _Selected_Fade_Length_;uniform bool _Blob_Enable_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Inner_Fade_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform bool _Blob_Enable_2_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Inner_Fade_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform vec3 _Active_Face_Dir_;uniform vec3 _Active_Face_Up_;uniform bool Enable_Fade;uniform float _Fade_Width_;uniform bool _Smooth_Active_Face_;uniform bool _Show_Frame_;uniform bool _Use_Blob_Texture_;uniform bool Use_Global_Left_Index;uniform bool Use_Global_Right_Index;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;uniform vec4 Global_Left_Thumb_Tip_Position;uniform vec4 Global_Right_Thumb_Tip_Position;uniform float Global_Left_Index_Tip_Proximity;uniform float Global_Right_Index_Tip_Proximity;void Holo_Edge_Fragment_B35(\nvec4 Edges,\nfloat Edge_Width,\nout float NotEdge)\n{vec2 c=vec2(min(Edges.r,Edges.g),min(Edges.b,Edges.a));vec2 df=fwidth(c)*Edge_Width;vec2 g=clamp(c/df,0.0,1.0);NotEdge=g.x*g.y;}\nvoid Blob_Fragment_B39(\nvec2 UV,\nvec3 Blob_Info,\nsampler2D Blob_Texture,\nout vec4 Blob_Color)\n{float k=dot(UV,UV);Blob_Color=Blob_Info.y*texture(Blob_Texture,vec2(vec2(sqrt(k),Blob_Info.x).x,1.0-vec2(sqrt(k),Blob_Info.x).y))*(1.0-clamp(k,0.0,1.0));}\nvec2 FilterStep(vec2 Edge,vec2 X)\n{vec2 dX=max(fwidth(X),vec2(0.00001,0.00001));return clamp( (X+dX-max(Edge,X-dX))/(dX*2.0),0.0,1.0);}\nvoid Wireframe_Fragment_B59(\nvec3 Widths,\nvec2 UV,\nfloat Proximity,\nvec4 Edge_Color,\nout vec4 Wireframe)\n{vec2 c=min(UV,vec2(1.0,1.0)-UV);vec2 g=FilterStep(Widths.xy*0.5,c); \nWireframe=(1.0-min(g.x,g.y))*Proximity*Edge_Color;}\nvoid Proximity_B53(\nvec3 Proximity_Center,\nvec3 Proximity_Center_2,\nfloat Proximity_Max_Intensity,\nfloat Proximity_Near_Radius,\nvec3 Position,\nvec3 Show_Selection,\nvec4 Extra1,\nfloat Dist_To_Face,\nfloat Intensity,\nout float Proximity)\n{vec2 delta1=Extra1.xy;vec2 delta2=Extra1.zw;float d2=sqrt(min(dot(delta1,delta1),dot(delta2,delta2))+Dist_To_Face*Dist_To_Face);Proximity=Intensity*Proximity_Max_Intensity*(1.0-clamp(d2/Proximity_Near_Radius,0.0,1.0))*(1.0-Show_Selection.x)+Show_Selection.x;}\nvoid To_XYZ_B46(\nvec3 Vec3,\nout float X,\nout float Y,\nout float Z)\n{X=Vec3.x;Y=Vec3.y;Z=Vec3.z;}\nvoid main()\n{float NotEdge_Q35;\n#if ENABLE_FADE\nHolo_Edge_Fragment_B35(vColor,_Fade_Width_,NotEdge_Q35);\n#else\nNotEdge_Q35=1.0;\n#endif\nvec4 Blob_Color_Q39;float k=dot(vUV,vUV);vec2 blobTextureCoord=vec2(vec2(sqrt(k),vTangent.x).x,1.0-vec2(sqrt(k),vTangent.x).y);vec4 blobColor=mix(vec4(1.0,1.0,1.0,1.0)*step(1.0-vTangent.x,clamp(sqrt(k)+0.1,0.0,1.0)),texture(_Blob_Texture_,blobTextureCoord),float(_Use_Blob_Texture_));Blob_Color_Q39=vTangent.y*blobColor*(1.0-clamp(k,0.0,1.0));float Is_Quad_Q24;Is_Quad_Q24=vNormal.z;vec3 Blob_Position_Q41= mix(_Blob_Position_,Global_Left_Index_Tip_Position.xyz,float(Use_Global_Left_Index));vec3 Blob_Position_Q42= mix(_Blob_Position_2_,Global_Right_Index_Tip_Position.xyz,float(Use_Global_Right_Index));float X_Q46;float Y_Q46;float Z_Q46;To_XYZ_B46(vBinormal,X_Q46,Y_Q46,Z_Q46);float Proximity_Q53;Proximity_B53(Blob_Position_Q41,Blob_Position_Q42,_Proximity_Max_Intensity_,_Proximity_Near_Radius_,vPosition,vBinormal,vExtra1,Y_Q46,Z_Q46,Proximity_Q53);vec4 Wireframe_Q59;Wireframe_Fragment_B59(vNormal,vUV,Proximity_Q53,_Edge_Color_,Wireframe_Q59);vec4 Wire_Or_Blob_Q23=mix(Wireframe_Q59,Blob_Color_Q39,Is_Quad_Q24);vec4 Result_Q22;Result_Q22=mix(Wire_Or_Blob_Q23,vec4(0.3,0.3,0.3,0.3),float(_Show_Frame_));vec4 Final_Color_Q37=NotEdge_Q35*Result_Q22;vec4 Out_Color=Final_Color_Q37;float Clip_Threshold=0.0;bool To_sRGB=false;gl_FragColor=Out_Color;}");
      var At = "fluentButtonVertexShader";
      d.ShaderStore.ShadersStore[At] || (d.ShaderStore.ShadersStore[At] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;attribute vec3 tangent;attribute vec4 color;uniform float _Edge_Width_;uniform vec4 _Edge_Color_;uniform float _Proximity_Max_Intensity_;uniform float _Proximity_Far_Distance_;uniform float _Proximity_Near_Radius_;uniform float _Proximity_Anisotropy_;uniform float _Selection_Fuzz_;uniform float _Selected_;uniform float _Selection_Fade_;uniform float _Selection_Fade_Size_;uniform float _Selected_Distance_;uniform float _Selected_Fade_Length_;uniform bool _Blob_Enable_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Inner_Fade_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform bool _Blob_Enable_2_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Inner_Fade_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform vec3 _Active_Face_Dir_;uniform vec3 _Active_Face_Up_;uniform bool _Enable_Fade_;uniform float _Fade_Width_;uniform bool _Smooth_Active_Face_;uniform bool _Show_Frame_;uniform bool Use_Global_Left_Index;uniform bool Use_Global_Right_Index;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;uniform vec4 Global_Left_Thumb_Tip_Position;uniform vec4 Global_Right_Thumb_Tip_Position;uniform float Global_Left_Index_Tip_Proximity;uniform float Global_Right_Index_Tip_Proximity;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;void Blob_Vertex_B47(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nvec3 Blob_Position,\nfloat Intensity,\nfloat Blob_Near_Size,\nfloat Blob_Far_Size,\nfloat Blob_Near_Distance,\nfloat Blob_Far_Distance,\nvec4 Vx_Color,\nvec2 UV,\nvec3 Face_Center,\nvec2 Face_Size,\nvec2 In_UV,\nfloat Blob_Fade_Length,\nfloat Selection_Fade,\nfloat Selection_Fade_Size,\nfloat Inner_Fade,\nvec3 Active_Face_Center,\nfloat Blob_Pulse,\nfloat Blob_Fade,\nfloat Blob_Enabled,\nout vec3 Out_Position,\nout vec2 Out_UV,\nout vec3 Blob_Info)\n{float blobSize,fadeIn;vec3 Hit_Position;Blob_Info=vec3(0.0,0.0,0.0);float Hit_Distance=dot(Blob_Position-Face_Center,Normal);Hit_Position=Blob_Position-Hit_Distance*Normal;float absD=abs(Hit_Distance);float lerpVal=clamp((absD-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);fadeIn=1.0-clamp((absD-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);float innerFade=1.0-clamp(-Hit_Distance/Inner_Fade,0.0,1.0);float farClip=clamp(1.0-step(Blob_Far_Distance+Blob_Fade_Length,absD),0.0,1.0);float size=mix(Blob_Near_Size,Blob_Far_Size,lerpVal)*farClip;blobSize=mix(size,Selection_Fade_Size,Selection_Fade)*innerFade*Blob_Enabled;Blob_Info.x=lerpVal*0.5+0.5;Blob_Info.y=fadeIn*Intensity*(1.0-Selection_Fade)*Blob_Fade;Blob_Info.x*=(1.0-Blob_Pulse);vec3 delta=Hit_Position-Face_Center;vec2 blobCenterXY=vec2(dot(delta,Tangent),dot(delta,Bitangent));vec2 quadUVin=2.0*UV-1.0; \nvec2 blobXY=blobCenterXY+quadUVin*blobSize;vec2 blobClipped=clamp(blobXY,-Face_Size*0.5,Face_Size*0.5);vec2 blobUV=(blobClipped-blobCenterXY)/max(blobSize,0.0001)*2.0;vec3 blobCorner=Face_Center+blobClipped.x*Tangent+blobClipped.y*Bitangent;Out_Position=mix(Position,blobCorner,Vx_Color.rrr);Out_UV=mix(In_UV,blobUV,Vx_Color.rr);}\nvec2 ProjectProximity(\nvec3 blobPosition,\nvec3 position,\nvec3 center,\nvec3 dir,\nvec3 xdir,\nvec3 ydir,\nout float vdistance\n)\n{vec3 delta=blobPosition-position;vec2 xy=vec2(dot(delta,xdir),dot(delta,ydir));vdistance=abs(dot(delta,dir));return xy;}\nvoid Proximity_Vertex_B66(\nvec3 Blob_Position,\nvec3 Blob_Position_2,\nvec3 Active_Face_Center,\nvec3 Active_Face_Dir,\nvec3 Position,\nfloat Proximity_Far_Distance,\nfloat Relative_Scale,\nfloat Proximity_Anisotropy,\nvec3 Up,\nout vec4 Extra1,\nout float Distance_To_Face,\nout float Intensity)\n{vec3 Active_Face_Dir_X=normalize(cross(Active_Face_Dir,Up));vec3 Active_Face_Dir_Y=cross(Active_Face_Dir,Active_Face_Dir_X);float distz1,distz2;Extra1.xy=ProjectProximity(Blob_Position,Position,Active_Face_Center,Active_Face_Dir,Active_Face_Dir_X*Proximity_Anisotropy,Active_Face_Dir_Y,distz1)/Relative_Scale;Extra1.zw=ProjectProximity(Blob_Position_2,Position,Active_Face_Center,Active_Face_Dir,Active_Face_Dir_X*Proximity_Anisotropy,Active_Face_Dir_Y,distz2)/Relative_Scale;Distance_To_Face=dot(Active_Face_Dir,Position-Active_Face_Center);Intensity=1.0-clamp(min(distz1,distz2)/Proximity_Far_Distance,0.0,1.0);}\nvoid Holo_Edge_Vertex_B44(\nvec3 Incident,\nvec3 Normal,\nvec2 UV,\nvec3 Tangent,\nvec3 Bitangent,\nbool Smooth_Active_Face,\nfloat Active,\nout vec4 Holo_Edges)\n{float NdotI=dot(Incident,Normal);vec2 flip=(UV-vec2(0.5,0.5));float udot=dot(Incident,Tangent)*flip.x*NdotI;float uval=1.0-float(udot>0.0);float vdot=-dot(Incident,Bitangent)*flip.y*NdotI;float vval=1.0-float(vdot>0.0);float Smooth_And_Active=step(1.0,float(Smooth_Active_Face && Active>0.0));uval=mix(uval,max(1.0,uval),Smooth_And_Active); \nvval=mix(vval,max(1.0,vval),Smooth_And_Active);Holo_Edges=vec4(1.0,1.0,1.0,1.0)-vec4(uval*UV.x,uval*(1.0-UV.x),vval*UV.y,vval*(1.0-UV.y));}\nvoid Object_To_World_Pos_B13(\nvec3 Pos_Object,\nout vec3 Pos_World)\n{Pos_World=(world*vec4(Pos_Object,1.0)).xyz;}\nvoid Choose_Blob_B38(\nvec4 Vx_Color,\nvec3 Position1,\nvec3 Position2,\nbool Blob_Enable_1,\nbool Blob_Enable_2,\nfloat Near_Size_1,\nfloat Near_Size_2,\nfloat Blob_Inner_Fade_1,\nfloat Blob_Inner_Fade_2,\nfloat Blob_Pulse_1,\nfloat Blob_Pulse_2,\nfloat Blob_Fade_1,\nfloat Blob_Fade_2,\nout vec3 Position,\nout float Near_Size,\nout float Inner_Fade,\nout float Blob_Enable,\nout float Fade,\nout float Pulse)\n{Position=Position1*(1.0-Vx_Color.g)+Vx_Color.g*Position2;float b1=float(Blob_Enable_1);float b2=float(Blob_Enable_2);Blob_Enable=b1+(b2-b1)*Vx_Color.g;Pulse=Blob_Pulse_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Pulse_2;Fade=Blob_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Fade_2;Near_Size=Near_Size_1*(1.0-Vx_Color.g)+Vx_Color.g*Near_Size_2;Inner_Fade=Blob_Inner_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Inner_Fade_2;}\nvoid Wireframe_Vertex_B51(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nfloat Edge_Width,\nvec2 Face_Size,\nout vec3 Wire_Vx_Pos,\nout vec2 UV,\nout vec2 Widths)\n{Widths.xy=Edge_Width/Face_Size;float x=dot(Position,Tangent);float y=dot(Position,Bitangent);float dx=0.5-abs(x);float newx=(0.5-dx*Widths.x*2.0)*sign(x);float dy=0.5-abs(y);float newy=(0.5-dy*Widths.y*2.0)*sign(y);Wire_Vx_Pos=Normal*0.5+newx*Tangent+newy*Bitangent;UV.x=dot(Wire_Vx_Pos,Tangent)+0.5;UV.y=dot(Wire_Vx_Pos,Bitangent)+0.5;}\nvec2 ramp2(vec2 start,vec2 end,vec2 x)\n{return clamp((x-start)/(end-start),vec2(0.0,0.0),vec2(1.0,1.0));}\nfloat computeSelection(\nvec3 blobPosition,\nvec3 normal,\nvec3 tangent,\nvec3 bitangent,\nvec3 faceCenter,\nvec2 faceSize,\nfloat selectionFuzz,\nfloat farDistance,\nfloat fadeLength\n)\n{vec3 delta=blobPosition-faceCenter;float absD=abs(dot(delta,normal));float fadeIn=1.0-clamp((absD-farDistance)/fadeLength,0.0,1.0);vec2 blobCenterXY=vec2(dot(delta,tangent),dot(delta,bitangent));vec2 innerFace=faceSize*(1.0-selectionFuzz)*0.5;vec2 selectPulse=ramp2(-faceSize*0.5,-innerFace,blobCenterXY)-ramp2(innerFace,faceSize*0.5,blobCenterXY);return selectPulse.x*selectPulse.y*fadeIn;}\nvoid Selection_Vertex_B48(\nvec3 Blob_Position,\nvec3 Blob_Position_2,\nvec3 Face_Center,\nvec2 Face_Size,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nfloat Selection_Fuzz,\nfloat Selected,\nfloat Far_Distance,\nfloat Fade_Length,\nvec3 Active_Face_Dir,\nout float Show_Selection)\n{float select1=computeSelection(Blob_Position,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);float select2=computeSelection(Blob_Position_2,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);float Active=max(0.0,dot(Active_Face_Dir,Normal));Show_Selection=mix(max(select1,select2),1.0,Selected)*Active;}\nvoid Proximity_Visibility_B54(\nfloat Selection,\nvec3 Proximity_Center,\nvec3 Proximity_Center_2,\nfloat Input_Width,\nfloat Proximity_Far_Distance,\nfloat Proximity_Radius,\nvec3 Active_Face_Center,\nvec3 Active_Face_Dir,\nout float Width)\n{vec3 boxEdges=(world*vec4(vec3(0.5,0.5,0.5),0.0)).xyz;float boxMaxSize=length(boxEdges);float d1=dot(Proximity_Center-Active_Face_Center,Active_Face_Dir);vec3 blob1=Proximity_Center-d1*Active_Face_Dir;float d2=dot(Proximity_Center_2-Active_Face_Center,Active_Face_Dir);vec3 blob2=Proximity_Center_2-d2*Active_Face_Dir;vec3 delta1=blob1-Active_Face_Center;vec3 delta2=blob2-Active_Face_Center;float dist1=dot(delta1,delta1);float dist2=dot(delta2,delta2);float nearestProxDist=sqrt(min(dist1,dist2));Width=Input_Width*(1.0-step(boxMaxSize+Proximity_Radius,nearestProxDist))*(1.0-step(Proximity_Far_Distance,min(d1,d2))*(1.0-step(0.0001,Selection)));}\nvoid Object_To_World_Dir_B67(\nvec3 Dir_Object,\nout vec3 Dir_World)\n{Dir_World=(world*vec4(Dir_Object,0.0)).xyz;}\nvoid main()\n{vec3 Active_Face_Center_Q49;Active_Face_Center_Q49=(world*vec4(_Active_Face_Dir_*0.5,1.0)).xyz;vec3 Blob_Position_Q41= mix(_Blob_Position_,Global_Left_Index_Tip_Position.xyz,float(Use_Global_Left_Index));vec3 Blob_Position_Q42= mix(_Blob_Position_2_,Global_Right_Index_Tip_Position.xyz,float(Use_Global_Right_Index));vec3 Active_Face_Dir_Q64=normalize((world*vec4(_Active_Face_Dir_,0.0)).xyz);float Relative_Scale_Q57;\n#if RELATIVE_WIDTH\nRelative_Scale_Q57=length((world*vec4(vec3(0,1,0),0.0)).xyz);\n#else\nRelative_Scale_Q57=1.0;\n#endif\nvec3 Tangent_World_Q30;Tangent_World_Q30=(world*vec4(tangent,0.0)).xyz;vec3 Binormal_World_Q31;Binormal_World_Q31=(world*vec4((cross(normal,tangent)),0.0)).xyz;vec3 Normal_World_Q60;Normal_World_Q60=(world*vec4(normal,0.0)).xyz;vec3 Result_Q18=0.5*normal;vec3 Dir_World_Q67;Object_To_World_Dir_B67(_Active_Face_Up_,Dir_World_Q67);float Product_Q56=_Edge_Width_*Relative_Scale_Q57;vec3 Normal_World_N_Q29=normalize(Normal_World_Q60);vec3 Tangent_World_N_Q28=normalize(Tangent_World_Q30);vec3 Binormal_World_N_Q32=normalize(Binormal_World_Q31);vec3 Position_Q38;float Near_Size_Q38;float Inner_Fade_Q38;float Blob_Enable_Q38;float Fade_Q38;float Pulse_Q38;Choose_Blob_B38(color,Blob_Position_Q41,Blob_Position_Q42,_Blob_Enable_,_Blob_Enable_2_,_Blob_Near_Size_,_Blob_Near_Size_2_,_Blob_Inner_Fade_,_Blob_Inner_Fade_2_,_Blob_Pulse_,_Blob_Pulse_2_,_Blob_Fade_,_Blob_Fade_2_,Position_Q38,Near_Size_Q38,Inner_Fade_Q38,Blob_Enable_Q38,Fade_Q38,Pulse_Q38);vec3 Face_Center_Q33;Face_Center_Q33=(world*vec4(Result_Q18,1.0)).xyz;vec2 Face_Size_Q50=vec2(length(Tangent_World_Q30),length(Binormal_World_Q31));float Show_Selection_Q48;Selection_Vertex_B48(Blob_Position_Q41,Blob_Position_Q42,Face_Center_Q33,Face_Size_Q50,Normal_World_N_Q29,Tangent_World_N_Q28,Binormal_World_N_Q32,_Selection_Fuzz_,_Selected_,_Selected_Distance_,_Selected_Fade_Length_,Active_Face_Dir_Q64,Show_Selection_Q48);vec3 Normalized_Q72=normalize(Dir_World_Q67);float Active_Q34=max(0.0,dot(Active_Face_Dir_Q64,Normal_World_N_Q29));float Width_Q54;Proximity_Visibility_B54(Show_Selection_Q48,Blob_Position_Q41,Blob_Position_Q42,Product_Q56,_Proximity_Far_Distance_,_Proximity_Near_Radius_,Active_Face_Center_Q49,Active_Face_Dir_Q64,Width_Q54);vec3 Wire_Vx_Pos_Q51;vec2 UV_Q51;vec2 Widths_Q51;Wireframe_Vertex_B51(position,normal,tangent,(cross(normal,tangent)),Width_Q54,Face_Size_Q50,Wire_Vx_Pos_Q51,UV_Q51,Widths_Q51);vec3 Vec3_Q27=vec3(Widths_Q51.x,Widths_Q51.y,color.r);vec3 Pos_World_Q13;Object_To_World_Pos_B13(Wire_Vx_Pos_Q51,Pos_World_Q13);vec3 Incident_Q36=normalize(Pos_World_Q13-cameraPosition);vec3 Out_Position_Q47;vec2 Out_UV_Q47;vec3 Blob_Info_Q47;Blob_Vertex_B47(Pos_World_Q13,Normal_World_N_Q29,Tangent_World_N_Q28,Binormal_World_N_Q32,Position_Q38,_Blob_Intensity_,Near_Size_Q38,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,color,uv,Face_Center_Q33,Face_Size_Q50,UV_Q51,_Blob_Fade_Length_,_Selection_Fade_,_Selection_Fade_Size_,Inner_Fade_Q38,Active_Face_Center_Q49,Pulse_Q38,Fade_Q38,Blob_Enable_Q38,Out_Position_Q47,Out_UV_Q47,Blob_Info_Q47);vec4 Extra1_Q66;float Distance_To_Face_Q66;float Intensity_Q66;Proximity_Vertex_B66(Blob_Position_Q41,Blob_Position_Q42,Active_Face_Center_Q49,Active_Face_Dir_Q64,Pos_World_Q13,_Proximity_Far_Distance_,Relative_Scale_Q57,_Proximity_Anisotropy_,Normalized_Q72,Extra1_Q66,Distance_To_Face_Q66,Intensity_Q66);vec4 Holo_Edges_Q44;Holo_Edge_Vertex_B44(Incident_Q36,Normal_World_N_Q29,uv,Tangent_World_Q30,Binormal_World_Q31,_Smooth_Active_Face_,Active_Q34,Holo_Edges_Q44);vec3 Vec3_Q19=vec3(Show_Selection_Q48,Distance_To_Face_Q66,Intensity_Q66);vec3 Position=Out_Position_Q47;vec2 UV=Out_UV_Q47;vec3 Tangent=Blob_Info_Q47;vec3 Binormal=Vec3_Q19;vec3 Normal=Vec3_Q27;vec4 Extra1=Extra1_Q66;vec4 Color=Holo_Edges_Q44;gl_Position=viewProjection*vec4(Position,1);vPosition=Position;vNormal=Normal;vUV=UV;vTangent=Tangent;vBinormal=Binormal;vColor=Color;vExtra1=Extra1;}");
      var zt = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3.RELATIVE_WIDTH = true, e3.ENABLE_FADE = true, e3._needNormals = true, e3._needUVs = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), Qt = function(t2) {
        function e2(i2, o2) {
          var r2 = t2.call(this, i2, o2) || this;
          r2.edgeWidth = 0.04, r2.edgeColor = new d.Color4(0.592157, 0.592157, 0.592157, 1), r2.proximityMaxIntensity = 0.45, r2.proximityFarDistance = 0.16, r2.proximityNearRadius = 1.5, r2.proximityAnisotropy = 1, r2.selectionFuzz = 0.5, r2.selected = 0, r2.selectionFade = 0, r2.selectionFadeSize = 0.3, r2.selectedDistance = 0.08, r2.selectedFadeLength = 0.08, r2.blobIntensity = 0.5, r2.blobFarSize = 0.05, r2.blobNearDistance = 0, r2.blobFarDistance = 0.08, r2.blobFadeLength = 0.08, r2.leftBlobEnable = true, r2.leftBlobNearSize = 0.025, r2.leftBlobPulse = 0, r2.leftBlobFade = 1, r2.leftBlobInnerFade = 0.01, r2.rightBlobEnable = true, r2.rightBlobNearSize = 0.025, r2.rightBlobPulse = 0, r2.rightBlobFade = 1, r2.rightBlobInnerFade = 0.01, r2.activeFaceDir = new d.Vector3(0, 0, -1), r2.activeFaceUp = new d.Vector3(0, 1, 0), r2.enableFade = true, r2.fadeWidth = 1.5, r2.smoothActiveFace = true, r2.showFrame = false, r2.useBlobTexture = true, r2.globalLeftIndexTipPosition = d.Vector3.Zero(), r2.globalRightIndexTipPosition = d.Vector3.Zero(), r2.alphaMode = d.Constants.ALPHA_ADD, r2.disableDepthWrite = true, r2.backFaceCulling = false;
          var n2 = d.Tools.GetAssetUrl(e2.BLOB_TEXTURE_URL);
          return r2._blobTexture = new d.Texture(n2, r2.getScene(), true, false, d.Texture.NEAREST_SAMPLINGMODE), r2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return true;
        }, e2.prototype.needAlphaTesting = function() {
          return true;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new zt());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, true, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "viewProjection", "cameraPosition", "_Edge_Width_", "_Edge_Color_", "_Relative_Width_", "_Proximity_Max_Intensity_", "_Proximity_Far_Distance_", "_Proximity_Near_Radius_", "_Proximity_Anisotropy_", "_Selection_Fuzz_", "_Selected_", "_Selection_Fade_", "_Selection_Fade_Size_", "_Selected_Distance_", "_Selected_Fade_Length_", "_Blob_Enable_", "_Blob_Position_", "_Blob_Intensity_", "_Blob_Near_Size_", "_Blob_Far_Size_", "_Blob_Near_Distance_", "_Blob_Far_Distance_", "_Blob_Fade_Length_", "_Blob_Inner_Fade_", "_Blob_Pulse_", "_Blob_Fade_", "_Blob_Texture_", "_Blob_Enable_2_", "_Blob_Position_2_", "_Blob_Near_Size_2_", "_Blob_Inner_Fade_2_", "_Blob_Pulse_2_", "_Blob_Fade_2_", "_Active_Face_Dir_", "_Active_Face_Up_", "_Enable_Fade_", "_Fade_Width_", "_Smooth_Active_Face_", "_Show_Frame_", "_Use_Blob_Texture_", "Use_Global_Left_Index", "Use_Global_Right_Index", "Global_Left_Index_Tip_Position", "Global_Right_Index_Tip_Position", "Global_Left_Thumb_Tip_Position", "Global_Right_Thumb_Tip_Position", "Global_Left_Index_Tip_Proximity", "Global_Right_Index_Tip_Proximity"], h2 = ["_Blob_Texture_"], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("fluentButton", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2, this._materialContext);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          var o2 = this.getScene();
          if (i2.materialDefines) {
            var r2 = i2.effect;
            r2 && (this._activeEffect = r2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", o2.getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", o2.activeCamera.position), this._activeEffect.setTexture("_Blob_Texture_", this._blobTexture), this._activeEffect.setFloat("_Edge_Width_", this.edgeWidth), this._activeEffect.setColor4("_Edge_Color_", new d.Color3(this.edgeColor.r, this.edgeColor.g, this.edgeColor.b), this.edgeColor.a), this._activeEffect.setFloat("_Proximity_Max_Intensity_", this.proximityMaxIntensity), this._activeEffect.setFloat("_Proximity_Far_Distance_", this.proximityFarDistance), this._activeEffect.setFloat("_Proximity_Near_Radius_", this.proximityNearRadius), this._activeEffect.setFloat("_Proximity_Anisotropy_", this.proximityAnisotropy), this._activeEffect.setFloat("_Selection_Fuzz_", this.selectionFuzz), this._activeEffect.setFloat("_Selected_", this.selected), this._activeEffect.setFloat("_Selection_Fade_", this.selectionFade), this._activeEffect.setFloat("_Selection_Fade_Size_", this.selectionFadeSize), this._activeEffect.setFloat("_Selected_Distance_", this.selectedDistance), this._activeEffect.setFloat("_Selected_Fade_Length_", this.selectedFadeLength), this._activeEffect.setFloat("_Blob_Enable_", this.leftBlobEnable ? 1 : 0), this._activeEffect.setFloat("_Blob_Intensity_", this.blobIntensity), this._activeEffect.setFloat("_Blob_Near_Size_", this.leftBlobNearSize), this._activeEffect.setFloat("_Blob_Far_Size_", this.blobFarSize), this._activeEffect.setFloat("_Blob_Near_Distance_", this.blobNearDistance), this._activeEffect.setFloat("_Blob_Far_Distance_", this.blobFarDistance), this._activeEffect.setFloat("_Blob_Fade_Length_", this.blobFadeLength), this._activeEffect.setFloat("_Blob_Inner_Fade_", this.leftBlobInnerFade), this._activeEffect.setFloat("_Blob_Pulse_", this.leftBlobPulse), this._activeEffect.setFloat("_Blob_Fade_", this.leftBlobFade), this._activeEffect.setFloat("_Blob_Enable_2_", this.rightBlobEnable ? 1 : 0), this._activeEffect.setFloat("_Blob_Near_Size_2_", this.rightBlobNearSize), this._activeEffect.setFloat("_Blob_Inner_Fade_2_", this.rightBlobInnerFade), this._activeEffect.setFloat("_Blob_Pulse_2_", this.rightBlobPulse), this._activeEffect.setFloat("_Blob_Fade_2_", this.rightBlobFade), this._activeEffect.setVector3("_Active_Face_Dir_", this.activeFaceDir), this._activeEffect.setVector3("_Active_Face_Up_", this.activeFaceUp), this._activeEffect.setFloat("_Fade_Width_", this.fadeWidth), this._activeEffect.setFloat("_Smooth_Active_Face_", this.smoothActiveFace ? 1 : 0), this._activeEffect.setFloat("_Show_Frame_", this.showFrame ? 1 : 0), this._activeEffect.setFloat("_Use_Blob_Texture_", this.useBlobTexture ? 1 : 0), this._activeEffect.setFloat("Use_Global_Left_Index", 1), this._activeEffect.setFloat("Use_Global_Right_Index", 1), this._activeEffect.setVector4("Global_Left_Index_Tip_Position", new d.Vector4(this.globalLeftIndexTipPosition.x, this.globalLeftIndexTipPosition.y, this.globalLeftIndexTipPosition.z, 1)), this._activeEffect.setVector4("Global_Right_Index_Tip_Position", new d.Vector4(this.globalRightIndexTipPosition.x, this.globalRightIndexTipPosition.y, this.globalRightIndexTipPosition.z, 1)), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3);
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var e3 = t2.prototype.serialize.call(this);
          return e3.customType = "BABYLON.FluentButtonMaterial", e3;
        }, e2.prototype.getClassName = function() {
          return "FluentButtonMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, e2.BLOB_TEXTURE_URL = "https://assets.babylonjs.com/core/MRTK/mrtk-fluent-button-blob.png", h([(0, d.serialize)()], e2.prototype, "edgeWidth", void 0), h([(0, d.serializeAsColor4)()], e2.prototype, "edgeColor", void 0), h([(0, d.serialize)()], e2.prototype, "proximityMaxIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "proximityFarDistance", void 0), h([(0, d.serialize)()], e2.prototype, "proximityNearRadius", void 0), h([(0, d.serialize)()], e2.prototype, "proximityAnisotropy", void 0), h([(0, d.serialize)()], e2.prototype, "selectionFuzz", void 0), h([(0, d.serialize)()], e2.prototype, "selected", void 0), h([(0, d.serialize)()], e2.prototype, "selectionFade", void 0), h([(0, d.serialize)()], e2.prototype, "selectionFadeSize", void 0), h([(0, d.serialize)()], e2.prototype, "selectedDistance", void 0), h([(0, d.serialize)()], e2.prototype, "selectedFadeLength", void 0), h([(0, d.serialize)()], e2.prototype, "blobIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFadeLength", void 0), h([(0, d.serialize)()], e2.prototype, "leftBlobEnable", void 0), h([(0, d.serialize)()], e2.prototype, "leftBlobNearSize", void 0), h([(0, d.serialize)()], e2.prototype, "leftBlobPulse", void 0), h([(0, d.serialize)()], e2.prototype, "leftBlobFade", void 0), h([(0, d.serialize)()], e2.prototype, "leftBlobInnerFade", void 0), h([(0, d.serialize)()], e2.prototype, "rightBlobEnable", void 0), h([(0, d.serialize)()], e2.prototype, "rightBlobNearSize", void 0), h([(0, d.serialize)()], e2.prototype, "rightBlobPulse", void 0), h([(0, d.serialize)()], e2.prototype, "rightBlobFade", void 0), h([(0, d.serialize)()], e2.prototype, "rightBlobInnerFade", void 0), h([(0, d.serializeAsVector3)()], e2.prototype, "activeFaceDir", void 0), h([(0, d.serializeAsVector3)()], e2.prototype, "activeFaceUp", void 0), h([(0, d.serialize)()], e2.prototype, "enableFade", void 0), h([(0, d.serialize)()], e2.prototype, "fadeWidth", void 0), h([(0, d.serialize)()], e2.prototype, "smoothActiveFace", void 0), h([(0, d.serialize)()], e2.prototype, "showFrame", void 0), h([(0, d.serialize)()], e2.prototype, "useBlobTexture", void 0), h([(0, d.serializeAsVector3)()], e2.prototype, "globalLeftIndexTipPosition", void 0), h([(0, d.serializeAsVector3)()], e2.prototype, "globalRightIndexTipPosition", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.FluentButtonMaterial", Qt);
      var Vt = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3) || this;
          return o2._isNearPressed = false, o2._interactionSurfaceHeight = 0, o2._isToggleButton = false, o2._toggleState = false, o2._toggleButtonCallback = function() {
            o2._onToggle(!o2._toggleState);
          }, o2.onToggleObservable = new d.Observable(), o2.collidableFrontDirection = d.Vector3.Zero(), i2 && (o2.collisionMesh = i2), o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "isActiveNearInteraction", { get: function() {
          return this._isNearPressed;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "collidableFrontDirection", { get: function() {
          if (this._collisionMesh) {
            var t3 = d.TmpVectors.Vector3[0];
            return d.Vector3.TransformNormalToRef(this._collidableFrontDirection, this._collisionMesh.getWorldMatrix(), t3), t3.normalize();
          }
          return this._collidableFrontDirection;
        }, set: function(t3) {
          if (this._collidableFrontDirection = t3.normalize(), this._collisionMesh) {
            var e3 = d.TmpVectors.Matrix[0];
            e3.copyFrom(this._collisionMesh.getWorldMatrix()), e3.invert(), d.Vector3.TransformNormalToRef(this._collidableFrontDirection, e3, this._collidableFrontDirection), this._collidableFrontDirection.normalize();
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "collisionMesh", { set: function(t3) {
          var e3, i2;
          if (this._collisionMesh) {
            this._collisionMesh.isNearPickable = false, (null === (e3 = this._collisionMesh.reservedDataStore) || void 0 === e3 ? void 0 : e3.GUI3D) && (this._collisionMesh.reservedDataStore.GUI3D = {});
            for (var o2 = 0, r2 = this._collisionMesh.getChildMeshes(); o2 < r2.length; o2++) (s2 = r2[o2]).isNearPickable = false, (null === (i2 = s2.reservedDataStore) || void 0 === i2 ? void 0 : i2.GUI3D) && (s2.reservedDataStore.GUI3D = {});
          }
          this._collisionMesh = t3, this._injectGUI3DReservedDataStore(this._collisionMesh).control = this, this._collisionMesh.isNearPickable = true;
          for (var n2 = 0, a2 = this._collisionMesh.getChildMeshes(); n2 < a2.length; n2++) {
            var s2 = a2[n2];
            this._injectGUI3DReservedDataStore(s2).control = this, s2.isNearPickable = true;
          }
          this.collidableFrontDirection = t3.forward;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isToggleButton", { get: function() {
          return this._isToggleButton;
        }, set: function(t3) {
          t3 !== this._isToggleButton && (this._isToggleButton = t3, t3 ? this.onPointerUpObservable.add(this._toggleButtonCallback) : (this.onPointerUpObservable.removeCallback(this._toggleButtonCallback), this._toggleState && this._onToggle(false)));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isToggled", { get: function() {
          return this._toggleState;
        }, set: function(t3) {
          this._isToggleButton && this._toggleState !== t3 && this._onToggle(t3);
        }, enumerable: false, configurable: true }), e2.prototype._onToggle = function(t3) {
          this._toggleState = t3, this.onToggleObservable.notifyObservers(t3);
        }, e2.prototype._isInteractionInFrontOfButton = function(t3) {
          return this._getInteractionHeight(t3, this._collisionMesh.getAbsolutePosition()) > 0;
        }, e2.prototype.getPressDepth = function(t3) {
          if (!this._isNearPressed) return 0;
          var e3 = this._getInteractionHeight(t3, this._collisionMesh.getAbsolutePosition());
          return this._interactionSurfaceHeight - e3;
        }, e2.prototype._getInteractionHeight = function(t3, e3) {
          var i2 = this.collidableFrontDirection;
          if (0 === i2.length()) return d.Vector3.Distance(t3, e3);
          var o2 = d.Vector3.Dot(e3, i2);
          return d.Vector3.Dot(t3, i2) - o2;
        }, e2.prototype._generatePointerEventType = function(t3, e3, i2) {
          if (t3 === d.PointerEventTypes.POINTERDOWN || t3 === d.PointerEventTypes.POINTERMOVE) {
            if (!this._isInteractionInFrontOfButton(e3)) return d.PointerEventTypes.POINTERMOVE;
            this._isNearPressed = true, this._interactionSurfaceHeight = this._getInteractionHeight(e3, this._collisionMesh.getAbsolutePosition());
          }
          if (t3 === d.PointerEventTypes.POINTERUP) {
            if (0 == i2) return d.PointerEventTypes.POINTERMOVE;
            this._isNearPressed = false;
          }
          return t3;
        }, e2.prototype._getTypeName = function() {
          return "TouchButton3D";
        }, e2.prototype._createNode = function(e3) {
          return t2.prototype._createNode.call(this, e3);
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this.onPointerUpObservable.removeCallback(this._toggleButtonCallback), this.onToggleObservable.clear(), this._collisionMesh && this._collisionMesh.dispose();
        }, e2;
      }(xt), Wt = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = true);
          var o2 = t2.call(this, e3) || this;
          return o2._shareMaterials = true, o2._isBackplateVisible = true, o2._frontPlateDepth = 0.5, o2._backPlateDepth = 0.04, o2._backplateColor = new d.Color3(0.08, 0.15, 0.55), o2._backplateToggledColor = new d.Color3(0.25, 0.4, 0.95), o2._shareMaterials = i2, o2.pointerEnterAnimation = function() {
            o2._frontMaterial.leftBlobEnable = true, o2._frontMaterial.rightBlobEnable = true;
          }, o2.pointerOutAnimation = function() {
            o2._frontMaterial.leftBlobEnable = false, o2._frontMaterial.rightBlobEnable = false;
          }, o2.pointerDownAnimation = function() {
            o2._frontPlate && !o2.isActiveNearInteraction && (o2._frontPlate.scaling.z = 0.2 * o2._frontPlateDepth, o2._frontPlate.position = d.Vector3.Forward(o2._frontPlate._scene.useRightHandedSystem).scale((o2._frontPlateDepth - 0.2 * o2._frontPlateDepth) / 2), o2._textPlate.position = d.Vector3.Forward(o2._textPlate._scene.useRightHandedSystem).scale(-(o2._backPlateDepth + 0.2 * o2._frontPlateDepth) / 2));
          }, o2.pointerUpAnimation = function() {
            o2._frontPlate && (o2._frontPlate.scaling.z = o2._frontPlateDepth, o2._frontPlate.position = d.Vector3.Forward(o2._frontPlate._scene.useRightHandedSystem).scale((o2._frontPlateDepth - o2._frontPlateDepth) / 2), o2._textPlate.position = d.Vector3.Forward(o2._textPlate._scene.useRightHandedSystem).scale(-(o2._backPlateDepth + o2._frontPlateDepth) / 2));
          }, o2.onPointerMoveObservable.add(function(t3) {
            if (o2._frontPlate && o2.isActiveNearInteraction) {
              var e4 = d.Vector3.Zero();
              if (o2._backPlate.getWorldMatrix().decompose(e4, void 0, void 0)) {
                var i3 = o2._getInteractionHeight(t3, o2._backPlate.getAbsolutePosition()) / e4.z;
                i3 = d.Scalar.Clamp(i3 - o2._backPlateDepth / 2, 0.2 * o2._frontPlateDepth, o2._frontPlateDepth), o2._frontPlate.scaling.z = i3, o2._frontPlate.position = d.Vector3.Forward(o2._frontPlate._scene.useRightHandedSystem).scale((o2._frontPlateDepth - i3) / 2), o2._textPlate.position = d.Vector3.Forward(o2._textPlate._scene.useRightHandedSystem).scale(-(o2._backPlateDepth + i3) / 2);
              }
            }
          }), o2._pointerHoverObserver = o2.onPointerMoveObservable.add(function(t3) {
            o2._frontMaterial.globalLeftIndexTipPosition = t3;
          }), o2;
        }
        return l(e2, t2), e2.prototype._disposeTooltip = function() {
          this._tooltipFade = null, this._tooltipTextBlock && this._tooltipTextBlock.dispose(), this._tooltipTexture && this._tooltipTexture.dispose(), this._tooltipMesh && this._tooltipMesh.dispose(), this.onPointerEnterObservable.remove(this._tooltipHoverObserver), this.onPointerOutObservable.remove(this._tooltipOutObserver);
        }, Object.defineProperty(e2.prototype, "renderingGroupId", { get: function() {
          return this._backPlate.renderingGroupId;
        }, set: function(t3) {
          this._backPlate.renderingGroupId = t3, this._textPlate.renderingGroupId = t3, this._frontPlate.renderingGroupId = t3, this._tooltipMesh && (this._tooltipMesh.renderingGroupId = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "mesh", { get: function() {
          return this._backPlate;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "tooltipText", { get: function() {
          return this._tooltipTextBlock ? this._tooltipTextBlock.text : null;
        }, set: function(t3) {
          var e3 = this;
          if (t3) {
            if (!this._tooltipFade) {
              var i2 = this._backPlate._scene.useRightHandedSystem;
              this._tooltipMesh = (0, d.CreatePlane)("", { size: 1 }, this._backPlate._scene);
              var o2 = (0, d.CreatePlane)("", { size: 1, sideOrientation: d.Mesh.DOUBLESIDE }, this._backPlate._scene), r2 = new d.StandardMaterial("", this._backPlate._scene);
              r2.diffuseColor = d.Color3.FromHexString("#212121"), o2.material = r2, o2.isPickable = false, this._tooltipMesh.addChild(o2), o2.position = d.Vector3.Forward(i2).scale(0.05), this._tooltipMesh.scaling.y = 1 / 3, this._tooltipMesh.position = d.Vector3.Up().scale(0.7).add(d.Vector3.Forward(i2).scale(-0.15)), this._tooltipMesh.isPickable = false, this._tooltipMesh.parent = this._backPlate, this._tooltipTexture = ct.CreateForMesh(this._tooltipMesh), this._tooltipTextBlock = new S(), this._tooltipTextBlock.scaleY = 3, this._tooltipTextBlock.color = "white", this._tooltipTextBlock.fontSize = 130, this._tooltipTexture.addControl(this._tooltipTextBlock), this._tooltipFade = new d.FadeInOutBehavior(), this._tooltipFade.delay = 500, this._tooltipMesh.addBehavior(this._tooltipFade), this._tooltipHoverObserver = this.onPointerEnterObservable.add(function() {
                e3._tooltipFade && e3._tooltipFade.fadeIn(true);
              }), this._tooltipOutObserver = this.onPointerOutObservable.add(function() {
                e3._tooltipFade && e3._tooltipFade.fadeIn(false);
              });
            }
            this._tooltipTextBlock && (this._tooltipTextBlock.text = t3);
          } else this._disposeTooltip();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "text", { get: function() {
          return this._text;
        }, set: function(t3) {
          this._text !== t3 && (this._text = t3, this._rebuildContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "imageUrl", { get: function() {
          return this._imageUrl;
        }, set: function(t3) {
          this._imageUrl !== t3 && (this._imageUrl = t3, this._rebuildContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backMaterial", { get: function() {
          return this._backMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "frontMaterial", { get: function() {
          return this._frontMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "plateMaterial", { get: function() {
          return this._plateMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "shareMaterials", { get: function() {
          return this._shareMaterials;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isBackplateVisible", { set: function(t3) {
          this.mesh && this._backMaterial && (t3 && !this._isBackplateVisible ? this._backPlate.visibility = 1 : !t3 && this._isBackplateVisible && (this._backPlate.visibility = 0)), this._isBackplateVisible = t3;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "TouchHolographicButton";
        }, e2.prototype._rebuildContent = function() {
          this._disposeFacadeTexture();
          var t3 = new w();
          if (t3.isVertical = true, (0, d.IsDocumentAvailable)() && document.createElement && this._imageUrl) {
            var e3 = new O();
            e3.source = this._imageUrl, e3.paddingTop = "40px", e3.height = "180px", e3.width = "100px", e3.paddingBottom = "40px", t3.addControl(e3);
          }
          if (this._text) {
            var i2 = new S();
            i2.text = this._text, i2.color = "white", i2.height = "30px", i2.fontSize = 24, t3.addControl(i2);
          }
          this.content = t3;
        }, e2.prototype._createNode = function(i2) {
          var o2, r2 = this;
          this.name = null !== (o2 = this.name) && void 0 !== o2 ? o2 : "TouchHolographicButton";
          var n2 = (0, d.CreateBox)("".concat(this.name, "_collisionMesh"), { width: 1, height: 1, depth: this._frontPlateDepth }, i2);
          n2.isPickable = true, n2.isNearPickable = true, n2.visibility = 0, n2.position = d.Vector3.Forward(i2.useRightHandedSystem).scale(-this._frontPlateDepth / 2);
          var a2 = d.Tools.GetAssetUrl(e2.MODEL_BASE_URL);
          d.SceneLoader.ImportMeshAsync(void 0, a2, e2.MODEL_FILENAME, i2).then(function(t3) {
            var e3 = (0, d.CreateBox)("${this.name}_alphaMesh", { width: 1, height: 1, depth: 1 }, i2);
            e3.isPickable = false, e3.material = new d.StandardMaterial("${this.name}_alphaMesh_material", i2), e3.material.alpha = 0.15;
            var o3 = t3.meshes[1];
            o3.name = "".concat(r2.name, "_frontPlate"), o3.isPickable = false, o3.scaling.z = r2._frontPlateDepth, e3.parent = o3, o3.parent = n2, r2._frontMaterial && (o3.material = r2._frontMaterial), r2._frontPlate = o3;
          }), this._backPlate = (0, d.CreateBox)("".concat(this.name, "_backPlate"), { width: 1, height: 1, depth: this._backPlateDepth }, i2), this._backPlate.position = d.Vector3.Forward(i2.useRightHandedSystem).scale(this._backPlateDepth / 2), this._backPlate.isPickable = false, this._textPlate = t2.prototype._createNode.call(this, i2), this._textPlate.name = "".concat(this.name, "_textPlate"), this._textPlate.isPickable = false, this._textPlate.position = d.Vector3.Forward(i2.useRightHandedSystem).scale(-this._frontPlateDepth / 2), this._backPlate.addChild(n2), this._backPlate.addChild(this._textPlate);
          var s2 = new d.TransformNode("{this.name}_root", i2);
          return this._backPlate.setParent(s2), this.collisionMesh = n2, this.collidableFrontDirection = this._backPlate.forward.negate(), s2;
        }, e2.prototype._applyFacade = function(t3) {
          this._plateMaterial.emissiveTexture = t3, this._plateMaterial.opacityTexture = t3, this._plateMaterial.diffuseColor = new d.Color3(0.4, 0.4, 0.4);
        }, e2.prototype._createBackMaterial = function(t3) {
          this._backMaterial = new Ot(this.name + "backPlateMaterial", t3.getScene()), this._backMaterial.albedoColor = this._backplateColor, this._backMaterial.renderBorders = true, this._backMaterial.renderHoverLight = false;
        }, e2.prototype._createFrontMaterial = function(t3) {
          this._frontMaterial = new Qt(this.name + "Front Material", t3.getScene());
        }, e2.prototype._createPlateMaterial = function(t3) {
          this._plateMaterial = new d.StandardMaterial(this.name + "Plate Material", t3.getScene()), this._plateMaterial.specularColor = d.Color3.Black();
        }, e2.prototype._onToggle = function(e3) {
          this._backMaterial && (this._backMaterial.albedoColor = e3 ? this._backplateToggledColor : this._backplateColor), t2.prototype._onToggle.call(this, e3);
        }, e2.prototype._affectMaterial = function(t3) {
          this._shareMaterials ? (this._host._touchSharedMaterials.backFluentMaterial ? this._backMaterial = this._host._touchSharedMaterials.backFluentMaterial : (this._createBackMaterial(t3), this._host._touchSharedMaterials.backFluentMaterial = this._backMaterial), this._host._touchSharedMaterials.frontFluentMaterial ? this._frontMaterial = this._host._touchSharedMaterials.frontFluentMaterial : (this._createFrontMaterial(t3), this._host._touchSharedMaterials.frontFluentMaterial = this._frontMaterial)) : (this._createBackMaterial(t3), this._createFrontMaterial(t3)), this._createPlateMaterial(t3), this._backPlate.material = this._backMaterial, this._textPlate.material = this._plateMaterial, this._isBackplateVisible || (this._backPlate.visibility = 0), this._frontPlate && (this._frontPlate.material = this._frontMaterial), this._rebuildContent();
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._disposeTooltip(), this.onPointerMoveObservable.remove(this._pointerHoverObserver), this.shareMaterials || (this._backMaterial.dispose(), this._frontMaterial.dispose(), this._plateMaterial.dispose(), this._pickedPointObserver && (this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver), this._pickedPointObserver = null));
        }, e2.MODEL_BASE_URL = "https://assets.babylonjs.com/core/MRTK/", e2.MODEL_FILENAME = "mrtk-fluent-button.glb", e2;
      }(Vt), Ht = function() {
        function t2() {
          this.followBehaviorEnabled = false, this.sixDofDragBehaviorEnabled = true, this.surfaceMagnetismBehaviorEnabled = true, this._followBehavior = new d.FollowBehavior(), this._sixDofDragBehavior = new d.SixDofDragBehavior(), this._surfaceMagnetismBehavior = new d.SurfaceMagnetismBehavior();
        }
        return Object.defineProperty(t2.prototype, "name", { get: function() {
          return "Default";
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "followBehavior", { get: function() {
          return this._followBehavior;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "sixDofDragBehavior", { get: function() {
          return this._sixDofDragBehavior;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "surfaceMagnetismBehavior", { get: function() {
          return this._surfaceMagnetismBehavior;
        }, enumerable: false, configurable: true }), t2.prototype.init = function() {
        }, t2.prototype.attach = function(t3, e2, i2) {
          this._scene = t3.getScene(), this.attachedNode = t3, this._addObservables(), this._followBehavior.attach(t3), this._sixDofDragBehavior.attach(t3), this._sixDofDragBehavior.draggableMeshes = e2 || null, this._sixDofDragBehavior.faceCameraOnDragStart = true, this._surfaceMagnetismBehavior.attach(t3, this._scene), i2 && (this._surfaceMagnetismBehavior.meshes = i2), this._surfaceMagnetismBehavior.enabled = false;
        }, t2.prototype.detach = function() {
          this.attachedNode = null, this._removeObservables(), this._followBehavior.detach(), this._sixDofDragBehavior.detach(), this._surfaceMagnetismBehavior.detach();
        }, t2.prototype._addObservables = function() {
          var t3 = this;
          this._onBeforeRenderObserver = this._scene.onBeforeRenderObservable.add(function() {
            t3._followBehavior._enabled = !t3._sixDofDragBehavior.isMoving && t3.followBehaviorEnabled;
          }), this._onDragObserver = this._sixDofDragBehavior.onDragObservable.add(function(e2) {
            t3._sixDofDragBehavior.disableMovement = t3._surfaceMagnetismBehavior.findAndUpdateTarget(e2.pickInfo);
          });
        }, t2.prototype._removeObservables = function() {
          this._scene.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._sixDofDragBehavior.onDragObservable.remove(this._onDragObserver);
        }, t2;
      }(), Gt = "handleVertexShader";
      d.ShaderStore.ShadersStore[Gt] || (d.ShaderStore.ShadersStore[Gt] = "precision highp float;attribute vec3 position;uniform vec3 positionOffset;uniform mat4 worldViewProjection;uniform float scale;void main(void) {vec4 vPos=vec4((vec3(position)+positionOffset)*scale,1.0);gl_Position=worldViewProjection*vPos;}");
      var Ut = "handlePixelShader";
      d.ShaderStore.ShadersStore[Ut] || (d.ShaderStore.ShadersStore[Ut] = "uniform vec3 color;void main(void) {gl_FragColor=vec4(color,1.0);}");
      var jt, Yt = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3, i2, "handle", { attributes: ["position"], uniforms: ["worldViewProjection", "color", "scale", "positionOffset"], needAlphaBlending: false, needAlphaTesting: false }) || this;
          return o2._hover = false, o2._drag = false, o2._color = new d.Color3(), o2._scale = 1, o2._lastTick = -1, o2.animationLength = 100, o2.hoverColor = new d.Color3(0, 0.467, 0.84), o2.baseColor = new d.Color3(1, 1, 1), o2.hoverScale = 0.75, o2.baseScale = 0.35, o2.dragScale = 0.55, o2._positionOffset = d.Vector3.Zero(), o2._updateInterpolationTarget(), o2._lastTick = Date.now(), o2._onBeforeRender = o2.getScene().onBeforeRenderObservable.add(function() {
            var t3 = Date.now(), e4 = t3 - o2._lastTick, i3 = o2._targetScale - o2._scale, r2 = d.TmpColors.Color3[0].copyFrom(o2._targetColor).subtractToRef(o2._color, d.TmpColors.Color3[0]);
            o2._scale = o2._scale + i3 * e4 / o2.animationLength, r2.scaleToRef(e4 / o2.animationLength, r2), o2._color.addToRef(r2, o2._color), o2.setColor3("color", o2._color), o2.setFloat("scale", o2._scale), o2.setVector3("positionOffset", o2._positionOffset), o2._lastTick = t3;
          }), o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "hover", { get: function() {
          return this._hover;
        }, set: function(t3) {
          this._hover = t3, this._updateInterpolationTarget();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "drag", { get: function() {
          return this._drag;
        }, set: function(t3) {
          this._drag = t3, this._updateInterpolationTarget();
        }, enumerable: false, configurable: true }), e2.prototype._updateInterpolationTarget = function() {
          this.drag ? (this._targetColor = this.hoverColor, this._targetScale = this.dragScale) : this.hover ? (this._targetColor = this.hoverColor, this._targetScale = this.hoverScale) : (this._targetColor = this.baseColor, this._targetScale = this.baseScale);
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this.getScene().onBeforeRenderObservable.remove(this._onBeforeRender);
        }, e2;
      }(d.ShaderMaterial);
      !function(t2) {
        t2[t2.IDLE = 0] = "IDLE", t2[t2.HOVER = 1] = "HOVER", t2[t2.DRAG = 2] = "DRAG";
      }(jt || (jt = {}));
      var Xt = function() {
        function t2(t3, e2) {
          this._state = 0, this._materials = [], this._scene = e2, this._gizmo = t3, this.node = this.createNode(), this.node.reservedDataStore = { handle: this };
        }
        return Object.defineProperty(t2.prototype, "state", { get: function() {
          return this._state;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "gizmo", { get: function() {
          return this._gizmo;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "hover", { set: function(t3) {
          t3 ? this._state |= 1 : this._state &= -2, this._updateMaterial();
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "drag", { set: function(t3) {
          t3 ? this._state |= 2 : this._state &= -3, this._updateMaterial();
        }, enumerable: false, configurable: true }), t2.prototype._createMaterial = function(t3) {
          var e2 = new Yt("handle", this._scene);
          return t3 && (e2._positionOffset = t3), e2;
        }, t2.prototype._updateMaterial = function() {
          for (var t3 = this._state, e2 = 0, i2 = this._materials; e2 < i2.length; e2++) (s2 = i2[e2]).hover = false, s2.drag = false;
          if (2 & t3) for (var o2 = 0, r2 = this._materials; o2 < r2.length; o2++) (s2 = r2[o2]).drag = true;
          else if (1 & t3) for (var n2 = 0, a2 = this._materials; n2 < a2.length; n2++) {
            var s2;
            (s2 = a2[n2]).hover = true;
          }
        }, t2.prototype.setDragBehavior = function(t3, e2, i2) {
          var o2 = new d.BaseSixDofDragBehavior();
          this._dragBehavior = o2, this._dragStartObserver = o2.onDragStartObservable.add(t3), this._draggingObserver = o2.onDragObservable.add(e2), this._dragEndObserver = o2.onDragEndObservable.add(i2), this._dragBehavior.attach(this.node);
        }, t2.prototype.dispose = function() {
          this._dragBehavior.onDragStartObservable.remove(this._dragStartObserver), this._dragBehavior.onDragObservable.remove(this._draggingObserver), this._dragBehavior.onDragEndObservable.remove(this._dragEndObserver), this._dragBehavior.detach();
          for (var t3 = 0, e2 = this._materials; t3 < e2.length; t3++) e2[t3].dispose();
          this.node.dispose();
        }, t2;
      }(), Kt = function(t2) {
        function e2() {
          return null !== t2 && t2.apply(this, arguments) || this;
        }
        return l(e2, t2), e2.prototype.createNode = function() {
          var t3 = (0, d.CreateBox)("sideVert", { width: 1, height: 10, depth: 0.1 }, this._scene), e3 = new d.TransformNode("side", this._scene);
          t3.parent = e3;
          var i2 = this._createMaterial();
          return t3.material = i2, t3.isNearGrabbable = true, this._materials.push(i2), e3;
        }, e2;
      }(Xt), Zt = function(t2) {
        function e2() {
          return null !== t2 && t2.apply(this, arguments) || this;
        }
        return l(e2, t2), e2.prototype.createNode = function() {
          var t3 = (0, d.CreateBox)("angleHor", { width: 3, height: 1, depth: 0.1 }, this._scene), e3 = (0, d.CreateBox)("angleVert", { width: 1, height: 3, depth: 0.1 }, this._scene), i2 = new d.TransformNode("angle", this._scene);
          return t3.parent = i2, e3.parent = i2, t3.material = this._createMaterial(new d.Vector3(1, 0, 0)), e3.material = this._createMaterial(new d.Vector3(0, 1, 0)), e3.isNearGrabbable = true, t3.isNearGrabbable = true, this._materials.push(t3.material), this._materials.push(e3.material), i2;
        }, e2;
      }(Xt), qt = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2._boundingDimensions = new d.Vector3(0, 0, 0), i2._renderObserver = null, i2._tmpQuaternion = new d.Quaternion(), i2._tmpVector = new d.Vector3(0, 0, 0), i2._corners = [], i2._sides = [], i2._boundingBoxGizmo = { min: new d.Vector3(), max: new d.Vector3() }, i2._margin = 0.35, i2._handleSize = 0.075, i2._attachedSlate = null, i2._existingSlateScale = new d.Vector3(), i2.fixedScreenSize = false, i2.fixedScreenSizeDistanceFactor = 10, i2._createNode(), i2.updateScale = false, i2._renderObserver = i2.gizmoLayer.originalScene.onBeforeRenderObservable.add(function() {
            i2.attachedMesh && !i2._existingSlateScale.equals(i2.attachedMesh.scaling) && i2.updateBoundingBox();
          }), i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "attachedSlate", { get: function() {
          return this._attachedSlate;
        }, set: function(t3) {
          var e3 = this;
          t3 ? (this.attachedMesh = t3.mesh, this.updateBoundingBox(), this._pickedPointObserver = t3._host.onPickingObservable.add(function(t4) {
            if (!e3._handleHovered || t4 && t4.parent === e3._handleHovered.node || (e3._handleHovered.hover = false, e3._handleHovered = null), t4 && t4.parent && t4.parent.reservedDataStore && t4.parent.reservedDataStore.handle) {
              var i2 = t4.parent.reservedDataStore.handle;
              i2.gizmo === e3 && (e3._handleHovered = i2, e3._handleHovered.hover = true);
            }
          })) : this._attachedSlate && this._attachedSlate._host.onPickingObservable.remove(this._pickedPointObserver), this._attachedSlate = t3;
        }, enumerable: false, configurable: true }), e2.prototype._createNode = function() {
          var t3 = this;
          this._handlesParent = new d.TransformNode("handlesParent", this.gizmoLayer.utilityLayerScene), this._handlesParent.rotationQuaternion = d.Quaternion.Identity();
          for (var e3 = [{ dimensions: new d.Vector3(-1, -1, 0), origin: new d.Vector3(1, 0, 0) }, { dimensions: new d.Vector3(1, -1, 0), origin: new d.Vector3(0, 0, 0) }, { dimensions: new d.Vector3(1, 1, 0), origin: new d.Vector3(0, 1, 0) }, { dimensions: new d.Vector3(-1, 1, 0), origin: new d.Vector3(1, 1, 0) }], i2 = 0; i2 < 4; i2++) {
            var o2 = new Zt(this, this.gizmoLayer.utilityLayerScene);
            this._corners.push(o2), o2.node.rotation.z = Math.PI / 2 * i2, o2.node.parent = this._handlesParent, this._assignDragBehaviorCorners(o2, function(e4, i3, o3, r3) {
              return t3._moveHandle(e4, i3, o3, r3, true);
            }, e3[i2]);
          }
          for (i2 = 0; i2 < 4; i2++) {
            var r2 = new Kt(this, this.gizmoLayer.utilityLayerScene);
            this._sides.push(r2), r2.node.rotation.z = Math.PI / 2 * i2, r2.node.parent = this._handlesParent, this._assignDragBehaviorSides(r2, i2 % 2 == 0 ? new d.Vector3(0, 1, 0) : new d.Vector3(1, 0, 0));
          }
          this._handlesParent.parent = this._rootMesh;
        }, e2.prototype._keepAspectRatio = function(t3, e3, i2) {
          void 0 === i2 && (i2 = false);
          var o2 = d.TmpVectors.Vector3[0];
          o2.copyFromFloats(e3, 1, 0).normalize(), i2 && (o2.y *= -1);
          var r2 = d.Vector3.Dot(t3, o2);
          t3.copyFrom(o2).scaleInPlace(r2);
        }, e2.prototype._clampDimensions = function(t3, e3, i2, o2) {
          void 0 === o2 && (o2 = false);
          var r2 = d.TmpVectors.Vector3[0];
          r2.copyFrom(t3).multiplyInPlace(i2);
          var n2 = d.TmpVectors.Vector3[1];
          if (n2.copyFromFloats(Math.max(this._attachedSlate.minDimensions.x, r2.x + e3.x), Math.max(this._attachedSlate.minDimensions.y, r2.y + e3.y), 0), o2) {
            var a2 = e3.x / e3.y;
            n2.x = Math.max(n2.x, n2.y * a2), n2.y = Math.max(n2.y, n2.x / a2);
          }
          r2.copyFrom(n2).subtractInPlace(e3), t3.x = Math.sign(t3.x) * Math.abs(r2.x), t3.y = Math.sign(t3.y) * Math.abs(r2.y);
        }, e2.prototype._moveHandle = function(t3, e3, i2, o2, r2) {
          if (this._attachedSlate) {
            if (r2) {
              var n2 = e3.x / e3.y;
              this._keepAspectRatio(i2, n2, o2.dimensions.x * o2.dimensions.y < 0);
            }
            this._clampDimensions(i2, e3, o2.dimensions, r2);
            var a2 = d.TmpVectors.Vector3[0], s2 = d.TmpVectors.Vector3[1];
            a2.copyFrom(i2).multiplyInPlace(o2.origin), s2.copyFrom(i2).multiplyInPlace(o2.dimensions), this._attachedSlate.origin.copyFrom(t3).addInPlace(a2), this._attachedSlate.dimensions.set(e3.x + s2.x, e3.y + s2.y);
          }
        }, e2.prototype._assignDragBehaviorCorners = function(t3, e3, i2) {
          var o2 = this, r2 = new d.Vector3(), n2 = new d.Vector3(), a2 = new d.Vector3(), s2 = new d.Matrix(), l2 = new d.Vector3();
          t3.setDragBehavior(function(t4) {
            o2.attachedSlate && o2.attachedMesh && (r2.set(o2.attachedSlate.dimensions.x, o2.attachedSlate.dimensions.y, d.Epsilon), n2.copyFrom(o2.attachedSlate.origin), a2.copyFrom(t4.position), s2.copyFrom(o2.attachedMesh.computeWorldMatrix(true)), s2.invert(), o2.attachedSlate._followButton.isToggled = false, d.Vector3.TransformNormalToRef(d.Vector3.Forward(), o2.attachedMesh.getWorldMatrix(), l2), l2.normalize(), o2._handleHovered && (o2._handleDragged = o2._handleHovered, o2._handleDragged.drag = true));
          }, function(t4) {
            o2.attachedSlate && o2.attachedMesh && (function(t5, e4, i3, o3) {
              t5.subtractToRef(i3, d.TmpVectors.Vector3[0]);
              var r3 = d.Vector3.Dot(d.TmpVectors.Vector3[0], e4);
              d.TmpVectors.Vector3[1].copyFrom(e4).scaleInPlace(r3), d.TmpVectors.Vector3[0].subtractInPlace(d.TmpVectors.Vector3[1]), d.TmpVectors.Vector3[0].addToRef(i3, o3);
            }(t4.position, l2, a2, o2._tmpVector), o2._tmpVector.subtractInPlace(a2), d.Vector3.TransformNormalToRef(o2._tmpVector, s2, o2._tmpVector), e3(n2, r2, o2._tmpVector, i2), o2.attachedSlate._positionElements(), o2.updateBoundingBox());
          }, function() {
            o2.attachedSlate && o2.attachedNode && (o2.attachedSlate._updatePivot(), o2._handleDragged && (o2._handleDragged.drag = false, o2._handleDragged = null));
          });
        }, e2.prototype._assignDragBehaviorSides = function(t3, e3) {
          var i2 = this, o2 = new d.Quaternion(), r2 = new d.Vector3(), n2 = new d.Vector3(), a2 = new d.Vector3(), s2 = new d.Vector3();
          t3.setDragBehavior(function(t4) {
            i2.attachedSlate && i2.attachedMesh && (o2.copyFrom(i2.attachedMesh.rotationQuaternion), r2.copyFrom(t4.position), a2.copyFrom(i2.attachedMesh.getAbsolutePivotPoint()), n2.copyFrom(r2).subtractInPlace(a2).normalize(), i2.attachedSlate._followButton.isToggled = false, d.Vector3.TransformNormalToRef(e3, i2.attachedMesh.getWorldMatrix(), s2), s2.normalize(), i2._handleHovered && (i2._handleDragged = i2._handleHovered, i2._handleDragged.drag = true));
          }, function(t4) {
            if (i2.attachedSlate && i2.attachedMesh) {
              i2._tmpVector.copyFrom(t4.position), i2._tmpVector.subtractInPlace(a2), i2._tmpVector.normalize();
              var r3 = -d.Vector3.GetAngleBetweenVectorsOnPlane(i2._tmpVector, n2, s2);
              d.Quaternion.RotationAxisToRef(e3, r3, i2._tmpQuaternion), o2.multiplyToRef(i2._tmpQuaternion, i2.attachedMesh.rotationQuaternion);
            }
          }, function() {
            i2.attachedSlate && i2.attachedNode && (i2.attachedSlate._updatePivot(), i2._handleDragged && (i2._handleDragged.drag = false, i2._handleDragged = null));
          });
        }, e2.prototype._attachedNodeChanged = function(t3) {
          t3 && this.updateBoundingBox();
        }, e2.prototype.updateBoundingBox = function() {
          if (this.attachedMesh) {
            d.PivotTools._RemoveAndStorePivotPoint(this.attachedMesh);
            var t3 = this.attachedMesh.parent;
            this.attachedMesh.setParent(null), this._update(), this.attachedMesh.rotationQuaternion || (this.attachedMesh.rotationQuaternion = d.Quaternion.RotationYawPitchRoll(this.attachedMesh.rotation.y, this.attachedMesh.rotation.x, this.attachedMesh.rotation.z)), this._tmpQuaternion.copyFrom(this.attachedMesh.rotationQuaternion), this._tmpVector.copyFrom(this.attachedMesh.position), this.attachedMesh.rotationQuaternion.set(0, 0, 0, 1), this.attachedMesh.position.set(0, 0, 0);
            var e3 = this.attachedMesh.getHierarchyBoundingVectors();
            e3.max.subtractToRef(e3.min, this._boundingDimensions), this._boundingBoxGizmo.min = e3.min, this._boundingBoxGizmo.max = e3.max, this._updateHandlesPosition(), this._updateHandlesScaling(), this.attachedMesh.rotationQuaternion.copyFrom(this._tmpQuaternion), this.attachedMesh.position.copyFrom(this._tmpVector), d.PivotTools._RestorePivotPoint(this.attachedMesh), this.attachedMesh.setParent(t3), this.attachedMesh.computeWorldMatrix(true), this._existingSlateScale.copyFrom(this.attachedMesh.scaling);
          }
        }, e2.prototype._updateHandlesPosition = function() {
          var t3 = this._boundingBoxGizmo.min.clone(), e3 = this._boundingBoxGizmo.max.clone(), i2 = this._corners[0].node.scaling.length();
          t3.x -= this._margin * i2, t3.y -= this._margin * i2, e3.x += this._margin * i2, e3.y += this._margin * i2;
          var o2 = t3.add(e3).scaleInPlace(0.5);
          this._corners[0].node.position.copyFromFloats(t3.x, t3.y, 0), this._corners[1].node.position.copyFromFloats(e3.x, t3.y, 0), this._corners[2].node.position.copyFromFloats(e3.x, e3.y, 0), this._corners[3].node.position.copyFromFloats(t3.x, e3.y, 0), this._sides[0].node.position.copyFromFloats(t3.x, o2.y, 0), this._sides[1].node.position.copyFromFloats(o2.x, t3.y, 0), this._sides[2].node.position.copyFromFloats(e3.x, o2.y, 0), this._sides[3].node.position.copyFromFloats(o2.x, e3.y, 0);
        }, e2.prototype._updateHandlesScaling = function() {
          if (this._attachedSlate && this._attachedSlate.mesh) {
            for (var t3 = this._attachedSlate.mesh.scaling.x * this._attachedSlate.dimensions.x, e3 = this._attachedSlate.mesh.scaling.y * this._attachedSlate.dimensions.y, i2 = Math.min(t3, e3) * this._handleSize, o2 = 0; o2 < this._corners.length; o2++) this._corners[o2].node.scaling.setAll(i2);
            for (o2 = 0; o2 < this._sides.length; o2++) this._sides[o2].node.scaling.setAll(i2);
          }
        }, e2.prototype._update = function() {
          if (t2.prototype._update.call(this), this.gizmoLayer.utilityLayerScene.activeCamera && this._attachedSlate && this._attachedSlate.mesh) {
            if (this.fixedScreenSize) {
              this._attachedSlate.mesh.absolutePosition.subtractToRef(this.gizmoLayer.utilityLayerScene.activeCamera.position, this._tmpVector);
              for (var e3 = this._handleSize * this._tmpVector.length() / this.fixedScreenSizeDistanceFactor, i2 = 0; i2 < this._corners.length; i2++) this._corners[i2].node.scaling.set(e3, e3, e3);
              for (i2 = 0; i2 < this._sides.length; i2++) this._sides[i2].node.scaling.set(e3, e3, e3);
            }
            this._updateHandlesPosition();
          }
        }, e2.prototype.dispose = function() {
          this.gizmoLayer.originalScene.onBeforeRenderObservable.remove(this._renderObserver), t2.prototype.dispose.call(this);
          for (var e3 = 0, i2 = this._corners; e3 < i2.length; e3++) i2[e3].dispose();
          for (var o2 = 0, r2 = this._sides; o2 < r2.length; o2++) r2[o2].dispose();
        }, e2;
      }(d.Gizmo), Jt = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2.titleBarMargin = 5e-3, i2.origin = new d.Vector3(0, 0, 0), i2._dimensions = new d.Vector2(21.875, 12.5), i2._titleBarHeight = 0.625, i2._titleText = "", i2.fitContentToDimensions = false, i2._contentScaleRatio = 1, i2.minDimensions = new d.Vector2(15.625, 6.25), i2.defaultDimensions = i2._dimensions.clone(), i2._followButton = new Wt("followButton" + i2.name), i2._followButton.isToggleButton = true, i2._closeButton = new Wt("closeButton" + i2.name), i2._contentViewport = new d.Viewport(0, 0, 1, 1), i2._contentDragBehavior = new d.PointerDragBehavior({ dragPlaneNormal: new d.Vector3(0, 0, -1) }), i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "defaultBehavior", { get: function() {
          return this._defaultBehavior;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "dimensions", { get: function() {
          return this._dimensions;
        }, set: function(t3) {
          var e3 = 1;
          if (t3.x < this.minDimensions.x || t3.y < this.minDimensions.y) {
            var i2 = t3.x / t3.y;
            e3 = this.minDimensions.x / this.minDimensions.y > i2 ? this.minDimensions.x / t3.x : this.minDimensions.y / t3.y;
          }
          this._dimensions.copyFrom(t3).scaleInPlace(e3), this._updatePivot(), this._positionElements();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "titleBarHeight", { get: function() {
          return this._titleBarHeight;
        }, set: function(t3) {
          this._titleBarHeight = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "renderingGroupId", { get: function() {
          return this._titleBar.renderingGroupId;
        }, set: function(t3) {
          this._titleBar.renderingGroupId = t3, this._titleBarTitle.renderingGroupId = t3, this._contentPlate.renderingGroupId = t3, this._backPlate.renderingGroupId = t3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "title", { get: function() {
          return this._titleText;
        }, set: function(t3) {
          this._titleText = t3, this._titleTextComponent && (this._titleTextComponent.text = t3);
        }, enumerable: false, configurable: true }), e2.prototype._applyFacade = function(t3) {
          this._contentMaterial.albedoTexture = t3, this._resetContentPositionAndZoom(), this._applyContentViewport(), t3.attachToMesh(this._contentPlate, true);
        }, e2.prototype._addControl = function(t3) {
          t3._host = this._host, this._host.utilityLayer && t3._prepareNode(this._host.utilityLayer.utilityLayerScene);
        }, e2.prototype._getTypeName = function() {
          return "HolographicSlate";
        }, e2.prototype._positionElements = function() {
          var t3 = this._followButton, i2 = this._closeButton, o2 = this._titleBar, r2 = this._titleBarTitle, n2 = this._contentPlate, a2 = this._backPlate;
          if (t3 && i2 && o2) {
            i2.scaling.setAll(this.titleBarHeight), t3.scaling.setAll(this.titleBarHeight), i2.position.copyFromFloats(this.dimensions.x - this.titleBarHeight / 2, -this.titleBarHeight / 2, 0).addInPlace(this.origin), t3.position.copyFromFloats(this.dimensions.x - 3 * this.titleBarHeight / 2, -this.titleBarHeight / 2, 0).addInPlace(this.origin);
            var s2 = this.dimensions.y - this.titleBarHeight - this.titleBarMargin, l2 = n2.getScene().useRightHandedSystem;
            o2.scaling.set(this.dimensions.x, this.titleBarHeight, d.Epsilon), r2.scaling.set(this.dimensions.x - 2 * this.titleBarHeight, this.titleBarHeight, d.Epsilon), n2.scaling.copyFromFloats(this.dimensions.x, s2, d.Epsilon), a2.scaling.copyFromFloats(this.dimensions.x, s2, d.Epsilon), o2.position.copyFromFloats(this.dimensions.x / 2, -this.titleBarHeight / 2, 0).addInPlace(this.origin), r2.position.copyFromFloats(this.dimensions.x / 2 - this.titleBarHeight, -this.titleBarHeight / 2, l2 ? d.Epsilon : -d.Epsilon).addInPlace(this.origin), n2.position.copyFromFloats(this.dimensions.x / 2, -(this.titleBarHeight + this.titleBarMargin + s2 / 2), 0).addInPlace(this.origin), a2.position.copyFromFloats(this.dimensions.x / 2, -(this.titleBarHeight + this.titleBarMargin + s2 / 2), l2 ? -d.Epsilon : d.Epsilon).addInPlace(this.origin), this._titleTextComponent.host.scaleTo(e2._DEFAULT_TEXT_RESOLUTION_Y * r2.scaling.x / r2.scaling.y, e2._DEFAULT_TEXT_RESOLUTION_Y);
            var _2 = this.dimensions.x / s2;
            this._contentViewport.width = this._contentScaleRatio, this._contentViewport.height = this._contentScaleRatio / _2, this._applyContentViewport(), this._gizmo && this._gizmo.updateBoundingBox();
          }
        }, e2.prototype._applyContentViewport = function() {
          var t3;
          if ((null === (t3 = this._contentPlate) || void 0 === t3 ? void 0 : t3.material) && this._contentPlate.material.albedoTexture) {
            var e3 = this._contentPlate.material.albedoTexture;
            e3.uScale = this._contentScaleRatio, e3.vScale = this.fitContentToDimensions ? this._contentScaleRatio : this._contentScaleRatio / this._contentViewport.width * this._contentViewport.height, e3.uOffset = this._contentViewport.x, e3.vOffset = this._contentViewport.y;
          }
        }, e2.prototype._resetContentPositionAndZoom = function() {
          this._contentViewport.x = 0, this._contentViewport.y = 0, this._contentScaleRatio = 1;
        }, e2.prototype._updatePivot = function() {
          if (this.mesh) {
            var t3 = new d.Vector3(0.5 * this.dimensions.x, 0.5 * -this.dimensions.y, d.Epsilon);
            t3.addInPlace(this.origin), t3.z = 0;
            var e3 = new d.Vector3(0, 0, 0);
            d.Vector3.TransformCoordinatesToRef(e3, this.mesh.computeWorldMatrix(true), e3), this.mesh.setPivotPoint(t3);
            var i2 = new d.Vector3(0, 0, 0);
            d.Vector3.TransformCoordinatesToRef(i2, this.mesh.computeWorldMatrix(true), i2), this.mesh.position.addInPlace(e3).subtractInPlace(i2);
          }
        }, e2.prototype._createNode = function(t3) {
          var i2 = this, o2 = new d.Mesh("slate_" + this.name, t3);
          this._titleBar = (0, d.CreateBox)("titleBar_" + this.name, { size: 1 }, t3), this._titleBarTitle = (0, d.CreatePlane)("titleText_" + this.name, { size: 1 }, t3), this._titleBarTitle.parent = o2, this._titleBarTitle.isPickable = false;
          var r2 = ct.CreateForMesh(this._titleBarTitle);
          if (this._titleTextComponent = new S("titleText_" + this.name, this._titleText), this._titleTextComponent.textWrapping = 2, this._titleTextComponent.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, this._titleTextComponent.color = "white", this._titleTextComponent.fontSize = e2._DEFAULT_TEXT_RESOLUTION_Y / 2, this._titleTextComponent.paddingLeft = e2._DEFAULT_TEXT_RESOLUTION_Y / 4, r2.addControl(this._titleTextComponent), t3.useRightHandedSystem) {
            var n2 = new d.Vector4(0, 0, 1, 1);
            this._contentPlate = (0, d.CreatePlane)("contentPlate_" + this.name, { size: 1, sideOrientation: d.VertexData.BACKSIDE, frontUVs: n2 }, t3), this._backPlate = (0, d.CreatePlane)("backPlate_" + this.name, { size: 1, sideOrientation: d.VertexData.FRONTSIDE }, t3);
          } else n2 = new d.Vector4(0, 0, 1, 1), this._contentPlate = (0, d.CreatePlane)("contentPlate_" + this.name, { size: 1, sideOrientation: d.VertexData.FRONTSIDE, frontUVs: n2 }, t3), this._backPlate = (0, d.CreatePlane)("backPlate_" + this.name, { size: 1, sideOrientation: d.VertexData.BACKSIDE }, t3);
          this._titleBar.parent = o2, this._titleBar.isNearGrabbable = true, this._contentPlate.parent = o2, this._backPlate.parent = o2, this._attachContentPlateBehavior(), this._addControl(this._followButton), this._addControl(this._closeButton);
          var a2 = this._followButton, s2 = this._closeButton;
          a2.node.parent = o2, s2.node.parent = o2, this._positionElements();
          var l2 = d.Tools.GetAssetUrl(e2.ASSETS_BASE_URL);
          return this._followButton.imageUrl = l2 + e2.FOLLOW_ICON_FILENAME, this._closeButton.imageUrl = l2 + e2.CLOSE_ICON_FILENAME, this._followButton.isBackplateVisible = false, this._closeButton.isBackplateVisible = false, this._followButton.onToggleObservable.add(function(t4) {
            i2._defaultBehavior.followBehaviorEnabled = t4, i2._defaultBehavior.followBehaviorEnabled && i2._defaultBehavior.followBehavior.recenter();
          }), this._closeButton.onPointerClickObservable.add(function() {
            i2.dispose();
          }), o2.rotationQuaternion = d.Quaternion.Identity(), o2.isVisible = false, o2;
        }, e2.prototype._attachContentPlateBehavior = function() {
          var t3 = this;
          this._contentDragBehavior.attach(this._contentPlate), this._contentDragBehavior.moveAttached = false, this._contentDragBehavior.useObjectOrientationForDragging = true, this._contentDragBehavior.updateDragPlane = false;
          var e3, i2, o2 = new d.Vector3(), r2 = new d.Vector3(), n2 = new d.Vector3(), a2 = new d.Vector3(), s2 = new d.Vector2();
          this._contentDragBehavior.onDragStartObservable.add(function(s3) {
            t3.node && (e3 = t3._contentViewport.clone(), i2 = t3.node.computeWorldMatrix(true), o2.copyFrom(s3.dragPlanePoint), r2.set(t3.dimensions.x, t3.dimensions.y, d.Epsilon), r2.y -= t3.titleBarHeight + t3.titleBarMargin, d.Vector3.TransformNormalToRef(r2, i2, r2), n2.copyFromFloats(0, 1, 0), d.Vector3.TransformNormalToRef(n2, i2, n2), a2.copyFromFloats(1, 0, 0), d.Vector3.TransformNormalToRef(a2, i2, a2), n2.normalize(), n2.scaleInPlace(1 / d.Vector3.Dot(n2, r2)), a2.normalize(), a2.scaleInPlace(1 / d.Vector3.Dot(a2, r2)));
          });
          var l2 = new d.Vector3();
          this._contentDragBehavior.onDragObservable.add(function(i3) {
            t3.fitContentToDimensions || (l2.copyFrom(i3.dragPlanePoint), l2.subtractInPlace(o2), s2.copyFromFloats(d.Vector3.Dot(l2, a2), d.Vector3.Dot(l2, n2)), t3._contentViewport.x = d.Scalar.Clamp(e3.x - l2.x, 0, 1 - t3._contentViewport.width * t3._contentScaleRatio), t3._contentViewport.y = d.Scalar.Clamp(e3.y - l2.y, 0, 1 - t3._contentViewport.height * t3._contentScaleRatio), t3._applyContentViewport());
          });
        }, e2.prototype._affectMaterial = function(t3) {
          this._titleBarMaterial = new Dt("".concat(this.name, " plateMaterial"), t3.getScene()), this._contentMaterial = new Ot("".concat(this.name, " contentMaterial"), t3.getScene()), this._contentMaterial.renderBorders = true, this._backMaterial = new Dt("".concat(this.name, " backPlate"), t3.getScene()), this._backMaterial.lineWidth = d.Epsilon, this._backMaterial.radius = 5e-3, this._backMaterial.backFaceCulling = true, this._titleBar.material = this._titleBarMaterial, this._contentPlate.material = this._contentMaterial, this._backPlate.material = this._backMaterial, this._resetContent(), this._applyContentViewport();
        }, e2.prototype._prepareNode = function(e3) {
          var i2 = this;
          t2.prototype._prepareNode.call(this, e3), this._gizmo = new qt(this._host.utilityLayer), this._gizmo.attachedSlate = this, this._defaultBehavior = new Ht(), this._defaultBehavior.attach(this.node, [this._titleBar]), this._defaultBehavior.sixDofDragBehavior.onDragStartObservable.add(function() {
            i2._followButton.isToggled = false;
          }), this._positionChangedObserver = this._defaultBehavior.sixDofDragBehavior.onPositionChangedObservable.add(function() {
            i2._gizmo.updateBoundingBox();
          }), this._updatePivot(), this.resetDefaultAspectAndPose(false);
        }, e2.prototype.resetDefaultAspectAndPose = function(t3) {
          if (void 0 === t3 && (t3 = true), this._host && this._host.utilityLayer && this.node) {
            var e3 = this._host.utilityLayer.utilityLayerScene, i2 = e3.activeCamera;
            if (i2) {
              var o2 = i2.getWorldMatrix(), r2 = d.Vector3.TransformNormal(d.Vector3.Backward(e3.useRightHandedSystem), o2);
              this.origin.setAll(0), this._gizmo.updateBoundingBox();
              var n2 = this.node.getAbsolutePivotPoint();
              this.node.position.equalsToFloats(0, 0, 0) && this.node.position.copyFrom(i2.position).subtractInPlace(r2).subtractInPlace(n2), this.node.rotationQuaternion = d.Quaternion.FromLookDirectionLH(r2, new d.Vector3(0, 1, 0)), t3 && (this.dimensions = this.defaultDimensions);
            }
          }
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._titleBarMaterial.dispose(), this._contentMaterial.dispose(), this._titleBar.dispose(), this._titleBarTitle.dispose(), this._contentPlate.dispose(), this._backPlate.dispose(), this._followButton.dispose(), this._closeButton.dispose(), this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver), this._defaultBehavior.sixDofDragBehavior.onPositionChangedObservable.remove(this._positionChangedObserver), this._defaultBehavior.detach(), this._gizmo.dispose(), this._contentDragBehavior.detach();
        }, e2.ASSETS_BASE_URL = "https://assets.babylonjs.com/core/MRTK/", e2.CLOSE_ICON_FILENAME = "IconClose.png", e2.FOLLOW_ICON_FILENAME = "IconFollowMe.png", e2._DEFAULT_TEXT_RESOLUTION_Y = 102.4, e2;
      }(vt), $t = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, i2) || this;
          return o2._currentMesh = e3, o2.pointerEnterAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(1.1);
          }, o2.pointerOutAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(1 / 1.1);
          }, o2.pointerDownAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(0.95);
          }, o2.pointerUpAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(1 / 0.95);
          }, o2;
        }
        return l(e2, t2), e2.prototype._getTypeName = function() {
          return "MeshButton3D";
        }, e2.prototype._createNode = function(t3) {
          for (var e3 = 0, i2 = this._currentMesh.getChildMeshes(); e3 < i2.length; e3++) {
            var o2 = i2[e3];
            this._injectGUI3DReservedDataStore(o2).control = this;
          }
          return this._currentMesh;
        }, e2.prototype._affectMaterial = function(t3) {
        }, e2;
      }(xt), te = function(t2) {
        function e2(e3) {
          var i2 = t2.call(this, e3) || this;
          return i2._isPinned = false, i2._defaultBehavior = new Ht(), i2._dragObserver = i2._defaultBehavior.sixDofDragBehavior.onDragObservable.add(function() {
            i2.isPinned = true;
          }), i2.backPlateMargin = 1, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "defaultBehavior", { get: function() {
          return this._defaultBehavior;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isPinned", { get: function() {
          return this._isPinned;
        }, set: function(t3) {
          this._pinButton.isToggled === t3 ? (this._isPinned = t3, this._defaultBehavior.followBehaviorEnabled = !t3) : this._pinButton.isToggled = t3;
        }, enumerable: false, configurable: true }), e2.prototype._createPinButton = function(t3) {
          var i2 = this, o2 = new Wt("pin" + this.name, false), r2 = d.Tools.GetAssetUrl(e2._ASSETS_BASE_URL);
          return o2.imageUrl = r2 + e2._PIN_ICON_FILENAME, o2.parent = this, o2._host = this._host, o2.isToggleButton = true, o2.onToggleObservable.add(function(t4) {
            i2.isPinned = t4;
          }), this._host.utilityLayer && (o2._prepareNode(this._host.utilityLayer.utilityLayerScene), o2.scaling.scaleInPlace(Rt.MENU_BUTTON_SCALE), o2.node && (o2.node.parent = t3)), o2;
        }, e2.prototype._createNode = function(e3) {
          var i2 = t2.prototype._createNode.call(this, e3);
          return this._pinButton = this._createPinButton(i2), this.isPinned = false, this._defaultBehavior.attach(i2, [this._backPlate]), this._defaultBehavior.followBehavior.ignoreCameraPitchAndRoll = true, this._defaultBehavior.followBehavior.pitchOffset = -15, this._defaultBehavior.followBehavior.minimumDistance = 0.3, this._defaultBehavior.followBehavior.defaultDistance = 0.4, this._defaultBehavior.followBehavior.maximumDistance = 0.6, this._backPlate.isNearGrabbable = true, i2.isVisible = false, i2;
        }, e2.prototype._finalProcessing = function() {
          t2.prototype._finalProcessing.call(this), this._pinButton.position.copyFromFloats((this._backPlate.scaling.x + Rt.MENU_BUTTON_SCALE) / 2, this._backPlate.scaling.y / 2, 0);
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._defaultBehavior.sixDofDragBehavior.onDragObservable.remove(this._dragObserver), this._defaultBehavior.detach();
        }, e2._ASSETS_BASE_URL = "https://assets.babylonjs.com/core/MRTK/", e2._PIN_ICON_FILENAME = "IconPin.png", e2;
      }(Rt), ee = function(t2) {
        function e2() {
          return null !== t2 && t2.apply(this, arguments) || this;
        }
        return l(e2, t2), e2.prototype._mapGridNode = function(t3, e3) {
          var i2 = t3.mesh;
          if (i2) {
            t3.position = e3.clone();
            var o2 = d.TmpVectors.Vector3[0];
            switch (o2.copyFrom(e3), this.orientation) {
              case Pt.FACEORIGIN_ORIENTATION:
              case Pt.FACEFORWARD_ORIENTATION:
                o2.addInPlace(new d.Vector3(0, 0, 1)), i2.lookAt(o2);
                break;
              case Pt.FACEFORWARDREVERSED_ORIENTATION:
              case Pt.FACEORIGINREVERSED_ORIENTATION:
                o2.addInPlace(new d.Vector3(0, 0, -1)), i2.lookAt(o2);
            }
          }
        }, e2;
      }(It), ie = function(t2) {
        function e2() {
          var e3 = null !== t2 && t2.apply(this, arguments) || this;
          return e3._iteration = 100, e3;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "iteration", { get: function() {
          return this._iteration;
        }, set: function(t3) {
          var e3 = this;
          this._iteration !== t3 && (this._iteration = t3, d.Tools.SetImmediate(function() {
            e3._arrangeChildren();
          }));
        }, enumerable: false, configurable: true }), e2.prototype._mapGridNode = function(t3, e3) {
          var i2 = t3.mesh, o2 = this._scatterMapping(e3);
          if (i2) {
            switch (this.orientation) {
              case Pt.FACEORIGIN_ORIENTATION:
              case Pt.FACEFORWARD_ORIENTATION:
                i2.lookAt(new d.Vector3(0, 0, 1));
                break;
              case Pt.FACEFORWARDREVERSED_ORIENTATION:
              case Pt.FACEORIGINREVERSED_ORIENTATION:
                i2.lookAt(new d.Vector3(0, 0, -1));
            }
            t3.position = o2;
          }
        }, e2.prototype._scatterMapping = function(t3) {
          return t3.x = (1 - 2 * Math.random()) * this._cellWidth, t3.y = (1 - 2 * Math.random()) * this._cellHeight, t3;
        }, e2.prototype._finalProcessing = function() {
          for (var t3 = [], e3 = 0, i2 = this._children; e3 < i2.length; e3++) {
            var o2 = i2[e3];
            o2.mesh && t3.push(o2.mesh);
          }
          for (var r2 = 0; r2 < this._iteration; r2++) {
            t3.sort(function(t4, e4) {
              var i3 = t4.position.lengthSquared(), o3 = e4.position.lengthSquared();
              return i3 < o3 ? 1 : i3 > o3 ? -1 : 0;
            });
            for (var n2 = Math.pow(this.margin, 2), a2 = Math.max(this._cellWidth, this._cellHeight), s2 = d.TmpVectors.Vector2[0], l2 = d.TmpVectors.Vector3[0], _2 = 0; _2 < t3.length - 1; _2++) for (var h2 = _2 + 1; h2 < t3.length; h2++) if (_2 != h2) {
              t3[h2].position.subtractToRef(t3[_2].position, l2), s2.x = l2.x, s2.y = l2.y;
              var c2 = a2, u2 = s2.lengthSquared() - n2;
              (u2 -= Math.min(u2, n2)) < Math.pow(c2, 2) && (s2.normalize(), l2.scaleInPlace(0.5 * (c2 - Math.sqrt(u2))), t3[h2].position.addInPlace(l2), t3[_2].position.subtractInPlace(l2));
            }
          }
        }, e2;
      }(It), oe = "mrdlSliderBarPixelShader";
      d.ShaderStore.ShadersStore[oe] || (d.ShaderStore.ShadersStore[oe] = "uniform vec3 cameraPosition;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;uniform float _Radius_;uniform float _Bevel_Front_;uniform float _Bevel_Front_Stretch_;uniform float _Bevel_Back_;uniform float _Bevel_Back_Stretch_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform bool _Bulge_Enabled_;uniform float _Bulge_Height_;uniform float _Bulge_Radius_;uniform float _Sun_Intensity_;uniform float _Sun_Theta_;uniform float _Sun_Phi_;uniform float _Indirect_Diffuse_;uniform vec4 _Albedo_;uniform float _Specular_;uniform float _Shininess_;uniform float _Sharpness_;uniform float _Subsurface_;uniform vec4 _Left_Color_;uniform vec4 _Right_Color_;uniform float _Reflection_;uniform float _Front_Reflect_;uniform float _Edge_Reflect_;uniform float _Power_;uniform vec4 _Sky_Color_;uniform vec4 _Horizon_Color_;uniform vec4 _Ground_Color_;uniform float _Horizon_Power_;uniform sampler2D _Reflection_Map_;uniform sampler2D _Indirect_Environment_;uniform float _Width_;uniform float _Fuzz_;uniform float _Min_Fuzz_;uniform float _Clip_Fade_;uniform float _Hue_Shift_;uniform float _Saturation_Shift_;uniform float _Value_Shift_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform vec3 _Left_Index_Pos_;uniform vec3 _Right_Index_Pos_;uniform vec3 _Left_Index_Middle_Pos_;uniform vec3 _Right_Index_Middle_Pos_;uniform sampler2D _Decal_;uniform vec2 _Decal_Scale_XY_;uniform bool _Decal_Front_Only_;uniform float _Rim_Intensity_;uniform sampler2D _Rim_Texture_;uniform float _Rim_Hue_Shift_;uniform float _Rim_Saturation_Shift_;uniform float _Rim_Value_Shift_;uniform float _Iridescence_Intensity_;uniform sampler2D _Iridescence_Texture_;uniform bool Use_Global_Left_Index;uniform bool Use_Global_Right_Index;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;uniform vec4 Global_Left_Thumb_Tip_Position;uniform vec4 Global_Right_Thumb_Tip_Position;uniform vec4 Global_Left_Index_Middle_Position;uniform vec4 Global_Right_Index_Middle_Position;uniform float Global_Left_Index_Tip_Proximity;uniform float Global_Right_Index_Tip_Proximity;void Blob_Fragment_B30(\nsampler2D Blob_Texture,\nvec4 Blob_Info1,\nvec4 Blob_Info2,\nout vec4 Blob_Color)\n{float k1=dot(Blob_Info1.xy,Blob_Info1.xy);float k2=dot(Blob_Info2.xy,Blob_Info2.xy);vec3 closer=k1<k2 ? vec3(k1,Blob_Info1.z,Blob_Info1.w) : vec3(k2,Blob_Info2.z,Blob_Info2.w);Blob_Color=closer.z*texture(Blob_Texture,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);}\nvoid FastLinearTosRGB_B42(\nvec4 Linear,\nout vec4 sRGB)\n{sRGB.rgb=sqrt(clamp(Linear.rgb,0.0,1.0));sRGB.a=Linear.a;}\nvoid Scale_RGB_B59(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=vec4(Scalar,Scalar,Scalar,1)*Color;}\nvoid Fragment_Main_B121(\nfloat Sun_Intensity,\nfloat Sun_Theta,\nfloat Sun_Phi,\nvec3 Normal,\nvec4 Albedo,\nfloat Fresnel_Reflect,\nfloat Shininess,\nvec3 Incident,\nvec4 Horizon_Color,\nvec4 Sky_Color,\nvec4 Ground_Color,\nfloat Indirect_Diffuse,\nfloat Specular,\nfloat Horizon_Power,\nfloat Reflection,\nvec4 Reflection_Sample,\nvec4 Indirect_Sample,\nfloat Sharpness,\nfloat SSS,\nfloat Subsurface,\nvec4 Translucence,\nvec4 Rim_Light,\nvec4 Iridescence,\nout vec4 Result)\n{float theta=Sun_Theta*2.0*3.14159;float phi=Sun_Phi*3.14159;vec3 lightDir= vec3(cos(phi)*cos(theta),sin(phi),cos(phi)*sin(theta));float NdotL=max(dot(lightDir,Normal),0.0);vec3 R=reflect(Incident,Normal);float RdotL=max(0.0,dot(R,lightDir));float specular=pow(RdotL,Shininess);specular=mix(specular,smoothstep(0.495*Sharpness,1.0-0.495*Sharpness,specular),Sharpness);vec4 gi=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);Result=((Sun_Intensity*NdotL+Indirect_Sample*Indirect_Diffuse+Translucence)*(1.0+SSS*Subsurface))*Albedo*(1.0-Fresnel_Reflect)+(Sun_Intensity*specular*Specular+Fresnel_Reflect*Reflection*Reflection_Sample)+Fresnel_Reflect*Rim_Light+Iridescence;}\nvoid Bulge_B79(\nbool Enabled,\nvec3 Normal,\nvec3 Tangent,\nfloat Bulge_Height,\nvec4 UV,\nfloat Bulge_Radius,\nvec3 ButtonN,\nout vec3 New_Normal)\n{vec2 xy=clamp(UV.xy*2.0,vec2(-1,-1),vec2(1,1));vec3 B=(cross(Normal,Tangent));float k=-clamp(1.0-length(xy)/Bulge_Radius,0.0,1.0)*Bulge_Height;k=sin(k*3.14159*0.5);k*=smoothstep(0.9998,0.9999,abs(dot(ButtonN,Normal)));New_Normal=Normal*sqrt(1.0-k*k)+(xy.x*Tangent+xy.y*B)*k;New_Normal=Enabled ? New_Normal : Normal;}\nvoid SSS_B77(\nvec3 ButtonN,\nvec3 Normal,\nvec3 Incident,\nout float Result)\n{float NdotI=abs(dot(Normal,Incident));float BdotI=abs(dot(ButtonN,Incident));Result=(abs(NdotI-BdotI)); }\nvoid FingerOcclusion_B67(\nfloat Width,\nfloat DistToCenter,\nfloat Fuzz,\nfloat Min_Fuzz,\nvec3 Position,\nvec3 Forward,\nvec3 Nearest,\nfloat Fade_Out,\nout float NotInShadow)\n{float d=dot((Nearest-Position),Forward);float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);}\nvoid FingerOcclusion_B68(\nfloat Width,\nfloat DistToCenter,\nfloat Fuzz,\nfloat Min_Fuzz,\nvec3 Position,\nvec3 Forward,\nvec3 Nearest,\nfloat Fade_Out,\nout float NotInShadow)\n{float d=dot((Nearest-Position),Forward);float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);}\nvoid Scale_Color_B91(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=Scalar*Color;}\nvoid From_HSV_B73(\nfloat Hue,\nfloat Saturation,\nfloat Value,\nfloat Alpha,\nout vec4 Color)\n{vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(vec3(Hue,Hue,Hue)+K.xyz)*6.0-K.www);Color.rgb=Value*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),Saturation);Color.a=Alpha;}\nvoid Fast_Fresnel_B122(\nfloat Front_Reflect,\nfloat Edge_Reflect,\nfloat Power,\nvec3 Normal,\nvec3 Incident,\nout float Transmit,\nout float Reflect)\n{float d=max(-dot(Incident,Normal),0.0);Reflect=Front_Reflect+(Edge_Reflect-Front_Reflect)*pow(.01-d,Power);Transmit=1.0-Reflect;}\nvoid Mapped_Environment_B51(\nsampler2D Reflected_Environment,\nsampler2D Indirect_Environment,\nvec3 Dir,\nout vec4 Reflected_Color,\nout vec4 Indirect_Diffuse)\n{Reflected_Color=texture(Reflected_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));Indirect_Diffuse=texture(Indirect_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));}\nvec4 SampleEnv_Bid50(vec3 D,vec4 S,vec4 H,vec4 G,float exponent)\n{float k=pow(abs(D.y),exponent);vec4 C;if (D.y>0.0) {C=mix(H,S,k);} else {C=mix(H,G,k); }\nreturn C;}\nvoid Sky_Environment_B50(\nvec3 Normal,\nvec3 Reflected,\nvec4 Sky_Color,\nvec4 Horizon_Color,\nvec4 Ground_Color,\nfloat Horizon_Power,\nout vec4 Reflected_Color,\nout vec4 Indirect_Color)\n{Reflected_Color=SampleEnv_Bid50(Reflected,Sky_Color,Horizon_Color,Ground_Color,Horizon_Power);Indirect_Color=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);}\nvoid Min_Segment_Distance_B65(\nvec3 P0,\nvec3 P1,\nvec3 Q0,\nvec3 Q1,\nout vec3 NearP,\nout vec3 NearQ,\nout float Distance)\n{vec3 u=P1-P0;vec3 v=Q1-Q0;vec3 w=P0-Q0;float a=dot(u,u);float b=dot(u,v);float c=dot(v,v);float d=dot(u,w);float e=dot(v,w);float D=a*c-b*b;float sD=D;float tD=D;float sc,sN,tc,tN;if (D<0.00001) {sN=0.0;sD=1.0;tN=e;tD=c;} else {sN=(b*e-c*d);tN=(a*e-b*d);if (sN<0.0) {sN=0.0;tN=e;tD=c;} else if (sN>sD) {sN=sD;tN=e+b;tD=c;}}\nif (tN<0.0) {tN=0.0;if (-d<0.0) {sN=0.0;} else if (-d>a) {sN=sD;} else {sN=-d;sD=a;}} else if (tN>tD) {tN=tD;if ((-d+b)<0.0) {sN=0.0;} else if ((-d+b)>a) {sN=sD;} else {sN=(-d+b);sD=a;}}\nsc=abs(sN)<0.000001 ? 0.0 : sN/sD;tc=abs(tN)<0.000001 ? 0.0 : tN/tD;NearP=P0+sc*u;NearQ=Q0+tc*v;Distance=distance(NearP,NearQ);}\nvoid To_XYZ_B74(\nvec3 Vec3,\nout float X,\nout float Y,\nout float Z)\n{X=Vec3.x;Y=Vec3.y;Z=Vec3.z;}\nvoid Finger_Positions_B64(\nvec3 Left_Index_Pos,\nvec3 Right_Index_Pos,\nvec3 Left_Index_Middle_Pos,\nvec3 Right_Index_Middle_Pos,\nout vec3 Left_Index,\nout vec3 Right_Index,\nout vec3 Left_Index_Middle,\nout vec3 Right_Index_Middle)\n{Left_Index= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Left_Index_Pos);Right_Index= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Right_Index_Pos);Left_Index_Middle= (Use_Global_Left_Index ? Global_Left_Index_Middle_Position.xyz : Left_Index_Middle_Pos);Right_Index_Middle= (Use_Global_Right_Index ? Global_Right_Index_Middle_Position.xyz : Right_Index_Middle_Pos);}\nvoid VaryHSV_B108(\nvec3 HSV_In,\nfloat Hue_Shift,\nfloat Saturation_Shift,\nfloat Value_Shift,\nout vec3 HSV_Out)\n{HSV_Out=vec3(fract(HSV_In.x+Hue_Shift),clamp(HSV_In.y+Saturation_Shift,0.0,1.0),clamp(HSV_In.z+Value_Shift,0.0,1.0));}\nvoid Remap_Range_B114(\nfloat In_Min,\nfloat In_Max,\nfloat Out_Min,\nfloat Out_Max,\nfloat In,\nout float Out)\n{Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));}\nvoid To_HSV_B75(\nvec4 Color,\nout float Hue,\nout float Saturation,\nout float Value,\nout float Alpha,\nout vec3 HSV)\n{vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec4 p=Color.g<Color.b ? vec4(Color.bg,K.wz) : vec4(Color.gb,K.xy);vec4 q=Color.r<p.x ? vec4(p.xyw,Color.r) : vec4(Color.r,p.yzx);float d=q.x-min(q.w,q.y);float e=1.0e-10;Hue=abs(q.z+(q.w-q.y)/(6.0*d+e));Saturation=d/(q.x+e);Value=q.x;Alpha=Color.a;HSV=vec3(Hue,Saturation,Value);}\nvoid Code_B110(\nfloat X,\nout float Result)\n{Result=(acos(X)/3.14159-0.5)*2.0;}\nvoid Rim_Light_B132(\nvec3 Front,\nvec3 Normal,\nvec3 Incident,\nfloat Rim_Intensity,\nsampler2D Texture,\nout vec4 Result)\n{vec3 R=reflect(Incident,Normal);float RdotF=dot(R,Front);float RdotL=sqrt(1.0-RdotF*RdotF);vec2 UV=vec2(R.y*0.5+0.5,0.5);vec4 Color=texture(Texture,UV);Result=Color;}\nvoid main()\n{vec4 Blob_Color_Q30;\n#if BLOB_ENABLE\nBlob_Fragment_B30(_Blob_Texture_,vExtra2,vExtra3,Blob_Color_Q30);\n#else\nBlob_Color_Q30=vec4(0,0,0,0);\n#endif\nvec3 Incident_Q39=normalize(vPosition-cameraPosition);vec3 Normalized_Q38=normalize(vNormal);vec3 Normalized_Q71=normalize(vTangent);vec4 Color_Q83;\n#if DECAL_ENABLE\nColor_Q83=texture(_Decal_,vUV);\n#else\nColor_Q83=vec4(0,0,0,0);\n#endif\nfloat X_Q90;float Y_Q90;float Z_Q90;float W_Q90;X_Q90=vExtra1.x;Y_Q90=vExtra1.y;Z_Q90=vExtra1.z;W_Q90=vExtra1.w;vec4 Linear_Q43;Linear_Q43.rgb=clamp(_Sky_Color_.rgb*_Sky_Color_.rgb,0.0,1.0);Linear_Q43.a=_Sky_Color_.a;vec4 Linear_Q44;Linear_Q44.rgb=clamp(_Horizon_Color_.rgb*_Horizon_Color_.rgb,0.0,1.0);Linear_Q44.a=_Horizon_Color_.a;vec4 Linear_Q45;Linear_Q45.rgb=clamp(_Ground_Color_.rgb*_Ground_Color_.rgb,0.0,1.0);Linear_Q45.a=_Ground_Color_.a;vec3 Left_Index_Q64;vec3 Right_Index_Q64;vec3 Left_Index_Middle_Q64;vec3 Right_Index_Middle_Q64;Finger_Positions_B64(_Left_Index_Pos_,_Right_Index_Pos_,_Left_Index_Middle_Pos_,_Right_Index_Middle_Pos_,Left_Index_Q64,Right_Index_Q64,Left_Index_Middle_Q64,Right_Index_Middle_Q64);vec4 Linear_Q46;Linear_Q46.rgb=clamp(_Albedo_.rgb*_Albedo_.rgb,0.0,1.0);Linear_Q46.a=_Albedo_.a;vec3 Normalized_Q107=normalize(vBinormal);vec3 Incident_Q70=normalize(vPosition-cameraPosition);vec3 New_Normal_Q79;Bulge_B79(_Bulge_Enabled_,Normalized_Q38,Normalized_Q71,_Bulge_Height_,vColor,_Bulge_Radius_,vBinormal,New_Normal_Q79);float Result_Q77;SSS_B77(vBinormal,New_Normal_Q79,Incident_Q39,Result_Q77);vec4 Result_Q91;Scale_Color_B91(Color_Q83,X_Q90,Result_Q91);float Transmit_Q122;float Reflect_Q122;Fast_Fresnel_B122(_Front_Reflect_,_Edge_Reflect_,_Power_,New_Normal_Q79,Incident_Q39,Transmit_Q122,Reflect_Q122);float Product_Q125=Y_Q90*Y_Q90;vec3 NearP_Q65;vec3 NearQ_Q65;float Distance_Q65;Min_Segment_Distance_B65(Left_Index_Q64,Left_Index_Middle_Q64,vPosition,cameraPosition,NearP_Q65,NearQ_Q65,Distance_Q65);vec3 NearP_Q63;vec3 NearQ_Q63;float Distance_Q63;Min_Segment_Distance_B65(Right_Index_Q64,Right_Index_Middle_Q64,vPosition,cameraPosition,NearP_Q63,NearQ_Q63,Distance_Q63);vec3 Reflected_Q47=reflect(Incident_Q39,New_Normal_Q79);vec4 Product_Q103=Linear_Q46*vec4(1,1,1,1);vec4 Result_Q132;Rim_Light_B132(Normalized_Q107,Normalized_Q38,Incident_Q70,_Rim_Intensity_,_Rim_Texture_,Result_Q132);float Dot_Q72=dot(Incident_Q70, Normalized_Q71);float MaxAB_Q123=max(Reflect_Q122,Product_Q125);float NotInShadow_Q67;\n#if OCCLUSION_ENABLED\nFingerOcclusion_B67(_Width_,Distance_Q65,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q65,_Clip_Fade_,NotInShadow_Q67);\n#else\nNotInShadow_Q67=1.0;\n#endif\nfloat NotInShadow_Q68;\n#if OCCLUSION_ENABLED\nFingerOcclusion_B68(_Width_,Distance_Q63,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q63,_Clip_Fade_,NotInShadow_Q68);\n#else\nNotInShadow_Q68=1.0;\n#endif\nvec4 Reflected_Color_Q51;vec4 Indirect_Diffuse_Q51;\n#if ENV_ENABLE\nMapped_Environment_B51(_Reflection_Map_,_Indirect_Environment_,Reflected_Q47,Reflected_Color_Q51,Indirect_Diffuse_Q51);\n#else\nReflected_Color_Q51=vec4(0,0,0,1);Indirect_Diffuse_Q51=vec4(0,0,0,1);\n#endif\nvec4 Reflected_Color_Q50;vec4 Indirect_Color_Q50;\n#if SKY_ENABLED\nSky_Environment_B50(New_Normal_Q79,Reflected_Q47,Linear_Q43,Linear_Q44,Linear_Q45,_Horizon_Power_,Reflected_Color_Q50,Indirect_Color_Q50);\n#else\nReflected_Color_Q50=vec4(0,0,0,1);Indirect_Color_Q50=vec4(0,0,0,1);\n#endif\nfloat Hue_Q75;float Saturation_Q75;float Value_Q75;float Alpha_Q75;vec3 HSV_Q75;To_HSV_B75(Product_Q103,Hue_Q75,Saturation_Q75,Value_Q75,Alpha_Q75,HSV_Q75);float Hue_Q127;float Saturation_Q127;float Value_Q127;float Alpha_Q127;vec3 HSV_Q127;To_HSV_B75(Result_Q132,Hue_Q127,Saturation_Q127,Value_Q127,Alpha_Q127,HSV_Q127);float Result_Q110;Code_B110(Dot_Q72,Result_Q110);float AbsA_Q76=abs(Result_Q110);float MinAB_Q58=min(NotInShadow_Q67,NotInShadow_Q68);vec4 Sum_Q48=Reflected_Color_Q51+Reflected_Color_Q50;vec4 Sum_Q49=Indirect_Diffuse_Q51+Indirect_Color_Q50;vec3 HSV_Out_Q126;VaryHSV_B108(HSV_Q127,_Rim_Hue_Shift_,_Rim_Saturation_Shift_,_Rim_Value_Shift_,HSV_Out_Q126);float Out_Q114;Remap_Range_B114(-1.0,1.0,0.0,1.0,Result_Q110,Out_Q114);float Product_Q106;Product_Q106=AbsA_Q76*_Hue_Shift_;float X_Q128;float Y_Q128;float Z_Q128;To_XYZ_B74(HSV_Out_Q126,X_Q128,Y_Q128,Z_Q128);vec2 Vec2_Q112=vec2(Out_Q114,0.5);vec3 HSV_Out_Q108;VaryHSV_B108(HSV_Q75,Product_Q106,_Saturation_Shift_,_Value_Shift_,HSV_Out_Q108);vec4 Color_Q129;From_HSV_B73(X_Q128,Y_Q128,Z_Q128,0.0,Color_Q129);vec4 Color_Q111;\n#if IRIDESCENCE_ENABLED\nColor_Q111=texture(_Iridescence_Texture_,Vec2_Q112);\n#else\nColor_Q111=vec4(0,0,0,0);\n#endif\nfloat X_Q74;float Y_Q74;float Z_Q74;To_XYZ_B74(HSV_Out_Q108,X_Q74,Y_Q74,Z_Q74);vec4 Result_Q131=_Rim_Intensity_*Color_Q129;vec4 Result_Q113=_Iridescence_Intensity_*Color_Q111;vec4 Color_Q73;From_HSV_B73(X_Q74,Y_Q74,Z_Q74,0.0,Color_Q73);vec4 Result_Q84=Result_Q91+(1.0-Result_Q91.a)*Color_Q73;vec4 Result_Q121;Fragment_Main_B121(_Sun_Intensity_,_Sun_Theta_,_Sun_Phi_,New_Normal_Q79,Result_Q84,MaxAB_Q123,_Shininess_,Incident_Q39,_Horizon_Color_,_Sky_Color_,_Ground_Color_,_Indirect_Diffuse_,_Specular_,_Horizon_Power_,_Reflection_,Sum_Q48,Sum_Q49,_Sharpness_,Result_Q77,_Subsurface_,vec4(0,0,0,0),Result_Q131,Result_Q113,Result_Q121);vec4 Result_Q59;Scale_RGB_B59(Result_Q121,MinAB_Q58,Result_Q59);vec4 sRGB_Q42;FastLinearTosRGB_B42(Result_Q59,sRGB_Q42);vec4 Result_Q31=Blob_Color_Q30+(1.0-Blob_Color_Q30.a)*sRGB_Q42;vec4 Result_Q40=Result_Q31; Result_Q40.a=1.0;vec4 Out_Color=Result_Q40;float Clip_Threshold=0.001;bool To_sRGB=false;gl_FragColor=Out_Color;}");
      var re = "mrdlSliderBarVertexShader";
      d.ShaderStore.ShadersStore[re] || (d.ShaderStore.ShadersStore[re] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;\n#ifdef TANGENT\nattribute vec3 tangent;\n#else\nconst vec3 tangent=vec3(0.);\n#endif\nuniform float _Radius_;uniform float _Bevel_Front_;uniform float _Bevel_Front_Stretch_;uniform float _Bevel_Back_;uniform float _Bevel_Back_Stretch_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform bool _Bulge_Enabled_;uniform float _Bulge_Height_;uniform float _Bulge_Radius_;uniform float _Sun_Intensity_;uniform float _Sun_Theta_;uniform float _Sun_Phi_;uniform float _Indirect_Diffuse_;uniform vec4 _Albedo_;uniform float _Specular_;uniform float _Shininess_;uniform float _Sharpness_;uniform float _Subsurface_;uniform vec4 _Left_Color_;uniform vec4 _Right_Color_;uniform float _Reflection_;uniform float _Front_Reflect_;uniform float _Edge_Reflect_;uniform float _Power_;uniform vec4 _Sky_Color_;uniform vec4 _Horizon_Color_;uniform vec4 _Ground_Color_;uniform float _Horizon_Power_;uniform sampler2D _Reflection_Map_;uniform sampler2D _Indirect_Environment_;uniform float _Width_;uniform float _Fuzz_;uniform float _Min_Fuzz_;uniform float _Clip_Fade_;uniform float _Hue_Shift_;uniform float _Saturation_Shift_;uniform float _Value_Shift_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform vec3 _Left_Index_Pos_;uniform vec3 _Right_Index_Pos_;uniform vec3 _Left_Index_Middle_Pos_;uniform vec3 _Right_Index_Middle_Pos_;uniform sampler2D _Decal_;uniform vec2 _Decal_Scale_XY_;uniform bool _Decal_Front_Only_;uniform float _Rim_Intensity_;uniform sampler2D _Rim_Texture_;uniform float _Rim_Hue_Shift_;uniform float _Rim_Saturation_Shift_;uniform float _Rim_Value_Shift_;uniform float _Iridescence_Intensity_;uniform sampler2D _Iridescence_Texture_;uniform bool Use_Global_Left_Index;uniform bool Use_Global_Right_Index;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;uniform vec4 Global_Left_Thumb_Tip_Position;uniform vec4 Global_Right_Thumb_Tip_Position;uniform float Global_Left_Index_Tip_Proximity;uniform float Global_Right_Index_Tip_Proximity;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;void Object_To_World_Pos_B12(\nvec3 Pos_Object,\nout vec3 Pos_World)\n{Pos_World=(world*vec4(Pos_Object,1.0)).xyz;}\nvoid Object_To_World_Normal_B32(\nvec3 Nrm_Object,\nout vec3 Nrm_World)\n{Nrm_World=(vec4(Nrm_Object,0.0)).xyz;}\nvoid Blob_Vertex_B23(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nvec3 Blob_Position,\nfloat Intensity,\nfloat Blob_Near_Size,\nfloat Blob_Far_Size,\nfloat Blob_Near_Distance,\nfloat Blob_Far_Distance,\nfloat Blob_Fade_Length,\nfloat Blob_Pulse,\nfloat Blob_Fade,\nout vec4 Blob_Info)\n{vec3 blob= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Blob_Position);vec3 delta=blob-Position;float dist=dot(Normal,delta);float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);float Fade=fadeValue*Intensity*Blob_Fade;float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);}\nvoid Blob_Vertex_B24(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nvec3 Blob_Position,\nfloat Intensity,\nfloat Blob_Near_Size,\nfloat Blob_Far_Size,\nfloat Blob_Near_Distance,\nfloat Blob_Far_Distance,\nfloat Blob_Fade_Length,\nfloat Blob_Pulse,\nfloat Blob_Fade,\nout vec4 Blob_Info)\n{vec3 blob= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Blob_Position);vec3 delta=blob-Position;float dist=dot(Normal,delta);float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);float Fade=fadeValue*Intensity*Blob_Fade;float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);}\nvoid Move_Verts_B130(\nfloat Anisotropy,\nvec3 P,\nfloat Radius,\nfloat Bevel,\nvec3 Normal_Object,\nfloat ScaleZ,\nfloat Stretch,\nout vec3 New_P,\nout vec2 New_UV,\nout float Radial_Gradient,\nout vec3 Radial_Dir,\nout vec3 New_Normal)\n{vec2 UV=P.xy*2.0+0.5;vec2 center=clamp(UV,0.0,1.0);vec2 delta=UV-center;float deltad=(length(delta)*2.0);float f=(Bevel+(Radius-Bevel)*Stretch)/Radius;float innerd=clamp(deltad*2.0,0.0,1.0);float outerd=clamp(deltad*2.0-1.0,0.0,1.0);float bevelAngle=outerd*3.14159*0.5;float sinb=sin(bevelAngle);float cosb=cos(bevelAngle);float beveld=(1.0-f)*innerd+f*sinb;float br=outerd;vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);float dir=P.z<0.0001 ? 1.0 : -1.0;New_UV=center+r2*((0.5-center)+normalize(delta+vec2(0.0,0.000001))*beveld*0.5);New_P=vec3(New_UV-0.5,P.z+dir*(1.0-cosb)*Bevel*ScaleZ);Radial_Gradient=clamp((deltad-0.5)*2.0,0.0,1.0);Radial_Dir=vec3(delta*r2,0.0);vec3 beveledNormal=cosb*Normal_Object+sinb*vec3(delta.x,delta.y,0.0);New_Normal=Normal_Object.z==0.0 ? Normal_Object : beveledNormal;}\nvoid Object_To_World_Dir_B60(\nvec3 Dir_Object,\nout vec3 Normal_World,\nout vec3 Normal_World_N,\nout float Normal_Length)\n{Normal_World=(world*vec4(Dir_Object,0.0)).xyz;Normal_Length=length(Normal_World);Normal_World_N=Normal_World/Normal_Length;}\nvoid To_XYZ_B78(\nvec3 Vec3,\nout float X,\nout float Y,\nout float Z)\n{X=Vec3.x;Y=Vec3.y;Z=Vec3.z;}\nvoid Conditional_Float_B93(\nbool Which,\nfloat If_True,\nfloat If_False,\nout float Result)\n{Result=Which ? If_True : If_False;}\nvoid Object_To_World_Dir_B28(\nvec3 Dir_Object,\nout vec3 Binormal_World,\nout vec3 Binormal_World_N,\nout float Binormal_Length)\n{Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;Binormal_Length=length(Binormal_World);Binormal_World_N=Binormal_World/Binormal_Length;}\nvoid Pick_Radius_B69(\nfloat Radius,\nfloat Radius_Top_Left,\nfloat Radius_Top_Right,\nfloat Radius_Bottom_Left,\nfloat Radius_Bottom_Right,\nvec3 Position,\nout float Result)\n{bool whichY=Position.y>0.0;Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);Result*=Radius;}\nvoid Conditional_Float_B36(\nbool Which,\nfloat If_True,\nfloat If_False,\nout float Result)\n{Result=Which ? If_True : If_False;}\nvoid Greater_Than_B37(\nfloat Left,\nfloat Right,\nout bool Not_Greater_Than,\nout bool Greater_Than)\n{Greater_Than=Left>Right;Not_Greater_Than=!Greater_Than;}\nvoid Remap_Range_B105(\nfloat In_Min,\nfloat In_Max,\nfloat Out_Min,\nfloat Out_Max,\nfloat In,\nout float Out)\n{Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));}\nvoid main()\n{vec2 XY_Q85;XY_Q85=(uv-vec2(0.5,0.5))*_Decal_Scale_XY_+vec2(0.5,0.5);vec3 Tangent_World_Q27;vec3 Tangent_World_N_Q27;float Tangent_Length_Q27;Tangent_World_Q27=(world*vec4(vec3(1,0,0),0.0)).xyz;Tangent_Length_Q27=length(Tangent_World_Q27);Tangent_World_N_Q27=Tangent_World_Q27/Tangent_Length_Q27;vec3 Normal_World_Q60;vec3 Normal_World_N_Q60;float Normal_Length_Q60;Object_To_World_Dir_B60(vec3(0,0,1),Normal_World_Q60,Normal_World_N_Q60,Normal_Length_Q60);float X_Q78;float Y_Q78;float Z_Q78;To_XYZ_B78(position,X_Q78,Y_Q78,Z_Q78);vec3 Nrm_World_Q26;Nrm_World_Q26=normalize((world*vec4(normal,0.0)).xyz);vec3 Binormal_World_Q28;vec3 Binormal_World_N_Q28;float Binormal_Length_Q28;Object_To_World_Dir_B28(vec3(0,1,0),Binormal_World_Q28,Binormal_World_N_Q28,Binormal_Length_Q28);float Anisotropy_Q29=Tangent_Length_Q27/Binormal_Length_Q28;float Result_Q69;Pick_Radius_B69(_Radius_,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q69);float Anisotropy_Q53=Binormal_Length_Q28/Normal_Length_Q60;bool Not_Greater_Than_Q37;bool Greater_Than_Q37;Greater_Than_B37(Z_Q78,0.0,Not_Greater_Than_Q37,Greater_Than_Q37);vec4 Linear_Q101;Linear_Q101.rgb=clamp(_Left_Color_.rgb*_Left_Color_.rgb,0.0,1.0);Linear_Q101.a=_Left_Color_.a;vec4 Linear_Q102;Linear_Q102.rgb=clamp(_Right_Color_.rgb*_Right_Color_.rgb,0.0,1.0);Linear_Q102.a=_Right_Color_.a;vec3 Difference_Q61=vec3(0,0,0)-Normal_World_N_Q60;vec4 Out_Color_Q34=vec4(X_Q78,Y_Q78,Z_Q78,1);float Result_Q36;Conditional_Float_B36(Greater_Than_Q37,_Bevel_Back_,_Bevel_Front_,Result_Q36);float Result_Q94;Conditional_Float_B36(Greater_Than_Q37,_Bevel_Back_Stretch_,_Bevel_Front_Stretch_,Result_Q94);vec3 New_P_Q130;vec2 New_UV_Q130;float Radial_Gradient_Q130;vec3 Radial_Dir_Q130;vec3 New_Normal_Q130;Move_Verts_B130(Anisotropy_Q29,position,Result_Q69,Result_Q36,normal,Anisotropy_Q53,Result_Q94,New_P_Q130,New_UV_Q130,Radial_Gradient_Q130,Radial_Dir_Q130,New_Normal_Q130);float X_Q98;float Y_Q98;X_Q98=New_UV_Q130.x;Y_Q98=New_UV_Q130.y;vec3 Pos_World_Q12;Object_To_World_Pos_B12(New_P_Q130,Pos_World_Q12);vec3 Nrm_World_Q32;Object_To_World_Normal_B32(New_Normal_Q130,Nrm_World_Q32);vec4 Blob_Info_Q23;\n#if BLOB_ENABLE\nBlob_Vertex_B23(Pos_World_Q12,Nrm_World_Q26,Tangent_World_N_Q27,Binormal_World_N_Q28,_Blob_Position_,_Blob_Intensity_,_Blob_Near_Size_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_,_Blob_Fade_,Blob_Info_Q23);\n#else\nBlob_Info_Q23=vec4(0,0,0,0);\n#endif\nvec4 Blob_Info_Q24;\n#if BLOB_ENABLE_2\nBlob_Vertex_B24(Pos_World_Q12,Nrm_World_Q26,Tangent_World_N_Q27,Binormal_World_N_Q28,_Blob_Position_2_,_Blob_Intensity_,_Blob_Near_Size_2_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_2_,_Blob_Fade_2_,Blob_Info_Q24);\n#else\nBlob_Info_Q24=vec4(0,0,0,0);\n#endif\nfloat Out_Q105;Remap_Range_B105(0.0,1.0,0.0,1.0,X_Q98,Out_Q105);float X_Q86;float Y_Q86;float Z_Q86;To_XYZ_B78(Nrm_World_Q32,X_Q86,Y_Q86,Z_Q86);vec4 Color_At_T_Q97=mix(Linear_Q101,Linear_Q102,Out_Q105);float Minus_F_Q87=-Z_Q86;float R_Q99;float G_Q99;float B_Q99;float A_Q99;R_Q99=Color_At_T_Q97.r; G_Q99=Color_At_T_Q97.g; B_Q99=Color_At_T_Q97.b; A_Q99=Color_At_T_Q97.a;float ClampF_Q88=clamp(0.0,Minus_F_Q87,1.0);float Result_Q93;Conditional_Float_B93(_Decal_Front_Only_,ClampF_Q88,1.0,Result_Q93);vec4 Vec4_Q89=vec4(Result_Q93,Radial_Gradient_Q130,G_Q99,B_Q99);vec3 Position=Pos_World_Q12;vec3 Normal=Nrm_World_Q32;vec2 UV=XY_Q85;vec3 Tangent=Tangent_World_N_Q27;vec3 Binormal=Difference_Q61;vec4 Color=Out_Color_Q34;vec4 Extra1=Vec4_Q89;vec4 Extra2=Blob_Info_Q23;vec4 Extra3=Blob_Info_Q24;gl_Position=viewProjection*vec4(Position,1);vPosition=Position;vNormal=Normal;vUV=UV;vTangent=Tangent;vBinormal=Binormal;vColor=Color;vExtra1=Extra1;vExtra2=Extra2;vExtra3=Extra3;}");
      var ne = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3.SKY_ENABLED = true, e3.BLOB_ENABLE_2 = true, e3.IRIDESCENCE_ENABLED = true, e3._needNormals = true, e3._needUVs = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), ae = function(t2) {
        function e2(i2, o2) {
          var r2 = t2.call(this, i2, o2) || this;
          r2.radius = 0.6, r2.bevelFront = 0.6, r2.bevelFrontStretch = 0.077, r2.bevelBack = 0, r2.bevelBackStretch = 0, r2.radiusTopLeft = 1, r2.radiusTopRight = 1, r2.radiusBottomLeft = 1, r2.radiusBottomRight = 1, r2.bulgeEnabled = false, r2.bulgeHeight = -0.323, r2.bulgeRadius = 0.73, r2.sunIntensity = 1.102, r2.sunTheta = 0.76, r2.sunPhi = 0.526, r2.indirectDiffuse = 0.658, r2.albedo = new d.Color4(0.0117647, 0.505882, 0.996078, 1), r2.specular = 0, r2.shininess = 10, r2.sharpness = 0, r2.subsurface = 0, r2.leftGradientColor = new d.Color4(0.0117647, 0.505882, 0.996078, 1), r2.rightGradientColor = new d.Color4(0.0117647, 0.505882, 0.996078, 1), r2.reflection = 0.749, r2.frontReflect = 0, r2.edgeReflect = 0.09, r2.power = 8.13, r2.skyColor = new d.Color4(0.0117647, 0.964706, 0.996078, 1), r2.horizonColor = new d.Color4(0.0117647, 0.333333, 0.996078, 1), r2.groundColor = new d.Color4(0, 0.254902, 0.996078, 1), r2.horizonPower = 1, r2.width = 0.02, r2.fuzz = 0.5, r2.minFuzz = 1e-3, r2.clipFade = 0.01, r2.hueShift = 0, r2.saturationShift = 0, r2.valueShift = 0, r2.blobPosition = new d.Vector3(0, 0, 0.1), r2.blobIntensity = 0.5, r2.blobNearSize = 0.01, r2.blobFarSize = 0.03, r2.blobNearDistance = 0, r2.blobFarDistance = 0.08, r2.blobFadeLength = 0.576, r2.blobPulse = 0, r2.blobFade = 1, r2.blobPosition2 = new d.Vector3(0.2, 0, 0.1), r2.blobNearSize2 = 0.01, r2.blobPulse2 = 0, r2.blobFade2 = 1, r2.blobTexture = new d.Texture("", r2.getScene()), r2.leftIndexPosition = new d.Vector3(0, 0, 1), r2.rightIndexPosition = new d.Vector3(-1, -1, -1), r2.leftIndexMiddlePosition = new d.Vector3(0, 0, 0), r2.rightIndexMiddlePosition = new d.Vector3(0, 0, 0), r2.decalScaleXY = new d.Vector2(1.5, 1.5), r2.decalFrontOnly = true, r2.rimIntensity = 0.287, r2.rimHueShift = 0, r2.rimSaturationShift = 0, r2.rimValueShift = -1, r2.iridescenceIntensity = 0, r2.useGlobalLeftIndex = 1, r2.useGlobalRightIndex = 1, r2.globalLeftIndexTipProximity = 0, r2.globalRightIndexTipProximity = 0, r2.globalLeftIndexTipPosition = new d.Vector4(0.5, 0, -0.55, 1), r2.globaRightIndexTipPosition = new d.Vector4(0, 0, 0, 1), r2.globalLeftThumbTipPosition = new d.Vector4(0.5, 0, -0.55, 1), r2.globalRightThumbTipPosition = new d.Vector4(0, 0, 0, 1), r2.globalLeftIndexMiddlePosition = new d.Vector4(0.5, 0, -0.55, 1), r2.globalRightIndexMiddlePosition = new d.Vector4(0, 0, 0, 1), r2.alphaMode = d.Constants.ALPHA_DISABLE, r2.backFaceCulling = false;
          var n2 = d.Tools.GetAssetUrl(e2.BLUE_GRADIENT_TEXTURE_URL);
          return r2._blueGradientTexture = new d.Texture(n2, r2.getScene(), true, false, d.Texture.NEAREST_SAMPLINGMODE), r2._decalTexture = new d.Texture("", r2.getScene()), r2._reflectionMapTexture = new d.Texture("", r2.getScene()), r2._indirectEnvTexture = new d.Texture("", r2.getScene()), r2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return false;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new ne());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, false, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "viewProjection", "cameraPosition", "_Radius_", "_Bevel_Front_", "_Bevel_Front_Stretch_", "_Bevel_Back_", "_Bevel_Back_Stretch_", "_Radius_Top_Left_", "_Radius_Top_Right_", "_Radius_Bottom_Left_", "_Radius_Bottom_Right_", "_Bulge_Enabled_", "_Bulge_Height_", "_Bulge_Radius_", "_Sun_Intensity_", "_Sun_Theta_", "_Sun_Phi_", "_Indirect_Diffuse_", "_Albedo_", "_Specular_", "_Shininess_", "_Sharpness_", "_Subsurface_", "_Left_Color_", "_Right_Color_", "_Reflection_", "_Front_Reflect_", "_Edge_Reflect_", "_Power_", "_Sky_Color_", "_Horizon_Color_", "_Ground_Color_", "_Horizon_Power_", "_Reflection_Map_", "_Indirect_Environment_", "_Width_", "_Fuzz_", "_Min_Fuzz_", "_Clip_Fade_", "_Hue_Shift_", "_Saturation_Shift_", "_Value_Shift_", "_Blob_Position_", "_Blob_Intensity_", "_Blob_Near_Size_", "_Blob_Far_Size_", "_Blob_Near_Distance_", "_Blob_Far_Distance_", "_Blob_Fade_Length_", "_Blob_Pulse_", "_Blob_Fade_", "_Blob_Texture_", "_Blob_Position_2_", "_Blob_Near_Size_2_", "_Blob_Pulse_2_", "_Blob_Fade_2_", "_Left_Index_Pos_", "_Right_Index_Pos_", "_Left_Index_Middle_Pos_", "_Right_Index_Middle_Pos_", "_Decal_", "_Decal_Scale_XY_", "_Decal_Front_Only_", "_Rim_Intensity_", "_Rim_Texture_", "_Rim_Hue_Shift_", "_Rim_Saturation_Shift_", "_Rim_Value_Shift_", "_Iridescence_Intensity_", "_Iridescence_Texture_", "Use_Global_Left_Index", "Use_Global_Right_Index", "Global_Left_Index_Tip_Position", "Global_Right_Index_Tip_Position", "Global_Left_Thumb_Tip_Position", "Global_Right_Thumb_Tip_Position", "Global_Left_Index_Middle_Position;", "Global_Right_Index_Middle_Position", "Global_Left_Index_Tip_Proximity", "Global_Right_Index_Tip_Proximity"], h2 = ["_Rim_Texture_", "_Iridescence_Texture_"], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("mrdlSliderBar", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2, this._materialContext);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          if (i2.materialDefines) {
            var o2 = i2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", this.getScene().getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", this.getScene().activeCamera.position), this._activeEffect.setFloat("_Radius_", this.radius), this._activeEffect.setFloat("_Bevel_Front_", this.bevelFront), this._activeEffect.setFloat("_Bevel_Front_Stretch_", this.bevelFrontStretch), this._activeEffect.setFloat("_Bevel_Back_", this.bevelBack), this._activeEffect.setFloat("_Bevel_Back_Stretch_", this.bevelBackStretch), this._activeEffect.setFloat("_Radius_Top_Left_", this.radiusTopLeft), this._activeEffect.setFloat("_Radius_Top_Right_", this.radiusTopRight), this._activeEffect.setFloat("_Radius_Bottom_Left_", this.radiusBottomLeft), this._activeEffect.setFloat("_Radius_Bottom_Right_", this.radiusBottomRight), this._activeEffect.setFloat("_Bulge_Enabled_", this.bulgeEnabled ? 1 : 0), this._activeEffect.setFloat("_Bulge_Height_", this.bulgeHeight), this._activeEffect.setFloat("_Bulge_Radius_", this.bulgeRadius), this._activeEffect.setFloat("_Sun_Intensity_", this.sunIntensity), this._activeEffect.setFloat("_Sun_Theta_", this.sunTheta), this._activeEffect.setFloat("_Sun_Phi_", this.sunPhi), this._activeEffect.setFloat("_Indirect_Diffuse_", this.indirectDiffuse), this._activeEffect.setDirectColor4("_Albedo_", this.albedo), this._activeEffect.setFloat("_Specular_", this.specular), this._activeEffect.setFloat("_Shininess_", this.shininess), this._activeEffect.setFloat("_Sharpness_", this.sharpness), this._activeEffect.setFloat("_Subsurface_", this.subsurface), this._activeEffect.setDirectColor4("_Left_Color_", this.leftGradientColor), this._activeEffect.setDirectColor4("_Right_Color_", this.rightGradientColor), this._activeEffect.setFloat("_Reflection_", this.reflection), this._activeEffect.setFloat("_Front_Reflect_", this.frontReflect), this._activeEffect.setFloat("_Edge_Reflect_", this.edgeReflect), this._activeEffect.setFloat("_Power_", this.power), this._activeEffect.setDirectColor4("_Sky_Color_", this.skyColor), this._activeEffect.setDirectColor4("_Horizon_Color_", this.horizonColor), this._activeEffect.setDirectColor4("_Ground_Color_", this.groundColor), this._activeEffect.setFloat("_Horizon_Power_", this.horizonPower), this._activeEffect.setTexture("_Reflection_Map_", this._reflectionMapTexture), this._activeEffect.setTexture("_Indirect_Environment_", this._indirectEnvTexture), this._activeEffect.setFloat("_Width_", this.width), this._activeEffect.setFloat("_Fuzz_", this.fuzz), this._activeEffect.setFloat("_Min_Fuzz_", this.minFuzz), this._activeEffect.setFloat("_Clip_Fade_", this.clipFade), this._activeEffect.setFloat("_Hue_Shift_", this.hueShift), this._activeEffect.setFloat("_Saturation_Shift_", this.saturationShift), this._activeEffect.setFloat("_Value_Shift_", this.valueShift), this._activeEffect.setVector3("_Blob_Position_", this.blobPosition), this._activeEffect.setFloat("_Blob_Intensity_", this.blobIntensity), this._activeEffect.setFloat("_Blob_Near_Size_", this.blobNearSize), this._activeEffect.setFloat("_Blob_Far_Size_", this.blobFarSize), this._activeEffect.setFloat("_Blob_Near_Distance_", this.blobNearDistance), this._activeEffect.setFloat("_Blob_Far_Distance_", this.blobFarDistance), this._activeEffect.setFloat("_Blob_Fade_Length_", this.blobFadeLength), this._activeEffect.setFloat("_Blob_Pulse_", this.blobPulse), this._activeEffect.setFloat("_Blob_Fade_", this.blobFade), this._activeEffect.setTexture("_Blob_Texture_", this.blobTexture), this._activeEffect.setVector3("_Blob_Position_2_", this.blobPosition2), this._activeEffect.setFloat("_Blob_Near_Size_2_", this.blobNearSize2), this._activeEffect.setFloat("_Blob_Pulse_2_", this.blobPulse2), this._activeEffect.setFloat("_Blob_Fade_2_", this.blobFade2), this._activeEffect.setVector3("_Left_Index_Pos_", this.leftIndexPosition), this._activeEffect.setVector3("_Right_Index_Pos_", this.rightIndexPosition), this._activeEffect.setVector3("_Left_Index_Middle_Pos_", this.leftIndexMiddlePosition), this._activeEffect.setVector3("_Right_Index_Middle_Pos_", this.rightIndexMiddlePosition), this._activeEffect.setTexture("_Decal_", this._decalTexture), this._activeEffect.setVector2("_Decal_Scale_XY_", this.decalScaleXY), this._activeEffect.setFloat("_Decal_Front_Only_", this.decalFrontOnly ? 1 : 0), this._activeEffect.setFloat("_Rim_Intensity_", this.rimIntensity), this._activeEffect.setTexture("_Rim_Texture_", this._blueGradientTexture), this._activeEffect.setFloat("_Rim_Hue_Shift_", this.rimHueShift), this._activeEffect.setFloat("_Rim_Saturation_Shift_", this.rimSaturationShift), this._activeEffect.setFloat("_Rim_Value_Shift_", this.rimValueShift), this._activeEffect.setFloat("_Iridescence_Intensity_", this.iridescenceIntensity), this._activeEffect.setTexture("_Iridescence_Texture_", this._blueGradientTexture), this._activeEffect.setFloat("Use_Global_Left_Index", this.useGlobalLeftIndex), this._activeEffect.setFloat("Use_Global_Right_Index", this.useGlobalRightIndex), this._activeEffect.setVector4("Global_Left_Index_Tip_Position", this.globalLeftIndexTipPosition), this._activeEffect.setVector4("Global_Right_Index_Tip_Position", this.globaRightIndexTipPosition), this._activeEffect.setVector4("Global_Left_Thumb_Tip_Position", this.globalLeftThumbTipPosition), this._activeEffect.setVector4("Global_Right_Thumb_Tip_Position", this.globalRightThumbTipPosition), this._activeEffect.setVector4("Global_Left_Index_Middle_Position", this.globalLeftIndexMiddlePosition), this._activeEffect.setVector4("Global_Right_Index_Middle_Position", this.globalRightIndexMiddlePosition), this._activeEffect.setFloat("Global_Left_Index_Tip_Proximity", this.globalLeftIndexTipProximity), this._activeEffect.setFloat("Global_Right_Index_Tip_Proximity", this.globalRightIndexTipProximity), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3), this._reflectionMapTexture.dispose(), this._indirectEnvTexture.dispose(), this._blueGradientTexture.dispose(), this._decalTexture.dispose();
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var e3 = t2.prototype.serialize.call(this);
          return e3.customType = "BABYLON.MRDLSliderBarMaterial", e3;
        }, e2.prototype.getClassName = function() {
          return "MRDLSliderBarMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, e2.BLUE_GRADIENT_TEXTURE_URL = "https://assets.babylonjs.com/core/MRTK/MRDL/mrtk-mrdl-blue-gradient.png", h([(0, d.serialize)()], e2.prototype, "radius", void 0), h([(0, d.serialize)()], e2.prototype, "bevelFront", void 0), h([(0, d.serialize)()], e2.prototype, "bevelFrontStretch", void 0), h([(0, d.serialize)()], e2.prototype, "bevelBack", void 0), h([(0, d.serialize)()], e2.prototype, "bevelBackStretch", void 0), h([(0, d.serialize)()], e2.prototype, "radiusTopLeft", void 0), h([(0, d.serialize)()], e2.prototype, "radiusTopRight", void 0), h([(0, d.serialize)()], e2.prototype, "radiusBottomLeft", void 0), h([(0, d.serialize)()], e2.prototype, "radiusBottomRight", void 0), h([(0, d.serialize)()], e2.prototype, "bulgeEnabled", void 0), h([(0, d.serialize)()], e2.prototype, "bulgeHeight", void 0), h([(0, d.serialize)()], e2.prototype, "bulgeRadius", void 0), h([(0, d.serialize)()], e2.prototype, "sunIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "sunTheta", void 0), h([(0, d.serialize)()], e2.prototype, "sunPhi", void 0), h([(0, d.serialize)()], e2.prototype, "indirectDiffuse", void 0), h([(0, d.serialize)()], e2.prototype, "albedo", void 0), h([(0, d.serialize)()], e2.prototype, "specular", void 0), h([(0, d.serialize)()], e2.prototype, "shininess", void 0), h([(0, d.serialize)()], e2.prototype, "sharpness", void 0), h([(0, d.serialize)()], e2.prototype, "subsurface", void 0), h([(0, d.serialize)()], e2.prototype, "leftGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "rightGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "reflection", void 0), h([(0, d.serialize)()], e2.prototype, "frontReflect", void 0), h([(0, d.serialize)()], e2.prototype, "edgeReflect", void 0), h([(0, d.serialize)()], e2.prototype, "power", void 0), h([(0, d.serialize)()], e2.prototype, "skyColor", void 0), h([(0, d.serialize)()], e2.prototype, "horizonColor", void 0), h([(0, d.serialize)()], e2.prototype, "groundColor", void 0), h([(0, d.serialize)()], e2.prototype, "horizonPower", void 0), h([(0, d.serialize)()], e2.prototype, "width", void 0), h([(0, d.serialize)()], e2.prototype, "fuzz", void 0), h([(0, d.serialize)()], e2.prototype, "minFuzz", void 0), h([(0, d.serialize)()], e2.prototype, "clipFade", void 0), h([(0, d.serialize)()], e2.prototype, "hueShift", void 0), h([(0, d.serialize)()], e2.prototype, "saturationShift", void 0), h([(0, d.serialize)()], e2.prototype, "valueShift", void 0), h([(0, d.serialize)()], e2.prototype, "blobPosition", void 0), h([(0, d.serialize)()], e2.prototype, "blobIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFadeLength", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade", void 0), h([(0, d.serialize)()], e2.prototype, "blobPosition2", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize2", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse2", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade2", void 0), h([(0, d.serialize)()], e2.prototype, "blobTexture", void 0), h([(0, d.serialize)()], e2.prototype, "leftIndexPosition", void 0), h([(0, d.serialize)()], e2.prototype, "rightIndexPosition", void 0), h([(0, d.serialize)()], e2.prototype, "leftIndexMiddlePosition", void 0), h([(0, d.serialize)()], e2.prototype, "rightIndexMiddlePosition", void 0), h([(0, d.serialize)()], e2.prototype, "decalScaleXY", void 0), h([(0, d.serialize)()], e2.prototype, "decalFrontOnly", void 0), h([(0, d.serialize)()], e2.prototype, "rimIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "rimHueShift", void 0), h([(0, d.serialize)()], e2.prototype, "rimSaturationShift", void 0), h([(0, d.serialize)()], e2.prototype, "rimValueShift", void 0), h([(0, d.serialize)()], e2.prototype, "iridescenceIntensity", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.MRDLSliderBarMaterial", ae);
      var se = "mrdlSliderThumbPixelShader";
      d.ShaderStore.ShadersStore[se] || (d.ShaderStore.ShadersStore[se] = "uniform vec3 cameraPosition;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;uniform float _Radius_;uniform float _Bevel_Front_;uniform float _Bevel_Front_Stretch_;uniform float _Bevel_Back_;uniform float _Bevel_Back_Stretch_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform bool _Bulge_Enabled_;uniform float _Bulge_Height_;uniform float _Bulge_Radius_;uniform float _Sun_Intensity_;uniform float _Sun_Theta_;uniform float _Sun_Phi_;uniform float _Indirect_Diffuse_;uniform vec4 _Albedo_;uniform float _Specular_;uniform float _Shininess_;uniform float _Sharpness_;uniform float _Subsurface_;uniform vec4 _Left_Color_;uniform vec4 _Right_Color_;uniform float _Reflection_;uniform float _Front_Reflect_;uniform float _Edge_Reflect_;uniform float _Power_;uniform vec4 _Sky_Color_;uniform vec4 _Horizon_Color_;uniform vec4 _Ground_Color_;uniform float _Horizon_Power_;uniform sampler2D _Reflection_Map_;uniform sampler2D _Indirect_Environment_;uniform float _Width_;uniform float _Fuzz_;uniform float _Min_Fuzz_;uniform float _Clip_Fade_;uniform float _Hue_Shift_;uniform float _Saturation_Shift_;uniform float _Value_Shift_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform vec3 _Left_Index_Pos_;uniform vec3 _Right_Index_Pos_;uniform vec3 _Left_Index_Middle_Pos_;uniform vec3 _Right_Index_Middle_Pos_;uniform sampler2D _Decal_;uniform vec2 _Decal_Scale_XY_;uniform bool _Decal_Front_Only_;uniform float _Rim_Intensity_;uniform sampler2D _Rim_Texture_;uniform float _Rim_Hue_Shift_;uniform float _Rim_Saturation_Shift_;uniform float _Rim_Value_Shift_;uniform float _Iridescence_Intensity_;uniform sampler2D _Iridescence_Texture_;uniform bool Use_Global_Left_Index;uniform bool Use_Global_Right_Index;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;uniform vec4 Global_Left_Thumb_Tip_Position;uniform vec4 Global_Right_Thumb_Tip_Position;uniform vec4 Global_Left_Index_Middle_Position;uniform vec4 Global_Right_Index_Middle_Position;uniform float Global_Left_Index_Tip_Proximity;uniform float Global_Right_Index_Tip_Proximity;void Blob_Fragment_B180(\nsampler2D Blob_Texture,\nvec4 Blob_Info1,\nvec4 Blob_Info2,\nout vec4 Blob_Color)\n{float k1=dot(Blob_Info1.xy,Blob_Info1.xy);float k2=dot(Blob_Info2.xy,Blob_Info2.xy);vec3 closer=k1<k2 ? vec3(k1,Blob_Info1.z,Blob_Info1.w) : vec3(k2,Blob_Info2.z,Blob_Info2.w);Blob_Color=closer.z*texture(Blob_Texture,vec2(vec2(sqrt(closer.x),closer.y).x,1.0-vec2(sqrt(closer.x),closer.y).y))*clamp(1.0-closer.x,0.0,1.0);}\nvoid FastLinearTosRGB_B192(\nvec4 Linear,\nout vec4 sRGB)\n{sRGB.rgb=sqrt(clamp(Linear.rgb,0.0,1.0));sRGB.a=Linear.a;}\nvoid Scale_RGB_B209(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=vec4(Scalar,Scalar,Scalar,1)*Color;}\nvoid Fragment_Main_B271(\nfloat Sun_Intensity,\nfloat Sun_Theta,\nfloat Sun_Phi,\nvec3 Normal,\nvec4 Albedo,\nfloat Fresnel_Reflect,\nfloat Shininess,\nvec3 Incident,\nvec4 Horizon_Color,\nvec4 Sky_Color,\nvec4 Ground_Color,\nfloat Indirect_Diffuse,\nfloat Specular,\nfloat Horizon_Power,\nfloat Reflection,\nvec4 Reflection_Sample,\nvec4 Indirect_Sample,\nfloat Sharpness,\nfloat SSS,\nfloat Subsurface,\nvec4 Translucence,\nvec4 Rim_Light,\nvec4 Iridescence,\nout vec4 Result)\n{float theta=Sun_Theta*2.0*3.14159;float phi=Sun_Phi*3.14159;vec3 lightDir= vec3(cos(phi)*cos(theta),sin(phi),cos(phi)*sin(theta));float NdotL=max(dot(lightDir,Normal),0.0);vec3 R=reflect(Incident,Normal);float RdotL=max(0.0,dot(R,lightDir));float specular=pow(RdotL,Shininess);specular=mix(specular,smoothstep(0.495*Sharpness,1.0-0.495*Sharpness,specular),Sharpness);vec4 gi=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);Result=((Sun_Intensity*NdotL+Indirect_Sample*Indirect_Diffuse+Translucence)*(1.0+SSS*Subsurface))*Albedo*(1.0-Fresnel_Reflect)+(Sun_Intensity*specular*Specular+Fresnel_Reflect*Reflection*Reflection_Sample)+Fresnel_Reflect*Rim_Light+Iridescence;}\nvoid Bulge_B229(\nbool Enabled,\nvec3 Normal,\nvec3 Tangent,\nfloat Bulge_Height,\nvec4 UV,\nfloat Bulge_Radius,\nvec3 ButtonN,\nout vec3 New_Normal)\n{vec2 xy=clamp(UV.xy*2.0,vec2(-1,-1),vec2(1,1));vec3 B=(cross(Normal,Tangent));float k=-clamp(1.0-length(xy)/Bulge_Radius,0.0,1.0)*Bulge_Height;k=sin(k*3.14159*0.5);k*=smoothstep(0.9998,0.9999,abs(dot(ButtonN,Normal)));New_Normal=Normal*sqrt(1.0-k*k)+(xy.x*Tangent+xy.y*B)*k;New_Normal=Enabled ? New_Normal : Normal;}\nvoid SSS_B227(\nvec3 ButtonN,\nvec3 Normal,\nvec3 Incident,\nout float Result)\n{float NdotI=abs(dot(Normal,Incident));float BdotI=abs(dot(ButtonN,Incident));Result=(abs(NdotI-BdotI)); }\nvoid FingerOcclusion_B217(\nfloat Width,\nfloat DistToCenter,\nfloat Fuzz,\nfloat Min_Fuzz,\nvec3 Position,\nvec3 Forward,\nvec3 Nearest,\nfloat Fade_Out,\nout float NotInShadow)\n{float d=dot((Nearest-Position),Forward);float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);}\nvoid FingerOcclusion_B218(\nfloat Width,\nfloat DistToCenter,\nfloat Fuzz,\nfloat Min_Fuzz,\nvec3 Position,\nvec3 Forward,\nvec3 Nearest,\nfloat Fade_Out,\nout float NotInShadow)\n{float d=dot((Nearest-Position),Forward);float sh=smoothstep(Width*0.5,Width*0.5+Fuzz*max(d,0.0)+Min_Fuzz,DistToCenter);NotInShadow=1.0-(1.0-sh)*smoothstep(-Fade_Out,0.0,d);}\nvoid Scale_Color_B241(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=Scalar*Color;}\nvoid From_HSV_B223(\nfloat Hue,\nfloat Saturation,\nfloat Value,\nfloat Alpha,\nout vec4 Color)\n{vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(vec3(Hue,Hue,Hue)+K.xyz)*6.0-K.www);Color.rgb=Value*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),Saturation);Color.a=Alpha;}\nvoid Fast_Fresnel_B272(\nfloat Front_Reflect,\nfloat Edge_Reflect,\nfloat Power,\nvec3 Normal,\nvec3 Incident,\nout float Transmit,\nout float Reflect)\n{float d=max(-dot(Incident,Normal),0.0);Reflect=Front_Reflect+(Edge_Reflect-Front_Reflect)*pow(1.0-d,Power);Transmit=1.0-Reflect;}\nvoid Mapped_Environment_B201(\nsampler2D Reflected_Environment,\nsampler2D Indirect_Environment,\nvec3 Dir,\nout vec4 Reflected_Color,\nout vec4 Indirect_Diffuse)\n{Reflected_Color=texture(Reflected_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));Indirect_Diffuse=texture(Indirect_Environment,vec2(atan(Dir.z,Dir.x)/3.14159*0.5,asin(Dir.y)/3.14159+0.5));}\nvec4 SampleEnv_Bid200(vec3 D,vec4 S,vec4 H,vec4 G,float exponent)\n{float k=pow(abs(D.y),exponent);vec4 C;if (D.y>0.0) {C=mix(H,S,k);} else {C=mix(H,G,k); }\nreturn C;}\nvoid Sky_Environment_B200(\nvec3 Normal,\nvec3 Reflected,\nvec4 Sky_Color,\nvec4 Horizon_Color,\nvec4 Ground_Color,\nfloat Horizon_Power,\nout vec4 Reflected_Color,\nout vec4 Indirect_Color)\n{Reflected_Color=SampleEnv_Bid200(Reflected,Sky_Color,Horizon_Color,Ground_Color,Horizon_Power);Indirect_Color=mix(Ground_Color,Sky_Color,Normal.y*0.5+0.5);}\nvoid Min_Segment_Distance_B215(\nvec3 P0,\nvec3 P1,\nvec3 Q0,\nvec3 Q1,\nout vec3 NearP,\nout vec3 NearQ,\nout float Distance)\n{vec3 u=P1-P0;vec3 v=Q1-Q0;vec3 w=P0-Q0;float a=dot(u,u);float b=dot(u,v);float c=dot(v,v);float d=dot(u,w);float e=dot(v,w);float D=a*c-b*b;float sD=D;float tD=D;float sc,sN,tc,tN;if (D<0.00001) {sN=0.0;sD=1.0;tN=e;tD=c;} else {sN=(b*e-c*d);tN=(a*e-b*d);if (sN<0.0) {sN=0.0;tN=e;tD=c;} else if (sN>sD) {sN=sD;tN=e+b;tD=c;}}\nif (tN<0.0) {tN=0.0;if (-d<0.0) {sN=0.0;} else if (-d>a) {sN=sD;} else {sN=-d;sD=a;}} else if (tN>tD) {tN=tD;if ((-d+b)<0.0) {sN=0.0;} else if ((-d+b)>a) {sN=sD;} else {sN=(-d+b);sD=a;}}\nsc=abs(sN)<0.000001 ? 0.0 : sN/sD;tc=abs(tN)<0.000001 ? 0.0 : tN/tD;NearP=P0+sc*u;NearQ=Q0+tc*v;Distance=distance(NearP,NearQ);}\nvoid To_XYZ_B224(\nvec3 Vec3,\nout float X,\nout float Y,\nout float Z)\n{X=Vec3.x;Y=Vec3.y;Z=Vec3.z;}\nvoid Finger_Positions_B214(\nvec3 Left_Index_Pos,\nvec3 Right_Index_Pos,\nvec3 Left_Index_Middle_Pos,\nvec3 Right_Index_Middle_Pos,\nout vec3 Left_Index,\nout vec3 Right_Index,\nout vec3 Left_Index_Middle,\nout vec3 Right_Index_Middle)\n{Left_Index= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Left_Index_Pos);Right_Index= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Right_Index_Pos);Left_Index_Middle= (Use_Global_Left_Index ? Global_Left_Index_Middle_Position.xyz : Left_Index_Middle_Pos);Right_Index_Middle= (Use_Global_Right_Index ? Global_Right_Index_Middle_Position.xyz : Right_Index_Middle_Pos);}\nvoid VaryHSV_B258(\nvec3 HSV_In,\nfloat Hue_Shift,\nfloat Saturation_Shift,\nfloat Value_Shift,\nout vec3 HSV_Out)\n{HSV_Out=vec3(fract(HSV_In.x+Hue_Shift),clamp(HSV_In.y+Saturation_Shift,0.0,1.0),clamp(HSV_In.z+Value_Shift,0.0,1.0));}\nvoid Remap_Range_B264(\nfloat In_Min,\nfloat In_Max,\nfloat Out_Min,\nfloat Out_Max,\nfloat In,\nout float Out)\n{Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));}\nvoid To_HSV_B225(\nvec4 Color,\nout float Hue,\nout float Saturation,\nout float Value,\nout float Alpha,\nout vec3 HSV)\n{vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec4 p=Color.g<Color.b ? vec4(Color.bg,K.wz) : vec4(Color.gb,K.xy);vec4 q=Color.r<p.x ? vec4(p.xyw,Color.r) : vec4(Color.r,p.yzx);float d=q.x-min(q.w,q.y);float e=1.0e-10;Hue=abs(q.z+(q.w-q.y)/(6.0*d+e));Saturation=d/(q.x+e);Value=q.x;Alpha=Color.a;HSV=vec3(Hue,Saturation,Value);}\nvoid Code_B260(\nfloat X,\nout float Result)\n{Result=(acos(X)/3.14159-0.5)*2.0;}\nvoid Rim_Light_B282(\nvec3 Front,\nvec3 Normal,\nvec3 Incident,\nfloat Rim_Intensity,\nsampler2D Texture,\nout vec4 Result)\n{vec3 R=reflect(Incident,Normal);float RdotF=dot(R,Front);float RdotL=sqrt(1.0-RdotF*RdotF);vec2 UV=vec2(R.y*0.5+0.5,0.5);vec4 Color=texture(Texture,UV);Result=Color;}\nvoid main()\n{vec4 Blob_Color_Q180;\n#if BLOB_ENABLE\nBlob_Fragment_B180(_Blob_Texture_,vExtra2,vExtra3,Blob_Color_Q180);\n#else\nBlob_Color_Q180=vec4(0,0,0,0);\n#endif\nvec3 Incident_Q189=normalize(vPosition-cameraPosition);vec3 Normalized_Q188=normalize(vNormal);vec3 Normalized_Q221=normalize(vTangent);vec4 Color_Q233;\n#if DECAL_ENABLE\nColor_Q233=texture(_Decal_,vUV);\n#else\nColor_Q233=vec4(0,0,0,0);\n#endif\nfloat X_Q240;float Y_Q240;float Z_Q240;float W_Q240;X_Q240=vExtra1.x;Y_Q240=vExtra1.y;Z_Q240=vExtra1.z;W_Q240=vExtra1.w;vec4 Linear_Q193;Linear_Q193.rgb=clamp(_Sky_Color_.rgb*_Sky_Color_.rgb,0.0,1.0);Linear_Q193.a=_Sky_Color_.a;vec4 Linear_Q194;Linear_Q194.rgb=clamp(_Horizon_Color_.rgb*_Horizon_Color_.rgb,0.0,1.0);Linear_Q194.a=_Horizon_Color_.a;vec4 Linear_Q195;Linear_Q195.rgb=clamp(_Ground_Color_.rgb*_Ground_Color_.rgb,0.0,1.0);Linear_Q195.a=_Ground_Color_.a;vec3 Left_Index_Q214;vec3 Right_Index_Q214;vec3 Left_Index_Middle_Q214;vec3 Right_Index_Middle_Q214;Finger_Positions_B214(_Left_Index_Pos_,_Right_Index_Pos_,_Left_Index_Middle_Pos_,_Right_Index_Middle_Pos_,Left_Index_Q214,Right_Index_Q214,Left_Index_Middle_Q214,Right_Index_Middle_Q214);vec4 Linear_Q196;Linear_Q196.rgb=clamp(_Albedo_.rgb*_Albedo_.rgb,0.0,1.0);Linear_Q196.a=_Albedo_.a;vec3 Normalized_Q257=normalize(vBinormal);vec3 Incident_Q220=normalize(vPosition-cameraPosition);vec3 New_Normal_Q229;Bulge_B229(_Bulge_Enabled_,Normalized_Q188,Normalized_Q221,_Bulge_Height_,vColor,_Bulge_Radius_,vBinormal,New_Normal_Q229);float Result_Q227;SSS_B227(vBinormal,New_Normal_Q229,Incident_Q189,Result_Q227);vec4 Result_Q241;Scale_Color_B241(Color_Q233,X_Q240,Result_Q241);float Transmit_Q272;float Reflect_Q272;Fast_Fresnel_B272(_Front_Reflect_,_Edge_Reflect_,_Power_,New_Normal_Q229,Incident_Q189,Transmit_Q272,Reflect_Q272);float Product_Q275=Y_Q240*Y_Q240;vec3 NearP_Q215;vec3 NearQ_Q215;float Distance_Q215;Min_Segment_Distance_B215(Left_Index_Q214,Left_Index_Middle_Q214,vPosition,cameraPosition,NearP_Q215,NearQ_Q215,Distance_Q215);vec3 NearP_Q213;vec3 NearQ_Q213;float Distance_Q213;Min_Segment_Distance_B215(Right_Index_Q214,Right_Index_Middle_Q214,vPosition,cameraPosition,NearP_Q213,NearQ_Q213,Distance_Q213);vec3 Reflected_Q197=reflect(Incident_Q189,New_Normal_Q229);vec4 Product_Q253=Linear_Q196*vec4(1,1,1,1);vec4 Result_Q282;Rim_Light_B282(Normalized_Q257,Normalized_Q188,Incident_Q220,_Rim_Intensity_,_Rim_Texture_,Result_Q282);float Dot_Q222=dot(Incident_Q220, Normalized_Q221);float MaxAB_Q273=max(Reflect_Q272,Product_Q275);float NotInShadow_Q217;\n#if OCCLUSION_ENABLED\nFingerOcclusion_B217(_Width_,Distance_Q215,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q215,_Clip_Fade_,NotInShadow_Q217);\n#else\nNotInShadow_Q217=1.0;\n#endif\nfloat NotInShadow_Q218;\n#if OCCLUSION_ENABLED\nFingerOcclusion_B218(_Width_,Distance_Q213,_Fuzz_,_Min_Fuzz_,vPosition,vBinormal,NearP_Q213,_Clip_Fade_,NotInShadow_Q218);\n#else\nNotInShadow_Q218=1.0;\n#endif\nvec4 Reflected_Color_Q201;vec4 Indirect_Diffuse_Q201;\n#if ENV_ENABLE\nMapped_Environment_B201(_Reflection_Map_,_Indirect_Environment_,Reflected_Q197,Reflected_Color_Q201,Indirect_Diffuse_Q201);\n#else\nReflected_Color_Q201=vec4(0,0,0,1);Indirect_Diffuse_Q201=vec4(0,0,0,1);\n#endif\nvec4 Reflected_Color_Q200;vec4 Indirect_Color_Q200;\n#if SKY_ENABLED\nSky_Environment_B200(New_Normal_Q229,Reflected_Q197,Linear_Q193,Linear_Q194,Linear_Q195,_Horizon_Power_,Reflected_Color_Q200,Indirect_Color_Q200);\n#else\nReflected_Color_Q200=vec4(0,0,0,1);Indirect_Color_Q200=vec4(0,0,0,1);\n#endif\nfloat Hue_Q225;float Saturation_Q225;float Value_Q225;float Alpha_Q225;vec3 HSV_Q225;To_HSV_B225(Product_Q253,Hue_Q225,Saturation_Q225,Value_Q225,Alpha_Q225,HSV_Q225);float Hue_Q277;float Saturation_Q277;float Value_Q277;float Alpha_Q277;vec3 HSV_Q277;To_HSV_B225(Result_Q282,Hue_Q277,Saturation_Q277,Value_Q277,Alpha_Q277,HSV_Q277);float Result_Q260;Code_B260(Dot_Q222,Result_Q260);float AbsA_Q226=abs(Result_Q260);float MinAB_Q208=min(NotInShadow_Q217,NotInShadow_Q218);vec4 Sum_Q198=Reflected_Color_Q201+Reflected_Color_Q200;vec4 Sum_Q199=Indirect_Diffuse_Q201+Indirect_Color_Q200;vec3 HSV_Out_Q276;VaryHSV_B258(HSV_Q277,_Rim_Hue_Shift_,_Rim_Saturation_Shift_,_Rim_Value_Shift_,HSV_Out_Q276);float Out_Q264;Remap_Range_B264(-1.0,1.0,0.0,1.0,Result_Q260,Out_Q264);float Product_Q256;Product_Q256=AbsA_Q226*_Hue_Shift_;float X_Q278;float Y_Q278;float Z_Q278;To_XYZ_B224(HSV_Out_Q276,X_Q278,Y_Q278,Z_Q278);vec2 Vec2_Q262=vec2(Out_Q264,0.5);vec3 HSV_Out_Q258;VaryHSV_B258(HSV_Q225,Product_Q256,_Saturation_Shift_,_Value_Shift_,HSV_Out_Q258);vec4 Color_Q279;From_HSV_B223(X_Q278,Y_Q278,Z_Q278,0.0,Color_Q279);vec4 Color_Q261;\n#if IRIDESCENCE_ENABLED\nColor_Q261=texture(_Iridescence_Texture_,Vec2_Q262);\n#else\nColor_Q261=vec4(0,0,0,0);\n#endif\nfloat X_Q224;float Y_Q224;float Z_Q224;To_XYZ_B224(HSV_Out_Q258,X_Q224,Y_Q224,Z_Q224);vec4 Result_Q281=_Rim_Intensity_*Color_Q279;vec4 Result_Q263=_Iridescence_Intensity_*Color_Q261;vec4 Color_Q223;From_HSV_B223(X_Q224,Y_Q224,Z_Q224,0.0,Color_Q223);vec4 Result_Q234=Result_Q241+(1.0-Result_Q241.a)*Color_Q223;vec4 Result_Q271;Fragment_Main_B271(_Sun_Intensity_,_Sun_Theta_,_Sun_Phi_,New_Normal_Q229,Result_Q234,MaxAB_Q273,_Shininess_,Incident_Q189,_Horizon_Color_,_Sky_Color_,_Ground_Color_,_Indirect_Diffuse_,_Specular_,_Horizon_Power_,_Reflection_,Sum_Q198,Sum_Q199,_Sharpness_,Result_Q227,_Subsurface_,vec4(0,0,0,0),Result_Q281,Result_Q263,Result_Q271);vec4 Result_Q209;Scale_RGB_B209(Result_Q271,MinAB_Q208,Result_Q209);vec4 sRGB_Q192;FastLinearTosRGB_B192(Result_Q209,sRGB_Q192);vec4 Result_Q181=Blob_Color_Q180+(1.0-Blob_Color_Q180.a)*sRGB_Q192;vec4 Result_Q190=Result_Q181; Result_Q190.a=1.0;vec4 Out_Color=Result_Q190;float Clip_Threshold=0.001;bool To_sRGB=false;gl_FragColor=Out_Color;}");
      var le = "mrdlSliderThumbVertexShader";
      d.ShaderStore.ShadersStore[le] || (d.ShaderStore.ShadersStore[le] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;\n#ifdef TANGENT\nattribute vec3 tangent;\n#else\nconst vec3 tangent=vec3(0.);\n#endif\nuniform float _Radius_;uniform float _Bevel_Front_;uniform float _Bevel_Front_Stretch_;uniform float _Bevel_Back_;uniform float _Bevel_Back_Stretch_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform bool _Bulge_Enabled_;uniform float _Bulge_Height_;uniform float _Bulge_Radius_;uniform float _Sun_Intensity_;uniform float _Sun_Theta_;uniform float _Sun_Phi_;uniform float _Indirect_Diffuse_;uniform vec4 _Albedo_;uniform float _Specular_;uniform float _Shininess_;uniform float _Sharpness_;uniform float _Subsurface_;uniform vec4 _Left_Color_;uniform vec4 _Right_Color_;uniform float _Reflection_;uniform float _Front_Reflect_;uniform float _Edge_Reflect_;uniform float _Power_;uniform vec4 _Sky_Color_;uniform vec4 _Horizon_Color_;uniform vec4 _Ground_Color_;uniform float _Horizon_Power_;uniform sampler2D _Reflection_Map_;uniform sampler2D _Indirect_Environment_;uniform float _Width_;uniform float _Fuzz_;uniform float _Min_Fuzz_;uniform float _Clip_Fade_;uniform float _Hue_Shift_;uniform float _Saturation_Shift_;uniform float _Value_Shift_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform sampler2D _Blob_Texture_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform vec3 _Left_Index_Pos_;uniform vec3 _Right_Index_Pos_;uniform vec3 _Left_Index_Middle_Pos_;uniform vec3 _Right_Index_Middle_Pos_;uniform sampler2D _Decal_;uniform vec2 _Decal_Scale_XY_;uniform bool _Decal_Front_Only_;uniform float _Rim_Intensity_;uniform sampler2D _Rim_Texture_;uniform float _Rim_Hue_Shift_;uniform float _Rim_Saturation_Shift_;uniform float _Rim_Value_Shift_;uniform float _Iridescence_Intensity_;uniform sampler2D _Iridescence_Texture_;uniform bool Use_Global_Left_Index;uniform bool Use_Global_Right_Index;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;uniform vec4 Global_Left_Thumb_Tip_Position;uniform vec4 Global_Right_Thumb_Tip_Position;uniform float Global_Left_Index_Tip_Proximity;uniform float Global_Right_Index_Tip_Proximity;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vColor;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;void Object_To_World_Pos_B162(\nvec3 Pos_Object,\nout vec3 Pos_World)\n{Pos_World=(world*vec4(Pos_Object,1.0)).xyz;}\nvoid Object_To_World_Normal_B182(\nvec3 Nrm_Object,\nout vec3 Nrm_World)\n{Nrm_World=(vec4(Nrm_Object,0.0)).xyz;}\nvoid Blob_Vertex_B173(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nvec3 Blob_Position,\nfloat Intensity,\nfloat Blob_Near_Size,\nfloat Blob_Far_Size,\nfloat Blob_Near_Distance,\nfloat Blob_Far_Distance,\nfloat Blob_Fade_Length,\nfloat Blob_Pulse,\nfloat Blob_Fade,\nout vec4 Blob_Info)\n{vec3 blob= (Use_Global_Left_Index ? Global_Left_Index_Tip_Position.xyz : Blob_Position);vec3 delta=blob-Position;float dist=dot(Normal,delta);float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);float Fade=fadeValue*Intensity*Blob_Fade;float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);}\nvoid Blob_Vertex_B174(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nvec3 Blob_Position,\nfloat Intensity,\nfloat Blob_Near_Size,\nfloat Blob_Far_Size,\nfloat Blob_Near_Distance,\nfloat Blob_Far_Distance,\nfloat Blob_Fade_Length,\nfloat Blob_Pulse,\nfloat Blob_Fade,\nout vec4 Blob_Info)\n{vec3 blob= (Use_Global_Right_Index ? Global_Right_Index_Tip_Position.xyz : Blob_Position);vec3 delta=blob-Position;float dist=dot(Normal,delta);float lerpValue=clamp((abs(dist)-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);float fadeValue=1.0-clamp((abs(dist)-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);float size=Blob_Near_Size+(Blob_Far_Size-Blob_Near_Size)*lerpValue;vec2 blobXY=vec2(dot(delta,Tangent),dot(delta,Bitangent))/(0.0001+size);float Fade=fadeValue*Intensity*Blob_Fade;float Distance=(lerpValue*0.5+0.5)*(1.0-Blob_Pulse);Blob_Info=vec4(blobXY.x,blobXY.y,Distance,Fade);}\nvoid Move_Verts_B280(\nfloat Anisotropy,\nvec3 P,\nfloat Radius,\nfloat Bevel,\nvec3 Normal_Object,\nfloat ScaleZ,\nfloat Stretch,\nout vec3 New_P,\nout vec2 New_UV,\nout float Radial_Gradient,\nout vec3 Radial_Dir,\nout vec3 New_Normal)\n{vec2 UV=P.xy*2.0+0.5;vec2 center=clamp(UV,0.0,1.0);vec2 delta=UV-center;float deltad=(length(delta)*2.0);float f=(Bevel+(Radius-Bevel)*Stretch)/Radius;float innerd=clamp(deltad*2.0,0.0,1.0);float outerd=clamp(deltad*2.0-1.0,0.0,1.0);float bevelAngle=outerd*3.14159*0.5;float sinb=sin(bevelAngle);float cosb=cos(bevelAngle);float beveld=(1.0-f)*innerd+f*sinb;float br=outerd;vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);float dir=P.z<0.0001 ? 1.0 : -1.0;New_UV=center+r2*((0.5-center)+normalize(delta+vec2(0.0,0.000001))*beveld*0.5);New_P=vec3(New_UV-0.5,P.z+dir*(1.0-cosb)*Bevel*ScaleZ);Radial_Gradient=clamp((deltad-0.5)*2.0,0.0,1.0);Radial_Dir=vec3(delta*r2,0.0);vec3 beveledNormal=cosb*Normal_Object+sinb*vec3(delta.x,delta.y,0.0);New_Normal=Normal_Object.z==0.0 ? Normal_Object : beveledNormal;}\nvoid Object_To_World_Dir_B210(\nvec3 Dir_Object,\nout vec3 Normal_World,\nout vec3 Normal_World_N,\nout float Normal_Length)\n{Normal_World=(world*vec4(Dir_Object,0.0)).xyz;Normal_Length=length(Normal_World);Normal_World_N=Normal_World/Normal_Length;}\nvoid To_XYZ_B228(\nvec3 Vec3,\nout float X,\nout float Y,\nout float Z)\n{X=Vec3.x;Y=Vec3.y;Z=Vec3.z;}\nvoid Conditional_Float_B243(\nbool Which,\nfloat If_True,\nfloat If_False,\nout float Result)\n{Result=Which ? If_True : If_False;}\nvoid Object_To_World_Dir_B178(\nvec3 Dir_Object,\nout vec3 Binormal_World,\nout vec3 Binormal_World_N,\nout float Binormal_Length)\n{Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;Binormal_Length=length(Binormal_World);Binormal_World_N=Binormal_World/Binormal_Length;}\nvoid Pick_Radius_B219(\nfloat Radius,\nfloat Radius_Top_Left,\nfloat Radius_Top_Right,\nfloat Radius_Bottom_Left,\nfloat Radius_Bottom_Right,\nvec3 Position,\nout float Result)\n{bool whichY=Position.y>0.0;Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);Result*=Radius;}\nvoid Conditional_Float_B186(\nbool Which,\nfloat If_True,\nfloat If_False,\nout float Result)\n{Result=Which ? If_True : If_False;}\nvoid Greater_Than_B187(\nfloat Left,\nfloat Right,\nout bool Not_Greater_Than,\nout bool Greater_Than)\n{Greater_Than=Left>Right;Not_Greater_Than=!Greater_Than;}\nvoid Remap_Range_B255(\nfloat In_Min,\nfloat In_Max,\nfloat Out_Min,\nfloat Out_Max,\nfloat In,\nout float Out)\n{Out=mix(Out_Min,Out_Max,clamp((In-In_Min)/(In_Max-In_Min),0.0,1.0));}\nvoid main()\n{vec2 XY_Q235;XY_Q235=(uv-vec2(0.5,0.5))*_Decal_Scale_XY_+vec2(0.5,0.5);vec3 Tangent_World_Q177;vec3 Tangent_World_N_Q177;float Tangent_Length_Q177;Tangent_World_Q177=(world*vec4(vec3(1,0,0),0.0)).xyz;Tangent_Length_Q177=length(Tangent_World_Q177);Tangent_World_N_Q177=Tangent_World_Q177/Tangent_Length_Q177;vec3 Normal_World_Q210;vec3 Normal_World_N_Q210;float Normal_Length_Q210;Object_To_World_Dir_B210(vec3(0,0,1),Normal_World_Q210,Normal_World_N_Q210,Normal_Length_Q210);float X_Q228;float Y_Q228;float Z_Q228;To_XYZ_B228(position,X_Q228,Y_Q228,Z_Q228);vec3 Nrm_World_Q176;Nrm_World_Q176=normalize((world*vec4(normal,0.0)).xyz);vec3 Binormal_World_Q178;vec3 Binormal_World_N_Q178;float Binormal_Length_Q178;Object_To_World_Dir_B178(vec3(0,1,0),Binormal_World_Q178,Binormal_World_N_Q178,Binormal_Length_Q178);float Anisotropy_Q179=Tangent_Length_Q177/Binormal_Length_Q178;float Result_Q219;Pick_Radius_B219(_Radius_,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q219);float Anisotropy_Q203=Binormal_Length_Q178/Normal_Length_Q210;bool Not_Greater_Than_Q187;bool Greater_Than_Q187;Greater_Than_B187(Z_Q228,0.0,Not_Greater_Than_Q187,Greater_Than_Q187);vec4 Linear_Q251;Linear_Q251.rgb=clamp(_Left_Color_.rgb*_Left_Color_.rgb,0.0,1.0);Linear_Q251.a=_Left_Color_.a;vec4 Linear_Q252;Linear_Q252.rgb=clamp(_Right_Color_.rgb*_Right_Color_.rgb,0.0,1.0);Linear_Q252.a=_Right_Color_.a;vec3 Difference_Q211=vec3(0,0,0)-Normal_World_N_Q210;vec4 Out_Color_Q184=vec4(X_Q228,Y_Q228,Z_Q228,1);float Result_Q186;Conditional_Float_B186(Greater_Than_Q187,_Bevel_Back_,_Bevel_Front_,Result_Q186);float Result_Q244;Conditional_Float_B186(Greater_Than_Q187,_Bevel_Back_Stretch_,_Bevel_Front_Stretch_,Result_Q244);vec3 New_P_Q280;vec2 New_UV_Q280;float Radial_Gradient_Q280;vec3 Radial_Dir_Q280;vec3 New_Normal_Q280;Move_Verts_B280(Anisotropy_Q179,position,Result_Q219,Result_Q186,normal,Anisotropy_Q203,Result_Q244,New_P_Q280,New_UV_Q280,Radial_Gradient_Q280,Radial_Dir_Q280,New_Normal_Q280);float X_Q248;float Y_Q248;X_Q248=New_UV_Q280.x;Y_Q248=New_UV_Q280.y;vec3 Pos_World_Q162;Object_To_World_Pos_B162(New_P_Q280,Pos_World_Q162);vec3 Nrm_World_Q182;Object_To_World_Normal_B182(New_Normal_Q280,Nrm_World_Q182);vec4 Blob_Info_Q173;\n#if BLOB_ENABLE\nBlob_Vertex_B173(Pos_World_Q162,Nrm_World_Q176,Tangent_World_N_Q177,Binormal_World_N_Q178,_Blob_Position_,_Blob_Intensity_,_Blob_Near_Size_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_,_Blob_Fade_,Blob_Info_Q173);\n#else\nBlob_Info_Q173=vec4(0,0,0,0);\n#endif\nvec4 Blob_Info_Q174;\n#if BLOB_ENABLE_2\nBlob_Vertex_B174(Pos_World_Q162,Nrm_World_Q176,Tangent_World_N_Q177,Binormal_World_N_Q178,_Blob_Position_2_,_Blob_Intensity_,_Blob_Near_Size_2_,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,_Blob_Fade_Length_,_Blob_Pulse_2_,_Blob_Fade_2_,Blob_Info_Q174);\n#else\nBlob_Info_Q174=vec4(0,0,0,0);\n#endif\nfloat Out_Q255;Remap_Range_B255(0.0,1.0,0.0,1.0,X_Q248,Out_Q255);float X_Q236;float Y_Q236;float Z_Q236;To_XYZ_B228(Nrm_World_Q182,X_Q236,Y_Q236,Z_Q236);vec4 Color_At_T_Q247=mix(Linear_Q251,Linear_Q252,Out_Q255);float Minus_F_Q237=-Z_Q236;float R_Q249;float G_Q249;float B_Q249;float A_Q249;R_Q249=Color_At_T_Q247.r; G_Q249=Color_At_T_Q247.g; B_Q249=Color_At_T_Q247.b; A_Q249=Color_At_T_Q247.a;float ClampF_Q238=clamp(0.0,Minus_F_Q237,1.0);float Result_Q243;Conditional_Float_B243(_Decal_Front_Only_,ClampF_Q238,1.0,Result_Q243);vec4 Vec4_Q239=vec4(Result_Q243,Radial_Gradient_Q280,G_Q249,B_Q249);vec3 Position=Pos_World_Q162;vec3 Normal=Nrm_World_Q182;vec2 UV=XY_Q235;vec3 Tangent=Tangent_World_N_Q177;vec3 Binormal=Difference_Q211;vec4 Color=Out_Color_Q184;vec4 Extra1=Vec4_Q239;vec4 Extra2=Blob_Info_Q173;vec4 Extra3=Blob_Info_Q174;gl_Position=viewProjection*vec4(Position,1);vPosition=Position;vNormal=Normal;vUV=UV;vTangent=Tangent;vBinormal=Binormal;vColor=Color;vExtra1=Extra1;vExtra2=Extra2;vExtra3=Extra3;}");
      var _e = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3.SKY_ENABLED = true, e3.BLOB_ENABLE_2 = true, e3.IRIDESCENCE_ENABLED = true, e3._needNormals = true, e3._needUVs = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), he = function(t2) {
        function e2(i2, o2) {
          var r2 = t2.call(this, i2, o2) || this;
          r2.radius = 0.157, r2.bevelFront = 0.065, r2.bevelFrontStretch = 0.077, r2.bevelBack = 0.031, r2.bevelBackStretch = 0, r2.radiusTopLeft = 1, r2.radiusTopRight = 1, r2.radiusBottomLeft = 1, r2.radiusBottomRight = 1, r2.bulgeEnabled = false, r2.bulgeHeight = -0.323, r2.bulgeRadius = 0.73, r2.sunIntensity = 2, r2.sunTheta = 0.937, r2.sunPhi = 0.555, r2.indirectDiffuse = 1, r2.albedo = new d.Color4(0.0117647, 0.505882, 0.996078, 1), r2.specular = 0, r2.shininess = 10, r2.sharpness = 0, r2.subsurface = 0.31, r2.leftGradientColor = new d.Color4(0.0117647, 0.505882, 0.996078, 1), r2.rightGradientColor = new d.Color4(0.0117647, 0.505882, 0.996078, 1), r2.reflection = 0.749, r2.frontReflect = 0, r2.edgeReflect = 0.09, r2.power = 8.1, r2.skyColor = new d.Color4(0.0117647, 0.960784, 0.996078, 1), r2.horizonColor = new d.Color4(0.0117647, 0.333333, 0.996078, 1), r2.groundColor = new d.Color4(0, 0.254902, 0.996078, 1), r2.horizonPower = 1, r2.width = 0.02, r2.fuzz = 0.5, r2.minFuzz = 1e-3, r2.clipFade = 0.01, r2.hueShift = 0, r2.saturationShift = 0, r2.valueShift = 0, r2.blobPosition = new d.Vector3(0, 0, 0.1), r2.blobIntensity = 0.5, r2.blobNearSize = 0.01, r2.blobFarSize = 0.03, r2.blobNearDistance = 0, r2.blobFarDistance = 0.08, r2.blobFadeLength = 0.576, r2.blobPulse = 0, r2.blobFade = 1, r2.blobPosition2 = new d.Vector3(0.2, 0, 0.1), r2.blobNearSize2 = 0.01, r2.blobPulse2 = 0, r2.blobFade2 = 1, r2.blobTexture = new d.Texture("", r2.getScene()), r2.leftIndexPosition = new d.Vector3(0, 0, 1), r2.rightIndexPosition = new d.Vector3(-1, -1, -1), r2.leftIndexMiddlePosition = new d.Vector3(0, 0, 0), r2.rightIndexMiddlePosition = new d.Vector3(0, 0, 0), r2.decalScaleXY = new d.Vector2(1.5, 1.5), r2.decalFrontOnly = true, r2.rimIntensity = 0.287, r2.rimHueShift = 0, r2.rimSaturationShift = 0, r2.rimValueShift = -1, r2.iridescenceIntensity = 0, r2.useGlobalLeftIndex = 1, r2.useGlobalRightIndex = 1, r2.globalLeftIndexTipProximity = 0, r2.globalRightIndexTipProximity = 0, r2.globalLeftIndexTipPosition = new d.Vector4(0.5, 0, -0.55, 1), r2.globaRightIndexTipPosition = new d.Vector4(0, 0, 0, 1), r2.globalLeftThumbTipPosition = new d.Vector4(0.5, 0, -0.55, 1), r2.globalRightThumbTipPosition = new d.Vector4(0, 0, 0, 1), r2.globalLeftIndexMiddlePosition = new d.Vector4(0.5, 0, -0.55, 1), r2.globalRightIndexMiddlePosition = new d.Vector4(0, 0, 0, 1), r2.alphaMode = d.Constants.ALPHA_DISABLE, r2.backFaceCulling = false;
          var n2 = d.Tools.GetAssetUrl(e2.BLUE_GRADIENT_TEXTURE_URL);
          return r2._blueGradientTexture = new d.Texture(n2, o2, true, false, d.Texture.NEAREST_SAMPLINGMODE), r2._decalTexture = new d.Texture("", r2.getScene()), r2._reflectionMapTexture = new d.Texture("", r2.getScene()), r2._indirectEnvTexture = new d.Texture("", r2.getScene()), r2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return false;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new _e());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, false, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "viewProjection", "cameraPosition", "_Radius_", "_Bevel_Front_", "_Bevel_Front_Stretch_", "_Bevel_Back_", "_Bevel_Back_Stretch_", "_Radius_Top_Left_", "_Radius_Top_Right_", "_Radius_Bottom_Left_", "_Radius_Bottom_Right_", "_Bulge_Enabled_", "_Bulge_Height_", "_Bulge_Radius_", "_Sun_Intensity_", "_Sun_Theta_", "_Sun_Phi_", "_Indirect_Diffuse_", "_Albedo_", "_Specular_", "_Shininess_", "_Sharpness_", "_Subsurface_", "_Left_Color_", "_Right_Color_", "_Reflection_", "_Front_Reflect_", "_Edge_Reflect_", "_Power_", "_Sky_Color_", "_Horizon_Color_", "_Ground_Color_", "_Horizon_Power_", "_Reflection_Map_", "_Indirect_Environment_", "_Width_", "_Fuzz_", "_Min_Fuzz_", "_Clip_Fade_", "_Hue_Shift_", "_Saturation_Shift_", "_Value_Shift_", "_Blob_Position_", "_Blob_Intensity_", "_Blob_Near_Size_", "_Blob_Far_Size_", "_Blob_Near_Distance_", "_Blob_Far_Distance_", "_Blob_Fade_Length_", "_Blob_Pulse_", "_Blob_Fade_", "_Blob_Texture_", "_Blob_Position_2_", "_Blob_Near_Size_2_", "_Blob_Pulse_2_", "_Blob_Fade_2_", "_Left_Index_Pos_", "_Right_Index_Pos_", "_Left_Index_Middle_Pos_", "_Right_Index_Middle_Pos_", "_Decal_", "_Decal_Scale_XY_", "_Decal_Front_Only_", "_Rim_Intensity_", "_Rim_Texture_", "_Rim_Hue_Shift_", "_Rim_Saturation_Shift_", "_Rim_Value_Shift_", "_Iridescence_Intensity_", "_Iridescence_Texture_", "Use_Global_Left_Index", "Use_Global_Right_Index", "Global_Left_Index_Tip_Position", "Global_Right_Index_Tip_Position", "Global_Left_Thumb_Tip_Position", "Global_Right_Thumb_Tip_Position", "Global_Left_Index_Middle_Position;", "Global_Right_Index_Middle_Position", "Global_Left_Index_Tip_Proximity", "Global_Right_Index_Tip_Proximity"], h2 = ["_Rim_Texture_", "_Iridescence_Texture_"], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("mrdlSliderThumb", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          if (i2.materialDefines) {
            var o2 = i2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", this.getScene().getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", this.getScene().activeCamera.position), this._activeEffect.setFloat("_Radius_", this.radius), this._activeEffect.setFloat("_Bevel_Front_", this.bevelFront), this._activeEffect.setFloat("_Bevel_Front_Stretch_", this.bevelFrontStretch), this._activeEffect.setFloat("_Bevel_Back_", this.bevelBack), this._activeEffect.setFloat("_Bevel_Back_Stretch_", this.bevelBackStretch), this._activeEffect.setFloat("_Radius_Top_Left_", this.radiusTopLeft), this._activeEffect.setFloat("_Radius_Top_Right_", this.radiusTopRight), this._activeEffect.setFloat("_Radius_Bottom_Left_", this.radiusBottomLeft), this._activeEffect.setFloat("_Radius_Bottom_Right_", this.radiusBottomRight), this._activeEffect.setFloat("_Bulge_Enabled_", this.bulgeEnabled ? 1 : 0), this._activeEffect.setFloat("_Bulge_Height_", this.bulgeHeight), this._activeEffect.setFloat("_Bulge_Radius_", this.bulgeRadius), this._activeEffect.setFloat("_Sun_Intensity_", this.sunIntensity), this._activeEffect.setFloat("_Sun_Theta_", this.sunTheta), this._activeEffect.setFloat("_Sun_Phi_", this.sunPhi), this._activeEffect.setFloat("_Indirect_Diffuse_", this.indirectDiffuse), this._activeEffect.setDirectColor4("_Albedo_", this.albedo), this._activeEffect.setFloat("_Specular_", this.specular), this._activeEffect.setFloat("_Shininess_", this.shininess), this._activeEffect.setFloat("_Sharpness_", this.sharpness), this._activeEffect.setFloat("_Subsurface_", this.subsurface), this._activeEffect.setDirectColor4("_Left_Color_", this.leftGradientColor), this._activeEffect.setDirectColor4("_Right_Color_", this.rightGradientColor), this._activeEffect.setFloat("_Reflection_", this.reflection), this._activeEffect.setFloat("_Front_Reflect_", this.frontReflect), this._activeEffect.setFloat("_Edge_Reflect_", this.edgeReflect), this._activeEffect.setFloat("_Power_", this.power), this._activeEffect.setDirectColor4("_Sky_Color_", this.skyColor), this._activeEffect.setDirectColor4("_Horizon_Color_", this.horizonColor), this._activeEffect.setDirectColor4("_Ground_Color_", this.groundColor), this._activeEffect.setFloat("_Horizon_Power_", this.horizonPower), this._activeEffect.setTexture("_Reflection_Map_", this._reflectionMapTexture), this._activeEffect.setTexture("_Indirect_Environment_", this._indirectEnvTexture), this._activeEffect.setFloat("_Width_", this.width), this._activeEffect.setFloat("_Fuzz_", this.fuzz), this._activeEffect.setFloat("_Min_Fuzz_", this.minFuzz), this._activeEffect.setFloat("_Clip_Fade_", this.clipFade), this._activeEffect.setFloat("_Hue_Shift_", this.hueShift), this._activeEffect.setFloat("_Saturation_Shift_", this.saturationShift), this._activeEffect.setFloat("_Value_Shift_", this.valueShift), this._activeEffect.setVector3("_Blob_Position_", this.blobPosition), this._activeEffect.setFloat("_Blob_Intensity_", this.blobIntensity), this._activeEffect.setFloat("_Blob_Near_Size_", this.blobNearSize), this._activeEffect.setFloat("_Blob_Far_Size_", this.blobFarSize), this._activeEffect.setFloat("_Blob_Near_Distance_", this.blobNearDistance), this._activeEffect.setFloat("_Blob_Far_Distance_", this.blobFarDistance), this._activeEffect.setFloat("_Blob_Fade_Length_", this.blobFadeLength), this._activeEffect.setFloat("_Blob_Pulse_", this.blobPulse), this._activeEffect.setFloat("_Blob_Fade_", this.blobFade), this._activeEffect.setTexture("_Blob_Texture_", this.blobTexture), this._activeEffect.setVector3("_Blob_Position_2_", this.blobPosition2), this._activeEffect.setFloat("_Blob_Near_Size_2_", this.blobNearSize2), this._activeEffect.setFloat("_Blob_Pulse_2_", this.blobPulse2), this._activeEffect.setFloat("_Blob_Fade_2_", this.blobFade2), this._activeEffect.setVector3("_Left_Index_Pos_", this.leftIndexPosition), this._activeEffect.setVector3("_Right_Index_Pos_", this.rightIndexPosition), this._activeEffect.setVector3("_Left_Index_Middle_Pos_", this.leftIndexMiddlePosition), this._activeEffect.setVector3("_Right_Index_Middle_Pos_", this.rightIndexMiddlePosition), this._activeEffect.setTexture("_Decal_", this._decalTexture), this._activeEffect.setVector2("_Decal_Scale_XY_", this.decalScaleXY), this._activeEffect.setFloat("_Decal_Front_Only_", this.decalFrontOnly ? 1 : 0), this._activeEffect.setFloat("_Rim_Intensity_", this.rimIntensity), this._activeEffect.setTexture("_Rim_Texture_", this._blueGradientTexture), this._activeEffect.setFloat("_Rim_Hue_Shift_", this.rimHueShift), this._activeEffect.setFloat("_Rim_Saturation_Shift_", this.rimSaturationShift), this._activeEffect.setFloat("_Rim_Value_Shift_", this.rimValueShift), this._activeEffect.setFloat("_Iridescence_Intensity_", this.iridescenceIntensity), this._activeEffect.setTexture("_Iridescence_Texture_", this._blueGradientTexture), this._activeEffect.setFloat("Use_Global_Left_Index", this.useGlobalLeftIndex), this._activeEffect.setFloat("Use_Global_Right_Index", this.useGlobalRightIndex), this._activeEffect.setVector4("Global_Left_Index_Tip_Position", this.globalLeftIndexTipPosition), this._activeEffect.setVector4("Global_Right_Index_Tip_Position", this.globaRightIndexTipPosition), this._activeEffect.setVector4("Global_Left_Thumb_Tip_Position", this.globalLeftThumbTipPosition), this._activeEffect.setVector4("Global_Right_Thumb_Tip_Position", this.globalRightThumbTipPosition), this._activeEffect.setVector4("Global_Left_Index_Middle_Position", this.globalLeftIndexMiddlePosition), this._activeEffect.setVector4("Global_Right_Index_Middle_Position", this.globalRightIndexMiddlePosition), this._activeEffect.setFloat("Global_Left_Index_Tip_Proximity", this.globalLeftIndexTipProximity), this._activeEffect.setFloat("Global_Right_Index_Tip_Proximity", this.globalRightIndexTipProximity), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3), this._reflectionMapTexture.dispose(), this._indirectEnvTexture.dispose(), this._blueGradientTexture.dispose(), this._decalTexture.dispose();
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var e3 = t2.prototype.serialize.call(this);
          return e3.customType = "BABYLON.MRDLSliderThumbMaterial", e3;
        }, e2.prototype.getClassName = function() {
          return "MRDLSliderThumbMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, e2.BLUE_GRADIENT_TEXTURE_URL = "https://assets.babylonjs.com/core/MRTK/MRDL/mrtk-mrdl-blue-gradient.png", h([(0, d.serialize)()], e2.prototype, "radius", void 0), h([(0, d.serialize)()], e2.prototype, "bevelFront", void 0), h([(0, d.serialize)()], e2.prototype, "bevelFrontStretch", void 0), h([(0, d.serialize)()], e2.prototype, "bevelBack", void 0), h([(0, d.serialize)()], e2.prototype, "bevelBackStretch", void 0), h([(0, d.serialize)()], e2.prototype, "radiusTopLeft", void 0), h([(0, d.serialize)()], e2.prototype, "radiusTopRight", void 0), h([(0, d.serialize)()], e2.prototype, "radiusBottomLeft", void 0), h([(0, d.serialize)()], e2.prototype, "radiusBottomRight", void 0), h([(0, d.serialize)()], e2.prototype, "bulgeEnabled", void 0), h([(0, d.serialize)()], e2.prototype, "bulgeHeight", void 0), h([(0, d.serialize)()], e2.prototype, "bulgeRadius", void 0), h([(0, d.serialize)()], e2.prototype, "sunIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "sunTheta", void 0), h([(0, d.serialize)()], e2.prototype, "sunPhi", void 0), h([(0, d.serialize)()], e2.prototype, "indirectDiffuse", void 0), h([(0, d.serialize)()], e2.prototype, "albedo", void 0), h([(0, d.serialize)()], e2.prototype, "specular", void 0), h([(0, d.serialize)()], e2.prototype, "shininess", void 0), h([(0, d.serialize)()], e2.prototype, "sharpness", void 0), h([(0, d.serialize)()], e2.prototype, "subsurface", void 0), h([(0, d.serialize)()], e2.prototype, "leftGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "rightGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "reflection", void 0), h([(0, d.serialize)()], e2.prototype, "frontReflect", void 0), h([(0, d.serialize)()], e2.prototype, "edgeReflect", void 0), h([(0, d.serialize)()], e2.prototype, "power", void 0), h([(0, d.serialize)()], e2.prototype, "skyColor", void 0), h([(0, d.serialize)()], e2.prototype, "horizonColor", void 0), h([(0, d.serialize)()], e2.prototype, "groundColor", void 0), h([(0, d.serialize)()], e2.prototype, "horizonPower", void 0), h([(0, d.serialize)()], e2.prototype, "width", void 0), h([(0, d.serialize)()], e2.prototype, "fuzz", void 0), h([(0, d.serialize)()], e2.prototype, "minFuzz", void 0), h([(0, d.serialize)()], e2.prototype, "clipFade", void 0), h([(0, d.serialize)()], e2.prototype, "hueShift", void 0), h([(0, d.serialize)()], e2.prototype, "saturationShift", void 0), h([(0, d.serialize)()], e2.prototype, "valueShift", void 0), h([(0, d.serialize)()], e2.prototype, "blobPosition", void 0), h([(0, d.serialize)()], e2.prototype, "blobIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFadeLength", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade", void 0), h([(0, d.serialize)()], e2.prototype, "blobPosition2", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize2", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse2", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade2", void 0), h([(0, d.serialize)()], e2.prototype, "blobTexture", void 0), h([(0, d.serialize)()], e2.prototype, "leftIndexPosition", void 0), h([(0, d.serialize)()], e2.prototype, "rightIndexPosition", void 0), h([(0, d.serialize)()], e2.prototype, "leftIndexMiddlePosition", void 0), h([(0, d.serialize)()], e2.prototype, "rightIndexMiddlePosition", void 0), h([(0, d.serialize)()], e2.prototype, "decalScaleXY", void 0), h([(0, d.serialize)()], e2.prototype, "decalFrontOnly", void 0), h([(0, d.serialize)()], e2.prototype, "rimIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "rimHueShift", void 0), h([(0, d.serialize)()], e2.prototype, "rimSaturationShift", void 0), h([(0, d.serialize)()], e2.prototype, "rimValueShift", void 0), h([(0, d.serialize)()], e2.prototype, "iridescenceIntensity", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.MRDLSliderThumbMaterial", he);
      var ce = "mrdlBackplatePixelShader";
      d.ShaderStore.ShadersStore[ce] || (d.ShaderStore.ShadersStore[ce] = "uniform vec3 cameraPosition;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vExtra1;varying vec4 vExtra2;uniform float _Radius_;uniform float _Line_Width_;uniform bool _Absolute_Sizes_;uniform float _Filter_Width_;uniform vec4 _Base_Color_;uniform vec4 _Line_Color_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform float _Rate_;uniform vec4 _Highlight_Color_;uniform float _Highlight_Width_;uniform vec4 _Highlight_Transform_;uniform float _Highlight_;uniform float _Iridescence_Intensity_;uniform float _Iridescence_Edge_Intensity_;uniform vec4 _Iridescence_Tint_;uniform sampler2D _Iridescent_Map_;uniform float _Angle_;uniform bool _Reflected_;uniform float _Frequency_;uniform float _Vertical_Offset_;uniform vec4 _Gradient_Color_;uniform vec4 _Top_Left_;uniform vec4 _Top_Right_;uniform vec4 _Bottom_Left_;uniform vec4 _Bottom_Right_;uniform float _Edge_Width_;uniform float _Edge_Power_;uniform float _Line_Gradient_Blend_;uniform float _Fade_Out_;void FastLinearTosRGB_B353(\nvec4 Linear,\nout vec4 sRGB)\n{sRGB.rgb=sqrt(clamp(Linear.rgb,0.0,1.0));sRGB.a=Linear.a;}\nvoid Round_Rect_Fragment_B332(\nfloat Radius,\nfloat Line_Width,\nvec4 Line_Color,\nfloat Filter_Width,\nvec2 UV,\nfloat Line_Visibility,\nvec4 Rect_Parms,\nvec4 Fill_Color,\nout vec4 Color)\n{float d=length(max(abs(UV)-Rect_Parms.xy,0.0));float dx=max(fwidth(d)*Filter_Width,0.00001);float g=min(Rect_Parms.z,Rect_Parms.w);float dgrad=max(fwidth(g)*Filter_Width,0.00001);float Inside_Rect=clamp(g/dgrad,0.0,1.0);float inner=clamp((d+dx*0.5-max(Radius-Line_Width,d-dx*0.5))/dx,0.0,1.0);Color=clamp(mix(Fill_Color,Line_Color,inner),0.0,1.0)*Inside_Rect;}\nvoid Iridescence_B343(\nvec3 Position,\nvec3 Normal,\nvec2 UV,\nvec3 Axis,\nvec3 Eye,\nvec4 Tint,\nsampler2D Texture,\nbool Reflected,\nfloat Frequency,\nfloat Vertical_Offset,\nout vec4 Color)\n{vec3 i=normalize(Position-Eye);vec3 r=reflect(i,Normal);float idota=dot(i,Axis);float idotr=dot(i,r);float x=Reflected ? idotr : idota;vec2 xy;xy.x=fract((x*Frequency+1.0)*0.5+UV.y*Vertical_Offset);xy.y=0.5;Color=texture(Texture,xy);Color.rgb*=Tint.rgb;}\nvoid Scale_RGB_B346(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=vec4(Scalar,Scalar,Scalar,1)*Color;}\nvoid Scale_RGB_B344(\nfloat Scalar,\nvec4 Color,\nout vec4 Result)\n{Result=vec4(Scalar,Scalar,Scalar,1)*Color;}\nvoid Line_Fragment_B362(\nvec4 Base_Color,\nvec4 Highlight_Color,\nfloat Highlight_Width,\nvec3 Line_Vertex,\nfloat Highlight,\nout vec4 Line_Color)\n{float k2=1.0-clamp(abs(Line_Vertex.y/Highlight_Width),0.0,1.0);Line_Color=mix(Base_Color,Highlight_Color,Highlight*k2);}\nvoid Edge_B356(\nvec4 RectParms,\nfloat Radius,\nfloat Line_Width,\nvec2 UV,\nfloat Edge_Width,\nfloat Edge_Power,\nout float Result)\n{float d=length(max(abs(UV)-RectParms.xy,0.0));float edge=1.0-clamp((1.0-d/(Radius-Line_Width))/Edge_Width,0.0,1.0);Result=pow(edge,Edge_Power);}\nvoid Gradient_B355(\nvec4 Gradient_Color,\nvec4 Top_Left,\nvec4 Top_Right,\nvec4 Bottom_Left,\nvec4 Bottom_Right,\nvec2 UV,\nout vec4 Result)\n{vec3 top=Top_Left.rgb+(Top_Right.rgb-Top_Left.rgb)*UV.x;vec3 bottom=Bottom_Left.rgb+(Bottom_Right.rgb-Bottom_Left.rgb)*UV.x;Result.rgb=Gradient_Color.rgb*(bottom+(top-bottom)*UV.y);Result.a=1.0;}\nvoid main()\n{float X_Q338;float Y_Q338;float Z_Q338;float W_Q338;X_Q338=vExtra2.x;Y_Q338=vExtra2.y;Z_Q338=vExtra2.z;W_Q338=vExtra2.w;vec4 Color_Q343;\n#if IRIDESCENCE_ENABLE\nIridescence_B343(vPosition,vNormal,vUV,vBinormal,cameraPosition,_Iridescence_Tint_,_Iridescent_Map_,_Reflected_,_Frequency_,_Vertical_Offset_,Color_Q343);\n#else\nColor_Q343=vec4(0,0,0,0);\n#endif\nvec4 Result_Q344;Scale_RGB_B344(_Iridescence_Intensity_,Color_Q343,Result_Q344);vec4 Line_Color_Q362;Line_Fragment_B362(_Line_Color_,_Highlight_Color_,_Highlight_Width_,vTangent,_Highlight_,Line_Color_Q362);float Result_Q356;\n#if EDGE_ONLY\nEdge_B356(vExtra1,Z_Q338,W_Q338,vUV,_Edge_Width_,_Edge_Power_,Result_Q356);\n#else\nResult_Q356=1.0;\n#endif\nvec2 Vec2_Q339=vec2(X_Q338,Y_Q338);vec4 Result_Q355;Gradient_B355(_Gradient_Color_,_Top_Left_,_Top_Right_,_Bottom_Left_,_Bottom_Right_,Vec2_Q339,Result_Q355);vec4 Linear_Q348;Linear_Q348.rgb=clamp(Result_Q355.rgb*Result_Q355.rgb,0.0,1.0);Linear_Q348.a=Result_Q355.a;vec4 Result_Q346;Scale_RGB_B346(Linear_Q348,Result_Q356,Result_Q346);vec4 Sum_Q345=Result_Q346+Result_Q344;vec4 Color_At_T_Q347=mix(Line_Color_Q362,Result_Q346,_Line_Gradient_Blend_);vec4 Base_And_Iridescent_Q350;Base_And_Iridescent_Q350=_Base_Color_+vec4(Sum_Q345.rgb,0.0);vec4 Sum_Q349=Color_At_T_Q347+_Iridescence_Edge_Intensity_*Color_Q343;vec4 Result_Q351=Sum_Q349; Result_Q351.a=1.0;vec4 Color_Q332;Round_Rect_Fragment_B332(Z_Q338,W_Q338,Result_Q351,_Filter_Width_,vUV,1.0,vExtra1,Base_And_Iridescent_Q350,Color_Q332);vec4 Result_Q354=_Fade_Out_*Color_Q332;vec4 sRGB_Q353;FastLinearTosRGB_B353(Result_Q354,sRGB_Q353);vec4 Out_Color=sRGB_Q353;float Clip_Threshold=0.001;bool To_sRGB=false;gl_FragColor=Out_Color;}");
      var ue = "mrdlBackplateVertexShader";
      d.ShaderStore.ShadersStore[ue] || (d.ShaderStore.ShadersStore[ue] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec3 tangent;uniform float _Radius_;uniform float _Line_Width_;uniform bool _Absolute_Sizes_;uniform float _Filter_Width_;uniform vec4 _Base_Color_;uniform vec4 _Line_Color_;uniform float _Radius_Top_Left_;uniform float _Radius_Top_Right_;uniform float _Radius_Bottom_Left_;uniform float _Radius_Bottom_Right_;uniform float _Rate_;uniform vec4 _Highlight_Color_;uniform float _Highlight_Width_;uniform vec4 _Highlight_Transform_;uniform float _Highlight_;uniform float _Iridescence_Intensity_;uniform float _Iridescence_Edge_Intensity_;uniform vec4 _Iridescence_Tint_;uniform sampler2D _Iridescent_Map_;uniform float _Angle_;uniform bool _Reflected_;uniform float _Frequency_;uniform float _Vertical_Offset_;uniform vec4 _Gradient_Color_;uniform vec4 _Top_Left_;uniform vec4 _Top_Right_;uniform vec4 _Bottom_Left_;uniform vec4 _Bottom_Right_;uniform float _Edge_Width_;uniform float _Edge_Power_;uniform float _Line_Gradient_Blend_;uniform float _Fade_Out_;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec3 vBinormal;varying vec4 vExtra1;varying vec4 vExtra2;void Object_To_World_Pos_B314(\nvec3 Pos_Object,\nout vec3 Pos_World)\n{Pos_World=(world*vec4(Pos_Object,1.0)).xyz;}\nvoid Round_Rect_Vertex_B357(\nvec2 UV,\nfloat Radius,\nfloat Margin,\nfloat Anisotropy,\nfloat Gradient1,\nfloat Gradient2,\nvec3 Normal,\nvec4 Color_Scale_Translate,\nout vec2 Rect_UV,\nout vec4 Rect_Parms,\nout vec2 Scale_XY,\nout vec2 Line_UV,\nout vec2 Color_UV_Info)\n{Scale_XY=vec2(Anisotropy,1.0);Line_UV=(UV-vec2(0.5,0.5));Rect_UV=Line_UV*Scale_XY;Rect_Parms.xy=Scale_XY*0.5-vec2(Radius,Radius)-vec2(Margin,Margin);Rect_Parms.z=Gradient1; \nRect_Parms.w=Gradient2;Color_UV_Info=(Line_UV+vec2(0.5,0.5))*Color_Scale_Translate.xy+Color_Scale_Translate.zw;}\nvoid Line_Vertex_B333(\nvec2 Scale_XY,\nvec2 UV,\nfloat Time,\nfloat Rate,\nvec4 Highlight_Transform,\nout vec3 Line_Vertex)\n{float angle2=(Rate*Time)*2.0*3.1416;float sinAngle2=sin(angle2);float cosAngle2=cos(angle2);vec2 xformUV=UV*Highlight_Transform.xy+Highlight_Transform.zw;Line_Vertex.x=0.0;Line_Vertex.y=cosAngle2*xformUV.x-sinAngle2*xformUV.y;Line_Vertex.z=0.0; }\nvoid PickDir_B334(\nfloat Degrees,\nvec3 DirX,\nvec3 DirY,\nout vec3 Dir)\n{float a=Degrees*3.14159/180.0;Dir=cos(a)*DirX+sin(a)*DirY;}\nvoid Move_Verts_B327(\nfloat Anisotropy,\nvec3 P,\nfloat Radius,\nout vec3 New_P,\nout vec2 New_UV,\nout float Radial_Gradient,\nout vec3 Radial_Dir)\n{vec2 UV=P.xy*2.0+0.5;vec2 center=clamp(UV,0.0,1.0);vec2 delta=UV-center;vec2 r2=2.0*vec2(Radius/Anisotropy,Radius);New_UV=center+r2*(UV-2.0*center+0.5);New_P=vec3(New_UV-0.5,P.z);Radial_Gradient=1.0-length(delta)*2.0;Radial_Dir=vec3(delta*r2,0.0);}\nvoid Pick_Radius_B336(\nfloat Radius,\nfloat Radius_Top_Left,\nfloat Radius_Top_Right,\nfloat Radius_Bottom_Left,\nfloat Radius_Bottom_Right,\nvec3 Position,\nout float Result)\n{bool whichY=Position.y>0.0;Result=Position.x<0.0 ? (whichY ? Radius_Top_Left : Radius_Bottom_Left) : (whichY ? Radius_Top_Right : Radius_Bottom_Right);Result*=Radius;}\nvoid Edge_AA_Vertex_B328(\nvec3 Position_World,\nvec3 Position_Object,\nvec3 Normal_Object,\nvec3 Eye,\nfloat Radial_Gradient,\nvec3 Radial_Dir,\nvec3 Tangent,\nout float Gradient1,\nout float Gradient2)\n{vec3 I=(Eye-Position_World);vec3 T=(vec4(Tangent,0.0)).xyz;float g=(dot(T,I)<0.0) ? 0.0 : 1.0;if (Normal_Object.z==0.0) { \nGradient1=Position_Object.z>0.0 ? g : 1.0;Gradient2=Position_Object.z>0.0 ? 1.0 : g;} else {Gradient1=g+(1.0-g)*(Radial_Gradient);Gradient2=1.0;}}\nvoid Object_To_World_Dir_B330(\nvec3 Dir_Object,\nout vec3 Binormal_World,\nout vec3 Binormal_World_N,\nout float Binormal_Length)\n{Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;Binormal_Length=length(Binormal_World);Binormal_World_N=Binormal_World/Binormal_Length;}\nvoid RelativeOrAbsoluteDetail_B341(\nfloat Nominal_Radius,\nfloat Nominal_LineWidth,\nbool Absolute_Measurements,\nfloat Height,\nout float Radius,\nout float Line_Width)\n{float scale=Absolute_Measurements ? 1.0/Height : 1.0;Radius=Nominal_Radius*scale;Line_Width=Nominal_LineWidth*scale;}\nvoid main()\n{vec3 Nrm_World_Q326;Nrm_World_Q326=normalize((world*vec4(normal,0.0)).xyz);vec3 Tangent_World_Q329;vec3 Tangent_World_N_Q329;float Tangent_Length_Q329;Tangent_World_Q329=(world*vec4(vec3(1,0,0),0.0)).xyz;Tangent_Length_Q329=length(Tangent_World_Q329);Tangent_World_N_Q329=Tangent_World_Q329/Tangent_Length_Q329;vec3 Binormal_World_Q330;vec3 Binormal_World_N_Q330;float Binormal_Length_Q330;Object_To_World_Dir_B330(vec3(0,1,0),Binormal_World_Q330,Binormal_World_N_Q330,Binormal_Length_Q330);float Radius_Q341;float Line_Width_Q341;RelativeOrAbsoluteDetail_B341(_Radius_,_Line_Width_,_Absolute_Sizes_,Binormal_Length_Q330,Radius_Q341,Line_Width_Q341);vec3 Dir_Q334;PickDir_B334(_Angle_,Tangent_World_N_Q329,Binormal_World_N_Q330,Dir_Q334);float Result_Q336;Pick_Radius_B336(Radius_Q341,_Radius_Top_Left_,_Radius_Top_Right_,_Radius_Bottom_Left_,_Radius_Bottom_Right_,position,Result_Q336);float Anisotropy_Q331=Tangent_Length_Q329/Binormal_Length_Q330;vec4 Out_Color_Q337=vec4(Result_Q336,Line_Width_Q341,0,1);vec3 New_P_Q327;vec2 New_UV_Q327;float Radial_Gradient_Q327;vec3 Radial_Dir_Q327;Move_Verts_B327(Anisotropy_Q331,position,Result_Q336,New_P_Q327,New_UV_Q327,Radial_Gradient_Q327,Radial_Dir_Q327);vec3 Pos_World_Q314;Object_To_World_Pos_B314(New_P_Q327,Pos_World_Q314);float Gradient1_Q328;float Gradient2_Q328;\n#if SMOOTH_EDGES\nEdge_AA_Vertex_B328(Pos_World_Q314,position,normal,cameraPosition,Radial_Gradient_Q327,Radial_Dir_Q327,tangent,Gradient1_Q328,Gradient2_Q328);\n#else\nGradient1_Q328=1.0;Gradient2_Q328=1.0;\n#endif\nvec2 Rect_UV_Q357;vec4 Rect_Parms_Q357;vec2 Scale_XY_Q357;vec2 Line_UV_Q357;vec2 Color_UV_Info_Q357;Round_Rect_Vertex_B357(New_UV_Q327,Result_Q336,0.0,Anisotropy_Q331,Gradient1_Q328,Gradient2_Q328,normal,vec4(1,1,0,0),Rect_UV_Q357,Rect_Parms_Q357,Scale_XY_Q357,Line_UV_Q357,Color_UV_Info_Q357);vec3 Line_Vertex_Q333;Line_Vertex_B333(Scale_XY_Q357,Line_UV_Q357,(20.0),_Rate_,_Highlight_Transform_,Line_Vertex_Q333);float X_Q359;float Y_Q359;X_Q359=Color_UV_Info_Q357.x;Y_Q359=Color_UV_Info_Q357.y;vec4 Vec4_Q358=vec4(X_Q359,Y_Q359,Result_Q336,Line_Width_Q341);vec3 Position=Pos_World_Q314;vec3 Normal=Nrm_World_Q326;vec2 UV=Rect_UV_Q357;vec3 Tangent=Line_Vertex_Q333;vec3 Binormal=Dir_Q334;vec4 Color=Out_Color_Q337;vec4 Extra1=Rect_Parms_Q357;vec4 Extra2=Vec4_Q358;vec4 Extra3=vec4(0,0,0,0);gl_Position=viewProjection*vec4(Position,1);vPosition=Position;vNormal=Normal;vUV=UV;vTangent=Tangent;vBinormal=Binormal;vExtra1=Extra1;vExtra2=Extra2;}");
      var de = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3.IRIDESCENCE_ENABLE = true, e3.SMOOTH_EDGES = true, e3._needNormals = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), fe = function(t2) {
        function e2(i2, o2) {
          var r2 = t2.call(this, i2, o2) || this;
          r2.radius = 0.3, r2.lineWidth = 3e-3, r2.absoluteSizes = false, r2._filterWidth = 1, r2.baseColor = new d.Color4(0, 0, 0, 1), r2.lineColor = new d.Color4(0.2, 0.262745, 0.4, 1), r2.radiusTopLeft = 1, r2.radiusTopRight = 1, r2.radiusBottomLeft = 1, r2.radiusBottomRight = 1, r2._rate = 0, r2.highlightColor = new d.Color4(0.239216, 0.435294, 0.827451, 1), r2.highlightWidth = 0, r2._highlightTransform = new d.Vector4(1, 1, 0, 0), r2._highlight = 1, r2.iridescenceIntensity = 0.45, r2.iridescenceEdgeIntensity = 1, r2.iridescenceTint = new d.Color4(1, 1, 1, 1), r2._angle = -45, r2.fadeOut = 1, r2._reflected = true, r2._frequency = 1, r2._verticalOffset = 0, r2.gradientColor = new d.Color4(0.74902, 0.74902, 0.74902, 1), r2.topLeftGradientColor = new d.Color4(784314e-8, 0.294118, 0.580392, 1), r2.topRightGradientColor = new d.Color4(0.305882, 0, 1, 1), r2.bottomLeftGradientColor = new d.Color4(0.133333, 0.258824, 0.992157, 1), r2.bottomRightGradientColor = new d.Color4(0.176471, 0.176471, 0.619608, 1), r2.edgeWidth = 0.5, r2.edgePower = 1, r2.edgeLineGradientBlend = 0.5, r2.alphaMode = d.Constants.ALPHA_DISABLE, r2.backFaceCulling = false;
          var n2 = d.Tools.GetAssetUrl(e2.IRIDESCENT_MAP_TEXTURE_URL);
          return r2._iridescentMapTexture = new d.Texture(n2, r2.getScene(), true, false, d.Texture.NEAREST_SAMPLINGMODE), r2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return false;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new de());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, false, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "viewProjection", "cameraPosition", "_Radius_", "_Line_Width_", "_Absolute_Sizes_", "_Filter_Width_", "_Base_Color_", "_Line_Color_", "_Radius_Top_Left_", "_Radius_Top_Right_", "_Radius_Bottom_Left_", "_Radius_Bottom_Right_", "_Rate_", "_Highlight_Color_", "_Highlight_Width_", "_Highlight_Transform_", "_Highlight_", "_Iridescence_Intensity_", "_Iridescence_Edge_Intensity_", "_Iridescence_Tint_", "_Iridescent_Map_", "_Angle_", "_Reflected_", "_Frequency_", "_Vertical_Offset_", "_Gradient_Color_", "_Top_Left_", "_Top_Right_", "_Bottom_Left_", "_Bottom_Right_", "_Edge_Width_", "_Edge_Power_", "_Line_Gradient_Blend_", "_Fade_Out_"], h2 = ["_Iridescent_Map_"], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("mrdlBackplate", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          if (i2.materialDefines) {
            var o2 = i2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", this.getScene().getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", this.getScene().activeCamera.position), this._activeEffect.setFloat("_Radius_", this.radius), this._activeEffect.setFloat("_Line_Width_", this.lineWidth), this._activeEffect.setFloat("_Absolute_Sizes_", this.absoluteSizes ? 1 : 0), this._activeEffect.setFloat("_Filter_Width_", this._filterWidth), this._activeEffect.setDirectColor4("_Base_Color_", this.baseColor), this._activeEffect.setDirectColor4("_Line_Color_", this.lineColor), this._activeEffect.setFloat("_Radius_Top_Left_", this.radiusTopLeft), this._activeEffect.setFloat("_Radius_Top_Right_", this.radiusTopRight), this._activeEffect.setFloat("_Radius_Bottom_Left_", this.radiusBottomLeft), this._activeEffect.setFloat("_Radius_Bottom_Right_", this.radiusBottomRight), this._activeEffect.setFloat("_Rate_", this._rate), this._activeEffect.setDirectColor4("_Highlight_Color_", this.highlightColor), this._activeEffect.setFloat("_Highlight_Width_", this.highlightWidth), this._activeEffect.setVector4("_Highlight_Transform_", this._highlightTransform), this._activeEffect.setFloat("_Highlight_", this._highlight), this._activeEffect.setFloat("_Iridescence_Intensity_", this.iridescenceIntensity), this._activeEffect.setFloat("_Iridescence_Edge_Intensity_", this.iridescenceEdgeIntensity), this._activeEffect.setDirectColor4("_Iridescence_Tint_", this.iridescenceTint), this._activeEffect.setTexture("_Iridescent_Map_", this._iridescentMapTexture), this._activeEffect.setFloat("_Angle_", this._angle), this._activeEffect.setFloat("_Reflected_", this._reflected ? 1 : 0), this._activeEffect.setFloat("_Frequency_", this._frequency), this._activeEffect.setFloat("_Vertical_Offset_", this._verticalOffset), this._activeEffect.setDirectColor4("_Gradient_Color_", this.gradientColor), this._activeEffect.setDirectColor4("_Top_Left_", this.topLeftGradientColor), this._activeEffect.setDirectColor4("_Top_Right_", this.topRightGradientColor), this._activeEffect.setDirectColor4("_Bottom_Left_", this.bottomLeftGradientColor), this._activeEffect.setDirectColor4("_Bottom_Right_", this.bottomRightGradientColor), this._activeEffect.setFloat("_Edge_Width_", this.edgeWidth), this._activeEffect.setFloat("_Edge_Power_", this.edgePower), this._activeEffect.setFloat("_Line_Gradient_Blend_", this.edgeLineGradientBlend), this._activeEffect.setFloat("_Fade_Out_", this.fadeOut), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3);
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var e3 = t2.prototype.serialize.call(this);
          return e3.customType = "BABYLON.MRDLBackplateMaterial", e3;
        }, e2.prototype.getClassName = function() {
          return "MRDLBackplateMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, e2.IRIDESCENT_MAP_TEXTURE_URL = "https://assets.babylonjs.com/core/MRTK/MRDL/mrtk-mrdl-backplate-iridescence.png", h([(0, d.serialize)()], e2.prototype, "radius", void 0), h([(0, d.serialize)()], e2.prototype, "lineWidth", void 0), h([(0, d.serialize)()], e2.prototype, "absoluteSizes", void 0), h([(0, d.serialize)()], e2.prototype, "baseColor", void 0), h([(0, d.serialize)()], e2.prototype, "lineColor", void 0), h([(0, d.serialize)()], e2.prototype, "radiusTopLeft", void 0), h([(0, d.serialize)()], e2.prototype, "radiusTopRight", void 0), h([(0, d.serialize)()], e2.prototype, "radiusBottomLeft", void 0), h([(0, d.serialize)()], e2.prototype, "radiusBottomRight", void 0), h([(0, d.serialize)()], e2.prototype, "highlightColor", void 0), h([(0, d.serialize)()], e2.prototype, "highlightWidth", void 0), h([(0, d.serialize)()], e2.prototype, "iridescenceIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "iridescenceEdgeIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "iridescenceTint", void 0), h([(0, d.serialize)()], e2.prototype, "fadeOut", void 0), h([(0, d.serialize)()], e2.prototype, "gradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "topLeftGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "topRightGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "bottomLeftGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "bottomRightGradientColor", void 0), h([(0, d.serialize)()], e2.prototype, "edgeWidth", void 0), h([(0, d.serialize)()], e2.prototype, "edgePower", void 0), h([(0, d.serialize)()], e2.prototype, "edgeLineGradientBlend", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.MRDLBackplateMaterial", fe);
      var pe = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3) || this;
          return o2.onValueChangedObservable = new d.Observable(), o2._sliderBackplateVisible = i2 || false, o2._minimum = 0, o2._maximum = 100, o2._step = 0, o2._value = 50, o2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "mesh", { get: function() {
          return this.node ? this._sliderThumb : null;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "minimum", { get: function() {
          return this._minimum;
        }, set: function(t3) {
          this._minimum !== t3 && (this._minimum = Math.max(t3, 0), this._value = Math.max(Math.min(this._value, this._maximum), this._minimum));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "maximum", { get: function() {
          return this._maximum;
        }, set: function(t3) {
          this._maximum !== t3 && (this._maximum = Math.max(t3, this._minimum), this._value = Math.max(Math.min(this._value, this._maximum), this._minimum));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "step", { get: function() {
          return this._step;
        }, set: function(t3) {
          this._step !== t3 && (this._step = Math.max(Math.min(t3, this._maximum - this._minimum), 0));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "value", { get: function() {
          return this._value;
        }, set: function(t3) {
          this._value !== t3 && (this._value = Math.max(Math.min(t3, this._maximum), this._minimum), this._sliderThumb && (this._sliderThumb.position.x = this._convertToPosition(this.value)), this.onValueChangedObservable.notifyObservers(this._value));
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "start", { get: function() {
          return this.node ? this._sliderBar.position.x - this._sliderBar.scaling.x / 2 : -0.5;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "end", { get: function() {
          return this.node ? this._sliderBar.position.x + this._sliderBar.scaling.x / 2 : 0.5;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliderBarMaterial", { get: function() {
          return this._sliderBarMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliderThumbMaterial", { get: function() {
          return this._sliderThumbMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliderBackplateMaterial", { get: function() {
          return this._sliderBackplateMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliderBar", { get: function() {
          return this._sliderBar;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliderThumb", { get: function() {
          return this._sliderThumb;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "sliderBackplate", { get: function() {
          return this._sliderBackplate;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isVisible", { set: function(t3) {
          var e3;
          this._isVisible !== t3 && (this._isVisible = t3, null === (e3 = this.node) || void 0 === e3 || e3.setEnabled(t3));
        }, enumerable: false, configurable: true }), e2.prototype._createNode = function(t3) {
          var i2 = this, o2 = (0, d.CreateBox)("".concat(this.name, "_sliderbackplate"), { width: 1, height: 1, depth: 1 }, t3);
          o2.isPickable = false, o2.visibility = 0, o2.scaling = new d.Vector3(1, 0.5, 0.8);
          var r2 = d.Tools.GetAssetUrl(e2.MODEL_BASE_URL);
          return d.SceneLoader.ImportMeshAsync(void 0, r2, e2.MODEL_FILENAME, t3).then(function(t4) {
            for (var e3 = 0, r3 = t4.meshes; e3 < r3.length; e3++) r3[e3].isPickable = false;
            var n2 = t4.meshes[1], a2 = t4.meshes[1].clone("".concat(i2.name, "_sliderbar"), o2), s2 = t4.meshes[1].clone("".concat(i2.name, "_sliderthumb"), o2);
            n2.visibility = 0, i2._sliderBackplateVisible && (n2.visibility = 1, n2.name = "".concat(i2.name, "_sliderbackplate"), n2.scaling.x = 1, n2.scaling.z = 0.2, n2.parent = o2, i2._sliderBackplateMaterial && (n2.material = i2._sliderBackplateMaterial), i2._sliderBackplate = n2), a2 && (a2.parent = o2, a2.position.z = -0.1, a2.scaling = new d.Vector3(0.8, 0.04, 0.3), i2._sliderBarMaterial && (a2.material = i2._sliderBarMaterial), i2._sliderBar = a2), s2 && (s2.parent = o2, s2.isPickable = true, s2.position.z = -0.115, s2.scaling = new d.Vector3(0.025, 0.3, 0.6), s2.position.x = i2._convertToPosition(i2.value), s2.addBehavior(i2._createBehavior()), i2._sliderThumbMaterial && (s2.material = i2._sliderThumbMaterial), i2._sliderThumb = s2), i2._injectGUI3DReservedDataStore(o2).control = i2;
            for (var l2 = 0, _2 = o2.getChildMeshes(); l2 < _2.length; l2++) {
              var h2 = _2[l2];
              i2._injectGUI3DReservedDataStore(h2).control = i2;
            }
          }), this._affectMaterial(o2), o2;
        }, e2.prototype._affectMaterial = function(t3) {
          var e3, i2, o2;
          this._sliderBackplateMaterial = null !== (e3 = this._sliderBackplateMaterial) && void 0 !== e3 ? e3 : new fe("".concat(this.name, "_sliderbackplate_material"), t3.getScene()), this._sliderBarMaterial = null !== (i2 = this._sliderBarMaterial) && void 0 !== i2 ? i2 : new ae("".concat(this.name, "_sliderbar_material"), t3.getScene()), this._sliderThumbMaterial = null !== (o2 = this._sliderThumbMaterial) && void 0 !== o2 ? o2 : new he("".concat(this.name, "_sliderthumb_material"), t3.getScene());
        }, e2.prototype._createBehavior = function() {
          var t3 = this, e3 = new d.PointerDragBehavior({ dragAxis: d.Vector3.Right() });
          return e3.moveAttached = false, e3.onDragStartObservable.add(function() {
            t3._draggedPosition = t3._sliderThumb.position.x;
          }), e3.onDragObservable.add(function(e4) {
            t3._draggedPosition += e4.dragDistance / t3.scaling.x, t3.value = t3._convertToValue(t3._draggedPosition);
          }), e3;
        }, e2.prototype._convertToPosition = function(t3) {
          var e3 = (t3 - this.minimum) / (this.maximum - this.minimum) * (this.end - this.start) + this.start;
          return Math.min(Math.max(e3, this.start), this.end);
        }, e2.prototype._convertToValue = function(t3) {
          var e3 = (t3 - this.start) / (this.end - this.start) * (this.maximum - this.minimum);
          return e3 = this.step ? Math.round(e3 / this.step) * this.step : e3, Math.max(Math.min(this.minimum + e3, this._maximum), this._minimum);
        }, e2.prototype.dispose = function() {
          var e3, i2, o2, r2, n2, a2;
          t2.prototype.dispose.call(this), null === (e3 = this._sliderBar) || void 0 === e3 || e3.dispose(), null === (i2 = this._sliderThumb) || void 0 === i2 || i2.dispose(), null === (o2 = this._sliderBarMaterial) || void 0 === o2 || o2.dispose(), null === (r2 = this._sliderThumbMaterial) || void 0 === r2 || r2.dispose(), null === (n2 = this._sliderBackplate) || void 0 === n2 || n2.dispose(), null === (a2 = this._sliderBackplateMaterial) || void 0 === a2 || a2.dispose();
        }, e2.MODEL_BASE_URL = "https://assets.babylonjs.com/core/MRTK/", e2.MODEL_FILENAME = "mrtk-fluent-backplate.glb", e2;
      }(mt), ge = function(t2) {
        function e2() {
          var e3 = null !== t2 && t2.apply(this, arguments) || this;
          return e3._radius = 5, e3;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "radius", { get: function() {
          return this._radius;
        }, set: function(t3) {
          var e3 = this;
          this._radius !== t3 && (this._radius = t3, d.Tools.SetImmediate(function() {
            e3._arrangeChildren();
          }));
        }, enumerable: false, configurable: true }), e2.prototype._mapGridNode = function(t3, e3) {
          var i2 = t3.mesh;
          if (i2) {
            var o2 = this._sphericalMapping(e3);
            switch (t3.position = o2, this.orientation) {
              case Pt.FACEORIGIN_ORIENTATION:
                i2.lookAt(new d.Vector3(2 * o2.x, 2 * o2.y, 2 * o2.z));
                break;
              case Pt.FACEORIGINREVERSED_ORIENTATION:
                i2.lookAt(new d.Vector3(-o2.x, -o2.y, -o2.z));
                break;
              case Pt.FACEFORWARD_ORIENTATION:
                break;
              case Pt.FACEFORWARDREVERSED_ORIENTATION:
                i2.rotate(d.Axis.Y, Math.PI, 0);
            }
          }
        }, e2.prototype._sphericalMapping = function(t3) {
          var e3 = new d.Vector3(0, 0, this._radius), i2 = t3.y / this._radius, o2 = -t3.x / this._radius;
          return d.Matrix.RotationYawPitchRollToRef(o2, i2, 0, d.TmpVectors.Matrix[0]), d.Vector3.TransformNormal(e3, d.TmpVectors.Matrix[0]);
        }, e2;
      }(It), be = function(t2) {
        function e2(e3) {
          void 0 === e3 && (e3 = false);
          var i2 = t2.call(this) || this;
          return i2._isVertical = false, i2.margin = 0.1, i2._isVertical = e3, i2;
        }
        return l(e2, t2), Object.defineProperty(e2.prototype, "isVertical", { get: function() {
          return this._isVertical;
        }, set: function(t3) {
          var e3 = this;
          this._isVertical !== t3 && (this._isVertical = t3, d.Tools.SetImmediate(function() {
            e3._arrangeChildren();
          }));
        }, enumerable: false, configurable: true }), e2.prototype._arrangeChildren = function() {
          for (var t3, e3 = 0, i2 = 0, o2 = 0, r2 = [], n2 = d.Matrix.Invert(this.node.computeWorldMatrix(true)), a2 = 0, s2 = this._children; a2 < s2.length; a2++) if ((f2 = s2[a2]).mesh) {
            o2++, f2.mesh.computeWorldMatrix(true), f2.mesh.getWorldMatrix().multiplyToRef(n2, d.TmpVectors.Matrix[0]);
            var l2 = f2.mesh.getBoundingInfo().boundingBox, _2 = d.Vector3.TransformNormal(l2.extendSize, d.TmpVectors.Matrix[0]);
            r2.push(_2), this._isVertical ? i2 += _2.y : e3 += _2.x;
          }
          this._isVertical ? i2 += (o2 - 1) * this.margin / 2 : e3 += (o2 - 1) * this.margin / 2, t3 = this._isVertical ? -i2 : -e3;
          for (var h2 = 0, c2 = 0, u2 = this._children; c2 < u2.length; c2++) {
            var f2;
            (f2 = u2[c2]).mesh && (o2--, _2 = r2[h2++], this._isVertical ? (f2.position.y = t3 + _2.y, f2.position.x = 0, t3 += 2 * _2.y) : (f2.position.x = t3 + _2.x, f2.position.y = 0, t3 += 2 * _2.x), t3 += o2 > 0 ? this.margin : 0);
          }
        }, e2;
      }(Pt), me = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, i2, e3) || this;
          return o2._currentMesh = e3, o2.pointerEnterAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(1.1);
          }, o2.pointerOutAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(1 / 1.1);
          }, o2.pointerDownAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(0.95);
          }, o2.pointerUpAnimation = function() {
            o2.mesh && o2.mesh.scaling.scaleInPlace(1 / 0.95);
          }, o2;
        }
        return l(e2, t2), e2.prototype._getTypeName = function() {
          return "TouchMeshButton3D";
        }, e2.prototype._createNode = function() {
          for (var t3 = 0, e3 = this._currentMesh.getChildMeshes(); t3 < e3.length; t3++) {
            var i2 = e3[t3];
            this._injectGUI3DReservedDataStore(i2).control = this;
          }
          return this._currentMesh;
        }, e2.prototype._affectMaterial = function(t3) {
        }, e2;
      }(Vt), ve = "mrdlBackglowPixelShader";
      d.ShaderStore.ShadersStore[ve] || (d.ShaderStore.ShadersStore[ve] = "uniform vec3 cameraPosition;varying vec3 vNormal;varying vec2 vUV;uniform float _Bevel_Radius_;uniform float _Line_Width_;uniform bool _Absolute_Sizes_;uniform float _Tuning_Motion_;uniform float _Motion_;uniform float _Max_Intensity_;uniform float _Intensity_Fade_In_Exponent_;uniform float _Outer_Fuzz_Start_;uniform float _Outer_Fuzz_End_;uniform vec4 _Color_;uniform vec4 _Inner_Color_;uniform float _Blend_Exponent_;uniform float _Falloff_;uniform float _Bias_;float BiasFunc(float b,float v) {return pow(v,log(clamp(b,0.001,0.999))/log(0.5));}\nvoid Fuzzy_Round_Rect_B33(\nfloat Size_X,\nfloat Size_Y,\nfloat Radius_X,\nfloat Radius_Y,\nfloat Line_Width,\nvec2 UV,\nfloat Outer_Fuzz,\nfloat Max_Outer_Fuzz,\nout float Rect_Distance,\nout float Inner_Distance)\n{vec2 halfSize=vec2(Size_X,Size_Y)*0.5;vec2 r=max(min(vec2(Radius_X,Radius_Y),halfSize),vec2(0.001,0.001));float radius=min(r.x,r.y)-Max_Outer_Fuzz;vec2 v=abs(UV);vec2 nearestp=min(v,halfSize-r);float d=distance(nearestp,v);Inner_Distance=clamp(1.0-(radius-d)/Line_Width,0.0,1.0);Rect_Distance=clamp(1.0-(d-radius)/Outer_Fuzz,0.0,1.0)*Inner_Distance;}\nvoid main()\n{float X_Q42;float Y_Q42;X_Q42=vNormal.x;Y_Q42=vNormal.y;float MaxAB_Q24=max(_Tuning_Motion_,_Motion_);float Sqrt_F_Q27=sqrt(MaxAB_Q24);float Power_Q43=pow(MaxAB_Q24,_Intensity_Fade_In_Exponent_);float Value_At_T_Q26=mix(_Outer_Fuzz_Start_,_Outer_Fuzz_End_,Sqrt_F_Q27);float Product_Q23=_Max_Intensity_*Power_Q43;float Rect_Distance_Q33;float Inner_Distance_Q33;Fuzzy_Round_Rect_B33(X_Q42,Y_Q42,_Bevel_Radius_,_Bevel_Radius_,_Line_Width_,vUV,Value_At_T_Q26,_Outer_Fuzz_Start_,Rect_Distance_Q33,Inner_Distance_Q33);float Power_Q44=pow(Inner_Distance_Q33,_Blend_Exponent_);float Result_Q45=pow(BiasFunc(_Bias_,Rect_Distance_Q33),_Falloff_);vec4 Color_At_T_Q25=mix(_Inner_Color_,_Color_,Power_Q44);float Product_Q22=Result_Q45*Product_Q23;vec4 Result_Q28=Product_Q22*Color_At_T_Q25;vec4 Out_Color=Result_Q28;float Clip_Threshold=0.0;gl_FragColor=Out_Color;}");
      var ye = "mrdlBackglowVertexShader";
      d.ShaderStore.ShadersStore[ye] || (d.ShaderStore.ShadersStore[ye] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;attribute vec3 tangent;uniform float _Bevel_Radius_;uniform float _Line_Width_;uniform bool _Absolute_Sizes_;uniform float _Tuning_Motion_;uniform float _Motion_;uniform float _Max_Intensity_;uniform float _Intensity_Fade_In_Exponent_;uniform float _Outer_Fuzz_Start_;uniform float _Outer_Fuzz_End_;uniform vec4 _Color_;uniform vec4 _Inner_Color_;uniform float _Blend_Exponent_;uniform float _Falloff_;uniform float _Bias_;varying vec3 vNormal;varying vec2 vUV;void main()\n{vec3 Dir_World_Q41=(world*vec4(tangent,0.0)).xyz;vec3 Dir_World_Q40=(world*vec4((cross(normal,tangent)),0.0)).xyz;float MaxAB_Q24=max(_Tuning_Motion_,_Motion_);float Length_Q16=length(Dir_World_Q41);float Length_Q17=length(Dir_World_Q40);bool Greater_Than_Q37=MaxAB_Q24>0.0;vec3 Sizes_Q35;vec2 XY_Q35;Sizes_Q35=(_Absolute_Sizes_ ? vec3(Length_Q16,Length_Q17,0) : vec3(Length_Q16/Length_Q17,1,0));XY_Q35=(uv-vec2(0.5,0.5))*Sizes_Q35.xy;vec3 Result_Q38=Greater_Than_Q37 ? position : vec3(0,0,0);vec3 Pos_World_Q39=(world*vec4(Result_Q38,1.0)).xyz;vec3 Position=Pos_World_Q39;vec3 Normal=Sizes_Q35;vec2 UV=XY_Q35;vec3 Tangent=vec3(0,0,0);vec3 Binormal=vec3(0,0,0);vec4 Color=vec4(1,1,1,1);gl_Position=viewProjection*vec4(Position,1);vNormal=Normal;vUV=UV;}");
      var xe = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3._needNormals = true, e3._needUVs = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), Pe = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3, i2) || this;
          return o2.bevelRadius = 0.16, o2.lineWidth = 0.16, o2.absoluteSizes = false, o2.tuningMotion = 0, o2.motion = 1, o2.maxIntensity = 0.7, o2.intensityFadeInExponent = 2, o2.outerFuzzStart = 0.04, o2.outerFuzzEnd = 0.04, o2.color = new d.Color4(0.682353, 0.698039, 1, 1), o2.innerColor = new d.Color4(0.356863, 0.392157, 0.796078, 1), o2.blendExponent = 1.5, o2.falloff = 2, o2.bias = 0.5, o2.alphaMode = d.Constants.ALPHA_ADD, o2.disableDepthWrite = true, o2.backFaceCulling = false, o2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return true;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new xe());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, false, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "worldView", "worldViewProjection", "view", "projection", "viewProjection", "cameraPosition", "_Bevel_Radius_", "_Line_Width_", "_Absolute_Sizes_", "_Tuning_Motion_", "_Motion_", "_Max_Intensity_", "_Intensity_Fade_In_Exponent_", "_Outer_Fuzz_Start_", "_Outer_Fuzz_End_", "_Color_", "_Inner_Color_", "_Blend_Exponent_", "_Falloff_", "_Bias_"], h2 = [], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("mrdlBackglow", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          var o2 = this.getScene();
          if (i2.materialDefines) {
            var r2 = i2.effect;
            r2 && (this._activeEffect = r2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", o2.getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", o2.activeCamera.position), this._activeEffect.setFloat("_Bevel_Radius_", this.bevelRadius), this._activeEffect.setFloat("_Line_Width_", this.lineWidth), this._activeEffect.setFloat("_Absolute_Sizes_", this.absoluteSizes ? 1 : 0), this._activeEffect.setFloat("_Tuning_Motion_", this.tuningMotion), this._activeEffect.setFloat("_Motion_", this.motion), this._activeEffect.setFloat("_Max_Intensity_", this.maxIntensity), this._activeEffect.setFloat("_Intensity_Fade_In_Exponent_", this.intensityFadeInExponent), this._activeEffect.setFloat("_Outer_Fuzz_Start_", this.outerFuzzStart), this._activeEffect.setFloat("_Outer_Fuzz_End_", this.outerFuzzEnd), this._activeEffect.setDirectColor4("_Color_", this.color), this._activeEffect.setDirectColor4("_Inner_Color_", this.innerColor), this._activeEffect.setFloat("_Blend_Exponent_", this.blendExponent), this._activeEffect.setFloat("_Falloff_", this.falloff), this._activeEffect.setFloat("_Bias_", this.bias), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3);
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var t3 = d.SerializationHelper.Serialize(this);
          return t3.customType = "BABYLON.MRDLBackglowMaterial", t3;
        }, e2.prototype.getClassName = function() {
          return "MRDLBackglowMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, h([(0, d.serialize)()], e2.prototype, "bevelRadius", void 0), h([(0, d.serialize)()], e2.prototype, "lineWidth", void 0), h([(0, d.serialize)()], e2.prototype, "absoluteSizes", void 0), h([(0, d.serialize)()], e2.prototype, "tuningMotion", void 0), h([(0, d.serialize)()], e2.prototype, "motion", void 0), h([(0, d.serialize)()], e2.prototype, "maxIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "intensityFadeInExponent", void 0), h([(0, d.serialize)()], e2.prototype, "outerFuzzStart", void 0), h([(0, d.serialize)()], e2.prototype, "outerFuzzEnd", void 0), h([(0, d.serialize)()], e2.prototype, "color", void 0), h([(0, d.serialize)()], e2.prototype, "innerColor", void 0), h([(0, d.serialize)()], e2.prototype, "blendExponent", void 0), h([(0, d.serialize)()], e2.prototype, "falloff", void 0), h([(0, d.serialize)()], e2.prototype, "bias", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.MRDLBackglowMaterial", Pe);
      var Ie = "mrdlFrontplatePixelShader";
      d.ShaderStore.ShadersStore[Ie] || (d.ShaderStore.ShadersStore[Ie] = "uniform vec3 cameraPosition;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;uniform float _Radius_;uniform float _Line_Width_;uniform bool _Relative_To_Height_;uniform float _Filter_Width_;uniform vec4 _Edge_Color_;uniform float _Fade_Out_;uniform bool _Smooth_Edges_;uniform bool _Blob_Enable_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Inner_Fade_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform float _Blob_Pulse_Max_Size_;uniform bool _Blob_Enable_2_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Inner_Fade_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform float _Gaze_Intensity_;uniform float _Gaze_Focus_;uniform sampler2D _Blob_Texture_;uniform float _Selection_Fuzz_;uniform float _Selected_;uniform float _Selection_Fade_;uniform float _Selection_Fade_Size_;uniform float _Selected_Distance_;uniform float _Selected_Fade_Length_;uniform float _Proximity_Max_Intensity_;uniform float _Proximity_Far_Distance_;uniform float _Proximity_Near_Radius_;uniform float _Proximity_Anisotropy_;uniform bool _Use_Global_Left_Index_;uniform bool _Use_Global_Right_Index_;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;void Scale_Color_B54(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=Scalar*Color;}\nvoid Scale_RGB_B50(\nvec4 Color,\nfloat Scalar,\nout vec4 Result)\n{Result=vec4(Scalar,Scalar,Scalar,1)*Color;}\nvoid Proximity_Fragment_B51(\nfloat Proximity_Max_Intensity,\nfloat Proximity_Near_Radius,\nvec4 Deltas,\nfloat Show_Selection,\nfloat Distance_Fade1,\nfloat Distance_Fade2,\nfloat Strength,\nout float Proximity)\n{float proximity1=(1.0-clamp(length(Deltas.xy)/Proximity_Near_Radius,0.0,1.0))*Distance_Fade1;float proximity2=(1.0-clamp(length(Deltas.zw)/Proximity_Near_Radius,0.0,1.0))*Distance_Fade2;Proximity=Strength*(Proximity_Max_Intensity*max(proximity1,proximity2) *(1.0-Show_Selection)+Show_Selection);}\nvoid Blob_Fragment_B56(\nvec2 UV,\nvec3 Blob_Info,\nsampler2D Blob_Texture,\nout vec4 Blob_Color)\n{float k=dot(UV,UV);Blob_Color=Blob_Info.y*texture(Blob_Texture,vec2(vec2(sqrt(k),Blob_Info.x).x,1.0-vec2(sqrt(k),Blob_Info.x).y))*(1.0-clamp(k,0.0,1.0));}\nvoid Round_Rect_Fragment_B61(\nfloat Radius,\nvec4 Line_Color,\nfloat Filter_Width,\nfloat Line_Visibility,\nvec4 Fill_Color,\nbool Smooth_Edges,\nvec4 Rect_Parms,\nout float Inside_Rect)\n{float d=length(max(abs(Rect_Parms.zw)-Rect_Parms.xy,0.0));float dx=max(fwidth(d)*Filter_Width,0.00001);Inside_Rect=Smooth_Edges ? clamp((Radius-d)/dx,0.0,1.0) : 1.0-step(Radius,d);}\nvoid main()\n{float Is_Quad_Q53;Is_Quad_Q53=vNormal.z;vec4 Blob_Color_Q56;Blob_Fragment_B56(vUV,vTangent,_Blob_Texture_,Blob_Color_Q56);float X_Q52;float Y_Q52;float Z_Q52;float W_Q52;X_Q52=vExtra3.x;Y_Q52=vExtra3.y;Z_Q52=vExtra3.z;W_Q52=vExtra3.w;float Proximity_Q51;Proximity_Fragment_B51(_Proximity_Max_Intensity_,_Proximity_Near_Radius_,vExtra2,X_Q52,Y_Q52,Z_Q52,1.0,Proximity_Q51);float Inside_Rect_Q61;Round_Rect_Fragment_B61(W_Q52,vec4(1,1,1,1),_Filter_Width_,1.0,vec4(0,0,0,0),_Smooth_Edges_,vExtra1,Inside_Rect_Q61);vec4 Result_Q50;Scale_RGB_B50(_Edge_Color_,Proximity_Q51,Result_Q50);vec4 Result_Q47=Inside_Rect_Q61*Blob_Color_Q56;vec4 Color_At_T_Q48=mix(Result_Q50,Result_Q47,Is_Quad_Q53);vec4 Result_Q54;Scale_Color_B54(Color_At_T_Q48,_Fade_Out_,Result_Q54);vec4 Out_Color=Result_Q54;float Clip_Threshold=0.001;bool To_sRGB=false;gl_FragColor=Out_Color;}");
      var Be = "mrdlFrontplateVertexShader";
      d.ShaderStore.ShadersStore[Be] || (d.ShaderStore.ShadersStore[Be] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;attribute vec3 tangent;attribute vec4 color;uniform float _Radius_;uniform float _Line_Width_;uniform bool _Relative_To_Height_;uniform float _Filter_Width_;uniform vec4 _Edge_Color_;uniform float _Fade_Out_;uniform bool _Smooth_Edges_;uniform bool _Blob_Enable_;uniform vec3 _Blob_Position_;uniform float _Blob_Intensity_;uniform float _Blob_Near_Size_;uniform float _Blob_Far_Size_;uniform float _Blob_Near_Distance_;uniform float _Blob_Far_Distance_;uniform float _Blob_Fade_Length_;uniform float _Blob_Inner_Fade_;uniform float _Blob_Pulse_;uniform float _Blob_Fade_;uniform float _Blob_Pulse_Max_Size_;uniform bool _Blob_Enable_2_;uniform vec3 _Blob_Position_2_;uniform float _Blob_Near_Size_2_;uniform float _Blob_Inner_Fade_2_;uniform float _Blob_Pulse_2_;uniform float _Blob_Fade_2_;uniform float _Gaze_Intensity_;uniform float _Gaze_Focus_;uniform sampler2D _Blob_Texture_;uniform float _Selection_Fuzz_;uniform float _Selected_;uniform float _Selection_Fade_;uniform float _Selection_Fade_Size_;uniform float _Selected_Distance_;uniform float _Selected_Fade_Length_;uniform float _Proximity_Max_Intensity_;uniform float _Proximity_Far_Distance_;uniform float _Proximity_Near_Radius_;uniform float _Proximity_Anisotropy_;uniform bool _Use_Global_Left_Index_;uniform bool _Use_Global_Right_Index_;uniform vec4 Global_Left_Index_Tip_Position;uniform vec4 Global_Right_Index_Tip_Position;varying vec3 vNormal;varying vec2 vUV;varying vec3 vTangent;varying vec4 vExtra1;varying vec4 vExtra2;varying vec4 vExtra3;void Blob_Vertex_B40(\nvec3 Position,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nvec3 Blob_Position,\nfloat Intensity,\nfloat Blob_Near_Size,\nfloat Blob_Far_Size,\nfloat Blob_Near_Distance,\nfloat Blob_Far_Distance,\nvec4 Vx_Color,\nvec2 UV,\nvec3 Face_Center,\nvec2 Face_Size,\nvec2 In_UV,\nfloat Blob_Fade_Length,\nfloat Selection_Fade,\nfloat Selection_Fade_Size,\nfloat Inner_Fade,\nfloat Blob_Pulse,\nfloat Blob_Fade,\nfloat Blob_Enabled,\nfloat DistanceOffset,\nout vec3 Out_Position,\nout vec2 Out_UV,\nout vec3 Blob_Info,\nout vec2 Blob_Relative_UV)\n{float blobSize,fadeIn;vec3 Hit_Position;Blob_Info=vec3(0.0,0.0,0.0);float Hit_Distance=dot(Blob_Position-Face_Center,Normal)+DistanceOffset*Blob_Far_Distance;Hit_Position=Blob_Position-Hit_Distance*Normal;float absD=abs(Hit_Distance);float lerpVal=clamp((absD-Blob_Near_Distance)/(Blob_Far_Distance-Blob_Near_Distance),0.0,1.0);fadeIn=1.0-clamp((absD-Blob_Far_Distance)/Blob_Fade_Length,0.0,1.0);float innerFade=1.0-clamp(-Hit_Distance/Inner_Fade,0.0,1.0);float farClip=clamp(1.0-step(Blob_Far_Distance+Blob_Fade_Length,absD),0.0,1.0);float size=mix(Blob_Near_Size,Blob_Far_Size,lerpVal)*farClip;blobSize=mix(size,Selection_Fade_Size,Selection_Fade)*innerFade*Blob_Enabled;Blob_Info.x=lerpVal*0.5+0.5;Blob_Info.y=fadeIn*Intensity*(1.0-Selection_Fade)*Blob_Fade;Blob_Info.x*=(1.0-Blob_Pulse);vec3 delta=Hit_Position-Face_Center;vec2 blobCenterXY=vec2(dot(delta,Tangent),dot(delta,Bitangent));vec2 quadUVin=2.0*UV-1.0; \nvec2 blobXY=blobCenterXY+quadUVin*blobSize;vec2 blobClipped=clamp(blobXY,-Face_Size*0.5,Face_Size*0.5);vec2 blobUV=(blobClipped-blobCenterXY)/max(blobSize,0.0001)*2.0;vec3 blobCorner=Face_Center+blobClipped.x*Tangent+blobClipped.y*Bitangent;Out_Position=mix(Position,blobCorner,Vx_Color.rrr);Out_UV=mix(In_UV,blobUV,Vx_Color.rr);Blob_Relative_UV=blobClipped/Face_Size.y;}\nvoid Round_Rect_Vertex_B36(\nvec2 UV,\nvec3 Tangent,\nvec3 Binormal,\nfloat Radius,\nfloat Anisotropy,\nvec2 Blob_Center_UV,\nout vec2 Rect_UV,\nout vec2 Scale_XY,\nout vec4 Rect_Parms)\n{Scale_XY=vec2(Anisotropy,1.0);Rect_UV=(UV-vec2(0.5,0.5))*Scale_XY;Rect_Parms.xy=Scale_XY*0.5-vec2(Radius,Radius);Rect_Parms.zw=Blob_Center_UV;}\nvec2 ProjectProximity(\nvec3 blobPosition,\nvec3 position,\nvec3 center,\nvec3 dir,\nvec3 xdir,\nvec3 ydir,\nout float vdistance\n)\n{vec3 delta=blobPosition-position;vec2 xy=vec2(dot(delta,xdir),dot(delta,ydir));vdistance=abs(dot(delta,dir));return xy;}\nvoid Proximity_Vertex_B33(\nvec3 Blob_Position,\nvec3 Blob_Position_2,\nvec3 Face_Center,\nvec3 Position,\nfloat Proximity_Far_Distance,\nfloat Relative_Scale,\nfloat Proximity_Anisotropy,\nvec3 Normal,\nvec3 Tangent,\nvec3 Binormal,\nout vec4 Extra,\nout float Distance_To_Face,\nout float Distance_Fade1,\nout float Distance_Fade2)\n{float distz1,distz2;Extra.xy=ProjectProximity(Blob_Position,Position,Face_Center,Normal,Tangent*Proximity_Anisotropy,Binormal,distz1)/Relative_Scale;Extra.zw=ProjectProximity(Blob_Position_2,Position,Face_Center,Normal,Tangent*Proximity_Anisotropy,Binormal,distz2)/Relative_Scale;Distance_To_Face=dot(Normal,Position-Face_Center);Distance_Fade1=1.0-clamp(distz1/Proximity_Far_Distance,0.0,1.0);Distance_Fade2=1.0-clamp(distz2/Proximity_Far_Distance,0.0,1.0);}\nvoid Object_To_World_Pos_B12(\nvec3 Pos_Object,\nout vec3 Pos_World)\n{Pos_World=(world*vec4(Pos_Object,1.0)).xyz;}\nvoid Choose_Blob_B27(\nvec4 Vx_Color,\nvec3 Position1,\nvec3 Position2,\nbool Blob_Enable_1,\nbool Blob_Enable_2,\nfloat Near_Size_1,\nfloat Near_Size_2,\nfloat Blob_Inner_Fade_1,\nfloat Blob_Inner_Fade_2,\nfloat Blob_Pulse_1,\nfloat Blob_Pulse_2,\nfloat Blob_Fade_1,\nfloat Blob_Fade_2,\nout vec3 Position,\nout float Near_Size,\nout float Inner_Fade,\nout float Blob_Enable,\nout float Fade,\nout float Pulse)\n{Position=Position1*(1.0-Vx_Color.g)+Vx_Color.g*Position2;float b1=Blob_Enable_1 ? 1.0 : 0.0;float b2=Blob_Enable_2 ? 1.0 : 0.0;Blob_Enable=b1+(b2-b1)*Vx_Color.g;Pulse=Blob_Pulse_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Pulse_2;Fade=Blob_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Fade_2;Near_Size=Near_Size_1*(1.0-Vx_Color.g)+Vx_Color.g*Near_Size_2;Inner_Fade=Blob_Inner_Fade_1*(1.0-Vx_Color.g)+Vx_Color.g*Blob_Inner_Fade_2;}\nvoid Move_Verts_B32(\nvec2 UV,\nfloat Radius,\nfloat Anisotropy,\nfloat Line_Width,\nfloat Visible,\nout vec3 New_P,\nout vec2 New_UV)\n{vec2 xy=2.0*UV-vec2(0.5,0.5);vec2 center=clamp(xy,0.0,1.0);vec2 delta=2.0*(xy-center);float deltaLength=length(delta);vec2 aniso=vec2(1.0/Anisotropy,1.0);center=(center-vec2(0.5,0.5))*(1.0-2.0*Radius*aniso);New_UV=vec2((2.0-2.0*deltaLength)*Visible,0.0);float deltaRadius= (Radius-Line_Width*New_UV.x);New_P.xy=(center+deltaRadius/deltaLength *aniso*delta);New_P.z=0.0;}\nvoid Object_To_World_Dir_B14(\nvec3 Dir_Object,\nout vec3 Binormal_World)\n{Binormal_World=(world*vec4(Dir_Object,0.0)).xyz;}\nvoid Proximity_Visibility_B55(\nfloat Selection,\nvec3 Proximity_Center,\nvec3 Proximity_Center_2,\nfloat Proximity_Far_Distance,\nfloat Proximity_Radius,\nvec3 Face_Center,\nvec3 Normal,\nvec2 Face_Size,\nfloat Gaze,\nout float Width)\n{float boxMaxSize=length(Face_Size)*0.5;float d1=dot(Proximity_Center-Face_Center,Normal);vec3 blob1=Proximity_Center-d1*Normal;float d2=dot(Proximity_Center_2-Face_Center,Normal);vec3 blob2=Proximity_Center_2-d2*Normal;vec3 delta1=blob1-Face_Center;vec3 delta2=blob2-Face_Center;float dist1=dot(delta1,delta1);float dist2=dot(delta2,delta2);float nearestProxDist=sqrt(min(dist1,dist2));Width=(1.0-step(boxMaxSize+Proximity_Radius,nearestProxDist))*(1.0-step(Proximity_Far_Distance,min(d1,d2))*(1.0-step(0.0001,Selection)));Width=max(Gaze,Width);}\nvec2 ramp2(vec2 start,vec2 end,vec2 x)\n{return clamp((x-start)/(end-start),vec2(0.0,0.0),vec2(1.0,1.0));}\nfloat computeSelection(\nvec3 blobPosition,\nvec3 normal,\nvec3 tangent,\nvec3 bitangent,\nvec3 faceCenter,\nvec2 faceSize,\nfloat selectionFuzz,\nfloat farDistance,\nfloat fadeLength\n)\n{vec3 delta=blobPosition-faceCenter;float absD=abs(dot(delta,normal));float fadeIn=1.0-clamp((absD-farDistance)/fadeLength,0.0,1.0);vec2 blobCenterXY=vec2(dot(delta,tangent),dot(delta,bitangent));vec2 innerFace=faceSize*(1.0-selectionFuzz)*0.5;vec2 selectPulse=ramp2(-faceSize*0.5,-innerFace,blobCenterXY)-ramp2(innerFace,faceSize*0.5,blobCenterXY);return selectPulse.x*selectPulse.y*fadeIn;}\nvoid Selection_Vertex_B31(\nvec3 Blob_Position,\nvec3 Blob_Position_2,\nvec3 Face_Center,\nvec2 Face_Size,\nvec3 Normal,\nvec3 Tangent,\nvec3 Bitangent,\nfloat Selection_Fuzz,\nfloat Selected,\nfloat Far_Distance,\nfloat Fade_Length,\nvec3 Active_Face_Dir,\nout float Show_Selection)\n{float select1=computeSelection(Blob_Position,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);float select2=computeSelection(Blob_Position_2,Normal,Tangent,Bitangent,Face_Center,Face_Size,Selection_Fuzz,Far_Distance,Fade_Length);Show_Selection=mix(max(select1,select2),1.0,Selected);}\nvoid main()\n{vec3 Vec3_Q29=vec3(vec2(0,0).x,vec2(0,0).y,color.r);vec3 Nrm_World_Q24;Nrm_World_Q24=normalize((world*vec4(normal,0.0)).xyz);vec3 Face_Center_Q30;Face_Center_Q30=(world*vec4(vec3(0,0,0),1.0)).xyz;vec3 Tangent_World_Q13;Tangent_World_Q13=(world*vec4(tangent,0.0)).xyz;vec3 Result_Q42;Result_Q42=_Use_Global_Left_Index_ ? Global_Left_Index_Tip_Position.xyz : _Blob_Position_;vec3 Result_Q43;Result_Q43=_Use_Global_Right_Index_ ? Global_Right_Index_Tip_Position.xyz : _Blob_Position_2_;float Value_At_T_Q58=mix(_Blob_Near_Size_,_Blob_Pulse_Max_Size_,_Blob_Pulse_);float Value_At_T_Q59=mix(_Blob_Near_Size_2_,_Blob_Pulse_Max_Size_,_Blob_Pulse_2_);vec3 Cross_Q70=cross(normal,tangent);float Product_Q45=_Gaze_Intensity_*_Gaze_Focus_;float Step_Q46=step(0.0001,Product_Q45);vec3 Tangent_World_N_Q15=normalize(Tangent_World_Q13);vec3 Position_Q27;float Near_Size_Q27;float Inner_Fade_Q27;float Blob_Enable_Q27;float Fade_Q27;float Pulse_Q27;Choose_Blob_B27(color,Result_Q42,Result_Q43,_Blob_Enable_,_Blob_Enable_2_,Value_At_T_Q58,Value_At_T_Q59,_Blob_Inner_Fade_,_Blob_Inner_Fade_2_,_Blob_Pulse_,_Blob_Pulse_2_,_Blob_Fade_,_Blob_Fade_2_,Position_Q27,Near_Size_Q27,Inner_Fade_Q27,Blob_Enable_Q27,Fade_Q27,Pulse_Q27);vec3 Binormal_World_Q14;Object_To_World_Dir_B14(Cross_Q70,Binormal_World_Q14);float Anisotropy_Q21=length(Tangent_World_Q13)/length(Binormal_World_Q14);vec3 Binormal_World_N_Q16=normalize(Binormal_World_Q14);vec2 Face_Size_Q35;float ScaleY_Q35;Face_Size_Q35=vec2(length(Tangent_World_Q13),length(Binormal_World_Q14));ScaleY_Q35=Face_Size_Q35.y;float Out_Radius_Q38;float Out_Line_Width_Q38;Out_Radius_Q38=_Relative_To_Height_ ? _Radius_ : _Radius_/ScaleY_Q35;Out_Line_Width_Q38=_Relative_To_Height_ ? _Line_Width_ : _Line_Width_/ScaleY_Q35;float Show_Selection_Q31;Selection_Vertex_B31(Result_Q42,Result_Q43,Face_Center_Q30,Face_Size_Q35,Nrm_World_Q24,Tangent_World_N_Q15,Binormal_World_N_Q16,_Selection_Fuzz_,_Selected_,_Selected_Distance_,_Selected_Fade_Length_,vec3(0,0,-1),Show_Selection_Q31);float MaxAB_Q41=max(Show_Selection_Q31,Product_Q45);float Width_Q55;Proximity_Visibility_B55(Show_Selection_Q31,Result_Q42,Result_Q43,_Proximity_Far_Distance_,_Proximity_Near_Radius_,Face_Center_Q30,Nrm_World_Q24,Face_Size_Q35,Step_Q46,Width_Q55);vec3 New_P_Q32;vec2 New_UV_Q32;Move_Verts_B32(uv,Out_Radius_Q38,Anisotropy_Q21,Out_Line_Width_Q38,Width_Q55,New_P_Q32,New_UV_Q32);vec3 Pos_World_Q12;Object_To_World_Pos_B12(New_P_Q32,Pos_World_Q12);vec3 Out_Position_Q40;vec2 Out_UV_Q40;vec3 Blob_Info_Q40;vec2 Blob_Relative_UV_Q40;Blob_Vertex_B40(Pos_World_Q12,Nrm_World_Q24,Tangent_World_N_Q15,Binormal_World_N_Q16,Position_Q27,_Blob_Intensity_,Near_Size_Q27,_Blob_Far_Size_,_Blob_Near_Distance_,_Blob_Far_Distance_,color,uv,Face_Center_Q30,Face_Size_Q35,New_UV_Q32,_Blob_Fade_Length_,_Selection_Fade_,_Selection_Fade_Size_,Inner_Fade_Q27,Pulse_Q27,Fade_Q27,Blob_Enable_Q27,0.0,Out_Position_Q40,Out_UV_Q40,Blob_Info_Q40,Blob_Relative_UV_Q40);vec2 Rect_UV_Q36;vec2 Scale_XY_Q36;vec4 Rect_Parms_Q36;Round_Rect_Vertex_B36(New_UV_Q32,Tangent_World_Q13,Binormal_World_Q14,Out_Radius_Q38,Anisotropy_Q21,Blob_Relative_UV_Q40,Rect_UV_Q36,Scale_XY_Q36,Rect_Parms_Q36);vec4 Extra_Q33;float Distance_To_Face_Q33;float Distance_Fade1_Q33;float Distance_Fade2_Q33;Proximity_Vertex_B33(Result_Q42,Result_Q43,Face_Center_Q30,Pos_World_Q12,_Proximity_Far_Distance_,1.0,_Proximity_Anisotropy_,Nrm_World_Q24,Tangent_World_N_Q15,Binormal_World_N_Q16,Extra_Q33,Distance_To_Face_Q33,Distance_Fade1_Q33,Distance_Fade2_Q33);vec4 Vec4_Q37=vec4(MaxAB_Q41,Distance_Fade1_Q33,Distance_Fade2_Q33,Out_Radius_Q38);vec3 Position=Out_Position_Q40;vec3 Normal=Vec3_Q29;vec2 UV=Out_UV_Q40;vec3 Tangent=Blob_Info_Q40;vec3 Binormal=vec3(0,0,0);vec4 Color=vec4(1,1,1,1);vec4 Extra1=Rect_Parms_Q36;vec4 Extra2=Extra_Q33;vec4 Extra3=Vec4_Q37;gl_Position=viewProjection*vec4(Position,1);vNormal=Normal;vUV=UV;vTangent=Tangent;vExtra1=Extra1;vExtra2=Extra2;vExtra3=Extra3;}");
      var Ce = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3.SMOOTH_EDGES = true, e3._needNormals = true, e3._needUVs = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), Te = function(t2) {
        function e2(i2, o2) {
          var r2 = t2.call(this, i2, o2) || this;
          return r2.radius = 0.12, r2.lineWidth = 0.01, r2.relativeToHeight = false, r2._filterWidth = 1, r2.edgeColor = new d.Color4(0.53, 0.53, 0.53, 1), r2.blobEnable = true, r2.blobPosition = new d.Vector3(100, 100, 100), r2.blobIntensity = 0.5, r2.blobNearSize = 0.032, r2.blobFarSize = 0.048, r2.blobNearDistance = 8e-3, r2.blobFarDistance = 0.064, r2.blobFadeLength = 0.04, r2.blobInnerFade = 0.01, r2.blobPulse = 0, r2.blobFade = 1, r2.blobPulseMaxSize = 0.05, r2.blobEnable2 = true, r2.blobPosition2 = new d.Vector3(10, 10.1, -0.6), r2.blobNearSize2 = 8e-3, r2.blobInnerFade2 = 0.1, r2.blobPulse2 = 0, r2.blobFade2 = 1, r2.gazeIntensity = 0.8, r2.gazeFocus = 0, r2.selectionFuzz = 0.5, r2.selected = 1, r2.selectionFade = 0.2, r2.selectionFadeSize = 0, r2.selectedDistance = 0.08, r2.selectedFadeLength = 0.08, r2.proximityMaxIntensity = 0.45, r2.proximityFarDistance = 0.16, r2.proximityNearRadius = 0.016, r2.proximityAnisotropy = 1, r2.useGlobalLeftIndex = true, r2.useGlobalRightIndex = true, r2.fadeOut = 1, r2.alphaMode = d.Constants.ALPHA_ADD, r2.disableDepthWrite = true, r2.backFaceCulling = false, r2._blobTexture = new d.Texture(e2.BLOB_TEXTURE_URL, o2, true, false, d.Texture.NEAREST_SAMPLINGMODE), r2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return true;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new Ce());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, false, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "worldView", "worldViewProjection", "view", "projection", "viewProjection", "cameraPosition", "_Radius_", "_Line_Width_", "_Relative_To_Height_", "_Filter_Width_", "_Edge_Color_", "_Fade_Out_", "_Smooth_Edges_", "_Blob_Enable_", "_Blob_Position_", "_Blob_Intensity_", "_Blob_Near_Size_", "_Blob_Far_Size_", "_Blob_Near_Distance_", "_Blob_Far_Distance_", "_Blob_Fade_Length_", "_Blob_Inner_Fade_", "_Blob_Pulse_", "_Blob_Fade_", "_Blob_Pulse_Max_Size_", "_Blob_Enable_2_", "_Blob_Position_2_", "_Blob_Near_Size_2_", "_Blob_Inner_Fade_2_", "_Blob_Pulse_2_", "_Blob_Fade_2_", "_Gaze_Intensity_", "_Gaze_Focus_", "_Blob_Texture_", "_Selection_Fuzz_", "_Selected_", "_Selection_Fade_", "_Selection_Fade_Size_", "_Selected_Distance_", "_Selected_Fade_Length_", "_Proximity_Max_Intensity_", "_Proximity_Far_Distance_", "_Proximity_Near_Radius_", "_Proximity_Anisotropy_", "Global_Left_Index_Tip_Position", "Global_Right_Index_Tip_Position", "_Use_Global_Left_Index_", "_Use_Global_Right_Index_"], h2 = [], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("mrdlFrontplate", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          var o2 = this.getScene();
          if (i2.materialDefines) {
            var r2 = i2.effect;
            r2 && (this._activeEffect = r2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", o2.getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", o2.activeCamera.position), this._activeEffect.setFloat("_Radius_", this.radius), this._activeEffect.setFloat("_Line_Width_", this.lineWidth), this._activeEffect.setFloat("_Relative_To_Height_", this.relativeToHeight ? 1 : 0), this._activeEffect.setFloat("_Filter_Width_", this._filterWidth), this._activeEffect.setDirectColor4("_Edge_Color_", this.edgeColor), this._activeEffect.setFloat("_Fade_Out_", this.fadeOut), this._activeEffect.setFloat("_Blob_Enable_", this.blobEnable ? 1 : 0), this._activeEffect.setVector3("_Blob_Position_", this.blobPosition), this._activeEffect.setFloat("_Blob_Intensity_", this.blobIntensity), this._activeEffect.setFloat("_Blob_Near_Size_", this.blobNearSize), this._activeEffect.setFloat("_Blob_Far_Size_", this.blobFarSize), this._activeEffect.setFloat("_Blob_Near_Distance_", this.blobNearDistance), this._activeEffect.setFloat("_Blob_Far_Distance_", this.blobFarDistance), this._activeEffect.setFloat("_Blob_Fade_Length_", this.blobFadeLength), this._activeEffect.setFloat("_Blob_Inner_Fade_", this.blobInnerFade), this._activeEffect.setFloat("_Blob_Pulse_", this.blobPulse), this._activeEffect.setFloat("_Blob_Fade_", this.blobFade), this._activeEffect.setFloat("_Blob_Pulse_Max_Size_", this.blobPulseMaxSize), this._activeEffect.setFloat("_Blob_Enable_2_", this.blobEnable2 ? 1 : 0), this._activeEffect.setVector3("_Blob_Position_2_", this.blobPosition2), this._activeEffect.setFloat("_Blob_Near_Size_2_", this.blobNearSize2), this._activeEffect.setFloat("_Blob_Inner_Fade_2_", this.blobInnerFade2), this._activeEffect.setFloat("_Blob_Pulse_2_", this.blobPulse2), this._activeEffect.setFloat("_Blob_Fade_2_", this.blobFade2), this._activeEffect.setFloat("_Gaze_Intensity_", this.gazeIntensity), this._activeEffect.setFloat("_Gaze_Focus_", this.gazeFocus), this._activeEffect.setTexture("_Blob_Texture_", this._blobTexture), this._activeEffect.setFloat("_Selection_Fuzz_", this.selectionFuzz), this._activeEffect.setFloat("_Selected_", this.selected), this._activeEffect.setFloat("_Selection_Fade_", this.selectionFade), this._activeEffect.setFloat("_Selection_Fade_Size_", this.selectionFadeSize), this._activeEffect.setFloat("_Selected_Distance_", this.selectedDistance), this._activeEffect.setFloat("_Selected_Fade_Length_", this.selectedFadeLength), this._activeEffect.setFloat("_Proximity_Max_Intensity_", this.proximityMaxIntensity), this._activeEffect.setFloat("_Proximity_Far_Distance_", this.proximityFarDistance), this._activeEffect.setFloat("_Proximity_Near_Radius_", this.proximityNearRadius), this._activeEffect.setFloat("_Proximity_Anisotropy_", this.proximityAnisotropy), this._activeEffect.setFloat("_Use_Global_Left_Index_", this.useGlobalLeftIndex ? 1 : 0), this._activeEffect.setFloat("_Use_Global_Right_Index_", this.useGlobalRightIndex ? 1 : 0), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3);
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var t3 = d.SerializationHelper.Serialize(this);
          return t3.customType = "BABYLON.MRDLFrontplateMaterial", t3;
        }, e2.prototype.getClassName = function() {
          return "MRDLFrontplateMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, e2.BLOB_TEXTURE_URL = "", h([(0, d.serialize)()], e2.prototype, "radius", void 0), h([(0, d.serialize)()], e2.prototype, "lineWidth", void 0), h([(0, d.serialize)()], e2.prototype, "relativeToHeight", void 0), h([(0, d.serialize)()], e2.prototype, "edgeColor", void 0), h([(0, d.serialize)()], e2.prototype, "blobEnable", void 0), h([(0, d.serialize)()], e2.prototype, "blobPosition", void 0), h([(0, d.serialize)()], e2.prototype, "blobIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFarDistance", void 0), h([(0, d.serialize)()], e2.prototype, "blobFadeLength", void 0), h([(0, d.serialize)()], e2.prototype, "blobInnerFade", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulseMaxSize", void 0), h([(0, d.serialize)()], e2.prototype, "blobEnable2", void 0), h([(0, d.serialize)()], e2.prototype, "blobPosition2", void 0), h([(0, d.serialize)()], e2.prototype, "blobNearSize2", void 0), h([(0, d.serialize)()], e2.prototype, "blobInnerFade2", void 0), h([(0, d.serialize)()], e2.prototype, "blobPulse2", void 0), h([(0, d.serialize)()], e2.prototype, "blobFade2", void 0), h([(0, d.serialize)()], e2.prototype, "gazeIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "gazeFocus", void 0), h([(0, d.serialize)()], e2.prototype, "selectionFuzz", void 0), h([(0, d.serialize)()], e2.prototype, "selected", void 0), h([(0, d.serialize)()], e2.prototype, "selectionFade", void 0), h([(0, d.serialize)()], e2.prototype, "selectionFadeSize", void 0), h([(0, d.serialize)()], e2.prototype, "selectedDistance", void 0), h([(0, d.serialize)()], e2.prototype, "selectedFadeLength", void 0), h([(0, d.serialize)()], e2.prototype, "proximityMaxIntensity", void 0), h([(0, d.serialize)()], e2.prototype, "proximityFarDistance", void 0), h([(0, d.serialize)()], e2.prototype, "proximityNearRadius", void 0), h([(0, d.serialize)()], e2.prototype, "proximityAnisotropy", void 0), h([(0, d.serialize)()], e2.prototype, "useGlobalLeftIndex", void 0), h([(0, d.serialize)()], e2.prototype, "useGlobalRightIndex", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.MRDLFrontplateMaterial", Te);
      var Se = "mrdlInnerquadPixelShader";
      d.ShaderStore.ShadersStore[Se] || (d.ShaderStore.ShadersStore[Se] = "uniform vec3 cameraPosition;varying vec2 vUV;varying vec3 vTangent;uniform vec4 _Color_;uniform float _Radius_;uniform bool _Fixed_Radius_;uniform float _Filter_Width_;uniform float _Glow_Fraction_;uniform float _Glow_Max_;uniform float _Glow_Falloff_;float FilterStep_Bid194(float edge,float x,float filterWidth)\n{float dx=max(1.0E-5,fwidth(x)*filterWidth);return max((x+dx*0.5-max(edge,x-dx*0.5))/dx,0.0);}\nvoid Round_Rect_B194(\nfloat Size_X,\nfloat Size_Y,\nfloat Radius,\nvec4 Rect_Color,\nfloat Filter_Width,\nvec2 UV,\nfloat Glow_Fraction,\nfloat Glow_Max,\nfloat Glow_Falloff,\nout vec4 Color)\n{vec2 halfSize=vec2(Size_X,Size_Y)*0.5;vec2 r=max(min(vec2(Radius,Radius),halfSize),vec2(0.01,0.01));vec2 v=abs(UV);vec2 nearestp=min(v,halfSize-r);vec2 delta=(v-nearestp)/max(vec2(0.01,0.01),r);float Distance=length(delta);float insideRect=1.0-FilterStep_Bid194(1.0-Glow_Fraction,Distance,Filter_Width);float glow=clamp((1.0-Distance)/Glow_Fraction,0.0,1.0);glow=pow(glow,Glow_Falloff);Color=Rect_Color*max(insideRect,glow*Glow_Max);}\nvoid main()\n{float X_Q192;float Y_Q192;float Z_Q192;X_Q192=vTangent.x;Y_Q192=vTangent.y;Z_Q192=vTangent.z;vec4 Color_Q194;Round_Rect_B194(X_Q192,1.0,Y_Q192,_Color_,_Filter_Width_,vUV,_Glow_Fraction_,_Glow_Max_,_Glow_Falloff_,Color_Q194);vec4 Out_Color=Color_Q194;float Clip_Threshold=0.0;gl_FragColor=Out_Color;}\n");
      var Oe = "mrdlInnerquadVertexShader";
      d.ShaderStore.ShadersStore[Oe] || (d.ShaderStore.ShadersStore[Oe] = "uniform mat4 world;uniform mat4 viewProjection;uniform vec3 cameraPosition;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;attribute vec3 tangent;attribute vec4 color;uniform vec4 _Color_;uniform float _Radius_;uniform bool _Fixed_Radius_;uniform float _Filter_Width_;uniform float _Glow_Fraction_;uniform float _Glow_Max_;uniform float _Glow_Falloff_;varying vec2 vUV;varying vec3 vTangent;void main()\n{vec3 Pos_World_Q189;Pos_World_Q189=(world*vec4(position,1.0)).xyz;vec3 Dir_World_Q190;Dir_World_Q190=(world*vec4(tangent,0.0)).xyz;vec3 Dir_World_Q191;Dir_World_Q191=(world*vec4((cross(normal,tangent)),0.0)).xyz;float Length_Q180=length(Dir_World_Q190);float Length_Q181=length(Dir_World_Q191);float Quotient_Q184=Length_Q180/Length_Q181;float Quotient_Q195=_Radius_/Length_Q181;vec2 Result_Q193;Result_Q193=vec2((uv.x-0.5)*Length_Q180/Length_Q181,(uv.y-0.5));float Result_Q198=_Fixed_Radius_ ? Quotient_Q195 : _Radius_;vec3 Vec3_Q183=vec3(Quotient_Q184,Result_Q198,0);vec3 Position=Pos_World_Q189;vec3 Normal=vec3(0,0,0);vec2 UV=Result_Q193;vec3 Tangent=Vec3_Q183;vec3 Binormal=vec3(0,0,0);vec4 Color=color;gl_Position=viewProjection*vec4(Position,1);vUV=UV;vTangent=Tangent;}\n");
      var Re = function(t2) {
        function e2() {
          var e3 = t2.call(this) || this;
          return e3._needNormals = true, e3._needUVs = true, e3.rebuild(), e3;
        }
        return l(e2, t2), e2;
      }(d.MaterialDefines), we = function(t2) {
        function e2(e3, i2) {
          var o2 = t2.call(this, e3, i2) || this;
          return o2.color = new d.Color4(1, 1, 1, 0.05), o2.radius = 0.12, o2.fixedRadius = true, o2._filterWidth = 1, o2.glowFraction = 0, o2.glowMax = 0.5, o2.glowFalloff = 2, o2.alphaMode = d.Constants.ALPHA_COMBINE, o2.backFaceCulling = false, o2;
        }
        return l(e2, t2), e2.prototype.needAlphaBlending = function() {
          return true;
        }, e2.prototype.needAlphaTesting = function() {
          return false;
        }, e2.prototype.getAlphaTestTexture = function() {
          return null;
        }, e2.prototype.isReadyForSubMesh = function(t3, e3) {
          var i2 = e3._drawWrapper;
          if (this.isFrozen && i2.effect && i2._wasPreviouslyReady) return true;
          e3.materialDefines || (e3.materialDefines = new Re());
          var o2 = e3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(e3)) return true;
          var n2 = r2.getEngine();
          if ((0, d.PrepareDefinesForAttributes)(t3, o2, true, false), o2.isDirty) {
            o2.markAsProcessed(), r2.resetCachedMaterial();
            var a2 = new d.EffectFallbacks();
            o2.FOG && a2.addFallback(1, "FOG"), (0, d.HandleFallbacksForShadows)(o2, a2), o2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess;
            var s2 = [d.VertexBuffer.PositionKind];
            o2.NORMAL && s2.push(d.VertexBuffer.NormalKind), o2.UV1 && s2.push(d.VertexBuffer.UVKind), o2.UV2 && s2.push(d.VertexBuffer.UV2Kind), o2.VERTEXCOLOR && s2.push(d.VertexBuffer.ColorKind), o2.TANGENT && s2.push(d.VertexBuffer.TangentKind), (0, d.PrepareAttributesForInstances)(s2, o2);
            var l2 = o2.toString(), _2 = ["world", "worldView", "worldViewProjection", "view", "projection", "viewProjection", "cameraPosition", "_Color_", "_Radius_", "_Fixed_Radius_", "_Filter_Width_", "_Glow_Fraction_", "_Glow_Max_", "_Glow_Falloff_"], h2 = [], c2 = [];
            (0, d.PrepareUniformsAndSamplersList)({ uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: o2, maxSimultaneousLights: 4 }), e3.setEffect(r2.getEngine().createEffect("mrdlInnerquad", { attributes: s2, uniformsNames: _2, uniformBuffersNames: c2, samplers: h2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, n2), o2);
          }
          return !(!e3.effect || !e3.effect.isReady() || (o2._renderId = r2.getRenderId(), i2._wasPreviouslyReady = true, 0));
        }, e2.prototype.bindForSubMesh = function(t3, e3, i2) {
          var o2 = this.getScene();
          if (i2.materialDefines) {
            var r2 = i2.effect;
            r2 && (this._activeEffect = r2, this.bindOnlyWorldMatrix(t3), this._activeEffect.setMatrix("viewProjection", o2.getTransformMatrix()), this._activeEffect.setVector3("cameraPosition", o2.activeCamera.position), this._activeEffect.setDirectColor4("_Color_", this.color), this._activeEffect.setFloat("_Radius_", this.radius), this._activeEffect.setFloat("_Fixed_Radius_", this.fixedRadius ? 1 : 0), this._activeEffect.setFloat("_Filter_Width_", this._filterWidth), this._activeEffect.setFloat("_Glow_Fraction_", this.glowFraction), this._activeEffect.setFloat("_Glow_Max_", this.glowMax), this._activeEffect.setFloat("_Glow_Falloff_", this.glowFalloff), this._afterBind(e3, this._activeEffect, i2));
          }
        }, e2.prototype.getAnimatables = function() {
          return [];
        }, e2.prototype.dispose = function(e3) {
          t2.prototype.dispose.call(this, e3);
        }, e2.prototype.clone = function(t3) {
          var i2 = this;
          return d.SerializationHelper.Clone(function() {
            return new e2(t3, i2.getScene());
          }, this);
        }, e2.prototype.serialize = function() {
          var t3 = d.SerializationHelper.Serialize(this);
          return t3.customType = "BABYLON.MRDLInnerquadMaterial", t3;
        }, e2.prototype.getClassName = function() {
          return "MRDLInnerquadMaterial";
        }, e2.Parse = function(t3, i2, o2) {
          return d.SerializationHelper.Parse(function() {
            return new e2(t3.name, i2);
          }, t3, i2, o2);
        }, h([(0, d.serialize)()], e2.prototype, "color", void 0), h([(0, d.serialize)()], e2.prototype, "radius", void 0), h([(0, d.serialize)()], e2.prototype, "fixedRadius", void 0), h([(0, d.serialize)()], e2.prototype, "glowFraction", void 0), h([(0, d.serialize)()], e2.prototype, "glowMax", void 0), h([(0, d.serialize)()], e2.prototype, "glowFalloff", void 0), e2;
      }(d.PushMaterial);
      (0, d.RegisterClass)("BABYLON.GUI.MRDLInnerquadMaterial", we);
      var Me = function(t2) {
        function e2(e3, i2) {
          void 0 === i2 && (i2 = true);
          var o2 = t2.call(this, e3) || this;
          return o2.width = 1, o2.height = 1, o2.radius = 0.14, o2.textSizeInPixels = 18, o2.imageSizeInPixels = 40, o2.plateMaterialColor = new d.Color3(0.4, 0.4, 0.4), o2.frontPlateDepth = 0.2, o2.backPlateDepth = 0.04, o2.backGlowOffset = 0.1, o2.flatPlaneDepth = 1e-3, o2.innerQuadRadius = o2.radius - 0.04, o2.innerQuadColor = new d.Color4(0, 0, 0, 0), o2.innerQuadToggledColor = new d.Color4(0.5197843, 0.6485234, 0.9607843, 0.6), o2.innerQuadHoverColor = new d.Color4(1, 1, 1, 0.05), o2.innerQuadToggledHoverColor = new d.Color4(0.5197843, 0.6485234, 0.9607843, 1), o2._isBackplateVisible = true, o2._shareMaterials = true, o2._shareMaterials = i2, o2.pointerEnterAnimation = function() {
            o2._frontPlate && o2._textPlate && !o2.isToggleButton && o2._performEnterExitAnimation(1), o2.isToggleButton && o2._innerQuadMaterial && (o2.isToggled ? o2._innerQuadMaterial.color = o2.innerQuadToggledHoverColor : o2._innerQuadMaterial.color = o2.innerQuadHoverColor);
          }, o2.pointerOutAnimation = function() {
            o2._frontPlate && o2._textPlate && !o2.isToggleButton && o2._performEnterExitAnimation(-0.8), o2.isToggleButton && o2._innerQuadMaterial && o2._onToggle(o2.isToggled);
          }, o2.pointerDownAnimation = function() {
          }, o2.pointerUpAnimation = function() {
          }, o2._pointerClickObserver = o2.onPointerClickObservable.add(function() {
            o2._frontPlate && o2._backGlow && !o2.isActiveNearInteraction && o2._performClickAnimation(), o2.isToggleButton && o2._innerQuadMaterial && o2._onToggle(o2.isToggled);
          }), o2._pointerEnterObserver = o2.onPointerEnterObservable.add(function() {
            o2.pointerEnterAnimation();
          }), o2._pointerOutObserver = o2.onPointerOutObservable.add(function() {
            o2.pointerOutAnimation();
          }), o2._toggleObserver = o2.onToggleObservable.add(function(t3) {
            o2._innerQuadMaterial.color = t3 ? o2.innerQuadToggledColor : o2.innerQuadColor;
          }), o2;
        }
        return l(e2, t2), e2.prototype._disposeTooltip = function() {
          this._tooltipFade = null, this._tooltipTextBlock && this._tooltipTextBlock.dispose(), this._tooltipTexture && this._tooltipTexture.dispose(), this._tooltipMesh && this._tooltipMesh.dispose(), this.onPointerEnterObservable.remove(this._tooltipHoverObserver), this.onPointerOutObservable.remove(this._tooltipOutObserver);
        }, Object.defineProperty(e2.prototype, "renderingGroupId", { get: function() {
          return this._backPlate.renderingGroupId;
        }, set: function(t3) {
          this._backPlate.renderingGroupId = t3, this._textPlate.renderingGroupId = t3, this._frontPlate.renderingGroupId = t3, this._backGlow.renderingGroupId = t3, this._innerQuad.renderingGroupId = t3, this._tooltipMesh && (this._tooltipMesh.renderingGroupId = t3);
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "mesh", { get: function() {
          return this._backPlate;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "tooltipText", { get: function() {
          var t3;
          return (null === (t3 = this._tooltipTextBlock) || void 0 === t3 ? void 0 : t3.text) || null;
        }, set: function(t3) {
          var e3 = this;
          if (t3) {
            if (!this._tooltipFade) {
              var i2 = this._backPlate._scene.useRightHandedSystem;
              this._tooltipMesh = (0, d.CreatePlane)("", { size: 1 }, this._backPlate._scene), this._tooltipMesh.position = d.Vector3.Down().scale(0.7).add(d.Vector3.Forward(i2).scale(-0.15)), this._tooltipMesh.isPickable = false, this._tooltipMesh.parent = this._frontPlateCollisionMesh, this._tooltipTexture = ct.CreateForMesh(this._tooltipMesh);
              var o2 = new T();
              o2.height = 0.25, o2.width = 0.8, o2.cornerRadius = 25, o2.color = "#ffffff", o2.thickness = 20, o2.background = "#060668", this._tooltipTexture.addControl(o2), this._tooltipTextBlock = new S(), this._tooltipTextBlock.color = "white", this._tooltipTextBlock.fontSize = 100, this._tooltipTexture.addControl(this._tooltipTextBlock), this._tooltipFade = new d.FadeInOutBehavior(), this._tooltipFade.delay = 500, this._tooltipMesh.addBehavior(this._tooltipFade), this._tooltipHoverObserver = this.onPointerEnterObservable.add(function() {
                e3._tooltipFade && e3._tooltipFade.fadeIn(true);
              }), this._tooltipOutObserver = this.onPointerOutObservable.add(function() {
                e3._tooltipFade && e3._tooltipFade.fadeIn(false);
              });
            }
            this._tooltipTextBlock && (this._tooltipTextBlock.text = t3);
          } else this._disposeTooltip();
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "text", { get: function() {
          return this._text;
        }, set: function(t3) {
          this._text !== t3 && (this._text = t3, this._rebuildContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "subtext", { get: function() {
          return this._subtext;
        }, set: function(t3) {
          this._subtext !== t3 && (this._subtext = t3, this._rebuildContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "imageUrl", { get: function() {
          return this._imageUrl;
        }, set: function(t3) {
          this._imageUrl !== t3 && (this._imageUrl = t3, this._rebuildContent());
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backMaterial", { get: function() {
          return this._backMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "frontMaterial", { get: function() {
          return this._frontMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "backGlowMaterial", { get: function() {
          return this._backGlowMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "innerQuadMaterial", { get: function() {
          return this._innerQuadMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "plateMaterial", { get: function() {
          return this._plateMaterial;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "shareMaterials", { get: function() {
          return this._shareMaterials;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "isBackplateVisible", { set: function(t3) {
          this.mesh && this._backMaterial && (t3 && !this._isBackplateVisible ? this._backPlate.visibility = 1 : !t3 && this._isBackplateVisible && (this._backPlate.visibility = 0)), this._isBackplateVisible = t3;
        }, enumerable: false, configurable: true }), e2.prototype._getTypeName = function() {
          return "TouchHolographicButton";
        }, e2.prototype._rebuildContent = function() {
          var t3;
          t3 = this._getAspectRatio() <= 1 ? this._alignContentVertically() : this._alignContentHorizontally(), this.content = t3;
        }, e2.prototype._getAspectRatio = function() {
          return this.width / this.height;
        }, e2.prototype._alignContentVertically = function() {
          var t3 = new w();
          if (t3.isVertical = true, (0, d.IsDocumentAvailable)() && document.createElement && this._imageUrl) {
            var e3 = new O();
            e3.source = this._imageUrl, e3.heightInPixels = 180, e3.widthInPixels = 100, e3.paddingTopInPixels = 40, e3.paddingBottomInPixels = 40, t3.addControl(e3);
          }
          if (this._text) {
            var i2 = new S();
            i2.text = this._text, i2.color = "white", i2.heightInPixels = 30, i2.fontSize = 24, t3.addControl(i2);
          }
          return t3;
        }, e2.prototype._alignContentHorizontally = function() {
          var t3 = 240, e3 = 15, i2 = new T();
          i2.widthInPixels = t3, i2.heightInPixels = t3, i2.color = "transparent", i2.setPaddingInPixels(e3, e3, e3, e3), t3 -= 30;
          var o2 = new w();
          if (o2.isVertical = false, o2.scaleY = this._getAspectRatio(), (0, d.IsDocumentAvailable)() && document.createElement && this._imageUrl) {
            var r2 = new T("".concat(this.name, "_image"));
            r2.widthInPixels = this.imageSizeInPixels, r2.heightInPixels = this.imageSizeInPixels, r2.color = "transparent", t3 -= this.imageSizeInPixels;
            var n2 = new O();
            n2.source = this._imageUrl, r2.addControl(n2), o2.addControl(r2);
          }
          if (this._text) {
            var a2 = new S("".concat(this.name, "_text"));
            if (a2.text = this._text, a2.color = "white", a2.fontSize = this.textSizeInPixels, a2.widthInPixels = t3, this._imageUrl && (a2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, a2.paddingLeftInPixels = e3), this._subtext) {
              var s2 = new D();
              s2.addColumnDefinition(1), s2.addRowDefinition(0.5), s2.addRowDefinition(0.5), s2.widthInPixels = t3, s2.heightInPixels = 45;
              var l2 = new S("".concat(this.name, "_subtext"));
              l2.text = this._subtext, l2.color = "#EEEEEEAB", l2.fontSize = 0.75 * this.textSizeInPixels, l2.fontWeight = "600", this._imageUrl && (l2.textHorizontalAlignment = I.HORIZONTAL_ALIGNMENT_LEFT, l2.paddingLeftInPixels = e3), s2.addControl(a2, 0), s2.addControl(l2, 1), o2.addControl(s2);
            } else o2.addControl(a2);
          }
          return i2.addControl(o2), i2;
        }, e2.prototype._createNode = function(e3) {
          var i2;
          this.name = null !== (i2 = this.name) && void 0 !== i2 ? i2 : "TouchHolographicButton";
          var o2 = this._createBackPlate(e3), r2 = this._createFrontPlate(e3), n2 = this._createInnerQuad(e3), a2 = this._createBackGlow(e3);
          this._frontPlateCollisionMesh = r2, this._textPlate = t2.prototype._createNode.call(this, e3), this._textPlate.name = "".concat(this.name, "_textPlate"), this._textPlate.isPickable = false, this._textPlate.scaling.x = this.width, this._textPlate.parent = r2, this._backPlate = o2, this._backPlate.position = d.Vector3.Forward(e3.useRightHandedSystem).scale(this.backPlateDepth / 2), this._backPlate.isPickable = false, this._backPlate.addChild(r2), this._backPlate.addChild(n2), a2 && this._backPlate.addChild(a2);
          var s2 = new d.TransformNode("".concat(this.name, "_root"), e3);
          return this._backPlate.setParent(s2), this.collisionMesh = r2, this.collidableFrontDirection = this._backPlate.forward.negate(), s2;
        }, e2.prototype._createBackPlate = function(t3) {
          var i2 = this, o2 = (0, d.CreateBox)("".concat(this.name, "_backPlate"), {}, t3);
          o2.isPickable = false, o2.visibility = 0, o2.scaling.z = 0.2;
          var r2 = d.Tools.GetAssetUrl(e2.MRTK_ASSET_BASE_URL);
          return d.SceneLoader.ImportMeshAsync(void 0, r2, e2.BACKPLATE_MODEL_FILENAME, t3).then(function(t4) {
            var e3 = t4.meshes[1];
            e3.visibility = 0, i2._isBackplateVisible && (e3.visibility = 1, e3.name = "".concat(i2.name, "_backPlate"), e3.isPickable = false, e3.scaling.x = i2.width, e3.scaling.y = i2.height, e3.parent = o2), i2._backMaterial && (e3.material = i2._backMaterial), i2._backPlate = e3;
          }), o2;
        }, e2.prototype._createFrontPlate = function(t3) {
          var i2 = this, o2 = (0, d.CreateBox)("".concat(this.name, "_frontPlate"), { width: this.width, height: this.height, depth: this.frontPlateDepth }, t3);
          o2.isPickable = true, o2.isNearPickable = true, o2.visibility = 0, o2.position = d.Vector3.Forward(t3.useRightHandedSystem).scale((this.backPlateDepth - this.frontPlateDepth) / 2);
          var r2 = d.Tools.GetAssetUrl(e2.MRTK_ASSET_BASE_URL);
          return d.SceneLoader.ImportMeshAsync(void 0, r2, e2.FRONTPLATE_MODEL_FILENAME, t3).then(function(e3) {
            var r3 = (0, d.CreateBox)("".concat(i2.name, "_collisionPlate"), { width: i2.width, height: i2.height }, t3);
            r3.isPickable = false, r3.scaling.z = i2.frontPlateDepth, r3.visibility = 0, r3.parent = o2, i2._collisionPlate = r3;
            var n2 = e3.meshes[1];
            n2.name = "".concat(i2.name, "_frontPlate"), n2.isPickable = false, n2.scaling.x = i2.width - i2.backGlowOffset, n2.scaling.y = i2.height - i2.backGlowOffset, n2.position = d.Vector3.Forward(t3.useRightHandedSystem).scale(-0.5), n2.parent = r3, i2.isToggleButton && (n2.visibility = 0), i2._frontMaterial && (n2.material = i2._frontMaterial), i2._textPlate.scaling.x = 1, i2._textPlate.parent = n2, i2._frontPlate = n2;
          }), o2;
        }, e2.prototype._createInnerQuad = function(t3) {
          var i2 = this, o2 = (0, d.CreateBox)("".concat(this.name, "_innerQuad"), {}, t3);
          o2.isPickable = false, o2.visibility = 0, o2.scaling.z = this.flatPlaneDepth, o2.position.z += this.backPlateDepth / 2 - this.flatPlaneDepth;
          var r2 = d.Tools.GetAssetUrl(e2.MRTK_ASSET_BASE_URL);
          return d.SceneLoader.ImportMeshAsync(void 0, r2, e2.INNERQUAD_MODEL_FILENAME, t3).then(function(t4) {
            var e3 = t4.meshes[1];
            e3.name = "".concat(i2.name, "_innerQuad"), e3.isPickable = false, e3.scaling.x = i2.width - i2.backGlowOffset, e3.scaling.y = i2.height - i2.backGlowOffset, e3.parent = o2, i2._innerQuadMaterial && (e3.material = i2._innerQuadMaterial), i2._innerQuad = e3;
          }), o2;
        }, e2.prototype._createBackGlow = function(t3) {
          var i2 = this;
          if (!this.isToggleButton) {
            var o2 = (0, d.CreateBox)("".concat(this.name, "_backGlow"), {}, t3);
            o2.isPickable = false, o2.visibility = 0, o2.scaling.z = this.flatPlaneDepth, o2.position.z += this.backPlateDepth / 2 - 2 * this.flatPlaneDepth;
            var r2 = d.Tools.GetAssetUrl(e2.MRTK_ASSET_BASE_URL);
            return d.SceneLoader.ImportMeshAsync(void 0, r2, e2.BACKGLOW_MODEL_FILENAME, t3).then(function(t4) {
              var e3 = t4.meshes[1];
              e3.name = "".concat(i2.name, "_backGlow"), e3.isPickable = false, e3.scaling.x = i2.width - i2.backGlowOffset, e3.scaling.y = i2.height - i2.backGlowOffset, e3.parent = o2, i2._backGlowMaterial && (e3.material = i2._backGlowMaterial), i2._backGlow = e3;
            }), o2;
          }
        }, e2.prototype._applyFacade = function(t3) {
          this._plateMaterial.emissiveTexture = t3, this._plateMaterial.opacityTexture = t3, this._plateMaterial.diffuseColor = this.plateMaterialColor;
        }, e2.prototype._performClickAnimation = function() {
          for (var t3 = new d.AnimationGroup("Click Animation Group"), e3 = 0, i2 = [{ name: "backGlowMotion", mesh: this._backGlow, property: "material.motion", keys: [{ frame: 0, values: [0, 0, 0] }, { frame: 20, values: [1, 0.0144, 0.0144] }, { frame: 40, values: [0.0027713229489760476, 0, 0] }, { frame: 45, values: [0.0027713229489760476] }] }, { name: "_collisionPlateZSlide", mesh: this._collisionPlate, property: "position.z", keys: [{ frame: 0, values: [0, 0, 0] }, { frame: 20, values: [d.Vector3.Forward(this._collisionPlate._scene.useRightHandedSystem).scale(this.frontPlateDepth / 2).z, 0, 0] }, { frame: 40, values: [0, 0.005403332496794331] }, { frame: 45, values: [0] }] }, { name: "_collisionPlateZScale", mesh: this._collisionPlate, property: "scaling.z", keys: [{ frame: 0, values: [this.frontPlateDepth, 0, 0] }, { frame: 20, values: [this.backPlateDepth, 0, 0] }, { frame: 40, values: [this.frontPlateDepth, 54e-4] }, { frame: 45, values: [this.frontPlateDepth] }] }]; e3 < i2.length; e3++) {
            for (var o2 = i2[e3], r2 = new d.Animation(o2.name, o2.property, 60, d.Animation.ANIMATIONTYPE_FLOAT, d.Animation.ANIMATIONLOOPMODE_CYCLE), n2 = [], a2 = 0, s2 = o2.keys; a2 < s2.length; a2++) {
              var l2 = s2[a2];
              n2.push({ frame: l2.frame, value: l2.values[0], inTangent: l2.values[1], outTangent: l2.values[2], interpolation: l2.values[3] });
            }
            r2.setKeys(n2), o2.mesh && t3.addTargetedAnimation(r2, o2.mesh);
          }
          t3.normalize(0, 45), t3.speedRatio = 1, t3.play();
        }, e2.prototype._performEnterExitAnimation = function(t3) {
          for (var e3 = new d.AnimationGroup("Enter Exit Animation Group"), i2 = 0, o2 = [{ name: "frontPlateFadeOut", mesh: this._frontPlate, property: "material.fadeOut", keys: [{ frame: 0, values: [0, 0, 0.025045314830017686, 0] }, { frame: 40, values: [1.00205599570012, 0.025045314830017686, 0, 0] }] }, { name: "textPlateZSlide", mesh: this._textPlate, property: "position.z", keys: [{ frame: 0, values: [0, 0, 0] }, { frame: 40, values: [d.Vector3.Forward(this._textPlate._scene.useRightHandedSystem).scale(-0.15).z, 0, 0] }] }]; i2 < o2.length; i2++) {
            for (var r2 = o2[i2], n2 = new d.Animation(r2.name, r2.property, 60, d.Animation.ANIMATIONTYPE_FLOAT, d.Animation.ANIMATIONLOOPMODE_CYCLE), a2 = [], s2 = 0, l2 = r2.keys; s2 < l2.length; s2++) {
              var _2 = l2[s2];
              a2.push({ frame: _2.frame, value: _2.values[0], inTangent: _2.values[1], outTangent: _2.values[2], interpolation: _2.values[3] });
            }
            n2.setKeys(a2), r2.mesh && e3.addTargetedAnimation(n2, r2.mesh);
          }
          e3.normalize(0, 45), e3.speedRatio = t3, e3.play();
        }, e2.prototype._createBackMaterial = function(t3) {
          var e3;
          this._backMaterial = null !== (e3 = this._backMaterial) && void 0 !== e3 ? e3 : new fe(this.name + "backPlateMaterial", t3.getScene()), this._backMaterial.absoluteSizes = true, this._backMaterial.radius = this.radius, this._backMaterial.lineWidth = 0.02;
        }, e2.prototype._createFrontMaterial = function(t3) {
          var e3;
          this._frontMaterial = null !== (e3 = this._frontMaterial) && void 0 !== e3 ? e3 : new Te(this.name + "Front Material", t3.getScene()), this.frontMaterial.radius = this.innerQuadRadius, this.frontMaterial.fadeOut = 0;
        }, e2.prototype._createBackGlowMaterial = function(t3) {
          var e3, i2 = this.radius + 0.04;
          this._backGlowMaterial = null !== (e3 = this._backGlowMaterial) && void 0 !== e3 ? e3 : new Pe(this.name + "Back Glow Material", t3.getScene()), this._backGlowMaterial.bevelRadius = i2, this._backGlowMaterial.lineWidth = i2, this._backGlowMaterial.motion = 0;
        }, e2.prototype._createInnerQuadMaterial = function(t3) {
          var e3;
          this._innerQuadMaterial = null !== (e3 = this._innerQuadMaterial) && void 0 !== e3 ? e3 : new we("inner_quad", t3.getScene()), this._innerQuadMaterial.radius = this.innerQuadRadius, this.isToggleButton && (this._innerQuadMaterial.color = this.innerQuadColor);
        }, e2.prototype._createPlateMaterial = function(t3) {
          var e3;
          this._plateMaterial = null !== (e3 = this._plateMaterial) && void 0 !== e3 ? e3 : new d.StandardMaterial(this.name + "Plate Material", t3.getScene()), this._plateMaterial.specularColor = d.Color3.Black();
        }, e2.prototype._onToggle = function(e3) {
          t2.prototype._onToggle.call(this, e3);
        }, e2.prototype._affectMaterial = function(t3) {
          this._shareMaterials ? (this._host._touchSharedMaterials.mrdlBackplateMaterial ? this._backMaterial = this._host._touchSharedMaterials.mrdlBackplateMaterial : (this._createBackMaterial(t3), this._host._touchSharedMaterials.mrdlBackplateMaterial = this._backMaterial), this._host._touchSharedMaterials.mrdlFrontplateMaterial ? this._frontMaterial = this._host._touchSharedMaterials.mrdlFrontplateMaterial : (this._createFrontMaterial(t3), this._host._touchSharedMaterials.mrdlFrontplateMaterial = this._frontMaterial), this._host._touchSharedMaterials.mrdlBackglowMaterial ? this._backGlowMaterial = this._host._touchSharedMaterials.mrdlBackglowMaterial : (this._createBackGlowMaterial(t3), this._host._touchSharedMaterials.mrdlBackglowMaterial = this._backGlowMaterial), this._host._touchSharedMaterials.mrdlInnerQuadMaterial ? this._innerQuadMaterial = this._host._touchSharedMaterials.mrdlInnerQuadMaterial : (this._createInnerQuadMaterial(t3), this._host._touchSharedMaterials.mrdlInnerQuadMaterial = this._innerQuadMaterial)) : (this._createBackMaterial(t3), this._createFrontMaterial(t3), this._createBackGlowMaterial(t3), this._createInnerQuadMaterial(t3)), this._createPlateMaterial(t3), this._backPlate.material = this._backMaterial, this._textPlate.material = this._plateMaterial, this._isBackplateVisible || (this._backPlate.visibility = 0), this._frontPlate && (this._frontPlate.material = this._frontMaterial), this._backGlow && (this._backGlow.material = this._backGlowMaterial), this._innerQuad && (this._innerQuad.material = this._innerQuadMaterial), this._rebuildContent();
        }, e2.prototype.dispose = function() {
          t2.prototype.dispose.call(this), this._disposeTooltip(), this.onPointerClickObservable.remove(this._pointerClickObserver), this.onPointerEnterObservable.remove(this._pointerEnterObserver), this.onPointerOutObservable.remove(this._pointerOutObserver), this.onToggleObservable.remove(this._toggleObserver), this.shareMaterials || (this._backMaterial.dispose(), this._frontMaterial.dispose(), this._plateMaterial.dispose(), this._backGlowMaterial.dispose(), this._innerQuadMaterial.dispose(), this._pickedPointObserver && (this._host.onPickedPointChangedObservable.remove(this._pickedPointObserver), this._pickedPointObserver = null));
        }, e2.MRTK_ASSET_BASE_URL = "https://assets.babylonjs.com/core/MRTK/", e2.FRONTPLATE_MODEL_FILENAME = "mrtk-fluent-frontplate.glb", e2.BACKPLATE_MODEL_FILENAME = "mrtk-fluent-backplate.glb", e2.BACKGLOW_MODEL_FILENAME = "mrtk-fluent-button.glb", e2.INNERQUAD_MODEL_FILENAME = "SlateProximity.glb", e2;
      }(Vt), Ee = function() {
        function t2(t3) {
          var e2 = this;
          this._customControlScaling = 1, this._lastControlOver = {}, this._lastControlDown = {}, this.onPickedPointChangedObservable = new d.Observable(), this.onPickingObservable = new d.Observable(), this._sharedMaterials = {}, this._touchSharedMaterials = {}, this._scene = t3 || d.EngineStore.LastCreatedScene, this._sceneDisposeObserver = this._scene.onDisposeObservable.add(function() {
            e2._sceneDisposeObserver = null, e2._utilityLayer = null, e2.dispose();
          }), this._utilityLayer = d.UtilityLayerRenderer._CreateDefaultUtilityLayerFromScene(this._scene), this._utilityLayer.onlyCheckPointerDownEvents = false, this._utilityLayer.pickUtilitySceneFirst = false, this._utilityLayer.mainSceneTrackerPredicate = function(t4) {
            var e3, i3, o2;
            return t4 && (null === (o2 = null === (i3 = null === (e3 = t4.reservedDataStore) || void 0 === e3 ? void 0 : e3.GUI3D) || void 0 === i3 ? void 0 : i3.control) || void 0 === o2 ? void 0 : o2._node);
          }, this._rootContainer = new Pt("RootContainer"), this._rootContainer._host = this;
          var i2 = this._utilityLayer.utilityLayerScene;
          this._pointerOutObserver = this._utilityLayer.onPointerOutObservable.add(function(t4) {
            e2._handlePointerOut(t4, true);
          }), this._pointerObserver = i2.onPointerObservable.add(function(t4) {
            e2._doPicking(t4);
          }), this._utilityLayer.utilityLayerScene.autoClear = false, this._utilityLayer.utilityLayerScene.autoClearDepthAndStencil = false, new d.HemisphericLight("hemi", d.Vector3.Up(), this._utilityLayer.utilityLayerScene);
        }
        return Object.defineProperty(t2.prototype, "scene", { get: function() {
          return this._scene;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "utilityLayer", { get: function() {
          return this._utilityLayer;
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "controlScaling", { get: function() {
          return this._customControlScaling;
        }, set: function(t3) {
          if (this._customControlScaling !== t3 && t3 > 0) {
            var e2 = t3 / this._customControlScaling;
            this._customControlScaling = t3;
            for (var i2 = 0, o2 = this._rootContainer.children; i2 < o2.length; i2++) {
              var r2 = o2[i2];
              r2.scaling.scaleInPlace(e2), 1 !== t3 && (r2._isScaledByManager = true);
            }
          }
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "useRealisticScaling", { get: function() {
          return this.controlScaling === t2.MRTK_REALISTIC_SCALING;
        }, set: function(e2) {
          this.controlScaling = e2 ? t2.MRTK_REALISTIC_SCALING : 1;
        }, enumerable: false, configurable: true }), t2.prototype._handlePointerOut = function(t3, e2) {
          var i2 = this._lastControlOver[t3];
          i2 && (i2._onPointerOut(i2), delete this._lastControlOver[t3]), e2 && this._lastControlDown[t3] && (this._lastControlDown[t3].forcePointerUp(), delete this._lastControlDown[t3]), this.onPickedPointChangedObservable.notifyObservers(null);
        }, t2.prototype._doPicking = function(t3) {
          var e2, i2, o2;
          if (!this._utilityLayer || !this._utilityLayer.shouldRender || !this._utilityLayer.utilityLayerScene.activeCamera) return false;
          var r2 = t3.event, n2 = r2.pointerId || 0, a2 = r2.button, s2 = t3.pickInfo;
          if (s2 && this.onPickingObservable.notifyObservers(s2.pickedMesh), !s2 || !s2.hit) return this._handlePointerOut(n2, t3.type === d.PointerEventTypes.POINTERUP), false;
          s2.pickedPoint && this.onPickedPointChangedObservable.notifyObservers(s2.pickedPoint);
          var l2 = null === (i2 = null === (e2 = s2.pickedMesh.reservedDataStore) || void 0 === e2 ? void 0 : e2.GUI3D) || void 0 === i2 ? void 0 : i2.control;
          return l2 && !l2._processObservables(t3.type, s2.pickedPoint, (null === (o2 = s2.originMesh) || void 0 === o2 ? void 0 : o2.position) || null, n2, a2) && t3.type === d.PointerEventTypes.POINTERMOVE && (this._lastControlOver[n2] && this._lastControlOver[n2]._onPointerOut(this._lastControlOver[n2]), delete this._lastControlOver[n2]), t3.type === d.PointerEventTypes.POINTERUP && (this._lastControlDown[r2.pointerId] && (this._lastControlDown[r2.pointerId].forcePointerUp(), delete this._lastControlDown[r2.pointerId]), ("touch" === r2.pointerType || "xr" === r2.pointerType && this._scene.getEngine().hostInformation.isMobile) && this._handlePointerOut(n2, false)), true;
        }, Object.defineProperty(t2.prototype, "rootContainer", { get: function() {
          return this._rootContainer;
        }, enumerable: false, configurable: true }), t2.prototype.containsControl = function(t3) {
          return this._rootContainer.containsControl(t3);
        }, t2.prototype.addControl = function(t3) {
          return this._rootContainer.addControl(t3), 1 !== this._customControlScaling && (t3.scaling.scaleInPlace(this._customControlScaling), t3._isScaledByManager = true), this;
        }, t2.prototype.removeControl = function(t3) {
          return this._rootContainer.removeControl(t3), t3._isScaledByManager && (t3.scaling.scaleInPlace(1 / this._customControlScaling), t3._isScaledByManager = false), this;
        }, t2.prototype.dispose = function() {
          for (var t3 in this._rootContainer.dispose(), this._sharedMaterials) Object.prototype.hasOwnProperty.call(this._sharedMaterials, t3) && this._sharedMaterials[t3].dispose();
          for (var t3 in this._sharedMaterials = {}, this._touchSharedMaterials) Object.prototype.hasOwnProperty.call(this._touchSharedMaterials, t3) && this._touchSharedMaterials[t3].dispose();
          this._touchSharedMaterials = {}, this._pointerOutObserver && this._utilityLayer && (this._utilityLayer.onPointerOutObservable.remove(this._pointerOutObserver), this._pointerOutObserver = null), this.onPickedPointChangedObservable.clear(), this.onPickingObservable.clear();
          var e2 = this._utilityLayer ? this._utilityLayer.utilityLayerScene : null;
          e2 && this._pointerObserver && (e2.onPointerObservable.remove(this._pointerObserver), this._pointerObserver = null), this._scene && this._sceneDisposeObserver && (this._scene.onDisposeObservable.remove(this._sceneDisposeObserver), this._sceneDisposeObserver = null), this._utilityLayer && this._utilityLayer.dispose();
        }, t2.MRTK_REALISTIC_SCALING = 0.032, t2;
      }(), Fe = void 0 !== o.g ? o.g : "undefined" != typeof window ? window : void 0;
      void 0 !== Fe && (Fe.BABYLON = Fe.BABYLON || {}, Fe.BABYLON.GUI || (Fe.BABYLON.GUI = n));
      const De = a;
      return r.default;
    })());
  }
});
export default require_babylon_gui_min();
//# sourceMappingURL=babylonjs-gui.js.map
