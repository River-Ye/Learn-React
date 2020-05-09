
import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import Counter from '.';

// 參考文章
// https://medium.com/enjoy-life-enjoy-coding/jest-%E5%86%8D%E4%B8%80%E6%AC%A1%E6%B8%AC%E8%A9%A6%E4%BD%A0%E7%9A%84-component-feat-react-testing-library-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-86bdd40b2b6c
describe('Test <Counter />', () => {
  // 每次測試後將 render 的 DOM 清空
  afterEach(cleanup);
  test('測試是否正常 render ', async () => {
    // render Component
    const { getByTestId, getByText, container } = render(<Counter />);

    // 下方三個方法都可以找到顯示計數的 <span />
    expect(getByTestId('display_count').textContent).toBe('0');
    expect(getByText('0').textContent).toBe('0');
    expect(container.querySelector('span').innerHTML).toBe('0');

    await fireEvent.click(getByText('Increase'));
    expect(getByTestId('display_count').textContent).toBe('1');

    await fireEvent.click(getByText('Decrease'));
    expect(getByTestId('display_count').textContent).toBe('0');
  });

  test('can render with props', async () => {
    const { getByTestId, getByText } = render(<Counter defaultCount={10} />);

    expect(getByTestId('display_count').textContent).toBe('10');

    await fireEvent.click(getByText('Increase'));
    expect(getByTestId('display_count').textContent).toBe('11');

    await fireEvent.click(getByText('Decrease'));
    expect(getByTestId('display_count').textContent).toBe('10');
  });
});
