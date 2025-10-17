import {
  require_babylon
} from "./chunk-CZWJT7L5.js";
import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/babylonjs-loaders@8.32.0/node_modules/babylonjs-loaders/babylonjs.loaders.min.js
var require_babylonjs_loaders_min = __commonJS({
  "node_modules/.pnpm/babylonjs-loaders@8.32.0/node_modules/babylonjs-loaders/babylonjs.loaders.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_babylon()) : "function" == typeof define && define.amd ? define("babylonjs-loaders", ["babylonjs"], t) : "object" == typeof exports ? exports["babylonjs-loaders"] = t(require_babylon()) : e.LOADERS = t(e.BABYLON);
    }("undefined" != typeof self ? self : "undefined" != typeof global ? global : exports, (e) => (() => {
      "use strict";
      var t, n, r = { 274: (e2, t2, n2) => {
        n2.r(t2), n2.d(t2, { FlowGraphGLTFDataProvider: () => a2 });
        var r2 = n2(322), o2 = n2(597), a2 = function(e3) {
          function t3(t4) {
            var n3, r3, a3 = e3.call(this) || this, i2 = t4.glTF, s2 = (null === (n3 = i2.animations) || void 0 === n3 ? void 0 : n3.map(function(e4) {
              return e4._babylonAnimationGroup;
            })) || [];
            a3.animationGroups = a3.registerDataOutput("animationGroups", o2.RichTypeAny, s2);
            var l2 = (null === (r3 = i2.nodes) || void 0 === r3 ? void 0 : r3.map(function(e4) {
              return e4._babylonTransformNode;
            })) || [];
            return a3.nodes = a3.registerDataOutput("nodes", o2.RichTypeAny, l2), a3;
          }
          return (0, r2.C6)(t3, e3), t3.prototype.getClassName = function() {
            return "FlowGraphGLTFDataProvider";
          }, t3;
        }(o2.FlowGraphBlock);
      }, 322: (e2, t2, n2) => {
        n2.d(t2, { C6: () => o2, Cl: () => a2, YH: () => s2, fX: () => l2, sH: () => i2 });
        var r2 = function(e3, t3) {
          return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
            e4.__proto__ = t4;
          } || function(e4, t4) {
            for (var n3 in t4) Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          }, r2(e3, t3);
        };
        function o2(e3, t3) {
          if ("function" != typeof t3 && null !== t3) throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
          function n3() {
            this.constructor = e3;
          }
          r2(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (n3.prototype = t3.prototype, new n3());
        }
        var a2 = function() {
          return a2 = Object.assign || function(e3) {
            for (var t3, n3 = 1, r3 = arguments.length; n3 < r3; n3++) for (var o3 in t3 = arguments[n3]) Object.prototype.hasOwnProperty.call(t3, o3) && (e3[o3] = t3[o3]);
            return e3;
          }, a2.apply(this, arguments);
        };
        function i2(e3, t3, n3, r3) {
          return new (n3 || (n3 = Promise))(function(o3, a3) {
            function i3(e4) {
              try {
                l3(r3.next(e4));
              } catch (e5) {
                a3(e5);
              }
            }
            function s3(e4) {
              try {
                l3(r3.throw(e4));
              } catch (e5) {
                a3(e5);
              }
            }
            function l3(e4) {
              var t4;
              e4.done ? o3(e4.value) : (t4 = e4.value, t4 instanceof n3 ? t4 : new n3(function(e5) {
                e5(t4);
              })).then(i3, s3);
            }
            l3((r3 = r3.apply(e3, t3 || [])).next());
          });
        }
        function s2(e3, t3) {
          var n3, r3, o3, a3 = { label: 0, sent: function() {
            if (1 & o3[0]) throw o3[1];
            return o3[1];
          }, trys: [], ops: [] }, i3 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
          return i3.next = s3(0), i3.throw = s3(1), i3.return = s3(2), "function" == typeof Symbol && (i3[Symbol.iterator] = function() {
            return this;
          }), i3;
          function s3(s4) {
            return function(l3) {
              return function(s5) {
                if (n3) throw new TypeError("Generator is already executing.");
                for (; i3 && (i3 = 0, s5[0] && (a3 = 0)), a3; ) try {
                  if (n3 = 1, r3 && (o3 = 2 & s5[0] ? r3.return : s5[0] ? r3.throw || ((o3 = r3.return) && o3.call(r3), 0) : r3.next) && !(o3 = o3.call(r3, s5[1])).done) return o3;
                  switch (r3 = 0, o3 && (s5 = [2 & s5[0], o3.value]), s5[0]) {
                    case 0:
                    case 1:
                      o3 = s5;
                      break;
                    case 4:
                      return a3.label++, { value: s5[1], done: false };
                    case 5:
                      a3.label++, r3 = s5[1], s5 = [0];
                      continue;
                    case 7:
                      s5 = a3.ops.pop(), a3.trys.pop();
                      continue;
                    default:
                      if (!((o3 = (o3 = a3.trys).length > 0 && o3[o3.length - 1]) || 6 !== s5[0] && 2 !== s5[0])) {
                        a3 = 0;
                        continue;
                      }
                      if (3 === s5[0] && (!o3 || s5[1] > o3[0] && s5[1] < o3[3])) {
                        a3.label = s5[1];
                        break;
                      }
                      if (6 === s5[0] && a3.label < o3[1]) {
                        a3.label = o3[1], o3 = s5;
                        break;
                      }
                      if (o3 && a3.label < o3[2]) {
                        a3.label = o3[2], a3.ops.push(s5);
                        break;
                      }
                      o3[2] && a3.ops.pop(), a3.trys.pop();
                      continue;
                  }
                  s5 = t3.call(e3, a3);
                } catch (e4) {
                  s5 = [6, e4], r3 = 0;
                } finally {
                  n3 = o3 = 0;
                }
                if (5 & s5[0]) throw s5[1];
                return { value: s5[0] ? s5[1] : void 0, done: true };
              }([s4, l3]);
            };
          }
        }
        function l2(e3, t3, n3) {
          if (n3 || 2 === arguments.length) for (var r3, o3 = 0, a3 = t3.length; o3 < a3; o3++) !r3 && o3 in t3 || (r3 || (r3 = Array.prototype.slice.call(t3, 0, o3)), r3[o3] = t3[o3]);
          return e3.concat(r3 || Array.prototype.slice.call(t3));
        }
        Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      }, 561: (e2, t2, n2) => {
        n2.r(t2), n2.d(t2, { PBRMaterialLoadingAdapter: () => o2 });
        var r2 = n2(597), o2 = function() {
          function e3(e4) {
            this._material = e4, this._material.enableSpecularAntiAliasing = true;
          }
          return Object.defineProperty(e3.prototype, "material", { get: function() {
            return this._material;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "isUnlit", { get: function() {
            return this._material.unlit;
          }, set: function(e4) {
            this._material.unlit = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "backFaceCulling", { get: function() {
            return this._material.backFaceCulling;
          }, set: function(e4) {
            this._material.backFaceCulling = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "twoSidedLighting", { get: function() {
            return this._material.twoSidedLighting;
          }, set: function(e4) {
            this._material.twoSidedLighting = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "alphaCutOff", { get: function() {
            return this._material.alphaCutOff;
          }, set: function(e4) {
            this._material.alphaCutOff = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "useAlphaFromBaseColorTexture", { get: function() {
            return this._material.useAlphaFromAlbedoTexture;
          }, set: function(e4) {
            this._material.useAlphaFromAlbedoTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transparencyAsAlphaCoverage", { get: function() {
            return this._material.useRadianceOverAlpha || this._material.useSpecularOverAlpha;
          }, set: function(e4) {
            this._material.useRadianceOverAlpha = !e4, this._material.useSpecularOverAlpha = !e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseColor", { get: function() {
            return this._material.albedoColor;
          }, set: function(e4) {
            this._material.albedoColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseColorTexture", { get: function() {
            return this._material.albedoTexture;
          }, set: function(e4) {
            this._material.albedoTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseDiffuseRoughness", { get: function() {
            var e4;
            return null !== (e4 = this._material.baseDiffuseRoughness) && void 0 !== e4 ? e4 : 0;
          }, set: function(e4) {
            this._material.baseDiffuseRoughness = e4, e4 > 0 && (this._material.brdf.baseDiffuseModel = r2.Constants.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseDiffuseRoughnessTexture", { get: function() {
            return this._material.baseDiffuseRoughnessTexture;
          }, set: function(e4) {
            this._material.baseDiffuseRoughnessTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseMetalness", { get: function() {
            var e4;
            return null !== (e4 = this._material.metallic) && void 0 !== e4 ? e4 : 1;
          }, set: function(e4) {
            this._material.metallic = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseMetalnessTexture", { get: function() {
            return this._material.metallicTexture;
          }, set: function(e4) {
            this._material.metallicTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "useRoughnessFromMetallicTextureGreen", { set: function(e4) {
            this._material.useRoughnessFromMetallicTextureGreen = e4, this._material.useRoughnessFromMetallicTextureAlpha = !e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "useMetallicFromMetallicTextureBlue", { set: function(e4) {
            this._material.useMetallnessFromMetallicTextureBlue = e4;
          }, enumerable: false, configurable: true }), e3.prototype.enableSpecularEdgeColor = function(e4) {
            void 0 === e4 && (e4 = false), e4 && (this._material.brdf.dielectricSpecularModel = r2.Constants.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR, this._material.brdf.conductorSpecularModel = r2.Constants.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR);
          }, Object.defineProperty(e3.prototype, "specularWeight", { get: function() {
            var e4;
            return null !== (e4 = this._material.metallicF0Factor) && void 0 !== e4 ? e4 : 1;
          }, set: function(e4) {
            this._material.metallicF0Factor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularWeightTexture", { get: function() {
            return this._material.metallicReflectanceTexture;
          }, set: function(e4) {
            e4 ? (this._material.metallicReflectanceTexture = e4, this._material.useOnlyMetallicFromMetallicReflectanceTexture = true) : (this._material.metallicReflectanceTexture = null, this._material.useOnlyMetallicFromMetallicReflectanceTexture = false);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularColor", { get: function() {
            return this._material.metallicReflectanceColor;
          }, set: function(e4) {
            this._material.metallicReflectanceColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularColorTexture", { get: function() {
            return this._material.reflectanceTexture;
          }, set: function(e4) {
            this._material.reflectanceTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularRoughness", { get: function() {
            var e4;
            return null !== (e4 = this._material.roughness) && void 0 !== e4 ? e4 : 1;
          }, set: function(e4) {
            this._material.roughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularRoughnessTexture", { get: function() {
            return this._material.metallicTexture;
          }, set: function(e4) {
            this.baseMetalnessTexture || (this._material.metallicTexture = e4);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularIor", { get: function() {
            return this._material.indexOfRefraction;
          }, set: function(e4) {
            this._material.indexOfRefraction = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "emissionColor", { get: function() {
            return this._material.emissiveColor;
          }, set: function(e4) {
            this._material.emissiveColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "emissionLuminance", { get: function() {
            return this._material.emissiveIntensity;
          }, set: function(e4) {
            this._material.emissiveIntensity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "emissionColorTexture", { get: function() {
            return this._material.emissiveTexture;
          }, set: function(e4) {
            this._material.emissiveTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "ambientOcclusionTexture", { get: function() {
            return this._material.ambientTexture;
          }, set: function(e4) {
            this._material.ambientTexture = e4, e4 && (this._material.useAmbientInGrayScale = true);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "ambientOcclusionTextureStrength", { get: function() {
            var e4;
            return null !== (e4 = this._material.ambientTextureStrength) && void 0 !== e4 ? e4 : 1;
          }, set: function(e4) {
            this._material.ambientTextureStrength = e4;
          }, enumerable: false, configurable: true }), e3.prototype.configureCoat = function() {
            this._material.clearCoat.isEnabled = true, this._material.clearCoat.useRoughnessFromMainTexture = false, this._material.clearCoat.remapF0OnInterfaceChange = false;
          }, Object.defineProperty(e3.prototype, "coatWeight", { get: function() {
            return this._material.clearCoat.intensity;
          }, set: function(e4) {
            this._material.clearCoat.isEnabled = true, this._material.clearCoat.intensity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatWeightTexture", { get: function() {
            return this._material.clearCoat.texture;
          }, set: function(e4) {
            this._material.clearCoat.isEnabled = true, this._material.clearCoat.texture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatColor", { set: function(e4) {
            this._material.clearCoat.isTintEnabled = e4 != r2.Color3.White(), this._material.clearCoat.tintColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatColorTexture", { set: function(e4) {
            this._material.clearCoat.tintTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatRoughness", { get: function() {
            var e4;
            return null !== (e4 = this._material.clearCoat.roughness) && void 0 !== e4 ? e4 : 0;
          }, set: function(e4) {
            this._material.clearCoat.isEnabled = true, this._material.clearCoat.roughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatRoughnessTexture", { get: function() {
            return this._material.clearCoat.textureRoughness;
          }, set: function(e4) {
            this._material.clearCoat.isEnabled = true, this._material.clearCoat.useRoughnessFromMainTexture = false, this._material.clearCoat.textureRoughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatIor", { set: function(e4) {
            this._material.clearCoat.indexOfRefraction = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatDarkening", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatDarkeningTexture", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatRoughnessAnisotropy", { get: function() {
            return 0;
          }, set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryCoatTangentAngle", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryCoatTangentTexture", { get: function() {
            return null;
          }, set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionWeight", { get: function() {
            return this._material.subSurface.refractionIntensity;
          }, set: function(e4) {
            this._material.subSurface.isRefractionEnabled = e4 > 0, this._material.subSurface.refractionIntensity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionWeightTexture", { set: function(e4) {
            this._material.subSurface.isRefractionEnabled = true, this._material.subSurface.refractionIntensityTexture = e4, this._material.subSurface.useGltfStyleTextures = true;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionDepth", { set: function(e4) {
            this._material.subSurface.tintColorAtDistance = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionColor", { set: function(e4) {
            this._material.subSurface.tintColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionDispersionAbbeNumber", { set: function(e4) {
            e4 > 0 ? (this._material.subSurface.isDispersionEnabled = true, this._material.subSurface.dispersion = 20 / e4) : (this._material.subSurface.isDispersionEnabled = false, this._material.subSurface.dispersion = 0);
          }, enumerable: false, configurable: true }), e3.prototype.configureTransmission = function() {
            this._material.subSurface.volumeIndexOfRefraction = 1, this._material.subSurface.useAlbedoToTintRefraction = true, this._material.subSurface.minimumThickness = 0, this._material.subSurface.maximumThickness = 0;
          }, Object.defineProperty(e3.prototype, "volumeThicknessTexture", { set: function(e4) {
            this._material.subSurface.thicknessTexture = e4, this._material.subSurface.useGltfStyleTextures = true;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "volumeThickness", { set: function(e4) {
            this._material.subSurface.minimumThickness = 0, this._material.subSurface.maximumThickness = e4, this._material.subSurface.useThicknessAsDepth = true, e4 > 0 && (this._material.subSurface.volumeIndexOfRefraction = this._material.indexOfRefraction);
          }, enumerable: false, configurable: true }), e3.prototype.configureSubsurface = function() {
            this._material.subSurface.useGltfStyleTextures = true, this._material.subSurface.volumeIndexOfRefraction = 1, this._material.subSurface.minimumThickness = 0, this._material.subSurface.maximumThickness = 0, this._material.subSurface.useAlbedoToTintTranslucency = false;
          }, Object.defineProperty(e3.prototype, "subsurfaceWeight", { get: function() {
            return this._material.subSurface.isTranslucencyEnabled ? this._material.subSurface.translucencyIntensity : 0;
          }, set: function(e4) {
            this._material.subSurface.isTranslucencyEnabled = e4 > 0, this._material.subSurface.translucencyIntensity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "subsurfaceWeightTexture", { set: function(e4) {
            this._material.subSurface.translucencyIntensityTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "subsurfaceColor", { set: function(e4) {
            this._material.subSurface.tintColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "subsurfaceColorTexture", { set: function(e4) {
            this._material.subSurface.translucencyColorTexture = e4;
          }, enumerable: false, configurable: true }), e3.prototype.configureFuzz = function() {
            this._material.sheen.isEnabled = true, this._material.sheen.useRoughnessFromMainTexture = false, this._material.sheen.albedoScaling = true;
          }, Object.defineProperty(e3.prototype, "fuzzWeight", { set: function(e4) {
            this._material.sheen.isEnabled = true, this._material.sheen.intensity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzColor", { set: function(e4) {
            this._material.sheen.isEnabled = true, this._material.sheen.color = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzColorTexture", { set: function(e4) {
            this._material.sheen.isEnabled = true, this._material.sheen.texture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzRoughness", { set: function(e4) {
            this._material.sheen.isEnabled = true, this._material.sheen.roughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzRoughnessTexture", { set: function(e4) {
            this._material.sheen.isEnabled = true, this._material.sheen.textureRoughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularRoughnessAnisotropy", { get: function() {
            return this._material.anisotropy.intensity;
          }, set: function(e4) {
            this._material.anisotropy.isEnabled = true, this._material.anisotropy.intensity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryTangentAngle", { set: function(e4) {
            this._material.anisotropy.isEnabled = true, this._material.anisotropy.angle = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryTangentTexture", { get: function() {
            return this._material.anisotropy.texture;
          }, set: function(e4) {
            this._material.anisotropy.isEnabled = true, this._material.anisotropy.texture = e4;
          }, enumerable: false, configurable: true }), e3.prototype.configureGltfStyleAnisotropy = function(e4) {
            void 0 === e4 && (e4 = true);
          }, Object.defineProperty(e3.prototype, "thinFilmWeight", { set: function(e4) {
            this._material.iridescence.isEnabled = e4 > 0, this._material.iridescence.intensity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmIor", { set: function(e4) {
            this._material.iridescence.indexOfRefraction = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmThicknessMinimum", { set: function(e4) {
            this._material.iridescence.minimumThickness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmThicknessMaximum", { set: function(e4) {
            this._material.iridescence.maximumThickness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmWeightTexture", { set: function(e4) {
            this._material.iridescence.texture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmThicknessTexture", { set: function(e4) {
            this._material.iridescence.thicknessTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionDispersion", { set: function(e4) {
            this._material._dispersion = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "unlit", { set: function(e4) {
            this._material.unlit = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryOpacity", { get: function() {
            return this._material.alpha;
          }, set: function(e4) {
            this._material.alpha = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryNormalTexture", { get: function() {
            return this._material.bumpTexture;
          }, set: function(e4) {
            this._material.bumpTexture = e4, this._material.forceIrradianceInFragment = true;
          }, enumerable: false, configurable: true }), e3.prototype.setNormalMapInversions = function(e4, t3) {
            this._material.invertNormalMapX = e4, this._material.invertNormalMapY = t3;
          }, Object.defineProperty(e3.prototype, "geometryCoatNormalTexture", { get: function() {
            return this._material.clearCoat.bumpTexture;
          }, set: function(e4) {
            this._material.clearCoat.isEnabled = true, this._material.clearCoat.bumpTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryCoatNormalTextureScale", { set: function(e4) {
            this._material.clearCoat.bumpTexture && (this._material.clearCoat.bumpTexture.level = e4);
          }, enumerable: false, configurable: true }), e3;
        }();
      }, 597: (t2) => {
        t2.exports = e;
      }, 698: (e2, t2, n2) => {
        n2.d(t2, { oR: () => p2, tQ: () => f2, Wt: () => c2, ZU: () => h2 });
        var r2 = n2(597), o2 = [{ regex: new RegExp("^/nodes/\\d+/extensions/") }], a2 = function() {
          function e3(e4, t3) {
            this._gltf = e4, this._infoTree = t3;
          }
          return e3.prototype.convert = function(e4) {
            var t3 = this._gltf, n3 = this._infoTree, r3 = void 0;
            if (!e4.startsWith("/")) throw new Error("Path must start with a /");
            var a3 = e4.split("/");
            if (a3.shift(), a3[a3.length - 1].includes(".length")) {
              var i3 = a3[a3.length - 1].split(".");
              a3.pop(), a3.push.apply(a3, i3);
            }
            for (var s3 = false, l3 = 0, u3 = a3; l3 < u3.length; l3++) {
              var c3 = u3[l3], f3 = "length" === c3;
              if (f3 && !n3.__array__) throw new Error("Path ".concat(e4, " is invalid"));
              if (n3.__ignoreObjectTree__ && (s3 = true), n3.__array__ && !f3) n3 = n3.__array__;
              else if (!(n3 = n3[c3])) throw new Error("Path ".concat(e4, " is invalid"));
              if (!s3) if (void 0 === t3) {
                if (!o2.find(function(t4) {
                  return t4.regex.test(e4);
                })) throw new Error("Path ".concat(e4, " is invalid"));
              } else f3 || (t3 = null == t3 ? void 0 : t3[c3]);
              (n3.__target__ || f3) && (r3 = t3);
            }
            return { object: r3, info: n3 };
          }, e3;
        }();
        function i2(e3, t3, n3, r3) {
          var o3 = s2(e3);
          return r3 ? o3[n3][r3] : o3[n3];
        }
        function s2(e3, t3, n3) {
          var o3, a3, i3;
          return null === (i3 = null === (o3 = e3._data) || void 0 === o3 ? void 0 : o3[null !== (a3 = null == n3 ? void 0 : n3.fillMode) && void 0 !== a3 ? a3 : r2.Constants.MATERIAL_TriangleFillMode]) || void 0 === i3 ? void 0 : i3.babylonMaterial;
        }
        function l2(e3, t3) {
          return { offset: { componentsCount: 2, type: "Vector2", get: function(n3, o3, a3) {
            var s3 = i2(n3, 0, e3, t3);
            return new r2.Vector2(null == s3 ? void 0 : s3.uOffset, null == s3 ? void 0 : s3.vOffset);
          }, getTarget: s2, set: function(n3, r3, o3, a3) {
            var s3 = i2(r3, 0, e3, t3);
            s3.uOffset = n3.x, s3.vOffset = n3.y;
          }, getPropertyName: [function() {
            return "".concat(e3).concat(t3 ? "." + t3 : "", ".uOffset");
          }, function() {
            return "".concat(e3).concat(t3 ? "." + t3 : "", ".vOffset");
          }] }, rotation: { type: "number", get: function(n3, r3, o3) {
            var a3;
            return null === (a3 = i2(n3, 0, e3, t3)) || void 0 === a3 ? void 0 : a3.wAng;
          }, getTarget: s2, set: function(n3, r3, o3, a3) {
            return i2(r3, 0, e3, t3).wAng = n3;
          }, getPropertyName: [function() {
            return "".concat(e3).concat(t3 ? "." + t3 : "", ".wAng");
          }] }, scale: { componentsCount: 2, type: "Vector2", get: function(n3, o3, a3) {
            var s3 = i2(n3, 0, e3, t3);
            return new r2.Vector2(null == s3 ? void 0 : s3.uScale, null == s3 ? void 0 : s3.vScale);
          }, getTarget: s2, set: function(n3, r3, o3, a3) {
            var s3 = i2(r3, 0, e3, t3);
            s3.uScale = n3.x, s3.vScale = n3.y;
          }, getPropertyName: [function() {
            return "".concat(e3).concat(t3 ? "." + t3 : "", ".uScale");
          }, function() {
            return "".concat(e3).concat(t3 ? "." + t3 : "", ".vScale");
          }] } };
        }
        var u2 = { cameras: { __array__: { __target__: true, orthographic: { xmag: { componentsCount: 2, type: "Vector2", get: function(e3) {
          var t3, n3, o3, a3;
          return new r2.Vector2(null !== (n3 = null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.orthoLeft) && void 0 !== n3 ? n3 : 0, null !== (a3 = null === (o3 = e3._babylonCamera) || void 0 === o3 ? void 0 : o3.orthoRight) && void 0 !== a3 ? a3 : 0);
        }, set: function(e3, t3) {
          t3._babylonCamera && (t3._babylonCamera.orthoLeft = e3.x, t3._babylonCamera.orthoRight = e3.y);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "orthoLeft";
        }, function() {
          return "orthoRight";
        }] }, ymag: { componentsCount: 2, type: "Vector2", get: function(e3) {
          var t3, n3, o3, a3;
          return new r2.Vector2(null !== (n3 = null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.orthoBottom) && void 0 !== n3 ? n3 : 0, null !== (a3 = null === (o3 = e3._babylonCamera) || void 0 === o3 ? void 0 : o3.orthoTop) && void 0 !== a3 ? a3 : 0);
        }, set: function(e3, t3) {
          t3._babylonCamera && (t3._babylonCamera.orthoBottom = e3.x, t3._babylonCamera.orthoTop = e3.y);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "orthoBottom";
        }, function() {
          return "orthoTop";
        }] }, zfar: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.maxZ;
        }, set: function(e3, t3) {
          t3._babylonCamera && (t3._babylonCamera.maxZ = e3);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "maxZ";
        }] }, znear: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.minZ;
        }, set: function(e3, t3) {
          t3._babylonCamera && (t3._babylonCamera.minZ = e3);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "minZ";
        }] } }, perspective: { aspectRatio: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.getEngine().getAspectRatio(e3._babylonCamera);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "aspectRatio";
        }], isReadOnly: true }, yfov: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.fov;
        }, set: function(e3, t3) {
          t3._babylonCamera && (t3._babylonCamera.fov = e3);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "fov";
        }] }, zfar: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.maxZ;
        }, set: function(e3, t3) {
          t3._babylonCamera && (t3._babylonCamera.maxZ = e3);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "maxZ";
        }] }, znear: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonCamera) || void 0 === t3 ? void 0 : t3.minZ;
        }, set: function(e3, t3) {
          t3._babylonCamera && (t3._babylonCamera.minZ = e3);
        }, getTarget: function(e3) {
          return e3;
        }, getPropertyName: [function() {
          return "minZ";
        }] } } } }, nodes: { length: { type: "number", get: function(e3) {
          return e3.length;
        }, getTarget: function(e3) {
          return e3.map(function(e4) {
            return e4._babylonTransformNode;
          });
        }, getPropertyName: [function() {
          return "length";
        }] }, __array__: { __target__: true, translation: { type: "Vector3", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.position;
        }, set: function(e3, t3) {
          var n3;
          return null === (n3 = t3._babylonTransformNode) || void 0 === n3 ? void 0 : n3.position.copyFrom(e3);
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, getPropertyName: [function() {
          return "position";
        }] }, rotation: { type: "Quaternion", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.rotationQuaternion;
        }, set: function(e3, t3) {
          var n3, r3;
          return null === (r3 = null === (n3 = t3._babylonTransformNode) || void 0 === n3 ? void 0 : n3.rotationQuaternion) || void 0 === r3 ? void 0 : r3.copyFrom(e3);
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, getPropertyName: [function() {
          return "rotationQuaternion";
        }] }, scale: { type: "Vector3", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.scaling;
        }, set: function(e3, t3) {
          var n3;
          return null === (n3 = t3._babylonTransformNode) || void 0 === n3 ? void 0 : n3.scaling.copyFrom(e3);
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, getPropertyName: [function() {
          return "scaling";
        }] }, weights: { length: { type: "number", get: function(e3) {
          return e3._numMorphTargets;
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, getPropertyName: [function() {
          return "influence";
        }] }, __array__: { __target__: true, type: "number", get: function(e3, t3) {
          var n3, r3;
          return void 0 !== t3 ? null === (r3 = null === (n3 = e3._primitiveBabylonMeshes) || void 0 === n3 ? void 0 : n3[0].morphTargetManager) || void 0 === r3 ? void 0 : r3.getTarget(t3).influence : void 0;
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, getPropertyName: [function() {
          return "influence";
        }] }, type: "number[]", get: function(e3, t3) {
          return [0];
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, getPropertyName: [function() {
          return "influence";
        }] }, matrix: { type: "Matrix", get: function(e3) {
          var t3, n3, o3;
          return r2.Matrix.Compose(null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.scaling, null === (n3 = e3._babylonTransformNode) || void 0 === n3 ? void 0 : n3.rotationQuaternion, null === (o3 = e3._babylonTransformNode) || void 0 === o3 ? void 0 : o3.position);
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, isReadOnly: true }, globalMatrix: { type: "Matrix", get: function(e3) {
          for (var t3, n3, o3, a3, i3, s3, l3, u3 = r2.Matrix.Identity(), c3 = e3.parent; c3 && c3.parent; ) c3 = c3.parent;
          var f3 = (null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.position._isDirty) || (null === (o3 = null === (n3 = e3._babylonTransformNode) || void 0 === n3 ? void 0 : n3.rotationQuaternion) || void 0 === o3 ? void 0 : o3._isDirty) || (null === (a3 = e3._babylonTransformNode) || void 0 === a3 ? void 0 : a3.scaling._isDirty);
          if (c3) {
            var h3 = null === (i3 = c3._babylonTransformNode) || void 0 === i3 ? void 0 : i3.computeWorldMatrix(true).invert();
            h3 && (null === (l3 = null === (s3 = e3._babylonTransformNode) || void 0 === s3 ? void 0 : s3.computeWorldMatrix(f3)) || void 0 === l3 || l3.multiplyToRef(h3, u3));
          } else e3._babylonTransformNode && u3.copyFrom(e3._babylonTransformNode.computeWorldMatrix(f3));
          return u3;
        }, getTarget: function(e3) {
          return e3._babylonTransformNode;
        }, isReadOnly: true }, extensions: { EXT_lights_ies: { multiplier: { type: "number", get: function(e3) {
          var t3, n3;
          return null === (n3 = null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.getChildren(function(e4) {
            return e4 instanceof r2.SpotLight;
          }, true)[0]) || void 0 === n3 ? void 0 : n3.intensity;
        }, getTarget: function(e3) {
          var t3;
          return null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.getChildren(function(e4) {
            return e4 instanceof r2.SpotLight;
          }, true)[0];
        }, set: function(e3, t3) {
          if (t3._babylonTransformNode) {
            var n3 = t3._babylonTransformNode.getChildren(function(e4) {
              return e4 instanceof r2.SpotLight;
            }, true)[0];
            n3 && (n3.intensity = e3);
          }
        } }, color: { type: "Color3", get: function(e3) {
          var t3, n3;
          return null === (n3 = null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.getChildren(function(e4) {
            return e4 instanceof r2.SpotLight;
          }, true)[0]) || void 0 === n3 ? void 0 : n3.diffuse;
        }, getTarget: function(e3) {
          var t3;
          return null === (t3 = e3._babylonTransformNode) || void 0 === t3 ? void 0 : t3.getChildren(function(e4) {
            return e4 instanceof r2.SpotLight;
          }, true)[0];
        }, set: function(e3, t3) {
          if (t3._babylonTransformNode) {
            var n3 = t3._babylonTransformNode.getChildren(function(e4) {
              return e4 instanceof r2.SpotLight;
            }, true)[0];
            n3 && (n3.diffuse = e3);
          }
        } } }, KHR_node_visibility: { visible: { type: "boolean", get: function(e3) {
          return !!e3._primitiveBabylonMeshes && e3._primitiveBabylonMeshes[0].isVisible;
        }, getTarget: function() {
        }, set: function(e3, t3) {
          t3._primitiveBabylonMeshes && t3._primitiveBabylonMeshes.forEach(function(t4) {
            return t4.isVisible = e3;
          });
        } } } } } }, materials: { __array__: { __target__: true, emissiveFactor: { type: "Color3", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).emissiveColor;
        }, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).emissiveColor.copyFrom(e3);
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "emissiveColor";
        }] }, emissiveTexture: { extensions: { KHR_texture_transform: l2("emissiveTexture") } }, normalTexture: { scale: { type: "number", get: function(e3, t3, n3) {
          var r3;
          return null === (r3 = i2(e3, 0, "bumpTexture")) || void 0 === r3 ? void 0 : r3.level;
        }, set: function(e3, t3, n3, r3) {
          var o3 = i2(t3, 0, "bumpTexture");
          o3 && (o3.level = e3);
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "level";
        }] }, extensions: { KHR_texture_transform: l2("bumpTexture") } }, occlusionTexture: { strength: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).ambientTextureStrength;
        }, set: function(e3, t3, n3, r3) {
          var o3 = s2(t3, 0, r3);
          o3 && (o3.ambientTextureStrength = e3);
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "ambientTextureStrength";
        }] }, extensions: { KHR_texture_transform: l2("ambientTexture") } }, pbrMetallicRoughness: { baseColorFactor: { type: "Color4", get: function(e3, t3, n3) {
          var o3 = s2(e3, 0, n3);
          return r2.Color4.FromColor3(o3.albedoColor, o3.alpha);
        }, set: function(e3, t3, n3, r3) {
          var o3 = s2(t3, 0, r3);
          o3.albedoColor.set(e3.r, e3.g, e3.b), o3.alpha = e3.a;
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "albedoColor";
        }, function() {
          return "alpha";
        }] }, baseColorTexture: { extensions: { KHR_texture_transform: l2("albedoTexture") } }, metallicFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).metallic;
        }, set: function(e3, t3, n3, r3) {
          var o3 = s2(t3, 0, r3);
          o3 && (o3.metallic = e3);
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "metallic";
        }] }, roughnessFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).roughness;
        }, set: function(e3, t3, n3, r3) {
          var o3 = s2(t3, 0, r3);
          o3 && (o3.roughness = e3);
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "roughness";
        }] }, metallicRoughnessTexture: { extensions: { KHR_texture_transform: l2("metallicTexture") } } }, extensions: { KHR_materials_anisotropy: { anisotropyStrength: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).anisotropy.intensity;
        }, set: function(e3, t3, n3, r3) {
          s2(t3, 0, r3).anisotropy.intensity = e3;
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "anisotropy.intensity";
        }] }, anisotropyRotation: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).anisotropy.angle;
        }, set: function(e3, t3, n3, r3) {
          s2(t3, 0, r3).anisotropy.angle = e3;
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "anisotropy.angle";
        }] }, anisotropyTexture: { extensions: { KHR_texture_transform: l2("anisotropy", "texture") } } }, KHR_materials_clearcoat: { clearcoatFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).clearCoat.intensity;
        }, set: function(e3, t3, n3, r3) {
          s2(t3, 0, r3).clearCoat.intensity = e3;
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "clearCoat.intensity";
        }] }, clearcoatRoughnessFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).clearCoat.roughness;
        }, set: function(e3, t3, n3, r3) {
          s2(t3, 0, r3).clearCoat.roughness = e3;
        }, getTarget: function(e3, t3, n3) {
          return s2(e3, 0, n3);
        }, getPropertyName: [function() {
          return "clearCoat.roughness";
        }] }, clearcoatTexture: { extensions: { KHR_texture_transform: l2("clearCoat", "texture") } }, clearcoatNormalTexture: { scale: { type: "number", get: function(e3, t3, n3) {
          var r3;
          return null === (r3 = s2(e3, 0, n3).clearCoat.bumpTexture) || void 0 === r3 ? void 0 : r3.level;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).clearCoat.bumpTexture.level = e3;
        } }, extensions: { KHR_texture_transform: l2("clearCoat", "bumpTexture") } }, clearcoatRoughnessTexture: { extensions: { KHR_texture_transform: l2("clearCoat", "textureRoughness") } } }, KHR_materials_dispersion: { dispersion: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).subSurface.dispersion;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).subSurface.dispersion = e3;
        } } }, KHR_materials_emissive_strength: { emissiveStrength: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).emissiveIntensity;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).emissiveIntensity = e3;
        } } }, KHR_materials_ior: { ior: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).indexOfRefraction;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).indexOfRefraction = e3;
        } } }, KHR_materials_iridescence: { iridescenceFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).iridescence.intensity;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).iridescence.intensity = e3;
        } }, iridescenceIor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).iridescence.indexOfRefraction;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).iridescence.indexOfRefraction = e3;
        } }, iridescenceTexture: { extensions: { KHR_texture_transform: l2("iridescence", "texture") } }, iridescenceThicknessMaximum: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).iridescence.maximumThickness;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).iridescence.maximumThickness = e3;
        } }, iridescenceThicknessMinimum: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).iridescence.minimumThickness;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).iridescence.minimumThickness = e3;
        } }, iridescenceThicknessTexture: { extensions: { KHR_texture_transform: l2("iridescence", "thicknessTexture") } } }, KHR_materials_sheen: { sheenColorFactor: { type: "Color3", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).sheen.color;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).sheen.color.copyFrom(e3);
        } }, sheenColorTexture: { extensions: { KHR_texture_transform: l2("sheen", "texture") } }, sheenRoughnessFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).sheen.intensity;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).sheen.intensity = e3;
        } }, sheenRoughnessTexture: { extensions: { KHR_texture_transform: l2("sheen", "thicknessTexture") } } }, KHR_materials_specular: { specularFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).metallicF0Factor;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).metallicF0Factor = e3;
        }, getPropertyName: [function() {
          return "metallicF0Factor";
        }] }, specularColorFactor: { type: "Color3", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).metallicReflectanceColor;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).metallicReflectanceColor.copyFrom(e3);
        }, getPropertyName: [function() {
          return "metallicReflectanceColor";
        }] }, specularTexture: { extensions: { KHR_texture_transform: l2("metallicReflectanceTexture") } }, specularColorTexture: { extensions: { KHR_texture_transform: l2("reflectanceTexture") } } }, KHR_materials_transmission: { transmissionFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).subSurface.refractionIntensity;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).subSurface.refractionIntensity = e3;
        }, getPropertyName: [function() {
          return "subSurface.refractionIntensity";
        }] }, transmissionTexture: { extensions: { KHR_texture_transform: l2("subSurface", "refractionIntensityTexture") } } }, KHR_materials_diffuse_transmission: { diffuseTransmissionFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).subSurface.translucencyIntensity;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).subSurface.translucencyIntensity = e3;
        } }, diffuseTransmissionTexture: { extensions: { KHR_texture_transform: l2("subSurface", "translucencyIntensityTexture") } }, diffuseTransmissionColorFactor: { type: "Color3", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).subSurface.translucencyColor;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          var o3;
          return e3 && (null === (o3 = s2(t3, 0, r3).subSurface.translucencyColor) || void 0 === o3 ? void 0 : o3.copyFrom(e3));
        } }, diffuseTransmissionColorTexture: { extensions: { KHR_texture_transform: l2("subSurface", "translucencyColorTexture") } } }, KHR_materials_volume: { attenuationColor: { type: "Color3", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).subSurface.tintColor;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).subSurface.tintColor.copyFrom(e3);
        } }, attenuationDistance: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).subSurface.tintColorAtDistance;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).subSurface.tintColorAtDistance = e3;
        } }, thicknessFactor: { type: "number", get: function(e3, t3, n3) {
          return s2(e3, 0, n3).subSurface.maximumThickness;
        }, getTarget: s2, set: function(e3, t3, n3, r3) {
          return s2(t3, 0, r3).subSurface.maximumThickness = e3;
        } }, thicknessTexture: { extensions: { KHR_texture_transform: l2("subSurface", "thicknessTexture") } } } } } }, extensions: { KHR_lights_punctual: { lights: { length: { type: "number", get: function(e3) {
          return e3.length;
        }, getTarget: function(e3) {
          return e3.map(function(e4) {
            return e4._babylonLight;
          });
        }, getPropertyName: [function(e3) {
          return "length";
        }] }, __array__: { __target__: true, color: { type: "Color3", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonLight) || void 0 === t3 ? void 0 : t3.diffuse;
        }, set: function(e3, t3) {
          var n3;
          return null === (n3 = t3._babylonLight) || void 0 === n3 ? void 0 : n3.diffuse.copyFrom(e3);
        }, getTarget: function(e3) {
          return e3._babylonLight;
        }, getPropertyName: [function(e3) {
          return "diffuse";
        }] }, intensity: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonLight) || void 0 === t3 ? void 0 : t3.intensity;
        }, set: function(e3, t3) {
          return t3._babylonLight ? t3._babylonLight.intensity = e3 : void 0;
        }, getTarget: function(e3) {
          return e3._babylonLight;
        }, getPropertyName: [function(e3) {
          return "intensity";
        }] }, range: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonLight) || void 0 === t3 ? void 0 : t3.range;
        }, set: function(e3, t3) {
          return t3._babylonLight ? t3._babylonLight.range = e3 : void 0;
        }, getTarget: function(e3) {
          return e3._babylonLight;
        }, getPropertyName: [function(e3) {
          return "range";
        }] }, spot: { innerConeAngle: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonLight) || void 0 === t3 ? void 0 : t3.innerAngle;
        }, set: function(e3, t3) {
          return t3._babylonLight ? t3._babylonLight.innerAngle = e3 : void 0;
        }, getTarget: function(e3) {
          return e3._babylonLight;
        }, getPropertyName: [function(e3) {
          return "innerConeAngle";
        }] }, outerConeAngle: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonLight) || void 0 === t3 ? void 0 : t3.angle;
        }, set: function(e3, t3) {
          return t3._babylonLight ? t3._babylonLight.angle = e3 : void 0;
        }, getTarget: function(e3) {
          return e3._babylonLight;
        }, getPropertyName: [function(e3) {
          return "outerConeAngle";
        }] } } } } }, EXT_lights_ies: { lights: { length: { type: "number", get: function(e3) {
          return e3.length;
        }, getTarget: function(e3) {
          return e3.map(function(e4) {
            return e4._babylonLight;
          });
        }, getPropertyName: [function(e3) {
          return "length";
        }] } } }, EXT_lights_image_based: { lights: { length: { type: "number", get: function(e3) {
          return e3.length;
        }, getTarget: function(e3) {
          return e3.map(function(e4) {
            return e4._babylonTexture;
          });
        }, getPropertyName: [function(e3) {
          return "length";
        }] }, __array__: { __target__: true, intensity: { type: "number", get: function(e3) {
          var t3;
          return null === (t3 = e3._babylonTexture) || void 0 === t3 ? void 0 : t3.level;
        }, set: function(e3, t3) {
          t3._babylonTexture && (t3._babylonTexture.level = e3);
        }, getTarget: function(e3) {
          return e3._babylonTexture;
        } }, rotation: { type: "Quaternion", get: function(e3) {
          var t3;
          return e3._babylonTexture && r2.Quaternion.FromRotationMatrix(null === (t3 = e3._babylonTexture) || void 0 === t3 ? void 0 : t3.getReflectionTextureMatrix());
        }, set: function(e3, t3) {
          var n3;
          t3._babylonTexture && ((null === (n3 = t3._babylonTexture.getScene()) || void 0 === n3 ? void 0 : n3.useRightHandedSystem) || (e3 = r2.Quaternion.Inverse(e3)), r2.Matrix.FromQuaternionToRef(e3, t3._babylonTexture.getReflectionTextureMatrix()));
        }, getTarget: function(e3) {
          return e3._babylonTexture;
        } } } } } }, animations: { length: { type: "number", get: function(e3) {
          return e3.length;
        }, getTarget: function(e3) {
          return e3.map(function(e4) {
            return e4._babylonAnimationGroup;
          });
        }, getPropertyName: [function() {
          return "length";
        }] }, __array__: {} }, meshes: { length: { type: "number", get: function(e3) {
          return e3.length;
        }, getTarget: function(e3) {
          return e3.map(function(e4) {
            var t3;
            return null === (t3 = e4.primitives[0]._instanceData) || void 0 === t3 ? void 0 : t3.babylonSourceMesh;
          });
        }, getPropertyName: [function() {
          return "length";
        }] }, __array__: {} } };
        function c2(e3) {
          return new a2(e3, u2);
        }
        function f2(e3) {
          for (var t3 = e3.split("/").map(function(e4) {
            return e4.replace(/{}/g, "__array__");
          }), n3 = u2, r3 = 0, o3 = t3; r3 < o3.length; r3++) {
            var a3 = o3[r3];
            a3 && (n3 = n3[a3]);
          }
          if (n3 && n3.type && n3.get) return n3;
        }
        function h2(e3, t3) {
          for (var n3 = e3.split("/").map(function(e4) {
            return e4.replace(/{}/g, "__array__");
          }), r3 = u2, o3 = 0, a3 = n3; o3 < a3.length; o3++) {
            var i3 = a3[o3];
            i3 && (r3 = r3[i3]);
          }
          r3 && r3.type && r3.get && (r3.interpolation = t3);
        }
        function p2(e3, t3) {
          for (var n3 = e3.split("/").map(function(e4) {
            return e4.replace(/{}/g, "__array__");
          }), r3 = u2, o3 = 0, a3 = n3; o3 < a3.length; o3++) {
            var i3 = a3[o3];
            if (i3) {
              if (!r3[i3]) {
                if ("?" === i3) {
                  r3.__ignoreObjectTree__ = true;
                  continue;
                }
                r3[i3] = {}, "__array__" === i3 && (r3[i3].__target__ = true);
              }
              r3 = r3[i3];
            }
          }
          Object.assign(r3, t3);
        }
      }, 727: (e2, t2, n2) => {
        n2.r(t2), n2.d(t2, { AnimationPropertyInfo: () => u2, TransformNodeAnimationPropertyInfo: () => c2, WeightAnimationPropertyInfo: () => f2, getQuaternion: () => s2, getVector3: () => i2, getWeights: () => l2 });
        var r2 = n2(322), o2 = n2(597), a2 = n2(698);
        function i2(e3, t3, n3, r3) {
          return o2.Vector3.FromArray(t3, n3).scaleInPlace(r3);
        }
        function s2(e3, t3, n3, r3) {
          return o2.Quaternion.FromArray(t3, n3).scaleInPlace(r3);
        }
        function l2(e3, t3, n3, r3) {
          for (var o3 = new Array(e3._numMorphTargets), a3 = 0; a3 < o3.length; a3++) o3[a3] = t3[n3++] * r3;
          return o3;
        }
        var u2 = function() {
          function e3(e4, t3, n3, r3) {
            this.type = e4, this.name = t3, this.getValue = n3, this.getStride = r3;
          }
          return e3.prototype._buildAnimation = function(e4, t3, n3) {
            var r3 = new o2.Animation(e4, this.name, t3, this.type);
            return r3.setKeys(n3), r3;
          }, e3;
        }(), c2 = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return (0, r2.C6)(t3, e3), t3.prototype.buildAnimations = function(e4, t4, n3, r3) {
            var o3 = [];
            return o3.push({ babylonAnimatable: e4._babylonTransformNode, babylonAnimation: this._buildAnimation(t4, n3, r3) }), o3;
          }, t3;
        }(u2), f2 = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return (0, r2.C6)(t3, e3), t3.prototype.buildAnimations = function(e4, t4, n3, r3) {
            var a3 = [];
            if (e4._numMorphTargets) for (var i3 = function(i4) {
              var l4 = new o2.Animation("".concat(t4, "_").concat(i4), s3.name, n3, s3.type);
              if (l4.setKeys(r3.map(function(e5) {
                return { frame: e5.frame, inTangent: e5.inTangent ? e5.inTangent[i4] : void 0, value: e5.value[i4], outTangent: e5.outTangent ? e5.outTangent[i4] : void 0, interpolation: e5.interpolation };
              })), e4._primitiveBabylonMeshes) for (var u3 = 0, c3 = e4._primitiveBabylonMeshes; u3 < c3.length; u3++) {
                var f3 = c3[u3];
                if (f3.morphTargetManager) {
                  var h2 = f3.morphTargetManager.getTarget(i4), p2 = l4.clone();
                  h2.animations.push(p2), a3.push({ babylonAnimatable: h2, babylonAnimation: p2 });
                }
              }
            }, s3 = this, l3 = 0; l3 < e4._numMorphTargets; l3++) i3(l3);
            return a3;
          }, t3;
        }(u2);
        (0, a2.ZU)("/nodes/{}/translation", [new c2(o2.Animation.ANIMATIONTYPE_VECTOR3, "position", i2, function() {
          return 3;
        })]), (0, a2.ZU)("/nodes/{}/rotation", [new c2(o2.Animation.ANIMATIONTYPE_QUATERNION, "rotationQuaternion", s2, function() {
          return 4;
        })]), (0, a2.ZU)("/nodes/{}/scale", [new c2(o2.Animation.ANIMATIONTYPE_VECTOR3, "scaling", i2, function() {
          return 3;
        })]), (0, a2.ZU)("/nodes/{}/weights", [new f2(o2.Animation.ANIMATIONTYPE_FLOAT, "influence", l2, function(e3) {
          return e3._numMorphTargets;
        })]);
      }, 753: (e2, t2, n2) => {
        n2.r(t2), n2.d(t2, { OpenPBRMaterialLoadingAdapter: () => r2 });
        var r2 = function() {
          function e3(e4) {
            this._material = e4;
          }
          return Object.defineProperty(e3.prototype, "material", { get: function() {
            return this._material;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "isUnlit", { get: function() {
            return this._material.unlit;
          }, set: function(e4) {
            this._material.unlit = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "backFaceCulling", { get: function() {
            return this._material.backFaceCulling;
          }, set: function(e4) {
            this._material.backFaceCulling = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "twoSidedLighting", { get: function() {
            return this._material.twoSidedLighting;
          }, set: function(e4) {
            this._material.twoSidedLighting = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "alphaCutOff", { get: function() {
            return 0.5;
          }, set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "useAlphaFromBaseColorTexture", { get: function() {
            return false;
          }, set: function(e4) {
            this._material._useAlphaFromBaseColorTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transparencyAsAlphaCoverage", { get: function() {
            return false;
          }, set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseColor", { get: function() {
            return this._material.baseColor;
          }, set: function(e4) {
            this._material.baseColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseColorTexture", { get: function() {
            return this._material.baseColorTexture;
          }, set: function(e4) {
            this._material.baseColorTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseDiffuseRoughness", { get: function() {
            return this._material.baseDiffuseRoughness;
          }, set: function(e4) {
            this._material.baseDiffuseRoughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseDiffuseRoughnessTexture", { get: function() {
            return this._material.baseDiffuseRoughnessTexture;
          }, set: function(e4) {
            this._material.baseDiffuseRoughnessTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseMetalness", { get: function() {
            return this._material.baseMetalness;
          }, set: function(e4) {
            this._material.baseMetalness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "baseMetalnessTexture", { get: function() {
            return this._material.baseMetalnessTexture;
          }, set: function(e4) {
            this._material.baseMetalnessTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "useRoughnessFromMetallicTextureGreen", { set: function(e4) {
            this._material._useRoughnessFromMetallicTextureGreen = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "useMetallicFromMetallicTextureBlue", { set: function(e4) {
            this._material._useMetallicFromMetallicTextureBlue = e4;
          }, enumerable: false, configurable: true }), e3.prototype.enableSpecularEdgeColor = function(e4) {
            void 0 === e4 && (e4 = false);
          }, Object.defineProperty(e3.prototype, "specularWeight", { get: function() {
            return this._material.specularWeight;
          }, set: function(e4) {
            this._material.specularWeight = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularWeightTexture", { get: function() {
            return this._material.specularWeightTexture;
          }, set: function(e4) {
            this._material.specularColorTexture === e4 ? (this._material.specularWeightTexture = null, this._material._useSpecularWeightFromSpecularColorTexture = true, this._material._useSpecularWeightFromAlpha = true) : this._material.specularWeightTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularColor", { get: function() {
            return this._material.specularColor;
          }, set: function(e4) {
            this._material.specularColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularColorTexture", { get: function() {
            return this._material.specularColorTexture;
          }, set: function(e4) {
            this._material.specularColorTexture = e4, this._material.specularWeightTexture === this._material.specularColorTexture && (this._material.specularWeightTexture = null, this._material._useSpecularWeightFromSpecularColorTexture = true, this._material._useSpecularWeightFromAlpha = true);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularRoughness", { get: function() {
            return this._material.specularRoughness;
          }, set: function(e4) {
            this._material.specularRoughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularRoughnessTexture", { get: function() {
            return this._material.specularRoughnessTexture;
          }, set: function(e4) {
            this._material.specularRoughnessTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularIor", { get: function() {
            return this._material.specularIor;
          }, set: function(e4) {
            this._material.specularIor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "emissionColor", { get: function() {
            return this._material.emissionColor;
          }, set: function(e4) {
            this._material.emissionColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "emissionLuminance", { get: function() {
            return this._material.emissionLuminance;
          }, set: function(e4) {
            this._material.emissionLuminance = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "emissionColorTexture", { get: function() {
            return this._material.emissionColorTexture;
          }, set: function(e4) {
            this._material.emissionColorTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "ambientOcclusionTexture", { get: function() {
            return this._material.ambientOcclusionTexture;
          }, set: function(e4) {
            this._material.ambientOcclusionTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "ambientOcclusionTextureStrength", { get: function() {
            var e4, t3 = this._material.ambientOcclusionTexture;
            return null !== (e4 = null == t3 ? void 0 : t3.level) && void 0 !== e4 ? e4 : 1;
          }, set: function(e4) {
            var t3 = this._material.ambientOcclusionTexture;
            t3 && (t3.level = e4);
          }, enumerable: false, configurable: true }), e3.prototype.configureCoat = function() {
          }, Object.defineProperty(e3.prototype, "coatWeight", { get: function() {
            return this._material.coatWeight;
          }, set: function(e4) {
            this._material.coatWeight = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatWeightTexture", { get: function() {
            return this._material.coatWeightTexture;
          }, set: function(e4) {
            this._material.coatWeightTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatColor", { set: function(e4) {
            this._material.coatColor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatColorTexture", { set: function(e4) {
            this._material.coatColorTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatRoughness", { get: function() {
            return this._material.coatRoughness;
          }, set: function(e4) {
            this._material.coatRoughness = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatRoughnessTexture", { get: function() {
            return this._material.coatRoughnessTexture;
          }, set: function(e4) {
            this._material.coatRoughnessTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatIor", { set: function(e4) {
            this._material.coatIor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatDarkening", { set: function(e4) {
            this._material.coatDarkening = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatDarkeningTexture", { set: function(e4) {
            this._material.coatDarkeningTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "coatRoughnessAnisotropy", { get: function() {
            return this._material.coatRoughnessAnisotropy;
          }, set: function(e4) {
            this._material.coatRoughnessAnisotropy = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryCoatTangentAngle", { set: function(e4) {
            this._material.geometryCoatTangentAngle = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryCoatTangentTexture", { get: function() {
            return this._material.geometryCoatTangentTexture;
          }, set: function(e4) {
            this._material.geometryCoatTangentTexture = e4, e4 && (this._material._useCoatRoughnessAnisotropyFromTangentTexture = true);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionWeight", { get: function() {
            return 0;
          }, set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionWeightTexture", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionDispersionAbbeNumber", { set: function(e4) {
          }, enumerable: false, configurable: true }), e3.prototype.configureTransmission = function() {
          }, Object.defineProperty(e3.prototype, "transmissionDepth", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "transmissionColor", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "volumeThicknessTexture", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "volumeThickness", { set: function(e4) {
          }, enumerable: false, configurable: true }), e3.prototype.configureSubsurface = function() {
          }, Object.defineProperty(e3.prototype, "subsurfaceWeight", { get: function() {
            return 0;
          }, set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "subsurfaceWeightTexture", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "subsurfaceColor", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "subsurfaceColorTexture", { set: function(e4) {
          }, enumerable: false, configurable: true }), e3.prototype.configureFuzz = function() {
          }, Object.defineProperty(e3.prototype, "fuzzWeight", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzColor", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzColorTexture", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzRoughness", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fuzzRoughnessTexture", { set: function(e4) {
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "specularRoughnessAnisotropy", { get: function() {
            return this._material.specularRoughnessAnisotropy;
          }, set: function(e4) {
            this._material.specularRoughnessAnisotropy = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryTangentAngle", { set: function(e4) {
            this._material.geometryTangentAngle = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryTangentTexture", { get: function() {
            return this._material.geometryTangentTexture;
          }, set: function(e4) {
            this._material.geometryTangentTexture = e4, this._material._useSpecularRoughnessAnisotropyFromTangentTexture = true;
          }, enumerable: false, configurable: true }), e3.prototype.configureGltfStyleAnisotropy = function(e4) {
            void 0 === e4 && (e4 = true), this._material._useGltfStyleAnisotropy = e4;
          }, Object.defineProperty(e3.prototype, "thinFilmWeight", { set: function(e4) {
            this._material.thinFilmWeight = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmIor", { set: function(e4) {
            this._material.thinFilmIor = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmThicknessMinimum", { set: function(e4) {
            this._material.thinFilmThicknessMin = e4 / 1e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmThicknessMaximum", { set: function(e4) {
            this._material.thinFilmThickness = e4 / 1e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmWeightTexture", { set: function(e4) {
            this._material.thinFilmWeightTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "thinFilmThicknessTexture", { set: function(e4) {
            this._material.thinFilmThicknessTexture = e4, this._material._useThinFilmThicknessFromTextureGreen = true;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "unlit", { set: function(e4) {
            this._material.unlit = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryOpacity", { get: function() {
            return this._material.geometryOpacity;
          }, set: function(e4) {
            this._material.geometryOpacity = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryNormalTexture", { get: function() {
            return this._material.geometryNormalTexture;
          }, set: function(e4) {
            this._material.geometryNormalTexture = e4;
          }, enumerable: false, configurable: true }), e3.prototype.setNormalMapInversions = function(e4, t3) {
          }, Object.defineProperty(e3.prototype, "geometryCoatNormalTexture", { get: function() {
            return this._material.geometryCoatNormalTexture;
          }, set: function(e4) {
            this._material.geometryCoatNormalTexture = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "geometryCoatNormalTextureScale", { set: function(e4) {
            this._material.geometryCoatNormalTexture && (this._material.geometryCoatNormalTexture.level = e4);
          }, enumerable: false, configurable: true }), e3;
        }();
      } }, o = {};
      function a(e2) {
        var t2 = o[e2];
        if (void 0 !== t2) return t2.exports;
        var n2 = o[e2] = { exports: {} };
        return r[e2](n2, n2.exports, a), n2.exports;
      }
      a.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return a.d(t2, { a: t2 }), t2;
      }, n = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, a.t = function(e2, r2) {
        if (1 & r2 && (e2 = this(e2)), 8 & r2) return e2;
        if ("object" == typeof e2 && e2) {
          if (4 & r2 && e2.__esModule) return e2;
          if (16 & r2 && "function" == typeof e2.then) return e2;
        }
        var o2 = /* @__PURE__ */ Object.create(null);
        a.r(o2);
        var i2 = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var s2 = 2 & r2 && e2; "object" == typeof s2 && !~t.indexOf(s2); s2 = n(s2)) Object.getOwnPropertyNames(s2).forEach((t2) => i2[t2] = () => e2[t2]);
        return i2.default = () => e2, a.d(o2, i2), o2;
      }, a.d = (e2, t2) => {
        for (var n2 in t2) a.o(t2, n2) && !a.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
      }, a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), a.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), a.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var i = {};
      a.d(i, { default: () => Er });
      var s = {};
      a.r(s), a.d(s, { BVHFileLoader: () => I, ReadBvh: () => R });
      var l = {};
      a.r(l), a.d(l, { GLTFValidation: () => D });
      var u = {};
      a.r(u), a.d(u, { GLTFFileLoader: () => te, GLTFLoaderAnimationStartMode: () => G, GLTFLoaderCoordinateSystemMode: () => k, GLTFLoaderDefaultOptions: () => ee, GLTFLoaderState: () => V });
      var c = {};
      a.r(c), a.d(c, { EBlendingFunction: () => J, EComponentType: () => W, ECullingType: () => Q, EParameterType: () => Z, EShaderType: () => Y, ETextureFilterType: () => z, ETextureFormat: () => X, ETextureWrapMode: () => q, GLTFBinaryExtension: () => Ee, GLTFLoader: () => Oe, GLTFLoaderBase: () => we, GLTFLoaderExtension: () => Ce, GLTFMaterialsCommonExtension: () => Me, GLTFUtils: () => re });
      var f = {};
      a.r(f);
      var h = {};
      a.r(h), a.d(h, { AddObjectAccessorToKey: () => Ne.oR, EXT_lights_area: () => je, EXT_lights_ies: () => tt, EXT_lights_image_based: () => We, EXT_mesh_gpu_instancing: () => Ze, EXT_meshopt_compression: () => ze, EXT_texture_avif: () => $e, EXT_texture_webp: () => Qe, ExtrasAsMetadata: () => $n, FlowGraphGLTFDataProvider: () => er.FlowGraphGLTFDataProvider, GetMappingForKey: () => Ne.tQ, GetPathToObjectConverter: () => Ne.Wt, InteractivityGraphToFlowGraphParser: () => Dn, KHR_animation_pointer: () => xn, KHR_draco_mesh_compression: () => rt, KHR_interactivity: () => Un, KHR_lights: () => at, KHR_materials_anisotropy: () => mt, KHR_materials_clearcoat: () => ft, KHR_materials_diffuse_roughness: () => Bt, KHR_materials_diffuse_transmission: () => Pt, KHR_materials_dispersion: () => It, KHR_materials_emissive_strength: () => gt, KHR_materials_ior: () => At, KHR_materials_iridescence: () => pt, KHR_materials_pbrSpecularGlossiness: () => st, KHR_materials_sheen: () => bt, KHR_materials_specular: () => Tt, KHR_materials_transmission: () => Mt, KHR_materials_unlit: () => ut, KHR_materials_variants: () => Ot, KHR_materials_volume: () => Lt, KHR_mesh_quantization: () => Gt, KHR_node_hoverability: () => Qn, KHR_node_selectability: () => Zn, KHR_node_visibility: () => Wn, KHR_texture_basisu: () => Dt, KHR_texture_transform: () => Ut, KHR_xmp_json_ld: () => Kt, MSFT_audio_emitter: () => wn, MSFT_lod: () => Cn, MSFT_minecraftMesh: () => Mn, MSFT_sRGBFactors: () => Pn, SetInterpolationForKey: () => Ne.ZU, _AddInteractivityObjectModel: () => jn, addNewInteractivityFlowGraphMapping: () => Nn, getAllSupportedNativeNodeTypes: () => Gn, getMappingForDeclaration: () => Ln, getMappingForFullOperationName: () => Rn, gltfTypeToBabylonType: () => Vn });
      var p = {};
      a.r(p), a.d(p, { AddObjectAccessorToKey: () => Ne.oR, AnimationPropertyInfo: () => Ve.AnimationPropertyInfo, ArrayItem: () => Be, EXT_lights_area: () => je, EXT_lights_ies: () => tt, EXT_lights_image_based: () => We, EXT_mesh_gpu_instancing: () => Ze, EXT_meshopt_compression: () => ze, EXT_texture_avif: () => $e, EXT_texture_webp: () => Qe, ExtrasAsMetadata: () => $n, FlowGraphGLTFDataProvider: () => er.FlowGraphGLTFDataProvider, GLTFFileLoader: () => te, GLTFLoader: () => Ge, GetMappingForKey: () => Ne.tQ, GetPathToObjectConverter: () => Ne.Wt, InteractivityGraphToFlowGraphParser: () => Dn, KHR_animation_pointer: () => xn, KHR_draco_mesh_compression: () => rt, KHR_interactivity: () => Un, KHR_lights: () => at, KHR_materials_anisotropy: () => mt, KHR_materials_clearcoat: () => ft, KHR_materials_diffuse_roughness: () => Bt, KHR_materials_diffuse_transmission: () => Pt, KHR_materials_dispersion: () => It, KHR_materials_emissive_strength: () => gt, KHR_materials_ior: () => At, KHR_materials_iridescence: () => pt, KHR_materials_pbrSpecularGlossiness: () => st, KHR_materials_sheen: () => bt, KHR_materials_specular: () => Tt, KHR_materials_transmission: () => Mt, KHR_materials_unlit: () => ut, KHR_materials_variants: () => Ot, KHR_materials_volume: () => Lt, KHR_mesh_quantization: () => Gt, KHR_node_hoverability: () => Qn, KHR_node_selectability: () => Zn, KHR_node_visibility: () => Wn, KHR_texture_basisu: () => Dt, KHR_texture_transform: () => Ut, KHR_xmp_json_ld: () => Kt, LoadBoundingInfoFromPositionAccessor: () => ke, MSFT_audio_emitter: () => wn, MSFT_lod: () => Cn, MSFT_minecraftMesh: () => Mn, MSFT_sRGBFactors: () => Pn, OpenPBRMaterialLoadingAdapter: () => De.OpenPBRMaterialLoadingAdapter, PBRMaterialLoadingAdapter: () => He.PBRMaterialLoadingAdapter, SetInterpolationForKey: () => Ne.ZU, TransformNodeAnimationPropertyInfo: () => Ve.TransformNodeAnimationPropertyInfo, WeightAnimationPropertyInfo: () => Ve.WeightAnimationPropertyInfo, _AddInteractivityObjectModel: () => jn, addNewInteractivityFlowGraphMapping: () => Nn, getAllSupportedNativeNodeTypes: () => Gn, getMappingForDeclaration: () => Ln, getMappingForFullOperationName: () => Rn, getQuaternion: () => Ve.getQuaternion, getVector3: () => Ve.getVector3, getWeights: () => Ve.getWeights, gltfTypeToBabylonType: () => Vn, registerGLTFExtension: () => Re, registeredGLTFExtensions: () => Pe, unregisterGLTFExtension: () => Le });
      var d = {};
      a.r(d), a.d(d, { MTLFileLoader: () => tr, OBJFileLoader: () => rr, SolidParser: () => nr });
      var m = {};
      a.r(m), a.d(m, { STLFileLoader: () => ar });
      var _ = {};
      a.r(_), a.d(_, { BVHFileLoader: () => I, GLTF1: () => c, GLTF2: () => p, GLTFFileLoader: () => te, GLTFLoaderAnimationStartMode: () => G, GLTFLoaderCoordinateSystemMode: () => k, GLTFLoaderDefaultOptions: () => ee, GLTFLoaderState: () => V, GLTFValidation: () => D, MTLFileLoader: () => tr, OBJFileLoader: () => rr, ReadBvh: () => R, SPLATFileLoader: () => hr, STLFileLoader: () => ar, SolidParser: () => nr });
      var g = a(597), y = "Xposition", b = "Yposition", v = "Zposition", T = "Xrotation", x = "Yrotation", A = "Zrotation", w = "HIERARCHY", O = "MOTION", C = function(e2) {
        this.loopMode = g.Animation.ANIMATIONLOOPMODE_CYCLE, this.list = [], this.root = E(), this.numFrames = 0, this.frameRate = 0, this.skeleton = e2;
      };
      function E() {
        return { name: "", type: "", offset: new g.Vector3(), channels: [], children: [], frames: [], parent: null };
      }
      function M(e2, t2, n2) {
        for (var r2 = function(e3) {
          var t3 = e3.offset.x, n3 = e3.offset.y, r3 = e3.offset.z;
          return g.Matrix.Translation(t3, n3, r3);
        }(e2), o2 = new g.Bone(e2.name, n2.skeleton, t2, r2), a2 = function(e3, t3) {
          if (0 === e3.frames.length) return [];
          for (var n3 = [], r3 = e3.channels.some(function(e4) {
            return e4 === y || e4 === b || e4 === v;
          }), o3 = e3.channels.some(function(e4) {
            return e4 === T || e4 === x || e4 === A;
          }), a3 = new g.Animation("".concat(e3.name, "_pos"), "position", t3.frameRate, g.Animation.ANIMATIONTYPE_VECTOR3, t3.loopMode), i3 = new g.Animation("".concat(e3.name, "_rot"), "rotationQuaternion", t3.frameRate, g.Animation.ANIMATIONTYPE_QUATERNION, t3.loopMode), s3 = [], l3 = [], u3 = 0; u3 < e3.frames.length; u3++) {
            var c3 = e3.frames[u3];
            r3 && c3.position && s3.push({ frame: c3.frame, value: c3.position.clone() }), o3 && l3.push({ frame: c3.frame, value: c3.rotation.clone() });
          }
          return s3.length > 0 && (a3.setKeys(s3), n3.push(a3)), l3.length > 0 && (i3.setKeys(l3), n3.push(i3)), n3;
        }(e2, n2), i2 = 0, s2 = a2; i2 < s2.length; i2++) {
          var l2 = s2[i2];
          l2.getKeys() && l2.getKeys().length > 0 && o2.animations.push(l2);
        }
        for (var u2 = 0, c2 = e2.children; u2 < c2.length; u2++) M(c2[u2], o2, n2);
      }
      function F(e2, t2, n2, r2) {
        if ("ENDSITE" !== n2.type) {
          var o2 = { frame: 0, position: new g.Vector3(), rotation: new g.Quaternion() };
          o2.frame = t2, o2.position = new g.Vector3(), o2.rotation = new g.Quaternion(), n2.frames.push(o2);
          for (var a2 = g.Matrix.Identity(), i2 = 0; i2 < n2.channels.length; ++i2) {
            var s2 = n2.channels[i2], l2 = e2[r2.i++];
            if (l2) {
              var u2 = parseFloat(l2.trim());
              if (s2.endsWith("position")) switch (s2) {
                case y:
                  o2.position.x = u2;
                  break;
                case b:
                  o2.position.y = u2;
                  break;
                case v:
                  o2.position.z = u2;
              }
              else if (s2.endsWith("rotation")) {
                var c2 = g.Tools.ToRadians(u2), f2 = void 0;
                switch (s2) {
                  case T:
                    f2 = g.Matrix.RotationX(c2);
                    break;
                  case x:
                    f2 = g.Matrix.RotationY(c2);
                    break;
                  case A:
                    f2 = g.Matrix.RotationZ(c2);
                }
                a2 = f2.multiply(a2);
              }
            }
          }
          g.Quaternion.FromRotationMatrixToRef(a2, o2.rotation);
          for (var h2 = 0, p2 = n2.children; h2 < p2.length; h2++) F(e2, t2, p2[h2], r2);
        }
      }
      function P(e2, t2, n2, r2) {
        var o2, a2, i2, s2, l2 = E();
        l2.parent = n2, r2.list.push(l2);
        var u2 = t2.trim().split(/\s+/);
        if ("END" === u2[0].toUpperCase() && "SITE" === u2[1].toUpperCase() ? (l2.type = "ENDSITE", l2.name = "ENDSITE") : (l2.name = u2[1], l2.type = u2[0].toUpperCase()), "{" != (null === (o2 = e2.shift()) || void 0 === o2 ? void 0 : o2.trim())) throw new Error("Expected opening { after type & name");
        var c2 = null === (a2 = e2.shift()) || void 0 === a2 ? void 0 : a2.trim().split(/\s+/);
        if (!c2) throw new Error("Unexpected end of file: missing OFFSET");
        if ("OFFSET" != (u2 = c2)[0].toUpperCase()) throw new Error("Expected OFFSET, but got: " + u2[0]);
        if (4 != u2.length) throw new Error("OFFSET: Invalid number of values");
        var f2 = new g.Vector3(parseFloat(u2[1]), parseFloat(u2[2]), parseFloat(u2[3]));
        if (isNaN(f2.x) || isNaN(f2.y) || isNaN(f2.z)) throw new Error("OFFSET: Invalid values");
        if (l2.offset = f2, "ENDSITE" != l2.type) {
          if (!(u2 = null === (i2 = e2.shift()) || void 0 === i2 ? void 0 : i2.trim().split(/\s+/))) throw new Error("Unexpected end of file: missing CHANNELS");
          if ("CHANNELS" != u2[0].toUpperCase()) throw new Error("Expected CHANNELS definition");
          var h2 = parseInt(u2[1]);
          l2.channels = u2.splice(2, h2), l2.children = [];
        }
        for (; e2.length > 0; ) {
          var p2 = null === (s2 = e2.shift()) || void 0 === s2 ? void 0 : s2.trim();
          if ("}" === p2) return l2;
          p2 && l2.children.push(P(e2, p2, l2, r2));
        }
        throw new Error("Unexpected end of file: missing closing brace");
      }
      function R(e2, t2, n2, r2) {
        var o2 = e2.split("\n"), a2 = r2.loopMode;
        t2._blockEntityCollection = !!n2;
        var i2 = new g.Skeleton("", "", t2);
        i2._parentContainer = n2, t2._blockEntityCollection = false;
        var s2 = new C(i2);
        s2.loopMode = a2;
        var l2 = o2.shift();
        if (!l2 || l2.trim().toUpperCase() !== w) throw new Error("HIERARCHY expected");
        var u2 = o2.shift();
        if (!u2) throw new Error("Unexpected end of file after HIERARCHY");
        var c2 = P(o2, u2.trim(), null, s2), f2 = o2.shift();
        if (!f2 || f2.trim().toUpperCase() !== O) throw new Error("MOTION expected");
        var h2 = o2.shift();
        if (!h2) throw new Error("Unexpected end of file before frame count");
        var p2 = h2.trim().split(/[\s]+/);
        if (p2.length < 2) throw new Error("Invalid frame count line");
        var d2 = parseInt(p2[1]);
        if (isNaN(d2)) throw new Error("Failed to read number of frames.");
        s2.numFrames = d2;
        var m2 = o2.shift();
        if (!m2) throw new Error("Unexpected end of file before frame time");
        var _2 = m2.trim().split(/[\s]+/);
        if (_2.length < 3) throw new Error("Invalid frame time line");
        var y2 = parseFloat(_2[2]);
        if (isNaN(y2)) throw new Error("Failed to read frame time.");
        if (y2 <= 0) throw new Error("Failed to read frame time. Invalid value " + y2);
        s2.frameRate = 1 / y2;
        for (var b2 = 0; b2 < d2; ++b2) {
          var v2 = o2.shift();
          v2 && F(v2.trim().split(/[\s]+/) || [], b2, c2, { i: 0 });
        }
        return s2.root = c2, M(s2.root, null, s2), s2.skeleton.returnToRest(), s2.skeleton;
      }
      var L = a(322), N = { ".bvh": { isBinary: false } }, I = function() {
        function e2(t2) {
          this.name = "bvh", this.extensions = N, this._loadingOptions = (0, L.Cl)((0, L.Cl)({}, e2._DefaultLoadingOptions), null != t2 ? t2 : {});
        }
        return Object.defineProperty(e2, "_DefaultLoadingOptions", { get: function() {
          return { loopMode: g.Animation.ANIMATIONLOOPMODE_CYCLE };
        }, enumerable: false, configurable: true }), e2.prototype.createPlugin = function(t2) {
          return new e2(t2.bvh);
        }, e2.prototype.canDirectLoad = function(e3) {
          return this.isBvhHeader(e3);
        }, e2.prototype.isBvhHeader = function(e3) {
          return "HIERARCHY" == e3.split("\n")[0];
        }, e2.prototype.isNotBvhHeader = function(e3) {
          return !this.isBvhHeader(e3);
        }, e2.prototype.importMeshAsync = function(e3, t2, n2) {
          if ("string" != typeof n2) return Promise.reject("BVH loader expects string data.");
          if (this.isNotBvhHeader(n2)) return Promise.reject("BVH loader expects HIERARCHY header.");
          try {
            var r2 = R(n2, t2, null, this._loadingOptions);
            return Promise.resolve({ meshes: [], particleSystems: [], skeletons: [r2], animationGroups: [], transformNodes: [], geometries: [], lights: [], spriteManagers: [] });
          } catch (e4) {
            return Promise.reject(e4);
          }
        }, e2.prototype.loadAsync = function(e3, t2) {
          return "string" != typeof t2 ? Promise.reject("BVH loader expects string data.") : this.isNotBvhHeader(t2) ? Promise.reject("BVH loader expects HIERARCHY header.") : this.importMeshAsync(null, e3, t2).then(function() {
          });
        }, e2.prototype.loadAssetContainerAsync = function(e3, t2) {
          if ("string" != typeof t2) return Promise.reject("BVH loader expects string data.");
          if (this.isNotBvhHeader(t2)) return Promise.reject("BVH loader expects HIERARCHY header.");
          var n2 = new g.AssetContainer(e3);
          try {
            var r2 = R(t2, e3, n2, this._loadingOptions);
            return n2.skeletons.push(r2), Promise.resolve(n2);
          } catch (e4) {
            return Promise.reject(e4);
          }
        }, e2;
      }();
      function S(e2, t2, n2, r2) {
        var o2 = { externalResourceFunction: r2 };
        return n2 && (o2.uri = "file:" === t2 ? n2 : t2 + n2), ArrayBuffer.isView(e2) ? GLTFValidator.validateBytes(e2, o2) : GLTFValidator.validateString(e2, o2);
      }
      function B() {
        var e2 = [];
        onmessage = function(t2) {
          var n2 = t2.data;
          switch (n2.id) {
            case "init":
              importScripts(n2.url);
              break;
            case "validate":
              S(n2.data, n2.rootUrl, n2.fileName, function(t3) {
                return new Promise(function(n3, r2) {
                  var o2 = e2.length;
                  e2.push({ resolve: n3, reject: r2 }), postMessage({ id: "getExternalResource", index: o2, uri: t3 });
                });
              }).then(function(e3) {
                postMessage({ id: "validate.resolve", value: e3 });
              }, function(e3) {
                postMessage({ id: "validate.reject", reason: e3 });
              });
              break;
            case "getExternalResource.resolve":
              e2[n2.index].resolve(n2.value);
              break;
            case "getExternalResource.reject":
              e2[n2.index].reject(n2.reason);
          }
        };
      }
      (0, g.RegisterSceneLoaderPlugin)(new I());
      var k, G, V, D = function() {
        function e2() {
        }
        return e2.ValidateAsync = function(e3, t2, n2, r2) {
          var o2 = this;
          return "function" == typeof Worker ? new Promise(function(a2, i2) {
            var s2 = "".concat(S, "(").concat(B, ")()"), l2 = URL.createObjectURL(new Blob([s2], { type: "application/javascript" })), u2 = new Worker(l2), c2 = function(e4) {
              u2.removeEventListener("error", c2), u2.removeEventListener("message", f2), i2(e4);
            }, f2 = function(e4) {
              var t3 = e4.data;
              switch (t3.id) {
                case "getExternalResource":
                  r2(t3.uri).then(function(e5) {
                    u2.postMessage({ id: "getExternalResource.resolve", index: t3.index, value: e5 }, [e5.buffer]);
                  }, function(e5) {
                    u2.postMessage({ id: "getExternalResource.reject", index: t3.index, reason: e5 });
                  });
                  break;
                case "validate.resolve":
                  u2.removeEventListener("error", c2), u2.removeEventListener("message", f2), a2(t3.value), u2.terminate();
                  break;
                case "validate.reject":
                  u2.removeEventListener("error", c2), u2.removeEventListener("message", f2), i2(t3.reason), u2.terminate();
              }
            };
            if (u2.addEventListener("error", c2), u2.addEventListener("message", f2), u2.postMessage({ id: "init", url: g.Tools.GetBabylonScriptURL(o2.Configuration.url) }), ArrayBuffer.isView(e3)) {
              var h2 = e3.slice();
              u2.postMessage({ id: "validate", data: h2, rootUrl: t2, fileName: n2 }, [h2.buffer]);
            } else u2.postMessage({ id: "validate", data: e3, rootUrl: t2, fileName: n2 });
          }) : (this._LoadScriptPromise || (this._LoadScriptPromise = g.Tools.LoadBabylonScriptAsync(this.Configuration.url)), this._LoadScriptPromise.then(function() {
            return S(e3, t2, n2, r2);
          }));
        }, e2.Configuration = { url: "".concat(g.Tools._DefaultCdnUrl, "/gltf_validator.js") }, e2;
      }(), H = "Z2xURg", U = "gltf", j = { ".gltf": { isBinary: false, mimeType: "model/gltf+json" }, ".glb": { isBinary: true, mimeType: "model/gltf-binary" } };
      function K(e2, t2, n2) {
        try {
          return Promise.resolve(new Uint8Array(e2, t2, n2));
        } catch (e3) {
          return Promise.reject(e3);
        }
      }
      !function(e2) {
        e2[e2.AUTO = 0] = "AUTO", e2[e2.FORCE_RIGHT_HANDED = 1] = "FORCE_RIGHT_HANDED";
      }(k || (k = {})), function(e2) {
        e2[e2.NONE = 0] = "NONE", e2[e2.FIRST = 1] = "FIRST", e2[e2.ALL = 2] = "ALL";
      }(G || (G = {})), function(e2) {
        e2[e2.LOADING = 0] = "LOADING", e2[e2.READY = 1] = "READY", e2[e2.COMPLETE = 2] = "COMPLETE";
      }(V || (V = {}));
      var W, Y, Z, q, z, X, Q, J, $ = function() {
        this.alwaysComputeBoundingBox = false, this.alwaysComputeSkeletonRootNode = false, this.animationStartMode = G.FIRST, this.compileMaterials = false, this.compileShadowGenerators = false, this.coordinateSystemMode = k.AUTO, this.createInstances = true, this.loadAllMaterials = false, this.loadMorphTargets = true, this.loadNodeAnimations = true, this.loadOnlyMaterials = false, this.loadSkins = true, this.skipMaterials = false, this.targetFps = 60, this.transparencyAsCoverage = false, this.useClipPlane = false, this.useGltfTextureNames = false, this.useRangeRequests = false, this.useSRGBBuffers = true, this.validate = false, this.useOpenPBR = false;
      }, ee = new $(), te = function(e2) {
        function t2(t3) {
          var n2 = e2.call(this) || this;
          return n2.onParsedObservable = new g.Observable(), n2.onMeshLoadedObservable = new g.Observable(), n2.onSkinLoadedObservable = new g.Observable(), n2.onTextureLoadedObservable = new g.Observable(), n2.onMaterialLoadedObservable = new g.Observable(), n2.onCameraLoadedObservable = new g.Observable(), n2.onCompleteObservable = new g.Observable(), n2.onErrorObservable = new g.Observable(), n2.onDisposeObservable = new g.Observable(), n2.onExtensionLoadedObservable = new g.Observable(), n2.onValidatedObservable = new g.Observable(), n2._loader = null, n2._state = null, n2._requests = new Array(), n2.name = U, n2.extensions = j, n2.onLoaderStateChangedObservable = new g.Observable(), n2._logIndentLevel = 0, n2._loggingEnabled = false, n2._log = n2._logDisabled, n2._capturePerformanceCounters = false, n2._startPerformanceCounter = n2._startPerformanceCounterDisabled, n2._endPerformanceCounter = n2._endPerformanceCounterDisabled, n2.copyFrom(Object.assign((0, L.Cl)({}, ee), t3)), n2;
        }
        return (0, L.C6)(t2, e2), Object.defineProperty(t2.prototype, "onParsed", { set: function(e3) {
          this._onParsedObserver && this.onParsedObservable.remove(this._onParsedObserver), e3 && (this._onParsedObserver = this.onParsedObservable.add(e3));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onMeshLoaded", { set: function(e3) {
          this._onMeshLoadedObserver && this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver), e3 && (this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(e3));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onSkinLoaded", { set: function(e3) {
          this._onSkinLoadedObserver && this.onSkinLoadedObservable.remove(this._onSkinLoadedObserver), e3 && (this._onSkinLoadedObserver = this.onSkinLoadedObservable.add(function(t3) {
            return e3(t3.node, t3.skinnedNode);
          }));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onTextureLoaded", { set: function(e3) {
          this._onTextureLoadedObserver && this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver), e3 && (this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(e3));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onMaterialLoaded", { set: function(e3) {
          this._onMaterialLoadedObserver && this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver), e3 && (this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(e3));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onCameraLoaded", { set: function(e3) {
          this._onCameraLoadedObserver && this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver), e3 && (this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(e3));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onComplete", { set: function(e3) {
          this._onCompleteObserver && this.onCompleteObservable.remove(this._onCompleteObserver), this._onCompleteObserver = this.onCompleteObservable.add(e3);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onError", { set: function(e3) {
          this._onErrorObserver && this.onErrorObservable.remove(this._onErrorObserver), this._onErrorObserver = this.onErrorObservable.add(e3);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onDispose", { set: function(e3) {
          this._onDisposeObserver && this.onDisposeObservable.remove(this._onDisposeObserver), this._onDisposeObserver = this.onDisposeObservable.add(e3);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onExtensionLoaded", { set: function(e3) {
          this._onExtensionLoadedObserver && this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver), this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(e3);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "loggingEnabled", { get: function() {
          return this._loggingEnabled;
        }, set: function(e3) {
          this._loggingEnabled !== e3 && (this._loggingEnabled = e3, this._loggingEnabled ? this._log = this._logEnabled : this._log = this._logDisabled);
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "capturePerformanceCounters", { get: function() {
          return this._capturePerformanceCounters;
        }, set: function(e3) {
          this._capturePerformanceCounters !== e3 && (this._capturePerformanceCounters = e3, this._capturePerformanceCounters ? (this._startPerformanceCounter = this._startPerformanceCounterEnabled, this._endPerformanceCounter = this._endPerformanceCounterEnabled) : (this._startPerformanceCounter = this._startPerformanceCounterDisabled, this._endPerformanceCounter = this._endPerformanceCounterDisabled));
        }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "onValidated", { set: function(e3) {
          this._onValidatedObserver && this.onValidatedObservable.remove(this._onValidatedObserver), this._onValidatedObserver = this.onValidatedObservable.add(e3);
        }, enumerable: false, configurable: true }), t2.prototype.dispose = function() {
          this._loader && (this._loader.dispose(), this._loader = null);
          for (var e3 = 0, t3 = this._requests; e3 < t3.length; e3++) t3[e3].abort();
          this._requests.length = 0, delete this._progressCallback, this.preprocessUrlAsync = function(e4) {
            return Promise.resolve(e4);
          }, this.onMeshLoadedObservable.clear(), this.onSkinLoadedObservable.clear(), this.onTextureLoadedObservable.clear(), this.onMaterialLoadedObservable.clear(), this.onCameraLoadedObservable.clear(), this.onCompleteObservable.clear(), this.onExtensionLoadedObservable.clear(), this.onDisposeObservable.notifyObservers(void 0), this.onDisposeObservable.clear();
        }, t2.prototype.loadFile = function(e3, t3, n2, r2, o2, a2, i2, s2) {
          var l2 = this;
          if (ArrayBuffer.isView(t3)) return this._loadBinary(e3, t3, n2, r2, i2, s2), null;
          this._progressCallback = o2;
          var u2 = t3.name || g.Tools.GetFilename(t3);
          if (a2) {
            if (this.useRangeRequests) {
              this.validate && g.Logger.Warn("glTF validation is not supported when range requests are enabled");
              var c2 = { abort: function() {
              }, onCompleteObservable: new g.Observable() }, f2 = { readAsync: function(n3, r3) {
                return new Promise(function(o3, a3) {
                  l2._loadFile(e3, t3, function(e4) {
                    o3(new Uint8Array(e4));
                  }, true, function(e4) {
                    a3(e4);
                  }, function(e4) {
                    e4.setRequestHeader("Range", "bytes=".concat(n3, "-").concat(n3 + r3 - 1));
                  });
                });
              }, byteLength: 0 };
              return this._unpackBinaryAsync(new g.DataReader(f2)).then(function(e4) {
                c2.onCompleteObservable.notifyObservers(c2), r2(e4);
              }, i2 ? function(e4) {
                return i2(void 0, e4);
              } : void 0), c2;
            }
            return this._loadFile(e3, t3, function(t4) {
              l2._validate(e3, new Uint8Array(t4, 0, t4.byteLength), n2, u2), l2._unpackBinaryAsync(new g.DataReader({ readAsync: function(e4, n3) {
                return K(t4, e4, n3);
              }, byteLength: t4.byteLength })).then(function(e4) {
                r2(e4);
              }, i2 ? function(e4) {
                return i2(void 0, e4);
              } : void 0);
            }, true, i2);
          }
          return this._loadFile(e3, t3, function(t4) {
            try {
              l2._validate(e3, t4, n2, u2), r2({ json: l2._parseJson(t4) });
            } catch (e4) {
              i2 && i2();
            }
          }, false, i2);
        }, t2.prototype._loadBinary = function(e3, t3, n2, r2, o2, a2) {
          this._validate(e3, new Uint8Array(t3.buffer, t3.byteOffset, t3.byteLength), n2, a2), this._unpackBinaryAsync(new g.DataReader({ readAsync: function(e4, n3) {
            return function(e5, t4, n4) {
              try {
                if (t4 < 0 || t4 >= e5.byteLength) throw new RangeError("Offset is out of range.");
                if (t4 + n4 > e5.byteLength) throw new RangeError("Length is out of range.");
                return Promise.resolve(new Uint8Array(e5.buffer, e5.byteOffset + t4, n4));
              } catch (e6) {
                return Promise.reject(e6);
              }
            }(t3, e4, n3);
          }, byteLength: t3.byteLength })).then(function(e4) {
            r2(e4);
          }, o2 ? function(e4) {
            return o2(void 0, e4);
          } : void 0);
        }, t2.prototype.importMeshAsync = function(e3, t3, n2, r2, o2, a2) {
          var i2 = this;
          return Promise.resolve().then(function() {
            return i2.onParsedObservable.notifyObservers(n2), i2.onParsedObservable.clear(), i2._log("Loading ".concat(a2 || "")), i2._loader = i2._getLoader(n2), i2._loader.importMeshAsync(e3, t3, null, n2, r2, o2, a2);
          });
        }, t2.prototype.loadAsync = function(e3, t3, n2, r2, o2) {
          var a2 = this;
          return Promise.resolve().then(function() {
            return a2.onParsedObservable.notifyObservers(t3), a2.onParsedObservable.clear(), a2._log("Loading ".concat(o2 || "")), a2._loader = a2._getLoader(t3), a2._loader.loadAsync(e3, t3, n2, r2, o2);
          });
        }, t2.prototype.loadAssetContainerAsync = function(e3, t3, n2, r2, o2) {
          var a2 = this;
          return Promise.resolve().then(function() {
            a2.onParsedObservable.notifyObservers(t3), a2.onParsedObservable.clear(), a2._log("Loading ".concat(o2 || "")), a2._loader = a2._getLoader(t3);
            var i2 = new g.AssetContainer(e3), s2 = [];
            a2.onMaterialLoadedObservable.add(function(e4) {
              s2.push(e4);
            });
            var l2 = [];
            a2.onTextureLoadedObservable.add(function(e4) {
              l2.push(e4);
            });
            var u2 = [];
            a2.onCameraLoadedObservable.add(function(e4) {
              u2.push(e4);
            });
            var c2 = [];
            return a2.onMeshLoadedObservable.add(function(e4) {
              e4.morphTargetManager && c2.push(e4.morphTargetManager);
            }), a2._loader.importMeshAsync(null, e3, i2, t3, n2, r2, o2).then(function(e4) {
              return Array.prototype.push.apply(i2.geometries, e4.geometries), Array.prototype.push.apply(i2.meshes, e4.meshes), Array.prototype.push.apply(i2.particleSystems, e4.particleSystems), Array.prototype.push.apply(i2.skeletons, e4.skeletons), Array.prototype.push.apply(i2.animationGroups, e4.animationGroups), Array.prototype.push.apply(i2.materials, s2), Array.prototype.push.apply(i2.textures, l2), Array.prototype.push.apply(i2.lights, e4.lights), Array.prototype.push.apply(i2.transformNodes, e4.transformNodes), Array.prototype.push.apply(i2.cameras, u2), Array.prototype.push.apply(i2.morphTargetManagers, c2), i2;
            });
          });
        }, t2.prototype.canDirectLoad = function(e3) {
          return function(e4) {
            return -1 !== e4.indexOf("asset") && -1 !== e4.indexOf("version") || e4.startsWith("data:base64," + H) || e4.startsWith("data:;base64," + H) || e4.startsWith("data:application/octet-stream;base64," + H) || e4.startsWith("data:model/gltf-binary;base64," + H);
          }(e3);
        }, t2.prototype.directLoad = function(e3, t3) {
          if (t3.startsWith("base64," + H) || t3.startsWith(";base64," + H) || t3.startsWith("application/octet-stream;base64," + H) || t3.startsWith("model/gltf-binary;base64," + H)) {
            var n2 = (0, g.DecodeBase64UrlToBinary)(t3);
            return this._validate(e3, new Uint8Array(n2, 0, n2.byteLength)), this._unpackBinaryAsync(new g.DataReader({ readAsync: function(e4, t4) {
              return K(n2, e4, t4);
            }, byteLength: n2.byteLength }));
          }
          return this._validate(e3, t3), Promise.resolve({ json: this._parseJson(t3) });
        }, t2.prototype.createPlugin = function(e3) {
          return new t2(e3[U]);
        }, Object.defineProperty(t2.prototype, "loaderState", { get: function() {
          return this._state;
        }, enumerable: false, configurable: true }), t2.prototype.whenCompleteAsync = function() {
          var e3 = this;
          return new Promise(function(t3, n2) {
            e3.onCompleteObservable.addOnce(function() {
              t3();
            }), e3.onErrorObservable.addOnce(function(e4) {
              n2(e4);
            });
          });
        }, t2.prototype._setState = function(e3) {
          this._state !== e3 && (this._state = e3, this.onLoaderStateChangedObservable.notifyObservers(this._state), this._log(V[this._state]));
        }, t2.prototype._loadFile = function(e3, t3, n2, r2, o2, a2) {
          var i2 = this, s2 = e3._loadFile(t3, n2, function(e4) {
            i2._onProgress(e4, s2);
          }, true, r2, o2, a2);
          return s2.onCompleteObservable.add(function() {
            s2._lengthComputable = true, s2._total = s2._loaded;
          }), this._requests.push(s2), s2;
        }, t2.prototype._onProgress = function(e3, t3) {
          if (this._progressCallback) {
            t3._lengthComputable = e3.lengthComputable, t3._loaded = e3.loaded, t3._total = e3.total;
            for (var n2 = true, r2 = 0, o2 = 0, a2 = 0, i2 = this._requests; a2 < i2.length; a2++) {
              var s2 = i2[a2];
              if (void 0 === s2._lengthComputable || void 0 === s2._loaded || void 0 === s2._total) return;
              n2 = n2 && s2._lengthComputable, r2 += s2._loaded, o2 += s2._total;
            }
            this._progressCallback({ lengthComputable: n2, loaded: r2, total: n2 ? o2 : 0 });
          }
        }, t2.prototype._validate = function(e3, t3, n2, r2) {
          var o2 = this;
          void 0 === n2 && (n2 = ""), void 0 === r2 && (r2 = ""), this.validate && (this._startPerformanceCounter("Validate JSON"), D.ValidateAsync(t3, n2, r2, function(t4) {
            return o2.preprocessUrlAsync(n2 + t4).then(function(t5) {
              return e3._loadFileAsync(t5, void 0, true, true).then(function(e4) {
                return new Uint8Array(e4, 0, e4.byteLength);
              });
            });
          }).then(function(e4) {
            o2._endPerformanceCounter("Validate JSON"), o2.onValidatedObservable.notifyObservers(e4), o2.onValidatedObservable.clear();
          }, function(e4) {
            o2._endPerformanceCounter("Validate JSON"), g.Tools.Warn("Failed to validate: ".concat(e4.message)), o2.onValidatedObservable.clear();
          }));
        }, t2.prototype._getLoader = function(e3) {
          var n2 = e3.json.asset || {};
          this._log("Asset version: ".concat(n2.version)), n2.minVersion && this._log("Asset minimum version: ".concat(n2.minVersion)), n2.generator && this._log("Asset generator: ".concat(n2.generator));
          var r2 = t2._parseVersion(n2.version);
          if (!r2) throw new Error("Invalid version: " + n2.version);
          if (void 0 !== n2.minVersion) {
            var o2 = t2._parseVersion(n2.minVersion);
            if (!o2) throw new Error("Invalid minimum version: " + n2.minVersion);
            if (t2._compareVersion(o2, { major: 2, minor: 0 }) > 0) throw new Error("Incompatible minimum version: " + n2.minVersion);
          }
          var a2 = { 1: t2._CreateGLTF1Loader, 2: t2._CreateGLTF2Loader }[r2.major];
          if (!a2) throw new Error("Unsupported version: " + n2.version);
          return a2(this);
        }, t2.prototype._parseJson = function(e3) {
          this._startPerformanceCounter("Parse JSON"), this._log("JSON length: ".concat(e3.length));
          var t3 = JSON.parse(e3);
          return this._endPerformanceCounter("Parse JSON"), t3;
        }, t2.prototype._unpackBinaryAsync = function(e3) {
          var t3 = this;
          return this._startPerformanceCounter("Unpack Binary"), e3.loadAsync(20).then(function() {
            var n2 = e3.readUint32();
            if (1179937895 !== n2) throw new g.RuntimeError("Unexpected magic: " + n2, g.ErrorCodes.GLTFLoaderUnexpectedMagicError);
            var r2 = e3.readUint32();
            t3.loggingEnabled && t3._log("Binary version: ".concat(r2));
            var o2, a2 = e3.readUint32();
            switch (t3.useRangeRequests || a2 === e3.buffer.byteLength || g.Logger.Warn("Length in header does not match actual data length: ".concat(a2, " != ").concat(e3.buffer.byteLength)), r2) {
              case 1:
                o2 = t3._unpackBinaryV1Async(e3, a2);
                break;
              case 2:
                o2 = t3._unpackBinaryV2Async(e3, a2);
                break;
              default:
                throw new Error("Unsupported version: " + r2);
            }
            return t3._endPerformanceCounter("Unpack Binary"), o2;
          });
        }, t2.prototype._unpackBinaryV1Async = function(e3, t3) {
          var n2 = e3.readUint32(), r2 = e3.readUint32();
          if (0 !== r2) throw new Error("Unexpected content format: ".concat(r2));
          var o2 = t3 - e3.byteOffset, a2 = { json: this._parseJson(e3.readString(n2)), bin: null };
          if (0 !== o2) {
            var i2 = e3.byteOffset;
            a2.bin = { readAsync: function(t4, n3) {
              return e3.buffer.readAsync(i2 + t4, n3);
            }, byteLength: o2 };
          }
          return Promise.resolve(a2);
        }, t2.prototype._unpackBinaryV2Async = function(e3, t3) {
          var n2 = this, r2 = 1313821514, o2 = e3.readUint32();
          if (e3.readUint32() !== r2) throw new Error("First chunk format is not JSON");
          return e3.byteOffset + o2 === t3 ? e3.loadAsync(o2).then(function() {
            return { json: n2._parseJson(e3.readString(o2)), bin: null };
          }) : e3.loadAsync(o2 + 8).then(function() {
            var a2 = { json: n2._parseJson(e3.readString(o2)), bin: null }, i2 = function() {
              var n3 = e3.readUint32();
              switch (e3.readUint32()) {
                case r2:
                  throw new Error("Unexpected JSON chunk");
                case 5130562:
                  var o3 = e3.byteOffset;
                  a2.bin = { readAsync: function(t4, n4) {
                    return e3.buffer.readAsync(o3 + t4, n4);
                  }, byteLength: n3 }, e3.skipBytes(n3);
                  break;
                default:
                  e3.skipBytes(n3);
              }
              return e3.byteOffset !== t3 ? e3.loadAsync(8).then(i2) : Promise.resolve(a2);
            };
            return i2();
          });
        }, t2._parseVersion = function(e3) {
          if ("1.0" === e3 || "1.0.1" === e3) return { major: 1, minor: 0 };
          var t3 = (e3 + "").match(/^(\d+)\.(\d+)/);
          return t3 ? { major: parseInt(t3[1]), minor: parseInt(t3[2]) } : null;
        }, t2._compareVersion = function(e3, t3) {
          return e3.major > t3.major ? 1 : e3.major < t3.major ? -1 : e3.minor > t3.minor ? 1 : e3.minor < t3.minor ? -1 : 0;
        }, t2.prototype._logOpen = function(e3) {
          this._log(e3), this._logIndentLevel++;
        }, t2.prototype._logClose = function() {
          --this._logIndentLevel;
        }, t2.prototype._logEnabled = function(e3) {
          var n2 = t2._logSpaces.substring(0, 2 * this._logIndentLevel);
          g.Logger.Log("".concat(n2).concat(e3));
        }, t2.prototype._logDisabled = function(e3) {
        }, t2.prototype._startPerformanceCounterEnabled = function(e3) {
          g.Tools.StartPerformanceCounter(e3);
        }, t2.prototype._startPerformanceCounterDisabled = function(e3) {
        }, t2.prototype._endPerformanceCounterEnabled = function(e3) {
          g.Tools.EndPerformanceCounter(e3);
        }, t2.prototype._endPerformanceCounterDisabled = function(e3) {
        }, t2.IncrementalLoading = true, t2.HomogeneousCoordinates = false, t2._logSpaces = "                                ", t2;
      }(function(e2) {
        function t2() {
          var t3 = null !== e2 && e2.apply(this, arguments) || this;
          return t3.extensionOptions = {}, t3.preprocessUrlAsync = function(e3) {
            return Promise.resolve(e3);
          }, t3;
        }
        return (0, L.C6)(t2, e2), t2.prototype.copyFrom = function(e3) {
          var t3, n2, r2, o2, a2, i2, s2, l2, u2, c2, f2, h2, p2, d2, m2, _2, g2, y2, b2, v2, T2, x2, A2, w2, O2;
          e3 && (this.alwaysComputeBoundingBox = null !== (t3 = e3.alwaysComputeBoundingBox) && void 0 !== t3 ? t3 : this.alwaysComputeBoundingBox, this.alwaysComputeSkeletonRootNode = null !== (n2 = e3.alwaysComputeSkeletonRootNode) && void 0 !== n2 ? n2 : this.alwaysComputeSkeletonRootNode, this.animationStartMode = null !== (r2 = e3.animationStartMode) && void 0 !== r2 ? r2 : this.animationStartMode, this.capturePerformanceCounters = null !== (o2 = e3.capturePerformanceCounters) && void 0 !== o2 ? o2 : this.capturePerformanceCounters, this.compileMaterials = null !== (a2 = e3.compileMaterials) && void 0 !== a2 ? a2 : this.compileMaterials, this.compileShadowGenerators = null !== (i2 = e3.compileShadowGenerators) && void 0 !== i2 ? i2 : this.compileShadowGenerators, this.coordinateSystemMode = null !== (s2 = e3.coordinateSystemMode) && void 0 !== s2 ? s2 : this.coordinateSystemMode, this.createInstances = null !== (l2 = e3.createInstances) && void 0 !== l2 ? l2 : this.createInstances, this.customRootNode = e3.customRootNode, this.extensionOptions = null !== (u2 = e3.extensionOptions) && void 0 !== u2 ? u2 : this.extensionOptions, this.loadAllMaterials = null !== (c2 = e3.loadAllMaterials) && void 0 !== c2 ? c2 : this.loadAllMaterials, this.loadMorphTargets = null !== (f2 = e3.loadMorphTargets) && void 0 !== f2 ? f2 : this.loadMorphTargets, this.loadNodeAnimations = null !== (h2 = e3.loadNodeAnimations) && void 0 !== h2 ? h2 : this.loadNodeAnimations, this.loadOnlyMaterials = null !== (p2 = e3.loadOnlyMaterials) && void 0 !== p2 ? p2 : this.loadOnlyMaterials, this.loadSkins = null !== (d2 = e3.loadSkins) && void 0 !== d2 ? d2 : this.loadSkins, this.loggingEnabled = null !== (m2 = e3.loggingEnabled) && void 0 !== m2 ? m2 : this.loggingEnabled, this.onCameraLoaded = e3.onCameraLoaded, this.onMaterialLoaded = e3.onMaterialLoaded, this.onMeshLoaded = e3.onMeshLoaded, this.onParsed = e3.onParsed, this.onSkinLoaded = e3.onSkinLoaded, this.onTextureLoaded = e3.onTextureLoaded, this.onValidated = e3.onValidated, this.preprocessUrlAsync = null !== (_2 = e3.preprocessUrlAsync) && void 0 !== _2 ? _2 : this.preprocessUrlAsync, this.skipMaterials = null !== (g2 = e3.skipMaterials) && void 0 !== g2 ? g2 : this.skipMaterials, this.targetFps = null !== (y2 = e3.targetFps) && void 0 !== y2 ? y2 : this.targetFps, this.transparencyAsCoverage = null !== (b2 = e3.transparencyAsCoverage) && void 0 !== b2 ? b2 : this.transparencyAsCoverage, this.useClipPlane = null !== (v2 = e3.useClipPlane) && void 0 !== v2 ? v2 : this.useClipPlane, this.useGltfTextureNames = null !== (T2 = e3.useGltfTextureNames) && void 0 !== T2 ? T2 : this.useGltfTextureNames, this.useOpenPBR = null !== (x2 = e3.useOpenPBR) && void 0 !== x2 ? x2 : this.useOpenPBR, this.useRangeRequests = null !== (A2 = e3.useRangeRequests) && void 0 !== A2 ? A2 : this.useRangeRequests, this.useSRGBBuffers = null !== (w2 = e3.useSRGBBuffers) && void 0 !== w2 ? w2 : this.useSRGBBuffers, this.validate = null !== (O2 = e3.validate) && void 0 !== O2 ? O2 : this.validate);
        }, t2;
      }($));
      (0, g.RegisterSceneLoaderPlugin)(new te()), function(e2) {
        e2[e2.BYTE = 5120] = "BYTE", e2[e2.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e2[e2.SHORT = 5122] = "SHORT", e2[e2.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", e2[e2.FLOAT = 5126] = "FLOAT";
      }(W || (W = {})), function(e2) {
        e2[e2.FRAGMENT = 35632] = "FRAGMENT", e2[e2.VERTEX = 35633] = "VERTEX";
      }(Y || (Y = {})), function(e2) {
        e2[e2.BYTE = 5120] = "BYTE", e2[e2.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e2[e2.SHORT = 5122] = "SHORT", e2[e2.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", e2[e2.INT = 5124] = "INT", e2[e2.UNSIGNED_INT = 5125] = "UNSIGNED_INT", e2[e2.FLOAT = 5126] = "FLOAT", e2[e2.FLOAT_VEC2 = 35664] = "FLOAT_VEC2", e2[e2.FLOAT_VEC3 = 35665] = "FLOAT_VEC3", e2[e2.FLOAT_VEC4 = 35666] = "FLOAT_VEC4", e2[e2.INT_VEC2 = 35667] = "INT_VEC2", e2[e2.INT_VEC3 = 35668] = "INT_VEC3", e2[e2.INT_VEC4 = 35669] = "INT_VEC4", e2[e2.BOOL = 35670] = "BOOL", e2[e2.BOOL_VEC2 = 35671] = "BOOL_VEC2", e2[e2.BOOL_VEC3 = 35672] = "BOOL_VEC3", e2[e2.BOOL_VEC4 = 35673] = "BOOL_VEC4", e2[e2.FLOAT_MAT2 = 35674] = "FLOAT_MAT2", e2[e2.FLOAT_MAT3 = 35675] = "FLOAT_MAT3", e2[e2.FLOAT_MAT4 = 35676] = "FLOAT_MAT4", e2[e2.SAMPLER_2D = 35678] = "SAMPLER_2D";
      }(Z || (Z = {})), function(e2) {
        e2[e2.CLAMP_TO_EDGE = 33071] = "CLAMP_TO_EDGE", e2[e2.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", e2[e2.REPEAT = 10497] = "REPEAT";
      }(q || (q = {})), function(e2) {
        e2[e2.NEAREST = 9728] = "NEAREST", e2[e2.LINEAR = 9728] = "LINEAR", e2[e2.NEAREST_MIPMAP_NEAREST = 9984] = "NEAREST_MIPMAP_NEAREST", e2[e2.LINEAR_MIPMAP_NEAREST = 9985] = "LINEAR_MIPMAP_NEAREST", e2[e2.NEAREST_MIPMAP_LINEAR = 9986] = "NEAREST_MIPMAP_LINEAR", e2[e2.LINEAR_MIPMAP_LINEAR = 9987] = "LINEAR_MIPMAP_LINEAR";
      }(z || (z = {})), function(e2) {
        e2[e2.ALPHA = 6406] = "ALPHA", e2[e2.RGB = 6407] = "RGB", e2[e2.RGBA = 6408] = "RGBA", e2[e2.LUMINANCE = 6409] = "LUMINANCE", e2[e2.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA";
      }(X || (X = {})), function(e2) {
        e2[e2.FRONT = 1028] = "FRONT", e2[e2.BACK = 1029] = "BACK", e2[e2.FRONT_AND_BACK = 1032] = "FRONT_AND_BACK";
      }(Q || (Q = {})), function(e2) {
        e2[e2.ZERO = 0] = "ZERO", e2[e2.ONE = 1] = "ONE", e2[e2.SRC_COLOR = 768] = "SRC_COLOR", e2[e2.ONE_MINUS_SRC_COLOR = 769] = "ONE_MINUS_SRC_COLOR", e2[e2.DST_COLOR = 774] = "DST_COLOR", e2[e2.ONE_MINUS_DST_COLOR = 775] = "ONE_MINUS_DST_COLOR", e2[e2.SRC_ALPHA = 770] = "SRC_ALPHA", e2[e2.ONE_MINUS_SRC_ALPHA = 771] = "ONE_MINUS_SRC_ALPHA", e2[e2.DST_ALPHA = 772] = "DST_ALPHA", e2[e2.ONE_MINUS_DST_ALPHA = 773] = "ONE_MINUS_DST_ALPHA", e2[e2.CONSTANT_COLOR = 32769] = "CONSTANT_COLOR", e2[e2.ONE_MINUS_CONSTANT_COLOR = 32770] = "ONE_MINUS_CONSTANT_COLOR", e2[e2.CONSTANT_ALPHA = 32771] = "CONSTANT_ALPHA", e2[e2.ONE_MINUS_CONSTANT_ALPHA = 32772] = "ONE_MINUS_CONSTANT_ALPHA", e2[e2.SRC_ALPHA_SATURATE = 776] = "SRC_ALPHA_SATURATE";
      }(J || (J = {}));
      var ne, re = function() {
        function e2() {
        }
        return e2.SetMatrix = function(e3, t2, n2, r2, o2) {
          var a2 = null;
          if ("MODEL" === n2.semantic ? a2 = t2.getWorldMatrix() : "PROJECTION" === n2.semantic ? a2 = e3.getProjectionMatrix() : "VIEW" === n2.semantic ? a2 = e3.getViewMatrix() : "MODELVIEWINVERSETRANSPOSE" === n2.semantic ? a2 = g.Matrix.Transpose(t2.getWorldMatrix().multiply(e3.getViewMatrix()).invert()) : "MODELVIEW" === n2.semantic ? a2 = t2.getWorldMatrix().multiply(e3.getViewMatrix()) : "MODELVIEWPROJECTION" === n2.semantic ? a2 = t2.getWorldMatrix().multiply(e3.getTransformMatrix()) : "MODELINVERSE" === n2.semantic ? a2 = t2.getWorldMatrix().invert() : "VIEWINVERSE" === n2.semantic ? a2 = e3.getViewMatrix().invert() : "PROJECTIONINVERSE" === n2.semantic ? a2 = e3.getProjectionMatrix().invert() : "MODELVIEWINVERSE" === n2.semantic ? a2 = t2.getWorldMatrix().multiply(e3.getViewMatrix()).invert() : "MODELVIEWPROJECTIONINVERSE" === n2.semantic ? a2 = t2.getWorldMatrix().multiply(e3.getTransformMatrix()).invert() : "MODELINVERSETRANSPOSE" === n2.semantic && (a2 = g.Matrix.Transpose(t2.getWorldMatrix().invert())), a2) switch (n2.type) {
            case Z.FLOAT_MAT2:
              o2.setMatrix2x2(r2, g.Matrix.GetAsMatrix2x2(a2));
              break;
            case Z.FLOAT_MAT3:
              o2.setMatrix3x3(r2, g.Matrix.GetAsMatrix3x3(a2));
              break;
            case Z.FLOAT_MAT4:
              o2.setMatrix(r2, a2);
          }
        }, e2.SetUniform = function(e3, t2, n2, r2) {
          switch (r2) {
            case Z.FLOAT:
              return e3.setFloat(t2, n2), true;
            case Z.FLOAT_VEC2:
              return e3.setVector2(t2, g.Vector2.FromArray(n2)), true;
            case Z.FLOAT_VEC3:
              return e3.setVector3(t2, g.Vector3.FromArray(n2)), true;
            case Z.FLOAT_VEC4:
              return e3.setVector4(t2, g.Vector4.FromArray(n2)), true;
            default:
              return false;
          }
        }, e2.GetWrapMode = function(e3) {
          switch (e3) {
            case q.CLAMP_TO_EDGE:
              return g.Texture.CLAMP_ADDRESSMODE;
            case q.MIRRORED_REPEAT:
              return g.Texture.MIRROR_ADDRESSMODE;
            case q.REPEAT:
            default:
              return g.Texture.WRAP_ADDRESSMODE;
          }
        }, e2.GetByteStrideFromType = function(e3) {
          switch (e3.type) {
            case "VEC2":
              return 2;
            case "VEC3":
              return 3;
            case "VEC4":
            case "MAT2":
              return 4;
            case "MAT3":
              return 9;
            case "MAT4":
              return 16;
            default:
              return 1;
          }
        }, e2.GetTextureFilterMode = function(e3) {
          switch (e3) {
            case z.LINEAR:
            case z.LINEAR_MIPMAP_NEAREST:
            case z.LINEAR_MIPMAP_LINEAR:
              return g.Texture.TRILINEAR_SAMPLINGMODE;
            case z.NEAREST:
            case z.NEAREST_MIPMAP_NEAREST:
              return g.Texture.NEAREST_SAMPLINGMODE;
            default:
              return g.Texture.BILINEAR_SAMPLINGMODE;
          }
        }, e2.GetBufferFromBufferView = function(e3, t2, n2, r2, o2) {
          n2 = t2.byteOffset + n2;
          var a2 = e3.loadedBufferViews[t2.buffer];
          if (n2 + r2 > a2.byteLength) throw new Error("Buffer access is out of range");
          var i2 = a2.buffer;
          switch (n2 += a2.byteOffset, o2) {
            case W.BYTE:
              return new Int8Array(i2, n2, r2);
            case W.UNSIGNED_BYTE:
              return new Uint8Array(i2, n2, r2);
            case W.SHORT:
              return new Int16Array(i2, n2, r2);
            case W.UNSIGNED_SHORT:
              return new Uint16Array(i2, n2, r2);
            default:
              return new Float32Array(i2, n2, r2);
          }
        }, e2.GetBufferFromAccessor = function(t2, n2) {
          var r2 = t2.bufferViews[n2.bufferView], o2 = n2.count * e2.GetByteStrideFromType(n2);
          return e2.GetBufferFromBufferView(t2, r2, n2.byteOffset, o2, n2.componentType);
        }, e2.DecodeBufferToText = function(e3) {
          for (var t2 = "", n2 = e3.byteLength, r2 = 0; r2 < n2; ++r2) t2 += String.fromCharCode(e3[r2]);
          return t2;
        }, e2.GetDefaultMaterial = function(t2) {
          if (!e2._DefaultMaterial) {
            g.Effect.ShadersStore.GLTFDefaultMaterialVertexShader = ["precision highp float;", "", "uniform mat4 worldView;", "uniform mat4 projection;", "", "attribute vec3 position;", "", "void main(void)", "{", "    gl_Position = projection * worldView * vec4(position, 1.0);", "}"].join("\n"), g.Effect.ShadersStore.GLTFDefaultMaterialPixelShader = ["precision highp float;", "", "uniform vec4 u_emission;", "", "void main(void)", "{", "    gl_FragColor = u_emission;", "}"].join("\n");
            var n2 = { attributes: ["position"], uniforms: ["worldView", "projection", "u_emission"], samplers: new Array(), needAlphaBlending: false };
            e2._DefaultMaterial = new g.ShaderMaterial("GLTFDefaultMaterial", t2, { vertex: "GLTFDefaultMaterial", fragment: "GLTFDefaultMaterial" }, n2), e2._DefaultMaterial.setColor4("u_emission", new g.Color4(0.5, 0.5, 0.5, 1));
          }
          return e2._DefaultMaterial;
        }, e2._DefaultMaterial = null, e2;
      }();
      !function(e2) {
        e2[e2.IDENTIFIER = 1] = "IDENTIFIER", e2[e2.UNKNOWN = 2] = "UNKNOWN", e2[e2.END_OF_INPUT = 3] = "END_OF_INPUT";
      }(ne || (ne = {}));
      var oe = function() {
        function e2(e3) {
          this._pos = 0, this.currentToken = ne.UNKNOWN, this.currentIdentifier = "", this.currentString = "", this.isLetterOrDigitPattern = /^[a-zA-Z0-9]+$/, this._toParse = e3, this._maxPos = e3.length;
        }
        return e2.prototype.getNextToken = function() {
          if (this.isEnd()) return ne.END_OF_INPUT;
          if (this.currentString = this.read(), this.currentToken = ne.UNKNOWN, "_" === this.currentString || this.isLetterOrDigitPattern.test(this.currentString)) for (this.currentToken = ne.IDENTIFIER, this.currentIdentifier = this.currentString; !this.isEnd() && (this.isLetterOrDigitPattern.test(this.currentString = this.peek()) || "_" === this.currentString); ) this.currentIdentifier += this.currentString, this.forward();
          return this.currentToken;
        }, e2.prototype.peek = function() {
          return this._toParse[this._pos];
        }, e2.prototype.read = function() {
          return this._toParse[this._pos++];
        }, e2.prototype.forward = function() {
          this._pos++;
        }, e2.prototype.isEnd = function() {
          return this._pos >= this._maxPos;
        }, e2;
      }(), ae = ["MODEL", "VIEW", "PROJECTION", "MODELVIEW", "MODELVIEWPROJECTION", "JOINTMATRIX"], ie = ["world", "view", "projection", "worldView", "worldViewProjection", "mBones"], se = ["translation", "rotation", "scale"], le = ["position", "rotationQuaternion", "scaling"], ue = function(e2, t2, n2) {
        for (var r2 in e2) {
          var o2 = e2[r2];
          n2[t2][r2] = o2;
        }
      }, ce = function(e2) {
        if (e2) for (var t2 = 0; t2 < e2.length / 2; t2++) e2[2 * t2 + 1] = 1 - e2[2 * t2 + 1];
      }, fe = function(e2) {
        if ("NORMAL" === e2.semantic) return "normal";
        if ("POSITION" === e2.semantic) return "position";
        if ("JOINT" === e2.semantic) return "matricesIndices";
        if ("WEIGHT" === e2.semantic) return "matricesWeights";
        if ("COLOR" === e2.semantic) return "color";
        if (e2.semantic && -1 !== e2.semantic.indexOf("TEXCOORD_")) {
          var t2 = Number(e2.semantic.split("_")[1]);
          return "uv" + (0 === t2 ? "" : t2 + 1);
        }
        return null;
      }, he = function(e2) {
        var t2 = null;
        if (e2.translation || e2.rotation || e2.scale) {
          var n2 = g.Vector3.FromArray(e2.scale || [1, 1, 1]), r2 = g.Quaternion.FromArray(e2.rotation || [0, 0, 0, 1]), o2 = g.Vector3.FromArray(e2.translation || [0, 0, 0]);
          t2 = g.Matrix.Compose(n2, r2, o2);
        } else t2 = g.Matrix.FromArray(e2.matrix);
        return t2;
      }, pe = function(e2, t2, n2, r2) {
        for (var o2 = 0; o2 < r2.bones.length; o2++) if (r2.bones[o2].name === n2) return r2.bones[o2];
        var a2 = e2.nodes;
        for (var i2 in a2) {
          var s2 = a2[i2];
          if (s2.jointName) {
            var l2 = s2.children;
            for (o2 = 0; o2 < l2.length; o2++) {
              var u2 = e2.nodes[l2[o2]];
              if (u2.jointName && u2.jointName === n2) {
                var c2 = he(s2), f2 = new g.Bone(s2.name || "", r2, pe(e2, t2, s2.jointName, r2), c2);
                return f2.id = i2, f2;
              }
            }
          }
        }
        return null;
      }, de = function(e2, t2) {
        for (var n2 = 0; n2 < e2.length; n2++) for (var r2 = e2[n2], o2 = 0; o2 < r2.node.children.length; o2++) if (r2.node.children[o2] === t2) return r2.bone;
        return null;
      }, me = function(e2, t2) {
        var n2 = e2.nodes, r2 = n2[t2];
        if (r2) return { node: r2, id: t2 };
        for (var o2 in n2) if ((r2 = n2[o2]).jointName === t2) return { node: r2, id: o2 };
        return null;
      }, _e = function(e2, t2) {
        for (var n2 = 0; n2 < e2.jointNames.length; n2++) if (e2.jointNames[n2] === t2) return true;
        return false;
      }, ge = function(e2, t2, n2, r2, o2) {
        if (o2 || (e2.scene._blockEntityCollection = !!e2.assetContainer, (o2 = new g.Mesh(t2.name || "", e2.scene))._parentContainer = e2.assetContainer, e2.scene._blockEntityCollection = false, o2.id = r2), !t2.babylonNode) return o2;
        for (var a2, i2 = [], s2 = null, l2 = [], u2 = [], c2 = [], f2 = [], h2 = 0; h2 < n2.length; h2++) {
          var p2 = n2[h2];
          if (F2 = e2.meshes[p2]) for (var d2 = 0; d2 < F2.primitives.length; d2++) {
            var m2 = new g.VertexData(), _2 = F2.primitives[d2];
            _2.mode;
            var y2 = _2.attributes, b2 = null, v2 = null;
            for (var T2 in y2) if (b2 = e2.accessors[y2[T2]], v2 = re.GetBufferFromAccessor(e2, b2), "NORMAL" === T2) m2.normals = new Float32Array(v2.length), m2.normals.set(v2);
            else if ("POSITION" === T2) {
              if (te.HomogeneousCoordinates) {
                m2.positions = new Float32Array(v2.length - v2.length / 4);
                for (var x2 = 0; x2 < v2.length; x2 += 4) m2.positions[x2] = v2[x2], m2.positions[x2 + 1] = v2[x2 + 1], m2.positions[x2 + 2] = v2[x2 + 2];
              } else m2.positions = new Float32Array(v2.length), m2.positions.set(v2);
              u2.push(m2.positions.length);
            } else if (-1 !== T2.indexOf("TEXCOORD_")) {
              var A2 = Number(T2.split("_")[1]), w2 = g.VertexBuffer.UVKind + (0 === A2 ? "" : A2 + 1), O2 = new Float32Array(v2.length);
              O2.set(v2), ce(O2), m2.set(O2, w2);
            } else "JOINT" === T2 ? (m2.matricesIndices = new Float32Array(v2.length), m2.matricesIndices.set(v2)) : "WEIGHT" === T2 ? (m2.matricesWeights = new Float32Array(v2.length), m2.matricesWeights.set(v2)) : "COLOR" === T2 && (m2.colors = new Float32Array(v2.length), m2.colors.set(v2));
            if (b2 = e2.accessors[_2.indices]) v2 = re.GetBufferFromAccessor(e2, b2), m2.indices = new Int32Array(v2.length), m2.indices.set(v2), f2.push(m2.indices.length);
            else {
              var C2 = [];
              for (x2 = 0; x2 < m2.positions.length / 3; x2++) C2.push(x2);
              m2.indices = new Int32Array(C2), f2.push(m2.indices.length);
            }
            s2 ? s2.merge(m2) : s2 = m2;
            var E2 = e2.scene.getMaterialById(_2.material);
            i2.push(null === E2 ? re.GetDefaultMaterial(e2.scene) : E2), l2.push(0 === l2.length ? 0 : l2[l2.length - 1] + u2[u2.length - 2]), c2.push(0 === c2.length ? 0 : c2[c2.length - 1] + f2[f2.length - 2]);
          }
        }
        e2.scene._blockEntityCollection = !!e2.assetContainer, i2.length > 1 ? (a2 = new g.MultiMaterial("multimat" + r2, e2.scene)).subMaterials = i2 : a2 = new g.StandardMaterial("multimat" + r2, e2.scene), 1 === i2.length && (a2 = i2[0]), a2._parentContainer = e2.assetContainer, o2.material || (o2.material = a2), new g.Geometry(r2, e2.scene, s2, false, o2), o2.computeWorldMatrix(true), e2.scene._blockEntityCollection = false, o2.subMeshes = [];
        var M2 = 0;
        for (h2 = 0; h2 < n2.length; h2++) {
          var F2;
          if (p2 = n2[h2], F2 = e2.meshes[p2]) for (d2 = 0; d2 < F2.primitives.length; d2++) F2.primitives[d2].mode, g.SubMesh.AddToMesh(M2, l2[M2], u2[M2], c2[M2], f2[M2], o2, o2, true), M2++;
        }
        return o2;
      }, ye = function(e2, t2, n2, r2) {
        e2.position && (e2.position = t2), (e2.rotationQuaternion || e2.rotation) && (e2.rotationQuaternion = n2), e2.scaling && (e2.scaling = r2);
      }, be = function(e2, t2, n2) {
        var r2 = null;
        if (e2.importOnlyMeshes && (t2.skin || t2.meshes) && e2.importMeshesNames && e2.importMeshesNames.length > 0 && -1 === e2.importMeshesNames.indexOf(t2.name || "")) return null;
        if (t2.skin) {
          if (t2.meshes) {
            var o2 = e2.skins[t2.skin];
            (a2 = ge(e2, t2, t2.meshes, n2, t2.babylonNode)).skeleton = e2.scene.getLastSkeletonById(t2.skin), null === a2.skeleton && (a2.skeleton = function(e3, t3, n3, r3) {
              if (r3 || (r3 = new g.Skeleton(t3.name || "", "", e3.scene)), !t3.babylonSkeleton) return r3;
              var o3 = [], a3 = [];
              !function(e4, t4, n4, r4) {
                for (var o4 in e4.nodes) {
                  var a4 = e4.nodes[o4], i4 = o4;
                  if (a4.jointName && !_e(n4, a4.jointName)) {
                    var s4 = he(a4), l4 = new g.Bone(a4.name || "", t4, null, s4);
                    l4.id = i4, r4.push({ bone: l4, node: a4, id: i4 });
                  }
                }
                for (var u4 = 0; u4 < r4.length; u4++) for (var c4 = r4[u4], f4 = c4.node.children, h4 = 0; h4 < f4.length; h4++) {
                  for (var p4 = null, d4 = 0; d4 < r4.length; d4++) if (r4[d4].id === f4[h4]) {
                    p4 = r4[d4];
                    break;
                  }
                  p4 && (p4.bone._parent = c4.bone, c4.bone.children.push(p4.bone));
                }
              }(e3, r3, t3, o3), r3.bones = [];
              for (var i3 = 0; i3 < t3.jointNames.length; i3++) if (v3 = me(e3, t3.jointNames[i3])) {
                var s3 = v3.node;
                if (s3) {
                  var l3 = v3.id, u3 = e3.scene.getBoneById(l3);
                  if (u3) r3.bones.push(u3);
                  else {
                    for (var c3 = false, f3 = null, h3 = 0; h3 < i3; h3++) {
                      var p3 = me(e3, t3.jointNames[h3]);
                      if (p3) {
                        var d3 = p3.node;
                        if (d3) {
                          var m3 = d3.children;
                          if (m3) {
                            c3 = false;
                            for (var _3 = 0; _3 < m3.length; _3++) if (m3[_3] === l3) {
                              f3 = pe(e3, t3, t3.jointNames[h3], r3), c3 = true;
                              break;
                            }
                            if (c3) break;
                          }
                        } else g.Tools.Warn("Joint named " + t3.jointNames[h3] + " does not exist when looking for parent");
                      }
                    }
                    var y3 = he(s3);
                    !f3 && o3.length > 0 && (f3 = de(o3, l3)) && -1 === a3.indexOf(f3) && a3.push(f3), new g.Bone(s3.jointName || "", r3, f3, y3).id = l3;
                  }
                } else g.Tools.Warn("Joint named " + t3.jointNames[i3] + " does not exist");
              }
              var b3 = r3.bones;
              for (r3.bones = [], i3 = 0; i3 < t3.jointNames.length; i3++) {
                var v3;
                if (v3 = me(e3, t3.jointNames[i3])) {
                  for (h3 = 0; h3 < b3.length; h3++) if (b3[h3].id === v3.id) {
                    r3.bones.push(b3[h3]);
                    break;
                  }
                }
              }
              for (r3.prepare(), i3 = 0; i3 < a3.length; i3++) r3.bones.push(a3[i3]);
              return r3;
            }(e2, o2, 0, o2.babylonSkeleton), o2.babylonSkeleton || (o2.babylonSkeleton = a2.skeleton)), r2 = a2;
          }
        } else if (t2.meshes) {
          var a2;
          r2 = a2 = ge(e2, t2, t2.mesh ? [t2.mesh] : t2.meshes, n2, t2.babylonNode);
        } else if (!t2.light || t2.babylonNode || e2.importOnlyMeshes) {
          if (t2.camera && !t2.babylonNode && !e2.importOnlyMeshes) {
            var i2 = e2.cameras[t2.camera];
            if (i2) {
              if (e2.scene._blockEntityCollection = !!e2.assetContainer, "orthographic" === i2.type) {
                var s2 = new g.FreeCamera(t2.camera, g.Vector3.Zero(), e2.scene, false);
                s2.name = t2.name || "", s2.mode = g.Camera.ORTHOGRAPHIC_CAMERA, s2.attachControl(), r2 = s2, s2._parentContainer = e2.assetContainer;
              } else if ("perspective" === i2.type) {
                var l2 = i2[i2.type], u2 = new g.FreeCamera(t2.camera, g.Vector3.Zero(), e2.scene, false);
                u2.name = t2.name || "", u2.attachControl(), l2.aspectRatio || (l2.aspectRatio = e2.scene.getEngine().getRenderWidth() / e2.scene.getEngine().getRenderHeight()), l2.znear && l2.zfar && (u2.maxZ = l2.zfar, u2.minZ = l2.znear), r2 = u2, u2._parentContainer = e2.assetContainer;
              }
              e2.scene._blockEntityCollection = false;
            }
          }
        } else {
          var c2 = e2.lights[t2.light];
          if (c2) {
            if ("ambient" === c2.type) {
              var f2 = c2[c2.type], h2 = new g.HemisphericLight(t2.light, g.Vector3.Zero(), e2.scene);
              h2.name = t2.name || "", f2.color && (h2.diffuse = g.Color3.FromArray(f2.color)), r2 = h2;
            } else if ("directional" === c2.type) {
              var p2 = c2[c2.type], d2 = new g.DirectionalLight(t2.light, g.Vector3.Zero(), e2.scene);
              d2.name = t2.name || "", p2.color && (d2.diffuse = g.Color3.FromArray(p2.color)), r2 = d2;
            } else if ("point" === c2.type) {
              var m2 = c2[c2.type], _2 = new g.PointLight(t2.light, g.Vector3.Zero(), e2.scene);
              _2.name = t2.name || "", m2.color && (_2.diffuse = g.Color3.FromArray(m2.color)), r2 = _2;
            } else if ("spot" === c2.type) {
              var y2 = c2[c2.type], b2 = new g.SpotLight(t2.light, g.Vector3.Zero(), g.Vector3.Zero(), 0, 0, e2.scene);
              b2.name = t2.name || "", y2.color && (b2.diffuse = g.Color3.FromArray(y2.color)), y2.fallOfAngle && (b2.angle = y2.fallOfAngle), y2.fallOffExponent && (b2.exponent = y2.fallOffExponent), r2 = b2;
            }
          }
        }
        if (!t2.jointName) {
          if (t2.babylonNode) return t2.babylonNode;
          if (null === r2) {
            e2.scene._blockEntityCollection = !!e2.assetContainer;
            var v2 = new g.Mesh(t2.name || "", e2.scene);
            v2._parentContainer = e2.assetContainer, e2.scene._blockEntityCollection = false, t2.babylonNode = v2, r2 = v2;
          }
        }
        if (null !== r2) {
          if (t2.matrix && r2 instanceof g.Mesh) !function(e3, t3) {
            if (t3.matrix) {
              var n3 = new g.Vector3(0, 0, 0), r3 = new g.Quaternion(), o3 = new g.Vector3(0, 0, 0);
              g.Matrix.FromArray(t3.matrix).decompose(o3, r3, n3), ye(e3, n3, r3, o3);
            } else t3.translation && t3.rotation && t3.scale && ye(e3, g.Vector3.FromArray(t3.translation), g.Quaternion.FromArray(t3.rotation), g.Vector3.FromArray(t3.scale));
            e3.computeWorldMatrix(true);
          }(r2, t2);
          else {
            var T2 = t2.translation || [0, 0, 0], x2 = t2.rotation || [0, 0, 0, 1], A2 = t2.scale || [1, 1, 1];
            ye(r2, g.Vector3.FromArray(T2), g.Quaternion.FromArray(x2), g.Vector3.FromArray(A2));
          }
          r2.updateCache(true), t2.babylonNode = r2;
        }
        return r2;
      }, ve = function(e2, t2, n2, r2) {
        void 0 === r2 && (r2 = false);
        var o2 = e2.nodes[t2], a2 = null;
        if (r2 = !(e2.importOnlyMeshes && !r2 && e2.importMeshesNames) || -1 !== e2.importMeshesNames.indexOf(o2.name || "") || 0 === e2.importMeshesNames.length, !o2.jointName && r2 && null !== (a2 = be(e2, o2, t2)) && (a2.id = t2, a2.parent = n2), o2.children) for (var i2 = 0; i2 < o2.children.length; i2++) ve(e2, o2.children[i2], a2, r2);
      }, Te = function(e2) {
        var t2 = e2.currentScene;
        if (t2) for (var n2 = 0; n2 < t2.nodes.length; n2++) ve(e2, t2.nodes[n2], null);
        else for (var r2 in e2.scenes) for (t2 = e2.scenes[r2], n2 = 0; n2 < t2.nodes.length; n2++) ve(e2, t2.nodes[n2], null);
        for (function(e3) {
          for (var t3 in e3.animations) {
            var n3 = e3.animations[t3];
            if (n3.channels && n3.samplers) for (var r3 = null, o3 = 0; o3 < n3.channels.length; o3++) {
              var a2 = n3.channels[o3], i2 = n3.samplers[a2.sampler];
              if (i2) {
                var s2 = null, l2 = null;
                n3.parameters ? (s2 = n3.parameters[i2.input], l2 = n3.parameters[i2.output]) : (s2 = i2.input, l2 = i2.output);
                var u2 = re.GetBufferFromAccessor(e3, e3.accessors[s2]), c2 = re.GetBufferFromAccessor(e3, e3.accessors[l2]), f2 = a2.target.id, h2 = e3.scene.getNodeById(f2);
                if (null === h2 && (h2 = e3.scene.getNodeByName(f2)), null !== h2) {
                  var p2 = h2 instanceof g.Bone, d2 = a2.target.path, m2 = se.indexOf(d2);
                  -1 !== m2 && (d2 = le[m2]);
                  var _2 = g.Animation.ANIMATIONTYPE_MATRIX;
                  p2 || ("rotationQuaternion" === d2 ? (_2 = g.Animation.ANIMATIONTYPE_QUATERNION, h2.rotationQuaternion = new g.Quaternion()) : _2 = g.Animation.ANIMATIONTYPE_VECTOR3);
                  var y2 = null, b2 = [], v2 = 0, T2 = false;
                  p2 && r3 && r3.getKeys().length === u2.length && (y2 = r3, T2 = true), T2 || (e3.scene._blockEntityCollection = !!e3.assetContainer, y2 = new g.Animation(t3, p2 ? "_matrix" : d2, 1, _2, g.Animation.ANIMATIONLOOPMODE_CYCLE), e3.scene._blockEntityCollection = false);
                  for (var x2 = 0; x2 < u2.length; x2++) {
                    var A2 = null;
                    if ("rotationQuaternion" === d2 ? (A2 = g.Quaternion.FromArray([c2[v2], c2[v2 + 1], c2[v2 + 2], c2[v2 + 3]]), v2 += 4) : (A2 = g.Vector3.FromArray([c2[v2], c2[v2 + 1], c2[v2 + 2]]), v2 += 3), p2) {
                      var w2 = h2, O2 = g.Vector3.Zero(), C2 = new g.Quaternion(), E2 = g.Vector3.Zero(), M2 = w2.getBaseMatrix();
                      T2 && r3 && (M2 = r3.getKeys()[x2].value), M2.decompose(E2, C2, O2), "position" === d2 ? O2 = A2 : "rotationQuaternion" === d2 ? C2 = A2 : E2 = A2, A2 = g.Matrix.Compose(E2, C2, O2);
                    }
                    T2 ? r3 && (r3.getKeys()[x2].value = A2) : b2.push({ frame: u2[x2], value: A2 });
                  }
                  !T2 && y2 && (y2.setKeys(b2), h2.animations.push(y2)), r3 = y2, e3.scene.stopAnimation(h2), e3.scene.beginAnimation(h2, 0, u2[u2.length - 1], true, 1);
                } else g.Tools.Warn("Creating animation named " + t3 + ". But cannot find node named " + f2 + " to attach to");
              }
            }
          }
        }(e2), n2 = 0; n2 < e2.scene.skeletons.length; n2++) {
          var o2 = e2.scene.skeletons[n2];
          e2.scene.beginAnimation(o2, 0, Number.MAX_VALUE, true, 1);
        }
      }, xe = function(e2, t2, n2) {
        for (var r2 in t2.uniforms) {
          var o2 = t2.uniforms[r2], a2 = t2.parameters[o2];
          if (e2.currentIdentifier === r2 && a2.semantic && !a2.source && !a2.node) {
            var i2 = ae.indexOf(a2.semantic);
            if (-1 !== i2) return delete n2[r2], ie[i2];
          }
        }
        return e2.currentIdentifier;
      }, Ae = function(e2) {
        for (var t2 in e2.materials) Ce.LoadMaterialAsync(e2, t2, function() {
        }, function() {
        });
      }, we = function() {
        function e2() {
        }
        return e2.CreateRuntime = function(e3, t2, n2) {
          var r2 = { extensions: {}, accessors: {}, buffers: {}, bufferViews: {}, meshes: {}, lights: {}, cameras: {}, nodes: {}, images: {}, textures: {}, shaders: {}, programs: {}, samplers: {}, techniques: {}, materials: {}, animations: {}, skins: {}, extensionsUsed: [], scenes: {}, buffersCount: 0, shaderscount: 0, scene: t2, rootUrl: n2, loadedBufferCount: 0, loadedBufferViews: {}, loadedShaderCount: 0, importOnlyMeshes: false, dummyNodes: [], assetContainer: null };
          return e3.extensions && ue(e3.extensions, "extensions", r2), e3.extensionsUsed && ue(e3.extensionsUsed, "extensionsUsed", r2), e3.buffers && function(e4, t3) {
            for (var n3 in e4) {
              var r3 = e4[n3];
              t3.buffers[n3] = r3, t3.buffersCount++;
            }
          }(e3.buffers, r2), e3.bufferViews && ue(e3.bufferViews, "bufferViews", r2), e3.accessors && ue(e3.accessors, "accessors", r2), e3.meshes && ue(e3.meshes, "meshes", r2), e3.lights && ue(e3.lights, "lights", r2), e3.cameras && ue(e3.cameras, "cameras", r2), e3.nodes && ue(e3.nodes, "nodes", r2), e3.images && ue(e3.images, "images", r2), e3.textures && ue(e3.textures, "textures", r2), e3.shaders && function(e4, t3) {
            for (var n3 in e4) {
              var r3 = e4[n3];
              t3.shaders[n3] = r3, t3.shaderscount++;
            }
          }(e3.shaders, r2), e3.programs && ue(e3.programs, "programs", r2), e3.samplers && ue(e3.samplers, "samplers", r2), e3.techniques && ue(e3.techniques, "techniques", r2), e3.materials && ue(e3.materials, "materials", r2), e3.animations && ue(e3.animations, "animations", r2), e3.skins && ue(e3.skins, "skins", r2), e3.scenes && (r2.scenes = e3.scenes), e3.scene && e3.scenes && (r2.currentScene = e3.scenes[e3.scene]), r2;
        }, e2.LoadBufferAsync = function(e3, t2, n2, r2, o2) {
          var a2 = e3.buffers[t2];
          g.Tools.IsBase64(a2.uri) ? setTimeout(function() {
            return n2(new Uint8Array(g.Tools.DecodeBase64(a2.uri)));
          }) : g.Tools.LoadFile(e3.rootUrl + a2.uri, function(e4) {
            return n2(new Uint8Array(e4));
          }, o2, void 0, true, function(e4) {
            e4 && r2(e4.status + " " + e4.statusText);
          });
        }, e2.LoadTextureBufferAsync = function(e3, t2, n2, r2) {
          var o2 = e3.textures[t2];
          if (o2 && o2.source) if (o2.babylonTexture) n2(null);
          else {
            var a2 = e3.images[o2.source];
            g.Tools.IsBase64(a2.uri) ? setTimeout(function() {
              return n2(new Uint8Array(g.Tools.DecodeBase64(a2.uri)));
            }) : g.Tools.LoadFile(e3.rootUrl + a2.uri, function(e4) {
              return n2(new Uint8Array(e4));
            }, void 0, void 0, true, function(e4) {
              e4 && r2(e4.status + " " + e4.statusText);
            });
          }
          else r2("");
        }, e2.CreateTextureAsync = function(e3, t2, n2, r2) {
          var o2 = e3.textures[t2];
          if (o2.babylonTexture) r2(o2.babylonTexture);
          else {
            var a2 = e3.samplers[o2.sampler], i2 = a2.minFilter === z.NEAREST_MIPMAP_NEAREST || a2.minFilter === z.NEAREST_MIPMAP_LINEAR || a2.minFilter === z.LINEAR_MIPMAP_NEAREST || a2.minFilter === z.LINEAR_MIPMAP_LINEAR, s2 = g.Texture.BILINEAR_SAMPLINGMODE, l2 = null == n2 ? new Blob() : new Blob([n2]), u2 = URL.createObjectURL(l2), c2 = function() {
              return URL.revokeObjectURL(u2);
            }, f2 = new g.Texture(u2, e3.scene, !i2, true, s2, c2, c2);
            void 0 !== a2.wrapS && (f2.wrapU = re.GetWrapMode(a2.wrapS)), void 0 !== a2.wrapT && (f2.wrapV = re.GetWrapMode(a2.wrapT)), f2.name = t2, o2.babylonTexture = f2, r2(f2);
          }
        }, e2.LoadShaderStringAsync = function(e3, t2, n2, r2) {
          var o2 = e3.shaders[t2];
          if (g.Tools.IsBase64(o2.uri)) {
            var a2 = atob(o2.uri.split(",")[1]);
            n2 && n2(a2);
          } else g.Tools.LoadFile(e3.rootUrl + o2.uri, n2, void 0, void 0, false, function(e4) {
            e4 && r2 && r2(e4.status + " " + e4.statusText);
          });
        }, e2.LoadMaterialAsync = function(e3, t2, n2, r2) {
          var o2 = e3.materials[t2];
          if (o2.technique) {
            var a2 = e3.techniques[o2.technique];
            if (!a2) {
              e3.scene._blockEntityCollection = !!e3.assetContainer;
              var i2 = new g.StandardMaterial(t2, e3.scene);
              return i2._parentContainer = e3.assetContainer, e3.scene._blockEntityCollection = false, i2.diffuseColor = new g.Color3(0.5, 0.5, 0.5), i2.sideOrientation = g.Material.CounterClockWiseSideOrientation, void n2(i2);
            }
            var s2 = e3.programs[a2.program], l2 = a2.states, u2 = g.Effect.ShadersStore[s2.vertexShader + "VertexShader"], c2 = g.Effect.ShadersStore[s2.fragmentShader + "PixelShader"], f2 = "", h2 = "", p2 = new oe(u2), d2 = new oe(c2), m2 = {}, _2 = [], y2 = [], b2 = [];
            for (var v2 in a2.uniforms) {
              var T2 = a2.uniforms[v2], x2 = a2.parameters[T2];
              if (m2[v2] = x2, !x2.semantic || x2.node || x2.source) x2.type === Z.SAMPLER_2D ? b2.push(v2) : _2.push(v2);
              else {
                var A2 = ae.indexOf(x2.semantic);
                -1 !== A2 ? (_2.push(ie[A2]), delete m2[v2]) : _2.push(v2);
              }
            }
            for (var w2 in a2.attributes) {
              var O2 = a2.attributes[w2];
              if ((M2 = a2.parameters[O2]).semantic) {
                var C2 = fe(M2);
                C2 && y2.push(C2);
              }
            }
            for (; !p2.isEnd() && p2.getNextToken(); ) if (p2.currentToken === ne.IDENTIFIER) {
              var E2 = false;
              for (var w2 in a2.attributes) {
                O2 = a2.attributes[w2];
                var M2 = a2.parameters[O2];
                if (p2.currentIdentifier === w2 && M2.semantic) {
                  f2 += fe(M2), E2 = true;
                  break;
                }
              }
              E2 || (f2 += xe(p2, a2, m2));
            } else f2 += p2.currentString;
            for (; !d2.isEnd() && d2.getNextToken(); ) d2.currentToken === ne.IDENTIFIER ? h2 += xe(d2, a2, m2) : h2 += d2.currentString;
            var F2 = { vertex: s2.vertexShader + t2, fragment: s2.fragmentShader + t2 }, P2 = { attributes: y2, uniforms: _2, samplers: b2, needAlphaBlending: l2 && l2.enable && -1 !== l2.enable.indexOf(3042) };
            g.Effect.ShadersStore[s2.vertexShader + t2 + "VertexShader"] = f2, g.Effect.ShadersStore[s2.fragmentShader + t2 + "PixelShader"] = h2;
            var R2 = new g.ShaderMaterial(t2, e3.scene, F2, P2);
            if (R2.onError = /* @__PURE__ */ function(e4, t3, n3) {
              return function(r3, o3) {
                t3.dispose(true), n3("Cannot compile program named " + e4.name + ". Error: " + o3 + ". Default material will be applied");
              };
            }(s2, R2, r2), R2.onCompiled = /* @__PURE__ */ function(e4, t3, n3, r3, o3, a3) {
              return function(i3) {
                !function(e5, t4, n4, r4, o4) {
                  var a4 = r4.values || n4.parameters, i4 = n4.uniforms, s3 = function(n5) {
                    var s4 = o4[n5], l4 = s4.type, u3 = a4[i4[n5]];
                    if (void 0 === u3 && (u3 = s4.value), !u3) return "continue";
                    var c3 = function(e6) {
                      return function(n6) {
                        s4.value && e6 && (t4.setTexture(e6, n6), delete o4[e6]);
                      };
                    };
                    l4 === Z.SAMPLER_2D ? Ce.LoadTextureAsync(e5, r4.values ? u3 : s4.value, c3(n5), function() {
                      return c3(null);
                    }) : s4.value && re.SetUniform(t4, n5, r4.values ? u3 : s4.value, l4) && delete o4[n5];
                  };
                  for (var l3 in o4) s3(l3);
                }(e4, t3, n3, r3, o3), t3.onBind = function(i4) {
                  !function(e5, t4, n4, r4, o4, a4, i5) {
                    var s3 = a4.values || o4.parameters;
                    for (var l3 in n4) {
                      var u3 = n4[l3], c3 = u3.type;
                      if (c3 === Z.FLOAT_MAT2 || c3 === Z.FLOAT_MAT3 || c3 === Z.FLOAT_MAT4) if (!u3.semantic || u3.source || u3.node) {
                        if (u3.semantic && (u3.source || u3.node)) {
                          var f3 = t4.scene.getNodeByName(u3.source || u3.node || "");
                          if (null === f3 && (f3 = t4.scene.getNodeById(u3.source || u3.node || "")), null === f3) continue;
                          re.SetMatrix(t4.scene, f3, u3, l3, r4.getEffect());
                        }
                      } else re.SetMatrix(t4.scene, e5, u3, l3, r4.getEffect());
                      else {
                        var h3 = s3[o4.uniforms[l3]];
                        if (!h3) continue;
                        if (c3 === Z.SAMPLER_2D) {
                          var p3 = t4.textures[a4.values ? h3 : u3.value].babylonTexture;
                          if (null == p3) continue;
                          r4.getEffect().setTexture(l3, p3);
                        } else re.SetUniform(r4.getEffect(), l3, h3, c3);
                      }
                    }
                    i5(r4);
                  }(i4, e4, o3, t3, n3, r3, a3);
                };
              };
            }(e3, R2, a2, o2, m2, n2), R2.sideOrientation = g.Material.CounterClockWiseSideOrientation, l2 && l2.functions) {
              var L2 = l2.functions;
              L2.cullFace && L2.cullFace[0] !== Q.BACK && (R2.backFaceCulling = false);
              var N2 = L2.blendFuncSeparate;
              N2 && (N2[0] === J.SRC_ALPHA && N2[1] === J.ONE_MINUS_SRC_ALPHA && N2[2] === J.ONE && N2[3] === J.ONE ? R2.alphaMode = g.Constants.ALPHA_COMBINE : N2[0] === J.ONE && N2[1] === J.ONE && N2[2] === J.ZERO && N2[3] === J.ONE ? R2.alphaMode = g.Constants.ALPHA_ONEONE : N2[0] === J.SRC_ALPHA && N2[1] === J.ONE && N2[2] === J.ZERO && N2[3] === J.ONE ? R2.alphaMode = g.Constants.ALPHA_ADD : N2[0] === J.ZERO && N2[1] === J.ONE_MINUS_SRC_COLOR && N2[2] === J.ONE && N2[3] === J.ONE ? R2.alphaMode = g.Constants.ALPHA_SUBTRACT : N2[0] === J.DST_COLOR && N2[1] === J.ZERO && N2[2] === J.ONE && N2[3] === J.ONE ? R2.alphaMode = g.Constants.ALPHA_MULTIPLY : N2[0] === J.SRC_ALPHA && N2[1] === J.ONE_MINUS_SRC_COLOR && N2[2] === J.ONE && N2[3] === J.ONE && (R2.alphaMode = g.Constants.ALPHA_MAXIMIZED));
            }
          } else r2 && r2("No technique found.");
        }, e2;
      }(), Oe = function() {
        function e2() {
        }
        return e2.RegisterExtension = function(t2) {
          e2.Extensions[t2.name] ? g.Tools.Error('Tool with the same name "' + t2.name + '" already exists') : e2.Extensions[t2.name] = t2;
        }, e2.prototype.dispose = function() {
        }, e2.prototype._importMeshAsync = function(e3, t2, n2, r2, o2, a2, i2, s2) {
          var l2 = this;
          return t2.useRightHandedSystem = true, Ce.LoadRuntimeAsync(t2, n2, r2, function(t3) {
            t3.assetContainer = o2, t3.importOnlyMeshes = true, "" === e3 ? t3.importMeshesNames = [] : "string" == typeof e3 ? t3.importMeshesNames = [e3] : !e3 || e3 instanceof Array ? (t3.importMeshesNames = [], g.Tools.Warn("Argument meshesNames must be of type string or string[]")) : t3.importMeshesNames = [e3], l2._createNodes(t3);
            var n3 = [], r3 = [];
            for (var i3 in t3.nodes) {
              var s3 = t3.nodes[i3];
              s3.babylonNode instanceof g.AbstractMesh && n3.push(s3.babylonNode);
            }
            for (var u2 in t3.skins) {
              var c2 = t3.skins[u2];
              c2.babylonSkeleton instanceof g.Skeleton && r3.push(c2.babylonSkeleton);
            }
            l2._loadBuffersAsync(t3, function() {
              l2._loadShadersAsync(t3, function() {
                Ae(t3), Te(t3), !te.IncrementalLoading && a2 && a2(n3, r3);
              });
            }), te.IncrementalLoading && a2 && a2(n3, r3);
          }, s2), true;
        }, e2.prototype.importMeshAsync = function(e3, t2, n2, r2, o2, a2) {
          var i2 = this;
          return new Promise(function(s2, l2) {
            i2._importMeshAsync(e3, t2, r2, o2, n2, function(e4, t3) {
              s2({ meshes: e4, particleSystems: [], skeletons: t3, animationGroups: [], lights: [], transformNodes: [], geometries: [], spriteManagers: [] });
            }, a2, function(e4) {
              l2(new Error(e4));
            });
          });
        }, e2.prototype._loadAsync = function(e3, t2, n2, r2, o2, a2) {
          var i2 = this;
          e3.useRightHandedSystem = true, Ce.LoadRuntimeAsync(e3, t2, n2, function(e4) {
            Ce.LoadRuntimeExtensionsAsync(e4, function() {
              i2._createNodes(e4), i2._loadBuffersAsync(e4, function() {
                i2._loadShadersAsync(e4, function() {
                  Ae(e4), Te(e4), te.IncrementalLoading || r2();
                });
              }), te.IncrementalLoading && r2();
            }, a2);
          }, a2);
        }, e2.prototype.loadAsync = function(e3, t2, n2, r2) {
          return (0, L.sH)(this, void 0, void 0, function() {
            var o2 = this;
            return (0, L.YH)(this, function(a2) {
              switch (a2.label) {
                case 0:
                  return [4, new Promise(function(a3, i2) {
                    o2._loadAsync(e3, t2, n2, function() {
                      a3();
                    }, r2, function(e4) {
                      i2(new Error(e4));
                    });
                  })];
                case 1:
                  return [2, a2.sent()];
              }
            });
          });
        }, e2.prototype._loadShadersAsync = function(e3, t2) {
          var n2 = false, r2 = function(n3, r3) {
            Ce.LoadShaderStringAsync(e3, n3, function(o3) {
              o3 instanceof ArrayBuffer || (e3.loadedShaderCount++, o3 && (g.Effect.ShadersStore[n3 + (r3.type === Y.VERTEX ? "VertexShader" : "PixelShader")] = o3), e3.loadedShaderCount === e3.shaderscount && t2());
            }, function() {
              g.Tools.Error("Error when loading shader program named " + n3 + " located at " + r3.uri);
            });
          };
          for (var o2 in e3.shaders) {
            n2 = true;
            var a2 = e3.shaders[o2];
            a2 ? r2.bind(this, o2, a2)() : g.Tools.Error("No shader named: " + o2);
          }
          n2 || t2();
        }, e2.prototype._loadBuffersAsync = function(e3, t2) {
          var n2 = false, r2 = function(n3, r3) {
            Ce.LoadBufferAsync(e3, n3, function(o3) {
              e3.loadedBufferCount++, o3 && (o3.byteLength != e3.buffers[n3].byteLength && g.Tools.Error("Buffer named " + n3 + " is length " + o3.byteLength + ". Expected: " + r3.byteLength), e3.loadedBufferViews[n3] = o3), e3.loadedBufferCount === e3.buffersCount && t2();
            }, function() {
              g.Tools.Error("Error when loading buffer named " + n3 + " located at " + r3.uri);
            });
          };
          for (var o2 in e3.buffers) {
            n2 = true;
            var a2 = e3.buffers[o2];
            a2 ? r2.bind(this, o2, a2)() : g.Tools.Error("No buffer named: " + o2);
          }
          n2 || t2();
        }, e2.prototype._createNodes = function(e3) {
          var t2 = e3.currentScene;
          if (t2) for (var n2 = 0; n2 < t2.nodes.length; n2++) ve(e3, t2.nodes[n2], null);
          else for (var r2 in e3.scenes) for (t2 = e3.scenes[r2], n2 = 0; n2 < t2.nodes.length; n2++) ve(e3, t2.nodes[n2], null);
        }, e2.Extensions = {}, e2;
      }(), Ce = function() {
        function e2(e3) {
          this._name = e3;
        }
        return Object.defineProperty(e2.prototype, "name", { get: function() {
          return this._name;
        }, enumerable: false, configurable: true }), e2.prototype.loadRuntimeAsync = function(e3, t2, n2, r2, o2) {
          return false;
        }, e2.prototype.loadRuntimeExtensionsAsync = function(e3, t2, n2) {
          return false;
        }, e2.prototype.loadBufferAsync = function(e3, t2, n2, r2, o2) {
          return false;
        }, e2.prototype.loadTextureBufferAsync = function(e3, t2, n2, r2) {
          return false;
        }, e2.prototype.createTextureAsync = function(e3, t2, n2, r2, o2) {
          return false;
        }, e2.prototype.loadShaderStringAsync = function(e3, t2, n2, r2) {
          return false;
        }, e2.prototype.loadMaterialAsync = function(e3, t2, n2, r2) {
          return false;
        }, e2.LoadRuntimeAsync = function(t2, n2, r2, o2, a2) {
          e2._ApplyExtensions(function(e3) {
            return e3.loadRuntimeAsync(t2, n2, r2, o2, a2);
          }, function() {
            setTimeout(function() {
              o2 && o2(we.CreateRuntime(n2.json, t2, r2));
            });
          });
        }, e2.LoadRuntimeExtensionsAsync = function(t2, n2, r2) {
          e2._ApplyExtensions(function(e3) {
            return e3.loadRuntimeExtensionsAsync(t2, n2, r2);
          }, function() {
            setTimeout(function() {
              n2();
            });
          });
        }, e2.LoadBufferAsync = function(t2, n2, r2, o2, a2) {
          e2._ApplyExtensions(function(e3) {
            return e3.loadBufferAsync(t2, n2, r2, o2, a2);
          }, function() {
            we.LoadBufferAsync(t2, n2, r2, o2, a2);
          });
        }, e2.LoadTextureAsync = function(t2, n2, r2, o2) {
          e2._LoadTextureBufferAsync(t2, n2, function(a2) {
            a2 && e2._CreateTextureAsync(t2, n2, a2, r2, o2);
          }, o2);
        }, e2.LoadShaderStringAsync = function(t2, n2, r2, o2) {
          e2._ApplyExtensions(function(e3) {
            return e3.loadShaderStringAsync(t2, n2, r2, o2);
          }, function() {
            we.LoadShaderStringAsync(t2, n2, r2, o2);
          });
        }, e2.LoadMaterialAsync = function(t2, n2, r2, o2) {
          e2._ApplyExtensions(function(e3) {
            return e3.loadMaterialAsync(t2, n2, r2, o2);
          }, function() {
            we.LoadMaterialAsync(t2, n2, r2, o2);
          });
        }, e2._LoadTextureBufferAsync = function(t2, n2, r2, o2) {
          e2._ApplyExtensions(function(e3) {
            return e3.loadTextureBufferAsync(t2, n2, r2, o2);
          }, function() {
            we.LoadTextureBufferAsync(t2, n2, r2, o2);
          });
        }, e2._CreateTextureAsync = function(t2, n2, r2, o2, a2) {
          e2._ApplyExtensions(function(e3) {
            return e3.createTextureAsync(t2, n2, r2, o2, a2);
          }, function() {
            we.CreateTextureAsync(t2, n2, r2, o2);
          });
        }, e2._ApplyExtensions = function(e3, t2) {
          for (var n2 in Oe.Extensions) if (e3(Oe.Extensions[n2])) return;
          t2();
        }, e2;
      }();
      te._CreateGLTF1Loader = function() {
        return new Oe();
      };
      var Ee = function(e2) {
        function t2() {
          return e2.call(this, "KHR_binary_glTF") || this;
        }
        return (0, L.C6)(t2, e2), t2.prototype.loadRuntimeAsync = function(e3, t3, n2, r2) {
          var o2 = t3.json.extensionsUsed;
          return !(!o2 || -1 === o2.indexOf(this.name) || !t3.bin || (this._bin = t3.bin, r2(we.CreateRuntime(t3.json, e3, n2)), 0));
        }, t2.prototype.loadBufferAsync = function(e3, t3, n2, r2) {
          return -1 !== e3.extensionsUsed.indexOf(this.name) && "binary_glTF" === t3 && (this._bin.readAsync(0, this._bin.byteLength).then(n2, function(e4) {
            return r2(e4.message);
          }), true);
        }, t2.prototype.loadTextureBufferAsync = function(e3, t3, n2) {
          var r2 = e3.textures[t3], o2 = e3.images[r2.source];
          if (!o2.extensions || !(this.name in o2.extensions)) return false;
          var a2 = o2.extensions[this.name], i2 = e3.bufferViews[a2.bufferView];
          return n2(re.GetBufferFromBufferView(e3, i2, 0, i2.byteLength, W.UNSIGNED_BYTE)), true;
        }, t2.prototype.loadShaderStringAsync = function(e3, t3, n2) {
          var r2 = e3.shaders[t3];
          if (!r2.extensions || !(this.name in r2.extensions)) return false;
          var o2 = r2.extensions[this.name], a2 = e3.bufferViews[o2.bufferView], i2 = re.GetBufferFromBufferView(e3, a2, 0, a2.byteLength, W.UNSIGNED_BYTE);
          return setTimeout(function() {
            var e4 = re.DecodeBufferToText(i2);
            n2(e4);
          }), true;
        }, t2;
      }(Ce);
      Oe.RegisterExtension(new Ee());
      var Me = function(e2) {
        function t2() {
          return e2.call(this, "KHR_materials_common") || this;
        }
        return (0, L.C6)(t2, e2), t2.prototype.loadRuntimeExtensionsAsync = function(e3) {
          if (!e3.extensions) return false;
          var t3 = e3.extensions[this.name];
          if (!t3) return false;
          var n2 = t3.lights;
          if (n2) for (var r2 in n2) {
            var o2 = n2[r2];
            switch (o2.type) {
              case "ambient":
                var a2 = new g.HemisphericLight(o2.name, new g.Vector3(0, 1, 0), e3.scene), i2 = o2.ambient;
                i2 && (a2.diffuse = g.Color3.FromArray(i2.color || [1, 1, 1]));
                break;
              case "point":
                var s2 = new g.PointLight(o2.name, new g.Vector3(10, 10, 10), e3.scene), l2 = o2.point;
                l2 && (s2.diffuse = g.Color3.FromArray(l2.color || [1, 1, 1]));
                break;
              case "directional":
                var u2 = new g.DirectionalLight(o2.name, new g.Vector3(0, -1, 0), e3.scene), c2 = o2.directional;
                c2 && (u2.diffuse = g.Color3.FromArray(c2.color || [1, 1, 1]));
                break;
              case "spot":
                var f2 = o2.spot;
                f2 && (new g.SpotLight(o2.name, new g.Vector3(0, 10, 0), new g.Vector3(0, -1, 0), f2.fallOffAngle || Math.PI, f2.fallOffExponent || 0, e3.scene).diffuse = g.Color3.FromArray(f2.color || [1, 1, 1]));
                break;
              default:
                g.Tools.Warn('GLTF Material Common extension: light type "' + o2.type + "” not supported");
            }
          }
          return false;
        }, t2.prototype.loadMaterialAsync = function(e3, t3, n2, r2) {
          var o2 = e3.materials[t3];
          if (!o2 || !o2.extensions) return false;
          var a2 = o2.extensions[this.name];
          if (!a2) return false;
          var i2 = new g.StandardMaterial(t3, e3.scene);
          return i2.sideOrientation = g.Material.CounterClockWiseSideOrientation, "CONSTANT" === a2.technique && (i2.disableLighting = true), i2.backFaceCulling = void 0 !== a2.doubleSided && !a2.doubleSided, i2.alpha = void 0 === a2.values.transparency ? 1 : a2.values.transparency, i2.specularPower = void 0 === a2.values.shininess ? 0 : a2.values.shininess, "string" == typeof a2.values.ambient ? this._loadTexture(e3, a2.values.ambient, i2, "ambientTexture", r2) : i2.ambientColor = g.Color3.FromArray(a2.values.ambient || [0, 0, 0]), "string" == typeof a2.values.diffuse ? this._loadTexture(e3, a2.values.diffuse, i2, "diffuseTexture", r2) : i2.diffuseColor = g.Color3.FromArray(a2.values.diffuse || [0, 0, 0]), "string" == typeof a2.values.emission ? this._loadTexture(e3, a2.values.emission, i2, "emissiveTexture", r2) : i2.emissiveColor = g.Color3.FromArray(a2.values.emission || [0, 0, 0]), "string" == typeof a2.values.specular ? this._loadTexture(e3, a2.values.specular, i2, "specularTexture", r2) : i2.specularColor = g.Color3.FromArray(a2.values.specular || [0, 0, 0]), true;
        }, t2.prototype._loadTexture = function(e3, t3, n2, r2, o2) {
          we.LoadTextureBufferAsync(e3, t3, function(o3) {
            we.CreateTextureAsync(e3, t3, o3, function(e4) {
              return n2[r2] = e4;
            });
          }, o2);
        }, t2;
      }(Ce);
      Oe.RegisterExtension(new Me());
      var Fe = /* @__PURE__ */ new Map(), Pe = Fe;
      function Re(e2, t2, n2) {
        Le(e2) && g.Logger.Warn("Extension with the name '".concat(e2, "' already exists")), Fe.set(e2, { isGLTFExtension: t2, factory: n2 });
      }
      function Le(e2) {
        return Fe.delete(e2);
      }
      var Ne = a(698), Ie = new g.Lazy(function() {
        return Promise.resolve().then(a.t.bind(a, 597, 23));
      }), Se = new g.Lazy(function() {
        return Promise.resolve().then(a.bind(a, 727));
      }), Be = function() {
        function e2() {
        }
        return e2.Get = function(e3, t2, n2) {
          if (!t2 || null == n2 || !t2[n2]) throw new Error("".concat(e3, ": Failed to find index (").concat(n2, ")"));
          return t2[n2];
        }, e2.TryGet = function(e3, t2) {
          return e3 && null != t2 && e3[t2] ? e3[t2] : null;
        }, e2.Assign = function(e3) {
          if (e3) for (var t2 = 0; t2 < e3.length; t2++) e3[t2].index = t2;
        }, e2;
      }();
      function ke(e2) {
        if (e2.min && e2.max) {
          var t2 = e2.min, n2 = e2.max, r2 = g.TmpVectors.Vector3[0].copyFromFloats(t2[0], t2[1], t2[2]), o2 = g.TmpVectors.Vector3[1].copyFromFloats(n2[0], n2[1], n2[2]);
          if (e2.normalized && 5126 !== e2.componentType) {
            var a2 = 1;
            switch (e2.componentType) {
              case 5120:
                a2 = 127;
                break;
              case 5121:
                a2 = 255;
                break;
              case 5122:
                a2 = 32767;
                break;
              case 5123:
                a2 = 65535;
            }
            var i2 = 1 / a2;
            r2.scaleInPlace(i2), o2.scaleInPlace(i2);
          }
          return new g.BoundingInfo(r2, o2);
        }
        return null;
      }
      var Ge = function() {
        function e2(e3) {
          this._completePromises = new Array(), this._assetContainer = null, this._babylonLights = [], this._disableInstancedMesh = 0, this._allMaterialsDirtyRequired = false, this._skipStartAnimationStep = false, this._extensions = new Array(), this._disposed = false, this._rootUrl = null, this._fileName = null, this._uniqueRootUrl = null, this._bin = null, this._rootBabylonMesh = null, this._defaultBabylonMaterialData = {}, this._postSceneLoadActions = new Array(), this._materialAdapterCache = /* @__PURE__ */ new WeakMap(), this._pbrMaterialImpl = null, this._parent = e3;
        }
        return e2.RegisterExtension = function(e3, t2) {
          Re(e3, false, t2);
        }, e2.UnregisterExtension = function(e3) {
          return Le(e3);
        }, Object.defineProperty(e2.prototype, "gltf", { get: function() {
          if (!this._gltf) throw new Error("glTF JSON is not available");
          return this._gltf;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "bin", { get: function() {
          return this._bin;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "parent", { get: function() {
          return this._parent;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "babylonScene", { get: function() {
          if (!this._babylonScene) throw new Error("Scene is not available");
          return this._babylonScene;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "rootBabylonMesh", { get: function() {
          return this._rootBabylonMesh;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "rootUrl", { get: function() {
          return this._rootUrl;
        }, enumerable: false, configurable: true }), e2.prototype._getOrCreateMaterialAdapter = function(e3) {
          var t2 = this._materialAdapterCache.get(e3);
          if (!t2) {
            if (!this._pbrMaterialImpl) throw new Error("Appropriate material adapter class not found");
            t2 = new this._pbrMaterialImpl.adapterClass(e3), this._materialAdapterCache.set(e3, t2);
          }
          return t2;
        }, e2.prototype.dispose = function() {
          this._disposed || (this._disposed = true, this._completePromises.length = 0, this._extensions.forEach(function(e3) {
            return e3.dispose && e3.dispose();
          }), this._extensions.length = 0, this._gltf = null, this._bin = null, this._babylonScene = null, this._rootBabylonMesh = null, this._defaultBabylonMaterialData = {}, this._postSceneLoadActions.length = 0, this._parent.dispose());
        }, e2.prototype.importMeshAsync = function(e3, t2, n2, r2, o2, a2) {
          return (0, L.sH)(this, arguments, void 0, function(e4, t3, n3, r3, o3, a3, i2) {
            var s2 = this;
            return void 0 === i2 && (i2 = ""), (0, L.YH)(this, function(a4) {
              switch (a4.label) {
                case 0:
                  return [4, Promise.resolve().then(function() {
                    return (0, L.sH)(s2, void 0, void 0, function() {
                      var a5, s3, l2, u2, c2, f2 = this;
                      return (0, L.YH)(this, function(h2) {
                        switch (h2.label) {
                          case 0:
                            if (this._babylonScene = t3, this._assetContainer = n3, this._loadData(r3), a5 = null, e4) {
                              if (s3 = {}, this._gltf.nodes) for (l2 = 0, u2 = this._gltf.nodes; l2 < u2.length; l2++) (c2 = u2[l2]).name && (s3[c2.name] = c2.index);
                              a5 = (e4 instanceof Array ? e4 : [e4]).map(function(e5) {
                                var t4 = s3[e5];
                                if (void 0 === t4) throw new Error("Failed to find node '".concat(e5, "'"));
                                return t4;
                              });
                            }
                            return [4, this._loadAsync(o3, i2, a5, function() {
                              return { meshes: f2._getMeshes(), particleSystems: [], skeletons: f2._getSkeletons(), animationGroups: f2._getAnimationGroups(), lights: f2._babylonLights, transformNodes: f2._getTransformNodes(), geometries: f2._getGeometries(), spriteManagers: [] };
                            })];
                          case 1:
                            return [2, h2.sent()];
                        }
                      });
                    });
                  })];
                case 1:
                  return [2, a4.sent()];
              }
            });
          });
        }, e2.prototype.loadAsync = function(e3, t2, n2, r2) {
          return (0, L.sH)(this, arguments, void 0, function(e4, t3, n3, r3, o2) {
            return void 0 === o2 && (o2 = ""), (0, L.YH)(this, function(r4) {
              switch (r4.label) {
                case 0:
                  return this._babylonScene = e4, this._loadData(t3), [4, this._loadAsync(n3, o2, null, function() {
                  })];
                case 1:
                  return [2, r4.sent()];
              }
            });
          });
        }, e2.prototype._loadAsync = function(e3, t2, n2, r2) {
          return (0, L.sH)(this, void 0, void 0, function() {
            var o2 = this;
            return (0, L.YH)(this, function(i2) {
              switch (i2.label) {
                case 0:
                  return [4, Promise.resolve().then(function() {
                    return (0, L.sH)(o2, void 0, void 0, function() {
                      var o3, i3, s2, l2, u2, c2, f2, h2, p2, d2, m2, _2, y2, b2, v2 = this;
                      return (0, L.YH)(this, function(T2) {
                        switch (T2.label) {
                          case 0:
                            return this._rootUrl = e3, this._uniqueRootUrl = !e3.startsWith("file:") && t2 ? e3 : "".concat(e3).concat(Date.now(), "/"), this._fileName = t2, this._allMaterialsDirtyRequired = false, [4, this._loadExtensionsAsync()];
                          case 1:
                            return T2.sent(), this.parent.skipMaterials || null != this._pbrMaterialImpl ? [3, 7] : this.parent.useOpenPBR || this.isExtensionUsed("KHR_materials_openpbr") ? (o3 = this, y2 = {}, [4, Promise.resolve().then(a.t.bind(a, 597, 23))]) : [3, 4];
                          case 2:
                            return y2.materialClass = T2.sent().OpenPBRMaterial, [4, Promise.resolve().then(a.bind(a, 753))];
                          case 3:
                            return o3._pbrMaterialImpl = (y2.adapterClass = T2.sent().OpenPBRMaterialLoadingAdapter, y2), [3, 7];
                          case 4:
                            return i3 = this, b2 = {}, [4, Promise.resolve().then(a.t.bind(a, 597, 23))];
                          case 5:
                            return b2.materialClass = T2.sent().PBRMaterial, [4, Promise.resolve().then(a.bind(a, 561))];
                          case 6:
                            i3._pbrMaterialImpl = (b2.adapterClass = T2.sent().PBRMaterialLoadingAdapter, b2), T2.label = 7;
                          case 7:
                            if (s2 = "".concat(V[V.LOADING], " => ").concat(V[V.READY]), l2 = "".concat(V[V.LOADING], " => ").concat(V[V.COMPLETE]), this._parent._startPerformanceCounter(s2), this._parent._startPerformanceCounter(l2), this._parent._setState(V.LOADING), this._extensionsOnLoading(), u2 = new Array(), c2 = this._babylonScene.blockMaterialDirtyMechanism, this._babylonScene.blockMaterialDirtyMechanism = true, this.parent.loadOnlyMaterials || (n2 ? u2.push(this.loadSceneAsync("/nodes", { nodes: n2, index: -1 })) : (null != this._gltf.scene || this._gltf.scenes && this._gltf.scenes[0]) && (f2 = Be.Get("/scene", this._gltf.scenes, this._gltf.scene || 0), u2.push(this.loadSceneAsync("/scenes/".concat(f2.index), f2)))), !this.parent.skipMaterials && this.parent.loadAllMaterials && this._gltf.materials) for (h2 = 0; h2 < this._gltf.materials.length; ++h2) p2 = this._gltf.materials[h2], d2 = "/materials/" + h2, m2 = g.Material.TriangleFillMode, u2.push(this._loadMaterialAsync(d2, p2, null, m2, function() {
                            }));
                            return this._allMaterialsDirtyRequired ? this._babylonScene.blockMaterialDirtyMechanism = c2 : this._babylonScene._forceBlockMaterialDirtyMechanism(c2), this._parent.compileMaterials && u2.push(this._compileMaterialsAsync()), this._parent.compileShadowGenerators && u2.push(this._compileShadowGeneratorsAsync()), _2 = Promise.all(u2).then(function() {
                              v2._rootBabylonMesh && v2._rootBabylonMesh !== v2._parent.customRootNode && v2._rootBabylonMesh.setEnabled(true);
                              for (var e4 = 0, t3 = v2._babylonScene.materials; e4 < t3.length; e4++) {
                                var n3 = t3[e4];
                                void 0 !== n3.maxSimultaneousLights && (n3.maxSimultaneousLights = Math.max(n3.maxSimultaneousLights, v2._babylonScene.lights.length));
                              }
                              return v2._extensionsOnReady(), v2._parent._setState(V.READY), v2._skipStartAnimationStep || v2._startAnimations(), r2();
                            }), [4, _2.then(function(e4) {
                              return v2._parent._endPerformanceCounter(s2), g.Tools.SetImmediate(function() {
                                v2._disposed || Promise.all(v2._completePromises).then(function() {
                                  v2._parent._endPerformanceCounter(l2), v2._parent._setState(V.COMPLETE), v2._parent.onCompleteObservable.notifyObservers(void 0), v2._parent.onCompleteObservable.clear(), v2.dispose();
                                }, function(e5) {
                                  v2._parent.onErrorObservable.notifyObservers(e5), v2._parent.onErrorObservable.clear(), v2.dispose();
                                });
                              }), e4;
                            })];
                          case 8:
                            return [2, T2.sent()];
                        }
                      });
                    });
                  }).catch(function(e4) {
                    throw o2._disposed || (o2._parent.onErrorObservable.notifyObservers(e4), o2._parent.onErrorObservable.clear(), o2.dispose()), e4;
                  })];
                case 1:
                  return [2, i2.sent()];
              }
            });
          });
        }, e2.prototype._loadData = function(e3) {
          if (this._gltf = e3.json, this._setupData(), e3.bin) {
            var t2 = this._gltf.buffers;
            if (t2 && t2[0] && !t2[0].uri) {
              var n2 = t2[0];
              (n2.byteLength < e3.bin.byteLength - 3 || n2.byteLength > e3.bin.byteLength) && g.Logger.Warn("Binary buffer length (".concat(n2.byteLength, ") from JSON does not match chunk length (").concat(e3.bin.byteLength, ")")), this._bin = e3.bin;
            } else g.Logger.Warn("Unexpected BIN chunk");
          }
        }, e2.prototype._setupData = function() {
          if (Be.Assign(this._gltf.accessors), Be.Assign(this._gltf.animations), Be.Assign(this._gltf.buffers), Be.Assign(this._gltf.bufferViews), Be.Assign(this._gltf.cameras), Be.Assign(this._gltf.images), Be.Assign(this._gltf.materials), Be.Assign(this._gltf.meshes), Be.Assign(this._gltf.nodes), Be.Assign(this._gltf.samplers), Be.Assign(this._gltf.scenes), Be.Assign(this._gltf.skins), Be.Assign(this._gltf.textures), this._gltf.nodes) {
            for (var e3 = {}, t2 = 0, n2 = this._gltf.nodes; t2 < n2.length; t2++) if ((l2 = n2[t2]).children) for (var r2 = 0, o2 = l2.children; r2 < o2.length; r2++) e3[o2[r2]] = l2.index;
            for (var a2 = this._createRootNode(), i2 = 0, s2 = this._gltf.nodes; i2 < s2.length; i2++) {
              var l2, u2 = e3[(l2 = s2[i2]).index];
              l2.parent = void 0 === u2 ? a2 : this._gltf.nodes[u2];
            }
          }
        }, e2.prototype._loadExtensionsAsync = function() {
          return (0, L.sH)(this, void 0, void 0, function() {
            var e3, t2, n2, r2, o2, a2, i2, s2, l2, u2, c2, f2 = this;
            return (0, L.YH)(this, function(h2) {
              switch (h2.label) {
                case 0:
                  return e3 = [], Pe.forEach(function(t3, n3) {
                    var r3;
                    false === (null === (r3 = f2.parent.extensionOptions[n3]) || void 0 === r3 ? void 0 : r3.enabled) ? t3.isGLTFExtension && f2.isExtensionUsed(n3) && g.Logger.Warn("Extension ".concat(n3, " is used but has been explicitly disabled.")) : t3.isGLTFExtension && !f2.isExtensionUsed(n3) || e3.push((0, L.sH)(f2, void 0, void 0, function() {
                      var e4;
                      return (0, L.YH)(this, function(r4) {
                        switch (r4.label) {
                          case 0:
                            return [4, t3.factory(this)];
                          case 1:
                            return (e4 = r4.sent()).name !== n3 && g.Logger.Warn("The name of the glTF loader extension instance does not match the registered name: ".concat(e4.name, " !== ").concat(n3)), this._parent.onExtensionLoadedObservable.notifyObservers(e4), [2, e4];
                        }
                      });
                    }));
                  }), n2 = (t2 = (u2 = this._extensions).push).apply, r2 = [u2], [4, Promise.all(e3)];
                case 1:
                  if (n2.apply(t2, r2.concat([h2.sent()])), this._extensions.sort(function(e4, t3) {
                    return (e4.order || Number.MAX_VALUE) - (t3.order || Number.MAX_VALUE);
                  }), this._parent.onExtensionLoadedObservable.clear(), this._gltf.extensionsRequired) for (o2 = function(e4) {
                    if (!a2._extensions.some(function(t3) {
                      return t3.name === e4 && t3.enabled;
                    })) {
                      if (false === (null === (c2 = a2.parent.extensionOptions[e4]) || void 0 === c2 ? void 0 : c2.enabled)) throw new Error("Required extension ".concat(e4, " is disabled"));
                      throw new Error("Required extension ".concat(e4, " is not available"));
                    }
                  }, a2 = this, i2 = 0, s2 = this._gltf.extensionsRequired; i2 < s2.length; i2++) l2 = s2[i2], o2(l2);
                  return [2];
              }
            });
          });
        }, e2.prototype._createRootNode = function() {
          if (void 0 !== this._parent.customRootNode) return this._rootBabylonMesh = this._parent.customRootNode, { _babylonTransformNode: null === this._rootBabylonMesh ? void 0 : this._rootBabylonMesh, index: -1 };
          this._babylonScene._blockEntityCollection = !!this._assetContainer;
          var t2 = new g.Mesh("__root__", this._babylonScene);
          this._rootBabylonMesh = t2, this._rootBabylonMesh._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, this._rootBabylonMesh.setEnabled(false);
          var n2 = { _babylonTransformNode: this._rootBabylonMesh, index: -1 };
          switch (this._parent.coordinateSystemMode) {
            case k.AUTO:
              this._babylonScene.useRightHandedSystem || (n2.rotation = [0, 1, 0, 0], n2.scale = [1, 1, -1], e2._LoadTransform(n2, this._rootBabylonMesh));
              break;
            case k.FORCE_RIGHT_HANDED:
              this._babylonScene.useRightHandedSystem = true;
              break;
            default:
              throw new Error("Invalid coordinate system mode (".concat(this._parent.coordinateSystemMode, ")"));
          }
          return this._parent.onMeshLoadedObservable.notifyObservers(t2), n2;
        }, e2.prototype.loadSceneAsync = function(e3, t2) {
          var n2 = this, r2 = this._extensionsLoadSceneAsync(e3, t2);
          if (r2) return r2;
          var o2 = new Array();
          if (this.logOpen("".concat(e3, " ").concat(t2.name || "")), t2.nodes) for (var a2 = 0, i2 = t2.nodes; a2 < i2.length; a2++) {
            var s2 = i2[a2], l2 = Be.Get("".concat(e3, "/nodes/").concat(s2), this._gltf.nodes, s2);
            o2.push(this.loadNodeAsync("/nodes/".concat(l2.index), l2, function(e4) {
              e4.parent = n2._rootBabylonMesh;
            }));
          }
          for (var u2 = 0, c2 = this._postSceneLoadActions; u2 < c2.length; u2++) (0, c2[u2])();
          return o2.push(this._loadAnimationsAsync()), this.logClose(), Promise.all(o2).then(function() {
          });
        }, e2.prototype._forEachPrimitive = function(e3, t2) {
          if (e3._primitiveBabylonMeshes) for (var n2 = 0, r2 = e3._primitiveBabylonMeshes; n2 < r2.length; n2++) t2(r2[n2]);
        }, e2.prototype._getGeometries = function() {
          var e3 = [], t2 = this._gltf.nodes;
          if (t2) for (var n2 = 0, r2 = t2; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            this._forEachPrimitive(o2, function(t3) {
              var n3 = t3.geometry;
              n3 && -1 === e3.indexOf(n3) && e3.push(n3);
            });
          }
          return e3;
        }, e2.prototype._getMeshes = function() {
          var e3 = [];
          this._rootBabylonMesh instanceof g.AbstractMesh && e3.push(this._rootBabylonMesh);
          var t2 = this._gltf.nodes;
          if (t2) for (var n2 = 0, r2 = t2; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            this._forEachPrimitive(o2, function(t3) {
              e3.push(t3);
            });
          }
          return e3;
        }, e2.prototype._getTransformNodes = function() {
          var e3 = [], t2 = this._gltf.nodes;
          if (t2) for (var n2 = 0, r2 = t2; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            o2._babylonTransformNode && "TransformNode" === o2._babylonTransformNode.getClassName() && e3.push(o2._babylonTransformNode), o2._babylonTransformNodeForSkin && e3.push(o2._babylonTransformNodeForSkin);
          }
          return e3;
        }, e2.prototype._getSkeletons = function() {
          var e3 = [], t2 = this._gltf.skins;
          if (t2) for (var n2 = 0, r2 = t2; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            o2._data && e3.push(o2._data.babylonSkeleton);
          }
          return e3;
        }, e2.prototype._getAnimationGroups = function() {
          var e3 = [], t2 = this._gltf.animations;
          if (t2) for (var n2 = 0, r2 = t2; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            o2._babylonAnimationGroup && e3.push(o2._babylonAnimationGroup);
          }
          return e3;
        }, e2.prototype._startAnimations = function() {
          switch (this._parent.animationStartMode) {
            case G.NONE:
              break;
            case G.FIRST:
              0 !== (e3 = this._getAnimationGroups()).length && e3[0].start(true);
              break;
            case G.ALL:
              for (var e3, t2 = 0, n2 = e3 = this._getAnimationGroups(); t2 < n2.length; t2++) n2[t2].start(true);
              break;
            default:
              return void g.Logger.Error("Invalid animation start mode (".concat(this._parent.animationStartMode, ")"));
          }
        }, e2.prototype.loadNodeAsync = function(t2, n2, r2) {
          var o2 = this;
          void 0 === r2 && (r2 = function() {
          });
          var a2 = this._extensionsLoadNodeAsync(t2, n2, r2);
          if (a2) return a2;
          if (n2._babylonTransformNode) throw new Error("".concat(t2, ": Invalid recursive node hierarchy"));
          var i2 = new Array();
          this.logOpen("".concat(t2, " ").concat(n2.name || ""));
          var s2 = function(a3) {
            if (e2.AddPointerMetadata(a3, t2), e2._LoadTransform(n2, a3), null != n2.camera) {
              var s3 = Be.Get("".concat(t2, "/camera"), o2._gltf.cameras, n2.camera);
              i2.push(o2.loadCameraAsync("/cameras/".concat(s3.index), s3, function(e3) {
                e3.parent = a3, o2._babylonScene.useRightHandedSystem || (a3.scaling.x = -1);
              }));
            }
            if (n2.children) for (var l3 = 0, u3 = n2.children; l3 < u3.length; l3++) {
              var c3 = u3[l3], f3 = Be.Get("".concat(t2, "/children/").concat(c3), o2._gltf.nodes, c3);
              i2.push(o2.loadNodeAsync("/nodes/".concat(f3.index), f3, function(e3) {
                e3.parent = a3;
              }));
            }
            r2(a3);
          }, l2 = null != n2.mesh, u2 = this._parent.loadSkins && null != n2.skin;
          if (!l2 || u2) {
            var c2 = n2.name || "node".concat(n2.index);
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            var f2 = new g.TransformNode(c2, this._babylonScene);
            f2._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, null == n2.mesh ? n2._babylonTransformNode = f2 : n2._babylonTransformNodeForSkin = f2, s2(f2);
          }
          if (l2) if (u2) {
            var h2 = Be.Get("".concat(t2, "/mesh"), this._gltf.meshes, n2.mesh);
            i2.push(this._loadMeshAsync("/meshes/".concat(h2.index), n2, h2, function(e3) {
              var r3 = n2._babylonTransformNodeForSkin;
              e3.metadata = (0, g.deepMerge)(r3.metadata, e3.metadata || {});
              var a3 = Be.Get("".concat(t2, "/skin"), o2._gltf.skins, n2.skin);
              i2.push(o2._loadSkinAsync("/skins/".concat(a3.index), n2, a3, function(t3) {
                o2._forEachPrimitive(n2, function(e4) {
                  e4.skeleton = t3;
                }), o2._postSceneLoadActions.push(function() {
                  if (null != a3.skeleton) {
                    var t4 = Be.Get("/skins/".concat(a3.index, "/skeleton"), o2._gltf.nodes, a3.skeleton).parent;
                    n2.index === t4.index ? e3.parent = r3.parent : e3.parent = t4._babylonTransformNode;
                  } else e3.parent = o2._rootBabylonMesh;
                  o2._parent.onSkinLoadedObservable.notifyObservers({ node: r3, skinnedNode: e3 });
                });
              }));
            }));
          } else h2 = Be.Get("".concat(t2, "/mesh"), this._gltf.meshes, n2.mesh), i2.push(this._loadMeshAsync("/meshes/".concat(h2.index), n2, h2, s2));
          return this.logClose(), Promise.all(i2).then(function() {
            return o2._forEachPrimitive(n2, function(e3) {
              var t3 = e3;
              !t3.isAnInstance && t3.geometry && t3.geometry.useBoundingInfoFromGeometry ? e3._updateBoundingInfo() : e3.refreshBoundingInfo(true, true);
            }), n2._babylonTransformNode;
          });
        }, e2.prototype._loadMeshAsync = function(e3, t2, n2, r2) {
          var o2 = n2.primitives;
          if (!o2 || !o2.length) throw new Error("".concat(e3, ": Primitives are missing"));
          null == o2[0].index && Be.Assign(o2);
          var a2 = new Array();
          this.logOpen("".concat(e3, " ").concat(n2.name || ""));
          var i2 = t2.name || "node".concat(t2.index);
          if (1 === o2.length) {
            var s2 = n2.primitives[0];
            a2.push(this._loadMeshPrimitiveAsync("".concat(e3, "/primitives/").concat(s2.index), i2, t2, n2, s2, function(e4) {
              t2._babylonTransformNode = e4, t2._primitiveBabylonMeshes = [e4];
            }));
          } else {
            this._babylonScene._blockEntityCollection = !!this._assetContainer, t2._babylonTransformNode = new g.TransformNode(i2, this._babylonScene), t2._babylonTransformNode._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, t2._primitiveBabylonMeshes = [];
            for (var l2 = 0, u2 = o2; l2 < u2.length; l2++) s2 = u2[l2], a2.push(this._loadMeshPrimitiveAsync("".concat(e3, "/primitives/").concat(s2.index), "".concat(i2, "_primitive").concat(s2.index), t2, n2, s2, function(e4) {
              e4.parent = t2._babylonTransformNode, t2._primitiveBabylonMeshes.push(e4);
            }));
          }
          return r2(t2._babylonTransformNode), this.logClose(), Promise.all(a2).then(function() {
            return t2._babylonTransformNode;
          });
        }, e2.prototype._loadMeshPrimitiveAsync = function(t2, n2, r2, o2, a2, i2) {
          var s2 = this, l2 = this._extensionsLoadMeshPrimitiveAsync(t2, n2, r2, o2, a2, i2);
          if (l2) return l2;
          this.logOpen("".concat(t2));
          var u2, c2, f2 = 0 === this._disableInstancedMesh && this._parent.createInstances && null == r2.skin && !o2.primitives[0].targets;
          if (f2 && a2._instanceData) this._babylonScene._blockEntityCollection = !!this._assetContainer, (u2 = a2._instanceData.babylonSourceMesh.createInstance(n2))._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, c2 = a2._instanceData.promise;
          else {
            var h2 = new Array();
            this._babylonScene._blockEntityCollection = !!this._assetContainer;
            var p2 = new g.Mesh(n2, this._babylonScene);
            if (p2._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, p2.sideOrientation = this._babylonScene.useRightHandedSystem ? g.Material.CounterClockWiseSideOrientation : g.Material.ClockWiseSideOrientation, this._createMorphTargets(t2, r2, o2, a2, p2), h2.push(this._loadVertexDataAsync(t2, a2, p2).then(function(e3) {
              return (0, L.sH)(s2, void 0, void 0, function() {
                var n3 = this;
                return (0, L.YH)(this, function(r3) {
                  switch (r3.label) {
                    case 0:
                      return [4, this._loadMorphTargetsAsync(t2, a2, p2, e3).then(function() {
                        n3._disposed || (n3._babylonScene._blockEntityCollection = !!n3._assetContainer, e3.applyToMesh(p2), e3._parentContainer = n3._assetContainer, n3._babylonScene._blockEntityCollection = false);
                      })];
                    case 1:
                      return [2, r3.sent()];
                  }
                });
              });
            })), !this.parent.skipMaterials) {
              var d2 = e2._GetDrawMode(t2, a2.mode);
              if (null == a2.material) {
                var m2 = this._defaultBabylonMaterialData[d2];
                m2 || (m2 = this._createDefaultMaterial("__GLTFLoader._default", d2), this._parent.onMaterialLoadedObservable.notifyObservers(m2), this._defaultBabylonMaterialData[d2] = m2), p2.material = m2;
              } else {
                var _2 = Be.Get("".concat(t2, "/material"), this._gltf.materials, a2.material);
                h2.push(this._loadMaterialAsync("/materials/".concat(_2.index), _2, p2, d2, function(e3) {
                  p2.material = e3;
                }));
              }
            }
            c2 = Promise.all(h2), f2 && (a2._instanceData = { babylonSourceMesh: p2, promise: c2 }), u2 = p2;
          }
          return e2.AddPointerMetadata(u2, t2), this._parent.onMeshLoadedObservable.notifyObservers(u2), i2(u2), this.logClose(), c2.then(function() {
            return u2;
          });
        }, e2.prototype._loadVertexDataAsync = function(e3, t2, n2) {
          var r2 = this, o2 = this._extensionsLoadVertexDataAsync(e3, t2, n2);
          if (o2) return o2;
          var a2 = t2.attributes;
          if (!a2) throw new Error("".concat(e3, ": Attributes are missing"));
          var i2 = new Array(), s2 = new g.Geometry(n2.name, this._babylonScene);
          if (null == t2.indices) n2.isUnIndexed = true;
          else {
            var l2 = Be.Get("".concat(e3, "/indices"), this._gltf.accessors, t2.indices);
            i2.push(this._loadIndicesAccessorAsync("/accessors/".concat(l2.index), l2).then(function(e4) {
              s2.setIndices(e4);
            }));
          }
          var u2 = function(t3, o3, l3) {
            if (null != a2[t3]) {
              n2._delayInfo = n2._delayInfo || [], -1 === n2._delayInfo.indexOf(o3) && n2._delayInfo.push(o3);
              var u3 = Be.Get("".concat(e3, "/attributes/").concat(t3), r2._gltf.accessors, a2[t3]);
              i2.push(r2._loadVertexAccessorAsync("/accessors/".concat(u3.index), u3, o3).then(function(e4) {
                if (e4.getKind() === g.VertexBuffer.PositionKind && !r2.parent.alwaysComputeBoundingBox && !n2.skeleton) {
                  var t4 = ke(u3);
                  t4 && (s2._boundingInfo = t4, s2.useBoundingInfoFromGeometry = true);
                }
                s2.setVerticesBuffer(e4, u3.count);
              })), o3 == g.VertexBuffer.MatricesIndicesExtraKind && (n2.numBoneInfluencers = 8), l3 && l3(u3);
            }
          };
          return u2("POSITION", g.VertexBuffer.PositionKind), u2("NORMAL", g.VertexBuffer.NormalKind), u2("TANGENT", g.VertexBuffer.TangentKind), u2("TEXCOORD_0", g.VertexBuffer.UVKind), u2("TEXCOORD_1", g.VertexBuffer.UV2Kind), u2("TEXCOORD_2", g.VertexBuffer.UV3Kind), u2("TEXCOORD_3", g.VertexBuffer.UV4Kind), u2("TEXCOORD_4", g.VertexBuffer.UV5Kind), u2("TEXCOORD_5", g.VertexBuffer.UV6Kind), u2("JOINTS_0", g.VertexBuffer.MatricesIndicesKind), u2("WEIGHTS_0", g.VertexBuffer.MatricesWeightsKind), u2("JOINTS_1", g.VertexBuffer.MatricesIndicesExtraKind), u2("WEIGHTS_1", g.VertexBuffer.MatricesWeightsExtraKind), u2("COLOR_0", g.VertexBuffer.ColorKind, function(e4) {
            "VEC4" === e4.type && (n2.hasVertexAlpha = true);
          }), Promise.all(i2).then(function() {
            return s2;
          });
        }, e2.prototype._createMorphTargets = function(e3, t2, n2, r2, o2) {
          if (r2.targets && this._parent.loadMorphTargets) {
            if (null == t2._numMorphTargets) t2._numMorphTargets = r2.targets.length;
            else if (r2.targets.length !== t2._numMorphTargets) throw new Error("".concat(e3, ": Primitives do not have the same number of targets"));
            var a2 = n2.extras ? n2.extras.targetNames : null;
            this._babylonScene._blockEntityCollection = !!this._assetContainer, o2.morphTargetManager = new g.MorphTargetManager(this._babylonScene), o2.morphTargetManager._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, o2.morphTargetManager.areUpdatesFrozen = true;
            for (var i2 = 0; i2 < r2.targets.length; i2++) {
              var s2 = t2.weights ? t2.weights[i2] : n2.weights ? n2.weights[i2] : 0, l2 = a2 ? a2[i2] : "morphTarget".concat(i2);
              o2.morphTargetManager.addTarget(new g.MorphTarget(l2, s2, o2.getScene()));
            }
          }
        }, e2.prototype._loadMorphTargetsAsync = function(e3, t2, n2, r2) {
          if (!t2.targets || !this._parent.loadMorphTargets) return Promise.resolve();
          for (var o2 = new Array(), a2 = n2.morphTargetManager, i2 = 0; i2 < a2.numTargets; i2++) {
            var s2 = a2.getTarget(i2);
            o2.push(this._loadMorphTargetVertexDataAsync("".concat(e3, "/targets/").concat(i2), r2, t2.targets[i2], s2));
          }
          return Promise.all(o2).then(function() {
            a2.areUpdatesFrozen = false;
          });
        }, e2.prototype._loadMorphTargetVertexDataAsync = function(e3, t2, n2, r2) {
          return (0, L.sH)(this, void 0, void 0, function() {
            var o2, a2, i2 = this;
            return (0, L.YH)(this, function(s2) {
              switch (s2.label) {
                case 0:
                  return o2 = new Array(), (a2 = function(r3, a3, s3) {
                    if (null != n2[r3]) {
                      var l2 = t2.getVertexBuffer(a3);
                      if (l2) {
                        var u2 = Be.Get("".concat(e3, "/").concat(r3), i2._gltf.accessors, n2[r3]);
                        o2.push(i2._loadFloatAccessorAsync("/accessors/".concat(u2.index), u2).then(function(e4) {
                          s3(l2, e4);
                        }));
                      }
                    }
                  })("POSITION", g.VertexBuffer.PositionKind, function(e4, t3) {
                    var n3 = new Float32Array(t3.length);
                    e4.forEach(t3.length, function(e5, r3) {
                      n3[r3] = t3[r3] + e5;
                    }), r2.setPositions(n3);
                  }), a2("NORMAL", g.VertexBuffer.NormalKind, function(e4, t3) {
                    var n3 = new Float32Array(t3.length);
                    e4.forEach(n3.length, function(e5, r3) {
                      n3[r3] = t3[r3] + e5;
                    }), r2.setNormals(n3);
                  }), a2("TANGENT", g.VertexBuffer.TangentKind, function(e4, t3) {
                    var n3 = new Float32Array(t3.length / 3 * 4), o3 = 0;
                    e4.forEach(t3.length / 3 * 4, function(e5, r3) {
                      (r3 + 1) % 4 != 0 && (n3[o3] = t3[o3] + e5, o3++);
                    }), r2.setTangents(n3);
                  }), a2("TEXCOORD_0", g.VertexBuffer.UVKind, function(e4, t3) {
                    var n3 = new Float32Array(t3.length);
                    e4.forEach(t3.length, function(e5, r3) {
                      n3[r3] = t3[r3] + e5;
                    }), r2.setUVs(n3);
                  }), a2("TEXCOORD_1", g.VertexBuffer.UV2Kind, function(e4, t3) {
                    var n3 = new Float32Array(t3.length);
                    e4.forEach(t3.length, function(e5, r3) {
                      n3[r3] = t3[r3] + e5;
                    }), r2.setUV2s(n3);
                  }), a2("COLOR_0", g.VertexBuffer.ColorKind, function(t3, n3) {
                    var o3 = null, a3 = t3.getSize();
                    if (3 === a3) {
                      o3 = new Float32Array(n3.length / 3 * 4), t3.forEach(n3.length, function(e4, t4) {
                        var r3 = Math.floor(t4 / 3), a4 = t4 % 3;
                        o3[4 * r3 + a4] = n3[3 * r3 + a4] + e4;
                      });
                      for (var i3 = 0; i3 < n3.length / 3; ++i3) o3[4 * i3 + 3] = 1;
                    } else {
                      if (4 !== a3) throw new Error("".concat(e3, ": Invalid number of components (").concat(a3, ") for COLOR_0 attribute"));
                      o3 = new Float32Array(n3.length), t3.forEach(n3.length, function(e4, t4) {
                        o3[t4] = n3[t4] + e4;
                      });
                    }
                    r2.setColors(o3);
                  }), [4, Promise.all(o2).then(function() {
                  })];
                case 1:
                  return [2, s2.sent()];
              }
            });
          });
        }, e2._LoadTransform = function(e3, t2) {
          if (null == e3.skin) {
            var n2 = g.Vector3.Zero(), r2 = g.Quaternion.Identity(), o2 = g.Vector3.One();
            e3.matrix ? g.Matrix.FromArray(e3.matrix).decompose(o2, r2, n2) : (e3.translation && (n2 = g.Vector3.FromArray(e3.translation)), e3.rotation && (r2 = g.Quaternion.FromArray(e3.rotation)), e3.scale && (o2 = g.Vector3.FromArray(e3.scale))), t2.position = n2, t2.rotationQuaternion = r2, t2.scaling = o2;
          }
        }, e2.prototype._loadSkinAsync = function(e3, t2, n2, r2) {
          var o2 = this;
          if (!this._parent.loadSkins) return Promise.resolve();
          var a2 = this._extensionsLoadSkinAsync(e3, t2, n2);
          if (a2) return a2;
          if (n2._data) return r2(n2._data.babylonSkeleton), n2._data.promise;
          var i2 = "skeleton".concat(n2.index);
          this._babylonScene._blockEntityCollection = !!this._assetContainer;
          var s2 = new g.Skeleton(n2.name || i2, i2, this._babylonScene);
          s2._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, this._loadBones(e3, n2, s2);
          var l2 = this._loadSkinInverseBindMatricesDataAsync(e3, n2).then(function(e4) {
            o2._updateBoneMatrices(s2, e4);
          });
          return n2._data = { babylonSkeleton: s2, promise: l2 }, r2(s2), l2;
        }, e2.prototype._loadBones = function(e3, t2, n2) {
          if (null == t2.skeleton || this._parent.alwaysComputeSkeletonRootNode) {
            var r2 = this._findSkeletonRootNode("".concat(e3, "/joints"), t2.joints);
            if (r2) if (void 0 === t2.skeleton) t2.skeleton = r2.index;
            else {
              var o2 = Be.Get("".concat(e3, "/skeleton"), this._gltf.nodes, t2.skeleton);
              o2 === r2 || function(e4, t3) {
                for (; t3.parent; t3 = t3.parent) if (t3.parent === e4) return true;
                return false;
              }(o2, r2) || (g.Logger.Warn("".concat(e3, "/skeleton: Overriding with nearest common ancestor as skeleton node is not a common root")), t2.skeleton = r2.index);
            }
            else g.Logger.Warn("".concat(e3, ": Failed to find common root"));
          }
          for (var a2 = {}, i2 = 0, s2 = t2.joints; i2 < s2.length; i2++) {
            var l2 = s2[i2], u2 = Be.Get("".concat(e3, "/joints/").concat(l2), this._gltf.nodes, l2);
            this._loadBone(u2, t2, n2, a2);
          }
        }, e2.prototype._findSkeletonRootNode = function(e3, t2) {
          if (0 === t2.length) return null;
          for (var n2 = {}, r2 = 0, o2 = t2; r2 < o2.length; r2++) {
            for (var a2 = o2[r2], i2 = [], s2 = Be.Get("".concat(e3, "/").concat(a2), this._gltf.nodes, a2); -1 !== s2.index; ) i2.unshift(s2), s2 = s2.parent;
            n2[a2] = i2;
          }
          for (var l2 = null, u2 = 0; ; ++u2) {
            if (u2 >= (i2 = n2[t2[0]]).length) return l2;
            s2 = i2[u2];
            for (var c2 = 1; c2 < t2.length; ++c2) if (u2 >= (i2 = n2[t2[c2]]).length || s2 !== i2[u2]) return l2;
            l2 = s2;
          }
        }, e2.prototype._loadBone = function(e3, t2, n2, r2) {
          e3._isJoint = true;
          var o2 = r2[e3.index];
          if (o2) return o2;
          var a2 = null;
          e3.index !== t2.skeleton && (e3.parent && -1 !== e3.parent.index ? a2 = this._loadBone(e3.parent, t2, n2, r2) : void 0 !== t2.skeleton && g.Logger.Warn("/skins/".concat(t2.index, "/skeleton: Skeleton node is not a common root")));
          var i2 = t2.joints.indexOf(e3.index);
          return o2 = new g.Bone(e3.name || "joint".concat(e3.index), n2, a2, this._getNodeMatrix(e3), null, null, i2), r2[e3.index] = o2, this._postSceneLoadActions.push(function() {
            o2.linkTransformNode(e3._babylonTransformNode);
          }), o2;
        }, e2.prototype._loadSkinInverseBindMatricesDataAsync = function(e3, t2) {
          if (null == t2.inverseBindMatrices) return Promise.resolve(null);
          var n2 = Be.Get("".concat(e3, "/inverseBindMatrices"), this._gltf.accessors, t2.inverseBindMatrices);
          return this._loadFloatAccessorAsync("/accessors/".concat(n2.index), n2);
        }, e2.prototype._updateBoneMatrices = function(e3, t2) {
          for (var n2 = 0, r2 = e3.bones; n2 < r2.length; n2++) {
            var o2 = r2[n2], a2 = g.Matrix.Identity(), i2 = o2._index;
            t2 && -1 !== i2 && (g.Matrix.FromArrayToRef(t2, 16 * i2, a2), a2.invertToRef(a2));
            var s2 = o2.getParent();
            s2 && a2.multiplyToRef(s2.getAbsoluteInverseBindMatrix(), a2), o2.updateMatrix(a2, false, false), o2._updateAbsoluteBindMatrices(void 0, false);
          }
        }, e2.prototype._getNodeMatrix = function(e3) {
          return e3.matrix ? g.Matrix.FromArray(e3.matrix) : g.Matrix.Compose(e3.scale ? g.Vector3.FromArray(e3.scale) : g.Vector3.One(), e3.rotation ? g.Quaternion.FromArray(e3.rotation) : g.Quaternion.Identity(), e3.translation ? g.Vector3.FromArray(e3.translation) : g.Vector3.Zero());
        }, e2.prototype.loadCameraAsync = function(t2, n2, r2) {
          void 0 === r2 && (r2 = function() {
          });
          var o2 = this._extensionsLoadCameraAsync(t2, n2, r2);
          if (o2) return o2;
          var a2 = new Array();
          this.logOpen("".concat(t2, " ").concat(n2.name || "")), this._babylonScene._blockEntityCollection = !!this._assetContainer;
          var i2 = new g.FreeCamera(n2.name || "camera".concat(n2.index), g.Vector3.Zero(), this._babylonScene, false);
          switch (i2._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, n2._babylonCamera = i2, i2.setTarget(new g.Vector3(0, 0, -1)), n2.type) {
            case "perspective":
              var s2 = n2.perspective;
              if (!s2) throw new Error("".concat(t2, ": Camera perspective properties are missing"));
              i2.fov = s2.yfov, i2.minZ = s2.znear, i2.maxZ = s2.zfar || 0;
              break;
            case "orthographic":
              if (!n2.orthographic) throw new Error("".concat(t2, ": Camera orthographic properties are missing"));
              i2.mode = g.Camera.ORTHOGRAPHIC_CAMERA, i2.orthoLeft = -n2.orthographic.xmag, i2.orthoRight = n2.orthographic.xmag, i2.orthoBottom = -n2.orthographic.ymag, i2.orthoTop = n2.orthographic.ymag, i2.minZ = n2.orthographic.znear, i2.maxZ = n2.orthographic.zfar;
              break;
            default:
              throw new Error("".concat(t2, ": Invalid camera type (").concat(n2.type, ")"));
          }
          return e2.AddPointerMetadata(i2, t2), this._parent.onCameraLoadedObservable.notifyObservers(i2), r2(i2), this.logClose(), Promise.all(a2).then(function() {
            return i2;
          });
        }, e2.prototype._loadAnimationsAsync = function() {
          var e3 = this;
          this._parent._startPerformanceCounter("Load animations");
          var t2 = this._gltf.animations;
          if (!t2) return Promise.resolve();
          for (var n2 = new Array(), r2 = 0; r2 < t2.length; r2++) {
            var o2 = t2[r2];
            n2.push(this.loadAnimationAsync("/animations/".concat(o2.index), o2).then(function(e4) {
              0 === e4.targetedAnimations.length && e4.dispose();
            }));
          }
          return Promise.all(n2).then(function() {
            e3._parent._endPerformanceCounter("Load animations");
          });
        }, e2.prototype.loadAnimationAsync = function(e3, t2) {
          var n2 = this;
          return this._parent._startPerformanceCounter("Load animation"), this._extensionsLoadAnimationAsync(e3, t2) || Ie.value.then(function(r2) {
            var o2 = r2.AnimationGroup;
            n2._babylonScene._blockEntityCollection = !!n2._assetContainer;
            var a2 = new o2(t2.name || "animation".concat(t2.index), n2._babylonScene);
            a2._parentContainer = n2._assetContainer, n2._babylonScene._blockEntityCollection = false, t2._babylonAnimationGroup = a2;
            var i2 = new Array();
            Be.Assign(t2.channels), Be.Assign(t2.samplers);
            for (var s2 = 0, l2 = t2.channels; s2 < l2.length; s2++) {
              var u2 = l2[s2];
              i2.push(n2._loadAnimationChannelAsync("".concat(e3, "/channels/").concat(u2.index), e3, t2, u2, function(e4, t3) {
                e4.animations = e4.animations || [], e4.animations.push(t3), a2.addTargetedAnimation(t3, e4);
              }));
            }
            return n2._parent._endPerformanceCounter("Load animation"), Promise.all(i2).then(function() {
              return a2.normalize(0), a2;
            });
          });
        }, e2.prototype._loadAnimationChannelAsync = function(e3, t2, n2, r2, o2) {
          var a2 = this, i2 = this._extensionsLoadAnimationChannelAsync(e3, t2, n2, r2, o2);
          if (i2) return i2;
          if (null == r2.target.node) return Promise.resolve();
          var s2 = Be.Get("".concat(e3, "/target/node"), this._gltf.nodes, r2.target.node), l2 = r2.target.path, u2 = "weights" === l2;
          return u2 && !s2._numMorphTargets || !u2 && !s2._babylonTransformNode ? Promise.resolve() : this._parent.loadNodeAnimations || u2 || s2._isJoint ? Se.value.then(function() {
            var i3, u3, c2, f2, h2;
            switch (l2) {
              case "translation":
                h2 = null === (i3 = (0, Ne.tQ)("/nodes/{}/translation")) || void 0 === i3 ? void 0 : i3.interpolation;
                break;
              case "rotation":
                h2 = null === (u3 = (0, Ne.tQ)("/nodes/{}/rotation")) || void 0 === u3 ? void 0 : u3.interpolation;
                break;
              case "scale":
                h2 = null === (c2 = (0, Ne.tQ)("/nodes/{}/scale")) || void 0 === c2 ? void 0 : c2.interpolation;
                break;
              case "weights":
                h2 = null === (f2 = (0, Ne.tQ)("/nodes/{}/weights")) || void 0 === f2 ? void 0 : f2.interpolation;
                break;
              default:
                throw new Error("".concat(e3, "/target/path: Invalid value (").concat(r2.target.path, ")"));
            }
            if (!h2) throw new Error("".concat(e3, "/target/path: Could not find interpolation properties for target path (").concat(r2.target.path, ")"));
            var p2 = { object: s2, info: h2 };
            return a2._loadAnimationChannelFromTargetInfoAsync(e3, t2, n2, r2, p2, o2);
          }) : Promise.resolve();
        }, e2.prototype._loadAnimationChannelFromTargetInfoAsync = function(e3, t2, n2, r2, o2, a2) {
          var i2 = this.parent.targetFps, s2 = 1 / i2, l2 = Be.Get("".concat(e3, "/sampler"), n2.samplers, r2.sampler);
          return this._loadAnimationSamplerAsync("".concat(t2, "/samplers/").concat(r2.sampler), l2).then(function(e4) {
            for (var t3 = 0, l3 = o2.object, u2 = 0, c2 = o2.info; u2 < c2.length; u2++) {
              var f2 = c2[u2], h2 = f2.getStride(l3), p2 = e4.input, d2 = e4.output, m2 = new Array(p2.length), _2 = 0;
              switch (e4.interpolation) {
                case "STEP":
                  for (var g2 = 0; g2 < p2.length; g2++) {
                    var y2 = f2.getValue(l3, d2, _2, 1);
                    _2 += h2, m2[g2] = { frame: p2[g2] * i2, value: y2, interpolation: 1 };
                  }
                  break;
                case "CUBICSPLINE":
                  for (g2 = 0; g2 < p2.length; g2++) {
                    var b2 = f2.getValue(l3, d2, _2, s2);
                    _2 += h2, y2 = f2.getValue(l3, d2, _2, 1), _2 += h2;
                    var v2 = f2.getValue(l3, d2, _2, s2);
                    _2 += h2, m2[g2] = { frame: p2[g2] * i2, inTangent: b2, value: y2, outTangent: v2 };
                  }
                  break;
                case "LINEAR":
                  for (g2 = 0; g2 < p2.length; g2++) y2 = f2.getValue(l3, d2, _2, 1), _2 += h2, m2[g2] = { frame: p2[g2] * i2, value: y2 };
              }
              if (_2 > 0) for (var T2 = "".concat(n2.name || "animation".concat(n2.index), "_channel").concat(r2.index, "_").concat(t3), x2 = 0, A2 = f2.buildAnimations(l3, T2, i2, m2); x2 < A2.length; x2++) {
                var w2 = A2[x2];
                t3++, a2(w2.babylonAnimatable, w2.babylonAnimation);
              }
            }
          });
        }, e2.prototype._loadAnimationSamplerAsync = function(e3, t2) {
          if (t2._data) return t2._data;
          var n2 = t2.interpolation || "LINEAR";
          switch (n2) {
            case "STEP":
            case "LINEAR":
            case "CUBICSPLINE":
              break;
            default:
              throw new Error("".concat(e3, "/interpolation: Invalid value (").concat(t2.interpolation, ")"));
          }
          var r2 = Be.Get("".concat(e3, "/input"), this._gltf.accessors, t2.input), o2 = Be.Get("".concat(e3, "/output"), this._gltf.accessors, t2.output);
          return t2._data = Promise.all([this._loadFloatAccessorAsync("/accessors/".concat(r2.index), r2), this._loadFloatAccessorAsync("/accessors/".concat(o2.index), o2)]).then(function(e4) {
            var t3 = e4[0], r3 = e4[1];
            return { input: t3, interpolation: n2, output: r3 };
          }), t2._data;
        }, e2.prototype.loadBufferAsync = function(e3, t2, n2, r2) {
          var o2 = this._extensionsLoadBufferAsync(e3, t2, n2, r2);
          if (o2) return o2;
          if (!t2._data) if (t2.uri) t2._data = this.loadUriAsync("".concat(e3, "/uri"), t2, t2.uri);
          else {
            if (!this._bin) throw new Error("".concat(e3, ": Uri is missing or the binary glTF is missing its binary chunk"));
            t2._data = this._bin.readAsync(0, t2.byteLength);
          }
          return t2._data.then(function(t3) {
            try {
              return new Uint8Array(t3.buffer, t3.byteOffset + n2, r2);
            } catch (t4) {
              throw new Error("".concat(e3, ": ").concat(t4.message));
            }
          });
        }, e2.prototype.loadBufferViewAsync = function(e3, t2) {
          var n2 = this._extensionsLoadBufferViewAsync(e3, t2);
          if (n2) return n2;
          if (t2._data) return t2._data;
          var r2 = Be.Get("".concat(e3, "/buffer"), this._gltf.buffers, t2.buffer);
          return t2._data = this.loadBufferAsync("/buffers/".concat(r2.index), r2, t2.byteOffset || 0, t2.byteLength), t2._data;
        }, e2.prototype._loadAccessorAsync = function(t2, n2, r2) {
          var o2 = this;
          if (n2._data) return n2._data;
          var a2 = e2._GetNumComponents(t2, n2.type), i2 = a2 * g.VertexBuffer.GetTypeByteLength(n2.componentType), s2 = a2 * n2.count;
          if (null == n2.bufferView) n2._data = Promise.resolve(new r2(s2));
          else {
            var l2 = Be.Get("".concat(t2, "/bufferView"), this._gltf.bufferViews, n2.bufferView);
            n2._data = this.loadBufferViewAsync("/bufferViews/".concat(l2.index), l2).then(function(o3) {
              if (5126 !== n2.componentType || n2.normalized || l2.byteStride && l2.byteStride !== i2) {
                var u3 = new r2(s2);
                return g.VertexBuffer.ForEach(o3, n2.byteOffset || 0, l2.byteStride || i2, a2, n2.componentType, u3.length, n2.normalized || false, function(e3, t3) {
                  u3[t3] = e3;
                }), u3;
              }
              return e2._GetTypedArray(t2, n2.componentType, o3, n2.byteOffset, s2);
            });
          }
          if (n2.sparse) {
            var u2 = n2.sparse;
            n2._data = n2._data.then(function(s3) {
              var l3 = s3, c2 = Be.Get("".concat(t2, "/sparse/indices/bufferView"), o2._gltf.bufferViews, u2.indices.bufferView), f2 = Be.Get("".concat(t2, "/sparse/values/bufferView"), o2._gltf.bufferViews, u2.values.bufferView);
              return Promise.all([o2.loadBufferViewAsync("/bufferViews/".concat(c2.index), c2), o2.loadBufferViewAsync("/bufferViews/".concat(f2.index), f2)]).then(function(o3) {
                var s4, c3 = o3[0], f3 = o3[1], h2 = e2._GetTypedArray("".concat(t2, "/sparse/indices"), u2.indices.componentType, c3, u2.indices.byteOffset, u2.count), p2 = a2 * u2.count;
                if (5126 !== n2.componentType || n2.normalized) {
                  var d2 = e2._GetTypedArray("".concat(t2, "/sparse/values"), n2.componentType, f3, u2.values.byteOffset, p2);
                  s4 = new r2(p2), g.VertexBuffer.ForEach(d2, 0, i2, a2, n2.componentType, s4.length, n2.normalized || false, function(e3, t3) {
                    s4[t3] = e3;
                  });
                } else s4 = e2._GetTypedArray("".concat(t2, "/sparse/values"), n2.componentType, f3, u2.values.byteOffset, p2);
                for (var m2 = 0, _2 = 0; _2 < h2.length; _2++) for (var y2 = h2[_2] * a2, b2 = 0; b2 < a2; b2++) l3[y2++] = s4[m2++];
                return l3;
              });
            });
          }
          return n2._data;
        }, e2.prototype._loadFloatAccessorAsync = function(e3, t2) {
          return this._loadAccessorAsync(e3, t2, Float32Array);
        }, e2.prototype._loadIndicesAccessorAsync = function(t2, n2) {
          if ("SCALAR" !== n2.type) throw new Error("".concat(t2, "/type: Invalid value ").concat(n2.type));
          if (5121 !== n2.componentType && 5123 !== n2.componentType && 5125 !== n2.componentType) throw new Error("".concat(t2, "/componentType: Invalid value ").concat(n2.componentType));
          if (n2._data) return n2._data;
          if (n2.sparse) {
            var r2 = e2._GetTypedArrayConstructor("".concat(t2, "/componentType"), n2.componentType);
            n2._data = this._loadAccessorAsync(t2, n2, r2);
          } else {
            var o2 = Be.Get("".concat(t2, "/bufferView"), this._gltf.bufferViews, n2.bufferView);
            n2._data = this.loadBufferViewAsync("/bufferViews/".concat(o2.index), o2).then(function(r3) {
              return e2._GetTypedArray(t2, n2.componentType, r3, n2.byteOffset, n2.count);
            });
          }
          return n2._data;
        }, e2.prototype._loadVertexBufferViewAsync = function(e3) {
          if (e3._babylonBuffer) return e3._babylonBuffer;
          var t2 = this._babylonScene.getEngine();
          return e3._babylonBuffer = this.loadBufferViewAsync("/bufferViews/".concat(e3.index), e3).then(function(e4) {
            return new g.Buffer(t2, e4, false);
          }), e3._babylonBuffer;
        }, e2.prototype._loadVertexAccessorAsync = function(t2, n2, r2) {
          var o2;
          if (null === (o2 = n2._babylonVertexBuffer) || void 0 === o2 ? void 0 : o2[r2]) return n2._babylonVertexBuffer[r2];
          n2._babylonVertexBuffer || (n2._babylonVertexBuffer = {});
          var a2 = this._babylonScene.getEngine();
          if (n2.sparse || null == n2.bufferView) n2._babylonVertexBuffer[r2] = this._loadFloatAccessorAsync(t2, n2).then(function(e3) {
            return new g.VertexBuffer(a2, e3, r2, false);
          });
          else {
            var i2 = Be.Get("".concat(t2, "/bufferView"), this._gltf.bufferViews, n2.bufferView);
            n2._babylonVertexBuffer[r2] = this._loadVertexBufferViewAsync(i2).then(function(o3) {
              var s2 = e2._GetNumComponents(t2, n2.type);
              return new g.VertexBuffer(a2, o3, r2, false, void 0, i2.byteStride, void 0, n2.byteOffset, s2, n2.componentType, n2.normalized, true, void 0, true);
            });
          }
          return n2._babylonVertexBuffer[r2];
        }, e2.prototype._loadMaterialMetallicRoughnessPropertiesAsync = function(e3, t2, n2) {
          var r2 = new Array(), o2 = this._getOrCreateMaterialAdapter(n2);
          return t2 && (t2.baseColorFactor ? (o2.baseColor = g.Color3.FromArray(t2.baseColorFactor), o2.geometryOpacity = t2.baseColorFactor[3]) : o2.baseColor = g.Color3.White(), o2.baseMetalness = null == t2.metallicFactor ? 1 : t2.metallicFactor, o2.specularRoughness = null == t2.roughnessFactor ? 1 : t2.roughnessFactor, t2.baseColorTexture && r2.push(this.loadTextureInfoAsync("".concat(e3, "/baseColorTexture"), t2.baseColorTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Base Color)"), o2.baseColorTexture = e4;
          })), t2.metallicRoughnessTexture && (t2.metallicRoughnessTexture.nonColorData = true, r2.push(this.loadTextureInfoAsync("".concat(e3, "/metallicRoughnessTexture"), t2.metallicRoughnessTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Metallic Roughness)"), o2.baseMetalnessTexture = e4, o2.specularRoughnessTexture = e4;
          })), o2.useRoughnessFromMetallicTextureGreen = true, o2.useMetallicFromMetallicTextureBlue = true)), Promise.all(r2).then(function() {
          });
        }, e2.prototype._loadMaterialAsync = function(t2, n2, r2, o2, a2) {
          void 0 === a2 && (a2 = function() {
          });
          var i2 = this._extensionsLoadMaterialAsync(t2, n2, r2, o2, a2);
          if (i2) return i2;
          n2._data = n2._data || {};
          var s2 = n2._data[o2];
          if (!s2) {
            this.logOpen("".concat(t2, " ").concat(n2.name || ""));
            var l2 = this.createMaterial(t2, n2, o2);
            s2 = { babylonMaterial: l2, babylonMeshes: [], promise: this.loadMaterialPropertiesAsync(t2, n2, l2) }, n2._data[o2] = s2, e2.AddPointerMetadata(l2, t2), this._parent.onMaterialLoadedObservable.notifyObservers(l2), this.logClose();
          }
          return r2 && (s2.babylonMeshes.push(r2), r2.onDisposeObservable.addOnce(function() {
            var e3 = s2.babylonMeshes.indexOf(r2);
            -1 !== e3 && s2.babylonMeshes.splice(e3, 1);
          })), a2(s2.babylonMaterial), s2.promise.then(function() {
            return s2.babylonMaterial;
          });
        }, e2.prototype._createDefaultMaterial = function(e3, t2) {
          if (!this._pbrMaterialImpl) throw new Error("PBR Material class not loaded");
          this._babylonScene._blockEntityCollection = !!this._assetContainer;
          var n2 = new this._pbrMaterialImpl.materialClass(e3, this._babylonScene);
          n2._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, n2.fillMode = t2, n2.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_OPAQUE;
          var r2 = this._getOrCreateMaterialAdapter(n2);
          return r2.transparencyAsAlphaCoverage = this._parent.transparencyAsCoverage, r2.baseMetalness = 1, r2.specularRoughness = 1, n2;
        }, e2.prototype.createMaterial = function(e3, t2, n2) {
          var r2 = this._extensionsCreateMaterial(e3, t2, n2);
          if (r2) return r2;
          var o2 = t2.name || "material".concat(t2.index);
          return this._createDefaultMaterial(o2, n2);
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this._extensionsLoadMaterialPropertiesAsync(e3, t2, n2);
          if (r2) return r2;
          var o2 = new Array();
          return o2.push(this.loadMaterialBasePropertiesAsync(e3, t2, n2)), t2.pbrMetallicRoughness && o2.push(this._loadMaterialMetallicRoughnessPropertiesAsync("".concat(e3, "/pbrMetallicRoughness"), t2.pbrMetallicRoughness, n2)), this.loadMaterialAlphaProperties(e3, t2, n2), Promise.all(o2).then(function() {
          });
        }, e2.prototype.loadMaterialBasePropertiesAsync = function(e3, t2, n2) {
          var r2, o2 = new Array(), a2 = this._getOrCreateMaterialAdapter(n2);
          a2.emissionColor = t2.emissiveFactor ? g.Color3.FromArray(t2.emissiveFactor) : new g.Color3(0, 0, 0), t2.doubleSided && (a2.backFaceCulling = false, a2.twoSidedLighting = true), t2.normalTexture && (t2.normalTexture.nonColorData = true, o2.push(this.loadTextureInfoAsync("".concat(e3, "/normalTexture"), t2.normalTexture, function(e4) {
            var r3;
            e4.name = "".concat(n2.name, " (Normal)"), a2.geometryNormalTexture = e4, null != (null === (r3 = t2.normalTexture) || void 0 === r3 ? void 0 : r3.scale) && (e4.level = t2.normalTexture.scale);
          })), a2.setNormalMapInversions(!this._babylonScene.useRightHandedSystem, this._babylonScene.useRightHandedSystem));
          var i2, s2 = 1;
          return t2.occlusionTexture && (t2.occlusionTexture.nonColorData = true, o2.push(this.loadTextureInfoAsync("".concat(e3, "/occlusionTexture"), t2.occlusionTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Occlusion)"), r2 = e4;
          })), null != t2.occlusionTexture.strength && (s2 = t2.occlusionTexture.strength)), t2.emissiveTexture && o2.push(this.loadTextureInfoAsync("".concat(e3, "/emissiveTexture"), t2.emissiveTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Emissive)"), i2 = e4;
          })), Promise.all(o2).then(function() {
            r2 && (a2.ambientOcclusionTexture = r2, a2.ambientOcclusionTextureStrength = s2), i2 && (a2.emissionColorTexture = i2);
          });
        }, e2.prototype.loadMaterialAlphaProperties = function(e3, t2, n2) {
          if (!this._pbrMaterialImpl) throw new Error("".concat(e3, ": Material type not supported"));
          var r2 = this._getOrCreateMaterialAdapter(n2), o2 = r2.baseColorTexture;
          switch (t2.alphaMode || "OPAQUE") {
            case "OPAQUE":
              n2.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_OPAQUE, n2.alpha = 1;
              break;
            case "MASK":
              n2.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_ALPHATEST, r2.alphaCutOff = null == t2.alphaCutoff ? 0.5 : t2.alphaCutoff, o2 && (o2.hasAlpha = true);
              break;
            case "BLEND":
              n2.transparencyMode = this._pbrMaterialImpl.materialClass.MATERIAL_ALPHABLEND, o2 && (o2.hasAlpha = true, r2.useAlphaFromBaseColorTexture = true);
              break;
            default:
              throw new Error("".concat(e3, "/alphaMode: Invalid value (").concat(t2.alphaMode, ")"));
          }
        }, e2.prototype.loadTextureInfoAsync = function(t2, n2, r2) {
          var o2 = this;
          void 0 === r2 && (r2 = function() {
          });
          var a2 = this._extensionsLoadTextureInfoAsync(t2, n2, r2);
          if (a2) return a2;
          if (this.logOpen("".concat(t2)), n2.texCoord >= 6) throw new Error("".concat(t2, "/texCoord: Invalid value (").concat(n2.texCoord, ")"));
          var i2 = Be.Get("".concat(t2, "/index"), this._gltf.textures, n2.index);
          i2._textureInfo = n2;
          var s2 = this._loadTextureAsync("/textures/".concat(n2.index), i2, function(a3) {
            a3.coordinatesIndex = n2.texCoord || 0, e2.AddPointerMetadata(a3, t2), o2._parent.onTextureLoadedObservable.notifyObservers(a3), r2(a3);
          });
          return this.logClose(), s2;
        }, e2.prototype._loadTextureAsync = function(t2, n2, r2) {
          void 0 === r2 && (r2 = function() {
          });
          var o2 = this._extensionsLoadTextureAsync(t2, n2, r2);
          if (o2) return o2;
          this.logOpen("".concat(t2, " ").concat(n2.name || ""));
          var a2 = null == n2.sampler ? e2.DefaultSampler : Be.Get("".concat(t2, "/sampler"), this._gltf.samplers, n2.sampler), i2 = Be.Get("".concat(t2, "/source"), this._gltf.images, n2.source), s2 = this._createTextureAsync(t2, a2, i2, r2, void 0, !n2._textureInfo.nonColorData);
          return this.logClose(), s2;
        }, e2.prototype._createTextureAsync = function(e3, t2, n2, r2, o2, a2) {
          var i2, s2, l2 = this;
          void 0 === r2 && (r2 = function() {
          });
          var u2 = this._loadSampler("/samplers/".concat(t2.index), t2), c2 = new Array(), f2 = new g.Deferred();
          this._babylonScene._blockEntityCollection = !!this._assetContainer;
          var h2 = { noMipmap: u2.noMipMaps, invertY: false, samplingMode: u2.samplingMode, onLoad: function() {
            l2._disposed || f2.resolve();
          }, onError: function(t3, n3) {
            l2._disposed || f2.reject(new Error("".concat(e3, ": ").concat(n3 && n3.message ? n3.message : t3 || "Failed to load texture")));
          }, mimeType: null !== (i2 = n2.mimeType) && void 0 !== i2 ? i2 : (0, g.GetMimeType)(null !== (s2 = n2.uri) && void 0 !== s2 ? s2 : ""), loaderOptions: o2, useSRGBBuffer: !!a2 && this._parent.useSRGBBuffers }, p2 = new g.Texture(null, this._babylonScene, h2);
          return p2._parentContainer = this._assetContainer, this._babylonScene._blockEntityCollection = false, c2.push(f2.promise), c2.push(this.loadImageAsync("/images/".concat(n2.index), n2).then(function(e4) {
            var t3 = n2.uri || "".concat(l2._fileName, "#image").concat(n2.index), r3 = "data:".concat(l2._uniqueRootUrl).concat(t3);
            p2.updateURL(r3, e4);
            var o3 = p2.getInternalTexture();
            o3 && (o3.label = n2.name);
          })), p2.wrapU = u2.wrapU, p2.wrapV = u2.wrapV, r2(p2), this._parent.useGltfTextureNames && (p2.name = n2.name || n2.uri || "image".concat(n2.index)), Promise.all(c2).then(function() {
            return p2;
          });
        }, e2.prototype._loadSampler = function(t2, n2) {
          return n2._data || (n2._data = { noMipMaps: 9728 === n2.minFilter || 9729 === n2.minFilter, samplingMode: e2._GetTextureSamplingMode(t2, n2), wrapU: e2._GetTextureWrapMode("".concat(t2, "/wrapS"), n2.wrapS), wrapV: e2._GetTextureWrapMode("".concat(t2, "/wrapT"), n2.wrapT) }), n2._data;
        }, e2.prototype.loadImageAsync = function(e3, t2) {
          if (!t2._data) {
            if (this.logOpen("".concat(e3, " ").concat(t2.name || "")), t2.uri) t2._data = this.loadUriAsync("".concat(e3, "/uri"), t2, t2.uri);
            else {
              var n2 = Be.Get("".concat(e3, "/bufferView"), this._gltf.bufferViews, t2.bufferView);
              t2._data = this.loadBufferViewAsync("/bufferViews/".concat(n2.index), n2);
            }
            this.logClose();
          }
          return t2._data;
        }, e2.prototype.loadUriAsync = function(t2, n2, r2) {
          var o2 = this, a2 = this._extensionsLoadUriAsync(t2, n2, r2);
          if (a2) return a2;
          if (!e2._ValidateUri(r2)) throw new Error("".concat(t2, ": '").concat(r2, "' is invalid"));
          if ((0, g.IsBase64DataUrl)(r2)) {
            var i2 = new Uint8Array((0, g.DecodeBase64UrlToBinary)(r2));
            return this.log("".concat(t2, ": Decoded ").concat(r2.substring(0, 64), "... (").concat(i2.length, " bytes)")), Promise.resolve(i2);
          }
          return this.log("".concat(t2, ": Loading ").concat(r2)), this._parent.preprocessUrlAsync(this._rootUrl + r2).then(function(e3) {
            return new Promise(function(n3, a3) {
              o2._parent._loadFile(o2._babylonScene, e3, function(e4) {
                o2._disposed || (o2.log("".concat(t2, ": Loaded ").concat(r2, " (").concat(e4.byteLength, " bytes)")), n3(new Uint8Array(e4)));
              }, true, function(e4) {
                a3(new g.LoadFileError("".concat(t2, ": Failed to load '").concat(r2, "'").concat(e4 ? ": " + e4.status + " " + e4.statusText : ""), e4));
              });
            });
          });
        }, e2.AddPointerMetadata = function(e3, t2) {
          e3.metadata = e3.metadata || {};
          var n2 = e3._internalMetadata = e3._internalMetadata || {}, r2 = n2.gltf = n2.gltf || {};
          (r2.pointers = r2.pointers || []).push(t2);
        }, e2._GetTextureWrapMode = function(e3, t2) {
          switch (t2 = null == t2 ? 10497 : t2) {
            case 33071:
              return g.Texture.CLAMP_ADDRESSMODE;
            case 33648:
              return g.Texture.MIRROR_ADDRESSMODE;
            case 10497:
              return g.Texture.WRAP_ADDRESSMODE;
            default:
              return g.Logger.Warn("".concat(e3, ": Invalid value (").concat(t2, ")")), g.Texture.WRAP_ADDRESSMODE;
          }
        }, e2._GetTextureSamplingMode = function(e3, t2) {
          var n2 = null == t2.magFilter ? 9729 : t2.magFilter, r2 = null == t2.minFilter ? 9987 : t2.minFilter;
          if (9729 === n2) switch (r2) {
            case 9728:
              return g.Texture.LINEAR_NEAREST;
            case 9729:
              return g.Texture.LINEAR_LINEAR;
            case 9984:
              return g.Texture.LINEAR_NEAREST_MIPNEAREST;
            case 9985:
              return g.Texture.LINEAR_LINEAR_MIPNEAREST;
            case 9986:
              return g.Texture.LINEAR_NEAREST_MIPLINEAR;
            case 9987:
              return g.Texture.LINEAR_LINEAR_MIPLINEAR;
            default:
              return g.Logger.Warn("".concat(e3, "/minFilter: Invalid value (").concat(r2, ")")), g.Texture.LINEAR_LINEAR_MIPLINEAR;
          }
          else switch (9728 !== n2 && g.Logger.Warn("".concat(e3, "/magFilter: Invalid value (").concat(n2, ")")), r2) {
            case 9728:
              return g.Texture.NEAREST_NEAREST;
            case 9729:
              return g.Texture.NEAREST_LINEAR;
            case 9984:
              return g.Texture.NEAREST_NEAREST_MIPNEAREST;
            case 9985:
              return g.Texture.NEAREST_LINEAR_MIPNEAREST;
            case 9986:
              return g.Texture.NEAREST_NEAREST_MIPLINEAR;
            case 9987:
              return g.Texture.NEAREST_LINEAR_MIPLINEAR;
            default:
              return g.Logger.Warn("".concat(e3, "/minFilter: Invalid value (").concat(r2, ")")), g.Texture.NEAREST_NEAREST_MIPNEAREST;
          }
        }, e2._GetTypedArrayConstructor = function(e3, t2) {
          try {
            return (0, g.GetTypedArrayConstructor)(t2);
          } catch (t3) {
            throw new Error("".concat(e3, ": ").concat(t3.message));
          }
        }, e2._GetTypedArray = function(t2, n2, r2, o2, a2) {
          var i2 = r2.buffer;
          o2 = r2.byteOffset + (o2 || 0);
          var s2 = e2._GetTypedArrayConstructor("".concat(t2, "/componentType"), n2), l2 = g.VertexBuffer.GetTypeByteLength(n2);
          return o2 % l2 !== 0 ? (g.Logger.Warn("".concat(t2, ": Copying buffer as byte offset (").concat(o2, ") is not a multiple of component type byte length (").concat(l2, ")")), new s2(i2.slice(o2, o2 + a2 * l2), 0)) : new s2(i2, o2, a2);
        }, e2._GetNumComponents = function(e3, t2) {
          switch (t2) {
            case "SCALAR":
              return 1;
            case "VEC2":
              return 2;
            case "VEC3":
              return 3;
            case "VEC4":
            case "MAT2":
              return 4;
            case "MAT3":
              return 9;
            case "MAT4":
              return 16;
          }
          throw new Error("".concat(e3, ": Invalid type (").concat(t2, ")"));
        }, e2._ValidateUri = function(e3) {
          return g.Tools.IsBase64(e3) || -1 === e3.indexOf("..");
        }, e2._GetDrawMode = function(e3, t2) {
          switch (null == t2 && (t2 = 4), t2) {
            case 0:
              return g.Material.PointListDrawMode;
            case 1:
              return g.Material.LineListDrawMode;
            case 2:
              return g.Material.LineLoopDrawMode;
            case 3:
              return g.Material.LineStripDrawMode;
            case 4:
              return g.Material.TriangleFillMode;
            case 5:
              return g.Material.TriangleStripDrawMode;
            case 6:
              return g.Material.TriangleFanDrawMode;
          }
          throw new Error("".concat(e3, ": Invalid mesh primitive mode (").concat(t2, ")"));
        }, e2.prototype._compileMaterialsAsync = function() {
          var e3 = this;
          this._parent._startPerformanceCounter("Compile materials");
          var t2 = new Array();
          if (this._gltf.materials) for (var n2 = 0, r2 = this._gltf.materials; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            if (o2._data) for (var a2 in o2._data) for (var i2 = o2._data[a2], s2 = 0, l2 = i2.babylonMeshes; s2 < l2.length; s2++) {
              var u2 = l2[s2];
              u2.computeWorldMatrix(true);
              var c2 = i2.babylonMaterial;
              t2.push(c2.forceCompilationAsync(u2)), t2.push(c2.forceCompilationAsync(u2, { useInstances: true })), this._parent.useClipPlane && (t2.push(c2.forceCompilationAsync(u2, { clipPlane: true })), t2.push(c2.forceCompilationAsync(u2, { clipPlane: true, useInstances: true })));
            }
          }
          return Promise.all(t2).then(function() {
            e3._parent._endPerformanceCounter("Compile materials");
          });
        }, e2.prototype._compileShadowGeneratorsAsync = function() {
          var e3 = this;
          this._parent._startPerformanceCounter("Compile shadow generators");
          for (var t2 = new Array(), n2 = 0, r2 = this._babylonScene.lights; n2 < r2.length; n2++) {
            var o2 = r2[n2].getShadowGenerator();
            o2 && t2.push(o2.forceCompilationAsync());
          }
          return Promise.all(t2).then(function() {
            e3._parent._endPerformanceCounter("Compile shadow generators");
          });
        }, e2.prototype._forEachExtensions = function(e3) {
          for (var t2 = 0, n2 = this._extensions; t2 < n2.length; t2++) {
            var r2 = n2[t2];
            r2.enabled && e3(r2);
          }
        }, e2.prototype._applyExtensions = function(e3, t2, n2) {
          for (var r2 = 0, o2 = this._extensions; r2 < o2.length; r2++) {
            var a2 = o2[r2];
            if (a2.enabled) {
              var i2 = "".concat(a2.name, ".").concat(t2), s2 = e3;
              s2._activeLoaderExtensionFunctions = s2._activeLoaderExtensionFunctions || {};
              var l2 = s2._activeLoaderExtensionFunctions;
              if (!l2[i2]) {
                l2[i2] = true;
                try {
                  var u2 = n2(a2);
                  if (u2) return u2;
                } finally {
                  delete l2[i2];
                }
              }
            }
          }
          return null;
        }, e2.prototype._extensionsOnLoading = function() {
          this._forEachExtensions(function(e3) {
            return e3.onLoading && e3.onLoading();
          });
        }, e2.prototype._extensionsOnReady = function() {
          this._forEachExtensions(function(e3) {
            return e3.onReady && e3.onReady();
          });
        }, e2.prototype._extensionsLoadSceneAsync = function(e3, t2) {
          return this._applyExtensions(t2, "loadScene", function(n2) {
            return n2.loadSceneAsync && n2.loadSceneAsync(e3, t2);
          });
        }, e2.prototype._extensionsLoadNodeAsync = function(e3, t2, n2) {
          return this._applyExtensions(t2, "loadNode", function(r2) {
            return r2.loadNodeAsync && r2.loadNodeAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadCameraAsync = function(e3, t2, n2) {
          return this._applyExtensions(t2, "loadCamera", function(r2) {
            return r2.loadCameraAsync && r2.loadCameraAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadVertexDataAsync = function(e3, t2, n2) {
          return this._applyExtensions(t2, "loadVertexData", function(r2) {
            return r2._loadVertexDataAsync && r2._loadVertexDataAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadMeshPrimitiveAsync = function(e3, t2, n2, r2, o2, a2) {
          return this._applyExtensions(o2, "loadMeshPrimitive", function(i2) {
            return i2._loadMeshPrimitiveAsync && i2._loadMeshPrimitiveAsync(e3, t2, n2, r2, o2, a2);
          });
        }, e2.prototype._extensionsLoadMaterialAsync = function(e3, t2, n2, r2, o2) {
          return this._applyExtensions(t2, "loadMaterial", function(a2) {
            return a2._loadMaterialAsync && a2._loadMaterialAsync(e3, t2, n2, r2, o2);
          });
        }, e2.prototype._extensionsCreateMaterial = function(e3, t2, n2) {
          return this._applyExtensions(t2, "createMaterial", function(r2) {
            return r2.createMaterial && r2.createMaterial(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadMaterialPropertiesAsync = function(e3, t2, n2) {
          return this._applyExtensions(t2, "loadMaterialProperties", function(r2) {
            return r2.loadMaterialPropertiesAsync && r2.loadMaterialPropertiesAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadTextureInfoAsync = function(e3, t2, n2) {
          return this._applyExtensions(t2, "loadTextureInfo", function(r2) {
            return r2.loadTextureInfoAsync && r2.loadTextureInfoAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadTextureAsync = function(e3, t2, n2) {
          return this._applyExtensions(t2, "loadTexture", function(r2) {
            return r2._loadTextureAsync && r2._loadTextureAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadAnimationAsync = function(e3, t2) {
          return this._applyExtensions(t2, "loadAnimation", function(n2) {
            return n2.loadAnimationAsync && n2.loadAnimationAsync(e3, t2);
          });
        }, e2.prototype._extensionsLoadAnimationChannelAsync = function(e3, t2, n2, r2, o2) {
          return this._applyExtensions(n2, "loadAnimationChannel", function(a2) {
            return a2._loadAnimationChannelAsync && a2._loadAnimationChannelAsync(e3, t2, n2, r2, o2);
          });
        }, e2.prototype._extensionsLoadSkinAsync = function(e3, t2, n2) {
          return this._applyExtensions(n2, "loadSkin", function(r2) {
            return r2._loadSkinAsync && r2._loadSkinAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadUriAsync = function(e3, t2, n2) {
          return this._applyExtensions(t2, "loadUri", function(r2) {
            return r2._loadUriAsync && r2._loadUriAsync(e3, t2, n2);
          });
        }, e2.prototype._extensionsLoadBufferViewAsync = function(e3, t2) {
          return this._applyExtensions(t2, "loadBufferView", function(n2) {
            return n2.loadBufferViewAsync && n2.loadBufferViewAsync(e3, t2);
          });
        }, e2.prototype._extensionsLoadBufferAsync = function(e3, t2, n2, r2) {
          return this._applyExtensions(t2, "loadBuffer", function(o2) {
            return o2.loadBufferAsync && o2.loadBufferAsync(e3, t2, n2, r2);
          });
        }, e2.LoadExtensionAsync = function(e3, t2, n2, r2) {
          if (!t2.extensions) return null;
          var o2 = t2.extensions[n2];
          return o2 ? r2("".concat(e3, "/extensions/").concat(n2), o2) : null;
        }, e2.LoadExtraAsync = function(e3, t2, n2, r2) {
          if (!t2.extras) return null;
          var o2 = t2.extras[n2];
          return o2 ? r2("".concat(e3, "/extras/").concat(n2), o2) : null;
        }, e2.prototype.isExtensionUsed = function(e3) {
          return !!this._gltf.extensionsUsed && -1 !== this._gltf.extensionsUsed.indexOf(e3);
        }, e2.prototype.logOpen = function(e3) {
          this._parent._logOpen(e3);
        }, e2.prototype.logClose = function() {
          this._parent._logClose();
        }, e2.prototype.log = function(e3) {
          this._parent._log(e3);
        }, e2.prototype.startPerformanceCounter = function(e3) {
          this._parent._startPerformanceCounter(e3);
        }, e2.prototype.endPerformanceCounter = function(e3) {
          this._parent._endPerformanceCounter(e3);
        }, e2.DefaultSampler = { index: -1 }, e2;
      }();
      te._CreateGLTF2Loader = function(e2) {
        return new Ge(e2);
      };
      var Ve = a(727), De = a(753), He = a(561), Ue = "EXT_lights_area", je = function() {
        function e2(e3) {
          this.name = Ue, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Ue);
        }
        return e2.prototype.dispose = function() {
          this._loader = null, delete this._lights;
        }, e2.prototype.onLoading = function() {
          var e3 = this._loader.gltf.extensions;
          if (e3 && e3[this.name]) {
            var t2 = e3[this.name];
            this._lights = t2.lights, Be.Assign(this._lights);
          }
        }, e2.prototype.loadNodeAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3 = this;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return this._loader._allMaterialsDirtyRequired = true, [4, this._loader.loadNodeAsync(e3, t2, function(e4) {
                      var t3, i3 = Be.Get(o2, r3._lights, a2.light), s2 = i3.name || e4.name;
                      switch (r3._loader.babylonScene._blockEntityCollection = !!r3._loader._assetContainer, i3.shape) {
                        case "rect":
                          var l2 = void 0 !== i3.width ? i3.width : 1, u2 = void 0 !== i3.height ? i3.height : 1;
                          t3 = new g.RectAreaLight(s2, g.Vector3.Zero(), l2, u2, r3._loader.babylonScene);
                          break;
                        case "disk":
                          var c2 = 2 * (void 0 !== i3.radius ? i3.radius : 0.5);
                          t3 = new g.RectAreaLight(s2, g.Vector3.Zero(), c2, c2, r3._loader.babylonScene);
                          break;
                        default:
                          throw r3._loader.babylonScene._blockEntityCollection = false, new Error("".concat(o2, ": Invalid area light shape (").concat(i3.shape, ")"));
                      }
                      t3._parentContainer = r3._loader._assetContainer, r3._loader.babylonScene._blockEntityCollection = false, i3._babylonLight = t3, t3.falloffType = g.Light.FALLOFF_GLTF, t3.diffuse = i3.color ? g.Color3.FromArray(i3.color) : g.Color3.White(), t3.intensity = null == i3.intensity ? 1 : i3.intensity;
                      var f2 = new g.TransformNode("".concat(s2, "_orientation"), r3._loader.babylonScene);
                      f2.rotationQuaternion = g.Quaternion.RotationAxis(g.Vector3.Up(), Math.PI), f2.parent = e4, t3.parent = f2, r3._loader._babylonLights.push(t3), Ge.AddPointerMetadata(t3, o2), n2(e4);
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(Ue), Re(Ue, true, function(e2) {
        return new je(e2);
      });
      var Ke = "EXT_lights_image_based", We = function() {
        function e2(e3) {
          this.name = Ke, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Ke);
        }
        return e2.prototype.dispose = function() {
          this._loader = null, delete this._lights;
        }, e2.prototype.onLoading = function() {
          var e3 = this._loader.gltf.extensions;
          if (e3 && e3[this.name]) {
            var t2 = e3[this.name];
            this._lights = t2.lights;
          }
        }, e2.prototype.loadSceneAsync = function(e3, t2) {
          var n2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(r2, o2) {
            return (0, L.sH)(n2, void 0, void 0, function() {
              var n3, a2, i2 = this;
              return (0, L.YH)(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    return this._loader._allMaterialsDirtyRequired = true, (n3 = new Array()).push(this._loader.loadSceneAsync(e3, t2)), this._loader.logOpen("".concat(r2)), a2 = Be.Get("".concat(r2, "/light"), this._lights, o2.light), n3.push(this._loadLightAsync("/extensions/".concat(this.name, "/lights/").concat(o2.light), a2).then(function(e4) {
                      i2._loader.babylonScene.environmentTexture = e4;
                    })), this._loader.logClose(), [4, Promise.all(n3).then(function() {
                    })];
                  case 1:
                    return [2, s2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadLightAsync = function(e3, t2) {
          var n2 = this;
          if (!t2._loaded) {
            var r2 = new Array();
            this._loader.logOpen("".concat(e3));
            for (var o2 = new Array(t2.specularImages.length), a2 = function(n3) {
              var a3 = t2.specularImages[n3];
              o2[n3] = new Array(a3.length);
              for (var s3 = function(t3) {
                var s4 = "".concat(e3, "/specularImages/").concat(n3, "/").concat(t3);
                i2._loader.logOpen("".concat(s4));
                var l3 = a3[t3], u2 = Be.Get(s4, i2._loader.gltf.images, l3);
                r2.push(i2._loader.loadImageAsync("/images/".concat(l3), u2).then(function(e4) {
                  o2[n3][t3] = e4;
                })), i2._loader.logClose();
              }, l2 = 0; l2 < a3.length; l2++) s3(l2);
            }, i2 = this, s2 = 0; s2 < t2.specularImages.length; s2++) a2(s2);
            this._loader.logClose(), t2._loaded = Promise.all(r2).then(function() {
              return (0, L.sH)(n2, void 0, void 0, function() {
                var n3, r3, a3, i3, s3;
                return (0, L.YH)(this, function(l2) {
                  switch (l2.label) {
                    case 0:
                      if ((n3 = new g.RawCubeTexture(this._loader.babylonScene, null, t2.specularImageSize)).name = t2.name || "environment", t2._babylonTexture = n3, null != t2.intensity && (n3.level = t2.intensity), t2.rotation && (r3 = g.Quaternion.FromArray(t2.rotation), this._loader.babylonScene.useRightHandedSystem || (r3 = g.Quaternion.Inverse(r3)), g.Matrix.FromQuaternionToRef(r3, n3.getReflectionTextureMatrix())), !t2.irradianceCoefficients) throw new Error("".concat(e3, ": Irradiance coefficients are missing"));
                      return (a3 = g.SphericalHarmonics.FromArray(t2.irradianceCoefficients)).scaleInPlace(t2.intensity), a3.convertIrradianceToLambertianRadiance(), i3 = g.SphericalPolynomial.FromHarmonics(a3), s3 = (o2.length - 1) / Math.log2(t2.specularImageSize), [4, n3.updateRGBDAsync(o2, i3, s3)];
                    case 1:
                      return [2, l2.sent()];
                  }
                });
              });
            });
          }
          return t2._loaded.then(function() {
            return t2._babylonTexture;
          });
        }, e2;
      }();
      Le(Ke), Re(Ke, true, function(e2) {
        return new We(e2);
      });
      var Ye = "EXT_mesh_gpu_instancing", Ze = function() {
        function e2(e3) {
          this.name = Ye, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Ye);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadNodeAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(e4, o2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, a2, i2, s2, l2 = this;
              return (0, L.YH)(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    return this._loader._disableInstancedMesh++, r3 = this._loader.loadNodeAsync("/nodes/".concat(t2.index), t2, n2), this._loader._disableInstancedMesh--, t2._primitiveBabylonMeshes ? [3, 2] : [4, r3];
                  case 1:
                  case 3:
                    return [2, u2.sent()];
                  case 2:
                    return a2 = new Array(), i2 = 0, (s2 = function(t3) {
                      if (null != o2.attributes[t3]) {
                        var n3 = Be.Get("".concat(e4, "/attributes/").concat(t3), l2._loader.gltf.accessors, o2.attributes[t3]);
                        if (a2.push(l2._loader._loadFloatAccessorAsync("/accessors/".concat(n3.bufferView), n3)), 0 === i2) i2 = n3.count;
                        else if (i2 !== n3.count) throw new Error("".concat(e4, "/attributes: Instance buffer accessors do not have the same count."));
                      } else a2.push(Promise.resolve(null));
                    })("TRANSLATION"), s2("ROTATION"), s2("SCALE"), s2("_COLOR_0"), [4, r3.then(function(e5) {
                      return (0, L.sH)(l2, void 0, void 0, function() {
                        var n3, r4, o3, s3, l3, u3, c2, f2, h2, p2;
                        return (0, L.YH)(this, function(d2) {
                          switch (d2.label) {
                            case 0:
                              return [4, Promise.all(a2)];
                            case 1:
                              for (n3 = d2.sent(), r4 = n3[0], o3 = n3[1], s3 = n3[2], l3 = n3[3], u3 = new Float32Array(16 * i2), g.TmpVectors.Vector3[0].copyFromFloats(0, 0, 0), g.TmpVectors.Quaternion[0].copyFromFloats(0, 0, 0, 1), g.TmpVectors.Vector3[1].copyFromFloats(1, 1, 1), c2 = 0; c2 < i2; ++c2) r4 && g.Vector3.FromArrayToRef(r4, 3 * c2, g.TmpVectors.Vector3[0]), o3 && g.Quaternion.FromArrayToRef(o3, 4 * c2, g.TmpVectors.Quaternion[0]), s3 && g.Vector3.FromArrayToRef(s3, 3 * c2, g.TmpVectors.Vector3[1]), g.Matrix.ComposeToRef(g.TmpVectors.Vector3[1], g.TmpVectors.Quaternion[0], g.TmpVectors.Vector3[0], g.TmpVectors.Matrix[0]), g.TmpVectors.Matrix[0].copyToArray(u3, 16 * c2);
                              for (f2 = 0, h2 = t2._primitiveBabylonMeshes; f2 < h2.length; f2++) (p2 = h2[f2]).thinInstanceSetBuffer("matrix", u3, 16, true), l3 && (l3.length === 3 * i2 ? p2.thinInstanceSetBuffer("color", l3, 3, true) : l3.length === 4 * i2 ? p2.thinInstanceSetBuffer("color", l3, 4, true) : g.Logger.Warn("Unexpected size of _COLOR_0 attribute for mesh " + p2.name));
                              return [2, e5];
                          }
                        });
                      });
                    })];
                }
              });
            });
          });
        }, e2;
      }();
      Le(Ye), Re(Ye, true, function(e2) {
        return new Ze(e2);
      });
      var qe = "EXT_meshopt_compression", ze = function() {
        function e2(e3) {
          this.name = qe, this.enabled = e3.isExtensionUsed(qe), this._loader = e3;
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadBufferViewAsync = function(e3, t2) {
          var n2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(r2, o2) {
            return (0, L.sH)(n2, void 0, void 0, function() {
              var n3, r3, a2 = this;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (n3 = t2)._meshOptData ? [4, n3._meshOptData] : [3, 2];
                  case 1:
                  case 3:
                    return [2, i2.sent()];
                  case 2:
                    return r3 = Be.Get("".concat(e3, "/buffer"), this._loader.gltf.buffers, o2.buffer), n3._meshOptData = this._loader.loadBufferAsync("/buffers/".concat(r3.index), r3, o2.byteOffset || 0, o2.byteLength).then(function(e4) {
                      return (0, L.sH)(a2, void 0, void 0, function() {
                        return (0, L.YH)(this, function(t3) {
                          switch (t3.label) {
                            case 0:
                              return [4, g.MeshoptCompression.Default.decodeGltfBufferAsync(e4, o2.count, o2.byteStride, o2.mode, o2.filter)];
                            case 1:
                              return [2, t3.sent()];
                          }
                        });
                      });
                    }), [4, n3._meshOptData];
                }
              });
            });
          });
        }, e2;
      }();
      Le(qe), Re(qe, true, function(e2) {
        return new ze(e2);
      });
      var Xe = "EXT_texture_webp", Qe = function() {
        function e2(e3) {
          this.name = Xe, this._loader = e3, this.enabled = e3.isExtensionUsed(Xe);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype._loadTextureAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, i2;
              return (0, L.YH)(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    return r3 = null == t2.sampler ? Ge.DefaultSampler : Be.Get("".concat(e3, "/sampler"), this._loader.gltf.samplers, t2.sampler), i2 = Be.Get("".concat(o2, "/source"), this._loader.gltf.images, a2.source), [4, this._loader._createTextureAsync(e3, r3, i2, function(e4) {
                      n2(e4);
                    }, void 0, !t2._textureInfo.nonColorData)];
                  case 1:
                    return [2, s2.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(Xe), Re(Xe, true, function(e2) {
        return new Qe(e2);
      });
      var Je = "EXT_texture_avif", $e = function() {
        function e2(e3) {
          this.name = Je, this._loader = e3, this.enabled = e3.isExtensionUsed(Je);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype._loadTextureAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, i2;
              return (0, L.YH)(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    return r3 = null == t2.sampler ? Ge.DefaultSampler : Be.Get("".concat(e3, "/sampler"), this._loader.gltf.samplers, t2.sampler), i2 = Be.Get("".concat(o2, "/source"), this._loader.gltf.images, a2.source), [4, this._loader._createTextureAsync(e3, r3, i2, function(e4) {
                      n2(e4);
                    }, void 0, !t2._textureInfo.nonColorData)];
                  case 1:
                    return [2, s2.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(Je), Re(Je, true, function(e2) {
        return new $e(e2);
      });
      var et = "EXT_lights_ies", tt = function() {
        function e2(e3) {
          this.name = et, this._loader = e3, this.enabled = this._loader.isExtensionUsed(et);
        }
        return e2.prototype.dispose = function() {
          this._loader = null, delete this._lights;
        }, e2.prototype.onLoading = function() {
          var e3 = this._loader.gltf.extensions;
          if (e3 && e3[this.name]) {
            var t2 = e3[this.name];
            this._lights = t2.lights, Be.Assign(this._lights);
          }
        }, e2.prototype.loadNodeAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, i2, s2, l2, u2, c2 = this;
              return (0, L.YH)(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    return this._loader._allMaterialsDirtyRequired = true, [4, this._loader.loadNodeAsync(e3, t2, function(e4) {
                      var t3 = (i2 = Be.Get(o2, c2._lights, a2.light)).name || e4.name;
                      c2._loader.babylonScene._blockEntityCollection = !!c2._loader._assetContainer, (r3 = new g.SpotLight(t3, g.Vector3.Zero(), g.Vector3.Backward(), 0, 1, c2._loader.babylonScene)).angle = Math.PI / 2, r3.innerAngle = 0, r3._parentContainer = c2._loader._assetContainer, c2._loader.babylonScene._blockEntityCollection = false, i2._babylonLight = r3, r3.falloffType = g.Light.FALLOFF_GLTF, r3.diffuse = a2.color ? g.Color3.FromArray(a2.color) : g.Color3.White(), r3.intensity = a2.multiplier || 1, r3.range = Number.MAX_VALUE, r3.parent = e4, c2._loader._babylonLights.push(r3), Ge.AddPointerMetadata(r3, o2), n2(e4);
                    })];
                  case 1:
                    return s2 = f2.sent(), i2.uri ? [4, this._loader.loadUriAsync(e3, i2, i2.uri)] : [3, 3];
                  case 2:
                    return l2 = f2.sent(), [3, 5];
                  case 3:
                    return u2 = Be.Get("".concat(e3, "/bufferView"), this._loader.gltf.bufferViews, i2.bufferView), [4, this._loader.loadBufferViewAsync("/bufferViews/".concat(u2.index), u2)];
                  case 4:
                    l2 = f2.sent(), f2.label = 5;
                  case 5:
                    return r3.iesProfileTexture = new g.Texture(name + "_iesProfile", this._loader.babylonScene, true, false, void 0, null, null, l2, true, void 0, void 0, void 0, void 0, ".ies"), [2, s2];
                }
              });
            });
          });
        }, e2;
      }();
      Le(et), Re(et, true, function(e2) {
        return new tt(e2);
      });
      var nt = "KHR_draco_mesh_compression", rt = function() {
        function e2(e3) {
          this.name = nt, this.useNormalizedFlagFromAccessor = true, this._loader = e3, this.enabled = g.DracoDecoder.DefaultAvailable && this._loader.isExtensionUsed(nt);
        }
        return e2.prototype.dispose = function() {
          delete this.dracoDecoder, this._loader = null;
        }, e2.prototype._loadVertexDataAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, i2, s2, l2, u2 = this;
              return (0, L.YH)(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if (null != t2.mode && 4 !== t2.mode && 5 !== t2.mode) throw new Error("".concat(e3, ": Unsupported mode ").concat(t2.mode));
                    return r3 = {}, i2 = {}, (s2 = function(e4, o3) {
                      var s3 = a2.attributes[e4];
                      if (null != s3 && (n2._delayInfo = n2._delayInfo || [], -1 === n2._delayInfo.indexOf(o3) && n2._delayInfo.push(o3), r3[o3] = s3, u2.useNormalizedFlagFromAccessor)) {
                        var l3 = Be.TryGet(u2._loader.gltf.accessors, t2.attributes[e4]);
                        l3 && (i2[o3] = l3.normalized || false);
                      }
                    })("POSITION", g.VertexBuffer.PositionKind), s2("NORMAL", g.VertexBuffer.NormalKind), s2("TANGENT", g.VertexBuffer.TangentKind), s2("TEXCOORD_0", g.VertexBuffer.UVKind), s2("TEXCOORD_1", g.VertexBuffer.UV2Kind), s2("TEXCOORD_2", g.VertexBuffer.UV3Kind), s2("TEXCOORD_3", g.VertexBuffer.UV4Kind), s2("TEXCOORD_4", g.VertexBuffer.UV5Kind), s2("TEXCOORD_5", g.VertexBuffer.UV6Kind), s2("JOINTS_0", g.VertexBuffer.MatricesIndicesKind), s2("WEIGHTS_0", g.VertexBuffer.MatricesWeightsKind), s2("COLOR_0", g.VertexBuffer.ColorKind), (l2 = Be.Get(o2, this._loader.gltf.bufferViews, a2.bufferView))._dracoBabylonGeometry || (l2._dracoBabylonGeometry = this._loader.loadBufferViewAsync("/bufferViews/".concat(l2.index), l2).then(function(o3) {
                      return (0, L.sH)(u2, void 0, void 0, function() {
                        var a3, s3, l3;
                        return (0, L.YH)(this, function(u3) {
                          switch (u3.label) {
                            case 0:
                              return a3 = this.dracoDecoder || g.DracoDecoder.Default, s3 = Be.TryGet(this._loader.gltf.accessors, t2.attributes.POSITION), l3 = this._loader.parent.alwaysComputeBoundingBox || n2.skeleton || !s3 ? null : ke(s3), [4, a3._decodeMeshToGeometryForGltfAsync(n2.name, this._loader.babylonScene, o3, r3, i2, l3).catch(function(t3) {
                                throw new Error("".concat(e3, ": ").concat(t3.message));
                              })];
                            case 1:
                              return [2, u3.sent()];
                          }
                        });
                      });
                    })), [4, l2._dracoBabylonGeometry];
                  case 1:
                    return [2, c2.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(nt), Re(nt, true, function(e2) {
        return new rt(e2);
      });
      var ot = "KHR_lights_punctual", at = function() {
        function e2(e3) {
          this.name = ot, this._loader = e3, this.enabled = this._loader.isExtensionUsed(ot);
        }
        return e2.prototype.dispose = function() {
          this._loader = null, delete this._lights;
        }, e2.prototype.onLoading = function() {
          var e3 = this._loader.gltf.extensions;
          if (e3 && e3[this.name]) {
            var t2 = e3[this.name];
            this._lights = t2.lights, Be.Assign(this._lights);
          }
        }, e2.prototype.loadNodeAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3 = this;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return this._loader._allMaterialsDirtyRequired = true, [4, this._loader.loadNodeAsync(e3, t2, function(e4) {
                      var t3, i3 = Be.Get(o2, r3._lights, a2.light), s2 = i3.name || e4.name;
                      switch (r3._loader.babylonScene._blockEntityCollection = !!r3._loader._assetContainer, i3.type) {
                        case "directional":
                          var l2 = new g.DirectionalLight(s2, g.Vector3.Backward(), r3._loader.babylonScene);
                          l2.position.setAll(0), t3 = l2;
                          break;
                        case "point":
                          t3 = new g.PointLight(s2, g.Vector3.Zero(), r3._loader.babylonScene);
                          break;
                        case "spot":
                          var u2 = new g.SpotLight(s2, g.Vector3.Zero(), g.Vector3.Backward(), 0, 1, r3._loader.babylonScene);
                          u2.angle = 2 * (i3.spot && i3.spot.outerConeAngle || Math.PI / 4), u2.innerAngle = 2 * (i3.spot && i3.spot.innerConeAngle || 0), t3 = u2;
                          break;
                        default:
                          throw r3._loader.babylonScene._blockEntityCollection = false, new Error("".concat(o2, ": Invalid light type (").concat(i3.type, ")"));
                      }
                      t3._parentContainer = r3._loader._assetContainer, r3._loader.babylonScene._blockEntityCollection = false, i3._babylonLight = t3, t3.falloffType = g.Light.FALLOFF_GLTF, t3.diffuse = i3.color ? g.Color3.FromArray(i3.color) : g.Color3.White(), t3.intensity = null == i3.intensity ? 1 : i3.intensity, t3.range = null == i3.range ? Number.MAX_VALUE : i3.range, t3.parent = e4, r3._loader._babylonLights.push(t3), Ge.AddPointerMetadata(t3, o2), n2(e4);
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(ot), Re(ot, true, function(e2) {
        return new at(e2);
      });
      var it = "KHR_materials_pbrSpecularGlossiness", st = function() {
        function e2(e3) {
          this.name = it, this.order = 200, this._loader = e3, this.enabled = this._loader.isExtensionUsed(it);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialBasePropertiesAsync(e3, t2, n2)), r3.push(this._loadSpecularGlossinessPropertiesAsync(o2, a2, n2)), this._loader.loadMaterialAlphaProperties(e3, t2, n2), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadSpecularGlossinessPropertiesAsync = function(e3, t2, n2) {
          if (!(n2 instanceof g.PBRMaterial)) throw new Error("".concat(e3, ": Material type not supported"));
          var r2 = new Array();
          return n2.metallic = null, n2.roughness = null, t2.diffuseFactor ? (n2.albedoColor = g.Color3.FromArray(t2.diffuseFactor), n2.alpha = t2.diffuseFactor[3]) : n2.albedoColor = g.Color3.White(), n2.reflectivityColor = t2.specularFactor ? g.Color3.FromArray(t2.specularFactor) : g.Color3.White(), n2.microSurface = null == t2.glossinessFactor ? 1 : t2.glossinessFactor, t2.diffuseTexture && r2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/diffuseTexture"), t2.diffuseTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Diffuse)"), n2.albedoTexture = e4;
          })), t2.specularGlossinessTexture && (r2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/specularGlossinessTexture"), t2.specularGlossinessTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Specular Glossiness)"), n2.reflectivityTexture = e4, n2.reflectivityTexture.hasAlpha = true;
          })), n2.useMicroSurfaceFromReflectivityMapAlpha = true), Promise.all(r2).then(function() {
          });
        }, e2;
      }();
      Le(it), Re(it, true, function(e2) {
        return new st(e2);
      });
      var lt = "KHR_materials_unlit", ut = function() {
        function e2(e3) {
          this.name = lt, this.order = 210, this._loader = e3, this.enabled = this._loader.isExtensionUsed(lt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function() {
            return (0, L.sH)(r2, void 0, void 0, function() {
              return (0, L.YH)(this, function(r3) {
                switch (r3.label) {
                  case 0:
                    return [4, this._loadUnlitPropertiesAsync(e3, t2, n2)];
                  case 1:
                    return [2, r3.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadUnlitPropertiesAsync = function(e3, t2, n2) {
          var r2 = this._loader._getOrCreateMaterialAdapter(n2), o2 = new Array(), a2 = t2.pbrMetallicRoughness;
          return a2 && (a2.baseColorFactor && (r2.baseColor = g.Color3.FromArray(a2.baseColorFactor), r2.geometryOpacity = a2.baseColorFactor[3]), a2.baseColorTexture && o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/baseColorTexture"), a2.baseColorTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Base Color)"), r2.baseColorTexture = e4;
          }))), r2.isUnlit = true, t2.doubleSided && (r2.backFaceCulling = false, r2.twoSidedLighting = true), this._loader.loadMaterialAlphaProperties(e3, t2, n2), Promise.all(o2).then(function() {
          });
        }, e2;
      }();
      Le(lt), Re(lt, true, function(e2) {
        return new ut(e2);
      });
      var ct = "KHR_materials_clearcoat", ft = function() {
        function e2(e3) {
          this.name = ct, this.order = 190, this._loader = e3, this.enabled = this._loader.isExtensionUsed(ct);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, i2, s2, l2, u2, c2, f2;
              return (0, L.YH)(this, function(h2) {
                switch (h2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadClearCoatPropertiesAsync(o2, a2, n2)), i2 = this._loader._getOrCreateMaterialAdapter(n2), a2.extensions && a2.extensions.KHR_materials_clearcoat_darkening && (s2 = a2.extensions.KHR_materials_clearcoat_darkening, r3.push(this._loadClearCoatDarkeningPropertiesAsync(o2, s2, n2))), a2.extensions && a2.extensions.KHR_materials_clearcoat_ior && (l2 = a2.extensions.KHR_materials_clearcoat_ior, u2 = 1.5, void 0 !== l2.clearcoatIor && (u2 = l2.clearcoatIor), i2.coatIor = u2), a2.extensions && a2.extensions.KHR_materials_clearcoat_anisotropy && (c2 = a2.extensions.KHR_materials_clearcoat_anisotropy, r3.push(this._loadClearCoatAnisotropyPropertiesAsync(o2, c2, n2))), a2.extensions && a2.extensions.KHR_materials_clearcoat_color && (f2 = a2.extensions.KHR_materials_clearcoat_color, r3.push(this._loadClearCoatColorPropertiesAsync(o2, f2, n2))), [4, Promise.all(r3)];
                  case 1:
                    return h2.sent(), [2];
                }
              });
            });
          });
        }, e2.prototype._loadClearCoatPropertiesAsync = function(e3, t2, n2) {
          var r2 = this._loader._getOrCreateMaterialAdapter(n2), o2 = new Array();
          return r2.configureCoat(), r2.coatWeight = void 0 !== t2.clearcoatFactor ? t2.clearcoatFactor : 0, r2.coatRoughness = void 0 !== t2.clearcoatRoughnessFactor ? t2.clearcoatRoughnessFactor : 0, t2.clearcoatTexture && o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/clearcoatTexture"), t2.clearcoatTexture, function(e4) {
            e4.name = "".concat(n2.name, " (ClearCoat)"), r2.coatWeightTexture = e4;
          })), t2.clearcoatRoughnessTexture && (t2.clearcoatRoughnessTexture.nonColorData = true, o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/clearcoatRoughnessTexture"), t2.clearcoatRoughnessTexture, function(e4) {
            e4.name = "".concat(n2.name, " (ClearCoat Roughness)"), r2.coatRoughnessTexture = e4;
          }))), t2.clearcoatNormalTexture && (t2.clearcoatNormalTexture.nonColorData = true, o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/clearcoatNormalTexture"), t2.clearcoatNormalTexture, function(e4) {
            var o3;
            e4.name = "".concat(n2.name, " (ClearCoat Normal)"), r2.geometryCoatNormalTexture = e4, null != (null === (o3 = t2.clearcoatNormalTexture) || void 0 === o3 ? void 0 : o3.scale) && (r2.geometryCoatNormalTextureScale = t2.clearcoatNormalTexture.scale);
          })), r2.setNormalMapInversions(!n2.getScene().useRightHandedSystem, n2.getScene().useRightHandedSystem)), Promise.all(o2).then(function() {
          });
        }, e2.prototype._loadClearCoatDarkeningPropertiesAsync = function(e3, t2, n2) {
          var r2 = this._loader._getOrCreateMaterialAdapter(n2), o2 = new Array();
          return r2.coatDarkening = void 0 !== t2.clearcoatDarkeningFactor ? t2.clearcoatDarkeningFactor : 1, t2.clearcoatDarkeningTexture && (t2.clearcoatDarkeningTexture.nonColorData = true, o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/clearcoatDarkeningTexture"), t2.clearcoatDarkeningTexture, function(e4) {
            e4.name = "".concat(n2.name, " (ClearCoat Darkening)"), r2.coatDarkeningTexture = e4;
          }))), Promise.all(o2).then(function() {
          });
        }, e2.prototype._loadClearCoatColorPropertiesAsync = function(e3, t2, n2) {
          var r2 = this._loader._getOrCreateMaterialAdapter(n2), o2 = new Array(), a2 = g.Color3.White();
          return void 0 !== t2.clearcoatColorFactor && a2.fromArray(t2.clearcoatColorFactor), r2.coatColor = a2, t2.clearcoatColorTexture && o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/clearcoatColorTexture"), t2.clearcoatColorTexture, function(e4) {
            e4.name = "".concat(n2.name, " (ClearCoat Color)"), r2.coatColorTexture = e4;
          })), Promise.all(o2).then(function() {
          });
        }, e2.prototype._loadClearCoatAnisotropyPropertiesAsync = function(e3, t2, n2) {
          var r2, o2, a2, i2 = this._loader._getOrCreateMaterialAdapter(n2), s2 = new Array(), l2 = null !== (r2 = t2.clearcoatAnisotropyStrength) && void 0 !== r2 ? r2 : 0, u2 = null !== (o2 = t2.clearcoatAnisotropyRotation) && void 0 !== o2 ? o2 : 0;
          i2.coatRoughnessAnisotropy = l2, i2.geometryCoatTangentAngle = u2;
          var c2 = null !== (a2 = t2.extensions) && void 0 !== a2 ? a2 : {};
          return c2.EXT_materials_anisotropy_openpbr && c2.EXT_materials_anisotropy_openpbr.openPbrAnisotropyEnabled || i2.configureGltfStyleAnisotropy(true), t2.clearcoatAnisotropyTexture && (t2.clearcoatAnisotropyTexture.nonColorData = true, s2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/clearcoatAnisotropyTexture"), t2.clearcoatAnisotropyTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Clearcoat Anisotropy)"), i2.geometryCoatTangentTexture = e4;
          }))), Promise.all(s2).then(function() {
          });
        }, e2;
      }();
      Le(ct), Re(ct, true, function(e2) {
        return new ft(e2);
      });
      var ht = "KHR_materials_iridescence", pt = function() {
        function e2(e3) {
          this.name = ht, this.order = 195, this._loader = e3, this.enabled = this._loader.isExtensionUsed(ht);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadIridescencePropertiesAsync(o2, a2, n2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadIridescencePropertiesAsync = function(e3, t2, n2) {
          var r2, o2, a2, i2, s2, l2 = this._loader._getOrCreateMaterialAdapter(n2), u2 = new Array();
          return l2.thinFilmWeight = null !== (r2 = t2.iridescenceFactor) && void 0 !== r2 ? r2 : 0, l2.thinFilmIor = null !== (a2 = null !== (o2 = t2.iridescenceIor) && void 0 !== o2 ? o2 : t2.iridescenceIOR) && void 0 !== a2 ? a2 : 1.3, l2.thinFilmThicknessMinimum = null !== (i2 = t2.iridescenceThicknessMinimum) && void 0 !== i2 ? i2 : 100, l2.thinFilmThicknessMaximum = null !== (s2 = t2.iridescenceThicknessMaximum) && void 0 !== s2 ? s2 : 400, t2.iridescenceTexture && u2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/iridescenceTexture"), t2.iridescenceTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Iridescence)"), l2.thinFilmWeightTexture = e4;
          })), t2.iridescenceThicknessTexture && u2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/iridescenceThicknessTexture"), t2.iridescenceThicknessTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Iridescence Thickness)"), l2.thinFilmThicknessTexture = e4;
          })), Promise.all(u2).then(function() {
          });
        }, e2;
      }();
      Le(ht), Re(ht, true, function(e2) {
        return new pt(e2);
      });
      var dt = "KHR_materials_anisotropy", mt = function() {
        function e2(e3) {
          this.name = dt, this.order = 195, this._loader = e3, this.enabled = this._loader.isExtensionUsed(dt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadAnisotropyPropertiesAsync(o2, a2, n2)), [4, Promise.all(r3)];
                  case 1:
                    return i2.sent(), [2];
                }
              });
            });
          });
        }, e2.prototype._loadAnisotropyPropertiesAsync = function(e3, t2, n2) {
          return (0, L.sH)(this, void 0, void 0, function() {
            var r2, o2, a2, i2, s2, l2, u2, c2;
            return (0, L.YH)(this, function(f2) {
              switch (f2.label) {
                case 0:
                  return r2 = this._loader._getOrCreateMaterialAdapter(n2), o2 = new Array(), a2 = null !== (l2 = t2.anisotropyStrength) && void 0 !== l2 ? l2 : 0, i2 = null !== (u2 = t2.anisotropyRotation) && void 0 !== u2 ? u2 : 0, r2.specularRoughnessAnisotropy = a2, r2.geometryTangentAngle = i2, (s2 = null !== (c2 = t2.extensions) && void 0 !== c2 ? c2 : {}).EXT_materials_anisotropy_openpbr && s2.EXT_materials_anisotropy_openpbr.openPbrAnisotropyEnabled || r2.configureGltfStyleAnisotropy(true), t2.anisotropyTexture && (t2.anisotropyTexture.nonColorData = true, o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/anisotropyTexture"), t2.anisotropyTexture, function(e4) {
                    e4.name = "".concat(n2.name, " (Anisotropy Intensity)"), r2.geometryTangentTexture = e4;
                  }))), [4, Promise.all(o2)];
                case 1:
                  return f2.sent(), [2];
              }
            });
          });
        }, e2;
      }();
      Le(dt), Re(dt, true, function(e2) {
        return new mt(e2);
      });
      var _t = "KHR_materials_emissive_strength", gt = function() {
        function e2(e3) {
          this.name = _t, this.order = 170, this._loader = e3, this.enabled = this._loader.isExtensionUsed(_t);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              return (0, L.YH)(this, function(r3) {
                switch (r3.label) {
                  case 0:
                    return [4, this._loader.loadMaterialPropertiesAsync(e3, t2, n2)];
                  case 1:
                    return r3.sent(), this._loadEmissiveProperties(o2, a2, n2), [4, Promise.resolve()];
                  case 2:
                    return [2, r3.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadEmissiveProperties = function(e3, t2, n2) {
          void 0 !== t2.emissiveStrength && (this._loader._getOrCreateMaterialAdapter(n2).emissionLuminance = t2.emissiveStrength);
        }, e2;
      }();
      Le(_t), Re(_t, true, function(e2) {
        return new gt(e2);
      });
      var yt = "KHR_materials_sheen", bt = function() {
        function e2(e3) {
          this.name = yt, this.order = 190, this._loader = e3, this.enabled = this._loader.isExtensionUsed(yt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadSheenPropertiesAsync(o2, a2, n2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadSheenPropertiesAsync = function(e3, t2, n2) {
          var r2 = this._loader._getOrCreateMaterialAdapter(n2), o2 = new Array();
          r2.configureFuzz();
          var a2 = void 0 !== t2.sheenColorFactor ? g.Color3.FromArray(t2.sheenColorFactor) : g.Color3.Black(), i2 = void 0 !== t2.sheenRoughnessFactor ? t2.sheenRoughnessFactor : 0;
          return r2.fuzzWeight = 1, r2.fuzzColor = a2, r2.fuzzRoughness = i2, t2.sheenColorTexture && o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/sheenColorTexture"), t2.sheenColorTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Sheen Color)"), r2.fuzzColorTexture = e4;
          })), t2.sheenRoughnessTexture && (t2.sheenRoughnessTexture.nonColorData = true, o2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/sheenRoughnessTexture"), t2.sheenRoughnessTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Sheen Roughness)"), r2.fuzzRoughnessTexture = e4;
          }))), Promise.all(o2).then(function() {
          });
        }, e2;
      }();
      Le(yt), Re(yt, true, function(e2) {
        return new bt(e2);
      });
      var vt = "KHR_materials_specular", Tt = function() {
        function e2(e3) {
          this.name = vt, this.order = 190, this._loader = e3, this.enabled = this._loader.isExtensionUsed(vt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, i2;
              return (0, L.YH)(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadSpecularPropertiesAsync(o2, a2, n2)), i2 = this._loader._getOrCreateMaterialAdapter(n2), a2.extensions && a2.extensions.EXT_materials_specular_edge_color && a2.extensions.EXT_materials_specular_edge_color.specularEdgeColorEnabled && i2.enableSpecularEdgeColor(true), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, s2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadSpecularPropertiesAsync = function(e3, t2, n2) {
          var r2, o2 = this._loader._getOrCreateMaterialAdapter(n2), a2 = new Array();
          return o2.specularWeight = null !== (r2 = t2.specularFactor) && void 0 !== r2 ? r2 : 1, o2.specularColor = void 0 !== t2.specularColorFactor ? g.Color3.FromArray(t2.specularColorFactor) : new g.Color3(1, 1, 1), t2.specularTexture && (t2.specularTexture.nonColorData = true, a2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/specularTexture"), t2.specularTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Specular)"), o2.specularWeightTexture = e4;
          }))), t2.specularColorTexture && a2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/specularColorTexture"), t2.specularColorTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Specular Color)"), o2.specularColorTexture = e4;
          })), Promise.all(a2).then(function() {
          });
        }, e2;
      }();
      Le(vt), Re(vt, true, function(e2) {
        return new Tt(e2);
      });
      var xt = "KHR_materials_ior", At = function() {
        function e2(e3) {
          this.name = xt, this.order = 180, this._loader = e3, this.enabled = this._loader.isExtensionUsed(xt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadIorPropertiesAsync(o2, a2, n2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadIorPropertiesAsync = function(t2, n2, r2) {
          var o2 = this._loader._getOrCreateMaterialAdapter(r2), a2 = void 0 !== n2.ior ? n2.ior : e2._DEFAULT_IOR;
          return o2.specularIor = a2, Promise.resolve();
        }, e2._DEFAULT_IOR = 1.5, e2;
      }();
      Le(xt), Re(xt, true, function(e2) {
        return new At(e2);
      });
      var wt = "KHR_materials_variants", Ot = function() {
        function e2(e3) {
          this.name = wt, this._loader = e3, this.enabled = this._loader.isExtensionUsed(wt) && !this._loader.parent.skipMaterials;
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.GetAvailableVariants = function(e3) {
          var t2 = this._GetExtensionMetadata(e3);
          return t2 ? Object.keys(t2.variants) : [];
        }, e2.prototype.getAvailableVariants = function(t2) {
          return e2.GetAvailableVariants(t2);
        }, e2.SelectVariant = function(e3, t2) {
          var n2 = this._GetExtensionMetadata(e3);
          if (!n2) throw new Error("Cannot select variant on a glTF mesh that does not have the ".concat(wt, " extension"));
          var r2 = function(e4) {
            var t3 = n2.variants[e4];
            if (t3) for (var r3 = 0, o3 = t3; r3 < o3.length; r3++) {
              var a3 = o3[r3];
              a3.mesh.material = a3.material;
            }
          };
          if (t2 instanceof Array) for (var o2 = 0, a2 = t2; o2 < a2.length; o2++) r2(a2[o2]);
          else r2(t2);
          n2.lastSelected = t2;
        }, e2.prototype.selectVariant = function(t2, n2) {
          e2.SelectVariant(t2, n2);
        }, e2.Reset = function(e3) {
          var t2 = this._GetExtensionMetadata(e3);
          if (!t2) throw new Error("Cannot reset on a glTF mesh that does not have the ".concat(wt, " extension"));
          for (var n2 = 0, r2 = t2.original; n2 < r2.length; n2++) {
            var o2 = r2[n2];
            o2.mesh.material = o2.material;
          }
          t2.lastSelected = null;
        }, e2.prototype.reset = function(t2) {
          e2.Reset(t2);
        }, e2.GetLastSelectedVariant = function(e3) {
          var t2 = this._GetExtensionMetadata(e3);
          if (!t2) throw new Error("Cannot get the last selected variant on a glTF mesh that does not have the ".concat(wt, " extension"));
          return t2.lastSelected;
        }, e2.prototype.getLastSelectedVariant = function(t2) {
          return e2.GetLastSelectedVariant(t2);
        }, e2._GetExtensionMetadata = function(e3) {
          var t2, n2;
          return (null === (n2 = null === (t2 = null == e3 ? void 0 : e3._internalMetadata) || void 0 === t2 ? void 0 : t2.gltf) || void 0 === n2 ? void 0 : n2[wt]) || null;
        }, e2.prototype.onLoading = function() {
          var e3 = this._loader.gltf.extensions;
          if (e3 && e3[this.name]) {
            var t2 = e3[this.name];
            this._variants = t2.variants;
          }
        }, e2.prototype.onReady = function() {
          var t2, n2 = this._loader.rootBabylonMesh;
          if (n2) {
            var r2 = this._loader.parent.extensionOptions[wt];
            (null == r2 ? void 0 : r2.defaultVariant) && e2.SelectVariant(n2, r2.defaultVariant), null === (t2 = null == r2 ? void 0 : r2.onLoaded) || void 0 === t2 || t2.call(r2, { get variants() {
              return e2.GetAvailableVariants(n2);
            }, get selectedVariant() {
              var t3 = e2.GetLastSelectedVariant(n2);
              return t3 ? Array.isArray(t3) ? t3[0] : t3 : e2.GetAvailableVariants(n2)[0];
            }, set selectedVariant(t3) {
              e2.SelectVariant(n2, t3);
            } });
          }
        }, e2.prototype._loadMeshPrimitiveAsync = function(t2, n2, r2, o2, a2, i2) {
          var s2 = this;
          return Ge.LoadExtensionAsync(t2, a2, this.name, function(l2, u2) {
            return (0, L.sH)(s2, void 0, void 0, function() {
              var s3, c2 = this;
              return (0, L.YH)(this, function(f2) {
                switch (f2.label) {
                  case 0:
                    return (s3 = new Array()).push(this._loader._loadMeshPrimitiveAsync(t2, n2, r2, o2, a2, function(n3) {
                      if (i2(n3), n3 instanceof g.Mesh) {
                        var r3 = Ge._GetDrawMode(t2, a2.mode), o3 = c2._loader.rootBabylonMesh, f3 = o3 ? o3._internalMetadata = o3._internalMetadata || {} : {}, h2 = f3.gltf = f3.gltf || {}, p2 = h2[wt] = h2[wt] || { lastSelected: null, original: [], variants: {} };
                        p2.original.push({ mesh: n3, material: n3.material });
                        for (var d2 = function(t3) {
                          var a3 = u2.mappings[t3], i3 = Be.Get("".concat(l2, "/mappings/").concat(t3, "/material"), c2._loader.gltf.materials, a3.material);
                          s3.push(c2._loader._loadMaterialAsync("#/materials/".concat(a3.material), i3, n3, r3, function(t4) {
                            for (var r4 = function(r5) {
                              var i5 = a3.variants[r5], s4 = Be.Get("/extensions/".concat(wt, "/variants/").concat(i5), c2._variants, i5);
                              p2.variants[s4.name] = p2.variants[s4.name] || [], p2.variants[s4.name].push({ mesh: n3, material: t4 }), n3.onClonedObservable.add(function(t5) {
                                var r6 = t5, a4 = null, i6 = r6;
                                do {
                                  if (!(i6 = i6.parent)) return;
                                  a4 = e2._GetExtensionMetadata(i6);
                                } while (null === a4);
                                if (o3 && a4 === e2._GetExtensionMetadata(o3)) {
                                  for (var l3 in i6._internalMetadata = {}, o3._internalMetadata) i6._internalMetadata[l3] = o3._internalMetadata[l3];
                                  for (var l3 in i6._internalMetadata.gltf = [], o3._internalMetadata.gltf) i6._internalMetadata.gltf[l3] = o3._internalMetadata.gltf[l3];
                                  i6._internalMetadata.gltf[wt] = { lastSelected: null, original: [], variants: {} };
                                  for (var u3 = 0, c3 = a4.original; u3 < c3.length; u3++) {
                                    var f4 = c3[u3];
                                    i6._internalMetadata.gltf[wt].original.push({ mesh: f4.mesh, material: f4.material });
                                  }
                                  for (var l3 in a4.variants) if (Object.prototype.hasOwnProperty.call(a4.variants, l3)) {
                                    i6._internalMetadata.gltf[wt].variants[l3] = [];
                                    for (var h3 = 0, p3 = a4.variants[l3]; h3 < p3.length; h3++) {
                                      var d3 = p3[h3];
                                      i6._internalMetadata.gltf[wt].variants[l3].push({ mesh: d3.mesh, material: d3.material });
                                    }
                                  }
                                  a4 = i6._internalMetadata.gltf[wt];
                                }
                                for (var m3 = 0, _2 = a4.original; m3 < _2.length; m3++) (b2 = _2[m3]).mesh === n3 && (b2.mesh = r6);
                                for (var g2 = 0, y2 = a4.variants[s4.name]; g2 < y2.length; g2++) {
                                  var b2;
                                  (b2 = y2[g2]).mesh === n3 && (b2.mesh = r6);
                                }
                              });
                            }, i4 = 0; i4 < a3.variants.length; ++i4) r4(i4);
                          }));
                        }, m2 = 0; m2 < u2.mappings.length; ++m2) d2(m2);
                      }
                    })), [4, Promise.all(s3).then(function(e3) {
                      return e3[0];
                    })];
                  case 1:
                    return [2, f2.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(wt), Re(wt, true, function(e2) {
        return new Ot(e2);
      });
      var Ct = function() {
        function e2(t2, n2) {
          var r2 = this;
          this._opaqueRenderTarget = null, this._opaqueMeshesCache = [], this._transparentMeshesCache = [], this._materialObservers = {}, this._options = (0, L.Cl)((0, L.Cl)({}, e2._GetDefaultOptions()), t2), this._scene = n2, this._scene._transmissionHelper = this, this.onErrorObservable = new g.Observable(), this._scene.onDisposeObservable.addOnce(function() {
            r2.dispose();
          }), this._parseScene(), this._setupRenderTargets();
        }
        return e2._GetDefaultOptions = function() {
          return { renderSize: 1024, samples: 4, lodGenerationScale: 1, lodGenerationOffset: -4, renderTargetTextureType: g.Constants.TEXTURETYPE_HALF_FLOAT, generateMipmaps: true };
        }, e2.prototype.updateOptions = function(e3) {
          var t2 = this, n2 = Object.keys(e3).filter(function(n3) {
            return t2._options[n3] !== e3[n3];
          });
          if (n2.length) {
            var r2 = (0, L.Cl)((0, L.Cl)({}, this._options), e3), o2 = this._options;
            this._options = r2, r2.renderSize === o2.renderSize && r2.renderTargetTextureType === o2.renderTargetTextureType && r2.generateMipmaps === o2.generateMipmaps && this._opaqueRenderTarget ? (this._opaqueRenderTarget.samples = r2.samples, this._opaqueRenderTarget.lodGenerationScale = r2.lodGenerationScale, this._opaqueRenderTarget.lodGenerationOffset = r2.lodGenerationOffset) : this._setupRenderTargets();
          }
        }, e2.prototype.getOpaqueTarget = function() {
          return this._opaqueRenderTarget;
        }, e2.prototype._shouldRenderAsTransmission = function(e3) {
          var t2;
          return !!(null === (t2 = null == e3 ? void 0 : e3.subSurface) || void 0 === t2 ? void 0 : t2.isRefractionEnabled);
        }, e2.prototype._addMesh = function(e3) {
          var t2 = this;
          this._materialObservers[e3.uniqueId] = e3.onMaterialChangedObservable.add(this._onMeshMaterialChanged.bind(this)), g.Tools.SetImmediate(function() {
            t2._shouldRenderAsTransmission(e3.material) ? (e3.material.refractionTexture = t2._opaqueRenderTarget, -1 === t2._transparentMeshesCache.indexOf(e3) && t2._transparentMeshesCache.push(e3)) : -1 === t2._opaqueMeshesCache.indexOf(e3) && t2._opaqueMeshesCache.push(e3);
          });
        }, e2.prototype._removeMesh = function(e3) {
          e3.onMaterialChangedObservable.remove(this._materialObservers[e3.uniqueId]), delete this._materialObservers[e3.uniqueId];
          var t2 = this._transparentMeshesCache.indexOf(e3);
          -1 !== t2 && this._transparentMeshesCache.splice(t2, 1), -1 !== (t2 = this._opaqueMeshesCache.indexOf(e3)) && this._opaqueMeshesCache.splice(t2, 1);
        }, e2.prototype._parseScene = function() {
          this._scene.meshes.forEach(this._addMesh.bind(this)), this._scene.onNewMeshAddedObservable.add(this._addMesh.bind(this)), this._scene.onMeshRemovedObservable.add(this._removeMesh.bind(this));
        }, e2.prototype._onMeshMaterialChanged = function(e3) {
          var t2 = this._transparentMeshesCache.indexOf(e3), n2 = this._opaqueMeshesCache.indexOf(e3);
          if (this._shouldRenderAsTransmission(e3.material)) {
            if (e3.material) {
              var r2 = e3.material.subSurface;
              r2 && (r2.refractionTexture = this._opaqueRenderTarget);
            }
            -1 !== n2 ? (this._opaqueMeshesCache.splice(n2, 1), this._transparentMeshesCache.push(e3)) : -1 === t2 && this._transparentMeshesCache.push(e3);
          } else -1 !== t2 ? (this._transparentMeshesCache.splice(t2, 1), this._opaqueMeshesCache.push(e3)) : -1 === n2 && this._opaqueMeshesCache.push(e3);
        }, e2.prototype._isRenderTargetValid = function() {
          var e3;
          return null !== (null === (e3 = this._opaqueRenderTarget) || void 0 === e3 ? void 0 : e3.getInternalTexture());
        }, e2.prototype._setupRenderTargets = function() {
          var e3, t2, n2, r2 = this;
          this._opaqueRenderTarget && this._opaqueRenderTarget.dispose(), this._opaqueRenderTarget = new g.RenderTargetTexture("opaqueSceneTexture", this._options.renderSize, this._scene, this._options.generateMipmaps, void 0, this._options.renderTargetTextureType), this._opaqueRenderTarget.ignoreCameraViewport = true, this._opaqueRenderTarget.renderList = this._opaqueMeshesCache, this._opaqueRenderTarget.clearColor = null !== (t2 = null === (e3 = this._options.clearColor) || void 0 === e3 ? void 0 : e3.clone()) && void 0 !== t2 ? t2 : this._scene.clearColor.clone(), this._opaqueRenderTarget.gammaSpace = false, this._opaqueRenderTarget.lodGenerationScale = this._options.lodGenerationScale, this._opaqueRenderTarget.lodGenerationOffset = this._options.lodGenerationOffset, this._opaqueRenderTarget.samples = this._options.samples, this._opaqueRenderTarget.renderSprites = true, this._opaqueRenderTarget.renderParticles = true, this._opaqueRenderTarget.disableImageProcessing = true, this._opaqueRenderTarget.onBeforeBindObservable.add(function(e4) {
            n2 = r2._scene.environmentIntensity, r2._scene.environmentIntensity = 1, r2._options.clearColor ? e4.clearColor.copyFrom(r2._options.clearColor) : r2._scene.clearColor.toLinearSpaceToRef(e4.clearColor, r2._scene.getEngine().useExactSrgbConversions);
          }), this._opaqueRenderTarget.onAfterUnbindObservable.add(function() {
            r2._scene.environmentIntensity = n2;
          });
          for (var o2 = 0, a2 = this._transparentMeshesCache; o2 < a2.length; o2++) {
            var i2 = a2[o2];
            this._shouldRenderAsTransmission(i2.material) && (i2.material.refractionTexture = this._opaqueRenderTarget);
          }
        }, e2.prototype.dispose = function() {
          this._scene._transmissionHelper = void 0, this._opaqueRenderTarget && (this._opaqueRenderTarget.dispose(), this._opaqueRenderTarget = null), this._transparentMeshesCache = [], this._opaqueMeshesCache = [];
        }, e2;
      }(), Et = "KHR_materials_transmission", Mt = function() {
        function e2(e3) {
          this.name = Et, this.order = 175, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Et), this.enabled && (e3.parent.transparencyAsCoverage = true);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadTransparentPropertiesAsync(o2, t2, n2, a2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadTransparentPropertiesAsync = function(e3, t2, n2, r2) {
          var o2, a2, i2 = this._loader._getOrCreateMaterialAdapter(n2), s2 = void 0 !== r2.transmissionFactor ? r2.transmissionFactor : 0;
          if (0 === s2) return Promise.resolve();
          if (i2.configureTransmission(), i2.transmissionWeight = s2, s2 > 0) {
            var l2 = n2.getScene();
            l2._transmissionHelper ? (null === (o2 = l2._transmissionHelper) || void 0 === o2 ? void 0 : o2._isRenderTargetValid()) || null === (a2 = l2._transmissionHelper) || void 0 === a2 || a2._setupRenderTargets() : new Ct({}, n2.getScene());
          }
          var u2 = Promise.resolve(null);
          return r2.transmissionTexture && (r2.transmissionTexture.nonColorData = true, u2 = this._loader.loadTextureInfoAsync("".concat(e3, "/transmissionTexture"), r2.transmissionTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Transmission)"), i2.transmissionWeightTexture = e4;
          })), u2.then(function() {
          });
        }, e2;
      }();
      Le(Et), Re(Et, true, function(e2) {
        return new Mt(e2);
      });
      var Ft = "KHR_materials_diffuse_transmission", Pt = function() {
        function e2(e3) {
          this.name = Ft, this.order = 174, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Ft), this.enabled && (e3.parent.transparencyAsCoverage = true);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadTranslucentPropertiesAsync(o2, t2, n2, a2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadTranslucentPropertiesAsync = function(e3, t2, n2, r2) {
          var o2, a2 = this._loader._getOrCreateMaterialAdapter(n2);
          a2.configureSubsurface(), a2.subsurfaceWeight = null !== (o2 = r2.diffuseTransmissionFactor) && void 0 !== o2 ? o2 : 0, a2.subsurfaceColor = void 0 !== r2.diffuseTransmissionColorFactor ? g.Color3.FromArray(r2.diffuseTransmissionColorFactor) : g.Color3.White();
          var i2 = new Array();
          return r2.diffuseTransmissionTexture && (r2.diffuseTransmissionTexture.nonColorData = true, i2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/diffuseTransmissionTexture"), r2.diffuseTransmissionTexture).then(function(e4) {
            e4.name = "".concat(n2.name, " (Diffuse Transmission)"), a2.subsurfaceWeightTexture = e4;
          }))), r2.diffuseTransmissionColorTexture && i2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/diffuseTransmissionColorTexture"), r2.diffuseTransmissionColorTexture).then(function(e4) {
            e4.name = "".concat(n2.name, " (Diffuse Transmission Color)"), a2.subsurfaceColorTexture = e4;
          })), Promise.all(i2).then(function() {
          });
        }, e2;
      }();
      Le(Ft), Re(Ft, true, function(e2) {
        return new Pt(e2);
      });
      var Rt = "KHR_materials_volume", Lt = function() {
        function e2(e3) {
          this.name = Rt, this.order = 173, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Rt), this.enabled && this._loader._disableInstancedMesh++;
        }
        return e2.prototype.dispose = function() {
          this.enabled && this._loader._disableInstancedMesh--, this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadVolumePropertiesAsync(o2, t2, n2, a2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadVolumePropertiesAsync = function(e3, t2, n2, r2) {
          var o2, a2 = this._loader._getOrCreateMaterialAdapter(n2);
          if (0 === a2.transmissionWeight && 0 === a2.subsurfaceWeight || !r2.thicknessFactor) return Promise.resolve();
          a2.transmissionDepth = void 0 !== r2.attenuationDistance ? r2.attenuationDistance : Number.MAX_VALUE, a2.transmissionColor = void 0 !== r2.attenuationColor && 3 == r2.attenuationColor.length ? g.Color3.FromArray(r2.attenuationColor) : g.Color3.White(), a2.volumeThickness = null !== (o2 = r2.thicknessFactor) && void 0 !== o2 ? o2 : 0;
          var i2 = new Array();
          return r2.thicknessTexture && (r2.thicknessTexture.nonColorData = true, i2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/thicknessTexture"), r2.thicknessTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Thickness)"), a2.volumeThicknessTexture = e4;
          }))), Promise.all(i2).then(function() {
          });
        }, e2;
      }();
      Le(Rt), Re(Rt, true, function(e2) {
        return new Lt(e2);
      });
      var Nt = "KHR_materials_dispersion", It = function() {
        function e2(e3) {
          this.name = Nt, this.order = 174, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Nt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadDispersionPropertiesAsync(o2, t2, n2, a2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadDispersionPropertiesAsync = function(e3, t2, n2, r2) {
          var o2 = this._loader._getOrCreateMaterialAdapter(n2);
          return o2.transmissionWeight > 0 || !r2.dispersion || (o2.transmissionDispersionAbbeNumber = 20 / r2.dispersion), Promise.resolve();
        }, e2;
      }();
      Le(Nt), Re(Nt, true, function(e2) {
        return new It(e2);
      });
      var St = "KHR_materials_diffuse_roughness", Bt = function() {
        function e2(e3) {
          this.name = St, this.order = 190, this._loader = e3, this.enabled = this._loader.isExtensionUsed(St);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    return (r3 = new Array()).push(this._loader.loadMaterialPropertiesAsync(e3, t2, n2)), r3.push(this._loadDiffuseRoughnessPropertiesAsync(o2, a2, n2)), [4, Promise.all(r3).then(function() {
                    })];
                  case 1:
                    return [2, i2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadDiffuseRoughnessPropertiesAsync = function(e3, t2, n2) {
          var r2, o2 = this._loader._getOrCreateMaterialAdapter(n2), a2 = new Array();
          return o2.baseDiffuseRoughness = null !== (r2 = t2.diffuseRoughnessFactor) && void 0 !== r2 ? r2 : 0, t2.diffuseRoughnessTexture && a2.push(this._loader.loadTextureInfoAsync("".concat(e3, "/diffuseRoughnessTexture"), t2.diffuseRoughnessTexture, function(e4) {
            e4.name = "".concat(n2.name, " (Diffuse Roughness)"), o2.baseDiffuseRoughnessTexture = e4;
          })), Promise.all(a2).then(function() {
          });
        }, e2;
      }();
      Le(St), Re(St, true, function(e2) {
        return new Bt(e2);
      });
      var kt = "KHR_mesh_quantization", Gt = function() {
        function e2(e3) {
          this.name = kt, this.enabled = e3.isExtensionUsed(kt);
        }
        return e2.prototype.dispose = function() {
        }, e2;
      }();
      Le(kt), Re(kt, true, function(e2) {
        return new Gt(e2);
      });
      var Vt = "KHR_texture_basisu", Dt = function() {
        function e2(e3) {
          this.name = Vt, this._loader = e3, this.enabled = e3.isExtensionUsed(Vt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype._loadTextureAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, i2;
              return (0, L.YH)(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    return r3 = null == t2.sampler ? Ge.DefaultSampler : Be.Get("".concat(e3, "/sampler"), this._loader.gltf.samplers, t2.sampler), i2 = Be.Get("".concat(o2, "/source"), this._loader.gltf.images, a2.source), [4, this._loader._createTextureAsync(e3, r3, i2, function(e4) {
                      n2(e4);
                    }, t2._textureInfo.nonColorData ? { useRGBAIfASTCBC7NotAvailableWhenUASTC: true } : void 0, !t2._textureInfo.nonColorData)];
                  case 1:
                    return [2, s2.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(Vt), Re(Vt, true, function(e2) {
        return new Dt(e2);
      });
      var Ht = "KHR_texture_transform", Ut = function() {
        function e2(e3) {
          this.name = Ht, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Ht);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadTextureInfoAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              return (0, L.YH)(this, function(r3) {
                switch (r3.label) {
                  case 0:
                    return [4, this._loader.loadTextureInfoAsync(e3, t2, function(e4) {
                      if (!(e4 instanceof g.Texture)) throw new Error("".concat(o2, ": Texture type not supported"));
                      a2.offset && (e4.uOffset = a2.offset[0], e4.vOffset = a2.offset[1]), e4.uRotationCenter = 0, e4.vRotationCenter = 0, a2.rotation && (e4.wAng = -a2.rotation), a2.scale && (e4.uScale = a2.scale[0], e4.vScale = a2.scale[1]), null != a2.texCoord && (e4.coordinatesIndex = a2.texCoord), n2(e4);
                    })];
                  case 1:
                    return [2, r3.sent()];
                }
              });
            });
          });
        }, e2;
      }();
      Le(Ht), Re(Ht, true, function(e2) {
        return new Ut(e2);
      });
      var jt = "KHR_xmp_json_ld", Kt = function() {
        function e2(e3) {
          this.name = jt, this.order = 100, this._loader = e3, this.enabled = this._loader.isExtensionUsed(jt);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.onLoading = function() {
          var e3, t2, n2;
          if (null !== this._loader.rootBabylonMesh) {
            var r2 = null === (e3 = this._loader.gltf.extensions) || void 0 === e3 ? void 0 : e3.KHR_xmp_json_ld, o2 = null === (n2 = null === (t2 = this._loader.gltf.asset) || void 0 === t2 ? void 0 : t2.extensions) || void 0 === n2 ? void 0 : n2.KHR_xmp_json_ld;
            if (r2 && o2) {
              var a2 = +o2.packet;
              r2.packets && a2 < r2.packets.length && (this._loader.rootBabylonMesh.metadata = this._loader.rootBabylonMesh.metadata || {}, this._loader.rootBabylonMesh.metadata.xmp = r2.packets[a2]);
            }
          }
        }, e2;
      }();
      function Wt(e2, t2, n2, r2) {
        return g.Color3.FromArray(t2, n2).scale(r2);
      }
      function Yt(e2, t2, n2, r2) {
        return t2[n2] * r2;
      }
      function Zt(e2, t2, n2, r2) {
        return -t2[n2] * r2;
      }
      function qt(e2, t2, n2, r2) {
        return t2[n2 + 1] * r2;
      }
      function zt(e2, t2, n2, r2) {
        return t2[n2] * r2 * 2;
      }
      function Xt(e2) {
        return { scale: [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "".concat(e2, ".uScale"), Yt, function() {
          return 2;
        }), new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "".concat(e2, ".vScale"), qt, function() {
          return 2;
        })], offset: [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "".concat(e2, ".uOffset"), Yt, function() {
          return 2;
        }), new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "".concat(e2, ".vOffset"), qt, function() {
          return 2;
        })], rotation: [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "".concat(e2, ".wAng"), Zt, function() {
          return 1;
        })] };
      }
      Le(jt), Re(jt, true, function(e2) {
        return new Kt(e2);
      });
      var Qt = function(e2) {
        function t2() {
          return null !== e2 && e2.apply(this, arguments) || this;
        }
        return (0, L.C6)(t2, e2), t2.prototype.buildAnimations = function(e3, t3, n2, r2) {
          return [{ babylonAnimatable: e3._babylonCamera, babylonAnimation: this._buildAnimation(t3, n2, r2) }];
        }, t2;
      }(Ve.AnimationPropertyInfo), Jt = function(e2) {
        function t2() {
          return null !== e2 && e2.apply(this, arguments) || this;
        }
        return (0, L.C6)(t2, e2), t2.prototype.buildAnimations = function(e3, t3, n2, r2) {
          var o2 = [];
          for (var a2 in e3._data) o2.push({ babylonAnimatable: e3._data[a2].babylonMaterial, babylonAnimation: this._buildAnimation(t3, n2, r2) });
          return o2;
        }, t2;
      }(Ve.AnimationPropertyInfo), $t = function(e2) {
        function t2() {
          return null !== e2 && e2.apply(this, arguments) || this;
        }
        return (0, L.C6)(t2, e2), t2.prototype.buildAnimations = function(e3, t3, n2, r2) {
          return [{ babylonAnimatable: e3._babylonLight, babylonAnimation: this._buildAnimation(t3, n2, r2) }];
        }, t2;
      }(Ve.AnimationPropertyInfo), en = function(e2) {
        function t2() {
          return null !== e2 && e2.apply(this, arguments) || this;
        }
        return (0, L.C6)(t2, e2), t2.prototype.buildAnimations = function(e3, t3, n2, r2) {
          var o2 = this;
          return e3._primitiveBabylonMeshes ? e3._primitiveBabylonMeshes.map(function(e4) {
            return { babylonAnimatable: e4, babylonAnimation: o2._buildAnimation(t3, n2, r2) };
          }) : [];
        }, t2;
      }(Ve.AnimationPropertyInfo);
      (0, Ne.ZU)("/cameras/{}/orthographic/xmag", [new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "orthoLeft", Zt, function() {
        return 1;
      }), new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "orthoRight", qt, function() {
        return 1;
      })]), (0, Ne.ZU)("/cameras/{}/orthographic/ymag", [new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "orthoBottom", Zt, function() {
        return 1;
      }), new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "orthoTop", qt, function() {
        return 1;
      })]), (0, Ne.ZU)("/cameras/{}/orthographic/zfar", [new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "maxZ", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/cameras/{}/orthographic/znear", [new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "minZ", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/cameras/{}/perspective/yfov", [new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "fov", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/cameras/{}/perspective/zfar", [new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "maxZ", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/cameras/{}/perspective/znear", [new Qt(g.Animation.ANIMATIONTYPE_FLOAT, "minZ", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/pbrMetallicRoughness/baseColorFactor", [new Jt(g.Animation.ANIMATIONTYPE_COLOR3, "albedoColor", Wt, function() {
        return 4;
      }), new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "alpha", function(e2, t2, n2, r2) {
        return t2[n2 + 3] * r2;
      }, function() {
        return 4;
      })]), (0, Ne.ZU)("/materials/{}/pbrMetallicRoughness/metallicFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "metallic", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/pbrMetallicRoughness/metallicFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "roughness", Yt, function() {
        return 1;
      })]);
      var tn = Xt("albedoTexture");
      (0, Ne.ZU)("/materials/{}/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/scale", tn.scale), (0, Ne.ZU)("/materials/{}/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/offset", tn.offset), (0, Ne.ZU)("/materials/{}/pbrMetallicRoughness/baseColorTexture/extensions/KHR_texture_transform/rotation", tn.rotation);
      var nn = Xt("metallicTexture");
      (0, Ne.ZU)("//materials/{}/pbrMetallicRoughness/metallicRoughnessTexture/scale", nn.scale), (0, Ne.ZU)("//materials/{}/pbrMetallicRoughness/metallicRoughnessTexture/offset", nn.offset), (0, Ne.ZU)("//materials/{}/pbrMetallicRoughness/metallicRoughnessTexture/rotation", nn.rotation), (0, Ne.ZU)("/materials/{}/emissiveFactor", [new Jt(g.Animation.ANIMATIONTYPE_COLOR3, "emissiveColor", Wt, function() {
        return 3;
      })]);
      var rn = Xt("bumpTexture");
      (0, Ne.ZU)("/materials/{}/normalTexture/scale", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "bumpTexture.level", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/normalTexture/extensions/KHR_texture_transform/scale", rn.scale), (0, Ne.ZU)("/materials/{}/normalTexture/extensions/KHR_texture_transform/offset", rn.offset), (0, Ne.ZU)("/materials/{}/normalTexture/extensions/KHR_texture_transform/rotation", rn.rotation), (0, Ne.ZU)("/materials/{}/occlusionTexture/strength", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "ambientTextureStrength", Yt, function() {
        return 1;
      })]);
      var on = Xt("ambientTexture");
      (0, Ne.ZU)("/materials/{}/occlusionTexture/extensions/KHR_texture_transform/scale", on.scale), (0, Ne.ZU)("/materials/{}/occlusionTexture/extensions/KHR_texture_transform/offset", on.offset), (0, Ne.ZU)("/materials/{}/occlusionTexture/extensions/KHR_texture_transform/rotation", on.rotation);
      var an = Xt("emissiveTexture");
      (0, Ne.ZU)("/materials/{}/emissiveTexture/extensions/KHR_texture_transform/scale", an.scale), (0, Ne.ZU)("/materials/{}/emissiveTexture/extensions/KHR_texture_transform/offset", an.offset), (0, Ne.ZU)("/materials/{}/emissiveTexture/extensions/KHR_texture_transform/rotation", an.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyStrength", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "anisotropy.intensity", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyRotation", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "anisotropy.angle", Yt, function() {
        return 1;
      })]);
      var sn = Xt("anisotropy.texture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyTexture/extensions/KHR_texture_transform/scale", sn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyTexture/extensions/KHR_texture_transform/offset", sn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_anisotropy/anisotropyTexture/extensions/KHR_texture_transform/rotation", sn.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.intensity", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.roughness", Yt, function() {
        return 1;
      })]);
      var ln = Xt("clearCoat.texture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatTexture/extensions/KHR_texture_transform/scale", ln.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatTexture/extensions/KHR_texture_transform/offset", ln.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatTexture/extensions/KHR_texture_transform/rotation", ln.rotation);
      var un = Xt("clearCoat.bumpTexture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/scale", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "clearCoat.bumpTexture.level", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/extensions/KHR_texture_transform/scale", un.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/extensions/KHR_texture_transform/offset", un.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatNormalTexture/extensions/KHR_texture_transform/rotation", un.rotation);
      var cn = Xt("clearCoat.textureRoughness");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessTexture/extensions/KHR_texture_transform/scale", cn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessTexture/extensions/KHR_texture_transform/offset", cn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_clearcoat/clearcoatRoughnessTexture/extensions/KHR_texture_transform/rotation", cn.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_dispersion/dispersionFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "subSurface.dispersion", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_emissive_strength/emissiveStrength", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "emissiveIntensity", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_ior/ior", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "indexOfRefraction", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "iridescence.intensity", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceIor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "iridescence.indexOfRefraction", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessMinimum", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "iridescence.minimumThickness", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessMaximum", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "iridescence.maximumThickness", Yt, function() {
        return 1;
      })]);
      var fn = Xt("iridescence.texture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceTexture/extensions/KHR_texture_transform/scale", fn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceTexture/extensions/KHR_texture_transform/offset", fn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceTexture/extensions/KHR_texture_transform/rotation", fn.rotation);
      var hn = Xt("iridescence.thicknessTexture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessTexture/extensions/KHR_texture_transform/scale", hn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessTexture/extensions/KHR_texture_transform/offset", hn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_iridescence/iridescenceThicknessTexture/extensions/KHR_texture_transform/rotation", hn.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenColorFactor", [new Jt(g.Animation.ANIMATIONTYPE_COLOR3, "sheen.color", Wt, function() {
        return 3;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "sheen.roughness", Yt, function() {
        return 1;
      })]);
      var pn = Xt("sheen.texture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenColorTexture/extensions/KHR_texture_transform/scale", pn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenColorTexture/extensions/KHR_texture_transform/offset", pn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenColorTexture/extensions/KHR_texture_transform/rotation", pn.rotation);
      var dn = Xt("sheen.textureRoughness");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessTexture/extensions/KHR_texture_transform/scale", dn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessTexture/extensions/KHR_texture_transform/offset", dn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_sheen/sheenRoughnessTexture/extensions/KHR_texture_transform/rotation", dn.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "metallicF0Factor", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularColorFactor", [new Jt(g.Animation.ANIMATIONTYPE_COLOR3, "metallicReflectanceColor", Wt, function() {
        return 3;
      })]);
      var mn = Xt("metallicReflectanceTexture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularTexture/extensions/KHR_texture_transform/scale", mn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularTexture/extensions/KHR_texture_transform/offset", mn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularTexture/extensions/KHR_texture_transform/rotation", mn.rotation);
      var _n = Xt("reflectanceTexture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularColorTexture/extensions/KHR_texture_transform/scale", _n.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularColorTexture/extensions/KHR_texture_transform/offset", _n.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_specular/specularColorTexture/extensions/KHR_texture_transform/rotation", _n.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_transmission/transmissionFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "subSurface.refractionIntensity", Yt, function() {
        return 1;
      })]);
      var gn = Xt("subSurface.refractionIntensityTexture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_transmission/transmissionTexture/extensions/KHR_texture_transform/scale", gn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_transmission/transmissionTexture/extensions/KHR_texture_transform/offset", gn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_transmission/transmissionTexture/extensions/KHR_texture_transform/rotation", gn.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_volume/attenuationColor", [new Jt(g.Animation.ANIMATIONTYPE_COLOR3, "subSurface.tintColor", Wt, function() {
        return 3;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_volume/attenuationDistance", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "subSurface.tintColorAtDistance", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_volume/thicknessFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "subSurface.maximumThickness", Yt, function() {
        return 1;
      })]);
      var yn = Xt("subSurface.thicknessTexture");
      (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_volume/thicknessTexture/extensions/KHR_texture_transform/scale", yn.scale), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_volume/thicknessTexture/extensions/KHR_texture_transform/offset", yn.offset), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_volume/thicknessTexture/extensions/KHR_texture_transform/rotation", yn.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionFactor", [new Jt(g.Animation.ANIMATIONTYPE_FLOAT, "subSurface.translucencyIntensity", Yt, function() {
        return 1;
      })]);
      var bn = Xt("subSurface.translucencyIntensityTexture");
      (0, Ne.ZU)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionTexture/extensions/KHR_texture_transform/scale", bn.scale), (0, Ne.ZU)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionTexture/extensions/KHR_texture_transform/offset", bn.offset), (0, Ne.ZU)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionTexture/extensions/KHR_texture_transform/rotation", bn.rotation), (0, Ne.ZU)("/materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorFactor", [new Jt(g.Animation.ANIMATIONTYPE_COLOR3, "subSurface.translucencyColor", Wt, function() {
        return 3;
      })]);
      var vn = Xt("subSurface.translucencyColorTexture");
      (0, Ne.ZU)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorTexture/extensions/KHR_texture_transform/scale", vn.scale), (0, Ne.ZU)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorTexture/extensions/KHR_texture_transform/offset", vn.offset), (0, Ne.ZU)("materials/{}/extensions/KHR_materials_diffuse_transmission/diffuseTransmissionColorTexture/extensions/KHR_texture_transform/rotation", vn.rotation), (0, Ne.ZU)("/extensions/KHR_lights_punctual/lights/{}/color", [new $t(g.Animation.ANIMATIONTYPE_COLOR3, "diffuse", Wt, function() {
        return 3;
      })]), (0, Ne.ZU)("/extensions/KHR_lights_punctual/lights/{}/intensity", [new $t(g.Animation.ANIMATIONTYPE_FLOAT, "intensity", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/extensions/KHR_lights_punctual/lights/{}/range", [new $t(g.Animation.ANIMATIONTYPE_FLOAT, "range", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/extensions/KHR_lights_punctual/lights/{}/spot/innerConeAngle", [new $t(g.Animation.ANIMATIONTYPE_FLOAT, "innerAngle", zt, function() {
        return 1;
      })]), (0, Ne.ZU)("/extensions/KHR_lights_punctual/lights/{}/spot/outerConeAngle", [new $t(g.Animation.ANIMATIONTYPE_FLOAT, "angle", zt, function() {
        return 1;
      })]), (0, Ne.ZU)("/nodes/{}/extensions/EXT_lights_ies/color", [new $t(g.Animation.ANIMATIONTYPE_COLOR3, "diffuse", Wt, function() {
        return 3;
      })]), (0, Ne.ZU)("/nodes/{}/extensions/EXT_lights_ies/multiplier", [new $t(g.Animation.ANIMATIONTYPE_FLOAT, "intensity", Yt, function() {
        return 1;
      })]), (0, Ne.ZU)("/nodes/{}/extensions/KHR_node_visibility/visible", [new en(g.Animation.ANIMATIONTYPE_FLOAT, "isVisible", Yt, function() {
        return 1;
      })]);
      var Tn = "KHR_animation_pointer", xn = function() {
        function e2(e3) {
          this.name = Tn, this._loader = e3, this._pathToObjectConverter = (0, Ne.Wt)(this._loader.gltf);
        }
        return Object.defineProperty(e2.prototype, "enabled", { get: function() {
          return this._loader.isExtensionUsed(Tn);
        }, enumerable: false, configurable: true }), e2.prototype.dispose = function() {
          this._loader = null, delete this._pathToObjectConverter;
        }, e2.prototype._loadAnimationChannelAsync = function(e3, t2, n2, r2, o2) {
          var a2, i2 = null === (a2 = r2.target.extensions) || void 0 === a2 ? void 0 : a2.KHR_animation_pointer;
          if (!i2 || !this._pathToObjectConverter) return null;
          "pointer" !== r2.target.path && g.Logger.Warn("".concat(e3, "/target/path: Value (").concat(r2.target.path, ") must be (").concat("pointer", ") when using the ").concat(this.name, " extension")), null != r2.target.node && g.Logger.Warn("".concat(e3, "/target/node: Value (").concat(r2.target.node, ") must not be present when using the ").concat(this.name, " extension"));
          var s2 = "".concat(e3, "/extensions/").concat(this.name), l2 = i2.pointer;
          if (!l2) throw new Error("".concat(s2, ": Pointer is missing"));
          try {
            var u2 = this._pathToObjectConverter.convert(l2);
            if (!u2.info.interpolation) throw new Error("".concat(s2, "/pointer: Interpolation is missing"));
            return this._loader._loadAnimationChannelFromTargetInfoAsync(e3, t2, n2, r2, { object: u2.object, info: u2.info.interpolation }, o2);
          } catch (e4) {
            return g.Logger.Warn("".concat(s2, "/pointer: Invalid pointer (").concat(l2, ") skipped")), null;
          }
        }, e2;
      }();
      Le(Tn), Re(Tn, true, function(e2) {
        return new xn(e2);
      });
      var An = "MSFT_audio_emitter", wn = function() {
        function e2(e3) {
          this.name = An, this._loader = e3, this.enabled = this._loader.isExtensionUsed(An);
        }
        return e2.prototype.dispose = function() {
          this._loader = null, this._clips = null, this._emitters = null;
        }, e2.prototype.onLoading = function() {
          var e3 = this._loader.gltf.extensions;
          if (e3 && e3[this.name]) {
            var t2 = e3[this.name];
            this._clips = t2.clips, this._emitters = t2.emitters, Be.Assign(this._clips), Be.Assign(this._emitters);
          }
        }, e2.prototype.loadSceneAsync = function(e3, t2) {
          var n2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(r2, o2) {
            return (0, L.sH)(n2, void 0, void 0, function() {
              var n3, a2, i2, s2, l2;
              return (0, L.YH)(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    for ((n3 = new Array()).push(this._loader.loadSceneAsync(e3, t2)), a2 = 0, i2 = o2.emitters; a2 < i2.length; a2++) {
                      if (s2 = i2[a2], null != (l2 = Be.Get("".concat(r2, "/emitters"), this._emitters, s2)).refDistance || null != l2.maxDistance || null != l2.rolloffFactor || null != l2.distanceModel || null != l2.innerAngle || null != l2.outerAngle) throw new Error("".concat(r2, ": Direction or Distance properties are not allowed on emitters attached to a scene"));
                      n3.push(this._loadEmitterAsync("".concat(r2, "/emitters/").concat(l2.index), l2));
                    }
                    return [4, Promise.all(n3)];
                  case 1:
                    return u2.sent(), [2];
                }
              });
            });
          });
        }, e2.prototype.loadNodeAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(e4, o2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, a2, i2 = this;
              return (0, L.YH)(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    return r3 = new Array(), [4, this._loader.loadNodeAsync(e4, t2, function(t3) {
                      for (var a3 = function(n3) {
                        var o3 = Be.Get("".concat(e4, "/emitters"), i2._emitters, n3);
                        r3.push(i2._loadEmitterAsync("".concat(e4, "/emitters/").concat(o3.index), o3).then(function() {
                          for (var e5 = 0, n4 = o3._babylonSounds; e5 < n4.length; e5++) {
                            var r4 = n4[e5];
                            r4.attachToMesh(t3), null == o3.innerAngle && null == o3.outerAngle || (r4.setLocalDirectionToMesh(g.Vector3.Forward()), r4.setDirectionalCone(2 * g.Tools.ToDegrees(null == o3.innerAngle ? Math.PI : o3.innerAngle), 2 * g.Tools.ToDegrees(null == o3.outerAngle ? Math.PI : o3.outerAngle), 0));
                          }
                        }));
                      }, s3 = 0, l2 = o2.emitters; s3 < l2.length; s3++) a3(l2[s3]);
                      n2(t3);
                    })];
                  case 1:
                    return a2 = s2.sent(), [4, Promise.all(r3)];
                  case 2:
                    return s2.sent(), [2, a2];
                }
              });
            });
          });
        }, e2.prototype.loadAnimationAsync = function(e3, t2) {
          var n2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(r2, o2) {
            return (0, L.sH)(n2, void 0, void 0, function() {
              var n3, a2, i2, s2, l2;
              return (0, L.YH)(this, function(u2) {
                switch (u2.label) {
                  case 0:
                    return [4, this._loader.loadAnimationAsync(e3, t2)];
                  case 1:
                    for (n3 = u2.sent(), a2 = new Array(), Be.Assign(o2.events), i2 = 0, s2 = o2.events; i2 < s2.length; i2++) l2 = s2[i2], a2.push(this._loadAnimationEventAsync("".concat(r2, "/events/").concat(l2.index), e3, t2, l2, n3));
                    return [4, Promise.all(a2)];
                  case 2:
                    return u2.sent(), [2, n3];
                }
              });
            });
          });
        }, e2.prototype._loadClipAsync = function(e3, t2) {
          if (t2._objectURL) return t2._objectURL;
          var n2;
          if (t2.uri) n2 = this._loader.loadUriAsync(e3, t2, t2.uri);
          else {
            var r2 = Be.Get("".concat(e3, "/bufferView"), this._loader.gltf.bufferViews, t2.bufferView);
            n2 = this._loader.loadBufferViewAsync("/bufferViews/".concat(r2.index), r2);
          }
          return t2._objectURL = n2.then(function(e4) {
            return URL.createObjectURL(new Blob([e4], { type: t2.mimeType }));
          }), t2._objectURL;
        }, e2.prototype._loadEmitterAsync = function(e3, t2) {
          var n2 = this;
          if (t2._babylonSounds = t2._babylonSounds || [], !t2._babylonData) {
            for (var r2 = new Array(), o2 = t2.name || "emitter".concat(t2.index), a2 = { loop: false, autoplay: false, volume: null == t2.volume ? 1 : t2.volume }, i2 = function(e4) {
              var i3 = "/extensions/".concat(s2.name, "/clips"), l3 = Be.Get(i3, s2._clips, t2.clips[e4].clip);
              r2.push(s2._loadClipAsync("".concat(i3, "/").concat(t2.clips[e4].clip), l3).then(function(r3) {
                var i4 = t2._babylonSounds[e4] = new g.Sound(o2, r3, n2._loader.babylonScene, null, a2);
                i4.refDistance = t2.refDistance || 1, i4.maxDistance = t2.maxDistance || 256, i4.rolloffFactor = t2.rolloffFactor || 1, i4.distanceModel = t2.distanceModel || "exponential";
              }));
            }, s2 = this, l2 = 0; l2 < t2.clips.length; l2++) i2(l2);
            var u2 = Promise.all(r2).then(function() {
              var e4 = t2.clips.map(function(e5) {
                return e5.weight || 1;
              }), n3 = new g.WeightedSound(t2.loop || false, t2._babylonSounds, e4);
              t2.innerAngle && (n3.directionalConeInnerAngle = 2 * g.Tools.ToDegrees(t2.innerAngle)), t2.outerAngle && (n3.directionalConeOuterAngle = 2 * g.Tools.ToDegrees(t2.outerAngle)), t2.volume && (n3.volume = t2.volume), t2._babylonData.sound = n3;
            });
            t2._babylonData = { loaded: u2 };
          }
          return t2._babylonData.loaded;
        }, e2.prototype._getEventAction = function(e3, t2, n2, r2, o2) {
          switch (n2) {
            case "play":
              return function(e4) {
                var n3 = (o2 || 0) + (e4 - r2);
                t2.play(n3);
              };
            case "stop":
              return function() {
                t2.stop();
              };
            case "pause":
              return function() {
                t2.pause();
              };
            default:
              throw new Error("".concat(e3, ": Unsupported action ").concat(n2));
          }
        }, e2.prototype._loadAnimationEventAsync = function(e3, t2, n2, r2, o2) {
          var a2 = this;
          if (0 == o2.targetedAnimations.length) return Promise.resolve();
          var i2 = o2.targetedAnimations[0], s2 = r2.emitter, l2 = Be.Get("/extensions/".concat(this.name, "/emitters"), this._emitters, s2);
          return this._loadEmitterAsync(e3, l2).then(function() {
            var t3 = l2._babylonData.sound;
            if (t3) {
              var n3 = new g.AnimationEvent(r2.time, a2._getEventAction(e3, t3, r2.action, r2.time, r2.startOffset));
              i2.animation.addEvent(n3), o2.onAnimationGroupEndObservable.add(function() {
                t3.stop();
              }), o2.onAnimationGroupPauseObservable.add(function() {
                t3.pause();
              });
            }
          });
        }, e2;
      }();
      Le(An), Re(An, true, function(e2) {
        return new wn(e2);
      });
      var On = "MSFT_lod", Cn = function() {
        function e2(e3) {
          var t2, n2;
          this.name = On, this.order = 100, this.maxLODsToLoad = 10, this.onNodeLODsLoadedObservable = new g.Observable(), this.onMaterialLODsLoadedObservable = new g.Observable(), this._bufferLODs = new Array(), this._nodeIndexLOD = null, this._nodeSignalLODs = new Array(), this._nodePromiseLODs = new Array(), this._nodeBufferLODs = new Array(), this._materialIndexLOD = null, this._materialSignalLODs = new Array(), this._materialPromiseLODs = new Array(), this._materialBufferLODs = new Array(), this._loader = e3, this.maxLODsToLoad = null !== (n2 = null === (t2 = this._loader.parent.extensionOptions[On]) || void 0 === t2 ? void 0 : t2.maxLODsToLoad) && void 0 !== n2 ? n2 : this.maxLODsToLoad, this.enabled = this._loader.isExtensionUsed(On);
        }
        return e2.prototype.dispose = function() {
          this._loader = null, this._nodeIndexLOD = null, this._nodeSignalLODs.length = 0, this._nodePromiseLODs.length = 0, this._nodeBufferLODs.length = 0, this._materialIndexLOD = null, this._materialSignalLODs.length = 0, this._materialPromiseLODs.length = 0, this._materialBufferLODs.length = 0, this.onMaterialLODsLoadedObservable.clear(), this.onNodeLODsLoadedObservable.clear();
        }, e2.prototype.onReady = function() {
          for (var e3 = this, t2 = function(t3) {
            var r3 = Promise.all(n2._nodePromiseLODs[t3]).then(function() {
              0 !== t3 && (e3._loader.endPerformanceCounter("Node LOD ".concat(t3)), e3._loader.log("Loaded node LOD ".concat(t3))), e3.onNodeLODsLoadedObservable.notifyObservers(t3), t3 !== e3._nodePromiseLODs.length - 1 && (e3._loader.startPerformanceCounter("Node LOD ".concat(t3 + 1)), e3._loadBufferLOD(e3._nodeBufferLODs, t3 + 1), e3._nodeSignalLODs[t3] && e3._nodeSignalLODs[t3].resolve());
            });
            n2._loader._completePromises.push(r3);
          }, n2 = this, r2 = 0; r2 < this._nodePromiseLODs.length; r2++) t2(r2);
          var o2 = function(t3) {
            var n3 = Promise.all(a2._materialPromiseLODs[t3]).then(function() {
              0 !== t3 && (e3._loader.endPerformanceCounter("Material LOD ".concat(t3)), e3._loader.log("Loaded material LOD ".concat(t3))), e3.onMaterialLODsLoadedObservable.notifyObservers(t3), t3 !== e3._materialPromiseLODs.length - 1 && (e3._loader.startPerformanceCounter("Material LOD ".concat(t3 + 1)), e3._loadBufferLOD(e3._materialBufferLODs, t3 + 1), e3._materialSignalLODs[t3] && e3._materialSignalLODs[t3].resolve());
            });
            a2._loader._completePromises.push(n3);
          }, a2 = this;
          for (r2 = 0; r2 < this._materialPromiseLODs.length; r2++) o2(r2);
        }, e2.prototype.loadSceneAsync = function(e3, t2) {
          var n2 = this._loader.loadSceneAsync(e3, t2);
          return this._loadBufferLOD(this._bufferLODs, 0), n2;
        }, e2.prototype.loadNodeAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtensionAsync(e3, t2, this.name, function(e4, o2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, a2, i2, s2, l2, u2 = this;
              return (0, L.YH)(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    for (a2 = this._getLODs(e4, t2, this._loader.gltf.nodes, o2.ids), this._loader.logOpen("".concat(e4)), i2 = function(e5) {
                      var t3 = a2[e5];
                      0 !== e5 && (s2._nodeIndexLOD = e5, s2._nodeSignalLODs[e5] = s2._nodeSignalLODs[e5] || new g.Deferred());
                      var o3 = s2._loader.loadNodeAsync("/nodes/".concat(t3.index), t3, function(e6) {
                        n2(e6), e6.setEnabled(false);
                      }).then(function(t4) {
                        if (0 !== e5) {
                          var n3 = a2[e5 - 1];
                          n3._babylonTransformNode && (u2._disposeTransformNode(n3._babylonTransformNode), delete n3._babylonTransformNode);
                        }
                        return t4.setEnabled(true), t4;
                      });
                      s2._nodePromiseLODs[e5] = s2._nodePromiseLODs[e5] || [], 0 === e5 ? r3 = o3 : (s2._nodeIndexLOD = null, s2._nodePromiseLODs[e5].push(o3));
                    }, s2 = this, l2 = 0; l2 < a2.length; l2++) i2(l2);
                    return this._loader.logClose(), [4, r3];
                  case 1:
                    return [2, c2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadMaterialAsync = function(e3, t2, n2, r2, o2) {
          var a2 = this;
          return this._nodeIndexLOD ? null : Ge.LoadExtensionAsync(e3, t2, this.name, function(e4, i2) {
            return (0, L.sH)(a2, void 0, void 0, function() {
              var a3, s2, l2, u2, c2, f2 = this;
              return (0, L.YH)(this, function(h2) {
                switch (h2.label) {
                  case 0:
                    for (s2 = this._getLODs(e4, t2, this._loader.gltf.materials, i2.ids), this._loader.logOpen("".concat(e4)), l2 = function(e5) {
                      var t3 = s2[e5];
                      0 !== e5 && (u2._materialIndexLOD = e5);
                      var i3 = u2._loader._loadMaterialAsync("/materials/".concat(t3.index), t3, n2, r2, function(t4) {
                        0 === e5 && o2(t4);
                      }).then(function(t4) {
                        if (0 !== e5) {
                          o2(t4);
                          var n3 = s2[e5 - 1]._data;
                          n3[r2] && (f2._disposeMaterials([n3[r2].babylonMaterial]), delete n3[r2]);
                        }
                        return t4;
                      });
                      u2._materialPromiseLODs[e5] = u2._materialPromiseLODs[e5] || [], 0 === e5 ? a3 = i3 : (u2._materialIndexLOD = null, u2._materialPromiseLODs[e5].push(i3));
                    }, u2 = this, c2 = 0; c2 < s2.length; c2++) l2(c2);
                    return this._loader.logClose(), [4, a3];
                  case 1:
                    return [2, h2.sent()];
                }
              });
            });
          });
        }, e2.prototype._loadUriAsync = function(e3, t2, n2) {
          var r2 = this;
          if (null !== this._nodeIndexLOD) {
            this._loader.log("deferred");
            var o2 = this._nodeIndexLOD - 1;
            return this._nodeSignalLODs[o2] = this._nodeSignalLODs[o2] || new g.Deferred(), this._nodeSignalLODs[this._nodeIndexLOD - 1].promise.then(function() {
              return (0, L.sH)(r2, void 0, void 0, function() {
                return (0, L.YH)(this, function(r3) {
                  switch (r3.label) {
                    case 0:
                      return [4, this._loader.loadUriAsync(e3, t2, n2)];
                    case 1:
                      return [2, r3.sent()];
                  }
                });
              });
            });
          }
          return null !== this._materialIndexLOD ? (this._loader.log("deferred"), o2 = this._materialIndexLOD - 1, this._materialSignalLODs[o2] = this._materialSignalLODs[o2] || new g.Deferred(), this._materialSignalLODs[o2].promise.then(function() {
            return (0, L.sH)(r2, void 0, void 0, function() {
              return (0, L.YH)(this, function(r3) {
                switch (r3.label) {
                  case 0:
                    return [4, this._loader.loadUriAsync(e3, t2, n2)];
                  case 1:
                    return [2, r3.sent()];
                }
              });
            });
          })) : null;
        }, e2.prototype.loadBufferAsync = function(e3, t2, n2, r2) {
          var o2 = this;
          if (this._loader.parent.useRangeRequests && !t2.uri) {
            if (!this._loader.bin) throw new Error("".concat(e3, ": Uri is missing or the binary glTF is missing its binary chunk"));
            var a2 = function(e4, t3) {
              return (0, L.sH)(o2, void 0, void 0, function() {
                var o3, a3, i2;
                return (0, L.YH)(this, function(s2) {
                  switch (s2.label) {
                    case 0:
                      return a3 = (o3 = n2) + r2 - 1, (i2 = e4[t3]) ? (i2.start = Math.min(i2.start, o3), i2.end = Math.max(i2.end, a3)) : (i2 = { start: o3, end: a3, loaded: new g.Deferred() }, e4[t3] = i2), [4, i2.loaded.promise.then(function(e5) {
                        return new Uint8Array(e5.buffer, e5.byteOffset + n2 - i2.start, r2);
                      })];
                    case 1:
                      return [2, s2.sent()];
                  }
                });
              });
            };
            return this._loader.log("deferred"), null !== this._nodeIndexLOD ? a2(this._nodeBufferLODs, this._nodeIndexLOD) : null !== this._materialIndexLOD ? a2(this._materialBufferLODs, this._materialIndexLOD) : a2(this._bufferLODs, 0);
          }
          return null;
        }, e2.prototype._loadBufferLOD = function(e3, t2) {
          var n2 = e3[t2];
          n2 && (this._loader.log("Loading buffer range [".concat(n2.start, "-").concat(n2.end, "]")), this._loader.bin.readAsync(n2.start, n2.end - n2.start + 1).then(function(e4) {
            n2.loaded.resolve(e4);
          }, function(e4) {
            n2.loaded.reject(e4);
          }));
        }, e2.prototype._getLODs = function(e3, t2, n2, r2) {
          if (this.maxLODsToLoad <= 0) throw new Error("maxLODsToLoad must be greater than zero");
          for (var o2 = [], a2 = r2.length - 1; a2 >= 0; a2--) if (o2.push(Be.Get("".concat(e3, "/ids/").concat(r2[a2]), n2, r2[a2])), o2.length === this.maxLODsToLoad) return o2;
          return o2.push(t2), o2;
        }, e2.prototype._disposeTransformNode = function(e3) {
          var t2 = this, n2 = [], r2 = e3.material;
          r2 && n2.push(r2);
          for (var o2 = 0, a2 = e3.getChildMeshes(); o2 < a2.length; o2++) {
            var i2 = a2[o2];
            i2.material && n2.push(i2.material);
          }
          e3.dispose();
          var s2 = n2.filter(function(e4) {
            return t2._loader.babylonScene.meshes.every(function(t3) {
              return t3.material != e4;
            });
          });
          this._disposeMaterials(s2);
        }, e2.prototype._disposeMaterials = function(e3) {
          for (var t2 = {}, n2 = 0, r2 = e3; n2 < r2.length; n2++) {
            for (var o2 = 0, a2 = (c2 = r2[n2]).getActiveTextures(); o2 < a2.length; o2++) {
              var i2 = a2[o2];
              t2[i2.uniqueId] = i2;
            }
            c2.dispose();
          }
          for (var s2 in t2) for (var l2 = 0, u2 = this._loader.babylonScene.materials; l2 < u2.length; l2++) {
            var c2;
            (c2 = u2[l2]).hasTexture(t2[s2]) && delete t2[s2];
          }
          for (var s2 in t2) t2[s2].dispose();
        }, e2;
      }();
      Le(On), Re(On, true, function(e2) {
        return new Cn(e2);
      });
      var En = "MSFT_minecraftMesh", Mn = function() {
        function e2(e3) {
          this.name = En, this._loader = e3, this.enabled = this._loader.isExtensionUsed(En);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtraAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3;
              return (0, L.YH)(this, function(i2) {
                switch (i2.label) {
                  case 0:
                    if (!a2) return [3, 2];
                    if (!this._loader._pbrMaterialImpl) throw new Error("".concat(o2, ": Material type not supported"));
                    return r3 = this._loader.loadMaterialPropertiesAsync(e3, t2, n2), n2.needAlphaBlending() && (n2.forceDepthWrite = true, n2.separateCullingPass = true), n2.backFaceCulling = n2.forceDepthWrite, n2.twoSidedLighting = true, [4, r3];
                  case 1:
                    return [2, i2.sent()];
                  case 2:
                    return [2];
                }
              });
            });
          });
        }, e2;
      }();
      Le(En), Re(En, true, function(e2) {
        return new Mn(e2);
      });
      var Fn = "MSFT_sRGBFactors", Pn = function() {
        function e2(e3) {
          this.name = Fn, this._loader = e3, this.enabled = this._loader.isExtensionUsed(Fn);
        }
        return e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadMaterialPropertiesAsync = function(e3, t2, n2) {
          var r2 = this;
          return Ge.LoadExtraAsync(e3, t2, this.name, function(o2, a2) {
            return (0, L.sH)(r2, void 0, void 0, function() {
              var r3, o3, i2;
              return (0, L.YH)(this, function(s2) {
                switch (s2.label) {
                  case 0:
                    return a2 ? (r3 = this._loader._getOrCreateMaterialAdapter(n2), o3 = this._loader.loadMaterialPropertiesAsync(e3, t2, n2), i2 = n2.getScene().getEngine().useExactSrgbConversions, r3.baseColorTexture || r3.baseColor.toLinearSpaceToRef(r3.baseColor, i2), r3.specularColorTexture || r3.specularColor.toLinearSpaceToRef(r3.specularColor, i2), [4, o3]) : [3, 2];
                  case 1:
                    return [2, s2.sent()];
                  case 2:
                    return [2];
                }
              });
            });
          });
        }, e2;
      }();
      function Rn(e2) {
        var t2 = e2.split(":");
        return Ln({ op: t2[0], extension: t2[1] });
      }
      function Ln(e2, t2) {
        var n2;
        void 0 === t2 && (t2 = true);
        var r2 = e2.extension ? null === (n2 = In[e2.extension]) || void 0 === n2 ? void 0 : n2[e2.op] : Sn[e2.op];
        if (!r2 && (g.Logger.Warn("No mapping found for operation ".concat(e2.op, " and extension ").concat(e2.extension || "KHR_interactivity")), t2)) {
          var o2 = {}, a2 = { flows: {} };
          if (e2.inputValueSockets) for (var i2 in o2.values = {}, e2.inputValueSockets) o2.values[i2] = { name: i2 };
          return e2.outputValueSockets && (a2.values = {}, Object.keys(e2.outputValueSockets).forEach(function(e3) {
            a2.values[e3] = { name: e3 };
          })), { blocks: [], inputs: o2, outputs: a2 };
        }
        return r2;
      }
      function Nn(e2, t2, n2) {
        In[t2] || (In[t2] = {}), In[t2][e2] = n2;
      }
      Le(Fn), Re(Fn, true, function(e2) {
        return new Pn(e2);
      });
      var In = { BABYLON: { "flow/log": { blocks: ["FlowGraphConsoleLogBlock"], inputs: { values: { message: { name: "message" } } } } } }, Sn = { "event/onStart": { blocks: ["FlowGraphSceneReadyEventBlock"], outputs: { flows: { out: { name: "done" } } } }, "event/onTick": { blocks: ["FlowGraphSceneTickEventBlock"], inputs: {}, outputs: { values: { timeSinceLastTick: { name: "deltaTime", gltfType: "number" } }, flows: { out: { name: "done" } } } }, "event/send": { blocks: ["FlowGraphSendCustomEventBlock"], extraProcessor: function(e2, t2, n2, r2, o2) {
        if ("event/send" !== t2.op || !e2.configuration || 1 !== Object.keys(e2.configuration).length) throw new Error("Receive event should have a single configuration object, the event itself");
        var a2 = e2.configuration.event.value[0];
        if ("number" != typeof a2) throw new Error("Event id should be a number");
        var i2 = r2.arrays.events[a2], s2 = o2[0];
        return s2.config || (s2.config = {}), s2.config.eventId = i2.eventId, s2.config.eventData = i2.eventData, o2;
      } }, "event/receive": { blocks: ["FlowGraphReceiveCustomEventBlock"], outputs: { flows: { out: { name: "done" } } }, validation: function(e2, t2) {
        var n2;
        if (!e2.configuration) return g.Logger.Error("Receive event should have a configuration object"), { valid: false, error: "Receive event should have a configuration object" };
        var r2 = e2.configuration.event;
        if (!r2) return g.Logger.Error("Receive event should have a single configuration object, the event itself"), { valid: false, error: "Receive event should have a single configuration object, the event itself" };
        var o2 = r2.value[0];
        return "number" != typeof o2 ? (g.Logger.Error("Event id should be a number"), { valid: false, error: "Event id should be a number" }) : (null === (n2 = t2.events) || void 0 === n2 ? void 0 : n2[o2]) ? { valid: true } : (g.Logger.Error("Event with id ".concat(o2, " not found")), { valid: false, error: "Event with id ".concat(o2, " not found") });
      }, extraProcessor: function(e2, t2, n2, r2, o2) {
        if ("event/receive" !== t2.op || !e2.configuration || 1 !== Object.keys(e2.configuration).length) throw new Error("Receive event should have a single configuration object, the event itself");
        var a2 = e2.configuration.event.value[0];
        if ("number" != typeof a2) throw new Error("Event id should be a number");
        var i2 = r2.arrays.events[a2], s2 = o2[0];
        return s2.config || (s2.config = {}), s2.config.eventId = i2.eventId, s2.config.eventData = i2.eventData, o2;
      } }, "math/E": Bn("FlowGraphEBlock"), "math/Pi": Bn("FlowGraphPIBlock"), "math/Inf": Bn("FlowGraphInfBlock"), "math/NaN": Bn("FlowGraphNaNBlock"), "math/abs": Bn("FlowGraphAbsBlock"), "math/sign": Bn("FlowGraphSignBlock"), "math/trunc": Bn("FlowGraphTruncBlock"), "math/floor": Bn("FlowGraphFloorBlock"), "math/ceil": Bn("FlowGraphCeilBlock"), "math/round": { blocks: ["FlowGraphRoundBlock"], configuration: {}, inputs: { values: { a: { name: "a" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2;
        return (a2 = o2[0]).config || (a2.config = {}), o2[0].config.roundHalfAwayFromZero = true, o2;
      } }, "math/fract": Bn("FlowGraphFractBlock"), "math/neg": Bn("FlowGraphNegationBlock"), "math/add": Bn("FlowGraphAddBlock", ["a", "b"], true), "math/sub": Bn("FlowGraphSubtractBlock", ["a", "b"], true), "math/mul": { blocks: ["FlowGraphMultiplyBlock"], extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2;
        (a2 = o2[0]).config || (a2.config = {}), o2[0].config.useMatrixPerComponent = true, o2[0].config.preventIntegerFloatArithmetic = true;
        var i2 = -1;
        return Object.keys(e2.values || {}).find(function(t3) {
          var n3;
          return void 0 !== (null === (n3 = e2.values) || void 0 === n3 ? void 0 : n3[t3].type) && (i2 = e2.values[t3].type, true);
        }), -1 !== i2 && (o2[0].config.type = r2.arrays.types[i2].flowGraphType), o2;
      }, validation: function(e2) {
        return e2.values ? kn(e2) : { valid: true };
      } }, "math/div": Bn("FlowGraphDivideBlock", ["a", "b"], true), "math/rem": Bn("FlowGraphModuloBlock", ["a", "b"]), "math/min": Bn("FlowGraphMinBlock", ["a", "b"]), "math/max": Bn("FlowGraphMaxBlock", ["a", "b"]), "math/clamp": Bn("FlowGraphClampBlock", ["a", "b", "c"]), "math/saturate": Bn("FlowGraphSaturateBlock"), "math/mix": Bn("FlowGraphMathInterpolationBlock", ["a", "b", "c"]), "math/eq": Bn("FlowGraphEqualityBlock", ["a", "b"]), "math/lt": Bn("FlowGraphLessThanBlock", ["a", "b"]), "math/le": Bn("FlowGraphLessThanOrEqualBlock", ["a", "b"]), "math/gt": Bn("FlowGraphGreaterThanBlock", ["a", "b"]), "math/ge": Bn("FlowGraphGreaterThanOrEqualBlock", ["a", "b"]), "math/isNaN": Bn("FlowGraphIsNaNBlock"), "math/isInf": Bn("FlowGraphIsInfBlock"), "math/select": { blocks: ["FlowGraphConditionalBlock"], inputs: { values: { condition: { name: "condition" }, a: { name: "onTrue" }, b: { name: "onFalse" } } }, outputs: { values: { value: { name: "output" } } } }, "math/random": { blocks: ["FlowGraphRandomBlock"], outputs: { values: { value: { name: "value" } } } }, "math/sin": Bn("FlowGraphSinBlock"), "math/cos": Bn("FlowGraphCosBlock"), "math/tan": Bn("FlowGraphTanBlock"), "math/asin": Bn("FlowGraphASinBlock"), "math/acos": Bn("FlowGraphACosBlock"), "math/atan": Bn("FlowGraphATanBlock"), "math/atan2": Bn("FlowGraphATan2Block", ["a", "b"]), "math/sinh": Bn("FlowGraphSinhBlock"), "math/cosh": Bn("FlowGraphCoshBlock"), "math/tanh": Bn("FlowGraphTanhBlock"), "math/asinh": Bn("FlowGraphASinhBlock"), "math/acosh": Bn("FlowGraphACoshBlock"), "math/atanh": Bn("FlowGraphATanhBlock"), "math/exp": Bn("FlowGraphExponentialBlock"), "math/log": Bn("FlowGraphLogBlock"), "math/log2": Bn("FlowGraphLog2Block"), "math/log10": Bn("FlowGraphLog10Block"), "math/sqrt": Bn("FlowGraphSquareRootBlock"), "math/cbrt": Bn("FlowGraphCubeRootBlock"), "math/pow": Bn("FlowGraphPowerBlock", ["a", "b"]), "math/length": Bn("FlowGraphLengthBlock"), "math/normalize": Bn("FlowGraphNormalizeBlock"), "math/dot": Bn("FlowGraphDotBlock", ["a", "b"]), "math/cross": Bn("FlowGraphCrossBlock", ["a", "b"]), "math/rotate2D": { blocks: ["FlowGraphRotate2DBlock"], inputs: { values: { a: { name: "a" }, angle: { name: "b" } } }, outputs: { values: { value: { name: "value" } } } }, "math/rotate3D": { blocks: ["FlowGraphRotate3DBlock"], inputs: { values: { a: { name: "a" }, rotation: { name: "b" } } }, outputs: { values: { value: { name: "value" } } } }, "math/transform": { blocks: ["FlowGraphTransformVectorBlock"], inputs: { values: { a: { name: "a" }, b: { name: "b" } } }, outputs: { values: { value: { name: "value" } } } }, "math/combine2": { blocks: ["FlowGraphCombineVector2Block"], inputs: { values: { a: { name: "input_0", gltfType: "number" }, b: { name: "input_1", gltfType: "number" } } }, outputs: { values: { value: { name: "value" } } } }, "math/combine3": { blocks: ["FlowGraphCombineVector3Block"], inputs: { values: { a: { name: "input_0", gltfType: "number" }, b: { name: "input_1", gltfType: "number" }, c: { name: "input_2", gltfType: "number" } } }, outputs: { values: { value: { name: "value" } } } }, "math/combine4": { blocks: ["FlowGraphCombineVector4Block"], inputs: { values: { a: { name: "input_0", gltfType: "number" }, b: { name: "input_1", gltfType: "number" }, c: { name: "input_2", gltfType: "number" }, d: { name: "input_3", gltfType: "number" } } }, outputs: { values: { value: { name: "value" } } } }, "math/extract2": { blocks: ["FlowGraphExtractVector2Block"], inputs: { values: { a: { name: "input", gltfType: "number" } } }, outputs: { values: { 0: { name: "output_0" }, 1: { name: "output_1" } } } }, "math/extract3": { blocks: ["FlowGraphExtractVector3Block"], inputs: { values: { a: { name: "input", gltfType: "number" } } }, outputs: { values: { 0: { name: "output_0" }, 1: { name: "output_1" }, 2: { name: "output_2" } } } }, "math/extract4": { blocks: ["FlowGraphExtractVector4Block"], inputs: { values: { a: { name: "input", gltfType: "number" } } }, outputs: { values: { 0: { name: "output_0" }, 1: { name: "output_1" }, 2: { name: "output_2" }, 3: { name: "output_3" } } } }, "math/transpose": Bn("FlowGraphTransposeBlock"), "math/determinant": Bn("FlowGraphDeterminantBlock"), "math/inverse": Bn("FlowGraphInvertMatrixBlock"), "math/matMul": Bn("FlowGraphMatrixMultiplicationBlock", ["a", "b"]), "math/matCompose": { blocks: ["FlowGraphMatrixCompose"], inputs: { values: { translation: { name: "position", gltfType: "float3" }, rotation: { name: "rotationQuaternion", gltfType: "float4" }, scale: { name: "scaling", gltfType: "float3" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2, a2) {
        var i2 = o2[0].dataInputs.find(function(e3) {
          return "rotationQuaternion" === e3.name;
        });
        if (!i2) throw new Error("Rotation quaternion input not found");
        return a2._connectionValues[i2.uniqueId] && (a2._connectionValues[i2.uniqueId].type = "Quaternion"), o2;
      } }, "math/matDecompose": { blocks: ["FlowGraphMatrixDecompose"], inputs: { values: { a: { name: "input", gltfType: "number" } } }, outputs: { values: { translation: { name: "position" }, rotation: { name: "rotationQuaternion" }, scale: { name: "scaling" } } } }, "math/quatConjugate": Bn("FlowGraphConjugateBlock", ["a"]), "math/quatMul": { blocks: ["FlowGraphMultiplyBlock"], inputs: { values: { a: { name: "a", gltfType: "vector4" }, b: { name: "b", gltfType: "vector4" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2;
        return (a2 = o2[0]).config || (a2.config = {}), o2[0].config.type = "Quaternion", o2;
      } }, "math/quatAngleBetween": Bn("FlowGraphAngleBetweenBlock", ["a", "b"]), "math/quatFromAxisAngle": { blocks: ["FlowGraphQuaternionFromAxisAngleBlock"], inputs: { values: { axis: { name: "a", gltfType: "float3" }, angle: { name: "b", gltfType: "number" } } }, outputs: { values: { value: { name: "value" } } } }, "math/quatToAxisAngle": Bn("FlowGraphAxisAngleFromQuaternionBlock", ["a"]), "math/quatFromDirections": Bn("FlowGraphQuaternionFromDirectionsBlock", ["a", "b"]), "math/combine2x2": { blocks: ["FlowGraphCombineMatrix2DBlock"], inputs: { values: { a: { name: "input_0", gltfType: "number" }, b: { name: "input_1", gltfType: "number" }, c: { name: "input_2", gltfType: "number" }, d: { name: "input_3", gltfType: "number" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2;
        return (a2 = o2[0]).config || (a2.config = {}), o2[0].config.inputIsColumnMajor = true, o2;
      } }, "math/extract2x2": { blocks: ["FlowGraphExtractMatrix2DBlock"], inputs: { values: { a: { name: "input", gltfType: "float2x2" } } }, outputs: { values: { 0: { name: "output_0" }, 1: { name: "output_1" }, 2: { name: "output_2" }, 3: { name: "output_3" } } } }, "math/combine3x3": { blocks: ["FlowGraphCombineMatrix3DBlock"], inputs: { values: { a: { name: "input_0", gltfType: "number" }, b: { name: "input_1", gltfType: "number" }, c: { name: "input_2", gltfType: "number" }, d: { name: "input_3", gltfType: "number" }, e: { name: "input_4", gltfType: "number" }, f: { name: "input_5", gltfType: "number" }, g: { name: "input_6", gltfType: "number" }, h: { name: "input_7", gltfType: "number" }, i: { name: "input_8", gltfType: "number" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2;
        return (a2 = o2[0]).config || (a2.config = {}), o2[0].config.inputIsColumnMajor = true, o2;
      } }, "math/extract3x3": { blocks: ["FlowGraphExtractMatrix3DBlock"], inputs: { values: { a: { name: "input", gltfType: "float3x3" } } }, outputs: { values: { 0: { name: "output_0" }, 1: { name: "output_1" }, 2: { name: "output_2" }, 3: { name: "output_3" }, 4: { name: "output_4" }, 5: { name: "output_5" }, 6: { name: "output_6" }, 7: { name: "output_7" }, 8: { name: "output_8" } } } }, "math/combine4x4": { blocks: ["FlowGraphCombineMatrixBlock"], inputs: { values: { a: { name: "input_0", gltfType: "number" }, b: { name: "input_1", gltfType: "number" }, c: { name: "input_2", gltfType: "number" }, d: { name: "input_3", gltfType: "number" }, e: { name: "input_4", gltfType: "number" }, f: { name: "input_5", gltfType: "number" }, g: { name: "input_6", gltfType: "number" }, h: { name: "input_7", gltfType: "number" }, i: { name: "input_8", gltfType: "number" }, j: { name: "input_9", gltfType: "number" }, k: { name: "input_10", gltfType: "number" }, l: { name: "input_11", gltfType: "number" }, m: { name: "input_12", gltfType: "number" }, n: { name: "input_13", gltfType: "number" }, o: { name: "input_14", gltfType: "number" }, p: { name: "input_15", gltfType: "number" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2;
        return (a2 = o2[0]).config || (a2.config = {}), o2[0].config.inputIsColumnMajor = true, o2;
      } }, "math/extract4x4": { blocks: ["FlowGraphExtractMatrixBlock"], configuration: {}, inputs: { values: { a: { name: "input", gltfType: "number" } } }, outputs: { values: { 0: { name: "output_0" }, 1: { name: "output_1" }, 2: { name: "output_2" }, 3: { name: "output_3" }, 4: { name: "output_4" }, 5: { name: "output_5" }, 6: { name: "output_6" }, 7: { name: "output_7" }, 8: { name: "output_8" }, 9: { name: "output_9" }, 10: { name: "output_10" }, 11: { name: "output_11" }, 12: { name: "output_12" }, 13: { name: "output_13" }, 14: { name: "output_14" }, 15: { name: "output_15" } } } }, "math/not": { blocks: ["FlowGraphBitwiseNotBlock"], inputs: { values: { a: { name: "a" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2, a2) {
        var i2, s2, l2;
        (l2 = o2[0]).config || (l2.config = {});
        var u2 = o2[0].dataInputs[0];
        return o2[0].config.valueType = null !== (s2 = null === (i2 = a2._connectionValues[u2.uniqueId]) || void 0 === i2 ? void 0 : i2.type) && void 0 !== s2 ? s2 : "FlowGraphInteger", o2;
      } }, "math/and": { blocks: ["FlowGraphBitwiseAndBlock"], inputs: { values: { a: { name: "a" }, b: { name: "b" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2, a2) {
        var i2, s2, l2, u2, c2;
        (c2 = o2[0]).config || (c2.config = {});
        var f2 = o2[0].dataInputs[0], h2 = o2[0].dataInputs[1];
        return o2[0].config.valueType = null !== (u2 = null !== (s2 = null === (i2 = a2._connectionValues[f2.uniqueId]) || void 0 === i2 ? void 0 : i2.type) && void 0 !== s2 ? s2 : null === (l2 = a2._connectionValues[h2.uniqueId]) || void 0 === l2 ? void 0 : l2.type) && void 0 !== u2 ? u2 : "FlowGraphInteger", o2;
      } }, "math/or": { blocks: ["FlowGraphBitwiseOrBlock"], inputs: { values: { a: { name: "a" }, b: { name: "b" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2, a2) {
        var i2, s2, l2, u2, c2;
        (c2 = o2[0]).config || (c2.config = {});
        var f2 = o2[0].dataInputs[0], h2 = o2[0].dataInputs[1];
        return o2[0].config.valueType = null !== (u2 = null !== (s2 = null === (i2 = a2._connectionValues[f2.uniqueId]) || void 0 === i2 ? void 0 : i2.type) && void 0 !== s2 ? s2 : null === (l2 = a2._connectionValues[h2.uniqueId]) || void 0 === l2 ? void 0 : l2.type) && void 0 !== u2 ? u2 : "FlowGraphInteger", o2;
      } }, "math/xor": { blocks: ["FlowGraphBitwiseXorBlock"], inputs: { values: { a: { name: "a" }, b: { name: "b" } } }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e2, t2, n2, r2, o2, a2) {
        var i2, s2, l2, u2, c2;
        (c2 = o2[0]).config || (c2.config = {});
        var f2 = o2[0].dataInputs[0], h2 = o2[0].dataInputs[1];
        return o2[0].config.valueType = null !== (u2 = null !== (s2 = null === (i2 = a2._connectionValues[f2.uniqueId]) || void 0 === i2 ? void 0 : i2.type) && void 0 !== s2 ? s2 : null === (l2 = a2._connectionValues[h2.uniqueId]) || void 0 === l2 ? void 0 : l2.type) && void 0 !== u2 ? u2 : "FlowGraphInteger", o2;
      } }, "math/asr": Bn("FlowGraphBitwiseRightShiftBlock", ["a", "b"]), "math/lsl": Bn("FlowGraphBitwiseLeftShiftBlock", ["a", "b"]), "math/clz": Bn("FlowGraphLeadingZerosBlock"), "math/ctz": Bn("FlowGraphTrailingZerosBlock"), "math/popcnt": Bn("FlowGraphOneBitsCounterBlock"), "math/rad": Bn("FlowGraphDegToRadBlock"), "math/deg": Bn("FlowGraphRadToDegBlock"), "type/boolToInt": Bn("FlowGraphBooleanToInt"), "type/boolToFloat": Bn("FlowGraphBooleanToFloat"), "type/intToBool": Bn("FlowGraphIntToBoolean"), "type/intToFloat": Bn("FlowGraphIntToFloat"), "type/floatToInt": Bn("FlowGraphFloatToInt"), "type/floatToBool": Bn("FlowGraphFloatToBoolean"), "flow/sequence": { blocks: ["FlowGraphSequenceBlock"], extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2 = o2[0];
        return a2.config || (a2.config = {}), a2.config.outputSignalCount = Object.keys(e2.flows || []).length, a2.signalOutputs.forEach(function(e3, t3) {
          e3.name = "out_" + t3;
        }), o2;
      } }, "flow/branch": { blocks: ["FlowGraphBranchBlock"], outputs: { flows: { true: { name: "onTrue" }, false: { name: "onFalse" } } } }, "flow/switch": { blocks: ["FlowGraphSwitchBlock"], configuration: { cases: { name: "cases", inOptions: true, defaultValue: [] } }, inputs: { values: { selection: { name: "case" }, default: { name: "default" } } }, validation: function(e2) {
        if (e2.configuration && e2.configuration.cases) {
          var t2 = e2.configuration.cases.value;
          if (!t2.every(function(e3) {
            return "number" == typeof e3 && /^-?\d+$/.test(e3.toString());
          })) return g.Logger.Warn("Switch cases should be integers. Using empty array instead."), e2.configuration.cases.value = [], { valid: true };
          var n2 = new Set(t2);
          e2.configuration.cases.value = Array.from(n2);
        }
        return { valid: true };
      }, extraProcessor: function(e2, t2, n2, r2, o2) {
        if ("flow/switch" !== t2.op || !e2.flows || 0 === Object.keys(e2.flows).length) throw new Error("Switch should have a single configuration object, the cases array");
        return o2[0].signalOutputs.forEach(function(e3) {
          "default" !== e3.name && (e3.name = "out_" + e3.name);
        }), o2;
      } }, "flow/while": { blocks: ["FlowGraphWhileLoopBlock"], outputs: { flows: { loopBody: { name: "executionFlow" } } } }, "flow/for": { blocks: ["FlowGraphForLoopBlock"], configuration: { initialIndex: { name: "initialIndex", gltfType: "number", inOptions: true, defaultValue: 0 } }, inputs: { values: { startIndex: { name: "startIndex", gltfType: "number" }, endIndex: { name: "endIndex", gltfType: "number" } } }, outputs: { values: { index: { name: "index" } }, flows: { loopBody: { name: "executionFlow" } } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2 = o2[0];
        return a2.config || (a2.config = {}), a2.config.incrementIndexWhenLoopDone = true, o2;
      } }, "flow/doN": { blocks: ["FlowGraphDoNBlock"], configuration: {}, inputs: { values: { n: { name: "maxExecutions", gltfType: "number" } } }, outputs: { values: { currentCount: { name: "executionCount" } } } }, "flow/multiGate": { blocks: ["FlowGraphMultiGateBlock"], configuration: { isRandom: { name: "isRandom", gltfType: "boolean", inOptions: true, defaultValue: false }, isLoop: { name: "isLoop", gltfType: "boolean", inOptions: true, defaultValue: false } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        if ("flow/multiGate" !== t2.op || !e2.flows || 0 === Object.keys(e2.flows).length) throw new Error("MultiGate should have a single configuration object, the number of output flows");
        var a2 = o2[0];
        return a2.config || (a2.config = {}), a2.config.outputSignalCount = Object.keys(e2.flows).length, a2.signalOutputs.forEach(function(e3, t3) {
          e3.name = "out_" + t3;
        }), o2;
      } }, "flow/waitAll": { blocks: ["FlowGraphWaitAllBlock"], configuration: { inputFlows: { name: "inputSignalCount", gltfType: "number", inOptions: true, defaultValue: 0 } }, inputs: { flows: { reset: { name: "reset" }, "[segment]": { name: "in_$1" } } }, validation: function(e2) {
        var t2, n2;
        return "number" != typeof (null === (n2 = null === (t2 = e2.configuration) || void 0 === t2 ? void 0 : t2.inputFlows) || void 0 === n2 ? void 0 : n2.value[0]) && (e2.configuration = e2.configuration || { inputFlows: { value: [0] } }, e2.configuration.inputFlows.value = [0]), { valid: true };
      } }, "flow/throttle": { blocks: ["FlowGraphThrottleBlock"], outputs: { flows: { err: { name: "error" } } } }, "flow/setDelay": { blocks: ["FlowGraphSetDelayBlock"], outputs: { flows: { err: { name: "error" } } } }, "flow/cancelDelay": { blocks: ["FlowGraphCancelDelayBlock"] }, "variable/get": { blocks: ["FlowGraphGetVariableBlock"], validation: function(e2) {
        var t2, n2;
        return (null === (n2 = null === (t2 = e2.configuration) || void 0 === t2 ? void 0 : t2.variable) || void 0 === n2 ? void 0 : n2.value) ? { valid: true } : (g.Logger.Error("Variable get block should have a variable configuration"), { valid: false, error: "Variable get block should have a variable configuration" });
      }, configuration: { variable: { name: "variable", gltfType: "number", flowGraphType: "string", inOptions: true, isVariable: true, dataTransformer: function(e2, t2) {
        return [t2.getVariableName(e2[0])];
      } } } }, "variable/set": { blocks: ["FlowGraphSetVariableBlock"], configuration: { variable: { name: "variable", gltfType: "number", flowGraphType: "string", inOptions: true, isVariable: true, dataTransformer: function(e2, t2) {
        return [t2.getVariableName(e2[0])];
      } } } }, "variable/setMultiple": { blocks: ["FlowGraphSetVariableBlock"], configuration: { variables: { name: "variables", gltfType: "number", flowGraphType: "string", inOptions: true, dataTransformer: function(e2, t2) {
        return [e2[0].map(function(e3) {
          return t2.getVariableName(e3);
        })];
      } } }, extraProcessor: function(e2, t2, n2, r2, o2) {
        return o2[0].dataInputs.forEach(function(e3) {
          e3.name = r2.getVariableName(+e3.name);
        }), o2;
      } }, "variable/interpolate": { blocks: ["FlowGraphInterpolationBlock", "FlowGraphContextBlock", "FlowGraphPlayAnimationBlock", "FlowGraphBezierCurveEasing", "FlowGraphGetVariableBlock"], configuration: { variable: { name: "propertyName", inOptions: true, isVariable: true, dataTransformer: function(e2, t2) {
        return [t2.getVariableName(e2[0])];
      } }, useSlerp: { name: "animationType", inOptions: true, defaultValue: false, dataTransformer: function(e2) {
        return true === e2[0] ? ["Quaternion"] : [void 0];
      } } }, inputs: { values: { value: { name: "value_1" }, duration: { name: "duration_1", gltfType: "number" }, p1: { name: "controlPoint1", toBlock: "FlowGraphBezierCurveEasing" }, p2: { name: "controlPoint2", toBlock: "FlowGraphBezierCurveEasing" } }, flows: { in: { name: "in", toBlock: "FlowGraphPlayAnimationBlock" } } }, outputs: { flows: { err: { name: "error", toBlock: "FlowGraphPlayAnimationBlock" }, out: { name: "out", toBlock: "FlowGraphPlayAnimationBlock" }, done: { name: "done", toBlock: "FlowGraphPlayAnimationBlock" } } }, interBlockConnectors: [{ input: "object", output: "userVariables", inputBlockIndex: 2, outputBlockIndex: 1, isVariable: true }, { input: "animation", output: "animation", inputBlockIndex: 2, outputBlockIndex: 0, isVariable: true }, { input: "easingFunction", output: "easingFunction", inputBlockIndex: 0, outputBlockIndex: 3, isVariable: true }, { input: "value_0", output: "value", inputBlockIndex: 0, outputBlockIndex: 4, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2, i2, s2, l2 = o2[0], u2 = null === (a2 = e2.configuration) || void 0 === a2 ? void 0 : a2.variable.value[0];
        if ("number" != typeof u2) throw g.Logger.Error("Variable index is not defined for variable interpolation block"), new Error("Variable index is not defined for variable interpolation block");
        var c2 = r2.arrays.staticVariables[u2];
        void 0 === l2.config.animationType.value && (r2.arrays.staticVariables, l2.config.animationType.value = (0, g.getAnimationTypeByFlowGraphType)(c2.type));
        var f2 = o2[4];
        return f2.config || (f2.config = {}), (i2 = f2.config).variable || (i2.variable = {}), f2.config.variable.value = r2.getVariableName(u2), (s2 = o2[3]).config || (s2.config = {}), o2;
      } }, "pointer/get": { blocks: ["FlowGraphGetPropertyBlock", "FlowGraphJsonPointerParserBlock"], configuration: { pointer: { name: "jsonPointer", toBlock: "FlowGraphJsonPointerParserBlock" } }, inputs: { values: { "[segment]": { name: "$1", toBlock: "FlowGraphJsonPointerParserBlock" } } }, interBlockConnectors: [{ input: "object", output: "object", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "propertyName", output: "propertyName", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "customGetFunction", output: "getFunction", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2) {
        return o2.forEach(function(e3) {
          "FlowGraphJsonPointerParserBlock" === e3.className && (e3.config || (e3.config = {}), e3.config.outputValue = true);
        }), o2;
      } }, "pointer/set": { blocks: ["FlowGraphSetPropertyBlock", "FlowGraphJsonPointerParserBlock"], configuration: { pointer: { name: "jsonPointer", toBlock: "FlowGraphJsonPointerParserBlock" } }, inputs: { values: { value: { name: "value" }, "[segment]": { name: "$1", toBlock: "FlowGraphJsonPointerParserBlock" } } }, outputs: { flows: { err: { name: "error" } } }, interBlockConnectors: [{ input: "object", output: "object", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "propertyName", output: "propertyName", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "customSetFunction", output: "setFunction", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2) {
        return o2.forEach(function(e3) {
          "FlowGraphJsonPointerParserBlock" === e3.className && (e3.config || (e3.config = {}), e3.config.outputValue = true);
        }), o2;
      } }, "pointer/interpolate": { blocks: ["FlowGraphInterpolationBlock", "FlowGraphJsonPointerParserBlock", "FlowGraphPlayAnimationBlock", "FlowGraphBezierCurveEasing"], configuration: { pointer: { name: "jsonPointer", toBlock: "FlowGraphJsonPointerParserBlock" } }, inputs: { values: { value: { name: "value_1" }, "[segment]": { name: "$1", toBlock: "FlowGraphJsonPointerParserBlock" }, duration: { name: "duration_1", gltfType: "number" }, p1: { name: "controlPoint1", toBlock: "FlowGraphBezierCurveEasing" }, p2: { name: "controlPoint2", toBlock: "FlowGraphBezierCurveEasing" } }, flows: { in: { name: "in", toBlock: "FlowGraphPlayAnimationBlock" } } }, outputs: { flows: { err: { name: "error", toBlock: "FlowGraphPlayAnimationBlock" }, out: { name: "out", toBlock: "FlowGraphPlayAnimationBlock" }, done: { name: "done", toBlock: "FlowGraphPlayAnimationBlock" } } }, interBlockConnectors: [{ input: "object", output: "object", inputBlockIndex: 2, outputBlockIndex: 1, isVariable: true }, { input: "propertyName", output: "propertyName", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "customBuildAnimation", output: "generateAnimationsFunction", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "animation", output: "animation", inputBlockIndex: 2, outputBlockIndex: 0, isVariable: true }, { input: "easingFunction", output: "easingFunction", inputBlockIndex: 0, outputBlockIndex: 3, isVariable: true }, { input: "value_0", output: "value", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2) {
        return o2.forEach(function(t3) {
          "FlowGraphJsonPointerParserBlock" === t3.className ? (t3.config || (t3.config = {}), t3.config.outputValue = true) : "FlowGraphInterpolationBlock" === t3.className && (t3.config || (t3.config = {}), Object.keys(e2.values || []).forEach(function(n3) {
            var o3, a2 = null === (o3 = e2.values) || void 0 === o3 ? void 0 : o3[n3];
            if ("value" === n3 && a2) {
              var i2 = a2.type;
              void 0 !== i2 && (t3.config.animationType = r2.arrays.types[i2].flowGraphType);
            }
          }));
        }), o2;
      } }, "animation/start": { blocks: ["FlowGraphPlayAnimationBlock", "FlowGraphArrayIndexBlock", "KHR_interactivity/FlowGraphGLTFDataProvider"], inputs: { values: { animation: { name: "index", gltfType: "number", toBlock: "FlowGraphArrayIndexBlock" }, speed: { name: "speed", gltfType: "number" }, startTime: { name: "from", gltfType: "number", dataTransformer: function(e2, t2) {
        return [e2[0] * t2._animationTargetFps];
      } }, endTime: { name: "to", gltfType: "number", dataTransformer: function(e2, t2) {
        return [e2[0] * t2._animationTargetFps];
      } } } }, outputs: { flows: { err: { name: "error" } } }, interBlockConnectors: [{ input: "animationGroup", output: "value", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "array", output: "animationGroups", inputBlockIndex: 1, outputBlockIndex: 2, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2, a2, i2) {
        var s2 = o2[o2.length - 1];
        return s2.config || (s2.config = {}), s2.config.glTF = i2, o2;
      } }, "animation/stop": { blocks: ["FlowGraphStopAnimationBlock", "FlowGraphArrayIndexBlock", "KHR_interactivity/FlowGraphGLTFDataProvider"], inputs: { values: { animation: { name: "index", gltfType: "number", toBlock: "FlowGraphArrayIndexBlock" } } }, outputs: { flows: { err: { name: "error" } } }, interBlockConnectors: [{ input: "animationGroup", output: "value", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "array", output: "animationGroups", inputBlockIndex: 1, outputBlockIndex: 2, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2, a2, i2) {
        var s2 = o2[o2.length - 1];
        return s2.config || (s2.config = {}), s2.config.glTF = i2, o2;
      } }, "animation/stopAt": { blocks: ["FlowGraphStopAnimationBlock", "FlowGraphArrayIndexBlock", "KHR_interactivity/FlowGraphGLTFDataProvider"], configuration: {}, inputs: { values: { animation: { name: "index", gltfType: "number", toBlock: "FlowGraphArrayIndexBlock" }, stopTime: { name: "stopAtFrame", gltfType: "number", dataTransformer: function(e2, t2) {
        return [e2[0] * t2._animationTargetFps];
      } } } }, outputs: { flows: { err: { name: "error" } } }, interBlockConnectors: [{ input: "animationGroup", output: "value", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "array", output: "animationGroups", inputBlockIndex: 1, outputBlockIndex: 2, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2, a2, i2) {
        var s2 = o2[o2.length - 1];
        return s2.config || (s2.config = {}), s2.config.glTF = i2, o2;
      } }, "math/switch": { blocks: ["FlowGraphDataSwitchBlock"], configuration: { cases: { name: "cases", inOptions: true, defaultValue: [] } }, inputs: { values: { selection: { name: "case" } } }, validation: function(e2) {
        if (e2.configuration && e2.configuration.cases) {
          var t2 = e2.configuration.cases.value;
          if (!t2.every(function(e3) {
            return "number" == typeof e3 && /^-?\d+$/.test(e3.toString());
          })) return g.Logger.Warn("Switch cases should be integers. Using empty array instead."), e2.configuration.cases.value = [], { valid: true };
          var n2 = new Set(t2);
          e2.configuration.cases.value = Array.from(n2);
        }
        return { valid: true };
      }, extraProcessor: function(e2, t2, n2, r2, o2) {
        var a2 = o2[0];
        return a2.dataInputs.forEach(function(e3) {
          "default" !== e3.name && "case" !== e3.name && (e3.name = "in_" + e3.name);
        }), a2.config || (a2.config = {}), a2.config.treatCasesAsIntegers = true, o2;
      } }, "debug/log": { blocks: ["FlowGraphConsoleLogBlock"], configuration: { message: { name: "messageTemplate", inOptions: true } } } };
      function Bn(e2, t2, n2) {
        return void 0 === t2 && (t2 = ["a"]), { blocks: [e2], inputs: { values: t2.reduce(function(e3, t3) {
          return e3[t3] = { name: t3 }, e3;
        }, {}) }, outputs: { values: { value: { name: "value" } } }, extraProcessor: function(e3, t3, r2, o2, a2) {
          var i2;
          if (n2) {
            (i2 = a2[0]).config || (i2.config = {}), a2[0].config.preventIntegerFloatArithmetic = true;
            var s2 = -1;
            Object.keys(e3.values || {}).find(function(t4) {
              var n3;
              return void 0 !== (null === (n3 = e3.values) || void 0 === n3 ? void 0 : n3[t4].type) && (s2 = e3.values[t4].type, true);
            }), -1 !== s2 && (a2[0].config.type = o2.arrays.types[s2].flowGraphType);
          }
          return a2;
        }, validation: function(e3) {
          return n2 ? kn(e3) : { valid: true };
        } };
      }
      function kn(e2) {
        if (e2.values) {
          var t2 = Object.keys(e2.values).map(function(t3) {
            return e2.values[t3].type;
          }).filter(function(e3) {
            return void 0 !== e3;
          });
          if (!t2.every(function(e3) {
            return e3 === t2[0];
          })) return { valid: false, error: "All inputs must be of the same type" };
        }
        return { valid: true };
      }
      function Gn() {
        return Object.keys(Sn);
      }
      var Vn = { float: { length: 1, flowGraphType: "number", elementType: "number" }, bool: { length: 1, flowGraphType: "boolean", elementType: "boolean" }, float2: { length: 2, flowGraphType: "Vector2", elementType: "number" }, float3: { length: 3, flowGraphType: "Vector3", elementType: "number" }, float4: { length: 4, flowGraphType: "Vector4", elementType: "number" }, float4x4: { length: 16, flowGraphType: "Matrix", elementType: "number" }, float2x2: { length: 4, flowGraphType: "Matrix2D", elementType: "number" }, float3x3: { length: 9, flowGraphType: "Matrix3D", elementType: "number" }, int: { length: 1, flowGraphType: "FlowGraphInteger", elementType: "number" } }, Dn = function() {
        function e2(e3, t2, n2) {
          void 0 === n2 && (n2 = 60), this._interactivityGraph = e3, this._gltf = t2, this._animationTargetFps = n2, this._types = [], this._mappings = [], this._staticVariables = [], this._events = [], this._internalEventsCounter = 0, this._nodes = [], this._parseTypes(), this._parseDeclarations(), this._parseVariables(), this._parseEvents(), this._parseNodes();
        }
        return Object.defineProperty(e2.prototype, "arrays", { get: function() {
          return { types: this._types, mappings: this._mappings, staticVariables: this._staticVariables, events: this._events, nodes: this._nodes };
        }, enumerable: false, configurable: true }), e2.prototype._parseTypes = function() {
          if (this._interactivityGraph.types) for (var e3 = 0, t2 = this._interactivityGraph.types; e3 < t2.length; e3++) {
            var n2 = t2[e3];
            this._types.push(Vn[n2.signature]);
          }
        }, e2.prototype._parseDeclarations = function() {
          if (this._interactivityGraph.declarations) for (var e3 = 0, t2 = this._interactivityGraph.declarations; e3 < t2.length; e3++) {
            var n2 = t2[e3], r2 = Ln(n2);
            if (!r2) throw g.Logger.Error(["No mapping found for declaration", n2]), new Error("Error parsing declarations");
            this._mappings.push({ flowGraphMapping: r2, fullOperationName: n2.extension ? n2.op + ":" + n2.extension : n2.op });
          }
        }, e2.prototype._parseVariables = function() {
          if (this._interactivityGraph.variables) for (var e3 = 0, t2 = this._interactivityGraph.variables; e3 < t2.length; e3++) {
            var n2 = t2[e3], r2 = this._parseVariable(n2);
            this._staticVariables.push(r2);
          }
        }, e2.prototype._parseVariable = function(e3, t2) {
          var n2 = this._types[e3.type];
          if (!n2) throw g.Logger.Error(["No type found for variable", e3]), new Error("Error parsing variables");
          if (e3.value && e3.value.length !== n2.length) throw g.Logger.Error(["Invalid value length for variable", e3, n2]), new Error("Error parsing variables");
          var r2 = e3.value || [];
          if (!r2.length) switch (n2.flowGraphType) {
            case "boolean":
              r2.push(false);
              break;
            case "FlowGraphInteger":
              r2.push(0);
              break;
            case "number":
              r2.push(NaN);
              break;
            case "Vector2":
              r2.push(NaN, NaN);
              break;
            case "Vector3":
              r2.push(NaN, NaN, NaN);
              break;
            case "Vector4":
            case "Matrix2D":
            case "Quaternion":
              r2.fill(NaN, 0, 4);
              break;
            case "Matrix":
              r2.fill(NaN, 0, 16);
              break;
            case "Matrix3D":
              r2.fill(NaN, 0, 9);
          }
          return "number" === n2.elementType && "string" == typeof r2[0] && (r2[0] = parseFloat(r2[0])), { type: n2.flowGraphType, value: t2 ? t2(r2, this) : r2 };
        }, e2.prototype._parseEvents = function() {
          var e3 = this;
          if (this._interactivityGraph.events) for (var t2 = function(t3) {
            var r3 = { eventId: t3.id || "internalEvent_" + n2._internalEventsCounter++ };
            t3.values && (r3.eventData = Object.keys(t3.values).map(function(n3) {
              var r4, o3 = null === (r4 = t3.values) || void 0 === r4 ? void 0 : r4[n3];
              if (!o3) throw g.Logger.Error(["No value found for event key", n3]), new Error("Error parsing events");
              var a2 = e3._types[o3.type];
              if (!a2) throw g.Logger.Error(["No type found for event value", o3]), new Error("Error parsing events");
              var i2 = void 0 !== o3.value ? e3._parseVariable(o3) : void 0;
              return { id: n3, type: a2.flowGraphType, eventData: true, value: i2 };
            })), n2._events.push(r3);
          }, n2 = this, r2 = 0, o2 = this._interactivityGraph.events; r2 < o2.length; r2++) t2(o2[r2]);
        }, e2.prototype._parseNodes = function() {
          var e3;
          if (this._interactivityGraph.nodes) for (var t2 = 0, n2 = this._interactivityGraph.nodes; t2 < n2.length; t2++) {
            var r2 = n2[t2];
            if ("number" != typeof r2.declaration) throw g.Logger.Error(["No declaration found for node", r2]), new Error("Error parsing nodes");
            var o2 = this._mappings[r2.declaration];
            if (!o2) throw g.Logger.Error(["No mapping found for node", r2]), new Error("Error parsing nodes");
            if (o2.flowGraphMapping.validation) {
              var a2 = o2.flowGraphMapping.validation(r2, this._interactivityGraph, this._gltf);
              if (!a2.valid) throw new Error("Error validating interactivity node ".concat(null === (e3 = this._interactivityGraph.declarations) || void 0 === e3 ? void 0 : e3[r2.declaration].op, " - ").concat(a2.error));
            }
            for (var i2 = [], s2 = 0, l2 = o2.flowGraphMapping.blocks; s2 < l2.length; s2++) {
              var u2 = l2[s2], c2 = this._getEmptyBlock(u2, o2.fullOperationName);
              this._parseNodeConfiguration(r2, c2, o2.flowGraphMapping, u2), i2.push(c2);
            }
            this._nodes.push({ blocks: i2, fullOperationName: o2.fullOperationName });
          }
        }, e2.prototype._getEmptyBlock = function(e3, t2) {
          return { uniqueId: (0, g.RandomGUID)(), className: e3, dataInputs: [], dataOutputs: [], signalInputs: [], signalOutputs: [], config: {}, type: t2, metadata: {} };
        }, e2.prototype._parseNodeConfiguration = function(e3, t2, n2, r2) {
          var o2, a2, i2 = t2.config;
          if (e3.configuration) for (var s2 = 0, l2 = Object.keys(e3.configuration); s2 < l2.length; s2++) {
            var u2 = l2[s2], c2 = null === (o2 = e3.configuration) || void 0 === o2 ? void 0 : o2[u2];
            if (!c2) throw g.Logger.Error(["No value found for node configuration", u2]), new Error("Error parsing node configuration");
            var f2 = null === (a2 = n2.configuration) || void 0 === a2 ? void 0 : a2[u2];
            if (f2 && f2.toBlock ? f2.toBlock === r2 : 0 === n2.blocks.indexOf(r2)) {
              var h2 = (null == f2 ? void 0 : f2.name) || u2;
              c2 && void 0 !== c2.value || void 0 === (null == f2 ? void 0 : f2.defaultValue) ? c2.value.length >= 0 ? i2[h2] = { value: 1 === c2.value.length ? c2.value[0] : c2.value } : g.Logger.Warn(["Invalid value for node configuration", c2]) : i2[h2] = { value: f2.defaultValue }, f2 && f2.dataTransformer && (i2[h2].value = f2.dataTransformer([i2[h2].value], this)[0]);
            }
          }
        }, e2.prototype._parseNodeConnections = function(e3) {
          for (var t2, n2, r2, o2, a2, i2, s2, l2, u2, c2, f2, h2, p2, d2, m2, _2, y2, b2, v2, T2 = 0; T2 < this._nodes.length; T2++) {
            var x2 = null === (t2 = this._interactivityGraph.nodes) || void 0 === t2 ? void 0 : t2[T2];
            if (!x2) throw g.Logger.Error(["No node found for interactivity node", this._nodes[T2]]), new Error("Error parsing node connections");
            var A2 = this._nodes[T2], w2 = this._mappings[x2.declaration];
            if (!w2) throw g.Logger.Error(["No mapping found for node", x2]), new Error("Error parsing node connections");
            for (var O2 = x2.flows || {}, C2 = Object.keys(O2).sort(), E2 = function(e4) {
              var t3 = O2[e4], u3 = null === (r2 = null === (n2 = w2.flowGraphMapping.outputs) || void 0 === n2 ? void 0 : n2.flows) || void 0 === r2 ? void 0 : r2[e4], c3 = (null == u3 ? void 0 : u3.name) || e4, f3 = M2._createNewSocketConnection(c3, true);
              (u3 && u3.toBlock && A2.blocks.find(function(e5) {
                return e5.className === u3.toBlock;
              }) || A2.blocks[0]).signalOutputs.push(f3);
              var h3 = t3.node, p3 = M2._nodes[h3];
              if (!p3) throw g.Logger.Error(["No node found for input node id", h3]), new Error("Error parsing node connections");
              var d3 = Rn(p3.fullOperationName);
              if (!d3) throw g.Logger.Error(["No mapping found for input node", p3]), new Error("Error parsing node connections");
              var m3 = null === (a2 = null === (o2 = d3.inputs) || void 0 === o2 ? void 0 : o2.flows) || void 0 === a2 ? void 0 : a2[t3.socket || "in"], _3 = false;
              if (!m3) for (var y3 in null === (i2 = d3.inputs) || void 0 === i2 ? void 0 : i2.flows) y3.startsWith("[") && y3.endsWith("]") && (_3 = true, m3 = null === (l2 = null === (s2 = d3.inputs) || void 0 === s2 ? void 0 : s2.flows) || void 0 === l2 ? void 0 : l2[y3]);
              var b3 = m3 ? _3 ? m3.name.replace("$1", t3.socket || "") : m3.name : t3.socket || "in", v3 = m3 && m3.toBlock && p3.blocks.find(function(e5) {
                return e5.className === m3.toBlock;
              }) || p3.blocks[0], T3 = v3.signalInputs.find(function(e5) {
                return e5.name === b3;
              });
              T3 || (T3 = M2._createNewSocketConnection(b3), v3.signalInputs.push(T3)), T3.connectedPointIds.push(f3.uniqueId), f3.connectedPointIds.push(T3.uniqueId);
            }, M2 = this, F2 = 0, P2 = C2; F2 < P2.length; F2++) E2(P2[F2]);
            for (var R2 = x2.values || {}, L2 = Object.keys(R2), N2 = function(t3) {
              var n3 = R2[t3], r3 = null === (c2 = null === (u2 = w2.flowGraphMapping.inputs) || void 0 === u2 ? void 0 : u2.values) || void 0 === c2 ? void 0 : c2[t3], o3 = false;
              if (!r3) for (var a3 in null === (f2 = w2.flowGraphMapping.inputs) || void 0 === f2 ? void 0 : f2.values) a3.startsWith("[") && a3.endsWith("]") && (o3 = true, r3 = null === (p2 = null === (h2 = w2.flowGraphMapping.inputs) || void 0 === h2 ? void 0 : h2.values) || void 0 === p2 ? void 0 : p2[a3]);
              var i3 = r3 ? o3 ? r3.name.replace("$1", t3) : r3.name : t3, s3 = I2._createNewSocketConnection(i3);
              if ((r3 && r3.toBlock && A2.blocks.find(function(e4) {
                return e4.className === r3.toBlock;
              }) || A2.blocks[0]).dataInputs.push(s3), void 0 !== n3.value) {
                var l3 = I2._parseVariable(n3, r3 && r3.dataTransformer);
                e3._connectionValues[s3.uniqueId] = l3;
              } else {
                if (void 0 === n3.node) throw g.Logger.Error(["Invalid value for value connection", n3]), new Error("Error parsing node connections");
                var v3 = n3.node, T3 = n3.socket || "value", x3 = I2._nodes[v3];
                if (!x3) throw g.Logger.Error(["No node found for output socket reference", n3]), new Error("Error parsing node connections");
                var O3 = Rn(x3.fullOperationName);
                if (!O3) throw g.Logger.Error(["No mapping found for output socket reference", n3]), new Error("Error parsing node connections");
                var C3 = null === (m2 = null === (d2 = O3.outputs) || void 0 === d2 ? void 0 : d2.values) || void 0 === m2 ? void 0 : m2[T3], E3 = false;
                if (!C3) for (var a3 in null === (_2 = O3.outputs) || void 0 === _2 ? void 0 : _2.values) a3.startsWith("[") && a3.endsWith("]") && (E3 = true, C3 = null === (b2 = null === (y2 = O3.outputs) || void 0 === y2 ? void 0 : y2.values) || void 0 === b2 ? void 0 : b2[a3]);
                var M3 = C3 ? E3 ? C3.name.replace("$1", T3) : null == C3 ? void 0 : C3.name : T3, F3 = C3 && C3.toBlock && x3.blocks.find(function(e4) {
                  return e4.className === C3.toBlock;
                }) || x3.blocks[0], P3 = F3.dataOutputs.find(function(e4) {
                  return e4.name === M3;
                });
                P3 || (P3 = I2._createNewSocketConnection(M3, true), F3.dataOutputs.push(P3)), s3.connectedPointIds.push(P3.uniqueId), P3.connectedPointIds.push(s3.uniqueId);
              }
            }, I2 = this, S2 = 0, B2 = L2; S2 < B2.length; S2++) N2(B2[S2]);
            if (w2.flowGraphMapping.interBlockConnectors) for (var k2 = 0, G2 = w2.flowGraphMapping.interBlockConnectors; k2 < G2.length; k2++) {
              var V2 = G2[k2], D2 = V2.input, H2 = V2.output, U2 = V2.isVariable;
              this._connectFlowGraphNodes(D2, H2, A2.blocks[V2.inputBlockIndex], A2.blocks[V2.outputBlockIndex], U2);
            }
            if (w2.flowGraphMapping.extraProcessor) {
              var j2 = null === (v2 = this._interactivityGraph.declarations) || void 0 === v2 ? void 0 : v2[x2.declaration];
              if (!j2) throw g.Logger.Error(["No declaration found for extra processor", x2]), new Error("Error parsing node connections");
              A2.blocks = w2.flowGraphMapping.extraProcessor(x2, j2, w2.flowGraphMapping, this, A2.blocks, e3, this._gltf);
            }
          }
        }, e2.prototype._createNewSocketConnection = function(e3, t2) {
          return { uniqueId: (0, g.RandomGUID)(), name: e3, _connectionType: t2 ? 1 : 0, connectedPointIds: [] };
        }, e2.prototype._connectFlowGraphNodes = function(e3, t2, n2, r2, o2) {
          var a2 = o2 ? n2.dataInputs : n2.signalInputs, i2 = o2 ? r2.dataOutputs : r2.signalOutputs, s2 = a2.find(function(t3) {
            return t3.name === e3;
          }) || this._createNewSocketConnection(e3), l2 = i2.find(function(e4) {
            return e4.name === t2;
          }) || this._createNewSocketConnection(t2, true);
          a2.find(function(t3) {
            return t3.name === e3;
          }) || a2.push(s2), i2.find(function(e4) {
            return e4.name === t2;
          }) || i2.push(l2), s2.connectedPointIds.push(l2.uniqueId), l2.connectedPointIds.push(s2.uniqueId);
        }, e2.prototype.getVariableName = function(e3) {
          return "staticVariable_" + e3;
        }, e2.prototype.serializeToFlowGraph = function() {
          var e3 = { uniqueId: (0, g.RandomGUID)(), _userVariables: {}, _connectionValues: {} };
          this._parseNodeConnections(e3);
          for (var t2 = 0; t2 < this._staticVariables.length; t2++) {
            var n2 = this._staticVariables[t2];
            e3._userVariables[this.getVariableName(t2)] = n2;
          }
          return { rightHanded: true, allBlocks: this._nodes.reduce(function(e4, t3) {
            return e4.concat(t3.blocks);
          }, []), executionContexts: [e3] };
        }, e2;
      }(), Hn = "KHR_interactivity", Un = function() {
        function e2(e3) {
          this._loader = e3, this.name = Hn, this.enabled = this._loader.isExtensionUsed(Hn), this._pathConverter = (0, Ne.Wt)(this._loader.gltf), e3._skipStartAnimationStep = true;
          var t2 = e3.babylonScene;
          t2 && jn(t2);
        }
        return e2.prototype.dispose = function() {
          this._loader = null, delete this._pathConverter;
        }, e2.prototype.onReady = function() {
          return (0, L.sH)(this, void 0, void 0, function() {
            var e3, t2, n2, r2, o2, a2 = this;
            return (0, L.YH)(this, function(i2) {
              switch (i2.label) {
                case 0:
                  return this._loader.babylonScene && this._pathConverter ? (e3 = this._loader.babylonScene, (t2 = null === (o2 = this._loader.gltf.extensions) || void 0 === o2 ? void 0 : o2.KHR_interactivity) ? ((n2 = new g.FlowGraphCoordinator({ scene: e3 })).dispatchEventsSynchronously = false, r2 = t2.graphs.map(function(e4) {
                    return new Dn(e4, a2._loader.gltf, a2._loader.parent.targetFps).serializeToFlowGraph();
                  }), [4, Promise.all(r2.map(function(e4) {
                    return (0, L.sH)(a2, void 0, void 0, function() {
                      return (0, L.YH)(this, function(t3) {
                        switch (t3.label) {
                          case 0:
                            return [4, (0, g.ParseFlowGraphAsync)(e4, { coordinator: n2, pathConverter: this._pathConverter })];
                          case 1:
                            return [2, t3.sent()];
                        }
                      });
                    });
                  }))]) : [2]) : [2];
                case 1:
                  return i2.sent(), n2.start(), [2];
              }
            });
          });
        }, e2;
      }();
      function jn(e2) {
        (0, Ne.oR)("/extensions/KHR_interactivity/?/activeCamera/rotation", { get: function() {
          if (!e2.activeCamera) return new g.Quaternion(NaN, NaN, NaN, NaN);
          var t2 = g.Quaternion.FromRotationMatrix(e2.activeCamera.getWorldMatrix()).normalize();
          return e2.useRightHandedSystem || (t2.w *= -1, t2.x *= -1), t2;
        }, type: "Quaternion", getTarget: function() {
          return e2.activeCamera;
        } }), (0, Ne.oR)("/extensions/KHR_interactivity/?/activeCamera/position", { get: function() {
          if (!e2.activeCamera) return new g.Vector3(NaN, NaN, NaN);
          var t2 = e2.activeCamera.getWorldMatrix().getTranslation();
          return e2.useRightHandedSystem || (t2.x *= -1), t2;
        }, type: "Vector3", getTarget: function() {
          return e2.activeCamera;
        } }), (0, Ne.oR)("/animations/{}/extensions/KHR_interactivity/isPlaying", { get: function(e3) {
          var t2, n2;
          return null !== (n2 = null === (t2 = e3._babylonAnimationGroup) || void 0 === t2 ? void 0 : t2.isPlaying) && void 0 !== n2 && n2;
        }, type: "boolean", getTarget: function(e3) {
          return e3._babylonAnimationGroup;
        } }), (0, Ne.oR)("/animations/{}/extensions/KHR_interactivity/minTime", { get: function(e3) {
          var t2, n2;
          return (null !== (n2 = null === (t2 = e3._babylonAnimationGroup) || void 0 === t2 ? void 0 : t2.from) && void 0 !== n2 ? n2 : 0) / 60;
        }, type: "number", getTarget: function(e3) {
          return e3._babylonAnimationGroup;
        } }), (0, Ne.oR)("/animations/{}/extensions/KHR_interactivity/maxTime", { get: function(e3) {
          var t2, n2;
          return (null !== (n2 = null === (t2 = e3._babylonAnimationGroup) || void 0 === t2 ? void 0 : t2.to) && void 0 !== n2 ? n2 : 0) / 60;
        }, type: "number", getTarget: function(e3) {
          return e3._babylonAnimationGroup;
        } }), (0, Ne.oR)("/animations/{}/extensions/KHR_interactivity/playhead", { get: function(e3) {
          var t2, n2;
          return (null !== (n2 = null === (t2 = e3._babylonAnimationGroup) || void 0 === t2 ? void 0 : t2.getCurrentFrame()) && void 0 !== n2 ? n2 : 0) / 60;
        }, type: "number", getTarget: function(e3) {
          return e3._babylonAnimationGroup;
        } }), (0, Ne.oR)("/animations/{}/extensions/KHR_interactivity/virtualPlayhead", { get: function(e3) {
          var t2, n2;
          return (null !== (n2 = null === (t2 = e3._babylonAnimationGroup) || void 0 === t2 ? void 0 : t2.getCurrentFrame()) && void 0 !== n2 ? n2 : 0) / 60;
        }, type: "number", getTarget: function(e3) {
          return e3._babylonAnimationGroup;
        } });
      }
      (0, g.addToBlockFactory)(Hn, "FlowGraphGLTFDataProvider", function() {
        return (0, L.sH)(void 0, void 0, void 0, function() {
          return (0, L.YH)(this, function(e2) {
            switch (e2.label) {
              case 0:
                return [4, Promise.resolve().then(a.bind(a, 274))];
              case 1:
                return [2, e2.sent().FlowGraphGLTFDataProvider];
            }
          });
        });
      }), Le(Hn), Re(Hn, true, function(e2) {
        return new Un(e2);
      });
      var Kn = "KHR_node_visibility";
      (0, Ne.oR)("/nodes/{}/extensions/KHR_node_visibility/visible", { get: function(e2) {
        var t2 = e2._babylonTransformNode;
        return !t2 || void 0 === t2.isVisible || t2.isVisible;
      }, set: function(e2, t2) {
        var n2, r2;
        null === (n2 = t2._primitiveBabylonMeshes) || void 0 === n2 || n2.forEach(function(e3) {
          e3.inheritVisibility = true;
        }), t2._babylonTransformNode && (t2._babylonTransformNode.isVisible = e2), null === (r2 = t2._primitiveBabylonMeshes) || void 0 === r2 || r2.forEach(function(t3) {
          t3.isVisible = e2;
        });
      }, getTarget: function(e2) {
        return e2._babylonTransformNode;
      }, getPropertyName: [function() {
        return "isVisible";
      }], type: "boolean" });
      var Wn = function() {
        function e2(e3) {
          this.name = Kn, this._loader = e3, this.enabled = e3.isExtensionUsed(Kn);
        }
        return e2.prototype.onReady = function() {
          if (this._loader) {
            var e3 = this._loader.gltf.nodes;
            if (e3) for (var t2 = 0, n2 = e3; t2 < n2.length; t2++) {
              var r2 = n2[t2], o2 = r2._babylonTransformNode;
              o2 && (o2.inheritVisibility = true, r2.extensions && r2.extensions.KHR_node_visibility && false === r2.extensions.KHR_node_visibility.visible && (o2.isVisible = false));
            }
          }
        }, e2.prototype.dispose = function() {
          delete this._loader;
        }, e2;
      }();
      Le(Kn), Re(Kn, true, function(e2) {
        return new Wn(e2);
      });
      var Yn = "KHR_node_selectability";
      Nn("event/onSelect", Yn, { blocks: ["FlowGraphMeshPickEventBlock", "FlowGraphGetVariableBlock", "FlowGraphIndexOfBlock", "KHR_interactivity/FlowGraphGLTFDataProvider"], configuration: { stopPropagation: { name: "stopPropagation" }, nodeIndex: { name: "variable", toBlock: "FlowGraphGetVariableBlock", dataTransformer: function(e2) {
        return ["pickedMesh_" + e2[0]];
      } } }, outputs: { values: { selectedNodeIndex: { name: "index", toBlock: "FlowGraphIndexOfBlock" }, controllerIndex: { name: "pointerId" }, selectionPoint: { name: "pickedPoint" }, selectionRayOrigin: { name: "pickOrigin" } }, flows: { out: { name: "done" } } }, interBlockConnectors: [{ input: "asset", output: "value", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "array", output: "nodes", inputBlockIndex: 2, outputBlockIndex: 3, isVariable: true }, { input: "object", output: "pickedMesh", inputBlockIndex: 2, outputBlockIndex: 0, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2, a2, i2) {
        var s2, l2, u2, c2, f2, h2, p2 = o2[o2.length - 1];
        p2.config = p2.config || {}, p2.config.glTF = i2;
        var d2 = null === (l2 = null === (s2 = e2.configuration) || void 0 === s2 ? void 0 : s2.nodeIndex) || void 0 === l2 ? void 0 : l2.value[0];
        if (void 0 === d2 || "number" != typeof d2) throw new Error("nodeIndex not found in configuration");
        var m2 = "pickedMesh_" + d2;
        return o2[1].config.variable = m2, a2._userVariables[m2] = { className: "Mesh", id: null === (c2 = null === (u2 = null == i2 ? void 0 : i2.nodes) || void 0 === u2 ? void 0 : u2[d2]._babylonTransformNode) || void 0 === c2 ? void 0 : c2.id, uniqueId: null === (h2 = null === (f2 = null == i2 ? void 0 : i2.nodes) || void 0 === f2 ? void 0 : f2[d2]._babylonTransformNode) || void 0 === h2 ? void 0 : h2.uniqueId }, o2;
      } }), (0, Ne.oR)("/nodes/{}/extensions/KHR_node_selectability/selectable", { get: function(e2) {
        var t2 = e2._babylonTransformNode;
        return !t2 || void 0 === t2.isPickable || t2.isPickable;
      }, set: function(e2, t2) {
        var n2;
        null === (n2 = t2._primitiveBabylonMeshes) || void 0 === n2 || n2.forEach(function(t3) {
          t3.isPickable = e2;
        });
      }, getTarget: function(e2) {
        return e2._babylonTransformNode;
      }, getPropertyName: [function() {
        return "isPickable";
      }], type: "boolean" });
      var Zn = function() {
        function e2(e3) {
          this.name = Yn, this._loader = e3, this.enabled = e3.isExtensionUsed(Yn);
        }
        return e2.prototype.onReady = function() {
          return (0, L.sH)(this, void 0, void 0, function() {
            var e3;
            return (0, L.YH)(this, function(t2) {
              return null === (e3 = this._loader.gltf.nodes) || void 0 === e3 || e3.forEach(function(e4) {
                var t3, n2, r2;
                (null === (t3 = e4.extensions) || void 0 === t3 ? void 0 : t3.KHR_node_selectability) && false === (null === (n2 = e4.extensions) || void 0 === n2 ? void 0 : n2.KHR_node_selectability.selectable) && (null === (r2 = e4._babylonTransformNode) || void 0 === r2 || r2.getChildMeshes().forEach(function(e5) {
                  e5.isPickable = false;
                }));
              }), [2];
            });
          });
        }, e2.prototype.dispose = function() {
          this._loader = null;
        }, e2;
      }();
      Le(Yn), Re(Yn, true, function(e2) {
        return new Zn(e2);
      });
      var qn = "KHR_node_hoverability", zn = "targetMeshPointerOver_";
      Nn("event/onHoverIn", qn, { blocks: ["FlowGraphPointerOverEventBlock", "FlowGraphGetVariableBlock", "FlowGraphIndexOfBlock", "KHR_interactivity/FlowGraphGLTFDataProvider"], configuration: { stopPropagation: { name: "stopPropagation" }, nodeIndex: { name: "variable", toBlock: "FlowGraphGetVariableBlock", dataTransformer: function(e2) {
        return [zn + e2[0]];
      } } }, outputs: { values: { hoverNodeIndex: { name: "index", toBlock: "FlowGraphIndexOfBlock" }, controllerIndex: { name: "pointerId" } }, flows: { out: { name: "done" } } }, interBlockConnectors: [{ input: "targetMesh", output: "value", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "array", output: "nodes", inputBlockIndex: 2, outputBlockIndex: 3, isVariable: true }, { input: "object", output: "meshUnderPointer", inputBlockIndex: 2, outputBlockIndex: 0, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2, a2, i2) {
        var s2, l2, u2, c2, f2, h2, p2 = o2[o2.length - 1];
        p2.config = p2.config || {}, p2.config.glTF = i2;
        var d2 = null === (l2 = null === (s2 = e2.configuration) || void 0 === s2 ? void 0 : s2.nodeIndex) || void 0 === l2 ? void 0 : l2.value[0];
        if (void 0 === d2 || "number" != typeof d2) throw new Error("nodeIndex not found in configuration");
        var m2 = zn + d2;
        return o2[1].config.variable = m2, a2._userVariables[m2] = { className: "Mesh", id: null === (c2 = null === (u2 = null == i2 ? void 0 : i2.nodes) || void 0 === u2 ? void 0 : u2[d2]._babylonTransformNode) || void 0 === c2 ? void 0 : c2.id, uniqueId: null === (h2 = null === (f2 = null == i2 ? void 0 : i2.nodes) || void 0 === f2 ? void 0 : f2[d2]._babylonTransformNode) || void 0 === h2 ? void 0 : h2.uniqueId }, o2;
      } });
      var Xn = "targetMeshPointerOut_";
      Nn("event/onHoverOut", qn, { blocks: ["FlowGraphPointerOutEventBlock", "FlowGraphGetVariableBlock", "FlowGraphIndexOfBlock", "KHR_interactivity/FlowGraphGLTFDataProvider"], configuration: { stopPropagation: { name: "stopPropagation" }, nodeIndex: { name: "variable", toBlock: "FlowGraphGetVariableBlock", dataTransformer: function(e2) {
        return [Xn + e2[0]];
      } } }, outputs: { values: { hoverNodeIndex: { name: "index", toBlock: "FlowGraphIndexOfBlock" }, controllerIndex: { name: "pointerId" } }, flows: { out: { name: "done" } } }, interBlockConnectors: [{ input: "targetMesh", output: "value", inputBlockIndex: 0, outputBlockIndex: 1, isVariable: true }, { input: "array", output: "nodes", inputBlockIndex: 2, outputBlockIndex: 3, isVariable: true }, { input: "object", output: "meshOutOfPointer", inputBlockIndex: 2, outputBlockIndex: 0, isVariable: true }], extraProcessor: function(e2, t2, n2, r2, o2, a2, i2) {
        var s2, l2, u2, c2, f2, h2, p2 = o2[o2.length - 1];
        p2.config = p2.config || {}, p2.config.glTF = i2;
        var d2 = null === (l2 = null === (s2 = e2.configuration) || void 0 === s2 ? void 0 : s2.nodeIndex) || void 0 === l2 ? void 0 : l2.value[0];
        if (void 0 === d2 || "number" != typeof d2) throw new Error("nodeIndex not found in configuration");
        var m2 = Xn + d2;
        return o2[1].config.variable = m2, a2._userVariables[m2] = { className: "Mesh", id: null === (c2 = null === (u2 = null == i2 ? void 0 : i2.nodes) || void 0 === u2 ? void 0 : u2[d2]._babylonTransformNode) || void 0 === c2 ? void 0 : c2.id, uniqueId: null === (h2 = null === (f2 = null == i2 ? void 0 : i2.nodes) || void 0 === f2 ? void 0 : f2[d2]._babylonTransformNode) || void 0 === h2 ? void 0 : h2.uniqueId }, o2;
      } }), (0, Ne.oR)("/nodes/{}/extensions/KHR_node_hoverability/hoverable", { get: function(e2) {
        var t2 = e2._babylonTransformNode;
        return !t2 || void 0 === t2.pointerOverDisableMeshTesting || t2.pointerOverDisableMeshTesting;
      }, set: function(e2, t2) {
        var n2;
        null === (n2 = t2._primitiveBabylonMeshes) || void 0 === n2 || n2.forEach(function(t3) {
          t3.pointerOverDisableMeshTesting = !e2;
        });
      }, getTarget: function(e2) {
        return e2._babylonTransformNode;
      }, getPropertyName: [function() {
        return "pointerOverDisableMeshTesting";
      }], type: "boolean" });
      var Qn = function() {
        function e2(e3) {
          this.name = qn, this._loader = e3, this.enabled = e3.isExtensionUsed(qn);
        }
        return e2.prototype.onReady = function() {
          return (0, L.sH)(this, void 0, void 0, function() {
            var e3;
            return (0, L.YH)(this, function(t2) {
              return null === (e3 = this._loader.gltf.nodes) || void 0 === e3 || e3.forEach(function(e4) {
                var t3, n2, r2;
                (null === (t3 = e4.extensions) || void 0 === t3 ? void 0 : t3.KHR_node_hoverability) && false === (null === (n2 = e4.extensions) || void 0 === n2 ? void 0 : n2.KHR_node_hoverability.hoverable) && (null === (r2 = e4._babylonTransformNode) || void 0 === r2 || r2.getChildMeshes().forEach(function(e5) {
                  e5.pointerOverDisableMeshTesting = true;
                }));
              }), [2];
            });
          });
        }, e2.prototype.dispose = function() {
          this._loader = null;
        }, e2;
      }();
      Le(qn), Re(qn, true, function(e2) {
        return new Qn(e2);
      });
      var Jn = "ExtrasAsMetadata", $n = function() {
        function e2(e3) {
          this.name = Jn, this.enabled = true, this._loader = e3;
        }
        return e2.prototype._assignExtras = function(e3, t2) {
          if (t2.extras && Object.keys(t2.extras).length > 0) {
            var n2 = e3.metadata = e3.metadata || {};
            (n2.gltf = n2.gltf || {}).extras = t2.extras;
          }
        }, e2.prototype.dispose = function() {
          this._loader = null;
        }, e2.prototype.loadNodeAsync = function(e3, t2, n2) {
          var r2 = this;
          return this._loader.loadNodeAsync(e3, t2, function(e4) {
            r2._assignExtras(e4, t2), n2(e4);
          });
        }, e2.prototype.loadCameraAsync = function(e3, t2, n2) {
          var r2 = this;
          return this._loader.loadCameraAsync(e3, t2, function(e4) {
            r2._assignExtras(e4, t2), n2(e4);
          });
        }, e2.prototype.createMaterial = function(e3, t2, n2) {
          var r2 = this._loader.createMaterial(e3, t2, n2);
          return this._assignExtras(r2, t2), r2;
        }, e2;
      }();
      Le(Jn), Re(Jn, false, function(e2) {
        return new $n(e2);
      });
      var er = a(274), tr = function() {
        function e2() {
          this.materials = [];
        }
        return e2.prototype.parseMTL = function(t2, n2, r2, o2) {
          if (!(n2 instanceof ArrayBuffer)) {
            for (var a2, i2 = n2.split("\n"), s2 = /\s+/, l2 = null, u2 = 0; u2 < i2.length; u2++) {
              var c2 = i2[u2].trim();
              if (0 !== c2.length && "#" !== c2.charAt(0)) {
                var f2 = c2.indexOf(" "), h2 = f2 >= 0 ? c2.substring(0, f2) : c2;
                h2 = h2.toLowerCase();
                var p2 = f2 >= 0 ? c2.substring(f2 + 1).trim() : "";
                if ("newmtl" === h2) l2 && this.materials.push(l2), t2._blockEntityCollection = !!o2, (l2 = new g.StandardMaterial(p2, t2))._parentContainer = o2, t2._blockEntityCollection = false;
                else if ("kd" === h2 && l2) a2 = p2.split(s2, 3).map(parseFloat), l2.diffuseColor = g.Color3.FromArray(a2);
                else if ("ka" === h2 && l2) a2 = p2.split(s2, 3).map(parseFloat), l2.ambientColor = g.Color3.FromArray(a2);
                else if ("ks" === h2 && l2) a2 = p2.split(s2, 3).map(parseFloat), l2.specularColor = g.Color3.FromArray(a2);
                else if ("ke" === h2 && l2) a2 = p2.split(s2, 3).map(parseFloat), l2.emissiveColor = g.Color3.FromArray(a2);
                else if ("ns" === h2 && l2) l2.specularPower = parseFloat(p2);
                else if ("d" === h2 && l2) l2.alpha = parseFloat(p2);
                else if ("map_ka" === h2 && l2) l2.ambientTexture = e2._GetTexture(r2, p2, t2);
                else if ("map_kd" === h2 && l2) l2.diffuseTexture = e2._GetTexture(r2, p2, t2);
                else if ("map_ks" === h2 && l2) l2.specularTexture = e2._GetTexture(r2, p2, t2);
                else if ("map_ns" === h2) ;
                else if ("map_bump" === h2 && l2) {
                  var d2 = p2.split(s2), m2 = d2.indexOf("-bm"), _2 = null;
                  m2 >= 0 && (_2 = d2[m2 + 1], d2.splice(m2, 2)), l2.bumpTexture = e2._GetTexture(r2, d2.join(" "), t2), l2.bumpTexture && null !== _2 && (l2.bumpTexture.level = parseFloat(_2));
                } else "map_d" === h2 && l2 && (l2.opacityTexture = e2._GetTexture(r2, p2, t2));
              }
            }
            l2 && this.materials.push(l2);
          }
        }, e2._GetTexture = function(t2, n2, r2) {
          if (!n2) return null;
          var o2 = t2;
          if ("file:" === t2) {
            var a2 = n2.lastIndexOf("\\");
            -1 === a2 && (a2 = n2.lastIndexOf("/")), o2 += a2 > -1 ? n2.substring(a2 + 1) : n2;
          } else o2 += n2;
          return new g.Texture(o2, r2, false, e2.INVERT_TEXTURE_Y);
        }, e2.INVERT_TEXTURE_Y = true, e2;
      }(), nr = function() {
        function e2(e3, t2, n2) {
          this._positions = [], this._normals = [], this._uvs = [], this._colors = [], this._extColors = [], this._meshesFromObj = [], this._indicesForBabylon = [], this._wrappedPositionForBabylon = [], this._wrappedUvsForBabylon = [], this._wrappedColorsForBabylon = [], this._wrappedNormalsForBabylon = [], this._tuplePosNorm = [], this._curPositionInIndices = 0, this._hasMeshes = false, this._unwrappedPositionsForBabylon = [], this._unwrappedColorsForBabylon = [], this._unwrappedNormalsForBabylon = [], this._unwrappedUVForBabylon = [], this._triangles = [], this._materialNameFromObj = "", this._objMeshName = "", this._increment = 1, this._isFirstMaterial = true, this._grayColor = new g.Color4(0.5, 0.5, 0.5, 1), this._hasLineData = false, this._materialToUse = e3, this._babylonMeshesArray = t2, this._loadingOptions = n2;
        }
        return e2.prototype._isInArray = function(e3, t2) {
          e3[t2[0]] || (e3[t2[0]] = { normals: [], idx: [] });
          var n2 = e3[t2[0]].normals.indexOf(t2[1]);
          return -1 === n2 ? -1 : e3[t2[0]].idx[n2];
        }, e2.prototype._isInArrayUV = function(e3, t2) {
          e3[t2[0]] || (e3[t2[0]] = { normals: [], idx: [], uv: [] });
          var n2 = e3[t2[0]].normals.indexOf(t2[1]);
          return 1 != n2 && t2[2] === e3[t2[0]].uv[n2] ? e3[t2[0]].idx[n2] : -1;
        }, e2.prototype._setData = function(e3) {
          var t2, n2, r2;
          null !== (t2 = e3.indiceUvsFromObj) && void 0 !== t2 || (e3.indiceUvsFromObj = -1), null !== (n2 = e3.indiceNormalFromObj) && void 0 !== n2 || (e3.indiceNormalFromObj = -1), -1 === (r2 = this._loadingOptions.optimizeWithUV ? this._isInArrayUV(this._tuplePosNorm, [e3.indicePositionFromObj, e3.indiceNormalFromObj, e3.indiceUvsFromObj]) : this._isInArray(this._tuplePosNorm, [e3.indicePositionFromObj, e3.indiceNormalFromObj])) ? (this._indicesForBabylon.push(this._wrappedPositionForBabylon.length), this._wrappedPositionForBabylon.push(e3.positionVectorFromOBJ), void 0 !== e3.textureVectorFromOBJ && this._wrappedUvsForBabylon.push(e3.textureVectorFromOBJ), void 0 !== e3.normalsVectorFromOBJ && this._wrappedNormalsForBabylon.push(e3.normalsVectorFromOBJ), void 0 !== e3.positionColorsFromOBJ && this._wrappedColorsForBabylon.push(e3.positionColorsFromOBJ), this._tuplePosNorm[e3.indicePositionFromObj].normals.push(e3.indiceNormalFromObj), this._tuplePosNorm[e3.indicePositionFromObj].idx.push(this._curPositionInIndices++), this._loadingOptions.optimizeWithUV && this._tuplePosNorm[e3.indicePositionFromObj].uv.push(e3.indiceUvsFromObj)) : this._indicesForBabylon.push(r2);
        }, e2.prototype._unwrapData = function() {
          try {
            for (var e3 = 0; e3 < this._wrappedPositionForBabylon.length; e3++) this._unwrappedPositionsForBabylon.push(this._wrappedPositionForBabylon[e3].x * this._handednessSign, this._wrappedPositionForBabylon[e3].y, this._wrappedPositionForBabylon[e3].z), this._wrappedNormalsForBabylon.length && this._unwrappedNormalsForBabylon.push(this._wrappedNormalsForBabylon[e3].x * this._handednessSign, this._wrappedNormalsForBabylon[e3].y, this._wrappedNormalsForBabylon[e3].z), this._wrappedUvsForBabylon.length && this._unwrappedUVForBabylon.push(this._wrappedUvsForBabylon[e3].x, this._wrappedUvsForBabylon[e3].y), this._unwrappedColorsForBabylon.length && this._unwrappedColorsForBabylon.push(this._wrappedColorsForBabylon[e3].r, this._wrappedColorsForBabylon[e3].g, this._wrappedColorsForBabylon[e3].b, this._wrappedColorsForBabylon[e3].a);
            this._wrappedPositionForBabylon.length = 0, this._wrappedNormalsForBabylon.length = 0, this._wrappedUvsForBabylon.length = 0, this._wrappedColorsForBabylon.length = 0, this._tuplePosNorm.length = 0, this._curPositionInIndices = 0;
          } catch (e4) {
            throw new Error("Unable to unwrap data while parsing OBJ data.");
          }
        }, e2.prototype._getTriangles = function(e3, t2) {
          for (var n2 = t2; n2 < e3.length - 1; n2++) this._pushTriangle(e3, n2);
        }, e2.prototype._getColor = function(e3) {
          var t2;
          return this._loadingOptions.importVertexColors ? null !== (t2 = this._extColors[e3]) && void 0 !== t2 ? t2 : this._colors[e3] : void 0;
        }, e2.prototype._setDataForCurrentFaceWithPattern1 = function(e3, t2) {
          this._getTriangles(e3, t2);
          for (var n2 = 0; n2 < this._triangles.length; n2++) {
            var r2 = parseInt(this._triangles[n2]) - 1;
            this._setData({ indicePositionFromObj: r2, positionVectorFromOBJ: this._positions[r2], positionColorsFromOBJ: this._getColor(r2) });
          }
          this._triangles.length = 0;
        }, e2.prototype._setDataForCurrentFaceWithPattern2 = function(e3, t2) {
          this._getTriangles(e3, t2);
          for (var n2 = 0; n2 < this._triangles.length; n2++) {
            var r2 = this._triangles[n2].split("/"), o2 = parseInt(r2[0]) - 1, a2 = parseInt(r2[1]) - 1;
            this._setData({ indicePositionFromObj: o2, indiceUvsFromObj: a2, positionVectorFromOBJ: this._positions[o2], textureVectorFromOBJ: this._uvs[a2], positionColorsFromOBJ: this._getColor(o2) });
          }
          this._triangles.length = 0;
        }, e2.prototype._setDataForCurrentFaceWithPattern3 = function(e3, t2) {
          this._getTriangles(e3, t2);
          for (var n2 = 0; n2 < this._triangles.length; n2++) {
            var r2 = this._triangles[n2].split("/"), o2 = parseInt(r2[0]) - 1, a2 = parseInt(r2[1]) - 1, i2 = parseInt(r2[2]) - 1;
            this._setData({ indicePositionFromObj: o2, indiceUvsFromObj: a2, indiceNormalFromObj: i2, positionVectorFromOBJ: this._positions[o2], textureVectorFromOBJ: this._uvs[a2], normalsVectorFromOBJ: this._normals[i2] });
          }
          this._triangles.length = 0;
        }, e2.prototype._setDataForCurrentFaceWithPattern4 = function(e3, t2) {
          this._getTriangles(e3, t2);
          for (var n2 = 0; n2 < this._triangles.length; n2++) {
            var r2 = this._triangles[n2].split("//"), o2 = parseInt(r2[0]) - 1, a2 = parseInt(r2[1]) - 1;
            this._setData({ indicePositionFromObj: o2, indiceNormalFromObj: a2, positionVectorFromOBJ: this._positions[o2], normalsVectorFromOBJ: this._normals[a2], positionColorsFromOBJ: this._getColor(o2) });
          }
          this._triangles.length = 0;
        }, e2.prototype._setDataForCurrentFaceWithPattern5 = function(e3, t2) {
          this._getTriangles(e3, t2);
          for (var n2 = 0; n2 < this._triangles.length; n2++) {
            var r2 = this._triangles[n2].split("/"), o2 = this._positions.length + parseInt(r2[0]), a2 = this._uvs.length + parseInt(r2[1]), i2 = this._normals.length + parseInt(r2[2]);
            this._setData({ indicePositionFromObj: o2, indiceUvsFromObj: a2, indiceNormalFromObj: i2, positionVectorFromOBJ: this._positions[o2], textureVectorFromOBJ: this._uvs[a2], normalsVectorFromOBJ: this._normals[i2], positionColorsFromOBJ: this._getColor(o2) });
          }
          this._triangles.length = 0;
        }, e2.prototype._addPreviousObjMesh = function() {
          this._meshesFromObj.length > 0 && (this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1], this._unwrapData(), this._loadingOptions.useLegacyBehavior && this._indicesForBabylon.reverse(), this._handledMesh.indices = this._indicesForBabylon.slice(), this._handledMesh.positions = this._unwrappedPositionsForBabylon.slice(), this._unwrappedNormalsForBabylon.length && (this._handledMesh.normals = this._unwrappedNormalsForBabylon.slice()), this._unwrappedUVForBabylon.length && (this._handledMesh.uvs = this._unwrappedUVForBabylon.slice()), this._unwrappedColorsForBabylon.length && (this._handledMesh.colors = this._unwrappedColorsForBabylon.slice()), this._handledMesh.hasLines = this._hasLineData, this._indicesForBabylon.length = 0, this._unwrappedPositionsForBabylon.length = 0, this._unwrappedColorsForBabylon.length = 0, this._unwrappedNormalsForBabylon.length = 0, this._unwrappedUVForBabylon.length = 0, this._hasLineData = false);
        }, e2.prototype._optimizeNormals = function(e3) {
          var t2 = e3.getVerticesData(g.VertexBuffer.PositionKind), n2 = e3.getVerticesData(g.VertexBuffer.NormalKind), r2 = {};
          if (t2 && n2) {
            for (var o2 = 0; o2 < t2.length / 3; o2++) (s2 = r2[i2 = t2[3 * o2 + 0] + "_" + t2[3 * o2 + 1] + "_" + t2[3 * o2 + 2]]) || (s2 = [], r2[i2] = s2), s2.push(o2);
            var a2 = new g.Vector3();
            for (var i2 in r2) {
              var s2;
              if (!((s2 = r2[i2]).length < 2)) {
                var l2 = s2[0];
                for (o2 = 1; o2 < s2.length; ++o2) {
                  var u2 = s2[o2];
                  n2[3 * l2 + 0] += n2[3 * u2 + 0], n2[3 * l2 + 1] += n2[3 * u2 + 1], n2[3 * l2 + 2] += n2[3 * u2 + 2];
                }
                for (a2.copyFromFloats(n2[3 * l2 + 0], n2[3 * l2 + 1], n2[3 * l2 + 2]), a2.normalize(), o2 = 0; o2 < s2.length; ++o2) n2[3 * (u2 = s2[o2]) + 0] = a2.x, n2[3 * u2 + 1] = a2.y, n2[3 * u2 + 2] = a2.z;
              }
            }
            e3.setVerticesData(g.VertexBuffer.NormalKind, n2);
          }
        }, e2._IsLineElement = function(e3) {
          return e3.startsWith("l");
        }, e2._IsObjectElement = function(e3) {
          return e3.startsWith("o");
        }, e2._IsGroupElement = function(e3) {
          return e3.startsWith("g");
        }, e2._GetZbrushMRGB = function(e3, t2) {
          if (!e3.startsWith("mrgb")) return null;
          if (e3 = e3.replace("mrgb", "").trim(), t2) return [];
          var n2 = e3.match(/[a-z0-9]/g);
          if (!n2 || n2.length % 8 != 0) return [];
          for (var r2 = [], o2 = 0; o2 < n2.length / 8; o2++) {
            var a2 = n2[8 * o2 + 2] + n2[8 * o2 + 3], i2 = n2[8 * o2 + 4] + n2[8 * o2 + 5], s2 = n2[8 * o2 + 6] + n2[8 * o2 + 7];
            r2.push(new g.Color4(parseInt(a2, 16) / 255, parseInt(i2, 16) / 255, parseInt(s2, 16) / 255, 1));
          }
          return r2;
        }, e2.prototype.parse = function(t2, n2, r2, o2, a2) {
          var i2, s2, l2 = this;
          n2 = (n2 = n2.replace(/#MRGB/g, "mrgb")).replace(/#.*$/gm, "").trim(), this._loadingOptions.useLegacyBehavior ? (this._pushTriangle = function(e3, t3) {
            return l2._triangles.push(e3[0], e3[t3], e3[t3 + 1]);
          }, this._handednessSign = 1) : r2.useRightHandedSystem ? (this._pushTriangle = function(e3, t3) {
            return l2._triangles.push(e3[0], e3[t3 + 1], e3[t3]);
          }, this._handednessSign = 1) : (this._pushTriangle = function(e3, t3) {
            return l2._triangles.push(e3[0], e3[t3], e3[t3 + 1]);
          }, this._handednessSign = -1);
          var u2 = n2.split("\n"), c2 = [], f2 = [];
          c2.push(f2);
          for (var h2 = 0; h2 < u2.length; h2++) if (0 !== (_2 = u2[h2].trim().replace(/\s\s/g, " ")).length && "#" !== _2.charAt(0)) if ((e2._IsGroupElement(_2) || e2._IsObjectElement(_2)) && (f2 = [], c2.push(f2)), e2._IsLineElement(_2)) for (var p2 = _2.split(" "), d2 = 1; d2 < p2.length - 1; d2++) f2.push("l ".concat(p2[d2], " ").concat(p2[d2 + 1]));
          else f2.push(_2);
          var m2 = c2.flat();
          for (h2 = 0; h2 < m2.length; h2++) {
            var _2, y2 = void 0;
            if (0 !== (_2 = m2[h2].trim().replace(/\s\s/g, " ")).length && "#" !== _2.charAt(0)) if (e2.VertexPattern.test(_2)) {
              if (y2 = _2.match(/[^ ]+/g), this._positions.push(new g.Vector3(parseFloat(y2[1]), parseFloat(y2[2]), parseFloat(y2[3]))), this._loadingOptions.importVertexColors) if (y2.length >= 7) {
                var b2 = parseFloat(y2[4]), v2 = parseFloat(y2[5]), T2 = parseFloat(y2[6]);
                this._colors.push(new g.Color4(b2 > 1 ? b2 / 255 : b2, v2 > 1 ? v2 / 255 : v2, T2 > 1 ? T2 / 255 : T2, 7 === y2.length || void 0 === y2[7] ? 1 : parseFloat(y2[7])));
              } else this._colors.push(this._grayColor);
            } else if (null !== (y2 = e2.NormalPattern.exec(_2))) this._normals.push(new g.Vector3(parseFloat(y2[1]), parseFloat(y2[2]), parseFloat(y2[3])));
            else if (null !== (y2 = e2.UVPattern.exec(_2))) this._uvs.push(new g.Vector2(parseFloat(y2[1]) * this._loadingOptions.UVScaling.x, parseFloat(y2[2]) * this._loadingOptions.UVScaling.y));
            else if (null !== (y2 = e2.FacePattern3.exec(_2))) this._setDataForCurrentFaceWithPattern3(y2[1].trim().split(" "), 1);
            else if (null !== (y2 = e2.FacePattern4.exec(_2))) this._setDataForCurrentFaceWithPattern4(y2[1].trim().split(" "), 1);
            else if (null !== (y2 = e2.FacePattern5.exec(_2))) this._setDataForCurrentFaceWithPattern5(y2[1].trim().split(" "), 1);
            else if (null !== (y2 = e2.FacePattern2.exec(_2))) this._setDataForCurrentFaceWithPattern2(y2[1].trim().split(" "), 1);
            else if (null !== (y2 = e2.FacePattern1.exec(_2))) this._setDataForCurrentFaceWithPattern1(y2[1].trim().split(" "), 1);
            else if (null !== (y2 = e2.LinePattern1.exec(_2))) this._setDataForCurrentFaceWithPattern1(y2[1].trim().split(" "), 0), this._hasLineData = true;
            else if (null !== (y2 = e2.LinePattern2.exec(_2))) this._setDataForCurrentFaceWithPattern2(y2[1].trim().split(" "), 0), this._hasLineData = true;
            else if (y2 = e2._GetZbrushMRGB(_2, !this._loadingOptions.importVertexColors)) for (var x2 = 0, A2 = y2; x2 < A2.length; x2++) {
              var w2 = A2[x2];
              this._extColors.push(w2);
            }
            else if (null !== (y2 = e2.LinePattern3.exec(_2))) this._setDataForCurrentFaceWithPattern3(y2[1].trim().split(" "), 0), this._hasLineData = true;
            else if (e2.GroupDescriptor.test(_2) || e2.ObjectDescriptor.test(_2)) {
              var O2 = { name: _2.substring(2).trim(), indices: null, positions: null, normals: null, uvs: null, colors: null, materialName: this._materialNameFromObj, isObject: e2.ObjectDescriptor.test(_2) };
              this._addPreviousObjMesh(), this._meshesFromObj.push(O2), this._hasMeshes = true, this._isFirstMaterial = true, this._increment = 1;
            } else e2.UseMtlDescriptor.test(_2) ? (this._materialNameFromObj = _2.substring(7).trim(), this._isFirstMaterial && this._hasMeshes || (this._addPreviousObjMesh(), O2 = { name: (this._objMeshName || "mesh") + "_mm" + this._increment.toString(), indices: null, positions: null, normals: null, uvs: null, colors: null, materialName: this._materialNameFromObj, isObject: false }, this._increment++, this._meshesFromObj.push(O2), this._hasMeshes = true), this._hasMeshes && this._isFirstMaterial && (this._meshesFromObj[this._meshesFromObj.length - 1].materialName = this._materialNameFromObj, this._isFirstMaterial = false)) : e2.MtlLibGroupDescriptor.test(_2) ? a2(_2.substring(7).trim()) : e2.SmoothDescriptor.test(_2) || g.Logger.Log("Unhandled expression at line : " + _2);
          }
          if (this._hasMeshes && (this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1], this._loadingOptions.useLegacyBehavior && this._indicesForBabylon.reverse(), this._unwrapData(), this._handledMesh.indices = this._indicesForBabylon, this._handledMesh.positions = this._unwrappedPositionsForBabylon, this._unwrappedNormalsForBabylon.length && (this._handledMesh.normals = this._unwrappedNormalsForBabylon), this._unwrappedUVForBabylon.length && (this._handledMesh.uvs = this._unwrappedUVForBabylon), this._unwrappedColorsForBabylon.length && (this._handledMesh.colors = this._unwrappedColorsForBabylon), this._handledMesh.hasLines = this._hasLineData), !this._hasMeshes) {
            var C2 = null;
            if (this._indicesForBabylon.length) this._loadingOptions.useLegacyBehavior && this._indicesForBabylon.reverse(), this._unwrapData();
            else {
              for (var E2 = 0, M2 = this._positions; E2 < M2.length; E2++) {
                var F2 = M2[E2];
                this._unwrappedPositionsForBabylon.push(F2.x, F2.y, F2.z);
              }
              if (this._normals.length) for (var P2 = 0, R2 = this._normals; P2 < R2.length; P2++) {
                var L2 = R2[P2];
                this._unwrappedNormalsForBabylon.push(L2.x, L2.y, L2.z);
              }
              if (this._uvs.length) for (var N2 = 0, I2 = this._uvs; N2 < I2.length; N2++) {
                var S2 = I2[N2];
                this._unwrappedUVForBabylon.push(S2.x, S2.y);
              }
              if (this._extColors.length) for (var B2 = 0, k2 = this._extColors; B2 < k2.length; B2++) {
                var G2 = k2[B2];
                this._unwrappedColorsForBabylon.push(G2.r, G2.g, G2.b, G2.a);
              }
              else if (this._colors.length) for (var V2 = 0, D2 = this._colors; V2 < D2.length; V2++) G2 = D2[V2], this._unwrappedColorsForBabylon.push(G2.r, G2.g, G2.b, G2.a);
              this._materialNameFromObj || ((C2 = new g.StandardMaterial(g.Geometry.RandomId(), r2)).pointsCloud = true, this._materialNameFromObj = C2.name, this._normals.length || (C2.disableLighting = true, C2.emissiveColor = g.Color3.White()));
            }
            this._meshesFromObj.push({ name: g.Geometry.RandomId(), indices: this._indicesForBabylon, positions: this._unwrappedPositionsForBabylon, colors: this._unwrappedColorsForBabylon, normals: this._unwrappedNormalsForBabylon, uvs: this._unwrappedUVForBabylon, materialName: this._materialNameFromObj, directMaterial: C2, isObject: true, hasLines: this._hasLineData });
          }
          for (var H2 = 0; H2 < this._meshesFromObj.length; H2++) {
            if (t2 && this._meshesFromObj[H2].name) {
              if (t2 instanceof Array) {
                if (-1 === t2.indexOf(this._meshesFromObj[H2].name)) continue;
              } else if (this._meshesFromObj[H2].name !== t2) continue;
            }
            this._handledMesh = this._meshesFromObj[H2], r2._blockEntityCollection = !!o2;
            var U2 = new g.Mesh(this._meshesFromObj[H2].name, r2);
            if (U2._parentContainer = o2, r2._blockEntityCollection = false, this._handledMesh._babylonMesh = U2, !this._handledMesh.isObject) {
              for (var j2 = H2 - 1; j2 >= 0; --j2) if (this._meshesFromObj[j2].isObject && this._meshesFromObj[j2]._babylonMesh) {
                U2.parent = this._meshesFromObj[j2]._babylonMesh;
                break;
              }
            }
            if (this._materialToUse.push(this._meshesFromObj[H2].materialName), this._handledMesh.hasLines && (null !== (i2 = U2._internalMetadata) && void 0 !== i2 || (U2._internalMetadata = {}), U2._internalMetadata._isLine = true), 0 !== (null === (s2 = this._handledMesh.positions) || void 0 === s2 ? void 0 : s2.length)) {
              var K2 = new g.VertexData();
              if (K2.indices = this._handledMesh.indices, K2.positions = this._handledMesh.positions, this._loadingOptions.computeNormals || !this._handledMesh.normals) {
                var W2 = new Array();
                g.VertexData.ComputeNormals(this._handledMesh.positions, this._handledMesh.indices, W2), K2.normals = W2;
              } else K2.normals = this._handledMesh.normals;
              this._handledMesh.uvs && (K2.uvs = this._handledMesh.uvs), this._handledMesh.colors && (K2.colors = this._handledMesh.colors), K2.applyToMesh(U2), this._loadingOptions.invertY && (U2.scaling.y *= -1), this._loadingOptions.optimizeNormals && this._optimizeNormals(U2), this._babylonMeshesArray.push(U2), this._handledMesh.directMaterial && (U2.material = this._handledMesh.directMaterial);
            } else this._babylonMeshesArray.push(U2);
          }
        }, e2.ObjectDescriptor = /^o/, e2.GroupDescriptor = /^g/, e2.MtlLibGroupDescriptor = /^mtllib /, e2.UseMtlDescriptor = /^usemtl /, e2.SmoothDescriptor = /^s /, e2.VertexPattern = /^v(\s+[\d|.|+|\-|e|E]+){3,7}/, e2.NormalPattern = /^vn(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/, e2.UVPattern = /^vt(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/, e2.FacePattern1 = /^f\s+(([\d]{1,}[\s]?){3,})+/, e2.FacePattern2 = /^f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/, e2.FacePattern3 = /^f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/, e2.FacePattern4 = /^f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/, e2.FacePattern5 = /^f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/, e2.LinePattern1 = /^l\s+(([\d]{1,}[\s]?){2,})+/, e2.LinePattern2 = /^l\s+((([\d]{1,}\/[\d]{1,}[\s]?){2,})+)/, e2.LinePattern3 = /^l\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){2,})+)/, e2;
      }(), rr = function() {
        function e2(t2) {
          this.name = "obj", this.extensions = ".obj", this._assetContainer = null, this._loadingOptions = (0, L.Cl)((0, L.Cl)({}, e2._DefaultLoadingOptions), null != t2 ? t2 : {});
        }
        return Object.defineProperty(e2, "INVERT_TEXTURE_Y", { get: function() {
          return tr.INVERT_TEXTURE_Y;
        }, set: function(e3) {
          tr.INVERT_TEXTURE_Y = e3;
        }, enumerable: false, configurable: true }), Object.defineProperty(e2, "_DefaultLoadingOptions", { get: function() {
          return { computeNormals: e2.COMPUTE_NORMALS, optimizeNormals: e2.OPTIMIZE_NORMALS, importVertexColors: e2.IMPORT_VERTEX_COLORS, invertY: e2.INVERT_Y, invertTextureY: e2.INVERT_TEXTURE_Y, UVScaling: e2.UV_SCALING, materialLoadingFailsSilently: e2.MATERIAL_LOADING_FAILS_SILENTLY, optimizeWithUV: e2.OPTIMIZE_WITH_UV, skipMaterials: e2.SKIP_MATERIALS, useLegacyBehavior: e2.USE_LEGACY_BEHAVIOR };
        }, enumerable: false, configurable: true }), e2.prototype._loadMTL = function(e3, t2, n2, r2) {
          var o2 = t2 + e3;
          g.Tools.LoadFile(o2, n2, void 0, void 0, false, function(e4, t3) {
            r2(o2, t3);
          });
        }, e2.prototype.createPlugin = function(t2) {
          return new e2(t2.obj);
        }, e2.prototype.canDirectLoad = function() {
          return false;
        }, e2.prototype.importMeshAsync = function(e3, t2, n2, r2) {
          return this._parseSolidAsync(e3, t2, n2, r2).then(function(e4) {
            return { meshes: e4, particleSystems: [], skeletons: [], animationGroups: [], transformNodes: [], geometries: [], lights: [], spriteManagers: [] };
          });
        }, e2.prototype.loadAsync = function(e3, t2, n2) {
          return this.importMeshAsync(null, e3, t2, n2).then(function() {
          });
        }, e2.prototype.loadAssetContainerAsync = function(e3, t2, n2) {
          var r2 = this, o2 = new g.AssetContainer(e3);
          return this._assetContainer = o2, this.importMeshAsync(null, e3, t2, n2).then(function(e4) {
            return e4.meshes.forEach(function(e5) {
              return o2.meshes.push(e5);
            }), e4.meshes.forEach(function(e5) {
              var t3 = e5.material;
              t3 && -1 == o2.materials.indexOf(t3) && (o2.materials.push(t3), t3.getActiveTextures().forEach(function(e6) {
                -1 == o2.textures.indexOf(e6) && o2.textures.push(e6);
              }));
            }), r2._assetContainer = null, o2;
          }).catch(function(e4) {
            throw r2._assetContainer = null, e4;
          });
        }, e2.prototype._parseSolidAsync = function(e3, t2, n2, r2) {
          var o2 = this, a2 = "", i2 = new tr(), s2 = [], l2 = [];
          n2 = n2.replace(/#.*$/gm, "").trim(), new nr(s2, l2, this._loadingOptions).parse(e3, n2, t2, this._assetContainer, function(e4) {
            a2 = e4;
          });
          var u2 = [];
          return "" === a2 || this._loadingOptions.skipMaterials || u2.push(new Promise(function(e4, n3) {
            o2._loadMTL(a2, r2, function(u3) {
              try {
                i2.parseMTL(t2, u3, r2, o2._assetContainer);
                for (var c2 = 0; c2 < i2.materials.length; c2++) {
                  for (var f2 = 0, h2 = [], p2 = void 0; (p2 = s2.indexOf(i2.materials[c2].name, f2)) > -1; ) h2.push(p2), f2 = p2 + 1;
                  if (-1 === p2 && 0 === h2.length) i2.materials[c2].dispose();
                  else for (var d2 = 0; d2 < h2.length; d2++) {
                    var m2 = l2[h2[d2]], _2 = i2.materials[c2];
                    m2.material = _2, m2.getTotalIndices() || (_2.pointsCloud = true);
                  }
                }
                e4();
              } catch (t3) {
                g.Tools.Warn("Error processing MTL file: '".concat(a2, "'")), o2._loadingOptions.materialLoadingFailsSilently ? e4() : n3(t3);
              }
            }, function(t3, r3) {
              g.Tools.Warn("Error downloading MTL file: '".concat(a2, "'")), o2._loadingOptions.materialLoadingFailsSilently ? e4() : n3(r3);
            });
          })), Promise.all(u2).then(function() {
            var e4 = function(e5) {
              var t3, n3;
              return Boolean(null !== (n3 = null === (t3 = e5._internalMetadata) || void 0 === t3 ? void 0 : t3._isLine) && void 0 !== n3 && n3);
            };
            return l2.forEach(function(n3) {
              var r3, o3;
              if (e4(n3)) {
                var a3 = null !== (r3 = n3.material) && void 0 !== r3 ? r3 : new g.StandardMaterial(n3.name + "_line", t2);
                a3.getBindedMeshes().filter(function(t3) {
                  return !e4(t3);
                }).length > 0 && (a3 = null !== (o3 = a3.clone(a3.name + "_line")) && void 0 !== o3 ? o3 : a3), a3.wireframe = true, n3.material = a3, n3._internalMetadata && (n3._internalMetadata._isLine = void 0);
              }
            }), l2;
          });
        }, e2.OPTIMIZE_WITH_UV = true, e2.INVERT_Y = false, e2.IMPORT_VERTEX_COLORS = false, e2.COMPUTE_NORMALS = false, e2.OPTIMIZE_NORMALS = false, e2.UV_SCALING = new g.Vector2(1, 1), e2.SKIP_MATERIALS = false, e2.MATERIAL_LOADING_FAILS_SILENTLY = true, e2.USE_LEGACY_BEHAVIOR = false, e2;
      }();
      (0, g.RegisterSceneLoaderPlugin)(new rr());
      var or = { ".stl": { isBinary: true } }, ar = function() {
        function e2() {
          this.solidPattern = /solid (\S*)([\S\s]*?)endsolid[ ]*(\S*)/g, this.facetsPattern = /facet([\s\S]*?)endfacet/g, this.normalPattern = /normal[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g, this.vertexPattern = /vertex[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g, this.name = "stl", this.extensions = or;
        }
        return e2.prototype.importMesh = function(e3, t2, n2, r2, o2) {
          var a2;
          if ("string" != typeof n2) {
            if (this._isBinary(n2)) {
              var i2 = new g.Mesh("stlmesh", t2);
              return this._parseBinary(i2, n2), o2 && o2.push(i2), true;
            }
            n2 = new TextDecoder().decode(new Uint8Array(n2));
          }
          for (; a2 = this.solidPattern.exec(n2); ) {
            var s2 = a2[1], l2 = a2[3];
            if (l2 && s2 != l2) return g.Tools.Error("Error in STL, solid name != endsolid name"), false;
            if (e3 && s2) {
              if (e3 instanceof Array) {
                if (!e3.indexOf(s2)) continue;
              } else if (s2 !== e3) continue;
            }
            s2 = s2 || "stlmesh", i2 = new g.Mesh(s2, t2), this._parseASCII(i2, a2[2]), o2 && o2.push(i2);
          }
          return true;
        }, e2.prototype.load = function(e3, t2, n2) {
          return this.importMesh(null, e3, t2, n2, null);
        }, e2.prototype.loadAssetContainer = function(e3, t2, n2) {
          var r2 = new g.AssetContainer(e3);
          return e3._blockEntityCollection = true, this.importMesh(null, e3, t2, n2, r2.meshes), e3._blockEntityCollection = false, r2;
        }, e2.prototype._isBinary = function(e3) {
          var t2 = new DataView(e3);
          if (t2.byteLength <= 80) return false;
          if (84 + 50 * t2.getUint32(80, true) === t2.byteLength) return true;
          for (var n2 = [115, 111, 108, 105, 100], r2 = 0; r2 < 5; r2++) if (t2.getUint8(r2) !== n2[r2]) return true;
          return false;
        }, e2.prototype._parseBinary = function(t2, n2) {
          for (var r2 = new DataView(n2), o2 = r2.getUint32(80, true), a2 = 0, i2 = new Float32Array(3 * o2 * 3), s2 = new Float32Array(3 * o2 * 3), l2 = new Uint32Array(3 * o2), u2 = 0, c2 = 0; c2 < o2; c2++) {
            for (var f2 = 84 + 50 * c2, h2 = r2.getFloat32(f2, true), p2 = r2.getFloat32(f2 + 4, true), d2 = r2.getFloat32(f2 + 8, true), m2 = 1; m2 <= 3; m2++) {
              var _2 = f2 + 12 * m2;
              i2[a2] = r2.getFloat32(_2, true), s2[a2] = h2, e2.DO_NOT_ALTER_FILE_COORDINATES ? (i2[a2 + 1] = r2.getFloat32(_2 + 4, true), i2[a2 + 2] = r2.getFloat32(_2 + 8, true), s2[a2 + 1] = p2, s2[a2 + 2] = d2) : (i2[a2 + 2] = r2.getFloat32(_2 + 4, true), i2[a2 + 1] = r2.getFloat32(_2 + 8, true), s2[a2 + 2] = p2, s2[a2 + 1] = d2), a2 += 3;
            }
            e2.DO_NOT_ALTER_FILE_COORDINATES ? (l2[u2] = u2, l2[u2 + 1] = u2 + 2, l2[u2 + 2] = u2 + 1, u2 += 3) : (l2[u2] = u2++, l2[u2] = u2++, l2[u2] = u2++);
          }
          t2.setVerticesData(g.VertexBuffer.PositionKind, i2), t2.setVerticesData(g.VertexBuffer.NormalKind, s2), t2.setIndices(l2), t2.computeWorldMatrix(true);
        }, e2.prototype._parseASCII = function(t2, n2) {
          for (var r2, o2 = [], a2 = [], i2 = [], s2 = 0; r2 = this.facetsPattern.exec(n2); ) {
            var l2 = r2[1], u2 = this.normalPattern.exec(l2);
            if (this.normalPattern.lastIndex = 0, u2) {
              for (var c2 = [Number(u2[1]), Number(u2[5]), Number(u2[3])], f2 = void 0; f2 = this.vertexPattern.exec(l2); ) e2.DO_NOT_ALTER_FILE_COORDINATES ? (o2.push(Number(f2[1]), Number(f2[3]), Number(f2[5])), a2.push(c2[0], c2[2], c2[1])) : (o2.push(Number(f2[1]), Number(f2[5]), Number(f2[3])), a2.push(c2[0], c2[1], c2[2]));
              e2.DO_NOT_ALTER_FILE_COORDINATES ? (i2.push(s2, s2 + 2, s2 + 1), s2 += 3) : i2.push(s2++, s2++, s2++), this.vertexPattern.lastIndex = 0;
            }
          }
          this.facetsPattern.lastIndex = 0, t2.setVerticesData(g.VertexBuffer.PositionKind, o2), t2.setVerticesData(g.VertexBuffer.NormalKind, a2), t2.setIndices(i2), t2.computeWorldMatrix(true);
        }, e2.DO_NOT_ALTER_FILE_COORDINATES = false, e2;
      }();
      (0, g.RegisterSceneLoaderPlugin)(new ar());
      var ir = "splat", sr = { ".splat": { isBinary: true }, ".ply": { isBinary: true }, ".spz": { isBinary: true }, ".json": { isBinary: false }, ".sog": { isBinary: true } }, lr = 0.28209479177387814;
      function ur(e2, t2, n2) {
        return (0, L.sH)(this, void 0, void 0, function() {
          return (0, L.YH)(this, function(r2) {
            switch (r2.label) {
              case 0:
                return [4, new Promise(function(r3, o2) {
                  var a2, i2 = n2.createCanvasImage();
                  if (!i2) throw new Error("Failed to create ImageBitmap");
                  if (i2.onload = function() {
                    try {
                      var e3 = n2.createCanvas(i2.width, i2.height);
                      if (!e3) throw new Error("Failed to create canvas");
                      var t3 = e3.getContext("2d");
                      if (!t3) throw new Error("Failed to get 2D context");
                      t3.drawImage(i2, 0, 0);
                      var a3 = t3.getImageData(0, 0, e3.width, e3.height);
                      r3({ bits: new Uint8Array(a3.data.buffer), width: a3.width });
                    } catch (e4) {
                      o2("Error loading image ".concat(i2.src, " with exception: ").concat(e4));
                    }
                  }, i2.onerror = function(e3) {
                    o2("Error loading image ".concat(i2.src, " with exception: ").concat(e3));
                  }, i2.crossOrigin = "anonymous", "string" == typeof e2) {
                    if (!t2) throw new Error("filename is required when using a URL");
                    i2.src = e2 + t2;
                  } else {
                    var s2 = new Blob([e2], { type: "image/webp" });
                    a2 = URL.createObjectURL(s2), i2.src = a2;
                  }
                })];
              case 1:
                return [2, r2.sent()];
            }
          });
        });
      }
      function cr(e2, t2, n2) {
        return (0, L.sH)(this, void 0, void 0, function() {
          var r2, o2, a2, i2, s2, l2, u2, c2, f2, h2, p2, d2, m2, _2, y2, b2, v2, T2, x2, A2, w2, O2, C2, E2, M2, F2, P2, R2, N2, I2, S2, B2, k2, G2, V2, D2, H2, U2, j2, K2, W2, Y2, Z2, q2, z2, X2, Q2, J2, $2, ee2, te2, ne2, re2, oe2, ae2, ie2, se2, le2, ue2, ce2, fe2, he2, pe2, de2;
          return (0, L.YH)(this, function(L2) {
            switch (L2.label) {
              case 0:
                if (r2 = e2.count ? e2.count : e2.means.shape[0], o2 = new ArrayBuffer(32 * r2), a2 = new Float32Array(o2), i2 = new Float32Array(o2), s2 = new Uint8ClampedArray(o2), l2 = new Uint8ClampedArray(o2), u2 = function(e3) {
                  return Math.sign(e3) * (Math.exp(Math.abs(e3)) - 1);
                }, c2 = t2[0].bits, f2 = t2[1].bits, !Array.isArray(e2.means.mins) || !Array.isArray(e2.means.maxs)) throw new Error("Missing arrays in SOG data.");
                for (te2 = 0; te2 < r2; te2++) for (w2 = 4 * te2, se2 = 0; se2 < 3; se2++) h2 = e2.means.mins[se2], p2 = e2.means.maxs[se2], d2 = f2[w2 + se2], m2 = c2[w2 + se2], U2 = d2 << 8 | m2, ne2 = g.Scalar.Lerp(h2, p2, U2 / 65535), a2[8 * te2 + se2] = u2(ne2);
                if (_2 = t2[2].bits, 2 === e2.version) {
                  if (!e2.scales.codebook) throw new Error("Missing codebook in SOG version 2 scales data.");
                  for (te2 = 0; te2 < r2; te2++) for (w2 = 4 * te2, se2 = 0; se2 < 3; se2++) b2 = e2.scales.codebook[_2[w2 + se2]], y2 = Math.exp(b2), i2[8 * te2 + 3 + se2] = y2;
                } else {
                  if (!Array.isArray(e2.scales.mins) || !Array.isArray(e2.scales.maxs)) throw new Error("Missing arrays in SOG scales data.");
                  for (te2 = 0; te2 < r2; te2++) for (w2 = 4 * te2, se2 = 0; se2 < 3; se2++) b2 = _2[w2 + se2], v2 = g.Scalar.Lerp(e2.scales.mins[se2], e2.scales.maxs[se2], b2 / 255), T2 = Math.exp(v2), i2[8 * te2 + 3 + se2] = T2;
                }
                if (x2 = t2[4].bits, 2 === e2.version) {
                  if (!e2.sh0.codebook) throw new Error("Missing codebook in SOG version 2 sh0 data.");
                  for (te2 = 0; te2 < r2; te2++) {
                    for (w2 = 4 * te2, se2 = 0; se2 < 3; se2++) A2 = 0.5 + e2.sh0.codebook[x2[w2 + se2]] * lr, s2[32 * te2 + 24 + se2] = Math.max(0, Math.min(255, Math.round(255 * A2)));
                    s2[32 * te2 + 24 + 3] = x2[w2 + 3];
                  }
                } else {
                  if (!Array.isArray(e2.sh0.mins) || !Array.isArray(e2.sh0.maxs)) throw new Error("Missing arrays in SOG sh0 data.");
                  for (te2 = 0; te2 < r2; te2++) for (w2 = 4 * te2, se2 = 0; se2 < 4; se2++) O2 = e2.sh0.mins[se2], C2 = e2.sh0.maxs[se2], E2 = x2[w2 + se2], G2 = g.Scalar.Lerp(O2, C2, E2 / 255), void 0, M2 = se2 < 3 ? 0.5 + G2 * lr : 1 / (1 + Math.exp(-G2)), s2[32 * te2 + 24 + se2] = Math.max(0, Math.min(255, Math.round(255 * M2)));
                }
                for (F2 = function(e3) {
                  return 2 * (e3 / 255 - 0.5) / Math.SQRT2;
                }, P2 = t2[3].bits, te2 = 0; te2 < r2; te2++) {
                  switch (R2 = P2[4 * te2 + 0], N2 = P2[4 * te2 + 1], I2 = P2[4 * te2 + 2], S2 = P2[4 * te2 + 3], B2 = F2(R2), k2 = F2(N2), G2 = F2(I2), V2 = S2 - 252, D2 = B2 * B2 + k2 * k2 + G2 * G2, H2 = Math.sqrt(Math.max(0, 1 - D2)), U2 = void 0, V2) {
                    case 0:
                      U2 = [H2, B2, k2, G2];
                      break;
                    case 1:
                      U2 = [B2, H2, k2, G2];
                      break;
                    case 2:
                      U2 = [B2, k2, H2, G2];
                      break;
                    case 3:
                      U2 = [B2, k2, G2, H2];
                      break;
                    default:
                      throw new Error("Invalid quaternion mode");
                  }
                  l2[32 * te2 + 28 + 0] = 127.5 * U2[0] + 127.5, l2[32 * te2 + 28 + 1] = 127.5 * U2[1] + 127.5, l2[32 * te2 + 28 + 2] = 127.5 * U2[2] + 127.5, l2[32 * te2 + 28 + 3] = 127.5 * U2[3] + 127.5;
                }
                if (!e2.shN) return [3, 2];
                for (j2 = [0, 3, 8, 15], K2 = e2.shN.bands ? j2[e2.shN.bands] : e2.shN.shape[1] / 3, W2 = t2[5].bits, Y2 = t2[6].bits, Z2 = t2[5].width, q2 = 3 * K2, z2 = Math.ceil(q2 / 16), X2 = [], Q2 = n2.getEngine(), J2 = Q2.getCaps().maxTextureSize, $2 = Math.ceil(r2 / J2), ce2 = 0; ce2 < z2; ce2++) ee2 = new Uint8Array($2 * J2 * 4 * 4), X2.push(ee2);
                if (2 === e2.version) {
                  if (!e2.shN.codebook) throw new Error("Missing codebook in SOG version 2 shN data.");
                  for (te2 = 0; te2 < r2; te2++) for (ne2 = Y2[4 * te2 + 0] + (Y2[4 * te2 + 1] << 8), re2 = ne2 % 64 * K2, oe2 = Math.floor(ne2 / 64), le2 = 0; le2 < K2; le2++) for (se2 = 0; se2 < 3; se2++) ue2 = 3 * le2 + se2, ce2 = Math.floor(ue2 / 16), fe2 = X2[ce2], he2 = ue2 % 16, pe2 = 16 * te2, de2 = 127.5 * e2.shN.codebook[W2[4 * (re2 + le2) + se2 + oe2 * Z2 * 4]] + 127.5, fe2[he2 + pe2] = Math.max(0, Math.min(255, de2));
                } else for (te2 = 0; te2 < r2; te2++) for (ne2 = Y2[4 * te2 + 0] + (Y2[4 * te2 + 1] << 8), re2 = ne2 % 64 * K2, oe2 = Math.floor(ne2 / 64), ae2 = e2.shN.mins, ie2 = e2.shN.maxs, se2 = 0; se2 < 3; se2++) for (le2 = 0; le2 < K2 / 3; le2++) ue2 = 3 * le2 + se2, ce2 = Math.floor(ue2 / 16), fe2 = X2[ce2], he2 = ue2 % 16, pe2 = 16 * te2, de2 = 127.5 * g.Scalar.Lerp(ae2, ie2, W2[4 * (re2 + le2) + se2 + oe2 * Z2 * 4] / 255) + 127.5, fe2[he2 + pe2] = Math.max(0, Math.min(255, de2));
                return [4, new Promise(function(e3) {
                  e3({ mode: 0, data: o2, hasVertexColors: false, sh: X2 });
                })];
              case 1:
              case 3:
                return [2, L2.sent()];
              case 2:
                return [4, new Promise(function(e3) {
                  e3({ mode: 0, data: o2, hasVertexColors: false });
                })];
            }
          });
        });
      }
      function fr(e2, t2, n2) {
        return (0, L.sH)(this, void 0, void 0, function() {
          var r2, o2, a2, i2, s2, l2 = this;
          return (0, L.YH)(this, function(u2) {
            switch (u2.label) {
              case 0:
                if (e2 instanceof Map) {
                  if (!(a2 = (o2 = e2).get("meta.json"))) throw new Error("meta.json not found in files Map");
                  r2 = JSON.parse(new TextDecoder().decode(a2));
                } else r2 = e2;
                return i2 = (0, L.fX)((0, L.fX)((0, L.fX)((0, L.fX)([], r2.means.files, true), r2.scales.files, true), r2.quats.files, true), r2.sh0.files, true), r2.shN && i2.push.apply(i2, r2.shN.files), [4, Promise.all(i2.map(function(e3) {
                  return (0, L.sH)(l2, void 0, void 0, function() {
                    return (0, L.YH)(this, function(r3) {
                      switch (r3.label) {
                        case 0:
                          return o2 && o2.has(e3) ? [4, ur(o2.get(e3), e3, n2.getEngine())] : [3, 2];
                        case 1:
                        case 3:
                          return [2, r3.sent()];
                        case 2:
                          return [4, ur(t2, e3, n2.getEngine())];
                      }
                    });
                  });
                }))];
              case 1:
                return s2 = u2.sent(), [4, cr(r2, s2, n2)];
              case 2:
                return [2, u2.sent()];
            }
          });
        });
      }
      var hr = function() {
        function e2(t2) {
          void 0 === t2 && (t2 = e2._DefaultLoadingOptions), this.name = ir, this._assetContainer = null, this.extensions = sr, this._loadingOptions = t2;
        }
        return e2.prototype.createPlugin = function(t2) {
          return new e2(t2[ir]);
        }, e2.prototype.importMeshAsync = function(e3, t2, n2, r2, o2, a2) {
          return (0, L.sH)(this, void 0, void 0, function() {
            return (0, L.YH)(this, function(o3) {
              switch (o3.label) {
                case 0:
                  return [4, this._parseAsync(e3, t2, n2, r2).then(function(e4) {
                    return { meshes: e4, particleSystems: [], skeletons: [], animationGroups: [], transformNodes: [], geometries: [], lights: [], spriteManagers: [] };
                  })];
                case 1:
                  return [2, o3.sent()];
              }
            });
          });
        }, e2._BuildPointCloud = function(e3, t2) {
          if (!t2.byteLength) return false;
          var n2 = new Uint8Array(t2), r2 = new Float32Array(t2), o2 = n2.length / 32;
          return e3.addPoints(o2, function(e4, t3) {
            var o3 = r2[8 * t3 + 0], a2 = r2[8 * t3 + 1], i2 = r2[8 * t3 + 2];
            e4.position = new g.Vector3(o3, a2, i2);
            var s2 = n2[32 * t3 + 24 + 0] / 255, l2 = n2[32 * t3 + 24 + 1] / 255, u2 = n2[32 * t3 + 24 + 2] / 255;
            e4.color = new g.Color4(s2, l2, u2, 1);
          }), true;
        }, e2._BuildMesh = function(e3, t2) {
          for (var n2 = new g.Mesh("PLYMesh", e3), r2 = new Uint8Array(t2.data), o2 = new Float32Array(t2.data), a2 = r2.length / 32, i2 = [], s2 = new g.VertexData(), l2 = 0; l2 < a2; l2++) {
            var u2 = o2[8 * l2 + 0], c2 = o2[8 * l2 + 1], f2 = o2[8 * l2 + 2];
            i2.push(u2, c2, f2);
          }
          if (t2.hasVertexColors) {
            var h2 = new Float32Array(4 * a2);
            for (l2 = 0; l2 < a2; l2++) {
              var p2 = r2[32 * l2 + 24 + 0] / 255, d2 = r2[32 * l2 + 24 + 1] / 255, m2 = r2[32 * l2 + 24 + 2] / 255;
              h2[4 * l2 + 0] = p2, h2[4 * l2 + 1] = d2, h2[4 * l2 + 2] = m2, h2[4 * l2 + 3] = 1;
            }
            s2.colors = h2;
          }
          return s2.positions = i2, s2.indices = t2.faces, s2.applyToMesh(n2), n2;
        }, e2.prototype._unzipWithFFlateAsync = function(e3) {
          return (0, L.sH)(this, void 0, void 0, function() {
            var t2, n2, r2, o2, a2, i2, s2, l2, u2;
            return (0, L.YH)(this, function(c2) {
              switch (c2.label) {
                case 0:
                  return void 0 !== window.fflate ? [3, 2] : [4, g.Tools.LoadScriptAsync(null !== (u2 = this._loadingOptions.deflateURL) && void 0 !== u2 ? u2 : "https://unpkg.com/fflate/umd/index.js")];
                case 1:
                  c2.sent(), c2.label = 2;
                case 2:
                  for (t2 = window.fflate.unzipSync, n2 = t2(e3), r2 = /* @__PURE__ */ new Map(), o2 = 0, a2 = Object.entries(n2); o2 < a2.length; o2++) i2 = a2[o2], s2 = i2[0], l2 = i2[1], r2.set(s2, l2);
                  return [2, r2];
              }
            });
          });
        }, e2.prototype._parseAsync = function(t2, n2, r2, o2) {
          var a2 = this, i2 = [], s2 = function(e3) {
            n2._blockEntityCollection = !!a2._assetContainer;
            var t3 = new g.GaussianSplattingMesh("GaussianSplatting", null, n2, a2._loadingOptions.keepInRam);
            t3._parentContainer = a2._assetContainer, t3.viewDirectionFactor.set(1, -1, 1), i2.push(t3), t3.updateData(e3.data, e3.sh), n2._blockEntityCollection = false;
          };
          if ("string" == typeof r2) {
            var l2 = JSON.parse(r2);
            if (l2 && l2.means && l2.scales && l2.quats && l2.sh0) return new Promise(function(e3) {
              fr(l2, o2, n2).then(function(t3) {
                s2(t3), e3(i2);
              }).catch(function() {
                throw new Error("Failed to parse SOG data.");
              });
            });
          }
          var u2 = r2 instanceof ArrayBuffer ? new Uint8Array(r2) : r2;
          if (80 === u2[0] && 75 === u2[1]) return new Promise(function(e3) {
            a2._unzipWithFFlateAsync(u2).then(function(t3) {
              fr(t3, o2, n2).then(function(t4) {
                s2(t4), e3(i2);
              }).catch(function() {
                throw new Error("Failed to parse SOG zip data.");
              });
            });
          });
          var c2 = new ReadableStream({ start: function(e3) {
            e3.enqueue(new Uint8Array(r2)), e3.close();
          } }), f2 = new DecompressionStream("gzip"), h2 = c2.pipeThrough(f2);
          return new Promise(function(t3) {
            new Response(h2).arrayBuffer().then(function(e3) {
              (function(e4, t4, n3) {
                var r3 = new Uint8Array(e4), o3 = new Uint32Array(e4.slice(0, 12)), a3 = o3[2], i3 = r3[12], s3 = r3[13], l3 = r3[14], u3 = r3[15], c3 = o3[1];
                if (u3 || 1347635022 != o3[0] || 2 != c3 && 3 != c3) return new Promise(function(e5) {
                  e5({ mode: 3, data: f3, hasVertexColors: false });
                });
                var f3 = new ArrayBuffer(32 * a3), h3 = 1 / (1 << s3), p2 = new Int32Array(1), d2 = new Uint8Array(p2.buffer), m2 = function(e5, t5) {
                  return d2[0] = e5[t5 + 0], d2[1] = e5[t5 + 1], d2[2] = e5[t5 + 2], d2[3] = 128 & e5[t5 + 2] ? 255 : 0, p2[0] * h3;
                }, _2 = 16, y2 = new Float32Array(f3), b2 = new Float32Array(f3), v2 = new Uint8ClampedArray(f3), T2 = new Uint8ClampedArray(f3), x2 = 1, A2 = 0;
                n3.flipY || (x2 = -1, A2 = 255);
                for (var w2 = 0; w2 < a3; w2++) y2[8 * w2 + 0] = m2(r3, _2 + 0), y2[8 * w2 + 1] = x2 * m2(r3, _2 + 3), y2[8 * w2 + 2] = x2 * m2(r3, _2 + 6), _2 += 9;
                for (w2 = 0; w2 < a3; w2++) {
                  for (var O2 = 0; O2 < 3; O2++) {
                    var C2 = (r3[_2 + a3 + 3 * w2 + O2] - 127.5) / 38.25;
                    v2[32 * w2 + 24 + O2] = g.Scalar.Clamp(255 * (0.5 + 0.282 * C2), 0, 255);
                  }
                  v2[32 * w2 + 24 + 3] = r3[_2 + w2];
                }
                for (_2 += 4 * a3, w2 = 0; w2 < a3; w2++) b2[8 * w2 + 3 + 0] = Math.exp(r3[_2 + 0] / 16 - 10), b2[8 * w2 + 3 + 1] = Math.exp(r3[_2 + 1] / 16 - 10), b2[8 * w2 + 3 + 2] = Math.exp(r3[_2 + 2] / 16 - 10), _2 += 3;
                if (c3 >= 3) {
                  var E2 = Math.SQRT1_2;
                  for (w2 = 0; w2 < a3; w2++) {
                    for (var M2 = [r3[_2 + 0], r3[_2 + 1], r3[_2 + 2], r3[_2 + 3]], F2 = M2[0] + (M2[1] << 8) + (M2[2] << 16) + (M2[3] << 24), P2 = [], R2 = F2 >>> 30, L2 = F2, N2 = 0, I2 = 3; I2 >= 0; --I2) if (I2 !== R2) {
                      var S2 = 511 & L2, B2 = L2 >>> 9 & 1;
                      L2 >>>= 10, P2[I2] = E2 * (S2 / 511), 1 === B2 && (P2[I2] = -P2[I2]), N2 += P2[I2] * P2[I2];
                    }
                    var k2 = 1 - N2;
                    P2[R2] = Math.sqrt(Math.max(k2, 0)), P2[1] *= x2, P2[2] *= x2;
                    for (var G2 = [3, 0, 1, 2], V2 = 0; V2 < 4; V2++) T2[32 * w2 + 28 + V2] = Math.round(127.5 + 127.5 * P2[G2[V2]]);
                    _2 += 4;
                  }
                } else for (w2 = 0; w2 < a3; w2++) {
                  var D2 = r3[_2 + 0], H2 = r3[_2 + 1] * x2 + A2, U2 = r3[_2 + 2] * x2 + A2, j2 = D2 / 127.5 - 1, K2 = H2 / 127.5 - 1, W2 = U2 / 127.5 - 1;
                  T2[32 * w2 + 28 + 1] = D2, T2[32 * w2 + 28 + 2] = H2, T2[32 * w2 + 28 + 3] = U2;
                  var Y2 = 1 - (j2 * j2 + K2 * K2 + W2 * W2);
                  T2[32 * w2 + 28 + 0] = 127.5 + 127.5 * Math.sqrt(Y2 < 0 ? 0 : Y2), _2 += 3;
                }
                if (i3) {
                  for (var Z2 = 3 * ((i3 + 1) * (i3 + 1) - 1), q2 = Math.ceil(Z2 / 16), z2 = _2, X2 = [], Q2 = t4.getEngine().getCaps().maxTextureSize, J2 = Math.ceil(a3 / Q2), $2 = 0; $2 < q2; $2++) {
                    var ee2 = new Uint8Array(J2 * Q2 * 4 * 4);
                    X2.push(ee2);
                  }
                  for (w2 = 0; w2 < a3; w2++) for (var te2 = 0; te2 < Z2; te2++) {
                    var ne2 = r3[z2++];
                    $2 = Math.floor(te2 / 16), X2[$2][te2 % 16 + 16 * w2] = ne2;
                  }
                  return new Promise(function(e5) {
                    e5({ mode: 0, data: f3, hasVertexColors: false, sh: X2, trainedWithAntialiasing: !!l3 });
                  });
                }
                return new Promise(function(e5) {
                  e5({ mode: 0, data: f3, hasVertexColors: false, trainedWithAntialiasing: !!l3 });
                });
              })(e3, n2, a2._loadingOptions).then(function(e4) {
                n2._blockEntityCollection = !!a2._assetContainer;
                var r3 = new g.GaussianSplattingMesh("GaussianSplatting", null, n2, a2._loadingOptions.keepInRam);
                if (e4.trainedWithAntialiasing) {
                  var o3 = r3.material;
                  o3.kernelSize = 0.1, o3.compensation = true;
                }
                r3._parentContainer = a2._assetContainer, i2.push(r3), r3.updateData(e4.data, e4.sh), n2._blockEntityCollection = false, t3(i2);
              });
            }).catch(function() {
              e2._ConvertPLYToSplat(r2).then(function(r3) {
                return (0, L.sH)(a2, void 0, void 0, function() {
                  var o3, a3;
                  return (0, L.YH)(this, function(s3) {
                    switch (s3.label) {
                      case 0:
                        switch (n2._blockEntityCollection = !!this._assetContainer, r3.mode) {
                          case 0:
                            return [3, 1];
                          case 1:
                            return [3, 2];
                          case 2:
                            return [3, 6];
                        }
                        return [3, 7];
                      case 1:
                        return (o3 = new g.GaussianSplattingMesh("GaussianSplatting", null, n2, this._loadingOptions.keepInRam))._parentContainer = this._assetContainer, i2.push(o3), o3.updateData(r3.data, r3.sh), !r3.compressed && r3.rawSplat || o3.viewDirectionFactor.set(-1, -1, 1), [3, 8];
                      case 2:
                        return a3 = new g.PointsCloudSystem("PointCloud", 1, n2), e2._BuildPointCloud(a3, r3.data) ? [4, a3.buildMeshAsync().then(function(e3) {
                          i2.push(e3);
                        })] : [3, 4];
                      case 3:
                        return s3.sent(), [3, 5];
                      case 4:
                        a3.dispose(), s3.label = 5;
                      case 5:
                        return [3, 8];
                      case 6:
                        if (!r3.faces) throw new Error("PLY mesh doesn't contain face informations.");
                        return i2.push(e2._BuildMesh(n2, r3)), [3, 8];
                      case 7:
                        throw new Error("Unsupported Splat mode");
                      case 8:
                        return n2._blockEntityCollection = false, t3(i2), [2];
                    }
                  });
                });
              });
            });
          });
        }, e2.prototype.loadAssetContainerAsync = function(e3, t2, n2) {
          var r2 = this, o2 = new g.AssetContainer(e3);
          return this._assetContainer = o2, this.importMeshAsync(null, e3, t2, n2).then(function(e4) {
            for (var t3 = 0, n3 = e4.meshes; t3 < n3.length; t3++) {
              var a2 = n3[t3];
              o2.meshes.push(a2);
            }
            return r2._assetContainer = null, o2;
          }).catch(function(e4) {
            throw r2._assetContainer = null, e4;
          });
        }, e2.prototype.loadAsync = function(e3, t2, n2) {
          return this.importMeshAsync(null, e3, t2, n2).then(function() {
          });
        }, e2._ConvertPLYToSplat = function(e3) {
          var t2 = this, n2 = new Uint8Array(e3), r2 = new TextDecoder().decode(n2.slice(0, 10240)), o2 = r2.indexOf("end_header\n");
          if (o2 < 0 || !r2) return new Promise(function(t3) {
            t3({ mode: 0, data: e3, rawSplat: true });
          });
          var a2 = parseInt(/element vertex (\d+)\n/.exec(r2)[1]), i2 = /element face (\d+)\n/.exec(r2), s2 = 0;
          i2 && (s2 = parseInt(i2[1]));
          var l2 = /element chunk (\d+)\n/.exec(r2), u2 = 0;
          l2 && (u2 = parseInt(l2[1]));
          var c2, f2 = 0, h2 = 0, p2 = { double: 8, int: 4, uint: 4, float: 4, short: 2, ushort: 2, uchar: 1, list: 0 };
          !function(e4) {
            e4[e4.Vertex = 0] = "Vertex", e4[e4.Chunk = 1] = "Chunk", e4[e4.SH = 2] = "SH";
          }(c2 || (c2 = {}));
          for (var d2 = 1, m2 = [], _2 = [], y2 = 0, b2 = r2.slice(0, o2).split("\n"); y2 < b2.length; y2++) {
            var v2 = b2[y2];
            if (v2.startsWith("property ")) {
              var T2 = v2.split(" "), x2 = T2[1], A2 = T2[2];
              1 == d2 ? (_2.push({ name: A2, type: x2, offset: h2 }), h2 += p2[x2]) : 0 == d2 ? (m2.push({ name: A2, type: x2, offset: f2 }), f2 += p2[x2]) : 2 == d2 && m2.push({ name: A2, type: x2, offset: f2 }), p2[x2] || g.Logger.Warn("Unsupported property type: ".concat(x2, "."));
            } else v2.startsWith("element ") && ("chunk" == (x2 = v2.split(" ")[1]) ? d2 = 1 : "vertex" == x2 ? d2 = 0 : "sh" == x2 && (d2 = 2));
          }
          var w2 = f2, O2 = h2;
          return g.GaussianSplattingMesh.ConvertPLYWithSHToSplatAsync(e3).then(function(n3) {
            return (0, L.sH)(t2, void 0, void 0, function() {
              var t3, r3, i3, l3, c3, f3, h3, p3, d3, _3, g2, y3, b3, v3, T3;
              return (0, L.YH)(this, function(x3) {
                switch (x3.label) {
                  case 0:
                    if (t3 = new DataView(e3, o2 + 11), r3 = O2 * u2 + w2 * a2, i3 = [], s2) {
                      for (l3 = 0; l3 < s2; l3++) if (3 == (c3 = t3.getUint8(r3))) {
                        for (r3 += 1, f3 = 0; f3 < c3; f3++) h3 = t3.getUint32(r3 + 4 * (2 - f3), true), i3.push(h3);
                        r3 += 12;
                      }
                    }
                    return u2 ? [4, new Promise(function(e4) {
                      e4({ mode: 0, data: n3.buffer, sh: n3.sh, faces: i3, hasVertexColors: false, compressed: true, rawSplat: false });
                    })] : [3, 2];
                  case 1:
                  case 3:
                    return [2, x3.sent()];
                  case 2:
                    for (p3 = 0, d3 = 0, _3 = ["x", "y", "z", "scale_0", "scale_1", "scale_2", "opacity", "rot_0", "rot_1", "rot_2", "rot_3"], g2 = ["red", "green", "blue", "f_dc_0", "f_dc_1", "f_dc_2"], y3 = 0; y3 < m2.length; y3++) b3 = m2[y3], _3.includes(b3.name) && p3++, g2.includes(b3.name) && d3++;
                    return v3 = p3 == _3.length && 3 == d3, T3 = s2 ? 2 : v3 ? 0 : 1, [4, new Promise(function(e4) {
                      e4({ mode: T3, data: n3.buffer, sh: n3.sh, faces: i3, hasVertexColors: !!d3, compressed: false, rawSplat: false });
                    })];
                }
              });
            });
          });
        }, e2._DefaultLoadingOptions = { keepInRam: false, flipY: false }, e2;
      }();
      (0, g.RegisterSceneLoaderPlugin)(new hr());
      var pr = void 0 !== a.g ? a.g : "undefined" != typeof window ? window : void 0;
      if (void 0 !== pr) for (var dr in s) pr.BABYLON[dr] || (pr.BABYLON[dr] = s[dr]);
      var mr = void 0 !== a.g ? a.g : "undefined" != typeof window ? window : void 0;
      if (void 0 !== mr) {
        for (var _r in mr.BABYLON = mr.BABYLON || {}, u) mr.BABYLON[_r] = u[_r];
        for (var _r in l) mr.BABYLON[_r] = l[_r];
      }
      var gr = void 0 !== a.g ? a.g : "undefined" != typeof window ? window : void 0;
      if (void 0 !== gr) for (var yr in gr.BABYLON = gr.BABYLON || {}, gr.BABYLON.GLTF1 = gr.BABYLON.GLTF1 || {}, c) gr.BABYLON.GLTF1[yr] = c[yr];
      var br = void 0 !== a.g ? a.g : "undefined" != typeof window ? window : void 0;
      if (void 0 !== br) {
        br.BABYLON = br.BABYLON || {};
        var vr = br.BABYLON;
        vr.GLTF2 = vr.GLTF2 || {}, vr.GLTF2.Loader = vr.GLTF2.Loader || {}, vr.GLTF2.Loader.Extensions = vr.GLTF2.Loader.Extensions || {};
        var Tr = [];
        for (var xr in h) vr.GLTF2.Loader.Extensions[xr] = h[xr], Tr.push(xr);
        for (var xr in f) vr.GLTF2.Loader[xr] = f[xr], Tr.push(xr);
        for (var xr in p) Tr.indexOf(xr) > -1 || (vr.GLTF2[xr] = p[xr]);
      }
      var Ar = void 0 !== a.g ? a.g : "undefined" != typeof window ? window : void 0;
      if (void 0 !== Ar) for (var wr in d) Ar.BABYLON[wr] || (Ar.BABYLON[wr] = d[wr]);
      var Or = void 0 !== a.g ? a.g : "undefined" != typeof window ? window : void 0;
      if (void 0 !== Or) for (var Cr in m) Or.BABYLON[Cr] || (Or.BABYLON[Cr] = m[Cr]);
      const Er = _;
      return i.default;
    })());
  }
});
export default require_babylonjs_loaders_min();
//# sourceMappingURL=babylonjs-loaders.js.map
