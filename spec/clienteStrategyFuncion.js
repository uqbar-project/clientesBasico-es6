describe('clientesFunc', () => {
  let manuel
  let manuelSpecial
  let manuelDoubty

  beforeEach( () => {
  	manuel = new ClienteFunc()
    manuelDoubty = new ClienteFunc()
    manuelDoubty.dudoso()
    manuelSpecial = new ClienteFunc()
    manuelSpecial.especial()
    manuelSpecial.deuda = 1000
  })

  it('monto maximo es el 30% de los ingresos', () => {
  	expect(3000).toBe(manuel.montoMaximoCredito())
  }) 
  it('monto maximo de un especial es el 50% del saldo', () => {
    expect(4500).toBe(manuelSpecial.montoMaximoCredito())
  })
  it('monto maximo de un dudoso es 100', () => {
    expect(100).toBe(manuelDoubty.montoMaximoCredito())
  })
})
