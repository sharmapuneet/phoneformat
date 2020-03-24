import phoneFormat from '.'

const phoneConfig = {
  domCodes: ['02', '03', '07', '08'],
  intlCodes: ['612', '613', '617', '618'],
  domPattern: ['2', '4', '4'],
  intlPattern: ['3', '4', '4'],
  mobilePattern: ['4', '3', '3'],
  mobileCode: ['04'],
  intlMobileCode: ['614'],
  intlMobilePattern: ['3', '2', '3', '3'],
}

describe('phoneFormat', () => {
  it('should return mobile format', () => {
    const wrapper = phoneFormat('0400000000', phoneConfig)

    expect(wrapper).toEqual('0400 000 000')
  })

  it('should return domestic landline format', () => {
    const wrapper = phoneFormat('0700000000', phoneConfig)

    expect(wrapper).toEqual('07 0000 0000')
  })

  it('should return international landline format', () => {
    const wrapper = phoneFormat('61200000000', phoneConfig)

    expect(wrapper).toEqual('612 0000 0000')
  })

  it('should return international mobile format', () => {
    const wrapper = phoneFormat('61400000000', phoneConfig)

    expect(wrapper).toEqual('614 00 000 000')
  })

  it('should not return any format', () => {
    const wrapper = phoneFormat('0400000000')

    expect(wrapper).toEqual('0400000000')
  })
})
