Date.now = jest.genMockFunction().mockReturnValue(0);

import React from 'react';
import { mount, render, shallow } from 'enzyme';

import { TimeAgo } from '../';

describe('<TimeAgo>', () => {
  let instance;
  beforeEach(() => {
    instance = new TimeAgo({});
    instance.componentWillUnmount();
  });

  describe('props', () => {
    it('registers defaultProps', () => {
      [
        ['className', ''],
        ['containerStyle', {}],
        ['interval', 1000 * 60],
        ['prefix', ''],
        ['style', {}],
        ['suffix', 'ago']
      ].forEach(([prop, value]) => {
        expect(TimeAgo.defaultProps[prop]).toEqual(value);
      });
    });
  });

  it('calls setState on componentDidMount', () => {
    const spy = jest.fn();
    instance.setState = spy;

    instance.componentDidMount();

    expect(spy).toHaveBeenCalledWith({ now: 0 });
  });

  it('registers a timer on componentDidMount', () => {
    const spy = jest.fn();
    instance.setState = spy;

    instance.componentDidMount();

    expect(instance.timer).toBeDefined();
  });

  describe('e2e tests', () => {
    it('calls componentDidMount', () => {
      jest.spyOn(TimeAgo.prototype, 'componentDidMount');
      const wrapper = mount(<TimeAgo time={Date.now()} />);

      expect(TimeAgo.prototype.componentDidMount).toHaveBeenCalled();
    });

    it('renders time ago with a suffix, by default', () => {
      const wrapper = render(
        <TimeAgo className="time-ago" time={Date.now()} />
      );

      const el = wrapper.find('.time-ago');

      expect(el.length).toBe(1);
      expect(el.text()).toMatch(/\sago$/);
    });

    it('renders with a prefix, if specified', () => {
      const wrapper = render(
        <TimeAgo className="time-ago" prefix="about" time={Date.now()} />
      );

      const el = wrapper.find('.time-ago');

      expect(el.text()).toMatch(/^about\s/);
    });

    describe('container props', () => {
      it('passes down containerClassName', () => {
        const wrapper = render(
          <TimeAgo containerClassName="time-ago-container" time={Date.now()} />
        );

        const el = wrapper.find('.time-ago-container');

        expect(el.length).toBe(1);
      });
    });
  });
});
