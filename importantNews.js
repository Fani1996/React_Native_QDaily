import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';


var globalWidth = 375 - 8*2;

export default class importantNews extends Component {
    show(title) {
        alert(title);
    }
    render() {
        var news = [];
        for (var item of this.props.news) {
            var text = (
                <Text key={item} onPress={this.show.bind(this, item)}
                    numberOfLines={2}
                    style={styles_importanNews.news_item}>
                    {item}
                </Text>
            );
            news.push(text);
        }
        var others = [];
        for (var other_item of this.props.others) {
            var text = (
                <Text key={other_item} onPress={this.show.bind(this, other_item)}
                    numberOfLines={2}
                    style={styles_importanNews.news_item}>
                    {other_item}
                </Text>
            );
            others.push(text);
        }
        return (
            <View style={styles_importanNews.background}>
                    <View style={styles_importanNews.title_container}>
                        <Image style={styles_importanNews.header_image}>
                            <Image source={require('./imgs/3.jpg')} />
                        </Image>
                        <Text style={styles_importanNews.title_font}>
                            <Text style={styles_importanNews.news_title}>今日要闻</Text>
                        </Text>
                    </View>
                    <View style={styles_importanNews.content_container}>
                        <Text style={styles_importanNews.news_subtitle}>过去一段时间里，你需要知道的有：</Text>
                        {news}
                        <Text style={styles_importanNews.news_subtitle}>除此之外，这些也值得一看：</Text>
                        {others}
                    </View>
                    <View style={styles_importanNews.rail_container}>
                    </View>
                    <View style={styles_importanNews.bottom_container}>
                    </View>
            </View>
        );
    }
}


styles_importanNews = StyleSheet.create({
    background: {
        backgroundColor: '#f0f0f0'
    },
    title_container: {
        height: 50,
        width: globalWidth,
        marginTop:5,
        marginLeft:8,
        borderRadius: 6,
        backgroundColor: 'transparent'
    },
    content_container: {
        width: globalWidth,
        marginLeft: 8,
        marginTop: -6,
        backgroundColor: '#fff'
    },
    rail_container: {
        height: 8,
        width: globalWidth,
        marginLeft: 8,
        backgroundColor: '#fff'
    },
    bottom_container: {
        height: 16,
        width: globalWidth,
        marginTop: -6,
        marginLeft: 8,
        borderRadius: 6,
        marginBottom: 8,
        backgroundColor: '#fff'
    },
    header_image: {
        height: 50,
        width: globalWidth, 
        borderRadius: 6,
        alignItems: 'center'
    },
    title_font: {
        marginTop: -33,
        marginLeft: 10,
    },
    news_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    news_subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 10
    },
    news_item: {
        marginTop: 0,
        marginLeft: 25,
        marginRight: 10,
        fontSize: 14,
        lineHeight: 20
    },
});