/*eslint-env mocha */
/*global React shallow expect sinon */

// JS
import 'jsdom-global/register'
import { Provider }       from 'react-redux';
import * as router        from 'react-router';
import { mount }          from 'enzyme';
import configureStore     from 'redux-mock-store'

const mockStore = configureStore([])

// Components
import ConnectedApp, { NewMatch } from './NewMatch';

const match = {
  title: 'BSE vs Stowmarket',
  date: '12-12-2015',
  time: '11:00'
}

describe('<NewMatch />', () => {
  let Component;

  beforeEach(() => {
    const initialState = {}
    const store = mockStore(initialState)

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );

    Component = wrapper.find(NewMatch);
  });

  it('should render', () => {
    expect(
      Component.length
    ).to.be.truthy;
  });

  it('should have the string \'Create Match here!\' ', () => {
    const wrapper = shallow(<NewMatch match={match}/>);
    expect(
      wrapper.contains('Create Match!')
    ).to.equal(true);
  });

  it('should change the route on onSave', () => {
    router.browserHistory = { push: ()=>{} };
    let browserHistoryPushStub = sinon.stub(
      router.browserHistory, 'push', () => { }
    );

    Component.find('button').simulate('click');

    expect(browserHistoryPushStub).to.have.been.calledOnce;
    browserHistoryPushStub.restore();
  });
});
