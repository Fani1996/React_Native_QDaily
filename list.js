//引入需要的组件
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';


var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ListHeight = 115;
var imageStrechRatio = 1.5;
var marginLeft = 0;

//创建自定义组件list
export default class list extends Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.text_container}>
                        <View style={styles.item_text_holder}>
                            <Text style={styles.text_font}>{this.props.title}</Text>
                        </View>
                        <View style={styles.item_subtext_holder}>
                            <Text style={styles.subtext_font}>{this.props.subtitle}</Text>
                        </View>
                    </View>
                    <View style={styles.item_images_holder}>
                        <Image style={styles.list_images} source={this.props.source} />
                    </View>
                </View>
            </View>
        );
    }
}

//创建样式表
styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0f0f0'
    },
    container: {
        marginTop: 0,
        marginLeft: marginLeft,
        marginRight: marginLeft,
        marginBottom: 5,
        height: ListHeight,
        padding: 0,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    text_container: {
        width: ScreenWidth - marginLeft * 3 - ListHeight * imageStrechRatio,
        flexDirection: 'column',
    },
    item_text_holder: {
        marginTop: 17,
        marginLeft: 12,
        marginRight: 10,
        width: ScreenWidth - marginLeft * 3 - ListHeight * imageStrechRatio - 30,
        height: ListHeight / 2
    },
    item_subtext_holder: {
        marginTop: 20,
        marginLeft: 12,
        marginRight: 5,
        width: ScreenWidth - marginLeft * 3 - ListHeight * imageStrechRatio,
        height: ListHeight / 2
    },
    item_images_holder: {
        width: ListHeight * imageStrechRatio,
        height: ListHeight
    },
    text_font: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
    },
    subtext_font: {
        fontSize: 10,
        fontWeight: '300',
        textAlign: 'left',
    },
    list_images: {
        height: ListHeight,
        width: ListHeight * imageStrechRatio,
    }
});