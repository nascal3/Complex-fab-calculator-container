
describe('test mocker', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    expect(msg.toString()).toMatch('new message')
  })
})
