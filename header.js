//引入需要的组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    PixelRatio
} from 'react-native'

//创建自定义组件header
export default class header extends Component {
    render() {
        return (
            <View style={style.flex}>
                <Image style={style.images}>
                    <Image source={require('./imgs/1.jpg')} />
                </Image>
                <Text style={style.font}>
                    <Text style={style.font1}>WHUT</Text>
                    <Text style={style.font2}>@CONNECT</Text>
                </Text>
            </View>
        );
    }
}

//创建样式表
style = StyleSheet.create({
    flex: {
        marginTop: 0,
        height: 65,
        borderBottomWidth: 3 / PixelRatio.get(),
        //borderBottomColor: '#EF2D36',
        alignItems: 'center',
    },
    images: {
        marginTop: 0,
        height: 65,
        alignItems: 'center'
    },
    font: {
        marginTop: -38,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    font1: {
        fontFamily: "arial",
        color: '#fff',
        fontWeight: '600',
    },
    font2: {
        color: '#fff',
        fontWeight: '300',
        //backgroundColor: '#FFA000'
    }
});