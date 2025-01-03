import{r as ce,c as $}from"./babylon.yvSPI_6S.js";var fe={exports:{}};(function(le,ve){(function(q,Y){le.exports=Y(ce())})(typeof self<"u"?self:typeof $<"u"?$:$,k=>(()=>{var q={"../../../dev/materials/src/cell/cell.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{cellPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="cellPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
vec3 computeCustomDiffuseLighting(lightingInfo info,vec3 diffuseBase,float shadow)
{diffuseBase=info.diffuse*shadow;
#ifdef CELLBASIC
float level=1.0;if (info.ndl<0.5)
level=0.5;diffuseBase.rgb*vec3(level,level,level);
#else
float ToonThresholds[4];ToonThresholds[0]=0.95;ToonThresholds[1]=0.5;ToonThresholds[2]=0.2;ToonThresholds[3]=0.03;float ToonBrightnessLevels[5];ToonBrightnessLevels[0]=1.0;ToonBrightnessLevels[1]=0.8;ToonBrightnessLevels[2]=0.6;ToonBrightnessLevels[3]=0.35;ToonBrightnessLevels[4]=0.2;if (info.ndl>ToonThresholds[0])
{diffuseBase.rgb*=ToonBrightnessLevels[0];}
else if (info.ndl>ToonThresholds[1])
{diffuseBase.rgb*=ToonBrightnessLevels[1];}
else if (info.ndl>ToonThresholds[2])
{diffuseBase.rgb*=ToonBrightnessLevels[2];}
else if (info.ndl>ToonThresholds[3])
{diffuseBase.rgb*=ToonBrightnessLevels[3];}
else
{diffuseBase.rgb*=ToonBrightnessLevels[4];}
#endif
return max(diffuseBase,vec3(0.2));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
lightingInfo info;vec3 diffuseBase=vec3(0.,0.,0.);float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif 
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/cell/cell.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{cellVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="cellVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/cell/cellMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{CellMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/cell/cell.fragment.ts"),f("../../../dev/materials/src/cell/cell.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.POINTSIZE=!1,e.FOG=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.NDOTL=!0,e.CUSTOMUSERLIGHTING=!0,e.CELLBASIC=!0,e.DEPTHPREPASS=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.diffuseColor=new i.Color3(1,1,1),o._computeHighLevel=!1,o._disableLighting=!1,o._maxSimultaneousLights=4,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,l.texturesEnabled&&this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())n._needUVs=!0,n.DIFFUSE=!0;else return!1;if(n.CELLBASIC=!this.computeHighLevel,(0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="cell",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant"],A=["diffuseSampler"],L=[];(0,i.addClipPlaneUniforms)(y),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights-1}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),(0,i.bindClipPlane)(this._activeEffect,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this._maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),e},t.prototype.hasTexture=function(e){return c.prototype.hasTexture.call(this,e)?!0:this._diffuseTexture===e},t.prototype.dispose=function(e){this._diffuseTexture&&this._diffuseTexture.dispose(),c.prototype.dispose.call(this,e)},t.prototype.getClassName=function(){return"CellMaterial"},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.CellMaterial",e},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)("diffuse")],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serialize)("computeHighLevel")],t.prototype,"_computeHighLevel",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"computeHighLevel",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.CellMaterial",g)},"../../../dev/materials/src/cell/index.ts":(P,d,f)=>{f.r(d),f.d(d,{CellMaterial:()=>s.CellMaterial});var s=f("../../../dev/materials/src/cell/cellMaterial.ts")},"../../../dev/materials/src/custom/customMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{CustomMaterial:()=>c,CustomShaderStructure:()=>h,ShaderSpecialParts:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators"),h=function(){function t(){}return t}(),g=function(){function t(){}return t}(),c=function(t){(0,s.__extends)(e,t);function e(r,o){var a=t.call(this,r,o,!0)||this;return a.CustomParts=new g,a.customShaderNameResolve=a.Builder,a.FragmentShader=i.Effect.ShadersStore.defaultPixelShader,a.VertexShader=i.Effect.ShadersStore.defaultVertexShader,e.ShaderIndexer++,a._createdShaderName="custom_"+e.ShaderIndexer,a}return e.prototype.AttachAfterBind=function(r,o){if(this._newUniformInstances)for(var a in this._newUniformInstances){var n=a.toString().split("-");n[0]=="vec2"?o.setVector2(n[1],this._newUniformInstances[a]):n[0]=="vec3"?this._newUniformInstances[a]instanceof i.Color3?o.setColor3(n[1],this._newUniformInstances[a]):o.setVector3(n[1],this._newUniformInstances[a]):n[0]=="vec4"?(this._newUniformInstances[a]instanceof i.Color4?o.setDirectColor4(n[1],this._newUniformInstances[a]):o.setVector4(n[1],this._newUniformInstances[a]),o.setVector4(n[1],this._newUniformInstances[a])):n[0]=="mat4"?o.setMatrix(n[1],this._newUniformInstances[a]):n[0]=="float"&&o.setFloat(n[1],this._newUniformInstances[a])}if(this._newSamplerInstances)for(var a in this._newSamplerInstances){var n=a.toString().split("-");n[0]=="sampler2D"&&this._newSamplerInstances[a].isReady&&this._newSamplerInstances[a].isReady()&&o.setTexture(n[1],this._newSamplerInstances[a])}},e.prototype.ReviewUniform=function(r,o){if(r=="uniform"&&this._newUniforms)for(var a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")==-1&&o.push(this._newUniforms[a].replace(/\[\d*\]/g,""));if(r=="sampler"&&this._newUniforms)for(var a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")!=-1&&o.push(this._newUniforms[a].replace(/\[\d*\]/g,""));return o},e.prototype.Builder=function(r,o,a,n,l,S){S&&this._customAttributes&&this._customAttributes.length>0&&S.push.apply(S,this._customAttributes),this.ReviewUniform("uniform",o),this.ReviewUniform("sampler",n);var T=this._createdShaderName;return i.Effect.ShadersStore[T+"VertexShader"]&&i.Effect.ShadersStore[T+"PixelShader"]||(i.Effect.ShadersStore[T+"VertexShader"]=this._injectCustomCode(this.VertexShader,"vertex"),i.Effect.ShadersStore[T+"PixelShader"]=this._injectCustomCode(this.FragmentShader,"fragment")),T},e.prototype._injectCustomCode=function(r,o){var a=this._getCustomCode(o);for(var n in a){var l=a[n];if(l&&l.length>0){var S="#define "+n;r=r.replace(S,`
`+l+`
`+S)}}return r},e.prototype._getCustomCode=function(r){var o,a;return r==="vertex"?{CUSTOM_VERTEX_BEGIN:this.CustomParts.Vertex_Begin,CUSTOM_VERTEX_DEFINITIONS:(((o=this._customUniform)===null||o===void 0?void 0:o.join(`
`))||"")+(this.CustomParts.Vertex_Definitions||""),CUSTOM_VERTEX_MAIN_BEGIN:this.CustomParts.Vertex_MainBegin,CUSTOM_VERTEX_UPDATE_POSITION:this.CustomParts.Vertex_Before_PositionUpdated,CUSTOM_VERTEX_UPDATE_NORMAL:this.CustomParts.Vertex_Before_NormalUpdated,CUSTOM_VERTEX_MAIN_END:this.CustomParts.Vertex_MainEnd,CUSTOM_VERTEX_UPDATE_WORLDPOS:this.CustomParts.Vertex_After_WorldPosComputed}:{CUSTOM_FRAGMENT_BEGIN:this.CustomParts.Fragment_Begin,CUSTOM_FRAGMENT_DEFINITIONS:(((a=this._customUniform)===null||a===void 0?void 0:a.join(`
`))||"")+(this.CustomParts.Fragment_Definitions||""),CUSTOM_FRAGMENT_MAIN_BEGIN:this.CustomParts.Fragment_MainBegin,CUSTOM_FRAGMENT_UPDATE_DIFFUSE:this.CustomParts.Fragment_Custom_Diffuse,CUSTOM_FRAGMENT_UPDATE_ALPHA:this.CustomParts.Fragment_Custom_Alpha,CUSTOM_FRAGMENT_BEFORE_LIGHTS:this.CustomParts.Fragment_Before_Lights,CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:this.CustomParts.Fragment_Before_FragColor,CUSTOM_FRAGMENT_MAIN_END:this.CustomParts.Fragment_MainEnd,CUSTOM_FRAGMENT_BEFORE_FOG:this.CustomParts.Fragment_Before_Fog}},e.prototype._afterBind=function(r,o,a){if(o===void 0&&(o=null),!!o){this.AttachAfterBind(r,o);try{t.prototype._afterBind.call(this,r,o,a)}catch{}}},e.prototype.AddUniform=function(r,o,a){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),a&&(o.indexOf("sampler")!=-1?this._newSamplerInstances[o+"-"+r]=a:this._newUniformInstances[o+"-"+r]=a),this._customUniform.push("uniform "+o+" "+r+";"),this._newUniforms.push(r),this},e.prototype.AddAttribute=function(r){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(r),this},e.prototype.Fragment_Begin=function(r){return this.CustomParts.Fragment_Begin=r,this},e.prototype.Fragment_Definitions=function(r){return this.CustomParts.Fragment_Definitions=r,this},e.prototype.Fragment_MainBegin=function(r){return this.CustomParts.Fragment_MainBegin=r,this},e.prototype.Fragment_MainEnd=function(r){return this.CustomParts.Fragment_MainEnd=r,this},e.prototype.Fragment_Custom_Diffuse=function(r){return this.CustomParts.Fragment_Custom_Diffuse=r.replace("result","diffuseColor"),this},e.prototype.Fragment_Custom_Alpha=function(r){return this.CustomParts.Fragment_Custom_Alpha=r.replace("result","alpha"),this},e.prototype.Fragment_Before_Lights=function(r){return this.CustomParts.Fragment_Before_Lights=r,this},e.prototype.Fragment_Before_Fog=function(r){return this.CustomParts.Fragment_Before_Fog=r,this},e.prototype.Fragment_Before_FragColor=function(r){return this.CustomParts.Fragment_Before_FragColor=r.replace("result","color"),this},e.prototype.Vertex_Begin=function(r){return this.CustomParts.Vertex_Begin=r,this},e.prototype.Vertex_Definitions=function(r){return this.CustomParts.Vertex_Definitions=r,this},e.prototype.Vertex_MainBegin=function(r){return this.CustomParts.Vertex_MainBegin=r,this},e.prototype.Vertex_Before_PositionUpdated=function(r){return this.CustomParts.Vertex_Before_PositionUpdated=r.replace("result","positionUpdated"),this},e.prototype.Vertex_Before_NormalUpdated=function(r){return this.CustomParts.Vertex_Before_NormalUpdated=r.replace("result","normalUpdated"),this},e.prototype.Vertex_After_WorldPosComputed=function(r){return this.CustomParts.Vertex_After_WorldPosComputed=r,this},e.prototype.Vertex_MainEnd=function(r){return this.CustomParts.Vertex_MainEnd=r,this},e.ShaderIndexer=1,e}(i.StandardMaterial);(0,i.RegisterClass)("BABYLON.CustomMaterial",c)},"../../../dev/materials/src/custom/index.ts":(P,d,f)=>{f.r(d),f.d(d,{CustomMaterial:()=>s.CustomMaterial,CustomShaderStructure:()=>s.CustomShaderStructure,PBRCustomMaterial:()=>i.PBRCustomMaterial,ShaderAlbedoParts:()=>i.ShaderAlbedoParts,ShaderAlebdoParts:()=>i.ShaderAlebdoParts,ShaderSpecialParts:()=>s.ShaderSpecialParts});var s=f("../../../dev/materials/src/custom/customMaterial.ts"),i=f("../../../dev/materials/src/custom/pbrCustomMaterial.ts")},"../../../dev/materials/src/custom/pbrCustomMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{PBRCustomMaterial:()=>c,ShaderAlbedoParts:()=>h,ShaderAlebdoParts:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators"),h=function(){function t(){}return t}(),g=h,c=function(t){(0,s.__extends)(e,t);function e(r,o){var a=t.call(this,r,o,!0)||this;return a.CustomParts=new h,a.customShaderNameResolve=a.Builder,a.FragmentShader=i.Effect.ShadersStore.pbrPixelShader,a.VertexShader=i.Effect.ShadersStore.pbrVertexShader,a.FragmentShader=a.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g,i.Effect.IncludesShadersStore.pbrBlockAlbedoOpacity),a.FragmentShader=a.FragmentShader.replace(/#include<pbrBlockReflectivity>/g,i.Effect.IncludesShadersStore.pbrBlockReflectivity),a.FragmentShader=a.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g,i.Effect.IncludesShadersStore.pbrBlockFinalColorComposition),e.ShaderIndexer++,a._createdShaderName="custompbr_"+e.ShaderIndexer,a}return e.prototype.AttachAfterBind=function(r,o){if(this._newUniformInstances)for(var a in this._newUniformInstances){var n=a.toString().split("-");n[0]=="vec2"?o.setVector2(n[1],this._newUniformInstances[a]):n[0]=="vec3"?this._newUniformInstances[a]instanceof i.Color3?o.setColor3(n[1],this._newUniformInstances[a]):o.setVector3(n[1],this._newUniformInstances[a]):n[0]=="vec4"?(this._newUniformInstances[a]instanceof i.Color4?o.setDirectColor4(n[1],this._newUniformInstances[a]):o.setVector4(n[1],this._newUniformInstances[a]),o.setVector4(n[1],this._newUniformInstances[a])):n[0]=="mat4"?o.setMatrix(n[1],this._newUniformInstances[a]):n[0]=="float"&&o.setFloat(n[1],this._newUniformInstances[a])}if(this._newSamplerInstances)for(var a in this._newSamplerInstances){var n=a.toString().split("-");n[0]=="sampler2D"&&this._newSamplerInstances[a].isReady&&this._newSamplerInstances[a].isReady()&&o.setTexture(n[1],this._newSamplerInstances[a])}},e.prototype.ReviewUniform=function(r,o){if(r=="uniform"&&this._newUniforms)for(var a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")==-1&&o.push(this._newUniforms[a].replace(/\[\d*\]/g,""));if(r=="sampler"&&this._newUniforms)for(var a=0;a<this._newUniforms.length;a++)this._customUniform[a].indexOf("sampler")!=-1&&o.push(this._newUniforms[a].replace(/\[\d*\]/g,""));return o},e.prototype.Builder=function(r,o,a,n,l,S,T){if(T){var _=T.processFinalCode;T.processFinalCode=function(D,y){if(D==="vertex")return _?_(D,y):y;var A=new i.ShaderCodeInliner(y);return A.inlineToken="#define pbr_inline",A.processCode(),_?_(D,A.code):A.code}}S&&this._customAttributes&&this._customAttributes.length>0&&S.push.apply(S,this._customAttributes),this.ReviewUniform("uniform",o),this.ReviewUniform("sampler",n);var C=this._createdShaderName;return i.Effect.ShadersStore[C+"VertexShader"]&&i.Effect.ShadersStore[C+"PixelShader"]||(i.Effect.ShadersStore[C+"VertexShader"]=this._injectCustomCode(this.VertexShader,"vertex"),i.Effect.ShadersStore[C+"PixelShader"]=this._injectCustomCode(this.FragmentShader,"fragment")),C},e.prototype._injectCustomCode=function(r,o){var a=this._getCustomCode(o);for(var n in a){var l=a[n];if(l&&l.length>0){var S="#define "+n;r=r.replace(S,`
`+l+`
`+S)}}return r},e.prototype._getCustomCode=function(r){var o,a;return r==="vertex"?{CUSTOM_VERTEX_BEGIN:this.CustomParts.Vertex_Begin,CUSTOM_VERTEX_DEFINITIONS:(((o=this._customUniform)===null||o===void 0?void 0:o.join(`
`))||"")+(this.CustomParts.Vertex_Definitions||""),CUSTOM_VERTEX_MAIN_BEGIN:this.CustomParts.Vertex_MainBegin,CUSTOM_VERTEX_UPDATE_POSITION:this.CustomParts.Vertex_Before_PositionUpdated,CUSTOM_VERTEX_UPDATE_NORMAL:this.CustomParts.Vertex_Before_NormalUpdated,CUSTOM_VERTEX_MAIN_END:this.CustomParts.Vertex_MainEnd,CUSTOM_VERTEX_UPDATE_WORLDPOS:this.CustomParts.Vertex_After_WorldPosComputed}:{CUSTOM_FRAGMENT_BEGIN:this.CustomParts.Fragment_Begin,CUSTOM_FRAGMENT_MAIN_BEGIN:this.CustomParts.Fragment_MainBegin,CUSTOM_FRAGMENT_DEFINITIONS:(((a=this._customUniform)===null||a===void 0?void 0:a.join(`
`))||"")+(this.CustomParts.Fragment_Definitions||""),CUSTOM_FRAGMENT_UPDATE_ALBEDO:this.CustomParts.Fragment_Custom_Albedo,CUSTOM_FRAGMENT_UPDATE_ALPHA:this.CustomParts.Fragment_Custom_Alpha,CUSTOM_FRAGMENT_BEFORE_LIGHTS:this.CustomParts.Fragment_Before_Lights,CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS:this.CustomParts.Fragment_Custom_MetallicRoughness,CUSTOM_FRAGMENT_UPDATE_MICROSURFACE:this.CustomParts.Fragment_Custom_MicroSurface,CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION:this.CustomParts.Fragment_Before_FinalColorComposition,CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:this.CustomParts.Fragment_Before_FragColor,CUSTOM_FRAGMENT_MAIN_END:this.CustomParts.Fragment_MainEnd,CUSTOM_FRAGMENT_BEFORE_FOG:this.CustomParts.Fragment_Before_Fog}},e.prototype._afterBind=function(r,o,a){if(o===void 0&&(o=null),!!o){this.AttachAfterBind(r,o);try{t.prototype._afterBind.call(this,r,o,a)}catch{}}},e.prototype.AddUniform=function(r,o,a){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),a&&(o.indexOf("sampler")!=-1?this._newSamplerInstances[o+"-"+r]=a:this._newUniformInstances[o+"-"+r]=a),this._customUniform.push("uniform "+o+" "+r+";"),this._newUniforms.push(r),this},e.prototype.AddAttribute=function(r){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(r),this},e.prototype.Fragment_Begin=function(r){return this.CustomParts.Fragment_Begin=r,this},e.prototype.Fragment_Definitions=function(r){return this.CustomParts.Fragment_Definitions=r,this},e.prototype.Fragment_MainBegin=function(r){return this.CustomParts.Fragment_MainBegin=r,this},e.prototype.Fragment_Custom_Albedo=function(r){return this.CustomParts.Fragment_Custom_Albedo=r.replace("result","surfaceAlbedo"),this},e.prototype.Fragment_Custom_Alpha=function(r){return this.CustomParts.Fragment_Custom_Alpha=r.replace("result","alpha"),this},e.prototype.Fragment_Before_Lights=function(r){return this.CustomParts.Fragment_Before_Lights=r,this},e.prototype.Fragment_Custom_MetallicRoughness=function(r){return this.CustomParts.Fragment_Custom_MetallicRoughness=r,this},e.prototype.Fragment_Custom_MicroSurface=function(r){return this.CustomParts.Fragment_Custom_MicroSurface=r,this},e.prototype.Fragment_Before_Fog=function(r){return this.CustomParts.Fragment_Before_Fog=r,this},e.prototype.Fragment_Before_FinalColorComposition=function(r){return this.CustomParts.Fragment_Before_FinalColorComposition=r,this},e.prototype.Fragment_Before_FragColor=function(r){return this.CustomParts.Fragment_Before_FragColor=r.replace("result","color"),this},e.prototype.Fragment_MainEnd=function(r){return this.CustomParts.Fragment_MainEnd=r,this},e.prototype.Vertex_Begin=function(r){return this.CustomParts.Vertex_Begin=r,this},e.prototype.Vertex_Definitions=function(r){return this.CustomParts.Vertex_Definitions=r,this},e.prototype.Vertex_MainBegin=function(r){return this.CustomParts.Vertex_MainBegin=r,this},e.prototype.Vertex_Before_PositionUpdated=function(r){return this.CustomParts.Vertex_Before_PositionUpdated=r.replace("result","positionUpdated"),this},e.prototype.Vertex_Before_NormalUpdated=function(r){return this.CustomParts.Vertex_Before_NormalUpdated=r.replace("result","normalUpdated"),this},e.prototype.Vertex_After_WorldPosComputed=function(r){return this.CustomParts.Vertex_After_WorldPosComputed=r,this},e.prototype.Vertex_MainEnd=function(r){return this.CustomParts.Vertex_MainEnd=r,this},e.ShaderIndexer=1,e}(i.PBRMaterial);(0,i.RegisterClass)("BABYLON.PBRCustomMaterial",c)},"../../../dev/materials/src/fire/fire.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{firePixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="firePixelShader",h=`precision highp float;uniform vec4 vEyePosition;varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
uniform sampler2D distortionSampler;uniform sampler2D opacitySampler;
#ifdef DIFFUSE
varying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
vec4 bx2(vec4 x)
{return vec4(2.0)*x-vec4(1.0);}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);float alpha=1.0;
#ifdef DIFFUSE
const float distortionAmount0 =0.092;const float distortionAmount1 =0.092;const float distortionAmount2 =0.092;vec2 heightAttenuation=vec2(0.3,0.39);vec4 noise0=texture2D(distortionSampler,vDistortionCoords1);vec4 noise1=texture2D(distortionSampler,vDistortionCoords2);vec4 noise2=texture2D(distortionSampler,vDistortionCoords3);vec4 noiseSum=bx2(noise0)*distortionAmount0+bx2(noise1)*distortionAmount1+bx2(noise2)*distortionAmount2;vec4 perturbedBaseCoords=vec4(vDiffuseUV,0.0,1.0)+noiseSum*(vDiffuseUV.y*heightAttenuation.x+heightAttenuation.y);vec4 opacityColor=texture2D(opacitySampler,perturbedBaseCoords.xy);
#ifdef ALPHATEST
if (opacityColor.r<0.1)
discard;
#endif
#include<depthPrePass>
baseColor=texture2D(diffuseSampler,perturbedBaseCoords.xy)*2.0;baseColor*=opacityColor;baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(1.0,1.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec4 color=vec4(baseColor.rgb,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/fire/fire.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{fireVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="fireVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
uniform float time;uniform float speed;
#ifdef DIFFUSE
varying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef DIFFUSE
vDiffuseUV=uv;vDiffuseUV.y-=0.2;
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#ifdef DIFFUSE
vec3 layerSpeed=vec3(-0.2,-0.52,-0.1)*speed;vDistortionCoords1.x=uv.x;vDistortionCoords1.y=uv.y+layerSpeed.x*time/1000.0;vDistortionCoords2.x=uv.x;vDistortionCoords2.y=uv.y+layerSpeed.y*time/1000.0;vDistortionCoords3.x=uv.x;vDistortionCoords3.y=uv.y+layerSpeed.z*time/1000.0;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/fire/fireMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{FireMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/fire/fire.fragment.ts"),f("../../../dev/materials/src/fire/fire.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.UV1=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.BonesPerMesh=0,e.NUM_BONE_INFLUENCERS=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.diffuseColor=new i.Color3(1,1,1),o.speed=1,o._scaledDiffuse=new i.Color3,o._lastTime=0,o}return t.prototype.needAlphaBlending=function(){return!1},t.prototype.needAlphaTesting=function(){return!0},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())n._needUVs=!0,n.DIFFUSE=!0;else return!1;if(n.ALPHATEST=!!this._opacityTexture,n._areMiscDirty&&(n.POINTSIZE=this.pointsCloud||l.forcePointsCloud,n.FOG=l.fogEnabled&&e.applyFog&&l.fogMode!==i.Scene.FOGMODE_NONE&&this.fogEnabled,n.LOGARITHMICDEPTH=this._useLogarithmicDepth),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!1,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.UV1&&_.push(i.VertexBuffer.UVKind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="fire",D=["world","view","viewProjection","vEyePosition","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant","time","speed"];(0,i.addClipPlaneUniforms)(D);var y=n.toString();r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:D,uniformBuffersNames:[],samplers:["diffuseSampler","distortionSampler","opacitySampler"],defines:y,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:null,maxSimultaneousLights:4,transformFeedbackVaryings:null},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix()),this._activeEffect.setTexture("distortionSampler",this._distortionTexture),this._activeEffect.setTexture("opacitySampler",this._opacityTexture)),(0,i.bindClipPlane)(this._activeEffect,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*r.visibility),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._lastTime+=a.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime),this._activeEffect.setFloat("speed",this.speed),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._distortionTexture&&this._distortionTexture.animations&&this._distortionTexture.animations.length>0&&e.push(this._distortionTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),this._distortionTexture&&e.push(this._distortionTexture),this._opacityTexture&&e.push(this._opacityTexture),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this._diffuseTexture===e||this._distortionTexture===e||this._opacityTexture===e)},t.prototype.getClassName=function(){return"FireMaterial"},t.prototype.dispose=function(e){this._diffuseTexture&&this._diffuseTexture.dispose(),this._distortionTexture&&this._distortionTexture.dispose(),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.FireMaterial",e.diffuseColor=this.diffuseColor.asArray(),e.speed=this.speed,this._diffuseTexture&&(e._diffuseTexture=this._diffuseTexture.serialize()),this._distortionTexture&&(e._distortionTexture=this._distortionTexture.serialize()),this._opacityTexture&&(e._opacityTexture=this._opacityTexture.serialize()),e},t.Parse=function(e,r,o){var a=new t(e.name,r);return a.diffuseColor=i.Color3.FromArray(e.diffuseColor),a.speed=e.speed,a.alpha=e.alpha,a.id=e.id,i.Tags.AddTagsTo(a,e.tags),a.backFaceCulling=e.backFaceCulling,a.wireframe=e.wireframe,e._diffuseTexture&&(a._diffuseTexture=i.Texture.Parse(e._diffuseTexture,r,o)),e._distortionTexture&&(a._distortionTexture=i.Texture.Parse(e._distortionTexture,r,o)),e._opacityTexture&&(a._opacityTexture=i.Texture.Parse(e._opacityTexture,r,o)),a},(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("distortionTexture")],t.prototype,"_distortionTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"distortionTexture",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("opacityTexture")],t.prototype,"_opacityTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"opacityTexture",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)("diffuse")],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"speed",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.FireMaterial",g)},"../../../dev/materials/src/fire/index.ts":(P,d,f)=>{f.r(d),f.d(d,{FireMaterial:()=>s.FireMaterial});var s=f("../../../dev/materials/src/fire/fireMaterial.ts")},"../../../dev/materials/src/fur/fur.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{furPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="furPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 furColor;uniform float furLength;varying vec3 vPositionW;varying float vfur_length;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#ifdef HIGHLEVEL
uniform float furOffset;uniform float furOcclusion;uniform sampler2D furTexture;varying vec2 vFurUV;
#endif
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<fogFragmentDeclaration>
#include<clipPlaneFragmentDeclaration>
float Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=furColor;vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor*=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef HIGHLEVEL
vec4 furTextureColor=texture2D(furTexture,vec2(vFurUV.x,vFurUV.y));if (furTextureColor.a<=0.0 || furTextureColor.g<furOffset) {discard;}
float occlusion=mix(0.0,furTextureColor.b*1.2,furOffset);baseColor=vec4(baseColor.xyz*max(occlusion,furOcclusion),1.1-furOffset);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase.rgb*baseColor.rgb,0.0,1.0);
#ifdef HIGHLEVEL
vec4 color=vec4(finalDiffuse,alpha);
#else
float r=vfur_length/furLength*0.5;vec4 color=vec4(finalDiffuse*(0.5+r),alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/fur/fur.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{furVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="furVertexShader",h=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
uniform float furLength;uniform float furAngle;
#ifdef HIGHLEVEL
uniform float furOffset;uniform vec3 furGravity;uniform float furTime;uniform float furSpacing;uniform float furDensity;
#endif
#ifdef HEIGHTMAP
uniform sampler2D heightTexture;
#endif
#ifdef HIGHLEVEL
varying vec2 vFurUV;
#endif
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
varying float vfur_length;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
float Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
float r=Rand(position);
#ifdef HEIGHTMAP
#if __VERSION__>100
vfur_length=furLength*texture(heightTexture,uv).x;
#else
vfur_length=furLength*texture2D(heightTexture,uv).r;
#endif
#else 
vfur_length=(furLength*r);
#endif
vec3 tangent1=vec3(normal.y,-normal.x,0);vec3 tangent2=vec3(-normal.z,0,normal.x);r=Rand(tangent1*r);float J=(2.0+4.0*r);r=Rand(tangent2*r);float K=(2.0+2.0*r);tangent1=tangent1*J+tangent2*K;tangent1=normalize(tangent1);vec3 newPosition=position+normal*vfur_length*cos(furAngle)+tangent1*vfur_length*sin(furAngle);
#ifdef HIGHLEVEL
vec3 forceDirection=vec3(0.0,0.0,0.0);forceDirection.x=sin(furTime+position.x*0.05)*0.2;forceDirection.y=cos(furTime*0.7+position.y*0.04)*0.2;forceDirection.z=sin(furTime*0.7+position.z*0.04)*0.2;vec3 displacement=vec3(0.0,0.0,0.0);displacement=furGravity+forceDirection;float displacementFactor=pow(furOffset,3.0);vec3 aNormal=normal;aNormal.xyz+=displacement*displacementFactor;newPosition=vec3(newPosition.x,newPosition.y,newPosition.z)+(normalize(aNormal)*furOffset*furSpacing);
#endif
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
gl_Position=viewProjection*finalWorld*vec4(newPosition,1.0);vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#ifdef HIGHLEVEL
vFurUV=vDiffuseUV*furDensity;
#endif
#else
#ifdef HIGHLEVEL
vFurUV=uv*furDensity;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/fur/furMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{FurMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/fur/fur.fragment.ts"),f("../../../dev/materials/src/fur/fur.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.HEIGHTMAP=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.HIGHLEVEL=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.diffuseColor=new i.Color3(1,1,1),o.furLength=1,o.furAngle=0,o.furColor=new i.Color3(.44,.21,.02),o.furOffset=0,o.furSpacing=12,o.furGravity=new i.Vector3(0,0,0),o.furSpeed=100,o.furDensity=20,o.furOcclusion=0,o._disableLighting=!1,o._maxSimultaneousLights=4,o.highLevelFur=!0,o._furTime=0,o}return Object.defineProperty(t.prototype,"furTime",{get:function(){return this._furTime},set:function(e){this._furTime=e},enumerable:!1,configurable:!0}),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.updateFur=function(){for(var e=1;e<this._meshes.length;e++){var r=this._meshes[e].material;r.furLength=this.furLength,r.furAngle=this.furAngle,r.furGravity=this.furGravity,r.furSpacing=this.furSpacing,r.furSpeed=this.furSpeed,r.furColor=this.furColor,r.diffuseTexture=this.diffuseTexture,r.furTexture=this.furTexture,r.highLevelFur=this.highLevelFur,r.furTime=this.furTime,r.furDensity=this.furDensity}},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&l.texturesEnabled){if(this.diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled)if(this.diffuseTexture.isReady())n._needUVs=!0,n.DIFFUSE=!0;else return!1;if(this.heightTexture&&S.getCaps().maxVertexTextureImageUnits)if(this.heightTexture.isReady())n._needUVs=!0,n.HEIGHTMAP=!0;else return!1}if(this.highLevelFur!==n.HIGHLEVEL&&(n.HIGHLEVEL=!0,n.markAsUnprocessed()),(0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="fur",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant","furLength","furAngle","furColor","furOffset","furGravity","furTime","furSpacing","furDensity","furOcclusion"];(0,i.addClipPlaneUniforms)(y);var A=["diffuseSampler","heightTexture","furTexture"],L=[];(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),this._heightTexture&&this._activeEffect.setTexture("heightTexture",this._heightTexture),(0,i.bindClipPlane)(this._activeEffect,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this.maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._activeEffect.setFloat("furLength",this.furLength),this._activeEffect.setFloat("furAngle",this.furAngle),this._activeEffect.setColor4("furColor",this.furColor,1),this.highLevelFur&&(this._activeEffect.setVector3("furGravity",this.furGravity),this._activeEffect.setFloat("furOffset",this.furOffset),this._activeEffect.setFloat("furSpacing",this.furSpacing),this._activeEffect.setFloat("furDensity",this.furDensity),this._activeEffect.setFloat("furOcclusion",this.furOcclusion),this._furTime+=this.getScene().getEngine().getDeltaTime()/this.furSpeed,this._activeEffect.setFloat("furTime",this._furTime),this._activeEffect.setTexture("furTexture",this.furTexture)),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.heightTexture&&this.heightTexture.animations&&this.heightTexture.animations.length>0&&e.push(this.heightTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),this._heightTexture&&e.push(this._heightTexture),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this.diffuseTexture===e||this._heightTexture===e)},t.prototype.dispose=function(e){if(this.diffuseTexture&&this.diffuseTexture.dispose(),this._meshes)for(var r=1;r<this._meshes.length;r++){var o=this._meshes[r].material;o&&o.dispose(e),this._meshes[r].dispose()}c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.FurMaterial",this._meshes&&(e.sourceMeshName=this._meshes[0].name,e.quality=this._meshes.length),e},t.prototype.getClassName=function(){return"FurMaterial"},t.Parse=function(e,r,o){var a=i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o);return e.sourceMeshName&&a.highLevelFur&&r.executeWhenReady(function(){var n=r.getMeshByName(e.sourceMeshName);if(n){var l=t.GenerateTexture("Fur Texture",r);a.furTexture=l,t.FurifyMesh(n,e.quality)}}),a},t.GenerateTexture=function(e,r){for(var o=new i.DynamicTexture("FurTexture "+e,256,r,!0),a=o.getContext(),n=0;n<2e4;++n)a.fillStyle="rgba(255, "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", 1)",a.fillRect(Math.random()*o.getSize().width,Math.random()*o.getSize().height,2,2);return o.update(!1),o.wrapU=i.Texture.WRAP_ADDRESSMODE,o.wrapV=i.Texture.WRAP_ADDRESSMODE,o},t.FurifyMesh=function(e,r){var o=[e],a=e.material,n;if(!(a instanceof t))throw"The material of the source mesh must be a Fur Material";for(n=1;n<r;n++){var l=new t(a.name+n,e.getScene());e.getScene().materials.pop(),i.Tags.EnableFor(l),i.Tags.AddTagsTo(l,"furShellMaterial"),l.furLength=a.furLength,l.furAngle=a.furAngle,l.furGravity=a.furGravity,l.furSpacing=a.furSpacing,l.furSpeed=a.furSpeed,l.furColor=a.furColor,l.diffuseTexture=a.diffuseTexture,l.furOffset=n/r,l.furTexture=a.furTexture,l.highLevelFur=a.highLevelFur,l.furTime=a.furTime,l.furDensity=a.furDensity;var S=e.clone(e.name+n);S.material=l,S.skeleton=e.skeleton,S.position=i.Vector3.Zero(),o.push(S)}for(n=1;n<o.length;n++)o[n].parent=e;return e.material._meshes=o,o},(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("heightTexture")],t.prototype,"_heightTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"heightTexture",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furLength",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furAngle",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"furColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furOffset",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furSpacing",void 0),(0,s.__decorate)([(0,i.serializeAsVector3)()],t.prototype,"furGravity",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furSpeed",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furDensity",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furOcclusion",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"highLevelFur",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"furTime",null),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.FurMaterial",g)},"../../../dev/materials/src/fur/index.ts":(P,d,f)=>{f.r(d),f.d(d,{FurMaterial:()=>s.FurMaterial});var s=f("../../../dev/materials/src/fur/furMaterial.ts")},"../../../dev/materials/src/gradient/gradient.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{gradientPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="gradientPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 topColor;uniform vec4 bottomColor;uniform float offset;uniform float scale;uniform float smoothness;varying vec3 vPositionW;varying vec3 vPosition;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);float h=vPosition.y*scale+offset;float mysmoothness=clamp(smoothness,0.01,max(smoothness,10.));vec4 baseColor=mix(bottomColor,topColor,max(pow(max(h,0.0),mysmoothness),0.0));vec3 diffuseColor=baseColor.rgb;float alpha=baseColor.a;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef EMISSIVE
vec3 diffuseBase=baseColor.rgb;
#else
vec3 diffuseBase=vec3(0.,0.,0.);
#endif
lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/gradient/gradient.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{gradientVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="gradientVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;varying vec3 vPosition;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);vPosition=position;
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/gradient/gradientMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{GradientMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/gradient/gradient.fragment.ts"),f("../../../dev/materials/src/gradient/gradient.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.EMISSIVE=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o._maxSimultaneousLights=4,o.topColor=new i.Color3(1,0,0),o.topColorAlpha=1,o.bottomColor=new i.Color3(0,0,1),o.bottomColorAlpha=1,o.offset=0,o.scale=1,o.smoothness=1,o._disableLighting=!1,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1||this.topColorAlpha<1||this.bottomColorAlpha<1},t.prototype.needAlphaTesting=function(){return!0},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if((0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),n.EMISSIVE=this._disableLighting,(0,i.PrepareDefinesForAttributes)(e,n,!1,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="gradient",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","mBones","logarithmicDepthConstant","topColor","bottomColor","offset","smoothness","scale"];(0,i.addClipPlaneUniforms)(y);var A=[],L=[];(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:4}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,l),this._mustRebind(a,l,o)&&((0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this.maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._activeEffect.setColor4("topColor",this.topColor,this.topColorAlpha),this._activeEffect.setColor4("bottomColor",this.bottomColor,this.bottomColorAlpha),this._activeEffect.setFloat("offset",this.offset),this._activeEffect.setFloat("scale",this.scale),this._activeEffect.setFloat("smoothness",this.smoothness),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){return[]},t.prototype.dispose=function(e){c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.GradientMaterial",e},t.prototype.getClassName=function(){return"GradientMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"topColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"topColorAlpha",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"bottomColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"bottomColorAlpha",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"offset",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"scale",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"smoothness",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.GradientMaterial",g)},"../../../dev/materials/src/gradient/index.ts":(P,d,f)=>{f.r(d),f.d(d,{GradientMaterial:()=>s.GradientMaterial});var s=f("../../../dev/materials/src/gradient/gradientMaterial.ts")},"../../../dev/materials/src/grid/grid.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{gridPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="gridPixelShader",h=`#extension GL_OES_standard_derivatives : enable
#define SQRT2 1.41421356
#define PI 3.14159
precision highp float;uniform float visibility;uniform vec3 mainColor;uniform vec3 lineColor;uniform vec4 gridControl;uniform vec3 gridOffset;varying vec3 vPosition;varying vec3 vNormal;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform sampler2D opacitySampler;uniform vec2 vOpacityInfos;
#endif
float getDynamicVisibility(float position) {float majorGridFrequency=gridControl.y;if (floor(position+0.5)==floor(position/majorGridFrequency+0.5)*majorGridFrequency)
{return 1.0;}
return gridControl.z;}
float getAnisotropicAttenuation(float differentialLength) {const float maxNumberOfLines=10.0;return clamp(1.0/(differentialLength+1.0)-1.0/maxNumberOfLines,0.0,1.0);}
float isPointOnLine(float position,float differentialLength) {float fractionPartOfPosition=position-floor(position+0.5); 
fractionPartOfPosition/=differentialLength; 
#ifdef ANTIALIAS
fractionPartOfPosition=clamp(fractionPartOfPosition,-1.,1.);float result=0.5+0.5*cos(fractionPartOfPosition*PI); 
return result;
#else
return abs(fractionPartOfPosition)<SQRT2/4. ? 1. : 0.;
#endif
}
float contributionOnAxis(float position) {float differentialLength=length(vec2(dFdx(position),dFdy(position)));differentialLength*=SQRT2; 
float result=isPointOnLine(position,differentialLength);float dynamicVisibility=getDynamicVisibility(position);result*=dynamicVisibility;float anisotropicAttenuation=getAnisotropicAttenuation(differentialLength);result*=anisotropicAttenuation;return result;}
float normalImpactOnAxis(float x) {float normalImpact=clamp(1.0-3.0*abs(x*x*x),0.0,1.0);return normalImpact;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
float gridRatio=gridControl.x;vec3 gridPos=(vPosition+gridOffset.xyz)/gridRatio;float x=contributionOnAxis(gridPos.x);float y=contributionOnAxis(gridPos.y);float z=contributionOnAxis(gridPos.z);vec3 normal=normalize(vNormal);x*=normalImpactOnAxis(normal.x);y*=normalImpactOnAxis(normal.y);z*=normalImpactOnAxis(normal.z);
#ifdef MAX_LINE
float grid=clamp(max(max(x,y),z),0.,1.);
#else
float grid=clamp(x+y+z,0.,1.);
#endif
vec3 color=mix(mainColor,lineColor,grid);
#ifdef FOG
#include<fogFragment>
#endif
float opacity=1.0;
#ifdef TRANSPARENT
opacity=clamp(grid,0.08,gridControl.w*grid);
#endif
#ifdef OPACITY
opacity*=texture2D(opacitySampler,vOpacityUV).a;
#endif
gl_FragColor=vec4(color.rgb,opacity*visibility);
#ifdef TRANSPARENT
#ifdef PREMULTIPLYALPHA
gl_FragColor.rgb*=opacity;
#endif
#else
#endif
#include<logDepthFragment>
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/grid/grid.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{gridVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="gridVertexShader",h=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#include<instancesDeclaration>
uniform mat4 projection;uniform mat4 view;varying vec3 vPosition;varying vec3 vNormal;
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<fogVertex>
vec4 cameraSpacePosition=view*worldPos;gl_Position=projection*cameraSpacePosition;
#ifdef OPACITY
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
if (vOpacityInfos.x==0.)
{vOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));}
else
{vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));}
#endif 
#include<clipPlaneVertex>
#include<logDepthVertex>
vPosition=position;vNormal=normal;
#define CUSTOM_VERTEX_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/grid/gridMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{GridMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/grid/grid.fragment.ts"),f("../../../dev/materials/src/grid/grid.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.OPACITY=!1,e.ANTIALIAS=!1,e.TRANSPARENT=!1,e.FOG=!1,e.PREMULTIPLYALPHA=!1,e.MAX_LINE=!1,e.UV1=!1,e.UV2=!1,e.INSTANCES=!1,e.THIN_INSTANCES=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.mainColor=i.Color3.Black(),o.lineColor=i.Color3.Teal(),o.gridRatio=1,o.gridOffset=i.Vector3.Zero(),o.majorUnitFrequency=10,o.minorUnitVisibility=.33,o.opacity=1,o.antialias=!0,o.preMultiplyAlpha=!1,o.useMaxLine=!1,o._gridControl=new i.Vector4(o.gridRatio,o.majorUnitFrequency,o.minorUnitVisibility,o.opacity),o}return t.prototype.needAlphaBlending=function(){return this.opacity<1||this._opacityTexture&&this._opacityTexture.isReady()},t.prototype.needAlphaBlendingForMesh=function(e){return e.visibility<1||this.needAlphaBlending()},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;if(n.TRANSPARENT!==this.opacity<1&&(n.TRANSPARENT=!n.TRANSPARENT,n.markAsUnprocessed()),n.PREMULTIPLYALPHA!=this.preMultiplyAlpha&&(n.PREMULTIPLYALPHA=!n.PREMULTIPLYALPHA,n.markAsUnprocessed()),n.MAX_LINE!==this.useMaxLine&&(n.MAX_LINE=!n.MAX_LINE,n.markAsUnprocessed()),n.ANTIALIAS!==this.antialias&&(n.ANTIALIAS=!n.ANTIALIAS,n.markAsUnprocessed()),n._areTexturesDirty&&(n._needUVs=!1,l.texturesEnabled&&this._opacityTexture&&i.MaterialFlags.OpacityTextureEnabled))if(this._opacityTexture.isReady())n._needUVs=!0,n.OPACITY=!0;else return!1;if((0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,!1,this.fogEnabled,!1,n),(0,i.PrepareDefinesForFrameBoundValues)(l,l.getEngine(),this,n,!!o),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial(),(0,i.PrepareDefinesForAttributes)(e,n,!1,!1);var S=[i.VertexBuffer.PositionKind,i.VertexBuffer.NormalKind];n.UV1&&S.push(i.VertexBuffer.UVKind),n.UV2&&S.push(i.VertexBuffer.UV2Kind),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess,(0,i.PrepareAttributesForInstances)(S,n);var T=["projection","mainColor","lineColor","gridControl","gridOffset","vFogInfos","vFogColor","world","view","opacityMatrix","vOpacityInfos","visibility","logarithmicDepthConstant"],_=n.toString();(0,i.addClipPlaneUniforms)(T),r.setEffect(l.getEngine().createEffect("grid",S,T,["opacitySampler"],_,void 0,this.onCompiled,this.onError),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this._activeEffect.setFloat("visibility",r.visibility),(!n.INSTANCES||n.THIN_INSTANCE)&&this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("view",a.getViewMatrix()),this._activeEffect.setMatrix("projection",a.getProjectionMatrix()),this._mustRebind(a,l,o)&&(this._activeEffect.setColor3("mainColor",this.mainColor),this._activeEffect.setColor3("lineColor",this.lineColor),this._activeEffect.setVector3("gridOffset",this.gridOffset),this._gridControl.x=this.gridRatio,this._gridControl.y=Math.round(this.majorUnitFrequency),this._gridControl.z=this.minorUnitVisibility,this._gridControl.w=this.opacity,this._activeEffect.setVector4("gridControl",this._gridControl),this._opacityTexture&&i.MaterialFlags.OpacityTextureEnabled&&(this._activeEffect.setTexture("opacitySampler",this._opacityTexture),this._activeEffect.setFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),this._activeEffect.setMatrix("opacityMatrix",this._opacityTexture.getTextureMatrix())),(0,i.bindClipPlane)(l,this,a),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a)),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o))}},t.prototype.dispose=function(e){c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.GridMaterial",e},t.prototype.getClassName=function(){return"GridMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"mainColor",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"lineColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"gridRatio",void 0),(0,s.__decorate)([(0,i.serializeAsVector3)()],t.prototype,"gridOffset",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"majorUnitFrequency",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"minorUnitVisibility",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"opacity",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"antialias",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"preMultiplyAlpha",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"useMaxLine",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("opacityTexture")],t.prototype,"_opacityTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"opacityTexture",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.GridMaterial",g)},"../../../dev/materials/src/grid/index.ts":(P,d,f)=>{f.r(d),f.d(d,{GridMaterial:()=>s.GridMaterial});var s=f("../../../dev/materials/src/grid/gridMaterial.ts")},"../../../dev/materials/src/index.ts":(P,d,f)=>{f.r(d),f.d(d,{CellMaterial:()=>s.CellMaterial,CustomMaterial:()=>i.CustomMaterial,CustomShaderStructure:()=>i.CustomShaderStructure,FireMaterial:()=>h.FireMaterial,FurMaterial:()=>g.FurMaterial,GradientMaterial:()=>c.GradientMaterial,GridMaterial:()=>t.GridMaterial,LavaMaterial:()=>e.LavaMaterial,MixMaterial:()=>r.MixMaterial,NormalMaterial:()=>o.NormalMaterial,PBRCustomMaterial:()=>i.PBRCustomMaterial,ShaderAlbedoParts:()=>i.ShaderAlbedoParts,ShaderAlebdoParts:()=>i.ShaderAlebdoParts,ShaderSpecialParts:()=>i.ShaderSpecialParts,ShadowOnlyMaterial:()=>a.ShadowOnlyMaterial,SimpleMaterial:()=>n.SimpleMaterial,SkyMaterial:()=>l.SkyMaterial,TerrainMaterial:()=>S.TerrainMaterial,TriPlanarMaterial:()=>T.TriPlanarMaterial,WaterMaterial:()=>_.WaterMaterial});var s=f("../../../dev/materials/src/cell/index.ts"),i=f("../../../dev/materials/src/custom/index.ts"),h=f("../../../dev/materials/src/fire/index.ts"),g=f("../../../dev/materials/src/fur/index.ts"),c=f("../../../dev/materials/src/gradient/index.ts"),t=f("../../../dev/materials/src/grid/index.ts"),e=f("../../../dev/materials/src/lava/index.ts"),r=f("../../../dev/materials/src/mix/index.ts"),o=f("../../../dev/materials/src/normal/index.ts"),a=f("../../../dev/materials/src/shadowOnly/index.ts"),n=f("../../../dev/materials/src/simple/index.ts"),l=f("../../../dev/materials/src/sky/index.ts"),S=f("../../../dev/materials/src/terrain/index.ts"),T=f("../../../dev/materials/src/triPlanar/index.ts"),_=f("../../../dev/materials/src/water/index.ts")},"../../../dev/materials/src/lava/index.ts":(P,d,f)=>{f.r(d),f.d(d,{LavaMaterial:()=>s.LavaMaterial});var s=f("../../../dev/materials/src/lava/lavaMaterial.ts")},"../../../dev/materials/src/lava/lava.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{lavaPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="lavaPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;uniform float time;uniform float speed;uniform float movingSpeed;uniform vec3 fogColor;uniform sampler2D noiseTexture;uniform float fogDensity;varying float noise;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
float random( vec3 scale,float seed ){return fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
vec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );vec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time *0.02;vec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;T1.x+=noiseTex.x*2.0;T1.y+=noiseTex.y*2.0;T2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;T2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;float p=texture2D( noiseTexture,T1*3.0 ).a;vec4 lavaColor=texture2D( diffuseSampler,T2*4.0);vec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );baseColor=temp;float depth=gl_FragCoord.z*4.0;const float LOG2=1.442695;float fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );fogFactor=1.0-clamp( fogFactor,0.0,1.0 );baseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );diffuseColor=baseColor.rgb;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef UNLIT
vec3 diffuseBase=vec3(1.,1.,1.);
#else
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0]
#include<lightFragment>[1]
#include<lightFragment>[2]
#include<lightFragment>[3]
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/lava/lava.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{lavaVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="lavaVertexShader",h=`precision highp float;uniform float time;uniform float lowFrequencySpeed;varying float noise;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
/* NOISE FUNCTIONS */
vec3 mod289(vec3 x)
{return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x)
{return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x)
{return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r)
{return 1.79284291400159-0.85373472095314*r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float pnoise(vec3 P,vec3 rep)
{vec3 Pi0=mod(floor(P),rep); 
vec3 Pi1=mod(Pi0+vec3(1.0),rep); 
Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P); 
vec3 Pf1=Pf0-vec3(1.0); 
vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}
/* END FUNCTION */
float turbulence( vec3 p ) {float w=100.0;float t=-.5;for (float f=1.0 ; f<=10.0 ; f++ ){float power=pow( 2.0,f );t+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );}
return t;}
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef NORMAL
noise=10.0* -.10*turbulence( .5*normal+time*1.15 );float b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );float displacement=- 1.5*noise+b;vec3 newPosition=position+normal*displacement;gl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/lava/lavaMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{LavaMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/lava/lava.fragment.ts"),f("../../../dev/materials/src/lava/lava.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.LIGHT0=!1,e.LIGHT1=!1,e.LIGHT2=!1,e.LIGHT3=!1,e.SPOTLIGHT0=!1,e.SPOTLIGHT1=!1,e.SPOTLIGHT2=!1,e.SPOTLIGHT3=!1,e.HEMILIGHT0=!1,e.HEMILIGHT1=!1,e.HEMILIGHT2=!1,e.HEMILIGHT3=!1,e.DIRLIGHT0=!1,e.DIRLIGHT1=!1,e.DIRLIGHT2=!1,e.DIRLIGHT3=!1,e.POINTLIGHT0=!1,e.POINTLIGHT1=!1,e.POINTLIGHT2=!1,e.POINTLIGHT3=!1,e.SHADOW0=!1,e.SHADOW1=!1,e.SHADOW2=!1,e.SHADOW3=!1,e.SHADOWS=!1,e.SHADOWESM0=!1,e.SHADOWESM1=!1,e.SHADOWESM2=!1,e.SHADOWESM3=!1,e.SHADOWPOISSON0=!1,e.SHADOWPOISSON1=!1,e.SHADOWPOISSON2=!1,e.SHADOWPOISSON3=!1,e.SHADOWPCF0=!1,e.SHADOWPCF1=!1,e.SHADOWPCF2=!1,e.SHADOWPCF3=!1,e.SHADOWPCSS0=!1,e.SHADOWPCSS1=!1,e.SHADOWPCSS2=!1,e.SHADOWPCSS3=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.UNLIT=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.speed=1,o.movingSpeed=1,o.lowFrequencySpeed=1,o.fogDensity=.15,o._lastTime=0,o.diffuseColor=new i.Color3(1,1,1),o._disableLighting=!1,o._unlit=!1,o._maxSimultaneousLights=4,o._scaledDiffuse=new i.Color3,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,l.texturesEnabled&&this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())n._needUVs=!0,n.DIFFUSE=!0;else return!1;if((0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=!0,(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="lava",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant","time","speed","movingSpeed","fogColor","fogDensity","lowFrequencySpeed"];(0,i.addClipPlaneUniforms)(y);var A=["diffuseSampler","noiseTexture"],L=[];(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,n.UNLIT=this._unlit,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this.diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),this.noiseTexture&&this._activeEffect.setTexture("noiseTexture",this.noiseTexture),(0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*r.visibility),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._lastTime+=a.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime*this.speed/1e3),this.fogColor||(this.fogColor=i.Color3.Black()),this._activeEffect.setColor3("fogColor",this.fogColor),this._activeEffect.setFloat("fogDensity",this.fogDensity),this._activeEffect.setFloat("lowFrequencySpeed",this.lowFrequencySpeed),this._activeEffect.setFloat("movingSpeed",this.movingSpeed),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.noiseTexture&&this.noiseTexture.animations&&this.noiseTexture.animations.length>0&&e.push(this.noiseTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this.diffuseTexture===e)},t.prototype.dispose=function(e){this.diffuseTexture&&this.diffuseTexture.dispose(),this.noiseTexture&&this.noiseTexture.dispose(),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.LavaMaterial",e},t.prototype.getClassName=function(){return"LavaMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)()],t.prototype,"noiseTexture",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"fogColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"speed",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"movingSpeed",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"lowFrequencySpeed",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"fogDensity",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("unlit")],t.prototype,"_unlit",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"unlit",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.LavaMaterial",g)},"../../../dev/materials/src/mix/index.ts":(P,d,f)=>{f.r(d),f.d(d,{MixMaterial:()=>s.MixMaterial});var s=f("../../../dev/materials/src/mix/mixMaterial.ts")},"../../../dev/materials/src/mix/mix.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{mixPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="mixPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform sampler2D mixMap1Sampler;uniform vec2 vTextureInfos;
#ifdef MIXMAP2
uniform sampler2D mixMap2Sampler;
#endif
uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform sampler2D diffuse4Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;uniform vec2 diffuse4Infos;
#ifdef MIXMAP2
uniform sampler2D diffuse5Sampler;uniform sampler2D diffuse6Sampler;uniform sampler2D diffuse7Sampler;uniform sampler2D diffuse8Sampler;uniform vec2 diffuse5Infos;uniform vec2 diffuse6Infos;uniform vec2 diffuse7Infos;uniform vec2 diffuse8Infos;
#endif
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 finalMixColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;
#ifdef MIXMAP2
vec4 mixColor2=vec4(1.,1.,1.,1.);
#endif
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef DIFFUSE
vec4 mixColor=texture2D(mixMap1Sampler,vTextureUV);
#include<depthPrePass>
mixColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);vec4 diffuse4Color=texture2D(diffuse4Sampler,vTextureUV*diffuse4Infos);diffuse1Color.rgb*=mixColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,mixColor.g);diffuse3Color.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse3Color.rgb,diffuse4Color.rgb,1.0-mixColor.a);
#ifdef MIXMAP2
mixColor=texture2D(mixMap2Sampler,vTextureUV);mixColor.rgb*=vTextureInfos.y;vec4 diffuse5Color=texture2D(diffuse5Sampler,vTextureUV*diffuse5Infos);vec4 diffuse6Color=texture2D(diffuse6Sampler,vTextureUV*diffuse6Infos);vec4 diffuse7Color=texture2D(diffuse7Sampler,vTextureUV*diffuse7Infos);vec4 diffuse8Color=texture2D(diffuse8Sampler,vTextureUV*diffuse8Infos);diffuse5Color.rgb=mix(finalMixColor.rgb,diffuse5Color.rgb,mixColor.r);diffuse6Color.rgb=mix(diffuse5Color.rgb,diffuse6Color.rgb,mixColor.g);diffuse7Color.rgb=mix(diffuse6Color.rgb,diffuse7Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse7Color.rgb,diffuse8Color.rgb,1.0-mixColor.a);
#endif
#endif
#ifdef VERTEXCOLOR
finalMixColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor*finalMixColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/mix/mix.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{mixVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="mixVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vTextureInfos.x==0.)
{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}
else
{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/mix/mixMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{MixMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/mix/mix.fragment.ts"),f("../../../dev/materials/src/mix/mix.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.SPECULARTERM=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.MIXMAP2=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.diffuseColor=new i.Color3(1,1,1),o.specularColor=new i.Color3(0,0,0),o.specularPower=64,o._disableLighting=!1,o._maxSimultaneousLights=4,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(l.texturesEnabled&&(!this._mixTexture1||!this._mixTexture1.isReady()||(n._needUVs=!0,i.MaterialFlags.DiffuseTextureEnabled&&(!this._diffuseTexture1||!this._diffuseTexture1.isReady()||(n.DIFFUSE=!0,!this._diffuseTexture2||!this._diffuseTexture2.isReady())||!this._diffuseTexture3||!this._diffuseTexture3.isReady()||!this._diffuseTexture4||!this._diffuseTexture4.isReady()||this._mixTexture2&&(!this._mixTexture2.isReady()||(n.MIXMAP2=!0,!this._diffuseTexture5||!this._diffuseTexture5.isReady())||!this._diffuseTexture6||!this._diffuseTexture6.isReady()||!this._diffuseTexture7||!this._diffuseTexture7.isReady()||!this._diffuseTexture8||!this._diffuseTexture8.isReady())))))return!1;if((0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="mix",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","textureMatrix","logarithmicDepthConstant","diffuse1Infos","diffuse2Infos","diffuse3Infos","diffuse4Infos","diffuse5Infos","diffuse6Infos","diffuse7Infos","diffuse8Infos"],A=["mixMap1Sampler","mixMap2Sampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","diffuse4Sampler","diffuse5Sampler","diffuse6Sampler","diffuse7Sampler","diffuse8Sampler"],L=[];(0,i.addClipPlaneUniforms)(y),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this._mixTexture1&&(this._activeEffect.setTexture("mixMap1Sampler",this._mixTexture1),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture1.coordinatesIndex,this._mixTexture1.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture1.getTextureMatrix()),i.MaterialFlags.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale)),this._diffuseTexture4&&(this._activeEffect.setTexture("diffuse4Sampler",this._diffuseTexture4),this._activeEffect.setFloat2("diffuse4Infos",this._diffuseTexture4.uScale,this._diffuseTexture4.vScale)))),this._mixTexture2&&(this._activeEffect.setTexture("mixMap2Sampler",this._mixTexture2),i.MaterialFlags.DiffuseTextureEnabled&&(this._diffuseTexture5&&(this._activeEffect.setTexture("diffuse5Sampler",this._diffuseTexture5),this._activeEffect.setFloat2("diffuse5Infos",this._diffuseTexture5.uScale,this._diffuseTexture5.vScale)),this._diffuseTexture6&&(this._activeEffect.setTexture("diffuse6Sampler",this._diffuseTexture6),this._activeEffect.setFloat2("diffuse6Infos",this._diffuseTexture6.uScale,this._diffuseTexture6.vScale)),this._diffuseTexture7&&(this._activeEffect.setTexture("diffuse7Sampler",this._diffuseTexture7),this._activeEffect.setFloat2("diffuse7Infos",this._diffuseTexture7.uScale,this._diffuseTexture7.vScale)),this._diffuseTexture8&&(this._activeEffect.setTexture("diffuse8Sampler",this._diffuseTexture8),this._activeEffect.setFloat2("diffuse8Infos",this._diffuseTexture8.uScale,this._diffuseTexture8.vScale)))),(0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),n.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this.maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this._mixTexture1&&this._mixTexture1.animations&&this._mixTexture1.animations.length>0&&e.push(this._mixTexture1),this._mixTexture2&&this._mixTexture2.animations&&this._mixTexture2.animations.length>0&&e.push(this._mixTexture2),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._mixTexture1&&e.push(this._mixTexture1),this._diffuseTexture1&&e.push(this._diffuseTexture1),this._diffuseTexture2&&e.push(this._diffuseTexture2),this._diffuseTexture3&&e.push(this._diffuseTexture3),this._diffuseTexture4&&e.push(this._diffuseTexture4),this._mixTexture2&&e.push(this._mixTexture2),this._diffuseTexture5&&e.push(this._diffuseTexture5),this._diffuseTexture6&&e.push(this._diffuseTexture6),this._diffuseTexture7&&e.push(this._diffuseTexture7),this._diffuseTexture8&&e.push(this._diffuseTexture8),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this._mixTexture1===e||this._diffuseTexture1===e||this._diffuseTexture2===e||this._diffuseTexture3===e||this._diffuseTexture4===e||this._mixTexture2===e||this._diffuseTexture5===e||this._diffuseTexture6===e||this._diffuseTexture7===e||this._diffuseTexture8===e)},t.prototype.dispose=function(e){this._mixTexture1&&this._mixTexture1.dispose(),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.MixMaterial",e},t.prototype.getClassName=function(){return"MixMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsTexture)("mixTexture1")],t.prototype,"_mixTexture1",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"mixTexture1",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("mixTexture2")],t.prototype,"_mixTexture2",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"mixTexture2",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture1")],t.prototype,"_diffuseTexture1",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture1",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture2")],t.prototype,"_diffuseTexture2",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture2",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture3")],t.prototype,"_diffuseTexture3",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture3",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture4")],t.prototype,"_diffuseTexture4",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture4",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture1")],t.prototype,"_diffuseTexture5",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture5",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture2")],t.prototype,"_diffuseTexture6",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture6",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture3")],t.prototype,"_diffuseTexture7",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture7",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture4")],t.prototype,"_diffuseTexture8",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture8",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"specularColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"specularPower",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.MixMaterial",g)},"../../../dev/materials/src/normal/index.ts":(P,d,f)=>{f.r(d),f.d(d,{NormalMaterial:()=>s.NormalMaterial});var s=f("../../../dev/materials/src/normal/normalMaterial.ts")},"../../../dev/materials/src/normal/normal.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{normalPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="normalPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef LIGHTING
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#endif
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef NORMAL
baseColor=mix(baseColor,vec4(vNormalW,1.0),0.5);
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef LIGHTING
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0]
#include<lightFragment>[1]
#include<lightFragment>[2]
#include<lightFragment>[3]
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse= baseColor.rgb;
#endif
vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/normal/normal.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{normalVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="normalVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/normal/normalMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{NormalMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/normal/normal.fragment.ts"),f("../../../dev/materials/src/normal/normal.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.LIGHT0=!1,e.LIGHT1=!1,e.LIGHT2=!1,e.LIGHT3=!1,e.SPOTLIGHT0=!1,e.SPOTLIGHT1=!1,e.SPOTLIGHT2=!1,e.SPOTLIGHT3=!1,e.HEMILIGHT0=!1,e.HEMILIGHT1=!1,e.HEMILIGHT2=!1,e.HEMILIGHT3=!1,e.DIRLIGHT0=!1,e.DIRLIGHT1=!1,e.DIRLIGHT2=!1,e.DIRLIGHT3=!1,e.POINTLIGHT0=!1,e.POINTLIGHT1=!1,e.POINTLIGHT2=!1,e.POINTLIGHT3=!1,e.SHADOW0=!1,e.SHADOW1=!1,e.SHADOW2=!1,e.SHADOW3=!1,e.SHADOWS=!1,e.SHADOWESM0=!1,e.SHADOWESM1=!1,e.SHADOWESM2=!1,e.SHADOWESM3=!1,e.SHADOWPOISSON0=!1,e.SHADOWPOISSON1=!1,e.SHADOWPOISSON2=!1,e.SHADOWPOISSON3=!1,e.SHADOWPCF0=!1,e.SHADOWPCF1=!1,e.SHADOWPCF2=!1,e.SHADOWPCF3=!1,e.SHADOWPCSS0=!1,e.SHADOWPCSS1=!1,e.SHADOWPCSS2=!1,e.SHADOWPCSS3=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.LIGHTING=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.diffuseColor=new i.Color3(1,1,1),o._disableLighting=!1,o._maxSimultaneousLights=4,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaBlendingForMesh=function(e){return this.needAlphaBlending()||e.visibility<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,l.texturesEnabled&&this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())n._needUVs=!0,n.DIFFUSE=!0;else return!1;if((0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=!0,(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),n.LIGHTING=!this._disableLighting,(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="normal",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant"],A=["diffuseSampler"],L=[];(0,i.addClipPlaneUniforms)(y),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:4}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this.diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),(0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this.diffuseTexture===e)},t.prototype.dispose=function(e){this.diffuseTexture&&this.diffuseTexture.dispose(),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.NormalMaterial",e},t.prototype.getClassName=function(){return"NormalMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.NormalMaterial",g)},"../../../dev/materials/src/shadowOnly/index.ts":(P,d,f)=>{f.r(d),f.d(d,{ShadowOnlyMaterial:()=>s.ShadowOnlyMaterial});var s=f("../../../dev/materials/src/shadowOnly/shadowOnlyMaterial.ts")},"../../../dev/materials/src/shadowOnly/shadowOnly.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{shadowOnlyPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="shadowOnlyPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform float alpha;uniform vec3 shadowColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..1]
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/shadowOnly/shadowOnly.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{shadowOnlyVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="shadowOnlyVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/shadowOnly/shadowOnlyMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{ShadowOnlyMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/shadowOnly/shadowOnly.fragment.ts"),f("../../../dev/materials/src/shadowOnly/shadowOnly.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.POINTSIZE=!1,e.FOG=!1,e.NORMAL=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o._needAlphaBlending=!0,o.shadowColor=i.Color3.Black(),o}return t.prototype.needAlphaBlending=function(){return this._needAlphaBlending},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},Object.defineProperty(t.prototype,"activeLight",{get:function(){return this._activeLight},set:function(e){this._activeLight=e},enumerable:!1,configurable:!0}),t.prototype._getFirstShadowLightForMesh=function(e){for(var r=0,o=e.lightSources;r<o.length;r++){var a=o[r];if(a.shadowEnabled)return a}return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a,n=r._drawWrapper;if(this.isFrozen&&n.effect&&n._wasPreviouslyReady&&n._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var l=r.materialDefines,S=this.getScene();if(this._isReadyForSubMesh(r))return!0;var T=S.getEngine();if(this._activeLight)for(var _=0,C=e.lightSources;_<C.length;_++){var D=C[_];if(D.shadowEnabled){if(this._activeLight===D)break;var y=e.lightSources.indexOf(this._activeLight);y!==-1&&(e.lightSources.splice(y,1),e.lightSources.splice(0,0,this._activeLight));break}}(0,i.PrepareDefinesForFrameBoundValues)(S,T,this,l,!!o),(0,i.PrepareDefinesForMisc)(e,S,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),l),l._needNormals=(0,i.PrepareDefinesForLights)(S,e,l,!1,1);var A=(a=this._getFirstShadowLightForMesh(e))===null||a===void 0?void 0:a.getShadowGenerator();if(this._needAlphaBlending=!0,A&&A.getClassName&&A.getClassName()==="CascadedShadowGenerator"){var L=A;this._needAlphaBlending=!L.autoCalcDepthBounds}if((0,i.PrepareDefinesForAttributes)(e,l,!1,!0),l.isDirty){l.markAsProcessed(),S.resetCachedMaterial();var N=new i.EffectFallbacks;l.FOG&&N.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(l,N,1),l.NUM_BONE_INFLUENCERS>0&&N.addCPUSkinningFallback(0,e),l.IMAGEPROCESSINGPOSTPROCESS=S.imageProcessingConfiguration.applyByPostProcess;var z=[i.VertexBuffer.PositionKind];l.NORMAL&&z.push(i.VertexBuffer.NormalKind),(0,i.PrepareAttributesForBones)(z,e,l,N),(0,i.PrepareAttributesForInstances)(z,l);var W="shadowOnly",Q=l.toString(),j=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","alpha","shadowColor","mBones","logarithmicDepthConstant"],J=[],X=[];(0,i.addClipPlaneUniforms)(j),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:j,uniformBuffersNames:X,samplers:J,defines:l,maxSimultaneousLights:1}),r.setEffect(S.getEngine().createEffect(W,{attributes:z,uniformsNames:j,uniformBuffersNames:X,samplers:J,defines:Q,fallbacks:N,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:1}},T),l,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(l._renderId=S.getRenderId(),n._wasPreviouslyReady=!0,n._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;if(l){if(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&((0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._activeEffect.setFloat("alpha",this.alpha),this._activeEffect.setColor3("shadowColor",this.shadowColor),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),a.lightsEnabled){(0,i.BindLights)(a,r,this._activeEffect,n,1);var S=this._getFirstShadowLightForMesh(r);S&&(S._renderId=-1)}(a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE||n.SHADOWCSM0)&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o)}}},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.ShadowOnlyMaterial",e},t.prototype.getClassName=function(){return"ShadowOnlyMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.ShadowOnlyMaterial",g)},"../../../dev/materials/src/simple/index.ts":(P,d,f)=>{f.r(d),f.d(d,{SimpleMaterial:()=>s.SimpleMaterial});var s=f("../../../dev/materials/src/simple/simpleMaterial.ts")},"../../../dev/materials/src/simple/simple.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{simplePixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="simplePixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif 
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/simple/simple.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{simpleVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="simpleVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/simple/simpleMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{SimpleMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/simple/simple.fragment.ts"),f("../../../dev/materials/src/simple/simple.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.diffuseColor=new i.Color3(1,1,1),o._disableLighting=!1,o._maxSimultaneousLights=4,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,l.texturesEnabled&&this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())n._needUVs=!0,n.DIFFUSE=!0;else return!1;if((0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="simple",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","logarithmicDepthConstant"],A=["diffuseSampler"],L=[];(0,i.addClipPlaneUniforms)(y),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights-1}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this._diffuseTexture&&i.MaterialFlags.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),(0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this.maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._diffuseTexture&&e.push(this._diffuseTexture),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this.diffuseTexture===e)},t.prototype.dispose=function(e){this._diffuseTexture&&this._diffuseTexture.dispose(),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.SimpleMaterial",e},t.prototype.getClassName=function(){return"SimpleMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture")],t.prototype,"_diffuseTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)("diffuse")],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.SimpleMaterial",g)},"../../../dev/materials/src/sky/index.ts":(P,d,f)=>{f.r(d),f.d(d,{SkyMaterial:()=>s.SkyMaterial});var s=f("../../../dev/materials/src/sky/skyMaterial.ts")},"../../../dev/materials/src/sky/sky.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{skyPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="skyPixelShader",h=`precision highp float;varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneFragmentDeclaration>
uniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform float rayleigh;uniform float mieCoefficient;uniform float mieDirectionalG;uniform vec3 sunPosition;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
const float e=2.71828182845904523536028747135266249775724709369995957;const float pi=3.141592653589793238462643383279502884197169;const float n=1.0003;const float N=2.545E25;const float pn=0.035;const vec3 lambda=vec3(680E-9,550E-9,450E-9);const vec3 K=vec3(0.686,0.678,0.666);const float v=4.0;const float rayleighZenithLength=8.4E3;const float mieZenithLength=1.25E3;const float EE=1000.0;const float sunAngularDiameterCos=0.999956676946448443553574619906976478926848692873900859324;const float cutoffAngle=pi/1.95;const float steepness=1.5;vec3 totalRayleigh(vec3 lambda)
{return (8.0*pow(pi,3.0)*pow(pow(n,2.0)-1.0,2.0)*(6.0+3.0*pn))/(3.0*N*pow(lambda,vec3(4.0))*(6.0-7.0*pn));}
vec3 simplifiedRayleigh()
{return 0.0005/vec3(94,40,18);}
float rayleighPhase(float cosTheta)
{ 
return (3.0/(16.0*pi))*(1.0+pow(cosTheta,2.0));}
vec3 totalMie(vec3 lambda,vec3 K,float T)
{float c=(0.2*T )*10E-18;return 0.434*c*pi*pow((2.0*pi)/lambda,vec3(v-2.0))*K;}
float hgPhase(float cosTheta,float g)
{return (1.0/(4.0*pi))*((1.0-pow(g,2.0))/pow(1.0-2.0*g*cosTheta+pow(g,2.0),1.5));}
float sunIntensity(float zenithAngleCos)
{return EE*max(0.0,1.0-exp((-(cutoffAngle-acos(zenithAngleCos))/steepness)));}
float A=0.15;float B=0.50;float C=0.10;float D=0.20;float EEE=0.02;float F=0.30;float W=1000.0;vec3 Uncharted2Tonemap(vec3 x)
{return ((x*(A*x+C*B)+D*EEE)/(x*(A*x+B)+D*F))-EEE/F;}
#if DITHER
#include<helperFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
/**
*--------------------------------------------------------------------------------------------------
* Sky Color
*--------------------------------------------------------------------------------------------------
*/
float sunfade=1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);float rayleighCoefficient=rayleigh-(1.0*(1.0-sunfade));vec3 sunDirection=normalize(sunPosition);float sunE=sunIntensity(dot(sunDirection,up));vec3 betaR=simplifiedRayleigh()*rayleighCoefficient;vec3 betaM=totalMie(lambda,K,turbidity)*mieCoefficient;float zenithAngle=acos(max(0.0,dot(up,normalize(vPositionW-cameraPosition+cameraOffset))));float sR=rayleighZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));float sM=mieZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));vec3 Fex=exp(-(betaR*sR+betaM*sM));float cosTheta=dot(normalize(vPositionW-cameraPosition),sunDirection);float rPhase=rayleighPhase(cosTheta*0.5+0.5);vec3 betaRTheta=betaR*rPhase;float mPhase=hgPhase(cosTheta,mieDirectionalG);vec3 betaMTheta=betaM*mPhase;vec3 Lin=pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*(1.0-Fex),vec3(1.5));Lin*=mix(vec3(1.0),pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up,sunDirection),5.0),0.0,1.0));vec3 direction=normalize(vPositionW-cameraPosition);float theta=acos(direction.y);float phi=atan(direction.z,direction.x);vec2 uv=vec2(phi,theta)/vec2(2.0*pi,pi)+vec2(0.5,0.0);vec3 L0=vec3(0.1)*Fex;float sundisk=smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);L0+=(sunE*19000.0*Fex)*sundisk;vec3 whiteScale=1.0/Uncharted2Tonemap(vec3(W));vec3 texColor=(Lin+L0);texColor*=0.04 ;texColor+=vec3(0.0,0.001,0.0025)*0.3;float g_fMaxLuminance=1.0;float fLumScaled=0.1/luminance; 
float fLumCompressed=(fLumScaled*(1.0+(fLumScaled/(g_fMaxLuminance*g_fMaxLuminance))))/(1.0+fLumScaled); 
float ExposureBias=fLumCompressed;vec3 curr=Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);vec3 retColor=curr*whiteScale;/**
*--------------------------------------------------------------------------------------------------
* Sky Color
*--------------------------------------------------------------------------------------------------
*/
float alpha=1.0;
#ifdef VERTEXCOLOR
retColor.rgb*=vColor.rgb;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#if DITHER
retColor.rgb+=dither(gl_FragCoord.xy,0.5);
#endif
vec4 color=clamp(vec4(retColor.rgb,alpha),0.0,1.0);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/sky/sky.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{skyVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="skyVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
uniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<logDepthDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
gl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#ifdef VERTEXCOLOR
vColor=color;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/sky/skyMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{SkyMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/sky/sky.fragment.ts"),f("../../../dev/materials/src/sky/sky.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.POINTSIZE=!1,e.FOG=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.DITHER=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.luminance=1,o.turbidity=10,o.rayleigh=2,o.mieCoefficient=.005,o.mieDirectionalG=.8,o.distance=500,o.inclination=.49,o.azimuth=.25,o.sunPosition=new i.Vector3(0,100,0),o.useSunPosition=!1,o.cameraOffset=i.Vector3.Zero(),o.up=i.Vector3.Up(),o.dithering=!1,o._cameraPosition=i.Vector3.Zero(),o._skyOrientation=new i.Quaternion,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r){var o=r._drawWrapper;if(this.isFrozen&&o.effect&&o._wasPreviouslyReady)return!0;r.materialDefines||(r.materialDefines=new h);var a=r.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(r))return!0;if((0,i.PrepareDefinesForMisc)(e,n,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,!1,a),(0,i.PrepareDefinesForAttributes)(e,a,!0,!1),a.IMAGEPROCESSINGPOSTPROCESS!==n.imageProcessingConfiguration.applyByPostProcess&&a.markAsMiscDirty(),a.DITHER!==this.dithering&&a.markAsMiscDirty(),a.isDirty){a.markAsProcessed(),n.resetCachedMaterial();var l=new i.EffectFallbacks;a.FOG&&l.addFallback(1,"FOG"),a.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess,a.DITHER=this.dithering;var S=[i.VertexBuffer.PositionKind];a.VERTEXCOLOR&&S.push(i.VertexBuffer.ColorKind);var T="sky",_=["world","viewProjection","view","vFogInfos","vFogColor","logarithmicDepthConstant","pointSize","luminance","turbidity","rayleigh","mieCoefficient","mieDirectionalG","sunPosition","cameraPosition","cameraOffset","up"];(0,i.addClipPlaneUniforms)(_);var C=a.toString();r.setEffect(n.getEngine().createEffect(T,S,_,[],C,l,this.onCompiled,this.onError),a,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(a._renderId=n.getRenderId(),o._wasPreviouslyReady=!0,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;if(l){this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),this._mustRebind(a,l,o)&&((0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a)),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect);var S=a.activeCamera;if(S){var T=S.getWorldMatrix();this._cameraPosition.x=T.m[12],this._cameraPosition.y=T.m[13],this._cameraPosition.z=T.m[14],this._activeEffect.setVector3("cameraPosition",this._cameraPosition)}if(this._activeEffect.setVector3("cameraOffset",this.cameraOffset),this._activeEffect.setVector3("up",this.up),this.luminance>0&&this._activeEffect.setFloat("luminance",this.luminance),this._activeEffect.setFloat("turbidity",this.turbidity),this._activeEffect.setFloat("rayleigh",this.rayleigh),this._activeEffect.setFloat("mieCoefficient",this.mieCoefficient),this._activeEffect.setFloat("mieDirectionalG",this.mieDirectionalG),!this.useSunPosition){var _=Math.PI*(this.inclination-.5),C=2*Math.PI*(this.azimuth-.5);this.sunPosition.x=this.distance*Math.cos(C)*Math.cos(_),this.sunPosition.y=this.distance*Math.sin(-_),this.sunPosition.z=this.distance*Math.sin(C)*Math.cos(_),i.Quaternion.FromUnitVectorsToRef(i.Vector3.UpReadOnly,this.up,this._skyOrientation),this.sunPosition.rotateByQuaternionToRef(this._skyOrientation,this.sunPosition)}this._activeEffect.setVector3("sunPosition",this.sunPosition),this._afterBind(r,this._activeEffect,o)}}},t.prototype.getAnimatables=function(){return[]},t.prototype.dispose=function(e){c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.SkyMaterial",e},t.prototype.getClassName=function(){return"SkyMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serialize)()],t.prototype,"luminance",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"turbidity",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"rayleigh",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"mieCoefficient",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"mieDirectionalG",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"distance",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"inclination",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"azimuth",void 0),(0,s.__decorate)([(0,i.serializeAsVector3)()],t.prototype,"sunPosition",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"useSunPosition",void 0),(0,s.__decorate)([(0,i.serializeAsVector3)()],t.prototype,"cameraOffset",void 0),(0,s.__decorate)([(0,i.serializeAsVector3)()],t.prototype,"up",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"dithering",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.SkyMaterial",g)},"../../../dev/materials/src/terrain/index.ts":(P,d,f)=>{f.r(d),f.d(d,{TerrainMaterial:()=>s.TerrainMaterial});var s=f("../../../dev/materials/src/terrain/terrainMaterial.ts")},"../../../dev/materials/src/terrain/terrain.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{terrainPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="terrainPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform sampler2D textureSampler;uniform vec2 vTextureInfos;uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;
#endif
#ifdef BUMP
uniform sampler2D bump1Sampler;uniform sampler2D bump2Sampler;uniform sampler2D bump3Sampler;
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#ifdef BUMP
#extension GL_OES_standard_derivatives : enable
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 binormal=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(tangent,tangent),dot(binormal,binormal)));return mat3(tangent*invmax,binormal*invmax,normal);}
vec3 perturbNormal(vec3 viewDir,vec3 mixColor)
{vec3 bump1Color=texture2D(bump1Sampler,vTextureUV*diffuse1Infos).xyz;vec3 bump2Color=texture2D(bump2Sampler,vTextureUV*diffuse2Infos).xyz;vec3 bump3Color=texture2D(bump3Sampler,vTextureUV*diffuse3Infos).xyz;bump1Color.rgb*=mixColor.r;bump2Color.rgb=mix(bump1Color.rgb,bump2Color.rgb,mixColor.g);vec3 map=mix(bump2Color.rgb,bump3Color.rgb,mixColor.b);map=map*255./127.-128./127.;mat3 TBN=cotangent_frame(vNormalW*vTextureInfos.y,-viewDir,vTextureUV);return normalize(TBN*map);}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef DIFFUSE
baseColor=texture2D(textureSampler,vTextureUV);
#if defined(BUMP) && defined(DIFFUSE)
normalW=perturbNormal(viewDirectionW,baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);diffuse1Color.rgb*=baseColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,baseColor.g);baseColor.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,baseColor.b);
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor*baseColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/terrain/terrain.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{terrainVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="terrainVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<logDepthDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vTextureInfos.x==0.)
{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}
else
{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/terrain/terrainMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{TerrainMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/terrain/terrain.fragment.ts"),f("../../../dev/materials/src/terrain/terrain.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSE=!1,e.BUMP=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.SPECULARTERM=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.diffuseColor=new i.Color3(1,1,1),o.specularColor=new i.Color3(0,0,0),o.specularPower=64,o._disableLighting=!1,o._maxSimultaneousLights=4,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(l.texturesEnabled){if(!this.mixTexture||!this.mixTexture.isReady())return!1;if(n._needUVs=!0,i.MaterialFlags.DiffuseTextureEnabled){if(!this.diffuseTexture1||!this.diffuseTexture1.isReady()||!this.diffuseTexture2||!this.diffuseTexture2.isReady()||!this.diffuseTexture3||!this.diffuseTexture3.isReady())return!1;n.DIFFUSE=!0}if(this.bumpTexture1&&this.bumpTexture2&&this.bumpTexture3&&i.MaterialFlags.BumpTextureEnabled){if(!this.bumpTexture1.isReady()||!this.bumpTexture2.isReady()||!this.bumpTexture3.isReady())return!1;n._needNormals=!0,n.BUMP=!0}}if((0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var T=new i.EffectFallbacks;n.FOG&&T.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,T,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&T.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var _=[i.VertexBuffer.PositionKind];n.NORMAL&&_.push(i.VertexBuffer.NormalKind),n.UV1&&_.push(i.VertexBuffer.UVKind),n.UV2&&_.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&_.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(_,e,n,T),(0,i.PrepareAttributesForInstances)(_,n);var C="terrain",D=n.toString(),y=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","textureMatrix","diffuse1Infos","diffuse2Infos","diffuse3Infos"],A=["textureSampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","bump1Sampler","bump2Sampler","bump3Sampler","logarithmicDepthConstant"],L=[];(0,i.addClipPlaneUniforms)(y),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(C,{attributes:_,uniformsNames:y,uniformBuffersNames:L,samplers:A,defines:D,fallbacks:T,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("view",a.getViewMatrix()),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this.mixTexture&&(this._activeEffect.setTexture("textureSampler",this._mixTexture),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture.coordinatesIndex,this._mixTexture.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture.getTextureMatrix()),i.MaterialFlags.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale))),i.MaterialFlags.BumpTextureEnabled&&a.getEngine().getCaps().standardDerivatives&&(this._bumpTexture1&&this._activeEffect.setTexture("bump1Sampler",this._bumpTexture1),this._bumpTexture2&&this._activeEffect.setTexture("bump2Sampler",this._bumpTexture2),this._bumpTexture3&&this._activeEffect.setTexture("bump3Sampler",this._bumpTexture3))),(0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),n.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this.maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._mixTexture&&e.push(this._mixTexture),this._diffuseTexture1&&e.push(this._diffuseTexture1),this._diffuseTexture2&&e.push(this._diffuseTexture2),this._diffuseTexture3&&e.push(this._diffuseTexture3),this._bumpTexture1&&e.push(this._bumpTexture1),this._bumpTexture2&&e.push(this._bumpTexture2),this._bumpTexture3&&e.push(this._bumpTexture3),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this._mixTexture===e||this._diffuseTexture1===e||this._diffuseTexture2===e||this._diffuseTexture3===e||this._bumpTexture1===e||this._bumpTexture2===e||this._bumpTexture3===e)},t.prototype.dispose=function(e){this.mixTexture&&this.mixTexture.dispose(),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.TerrainMaterial",e},t.prototype.getClassName=function(){return"TerrainMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsTexture)("mixTexture")],t.prototype,"_mixTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"mixTexture",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture1")],t.prototype,"_diffuseTexture1",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture1",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture2")],t.prototype,"_diffuseTexture2",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture2",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexture3")],t.prototype,"_diffuseTexture3",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTexture3",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("bumpTexture1")],t.prototype,"_bumpTexture1",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture1",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("bumpTexture2")],t.prototype,"_bumpTexture2",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture2",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("bumpTexture3")],t.prototype,"_bumpTexture3",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture3",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"specularColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"specularPower",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.TerrainMaterial",g)},"../../../dev/materials/src/triPlanar/index.ts":(P,d,f)=>{f.r(d),f.d(d,{TriPlanarMaterial:()=>s.TriPlanarMaterial});var s=f("../../../dev/materials/src/triPlanar/triPlanarMaterial.ts")},"../../../dev/materials/src/triPlanar/triPlanarMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{TriPlanarMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/triPlanar/triplanar.fragment.ts"),f("../../../dev/materials/src/triPlanar/triplanar.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.DIFFUSEX=!1,e.DIFFUSEY=!1,e.DIFFUSEZ=!1,e.BUMPX=!1,e.BUMPY=!1,e.BUMPZ=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.SPECULARTERM=!1,e.NORMAL=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.NONUNIFORMSCALING=!1,e.LOGARITHMICDEPTH=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r){var o=c.call(this,e,r)||this;return o.tileSize=1,o.diffuseColor=new i.Color3(1,1,1),o.specularColor=new i.Color3(.2,.2,.2),o.specularPower=64,o._disableLighting=!1,o._maxSimultaneousLights=4,o}return t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&l.texturesEnabled){if(i.MaterialFlags.DiffuseTextureEnabled){for(var T=[this.diffuseTextureX,this.diffuseTextureY,this.diffuseTextureZ],_=["DIFFUSEX","DIFFUSEY","DIFFUSEZ"],C=0;C<T.length;C++)if(T[C])if(T[C].isReady())n[_[C]]=!0;else return!1}if(i.MaterialFlags.BumpTextureEnabled){for(var T=[this.normalTextureX,this.normalTextureY,this.normalTextureZ],_=["BUMPX","BUMPY","BUMPZ"],C=0;C<T.length;C++)if(T[C])if(T[C].isReady())n[_[C]]=!0;else return!1}}if((0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!1,this._maxSimultaneousLights,this._disableLighting),(0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForAttributes)(e,n,!0,!0),n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var D=new i.EffectFallbacks;n.FOG&&D.addFallback(1,"FOG"),(0,i.HandleFallbacksForShadows)(n,D,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&D.addCPUSkinningFallback(0,e),n.IMAGEPROCESSINGPOSTPROCESS=l.imageProcessingConfiguration.applyByPostProcess;var y=[i.VertexBuffer.PositionKind];n.NORMAL&&y.push(i.VertexBuffer.NormalKind),n.VERTEXCOLOR&&y.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(y,e,n,D),(0,i.PrepareAttributesForInstances)(y,n);var A="triplanar",L=n.toString(),N=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","mBones","tileSize"],z=["diffuseSamplerX","diffuseSamplerY","diffuseSamplerZ","normalSamplerX","normalSamplerY","normalSamplerZ","logarithmicDepthConstant"],W=[];(0,i.addClipPlaneUniforms)(N),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:N,uniformBuffersNames:W,samplers:z,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(A,{attributes:y,uniformsNames:N,uniformBuffersNames:W,samplers:z,defines:L,fallbacks:D,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;l&&(this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._activeEffect.setFloat("tileSize",this.tileSize),this._mustRebind(a,l,o)&&(this.diffuseTextureX&&this._activeEffect.setTexture("diffuseSamplerX",this.diffuseTextureX),this.diffuseTextureY&&this._activeEffect.setTexture("diffuseSamplerY",this.diffuseTextureY),this.diffuseTextureZ&&this._activeEffect.setTexture("diffuseSamplerZ",this.diffuseTextureZ),this.normalTextureX&&this._activeEffect.setTexture("normalSamplerX",this.normalTextureX),this.normalTextureY&&this._activeEffect.setTexture("normalSamplerY",this.normalTextureY),this.normalTextureZ&&this._activeEffect.setTexture("normalSamplerZ",this.normalTextureZ),(0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),n.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this.maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),this._afterBind(r,this._activeEffect,o))}},t.prototype.getAnimatables=function(){var e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._diffuseTextureX&&e.push(this._diffuseTextureX),this._diffuseTextureY&&e.push(this._diffuseTextureY),this._diffuseTextureZ&&e.push(this._diffuseTextureZ),this._normalTextureX&&e.push(this._normalTextureX),this._normalTextureY&&e.push(this._normalTextureY),this._normalTextureZ&&e.push(this._normalTextureZ),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this._diffuseTextureX===e||this._diffuseTextureY===e||this._diffuseTextureZ===e||this._normalTextureX===e||this._normalTextureY===e||this._normalTextureZ===e)},t.prototype.dispose=function(e){this.mixTexture&&this.mixTexture.dispose(),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);return e.customType="BABYLON.TriPlanarMaterial",e},t.prototype.getClassName=function(){return"TriPlanarMaterial"},t.Parse=function(e,r,o){return i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o)},(0,s.__decorate)([(0,i.serializeAsTexture)()],t.prototype,"mixTexture",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTextureX")],t.prototype,"_diffuseTextureX",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTextureX",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTexturY")],t.prototype,"_diffuseTextureY",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTextureY",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("diffuseTextureZ")],t.prototype,"_diffuseTextureZ",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"diffuseTextureZ",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("normalTextureX")],t.prototype,"_normalTextureX",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"normalTextureX",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("normalTextureY")],t.prototype,"_normalTextureY",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"normalTextureY",void 0),(0,s.__decorate)([(0,i.serializeAsTexture)("normalTextureZ")],t.prototype,"_normalTextureZ",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"normalTextureZ",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"tileSize",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"specularColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"specularPower",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.TriPlanarMaterial",g)},"../../../dev/materials/src/triPlanar/triplanar.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{triplanarPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="triplanarPixelShader",h=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSEX
varying vec2 vTextureUVX;uniform sampler2D diffuseSamplerX;
#ifdef BUMPX
uniform sampler2D normalSamplerX;
#endif
#endif
#ifdef DIFFUSEY
varying vec2 vTextureUVY;uniform sampler2D diffuseSamplerY;
#ifdef BUMPY
uniform sampler2D normalSamplerY;
#endif
#endif
#ifdef DIFFUSEZ
varying vec2 vTextureUVZ;uniform sampler2D diffuseSamplerZ;
#ifdef BUMPZ
uniform sampler2D normalSamplerZ;
#endif
#endif
#ifdef NORMAL
varying mat3 tangentSpace;
#endif
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(0.,0.,0.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=tangentSpace[2];
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec4 baseNormal=vec4(0.0,0.0,0.0,1.0);normalW*=normalW;
#ifdef DIFFUSEX
baseColor+=texture2D(diffuseSamplerX,vTextureUVX)*normalW.x;
#ifdef BUMPX
baseNormal+=texture2D(normalSamplerX,vTextureUVX)*normalW.x;
#endif
#endif
#ifdef DIFFUSEY
baseColor+=texture2D(diffuseSamplerY,vTextureUVY)*normalW.y;
#ifdef BUMPY
baseNormal+=texture2D(normalSamplerY,vTextureUVY)*normalW.y;
#endif
#endif
#ifdef DIFFUSEZ
baseColor+=texture2D(diffuseSamplerZ,vTextureUVZ)*normalW.z;
#ifdef BUMPZ
baseNormal+=texture2D(normalSamplerZ,vTextureUVZ)*normalW.z;
#endif
#endif
#ifdef NORMAL
normalW=normalize((2.0*baseNormal.xyz-1.0)*tangentSpace);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/triPlanar/triplanar.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{triplanarVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="triplanarVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSEX
varying vec2 vTextureUVX;
#endif
#ifdef DIFFUSEY
varying vec2 vTextureUVY;
#endif
#ifdef DIFFUSEZ
varying vec2 vTextureUVZ;
#endif
uniform float tileSize;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying mat3 tangentSpace;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<logDepthDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef DIFFUSEX
vTextureUVX=worldPos.zy/tileSize;
#endif
#ifdef DIFFUSEY
vTextureUVY=worldPos.xz/tileSize;
#endif
#ifdef DIFFUSEZ
vTextureUVZ=worldPos.xy/tileSize;
#endif
#ifdef NORMAL
vec3 xtan=vec3(0,0,1);vec3 xbin=vec3(0,1,0);vec3 ytan=vec3(1,0,0);vec3 ybin=vec3(0,0,1);vec3 ztan=vec3(1,0,0);vec3 zbin=vec3(0,1,0);vec3 normalizedNormal=normalize(normal);normalizedNormal*=normalizedNormal;vec3 worldBinormal=normalize(xbin*normalizedNormal.x+ybin*normalizedNormal.y+zbin*normalizedNormal.z);vec3 worldTangent=normalize(xtan*normalizedNormal.x+ytan*normalizedNormal.y+ztan*normalizedNormal.z);mat3 normalWorld=mat3(finalWorld);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
worldTangent=normalize((normalWorld*worldTangent).xyz);worldBinormal=normalize((normalWorld*worldBinormal).xyz);vec3 worldNormal=normalize((normalWorld*normalize(normal)).xyz);tangentSpace[0]=worldTangent;tangentSpace[1]=worldBinormal;tangentSpace[2]=worldNormal;
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/water/index.ts":(P,d,f)=>{f.r(d),f.d(d,{WaterMaterial:()=>s.WaterMaterial});var s=f("../../../dev/materials/src/water/waterMaterial.ts")},"../../../dev/materials/src/water/water.fragment.ts":(P,d,f)=>{f.r(d),f.d(d,{waterPixelShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="waterPixelShader",h=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef BUMP
varying vec2 vNormalUV;
#ifdef BUMPSUPERIMPOSE
varying vec2 vNormalUV2;
#endif
uniform sampler2D normalSampler;uniform vec2 vNormalInfos;
#endif
uniform sampler2D refractionSampler;uniform sampler2D reflectionSampler;const float LOG2=1.442695;uniform vec3 cameraPosition;uniform vec4 waterColor;uniform float colorBlendFactor;uniform vec4 waterColor2;uniform float colorBlendFactor2;uniform float bumpHeight;uniform float time;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef BUMP
#ifdef BUMPSUPERIMPOSE
baseColor=0.6*texture2D(normalSampler,vNormalUV)+0.4*texture2D(normalSampler,vec2(vNormalUV2.x,vNormalUV2.y));
#else
baseColor=texture2D(normalSampler,vNormalUV);
#endif
vec3 bumpColor=baseColor.rgb;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
baseColor.rgb*=vNormalInfos.y;
#else
vec3 bumpColor=vec3(1.0);
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec2 perturbation=bumpHeight*(baseColor.rg-0.5);
#ifdef BUMPAFFECTSREFLECTION
vec3 normalW=normalize(vNormalW+vec3(perturbation.x*8.0,0.0,perturbation.y*8.0));if (normalW.y<0.0) {normalW.y=-normalW.y;}
#else
vec3 normalW=normalize(vNormalW);
#endif
#else
vec3 normalW=vec3(1.0,1.0,1.0);vec2 perturbation=bumpHeight*(vec2(1.0,1.0)-0.5);
#endif
#ifdef FRESNELSEPARATE
#ifdef REFLECTION
vec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation*0.5,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);
#ifdef IS_REFRACTION_LINEAR
refractiveColor.rgb=toGammaSpace(refractiveColor.rgb);
#endif
vec2 projectedReflectionTexCoords=clamp(vec2(
vReflectionMapTexCoord.x/vReflectionMapTexCoord.z+perturbation.x*0.3,
vReflectionMapTexCoord.y/vReflectionMapTexCoord.z+perturbation.y
),0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);
#ifdef IS_REFLECTION_LINEAR
reflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);
#endif
vec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=clamp(abs(pow(dot(viewDirectionW,upVector),3.0)),0.05,0.65);float IfresnelTerm=1.0-fresnelTerm;refractiveColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*refractiveColor;reflectiveColor=IfresnelTerm*colorBlendFactor2*waterColor+(1.0-colorBlendFactor2*IfresnelTerm)*reflectiveColor;vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*IfresnelTerm;baseColor=combinedColor;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
#else 
#ifdef REFLECTION
vec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);
#ifdef IS_REFRACTION_LINEAR
refractiveColor.rgb=toGammaSpace(refractiveColor.rgb);
#endif
vec2 projectedReflectionTexCoords=clamp(vReflectionMapTexCoord.xy/vReflectionMapTexCoord.z+perturbation,0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);
#ifdef IS_REFLECTION_LINEAR
reflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);
#endif
vec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=max(dot(viewDirectionW,upVector),0.0);vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*(1.0-fresnelTerm);baseColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*combinedColor;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
#endif
vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#elif defined(IMAGEPROCESSING)
color.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);
#endif
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/water/water.vertex.ts":(P,d,f)=>{f.r(d),f.d(d,{waterVertexShader:()=>g});var s=f("babylonjs/Misc/decorators"),i="waterVertexShader",h=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef BUMP
varying vec2 vNormalUV;
#ifdef BUMPSUPERIMPOSE
varying vec2 vNormalUV2;
#endif
uniform mat4 normalMatrix;uniform vec2 vNormalInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<logDepthDeclaration>
uniform mat4 reflectionViewProjection;uniform vec2 windDirection;uniform float waveLength;uniform float time;uniform float windForce;uniform float waveHeight;uniform float waveSpeed;uniform float waveCount;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef BUMP
if (vNormalInfos.x==0.)
{vNormalUV=vec2(normalMatrix*vec4((uv*1.0)/waveLength+time*windForce*windDirection,1.0,0.0));
#ifdef BUMPSUPERIMPOSE
vNormalUV2=vec2(normalMatrix*vec4((uv*0.721)/waveLength+time*1.2*windForce*windDirection,1.0,0.0));
#endif
}
else
{vNormalUV=vec2(normalMatrix*vec4((uv2*1.0)/waveLength+time*windForce*windDirection ,1.0,0.0));
#ifdef BUMPSUPERIMPOSE
vNormalUV2=vec2(normalMatrix*vec4((uv2*0.721)/waveLength+time*1.2*windForce*windDirection ,1.0,0.0));
#endif
}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
float finalWaveCount=1.0/(waveCount*0.5);
#ifdef USE_WORLD_COORDINATES
vec3 p=worldPos.xyz;
#else
vec3 p=position;
#endif
float newY=(sin(((p.x/finalWaveCount)+time*waveSpeed))*waveHeight*windDirection.x*5.0)
+ (cos(((p.z/finalWaveCount)+ time*waveSpeed))*waveHeight*windDirection.y*5.0);p.y+=abs(newY);
#ifdef USE_WORLD_COORDINATES
gl_Position=viewProjection*vec4(p,1.0);
#else
gl_Position=viewProjection*finalWorld*vec4(p,1.0);
#endif
#ifdef REFLECTION
vRefractionMapTexCoord.x=0.5*(gl_Position.w+gl_Position.x);vRefractionMapTexCoord.y=0.5*(gl_Position.w+gl_Position.y);vRefractionMapTexCoord.z=gl_Position.w;worldPos=reflectionViewProjection*finalWorld*vec4(position,1.0);vReflectionMapTexCoord.x=0.5*(worldPos.w+worldPos.x);vReflectionMapTexCoord.y=0.5*(worldPos.w+worldPos.y);vReflectionMapTexCoord.z=worldPos.w;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;s.ShaderStore.ShadersStore[i]=h;var g={name:i,shader:h}},"../../../dev/materials/src/water/waterMaterial.ts":(P,d,f)=>{f.r(d),f.d(d,{WaterMaterial:()=>g});var s=f("../../../../node_modules/tslib/tslib.es6.mjs"),i=f("babylonjs/Misc/decorators");f("../../../dev/materials/src/water/water.fragment.ts"),f("../../../dev/materials/src/water/water.vertex.ts");var h=function(c){(0,s.__extends)(t,c);function t(){var e=c.call(this)||this;return e.BUMP=!1,e.REFLECTION=!1,e.CLIPPLANE=!1,e.CLIPPLANE2=!1,e.CLIPPLANE3=!1,e.CLIPPLANE4=!1,e.CLIPPLANE5=!1,e.CLIPPLANE6=!1,e.ALPHATEST=!1,e.DEPTHPREPASS=!1,e.POINTSIZE=!1,e.FOG=!1,e.NORMAL=!1,e.UV1=!1,e.UV2=!1,e.VERTEXCOLOR=!1,e.VERTEXALPHA=!1,e.NUM_BONE_INFLUENCERS=0,e.BonesPerMesh=0,e.INSTANCES=!1,e.INSTANCESCOLOR=!1,e.SPECULARTERM=!1,e.LOGARITHMICDEPTH=!1,e.USE_REVERSE_DEPTHBUFFER=!1,e.FRESNELSEPARATE=!1,e.BUMPSUPERIMPOSE=!1,e.BUMPAFFECTSREFLECTION=!1,e.USE_WORLD_COORDINATES=!1,e.IMAGEPROCESSING=!1,e.VIGNETTE=!1,e.VIGNETTEBLENDMODEMULTIPLY=!1,e.VIGNETTEBLENDMODEOPAQUE=!1,e.TONEMAPPING=0,e.CONTRAST=!1,e.EXPOSURE=!1,e.COLORCURVES=!1,e.COLORGRADING=!1,e.COLORGRADING3D=!1,e.SAMPLER3DGREENDEPTH=!1,e.SAMPLER3DBGRMAP=!1,e.DITHER=!1,e.IMAGEPROCESSINGPOSTPROCESS=!1,e.SKIPFINALCOLORCLAMP=!1,e.rebuild(),e}return t}(i.MaterialDefines),g=function(c){(0,s.__extends)(t,c);function t(e,r,o){o===void 0&&(o=new i.Vector2(512,512));var a=c.call(this,e,r)||this;return a.renderTargetSize=o,a.diffuseColor=new i.Color3(1,1,1),a.specularColor=new i.Color3(0,0,0),a.specularPower=64,a._disableLighting=!1,a._maxSimultaneousLights=4,a.windForce=6,a.windDirection=new i.Vector2(0,1),a.waveHeight=.4,a.bumpHeight=.4,a._bumpSuperimpose=!1,a._fresnelSeparate=!1,a._bumpAffectsReflection=!1,a.waterColor=new i.Color3(.1,.1,.6),a.colorBlendFactor=.2,a.waterColor2=new i.Color3(.1,.1,.6),a.colorBlendFactor2=.2,a.waveLength=.1,a.waveSpeed=1,a.waveCount=20,a.disableClipPlane=!1,a._useWorldCoordinatesForWaveDeformation=!1,a._renderTargets=new i.SmartArray(16),a._mesh=null,a._reflectionTransform=i.Matrix.Zero(),a._lastTime=0,a._lastDeltaTime=0,a._createRenderTargets(a.getScene(),o),a.getRenderTargetTextures=function(){return a._renderTargets.reset(),a._renderTargets.push(a._reflectionRTT),a._renderTargets.push(a._refractionRTT),a._renderTargets},a._imageProcessingConfiguration=a.getScene().imageProcessingConfiguration,a._imageProcessingConfiguration&&(a._imageProcessingObserver=a._imageProcessingConfiguration.onUpdateParameters.add(function(){a._markAllSubMeshesAsImageProcessingDirty()})),a}return Object.defineProperty(t.prototype,"hasRenderTargetTextures",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"refractionTexture",{get:function(){return this._refractionRTT},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"reflectionTexture",{get:function(){return this._reflectionRTT},enumerable:!1,configurable:!0}),t.prototype.addToRenderList=function(e){this._refractionRTT&&this._refractionRTT.renderList&&this._refractionRTT.renderList.push(e),this._reflectionRTT&&this._reflectionRTT.renderList&&this._reflectionRTT.renderList.push(e)},t.prototype.removeFromRenderList=function(e){if(this._refractionRTT&&this._refractionRTT.renderList){var r=this._refractionRTT.renderList.indexOf(e);r!==-1&&this._refractionRTT.renderList.splice(r,1)}if(this._reflectionRTT&&this._reflectionRTT.renderList){var r=this._reflectionRTT.renderList.indexOf(e);r!==-1&&this._reflectionRTT.renderList.splice(r,1)}},t.prototype.enableRenderTargets=function(e){var r=e?1:0;this._refractionRTT&&(this._refractionRTT.refreshRate=r),this._reflectionRTT&&(this._reflectionRTT.refreshRate=r)},t.prototype.getRenderList=function(){return this._refractionRTT?this._refractionRTT.renderList:[]},Object.defineProperty(t.prototype,"renderTargetsEnabled",{get:function(){return!(this._refractionRTT&&this._refractionRTT.refreshRate===0)},enumerable:!1,configurable:!0}),t.prototype.needAlphaBlending=function(){return this.alpha<1},t.prototype.needAlphaTesting=function(){return!1},t.prototype.getAlphaTestTexture=function(){return null},t.prototype.isReadyForSubMesh=function(e,r,o){var a=r._drawWrapper;if(this.isFrozen&&a.effect&&a._wasPreviouslyReady&&a._wasPreviouslyUsingInstances===o)return!0;r.materialDefines||(r.materialDefines=new h);var n=r.materialDefines,l=this.getScene();if(this._isReadyForSubMesh(r))return!0;var S=l.getEngine();if(n._areTexturesDirty&&(n._needUVs=!1,l.texturesEnabled)){if(this.bumpTexture&&i.MaterialFlags.BumpTextureEnabled)if(this.bumpTexture.isReady())n._needUVs=!0,n.BUMP=!0;else return!1;i.MaterialFlags.ReflectionTextureEnabled&&(n.REFLECTION=!0)}if((0,i.PrepareDefinesForFrameBoundValues)(l,S,this,n,!!o),(0,i.PrepareDefinesForMisc)(e,l,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),n),n._areMiscDirty&&(n.FRESNELSEPARATE=this._fresnelSeparate,n.BUMPSUPERIMPOSE=this._bumpSuperimpose,n.BUMPAFFECTSREFLECTION=this._bumpAffectsReflection,n.USE_WORLD_COORDINATES=this._useWorldCoordinatesForWaveDeformation),n._needNormals=(0,i.PrepareDefinesForLights)(l,e,n,!0,this._maxSimultaneousLights,this._disableLighting),n._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(n),n.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,n.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}if((0,i.PrepareDefinesForAttributes)(e,n,!0,!0),this._mesh=e,this._waitingRenderList){for(var T=0;T<this._waitingRenderList.length;T++)this.addToRenderList(l.getNodeById(this._waitingRenderList[T]));this._waitingRenderList=null}if(n.isDirty){n.markAsProcessed(),l.resetCachedMaterial();var _=new i.EffectFallbacks;n.FOG&&_.addFallback(1,"FOG"),n.LOGARITHMICDEPTH&&_.addFallback(0,"LOGARITHMICDEPTH"),(0,i.HandleFallbacksForShadows)(n,_,this.maxSimultaneousLights),n.NUM_BONE_INFLUENCERS>0&&_.addCPUSkinningFallback(0,e);var C=[i.VertexBuffer.PositionKind];n.NORMAL&&C.push(i.VertexBuffer.NormalKind),n.UV1&&C.push(i.VertexBuffer.UVKind),n.UV2&&C.push(i.VertexBuffer.UV2Kind),n.VERTEXCOLOR&&C.push(i.VertexBuffer.ColorKind),(0,i.PrepareAttributesForBones)(C,e,n,_),(0,i.PrepareAttributesForInstances)(C,n);var D="water",y=n.toString(),A=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vNormalInfos","mBones","normalMatrix","logarithmicDepthConstant","reflectionViewProjection","windDirection","waveLength","time","windForce","cameraPosition","bumpHeight","waveHeight","waterColor","waterColor2","colorBlendFactor","colorBlendFactor2","waveSpeed","waveCount"],L=["normalSampler","refractionSampler","reflectionSampler"],N=[];i.ImageProcessingConfiguration&&(i.ImageProcessingConfiguration.PrepareUniforms(A,n),i.ImageProcessingConfiguration.PrepareSamplers(L,n)),(0,i.addClipPlaneUniforms)(A),(0,i.PrepareUniformsAndSamplersList)({uniformsNames:A,uniformBuffersNames:N,samplers:L,defines:n,maxSimultaneousLights:this.maxSimultaneousLights}),r.setEffect(l.getEngine().createEffect(D,{attributes:C,uniformsNames:A,uniformBuffersNames:N,samplers:L,defines:y,fallbacks:_,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights}},S),n,this._materialContext)}return!r.effect||!r.effect.isReady()?!1:(n._renderId=l.getRenderId(),a._wasPreviouslyReady=!0,a._wasPreviouslyUsingInstances=!!o,!0)},t.prototype.bindForSubMesh=function(e,r,o){var a=this.getScene(),n=o.materialDefines;if(n){var l=o.effect;if(!(!l||!this._mesh)){this._activeEffect=l,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",a.getTransformMatrix()),(0,i.BindBonesParameters)(r,this._activeEffect),this._mustRebind(a,l,o)&&(this.bumpTexture&&i.MaterialFlags.BumpTextureEnabled&&(this._activeEffect.setTexture("normalSampler",this.bumpTexture),this._activeEffect.setFloat2("vNormalInfos",this.bumpTexture.coordinatesIndex,this.bumpTexture.level),this._activeEffect.setMatrix("normalMatrix",this.bumpTexture.getTextureMatrix())),(0,i.bindClipPlane)(l,this,a),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._useLogarithmicDepth&&(0,i.BindLogDepth)(n,l,a),a.bindEyePosition(l)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*r.visibility),n.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),a.lightsEnabled&&!this.disableLighting&&(0,i.BindLights)(a,r,this._activeEffect,n,this.maxSimultaneousLights),a.fogEnabled&&r.applyFog&&a.fogMode!==i.Scene.FOGMODE_NONE&&this._activeEffect.setMatrix("view",a.getViewMatrix()),(0,i.BindFogParameters)(a,r,this._activeEffect),(0,i.BindLogDepth)(n,this._activeEffect,a),i.MaterialFlags.ReflectionTextureEnabled&&(this._activeEffect.setTexture("refractionSampler",this._refractionRTT),this._activeEffect.setTexture("reflectionSampler",this._reflectionRTT));var S=this._reflectionTransform.multiply(a.getProjectionMatrix()),T=a.getEngine().getDeltaTime();T!==this._lastDeltaTime&&(this._lastDeltaTime=T,this._lastTime+=this._lastDeltaTime),this._activeEffect.setMatrix("reflectionViewProjection",S),this._activeEffect.setVector2("windDirection",this.windDirection),this._activeEffect.setFloat("waveLength",this.waveLength),this._activeEffect.setFloat("time",this._lastTime/1e5),this._activeEffect.setFloat("windForce",this.windForce),this._activeEffect.setFloat("waveHeight",this.waveHeight),this._activeEffect.setFloat("bumpHeight",this.bumpHeight),this._activeEffect.setColor4("waterColor",this.waterColor,1),this._activeEffect.setFloat("colorBlendFactor",this.colorBlendFactor),this._activeEffect.setColor4("waterColor2",this.waterColor2,1),this._activeEffect.setFloat("colorBlendFactor2",this.colorBlendFactor2),this._activeEffect.setFloat("waveSpeed",this.waveSpeed),this._activeEffect.setFloat("waveCount",this.waveCount),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect),this._afterBind(r,this._activeEffect,o)}}},t.prototype._createRenderTargets=function(e,r){var o=this;this._refractionRTT=new i.RenderTargetTexture(name+"_refraction",{width:r.x,height:r.y},e,!1,!0),this._refractionRTT.wrapU=i.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.wrapV=i.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.ignoreCameraViewport=!0;var a=!1;this._refractionRTT.onBeforeRenderObservable.add(function(){a=e.getBoundingBoxRenderer().enabled,e.getBoundingBoxRenderer().enabled=!1}),this._refractionRTT.onAfterRenderObservable.add(function(){e.getBoundingBoxRenderer().enabled=a}),this._reflectionRTT=new i.RenderTargetTexture(name+"_reflection",{width:r.x,height:r.y},e,!1,!0),this._reflectionRTT.wrapU=i.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.wrapV=i.Constants.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.ignoreCameraViewport=!0;var n,l=null,S,T=i.Matrix.Zero();this._refractionRTT.onBeforeRender=function(){if(o._mesh&&(n=o._mesh.isVisible,o._mesh.isVisible=!1),!o.disableClipPlane){l=e.clipPlane;var _=o._mesh?o._mesh.absolutePosition.y:0;e.clipPlane=i.Plane.FromPositionAndNormal(new i.Vector3(0,_+.05,0),new i.Vector3(0,1,0))}},this._refractionRTT.onAfterRender=function(){o._mesh&&(o._mesh.isVisible=n),o.disableClipPlane||(e.clipPlane=l)},this._reflectionRTT.onBeforeRender=function(){if(o._mesh&&(n=o._mesh.isVisible,o._mesh.isVisible=!1),!o.disableClipPlane){l=e.clipPlane;var _=o._mesh?o._mesh.absolutePosition.y:0;e.clipPlane=i.Plane.FromPositionAndNormal(new i.Vector3(0,_-.05,0),new i.Vector3(0,-1,0)),i.Matrix.ReflectionToRef(e.clipPlane,T)}S=e.getViewMatrix(),T.multiplyToRef(S,o._reflectionTransform),e.setTransformMatrix(o._reflectionTransform,e.getProjectionMatrix()),e._mirroredCameraPosition=i.Vector3.TransformCoordinates(e.activeCamera.position,T)},this._reflectionRTT.onAfterRender=function(){o._mesh&&(o._mesh.isVisible=n),e.clipPlane=l,e.setTransformMatrix(S,e.getProjectionMatrix()),e._mirroredCameraPosition=null}},t.prototype.getAnimatables=function(){var e=[];return this.bumpTexture&&this.bumpTexture.animations&&this.bumpTexture.animations.length>0&&e.push(this.bumpTexture),this._reflectionRTT&&this._reflectionRTT.animations&&this._reflectionRTT.animations.length>0&&e.push(this._reflectionRTT),this._refractionRTT&&this._refractionRTT.animations&&this._refractionRTT.animations.length>0&&e.push(this._refractionRTT),e},t.prototype.getActiveTextures=function(){var e=c.prototype.getActiveTextures.call(this);return this._bumpTexture&&e.push(this._bumpTexture),e},t.prototype.hasTexture=function(e){return!!(c.prototype.hasTexture.call(this,e)||this._bumpTexture===e)},t.prototype.dispose=function(e){this.bumpTexture&&this.bumpTexture.dispose();var r=this.getScene().customRenderTargets.indexOf(this._refractionRTT);r!=-1&&this.getScene().customRenderTargets.splice(r,1),r=-1,r=this.getScene().customRenderTargets.indexOf(this._reflectionRTT),r!=-1&&this.getScene().customRenderTargets.splice(r,1),this._reflectionRTT&&this._reflectionRTT.dispose(),this._refractionRTT&&this._refractionRTT.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),c.prototype.dispose.call(this,e)},t.prototype.clone=function(e){var r=this;return i.SerializationHelper.Clone(function(){return new t(e,r.getScene())},this)},t.prototype.serialize=function(){var e=c.prototype.serialize.call(this);if(e.customType="BABYLON.WaterMaterial",e.renderList=[],this._refractionRTT&&this._refractionRTT.renderList)for(var r=0;r<this._refractionRTT.renderList.length;r++)e.renderList.push(this._refractionRTT.renderList[r].id);return e},t.prototype.getClassName=function(){return"WaterMaterial"},t.Parse=function(e,r,o){var a=i.SerializationHelper.Parse(function(){return new t(e.name,r)},e,r,o);return a._waitingRenderList=e.renderList,a},t.CreateDefaultMesh=function(e,r){var o=(0,i.CreateGround)(e,{width:512,height:512,subdivisions:32,updatable:!1},r);return o},(0,s.__decorate)([(0,i.serializeAsTexture)("bumpTexture")],t.prototype,"_bumpTexture",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsTexturesDirty")],t.prototype,"bumpTexture",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"diffuseColor",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"specularColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"specularPower",void 0),(0,s.__decorate)([(0,i.serialize)("disableLighting")],t.prototype,"_disableLighting",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"disableLighting",void 0),(0,s.__decorate)([(0,i.serialize)("maxSimultaneousLights")],t.prototype,"_maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsLightsDirty")],t.prototype,"maxSimultaneousLights",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"windForce",void 0),(0,s.__decorate)([(0,i.serializeAsVector2)()],t.prototype,"windDirection",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"waveHeight",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"bumpHeight",void 0),(0,s.__decorate)([(0,i.serialize)("bumpSuperimpose")],t.prototype,"_bumpSuperimpose",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsMiscDirty")],t.prototype,"bumpSuperimpose",void 0),(0,s.__decorate)([(0,i.serialize)("fresnelSeparate")],t.prototype,"_fresnelSeparate",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsMiscDirty")],t.prototype,"fresnelSeparate",void 0),(0,s.__decorate)([(0,i.serialize)("bumpAffectsReflection")],t.prototype,"_bumpAffectsReflection",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsMiscDirty")],t.prototype,"bumpAffectsReflection",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"waterColor",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"colorBlendFactor",void 0),(0,s.__decorate)([(0,i.serializeAsColor3)()],t.prototype,"waterColor2",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"colorBlendFactor2",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"waveLength",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"waveSpeed",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"waveCount",void 0),(0,s.__decorate)([(0,i.serialize)()],t.prototype,"disableClipPlane",void 0),(0,s.__decorate)([(0,i.serialize)("useWorldCoordinatesForWaveDeformation")],t.prototype,"_useWorldCoordinatesForWaveDeformation",void 0),(0,s.__decorate)([(0,i.expandToProperty)("_markAllSubMeshesAsMiscDirty")],t.prototype,"useWorldCoordinatesForWaveDeformation",void 0),t}(i.PushMaterial);(0,i.RegisterClass)("BABYLON.WaterMaterial",g)},"../../../lts/materials/src/legacy/legacy.ts":(P,d,f)=>{f.r(d),f.d(d,{CellMaterial:()=>s.CellMaterial,CustomMaterial:()=>s.CustomMaterial,CustomShaderStructure:()=>s.CustomShaderStructure,FireMaterial:()=>s.FireMaterial,FurMaterial:()=>s.FurMaterial,GradientMaterial:()=>s.GradientMaterial,GridMaterial:()=>s.GridMaterial,LavaMaterial:()=>s.LavaMaterial,MixMaterial:()=>s.MixMaterial,NormalMaterial:()=>s.NormalMaterial,PBRCustomMaterial:()=>s.PBRCustomMaterial,ShaderAlbedoParts:()=>s.ShaderAlbedoParts,ShaderAlebdoParts:()=>s.ShaderAlebdoParts,ShaderSpecialParts:()=>s.ShaderSpecialParts,ShadowOnlyMaterial:()=>s.ShadowOnlyMaterial,SimpleMaterial:()=>s.SimpleMaterial,SkyMaterial:()=>s.SkyMaterial,TerrainMaterial:()=>s.TerrainMaterial,TriPlanarMaterial:()=>s.TriPlanarMaterial,WaterMaterial:()=>s.WaterMaterial});var s=f("../../../dev/materials/src/index.ts"),i=typeof f.g<"u"?f.g:typeof window<"u"?window:void 0;if(typeof i<"u"){i.BABYLON=i.BABYLON||{};for(var h in s)i.BABYLON[h]=s[h]}},"babylonjs/Misc/decorators":P=>{P.exports=k},"../../../../node_modules/tslib/tslib.es6.mjs":(P,d,f)=>{f.r(d),f.d(d,{__addDisposableResource:()=>ae,__assign:()=>h,__asyncDelegator:()=>W,__asyncGenerator:()=>z,__asyncValues:()=>Q,__await:()=>N,__awaiter:()=>l,__classPrivateFieldGet:()=>te,__classPrivateFieldIn:()=>ne,__classPrivateFieldSet:()=>re,__createBinding:()=>T,__decorate:()=>c,__disposeResources:()=>oe,__esDecorate:()=>e,__exportStar:()=>_,__extends:()=>i,__generator:()=>S,__importDefault:()=>ie,__importStar:()=>ee,__makeTemplateObject:()=>j,__metadata:()=>n,__param:()=>t,__propKey:()=>o,__read:()=>D,__rest:()=>g,__rewriteRelativeImportExtension:()=>se,__runInitializers:()=>r,__setFunctionName:()=>a,__spread:()=>y,__spreadArray:()=>L,__spreadArrays:()=>A,__values:()=>C,default:()=>ue});var s=function(u,v){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(m,p){m.__proto__=p}||function(m,p){for(var x in p)Object.prototype.hasOwnProperty.call(p,x)&&(m[x]=p[x])},s(u,v)};function i(u,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");s(u,v);function m(){this.constructor=u}u.prototype=v===null?Object.create(v):(m.prototype=v.prototype,new m)}var h=function(){return h=Object.assign||function(v){for(var m,p=1,x=arguments.length;p<x;p++){m=arguments[p];for(var E in m)Object.prototype.hasOwnProperty.call(m,E)&&(v[E]=m[E])}return v},h.apply(this,arguments)};function g(u,v){var m={};for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&v.indexOf(p)<0&&(m[p]=u[p]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,p=Object.getOwnPropertySymbols(u);x<p.length;x++)v.indexOf(p[x])<0&&Object.prototype.propertyIsEnumerable.call(u,p[x])&&(m[p[x]]=u[p[x]]);return m}function c(u,v,m,p){var x=arguments.length,E=x<3?v:p===null?p=Object.getOwnPropertyDescriptor(v,m):p,M;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")E=Reflect.decorate(u,v,m,p);else for(var I=u.length-1;I>=0;I--)(M=u[I])&&(E=(x<3?M(E):x>3?M(v,m,E):M(v,m))||E);return x>3&&E&&Object.defineProperty(v,m,E),E}function t(u,v){return function(m,p){v(m,p,u)}}function e(u,v,m,p,x,E){function M(H){if(H!==void 0&&typeof H!="function")throw new TypeError("Function expected");return H}for(var I=p.kind,U=I==="getter"?"get":I==="setter"?"set":"value",O=!v&&u?p.static?u:u.prototype:null,F=v||(O?Object.getOwnPropertyDescriptor(O,p.name):{}),b,Z=!1,R=m.length-1;R>=0;R--){var V={};for(var w in p)V[w]=w==="access"?{}:p[w];for(var w in p.access)V.access[w]=p.access[w];V.addInitializer=function(H){if(Z)throw new TypeError("Cannot add initializers after decoration has completed");E.push(M(H||null))};var G=(0,m[R])(I==="accessor"?{get:F.get,set:F.set}:F[U],V);if(I==="accessor"){if(G===void 0)continue;if(G===null||typeof G!="object")throw new TypeError("Object expected");(b=M(G.get))&&(F.get=b),(b=M(G.set))&&(F.set=b),(b=M(G.init))&&x.unshift(b)}else(b=M(G))&&(I==="field"?x.unshift(b):F[U]=b)}O&&Object.defineProperty(O,p.name,F),Z=!0}function r(u,v,m){for(var p=arguments.length>2,x=0;x<v.length;x++)m=p?v[x].call(u,m):v[x].call(u);return p?m:void 0}function o(u){return typeof u=="symbol"?u:"".concat(u)}function a(u,v,m){return typeof v=="symbol"&&(v=v.description?"[".concat(v.description,"]"):""),Object.defineProperty(u,"name",{configurable:!0,value:m?"".concat(m," ",v):v})}function n(u,v){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(u,v)}function l(u,v,m,p){function x(E){return E instanceof m?E:new m(function(M){M(E)})}return new(m||(m=Promise))(function(E,M){function I(F){try{O(p.next(F))}catch(b){M(b)}}function U(F){try{O(p.throw(F))}catch(b){M(b)}}function O(F){F.done?E(F.value):x(F.value).then(I,U)}O((p=p.apply(u,v||[])).next())})}function S(u,v){var m={label:0,sent:function(){if(E[0]&1)throw E[1];return E[1]},trys:[],ops:[]},p,x,E,M=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return M.next=I(0),M.throw=I(1),M.return=I(2),typeof Symbol=="function"&&(M[Symbol.iterator]=function(){return this}),M;function I(O){return function(F){return U([O,F])}}function U(O){if(p)throw new TypeError("Generator is already executing.");for(;M&&(M=0,O[0]&&(m=0)),m;)try{if(p=1,x&&(E=O[0]&2?x.return:O[0]?x.throw||((E=x.return)&&E.call(x),0):x.next)&&!(E=E.call(x,O[1])).done)return E;switch(x=0,E&&(O=[O[0]&2,E.value]),O[0]){case 0:case 1:E=O;break;case 4:return m.label++,{value:O[1],done:!1};case 5:m.label++,x=O[1],O=[0];continue;case 7:O=m.ops.pop(),m.trys.pop();continue;default:if(E=m.trys,!(E=E.length>0&&E[E.length-1])&&(O[0]===6||O[0]===2)){m=0;continue}if(O[0]===3&&(!E||O[1]>E[0]&&O[1]<E[3])){m.label=O[1];break}if(O[0]===6&&m.label<E[1]){m.label=E[1],E=O;break}if(E&&m.label<E[2]){m.label=E[2],m.ops.push(O);break}E[2]&&m.ops.pop(),m.trys.pop();continue}O=v.call(u,m)}catch(F){O=[6,F],x=0}finally{p=E=0}if(O[0]&5)throw O[1];return{value:O[0]?O[1]:void 0,done:!0}}}var T=Object.create?function(u,v,m,p){p===void 0&&(p=m);var x=Object.getOwnPropertyDescriptor(v,m);(!x||("get"in x?!v.__esModule:x.writable||x.configurable))&&(x={enumerable:!0,get:function(){return v[m]}}),Object.defineProperty(u,p,x)}:function(u,v,m,p){p===void 0&&(p=m),u[p]=v[m]};function _(u,v){for(var m in u)m!=="default"&&!Object.prototype.hasOwnProperty.call(v,m)&&T(v,u,m)}function C(u){var v=typeof Symbol=="function"&&Symbol.iterator,m=v&&u[v],p=0;if(m)return m.call(u);if(u&&typeof u.length=="number")return{next:function(){return u&&p>=u.length&&(u=void 0),{value:u&&u[p++],done:!u}}};throw new TypeError(v?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(u,v){var m=typeof Symbol=="function"&&u[Symbol.iterator];if(!m)return u;var p=m.call(u),x,E=[],M;try{for(;(v===void 0||v-- >0)&&!(x=p.next()).done;)E.push(x.value)}catch(I){M={error:I}}finally{try{x&&!x.done&&(m=p.return)&&m.call(p)}finally{if(M)throw M.error}}return E}function y(){for(var u=[],v=0;v<arguments.length;v++)u=u.concat(D(arguments[v]));return u}function A(){for(var u=0,v=0,m=arguments.length;v<m;v++)u+=arguments[v].length;for(var p=Array(u),x=0,v=0;v<m;v++)for(var E=arguments[v],M=0,I=E.length;M<I;M++,x++)p[x]=E[M];return p}function L(u,v,m){if(m||arguments.length===2)for(var p=0,x=v.length,E;p<x;p++)(E||!(p in v))&&(E||(E=Array.prototype.slice.call(v,0,p)),E[p]=v[p]);return u.concat(E||Array.prototype.slice.call(v))}function N(u){return this instanceof N?(this.v=u,this):new N(u)}function z(u,v,m){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var p=m.apply(u,v||[]),x,E=[];return x=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),I("next"),I("throw"),I("return",M),x[Symbol.asyncIterator]=function(){return this},x;function M(R){return function(V){return Promise.resolve(V).then(R,b)}}function I(R,V){p[R]&&(x[R]=function(w){return new Promise(function(G,H){E.push([R,w,G,H])>1||U(R,w)})},V&&(x[R]=V(x[R])))}function U(R,V){try{O(p[R](V))}catch(w){Z(E[0][3],w)}}function O(R){R.value instanceof N?Promise.resolve(R.value.v).then(F,b):Z(E[0][2],R)}function F(R){U("next",R)}function b(R){U("throw",R)}function Z(R,V){R(V),E.shift(),E.length&&U(E[0][0],E[0][1])}}function W(u){var v,m;return v={},p("next"),p("throw",function(x){throw x}),p("return"),v[Symbol.iterator]=function(){return this},v;function p(x,E){v[x]=u[x]?function(M){return(m=!m)?{value:N(u[x](M)),done:!1}:E?E(M):M}:E}}function Q(u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var v=u[Symbol.asyncIterator],m;return v?v.call(u):(u=typeof C=="function"?C(u):u[Symbol.iterator](),m={},p("next"),p("throw"),p("return"),m[Symbol.asyncIterator]=function(){return this},m);function p(E){m[E]=u[E]&&function(M){return new Promise(function(I,U){M=u[E](M),x(I,U,M.done,M.value)})}}function x(E,M,I,U){Promise.resolve(U).then(function(O){E({value:O,done:I})},M)}}function j(u,v){return Object.defineProperty?Object.defineProperty(u,"raw",{value:v}):u.raw=v,u}var J=Object.create?function(u,v){Object.defineProperty(u,"default",{enumerable:!0,value:v})}:function(u,v){u.default=v},X=function(u){return X=Object.getOwnPropertyNames||function(v){var m=[];for(var p in v)Object.prototype.hasOwnProperty.call(v,p)&&(m[m.length]=p);return m},X(u)};function ee(u){if(u&&u.__esModule)return u;var v={};if(u!=null)for(var m=X(u),p=0;p<m.length;p++)m[p]!=="default"&&T(v,u,m[p]);return J(v,u),v}function ie(u){return u&&u.__esModule?u:{default:u}}function te(u,v,m,p){if(m==="a"&&!p)throw new TypeError("Private accessor was defined without a getter");if(typeof v=="function"?u!==v||!p:!v.has(u))throw new TypeError("Cannot read private member from an object whose class did not declare it");return m==="m"?p:m==="a"?p.call(u):p?p.value:v.get(u)}function re(u,v,m,p,x){if(p==="m")throw new TypeError("Private method is not writable");if(p==="a"&&!x)throw new TypeError("Private accessor was defined without a setter");if(typeof v=="function"?u!==v||!x:!v.has(u))throw new TypeError("Cannot write private member to an object whose class did not declare it");return p==="a"?x.call(u,m):x?x.value=m:v.set(u,m),m}function ne(u,v){if(v===null||typeof v!="object"&&typeof v!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof u=="function"?v===u:u.has(v)}function ae(u,v,m){if(v!=null){if(typeof v!="object"&&typeof v!="function")throw new TypeError("Object expected.");var p,x;if(m){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");p=v[Symbol.asyncDispose]}if(p===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");p=v[Symbol.dispose],m&&(x=p)}if(typeof p!="function")throw new TypeError("Object not disposable.");x&&(p=function(){try{x.call(this)}catch(E){return Promise.reject(E)}}),u.stack.push({value:v,dispose:p,async:m})}else m&&u.stack.push({async:!0});return v}var de=typeof SuppressedError=="function"?SuppressedError:function(u,v,m){var p=new Error(m);return p.name="SuppressedError",p.error=u,p.suppressed=v,p};function oe(u){function v(E){u.error=u.hasError?new de(E,u.error,"An error was suppressed during disposal."):E,u.hasError=!0}var m,p=0;function x(){for(;m=u.stack.pop();)try{if(!m.async&&p===1)return p=0,u.stack.push(m),Promise.resolve().then(x);if(m.dispose){var E=m.dispose.call(m.value);if(m.async)return p|=2,Promise.resolve(E).then(x,function(M){return v(M),x()})}else p|=1}catch(M){v(M)}if(p===1)return u.hasError?Promise.reject(u.error):Promise.resolve();if(u.hasError)throw u.error}return x()}function se(u,v){return typeof u=="string"&&/^\.\.?\//.test(u)?u.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(m,p,x,E,M){return p?v?".jsx":".js":x&&(!E||!M)?m:x+E+"."+M.toLowerCase()+"js"}):u}const ue={__extends:i,__assign:h,__rest:g,__decorate:c,__param:t,__esDecorate:e,__runInitializers:r,__propKey:o,__setFunctionName:a,__metadata:n,__awaiter:l,__generator:S,__createBinding:T,__exportStar:_,__values:C,__read:D,__spread:y,__spreadArrays:A,__spreadArray:L,__await:N,__asyncGenerator:z,__asyncDelegator:W,__asyncValues:Q,__makeTemplateObject:j,__importStar:ee,__importDefault:ie,__classPrivateFieldGet:te,__classPrivateFieldSet:re,__classPrivateFieldIn:ne,__addDisposableResource:ae,__disposeResources:oe,__rewriteRelativeImportExtension:se}}},Y={};function B(P){var d=Y[P];if(d!==void 0)return d.exports;var f=Y[P]={exports:{}};return q[P](f,f.exports,B),f.exports}B.n=P=>{var d=P&&P.__esModule?()=>P.default:()=>P;return B.d(d,{a:d}),d},B.d=(P,d)=>{for(var f in d)B.o(d,f)&&!B.o(P,f)&&Object.defineProperty(P,f,{enumerable:!0,get:d[f]})},B.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),B.o=(P,d)=>Object.prototype.hasOwnProperty.call(P,d),B.r=P=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(P,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(P,"__esModule",{value:!0})};var K={};return(()=>{/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/B.r(K),B.d(K,{default:()=>d,materials:()=>P});var P=B("../../../lts/materials/src/legacy/legacy.ts");const d=P})(),K=K.default,K})())})(fe);var me=fe.exports;export{me as b};
