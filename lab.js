import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions
} from 'react-native';



export default class importantNews extends Component {
    render() {
        return (
            <View style={styles_lab.background}>
                <View style={styles_lab.title_container}>
                    <View style={styles_lab.icon_holder}>
                        <Image style={styles_lab.icon_style} source={require('./imgs/icon_1.jpg')} />
                    </View>
                    <Text style={styles_lab.title_font}>
                        <Text style={styles_lab.news_title}>好奇心研究所</Text>
                    </Text>
                    <View style={styles_lab.icon_holder}>
                        <Image style={styles_lab.icon_style} source={require('./imgs/icon_share.png')} />
                    </View>
                </View>
                <View style={styles_lab.content_container}>
                    <Image style={styles_lab.imgs_style} source={require('./imgs/1.jpg')} />
                    <Text style={styles_lab.news_title}>相比和事佬型宽容，你觉得理性的宽容是什么样？</Text>
                    <Text numberOfLines={2} style={styles_lab.news_subtitle}>“来都来了““想想孩子“”给个面子”“都不容易“”差不多得了”…还是整点有用的吧。</Text>
                </View>
                <View style={styles_lab.content_container}>
                    <Image style={styles_lab.imgs_style} source={require('./imgs/2.jpg')} />
                    <Text style={styles_lab.news_title}>记得Twitter老板的另一家公司Squre吗？它的价值可能更大</Text>
                    <Text numberOfLines={2} style={styles_lab.news_subtitle}>Twitter也许是特朗普总统最喜欢的平台，但杰克·多西尔的另一家支付公司Squre最近几个季度要成功得多。</Text>
                </View>
            </View>
        );
    }
}


styles_lab = StyleSheet.create({
    background: {
        backgroundColor: '#f0f0f0'
    },
    title_container: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    content_container: {
        marginBottom: 5,
        backgroundColor: '#fff'
    },
    icon_holder: {
        width: 30,
        height: 30,
        marginTop: 6,
        marginLeft: 10
    },
    title_font: {
        marginTop: 10,
        marginLeft: 10,
        width: Dimensions.get('window').width - 30*3.5
    },
    news_title: {
        marginTop: 20,
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    news_subtitle: {
        fontSize: 13,
        fontWeight: '400',
        color: 'black',
        marginLeft: 15,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 15
    },
    news_item: {
        marginTop: 0,
        marginLeft: 25,
        marginRight: 10,
        fontSize: 14,
        lineHeight: 20
    },
    icon_style: {
        height: 30,
        width: 30,
    },
    imgs_style: {
        height: 200,
        width: Dimensions.get('window').width
    }
});