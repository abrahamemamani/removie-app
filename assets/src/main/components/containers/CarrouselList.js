import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import Layout from 'removi/assets/src/main/layouts/CarrouselListLayout';
import Empty from 'removi/assets/src/main/components/Empty';
import CarrouselImage from 'removi/assets/src/main/layouts/CarrouselImage';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

class CarrouselList extends Component {

  renderEmpty  = ()       => <Empty msg="No hay sugerencias" />
  keyExtractor = (item)   => item.id.toString();
  _renderItem   = ({item}) => ( <CarrouselImage {...item}/> )

  render () {
      const {data} = this.props;
      return (
        <View style={styles.container}>
          <Layout
            title="Destacadas"
            >
            <Carousel 
              layout={'stack'}
              layoutCardOffset={18}
              ref={(c) => { this._carousel = c; }}
              data={data}
              ListEmptyComponent={this.renderEmpty}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={(Dimensions.get('window').width * 75) / 100}
              keyExtractor={this.keyExtractor}
            />
          </Layout>
        </View>
      );
  }



  // renderEmpty  = ()       => <Empty msg="No hay sugerencias" />
  // keyExtractor = (item)   => item.id.toString();
  // renderItem   = ({item}) => ( <CarrouselImage {...item}/> )
  
  // render() {
  //   const {data} = this.props;
  //   return (
  //     <View style={styles.container}>
  //       <Layout
  //         title="Horror"
  //         >
  //         <FlatList
  //           horizontal
  //           data={data}
  //           ListEmptyComponent={this.renderEmpty}
  //           renderItem={this.renderItem}
  //           keyExtractor={this.keyExtractor}
  //         />
  //       </Layout>
  //     </View>
  //   )
  // }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
});

const mapStateToProps = reducers => ({
  data: reducers.moviesReducer.moviesNowPlaying
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CarrouselList);
