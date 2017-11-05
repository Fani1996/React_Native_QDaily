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


var Heder_images_Height = 240;
var news_feed = ['360在A股借壳上市', '美国人认为，Facebook对\n美国之外的社会影响更令人忧虑', '房价10年里涨50%，\n新西兰明年禁止外国人买现有住房'];

export default class headerImgsRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //当前显示的图片索引
            currentIndex: 0,
            //在线图片数据
            imgDate: [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494233305839&di=e1647289d1fcd778f64ddf3ccaf6fcfa&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1016%2Fgha%2F1%2F1350006791532.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494232883125&di=c8234065f7872532308c5396e0fcd3b8&imgtype=0&src=http%3A%2F%2Fimg1.91.com%2Fuploads%2Fallimg%2F130514%2F32-1305141I359.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494236734637&di=bb81b0fa9b2040542a4a6f9fcc2d0359&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2012%2F1016%2Fgha%2F1%2F1350006753179.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494236802350&di=72da30f79403ec28b124424f2c24a9f6&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2014%2Flxy%2F2014%2F09%2F16%2F8.jpg"
            ]
        };
        this.carousel = this.carousel.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.onAnnotationEnd = this.onAnnotationEnd.bind(this)
    }
    componentDidMount() {
        this.carousel()
    }
    //点击圆点，关闭定时器，并设置当前图片索引
    dotClick(index) {
        clearInterval(this.carouselTimer);
        this.setState({
            currentIndex: index
        }, () => {
            var ScrollView = this.refs.scrollView;
            const currentX = this.state.currentIndex * Dimensions.get('window').width;
            ScrollView.scrollResponderScrollTo({ x: currentX, animated: true })
        })
    }
    //开始拖动，关闭定时器
    dragStart() {
        clearInterval(this.carouselTimer);
    }
    //拖动结束，开启定时器
    dragEnd() {
        this.carousel()
    }
    //定时器
    carousel() {
        var ScrollView = this.refs.scrollView;
        const timer = 4000;
        let currentIndex = this.state.currentIndex;

        this.carouselTimer = setInterval(() => {
            currentIndex === this.state.imgDate.length - 1 ? currentIndex = 0 : currentIndex++
            this.setState({
                currentIndex: currentIndex
            }, () => {
                const currentX = currentIndex * Dimensions.get('window').width;
                ScrollView.scrollResponderScrollTo({ x: currentX, animated: true })
            })
        }, timer)

    }
    //当一帧滚动完毕时，重新设置当前图片的索引
    onAnnotationEnd(e) {
        const offSetX = e.nativeEvent.contentOffset.x;
        const currentIndex = offSetX / Dimensions.get('window').width;
        this.setState({
            currentIndex: currentIndex
        })
    }

    render() {
        const { imgDate, currentIndex } = this.state;
        const screenWidth = Dimensions.get('window').width;
        const imgDataList = imgDate.map((elem, index) => {
            return (
                <View style={styles_headerImgsRoll.title_container}>
                    <Image style={styles_headerImgsRoll.header_image}>
                        <Image key={index} style={{ width: screenWidth, height: Heder_images_Height }} source={{ uri: elem }} />
                    </Image>
                    <Text style={styles_headerImgsRoll.newsfeed_font}>
                        <Text key={index} numberOfLines={2} style={styles_headerImgsRoll.newsfeed_title}>{news_feed[index]}</Text>
                    </Text>
                </View>
            )
        });
        const dotList = imgDate.map((elem, index) => {
            return (
                <Text onPress={this.dotClick.bind(this, index)} key={index} style={[styles_headerImgsRoll.dotStyle, { backgroundColor: currentIndex === index ? "#efc739" : "#f4f4f4" }]}></Text>
            )
        })
        return (
            <View style={styles_headerImgsRoll.background}>
                <View style={styles_headerImgsRoll.container}>
                    <ScrollView
                        ref="scrollView"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onScrollBeginDrag={this.dragStart}
                        onScrollEndDrag={this.dragEnd}
                        onMomentumScrollEnd={this.onAnnotationEnd}
                    >
                        {imgDataList}
                    </ScrollView>
                    <View style={styles_headerImgsRoll.dotView}>{dotList}</View>
                </View>
            </View>
        );
    }
}

const styles_headerImgsRoll = StyleSheet.create({
    background: {
        backgroundColor: '#f0f0f0',
    },
    container: {
        marginBottom: 5,
    },
    title_container: {
        height: Heder_images_Height,
        backgroundColor: 'transparent'
    },
    header_image: {
        height: Heder_images_Height,
        alignItems: 'center'
    },
    newsfeed_font: {
        marginTop: -78,
        marginLeft: 10,
    },
    newsfeed_title: {
        marginLeft: 25,
        fontSize: 22,
        fontWeight: '500',
        color: 'white',
    },
    dotStyle: {
        width: 6,
        height: 6,
        borderRadius: 4,
        marginLeft: 12,
    },
    dotView: {
        flexDirection: 'row',
        position: 'absolute',
        left: (Dimensions.get('window').width / 2) - 12 * 2.5 - 6 * 2,
        bottom: 10
    }
});