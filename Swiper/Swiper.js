
import React,{ Component } from 'react';
import {
    Text,
    View,
    Animated,
    PanResponder,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height:240,
        backgroundColor:'gray',
    },
    item: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
    },

});

export default class Swiper extends Component {
    position = new Animated.Value(0);//当前在那一页
    positionValue = 0;
    state = {
        width:null,
    }
    constructor(props){
        super(props);
        this.position.addListener(v => {
            this.positionValue = v.value;
        })
    }
    responder = PanResponder.create({
        onStartShouldSetResponder:(evt,gestureState)=>false,
        onStartShouldSetResponderCapture:(evt,gestureState)=>false,
        onMoveShouldSetPanResponder:(evt,gestureState)=>true,
        onMoveShouldSetPanResponderCapture:(evt,gestureState)=>{
            return true;
        },
       _onPanResponderTerminationRequest:(evt,gestureState) => false,
        onPanResponderGrant:(evt,gestureState) => {
            this.position.setOffset(this.positionValue);
            this.position.setValue(0);
        },
        onPanResponderMove:(evt,{dx})=>{
            this.position.setValue(dx / -this.state.width);
        },
        onPanResponderRelease:(evt,{vx}) => {
            this.position.flattenOffset();
            const childrenCount = React.Children.count(this.props.children);
            // const left = Math.max(0,Math.floor(this.positionValue));
            // const right = Math.min(childrenCount-1,left+1);
            const left = Math.floor(this.positionValue);
            const right = left+1;
            let result;
            if (vx > 0.05){
                result = left;
            }else if(vx < -0.05) {
                result = right;
            }else {
                result = Math.round(this.positionValue);
            }
            if (result < 0){
                result += childrenCount;
                this.position.setValue(this.positionValue + childrenCount);
            }else if (result >= childrenCount) {
                result -= childrenCount;
                this.position.setValue(this.positionValue - childrenCount);
            }
            Animated.spring(this.position,{
                toValue:result,
            }).start();

        },
    })
    onLayout=(ev)=>{
       const width = ev.nativeEvent.layout.width;
        if (width !== this.state.width) {
            this.setState({
                width,
            });
        }
    }
    render(){
        const { style,children } = this.props;
        const { width } = this.state;
        if (!width) {
            <View style={[].concat(style,styles.container)} onLayout={this.onLayout}></View>
        }
        const r = Math.sqrt(3) * width;
        return(
            <View
                style={[].concat(style,styles.container)}
                onLayout={this.onLayout}
                {...this.responder.panHandlers}
            >
                {
                    React.Children.map(children,(child,i)=>{
                        return(
                            <Animated.View key={i} style={[styles.item,{
                                transform:[
                                    {perspective:850},
                                    {scale:0.6},
                                    {rotateY:'90deg'},
                                    {translateX:r},
                                    {rotateY:'-90deg'},
                                    //{translateX:width*0.5},
                                    {rotateY:this.position.interpolate({
                                        inputRange:[i,i+1],
                                        outputRange:['0deg','-60deg'],
                                    })},
                                    {rotateY:'-90deg'},
                                    {translateX:r},
                                    {rotateY:'90deg'},
                                    ]
                            }]}>
                                {child}
                            </Animated.View>
                        )
                    })
                }
            </View>
        )
    }
}
// transform:[
//     {scale:0.5},
//     {translateX:this.position.interpolate({
//         inputRange:[i,i+1],
//         outputRange:[0,-width],
//     })
//     }]