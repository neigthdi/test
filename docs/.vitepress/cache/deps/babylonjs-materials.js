import {
  require_babylon
} from "./chunk-CZWJT7L5.js";
import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/babylonjs-materials@8.32.0/node_modules/babylonjs-materials/babylonjs.materials.min.js
var require_babylonjs_materials_min = __commonJS({
  "node_modules/.pnpm/babylonjs-materials@8.32.0/node_modules/babylonjs-materials/babylonjs.materials.min.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "object" == typeof module ? module.exports = i(require_babylon()) : "function" == typeof define && define.amd ? define("babylonjs-materials", ["babylonjs"], i) : "object" == typeof exports ? exports["babylonjs-materials"] = i(require_babylon()) : e.MATERIALS = i(e.BABYLON);
    }("undefined" != typeof self ? self : "undefined" != typeof global ? global : exports, (e) => (() => {
      "use strict";
      var i = { 597: (i2) => {
        i2.exports = e;
      } }, t = {};
      function n(e2) {
        var r2 = t[e2];
        if (void 0 !== r2) return r2.exports;
        var o2 = t[e2] = { exports: {} };
        return i[e2](o2, o2.exports, n), o2.exports;
      }
      n.d = (e2, i2) => {
        for (var t2 in i2) n.o(i2, t2) && !n.o(e2, t2) && Object.defineProperty(e2, t2, { enumerable: true, get: i2[t2] });
      }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), n.o = (e2, i2) => Object.prototype.hasOwnProperty.call(e2, i2), n.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      n.d(r, { default: () => xe });
      var o = {};
      n.r(o), n.d(o, { CellMaterial: () => p, CustomMaterial: () => g, CustomShaderStructure: () => m, FireMaterial: () => P, FurMaterial: () => I, GradientMaterial: () => O, GridMaterial: () => U, LavaMaterial: () => z, MixMaterial: () => X, NormalMaterial: () => Y, PBRCustomMaterial: () => _, ShaderAlbedoParts: () => T, ShaderAlebdoParts: () => S, ShaderSpecialParts: () => v, ShadowOnlyMaterial: () => J, SimpleMaterial: () => te, SkyMaterial: () => se, TerrainMaterial: () => ue, TriPlanarMaterial: () => pe, WaterMaterial: () => Te });
      var s = {};
      n.r(s), n.d(s, { CellMaterial: () => p, CustomMaterial: () => g, CustomShaderStructure: () => m, FireMaterial: () => P, FurMaterial: () => I, GradientMaterial: () => O, GridMaterial: () => U, LavaMaterial: () => z, MixMaterial: () => X, NormalMaterial: () => Y, PBRCustomMaterial: () => _, ShaderAlbedoParts: () => T, ShaderAlebdoParts: () => S, ShaderSpecialParts: () => v, ShadowOnlyMaterial: () => J, SimpleMaterial: () => te, SkyMaterial: () => se, TerrainMaterial: () => ue, TriPlanarMaterial: () => pe, WaterMaterial: () => Te });
      var a = function(e2, i2) {
        return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, i3) {
          e3.__proto__ = i3;
        } || function(e3, i3) {
          for (var t2 in i3) Object.prototype.hasOwnProperty.call(i3, t2) && (e3[t2] = i3[t2]);
        }, a(e2, i2);
      };
      function f(e2, i2) {
        if ("function" != typeof i2 && null !== i2) throw new TypeError("Class extends value " + String(i2) + " is not a constructor or null");
        function t2() {
          this.constructor = e2;
        }
        a(e2, i2), e2.prototype = null === i2 ? Object.create(i2) : (t2.prototype = i2.prototype, new t2());
      }
      function l(e2, i2, t2, n2) {
        var r2, o2 = arguments.length, s2 = o2 < 3 ? i2 : null === n2 ? n2 = Object.getOwnPropertyDescriptor(i2, t2) : n2;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s2 = Reflect.decorate(e2, i2, t2, n2);
        else for (var a2 = e2.length - 1; a2 >= 0; a2--) (r2 = e2[a2]) && (s2 = (o2 < 3 ? r2(s2) : o2 > 3 ? r2(i2, t2, s2) : r2(i2, t2)) || s2);
        return o2 > 3 && s2 && Object.defineProperty(i2, t2, s2), s2;
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      var u = n(597), d = "cellPixelShader";
      u.ShaderStore.ShadersStore[d] || (u.ShaderStore.ShadersStore[d] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nvec3 computeCustomDiffuseLighting(lightingInfo info,vec3 diffuseBase,float shadow)\n{diffuseBase=info.diffuse*shadow;\n#ifdef CELLBASIC\nfloat level=1.0;if (info.ndl<0.5)\nlevel=0.5;diffuseBase.rgb*vec3(level,level,level);\n#else\nfloat ToonThresholds[4];ToonThresholds[0]=0.95;ToonThresholds[1]=0.5;ToonThresholds[2]=0.2;ToonThresholds[3]=0.03;float ToonBrightnessLevels[5];ToonBrightnessLevels[0]=1.0;ToonBrightnessLevels[1]=0.8;ToonBrightnessLevels[2]=0.6;ToonBrightnessLevels[3]=0.35;ToonBrightnessLevels[4]=0.2;if (info.ndl>ToonThresholds[0])\n{diffuseBase.rgb*=ToonBrightnessLevels[0];}\nelse if (info.ndl>ToonThresholds[1])\n{diffuseBase.rgb*=ToonBrightnessLevels[1];}\nelse if (info.ndl>ToonThresholds[2])\n{diffuseBase.rgb*=ToonBrightnessLevels[2];}\nelse if (info.ndl>ToonThresholds[3])\n{diffuseBase.rgb*=ToonBrightnessLevels[3];}\nelse\n{diffuseBase.rgb*=ToonBrightnessLevels[4];}\n#endif\nreturn max(diffuseBase,vec3(0.2));}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void)\n{\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nlightingInfo info;vec3 diffuseBase=vec3(0.,0.,0.);float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif \n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}");
      var c = "cellVertexShader";
      u.ShaderStore.ShadersStore[c] || (u.ShaderStore.ShadersStore[c] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var h = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.POINTSIZE = false, i3.FOG = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.NDOTL = true, i3.CUSTOMUSERLIGHTING = true, i3.CELLBASIC = true, i3.DEPTHPREPASS = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), p = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.diffuseColor = new u.Color3(1, 1, 1), n2._computeHighLevel = false, n2._disableLighting = false, n2._maxSimultaneousLights = 4, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new h());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && (r2._needUVs = false, o2.texturesEnabled && this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled)) {
            if (!this._diffuseTexture.isReady()) return false;
            r2._needUVs = true, r2.DIFFUSE = true;
          }
          if (r2.CELLBASIC = !this.computeHighLevel, (0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2, this.maxSimultaneousLights), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "mBones", "diffuseMatrix", "logarithmicDepthConstant"], c2 = ["diffuseSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], p2 = [];
            (0, u.AddClipPlaneUniforms)(d2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: p2, samplers: c2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("cell", { attributes: f2, uniformsNames: d2, uniformBuffersNames: p2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights - 1 } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var m2 = 0; m2 < e3.lightSources.length; m2++) if (!e3.lightSources[m2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled && (this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture), this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix())), (0, u.BindClipPlane)(this._activeEffect, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this._maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && e3.push(this._diffuseTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._diffuseTexture && i3.push(this._diffuseTexture), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this._diffuseTexture === i3;
        }, i2.prototype.dispose = function(i3) {
          this._diffuseTexture && this._diffuseTexture.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.getClassName = function() {
          return "CellMaterial";
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.CellMaterial", i3;
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsTexture)("diffuseTexture")], i2.prototype, "_diffuseTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture", void 0), l([(0, u.serializeAsColor3)("diffuse")], i2.prototype, "diffuseColor", void 0), l([(0, u.serialize)("computeHighLevel")], i2.prototype, "_computeHighLevel", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "computeHighLevel", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.CellMaterial", p);
      var m = function() {
      }, v = function() {
      }, g = function(e2) {
        function i2(t2, n2) {
          var r2 = e2.call(this, t2, n2, true) || this;
          return r2.CustomParts = new v(), r2.customShaderNameResolve = r2.Builder, r2.FragmentShader = u.Effect.ShadersStore.defaultPixelShader, r2.VertexShader = u.Effect.ShadersStore.defaultVertexShader, i2.ShaderIndexer++, r2._createdShaderName = "custom_" + i2.ShaderIndexer, r2;
        }
        return f(i2, e2), i2.prototype.AttachAfterBind = function(e3, i3) {
          if (this._newUniformInstances) for (var t2 in this._newUniformInstances) "vec2" == (n2 = t2.toString().split("-"))[0] ? i3.setVector2(n2[1], this._newUniformInstances[t2]) : "vec3" == n2[0] ? this._newUniformInstances[t2] instanceof u.Color3 ? i3.setColor3(n2[1], this._newUniformInstances[t2]) : i3.setVector3(n2[1], this._newUniformInstances[t2]) : "vec4" == n2[0] ? (this._newUniformInstances[t2] instanceof u.Color4 ? i3.setDirectColor4(n2[1], this._newUniformInstances[t2]) : i3.setVector4(n2[1], this._newUniformInstances[t2]), i3.setVector4(n2[1], this._newUniformInstances[t2])) : "mat4" == n2[0] ? i3.setMatrix(n2[1], this._newUniformInstances[t2]) : "float" == n2[0] && i3.setFloat(n2[1], this._newUniformInstances[t2]);
          if (this._newSamplerInstances) for (var t2 in this._newSamplerInstances) {
            var n2;
            "sampler2D" == (n2 = t2.toString().split("-"))[0] && this._newSamplerInstances[t2].isReady && this._newSamplerInstances[t2].isReady() && i3.setTexture(n2[1], this._newSamplerInstances[t2]);
          }
        }, i2.prototype.ReviewUniform = function(e3, i3) {
          if ("uniform" == e3 && this._newUniforms) for (var t2 = 0; t2 < this._newUniforms.length; t2++) -1 == this._customUniform[t2].indexOf("sampler") && i3.push(this._newUniforms[t2].replace(/\[\d*\]/g, ""));
          if ("sampler" == e3 && this._newUniforms) for (t2 = 0; t2 < this._newUniforms.length; t2++) -1 != this._customUniform[t2].indexOf("sampler") && i3.push(this._newUniforms[t2].replace(/\[\d*\]/g, ""));
          return i3;
        }, i2.prototype.Builder = function(e3, i3, t2, n2, r2, o2) {
          o2 && this._customAttributes && this._customAttributes.length > 0 && o2.push.apply(o2, this._customAttributes), this.ReviewUniform("uniform", i3), this.ReviewUniform("sampler", n2);
          var s2 = this._createdShaderName;
          return u.Effect.ShadersStore[s2 + "VertexShader"] && u.Effect.ShadersStore[s2 + "PixelShader"] || (u.Effect.ShadersStore[s2 + "VertexShader"] = this._injectCustomCode(this.VertexShader, "vertex"), u.Effect.ShadersStore[s2 + "PixelShader"] = this._injectCustomCode(this.FragmentShader, "fragment")), s2;
        }, i2.prototype._injectCustomCode = function(e3, i3) {
          var t2 = this._getCustomCode(i3);
          for (var n2 in t2) {
            var r2 = t2[n2];
            if (r2 && r2.length > 0) {
              var o2 = "#define " + n2;
              e3 = e3.replace(o2, "\n" + r2 + "\n" + o2);
            }
          }
          return e3;
        }, i2.prototype._getCustomCode = function(e3) {
          var i3, t2;
          return "vertex" === e3 ? { CUSTOM_VERTEX_BEGIN: this.CustomParts.Vertex_Begin, CUSTOM_VERTEX_DEFINITIONS: ((null === (i3 = this._customUniform) || void 0 === i3 ? void 0 : i3.join("\n")) || "") + (this.CustomParts.Vertex_Definitions || ""), CUSTOM_VERTEX_MAIN_BEGIN: this.CustomParts.Vertex_MainBegin, CUSTOM_VERTEX_UPDATE_POSITION: this.CustomParts.Vertex_Before_PositionUpdated, CUSTOM_VERTEX_UPDATE_NORMAL: this.CustomParts.Vertex_Before_NormalUpdated, CUSTOM_VERTEX_MAIN_END: this.CustomParts.Vertex_MainEnd, CUSTOM_VERTEX_UPDATE_WORLDPOS: this.CustomParts.Vertex_After_WorldPosComputed } : { CUSTOM_FRAGMENT_BEGIN: this.CustomParts.Fragment_Begin, CUSTOM_FRAGMENT_DEFINITIONS: ((null === (t2 = this._customUniform) || void 0 === t2 ? void 0 : t2.join("\n")) || "") + (this.CustomParts.Fragment_Definitions || ""), CUSTOM_FRAGMENT_MAIN_BEGIN: this.CustomParts.Fragment_MainBegin, CUSTOM_FRAGMENT_UPDATE_DIFFUSE: this.CustomParts.Fragment_Custom_Diffuse, CUSTOM_FRAGMENT_UPDATE_ALPHA: this.CustomParts.Fragment_Custom_Alpha, CUSTOM_FRAGMENT_BEFORE_LIGHTS: this.CustomParts.Fragment_Before_Lights, CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: this.CustomParts.Fragment_Before_FragColor, CUSTOM_FRAGMENT_MAIN_END: this.CustomParts.Fragment_MainEnd, CUSTOM_FRAGMENT_BEFORE_FOG: this.CustomParts.Fragment_Before_Fog };
        }, i2.prototype._afterBind = function(i3, t2, n2) {
          if (void 0 === t2 && (t2 = null), t2) {
            this.AttachAfterBind(i3, t2);
            try {
              e2.prototype._afterBind.call(this, i3, t2, n2);
            } catch (e3) {
            }
          }
        }, i2.prototype.AddUniform = function(e3, i3, t2) {
          return this._customUniform || (this._customUniform = [], this._newUniforms = [], this._newSamplerInstances = {}, this._newUniformInstances = {}), t2 && (-1 != i3.indexOf("sampler") ? this._newSamplerInstances[i3 + "-" + e3] = t2 : this._newUniformInstances[i3 + "-" + e3] = t2), this._customUniform.push("uniform " + i3 + " " + e3 + ";"), this._newUniforms.push(e3), this;
        }, i2.prototype.AddAttribute = function(e3) {
          return this._customAttributes || (this._customAttributes = []), this._customAttributes.push(e3), this;
        }, i2.prototype.Fragment_Begin = function(e3) {
          return this.CustomParts.Fragment_Begin = e3, this;
        }, i2.prototype.Fragment_Definitions = function(e3) {
          return this.CustomParts.Fragment_Definitions = e3, this;
        }, i2.prototype.Fragment_MainBegin = function(e3) {
          return this.CustomParts.Fragment_MainBegin = e3, this;
        }, i2.prototype.Fragment_MainEnd = function(e3) {
          return this.CustomParts.Fragment_MainEnd = e3, this;
        }, i2.prototype.Fragment_Custom_Diffuse = function(e3) {
          return this.CustomParts.Fragment_Custom_Diffuse = e3.replace("result", "diffuseColor"), this;
        }, i2.prototype.Fragment_Custom_Alpha = function(e3) {
          return this.CustomParts.Fragment_Custom_Alpha = e3.replace("result", "alpha"), this;
        }, i2.prototype.Fragment_Before_Lights = function(e3) {
          return this.CustomParts.Fragment_Before_Lights = e3, this;
        }, i2.prototype.Fragment_Before_Fog = function(e3) {
          return this.CustomParts.Fragment_Before_Fog = e3, this;
        }, i2.prototype.Fragment_Before_FragColor = function(e3) {
          return this.CustomParts.Fragment_Before_FragColor = e3.replace("result", "color"), this;
        }, i2.prototype.Vertex_Begin = function(e3) {
          return this.CustomParts.Vertex_Begin = e3, this;
        }, i2.prototype.Vertex_Definitions = function(e3) {
          return this.CustomParts.Vertex_Definitions = e3, this;
        }, i2.prototype.Vertex_MainBegin = function(e3) {
          return this.CustomParts.Vertex_MainBegin = e3, this;
        }, i2.prototype.Vertex_Before_PositionUpdated = function(e3) {
          return this.CustomParts.Vertex_Before_PositionUpdated = e3.replace("result", "positionUpdated"), this;
        }, i2.prototype.Vertex_Before_NormalUpdated = function(e3) {
          return this.CustomParts.Vertex_Before_NormalUpdated = e3.replace("result", "normalUpdated"), this;
        }, i2.prototype.Vertex_After_WorldPosComputed = function(e3) {
          return this.CustomParts.Vertex_After_WorldPosComputed = e3, this;
        }, i2.prototype.Vertex_MainEnd = function(e3) {
          return this.CustomParts.Vertex_MainEnd = e3, this;
        }, i2.ShaderIndexer = 1, i2;
      }(u.StandardMaterial);
      (0, u.RegisterClass)("BABYLON.CustomMaterial", g);
      var T = function() {
      }, S = T, _ = function(e2) {
        function i2(t2, n2) {
          var r2 = e2.call(this, t2, n2, true) || this;
          return r2.CustomParts = new T(), r2.customShaderNameResolve = r2.Builder, r2.FragmentShader = u.Effect.ShadersStore.pbrPixelShader, r2.VertexShader = u.Effect.ShadersStore.pbrVertexShader, r2.FragmentShader = r2.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g, u.Effect.IncludesShadersStore.pbrBlockAlbedoOpacity), r2.FragmentShader = r2.FragmentShader.replace(/#include<pbrBlockReflectivity>/g, u.Effect.IncludesShadersStore.pbrBlockReflectivity), r2.FragmentShader = r2.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g, u.Effect.IncludesShadersStore.pbrBlockFinalColorComposition), i2.ShaderIndexer++, r2._createdShaderName = "custompbr_" + i2.ShaderIndexer, r2;
        }
        return f(i2, e2), i2.prototype.AttachAfterBind = function(e3, i3) {
          if (this._newUniformInstances) for (var t2 in this._newUniformInstances) "vec2" == (n2 = t2.toString().split("-"))[0] ? i3.setVector2(n2[1], this._newUniformInstances[t2]) : "vec3" == n2[0] ? this._newUniformInstances[t2] instanceof u.Color3 ? i3.setColor3(n2[1], this._newUniformInstances[t2]) : i3.setVector3(n2[1], this._newUniformInstances[t2]) : "vec4" == n2[0] ? (this._newUniformInstances[t2] instanceof u.Color4 ? i3.setDirectColor4(n2[1], this._newUniformInstances[t2]) : i3.setVector4(n2[1], this._newUniformInstances[t2]), i3.setVector4(n2[1], this._newUniformInstances[t2])) : "mat4" == n2[0] ? i3.setMatrix(n2[1], this._newUniformInstances[t2]) : "float" == n2[0] && i3.setFloat(n2[1], this._newUniformInstances[t2]);
          if (this._newSamplerInstances) for (var t2 in this._newSamplerInstances) {
            var n2;
            "sampler2D" == (n2 = t2.toString().split("-"))[0] && this._newSamplerInstances[t2].isReady && this._newSamplerInstances[t2].isReady() && i3.setTexture(n2[1], this._newSamplerInstances[t2]);
          }
        }, i2.prototype.ReviewUniform = function(e3, i3) {
          if ("uniform" == e3 && this._newUniforms) for (var t2 = 0; t2 < this._newUniforms.length; t2++) -1 == this._customUniform[t2].indexOf("sampler") && i3.push(this._newUniforms[t2].replace(/\[\d*\]/g, ""));
          if ("sampler" == e3 && this._newUniforms) for (t2 = 0; t2 < this._newUniforms.length; t2++) -1 != this._customUniform[t2].indexOf("sampler") && i3.push(this._newUniforms[t2].replace(/\[\d*\]/g, ""));
          return i3;
        }, i2.prototype.Builder = function(e3, i3, t2, n2, r2, o2, s2) {
          if (s2) {
            var a2 = s2.processFinalCode;
            s2.processFinalCode = function(e4, i4) {
              if ("vertex" === e4) return a2 ? a2(e4, i4) : i4;
              var t3 = new u.ShaderCodeInliner(i4);
              return t3.inlineToken = "#define pbr_inline", t3.processCode(), a2 ? a2(e4, t3.code) : t3.code;
            };
          }
          o2 && this._customAttributes && this._customAttributes.length > 0 && o2.push.apply(o2, this._customAttributes), this.ReviewUniform("uniform", i3), this.ReviewUniform("sampler", n2);
          var f2 = this._createdShaderName;
          return u.Effect.ShadersStore[f2 + "VertexShader"] && u.Effect.ShadersStore[f2 + "PixelShader"] || (u.Effect.ShadersStore[f2 + "VertexShader"] = this._injectCustomCode(this.VertexShader, "vertex"), u.Effect.ShadersStore[f2 + "PixelShader"] = this._injectCustomCode(this.FragmentShader, "fragment")), f2;
        }, i2.prototype._injectCustomCode = function(e3, i3) {
          var t2 = this._getCustomCode(i3);
          for (var n2 in t2) {
            var r2 = t2[n2];
            if (r2 && r2.length > 0) {
              var o2 = "#define " + n2;
              e3 = e3.replace(o2, "\n" + r2 + "\n" + o2);
            }
          }
          return e3;
        }, i2.prototype._getCustomCode = function(e3) {
          var i3, t2;
          return "vertex" === e3 ? { CUSTOM_VERTEX_BEGIN: this.CustomParts.Vertex_Begin, CUSTOM_VERTEX_DEFINITIONS: ((null === (i3 = this._customUniform) || void 0 === i3 ? void 0 : i3.join("\n")) || "") + (this.CustomParts.Vertex_Definitions || ""), CUSTOM_VERTEX_MAIN_BEGIN: this.CustomParts.Vertex_MainBegin, CUSTOM_VERTEX_UPDATE_POSITION: this.CustomParts.Vertex_Before_PositionUpdated, CUSTOM_VERTEX_UPDATE_NORMAL: this.CustomParts.Vertex_Before_NormalUpdated, CUSTOM_VERTEX_MAIN_END: this.CustomParts.Vertex_MainEnd, CUSTOM_VERTEX_UPDATE_WORLDPOS: this.CustomParts.Vertex_After_WorldPosComputed } : { CUSTOM_FRAGMENT_BEGIN: this.CustomParts.Fragment_Begin, CUSTOM_FRAGMENT_MAIN_BEGIN: this.CustomParts.Fragment_MainBegin, CUSTOM_FRAGMENT_DEFINITIONS: ((null === (t2 = this._customUniform) || void 0 === t2 ? void 0 : t2.join("\n")) || "") + (this.CustomParts.Fragment_Definitions || ""), CUSTOM_FRAGMENT_UPDATE_ALBEDO: this.CustomParts.Fragment_Custom_Albedo, CUSTOM_FRAGMENT_UPDATE_ALPHA: this.CustomParts.Fragment_Custom_Alpha, CUSTOM_FRAGMENT_BEFORE_LIGHTS: this.CustomParts.Fragment_Before_Lights, CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS: this.CustomParts.Fragment_Custom_MetallicRoughness, CUSTOM_FRAGMENT_UPDATE_MICROSURFACE: this.CustomParts.Fragment_Custom_MicroSurface, CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION: this.CustomParts.Fragment_Before_FinalColorComposition, CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: this.CustomParts.Fragment_Before_FragColor, CUSTOM_FRAGMENT_MAIN_END: this.CustomParts.Fragment_MainEnd, CUSTOM_FRAGMENT_BEFORE_FOG: this.CustomParts.Fragment_Before_Fog };
        }, i2.prototype._afterBind = function(i3, t2, n2) {
          if (void 0 === t2 && (t2 = null), t2) {
            this.AttachAfterBind(i3, t2);
            try {
              e2.prototype._afterBind.call(this, i3, t2, n2);
            } catch (e3) {
            }
          }
        }, i2.prototype.AddUniform = function(e3, i3, t2) {
          return this._customUniform || (this._customUniform = [], this._newUniforms = [], this._newSamplerInstances = {}, this._newUniformInstances = {}), t2 && (-1 != i3.indexOf("sampler") ? this._newSamplerInstances[i3 + "-" + e3] = t2 : this._newUniformInstances[i3 + "-" + e3] = t2), this._customUniform.push("uniform " + i3 + " " + e3 + ";"), this._newUniforms.push(e3), this;
        }, i2.prototype.AddAttribute = function(e3) {
          return this._customAttributes || (this._customAttributes = []), this._customAttributes.push(e3), this;
        }, i2.prototype.Fragment_Begin = function(e3) {
          return this.CustomParts.Fragment_Begin = e3, this;
        }, i2.prototype.Fragment_Definitions = function(e3) {
          return this.CustomParts.Fragment_Definitions = e3, this;
        }, i2.prototype.Fragment_MainBegin = function(e3) {
          return this.CustomParts.Fragment_MainBegin = e3, this;
        }, i2.prototype.Fragment_Custom_Albedo = function(e3) {
          return this.CustomParts.Fragment_Custom_Albedo = e3.replace("result", "surfaceAlbedo"), this;
        }, i2.prototype.Fragment_Custom_Alpha = function(e3) {
          return this.CustomParts.Fragment_Custom_Alpha = e3.replace("result", "alpha"), this;
        }, i2.prototype.Fragment_Before_Lights = function(e3) {
          return this.CustomParts.Fragment_Before_Lights = e3, this;
        }, i2.prototype.Fragment_Custom_MetallicRoughness = function(e3) {
          return this.CustomParts.Fragment_Custom_MetallicRoughness = e3, this;
        }, i2.prototype.Fragment_Custom_MicroSurface = function(e3) {
          return this.CustomParts.Fragment_Custom_MicroSurface = e3, this;
        }, i2.prototype.Fragment_Before_Fog = function(e3) {
          return this.CustomParts.Fragment_Before_Fog = e3, this;
        }, i2.prototype.Fragment_Before_FinalColorComposition = function(e3) {
          return this.CustomParts.Fragment_Before_FinalColorComposition = e3, this;
        }, i2.prototype.Fragment_Before_FragColor = function(e3) {
          return this.CustomParts.Fragment_Before_FragColor = e3.replace("result", "color"), this;
        }, i2.prototype.Fragment_MainEnd = function(e3) {
          return this.CustomParts.Fragment_MainEnd = e3, this;
        }, i2.prototype.Vertex_Begin = function(e3) {
          return this.CustomParts.Vertex_Begin = e3, this;
        }, i2.prototype.Vertex_Definitions = function(e3) {
          return this.CustomParts.Vertex_Definitions = e3, this;
        }, i2.prototype.Vertex_MainBegin = function(e3) {
          return this.CustomParts.Vertex_MainBegin = e3, this;
        }, i2.prototype.Vertex_Before_PositionUpdated = function(e3) {
          return this.CustomParts.Vertex_Before_PositionUpdated = e3.replace("result", "positionUpdated"), this;
        }, i2.prototype.Vertex_Before_NormalUpdated = function(e3) {
          return this.CustomParts.Vertex_Before_NormalUpdated = e3.replace("result", "normalUpdated"), this;
        }, i2.prototype.Vertex_After_WorldPosComputed = function(e3) {
          return this.CustomParts.Vertex_After_WorldPosComputed = e3, this;
        }, i2.prototype.Vertex_MainEnd = function(e3) {
          return this.CustomParts.Vertex_MainEnd = e3, this;
        }, i2.ShaderIndexer = 1, i2;
      }(u.PBRMaterial);
      (0, u.RegisterClass)("BABYLON.PBRCustomMaterial", _);
      var x = "firePixelShader";
      u.ShaderStore.ShadersStore[x] || (u.ShaderStore.ShadersStore[x] = "precision highp float;uniform vec4 vEyePosition;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\nuniform sampler2D distortionSampler;uniform sampler2D opacitySampler;\n#ifdef DIFFUSE\nvarying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nvec4 bx2(vec4 x)\n{return vec4(2.0)*x-vec4(1.0);}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);float alpha=1.0;\n#ifdef DIFFUSE\nconst float distortionAmount0 =0.092;const float distortionAmount1 =0.092;const float distortionAmount2 =0.092;vec2 heightAttenuation=vec2(0.3,0.39);vec4 noise0=texture2D(distortionSampler,vDistortionCoords1);vec4 noise1=texture2D(distortionSampler,vDistortionCoords2);vec4 noise2=texture2D(distortionSampler,vDistortionCoords3);vec4 noiseSum=bx2(noise0)*distortionAmount0+bx2(noise1)*distortionAmount1+bx2(noise2)*distortionAmount2;vec4 perturbedBaseCoords=vec4(vDiffuseUV,0.0,1.0)+noiseSum*(vDiffuseUV.y*heightAttenuation.x+heightAttenuation.y);vec4 opacityColor=texture2D(opacitySampler,perturbedBaseCoords.xy);\n#ifdef ALPHATEST\nif (opacityColor.r<0.1)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor=texture2D(diffuseSampler,perturbedBaseCoords.xy)*2.0;baseColor*=opacityColor;baseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(1.0,1.0,1.0);\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec4 color=vec4(baseColor.rgb,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}");
      var E = "fireVertexShader";
      u.ShaderStore.ShadersStore[E] || (u.ShaderStore.ShadersStore[E] = "precision highp float;attribute vec3 position;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\nuniform float time;uniform float speed;\n#ifdef DIFFUSE\nvarying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef DIFFUSE\nvDiffuseUV=uv;vDiffuseUV.y-=0.2;\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#ifdef DIFFUSE\nvec3 layerSpeed=vec3(-0.2,-0.52,-0.1)*speed;vDistortionCoords1.x=uv.x;vDistortionCoords1.y=uv.y+layerSpeed.x*time/1000.0;vDistortionCoords2.x=uv.x;vDistortionCoords2.y=uv.y+layerSpeed.y*time/1000.0;vDistortionCoords3.x=uv.x;vDistortionCoords3.y=uv.y+layerSpeed.z*time/1000.0;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var C = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.UV1 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.BonesPerMesh = 0, i3.NUM_BONE_INFLUENCERS = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), P = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.diffuseColor = new u.Color3(1, 1, 1), n2.speed = 1, n2._scaledDiffuse = new u.Color3(), n2._lastTime = 0, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return false;
        }, i2.prototype.needAlphaTesting = function() {
          return true;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new C());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && (r2._needUVs = false, this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled)) {
            if (!this._diffuseTexture.isReady()) return false;
            r2._needUVs = true, r2.DIFFUSE = true;
          }
          if (r2.ALPHATEST = !!this._opacityTexture, r2._areMiscDirty && (r2.POINTSIZE = this.pointsCloud || o2.forcePointsCloud, r2.FOG = o2.fogEnabled && e3.applyFog && o2.fogMode !== u.Scene.FOGMODE_NONE && this.fogEnabled, r2.LOGARITHMICDEPTH = this._useLogarithmicDepth), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, false, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = ["world", "view", "viewProjection", "vEyePosition", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "mBones", "diffuseMatrix", "logarithmicDepthConstant", "time", "speed"];
            (0, u.AddClipPlaneUniforms)(l2);
            var d2 = r2.toString();
            i3.setEffect(o2.getEngine().createEffect("fire", { attributes: f2, uniformsNames: l2, uniformBuffersNames: [], samplers: ["diffuseSampler", "distortionSampler", "opacitySampler"], defines: d2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: null, maxSimultaneousLights: 4, transformFeedbackVaryings: null }, s2), r2, this._materialContext);
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled && (this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture), this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix()), this._activeEffect.setTexture("distortionSampler", this._distortionTexture), this._activeEffect.setTexture("opacitySampler", this._opacityTexture)), (0, u.BindClipPlane)(this._activeEffect, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this._scaledDiffuse, this.alpha * i3.visibility), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._lastTime += n2.getEngine().getDeltaTime(), this._activeEffect.setFloat("time", this._lastTime), this._activeEffect.setFloat("speed", this.speed), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && e3.push(this._diffuseTexture), this._distortionTexture && this._distortionTexture.animations && this._distortionTexture.animations.length > 0 && e3.push(this._distortionTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && e3.push(this._opacityTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._diffuseTexture && i3.push(this._diffuseTexture), this._distortionTexture && i3.push(this._distortionTexture), this._opacityTexture && i3.push(this._opacityTexture), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this._diffuseTexture === i3 || this._distortionTexture === i3 || this._opacityTexture === i3;
        }, i2.prototype.getClassName = function() {
          return "FireMaterial";
        }, i2.prototype.dispose = function(i3) {
          this._diffuseTexture && this._diffuseTexture.dispose(), this._distortionTexture && this._distortionTexture.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.FireMaterial", i3.diffuseColor = this.diffuseColor.asArray(), i3.speed = this.speed, this._diffuseTexture && (i3._diffuseTexture = this._diffuseTexture.serialize()), this._distortionTexture && (i3._distortionTexture = this._distortionTexture.serialize()), this._opacityTexture && (i3._opacityTexture = this._opacityTexture.serialize()), i3;
        }, i2.Parse = function(e3, t2, n2) {
          var r2 = new i2(e3.name, t2);
          return r2.diffuseColor = u.Color3.FromArray(e3.diffuseColor), r2.speed = e3.speed, r2.alpha = e3.alpha, r2.id = e3.id, u.Tags.AddTagsTo(r2, e3.tags), r2.backFaceCulling = e3.backFaceCulling, r2.wireframe = e3.wireframe, e3._diffuseTexture && (r2._diffuseTexture = u.Texture.Parse(e3._diffuseTexture, t2, n2)), e3._distortionTexture && (r2._distortionTexture = u.Texture.Parse(e3._distortionTexture, t2, n2)), e3._opacityTexture && (r2._opacityTexture = u.Texture.Parse(e3._opacityTexture, t2, n2)), r2;
        }, l([(0, u.serializeAsTexture)("diffuseTexture")], i2.prototype, "_diffuseTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture", void 0), l([(0, u.serializeAsTexture)("distortionTexture")], i2.prototype, "_distortionTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "distortionTexture", void 0), l([(0, u.serializeAsTexture)("opacityTexture")], i2.prototype, "_opacityTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "opacityTexture", void 0), l([(0, u.serializeAsColor3)("diffuse")], i2.prototype, "diffuseColor", void 0), l([(0, u.serialize)()], i2.prototype, "speed", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.FireMaterial", P);
      var y = "furPixelShader";
      u.ShaderStore.ShadersStore[y] || (u.ShaderStore.ShadersStore[y] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 furColor;uniform float furLength;varying vec3 vPositionW;varying float vfur_length;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef HIGHLEVEL\nuniform float furOffset;uniform float furOcclusion;uniform sampler2D furTexture;varying vec2 vFurUV;\n#endif\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<fogFragmentDeclaration>\n#include<clipPlaneFragmentDeclaration>\nfloat Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=furColor;vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor*=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef HIGHLEVEL\nvec4 furTextureColor=texture2D(furTexture,vec2(vFurUV.x,vFurUV.y));if (furTextureColor.a<=0.0 || furTextureColor.g<furOffset) {discard;}\nfloat occlusion=mix(0.0,furTextureColor.b*1.2,furOffset);baseColor=vec4(baseColor.xyz*max(occlusion,furOcclusion),1.1-furOffset);\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase.rgb*baseColor.rgb,0.0,1.0);\n#ifdef HIGHLEVEL\nvec4 color=vec4(finalDiffuse,alpha);\n#else\nfloat r=vfur_length/furLength*0.5;vec4 color=vec4(finalDiffuse*(0.5+r),alpha);\n#endif\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}");
      var A = "furVertexShader";
      u.ShaderStore.ShadersStore[A] || (u.ShaderStore.ShadersStore[A] = "precision highp float;attribute vec3 position;attribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\nuniform float furLength;uniform float furAngle;\n#ifdef HIGHLEVEL\nuniform float furOffset;uniform vec3 furGravity;uniform float furTime;uniform float furSpacing;uniform float furDensity;\n#endif\n#ifdef HEIGHTMAP\nuniform sampler2D heightTexture;\n#endif\n#ifdef HIGHLEVEL\nvarying vec2 vFurUV;\n#endif\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\nvarying float vfur_length;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nfloat Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nfloat r=Rand(position);\n#ifdef HEIGHTMAP\n#if __VERSION__>100\nvfur_length=furLength*texture(heightTexture,uv).x;\n#else\nvfur_length=furLength*texture2D(heightTexture,uv).r;\n#endif\n#else \nvfur_length=(furLength*r);\n#endif\nvec3 tangent1=vec3(normal.y,-normal.x,0);vec3 tangent2=vec3(-normal.z,0,normal.x);r=Rand(tangent1*r);float J=(2.0+4.0*r);r=Rand(tangent2*r);float K=(2.0+2.0*r);tangent1=tangent1*J+tangent2*K;tangent1=normalize(tangent1);vec3 newPosition=position+normal*vfur_length*cos(furAngle)+tangent1*vfur_length*sin(furAngle);\n#ifdef HIGHLEVEL\nvec3 forceDirection=vec3(0.0,0.0,0.0);forceDirection.x=sin(furTime+position.x*0.05)*0.2;forceDirection.y=cos(furTime*0.7+position.y*0.04)*0.2;forceDirection.z=sin(furTime*0.7+position.z*0.04)*0.2;vec3 displacement=vec3(0.0,0.0,0.0);displacement=furGravity+forceDirection;float displacementFactor=pow(furOffset,3.0);vec3 aNormal=normal;aNormal.xyz+=displacement*displacementFactor;newPosition=vec3(newPosition.x,newPosition.y,newPosition.z)+(normalize(aNormal)*furOffset*furSpacing);\n#endif\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\ngl_Position=viewProjection*finalWorld*vec4(newPosition,1.0);vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#ifdef HIGHLEVEL\nvFurUV=vDiffuseUV*furDensity;\n#endif\n#else\n#ifdef HIGHLEVEL\nvFurUV=uv*furDensity;\n#endif\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var L = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.HEIGHTMAP = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.HIGHLEVEL = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), I = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.diffuseColor = new u.Color3(1, 1, 1), n2.furLength = 1, n2.furAngle = 0, n2.furColor = new u.Color3(0.44, 0.21, 0.02), n2.furOffset = 0, n2.furSpacing = 12, n2.furGravity = new u.Vector3(0, 0, 0), n2.furSpeed = 100, n2.furDensity = 20, n2.furOcclusion = 0, n2._disableLighting = false, n2._maxSimultaneousLights = 4, n2.highLevelFur = true, n2._furTime = 0, n2;
        }
        return f(i2, e2), Object.defineProperty(i2.prototype, "furTime", { get: function() {
          return this._furTime;
        }, set: function(e3) {
          this._furTime = e3;
        }, enumerable: false, configurable: true }), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.updateFur = function() {
          for (var e3 = 1; e3 < this._meshes.length; e3++) {
            var i3 = this._meshes[e3].material;
            i3.furLength = this.furLength, i3.furAngle = this.furAngle, i3.furGravity = this.furGravity, i3.furSpacing = this.furSpacing, i3.furSpeed = this.furSpeed, i3.furColor = this.furColor, i3.diffuseTexture = this.diffuseTexture, i3.furTexture = this.furTexture, i3.highLevelFur = this.highLevelFur, i3.furTime = this.furTime, i3.furDensity = this.furDensity;
          }
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new L());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && o2.texturesEnabled) {
            if (this.diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled) {
              if (!this.diffuseTexture.isReady()) return false;
              r2._needUVs = true, r2.DIFFUSE = true;
            }
            if (this.heightTexture && s2.getCaps().maxVertexTextureImageUnits) {
              if (!this.heightTexture.isReady()) return false;
              r2._needUVs = true, r2.HEIGHTMAP = true;
            }
          }
          if (this.highLevelFur !== r2.HIGHLEVEL && (r2.HIGHLEVEL = true, r2.markAsUnprocessed()), (0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2, this.maxSimultaneousLights), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "mBones", "diffuseMatrix", "logarithmicDepthConstant", "furLength", "furAngle", "furColor", "furOffset", "furGravity", "furTime", "furSpacing", "furDensity", "furOcclusion"];
            (0, u.AddClipPlaneUniforms)(d2);
            var c2 = ["diffuseSampler", "heightTexture", "furTexture", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], h2 = [];
            (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("fur", { attributes: f2, uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var p2 = 0; p2 < e3.lightSources.length; p2++) if (!e3.lightSources[p2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled && (this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture), this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix())), this._heightTexture && this._activeEffect.setTexture("heightTexture", this._heightTexture), (0, u.BindClipPlane)(this._activeEffect, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this.maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._activeEffect.setFloat("furLength", this.furLength), this._activeEffect.setFloat("furAngle", this.furAngle), this._activeEffect.setColor4("furColor", this.furColor, 1), this.highLevelFur && (this._activeEffect.setVector3("furGravity", this.furGravity), this._activeEffect.setFloat("furOffset", this.furOffset), this._activeEffect.setFloat("furSpacing", this.furSpacing), this._activeEffect.setFloat("furDensity", this.furDensity), this._activeEffect.setFloat("furOcclusion", this.furOcclusion), this._furTime += this.getScene().getEngine().getDeltaTime() / this.furSpeed, this._activeEffect.setFloat("furTime", this._furTime), this._activeEffect.setTexture("furTexture", this.furTexture)), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0 && e3.push(this.diffuseTexture), this.heightTexture && this.heightTexture.animations && this.heightTexture.animations.length > 0 && e3.push(this.heightTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._diffuseTexture && i3.push(this._diffuseTexture), this._heightTexture && i3.push(this._heightTexture), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this.diffuseTexture === i3 || this._heightTexture === i3;
        }, i2.prototype.dispose = function(i3) {
          if (this.diffuseTexture && this.diffuseTexture.dispose(), this._meshes) for (var t2 = 1; t2 < this._meshes.length; t2++) {
            var n2 = this._meshes[t2].material;
            n2 && n2.dispose(i3), this._meshes[t2].dispose();
          }
          e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.FurMaterial", this._meshes && (i3.sourceMeshName = this._meshes[0].name, i3.quality = this._meshes.length), i3;
        }, i2.prototype.getClassName = function() {
          return "FurMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          var r2 = u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
          return e3.sourceMeshName && r2.highLevelFur && t2.executeWhenReady(function() {
            var n3 = t2.getMeshByName(e3.sourceMeshName);
            if (n3) {
              var o2 = i2.GenerateTexture("Fur Texture", t2);
              r2.furTexture = o2, i2.FurifyMesh(n3, e3.quality);
            }
          }), r2;
        }, i2.GenerateTexture = function(e3, i3) {
          for (var t2 = new u.DynamicTexture("FurTexture " + e3, 256, i3, true), n2 = t2.getContext(), r2 = 0; r2 < 2e4; ++r2) n2.fillStyle = "rgba(255, " + Math.floor(255 * Math.random()) + ", " + Math.floor(255 * Math.random()) + ", 1)", n2.fillRect(Math.random() * t2.getSize().width, Math.random() * t2.getSize().height, 2, 2);
          return t2.update(false), t2.wrapU = u.Texture.WRAP_ADDRESSMODE, t2.wrapV = u.Texture.WRAP_ADDRESSMODE, t2;
        }, i2.FurifyMesh = function(e3, t2) {
          var n2, r2 = [e3], o2 = e3.material;
          if (!(o2 instanceof i2)) throw "The material of the source mesh must be a Fur Material";
          for (n2 = 1; n2 < t2; n2++) {
            var s2 = new i2(o2.name + n2, e3.getScene());
            e3.getScene().materials.pop(), u.Tags.EnableFor(s2), u.Tags.AddTagsTo(s2, "furShellMaterial"), s2.furLength = o2.furLength, s2.furAngle = o2.furAngle, s2.furGravity = o2.furGravity, s2.furSpacing = o2.furSpacing, s2.furSpeed = o2.furSpeed, s2.furColor = o2.furColor, s2.diffuseTexture = o2.diffuseTexture, s2.furOffset = n2 / t2, s2.furTexture = o2.furTexture, s2.highLevelFur = o2.highLevelFur, s2.furTime = o2.furTime, s2.furDensity = o2.furDensity;
            var a2 = e3.clone(e3.name + n2);
            a2.material = s2, a2.skeleton = e3.skeleton, a2.position = u.Vector3.Zero(), r2.push(a2);
          }
          for (n2 = 1; n2 < r2.length; n2++) r2[n2].parent = e3;
          return e3.material._meshes = r2, r2;
        }, l([(0, u.serializeAsTexture)("diffuseTexture")], i2.prototype, "_diffuseTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture", void 0), l([(0, u.serializeAsTexture)("heightTexture")], i2.prototype, "_heightTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "heightTexture", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "diffuseColor", void 0), l([(0, u.serialize)()], i2.prototype, "furLength", void 0), l([(0, u.serialize)()], i2.prototype, "furAngle", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "furColor", void 0), l([(0, u.serialize)()], i2.prototype, "furOffset", void 0), l([(0, u.serialize)()], i2.prototype, "furSpacing", void 0), l([(0, u.serializeAsVector3)()], i2.prototype, "furGravity", void 0), l([(0, u.serialize)()], i2.prototype, "furSpeed", void 0), l([(0, u.serialize)()], i2.prototype, "furDensity", void 0), l([(0, u.serialize)()], i2.prototype, "furOcclusion", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), l([(0, u.serialize)()], i2.prototype, "highLevelFur", void 0), l([(0, u.serialize)()], i2.prototype, "furTime", null), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.FurMaterial", I);
      var M = "gradientPixelShader";
      u.ShaderStore.ShadersStore[M] || (u.ShaderStore.ShadersStore[M] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 topColor;uniform vec4 bottomColor;uniform float offset;uniform float scale;uniform float smoothness;varying vec3 vPositionW;varying vec3 vPosition;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);float h=vPosition.y*scale+offset;float mysmoothness=clamp(smoothness,0.01,max(smoothness,10.));vec4 baseColor=mix(bottomColor,topColor,max(pow(max(h,0.0),mysmoothness),0.0));vec3 diffuseColor=baseColor.rgb;float alpha=baseColor.a;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef EMISSIVE\nvec3 diffuseBase=baseColor.rgb;\n#else\nvec3 diffuseBase=vec3(0.,0.,0.);\n#endif\nlightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n");
      var F = "gradientVertexShader";
      u.ShaderStore.ShadersStore[F] || (u.ShaderStore.ShadersStore[F] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;varying vec3 vPosition;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);vPosition=position;\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var N = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.EMISSIVE = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), O = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2._maxSimultaneousLights = 4, n2.topColor = new u.Color3(1, 0, 0), n2.topColorAlpha = 1, n2.bottomColor = new u.Color3(0, 0, 1), n2.bottomColorAlpha = 1, n2.offset = 0, n2.scale = 1, n2.smoothness = 1, n2._disableLighting = false, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1 || this.topColorAlpha < 1 || this.bottomColorAlpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return true;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new N());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if ((0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), r2.EMISSIVE = this._disableLighting, (0, u.PrepareDefinesForAttributes)(e3, r2, false, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vFogInfos", "vFogColor", "pointSize", "mBones", "logarithmicDepthConstant", "topColor", "bottomColor", "offset", "smoothness", "scale"];
            (0, u.AddClipPlaneUniforms)(d2);
            var c2 = ["areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], h2 = [];
            (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: r2, maxSimultaneousLights: 4 }), i3.setEffect(o2.getEngine().createEffect("gradient", { attributes: f2, uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var p2 = 0; p2 < e3.lightSources.length; p2++) if (!e3.lightSources[p2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, o2), this._mustRebind(n2, o2, t2) && ((0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this.maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._activeEffect.setColor4("topColor", this.topColor, this.topColorAlpha), this._activeEffect.setColor4("bottomColor", this.bottomColor, this.bottomColorAlpha), this._activeEffect.setFloat("offset", this.offset), this._activeEffect.setFloat("scale", this.scale), this._activeEffect.setFloat("smoothness", this.smoothness), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          return [];
        }, i2.prototype.dispose = function(i3) {
          e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.GradientMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "GradientMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "topColor", void 0), l([(0, u.serialize)()], i2.prototype, "topColorAlpha", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "bottomColor", void 0), l([(0, u.serialize)()], i2.prototype, "bottomColorAlpha", void 0), l([(0, u.serialize)()], i2.prototype, "offset", void 0), l([(0, u.serialize)()], i2.prototype, "scale", void 0), l([(0, u.serialize)()], i2.prototype, "smoothness", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.GradientMaterial", O);
      var D = "gridPixelShader";
      u.ShaderStore.ShadersStore[D] || (u.ShaderStore.ShadersStore[D] = "#extension GL_OES_standard_derivatives : enable\n#define SQRT2 1.41421356\n#define PI 3.14159\nprecision highp float;uniform float visibility;uniform vec3 mainColor;uniform vec3 lineColor;uniform vec4 gridControl;uniform vec3 gridOffset;varying vec3 vPosition;varying vec3 vNormal;\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#ifdef OPACITY\nvarying vec2 vOpacityUV;uniform sampler2D opacitySampler;uniform vec2 vOpacityInfos;\n#endif\nfloat getDynamicVisibility(float position) {float majorGridFrequency=gridControl.y;if (floor(position+0.5)==floor(position/majorGridFrequency+0.5)*majorGridFrequency)\n{return 1.0;}\nreturn gridControl.z;}\nfloat getAnisotropicAttenuation(float differentialLength) {const float maxNumberOfLines=10.0;return clamp(1.0/(differentialLength+1.0)-1.0/maxNumberOfLines,0.0,1.0);}\nfloat isPointOnLine(float position,float differentialLength) {float fractionPartOfPosition=position-floor(position+0.5); \nfractionPartOfPosition/=differentialLength; \n#ifdef ANTIALIAS\nfractionPartOfPosition=clamp(fractionPartOfPosition,-1.,1.);float result=0.5+0.5*cos(fractionPartOfPosition*PI); \nreturn result;\n#else\nreturn abs(fractionPartOfPosition)<SQRT2/4. ? 1. : 0.;\n#endif\n}\nfloat contributionOnAxis(float position) {float differentialLength=length(vec2(dFdx(position),dFdy(position)));differentialLength*=SQRT2; \nfloat result=isPointOnLine(position,differentialLength);float dynamicVisibility=getDynamicVisibility(position);result*=dynamicVisibility;float anisotropicAttenuation=getAnisotropicAttenuation(differentialLength);result*=anisotropicAttenuation;return result;}\nfloat normalImpactOnAxis(float x) {float normalImpact=clamp(1.0-3.0*abs(x*x*x),0.0,1.0);return normalImpact;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nfloat gridRatio=gridControl.x;vec3 gridPos=(vPosition+gridOffset.xyz)/gridRatio;float x=contributionOnAxis(gridPos.x);float y=contributionOnAxis(gridPos.y);float z=contributionOnAxis(gridPos.z);vec3 normal=normalize(vNormal);x*=normalImpactOnAxis(normal.x);y*=normalImpactOnAxis(normal.y);z*=normalImpactOnAxis(normal.z);\n#ifdef MAX_LINE\nfloat grid=clamp(max(max(x,y),z),0.,1.);\n#else\nfloat grid=clamp(x+y+z,0.,1.);\n#endif\nvec3 color=mix(mainColor,lineColor,grid);\n#ifdef FOG\n#include<fogFragment>\n#endif\nfloat opacity=1.0;\n#ifdef TRANSPARENT\nopacity=clamp(grid,0.08,gridControl.w*grid);\n#endif\n#ifdef OPACITY\nopacity*=texture2D(opacitySampler,vOpacityUV).a;\n#endif\ngl_FragColor=vec4(color.rgb,opacity*visibility);\n#ifdef TRANSPARENT\n#ifdef PREMULTIPLYALPHA\ngl_FragColor.rgb*=opacity;\n#endif\n#else\n#endif\n#include<logDepthFragment>\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n");
      var R = "gridVertexShader";
      u.ShaderStore.ShadersStore[R] || (u.ShaderStore.ShadersStore[R] = "precision highp float;attribute vec3 position;attribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#include<instancesDeclaration>\n#include<__decl__sceneVertex>\nvarying vec3 vPosition;varying vec3 vNormal;\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#ifdef OPACITY\nvarying vec2 vOpacityUV;uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;\n#endif\n#include<clipPlaneVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\n#include<fogVertex>\nvec4 cameraSpacePosition=view*worldPos;gl_Position=projection*cameraSpacePosition;\n#ifdef OPACITY\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\nif (vOpacityInfos.x==0.)\n{vOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));}\nelse\n{vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));}\n#endif \n#include<clipPlaneVertex>\n#include<logDepthVertex>\nvPosition=position;vNormal=normal;\n#define CUSTOM_VERTEX_MAIN_END\n}");
      var b = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.OPACITY = false, i3.ANTIALIAS = false, i3.TRANSPARENT = false, i3.FOG = false, i3.PREMULTIPLYALPHA = false, i3.MAX_LINE = false, i3.UV1 = false, i3.UV2 = false, i3.INSTANCES = false, i3.THIN_INSTANCES = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), U = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.mainColor = u.Color3.Black(), n2.lineColor = u.Color3.Teal(), n2.gridRatio = 1, n2.gridOffset = u.Vector3.Zero(), n2.majorUnitFrequency = 10, n2.minorUnitVisibility = 0.33, n2.opacity = 1, n2.antialias = true, n2.preMultiplyAlpha = false, n2.useMaxLine = false, n2._gridControl = new u.Vector4(n2.gridRatio, n2.majorUnitFrequency, n2.minorUnitVisibility, n2.opacity), n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.opacity < 1 || this._opacityTexture && this._opacityTexture.isReady();
        }, i2.prototype.needAlphaBlendingForMesh = function(e3) {
          return e3.visibility < 1 || this.needAlphaBlending();
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new b());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          if (r2.TRANSPARENT !== this.opacity < 1 && (r2.TRANSPARENT = !r2.TRANSPARENT, r2.markAsUnprocessed()), r2.PREMULTIPLYALPHA != this.preMultiplyAlpha && (r2.PREMULTIPLYALPHA = !r2.PREMULTIPLYALPHA, r2.markAsUnprocessed()), r2.MAX_LINE !== this.useMaxLine && (r2.MAX_LINE = !r2.MAX_LINE, r2.markAsUnprocessed()), r2.ANTIALIAS !== this.antialias && (r2.ANTIALIAS = !r2.ANTIALIAS, r2.markAsUnprocessed()), r2._areTexturesDirty && (r2._needUVs = false, o2.texturesEnabled && this._opacityTexture && u.MaterialFlags.OpacityTextureEnabled)) {
            if (!this._opacityTexture.isReady()) return false;
            r2._needUVs = true, r2.OPACITY = true;
          }
          if ((0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, false, this.fogEnabled, false, r2, void 0, void 0, void 0, this._setVertexOutputInvariant), (0, u.PrepareDefinesForFrameBoundValues)(o2, o2.getEngine(), this, r2, !!t2), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial(), (0, u.PrepareDefinesForAttributes)(e3, r2, false, false);
            var s2 = [u.VertexBuffer.PositionKind, u.VertexBuffer.NormalKind];
            r2.UV1 && s2.push(u.VertexBuffer.UVKind), r2.UV2 && s2.push(u.VertexBuffer.UV2Kind), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess, (0, u.PrepareAttributesForInstances)(s2, r2);
            var a2 = ["projection", "mainColor", "lineColor", "gridControl", "gridOffset", "vFogInfos", "vFogColor", "world", "view", "opacityMatrix", "vOpacityInfos", "visibility", "logarithmicDepthConstant"], f2 = r2.toString();
            (0, u.AddClipPlaneUniforms)(a2), i3.setEffect(o2.getEngine().createEffect("grid", { attributes: s2, uniformsNames: a2, uniformBuffersNames: ["Scene"], samplers: ["opacitySampler"], defines: f2, fallbacks: null, onCompiled: this.onCompiled, onError: this.onError }, o2.getEngine()), r2, this._materialContext);
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this._activeEffect.setFloat("visibility", i3.visibility), r2.INSTANCES && !r2.THIN_INSTANCE || this.bindOnlyWorldMatrix(e3), this.bindView(o2), this.bindViewProjection(o2), this._mustRebind(n2, o2, t2) && (this._activeEffect.setColor3("mainColor", this.mainColor), this._activeEffect.setColor3("lineColor", this.lineColor), this._activeEffect.setVector3("gridOffset", this.gridOffset), this._gridControl.x = this.gridRatio, this._gridControl.y = Math.round(this.majorUnitFrequency), this._gridControl.z = this.minorUnitVisibility, this._gridControl.w = this.opacity, this._activeEffect.setVector4("gridControl", this._gridControl), this._opacityTexture && u.MaterialFlags.OpacityTextureEnabled && (this._activeEffect.setTexture("opacitySampler", this._opacityTexture), this._activeEffect.setFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), this._activeEffect.setMatrix("opacityMatrix", this._opacityTexture.getTextureMatrix())), (0, u.BindClipPlane)(o2, this, n2), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2)), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.dispose = function(i3) {
          e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.GridMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "GridMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsColor3)()], i2.prototype, "mainColor", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "lineColor", void 0), l([(0, u.serialize)()], i2.prototype, "gridRatio", void 0), l([(0, u.serializeAsVector3)()], i2.prototype, "gridOffset", void 0), l([(0, u.serialize)()], i2.prototype, "majorUnitFrequency", void 0), l([(0, u.serialize)()], i2.prototype, "minorUnitVisibility", void 0), l([(0, u.serialize)()], i2.prototype, "opacity", void 0), l([(0, u.serialize)()], i2.prototype, "antialias", void 0), l([(0, u.serialize)()], i2.prototype, "preMultiplyAlpha", void 0), l([(0, u.serialize)()], i2.prototype, "useMaxLine", void 0), l([(0, u.serializeAsTexture)("opacityTexture")], i2.prototype, "_opacityTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "opacityTexture", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.GridMaterial", U);
      var V = "lavaPixelShader";
      u.ShaderStore.ShadersStore[V] || (u.ShaderStore.ShadersStore[V] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;uniform float time;uniform float speed;uniform float movingSpeed;uniform vec3 fogColor;uniform sampler2D noiseTexture;uniform float fogDensity;varying float noise;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nfloat random( vec3 scale,float seed ){return fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nvec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );vec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time *0.02;vec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;T1.x+=noiseTex.x*2.0;T1.y+=noiseTex.y*2.0;T2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;T2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;float p=texture2D( noiseTexture,T1*3.0 ).a;vec4 lavaColor=texture2D( diffuseSampler,T2*4.0);vec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );baseColor=temp;float depth=gl_FragCoord.z*4.0;const float LOG2=1.442695;float fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );fogFactor=1.0-clamp( fogFactor,0.0,1.0 );baseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );diffuseColor=baseColor.rgb;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef UNLIT\nvec3 diffuseBase=vec3(1.,1.,1.);\n#else\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}");
      var w = "lavaVertexShader";
      u.ShaderStore.ShadersStore[w] || (u.ShaderStore.ShadersStore[w] = "precision highp float;uniform float time;uniform float lowFrequencySpeed;varying float noise;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n/* NOISE FUNCTIONS */\nvec3 mod289(vec3 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 mod289(vec4 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 permute(vec4 x)\n{return mod289(((x*34.0)+1.0)*x);}\nvec4 taylorInvSqrt(vec4 r)\n{return 1.79284291400159-0.85373472095314*r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat pnoise(vec3 P,vec3 rep)\n{vec3 Pi0=mod(floor(P),rep); \nvec3 Pi1=mod(Pi0+vec3(1.0),rep); \nPi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P); \nvec3 Pf1=Pf0-vec3(1.0); \nvec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}\n/* END FUNCTION */\nfloat turbulence( vec3 p ) {float w=100.0;float t=-.5;for (float f=1.0 ; f<=10.0 ; f++ ){float power=pow( 2.0,f );t+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );}\nreturn t;}\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\n#ifdef NORMAL\nnoise=10.0* -.10*turbulence( .5*normal+time*1.15 );float b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );float displacement=- 1.5*noise+b;vec3 newPosition=position+normal*displacement;gl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#include<logDepthVertex>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}");
      var B = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.LIGHT0 = false, i3.LIGHT1 = false, i3.LIGHT2 = false, i3.LIGHT3 = false, i3.SPOTLIGHT0 = false, i3.SPOTLIGHT1 = false, i3.SPOTLIGHT2 = false, i3.SPOTLIGHT3 = false, i3.HEMILIGHT0 = false, i3.HEMILIGHT1 = false, i3.HEMILIGHT2 = false, i3.HEMILIGHT3 = false, i3.DIRLIGHT0 = false, i3.DIRLIGHT1 = false, i3.DIRLIGHT2 = false, i3.DIRLIGHT3 = false, i3.POINTLIGHT0 = false, i3.POINTLIGHT1 = false, i3.POINTLIGHT2 = false, i3.POINTLIGHT3 = false, i3.SHADOW0 = false, i3.SHADOW1 = false, i3.SHADOW2 = false, i3.SHADOW3 = false, i3.SHADOWS = false, i3.SHADOWESM0 = false, i3.SHADOWESM1 = false, i3.SHADOWESM2 = false, i3.SHADOWESM3 = false, i3.SHADOWPOISSON0 = false, i3.SHADOWPOISSON1 = false, i3.SHADOWPOISSON2 = false, i3.SHADOWPOISSON3 = false, i3.SHADOWPCF0 = false, i3.SHADOWPCF1 = false, i3.SHADOWPCF2 = false, i3.SHADOWPCF3 = false, i3.SHADOWPCSS0 = false, i3.SHADOWPCSS1 = false, i3.SHADOWPCSS2 = false, i3.SHADOWPCSS3 = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.UNLIT = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), z = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.speed = 1, n2.movingSpeed = 1, n2.lowFrequencySpeed = 1, n2.fogDensity = 0.15, n2._lastTime = 0, n2.diffuseColor = new u.Color3(1, 1, 1), n2._disableLighting = false, n2._unlit = false, n2._maxSimultaneousLights = 4, n2._scaledDiffuse = new u.Color3(), n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new B());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && (r2._needUVs = false, o2.texturesEnabled && this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled)) {
            if (!this._diffuseTexture.isReady()) return false;
            r2._needUVs = true, r2.DIFFUSE = true;
          }
          if ((0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = true, (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "mBones", "diffuseMatrix", "logarithmicDepthConstant", "time", "speed", "movingSpeed", "fogColor", "fogDensity", "lowFrequencySpeed"];
            (0, u.AddClipPlaneUniforms)(d2);
            var c2 = ["diffuseSampler", "noiseTexture", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], h2 = [];
            (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("lava", { attributes: f2, uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var p2 = 0; p2 < e3.lightSources.length; p2++) if (!e3.lightSources[p2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, r2.UNLIT = this._unlit, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this.diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled && (this._activeEffect.setTexture("diffuseSampler", this.diffuseTexture), this._activeEffect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level), this._activeEffect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix())), this.noiseTexture && this._activeEffect.setTexture("noiseTexture", this.noiseTexture), (0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this._scaledDiffuse, this.alpha * i3.visibility), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._lastTime += n2.getEngine().getDeltaTime(), this._activeEffect.setFloat("time", this._lastTime * this.speed / 1e3), this.fogColor || (this.fogColor = u.Color3.Black()), this._activeEffect.setColor3("fogColor", this.fogColor), this._activeEffect.setFloat("fogDensity", this.fogDensity), this._activeEffect.setFloat("lowFrequencySpeed", this.lowFrequencySpeed), this._activeEffect.setFloat("movingSpeed", this.movingSpeed), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0 && e3.push(this.diffuseTexture), this.noiseTexture && this.noiseTexture.animations && this.noiseTexture.animations.length > 0 && e3.push(this.noiseTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._diffuseTexture && i3.push(this._diffuseTexture), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this.diffuseTexture === i3;
        }, i2.prototype.dispose = function(i3) {
          this.diffuseTexture && this.diffuseTexture.dispose(), this.noiseTexture && this.noiseTexture.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.LavaMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "LavaMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsTexture)("diffuseTexture")], i2.prototype, "_diffuseTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture", void 0), l([(0, u.serializeAsTexture)()], i2.prototype, "noiseTexture", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "fogColor", void 0), l([(0, u.serialize)()], i2.prototype, "speed", void 0), l([(0, u.serialize)()], i2.prototype, "movingSpeed", void 0), l([(0, u.serialize)()], i2.prototype, "lowFrequencySpeed", void 0), l([(0, u.serialize)()], i2.prototype, "fogDensity", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "diffuseColor", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("unlit")], i2.prototype, "_unlit", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "unlit", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.LavaMaterial", z);
      var G = "mixPixelShader";
      u.ShaderStore.ShadersStore[G] || (u.ShaderStore.ShadersStore[G] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform sampler2D mixMap1Sampler;uniform vec2 vTextureInfos;\n#ifdef MIXMAP2\nuniform sampler2D mixMap2Sampler;\n#endif\nuniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform sampler2D diffuse4Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;uniform vec2 diffuse4Infos;\n#ifdef MIXMAP2\nuniform sampler2D diffuse5Sampler;uniform sampler2D diffuse6Sampler;uniform sampler2D diffuse7Sampler;uniform sampler2D diffuse8Sampler;uniform vec2 diffuse5Infos;uniform vec2 diffuse6Infos;uniform vec2 diffuse7Infos;uniform vec2 diffuse8Infos;\n#endif\n#endif\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 finalMixColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;\n#ifdef MIXMAP2\nvec4 mixColor2=vec4(1.,1.,1.,1.);\n#endif\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\nfloat alpha=vDiffuseColor.a;\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef DIFFUSE\nvec4 mixColor=texture2D(mixMap1Sampler,vTextureUV);\n#include<depthPrePass>\nmixColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);vec4 diffuse4Color=texture2D(diffuse4Sampler,vTextureUV*diffuse4Infos);diffuse1Color.rgb*=mixColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,mixColor.g);diffuse3Color.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse3Color.rgb,diffuse4Color.rgb,1.0-mixColor.a);\n#ifdef MIXMAP2\nmixColor=texture2D(mixMap2Sampler,vTextureUV);mixColor.rgb*=vTextureInfos.y;vec4 diffuse5Color=texture2D(diffuse5Sampler,vTextureUV*diffuse5Infos);vec4 diffuse6Color=texture2D(diffuse6Sampler,vTextureUV*diffuse6Infos);vec4 diffuse7Color=texture2D(diffuse7Sampler,vTextureUV*diffuse7Infos);vec4 diffuse8Color=texture2D(diffuse8Sampler,vTextureUV*diffuse8Infos);diffuse5Color.rgb=mix(finalMixColor.rgb,diffuse5Color.rgb,mixColor.r);diffuse6Color.rgb=mix(diffuse5Color.rgb,diffuse6Color.rgb,mixColor.g);diffuse7Color.rgb=mix(diffuse6Color.rgb,diffuse7Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse7Color.rgb,diffuse8Color.rgb,1.0-mixColor.a);\n#endif\n#endif\n#ifdef VERTEXCOLOR\nfinalMixColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor*finalMixColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n");
      var H = "mixVertexShader";
      u.ShaderStore.ShadersStore[H] || (u.ShaderStore.ShadersStore[H] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vTextureInfos.x==0.)\n{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}\nelse\n{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var W = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.SPECULARTERM = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.MIXMAP2 = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), X = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.diffuseColor = new u.Color3(1, 1, 1), n2.specularColor = new u.Color3(0, 0, 0), n2.specularPower = 64, n2._disableLighting = false, n2._maxSimultaneousLights = 4, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new W());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (o2.texturesEnabled) {
            if (!this._mixTexture1 || !this._mixTexture1.isReady()) return false;
            if (r2._needUVs = true, u.MaterialFlags.DiffuseTextureEnabled) {
              if (!this._diffuseTexture1 || !this._diffuseTexture1.isReady()) return false;
              if (r2.DIFFUSE = true, !this._diffuseTexture2 || !this._diffuseTexture2.isReady()) return false;
              if (!this._diffuseTexture3 || !this._diffuseTexture3.isReady()) return false;
              if (!this._diffuseTexture4 || !this._diffuseTexture4.isReady()) return false;
              if (this._mixTexture2) {
                if (!this._mixTexture2.isReady()) return false;
                if (r2.MIXMAP2 = true, !this._diffuseTexture5 || !this._diffuseTexture5.isReady()) return false;
                if (!this._diffuseTexture6 || !this._diffuseTexture6.isReady()) return false;
                if (!this._diffuseTexture7 || !this._diffuseTexture7.isReady()) return false;
                if (!this._diffuseTexture8 || !this._diffuseTexture8.isReady()) return false;
              }
            }
          }
          if ((0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2, this.maxSimultaneousLights), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vSpecularColor", "vFogInfos", "vFogColor", "pointSize", "vTextureInfos", "mBones", "textureMatrix", "logarithmicDepthConstant", "diffuse1Infos", "diffuse2Infos", "diffuse3Infos", "diffuse4Infos", "diffuse5Infos", "diffuse6Infos", "diffuse7Infos", "diffuse8Infos"], c2 = ["mixMap1Sampler", "mixMap2Sampler", "diffuse1Sampler", "diffuse2Sampler", "diffuse3Sampler", "diffuse4Sampler", "diffuse5Sampler", "diffuse6Sampler", "diffuse7Sampler", "diffuse8Sampler"], h2 = [];
            (0, u.AddClipPlaneUniforms)(d2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("mix", { attributes: f2, uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights } }, s2), r2, this._materialContext);
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this._mixTexture1 && (this._activeEffect.setTexture("mixMap1Sampler", this._mixTexture1), this._activeEffect.setFloat2("vTextureInfos", this._mixTexture1.coordinatesIndex, this._mixTexture1.level), this._activeEffect.setMatrix("textureMatrix", this._mixTexture1.getTextureMatrix()), u.MaterialFlags.DiffuseTextureEnabled && (this._diffuseTexture1 && (this._activeEffect.setTexture("diffuse1Sampler", this._diffuseTexture1), this._activeEffect.setFloat2("diffuse1Infos", this._diffuseTexture1.uScale, this._diffuseTexture1.vScale)), this._diffuseTexture2 && (this._activeEffect.setTexture("diffuse2Sampler", this._diffuseTexture2), this._activeEffect.setFloat2("diffuse2Infos", this._diffuseTexture2.uScale, this._diffuseTexture2.vScale)), this._diffuseTexture3 && (this._activeEffect.setTexture("diffuse3Sampler", this._diffuseTexture3), this._activeEffect.setFloat2("diffuse3Infos", this._diffuseTexture3.uScale, this._diffuseTexture3.vScale)), this._diffuseTexture4 && (this._activeEffect.setTexture("diffuse4Sampler", this._diffuseTexture4), this._activeEffect.setFloat2("diffuse4Infos", this._diffuseTexture4.uScale, this._diffuseTexture4.vScale)))), this._mixTexture2 && (this._activeEffect.setTexture("mixMap2Sampler", this._mixTexture2), u.MaterialFlags.DiffuseTextureEnabled && (this._diffuseTexture5 && (this._activeEffect.setTexture("diffuse5Sampler", this._diffuseTexture5), this._activeEffect.setFloat2("diffuse5Infos", this._diffuseTexture5.uScale, this._diffuseTexture5.vScale)), this._diffuseTexture6 && (this._activeEffect.setTexture("diffuse6Sampler", this._diffuseTexture6), this._activeEffect.setFloat2("diffuse6Infos", this._diffuseTexture6.uScale, this._diffuseTexture6.vScale)), this._diffuseTexture7 && (this._activeEffect.setTexture("diffuse7Sampler", this._diffuseTexture7), this._activeEffect.setFloat2("diffuse7Infos", this._diffuseTexture7.uScale, this._diffuseTexture7.vScale)), this._diffuseTexture8 && (this._activeEffect.setTexture("diffuse8Sampler", this._diffuseTexture8), this._activeEffect.setFloat2("diffuse8Infos", this._diffuseTexture8.uScale, this._diffuseTexture8.vScale)))), (0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), r2.SPECULARTERM && this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this.maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this._mixTexture1 && this._mixTexture1.animations && this._mixTexture1.animations.length > 0 && e3.push(this._mixTexture1), this._mixTexture2 && this._mixTexture2.animations && this._mixTexture2.animations.length > 0 && e3.push(this._mixTexture2), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._mixTexture1 && i3.push(this._mixTexture1), this._diffuseTexture1 && i3.push(this._diffuseTexture1), this._diffuseTexture2 && i3.push(this._diffuseTexture2), this._diffuseTexture3 && i3.push(this._diffuseTexture3), this._diffuseTexture4 && i3.push(this._diffuseTexture4), this._mixTexture2 && i3.push(this._mixTexture2), this._diffuseTexture5 && i3.push(this._diffuseTexture5), this._diffuseTexture6 && i3.push(this._diffuseTexture6), this._diffuseTexture7 && i3.push(this._diffuseTexture7), this._diffuseTexture8 && i3.push(this._diffuseTexture8), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this._mixTexture1 === i3 || this._diffuseTexture1 === i3 || this._diffuseTexture2 === i3 || this._diffuseTexture3 === i3 || this._diffuseTexture4 === i3 || this._mixTexture2 === i3 || this._diffuseTexture5 === i3 || this._diffuseTexture6 === i3 || this._diffuseTexture7 === i3 || this._diffuseTexture8 === i3;
        }, i2.prototype.dispose = function(i3) {
          this._mixTexture1 && this._mixTexture1.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.MixMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "MixMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsTexture)("mixTexture1")], i2.prototype, "_mixTexture1", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "mixTexture1", void 0), l([(0, u.serializeAsTexture)("mixTexture2")], i2.prototype, "_mixTexture2", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "mixTexture2", void 0), l([(0, u.serializeAsTexture)("diffuseTexture1")], i2.prototype, "_diffuseTexture1", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture1", void 0), l([(0, u.serializeAsTexture)("diffuseTexture2")], i2.prototype, "_diffuseTexture2", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture2", void 0), l([(0, u.serializeAsTexture)("diffuseTexture3")], i2.prototype, "_diffuseTexture3", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture3", void 0), l([(0, u.serializeAsTexture)("diffuseTexture4")], i2.prototype, "_diffuseTexture4", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture4", void 0), l([(0, u.serializeAsTexture)("diffuseTexture1")], i2.prototype, "_diffuseTexture5", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture5", void 0), l([(0, u.serializeAsTexture)("diffuseTexture2")], i2.prototype, "_diffuseTexture6", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture6", void 0), l([(0, u.serializeAsTexture)("diffuseTexture3")], i2.prototype, "_diffuseTexture7", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture7", void 0), l([(0, u.serializeAsTexture)("diffuseTexture4")], i2.prototype, "_diffuseTexture8", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture8", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "diffuseColor", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "specularColor", void 0), l([(0, u.serialize)()], i2.prototype, "specularPower", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.MixMaterial", X);
      var k = "normalPixelShader";
      u.ShaderStore.ShadersStore[k] || (u.ShaderStore.ShadersStore[k] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef LIGHTING\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#endif\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef NORMAL\nbaseColor=mix(baseColor,vec4(vNormalW,1.0),0.5);\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef LIGHTING\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n#else\nvec3 finalDiffuse= baseColor.rgb;\n#endif\nvec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}");
      var j = "normalVertexShader";
      u.ShaderStore.ShadersStore[j] || (u.ShaderStore.ShadersStore[j] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var Z = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.LIGHT0 = false, i3.LIGHT1 = false, i3.LIGHT2 = false, i3.LIGHT3 = false, i3.SPOTLIGHT0 = false, i3.SPOTLIGHT1 = false, i3.SPOTLIGHT2 = false, i3.SPOTLIGHT3 = false, i3.HEMILIGHT0 = false, i3.HEMILIGHT1 = false, i3.HEMILIGHT2 = false, i3.HEMILIGHT3 = false, i3.DIRLIGHT0 = false, i3.DIRLIGHT1 = false, i3.DIRLIGHT2 = false, i3.DIRLIGHT3 = false, i3.POINTLIGHT0 = false, i3.POINTLIGHT1 = false, i3.POINTLIGHT2 = false, i3.POINTLIGHT3 = false, i3.SHADOW0 = false, i3.SHADOW1 = false, i3.SHADOW2 = false, i3.SHADOW3 = false, i3.SHADOWS = false, i3.SHADOWESM0 = false, i3.SHADOWESM1 = false, i3.SHADOWESM2 = false, i3.SHADOWESM3 = false, i3.SHADOWPOISSON0 = false, i3.SHADOWPOISSON1 = false, i3.SHADOWPOISSON2 = false, i3.SHADOWPOISSON3 = false, i3.SHADOWPCF0 = false, i3.SHADOWPCF1 = false, i3.SHADOWPCF2 = false, i3.SHADOWPCF3 = false, i3.SHADOWPCSS0 = false, i3.SHADOWPCSS1 = false, i3.SHADOWPCSS2 = false, i3.SHADOWPCSS3 = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.THIN_INSTANCES = false, i3.LIGHTING = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), Y = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.diffuseColor = new u.Color3(1, 1, 1), n2._disableLighting = false, n2._maxSimultaneousLights = 4, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaBlendingForMesh = function(e3) {
          return this.needAlphaBlending() || e3.visibility < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new Z());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && (r2._needUVs = false, o2.texturesEnabled && this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled)) {
            if (!this._diffuseTexture.isReady()) return false;
            r2._needUVs = true, r2.DIFFUSE = true;
          }
          if ((0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = true, (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2, null, i3.getRenderingMesh().hasThinInstances), r2.LIGHTING = !this._disableLighting, (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "mBones", "diffuseMatrix", "logarithmicDepthConstant"], c2 = ["diffuseSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], h2 = [];
            (0, u.AddClipPlaneUniforms)(d2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: r2, maxSimultaneousLights: 4 }), i3.setEffect(o2.getEngine().createEffect("normal", { attributes: f2, uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 4 } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var p2 = 0; p2 < e3.lightSources.length; p2++) if (!e3.lightSources[p2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this.diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled && (this._activeEffect.setTexture("diffuseSampler", this.diffuseTexture), this._activeEffect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level), this._activeEffect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix())), (0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0 && e3.push(this.diffuseTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._diffuseTexture && i3.push(this._diffuseTexture), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this.diffuseTexture === i3;
        }, i2.prototype.dispose = function(i3) {
          this.diffuseTexture && this.diffuseTexture.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.NormalMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "NormalMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsTexture)("diffuseTexture")], i2.prototype, "_diffuseTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "diffuseColor", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.NormalMaterial", Y);
      var K = "shadowOnlyPixelShader";
      u.ShaderStore.ShadersStore[K] || (u.ShaderStore.ShadersStore[K] = "precision highp float;\n#include<__decl__sceneFragment>\nuniform float alpha;uniform vec3 shadowColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0..1]\nvec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}");
      var q = "shadowOnlyVertexShader";
      u.ShaderStore.ShadersStore[q] || (u.ShaderStore.ShadersStore[q] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\n#include<__decl__sceneVertex>\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var Q = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.POINTSIZE = false, i3.FOG = false, i3.NORMAL = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), J = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2._needAlphaBlending = true, n2.shadowColor = u.Color3.Black(), n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this._needAlphaBlending;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, Object.defineProperty(i2.prototype, "activeLight", { get: function() {
          return this._activeLight;
        }, set: function(e3) {
          this._activeLight = e3;
        }, enumerable: false, configurable: true }), i2.prototype._getFirstShadowLightForMesh = function(e3) {
          for (var i3 = 0, t2 = e3.lightSources; i3 < t2.length; i3++) {
            var n2 = t2[i3];
            if (n2.shadowEnabled) return n2;
          }
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2, r2 = i3._drawWrapper;
          if (this.isFrozen && r2.effect && r2._wasPreviouslyReady && r2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new Q());
          var o2 = i3.materialDefines, s2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var a2 = s2.getEngine();
          if (this._activeLight) for (var f2 = 0, l2 = e3.lightSources; f2 < l2.length; f2++) {
            var d2 = l2[f2];
            if (d2.shadowEnabled) {
              if (this._activeLight === d2) break;
              var c2 = e3.lightSources.indexOf(this._activeLight);
              -1 !== c2 && (e3.lightSources.splice(c2, 1), e3.lightSources.splice(0, 0, this._activeLight));
              break;
            }
          }
          (0, u.PrepareDefinesForFrameBoundValues)(s2, a2, this, o2, !!t2), (0, u.PrepareDefinesForMisc)(e3, s2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), o2, void 0, void 0, void 0, this._setVertexOutputInvariant), o2._needNormals = (0, u.PrepareDefinesForLights)(s2, e3, o2, false, 1);
          var h2 = null === (n2 = this._getFirstShadowLightForMesh(e3)) || void 0 === n2 ? void 0 : n2.getShadowGenerator();
          if (this._needAlphaBlending = true, h2 && h2.getClassName && "CascadedShadowGenerator" === h2.getClassName()) {
            var p2 = h2;
            this._needAlphaBlending = !p2.autoCalcDepthBounds;
          }
          if ((0, u.PrepareDefinesForAttributes)(e3, o2, false, true), o2.isDirty) {
            o2.markAsProcessed(), s2.resetCachedMaterial();
            var m2 = new u.EffectFallbacks();
            o2.FOG && m2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(o2, m2, 1), o2.NUM_BONE_INFLUENCERS > 0 && m2.addCPUSkinningFallback(0, e3), o2.IMAGEPROCESSINGPOSTPROCESS = s2.imageProcessingConfiguration.applyByPostProcess;
            var v2 = [u.VertexBuffer.PositionKind];
            o2.NORMAL && v2.push(u.VertexBuffer.NormalKind), (0, u.PrepareAttributesForBones)(v2, e3, o2, m2), (0, u.PrepareAttributesForInstances)(v2, o2);
            var g2 = o2.toString(), T2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vFogInfos", "vFogColor", "pointSize", "alpha", "shadowColor", "mBones", "logarithmicDepthConstant"], S2 = [], _2 = ["Scene"];
            (0, u.AddClipPlaneUniforms)(T2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: T2, uniformBuffersNames: _2, samplers: S2, defines: o2, maxSimultaneousLights: 1 }), i3.setEffect(s2.getEngine().createEffect("shadowOnly", { attributes: v2, uniformsNames: T2, uniformBuffersNames: _2, samplers: S2, defines: g2, fallbacks: m2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: 1 } }, a2), o2, this._materialContext);
          }
          return !(!i3.effect || !i3.effect.isReady() || (o2._renderId = s2.getRenderId(), r2._wasPreviouslyReady = true, r2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            if (o2) {
              if (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this.bindViewProjection(o2), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && ((0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._activeEffect.setFloat("alpha", this.alpha), this._activeEffect.setColor3("shadowColor", this.shadowColor), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), n2.lightsEnabled) {
                (0, u.BindLights)(n2, i3, this._activeEffect, r2, 1);
                var s2 = this._getFirstShadowLightForMesh(i3);
                s2 && (s2._renderId = -1);
              }
              (n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE || r2.SHADOWCSM0) && this.bindView(o2), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2);
            }
          }
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.ShadowOnlyMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "ShadowOnlyMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.ShadowOnlyMaterial", J);
      var $ = "simplePixelShader";
      u.ShaderStore.ShadersStore[$] || (u.ShaderStore.ShadersStore[$] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif \n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}");
      var ee = "simpleVertexShader";
      u.ShaderStore.ShadersStore[ee] || (u.ShaderStore.ShadersStore[ee] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var ie = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), te = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.diffuseColor = new u.Color3(1, 1, 1), n2._disableLighting = false, n2._maxSimultaneousLights = 4, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new ie());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && (r2._needUVs = false, o2.texturesEnabled && this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled)) {
            if (!this._diffuseTexture.isReady()) return false;
            r2._needUVs = true, r2.DIFFUSE = true;
          }
          if ((0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2, this.maxSimultaneousLights), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "mBones", "diffuseMatrix", "logarithmicDepthConstant"], c2 = ["diffuseSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], h2 = [];
            (0, u.AddClipPlaneUniforms)(d2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("simple", { attributes: f2, uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this._maxSimultaneousLights - 1 } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var p2 = 0; p2 < e3.lightSources.length; p2++) if (!e3.lightSources[p2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this._diffuseTexture && u.MaterialFlags.DiffuseTextureEnabled && (this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture), this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix())), (0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this.maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && e3.push(this._diffuseTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._diffuseTexture && i3.push(this._diffuseTexture), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this.diffuseTexture === i3;
        }, i2.prototype.dispose = function(i3) {
          this._diffuseTexture && this._diffuseTexture.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.SimpleMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "SimpleMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsTexture)("diffuseTexture")], i2.prototype, "_diffuseTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture", void 0), l([(0, u.serializeAsColor3)("diffuse")], i2.prototype, "diffuseColor", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.SimpleMaterial", te);
      var ne = "skyPixelShader";
      u.ShaderStore.ShadersStore[ne] || (u.ShaderStore.ShadersStore[ne] = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform float rayleigh;uniform float mieCoefficient;uniform float mieDirectionalG;uniform vec3 sunPosition;\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nconst float e=2.71828182845904523536028747135266249775724709369995957;const float pi=3.141592653589793238462643383279502884197169;const float n=1.0003;const float N=2.545E25;const float pn=0.035;const vec3 lambda=vec3(680E-9,550E-9,450E-9);const vec3 K=vec3(0.686,0.678,0.666);const float v=4.0;const float rayleighZenithLength=8.4E3;const float mieZenithLength=1.25E3;const float EE=1000.0;const float sunAngularDiameterCos=0.999956676946448443553574619906976478926848692873900859324;const float cutoffAngle=pi/1.95;const float steepness=1.5;vec3 totalRayleigh(vec3 lambda)\n{return (8.0*pow(pi,3.0)*pow(pow(n,2.0)-1.0,2.0)*(6.0+3.0*pn))/(3.0*N*pow(lambda,vec3(4.0))*(6.0-7.0*pn));}\nvec3 simplifiedRayleigh()\n{return 0.0005/vec3(94,40,18);}\nfloat rayleighPhase(float cosTheta)\n{ \nreturn (3.0/(16.0*pi))*(1.0+pow(cosTheta,2.0));}\nvec3 totalMie(vec3 lambda,vec3 K,float T)\n{float c=(0.2*T )*10E-18;return 0.434*c*pi*pow((2.0*pi)/lambda,vec3(v-2.0))*K;}\nfloat hgPhase(float cosTheta,float g)\n{return (1.0/(4.0*pi))*((1.0-pow(g,2.0))/pow(1.0-2.0*g*cosTheta+pow(g,2.0),1.5));}\nfloat sunIntensity(float zenithAngleCos)\n{return EE*max(0.0,1.0-exp((-(cutoffAngle-acos(zenithAngleCos))/steepness)));}\nfloat A=0.15;float B=0.50;float C=0.10;float D=0.20;float EEE=0.02;float F=0.30;float W=1000.0;vec3 Uncharted2Tonemap(vec3 x)\n{return ((x*(A*x+C*B)+D*EEE)/(x*(A*x+B)+D*F))-EEE/F;}\n#if DITHER\n#include<helperFunctions>\n#endif\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n/**\n*--------------------------------------------------------------------------------------------------\n* Sky Color\n*--------------------------------------------------------------------------------------------------\n*/\nfloat sunfade=1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);float rayleighCoefficient=rayleigh-(1.0*(1.0-sunfade));vec3 sunDirection=normalize(sunPosition);float sunE=sunIntensity(dot(sunDirection,up));vec3 betaR=simplifiedRayleigh()*rayleighCoefficient;vec3 betaM=totalMie(lambda,K,turbidity)*mieCoefficient;float zenithAngle=acos(max(0.0,dot(up,normalize(vPositionW-cameraPosition+cameraOffset))));float sR=rayleighZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));float sM=mieZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));vec3 Fex=exp(-(betaR*sR+betaM*sM));float cosTheta=dot(normalize(vPositionW-cameraPosition),sunDirection);float rPhase=rayleighPhase(cosTheta*0.5+0.5);vec3 betaRTheta=betaR*rPhase;float mPhase=hgPhase(cosTheta,mieDirectionalG);vec3 betaMTheta=betaM*mPhase;vec3 Lin=pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*(1.0-Fex),vec3(1.5));Lin*=mix(vec3(1.0),pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up,sunDirection),5.0),0.0,1.0));vec3 direction=normalize(vPositionW-cameraPosition);float theta=acos(direction.y);float phi=atan(direction.z,direction.x);vec2 uv=vec2(phi,theta)/vec2(2.0*pi,pi)+vec2(0.5,0.0);vec3 L0=vec3(0.1)*Fex;float sundisk=smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);L0+=(sunE*19000.0*Fex)*sundisk;vec3 whiteScale=1.0/Uncharted2Tonemap(vec3(W));vec3 texColor=(Lin+L0);texColor*=0.04 ;texColor+=vec3(0.0,0.001,0.0025)*0.3;float g_fMaxLuminance=1.0;float fLumScaled=0.1/luminance; \nfloat fLumCompressed=(fLumScaled*(1.0+(fLumScaled/(g_fMaxLuminance*g_fMaxLuminance))))/(1.0+fLumScaled); \nfloat ExposureBias=fLumCompressed;vec3 curr=Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);vec3 retColor=curr*whiteScale;/**\n*--------------------------------------------------------------------------------------------------\n* Sky Color\n*--------------------------------------------------------------------------------------------------\n*/\nfloat alpha=1.0;\n#ifdef VERTEXCOLOR\nretColor.rgb*=vColor.rgb;\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#if DITHER\nretColor.rgb+=dither(gl_FragCoord.xy,0.5);\n#endif\nvec4 color=clamp(vec4(retColor.rgb,alpha),0.0,1.0);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n");
      var re = "skyVertexShader";
      u.ShaderStore.ShadersStore[re] || (u.ShaderStore.ShadersStore[re] = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var oe = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.POINTSIZE = false, i3.FOG = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.DITHER = false, i3.LOGARITHMICDEPTH = false, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), se = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.luminance = 1, n2.turbidity = 10, n2.rayleigh = 2, n2.mieCoefficient = 5e-3, n2.mieDirectionalG = 0.8, n2.distance = 500, n2.inclination = 0.49, n2.azimuth = 0.25, n2.sunPosition = new u.Vector3(0, 100, 0), n2.useSunPosition = false, n2.cameraOffset = u.Vector3.Zero(), n2.up = u.Vector3.Up(), n2.dithering = false, n2._cameraPosition = u.Vector3.Zero(), n2._skyOrientation = new u.Quaternion(), n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3) {
          var t2 = i3._drawWrapper;
          if (this.isFrozen && t2.effect && t2._wasPreviouslyReady) return true;
          i3.materialDefines || (i3.materialDefines = new oe());
          var n2 = i3.materialDefines, r2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          if ((0, u.PrepareDefinesForMisc)(e3, r2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, false, n2, void 0, void 0, void 0, this._setVertexOutputInvariant), (0, u.PrepareDefinesForAttributes)(e3, n2, true, false), n2.IMAGEPROCESSINGPOSTPROCESS !== r2.imageProcessingConfiguration.applyByPostProcess && n2.markAsMiscDirty(), n2.DITHER !== this.dithering && n2.markAsMiscDirty(), n2.isDirty) {
            n2.markAsProcessed(), r2.resetCachedMaterial();
            var o2 = new u.EffectFallbacks();
            n2.FOG && o2.addFallback(1, "FOG"), n2.IMAGEPROCESSINGPOSTPROCESS = r2.imageProcessingConfiguration.applyByPostProcess, n2.DITHER = this.dithering;
            var s2 = [u.VertexBuffer.PositionKind];
            n2.VERTEXCOLOR && s2.push(u.VertexBuffer.ColorKind);
            var a2 = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up"];
            (0, u.AddClipPlaneUniforms)(a2);
            var f2 = n2.toString();
            i3.setEffect(r2.getEngine().createEffect("sky", s2, a2, [], f2, o2, this.onCompiled, this.onError), n2, this._materialContext);
          }
          return !(!i3.effect || !i3.effect.isReady() || (n2._renderId = r2.getRenderId(), t2._wasPreviouslyReady = true, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            if (o2) {
              this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), this._mustRebind(n2, o2, t2) && ((0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2)), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect);
              var s2 = n2.activeCamera;
              if (s2) {
                var a2 = s2.getWorldMatrix();
                this._cameraPosition.x = a2.m[12], this._cameraPosition.y = a2.m[13], this._cameraPosition.z = a2.m[14], this._activeEffect.setVector3("cameraPosition", this._cameraPosition);
              }
              if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), this.luminance > 0 && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), !this.useSunPosition) {
                var f2 = Math.PI * (this.inclination - 0.5), l2 = 2 * Math.PI * (this.azimuth - 0.5);
                this.sunPosition.x = this.distance * Math.cos(l2) * Math.cos(f2), this.sunPosition.y = this.distance * Math.sin(-f2), this.sunPosition.z = this.distance * Math.sin(l2) * Math.cos(f2), u.Quaternion.FromUnitVectorsToRef(u.Vector3.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition);
              }
              this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(i3, this._activeEffect, t2);
            }
          }
        }, i2.prototype.getAnimatables = function() {
          return [];
        }, i2.prototype.dispose = function(i3) {
          e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.SkyMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "SkyMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serialize)()], i2.prototype, "luminance", void 0), l([(0, u.serialize)()], i2.prototype, "turbidity", void 0), l([(0, u.serialize)()], i2.prototype, "rayleigh", void 0), l([(0, u.serialize)()], i2.prototype, "mieCoefficient", void 0), l([(0, u.serialize)()], i2.prototype, "mieDirectionalG", void 0), l([(0, u.serialize)()], i2.prototype, "distance", void 0), l([(0, u.serialize)()], i2.prototype, "inclination", void 0), l([(0, u.serialize)()], i2.prototype, "azimuth", void 0), l([(0, u.serializeAsVector3)()], i2.prototype, "sunPosition", void 0), l([(0, u.serialize)()], i2.prototype, "useSunPosition", void 0), l([(0, u.serializeAsVector3)()], i2.prototype, "cameraOffset", void 0), l([(0, u.serializeAsVector3)()], i2.prototype, "up", void 0), l([(0, u.serialize)()], i2.prototype, "dithering", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.SkyMaterial", se);
      var ae = "terrainPixelShader";
      u.ShaderStore.ShadersStore[ae] || (u.ShaderStore.ShadersStore[ae] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform sampler2D textureSampler;uniform vec2 vTextureInfos;uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;\n#endif\n#ifdef BUMP\nuniform sampler2D bump1Sampler;uniform sampler2D bump2Sampler;uniform sampler2D bump3Sampler;\n#endif\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#ifdef BUMP\n#extension GL_OES_standard_derivatives : enable\nmat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)\n{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 binormal=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(tangent,tangent),dot(binormal,binormal)));return mat3(tangent*invmax,binormal*invmax,normal);}\nvec3 perturbNormal(vec3 viewDir,vec3 mixColor)\n{vec3 bump1Color=texture2D(bump1Sampler,vTextureUV*diffuse1Infos).xyz;vec3 bump2Color=texture2D(bump2Sampler,vTextureUV*diffuse2Infos).xyz;vec3 bump3Color=texture2D(bump3Sampler,vTextureUV*diffuse3Infos).xyz;bump1Color.rgb*=mixColor.r;bump2Color.rgb=mix(bump1Color.rgb,bump2Color.rgb,mixColor.g);vec3 map=mix(bump2Color.rgb,bump3Color.rgb,mixColor.b);map=map*255./127.-128./127.;mat3 TBN=cotangent_frame(vNormalW*vTextureInfos.y,-viewDir,vTextureUV);return normalize(TBN*map);}\n#endif\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\nfloat alpha=vDiffuseColor.a;\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef DIFFUSE\nbaseColor=texture2D(textureSampler,vTextureUV);\n#if defined(BUMP) && defined(DIFFUSE)\nnormalW=perturbNormal(viewDirectionW,baseColor.rgb);\n#endif\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);diffuse1Color.rgb*=baseColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,baseColor.g);baseColor.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,baseColor.b);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor*baseColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n");
      var fe = "terrainVertexShader";
      u.ShaderStore.ShadersStore[fe] || (u.ShaderStore.ShadersStore[fe] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vTextureInfos.x==0.)\n{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}\nelse\n{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var le = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSE = false, i3.BUMP = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.SPECULARTERM = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), ue = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.diffuseColor = new u.Color3(1, 1, 1), n2.specularColor = new u.Color3(0, 0, 0), n2.specularPower = 64, n2._disableLighting = false, n2._maxSimultaneousLights = 4, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new le());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (o2.texturesEnabled) {
            if (!this.mixTexture || !this.mixTexture.isReady()) return false;
            if (r2._needUVs = true, u.MaterialFlags.DiffuseTextureEnabled) {
              if (!this.diffuseTexture1 || !this.diffuseTexture1.isReady()) return false;
              if (!this.diffuseTexture2 || !this.diffuseTexture2.isReady()) return false;
              if (!this.diffuseTexture3 || !this.diffuseTexture3.isReady()) return false;
              r2.DIFFUSE = true;
            }
            if (this.bumpTexture1 && this.bumpTexture2 && this.bumpTexture3 && u.MaterialFlags.BumpTextureEnabled) {
              if (!this.bumpTexture1.isReady()) return false;
              if (!this.bumpTexture2.isReady()) return false;
              if (!this.bumpTexture3.isReady()) return false;
              r2._needNormals = true, r2.BUMP = true;
            }
          }
          if ((0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var a2 = new u.EffectFallbacks();
            r2.FOG && a2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, a2, this.maxSimultaneousLights), r2.NUM_BONE_INFLUENCERS > 0 && a2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var f2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && f2.push(u.VertexBuffer.NormalKind), r2.UV1 && f2.push(u.VertexBuffer.UVKind), r2.UV2 && f2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && f2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(f2, e3, r2, a2), (0, u.PrepareAttributesForInstances)(f2, r2);
            var l2 = r2.toString(), d2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vSpecularColor", "vFogInfos", "vFogColor", "pointSize", "vTextureInfos", "mBones", "textureMatrix", "diffuse1Infos", "diffuse2Infos", "diffuse3Infos"], c2 = ["textureSampler", "diffuse1Sampler", "diffuse2Sampler", "diffuse3Sampler", "bump1Sampler", "bump2Sampler", "bump3Sampler", "logarithmicDepthConstant", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], h2 = [];
            (0, u.AddClipPlaneUniforms)(d2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("terrain", { attributes: f2, uniformsNames: d2, uniformBuffersNames: h2, samplers: c2, defines: l2, fallbacks: a2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var p2 = 0; p2 < e3.lightSources.length; p2++) if (!e3.lightSources[p2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("view", n2.getViewMatrix()), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this.mixTexture && (this._activeEffect.setTexture("textureSampler", this._mixTexture), this._activeEffect.setFloat2("vTextureInfos", this._mixTexture.coordinatesIndex, this._mixTexture.level), this._activeEffect.setMatrix("textureMatrix", this._mixTexture.getTextureMatrix()), u.MaterialFlags.DiffuseTextureEnabled && (this._diffuseTexture1 && (this._activeEffect.setTexture("diffuse1Sampler", this._diffuseTexture1), this._activeEffect.setFloat2("diffuse1Infos", this._diffuseTexture1.uScale, this._diffuseTexture1.vScale)), this._diffuseTexture2 && (this._activeEffect.setTexture("diffuse2Sampler", this._diffuseTexture2), this._activeEffect.setFloat2("diffuse2Infos", this._diffuseTexture2.uScale, this._diffuseTexture2.vScale)), this._diffuseTexture3 && (this._activeEffect.setTexture("diffuse3Sampler", this._diffuseTexture3), this._activeEffect.setFloat2("diffuse3Infos", this._diffuseTexture3.uScale, this._diffuseTexture3.vScale))), u.MaterialFlags.BumpTextureEnabled && n2.getEngine().getCaps().standardDerivatives && (this._bumpTexture1 && this._activeEffect.setTexture("bump1Sampler", this._bumpTexture1), this._bumpTexture2 && this._activeEffect.setTexture("bump2Sampler", this._bumpTexture2), this._bumpTexture3 && this._activeEffect.setTexture("bump3Sampler", this._bumpTexture3))), (0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), r2.SPECULARTERM && this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this.maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this.mixTexture && this.mixTexture.animations && this.mixTexture.animations.length > 0 && e3.push(this.mixTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._mixTexture && i3.push(this._mixTexture), this._diffuseTexture1 && i3.push(this._diffuseTexture1), this._diffuseTexture2 && i3.push(this._diffuseTexture2), this._diffuseTexture3 && i3.push(this._diffuseTexture3), this._bumpTexture1 && i3.push(this._bumpTexture1), this._bumpTexture2 && i3.push(this._bumpTexture2), this._bumpTexture3 && i3.push(this._bumpTexture3), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this._mixTexture === i3 || this._diffuseTexture1 === i3 || this._diffuseTexture2 === i3 || this._diffuseTexture3 === i3 || this._bumpTexture1 === i3 || this._bumpTexture2 === i3 || this._bumpTexture3 === i3;
        }, i2.prototype.dispose = function(i3) {
          this.mixTexture && this.mixTexture.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.TerrainMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "TerrainMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsTexture)("mixTexture")], i2.prototype, "_mixTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "mixTexture", void 0), l([(0, u.serializeAsTexture)("diffuseTexture1")], i2.prototype, "_diffuseTexture1", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture1", void 0), l([(0, u.serializeAsTexture)("diffuseTexture2")], i2.prototype, "_diffuseTexture2", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture2", void 0), l([(0, u.serializeAsTexture)("diffuseTexture3")], i2.prototype, "_diffuseTexture3", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTexture3", void 0), l([(0, u.serializeAsTexture)("bumpTexture1")], i2.prototype, "_bumpTexture1", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "bumpTexture1", void 0), l([(0, u.serializeAsTexture)("bumpTexture2")], i2.prototype, "_bumpTexture2", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "bumpTexture2", void 0), l([(0, u.serializeAsTexture)("bumpTexture3")], i2.prototype, "_bumpTexture3", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "bumpTexture3", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "diffuseColor", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "specularColor", void 0), l([(0, u.serialize)()], i2.prototype, "specularPower", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.TerrainMaterial", ue);
      var de = "triplanarPixelShader";
      u.ShaderStore.ShadersStore[de] || (u.ShaderStore.ShadersStore[de] = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSEX\nvarying vec2 vTextureUVX;uniform sampler2D diffuseSamplerX;\n#ifdef BUMPX\nuniform sampler2D normalSamplerX;\n#endif\n#endif\n#ifdef DIFFUSEY\nvarying vec2 vTextureUVY;uniform sampler2D diffuseSamplerY;\n#ifdef BUMPY\nuniform sampler2D normalSamplerY;\n#endif\n#endif\n#ifdef DIFFUSEZ\nvarying vec2 vTextureUVZ;uniform sampler2D diffuseSamplerZ;\n#ifdef BUMPZ\nuniform sampler2D normalSamplerZ;\n#endif\n#endif\n#ifdef NORMAL\nvarying mat3 tangentSpace;\n#endif\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(0.,0.,0.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef NORMAL\nvec3 normalW=tangentSpace[2];\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nvec4 baseNormal=vec4(0.0,0.0,0.0,1.0);normalW*=normalW;\n#ifdef DIFFUSEX\nbaseColor+=texture2D(diffuseSamplerX,vTextureUVX)*normalW.x;\n#ifdef BUMPX\nbaseNormal+=texture2D(normalSamplerX,vTextureUVX)*normalW.x;\n#endif\n#endif\n#ifdef DIFFUSEY\nbaseColor+=texture2D(diffuseSamplerY,vTextureUVY)*normalW.y;\n#ifdef BUMPY\nbaseNormal+=texture2D(normalSamplerY,vTextureUVY)*normalW.y;\n#endif\n#endif\n#ifdef DIFFUSEZ\nbaseColor+=texture2D(diffuseSamplerZ,vTextureUVZ)*normalW.z;\n#ifdef BUMPZ\nbaseNormal+=texture2D(normalSamplerZ,vTextureUVZ)*normalW.z;\n#endif\n#endif\n#ifdef NORMAL\nnormalW=normalize((2.0*baseNormal.xyz-1.0)*tangentSpace);\n#endif\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n");
      var ce = "triplanarVertexShader";
      u.ShaderStore.ShadersStore[ce] || (u.ShaderStore.ShadersStore[ce] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<helperFunctions>\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSEX\nvarying vec2 vTextureUVX;\n#endif\n#ifdef DIFFUSEY\nvarying vec2 vTextureUVY;\n#endif\n#ifdef DIFFUSEZ\nvarying vec2 vTextureUVZ;\n#endif\nuniform float tileSize;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying mat3 tangentSpace;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void)\n{\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef DIFFUSEX\nvTextureUVX=worldPos.zy/tileSize;\n#endif\n#ifdef DIFFUSEY\nvTextureUVY=worldPos.xz/tileSize;\n#endif\n#ifdef DIFFUSEZ\nvTextureUVZ=worldPos.xy/tileSize;\n#endif\n#ifdef NORMAL\nvec3 xtan=vec3(0,0,1);vec3 xbin=vec3(0,1,0);vec3 ytan=vec3(1,0,0);vec3 ybin=vec3(0,0,1);vec3 ztan=vec3(1,0,0);vec3 zbin=vec3(0,1,0);vec3 normalizedNormal=normalize(normal);normalizedNormal*=normalizedNormal;vec3 worldBinormal=normalize(xbin*normalizedNormal.x+ybin*normalizedNormal.y+zbin*normalizedNormal.z);vec3 worldTangent=normalize(xtan*normalizedNormal.x+ytan*normalizedNormal.y+ztan*normalizedNormal.z);mat3 normalWorld=mat3(finalWorld);\n#ifdef NONUNIFORMSCALING\nnormalWorld=transposeMat3(inverseMat3(normalWorld));\n#endif\nworldTangent=normalize((normalWorld*worldTangent).xyz);worldBinormal=normalize((normalWorld*worldBinormal).xyz);vec3 worldNormal=normalize((normalWorld*normalize(normal)).xyz);tangentSpace[0]=worldTangent;tangentSpace[1]=worldBinormal;tangentSpace[2]=worldNormal;\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var he = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.DIFFUSEX = false, i3.DIFFUSEY = false, i3.DIFFUSEZ = false, i3.BUMPX = false, i3.BUMPY = false, i3.BUMPZ = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.SPECULARTERM = false, i3.NORMAL = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.NONUNIFORMSCALING = false, i3.LOGARITHMICDEPTH = false, i3.AREALIGHTSUPPORTED = true, i3.AREALIGHTNOROUGHTNESS = true, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), pe = function(e2) {
        function i2(i3, t2) {
          var n2 = e2.call(this, i3, t2) || this;
          return n2.tileSize = 1, n2.diffuseColor = new u.Color3(1, 1, 1), n2.specularColor = new u.Color3(0.2, 0.2, 0.2), n2.specularPower = 64, n2._disableLighting = false, n2._maxSimultaneousLights = 4, n2;
        }
        return f(i2, e2), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new he());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && o2.texturesEnabled) {
            if (u.MaterialFlags.DiffuseTextureEnabled) {
              for (var a2 = [this.diffuseTextureX, this.diffuseTextureY, this.diffuseTextureZ], f2 = ["DIFFUSEX", "DIFFUSEY", "DIFFUSEZ"], l2 = 0; l2 < a2.length; l2++) if (a2[l2]) {
                if (!a2[l2].isReady()) return false;
                r2[f2[l2]] = true;
              }
            }
            if (u.MaterialFlags.BumpTextureEnabled) {
              for (a2 = [this.normalTextureX, this.normalTextureY, this.normalTextureZ], f2 = ["BUMPX", "BUMPY", "BUMPZ"], l2 = 0; l2 < a2.length; l2++) if (a2[l2]) {
                if (!a2[l2].isReady()) return false;
                r2[f2[l2]] = true;
              }
            }
          }
          if ((0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, false, this._maxSimultaneousLights, this._disableLighting), (0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForAttributes)(e3, r2, true, true), r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var d2 = new u.EffectFallbacks();
            r2.FOG && d2.addFallback(1, "FOG"), (0, u.HandleFallbacksForShadows)(r2, d2, this.maxSimultaneousLights), r2.NUM_BONE_INFLUENCERS > 0 && d2.addCPUSkinningFallback(0, e3), r2.IMAGEPROCESSINGPOSTPROCESS = o2.imageProcessingConfiguration.applyByPostProcess;
            var c2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && c2.push(u.VertexBuffer.NormalKind), r2.VERTEXCOLOR && c2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(c2, e3, r2, d2), (0, u.PrepareAttributesForInstances)(c2, r2);
            var h2 = r2.toString(), p2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vSpecularColor", "vFogInfos", "vFogColor", "pointSize", "mBones", "tileSize"], m2 = ["diffuseSamplerX", "diffuseSamplerY", "diffuseSamplerZ", "normalSamplerX", "normalSamplerY", "normalSamplerZ", "logarithmicDepthConstant", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"], v2 = [];
            (0, u.AddClipPlaneUniforms)(p2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: p2, uniformBuffersNames: v2, samplers: m2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("triplanar", { attributes: c2, uniformsNames: p2, uniformBuffersNames: v2, samplers: m2, defines: h2, fallbacks: d2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights } }, s2), r2, this._materialContext);
          }
          if (r2.AREALIGHTUSED) {
            for (var g2 = 0; g2 < e3.lightSources.length; g2++) if (!e3.lightSources[g2]._isReady()) return false;
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            o2 && (this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._activeEffect.setFloat("tileSize", this.tileSize), this._mustRebind(n2, o2, t2) && (this.diffuseTextureX && this._activeEffect.setTexture("diffuseSamplerX", this.diffuseTextureX), this.diffuseTextureY && this._activeEffect.setTexture("diffuseSamplerY", this.diffuseTextureY), this.diffuseTextureZ && this._activeEffect.setTexture("diffuseSamplerZ", this.diffuseTextureZ), this.normalTextureX && this._activeEffect.setTexture("normalSamplerX", this.normalTextureX), this.normalTextureY && this._activeEffect.setTexture("normalSamplerY", this.normalTextureY), this.normalTextureZ && this._activeEffect.setTexture("normalSamplerZ", this.normalTextureZ), (0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), r2.SPECULARTERM && this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this.maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), this._afterBind(i3, this._activeEffect, t2));
          }
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this.mixTexture && this.mixTexture.animations && this.mixTexture.animations.length > 0 && e3.push(this.mixTexture), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._diffuseTextureX && i3.push(this._diffuseTextureX), this._diffuseTextureY && i3.push(this._diffuseTextureY), this._diffuseTextureZ && i3.push(this._diffuseTextureZ), this._normalTextureX && i3.push(this._normalTextureX), this._normalTextureY && i3.push(this._normalTextureY), this._normalTextureZ && i3.push(this._normalTextureZ), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this._diffuseTextureX === i3 || this._diffuseTextureY === i3 || this._diffuseTextureZ === i3 || this._normalTextureX === i3 || this._normalTextureY === i3 || this._normalTextureZ === i3;
        }, i2.prototype.dispose = function(i3) {
          this.mixTexture && this.mixTexture.dispose(), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          return i3.customType = "BABYLON.TriPlanarMaterial", i3;
        }, i2.prototype.getClassName = function() {
          return "TriPlanarMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          return u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
        }, l([(0, u.serializeAsTexture)()], i2.prototype, "mixTexture", void 0), l([(0, u.serializeAsTexture)("diffuseTextureX")], i2.prototype, "_diffuseTextureX", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTextureX", void 0), l([(0, u.serializeAsTexture)("diffuseTexturY")], i2.prototype, "_diffuseTextureY", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTextureY", void 0), l([(0, u.serializeAsTexture)("diffuseTextureZ")], i2.prototype, "_diffuseTextureZ", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "diffuseTextureZ", void 0), l([(0, u.serializeAsTexture)("normalTextureX")], i2.prototype, "_normalTextureX", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "normalTextureX", void 0), l([(0, u.serializeAsTexture)("normalTextureY")], i2.prototype, "_normalTextureY", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "normalTextureY", void 0), l([(0, u.serializeAsTexture)("normalTextureZ")], i2.prototype, "_normalTextureZ", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "normalTextureZ", void 0), l([(0, u.serialize)()], i2.prototype, "tileSize", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "diffuseColor", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "specularColor", void 0), l([(0, u.serialize)()], i2.prototype, "specularPower", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.TriPlanarMaterial", pe);
      var me = "waterPixelShader";
      u.ShaderStore.ShadersStore[me] || (u.ShaderStore.ShadersStore[me] = "#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\nprecision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<imageProcessingDeclaration>\n#include<imageProcessingFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef BUMP\nvarying vec2 vNormalUV;\n#ifdef BUMPSUPERIMPOSE\nvarying vec2 vNormalUV2;\n#endif\nuniform sampler2D normalSampler;uniform vec2 vNormalInfos;\n#endif\nuniform sampler2D refractionSampler;uniform sampler2D reflectionSampler;const float LOG2=1.442695;uniform vec3 cameraPosition;uniform vec4 waterColor;uniform float colorBlendFactor;uniform vec4 waterColor2;uniform float colorBlendFactor2;uniform float bumpHeight;uniform float time;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;\n#include<clipPlaneFragmentDeclaration>\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef BUMP\n#ifdef BUMPSUPERIMPOSE\nbaseColor=0.6*texture2D(normalSampler,vNormalUV)+0.4*texture2D(normalSampler,vec2(vNormalUV2.x,vNormalUV2.y));\n#else\nbaseColor=texture2D(normalSampler,vNormalUV);\n#endif\nvec3 bumpColor=baseColor.rgb;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\nbaseColor.rgb*=vNormalInfos.y;\n#else\nvec3 bumpColor=vec3(1.0);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec2 perturbation=bumpHeight*(baseColor.rg-0.5);\n#ifdef BUMPAFFECTSREFLECTION\nvec3 normalW=normalize(vNormalW+vec3(perturbation.x*8.0,0.0,perturbation.y*8.0));if (normalW.y<0.0) {normalW.y=-normalW.y;}\n#else\nvec3 normalW=normalize(vNormalW);\n#endif\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);vec2 perturbation=bumpHeight*(vec2(1.0,1.0)-0.5);\n#endif\n#ifdef FRESNELSEPARATE\n#ifdef REFLECTION\nvec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation*0.5,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);\n#ifdef IS_REFRACTION_LINEAR\nrefractiveColor.rgb=toGammaSpace(refractiveColor.rgb);\n#endif\nvec2 projectedReflectionTexCoords=vec2(\nvReflectionMapTexCoord.x/vReflectionMapTexCoord.z+perturbation.x*0.3,\nvReflectionMapTexCoord.y/vReflectionMapTexCoord.z+perturbation.y\n);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);\n#ifdef IS_REFLECTION_LINEAR\nreflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);\n#endif\nvec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=clamp(abs(pow(dot(viewDirectionW,upVector),3.0)),0.05,0.65);float IfresnelTerm=1.0-fresnelTerm;refractiveColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*refractiveColor;reflectiveColor=IfresnelTerm*colorBlendFactor2*waterColor+(1.0-colorBlendFactor2*IfresnelTerm)*reflectiveColor;vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*IfresnelTerm;baseColor=combinedColor;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\nvec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\n#else \n#ifdef REFLECTION\nvec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);\n#ifdef IS_REFRACTION_LINEAR\nrefractiveColor.rgb=toGammaSpace(refractiveColor.rgb);\n#endif\nvec2 projectedReflectionTexCoords=vReflectionMapTexCoord.xy/vReflectionMapTexCoord.z+perturbation;vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);\n#ifdef IS_REFLECTION_LINEAR\nreflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);\n#endif\nvec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=max(dot(viewDirectionW,upVector),0.0);vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*(1.0-fresnelTerm);baseColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*combinedColor;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\nvec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\n#endif\nvec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\n#ifdef IMAGEPROCESSINGPOSTPROCESS\ncolor.rgb=toLinearSpace(color.rgb);\n#elif defined(IMAGEPROCESSING)\ncolor.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);\n#endif\ngl_FragColor=color;\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n");
      var ve = "waterVertexShader";
      u.ShaderStore.ShadersStore[ve] || (u.ShaderStore.ShadersStore[ve] = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef BUMP\nvarying vec2 vNormalUV;\n#ifdef BUMPSUPERIMPOSE\nvarying vec2 vNormalUV2;\n#endif\nuniform mat4 normalMatrix;uniform vec2 vNormalInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<logDepthDeclaration>\nuniform mat4 reflectionViewProjection;uniform vec2 windDirection;uniform float waveLength;uniform float time;uniform float windForce;uniform float waveHeight;uniform float waveSpeed;uniform float waveCount;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvec4 colorUpdated=color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef BUMP\nif (vNormalInfos.x==0.)\n{vNormalUV=vec2(normalMatrix*vec4((uv*1.0)/waveLength+time*windForce*windDirection,1.0,0.0));\n#ifdef BUMPSUPERIMPOSE\nvNormalUV2=vec2(normalMatrix*vec4((uv*0.721)/waveLength+time*1.2*windForce*windDirection,1.0,0.0));\n#endif\n}\nelse\n{vNormalUV=vec2(normalMatrix*vec4((uv2*1.0)/waveLength+time*windForce*windDirection ,1.0,0.0));\n#ifdef BUMPSUPERIMPOSE\nvNormalUV2=vec2(normalMatrix*vec4((uv2*0.721)/waveLength+time*1.2*windForce*windDirection ,1.0,0.0));\n#endif\n}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\nfloat finalWaveCount=1.0/(waveCount*0.5);\n#ifdef USE_WORLD_COORDINATES\nvec3 p=worldPos.xyz;\n#else\nvec3 p=position;\n#endif\nfloat newY=(sin(((p.x/finalWaveCount)+time*waveSpeed))*waveHeight*windDirection.x*5.0)\n+ (cos(((p.z/finalWaveCount)+ time*waveSpeed))*waveHeight*windDirection.y*5.0);p.y+=abs(newY);\n#ifdef USE_WORLD_COORDINATES\ngl_Position=viewProjection*vec4(p,1.0);\n#else\ngl_Position=viewProjection*finalWorld*vec4(p,1.0);\n#endif\n#ifdef REFLECTION\nvRefractionMapTexCoord.x=0.5*(gl_Position.w+gl_Position.x);vRefractionMapTexCoord.y=0.5*(gl_Position.w+gl_Position.y);vRefractionMapTexCoord.z=gl_Position.w;worldPos=reflectionViewProjection*finalWorld*vec4(position,1.0);vReflectionMapTexCoord.x=0.5*(worldPos.w+worldPos.x);vReflectionMapTexCoord.y=0.5*(worldPos.w+worldPos.y);vReflectionMapTexCoord.z=worldPos.w;\n#endif\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n");
      var ge = function(e2) {
        function i2() {
          var i3 = e2.call(this) || this;
          return i3.BUMP = false, i3.REFLECTION = false, i3.CLIPPLANE = false, i3.CLIPPLANE2 = false, i3.CLIPPLANE3 = false, i3.CLIPPLANE4 = false, i3.CLIPPLANE5 = false, i3.CLIPPLANE6 = false, i3.ALPHATEST = false, i3.DEPTHPREPASS = false, i3.POINTSIZE = false, i3.FOG = false, i3.NORMAL = false, i3.UV1 = false, i3.UV2 = false, i3.VERTEXCOLOR = false, i3.VERTEXALPHA = false, i3.NUM_BONE_INFLUENCERS = 0, i3.BonesPerMesh = 0, i3.INSTANCES = false, i3.INSTANCESCOLOR = false, i3.SPECULARTERM = false, i3.LOGARITHMICDEPTH = false, i3.USE_REVERSE_DEPTHBUFFER = false, i3.FRESNELSEPARATE = false, i3.BUMPSUPERIMPOSE = false, i3.BUMPAFFECTSREFLECTION = false, i3.USE_WORLD_COORDINATES = false, i3.IMAGEPROCESSING = false, i3.VIGNETTE = false, i3.VIGNETTEBLENDMODEMULTIPLY = false, i3.VIGNETTEBLENDMODEOPAQUE = false, i3.TONEMAPPING = 0, i3.CONTRAST = false, i3.EXPOSURE = false, i3.COLORCURVES = false, i3.COLORGRADING = false, i3.COLORGRADING3D = false, i3.SAMPLER3DGREENDEPTH = false, i3.SAMPLER3DBGRMAP = false, i3.DITHER = false, i3.IMAGEPROCESSINGPOSTPROCESS = false, i3.SKIPFINALCOLORCLAMP = false, i3.rebuild(), i3;
        }
        return f(i2, e2), i2;
      }(u.MaterialDefines), Te = function(e2) {
        function i2(i3, t2, n2) {
          void 0 === n2 && (n2 = new u.Vector2(512, 512));
          var r2 = e2.call(this, i3, t2) || this;
          return r2.renderTargetSize = n2, r2.diffuseColor = new u.Color3(1, 1, 1), r2.specularColor = new u.Color3(0, 0, 0), r2.specularPower = 64, r2._disableLighting = false, r2._maxSimultaneousLights = 4, r2.windForce = 6, r2.windDirection = new u.Vector2(0, 1), r2.waveHeight = 0.4, r2.bumpHeight = 0.4, r2._bumpSuperimpose = false, r2._fresnelSeparate = false, r2._bumpAffectsReflection = false, r2.waterColor = new u.Color3(0.1, 0.1, 0.6), r2.colorBlendFactor = 0.2, r2.waterColor2 = new u.Color3(0.1, 0.1, 0.6), r2.colorBlendFactor2 = 0.2, r2.waveLength = 0.1, r2.waveSpeed = 1, r2.waveCount = 20, r2.disableClipPlane = false, r2._useWorldCoordinatesForWaveDeformation = false, r2._renderTargets = new u.SmartArray(16), r2._mesh = null, r2._reflectionTransform = u.Matrix.Zero(), r2._lastTime = 0, r2._lastDeltaTime = 0, r2._createRenderTargets(r2.getScene(), n2), r2.getRenderTargetTextures = function() {
            return r2._renderTargets.reset(), r2._renderTargets.push(r2._reflectionRTT), r2._renderTargets.push(r2._refractionRTT), r2._renderTargets;
          }, r2._imageProcessingConfiguration = r2.getScene().imageProcessingConfiguration, r2._imageProcessingConfiguration && (r2._imageProcessingObserver = r2._imageProcessingConfiguration.onUpdateParameters.add(function() {
            r2._markAllSubMeshesAsImageProcessingDirty();
          })), r2;
        }
        return f(i2, e2), Object.defineProperty(i2.prototype, "hasRenderTargetTextures", { get: function() {
          return true;
        }, enumerable: false, configurable: true }), Object.defineProperty(i2.prototype, "refractionTexture", { get: function() {
          return this._refractionRTT;
        }, enumerable: false, configurable: true }), Object.defineProperty(i2.prototype, "reflectionTexture", { get: function() {
          return this._reflectionRTT;
        }, enumerable: false, configurable: true }), i2.prototype.addToRenderList = function(e3) {
          this._refractionRTT && this._refractionRTT.renderList && this._refractionRTT.renderList.push(e3), this._reflectionRTT && this._reflectionRTT.renderList && this._reflectionRTT.renderList.push(e3);
        }, i2.prototype.removeFromRenderList = function(e3) {
          var i3;
          this._refractionRTT && this._refractionRTT.renderList && -1 !== (i3 = this._refractionRTT.renderList.indexOf(e3)) && this._refractionRTT.renderList.splice(i3, 1), this._reflectionRTT && this._reflectionRTT.renderList && -1 !== (i3 = this._reflectionRTT.renderList.indexOf(e3)) && this._reflectionRTT.renderList.splice(i3, 1);
        }, i2.prototype.enableRenderTargets = function(e3) {
          var i3 = e3 ? 1 : 0;
          this._refractionRTT && (this._refractionRTT.refreshRate = i3), this._reflectionRTT && (this._reflectionRTT.refreshRate = i3);
        }, i2.prototype.getRenderList = function() {
          return this._refractionRTT ? this._refractionRTT.renderList : [];
        }, Object.defineProperty(i2.prototype, "renderTargetsEnabled", { get: function() {
          return !(this._refractionRTT && 0 === this._refractionRTT.refreshRate);
        }, enumerable: false, configurable: true }), i2.prototype.needAlphaBlending = function() {
          return this.alpha < 1;
        }, i2.prototype.needAlphaTesting = function() {
          return false;
        }, i2.prototype.getAlphaTestTexture = function() {
          return null;
        }, i2.prototype.isReadyForSubMesh = function(e3, i3, t2) {
          var n2 = i3._drawWrapper;
          if (this.isFrozen && n2.effect && n2._wasPreviouslyReady && n2._wasPreviouslyUsingInstances === t2) return true;
          i3.materialDefines || (i3.materialDefines = new ge());
          var r2 = i3.materialDefines, o2 = this.getScene();
          if (this._isReadyForSubMesh(i3)) return true;
          var s2 = o2.getEngine();
          if (r2._areTexturesDirty && (r2._needUVs = false, o2.texturesEnabled)) {
            if (this.bumpTexture && u.MaterialFlags.BumpTextureEnabled) {
              if (!this.bumpTexture.isReady()) return false;
              r2._needUVs = true, r2.BUMP = true;
            }
            u.MaterialFlags.ReflectionTextureEnabled && (r2.REFLECTION = true);
          }
          if ((0, u.PrepareDefinesForFrameBoundValues)(o2, s2, this, r2, !!t2), (0, u.PrepareDefinesForMisc)(e3, o2, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(e3), r2, void 0, void 0, void 0, this._setVertexOutputInvariant), r2._areMiscDirty && (r2.FRESNELSEPARATE = this._fresnelSeparate, r2.BUMPSUPERIMPOSE = this._bumpSuperimpose, r2.BUMPAFFECTSREFLECTION = this._bumpAffectsReflection, r2.USE_WORLD_COORDINATES = this._useWorldCoordinatesForWaveDeformation), r2._needNormals = (0, u.PrepareDefinesForLights)(o2, e3, r2, true, this._maxSimultaneousLights, this._disableLighting), r2._areImageProcessingDirty && this._imageProcessingConfiguration) {
            if (!this._imageProcessingConfiguration.isReady()) return false;
            this._imageProcessingConfiguration.prepareDefines(r2), r2.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, r2.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace;
          }
          if ((0, u.PrepareDefinesForAttributes)(e3, r2, true, true), this._mesh = e3, this._waitingRenderList) {
            for (var a2 = 0; a2 < this._waitingRenderList.length; a2++) this.addToRenderList(o2.getNodeById(this._waitingRenderList[a2]));
            this._waitingRenderList = null;
          }
          if (r2.isDirty) {
            r2.markAsProcessed(), o2.resetCachedMaterial();
            var f2 = new u.EffectFallbacks();
            r2.FOG && f2.addFallback(1, "FOG"), r2.LOGARITHMICDEPTH && f2.addFallback(0, "LOGARITHMICDEPTH"), (0, u.HandleFallbacksForShadows)(r2, f2, this.maxSimultaneousLights), r2.NUM_BONE_INFLUENCERS > 0 && f2.addCPUSkinningFallback(0, e3);
            var l2 = [u.VertexBuffer.PositionKind];
            r2.NORMAL && l2.push(u.VertexBuffer.NormalKind), r2.UV1 && l2.push(u.VertexBuffer.UVKind), r2.UV2 && l2.push(u.VertexBuffer.UV2Kind), r2.VERTEXCOLOR && l2.push(u.VertexBuffer.ColorKind), (0, u.PrepareAttributesForBones)(l2, e3, r2, f2), (0, u.PrepareAttributesForInstances)(l2, r2);
            var d2 = r2.toString(), c2 = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vDiffuseColor", "vSpecularColor", "vFogInfos", "vFogColor", "pointSize", "vNormalInfos", "mBones", "normalMatrix", "logarithmicDepthConstant", "reflectionViewProjection", "windDirection", "waveLength", "time", "windForce", "cameraPosition", "bumpHeight", "waveHeight", "waterColor", "waterColor2", "colorBlendFactor", "colorBlendFactor2", "waveSpeed", "waveCount"], h2 = ["normalSampler", "refractionSampler", "reflectionSampler"], p2 = [];
            u.ImageProcessingConfiguration && (u.ImageProcessingConfiguration.PrepareUniforms(c2, r2), u.ImageProcessingConfiguration.PrepareSamplers(h2, r2)), (0, u.AddClipPlaneUniforms)(c2), (0, u.PrepareUniformsAndSamplersList)({ uniformsNames: c2, uniformBuffersNames: p2, samplers: h2, defines: r2, maxSimultaneousLights: this.maxSimultaneousLights }), i3.setEffect(o2.getEngine().createEffect("water", { attributes: l2, uniformsNames: c2, uniformBuffersNames: p2, samplers: h2, defines: d2, fallbacks: f2, onCompiled: this.onCompiled, onError: this.onError, indexParameters: { maxSimultaneousLights: this._maxSimultaneousLights } }, s2), r2, this._materialContext);
          }
          return !(!i3.effect || !i3.effect.isReady() || (r2._renderId = o2.getRenderId(), n2._wasPreviouslyReady = true, n2._wasPreviouslyUsingInstances = !!t2, 0));
        }, i2.prototype.bindForSubMesh = function(e3, i3, t2) {
          var n2 = this.getScene(), r2 = t2.materialDefines;
          if (r2) {
            var o2 = t2.effect;
            if (o2 && this._mesh) {
              this._activeEffect = o2, this.bindOnlyWorldMatrix(e3), this._activeEffect.setMatrix("viewProjection", n2.getTransformMatrix()), (0, u.BindBonesParameters)(i3, this._activeEffect), this._mustRebind(n2, o2, t2) && (this.bumpTexture && u.MaterialFlags.BumpTextureEnabled && (this._activeEffect.setTexture("normalSampler", this.bumpTexture), this._activeEffect.setFloat2("vNormalInfos", this.bumpTexture.coordinatesIndex, this.bumpTexture.level), this._activeEffect.setMatrix("normalMatrix", this.bumpTexture.getTextureMatrix())), (0, u.BindClipPlane)(o2, this, n2), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, u.BindLogDepth)(r2, o2, n2), n2.bindEyePosition(o2)), this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * i3.visibility), r2.SPECULARTERM && this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower), n2.lightsEnabled && !this.disableLighting && (0, u.BindLights)(n2, i3, this._activeEffect, r2, this.maxSimultaneousLights), n2.fogEnabled && i3.applyFog && n2.fogMode !== u.Scene.FOGMODE_NONE && this._activeEffect.setMatrix("view", n2.getViewMatrix()), (0, u.BindFogParameters)(n2, i3, this._activeEffect), (0, u.BindLogDepth)(r2, this._activeEffect, n2), u.MaterialFlags.ReflectionTextureEnabled && (this._activeEffect.setTexture("refractionSampler", this._refractionRTT), this._activeEffect.setTexture("reflectionSampler", this._reflectionRTT));
              var s2 = this._reflectionTransform.multiply(n2.getProjectionMatrix()), a2 = n2.getEngine().getDeltaTime();
              a2 !== this._lastDeltaTime && (this._lastDeltaTime = a2, this._lastTime += this._lastDeltaTime), this._activeEffect.setMatrix("reflectionViewProjection", s2), this._activeEffect.setVector2("windDirection", this.windDirection), this._activeEffect.setFloat("waveLength", this.waveLength), this._activeEffect.setFloat("time", this._lastTime / 1e5), this._activeEffect.setFloat("windForce", this.windForce), this._activeEffect.setFloat("waveHeight", this.waveHeight), this._activeEffect.setFloat("bumpHeight", this.bumpHeight), this._activeEffect.setColor4("waterColor", this.waterColor, 1), this._activeEffect.setFloat("colorBlendFactor", this.colorBlendFactor), this._activeEffect.setColor4("waterColor2", this.waterColor2, 1), this._activeEffect.setFloat("colorBlendFactor2", this.colorBlendFactor2), this._activeEffect.setFloat("waveSpeed", this.waveSpeed), this._activeEffect.setFloat("waveCount", this.waveCount), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect), this._afterBind(i3, this._activeEffect, t2);
            }
          }
        }, i2.prototype._createRenderTargets = function(e3, i3) {
          var t2 = this;
          this._refractionRTT = new u.RenderTargetTexture(name + "_refraction", { width: i3.x, height: i3.y }, e3, false, true), this._refractionRTT.wrapU = u.Constants.TEXTURE_MIRROR_ADDRESSMODE, this._refractionRTT.wrapV = u.Constants.TEXTURE_MIRROR_ADDRESSMODE, this._refractionRTT.ignoreCameraViewport = true;
          var n2, r2 = false;
          this._refractionRTT.onBeforeRenderObservable.add(function() {
            r2 = e3.getBoundingBoxRenderer().enabled, e3.getBoundingBoxRenderer().enabled = false;
          }), this._refractionRTT.onAfterRenderObservable.add(function() {
            e3.getBoundingBoxRenderer().enabled = r2;
          }), this._reflectionRTT = new u.RenderTargetTexture(name + "_reflection", { width: i3.x, height: i3.y }, e3, false, true), this._reflectionRTT.wrapU = u.Constants.TEXTURE_MIRROR_ADDRESSMODE, this._reflectionRTT.wrapV = u.Constants.TEXTURE_MIRROR_ADDRESSMODE, this._reflectionRTT.ignoreCameraViewport = true;
          var o2, s2 = null, a2 = u.Matrix.Zero();
          this._refractionRTT.onBeforeRender = function() {
            if (t2._mesh && (n2 = t2._mesh.isVisible, t2._mesh.isVisible = false), !t2.disableClipPlane) {
              s2 = e3.clipPlane;
              var i4 = t2._mesh ? t2._mesh.absolutePosition.y : 0;
              e3.clipPlane = u.Plane.FromPositionAndNormal(new u.Vector3(0, i4 + 0.05, 0), new u.Vector3(0, 1, 0));
            }
          }, this._refractionRTT.onAfterRender = function() {
            t2._mesh && (t2._mesh.isVisible = n2), t2.disableClipPlane || (e3.clipPlane = s2);
          }, this._reflectionRTT.onBeforeRender = function() {
            if (t2._mesh && (n2 = t2._mesh.isVisible, t2._mesh.isVisible = false), !t2.disableClipPlane) {
              s2 = e3.clipPlane;
              var i4 = t2._mesh ? t2._mesh.absolutePosition.y : 0;
              e3.clipPlane = u.Plane.FromPositionAndNormal(new u.Vector3(0, i4 - 0.05, 0), new u.Vector3(0, -1, 0)), u.Matrix.ReflectionToRef(e3.clipPlane, a2);
            }
            o2 = e3.getViewMatrix(), a2.multiplyToRef(o2, t2._reflectionTransform), e3.setTransformMatrix(t2._reflectionTransform, e3.getProjectionMatrix()), e3._mirroredCameraPosition = u.Vector3.TransformCoordinates(e3.activeCamera.position, a2);
          }, this._reflectionRTT.onAfterRender = function() {
            t2._mesh && (t2._mesh.isVisible = n2), e3.clipPlane = s2, e3.setTransformMatrix(o2, e3.getProjectionMatrix()), e3._mirroredCameraPosition = null;
          };
        }, i2.prototype.getAnimatables = function() {
          var e3 = [];
          return this.bumpTexture && this.bumpTexture.animations && this.bumpTexture.animations.length > 0 && e3.push(this.bumpTexture), this._reflectionRTT && this._reflectionRTT.animations && this._reflectionRTT.animations.length > 0 && e3.push(this._reflectionRTT), this._refractionRTT && this._refractionRTT.animations && this._refractionRTT.animations.length > 0 && e3.push(this._refractionRTT), e3;
        }, i2.prototype.getActiveTextures = function() {
          var i3 = e2.prototype.getActiveTextures.call(this);
          return this._bumpTexture && i3.push(this._bumpTexture), i3;
        }, i2.prototype.hasTexture = function(i3) {
          return !!e2.prototype.hasTexture.call(this, i3) || this._bumpTexture === i3;
        }, i2.prototype.dispose = function(i3) {
          this.bumpTexture && this.bumpTexture.dispose();
          var t2 = this.getScene().customRenderTargets.indexOf(this._refractionRTT);
          -1 != t2 && this.getScene().customRenderTargets.splice(t2, 1), t2 = -1, -1 != (t2 = this.getScene().customRenderTargets.indexOf(this._reflectionRTT)) && this.getScene().customRenderTargets.splice(t2, 1), this._reflectionRTT && this._reflectionRTT.dispose(), this._refractionRTT && this._refractionRTT.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), e2.prototype.dispose.call(this, i3);
        }, i2.prototype.clone = function(e3) {
          var t2 = this;
          return u.SerializationHelper.Clone(function() {
            return new i2(e3, t2.getScene());
          }, this);
        }, i2.prototype.serialize = function() {
          var i3 = e2.prototype.serialize.call(this);
          if (i3.customType = "BABYLON.WaterMaterial", i3.renderList = [], this._refractionRTT && this._refractionRTT.renderList) for (var t2 = 0; t2 < this._refractionRTT.renderList.length; t2++) i3.renderList.push(this._refractionRTT.renderList[t2].id);
          return i3;
        }, i2.prototype.getClassName = function() {
          return "WaterMaterial";
        }, i2.Parse = function(e3, t2, n2) {
          var r2 = u.SerializationHelper.Parse(function() {
            return new i2(e3.name, t2);
          }, e3, t2, n2);
          return r2._waitingRenderList = e3.renderList, r2;
        }, i2.CreateDefaultMesh = function(e3, i3) {
          return (0, u.CreateGround)(e3, { width: 512, height: 512, subdivisions: 32, updatable: false }, i3);
        }, l([(0, u.serializeAsTexture)("bumpTexture")], i2.prototype, "_bumpTexture", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsTexturesDirty")], i2.prototype, "bumpTexture", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "diffuseColor", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "specularColor", void 0), l([(0, u.serialize)()], i2.prototype, "specularPower", void 0), l([(0, u.serialize)("disableLighting")], i2.prototype, "_disableLighting", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "disableLighting", void 0), l([(0, u.serialize)("maxSimultaneousLights")], i2.prototype, "_maxSimultaneousLights", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsLightsDirty")], i2.prototype, "maxSimultaneousLights", void 0), l([(0, u.serialize)()], i2.prototype, "windForce", void 0), l([(0, u.serializeAsVector2)()], i2.prototype, "windDirection", void 0), l([(0, u.serialize)()], i2.prototype, "waveHeight", void 0), l([(0, u.serialize)()], i2.prototype, "bumpHeight", void 0), l([(0, u.serialize)("bumpSuperimpose")], i2.prototype, "_bumpSuperimpose", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsMiscDirty")], i2.prototype, "bumpSuperimpose", void 0), l([(0, u.serialize)("fresnelSeparate")], i2.prototype, "_fresnelSeparate", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsMiscDirty")], i2.prototype, "fresnelSeparate", void 0), l([(0, u.serialize)("bumpAffectsReflection")], i2.prototype, "_bumpAffectsReflection", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsMiscDirty")], i2.prototype, "bumpAffectsReflection", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "waterColor", void 0), l([(0, u.serialize)()], i2.prototype, "colorBlendFactor", void 0), l([(0, u.serializeAsColor3)()], i2.prototype, "waterColor2", void 0), l([(0, u.serialize)()], i2.prototype, "colorBlendFactor2", void 0), l([(0, u.serialize)()], i2.prototype, "waveLength", void 0), l([(0, u.serialize)()], i2.prototype, "waveSpeed", void 0), l([(0, u.serialize)()], i2.prototype, "waveCount", void 0), l([(0, u.serialize)()], i2.prototype, "disableClipPlane", void 0), l([(0, u.serialize)("useWorldCoordinatesForWaveDeformation")], i2.prototype, "_useWorldCoordinatesForWaveDeformation", void 0), l([(0, u.expandToProperty)("_markAllSubMeshesAsMiscDirty")], i2.prototype, "useWorldCoordinatesForWaveDeformation", void 0), i2;
      }(u.PushMaterial);
      (0, u.RegisterClass)("BABYLON.WaterMaterial", Te);
      var Se = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : void 0;
      if (void 0 !== Se) for (var _e in Se.BABYLON = Se.BABYLON || {}, o) Se.BABYLON[_e] = o[_e];
      const xe = s;
      return r.default;
    })());
  }
});
export default require_babylonjs_materials_min();
//# sourceMappingURL=babylonjs-materials.js.map
