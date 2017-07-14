Object.defineProperty(exports,"__esModule",{value:true});exports.RightButton=exports.LeftButton=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/NavBar.js';exports.












renderBackButton=renderBackButton;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _navigationStore=require('./navigationStore');var _navigationStore2=_interopRequireDefault(_navigationStore);var _back_chevron=require('../images/back_chevron.png');var _back_chevron2=_interopRequireDefault(_back_chevron);var _native=require('mobx-react/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function renderBackButton(state){
var textButtonStyle=[
styles.barBackButtonText,
state.backButtonTextStyle];

var style=[
styles.backButton,
state.leftButtonStyle];

var buttonImage=state.backButtonImage||_back_chevron2.default;
var onPress=state.onBack;
if(onPress){
onPress=onPress.bind(null,state);
}else{
onPress=_navigationStore2.default.pop;
}

var text=state.backTitle?
_react2.default.createElement(_reactNative.Text,{style:textButtonStyle,__source:{fileName:_jsxFileName,lineNumber:32}},
state.backTitle):

null;

return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
testID:'backNavButton',
style:{position:'absolute',top:0,left:0,height:50,width:70},
onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:38}},

_react2.default.createElement(_reactNative.View,{style:style,__source:{fileName:_jsxFileName,lineNumber:43}},
buttonImage&&!state.hideBackImage&&_react2.default.createElement(_reactNative.Image,{
source:buttonImage,
style:[
styles.backButtonImage,
state.barButtonIconStyle,
state.leftButtonIconStyle],__source:{fileName:_jsxFileName,lineNumber:44}}),



text)));



}

var LeftButton=exports.LeftButton=function LeftButton(state){
var onPress=state.onLeft;
var buttonImage=getValue(state.leftButtonImage,state);
var menuIcon=state.drawerIcon;
var style=[styles.leftButton,state.leftButtonStyle];
var textStyle=[styles.barLeftButtonText,state.leftButtonTextStyle];
var leftButtonStyle=[styles.defaultImageStyle,state.leftButtonIconStyle];
var leftTitle=state.getLeftTitle?state.getLeftTitle(state):getValue(state.leftTitle,state);
var tintColor=state.tintColor||state.navBarButtonColor||state.headerTintColor;

if(state.leftButton){
var Button=state.leftButton;
return(
_react2.default.createElement(Button,_extends({},
state,{
key:'leftNavBarBtn',
testID:'leftNavButton',
style:[].concat(style,leftButtonStyle),
textStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:72}})));


}

if(onPress&&(leftTitle||buttonImage)){
onPress=onPress.bind(null,state);
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
key:'leftNavBarBtn',
testID:'leftNavButton',
style:style,
onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:85}},

leftTitle&&_react2.default.createElement(_reactNative.Text,{style:textStyle,__source:{fileName:_jsxFileName,lineNumber:91}},
leftTitle),


!leftTitle&&buttonImage&&_react2.default.createElement(_reactNative.View,{style:{flex:1,justifyContent:'center',alignItems:'flex-start'},__source:{fileName:_jsxFileName,lineNumber:95}},
menuIcon||_react2.default.createElement(_reactNative.Image,{
source:buttonImage,
style:[state.leftButtonIconStyle||styles.defaultImageStyle,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:96}}))));






}
if(!!state.onLeft^!!(leftTitle||buttonImage)){
console.warn('Both onLeft and leftTitle/leftButtonImage\n            must be specified for the scene: '+

state.name);

}
return null;
};

function getValue(value,params){
return value instanceof Function?value(params):value;
}

var RightButton=exports.RightButton=function RightButton(state){
var drawer=null;
if(!state){
return null;
}

var onPress=state.onRight;
var buttonImage=getValue(state.rightButtonImage,state);
var menuIcon=state.drawerIcon;
var style=[styles.rightButton,state.rightButtonStyle];
var textStyle=[styles.barRightButtonText,state.rightButtonTextStyle];
var rightButtonStyle=[styles.defaultImageStyle,state.rightButtonIconStyle];
var rightTitle=state.getRightTitle?state.getRightTitle(state):getValue(state.rightTitle,state);

if(state.rightButton||state.right){
var Button=state.rightButton||state.right;
return(
_react2.default.createElement(Button,_extends({},
state,{
key:'rightNavBarBtn',
testID:'rightNavButton',
style:style,
textButtonStyle:textStyle,__source:{fileName:_jsxFileName,lineNumber:136}})));


}

if(!onPress&&!!drawer&&typeof drawer.toggle==='function'&&drawer.props.side==='right'){
buttonImage=state.drawerImage;
if(buttonImage||menuIcon){
onPress=drawer.toggle;
}
if(!menuIcon){
menuIcon=
_react2.default.createElement(_reactNative.Image,{
source:buttonImage,
style:rightButtonStyle,__source:{fileName:_jsxFileName,lineNumber:153}});


}
}

if(onPress&&(rightTitle||buttonImage)){
onPress=onPress.bind(null,state);
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
key:'rightNavBarBtn',
testID:'rightNavButton',
style:style,
onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:164}},

rightTitle&&_react2.default.createElement(_reactNative.Text,{style:textStyle,__source:{fileName:_jsxFileName,lineNumber:170}},
rightTitle),


!rightTitle&&buttonImage&&_react2.default.createElement(_reactNative.View,{style:{flex:1,justifyContent:'center',alignItems:'flex-end'},__source:{fileName:_jsxFileName,lineNumber:174}},
menuIcon||_react2.default.createElement(_reactNative.Image,{
source:buttonImage,
style:state.rightButtonIconStyle||styles.defaultImageStyle,__source:{fileName:_jsxFileName,lineNumber:175}}))));






}
if(!!state.onRight^!!(typeof rightTitle!=='undefined'||
typeof buttonImage!=='undefined')){
console.warn('Both onRight and rightTitle/rightButtonImage\n            must be specified for the scene: '+

state.name);

}
return null;
};
var styles=_reactNative.StyleSheet.create({
title:{
textAlign:'center',
color:'#0A0A0A',
fontSize:18,
width:180,
alignSelf:'center'},

titleImage:{
width:180,
alignSelf:'center'},

titleWrapper:_extends({
marginTop:10,
position:'absolute'},
_reactNative.Platform.select({
ios:{
top:20},

android:{
top:5},

windows:{
top:5}}),{


left:0,
right:0}),

header:_extends({
backgroundColor:'#EFEFF2',
paddingTop:0,
top:0},
_reactNative.Platform.select({
ios:{
height:64},

android:{
height:54},

windows:{
height:54}}),{


right:0,
left:0,
borderBottomWidth:0.5,
borderBottomColor:'#828287',
position:'absolute'}),

backButton:_extends({
position:'absolute'},
_reactNative.Platform.select({
ios:{
top:12},

android:{
top:10},

windows:{
top:8}}),{


left:2,
paddingLeft:8,
flexDirection:'row',
transform:[{scaleX:_reactNative.I18nManager.isRTL?-1:1}]}),

rightButton:_extends({
position:'absolute'},
_reactNative.Platform.select({
ios:{
top:12},

android:{
top:10},

windows:{
top:8}}),{


right:2,
paddingRight:8}),

leftButton:_extends({
position:'absolute'},
_reactNative.Platform.select({
ios:{
top:12},

android:{
top:8},

windows:{
top:8}}),{


left:2,
paddingLeft:8}),

barRightButtonText:{
color:'rgb(0, 122, 255)',
textAlign:'right',
fontSize:17},

barBackButtonText:{
color:'rgb(0, 122, 255)',
textAlign:'left',
fontSize:17,
paddingLeft:6},

barLeftButtonText:{
color:'rgb(0, 122, 255)',
textAlign:'left',
fontSize:17},

backButtonImage:{
width:13,
height:21},

defaultImageStyle:{
height:24,
resizeMode:'contain'}});