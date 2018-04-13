const BlockchainManager = require('../../../src/managers/blockchain')

describe('Core | BlockchainManager', () => {
  it('exists', () => {
    expect(BlockchainManager).toBeType('function')
  })

  it('works with sinons', () => {
      const f = jest.fn()

      expect(f).toBeType('function')

      f('Hello World')

      expect(f).toHaveBeenCalledWith('Hello World')
  })
})
