import Page from '../app/page';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('index ', () => {
  test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
