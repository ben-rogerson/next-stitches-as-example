import { styled } from 'twin.macro'

const Tag = styled('span', {
  border: '1px solid black',

  variants: {
    theme: {
      warning: {
        color: 'green',
        background: 'yellow',
      },
    },
  },
})

export default () => (
  <>
    <Tag theme="warning" css={{ color: 'red' }}>
      Tag 1
    </Tag>
    <Tag as="div" theme="warning">
      Tag 2
    </Tag>
    <Tag as="div" theme="warning" css={{ color: 'hotpink' }}>
      Tag 3
    </Tag>
  </>
)
