import {
  require_babylon
} from "./chunk-OWU4QZ7Y.js";
import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/.pnpm/babylonjs-materials@7.14.0/node_modules/babylonjs-materials/babylonjs.materials.js
var require_babylonjs_materials = __commonJS({
  "node_modules/.pnpm/babylonjs-materials@7.14.0/node_modules/babylonjs-materials/babylonjs.materials.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_babylon());
      else if (typeof define === "function" && define.amd)
        define("babylonjs-materials", ["babylonjs"], factory);
      else if (typeof exports === "object")
        exports["babylonjs-materials"] = factory(require_babylon());
      else
        root["MATERIALS"] = factory(root["BABYLON"]);
    })(typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : exports, (__WEBPACK_EXTERNAL_MODULE_babylonjs_Materials_effect__) => {
      return (
        /******/
        (() => {
          "use strict";
          var __webpack_modules__ = {
            /***/
            "../../../dev/materials/src/cell/cell.fragment.ts": (
              /*!********************************************************!*\
                !*** ../../../dev/materials/src/cell/cell.fragment.ts ***!
                \********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  cellPixelShader: () => (
                    /* binding */
                    cellPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "cellPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nvec3 computeCustomDiffuseLighting(lightingInfo info,vec3 diffuseBase,float shadow)\n{diffuseBase=info.diffuse*shadow;\n#ifdef CELLBASIC\nfloat level=1.0;if (info.ndl<0.5)\nlevel=0.5;diffuseBase.rgb*vec3(level,level,level);\n#else\nfloat ToonThresholds[4];ToonThresholds[0]=0.95;ToonThresholds[1]=0.5;ToonThresholds[2]=0.2;ToonThresholds[3]=0.03;float ToonBrightnessLevels[5];ToonBrightnessLevels[0]=1.0;ToonBrightnessLevels[1]=0.8;ToonBrightnessLevels[2]=0.6;ToonBrightnessLevels[3]=0.35;ToonBrightnessLevels[4]=0.2;if (info.ndl>ToonThresholds[0])\n{diffuseBase.rgb*=ToonBrightnessLevels[0];}\nelse if (info.ndl>ToonThresholds[1])\n{diffuseBase.rgb*=ToonBrightnessLevels[1];}\nelse if (info.ndl>ToonThresholds[2])\n{diffuseBase.rgb*=ToonBrightnessLevels[2];}\nelse if (info.ndl>ToonThresholds[3])\n{diffuseBase.rgb*=ToonBrightnessLevels[3];}\nelse\n{diffuseBase.rgb*=ToonBrightnessLevels[4];}\n#endif\nreturn max(diffuseBase,vec3(0.2));}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void)\n{\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nlightingInfo info;vec3 diffuseBase=vec3(0.,0.,0.);float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif \n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var cellPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/cell/cell.vertex.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/cell/cell.vertex.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  cellVertexShader: () => (
                    /* binding */
                    cellVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/logDepthVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "cellVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var cellVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/cell/cellMaterial.ts": (
              /*!*******************************************************!*\
                !*** ../../../dev/materials/src/cell/cellMaterial.ts ***!
                \*******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  CellMaterial: () => (
                    /* binding */
                    CellMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _cell_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./cell.fragment */
                  "../../../dev/materials/src/cell/cell.fragment.ts"
                );
                var _cell_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./cell.vertex */
                  "../../../dev/materials/src/cell/cell.vertex.ts"
                );
                var CellMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(CellMaterialDefines2, _super);
                    function CellMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.NDOTL = true;
                      _this.CUSTOMUSERLIGHTING = true;
                      _this.CELLBASIC = true;
                      _this.DEPTHPREPASS = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return CellMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var CellMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(CellMaterial2, _super);
                    function CellMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this._computeHighLevel = false;
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      return _this;
                    }
                    CellMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    CellMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    CellMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    CellMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new CellMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        defines._needUVs = false;
                        if (scene.texturesEnabled) {
                          if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (!this._diffuseTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.DIFFUSE = true;
                            }
                          }
                        }
                      }
                      defines.CELLBASIC = !this.computeHighLevel;
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, this.maxSimultaneousLights);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "cell";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vDiffuseInfos",
                          "mBones",
                          "diffuseMatrix",
                          "logarithmicDepthConstant"
                        ];
                        var samplers = ["diffuseSampler"];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights - 1 }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    CellMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture);
                          this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level);
                          this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix());
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(this._activeEffect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this._maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    CellMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0) {
                        results.push(this._diffuseTexture);
                      }
                      return results;
                    };
                    CellMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._diffuseTexture) {
                        activeTextures.push(this._diffuseTexture);
                      }
                      return activeTextures;
                    };
                    CellMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      return this._diffuseTexture === texture;
                    };
                    CellMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this._diffuseTexture) {
                        this._diffuseTexture.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    CellMaterial2.prototype.getClassName = function() {
                      return "CellMaterial";
                    };
                    CellMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new CellMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    CellMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.CellMaterial";
                      return serializationObject;
                    };
                    CellMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new CellMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
                    ], CellMaterial2.prototype, "_diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], CellMaterial2.prototype, "diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)("diffuse")
                    ], CellMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("computeHighLevel")
                    ], CellMaterial2.prototype, "_computeHighLevel", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], CellMaterial2.prototype, "computeHighLevel", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], CellMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], CellMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], CellMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], CellMaterial2.prototype, "maxSimultaneousLights", void 0);
                    return CellMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.CellMaterial", CellMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/cell/index.ts": (
              /*!************************************************!*\
                !*** ../../../dev/materials/src/cell/index.ts ***!
                \************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  CellMaterial: () => (
                    /* reexport safe */
                    _cellMaterial__WEBPACK_IMPORTED_MODULE_0__.CellMaterial
                  )
                  /* harmony export */
                });
                var _cellMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./cellMaterial */
                  "../../../dev/materials/src/cell/cellMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/custom/customMaterial.ts": (
              /*!***********************************************************!*\
                !*** ../../../dev/materials/src/custom/customMaterial.ts ***!
                \***********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  CustomMaterial: () => (
                    /* binding */
                    CustomMaterial
                  ),
                  /* harmony export */
                  CustomShaderStructure: () => (
                    /* binding */
                    CustomShaderStructure
                  ),
                  /* harmony export */
                  ShaderSpecialParts: () => (
                    /* binding */
                    ShaderSpecialParts
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Maths/math.color */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__);
                var CustomShaderStructure = (
                  /** @class */
                  /* @__PURE__ */ function() {
                    function CustomShaderStructure2() {
                    }
                    return CustomShaderStructure2;
                  }()
                );
                var ShaderSpecialParts = (
                  /** @class */
                  /* @__PURE__ */ function() {
                    function ShaderSpecialParts2() {
                    }
                    return ShaderSpecialParts2;
                  }()
                );
                var CustomMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CustomMaterial2, _super);
                    function CustomMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.CustomParts = new ShaderSpecialParts();
                      _this.customShaderNameResolve = _this.Builder;
                      _this.FragmentShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["defaultPixelShader"];
                      _this.VertexShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["defaultVertexShader"];
                      CustomMaterial2.ShaderIndexer++;
                      _this._createdShaderName = "custom_" + CustomMaterial2.ShaderIndexer;
                      return _this;
                    }
                    CustomMaterial2.prototype.AttachAfterBind = function(mesh, effect) {
                      if (this._newUniformInstances) {
                        for (var el in this._newUniformInstances) {
                          var ea = el.toString().split("-");
                          if (ea[0] == "vec2") {
                            effect.setVector2(ea[1], this._newUniformInstances[el]);
                          } else if (ea[0] == "vec3") {
                            if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color3) {
                              effect.setColor3(ea[1], this._newUniformInstances[el]);
                            } else {
                              effect.setVector3(ea[1], this._newUniformInstances[el]);
                            }
                          } else if (ea[0] == "vec4") {
                            if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color4) {
                              effect.setDirectColor4(ea[1], this._newUniformInstances[el]);
                            } else {
                              effect.setVector4(ea[1], this._newUniformInstances[el]);
                            }
                            effect.setVector4(ea[1], this._newUniformInstances[el]);
                          } else if (ea[0] == "mat4") {
                            effect.setMatrix(ea[1], this._newUniformInstances[el]);
                          } else if (ea[0] == "float") {
                            effect.setFloat(ea[1], this._newUniformInstances[el]);
                          }
                        }
                      }
                      if (this._newSamplerInstances) {
                        for (var el in this._newSamplerInstances) {
                          var ea = el.toString().split("-");
                          if (ea[0] == "sampler2D" && this._newSamplerInstances[el].isReady && this._newSamplerInstances[el].isReady()) {
                            effect.setTexture(ea[1], this._newSamplerInstances[el]);
                          }
                        }
                      }
                    };
                    CustomMaterial2.prototype.ReviewUniform = function(name2, arr) {
                      if (name2 == "uniform" && this._newUniforms) {
                        for (var ind = 0; ind < this._newUniforms.length; ind++) {
                          if (this._customUniform[ind].indexOf("sampler") == -1) {
                            arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                          }
                        }
                      }
                      if (name2 == "sampler" && this._newUniforms) {
                        for (var ind = 0; ind < this._newUniforms.length; ind++) {
                          if (this._customUniform[ind].indexOf("sampler") != -1) {
                            arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                          }
                        }
                      }
                      return arr;
                    };
                    CustomMaterial2.prototype.Builder = function(shaderName, uniforms, uniformBuffers, samplers, defines, attributes) {
                      if (attributes && this._customAttributes && this._customAttributes.length > 0) {
                        attributes.push.apply(attributes, this._customAttributes);
                      }
                      this.ReviewUniform("uniform", uniforms);
                      this.ReviewUniform("sampler", samplers);
                      var name2 = this._createdShaderName;
                      if (babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "VertexShader"] && babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "PixelShader"]) {
                        return name2;
                      }
                      babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "VertexShader"] = this._injectCustomCode(this.VertexShader, "vertex");
                      babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "PixelShader"] = this._injectCustomCode(this.FragmentShader, "fragment");
                      return name2;
                    };
                    CustomMaterial2.prototype._injectCustomCode = function(code, shaderType) {
                      var customCode = this._getCustomCode(shaderType);
                      for (var point in customCode) {
                        var injectedCode = customCode[point];
                        if (injectedCode && injectedCode.length > 0) {
                          var fullPointName = "#define " + point;
                          code = code.replace(fullPointName, "\n" + injectedCode + "\n" + fullPointName);
                        }
                      }
                      return code;
                    };
                    CustomMaterial2.prototype._getCustomCode = function(shaderType) {
                      var _a, _b;
                      if (shaderType === "vertex") {
                        return {
                          CUSTOM_VERTEX_BEGIN: this.CustomParts.Vertex_Begin,
                          CUSTOM_VERTEX_DEFINITIONS: (((_a = this._customUniform) === null || _a === void 0 ? void 0 : _a.join("\n")) || "") + (this.CustomParts.Vertex_Definitions || ""),
                          CUSTOM_VERTEX_MAIN_BEGIN: this.CustomParts.Vertex_MainBegin,
                          CUSTOM_VERTEX_UPDATE_POSITION: this.CustomParts.Vertex_Before_PositionUpdated,
                          CUSTOM_VERTEX_UPDATE_NORMAL: this.CustomParts.Vertex_Before_NormalUpdated,
                          CUSTOM_VERTEX_MAIN_END: this.CustomParts.Vertex_MainEnd,
                          CUSTOM_VERTEX_UPDATE_WORLDPOS: this.CustomParts.Vertex_After_WorldPosComputed
                        };
                      }
                      return {
                        CUSTOM_FRAGMENT_BEGIN: this.CustomParts.Fragment_Begin,
                        CUSTOM_FRAGMENT_DEFINITIONS: (((_b = this._customUniform) === null || _b === void 0 ? void 0 : _b.join("\n")) || "") + (this.CustomParts.Fragment_Definitions || ""),
                        CUSTOM_FRAGMENT_MAIN_BEGIN: this.CustomParts.Fragment_MainBegin,
                        CUSTOM_FRAGMENT_UPDATE_DIFFUSE: this.CustomParts.Fragment_Custom_Diffuse,
                        CUSTOM_FRAGMENT_UPDATE_ALPHA: this.CustomParts.Fragment_Custom_Alpha,
                        CUSTOM_FRAGMENT_BEFORE_LIGHTS: this.CustomParts.Fragment_Before_Lights,
                        CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: this.CustomParts.Fragment_Before_FragColor,
                        CUSTOM_FRAGMENT_MAIN_END: this.CustomParts.Fragment_MainEnd,
                        CUSTOM_FRAGMENT_BEFORE_FOG: this.CustomParts.Fragment_Before_Fog
                      };
                    };
                    CustomMaterial2.prototype._afterBind = function(mesh, effect, subMesh) {
                      if (effect === void 0) {
                        effect = null;
                      }
                      if (!effect) {
                        return;
                      }
                      this.AttachAfterBind(mesh, effect);
                      try {
                        _super.prototype._afterBind.call(this, mesh, effect, subMesh);
                      } catch (e) {
                      }
                    };
                    CustomMaterial2.prototype.AddUniform = function(name2, kind, param) {
                      if (!this._customUniform) {
                        this._customUniform = new Array();
                        this._newUniforms = new Array();
                        this._newSamplerInstances = {};
                        this._newUniformInstances = {};
                      }
                      if (param) {
                        if (kind.indexOf("sampler") != -1) {
                          this._newSamplerInstances[kind + "-" + name2] = param;
                        } else {
                          this._newUniformInstances[kind + "-" + name2] = param;
                        }
                      }
                      this._customUniform.push("uniform " + kind + " " + name2 + ";");
                      this._newUniforms.push(name2);
                      return this;
                    };
                    CustomMaterial2.prototype.AddAttribute = function(name2) {
                      if (!this._customAttributes) {
                        this._customAttributes = [];
                      }
                      this._customAttributes.push(name2);
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_Begin = function(shaderPart) {
                      this.CustomParts.Fragment_Begin = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_Definitions = function(shaderPart) {
                      this.CustomParts.Fragment_Definitions = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_MainBegin = function(shaderPart) {
                      this.CustomParts.Fragment_MainBegin = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_MainEnd = function(shaderPart) {
                      this.CustomParts.Fragment_MainEnd = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_Custom_Diffuse = function(shaderPart) {
                      this.CustomParts.Fragment_Custom_Diffuse = shaderPart.replace("result", "diffuseColor");
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_Custom_Alpha = function(shaderPart) {
                      this.CustomParts.Fragment_Custom_Alpha = shaderPart.replace("result", "alpha");
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_Before_Lights = function(shaderPart) {
                      this.CustomParts.Fragment_Before_Lights = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_Before_Fog = function(shaderPart) {
                      this.CustomParts.Fragment_Before_Fog = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Fragment_Before_FragColor = function(shaderPart) {
                      this.CustomParts.Fragment_Before_FragColor = shaderPart.replace("result", "color");
                      return this;
                    };
                    CustomMaterial2.prototype.Vertex_Begin = function(shaderPart) {
                      this.CustomParts.Vertex_Begin = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Vertex_Definitions = function(shaderPart) {
                      this.CustomParts.Vertex_Definitions = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Vertex_MainBegin = function(shaderPart) {
                      this.CustomParts.Vertex_MainBegin = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Vertex_Before_PositionUpdated = function(shaderPart) {
                      this.CustomParts.Vertex_Before_PositionUpdated = shaderPart.replace("result", "positionUpdated");
                      return this;
                    };
                    CustomMaterial2.prototype.Vertex_Before_NormalUpdated = function(shaderPart) {
                      this.CustomParts.Vertex_Before_NormalUpdated = shaderPart.replace("result", "normalUpdated");
                      return this;
                    };
                    CustomMaterial2.prototype.Vertex_After_WorldPosComputed = function(shaderPart) {
                      this.CustomParts.Vertex_After_WorldPosComputed = shaderPart;
                      return this;
                    };
                    CustomMaterial2.prototype.Vertex_MainEnd = function(shaderPart) {
                      this.CustomParts.Vertex_MainEnd = shaderPart;
                      return this;
                    };
                    CustomMaterial2.ShaderIndexer = 1;
                    return CustomMaterial2;
                  }(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial)
                );
                (0, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.CustomMaterial", CustomMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/custom/index.ts": (
              /*!**************************************************!*\
                !*** ../../../dev/materials/src/custom/index.ts ***!
                \**************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  CustomMaterial: () => (
                    /* reexport safe */
                    _customMaterial__WEBPACK_IMPORTED_MODULE_0__.CustomMaterial
                  ),
                  /* harmony export */
                  CustomShaderStructure: () => (
                    /* reexport safe */
                    _customMaterial__WEBPACK_IMPORTED_MODULE_0__.CustomShaderStructure
                  ),
                  /* harmony export */
                  PBRCustomMaterial: () => (
                    /* reexport safe */
                    _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRCustomMaterial
                  ),
                  /* harmony export */
                  ShaderAlbedoParts: () => (
                    /* reexport safe */
                    _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.ShaderAlbedoParts
                  ),
                  /* harmony export */
                  ShaderAlebdoParts: () => (
                    /* reexport safe */
                    _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.ShaderAlebdoParts
                  ),
                  /* harmony export */
                  ShaderSpecialParts: () => (
                    /* reexport safe */
                    _customMaterial__WEBPACK_IMPORTED_MODULE_0__.ShaderSpecialParts
                  )
                  /* harmony export */
                });
                var _customMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./customMaterial */
                  "../../../dev/materials/src/custom/customMaterial.ts"
                );
                var _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./pbrCustomMaterial */
                  "../../../dev/materials/src/custom/pbrCustomMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/custom/pbrCustomMaterial.ts": (
              /*!**************************************************************!*\
                !*** ../../../dev/materials/src/custom/pbrCustomMaterial.ts ***!
                \**************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  PBRCustomMaterial: () => (
                    /* binding */
                    PBRCustomMaterial
                  ),
                  /* harmony export */
                  ShaderAlbedoParts: () => (
                    /* binding */
                    ShaderAlbedoParts
                  ),
                  /* harmony export */
                  ShaderAlebdoParts: () => (
                    /* binding */
                    ShaderAlebdoParts
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Maths/math.color */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__);
                var ShaderAlbedoParts = (
                  /** @class */
                  /* @__PURE__ */ function() {
                    function ShaderAlbedoParts2() {
                    }
                    return ShaderAlbedoParts2;
                  }()
                );
                var ShaderAlebdoParts = ShaderAlbedoParts;
                var PBRCustomMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PBRCustomMaterial2, _super);
                    function PBRCustomMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.CustomParts = new ShaderAlbedoParts();
                      _this.customShaderNameResolve = _this.Builder;
                      _this.FragmentShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["pbrPixelShader"];
                      _this.VertexShader = babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore["pbrVertexShader"];
                      _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.IncludesShadersStore["pbrBlockAlbedoOpacity"]);
                      _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockReflectivity>/g, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.IncludesShadersStore["pbrBlockReflectivity"]);
                      _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.IncludesShadersStore["pbrBlockFinalColorComposition"]);
                      PBRCustomMaterial2.ShaderIndexer++;
                      _this._createdShaderName = "custompbr_" + PBRCustomMaterial2.ShaderIndexer;
                      return _this;
                    }
                    PBRCustomMaterial2.prototype.AttachAfterBind = function(mesh, effect) {
                      if (this._newUniformInstances) {
                        for (var el in this._newUniformInstances) {
                          var ea = el.toString().split("-");
                          if (ea[0] == "vec2") {
                            effect.setVector2(ea[1], this._newUniformInstances[el]);
                          } else if (ea[0] == "vec3") {
                            if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color3) {
                              effect.setColor3(ea[1], this._newUniformInstances[el]);
                            } else {
                              effect.setVector3(ea[1], this._newUniformInstances[el]);
                            }
                          } else if (ea[0] == "vec4") {
                            if (this._newUniformInstances[el] instanceof babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Color4) {
                              effect.setDirectColor4(ea[1], this._newUniformInstances[el]);
                            } else {
                              effect.setVector4(ea[1], this._newUniformInstances[el]);
                            }
                            effect.setVector4(ea[1], this._newUniformInstances[el]);
                          } else if (ea[0] == "mat4") {
                            effect.setMatrix(ea[1], this._newUniformInstances[el]);
                          } else if (ea[0] == "float") {
                            effect.setFloat(ea[1], this._newUniformInstances[el]);
                          }
                        }
                      }
                      if (this._newSamplerInstances) {
                        for (var el in this._newSamplerInstances) {
                          var ea = el.toString().split("-");
                          if (ea[0] == "sampler2D" && this._newSamplerInstances[el].isReady && this._newSamplerInstances[el].isReady()) {
                            effect.setTexture(ea[1], this._newSamplerInstances[el]);
                          }
                        }
                      }
                    };
                    PBRCustomMaterial2.prototype.ReviewUniform = function(name2, arr) {
                      if (name2 == "uniform" && this._newUniforms) {
                        for (var ind = 0; ind < this._newUniforms.length; ind++) {
                          if (this._customUniform[ind].indexOf("sampler") == -1) {
                            arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                          }
                        }
                      }
                      if (name2 == "sampler" && this._newUniforms) {
                        for (var ind = 0; ind < this._newUniforms.length; ind++) {
                          if (this._customUniform[ind].indexOf("sampler") != -1) {
                            arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                          }
                        }
                      }
                      return arr;
                    };
                    PBRCustomMaterial2.prototype.Builder = function(shaderName, uniforms, uniformBuffers, samplers, defines, attributes, options) {
                      if (options) {
                        var currentProcessing_1 = options.processFinalCode;
                        options.processFinalCode = function(type, code) {
                          if (type === "vertex") {
                            return currentProcessing_1 ? currentProcessing_1(type, code) : code;
                          }
                          var sci = new babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.ShaderCodeInliner(code);
                          sci.inlineToken = "#define pbr_inline";
                          sci.processCode();
                          return currentProcessing_1 ? currentProcessing_1(type, sci.code) : sci.code;
                        };
                      }
                      if (attributes && this._customAttributes && this._customAttributes.length > 0) {
                        attributes.push.apply(attributes, this._customAttributes);
                      }
                      this.ReviewUniform("uniform", uniforms);
                      this.ReviewUniform("sampler", samplers);
                      var name2 = this._createdShaderName;
                      if (babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "VertexShader"] && babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "PixelShader"]) {
                        return name2;
                      }
                      babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "VertexShader"] = this._injectCustomCode(this.VertexShader, "vertex");
                      babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.Effect.ShadersStore[name2 + "PixelShader"] = this._injectCustomCode(this.FragmentShader, "fragment");
                      return name2;
                    };
                    PBRCustomMaterial2.prototype._injectCustomCode = function(code, shaderType) {
                      var customCode = this._getCustomCode(shaderType);
                      for (var point in customCode) {
                        var injectedCode = customCode[point];
                        if (injectedCode && injectedCode.length > 0) {
                          var fullPointName = "#define " + point;
                          code = code.replace(fullPointName, "\n" + injectedCode + "\n" + fullPointName);
                        }
                      }
                      return code;
                    };
                    PBRCustomMaterial2.prototype._getCustomCode = function(shaderType) {
                      var _a, _b;
                      if (shaderType === "vertex") {
                        return {
                          CUSTOM_VERTEX_BEGIN: this.CustomParts.Vertex_Begin,
                          CUSTOM_VERTEX_DEFINITIONS: (((_a = this._customUniform) === null || _a === void 0 ? void 0 : _a.join("\n")) || "") + (this.CustomParts.Vertex_Definitions || ""),
                          CUSTOM_VERTEX_MAIN_BEGIN: this.CustomParts.Vertex_MainBegin,
                          CUSTOM_VERTEX_UPDATE_POSITION: this.CustomParts.Vertex_Before_PositionUpdated,
                          CUSTOM_VERTEX_UPDATE_NORMAL: this.CustomParts.Vertex_Before_NormalUpdated,
                          CUSTOM_VERTEX_MAIN_END: this.CustomParts.Vertex_MainEnd,
                          CUSTOM_VERTEX_UPDATE_WORLDPOS: this.CustomParts.Vertex_After_WorldPosComputed
                        };
                      }
                      return {
                        CUSTOM_FRAGMENT_BEGIN: this.CustomParts.Fragment_Begin,
                        CUSTOM_FRAGMENT_MAIN_BEGIN: this.CustomParts.Fragment_MainBegin,
                        CUSTOM_FRAGMENT_DEFINITIONS: (((_b = this._customUniform) === null || _b === void 0 ? void 0 : _b.join("\n")) || "") + (this.CustomParts.Fragment_Definitions || ""),
                        CUSTOM_FRAGMENT_UPDATE_ALBEDO: this.CustomParts.Fragment_Custom_Albedo,
                        CUSTOM_FRAGMENT_UPDATE_ALPHA: this.CustomParts.Fragment_Custom_Alpha,
                        CUSTOM_FRAGMENT_BEFORE_LIGHTS: this.CustomParts.Fragment_Before_Lights,
                        CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS: this.CustomParts.Fragment_Custom_MetallicRoughness,
                        CUSTOM_FRAGMENT_UPDATE_MICROSURFACE: this.CustomParts.Fragment_Custom_MicroSurface,
                        CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION: this.CustomParts.Fragment_Before_FinalColorComposition,
                        CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: this.CustomParts.Fragment_Before_FragColor,
                        CUSTOM_FRAGMENT_MAIN_END: this.CustomParts.Fragment_MainEnd,
                        CUSTOM_FRAGMENT_BEFORE_FOG: this.CustomParts.Fragment_Before_Fog
                      };
                    };
                    PBRCustomMaterial2.prototype._afterBind = function(mesh, effect, subMesh) {
                      if (effect === void 0) {
                        effect = null;
                      }
                      if (!effect) {
                        return;
                      }
                      this.AttachAfterBind(mesh, effect);
                      try {
                        _super.prototype._afterBind.call(this, mesh, effect, subMesh);
                      } catch (e) {
                      }
                    };
                    PBRCustomMaterial2.prototype.AddUniform = function(name2, kind, param) {
                      if (!this._customUniform) {
                        this._customUniform = new Array();
                        this._newUniforms = new Array();
                        this._newSamplerInstances = {};
                        this._newUniformInstances = {};
                      }
                      if (param) {
                        if (kind.indexOf("sampler") != -1) {
                          this._newSamplerInstances[kind + "-" + name2] = param;
                        } else {
                          this._newUniformInstances[kind + "-" + name2] = param;
                        }
                      }
                      this._customUniform.push("uniform " + kind + " " + name2 + ";");
                      this._newUniforms.push(name2);
                      return this;
                    };
                    PBRCustomMaterial2.prototype.AddAttribute = function(name2) {
                      if (!this._customAttributes) {
                        this._customAttributes = [];
                      }
                      this._customAttributes.push(name2);
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Begin = function(shaderPart) {
                      this.CustomParts.Fragment_Begin = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Definitions = function(shaderPart) {
                      this.CustomParts.Fragment_Definitions = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_MainBegin = function(shaderPart) {
                      this.CustomParts.Fragment_MainBegin = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Custom_Albedo = function(shaderPart) {
                      this.CustomParts.Fragment_Custom_Albedo = shaderPart.replace("result", "surfaceAlbedo");
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Custom_Alpha = function(shaderPart) {
                      this.CustomParts.Fragment_Custom_Alpha = shaderPart.replace("result", "alpha");
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Before_Lights = function(shaderPart) {
                      this.CustomParts.Fragment_Before_Lights = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Custom_MetallicRoughness = function(shaderPart) {
                      this.CustomParts.Fragment_Custom_MetallicRoughness = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Custom_MicroSurface = function(shaderPart) {
                      this.CustomParts.Fragment_Custom_MicroSurface = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Before_Fog = function(shaderPart) {
                      this.CustomParts.Fragment_Before_Fog = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Before_FinalColorComposition = function(shaderPart) {
                      this.CustomParts.Fragment_Before_FinalColorComposition = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_Before_FragColor = function(shaderPart) {
                      this.CustomParts.Fragment_Before_FragColor = shaderPart.replace("result", "color");
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Fragment_MainEnd = function(shaderPart) {
                      this.CustomParts.Fragment_MainEnd = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Vertex_Begin = function(shaderPart) {
                      this.CustomParts.Vertex_Begin = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Vertex_Definitions = function(shaderPart) {
                      this.CustomParts.Vertex_Definitions = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Vertex_MainBegin = function(shaderPart) {
                      this.CustomParts.Vertex_MainBegin = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Vertex_Before_PositionUpdated = function(shaderPart) {
                      this.CustomParts.Vertex_Before_PositionUpdated = shaderPart.replace("result", "positionUpdated");
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Vertex_Before_NormalUpdated = function(shaderPart) {
                      this.CustomParts.Vertex_Before_NormalUpdated = shaderPart.replace("result", "normalUpdated");
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Vertex_After_WorldPosComputed = function(shaderPart) {
                      this.CustomParts.Vertex_After_WorldPosComputed = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.prototype.Vertex_MainEnd = function(shaderPart) {
                      this.CustomParts.Vertex_MainEnd = shaderPart;
                      return this;
                    };
                    PBRCustomMaterial2.ShaderIndexer = 1;
                    return PBRCustomMaterial2;
                  }(babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.PBRMaterial)
                );
                (0, babylonjs_Materials_effect__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.PBRCustomMaterial", PBRCustomMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/fire/fire.fragment.ts": (
              /*!********************************************************!*\
                !*** ../../../dev/materials/src/fire/fire.fragment.ts ***!
                \********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  firePixelShader: () => (
                    /* binding */
                    firePixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "firePixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\nuniform sampler2D distortionSampler;uniform sampler2D opacitySampler;\n#ifdef DIFFUSE\nvarying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nvec4 bx2(vec4 x)\n{return vec4(2.0)*x-vec4(1.0);}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);float alpha=1.0;\n#ifdef DIFFUSE\nconst float distortionAmount0 =0.092;const float distortionAmount1 =0.092;const float distortionAmount2 =0.092;vec2 heightAttenuation=vec2(0.3,0.39);vec4 noise0=texture2D(distortionSampler,vDistortionCoords1);vec4 noise1=texture2D(distortionSampler,vDistortionCoords2);vec4 noise2=texture2D(distortionSampler,vDistortionCoords3);vec4 noiseSum=bx2(noise0)*distortionAmount0+bx2(noise1)*distortionAmount1+bx2(noise2)*distortionAmount2;vec4 perturbedBaseCoords=vec4(vDiffuseUV,0.0,1.0)+noiseSum*(vDiffuseUV.y*heightAttenuation.x+heightAttenuation.y);vec4 opacityColor=texture2D(opacitySampler,perturbedBaseCoords.xy);\n#ifdef ALPHATEST\nif (opacityColor.r<0.1)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor=texture2D(diffuseSampler,perturbedBaseCoords.xy)*2.0;baseColor*=opacityColor;baseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(1.0,1.0,1.0);\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec4 color=vec4(baseColor.rgb,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var firePixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/fire/fire.vertex.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/fire/fire.vertex.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  fireVertexShader: () => (
                    /* binding */
                    fireVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/vertexColorMixing */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "fireVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\nuniform float time;uniform float speed;\n#ifdef DIFFUSE\nvarying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef DIFFUSE\nvDiffuseUV=uv;vDiffuseUV.y-=0.2;\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#ifdef DIFFUSE\nvec3 layerSpeed=vec3(-0.2,-0.52,-0.1)*speed;vDistortionCoords1.x=uv.x;vDistortionCoords1.y=uv.y+layerSpeed.x*time/1000.0;vDistortionCoords2.x=uv.x;vDistortionCoords2.y=uv.y+layerSpeed.y*time/1000.0;vDistortionCoords3.x=uv.x;vDistortionCoords3.y=uv.y+layerSpeed.z*time/1000.0;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var fireVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/fire/fireMaterial.ts": (
              /*!*******************************************************!*\
                !*** ../../../dev/materials/src/fire/fireMaterial.ts ***!
                \*******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  FireMaterial: () => (
                    /* binding */
                    FireMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _fire_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./fire.fragment */
                  "../../../dev/materials/src/fire/fire.fragment.ts"
                );
                var _fire_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./fire.vertex */
                  "../../../dev/materials/src/fire/fire.vertex.ts"
                );
                var FireMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(FireMaterialDefines2, _super);
                    function FireMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.UV1 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.BonesPerMesh = 0;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return FireMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var FireMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(FireMaterial2, _super);
                    function FireMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this.speed = 1;
                      _this._scaledDiffuse = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3();
                      _this._lastTime = 0;
                      return _this;
                    }
                    FireMaterial2.prototype.needAlphaBlending = function() {
                      return false;
                    };
                    FireMaterial2.prototype.needAlphaTesting = function() {
                      return true;
                    };
                    FireMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    FireMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new FireMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        defines._needUVs = false;
                        if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          if (!this._diffuseTexture.isReady()) {
                            return false;
                          } else {
                            defines._needUVs = true;
                            defines.DIFFUSE = true;
                          }
                        }
                      }
                      defines.ALPHATEST = this._opacityTexture ? true : false;
                      if (defines._areMiscDirty) {
                        defines.POINTSIZE = this.pointsCloud || scene.forcePointsCloud;
                        defines.FOG = scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE && this.fogEnabled;
                        defines.LOGARITHMICDEPTH = this._useLogarithmicDepth;
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, false, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "fire";
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vDiffuseInfos",
                          "mBones",
                          "diffuseMatrix",
                          "logarithmicDepthConstant",
                          // Fire
                          "time",
                          "speed"
                        ];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        var join = defines.toString();
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: [],
                          samplers: [
                            "diffuseSampler",
                            // Fire
                            "distortionSampler",
                            "opacitySampler"
                          ],
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: null,
                          maxSimultaneousLights: 4,
                          transformFeedbackVaryings: null
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    FireMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture);
                          this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level);
                          this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix());
                          this._activeEffect.setTexture("distortionSampler", this._distortionTexture);
                          this._activeEffect.setTexture("opacitySampler", this._opacityTexture);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(this._activeEffect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this._scaledDiffuse, this.alpha * mesh.visibility);
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._lastTime += scene.getEngine().getDeltaTime();
                      this._activeEffect.setFloat("time", this._lastTime);
                      this._activeEffect.setFloat("speed", this.speed);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    FireMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0) {
                        results.push(this._diffuseTexture);
                      }
                      if (this._distortionTexture && this._distortionTexture.animations && this._distortionTexture.animations.length > 0) {
                        results.push(this._distortionTexture);
                      }
                      if (this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0) {
                        results.push(this._opacityTexture);
                      }
                      return results;
                    };
                    FireMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._diffuseTexture) {
                        activeTextures.push(this._diffuseTexture);
                      }
                      if (this._distortionTexture) {
                        activeTextures.push(this._distortionTexture);
                      }
                      if (this._opacityTexture) {
                        activeTextures.push(this._opacityTexture);
                      }
                      return activeTextures;
                    };
                    FireMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this._diffuseTexture === texture) {
                        return true;
                      }
                      if (this._distortionTexture === texture) {
                        return true;
                      }
                      if (this._opacityTexture === texture) {
                        return true;
                      }
                      return false;
                    };
                    FireMaterial2.prototype.getClassName = function() {
                      return "FireMaterial";
                    };
                    FireMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this._diffuseTexture) {
                        this._diffuseTexture.dispose();
                      }
                      if (this._distortionTexture) {
                        this._distortionTexture.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    FireMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new FireMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    FireMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.FireMaterial";
                      serializationObject.diffuseColor = this.diffuseColor.asArray();
                      serializationObject.speed = this.speed;
                      if (this._diffuseTexture) {
                        serializationObject._diffuseTexture = this._diffuseTexture.serialize();
                      }
                      if (this._distortionTexture) {
                        serializationObject._distortionTexture = this._distortionTexture.serialize();
                      }
                      if (this._opacityTexture) {
                        serializationObject._opacityTexture = this._opacityTexture.serialize();
                      }
                      return serializationObject;
                    };
                    FireMaterial2.Parse = function(source, scene, rootUrl) {
                      var material = new FireMaterial2(source.name, scene);
                      material.diffuseColor = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(source.diffuseColor);
                      material.speed = source.speed;
                      material.alpha = source.alpha;
                      material.id = source.id;
                      babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Tags.AddTagsTo(material, source.tags);
                      material.backFaceCulling = source.backFaceCulling;
                      material.wireframe = source.wireframe;
                      if (source._diffuseTexture) {
                        material._diffuseTexture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Texture.Parse(source._diffuseTexture, scene, rootUrl);
                      }
                      if (source._distortionTexture) {
                        material._distortionTexture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Texture.Parse(source._distortionTexture, scene, rootUrl);
                      }
                      if (source._opacityTexture) {
                        material._opacityTexture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Texture.Parse(source._opacityTexture, scene, rootUrl);
                      }
                      return material;
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
                    ], FireMaterial2.prototype, "_diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], FireMaterial2.prototype, "diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("distortionTexture")
                    ], FireMaterial2.prototype, "_distortionTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], FireMaterial2.prototype, "distortionTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("opacityTexture")
                    ], FireMaterial2.prototype, "_opacityTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], FireMaterial2.prototype, "opacityTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)("diffuse")
                    ], FireMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FireMaterial2.prototype, "speed", void 0);
                    return FireMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.FireMaterial", FireMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/fire/index.ts": (
              /*!************************************************!*\
                !*** ../../../dev/materials/src/fire/index.ts ***!
                \************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  FireMaterial: () => (
                    /* reexport safe */
                    _fireMaterial__WEBPACK_IMPORTED_MODULE_0__.FireMaterial
                  )
                  /* harmony export */
                });
                var _fireMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./fireMaterial */
                  "../../../dev/materials/src/fire/fireMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/fur/fur.fragment.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/fur/fur.fragment.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  furPixelShader: () => (
                    /* binding */
                    furPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "furPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 furColor;uniform float furLength;varying vec3 vPositionW;varying float vfur_length;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef HIGHLEVEL\nuniform float furOffset;uniform float furOcclusion;uniform sampler2D furTexture;varying vec2 vFurUV;\n#endif\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<fogFragmentDeclaration>\n#include<clipPlaneFragmentDeclaration>\nfloat Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=furColor;vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor*=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef HIGHLEVEL\nvec4 furTextureColor=texture2D(furTexture,vec2(vFurUV.x,vFurUV.y));if (furTextureColor.a<=0.0 || furTextureColor.g<furOffset) {discard;}\nfloat occlusion=mix(0.0,furTextureColor.b*1.2,furOffset);baseColor=vec4(baseColor.xyz*max(occlusion,furOcclusion),1.1-furOffset);\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase.rgb*baseColor.rgb,0.0,1.0);\n#ifdef HIGHLEVEL\nvec4 color=vec4(finalDiffuse,alpha);\n#else\nfloat r=vfur_length/furLength*0.5;vec4 color=vec4(finalDiffuse*(0.5+r),alpha);\n#endif\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var furPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/fur/fur.vertex.ts": (
              /*!****************************************************!*\
                !*** ../../../dev/materials/src/fur/fur.vertex.ts ***!
                \****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  furVertexShader: () => (
                    /* binding */
                    furVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/vertexColorMixing */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "furVertexShader";
                var shader = "precision highp float;attribute vec3 position;attribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\nuniform float furLength;uniform float furAngle;\n#ifdef HIGHLEVEL\nuniform float furOffset;uniform vec3 furGravity;uniform float furTime;uniform float furSpacing;uniform float furDensity;\n#endif\n#ifdef HEIGHTMAP\nuniform sampler2D heightTexture;\n#endif\n#ifdef HIGHLEVEL\nvarying vec2 vFurUV;\n#endif\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\nvarying float vfur_length;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\nfloat Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nfloat r=Rand(position);\n#ifdef HEIGHTMAP\n#if __VERSION__>100\nvfur_length=furLength*texture(heightTexture,uv).x;\n#else\nvfur_length=furLength*texture2D(heightTexture,uv).r;\n#endif\n#else \nvfur_length=(furLength*r);\n#endif\nvec3 tangent1=vec3(normal.y,-normal.x,0);vec3 tangent2=vec3(-normal.z,0,normal.x);r=Rand(tangent1*r);float J=(2.0+4.0*r);r=Rand(tangent2*r);float K=(2.0+2.0*r);tangent1=tangent1*J+tangent2*K;tangent1=normalize(tangent1);vec3 newPosition=position+normal*vfur_length*cos(furAngle)+tangent1*vfur_length*sin(furAngle);\n#ifdef HIGHLEVEL\nvec3 forceDirection=vec3(0.0,0.0,0.0);forceDirection.x=sin(furTime+position.x*0.05)*0.2;forceDirection.y=cos(furTime*0.7+position.y*0.04)*0.2;forceDirection.z=sin(furTime*0.7+position.z*0.04)*0.2;vec3 displacement=vec3(0.0,0.0,0.0);displacement=furGravity+forceDirection;float displacementFactor=pow(furOffset,3.0);vec3 aNormal=normal;aNormal.xyz+=displacement*displacementFactor;newPosition=vec3(newPosition.x,newPosition.y,newPosition.z)+(normalize(aNormal)*furOffset*furSpacing);\n#endif\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\ngl_Position=viewProjection*finalWorld*vec4(newPosition,1.0);vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#ifdef HIGHLEVEL\nvFurUV=vDiffuseUV*furDensity;\n#endif\n#else\n#ifdef HIGHLEVEL\nvFurUV=uv*furDensity;\n#endif\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var furVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/fur/furMaterial.ts": (
              /*!*****************************************************!*\
                !*** ../../../dev/materials/src/fur/furMaterial.ts ***!
                \*****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  FurMaterial: () => (
                    /* binding */
                    FurMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _fur_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./fur.fragment */
                  "../../../dev/materials/src/fur/fur.fragment.ts"
                );
                var _fur_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./fur.vertex */
                  "../../../dev/materials/src/fur/fur.vertex.ts"
                );
                var FurMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(FurMaterialDefines2, _super);
                    function FurMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.HEIGHTMAP = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.HIGHLEVEL = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return FurMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var FurMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(FurMaterial2, _super);
                    function FurMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this.furLength = 1;
                      _this.furAngle = 0;
                      _this.furColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.44, 0.21, 0.02);
                      _this.furOffset = 0;
                      _this.furSpacing = 12;
                      _this.furGravity = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
                      _this.furSpeed = 100;
                      _this.furDensity = 20;
                      _this.furOcclusion = 0;
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      _this.highLevelFur = true;
                      _this._furTime = 0;
                      return _this;
                    }
                    Object.defineProperty(FurMaterial2.prototype, "furTime", {
                      get: function() {
                        return this._furTime;
                      },
                      set: function(furTime) {
                        this._furTime = furTime;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    FurMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    FurMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    FurMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    FurMaterial2.prototype.updateFur = function() {
                      for (var i = 1; i < this._meshes.length; i++) {
                        var offsetFur = this._meshes[i].material;
                        offsetFur.furLength = this.furLength;
                        offsetFur.furAngle = this.furAngle;
                        offsetFur.furGravity = this.furGravity;
                        offsetFur.furSpacing = this.furSpacing;
                        offsetFur.furSpeed = this.furSpeed;
                        offsetFur.furColor = this.furColor;
                        offsetFur.diffuseTexture = this.diffuseTexture;
                        offsetFur.furTexture = this.furTexture;
                        offsetFur.highLevelFur = this.highLevelFur;
                        offsetFur.furTime = this.furTime;
                        offsetFur.furDensity = this.furDensity;
                      }
                    };
                    FurMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new FurMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        if (scene.texturesEnabled) {
                          if (this.diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (!this.diffuseTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.DIFFUSE = true;
                            }
                          }
                          if (this.heightTexture && engine.getCaps().maxVertexTextureImageUnits) {
                            if (!this.heightTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.HEIGHTMAP = true;
                            }
                          }
                        }
                      }
                      if (this.highLevelFur !== defines.HIGHLEVEL) {
                        defines.HIGHLEVEL = true;
                        defines.markAsUnprocessed();
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, this.maxSimultaneousLights);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "fur";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vDiffuseInfos",
                          "mBones",
                          "diffuseMatrix",
                          "logarithmicDepthConstant",
                          "furLength",
                          "furAngle",
                          "furColor",
                          "furOffset",
                          "furGravity",
                          "furTime",
                          "furSpacing",
                          "furDensity",
                          "furOcclusion"
                        ];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        var samplers = ["diffuseSampler", "heightTexture", "furTexture"];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    FurMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture);
                          this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level);
                          this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix());
                        }
                        if (this._heightTexture) {
                          this._activeEffect.setTexture("heightTexture", this._heightTexture);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(this._activeEffect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._activeEffect.setFloat("furLength", this.furLength);
                      this._activeEffect.setFloat("furAngle", this.furAngle);
                      this._activeEffect.setColor4("furColor", this.furColor, 1);
                      if (this.highLevelFur) {
                        this._activeEffect.setVector3("furGravity", this.furGravity);
                        this._activeEffect.setFloat("furOffset", this.furOffset);
                        this._activeEffect.setFloat("furSpacing", this.furSpacing);
                        this._activeEffect.setFloat("furDensity", this.furDensity);
                        this._activeEffect.setFloat("furOcclusion", this.furOcclusion);
                        this._furTime += this.getScene().getEngine().getDeltaTime() / this.furSpeed;
                        this._activeEffect.setFloat("furTime", this._furTime);
                        this._activeEffect.setTexture("furTexture", this.furTexture);
                      }
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    FurMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0) {
                        results.push(this.diffuseTexture);
                      }
                      if (this.heightTexture && this.heightTexture.animations && this.heightTexture.animations.length > 0) {
                        results.push(this.heightTexture);
                      }
                      return results;
                    };
                    FurMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._diffuseTexture) {
                        activeTextures.push(this._diffuseTexture);
                      }
                      if (this._heightTexture) {
                        activeTextures.push(this._heightTexture);
                      }
                      return activeTextures;
                    };
                    FurMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this.diffuseTexture === texture) {
                        return true;
                      }
                      if (this._heightTexture === texture) {
                        return true;
                      }
                      return false;
                    };
                    FurMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this.diffuseTexture) {
                        this.diffuseTexture.dispose();
                      }
                      if (this._meshes) {
                        for (var i = 1; i < this._meshes.length; i++) {
                          var mat = this._meshes[i].material;
                          if (mat) {
                            mat.dispose(forceDisposeEffect);
                          }
                          this._meshes[i].dispose();
                        }
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    FurMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new FurMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    FurMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.FurMaterial";
                      if (this._meshes) {
                        serializationObject.sourceMeshName = this._meshes[0].name;
                        serializationObject.quality = this._meshes.length;
                      }
                      return serializationObject;
                    };
                    FurMaterial2.prototype.getClassName = function() {
                      return "FurMaterial";
                    };
                    FurMaterial2.Parse = function(source, scene, rootUrl) {
                      var material = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new FurMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                      if (source.sourceMeshName && material.highLevelFur) {
                        scene.executeWhenReady(function() {
                          var sourceMesh = scene.getMeshByName(source.sourceMeshName);
                          if (sourceMesh) {
                            var furTexture = FurMaterial2.GenerateTexture("Fur Texture", scene);
                            material.furTexture = furTexture;
                            FurMaterial2.FurifyMesh(sourceMesh, source.quality);
                          }
                        });
                      }
                      return material;
                    };
                    FurMaterial2.GenerateTexture = function(name2, scene) {
                      var texture = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.DynamicTexture("FurTexture " + name2, 256, scene, true);
                      var context = texture.getContext();
                      for (var i = 0; i < 2e4; ++i) {
                        context.fillStyle = "rgba(255, " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", 1)";
                        context.fillRect(Math.random() * texture.getSize().width, Math.random() * texture.getSize().height, 2, 2);
                      }
                      texture.update(false);
                      texture.wrapU = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Texture.WRAP_ADDRESSMODE;
                      texture.wrapV = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Texture.WRAP_ADDRESSMODE;
                      return texture;
                    };
                    FurMaterial2.FurifyMesh = function(sourceMesh, quality) {
                      var meshes = [sourceMesh];
                      var mat = sourceMesh.material;
                      var i;
                      if (!(mat instanceof FurMaterial2)) {
                        throw "The material of the source mesh must be a Fur Material";
                      }
                      for (i = 1; i < quality; i++) {
                        var offsetFur = new FurMaterial2(mat.name + i, sourceMesh.getScene());
                        sourceMesh.getScene().materials.pop();
                        babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Tags.EnableFor(offsetFur);
                        babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Tags.AddTagsTo(offsetFur, "furShellMaterial");
                        offsetFur.furLength = mat.furLength;
                        offsetFur.furAngle = mat.furAngle;
                        offsetFur.furGravity = mat.furGravity;
                        offsetFur.furSpacing = mat.furSpacing;
                        offsetFur.furSpeed = mat.furSpeed;
                        offsetFur.furColor = mat.furColor;
                        offsetFur.diffuseTexture = mat.diffuseTexture;
                        offsetFur.furOffset = i / quality;
                        offsetFur.furTexture = mat.furTexture;
                        offsetFur.highLevelFur = mat.highLevelFur;
                        offsetFur.furTime = mat.furTime;
                        offsetFur.furDensity = mat.furDensity;
                        var offsetMesh = sourceMesh.clone(sourceMesh.name + i);
                        offsetMesh.material = offsetFur;
                        offsetMesh.skeleton = sourceMesh.skeleton;
                        offsetMesh.position = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                        meshes.push(offsetMesh);
                      }
                      for (i = 1; i < meshes.length; i++) {
                        meshes[i].parent = sourceMesh;
                      }
                      sourceMesh.material._meshes = meshes;
                      return meshes;
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
                    ], FurMaterial2.prototype, "_diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], FurMaterial2.prototype, "diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("heightTexture")
                    ], FurMaterial2.prototype, "_heightTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], FurMaterial2.prototype, "heightTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], FurMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furLength", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furAngle", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], FurMaterial2.prototype, "furColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furOffset", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furSpacing", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector3)()
                    ], FurMaterial2.prototype, "furGravity", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furSpeed", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furDensity", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furOcclusion", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], FurMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], FurMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], FurMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], FurMaterial2.prototype, "maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "highLevelFur", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], FurMaterial2.prototype, "furTime", null);
                    return FurMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.FurMaterial", FurMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/fur/index.ts": (
              /*!***********************************************!*\
                !*** ../../../dev/materials/src/fur/index.ts ***!
                \***********************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  FurMaterial: () => (
                    /* reexport safe */
                    _furMaterial__WEBPACK_IMPORTED_MODULE_0__.FurMaterial
                  )
                  /* harmony export */
                });
                var _furMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./furMaterial */
                  "../../../dev/materials/src/fur/furMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/gradient/gradient.fragment.ts": (
              /*!****************************************************************!*\
                !*** ../../../dev/materials/src/gradient/gradient.fragment.ts ***!
                \****************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  gradientPixelShader: () => (
                    /* binding */
                    gradientPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "gradientPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 topColor;uniform vec4 bottomColor;uniform float offset;uniform float scale;uniform float smoothness;varying vec3 vPositionW;varying vec3 vPosition;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);float h=vPosition.y*scale+offset;float mysmoothness=clamp(smoothness,0.01,max(smoothness,10.));vec4 baseColor=mix(bottomColor,topColor,max(pow(max(h,0.0),mysmoothness),0.0));vec3 diffuseColor=baseColor.rgb;float alpha=baseColor.a;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef EMISSIVE\nvec3 diffuseBase=baseColor.rgb;\n#else\nvec3 diffuseBase=vec3(0.,0.,0.);\n#endif\nlightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var gradientPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/gradient/gradient.vertex.ts": (
              /*!**************************************************************!*\
                !*** ../../../dev/materials/src/gradient/gradient.vertex.ts ***!
                \**************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  gradientVertexShader: () => (
                    /* binding */
                    gradientVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/vertexColorMixing */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "gradientVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;varying vec3 vPosition;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);vPosition=position;\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var gradientVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/gradient/gradientMaterial.ts": (
              /*!***************************************************************!*\
                !*** ../../../dev/materials/src/gradient/gradientMaterial.ts ***!
                \***************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  GradientMaterial: () => (
                    /* binding */
                    GradientMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _gradient_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./gradient.fragment */
                  "../../../dev/materials/src/gradient/gradient.fragment.ts"
                );
                var _gradient_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./gradient.vertex */
                  "../../../dev/materials/src/gradient/gradient.vertex.ts"
                );
                var GradientMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GradientMaterialDefines2, _super);
                    function GradientMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.EMISSIVE = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return GradientMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var GradientMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GradientMaterial2, _super);
                    function GradientMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this._maxSimultaneousLights = 4;
                      _this.topColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 0, 0);
                      _this.topColorAlpha = 1;
                      _this.bottomColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 1);
                      _this.bottomColorAlpha = 1;
                      _this.offset = 0;
                      _this.scale = 1;
                      _this.smoothness = 1;
                      _this._disableLighting = false;
                      return _this;
                    }
                    GradientMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1 || this.topColorAlpha < 1 || this.bottomColorAlpha < 1;
                    };
                    GradientMaterial2.prototype.needAlphaTesting = function() {
                      return true;
                    };
                    GradientMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    GradientMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new GradientMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      defines.EMISSIVE = this._disableLighting;
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, false, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "gradient";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "mBones",
                          "logarithmicDepthConstant",
                          "topColor",
                          "bottomColor",
                          "offset",
                          "smoothness",
                          "scale"
                        ];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        var samplers = [];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: 4
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: 4 }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    GradientMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, effect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._activeEffect.setColor4("topColor", this.topColor, this.topColorAlpha);
                      this._activeEffect.setColor4("bottomColor", this.bottomColor, this.bottomColorAlpha);
                      this._activeEffect.setFloat("offset", this.offset);
                      this._activeEffect.setFloat("scale", this.scale);
                      this._activeEffect.setFloat("smoothness", this.smoothness);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    GradientMaterial2.prototype.getAnimatables = function() {
                      return [];
                    };
                    GradientMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    GradientMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new GradientMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    GradientMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.GradientMaterial";
                      return serializationObject;
                    };
                    GradientMaterial2.prototype.getClassName = function() {
                      return "GradientMaterial";
                    };
                    GradientMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new GradientMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], GradientMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], GradientMaterial2.prototype, "maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], GradientMaterial2.prototype, "topColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GradientMaterial2.prototype, "topColorAlpha", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], GradientMaterial2.prototype, "bottomColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GradientMaterial2.prototype, "bottomColorAlpha", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GradientMaterial2.prototype, "offset", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GradientMaterial2.prototype, "scale", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GradientMaterial2.prototype, "smoothness", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], GradientMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], GradientMaterial2.prototype, "disableLighting", void 0);
                    return GradientMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.GradientMaterial", GradientMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/gradient/index.ts": (
              /*!****************************************************!*\
                !*** ../../../dev/materials/src/gradient/index.ts ***!
                \****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  GradientMaterial: () => (
                    /* reexport safe */
                    _gradientMaterial__WEBPACK_IMPORTED_MODULE_0__.GradientMaterial
                  )
                  /* harmony export */
                });
                var _gradientMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./gradientMaterial */
                  "../../../dev/materials/src/gradient/gradientMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/grid/grid.fragment.ts": (
              /*!********************************************************!*\
                !*** ../../../dev/materials/src/grid/grid.fragment.ts ***!
                \********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  gridPixelShader: () => (
                    /* binding */
                    gridPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "gridPixelShader";
                var shader = "#extension GL_OES_standard_derivatives : enable\n#define SQRT2 1.41421356\n#define PI 3.14159\nprecision highp float;uniform float visibility;uniform vec3 mainColor;uniform vec3 lineColor;uniform vec4 gridControl;uniform vec3 gridOffset;varying vec3 vPosition;varying vec3 vNormal;\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#ifdef OPACITY\nvarying vec2 vOpacityUV;uniform sampler2D opacitySampler;uniform vec2 vOpacityInfos;\n#endif\nfloat getDynamicVisibility(float position) {float majorGridFrequency=gridControl.y;if (floor(position+0.5)==floor(position/majorGridFrequency+0.5)*majorGridFrequency)\n{return 1.0;}\nreturn gridControl.z;}\nfloat getAnisotropicAttenuation(float differentialLength) {const float maxNumberOfLines=10.0;return clamp(1.0/(differentialLength+1.0)-1.0/maxNumberOfLines,0.0,1.0);}\nfloat isPointOnLine(float position,float differentialLength) {float fractionPartOfPosition=position-floor(position+0.5); \nfractionPartOfPosition/=differentialLength; \n#ifdef ANTIALIAS\nfractionPartOfPosition=clamp(fractionPartOfPosition,-1.,1.);float result=0.5+0.5*cos(fractionPartOfPosition*PI); \nreturn result;\n#else\nreturn abs(fractionPartOfPosition)<SQRT2/4. ? 1. : 0.;\n#endif\n}\nfloat contributionOnAxis(float position) {float differentialLength=length(vec2(dFdx(position),dFdy(position)));differentialLength*=SQRT2; \nfloat result=isPointOnLine(position,differentialLength);float dynamicVisibility=getDynamicVisibility(position);result*=dynamicVisibility;float anisotropicAttenuation=getAnisotropicAttenuation(differentialLength);result*=anisotropicAttenuation;return result;}\nfloat normalImpactOnAxis(float x) {float normalImpact=clamp(1.0-3.0*abs(x*x*x),0.0,1.0);return normalImpact;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nfloat gridRatio=gridControl.x;vec3 gridPos=(vPosition+gridOffset.xyz)/gridRatio;float x=contributionOnAxis(gridPos.x);float y=contributionOnAxis(gridPos.y);float z=contributionOnAxis(gridPos.z);vec3 normal=normalize(vNormal);x*=normalImpactOnAxis(normal.x);y*=normalImpactOnAxis(normal.y);z*=normalImpactOnAxis(normal.z);\n#ifdef MAX_LINE\nfloat grid=clamp(max(max(x,y),z),0.,1.);\n#else\nfloat grid=clamp(x+y+z,0.,1.);\n#endif\nvec3 color=mix(mainColor,lineColor,grid);\n#ifdef FOG\n#include<fogFragment>\n#endif\nfloat opacity=1.0;\n#ifdef TRANSPARENT\nopacity=clamp(grid,0.08,gridControl.w*grid);\n#endif\n#ifdef OPACITY\nopacity*=texture2D(opacitySampler,vOpacityUV).a;\n#endif\ngl_FragColor=vec4(color.rgb,opacity*visibility);\n#ifdef TRANSPARENT\n#ifdef PREMULTIPLYALPHA\ngl_FragColor.rgb*=opacity;\n#endif\n#else\n#endif\n#include<logDepthFragment>\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var gridPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/grid/grid.vertex.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/grid/grid.vertex.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  gridVertexShader: () => (
                    /* binding */
                    gridVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/logDepthVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "gridVertexShader";
                var shader = "precision highp float;attribute vec3 position;attribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#include<instancesDeclaration>\nuniform mat4 projection;uniform mat4 view;varying vec3 vPosition;varying vec3 vNormal;\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#ifdef OPACITY\nvarying vec2 vOpacityUV;uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\nvec4 worldPos=finalWorld*vec4(position,1.0);\n#include<fogVertex>\nvec4 cameraSpacePosition=view*worldPos;gl_Position=projection*cameraSpacePosition;\n#ifdef OPACITY\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\nif (vOpacityInfos.x==0.)\n{vOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));}\nelse\n{vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));}\n#endif \n#include<logDepthVertex>\nvPosition=position;vNormal=normal;\n#define CUSTOM_VERTEX_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var gridVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/grid/gridMaterial.ts": (
              /*!*******************************************************!*\
                !*** ../../../dev/materials/src/grid/gridMaterial.ts ***!
                \*******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  GridMaterial: () => (
                    /* binding */
                    GridMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _grid_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./grid.fragment */
                  "../../../dev/materials/src/grid/grid.fragment.ts"
                );
                var _grid_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./grid.vertex */
                  "../../../dev/materials/src/grid/grid.vertex.ts"
                );
                var GridMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GridMaterialDefines2, _super);
                    function GridMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.OPACITY = false;
                      _this.ANTIALIAS = false;
                      _this.TRANSPARENT = false;
                      _this.FOG = false;
                      _this.PREMULTIPLYALPHA = false;
                      _this.MAX_LINE = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.INSTANCES = false;
                      _this.THIN_INSTANCES = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return GridMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var GridMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GridMaterial2, _super);
                    function GridMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.mainColor = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
                      _this.lineColor = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3.Teal();
                      _this.gridRatio = 1;
                      _this.gridOffset = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                      _this.majorUnitFrequency = 10;
                      _this.minorUnitVisibility = 0.33;
                      _this.opacity = 1;
                      _this.antialias = true;
                      _this.preMultiplyAlpha = false;
                      _this.useMaxLine = false;
                      _this._gridControl = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector4(_this.gridRatio, _this.majorUnitFrequency, _this.minorUnitVisibility, _this.opacity);
                      return _this;
                    }
                    GridMaterial2.prototype.needAlphaBlending = function() {
                      return this.opacity < 1 || this._opacityTexture && this._opacityTexture.isReady();
                    };
                    GridMaterial2.prototype.needAlphaBlendingForMesh = function(mesh) {
                      return mesh.visibility < 1 || this.needAlphaBlending();
                    };
                    GridMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new GridMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      if (defines.TRANSPARENT !== this.opacity < 1) {
                        defines.TRANSPARENT = !defines.TRANSPARENT;
                        defines.markAsUnprocessed();
                      }
                      if (defines.PREMULTIPLYALPHA != this.preMultiplyAlpha) {
                        defines.PREMULTIPLYALPHA = !defines.PREMULTIPLYALPHA;
                        defines.markAsUnprocessed();
                      }
                      if (defines.MAX_LINE !== this.useMaxLine) {
                        defines.MAX_LINE = !defines.MAX_LINE;
                        defines.markAsUnprocessed();
                      }
                      if (defines.ANTIALIAS !== this.antialias) {
                        defines.ANTIALIAS = !defines.ANTIALIAS;
                        defines.markAsUnprocessed();
                      }
                      if (defines._areTexturesDirty) {
                        defines._needUVs = false;
                        if (scene.texturesEnabled) {
                          if (this._opacityTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.OpacityTextureEnabled) {
                            if (!this._opacityTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.OPACITY = true;
                            }
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, false, this.fogEnabled, false, defines);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, scene.getEngine(), this, defines, !!useInstances);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, false, false);
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind];
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var join = defines.toString();
                        subMesh.setEffect(scene.getEngine().createEffect("grid", attribs, [
                          "projection",
                          "mainColor",
                          "lineColor",
                          "gridControl",
                          "gridOffset",
                          "vFogInfos",
                          "vFogColor",
                          "world",
                          "view",
                          "opacityMatrix",
                          "vOpacityInfos",
                          "visibility",
                          "logarithmicDepthConstant"
                        ], ["opacitySampler"], join, void 0, this.onCompiled, this.onError), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    GridMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this._activeEffect.setFloat("visibility", mesh.visibility);
                      if (!defines.INSTANCES || defines.THIN_INSTANCE) {
                        this.bindOnlyWorldMatrix(world);
                      }
                      this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      this._activeEffect.setMatrix("projection", scene.getProjectionMatrix());
                      if (this._mustRebind(scene, effect, subMesh)) {
                        this._activeEffect.setColor3("mainColor", this.mainColor);
                        this._activeEffect.setColor3("lineColor", this.lineColor);
                        this._activeEffect.setVector3("gridOffset", this.gridOffset);
                        this._gridControl.x = this.gridRatio;
                        this._gridControl.y = Math.round(this.majorUnitFrequency);
                        this._gridControl.z = this.minorUnitVisibility;
                        this._gridControl.w = this.opacity;
                        this._activeEffect.setVector4("gridControl", this._gridControl);
                        if (this._opacityTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.OpacityTextureEnabled) {
                          this._activeEffect.setTexture("opacitySampler", this._opacityTexture);
                          this._activeEffect.setFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level);
                          this._activeEffect.setMatrix("opacityMatrix", this._opacityTexture.getTextureMatrix());
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    GridMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    GridMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new GridMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    GridMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.GridMaterial";
                      return serializationObject;
                    };
                    GridMaterial2.prototype.getClassName = function() {
                      return "GridMaterial";
                    };
                    GridMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new GridMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], GridMaterial2.prototype, "mainColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], GridMaterial2.prototype, "lineColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GridMaterial2.prototype, "gridRatio", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector3)()
                    ], GridMaterial2.prototype, "gridOffset", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GridMaterial2.prototype, "majorUnitFrequency", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GridMaterial2.prototype, "minorUnitVisibility", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GridMaterial2.prototype, "opacity", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GridMaterial2.prototype, "antialias", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GridMaterial2.prototype, "preMultiplyAlpha", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], GridMaterial2.prototype, "useMaxLine", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("opacityTexture")
                    ], GridMaterial2.prototype, "_opacityTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], GridMaterial2.prototype, "opacityTexture", void 0);
                    return GridMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.GridMaterial", GridMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/grid/index.ts": (
              /*!************************************************!*\
                !*** ../../../dev/materials/src/grid/index.ts ***!
                \************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  GridMaterial: () => (
                    /* reexport safe */
                    _gridMaterial__WEBPACK_IMPORTED_MODULE_0__.GridMaterial
                  )
                  /* harmony export */
                });
                var _gridMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./gridMaterial */
                  "../../../dev/materials/src/grid/gridMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/index.ts": (
              /*!*******************************************!*\
                !*** ../../../dev/materials/src/index.ts ***!
                \*******************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  CellMaterial: () => (
                    /* reexport safe */
                    _cell_index__WEBPACK_IMPORTED_MODULE_0__.CellMaterial
                  ),
                  /* harmony export */
                  CustomMaterial: () => (
                    /* reexport safe */
                    _custom_index__WEBPACK_IMPORTED_MODULE_1__.CustomMaterial
                  ),
                  /* harmony export */
                  CustomShaderStructure: () => (
                    /* reexport safe */
                    _custom_index__WEBPACK_IMPORTED_MODULE_1__.CustomShaderStructure
                  ),
                  /* harmony export */
                  FireMaterial: () => (
                    /* reexport safe */
                    _fire_index__WEBPACK_IMPORTED_MODULE_2__.FireMaterial
                  ),
                  /* harmony export */
                  FurMaterial: () => (
                    /* reexport safe */
                    _fur_index__WEBPACK_IMPORTED_MODULE_3__.FurMaterial
                  ),
                  /* harmony export */
                  GradientMaterial: () => (
                    /* reexport safe */
                    _gradient_index__WEBPACK_IMPORTED_MODULE_4__.GradientMaterial
                  ),
                  /* harmony export */
                  GridMaterial: () => (
                    /* reexport safe */
                    _grid_index__WEBPACK_IMPORTED_MODULE_5__.GridMaterial
                  ),
                  /* harmony export */
                  LavaMaterial: () => (
                    /* reexport safe */
                    _lava_index__WEBPACK_IMPORTED_MODULE_6__.LavaMaterial
                  ),
                  /* harmony export */
                  MixMaterial: () => (
                    /* reexport safe */
                    _mix_index__WEBPACK_IMPORTED_MODULE_7__.MixMaterial
                  ),
                  /* harmony export */
                  NormalMaterial: () => (
                    /* reexport safe */
                    _normal_index__WEBPACK_IMPORTED_MODULE_8__.NormalMaterial
                  ),
                  /* harmony export */
                  PBRCustomMaterial: () => (
                    /* reexport safe */
                    _custom_index__WEBPACK_IMPORTED_MODULE_1__.PBRCustomMaterial
                  ),
                  /* harmony export */
                  ShaderAlbedoParts: () => (
                    /* reexport safe */
                    _custom_index__WEBPACK_IMPORTED_MODULE_1__.ShaderAlbedoParts
                  ),
                  /* harmony export */
                  ShaderAlebdoParts: () => (
                    /* reexport safe */
                    _custom_index__WEBPACK_IMPORTED_MODULE_1__.ShaderAlebdoParts
                  ),
                  /* harmony export */
                  ShaderSpecialParts: () => (
                    /* reexport safe */
                    _custom_index__WEBPACK_IMPORTED_MODULE_1__.ShaderSpecialParts
                  ),
                  /* harmony export */
                  ShadowOnlyMaterial: () => (
                    /* reexport safe */
                    _shadowOnly_index__WEBPACK_IMPORTED_MODULE_9__.ShadowOnlyMaterial
                  ),
                  /* harmony export */
                  SimpleMaterial: () => (
                    /* reexport safe */
                    _simple_index__WEBPACK_IMPORTED_MODULE_10__.SimpleMaterial
                  ),
                  /* harmony export */
                  SkyMaterial: () => (
                    /* reexport safe */
                    _sky_index__WEBPACK_IMPORTED_MODULE_11__.SkyMaterial
                  ),
                  /* harmony export */
                  TerrainMaterial: () => (
                    /* reexport safe */
                    _terrain_index__WEBPACK_IMPORTED_MODULE_12__.TerrainMaterial
                  ),
                  /* harmony export */
                  TriPlanarMaterial: () => (
                    /* reexport safe */
                    _triPlanar_index__WEBPACK_IMPORTED_MODULE_13__.TriPlanarMaterial
                  ),
                  /* harmony export */
                  WaterMaterial: () => (
                    /* reexport safe */
                    _water_index__WEBPACK_IMPORTED_MODULE_14__.WaterMaterial
                  )
                  /* harmony export */
                });
                var _cell_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./cell/index */
                  "../../../dev/materials/src/cell/index.ts"
                );
                var _custom_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./custom/index */
                  "../../../dev/materials/src/custom/index.ts"
                );
                var _fire_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./fire/index */
                  "../../../dev/materials/src/fire/index.ts"
                );
                var _fur_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! ./fur/index */
                  "../../../dev/materials/src/fur/index.ts"
                );
                var _gradient_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__2(
                  /*! ./gradient/index */
                  "../../../dev/materials/src/gradient/index.ts"
                );
                var _grid_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__2(
                  /*! ./grid/index */
                  "../../../dev/materials/src/grid/index.ts"
                );
                var _lava_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__2(
                  /*! ./lava/index */
                  "../../../dev/materials/src/lava/index.ts"
                );
                var _mix_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__2(
                  /*! ./mix/index */
                  "../../../dev/materials/src/mix/index.ts"
                );
                var _normal_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__2(
                  /*! ./normal/index */
                  "../../../dev/materials/src/normal/index.ts"
                );
                var _shadowOnly_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__2(
                  /*! ./shadowOnly/index */
                  "../../../dev/materials/src/shadowOnly/index.ts"
                );
                var _simple_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__2(
                  /*! ./simple/index */
                  "../../../dev/materials/src/simple/index.ts"
                );
                var _sky_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__2(
                  /*! ./sky/index */
                  "../../../dev/materials/src/sky/index.ts"
                );
                var _terrain_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__2(
                  /*! ./terrain/index */
                  "../../../dev/materials/src/terrain/index.ts"
                );
                var _triPlanar_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__2(
                  /*! ./triPlanar/index */
                  "../../../dev/materials/src/triPlanar/index.ts"
                );
                var _water_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__2(
                  /*! ./water/index */
                  "../../../dev/materials/src/water/index.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/lava/index.ts": (
              /*!************************************************!*\
                !*** ../../../dev/materials/src/lava/index.ts ***!
                \************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  LavaMaterial: () => (
                    /* reexport safe */
                    _lavaMaterial__WEBPACK_IMPORTED_MODULE_0__.LavaMaterial
                  )
                  /* harmony export */
                });
                var _lavaMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./lavaMaterial */
                  "../../../dev/materials/src/lava/lavaMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/lava/lava.fragment.ts": (
              /*!********************************************************!*\
                !*** ../../../dev/materials/src/lava/lava.fragment.ts ***!
                \********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  lavaPixelShader: () => (
                    /* binding */
                    lavaPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "lavaPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;uniform float time;uniform float speed;uniform float movingSpeed;uniform vec3 fogColor;uniform sampler2D noiseTexture;uniform float fogDensity;varying float noise;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nfloat random( vec3 scale,float seed ){return fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nvec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );vec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time *0.02;vec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;T1.x+=noiseTex.x*2.0;T1.y+=noiseTex.y*2.0;T2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;T2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;float p=texture2D( noiseTexture,T1*3.0 ).a;vec4 lavaColor=texture2D( diffuseSampler,T2*4.0);vec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );baseColor=temp;float depth=gl_FragCoord.z*4.0;const float LOG2=1.442695;float fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );fogFactor=1.0-clamp( fogFactor,0.0,1.0 );baseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );diffuseColor=baseColor.rgb;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef UNLIT\nvec3 diffuseBase=vec3(1.,1.,1.);\n#else\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var lavaPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/lava/lava.vertex.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/lava/lava.vertex.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  lavaVertexShader: () => (
                    /* binding */
                    lavaVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/logDepthVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "lavaVertexShader";
                var shader = "precision highp float;uniform float time;uniform float lowFrequencySpeed;varying float noise;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n/* NOISE FUNCTIONS */\nvec3 mod289(vec3 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 mod289(vec4 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 permute(vec4 x)\n{return mod289(((x*34.0)+1.0)*x);}\nvec4 taylorInvSqrt(vec4 r)\n{return 1.79284291400159-0.85373472095314*r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat pnoise(vec3 P,vec3 rep)\n{vec3 Pi0=mod(floor(P),rep); \nvec3 Pi1=mod(Pi0+vec3(1.0),rep); \nPi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P); \nvec3 Pf1=Pf0-vec3(1.0); \nvec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}\n/* END FUNCTION */\nfloat turbulence( vec3 p ) {float w=100.0;float t=-.5;for (float f=1.0 ; f<=10.0 ; f++ ){float power=pow( 2.0,f );t+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );}\nreturn t;}\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\n#ifdef NORMAL\nnoise=10.0* -.10*turbulence( .5*normal+time*1.15 );float b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );float displacement=- 1.5*noise+b;vec3 newPosition=position+normal*displacement;gl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#include<logDepthVertex>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var lavaVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/lava/lavaMaterial.ts": (
              /*!*******************************************************!*\
                !*** ../../../dev/materials/src/lava/lavaMaterial.ts ***!
                \*******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  LavaMaterial: () => (
                    /* binding */
                    LavaMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _lava_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./lava.fragment */
                  "../../../dev/materials/src/lava/lava.fragment.ts"
                );
                var _lava_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./lava.vertex */
                  "../../../dev/materials/src/lava/lava.vertex.ts"
                );
                var LavaMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(LavaMaterialDefines2, _super);
                    function LavaMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.LIGHT0 = false;
                      _this.LIGHT1 = false;
                      _this.LIGHT2 = false;
                      _this.LIGHT3 = false;
                      _this.SPOTLIGHT0 = false;
                      _this.SPOTLIGHT1 = false;
                      _this.SPOTLIGHT2 = false;
                      _this.SPOTLIGHT3 = false;
                      _this.HEMILIGHT0 = false;
                      _this.HEMILIGHT1 = false;
                      _this.HEMILIGHT2 = false;
                      _this.HEMILIGHT3 = false;
                      _this.DIRLIGHT0 = false;
                      _this.DIRLIGHT1 = false;
                      _this.DIRLIGHT2 = false;
                      _this.DIRLIGHT3 = false;
                      _this.POINTLIGHT0 = false;
                      _this.POINTLIGHT1 = false;
                      _this.POINTLIGHT2 = false;
                      _this.POINTLIGHT3 = false;
                      _this.SHADOW0 = false;
                      _this.SHADOW1 = false;
                      _this.SHADOW2 = false;
                      _this.SHADOW3 = false;
                      _this.SHADOWS = false;
                      _this.SHADOWESM0 = false;
                      _this.SHADOWESM1 = false;
                      _this.SHADOWESM2 = false;
                      _this.SHADOWESM3 = false;
                      _this.SHADOWPOISSON0 = false;
                      _this.SHADOWPOISSON1 = false;
                      _this.SHADOWPOISSON2 = false;
                      _this.SHADOWPOISSON3 = false;
                      _this.SHADOWPCF0 = false;
                      _this.SHADOWPCF1 = false;
                      _this.SHADOWPCF2 = false;
                      _this.SHADOWPCF3 = false;
                      _this.SHADOWPCSS0 = false;
                      _this.SHADOWPCSS1 = false;
                      _this.SHADOWPCSS2 = false;
                      _this.SHADOWPCSS3 = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.UNLIT = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return LavaMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var LavaMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(LavaMaterial2, _super);
                    function LavaMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.speed = 1;
                      _this.movingSpeed = 1;
                      _this.lowFrequencySpeed = 1;
                      _this.fogDensity = 0.15;
                      _this._lastTime = 0;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this._disableLighting = false;
                      _this._unlit = false;
                      _this._maxSimultaneousLights = 4;
                      _this._scaledDiffuse = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3();
                      return _this;
                    }
                    LavaMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    LavaMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    LavaMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    LavaMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new LavaMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        defines._needUVs = false;
                        if (scene.texturesEnabled) {
                          if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (!this._diffuseTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.DIFFUSE = true;
                            }
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = true;
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "lava";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vDiffuseInfos",
                          "mBones",
                          "diffuseMatrix",
                          "logarithmicDepthConstant",
                          "time",
                          "speed",
                          "movingSpeed",
                          "fogColor",
                          "fogDensity",
                          "lowFrequencySpeed"
                        ];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        var samplers = ["diffuseSampler", "noiseTexture"];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    LavaMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      defines.UNLIT = this._unlit;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this.diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          this._activeEffect.setTexture("diffuseSampler", this.diffuseTexture);
                          this._activeEffect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level);
                          this._activeEffect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix());
                        }
                        if (this.noiseTexture) {
                          this._activeEffect.setTexture("noiseTexture", this.noiseTexture);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this._scaledDiffuse, this.alpha * mesh.visibility);
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._lastTime += scene.getEngine().getDeltaTime();
                      this._activeEffect.setFloat("time", this._lastTime * this.speed / 1e3);
                      if (!this.fogColor) {
                        this.fogColor = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
                      }
                      this._activeEffect.setColor3("fogColor", this.fogColor);
                      this._activeEffect.setFloat("fogDensity", this.fogDensity);
                      this._activeEffect.setFloat("lowFrequencySpeed", this.lowFrequencySpeed);
                      this._activeEffect.setFloat("movingSpeed", this.movingSpeed);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    LavaMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0) {
                        results.push(this.diffuseTexture);
                      }
                      if (this.noiseTexture && this.noiseTexture.animations && this.noiseTexture.animations.length > 0) {
                        results.push(this.noiseTexture);
                      }
                      return results;
                    };
                    LavaMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._diffuseTexture) {
                        activeTextures.push(this._diffuseTexture);
                      }
                      return activeTextures;
                    };
                    LavaMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this.diffuseTexture === texture) {
                        return true;
                      }
                      return false;
                    };
                    LavaMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this.diffuseTexture) {
                        this.diffuseTexture.dispose();
                      }
                      if (this.noiseTexture) {
                        this.noiseTexture.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    LavaMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new LavaMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    LavaMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.LavaMaterial";
                      return serializationObject;
                    };
                    LavaMaterial2.prototype.getClassName = function() {
                      return "LavaMaterial";
                    };
                    LavaMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new LavaMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
                    ], LavaMaterial2.prototype, "_diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], LavaMaterial2.prototype, "diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)()
                    ], LavaMaterial2.prototype, "noiseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], LavaMaterial2.prototype, "fogColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], LavaMaterial2.prototype, "speed", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], LavaMaterial2.prototype, "movingSpeed", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], LavaMaterial2.prototype, "lowFrequencySpeed", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], LavaMaterial2.prototype, "fogDensity", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], LavaMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], LavaMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], LavaMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("unlit")
                    ], LavaMaterial2.prototype, "_unlit", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], LavaMaterial2.prototype, "unlit", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], LavaMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], LavaMaterial2.prototype, "maxSimultaneousLights", void 0);
                    return LavaMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.LavaMaterial", LavaMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/mix/index.ts": (
              /*!***********************************************!*\
                !*** ../../../dev/materials/src/mix/index.ts ***!
                \***********************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  MixMaterial: () => (
                    /* reexport safe */
                    _mixMaterial__WEBPACK_IMPORTED_MODULE_0__.MixMaterial
                  )
                  /* harmony export */
                });
                var _mixMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./mixMaterial */
                  "../../../dev/materials/src/mix/mixMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/mix/mix.fragment.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/mix/mix.fragment.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  mixPixelShader: () => (
                    /* binding */
                    mixPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "mixPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform sampler2D mixMap1Sampler;uniform vec2 vTextureInfos;\n#ifdef MIXMAP2\nuniform sampler2D mixMap2Sampler;\n#endif\nuniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform sampler2D diffuse4Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;uniform vec2 diffuse4Infos;\n#ifdef MIXMAP2\nuniform sampler2D diffuse5Sampler;uniform sampler2D diffuse6Sampler;uniform sampler2D diffuse7Sampler;uniform sampler2D diffuse8Sampler;uniform vec2 diffuse5Infos;uniform vec2 diffuse6Infos;uniform vec2 diffuse7Infos;uniform vec2 diffuse8Infos;\n#endif\n#endif\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 finalMixColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;\n#ifdef MIXMAP2\nvec4 mixColor2=vec4(1.,1.,1.,1.);\n#endif\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\nfloat alpha=vDiffuseColor.a;\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef DIFFUSE\nvec4 mixColor=texture2D(mixMap1Sampler,vTextureUV);\n#include<depthPrePass>\nmixColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);vec4 diffuse4Color=texture2D(diffuse4Sampler,vTextureUV*diffuse4Infos);diffuse1Color.rgb*=mixColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,mixColor.g);diffuse3Color.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse3Color.rgb,diffuse4Color.rgb,1.0-mixColor.a);\n#ifdef MIXMAP2\nmixColor=texture2D(mixMap2Sampler,vTextureUV);mixColor.rgb*=vTextureInfos.y;vec4 diffuse5Color=texture2D(diffuse5Sampler,vTextureUV*diffuse5Infos);vec4 diffuse6Color=texture2D(diffuse6Sampler,vTextureUV*diffuse6Infos);vec4 diffuse7Color=texture2D(diffuse7Sampler,vTextureUV*diffuse7Infos);vec4 diffuse8Color=texture2D(diffuse8Sampler,vTextureUV*diffuse8Infos);diffuse5Color.rgb=mix(finalMixColor.rgb,diffuse5Color.rgb,mixColor.r);diffuse6Color.rgb=mix(diffuse5Color.rgb,diffuse6Color.rgb,mixColor.g);diffuse7Color.rgb=mix(diffuse6Color.rgb,diffuse7Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse7Color.rgb,diffuse8Color.rgb,1.0-mixColor.a);\n#endif\n#endif\n#ifdef VERTEXCOLOR\nfinalMixColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor*finalMixColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var mixPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/mix/mix.vertex.ts": (
              /*!****************************************************!*\
                !*** ../../../dev/materials/src/mix/mix.vertex.ts ***!
                \****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  mixVertexShader: () => (
                    /* binding */
                    mixVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/logDepthVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "mixVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vTextureInfos.x==0.)\n{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}\nelse\n{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var mixVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/mix/mixMaterial.ts": (
              /*!*****************************************************!*\
                !*** ../../../dev/materials/src/mix/mixMaterial.ts ***!
                \*****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  MixMaterial: () => (
                    /* binding */
                    MixMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _mix_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./mix.fragment */
                  "../../../dev/materials/src/mix/mix.fragment.ts"
                );
                var _mix_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./mix.vertex */
                  "../../../dev/materials/src/mix/mix.vertex.ts"
                );
                var MixMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MixMaterialDefines2, _super);
                    function MixMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.SPECULARTERM = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.MIXMAP2 = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return MixMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var MixMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MixMaterial2, _super);
                    function MixMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this.specularColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 0);
                      _this.specularPower = 64;
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      return _this;
                    }
                    MixMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    MixMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    MixMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    MixMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new MixMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (scene.texturesEnabled) {
                        if (!this._mixTexture1 || !this._mixTexture1.isReady()) {
                          return false;
                        }
                        defines._needUVs = true;
                        if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          if (!this._diffuseTexture1 || !this._diffuseTexture1.isReady()) {
                            return false;
                          }
                          defines.DIFFUSE = true;
                          if (!this._diffuseTexture2 || !this._diffuseTexture2.isReady()) {
                            return false;
                          }
                          if (!this._diffuseTexture3 || !this._diffuseTexture3.isReady()) {
                            return false;
                          }
                          if (!this._diffuseTexture4 || !this._diffuseTexture4.isReady()) {
                            return false;
                          }
                          if (this._mixTexture2) {
                            if (!this._mixTexture2.isReady()) {
                              return false;
                            }
                            defines.MIXMAP2 = true;
                            if (!this._diffuseTexture5 || !this._diffuseTexture5.isReady()) {
                              return false;
                            }
                            if (!this._diffuseTexture6 || !this._diffuseTexture6.isReady()) {
                              return false;
                            }
                            if (!this._diffuseTexture7 || !this._diffuseTexture7.isReady()) {
                              return false;
                            }
                            if (!this._diffuseTexture8 || !this._diffuseTexture8.isReady()) {
                              return false;
                            }
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, this.maxSimultaneousLights);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "mix";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vSpecularColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vTextureInfos",
                          "mBones",
                          "textureMatrix",
                          "logarithmicDepthConstant",
                          "diffuse1Infos",
                          "diffuse2Infos",
                          "diffuse3Infos",
                          "diffuse4Infos",
                          "diffuse5Infos",
                          "diffuse6Infos",
                          "diffuse7Infos",
                          "diffuse8Infos"
                        ];
                        var samplers = [
                          "mixMap1Sampler",
                          "mixMap2Sampler",
                          "diffuse1Sampler",
                          "diffuse2Sampler",
                          "diffuse3Sampler",
                          "diffuse4Sampler",
                          "diffuse5Sampler",
                          "diffuse6Sampler",
                          "diffuse7Sampler",
                          "diffuse8Sampler"
                        ];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    MixMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this._mixTexture1) {
                          this._activeEffect.setTexture("mixMap1Sampler", this._mixTexture1);
                          this._activeEffect.setFloat2("vTextureInfos", this._mixTexture1.coordinatesIndex, this._mixTexture1.level);
                          this._activeEffect.setMatrix("textureMatrix", this._mixTexture1.getTextureMatrix());
                          if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (this._diffuseTexture1) {
                              this._activeEffect.setTexture("diffuse1Sampler", this._diffuseTexture1);
                              this._activeEffect.setFloat2("diffuse1Infos", this._diffuseTexture1.uScale, this._diffuseTexture1.vScale);
                            }
                            if (this._diffuseTexture2) {
                              this._activeEffect.setTexture("diffuse2Sampler", this._diffuseTexture2);
                              this._activeEffect.setFloat2("diffuse2Infos", this._diffuseTexture2.uScale, this._diffuseTexture2.vScale);
                            }
                            if (this._diffuseTexture3) {
                              this._activeEffect.setTexture("diffuse3Sampler", this._diffuseTexture3);
                              this._activeEffect.setFloat2("diffuse3Infos", this._diffuseTexture3.uScale, this._diffuseTexture3.vScale);
                            }
                            if (this._diffuseTexture4) {
                              this._activeEffect.setTexture("diffuse4Sampler", this._diffuseTexture4);
                              this._activeEffect.setFloat2("diffuse4Infos", this._diffuseTexture4.uScale, this._diffuseTexture4.vScale);
                            }
                          }
                        }
                        if (this._mixTexture2) {
                          this._activeEffect.setTexture("mixMap2Sampler", this._mixTexture2);
                          if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (this._diffuseTexture5) {
                              this._activeEffect.setTexture("diffuse5Sampler", this._diffuseTexture5);
                              this._activeEffect.setFloat2("diffuse5Infos", this._diffuseTexture5.uScale, this._diffuseTexture5.vScale);
                            }
                            if (this._diffuseTexture6) {
                              this._activeEffect.setTexture("diffuse6Sampler", this._diffuseTexture6);
                              this._activeEffect.setFloat2("diffuse6Infos", this._diffuseTexture6.uScale, this._diffuseTexture6.vScale);
                            }
                            if (this._diffuseTexture7) {
                              this._activeEffect.setTexture("diffuse7Sampler", this._diffuseTexture7);
                              this._activeEffect.setFloat2("diffuse7Infos", this._diffuseTexture7.uScale, this._diffuseTexture7.vScale);
                            }
                            if (this._diffuseTexture8) {
                              this._activeEffect.setTexture("diffuse8Sampler", this._diffuseTexture8);
                              this._activeEffect.setFloat2("diffuse8Infos", this._diffuseTexture8.uScale, this._diffuseTexture8.vScale);
                            }
                          }
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (defines.SPECULARTERM) {
                        this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower);
                      }
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    MixMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this._mixTexture1 && this._mixTexture1.animations && this._mixTexture1.animations.length > 0) {
                        results.push(this._mixTexture1);
                      }
                      if (this._mixTexture2 && this._mixTexture2.animations && this._mixTexture2.animations.length > 0) {
                        results.push(this._mixTexture2);
                      }
                      return results;
                    };
                    MixMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._mixTexture1) {
                        activeTextures.push(this._mixTexture1);
                      }
                      if (this._diffuseTexture1) {
                        activeTextures.push(this._diffuseTexture1);
                      }
                      if (this._diffuseTexture2) {
                        activeTextures.push(this._diffuseTexture2);
                      }
                      if (this._diffuseTexture3) {
                        activeTextures.push(this._diffuseTexture3);
                      }
                      if (this._diffuseTexture4) {
                        activeTextures.push(this._diffuseTexture4);
                      }
                      if (this._mixTexture2) {
                        activeTextures.push(this._mixTexture2);
                      }
                      if (this._diffuseTexture5) {
                        activeTextures.push(this._diffuseTexture5);
                      }
                      if (this._diffuseTexture6) {
                        activeTextures.push(this._diffuseTexture6);
                      }
                      if (this._diffuseTexture7) {
                        activeTextures.push(this._diffuseTexture7);
                      }
                      if (this._diffuseTexture8) {
                        activeTextures.push(this._diffuseTexture8);
                      }
                      return activeTextures;
                    };
                    MixMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this._mixTexture1 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture1 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture2 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture3 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture4 === texture) {
                        return true;
                      }
                      if (this._mixTexture2 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture5 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture6 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture7 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture8 === texture) {
                        return true;
                      }
                      return false;
                    };
                    MixMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this._mixTexture1) {
                        this._mixTexture1.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    MixMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new MixMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    MixMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.MixMaterial";
                      return serializationObject;
                    };
                    MixMaterial2.prototype.getClassName = function() {
                      return "MixMaterial";
                    };
                    MixMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new MixMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("mixTexture1")
                    ], MixMaterial2.prototype, "_mixTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "mixTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("mixTexture2")
                    ], MixMaterial2.prototype, "_mixTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "mixTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture1")
                    ], MixMaterial2.prototype, "_diffuseTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture2")
                    ], MixMaterial2.prototype, "_diffuseTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture3")
                    ], MixMaterial2.prototype, "_diffuseTexture3", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture3", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture4")
                    ], MixMaterial2.prototype, "_diffuseTexture4", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture4", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture1")
                    ], MixMaterial2.prototype, "_diffuseTexture5", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture5", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture2")
                    ], MixMaterial2.prototype, "_diffuseTexture6", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture6", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture3")
                    ], MixMaterial2.prototype, "_diffuseTexture7", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture7", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture4")
                    ], MixMaterial2.prototype, "_diffuseTexture8", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], MixMaterial2.prototype, "diffuseTexture8", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], MixMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], MixMaterial2.prototype, "specularColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], MixMaterial2.prototype, "specularPower", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], MixMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], MixMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], MixMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], MixMaterial2.prototype, "maxSimultaneousLights", void 0);
                    return MixMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.MixMaterial", MixMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/normal/index.ts": (
              /*!**************************************************!*\
                !*** ../../../dev/materials/src/normal/index.ts ***!
                \**************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  NormalMaterial: () => (
                    /* reexport safe */
                    _normalMaterial__WEBPACK_IMPORTED_MODULE_0__.NormalMaterial
                  )
                  /* harmony export */
                });
                var _normalMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./normalMaterial */
                  "../../../dev/materials/src/normal/normalMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/normal/normal.fragment.ts": (
              /*!************************************************************!*\
                !*** ../../../dev/materials/src/normal/normal.fragment.ts ***!
                \************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  normalPixelShader: () => (
                    /* binding */
                    normalPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "normalPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef LIGHTING\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#endif\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef NORMAL\nbaseColor=mix(baseColor,vec4(vNormalW,1.0),0.5);\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef LIGHTING\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;\n#else\nvec3 finalDiffuse= baseColor.rgb;\n#endif\nvec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var normalPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/normal/normal.vertex.ts": (
              /*!**********************************************************!*\
                !*** ../../../dev/materials/src/normal/normal.vertex.ts ***!
                \**********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  normalVertexShader: () => (
                    /* binding */
                    normalVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/shadowsVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "normalVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var normalVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/normal/normalMaterial.ts": (
              /*!***********************************************************!*\
                !*** ../../../dev/materials/src/normal/normalMaterial.ts ***!
                \***********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  NormalMaterial: () => (
                    /* binding */
                    NormalMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _normal_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./normal.fragment */
                  "../../../dev/materials/src/normal/normal.fragment.ts"
                );
                var _normal_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./normal.vertex */
                  "../../../dev/materials/src/normal/normal.vertex.ts"
                );
                var NormalMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(NormalMaterialDefines2, _super);
                    function NormalMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.LIGHT0 = false;
                      _this.LIGHT1 = false;
                      _this.LIGHT2 = false;
                      _this.LIGHT3 = false;
                      _this.SPOTLIGHT0 = false;
                      _this.SPOTLIGHT1 = false;
                      _this.SPOTLIGHT2 = false;
                      _this.SPOTLIGHT3 = false;
                      _this.HEMILIGHT0 = false;
                      _this.HEMILIGHT1 = false;
                      _this.HEMILIGHT2 = false;
                      _this.HEMILIGHT3 = false;
                      _this.DIRLIGHT0 = false;
                      _this.DIRLIGHT1 = false;
                      _this.DIRLIGHT2 = false;
                      _this.DIRLIGHT3 = false;
                      _this.POINTLIGHT0 = false;
                      _this.POINTLIGHT1 = false;
                      _this.POINTLIGHT2 = false;
                      _this.POINTLIGHT3 = false;
                      _this.SHADOW0 = false;
                      _this.SHADOW1 = false;
                      _this.SHADOW2 = false;
                      _this.SHADOW3 = false;
                      _this.SHADOWS = false;
                      _this.SHADOWESM0 = false;
                      _this.SHADOWESM1 = false;
                      _this.SHADOWESM2 = false;
                      _this.SHADOWESM3 = false;
                      _this.SHADOWPOISSON0 = false;
                      _this.SHADOWPOISSON1 = false;
                      _this.SHADOWPOISSON2 = false;
                      _this.SHADOWPOISSON3 = false;
                      _this.SHADOWPCF0 = false;
                      _this.SHADOWPCF1 = false;
                      _this.SHADOWPCF2 = false;
                      _this.SHADOWPCF3 = false;
                      _this.SHADOWPCSS0 = false;
                      _this.SHADOWPCSS1 = false;
                      _this.SHADOWPCSS2 = false;
                      _this.SHADOWPCSS3 = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.LIGHTING = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return NormalMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var NormalMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(NormalMaterial2, _super);
                    function NormalMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      return _this;
                    }
                    NormalMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    NormalMaterial2.prototype.needAlphaBlendingForMesh = function(mesh) {
                      return this.needAlphaBlending() || mesh.visibility < 1;
                    };
                    NormalMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    NormalMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    NormalMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new NormalMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        defines._needUVs = false;
                        if (scene.texturesEnabled) {
                          if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (!this._diffuseTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.DIFFUSE = true;
                            }
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = true;
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      defines.LIGHTING = !this._disableLighting;
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "normal";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vDiffuseInfos",
                          "mBones",
                          "diffuseMatrix",
                          "logarithmicDepthConstant"
                        ];
                        var samplers = ["diffuseSampler"];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: 4
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: 4 }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    NormalMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this.diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          this._activeEffect.setTexture("diffuseSampler", this.diffuseTexture);
                          this._activeEffect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level);
                          this._activeEffect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix());
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    NormalMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0) {
                        results.push(this.diffuseTexture);
                      }
                      return results;
                    };
                    NormalMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._diffuseTexture) {
                        activeTextures.push(this._diffuseTexture);
                      }
                      return activeTextures;
                    };
                    NormalMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this.diffuseTexture === texture) {
                        return true;
                      }
                      return false;
                    };
                    NormalMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this.diffuseTexture) {
                        this.diffuseTexture.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    NormalMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new NormalMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    NormalMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.NormalMaterial";
                      return serializationObject;
                    };
                    NormalMaterial2.prototype.getClassName = function() {
                      return "NormalMaterial";
                    };
                    NormalMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new NormalMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
                    ], NormalMaterial2.prototype, "_diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], NormalMaterial2.prototype, "diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], NormalMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], NormalMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], NormalMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], NormalMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], NormalMaterial2.prototype, "maxSimultaneousLights", void 0);
                    return NormalMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.NormalMaterial", NormalMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/shadowOnly/index.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/shadowOnly/index.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  ShadowOnlyMaterial: () => (
                    /* reexport safe */
                    _shadowOnlyMaterial__WEBPACK_IMPORTED_MODULE_0__.ShadowOnlyMaterial
                  )
                  /* harmony export */
                });
                var _shadowOnlyMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./shadowOnlyMaterial */
                  "../../../dev/materials/src/shadowOnly/shadowOnlyMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/shadowOnly/shadowOnly.fragment.ts": (
              /*!********************************************************************!*\
                !*** ../../../dev/materials/src/shadowOnly/shadowOnly.fragment.ts ***!
                \********************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  shadowOnlyPixelShader: () => (
                    /* binding */
                    shadowOnlyPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "shadowOnlyPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform float alpha;uniform vec3 shadowColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#include<lightFragment>[0..1]\nvec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var shadowOnlyPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/shadowOnly/shadowOnly.vertex.ts": (
              /*!******************************************************************!*\
                !*** ../../../dev/materials/src/shadowOnly/shadowOnly.vertex.ts ***!
                \******************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  shadowOnlyVertexShader: () => (
                    /* binding */
                    shadowOnlyVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/shadowsVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "shadowOnlyVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var shadowOnlyVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/shadowOnly/shadowOnlyMaterial.ts": (
              /*!*******************************************************************!*\
                !*** ../../../dev/materials/src/shadowOnly/shadowOnlyMaterial.ts ***!
                \*******************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  ShadowOnlyMaterial: () => (
                    /* binding */
                    ShadowOnlyMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__);
                var _shadowOnly_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./shadowOnly.fragment */
                  "../../../dev/materials/src/shadowOnly/shadowOnly.fragment.ts"
                );
                var _shadowOnly_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./shadowOnly.vertex */
                  "../../../dev/materials/src/shadowOnly/shadowOnly.vertex.ts"
                );
                var ShadowOnlyMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(ShadowOnlyMaterialDefines2, _super);
                    function ShadowOnlyMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.NORMAL = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return ShadowOnlyMaterialDefines2;
                  }(babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var ShadowOnlyMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(ShadowOnlyMaterial2, _super);
                    function ShadowOnlyMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this._needAlphaBlending = true;
                      _this.shadowColor = babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();
                      return _this;
                    }
                    ShadowOnlyMaterial2.prototype.needAlphaBlending = function() {
                      return this._needAlphaBlending;
                    };
                    ShadowOnlyMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    ShadowOnlyMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    Object.defineProperty(ShadowOnlyMaterial2.prototype, "activeLight", {
                      get: function() {
                        return this._activeLight;
                      },
                      set: function(light) {
                        this._activeLight = light;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    ShadowOnlyMaterial2.prototype._getFirstShadowLightForMesh = function(mesh) {
                      for (var _i = 0, _a = mesh.lightSources; _i < _a.length; _i++) {
                        var light = _a[_i];
                        if (light.shadowEnabled) {
                          return light;
                        }
                      }
                      return null;
                    };
                    ShadowOnlyMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var _a;
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new ShadowOnlyMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (this._activeLight) {
                        for (var _i = 0, _b = mesh.lightSources; _i < _b.length; _i++) {
                          var light = _b[_i];
                          if (light.shadowEnabled) {
                            if (this._activeLight === light) {
                              break;
                            }
                            var lightPosition = mesh.lightSources.indexOf(this._activeLight);
                            if (lightPosition !== -1) {
                              mesh.lightSources.splice(lightPosition, 1);
                              mesh.lightSources.splice(0, 0, this._activeLight);
                            }
                            break;
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, 1);
                      var shadowGenerator = (_a = this._getFirstShadowLightForMesh(mesh)) === null || _a === void 0 ? void 0 : _a.getShadowGenerator();
                      this._needAlphaBlending = true;
                      if (shadowGenerator && shadowGenerator.getClassName && shadowGenerator.getClassName() === "CascadedShadowGenerator") {
                        var csg = shadowGenerator;
                        this._needAlphaBlending = !csg.autoCalcDepthBounds;
                      }
                      (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, false, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, 1);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "shadowOnly";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "alpha",
                          "shadowColor",
                          "mBones",
                          "logarithmicDepthConstant"
                        ];
                        var samplers = [];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: 1
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: 1 }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    ShadowOnlyMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        this._activeEffect.setFloat("alpha", this.alpha);
                        this._activeEffect.setColor3("shadowColor", this.shadowColor);
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      if (scene.lightsEnabled) {
                        (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, 1);
                        var light = this._getFirstShadowLightForMesh(mesh);
                        if (light) {
                          light._renderId = -1;
                        }
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE || defines["SHADOWCSM0"]) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    ShadowOnlyMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new ShadowOnlyMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    ShadowOnlyMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.ShadowOnlyMaterial";
                      return serializationObject;
                    };
                    ShadowOnlyMaterial2.prototype.getClassName = function() {
                      return "ShadowOnlyMaterial";
                    };
                    ShadowOnlyMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new ShadowOnlyMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    return ShadowOnlyMaterial2;
                  }(babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators_serialization__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.ShadowOnlyMaterial", ShadowOnlyMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/simple/index.ts": (
              /*!**************************************************!*\
                !*** ../../../dev/materials/src/simple/index.ts ***!
                \**************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  SimpleMaterial: () => (
                    /* reexport safe */
                    _simpleMaterial__WEBPACK_IMPORTED_MODULE_0__.SimpleMaterial
                  )
                  /* harmony export */
                });
                var _simpleMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./simpleMaterial */
                  "../../../dev/materials/src/simple/simpleMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/simple/simple.fragment.ts": (
              /*!************************************************************!*\
                !*** ../../../dev/materials/src/simple/simple.fragment.ts ***!
                \************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  simplePixelShader: () => (
                    /* binding */
                    simplePixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "simplePixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nbaseColor=texture2D(diffuseSampler,vDiffuseUV);\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif \n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var simplePixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/simple/simple.vertex.ts": (
              /*!**********************************************************!*\
                !*** ../../../dev/materials/src/simple/simple.vertex.ts ***!
                \**********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  simpleVertexShader: () => (
                    /* binding */
                    simpleVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/vertexColorMixing */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "simpleVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var simpleVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/simple/simpleMaterial.ts": (
              /*!***********************************************************!*\
                !*** ../../../dev/materials/src/simple/simpleMaterial.ts ***!
                \***********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  SimpleMaterial: () => (
                    /* binding */
                    SimpleMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _simple_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./simple.fragment */
                  "../../../dev/materials/src/simple/simple.fragment.ts"
                );
                var _simple_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./simple.vertex */
                  "../../../dev/materials/src/simple/simple.vertex.ts"
                );
                var SimpleMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(SimpleMaterialDefines2, _super);
                    function SimpleMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return SimpleMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var SimpleMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(SimpleMaterial2, _super);
                    function SimpleMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      return _this;
                    }
                    SimpleMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    SimpleMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    SimpleMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    SimpleMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new SimpleMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        defines._needUVs = false;
                        if (scene.texturesEnabled) {
                          if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (!this._diffuseTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.DIFFUSE = true;
                            }
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, this.maxSimultaneousLights);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "simple";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vDiffuseInfos",
                          "mBones",
                          "diffuseMatrix",
                          "logarithmicDepthConstant"
                        ];
                        var samplers = ["diffuseSampler"];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this._maxSimultaneousLights - 1 }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    SimpleMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this._diffuseTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          this._activeEffect.setTexture("diffuseSampler", this._diffuseTexture);
                          this._activeEffect.setFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level);
                          this._activeEffect.setMatrix("diffuseMatrix", this._diffuseTexture.getTextureMatrix());
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    SimpleMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0) {
                        results.push(this._diffuseTexture);
                      }
                      return results;
                    };
                    SimpleMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._diffuseTexture) {
                        activeTextures.push(this._diffuseTexture);
                      }
                      return activeTextures;
                    };
                    SimpleMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this.diffuseTexture === texture) {
                        return true;
                      }
                      return false;
                    };
                    SimpleMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this._diffuseTexture) {
                        this._diffuseTexture.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    SimpleMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new SimpleMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    SimpleMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.SimpleMaterial";
                      return serializationObject;
                    };
                    SimpleMaterial2.prototype.getClassName = function() {
                      return "SimpleMaterial";
                    };
                    SimpleMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new SimpleMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture")
                    ], SimpleMaterial2.prototype, "_diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], SimpleMaterial2.prototype, "diffuseTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)("diffuse")
                    ], SimpleMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], SimpleMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], SimpleMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], SimpleMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], SimpleMaterial2.prototype, "maxSimultaneousLights", void 0);
                    return SimpleMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.SimpleMaterial", SimpleMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/sky/index.ts": (
              /*!***********************************************!*\
                !*** ../../../dev/materials/src/sky/index.ts ***!
                \***********************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  SkyMaterial: () => (
                    /* reexport safe */
                    _skyMaterial__WEBPACK_IMPORTED_MODULE_0__.SkyMaterial
                  )
                  /* harmony export */
                });
                var _skyMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./skyMaterial */
                  "../../../dev/materials/src/sky/skyMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/sky/sky.fragment.ts": (
              /*!******************************************************!*\
                !*** ../../../dev/materials/src/sky/sky.fragment.ts ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  skyPixelShader: () => (
                    /* binding */
                    skyPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "skyPixelShader";
                var shader = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform float rayleigh;uniform float mieCoefficient;uniform float mieDirectionalG;uniform vec3 sunPosition;\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\nconst float e=2.71828182845904523536028747135266249775724709369995957;const float pi=3.141592653589793238462643383279502884197169;const float n=1.0003;const float N=2.545E25;const float pn=0.035;const vec3 lambda=vec3(680E-9,550E-9,450E-9);const vec3 K=vec3(0.686,0.678,0.666);const float v=4.0;const float rayleighZenithLength=8.4E3;const float mieZenithLength=1.25E3;const float EE=1000.0;const float sunAngularDiameterCos=0.999956676946448443553574619906976478926848692873900859324;const float cutoffAngle=pi/1.95;const float steepness=1.5;vec3 totalRayleigh(vec3 lambda)\n{return (8.0*pow(pi,3.0)*pow(pow(n,2.0)-1.0,2.0)*(6.0+3.0*pn))/(3.0*N*pow(lambda,vec3(4.0))*(6.0-7.0*pn));}\nvec3 simplifiedRayleigh()\n{return 0.0005/vec3(94,40,18);}\nfloat rayleighPhase(float cosTheta)\n{ \nreturn (3.0/(16.0*pi))*(1.0+pow(cosTheta,2.0));}\nvec3 totalMie(vec3 lambda,vec3 K,float T)\n{float c=(0.2*T )*10E-18;return 0.434*c*pi*pow((2.0*pi)/lambda,vec3(v-2.0))*K;}\nfloat hgPhase(float cosTheta,float g)\n{return (1.0/(4.0*pi))*((1.0-pow(g,2.0))/pow(1.0-2.0*g*cosTheta+pow(g,2.0),1.5));}\nfloat sunIntensity(float zenithAngleCos)\n{return EE*max(0.0,1.0-exp((-(cutoffAngle-acos(zenithAngleCos))/steepness)));}\nfloat A=0.15;float B=0.50;float C=0.10;float D=0.20;float EEE=0.02;float F=0.30;float W=1000.0;vec3 Uncharted2Tonemap(vec3 x)\n{return ((x*(A*x+C*B)+D*EEE)/(x*(A*x+B)+D*F))-EEE/F;}\n#if DITHER\n#include<helperFunctions>\n#endif\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n/**\n*--------------------------------------------------------------------------------------------------\n* Sky Color\n*--------------------------------------------------------------------------------------------------\n*/\nfloat sunfade=1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);float rayleighCoefficient=rayleigh-(1.0*(1.0-sunfade));vec3 sunDirection=normalize(sunPosition);float sunE=sunIntensity(dot(sunDirection,up));vec3 betaR=simplifiedRayleigh()*rayleighCoefficient;vec3 betaM=totalMie(lambda,K,turbidity)*mieCoefficient;float zenithAngle=acos(max(0.0,dot(up,normalize(vPositionW-cameraPosition+cameraOffset))));float sR=rayleighZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));float sM=mieZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));vec3 Fex=exp(-(betaR*sR+betaM*sM));float cosTheta=dot(normalize(vPositionW-cameraPosition),sunDirection);float rPhase=rayleighPhase(cosTheta*0.5+0.5);vec3 betaRTheta=betaR*rPhase;float mPhase=hgPhase(cosTheta,mieDirectionalG);vec3 betaMTheta=betaM*mPhase;vec3 Lin=pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*(1.0-Fex),vec3(1.5));Lin*=mix(vec3(1.0),pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up,sunDirection),5.0),0.0,1.0));vec3 direction=normalize(vPositionW-cameraPosition);float theta=acos(direction.y);float phi=atan(direction.z,direction.x);vec2 uv=vec2(phi,theta)/vec2(2.0*pi,pi)+vec2(0.5,0.0);vec3 L0=vec3(0.1)*Fex;float sundisk=smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);L0+=(sunE*19000.0*Fex)*sundisk;vec3 whiteScale=1.0/Uncharted2Tonemap(vec3(W));vec3 texColor=(Lin+L0);texColor*=0.04 ;texColor+=vec3(0.0,0.001,0.0025)*0.3;float g_fMaxLuminance=1.0;float fLumScaled=0.1/luminance; \nfloat fLumCompressed=(fLumScaled*(1.0+(fLumScaled/(g_fMaxLuminance*g_fMaxLuminance))))/(1.0+fLumScaled); \nfloat ExposureBias=fLumCompressed;vec3 curr=Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);vec3 retColor=curr*whiteScale;/**\n*--------------------------------------------------------------------------------------------------\n* Sky Color\n*--------------------------------------------------------------------------------------------------\n*/\nfloat alpha=1.0;\n#ifdef VERTEXCOLOR\nretColor.rgb*=vColor.rgb;\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#if DITHER\nretColor.rgb+=dither(gl_FragCoord.xy,0.5);\n#endif\nvec4 color=clamp(vec4(retColor.rgb,alpha),0.0,1.0);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var skyPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/sky/sky.vertex.ts": (
              /*!****************************************************!*\
                !*** ../../../dev/materials/src/sky/sky.vertex.ts ***!
                \****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  skyVertexShader: () => (
                    /* binding */
                    skyVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/fogVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "skyVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var skyVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/sky/skyMaterial.ts": (
              /*!*****************************************************!*\
                !*** ../../../dev/materials/src/sky/skyMaterial.ts ***!
                \*****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  SkyMaterial: () => (
                    /* binding */
                    SkyMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _sky_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./sky.fragment */
                  "../../../dev/materials/src/sky/sky.fragment.ts"
                );
                var _sky_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./sky.vertex */
                  "../../../dev/materials/src/sky/sky.vertex.ts"
                );
                var SkyMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(SkyMaterialDefines2, _super);
                    function SkyMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.DITHER = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return SkyMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var SkyMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(SkyMaterial2, _super);
                    function SkyMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.luminance = 1;
                      _this.turbidity = 10;
                      _this.rayleigh = 2;
                      _this.mieCoefficient = 5e-3;
                      _this.mieDirectionalG = 0.8;
                      _this.distance = 500;
                      _this.inclination = 0.49;
                      _this.azimuth = 0.25;
                      _this.sunPosition = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 100, 0);
                      _this.useSunPosition = false;
                      _this.cameraOffset = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                      _this.up = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up();
                      _this.dithering = false;
                      _this._cameraPosition = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero();
                      _this._skyOrientation = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
                      return _this;
                    }
                    SkyMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    SkyMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    SkyMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    SkyMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new SkyMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, false, defines);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, false);
                      if (defines.IMAGEPROCESSINGPOSTPROCESS !== scene.imageProcessingConfiguration.applyByPostProcess) {
                        defines.markAsMiscDirty();
                      }
                      if (defines.DITHER !== this.dithering) {
                        defines.markAsMiscDirty();
                      }
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        defines.DITHER = this.dithering;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        var shaderName = "sky";
                        var uniforms = [
                          "world",
                          "viewProjection",
                          "view",
                          "vFogInfos",
                          "vFogColor",
                          "logarithmicDepthConstant",
                          "pointSize",
                          "luminance",
                          "turbidity",
                          "rayleigh",
                          "mieCoefficient",
                          "mieDirectionalG",
                          "sunPosition",
                          "cameraPosition",
                          "cameraOffset",
                          "up"
                        ];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        var join = defines.toString();
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, attribs, uniforms, [], join, fallbacks, this.onCompiled, this.onError), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      return true;
                    };
                    SkyMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      if (this._mustRebind(scene, effect, subMesh)) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      var camera = scene.activeCamera;
                      if (camera) {
                        var cameraWorldMatrix = camera.getWorldMatrix();
                        this._cameraPosition.x = cameraWorldMatrix.m[12];
                        this._cameraPosition.y = cameraWorldMatrix.m[13];
                        this._cameraPosition.z = cameraWorldMatrix.m[14];
                        this._activeEffect.setVector3("cameraPosition", this._cameraPosition);
                      }
                      this._activeEffect.setVector3("cameraOffset", this.cameraOffset);
                      this._activeEffect.setVector3("up", this.up);
                      if (this.luminance > 0) {
                        this._activeEffect.setFloat("luminance", this.luminance);
                      }
                      this._activeEffect.setFloat("turbidity", this.turbidity);
                      this._activeEffect.setFloat("rayleigh", this.rayleigh);
                      this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient);
                      this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG);
                      if (!this.useSunPosition) {
                        var theta = Math.PI * (this.inclination - 0.5);
                        var phi = 2 * Math.PI * (this.azimuth - 0.5);
                        this.sunPosition.x = this.distance * Math.cos(phi) * Math.cos(theta);
                        this.sunPosition.y = this.distance * Math.sin(-theta);
                        this.sunPosition.z = this.distance * Math.sin(phi) * Math.cos(theta);
                        babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Quaternion.FromUnitVectorsToRef(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3.UpReadOnly, this.up, this._skyOrientation);
                        this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition);
                      }
                      this._activeEffect.setVector3("sunPosition", this.sunPosition);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    SkyMaterial2.prototype.getAnimatables = function() {
                      return [];
                    };
                    SkyMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    SkyMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new SkyMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    SkyMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.SkyMaterial";
                      return serializationObject;
                    };
                    SkyMaterial2.prototype.getClassName = function() {
                      return "SkyMaterial";
                    };
                    SkyMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new SkyMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "luminance", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "turbidity", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "rayleigh", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "mieCoefficient", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "mieDirectionalG", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "distance", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "inclination", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "azimuth", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector3)()
                    ], SkyMaterial2.prototype, "sunPosition", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "useSunPosition", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector3)()
                    ], SkyMaterial2.prototype, "cameraOffset", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector3)()
                    ], SkyMaterial2.prototype, "up", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], SkyMaterial2.prototype, "dithering", void 0);
                    return SkyMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.SkyMaterial", SkyMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/terrain/index.ts": (
              /*!***************************************************!*\
                !*** ../../../dev/materials/src/terrain/index.ts ***!
                \***************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  TerrainMaterial: () => (
                    /* reexport safe */
                    _terrainMaterial__WEBPACK_IMPORTED_MODULE_0__.TerrainMaterial
                  )
                  /* harmony export */
                });
                var _terrainMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./terrainMaterial */
                  "../../../dev/materials/src/terrain/terrainMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/terrain/terrain.fragment.ts": (
              /*!**************************************************************!*\
                !*** ../../../dev/materials/src/terrain/terrain.fragment.ts ***!
                \**************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  terrainPixelShader: () => (
                    /* binding */
                    terrainPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "terrainPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform sampler2D textureSampler;uniform vec2 vTextureInfos;uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;\n#endif\n#ifdef BUMP\nuniform sampler2D bump1Sampler;uniform sampler2D bump2Sampler;uniform sampler2D bump3Sampler;\n#endif\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#ifdef BUMP\n#extension GL_OES_standard_derivatives : enable\nmat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)\n{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 binormal=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(tangent,tangent),dot(binormal,binormal)));return mat3(tangent*invmax,binormal*invmax,normal);}\nvec3 perturbNormal(vec3 viewDir,vec3 mixColor)\n{vec3 bump1Color=texture2D(bump1Sampler,vTextureUV*diffuse1Infos).xyz;vec3 bump2Color=texture2D(bump2Sampler,vTextureUV*diffuse2Infos).xyz;vec3 bump3Color=texture2D(bump3Sampler,vTextureUV*diffuse3Infos).xyz;bump1Color.rgb*=mixColor.r;bump2Color.rgb=mix(bump1Color.rgb,bump2Color.rgb,mixColor.g);vec3 map=mix(bump2Color.rgb,bump3Color.rgb,mixColor.b);map=map*255./127.-128./127.;mat3 TBN=cotangent_frame(vNormalW*vTextureInfos.y,-viewDir,vTextureUV);return normalize(TBN*map);}\n#endif\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\nfloat alpha=vDiffuseColor.a;\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef DIFFUSE\nbaseColor=texture2D(textureSampler,vTextureUV);\n#if defined(BUMP) && defined(DIFFUSE)\nnormalW=perturbNormal(viewDirectionW,baseColor.rgb);\n#endif\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);diffuse1Color.rgb*=baseColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,baseColor.g);baseColor.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,baseColor.b);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor*baseColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var terrainPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/terrain/terrain.vertex.ts": (
              /*!************************************************************!*\
                !*** ../../../dev/materials/src/terrain/terrain.vertex.ts ***!
                \************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  terrainVertexShader: () => (
                    /* binding */
                    terrainVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/vertexColorMixing */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "terrainVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vTextureInfos.x==0.)\n{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}\nelse\n{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var terrainVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/terrain/terrainMaterial.ts": (
              /*!*************************************************************!*\
                !*** ../../../dev/materials/src/terrain/terrainMaterial.ts ***!
                \*************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  TerrainMaterial: () => (
                    /* binding */
                    TerrainMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _terrain_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./terrain.fragment */
                  "../../../dev/materials/src/terrain/terrain.fragment.ts"
                );
                var _terrain_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./terrain.vertex */
                  "../../../dev/materials/src/terrain/terrain.vertex.ts"
                );
                var TerrainMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TerrainMaterialDefines2, _super);
                    function TerrainMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSE = false;
                      _this.BUMP = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.SPECULARTERM = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return TerrainMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var TerrainMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TerrainMaterial2, _super);
                    function TerrainMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this.specularColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 0);
                      _this.specularPower = 64;
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      return _this;
                    }
                    TerrainMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    TerrainMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    TerrainMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    TerrainMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new TerrainMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (scene.texturesEnabled) {
                        if (!this.mixTexture || !this.mixTexture.isReady()) {
                          return false;
                        }
                        defines._needUVs = true;
                        if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                          if (!this.diffuseTexture1 || !this.diffuseTexture1.isReady()) {
                            return false;
                          }
                          if (!this.diffuseTexture2 || !this.diffuseTexture2.isReady()) {
                            return false;
                          }
                          if (!this.diffuseTexture3 || !this.diffuseTexture3.isReady()) {
                            return false;
                          }
                          defines.DIFFUSE = true;
                        }
                        if (this.bumpTexture1 && this.bumpTexture2 && this.bumpTexture3 && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.BumpTextureEnabled) {
                          if (!this.bumpTexture1.isReady()) {
                            return false;
                          }
                          if (!this.bumpTexture2.isReady()) {
                            return false;
                          }
                          if (!this.bumpTexture3.isReady()) {
                            return false;
                          }
                          defines._needNormals = true;
                          defines.BUMP = true;
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, this.maxSimultaneousLights);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "terrain";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vSpecularColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vTextureInfos",
                          "mBones",
                          "textureMatrix",
                          "diffuse1Infos",
                          "diffuse2Infos",
                          "diffuse3Infos"
                        ];
                        var samplers = [
                          "textureSampler",
                          "diffuse1Sampler",
                          "diffuse2Sampler",
                          "diffuse3Sampler",
                          "bump1Sampler",
                          "bump2Sampler",
                          "bump3Sampler",
                          "logarithmicDepthConstant"
                        ];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    TerrainMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this.mixTexture) {
                          this._activeEffect.setTexture("textureSampler", this._mixTexture);
                          this._activeEffect.setFloat2("vTextureInfos", this._mixTexture.coordinatesIndex, this._mixTexture.level);
                          this._activeEffect.setMatrix("textureMatrix", this._mixTexture.getTextureMatrix());
                          if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            if (this._diffuseTexture1) {
                              this._activeEffect.setTexture("diffuse1Sampler", this._diffuseTexture1);
                              this._activeEffect.setFloat2("diffuse1Infos", this._diffuseTexture1.uScale, this._diffuseTexture1.vScale);
                            }
                            if (this._diffuseTexture2) {
                              this._activeEffect.setTexture("diffuse2Sampler", this._diffuseTexture2);
                              this._activeEffect.setFloat2("diffuse2Infos", this._diffuseTexture2.uScale, this._diffuseTexture2.vScale);
                            }
                            if (this._diffuseTexture3) {
                              this._activeEffect.setTexture("diffuse3Sampler", this._diffuseTexture3);
                              this._activeEffect.setFloat2("diffuse3Infos", this._diffuseTexture3.uScale, this._diffuseTexture3.vScale);
                            }
                          }
                          if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.BumpTextureEnabled && scene.getEngine().getCaps().standardDerivatives) {
                            if (this._bumpTexture1) {
                              this._activeEffect.setTexture("bump1Sampler", this._bumpTexture1);
                            }
                            if (this._bumpTexture2) {
                              this._activeEffect.setTexture("bump2Sampler", this._bumpTexture2);
                            }
                            if (this._bumpTexture3) {
                              this._activeEffect.setTexture("bump3Sampler", this._bumpTexture3);
                            }
                          }
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (defines.SPECULARTERM) {
                        this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower);
                      }
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    TerrainMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this.mixTexture && this.mixTexture.animations && this.mixTexture.animations.length > 0) {
                        results.push(this.mixTexture);
                      }
                      return results;
                    };
                    TerrainMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._mixTexture) {
                        activeTextures.push(this._mixTexture);
                      }
                      if (this._diffuseTexture1) {
                        activeTextures.push(this._diffuseTexture1);
                      }
                      if (this._diffuseTexture2) {
                        activeTextures.push(this._diffuseTexture2);
                      }
                      if (this._diffuseTexture3) {
                        activeTextures.push(this._diffuseTexture3);
                      }
                      if (this._bumpTexture1) {
                        activeTextures.push(this._bumpTexture1);
                      }
                      if (this._bumpTexture2) {
                        activeTextures.push(this._bumpTexture2);
                      }
                      if (this._bumpTexture3) {
                        activeTextures.push(this._bumpTexture3);
                      }
                      return activeTextures;
                    };
                    TerrainMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this._mixTexture === texture) {
                        return true;
                      }
                      if (this._diffuseTexture1 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture2 === texture) {
                        return true;
                      }
                      if (this._diffuseTexture3 === texture) {
                        return true;
                      }
                      if (this._bumpTexture1 === texture) {
                        return true;
                      }
                      if (this._bumpTexture2 === texture) {
                        return true;
                      }
                      if (this._bumpTexture3 === texture) {
                        return true;
                      }
                      return false;
                    };
                    TerrainMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this.mixTexture) {
                        this.mixTexture.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    TerrainMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new TerrainMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    TerrainMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.TerrainMaterial";
                      return serializationObject;
                    };
                    TerrainMaterial2.prototype.getClassName = function() {
                      return "TerrainMaterial";
                    };
                    TerrainMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new TerrainMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("mixTexture")
                    ], TerrainMaterial2.prototype, "_mixTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TerrainMaterial2.prototype, "mixTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture1")
                    ], TerrainMaterial2.prototype, "_diffuseTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TerrainMaterial2.prototype, "diffuseTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture2")
                    ], TerrainMaterial2.prototype, "_diffuseTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TerrainMaterial2.prototype, "diffuseTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexture3")
                    ], TerrainMaterial2.prototype, "_diffuseTexture3", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TerrainMaterial2.prototype, "diffuseTexture3", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("bumpTexture1")
                    ], TerrainMaterial2.prototype, "_bumpTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TerrainMaterial2.prototype, "bumpTexture1", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("bumpTexture2")
                    ], TerrainMaterial2.prototype, "_bumpTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TerrainMaterial2.prototype, "bumpTexture2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("bumpTexture3")
                    ], TerrainMaterial2.prototype, "_bumpTexture3", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TerrainMaterial2.prototype, "bumpTexture3", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], TerrainMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], TerrainMaterial2.prototype, "specularColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], TerrainMaterial2.prototype, "specularPower", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], TerrainMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], TerrainMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], TerrainMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], TerrainMaterial2.prototype, "maxSimultaneousLights", void 0);
                    return TerrainMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.TerrainMaterial", TerrainMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/triPlanar/index.ts": (
              /*!*****************************************************!*\
                !*** ../../../dev/materials/src/triPlanar/index.ts ***!
                \*****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  TriPlanarMaterial: () => (
                    /* reexport safe */
                    _triPlanarMaterial__WEBPACK_IMPORTED_MODULE_0__.TriPlanarMaterial
                  )
                  /* harmony export */
                });
                var _triPlanarMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./triPlanarMaterial */
                  "../../../dev/materials/src/triPlanar/triPlanarMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/triPlanar/triPlanarMaterial.ts": (
              /*!*****************************************************************!*\
                !*** ../../../dev/materials/src/triPlanar/triPlanarMaterial.ts ***!
                \*****************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  TriPlanarMaterial: () => (
                    /* binding */
                    TriPlanarMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Materials/materialHelper.functions */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _triplanar_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./triplanar.fragment */
                  "../../../dev/materials/src/triPlanar/triplanar.fragment.ts"
                );
                var _triplanar_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./triplanar.vertex */
                  "../../../dev/materials/src/triPlanar/triplanar.vertex.ts"
                );
                var TriPlanarMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TriPlanarMaterialDefines2, _super);
                    function TriPlanarMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.DIFFUSEX = false;
                      _this.DIFFUSEY = false;
                      _this.DIFFUSEZ = false;
                      _this.BUMPX = false;
                      _this.BUMPY = false;
                      _this.BUMPZ = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.SPECULARTERM = false;
                      _this.NORMAL = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.NONUNIFORMSCALING = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.rebuild();
                      return _this;
                    }
                    return TriPlanarMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var TriPlanarMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TriPlanarMaterial2, _super);
                    function TriPlanarMaterial2(name2, scene) {
                      var _this = _super.call(this, name2, scene) || this;
                      _this.tileSize = 1;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this.specularColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.2, 0.2, 0.2);
                      _this.specularPower = 64;
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      return _this;
                    }
                    TriPlanarMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    TriPlanarMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    TriPlanarMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    TriPlanarMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new TriPlanarMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        if (scene.texturesEnabled) {
                          if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.DiffuseTextureEnabled) {
                            var textures = [this.diffuseTextureX, this.diffuseTextureY, this.diffuseTextureZ];
                            var textureDefines = ["DIFFUSEX", "DIFFUSEY", "DIFFUSEZ"];
                            for (var i = 0; i < textures.length; i++) {
                              if (textures[i]) {
                                if (!textures[i].isReady()) {
                                  return false;
                                } else {
                                  defines[textureDefines[i]] = true;
                                }
                              }
                            }
                          }
                          if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.BumpTextureEnabled) {
                            var textures = [this.normalTextureX, this.normalTextureY, this.normalTextureZ];
                            var textureDefines = ["BUMPX", "BUMPY", "BUMPZ"];
                            for (var i = 0; i < textures.length; i++) {
                              if (textures[i]) {
                                if (!textures[i].isReady()) {
                                  return false;
                                } else {
                                  defines[textureDefines[i]] = true;
                                }
                              }
                            }
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, this.maxSimultaneousLights);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "triplanar";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vSpecularColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "mBones",
                          "tileSize"
                        ];
                        var samplers = ["diffuseSamplerX", "diffuseSamplerY", "diffuseSamplerZ", "normalSamplerX", "normalSamplerY", "normalSamplerZ", "logarithmicDepthConstant"];
                        var uniformBuffers = [];
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    TriPlanarMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      this._activeEffect.setFloat("tileSize", this.tileSize);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this.diffuseTextureX) {
                          this._activeEffect.setTexture("diffuseSamplerX", this.diffuseTextureX);
                        }
                        if (this.diffuseTextureY) {
                          this._activeEffect.setTexture("diffuseSamplerY", this.diffuseTextureY);
                        }
                        if (this.diffuseTextureZ) {
                          this._activeEffect.setTexture("diffuseSamplerZ", this.diffuseTextureZ);
                        }
                        if (this.normalTextureX) {
                          this._activeEffect.setTexture("normalSamplerX", this.normalTextureX);
                        }
                        if (this.normalTextureY) {
                          this._activeEffect.setTexture("normalSamplerY", this.normalTextureY);
                        }
                        if (this.normalTextureZ) {
                          this._activeEffect.setTexture("normalSamplerZ", this.normalTextureZ);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (defines.SPECULARTERM) {
                        this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower);
                      }
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    TriPlanarMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this.mixTexture && this.mixTexture.animations && this.mixTexture.animations.length > 0) {
                        results.push(this.mixTexture);
                      }
                      return results;
                    };
                    TriPlanarMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._diffuseTextureX) {
                        activeTextures.push(this._diffuseTextureX);
                      }
                      if (this._diffuseTextureY) {
                        activeTextures.push(this._diffuseTextureY);
                      }
                      if (this._diffuseTextureZ) {
                        activeTextures.push(this._diffuseTextureZ);
                      }
                      if (this._normalTextureX) {
                        activeTextures.push(this._normalTextureX);
                      }
                      if (this._normalTextureY) {
                        activeTextures.push(this._normalTextureY);
                      }
                      if (this._normalTextureZ) {
                        activeTextures.push(this._normalTextureZ);
                      }
                      return activeTextures;
                    };
                    TriPlanarMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this._diffuseTextureX === texture) {
                        return true;
                      }
                      if (this._diffuseTextureY === texture) {
                        return true;
                      }
                      if (this._diffuseTextureZ === texture) {
                        return true;
                      }
                      if (this._normalTextureX === texture) {
                        return true;
                      }
                      if (this._normalTextureY === texture) {
                        return true;
                      }
                      if (this._normalTextureZ === texture) {
                        return true;
                      }
                      return false;
                    };
                    TriPlanarMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this.mixTexture) {
                        this.mixTexture.dispose();
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    TriPlanarMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new TriPlanarMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    TriPlanarMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.TriPlanarMaterial";
                      return serializationObject;
                    };
                    TriPlanarMaterial2.prototype.getClassName = function() {
                      return "TriPlanarMaterial";
                    };
                    TriPlanarMaterial2.Parse = function(source, scene, rootUrl) {
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new TriPlanarMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)()
                    ], TriPlanarMaterial2.prototype, "mixTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTextureX")
                    ], TriPlanarMaterial2.prototype, "_diffuseTextureX", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TriPlanarMaterial2.prototype, "diffuseTextureX", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTexturY")
                    ], TriPlanarMaterial2.prototype, "_diffuseTextureY", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TriPlanarMaterial2.prototype, "diffuseTextureY", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("diffuseTextureZ")
                    ], TriPlanarMaterial2.prototype, "_diffuseTextureZ", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TriPlanarMaterial2.prototype, "diffuseTextureZ", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("normalTextureX")
                    ], TriPlanarMaterial2.prototype, "_normalTextureX", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TriPlanarMaterial2.prototype, "normalTextureX", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("normalTextureY")
                    ], TriPlanarMaterial2.prototype, "_normalTextureY", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TriPlanarMaterial2.prototype, "normalTextureY", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("normalTextureZ")
                    ], TriPlanarMaterial2.prototype, "_normalTextureZ", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], TriPlanarMaterial2.prototype, "normalTextureZ", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], TriPlanarMaterial2.prototype, "tileSize", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], TriPlanarMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], TriPlanarMaterial2.prototype, "specularColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], TriPlanarMaterial2.prototype, "specularPower", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], TriPlanarMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], TriPlanarMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], TriPlanarMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], TriPlanarMaterial2.prototype, "maxSimultaneousLights", void 0);
                    return TriPlanarMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.TriPlanarMaterial", TriPlanarMaterial);
              }
            ),
            /***/
            "../../../dev/materials/src/triPlanar/triplanar.fragment.ts": (
              /*!******************************************************************!*\
                !*** ../../../dev/materials/src/triPlanar/triplanar.fragment.ts ***!
                \******************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  triplanarPixelShader: () => (
                    /* binding */
                    triplanarPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/imageProcessingCompatibility */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "triplanarPixelShader";
                var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSEX\nvarying vec2 vTextureUVX;uniform sampler2D diffuseSamplerX;\n#ifdef BUMPX\nuniform sampler2D normalSamplerX;\n#endif\n#endif\n#ifdef DIFFUSEY\nvarying vec2 vTextureUVY;uniform sampler2D diffuseSamplerY;\n#ifdef BUMPY\nuniform sampler2D normalSamplerY;\n#endif\n#endif\n#ifdef DIFFUSEZ\nvarying vec2 vTextureUVZ;uniform sampler2D diffuseSamplerZ;\n#ifdef BUMPZ\nuniform sampler2D normalSamplerZ;\n#endif\n#endif\n#ifdef NORMAL\nvarying mat3 tangentSpace;\n#endif\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n#include<logDepthDeclaration>\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(0.,0.,0.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef NORMAL\nvec3 normalW=tangentSpace[2];\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\nvec4 baseNormal=vec4(0.0,0.0,0.0,1.0);normalW*=normalW;\n#ifdef DIFFUSEX\nbaseColor+=texture2D(diffuseSamplerX,vTextureUVX)*normalW.x;\n#ifdef BUMPX\nbaseNormal+=texture2D(normalSamplerX,vTextureUVX)*normalW.x;\n#endif\n#endif\n#ifdef DIFFUSEY\nbaseColor+=texture2D(diffuseSamplerY,vTextureUVY)*normalW.y;\n#ifdef BUMPY\nbaseNormal+=texture2D(normalSamplerY,vTextureUVY)*normalW.y;\n#endif\n#endif\n#ifdef DIFFUSEZ\nbaseColor+=texture2D(diffuseSamplerZ,vTextureUVZ)*normalW.z;\n#ifdef BUMPZ\nbaseNormal+=texture2D(normalSamplerZ,vTextureUVZ)*normalW.z;\n#endif\n#endif\n#ifdef NORMAL\nnormalW=normalize((2.0*baseNormal.xyz-1.0)*tangentSpace);\n#endif\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var triplanarPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/triPlanar/triplanar.vertex.ts": (
              /*!****************************************************************!*\
                !*** ../../../dev/materials/src/triPlanar/triplanar.vertex.ts ***!
                \****************************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  triplanarVertexShader: () => (
                    /* binding */
                    triplanarVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/vertexColorMixing */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "triplanarVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<helperFunctions>\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSEX\nvarying vec2 vTextureUVX;\n#endif\n#ifdef DIFFUSEY\nvarying vec2 vTextureUVY;\n#endif\n#ifdef DIFFUSEZ\nvarying vec2 vTextureUVZ;\n#endif\nuniform float tileSize;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying mat3 tangentSpace;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<logDepthDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void)\n{\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef DIFFUSEX\nvTextureUVX=worldPos.zy/tileSize;\n#endif\n#ifdef DIFFUSEY\nvTextureUVY=worldPos.xz/tileSize;\n#endif\n#ifdef DIFFUSEZ\nvTextureUVZ=worldPos.xy/tileSize;\n#endif\n#ifdef NORMAL\nvec3 xtan=vec3(0,0,1);vec3 xbin=vec3(0,1,0);vec3 ytan=vec3(1,0,0);vec3 ybin=vec3(0,0,1);vec3 ztan=vec3(1,0,0);vec3 zbin=vec3(0,1,0);vec3 normalizedNormal=normalize(normal);normalizedNormal*=normalizedNormal;vec3 worldBinormal=normalize(xbin*normalizedNormal.x+ybin*normalizedNormal.y+zbin*normalizedNormal.z);vec3 worldTangent=normalize(xtan*normalizedNormal.x+ytan*normalizedNormal.y+ztan*normalizedNormal.z);mat3 normalWorld=mat3(finalWorld);\n#ifdef NONUNIFORMSCALING\nnormalWorld=transposeMat3(inverseMat3(normalWorld));\n#endif\nworldTangent=normalize((normalWorld*worldTangent).xyz);worldBinormal=normalize((normalWorld*worldBinormal).xyz);vec3 worldNormal=normalize((normalWorld*normalize(normal)).xyz);tangentSpace[0]=worldTangent;tangentSpace[1]=worldBinormal;tangentSpace[2]=worldNormal;\n#endif\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var triplanarVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/water/index.ts": (
              /*!*************************************************!*\
                !*** ../../../dev/materials/src/water/index.ts ***!
                \*************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  WaterMaterial: () => (
                    /* reexport safe */
                    _waterMaterial__WEBPACK_IMPORTED_MODULE_0__.WaterMaterial
                  )
                  /* harmony export */
                });
                var _waterMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! ./waterMaterial */
                  "../../../dev/materials/src/water/waterMaterial.ts"
                );
              }
            ),
            /***/
            "../../../dev/materials/src/water/water.fragment.ts": (
              /*!**********************************************************!*\
                !*** ../../../dev/materials/src/water/water.fragment.ts ***!
                \**********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  waterPixelShader: () => (
                    /* binding */
                    waterPixelShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/fogFragment */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "waterPixelShader";
                var shader = "#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\nprecision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<imageProcessingDeclaration>\n#include<imageProcessingFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef BUMP\nvarying vec2 vNormalUV;\n#ifdef BUMPSUPERIMPOSE\nvarying vec2 vNormalUV2;\n#endif\nuniform sampler2D normalSampler;uniform vec2 vNormalInfos;\n#endif\nuniform sampler2D refractionSampler;uniform sampler2D reflectionSampler;const float LOG2=1.442695;uniform vec3 cameraPosition;uniform vec4 waterColor;uniform float colorBlendFactor;uniform vec4 waterColor2;uniform float colorBlendFactor2;uniform float bumpHeight;uniform float time;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;\n#include<clipPlaneFragmentDeclaration>\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef BUMP\n#ifdef BUMPSUPERIMPOSE\nbaseColor=0.6*texture2D(normalSampler,vNormalUV)+0.4*texture2D(normalSampler,vec2(vNormalUV2.x,vNormalUV2.y));\n#else\nbaseColor=texture2D(normalSampler,vNormalUV);\n#endif\nvec3 bumpColor=baseColor.rgb;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\nbaseColor.rgb*=vNormalInfos.y;\n#else\nvec3 bumpColor=vec3(1.0);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec2 perturbation=bumpHeight*(baseColor.rg-0.5);\n#ifdef BUMPAFFECTSREFLECTION\nvec3 normalW=normalize(vNormalW+vec3(perturbation.x*8.0,0.0,perturbation.y*8.0));if (normalW.y<0.0) {normalW.y=-normalW.y;}\n#else\nvec3 normalW=normalize(vNormalW);\n#endif\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);vec2 perturbation=bumpHeight*(vec2(1.0,1.0)-0.5);\n#endif\n#ifdef FRESNELSEPARATE\n#ifdef REFLECTION\nvec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation*0.5,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);\n#ifdef IS_REFRACTION_LINEAR\nrefractiveColor.rgb=toGammaSpace(refractiveColor.rgb);\n#endif\nvec2 projectedReflectionTexCoords=clamp(vec2(\nvReflectionMapTexCoord.x/vReflectionMapTexCoord.z+perturbation.x*0.3,\nvReflectionMapTexCoord.y/vReflectionMapTexCoord.z+perturbation.y\n),0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);\n#ifdef IS_REFLECTION_LINEAR\nreflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);\n#endif\nvec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=clamp(abs(pow(dot(viewDirectionW,upVector),3.0)),0.05,0.65);float IfresnelTerm=1.0-fresnelTerm;refractiveColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*refractiveColor;reflectiveColor=IfresnelTerm*colorBlendFactor2*waterColor+(1.0-colorBlendFactor2*IfresnelTerm)*reflectiveColor;vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*IfresnelTerm;baseColor=combinedColor;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\nvec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\n#else \n#ifdef REFLECTION\nvec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);\n#ifdef IS_REFRACTION_LINEAR\nrefractiveColor.rgb=toGammaSpace(refractiveColor.rgb);\n#endif\nvec2 projectedReflectionTexCoords=clamp(vReflectionMapTexCoord.xy/vReflectionMapTexCoord.z+perturbation,0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);\n#ifdef IS_REFLECTION_LINEAR\nreflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);\n#endif\nvec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=max(dot(viewDirectionW,upVector),0.0);vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*(1.0-fresnelTerm);baseColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*combinedColor;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\nvec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\n#endif\nvec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<logDepthFragment>\n#include<fogFragment>\n#ifdef IMAGEPROCESSINGPOSTPROCESS\ncolor.rgb=toLinearSpace(color.rgb);\n#elif defined(IMAGEPROCESSING)\ncolor.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);\n#endif\ngl_FragColor=color;\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var waterPixelShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/water/water.vertex.ts": (
              /*!********************************************************!*\
                !*** ../../../dev/materials/src/water/water.vertex.ts ***!
                \********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  waterVertexShader: () => (
                    /* binding */
                    waterVertexShader
                  )
                  /* harmony export */
                });
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Shaders/ShadersInclude/logDepthVertex */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
                var name2 = "waterVertexShader";
                var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef BUMP\nvarying vec2 vNormalUV;\n#ifdef BUMPSUPERIMPOSE\nvarying vec2 vNormalUV2;\n#endif\nuniform mat4 normalMatrix;uniform vec2 vNormalInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#include<logDepthDeclaration>\nuniform mat4 reflectionViewProjection;uniform vec2 windDirection;uniform float waveLength;uniform float time;uniform float windForce;uniform float waveHeight;uniform float waveSpeed;uniform float waveCount;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef BUMP\nif (vNormalInfos.x==0.)\n{vNormalUV=vec2(normalMatrix*vec4((uv*1.0)/waveLength+time*windForce*windDirection,1.0,0.0));\n#ifdef BUMPSUPERIMPOSE\nvNormalUV2=vec2(normalMatrix*vec4((uv*0.721)/waveLength+time*1.2*windForce*windDirection,1.0,0.0));\n#endif\n}\nelse\n{vNormalUV=vec2(normalMatrix*vec4((uv2*1.0)/waveLength+time*windForce*windDirection ,1.0,0.0));\n#ifdef BUMPSUPERIMPOSE\nvNormalUV2=vec2(normalMatrix*vec4((uv2*0.721)/waveLength+time*1.2*windForce*windDirection ,1.0,0.0));\n#endif\n}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\nfloat finalWaveCount=1.0/(waveCount*0.5);\n#ifdef USE_WORLD_COORDINATES\nvec3 p=worldPos.xyz;\n#else\nvec3 p=position;\n#endif\nfloat newY=(sin(((p.x/finalWaveCount)+time*waveSpeed))*waveHeight*windDirection.x*5.0)\n+ (cos(((p.z/finalWaveCount)+ time*waveSpeed))*waveHeight*windDirection.y*5.0);p.y+=abs(newY);\n#ifdef USE_WORLD_COORDINATES\ngl_Position=viewProjection*vec4(p,1.0);\n#else\ngl_Position=viewProjection*finalWorld*vec4(p,1.0);\n#endif\n#ifdef REFLECTION\nvRefractionMapTexCoord.x=0.5*(gl_Position.w+gl_Position.x);vRefractionMapTexCoord.y=0.5*(gl_Position.w+gl_Position.y);vRefractionMapTexCoord.z=gl_Position.w;worldPos=reflectionViewProjection*finalWorld*vec4(position,1.0);vReflectionMapTexCoord.x=0.5*(worldPos.w+worldPos.x);vReflectionMapTexCoord.y=0.5*(worldPos.w+worldPos.y);vReflectionMapTexCoord.z=worldPos.w;\n#endif\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
                babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name2] = shader;
                var waterVertexShader = { name: name2, shader };
              }
            ),
            /***/
            "../../../dev/materials/src/water/waterMaterial.ts": (
              /*!*********************************************************!*\
                !*** ../../../dev/materials/src/water/waterMaterial.ts ***!
                \*********************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  WaterMaterial: () => (
                    /* binding */
                    WaterMaterial
                  )
                  /* harmony export */
                });
                var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__2(
                  /*! tslib */
                  "../../../../node_modules/tslib/tslib.es6.mjs"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! babylonjs/Rendering/boundingBoxRenderer */
                  "babylonjs/Materials/effect"
                );
                var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
                var _water_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(
                  /*! ./water.fragment */
                  "../../../dev/materials/src/water/water.fragment.ts"
                );
                var _water_vertex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(
                  /*! ./water.vertex */
                  "../../../dev/materials/src/water/water.vertex.ts"
                );
                var WaterMaterialDefines = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(WaterMaterialDefines2, _super);
                    function WaterMaterialDefines2() {
                      var _this = _super.call(this) || this;
                      _this.BUMP = false;
                      _this.REFLECTION = false;
                      _this.CLIPPLANE = false;
                      _this.CLIPPLANE2 = false;
                      _this.CLIPPLANE3 = false;
                      _this.CLIPPLANE4 = false;
                      _this.CLIPPLANE5 = false;
                      _this.CLIPPLANE6 = false;
                      _this.ALPHATEST = false;
                      _this.DEPTHPREPASS = false;
                      _this.POINTSIZE = false;
                      _this.FOG = false;
                      _this.NORMAL = false;
                      _this.UV1 = false;
                      _this.UV2 = false;
                      _this.VERTEXCOLOR = false;
                      _this.VERTEXALPHA = false;
                      _this.NUM_BONE_INFLUENCERS = 0;
                      _this.BonesPerMesh = 0;
                      _this.INSTANCES = false;
                      _this.INSTANCESCOLOR = false;
                      _this.SPECULARTERM = false;
                      _this.LOGARITHMICDEPTH = false;
                      _this.USE_REVERSE_DEPTHBUFFER = false;
                      _this.FRESNELSEPARATE = false;
                      _this.BUMPSUPERIMPOSE = false;
                      _this.BUMPAFFECTSREFLECTION = false;
                      _this.USE_WORLD_COORDINATES = false;
                      _this.IMAGEPROCESSING = false;
                      _this.VIGNETTE = false;
                      _this.VIGNETTEBLENDMODEMULTIPLY = false;
                      _this.VIGNETTEBLENDMODEOPAQUE = false;
                      _this.TONEMAPPING = 0;
                      _this.CONTRAST = false;
                      _this.EXPOSURE = false;
                      _this.COLORCURVES = false;
                      _this.COLORGRADING = false;
                      _this.COLORGRADING3D = false;
                      _this.SAMPLER3DGREENDEPTH = false;
                      _this.SAMPLER3DBGRMAP = false;
                      _this.DITHER = false;
                      _this.IMAGEPROCESSINGPOSTPROCESS = false;
                      _this.SKIPFINALCOLORCLAMP = false;
                      _this.rebuild();
                      return _this;
                    }
                    return WaterMaterialDefines2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines)
                );
                var WaterMaterial = (
                  /** @class */
                  function(_super) {
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(WaterMaterial2, _super);
                    function WaterMaterial2(name2, scene, renderTargetSize) {
                      if (renderTargetSize === void 0) {
                        renderTargetSize = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector2(512, 512);
                      }
                      var _this = _super.call(this, name2, scene) || this;
                      _this.renderTargetSize = renderTargetSize;
                      _this.diffuseColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
                      _this.specularColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0, 0, 0);
                      _this.specularPower = 64;
                      _this._disableLighting = false;
                      _this._maxSimultaneousLights = 4;
                      _this.windForce = 6;
                      _this.windDirection = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 1);
                      _this.waveHeight = 0.4;
                      _this.bumpHeight = 0.4;
                      _this._bumpSuperimpose = false;
                      _this._fresnelSeparate = false;
                      _this._bumpAffectsReflection = false;
                      _this.waterColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.1, 0.1, 0.6);
                      _this.colorBlendFactor = 0.2;
                      _this.waterColor2 = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.1, 0.1, 0.6);
                      _this.colorBlendFactor2 = 0.2;
                      _this.waveLength = 0.1;
                      _this.waveSpeed = 1;
                      _this.waveCount = 20;
                      _this.disableClipPlane = false;
                      _this._useWorldCoordinatesForWaveDeformation = false;
                      _this._renderTargets = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SmartArray(16);
                      _this._mesh = null;
                      _this._reflectionTransform = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Matrix.Zero();
                      _this._lastTime = 0;
                      _this._lastDeltaTime = 0;
                      _this._createRenderTargets(_this.getScene(), renderTargetSize);
                      _this.getRenderTargetTextures = function() {
                        _this._renderTargets.reset();
                        _this._renderTargets.push(_this._reflectionRTT);
                        _this._renderTargets.push(_this._refractionRTT);
                        return _this._renderTargets;
                      };
                      _this._imageProcessingConfiguration = _this.getScene().imageProcessingConfiguration;
                      if (_this._imageProcessingConfiguration) {
                        _this._imageProcessingObserver = _this._imageProcessingConfiguration.onUpdateParameters.add(function() {
                          _this._markAllSubMeshesAsImageProcessingDirty();
                        });
                      }
                      return _this;
                    }
                    Object.defineProperty(WaterMaterial2.prototype, "hasRenderTargetTextures", {
                      /**
                       * Gets a boolean indicating that current material needs to register RTT
                       */
                      get: function() {
                        return true;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    Object.defineProperty(WaterMaterial2.prototype, "refractionTexture", {
                      // Get / Set
                      get: function() {
                        return this._refractionRTT;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    Object.defineProperty(WaterMaterial2.prototype, "reflectionTexture", {
                      get: function() {
                        return this._reflectionRTT;
                      },
                      enumerable: false,
                      configurable: true
                    });
                    WaterMaterial2.prototype.addToRenderList = function(node) {
                      if (this._refractionRTT && this._refractionRTT.renderList) {
                        this._refractionRTT.renderList.push(node);
                      }
                      if (this._reflectionRTT && this._reflectionRTT.renderList) {
                        this._reflectionRTT.renderList.push(node);
                      }
                    };
                    WaterMaterial2.prototype.removeFromRenderList = function(node) {
                      if (this._refractionRTT && this._refractionRTT.renderList) {
                        var idx = this._refractionRTT.renderList.indexOf(node);
                        if (idx !== -1) {
                          this._refractionRTT.renderList.splice(idx, 1);
                        }
                      }
                      if (this._reflectionRTT && this._reflectionRTT.renderList) {
                        var idx = this._reflectionRTT.renderList.indexOf(node);
                        if (idx !== -1) {
                          this._reflectionRTT.renderList.splice(idx, 1);
                        }
                      }
                    };
                    WaterMaterial2.prototype.enableRenderTargets = function(enable) {
                      var refreshRate = enable ? 1 : 0;
                      if (this._refractionRTT) {
                        this._refractionRTT.refreshRate = refreshRate;
                      }
                      if (this._reflectionRTT) {
                        this._reflectionRTT.refreshRate = refreshRate;
                      }
                    };
                    WaterMaterial2.prototype.getRenderList = function() {
                      return this._refractionRTT ? this._refractionRTT.renderList : [];
                    };
                    Object.defineProperty(WaterMaterial2.prototype, "renderTargetsEnabled", {
                      get: function() {
                        return !(this._refractionRTT && this._refractionRTT.refreshRate === 0);
                      },
                      enumerable: false,
                      configurable: true
                    });
                    WaterMaterial2.prototype.needAlphaBlending = function() {
                      return this.alpha < 1;
                    };
                    WaterMaterial2.prototype.needAlphaTesting = function() {
                      return false;
                    };
                    WaterMaterial2.prototype.getAlphaTestTexture = function() {
                      return null;
                    };
                    WaterMaterial2.prototype.isReadyForSubMesh = function(mesh, subMesh, useInstances) {
                      var drawWrapper = subMesh._drawWrapper;
                      if (this.isFrozen) {
                        if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                          return true;
                        }
                      }
                      if (!subMesh.materialDefines) {
                        subMesh.materialDefines = new WaterMaterialDefines();
                      }
                      var defines = subMesh.materialDefines;
                      var scene = this.getScene();
                      if (this._isReadyForSubMesh(subMesh)) {
                        return true;
                      }
                      var engine = scene.getEngine();
                      if (defines._areTexturesDirty) {
                        defines._needUVs = false;
                        if (scene.texturesEnabled) {
                          if (this.bumpTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.BumpTextureEnabled) {
                            if (!this.bumpTexture.isReady()) {
                              return false;
                            } else {
                              defines._needUVs = true;
                              defines.BUMP = true;
                            }
                          }
                          if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.ReflectionTextureEnabled) {
                            defines.REFLECTION = true;
                          }
                        }
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForFrameBoundValues)(scene, engine, this, defines, useInstances ? true : false);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForMisc)(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
                      if (defines._areMiscDirty) {
                        defines.FRESNELSEPARATE = this._fresnelSeparate;
                        defines.BUMPSUPERIMPOSE = this._bumpSuperimpose;
                        defines.BUMPAFFECTSREFLECTION = this._bumpAffectsReflection;
                        defines.USE_WORLD_COORDINATES = this._useWorldCoordinatesForWaveDeformation;
                      }
                      defines._needNormals = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForLights)(scene, mesh, defines, true, this._maxSimultaneousLights, this._disableLighting);
                      if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
                        if (!this._imageProcessingConfiguration.isReady()) {
                          return false;
                        }
                        this._imageProcessingConfiguration.prepareDefines(defines);
                        defines.IS_REFLECTION_LINEAR = this.reflectionTexture != null && !this.reflectionTexture.gammaSpace;
                        defines.IS_REFRACTION_LINEAR = this.refractionTexture != null && !this.refractionTexture.gammaSpace;
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareDefinesForAttributes)(mesh, defines, true, true);
                      this._mesh = mesh;
                      if (this._waitingRenderList) {
                        for (var i = 0; i < this._waitingRenderList.length; i++) {
                          this.addToRenderList(scene.getNodeById(this._waitingRenderList[i]));
                        }
                        this._waitingRenderList = null;
                      }
                      if (defines.isDirty) {
                        defines.markAsProcessed();
                        scene.resetCachedMaterial();
                        var fallbacks = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.EffectFallbacks();
                        if (defines.FOG) {
                          fallbacks.addFallback(1, "FOG");
                        }
                        if (defines.LOGARITHMICDEPTH) {
                          fallbacks.addFallback(0, "LOGARITHMICDEPTH");
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.HandleFallbacksForShadows)(defines, fallbacks, this.maxSimultaneousLights);
                        if (defines.NUM_BONE_INFLUENCERS > 0) {
                          fallbacks.addCPUSkinningFallback(0, mesh);
                        }
                        var attribs = [babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind];
                        if (defines.NORMAL) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
                        }
                        if (defines.UV1) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UVKind);
                        }
                        if (defines.UV2) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.UV2Kind);
                        }
                        if (defines.VERTEXCOLOR) {
                          attribs.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.ColorKind);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForBones)(attribs, mesh, defines, fallbacks);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareAttributesForInstances)(attribs, defines);
                        var shaderName = "water";
                        var join = defines.toString();
                        var uniforms = [
                          "world",
                          "view",
                          "viewProjection",
                          "vEyePosition",
                          "vLightsType",
                          "vDiffuseColor",
                          "vSpecularColor",
                          "vFogInfos",
                          "vFogColor",
                          "pointSize",
                          "vNormalInfos",
                          "mBones",
                          "normalMatrix",
                          "logarithmicDepthConstant",
                          // Water
                          "reflectionViewProjection",
                          "windDirection",
                          "waveLength",
                          "time",
                          "windForce",
                          "cameraPosition",
                          "bumpHeight",
                          "waveHeight",
                          "waterColor",
                          "waterColor2",
                          "colorBlendFactor",
                          "colorBlendFactor2",
                          "waveSpeed",
                          "waveCount"
                        ];
                        var samplers = [
                          "normalSampler",
                          // Water
                          "refractionSampler",
                          "reflectionSampler"
                        ];
                        var uniformBuffers = [];
                        if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ImageProcessingConfiguration) {
                          babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ImageProcessingConfiguration.PrepareUniforms(uniforms, defines);
                          babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ImageProcessingConfiguration.PrepareSamplers(samplers, defines);
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.addClipPlaneUniforms)(uniforms);
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PrepareUniformsAndSamplersList)({
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines,
                          maxSimultaneousLights: this.maxSimultaneousLights
                        });
                        subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                          attributes: attribs,
                          uniformsNames: uniforms,
                          uniformBuffersNames: uniformBuffers,
                          samplers,
                          defines: join,
                          fallbacks,
                          onCompiled: this.onCompiled,
                          onError: this.onError,
                          indexParameters: { maxSimultaneousLights: this._maxSimultaneousLights }
                        }, engine), defines, this._materialContext);
                      }
                      if (!subMesh.effect || !subMesh.effect.isReady()) {
                        return false;
                      }
                      defines._renderId = scene.getRenderId();
                      drawWrapper._wasPreviouslyReady = true;
                      drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
                      return true;
                    };
                    WaterMaterial2.prototype.bindForSubMesh = function(world, mesh, subMesh) {
                      var scene = this.getScene();
                      var defines = subMesh.materialDefines;
                      if (!defines) {
                        return;
                      }
                      var effect = subMesh.effect;
                      if (!effect || !this._mesh) {
                        return;
                      }
                      this._activeEffect = effect;
                      this.bindOnlyWorldMatrix(world);
                      this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindBonesParameters)(mesh, this._activeEffect);
                      if (this._mustRebind(scene, effect, subMesh)) {
                        if (this.bumpTexture && babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.BumpTextureEnabled) {
                          this._activeEffect.setTexture("normalSampler", this.bumpTexture);
                          this._activeEffect.setFloat2("vNormalInfos", this.bumpTexture.coordinatesIndex, this.bumpTexture.level);
                          this._activeEffect.setMatrix("normalMatrix", this.bumpTexture.getTextureMatrix());
                        }
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.bindClipPlane)(effect, this, scene);
                        if (this.pointsCloud) {
                          this._activeEffect.setFloat("pointSize", this.pointSize);
                        }
                        if (this._useLogarithmicDepth) {
                          (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, effect, scene);
                        }
                        scene.bindEyePosition(effect);
                      }
                      this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
                      if (defines.SPECULARTERM) {
                        this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower);
                      }
                      if (scene.lightsEnabled && !this.disableLighting) {
                        (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLights)(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
                      }
                      if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_NONE) {
                        this._activeEffect.setMatrix("view", scene.getViewMatrix());
                      }
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindFogParameters)(scene, mesh, this._activeEffect);
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.BindLogDepth)(defines, this._activeEffect, scene);
                      if (babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.MaterialFlags.ReflectionTextureEnabled) {
                        this._activeEffect.setTexture("refractionSampler", this._refractionRTT);
                        this._activeEffect.setTexture("reflectionSampler", this._reflectionRTT);
                      }
                      var wrvp = this._reflectionTransform.multiply(scene.getProjectionMatrix());
                      var deltaTime = scene.getEngine().getDeltaTime();
                      if (deltaTime !== this._lastDeltaTime) {
                        this._lastDeltaTime = deltaTime;
                        this._lastTime += this._lastDeltaTime;
                      }
                      this._activeEffect.setMatrix("reflectionViewProjection", wrvp);
                      this._activeEffect.setVector2("windDirection", this.windDirection);
                      this._activeEffect.setFloat("waveLength", this.waveLength);
                      this._activeEffect.setFloat("time", this._lastTime / 1e5);
                      this._activeEffect.setFloat("windForce", this.windForce);
                      this._activeEffect.setFloat("waveHeight", this.waveHeight);
                      this._activeEffect.setFloat("bumpHeight", this.bumpHeight);
                      this._activeEffect.setColor4("waterColor", this.waterColor, 1);
                      this._activeEffect.setFloat("colorBlendFactor", this.colorBlendFactor);
                      this._activeEffect.setColor4("waterColor2", this.waterColor2, 1);
                      this._activeEffect.setFloat("colorBlendFactor2", this.colorBlendFactor2);
                      this._activeEffect.setFloat("waveSpeed", this.waveSpeed);
                      this._activeEffect.setFloat("waveCount", this.waveCount);
                      if (this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess) {
                        this._imageProcessingConfiguration.bind(this._activeEffect);
                      }
                      this._afterBind(mesh, this._activeEffect, subMesh);
                    };
                    WaterMaterial2.prototype._createRenderTargets = function(scene, renderTargetSize) {
                      var _this = this;
                      this._refractionRTT = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RenderTargetTexture(name + "_refraction", { width: renderTargetSize.x, height: renderTargetSize.y }, scene, false, true);
                      this._refractionRTT.wrapU = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_MIRROR_ADDRESSMODE;
                      this._refractionRTT.wrapV = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_MIRROR_ADDRESSMODE;
                      this._refractionRTT.ignoreCameraViewport = true;
                      var boundingBoxRendererEnabled = false;
                      this._refractionRTT.onBeforeRenderObservable.add(function() {
                        boundingBoxRendererEnabled = scene.getBoundingBoxRenderer().enabled;
                        scene.getBoundingBoxRenderer().enabled = false;
                      });
                      this._refractionRTT.onAfterRenderObservable.add(function() {
                        scene.getBoundingBoxRenderer().enabled = boundingBoxRendererEnabled;
                      });
                      this._reflectionRTT = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RenderTargetTexture(name + "_reflection", { width: renderTargetSize.x, height: renderTargetSize.y }, scene, false, true);
                      this._reflectionRTT.wrapU = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_MIRROR_ADDRESSMODE;
                      this._reflectionRTT.wrapV = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Constants.TEXTURE_MIRROR_ADDRESSMODE;
                      this._reflectionRTT.ignoreCameraViewport = true;
                      var isVisible;
                      var clipPlane = null;
                      var savedViewMatrix;
                      var mirrorMatrix = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Matrix.Zero();
                      this._refractionRTT.onBeforeRender = function() {
                        if (_this._mesh) {
                          isVisible = _this._mesh.isVisible;
                          _this._mesh.isVisible = false;
                        }
                        if (!_this.disableClipPlane) {
                          clipPlane = scene.clipPlane;
                          var positiony = _this._mesh ? _this._mesh.absolutePosition.y : 0;
                          scene.clipPlane = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Plane.FromPositionAndNormal(new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, positiony + 0.05, 0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0));
                        }
                      };
                      this._refractionRTT.onAfterRender = function() {
                        if (_this._mesh) {
                          _this._mesh.isVisible = isVisible;
                        }
                        if (!_this.disableClipPlane) {
                          scene.clipPlane = clipPlane;
                        }
                      };
                      this._reflectionRTT.onBeforeRender = function() {
                        if (_this._mesh) {
                          isVisible = _this._mesh.isVisible;
                          _this._mesh.isVisible = false;
                        }
                        if (!_this.disableClipPlane) {
                          clipPlane = scene.clipPlane;
                          var positiony = _this._mesh ? _this._mesh.absolutePosition.y : 0;
                          scene.clipPlane = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Plane.FromPositionAndNormal(new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, positiony - 0.05, 0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -1, 0));
                          babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Matrix.ReflectionToRef(scene.clipPlane, mirrorMatrix);
                        }
                        savedViewMatrix = scene.getViewMatrix();
                        mirrorMatrix.multiplyToRef(savedViewMatrix, _this._reflectionTransform);
                        scene.setTransformMatrix(_this._reflectionTransform, scene.getProjectionMatrix());
                        scene._mirroredCameraPosition = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector3.TransformCoordinates(scene.activeCamera.position, mirrorMatrix);
                      };
                      this._reflectionRTT.onAfterRender = function() {
                        if (_this._mesh) {
                          _this._mesh.isVisible = isVisible;
                        }
                        scene.clipPlane = clipPlane;
                        scene.setTransformMatrix(savedViewMatrix, scene.getProjectionMatrix());
                        scene._mirroredCameraPosition = null;
                      };
                    };
                    WaterMaterial2.prototype.getAnimatables = function() {
                      var results = [];
                      if (this.bumpTexture && this.bumpTexture.animations && this.bumpTexture.animations.length > 0) {
                        results.push(this.bumpTexture);
                      }
                      if (this._reflectionRTT && this._reflectionRTT.animations && this._reflectionRTT.animations.length > 0) {
                        results.push(this._reflectionRTT);
                      }
                      if (this._refractionRTT && this._refractionRTT.animations && this._refractionRTT.animations.length > 0) {
                        results.push(this._refractionRTT);
                      }
                      return results;
                    };
                    WaterMaterial2.prototype.getActiveTextures = function() {
                      var activeTextures = _super.prototype.getActiveTextures.call(this);
                      if (this._bumpTexture) {
                        activeTextures.push(this._bumpTexture);
                      }
                      return activeTextures;
                    };
                    WaterMaterial2.prototype.hasTexture = function(texture) {
                      if (_super.prototype.hasTexture.call(this, texture)) {
                        return true;
                      }
                      if (this._bumpTexture === texture) {
                        return true;
                      }
                      return false;
                    };
                    WaterMaterial2.prototype.dispose = function(forceDisposeEffect) {
                      if (this.bumpTexture) {
                        this.bumpTexture.dispose();
                      }
                      var index = this.getScene().customRenderTargets.indexOf(this._refractionRTT);
                      if (index != -1) {
                        this.getScene().customRenderTargets.splice(index, 1);
                      }
                      index = -1;
                      index = this.getScene().customRenderTargets.indexOf(this._reflectionRTT);
                      if (index != -1) {
                        this.getScene().customRenderTargets.splice(index, 1);
                      }
                      if (this._reflectionRTT) {
                        this._reflectionRTT.dispose();
                      }
                      if (this._refractionRTT) {
                        this._refractionRTT.dispose();
                      }
                      if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
                        this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
                      }
                      _super.prototype.dispose.call(this, forceDisposeEffect);
                    };
                    WaterMaterial2.prototype.clone = function(name2) {
                      var _this = this;
                      return babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(function() {
                        return new WaterMaterial2(name2, _this.getScene());
                      }, this);
                    };
                    WaterMaterial2.prototype.serialize = function() {
                      var serializationObject = _super.prototype.serialize.call(this);
                      serializationObject.customType = "BABYLON.WaterMaterial";
                      serializationObject.renderList = [];
                      if (this._refractionRTT && this._refractionRTT.renderList) {
                        for (var i = 0; i < this._refractionRTT.renderList.length; i++) {
                          serializationObject.renderList.push(this._refractionRTT.renderList[i].id);
                        }
                      }
                      return serializationObject;
                    };
                    WaterMaterial2.prototype.getClassName = function() {
                      return "WaterMaterial";
                    };
                    WaterMaterial2.Parse = function(source, scene, rootUrl) {
                      var mat = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function() {
                        return new WaterMaterial2(source.name, scene);
                      }, source, scene, rootUrl);
                      mat._waitingRenderList = source.renderList;
                      return mat;
                    };
                    WaterMaterial2.CreateDefaultMesh = function(name2, scene) {
                      var mesh = (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.CreateGround)(name2, { width: 512, height: 512, subdivisions: 32, updatable: false }, scene);
                      return mesh;
                    };
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)("bumpTexture")
                    ], WaterMaterial2.prototype, "_bumpTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
                    ], WaterMaterial2.prototype, "bumpTexture", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], WaterMaterial2.prototype, "diffuseColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], WaterMaterial2.prototype, "specularColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "specularPower", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("disableLighting")
                    ], WaterMaterial2.prototype, "_disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], WaterMaterial2.prototype, "disableLighting", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("maxSimultaneousLights")
                    ], WaterMaterial2.prototype, "_maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
                    ], WaterMaterial2.prototype, "maxSimultaneousLights", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "windForce", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector2)()
                    ], WaterMaterial2.prototype, "windDirection", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "waveHeight", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "bumpHeight", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("bumpSuperimpose")
                    ], WaterMaterial2.prototype, "_bumpSuperimpose", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsMiscDirty")
                    ], WaterMaterial2.prototype, "bumpSuperimpose", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("fresnelSeparate")
                    ], WaterMaterial2.prototype, "_fresnelSeparate", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsMiscDirty")
                    ], WaterMaterial2.prototype, "fresnelSeparate", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("bumpAffectsReflection")
                    ], WaterMaterial2.prototype, "_bumpAffectsReflection", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsMiscDirty")
                    ], WaterMaterial2.prototype, "bumpAffectsReflection", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], WaterMaterial2.prototype, "waterColor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "colorBlendFactor", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
                    ], WaterMaterial2.prototype, "waterColor2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "colorBlendFactor2", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "waveLength", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "waveSpeed", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "waveCount", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
                    ], WaterMaterial2.prototype, "disableClipPlane", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)("useWorldCoordinatesForWaveDeformation")
                    ], WaterMaterial2.prototype, "_useWorldCoordinatesForWaveDeformation", void 0);
                    (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
                      (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)("_markAllSubMeshesAsMiscDirty")
                    ], WaterMaterial2.prototype, "useWorldCoordinatesForWaveDeformation", void 0);
                    return WaterMaterial2;
                  }(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.PushMaterial)
                );
                (0, babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.WaterMaterial", WaterMaterial);
              }
            ),
            /***/
            "../../../lts/materials/src/legacy/legacy.ts": (
              /*!***************************************************!*\
                !*** ../../../lts/materials/src/legacy/legacy.ts ***!
                \***************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  CellMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.CellMaterial
                  ),
                  /* harmony export */
                  CustomMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.CustomMaterial
                  ),
                  /* harmony export */
                  CustomShaderStructure: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.CustomShaderStructure
                  ),
                  /* harmony export */
                  FireMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.FireMaterial
                  ),
                  /* harmony export */
                  FurMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.FurMaterial
                  ),
                  /* harmony export */
                  GradientMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.GradientMaterial
                  ),
                  /* harmony export */
                  GridMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.GridMaterial
                  ),
                  /* harmony export */
                  LavaMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.LavaMaterial
                  ),
                  /* harmony export */
                  MixMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.MixMaterial
                  ),
                  /* harmony export */
                  NormalMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.NormalMaterial
                  ),
                  /* harmony export */
                  PBRCustomMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.PBRCustomMaterial
                  ),
                  /* harmony export */
                  ShaderAlbedoParts: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.ShaderAlbedoParts
                  ),
                  /* harmony export */
                  ShaderAlebdoParts: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.ShaderAlebdoParts
                  ),
                  /* harmony export */
                  ShaderSpecialParts: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.ShaderSpecialParts
                  ),
                  /* harmony export */
                  ShadowOnlyMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.ShadowOnlyMaterial
                  ),
                  /* harmony export */
                  SimpleMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.SimpleMaterial
                  ),
                  /* harmony export */
                  SkyMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.SkyMaterial
                  ),
                  /* harmony export */
                  TerrainMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.TerrainMaterial
                  ),
                  /* harmony export */
                  TriPlanarMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.TriPlanarMaterial
                  ),
                  /* harmony export */
                  WaterMaterial: () => (
                    /* reexport safe */
                    materials_index__WEBPACK_IMPORTED_MODULE_0__.WaterMaterial
                  )
                  /* harmony export */
                });
                var materials_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(
                  /*! materials/index */
                  "../../../dev/materials/src/index.ts"
                );
                var globalObject = typeof __webpack_require__2.g !== "undefined" ? __webpack_require__2.g : typeof window !== "undefined" ? window : void 0;
                if (typeof globalObject !== "undefined") {
                  globalObject.BABYLON = globalObject.BABYLON || {};
                  for (var mat in materials_index__WEBPACK_IMPORTED_MODULE_0__) {
                    globalObject.BABYLON[mat] = materials_index__WEBPACK_IMPORTED_MODULE_0__[mat];
                  }
                }
              }
            ),
            /***/
            "babylonjs/Materials/effect": (
              /*!****************************************************************************************************!*\
                !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
                \****************************************************************************************************/
              /***/
              (module2) => {
                module2.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Materials_effect__;
              }
            ),
            /***/
            "../../../../node_modules/tslib/tslib.es6.mjs": (
              /*!****************************************************!*\
                !*** ../../../../node_modules/tslib/tslib.es6.mjs ***!
                \****************************************************/
              /***/
              (__unused_webpack___webpack_module__, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  __addDisposableResource: () => (
                    /* binding */
                    __addDisposableResource
                  ),
                  /* harmony export */
                  __assign: () => (
                    /* binding */
                    __assign
                  ),
                  /* harmony export */
                  __asyncDelegator: () => (
                    /* binding */
                    __asyncDelegator
                  ),
                  /* harmony export */
                  __asyncGenerator: () => (
                    /* binding */
                    __asyncGenerator
                  ),
                  /* harmony export */
                  __asyncValues: () => (
                    /* binding */
                    __asyncValues
                  ),
                  /* harmony export */
                  __await: () => (
                    /* binding */
                    __await
                  ),
                  /* harmony export */
                  __awaiter: () => (
                    /* binding */
                    __awaiter
                  ),
                  /* harmony export */
                  __classPrivateFieldGet: () => (
                    /* binding */
                    __classPrivateFieldGet
                  ),
                  /* harmony export */
                  __classPrivateFieldIn: () => (
                    /* binding */
                    __classPrivateFieldIn
                  ),
                  /* harmony export */
                  __classPrivateFieldSet: () => (
                    /* binding */
                    __classPrivateFieldSet
                  ),
                  /* harmony export */
                  __createBinding: () => (
                    /* binding */
                    __createBinding
                  ),
                  /* harmony export */
                  __decorate: () => (
                    /* binding */
                    __decorate
                  ),
                  /* harmony export */
                  __disposeResources: () => (
                    /* binding */
                    __disposeResources
                  ),
                  /* harmony export */
                  __esDecorate: () => (
                    /* binding */
                    __esDecorate
                  ),
                  /* harmony export */
                  __exportStar: () => (
                    /* binding */
                    __exportStar
                  ),
                  /* harmony export */
                  __extends: () => (
                    /* binding */
                    __extends
                  ),
                  /* harmony export */
                  __generator: () => (
                    /* binding */
                    __generator
                  ),
                  /* harmony export */
                  __importDefault: () => (
                    /* binding */
                    __importDefault
                  ),
                  /* harmony export */
                  __importStar: () => (
                    /* binding */
                    __importStar
                  ),
                  /* harmony export */
                  __makeTemplateObject: () => (
                    /* binding */
                    __makeTemplateObject
                  ),
                  /* harmony export */
                  __metadata: () => (
                    /* binding */
                    __metadata
                  ),
                  /* harmony export */
                  __param: () => (
                    /* binding */
                    __param
                  ),
                  /* harmony export */
                  __propKey: () => (
                    /* binding */
                    __propKey
                  ),
                  /* harmony export */
                  __read: () => (
                    /* binding */
                    __read
                  ),
                  /* harmony export */
                  __rest: () => (
                    /* binding */
                    __rest
                  ),
                  /* harmony export */
                  __runInitializers: () => (
                    /* binding */
                    __runInitializers
                  ),
                  /* harmony export */
                  __setFunctionName: () => (
                    /* binding */
                    __setFunctionName
                  ),
                  /* harmony export */
                  __spread: () => (
                    /* binding */
                    __spread
                  ),
                  /* harmony export */
                  __spreadArray: () => (
                    /* binding */
                    __spreadArray
                  ),
                  /* harmony export */
                  __spreadArrays: () => (
                    /* binding */
                    __spreadArrays
                  ),
                  /* harmony export */
                  __values: () => (
                    /* binding */
                    __values
                  ),
                  /* harmony export */
                  "default": () => __WEBPACK_DEFAULT_EXPORT__
                  /* harmony export */
                });
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                function __extends(d, b) {
                  if (typeof b !== "function" && b !== null)
                    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                }
                var __assign = function() {
                  __assign = Object.assign || function __assign2(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                function __rest(s, e) {
                  var t = {};
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                }
                function __decorate(decorators, target, key, desc) {
                  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                  return c > 3 && r && Object.defineProperty(target, key, r), r;
                }
                function __param(paramIndex, decorator) {
                  return function(target, key) {
                    decorator(target, key, paramIndex);
                  };
                }
                function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
                  function accept(f) {
                    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
                    return f;
                  }
                  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
                  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
                  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
                  var _, done = false;
                  for (var i = decorators.length - 1; i >= 0; i--) {
                    var context = {};
                    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
                    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
                    context.addInitializer = function(f) {
                      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
                      extraInitializers.push(accept(f || null));
                    };
                    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
                    if (kind === "accessor") {
                      if (result === void 0) continue;
                      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                      if (_ = accept(result.get)) descriptor.get = _;
                      if (_ = accept(result.set)) descriptor.set = _;
                      if (_ = accept(result.init)) initializers.unshift(_);
                    } else if (_ = accept(result)) {
                      if (kind === "field") initializers.unshift(_);
                      else descriptor[key] = _;
                    }
                  }
                  if (target) Object.defineProperty(target, contextIn.name, descriptor);
                  done = true;
                }
                ;
                function __runInitializers(thisArg, initializers, value) {
                  var useValue = arguments.length > 2;
                  for (var i = 0; i < initializers.length; i++) {
                    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
                  }
                  return useValue ? value : void 0;
                }
                ;
                function __propKey(x) {
                  return typeof x === "symbol" ? x : "".concat(x);
                }
                ;
                function __setFunctionName(f, name2, prefix) {
                  if (typeof name2 === "symbol") name2 = name2.description ? "[".concat(name2.description, "]") : "";
                  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name2) : name2 });
                }
                ;
                function __metadata(metadataKey, metadataValue) {
                  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
                }
                function __awaiter(thisArg, _arguments, P, generator) {
                  function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                      resolve(value);
                    });
                  }
                  return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                      try {
                        step(generator.next(value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function rejected(value) {
                      try {
                        step(generator["throw"](value));
                      } catch (e) {
                        reject(e);
                      }
                    }
                    function step(result) {
                      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                  });
                }
                function __generator(thisArg, body) {
                  var _ = { label: 0, sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                  }, trys: [], ops: [] }, f, y, t, g;
                  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                  }), g;
                  function verb(n) {
                    return function(v) {
                      return step([n, v]);
                    };
                  }
                  function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (g && (g = 0, op[0] && (_ = 0)), _) try {
                      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                      if (y = 0, t) op = [op[0] & 2, t.value];
                      switch (op[0]) {
                        case 0:
                        case 1:
                          t = op;
                          break;
                        case 4:
                          _.label++;
                          return { value: op[1], done: false };
                        case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                        case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                        default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                          }
                          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                          }
                          if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                          }
                          if (t[2]) _.ops.pop();
                          _.trys.pop();
                          continue;
                      }
                      op = body.call(thisArg, _);
                    } catch (e) {
                      op = [6, e];
                      y = 0;
                    } finally {
                      f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                  }
                }
                var __createBinding = Object.create ? function(o, m, k, k2) {
                  if (k2 === void 0) k2 = k;
                  var desc = Object.getOwnPropertyDescriptor(m, k);
                  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                    desc = { enumerable: true, get: function() {
                      return m[k];
                    } };
                  }
                  Object.defineProperty(o, k2, desc);
                } : function(o, m, k, k2) {
                  if (k2 === void 0) k2 = k;
                  o[k2] = m[k];
                };
                function __exportStar(m, o) {
                  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
                }
                function __values(o) {
                  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
                  if (m) return m.call(o);
                  if (o && typeof o.length === "number") return {
                    next: function() {
                      if (o && i >= o.length) o = void 0;
                      return { value: o && o[i++], done: !o };
                    }
                  };
                  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
                }
                function __read(o, n) {
                  var m = typeof Symbol === "function" && o[Symbol.iterator];
                  if (!m) return o;
                  var i = m.call(o), r, ar = [], e;
                  try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
                  } catch (error) {
                    e = { error };
                  } finally {
                    try {
                      if (r && !r.done && (m = i["return"])) m.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  return ar;
                }
                function __spread() {
                  for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                  return ar;
                }
                function __spreadArrays() {
                  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                  for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                      r[k] = a[j];
                  return r;
                }
                function __spreadArray(to, from, pack) {
                  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                      ar[i] = from[i];
                    }
                  }
                  return to.concat(ar || Array.prototype.slice.call(from));
                }
                function __await(v) {
                  return this instanceof __await ? (this.v = v, this) : new __await(v);
                }
                function __asyncGenerator(thisArg, _arguments, generator) {
                  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                  var g = generator.apply(thisArg, _arguments || []), i, q = [];
                  return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
                    return this;
                  }, i;
                  function awaitReturn(f) {
                    return function(v) {
                      return Promise.resolve(v).then(f, reject);
                    };
                  }
                  function verb(n, f) {
                    if (g[n]) {
                      i[n] = function(v) {
                        return new Promise(function(a, b) {
                          q.push([n, v, a, b]) > 1 || resume(n, v);
                        });
                      };
                      if (f) i[n] = f(i[n]);
                    }
                  }
                  function resume(n, v) {
                    try {
                      step(g[n](v));
                    } catch (e) {
                      settle(q[0][3], e);
                    }
                  }
                  function step(r) {
                    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                  }
                  function fulfill(value) {
                    resume("next", value);
                  }
                  function reject(value) {
                    resume("throw", value);
                  }
                  function settle(f, v) {
                    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
                  }
                }
                function __asyncDelegator(o) {
                  var i, p;
                  return i = {}, verb("next"), verb("throw", function(e) {
                    throw e;
                  }), verb("return"), i[Symbol.iterator] = function() {
                    return this;
                  }, i;
                  function verb(n, f) {
                    i[n] = o[n] ? function(v) {
                      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
                    } : f;
                  }
                }
                function __asyncValues(o) {
                  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                  var m = o[Symbol.asyncIterator], i;
                  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                    return this;
                  }, i);
                  function verb(n) {
                    i[n] = o[n] && function(v) {
                      return new Promise(function(resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                      });
                    };
                  }
                  function settle(resolve, reject, d, v) {
                    Promise.resolve(v).then(function(v2) {
                      resolve({ value: v2, done: d });
                    }, reject);
                  }
                }
                function __makeTemplateObject(cooked, raw) {
                  if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                  } else {
                    cooked.raw = raw;
                  }
                  return cooked;
                }
                ;
                var __setModuleDefault = Object.create ? function(o, v) {
                  Object.defineProperty(o, "default", { enumerable: true, value: v });
                } : function(o, v) {
                  o["default"] = v;
                };
                function __importStar(mod) {
                  if (mod && mod.__esModule) return mod;
                  var result = {};
                  if (mod != null) {
                    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                  }
                  __setModuleDefault(result, mod);
                  return result;
                }
                function __importDefault(mod) {
                  return mod && mod.__esModule ? mod : { default: mod };
                }
                function __classPrivateFieldGet(receiver, state, kind, f) {
                  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
                  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
                }
                function __classPrivateFieldSet(receiver, state, value, kind, f) {
                  if (kind === "m") throw new TypeError("Private method is not writable");
                  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
                  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }
                function __classPrivateFieldIn(state, receiver) {
                  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
                  return typeof state === "function" ? receiver === state : state.has(receiver);
                }
                function __addDisposableResource(env, value, async) {
                  if (value !== null && value !== void 0) {
                    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
                    var dispose, inner;
                    if (async) {
                      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                      dispose = value[Symbol.asyncDispose];
                    }
                    if (dispose === void 0) {
                      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                      dispose = value[Symbol.dispose];
                      if (async) inner = dispose;
                    }
                    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
                    if (inner) dispose = function() {
                      try {
                        inner.call(this);
                      } catch (e) {
                        return Promise.reject(e);
                      }
                    };
                    env.stack.push({ value, dispose, async });
                  } else if (async) {
                    env.stack.push({ async: true });
                  }
                  return value;
                }
                var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
                  var e = new Error(message);
                  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
                };
                function __disposeResources(env) {
                  function fail(e) {
                    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
                    env.hasError = true;
                  }
                  function next() {
                    while (env.stack.length) {
                      var rec = env.stack.pop();
                      try {
                        var result = rec.dispose && rec.dispose.call(rec.value);
                        if (rec.async) return Promise.resolve(result).then(next, function(e) {
                          fail(e);
                          return next();
                        });
                      } catch (e) {
                        fail(e);
                      }
                    }
                    if (env.hasError) throw env.error;
                  }
                  return next();
                }
                const __WEBPACK_DEFAULT_EXPORT__ = {
                  __extends,
                  __assign,
                  __rest,
                  __decorate,
                  __param,
                  __metadata,
                  __awaiter,
                  __generator,
                  __createBinding,
                  __exportStar,
                  __values,
                  __read,
                  __spread,
                  __spreadArrays,
                  __spreadArray,
                  __await,
                  __asyncGenerator,
                  __asyncDelegator,
                  __asyncValues,
                  __makeTemplateObject,
                  __importStar,
                  __importDefault,
                  __classPrivateFieldGet,
                  __classPrivateFieldSet,
                  __classPrivateFieldIn,
                  __addDisposableResource,
                  __disposeResources
                };
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.n = (module2) => {
              var getter = module2 && module2.__esModule ? (
                /******/
                () => module2["default"]
              ) : (
                /******/
                () => module2
              );
              __webpack_require__.d(getter, { a: getter });
              return getter;
            };
          })();
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.g = function() {
              if (typeof globalThis === "object") return globalThis;
              try {
                return this || new Function("return this")();
              } catch (e) {
                if (typeof window === "object") return window;
              }
            }();
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              /* harmony export */
              "default": () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
              materials: () => (
                /* reexport module object */
                _lts_materials_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__
              )
              /* harmony export */
            });
            var _lts_materials_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! @lts/materials/legacy/legacy */
              "../../../lts/materials/src/legacy/legacy.ts"
            );
            const __WEBPACK_DEFAULT_EXPORT__ = _lts_materials_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__;
          })();
          __webpack_exports__ = __webpack_exports__["default"];
          return __webpack_exports__;
        })()
      );
    });
  }
});
export default require_babylonjs_materials();
/*! Bundled license information:

babylonjs-materials/babylonjs.materials.js:
  (*!**********************!*\
    !*** ./src/index.ts ***!
    \**********************)
*/
//# sourceMappingURL=babylonjs-materials.js.map
