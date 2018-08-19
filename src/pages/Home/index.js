import { connect } from 'react-redux';
import container from './container';
import { fetching } from '../../flux/gist/actions';
import { getListGist, getGist } from '../../flux/gist/selector';
import { generateFetch } from '../../flux/api/actions';

const stateProp = ({ gist }) => {
  const { listGists } = gist;
  return {
    listGist: getListGist(listGists),
    gist: getGist(gist),
  };
};

const dispatchProps = dispatch => ({
  fetchData(value) {
    dispatch(fetching());
    dispatch(generateFetch(value));
  }
});

export default connect(stateProp, dispatchProps)(container);
