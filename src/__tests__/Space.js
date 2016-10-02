
import React from 'react'
import { shallow } from 'enzyme'
import { Space } from '..'

let wrapper
let inner

test('renders', () => {
  wrapper = shallow(<Space />)
  inner = wrapper.first().shallow()
})

test('is a div', () => {
  expect(inner.is('div')).toBe(true)
})

test('has a className', () => {
  expect(inner.props().className).toBe('Space')
})

test('accepts custom className props', () => {
  wrapper = shallow(<Space className='foo' />)
  inner = wrapper.first().shallow()
  expect(inner.props().className).toBe('Space foo')
})

test('accepts custom styles', () => {
  wrapper = shallow(<Space style={{ color: 'tomato' }} />)
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})

test('context styles override default styles', () => {
  wrapper = shallow(<Space />, {
    context: {
      rebass: {
        Space: {
          marginLeft: 0
        }
      }
    }
  })
  inner = wrapper.first().shallow()
  expect(inner.props().style.marginLeft).toBe(0)
})

test('style props override context styles', () => {
  wrapper = shallow(
    <Space
      color='blue'
      style={{
        color: 'tomato'
      }} />, {
        context: {
          rebass: {
            Space: {
              color: 'magenta'
            }
          }
        }
      })
  inner = wrapper.first().shallow()
  expect(inner.props().style.color).toBe('tomato')
})
