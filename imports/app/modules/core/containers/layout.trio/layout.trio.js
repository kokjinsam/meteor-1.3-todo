import TrioLayout from '../../components/layout.trio';
import { useDeps, compose, composeAll } from 'mantra-core';
// import mapStateToProps from './mapStateToProps';
import mapDepsToProps from './mapDepsToProps';
import mapQueriesToProps from './mapQueriesToProps';

export default composeAll(
  // compose(mapStateToProps),
  compose(mapQueriesToProps),
  useDeps(mapDepsToProps)
)(TrioLayout);
