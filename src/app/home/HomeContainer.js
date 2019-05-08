import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => {
  const { count } = state.home;
  return { count }
};

const HomeContainer = connect(
  mapStateToProps,
)(HomeComponent);

export default HomeContainer;