describe('clientes', function() {
  let manuel
  let manuelSpecial
  let manuelDoubty

  beforeEach(function () {
  	manuel = new Cliente()
    manuelDoubty = new Cliente()
    manuelDoubty.dudoso()
    manuelSpecial = new Cliente()
    manuelSpecial.especial()
    manuelSpecial.deuda = 1000
  })

  it('monto maximo es el 30% de los ingresos', function() {
  	expect(3000).toBe(manuel.montoMaximoCredito())
  }) 
  it('monto maximo de un especial es el 50% del saldo', function() {
    expect(4500).toBe(manuelSpecial.montoMaximoCredito())
  })
  it('monto maximo de un dudoso es 100', function() {
    expect(100).toBe(manuelDoubty.montoMaximoCredito())
  })
})
