import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Header from './header';
import List from './list';
import ImportantNews from './importantNews';
import HeaderImgsRoll from './header_imgs_roll';
import Lab from './lab';
import WhyBook from './why_read';



export default class news_test extends Component {
  render() {
    return (
      <View>
        <Header>
        </Header>

        <ScrollView
          ref="scrollView"
          horizontal={false}
          showsHorizontalScrollIndicator={true}
          pagingEnabled={false}
          onScrollBeginDrag={this.dragStart}
          onScrollEndDrag={this.dragEnd}
          onMomentumScrollEnd={this.onAnnotationEnd}
        >
          <View>

            <HeaderImgsRoll>
            </HeaderImgsRoll>

            <List title='360在A股借壳上市，估值不及他从美股退市的价格' subtitle='智能        1小时前' source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2691032872,1478305033&fm=27&gp=0.jpg'}}></List>
            <List title='美国人认为，Facebook对美国之外的社会影响更令人忧虑' subtitle='智能        1小时前' source={require('./imgs/2.jpg')}></List>

            <ImportantNews news={[
              '1 “通俄门“调查',
              '2 日本连环杀人案。凶杀案嫌疑人白石龙浩被押解前往检察官办公室。',
              '3 缅甸和平集会。缅甸仰光，穆斯林参与跨宗教和平集会。在昂山素季领导的缅甸全国民主联盟党的组织下，数千名来自各宗教团体的成员们共同参加了一场和平集会。'
            ]}
              others={[
                '1 夜郎谷。贵阳省贵阳市花溪，77岁的宋伦培花20年时间打造了一座奇幻城堡“夜郎谷“。',
                '2 巴以冲突。法塔赫与哈马斯10月12日在卡罗签署协议，同意和解，结束长达10年的分裂局面。'
              ]}></ImportantNews>

            <List title='房价10年里涨50%，新西兰明年禁止外国人买现有住房' subtitle='商业        2小时前' source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3548386238,2972171039&fm=27&gp=0.jpg'}}></List>
            <List title='360在A股借壳上市，估值不及他从美股退市的价格' subtitle='智能        1小时前' source={{uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=965940670,1039086174&fm=200&gp=0.jpg'}}></List>
            <List title='美国人认为，Facebook对美国之外的社会影响更令人忧虑' subtitle='智能        1小时前' source={{uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3889769719,3103086209&fm=27&gp=0.jpg'}}></List>

            <Lab>
            </Lab>

            <List title='房价10年里涨50%，新西兰明年禁止外国人买现有住房' subtitle='商业        2小时前' source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3045728375,708441570&fm=27&gp=0.jpg'}}></List>
            <List title='360在A股借壳上市，估值不及他从美股退市的价格' subtitle='智能        1小时前' source={{uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4141763530,3341179398&fm=200&gp=0.jpg'}}></List>
            <List title='美国人认为，Facebook对美国之外的社会影响更令人忧虑' subtitle='智能        1小时前' source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=238664672,1110499543&fm=27&gp=0.jpg'}}></List>

            <WhyBook>
            </WhyBook>

            <List title='房价10年里涨50%，新西兰明年禁止外国人买现有住房' subtitle='商业        2小时前' source={{uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=824365947,978431398&fm=27&gp=0.jpg'}}></List>
            <List title='360在A股借壳上市，估值不及他从美股退市的价格' subtitle='智能        1小时前' source={{uri: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232247051,3635293868&fm=27&gp=0.jpg'}}></List>
            <List title='美国人认为，Facebook对美国之外的社会影响更令人忧虑' subtitle='智能        1小时前' source={require('./imgs/2.jpg')}></List>


          </View>
        </ScrollView>
      </View>
    );
  }
}



AppRegistry.registerComponent('news_test', () => news_test);
