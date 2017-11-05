import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';



var bookname = ['离开的，留下的', 
                '欧亚皇家狩猎史', 
                '指匠',
                'Fate Number'];


export default class whyBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //当前显示的图片索引
            currentIndex: 0,
            //在线图片数据
            imgDate: [
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2440211993,1922957275&fm=11&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3032209120,3837775318&fm=11&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=691257921,1640470809&fm=27&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=398952501,2656845064&fm=27&gp=0.jpg"
            ]
        };
    }

    render() {
        const { imgDate, currentIndex } = this.state;
        const bookList = imgDate.map((elem, index, index_1) => {
            return (
                <View style={styles_why_read.book_container}>
                    <Image style={styles_why_read.header_image}>
                        <Image key={index} style={{ width: 100, height: 120 }} source={{ uri: elem }} />
                    </Image>
                    <Text style={styles_why_read.bookname_title}>
                        <Text key={index_1} numberOfLines={2} style={styles_why_read.bookname_font}>{bookname[index]}</Text>
                    </Text>

                </View>
            )
        });
        return (
            <View style={styles_why_read.background}>
                
                    <View style={styles_why_read.title_container}>
                        <View style={styles_why_read.icon_holder}>
                            <Image style={styles_why_read.icon_style} source={require('./imgs/icon_1.jpg')} />
                        </View>
                        <Text style={styles_why_read.title_font}>
                            <Text style={styles_why_read.news_title}>为什么读书</Text>
                        </Text>
                        <View style={styles_why_read.icon_holder}>
                            <Image style={styles_why_read.icon_style} source={require('./imgs/icon_share.png')} />
                        </View>
                    </View>

                    <View style={styles_why_read.container}>
                    <View style={styles_why_read.bookshelf_container}>
                    <ScrollView
                        ref="scrollView"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={false}
                    >
                        {bookList}
                    </ScrollView>
                </View>
                </View>
            </View>
        );
    }
}


const styles_why_read = StyleSheet.create({
    background: {
        backgroundColor: '#f0f0f0',
    },
    container: {
        marginBottom: 5,
    },
    title_container: {
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    book_container: {
        marginLeft: 10,
        marginLeft: 10,
        marginTop: 12,
        marginBottom: 12,
        height: 180,
        width: 100,
        backgroundColor: 'white',
    },
    bookshelf_container: {
        height: 197,
        width: Dimensions.get('window').width,
        backgroundColor: '#f0f0f0'
    },
    icon_holder: {
        width: 30,
        height: 30,
        marginTop: 7,
        marginLeft: 10
    },
    title_font: {
        marginTop: 12,
        marginLeft: 10,
        width: Dimensions.get('window').width - 30*3.5
    },
    bookname_font: {
        marginLeft: 25,
        fontSize: 16,
        alignItems: 'center'
    },
    icon_style: {
        height: 30,
        width: 30,
    },
    header_image: {
        height: 120,
        width: 100,
        alignItems: 'center'
    },
    bookname_title: {
        marginTop: 10,
        marginLeft: 10,
    },
    newsfeed_title: {
        marginLeft: 25,
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    news_title: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});