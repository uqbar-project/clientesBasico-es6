class ClienteFunc {

	constructor() {
		this.deuda = 0
		this.ingreso = 10000
		this.criterioCredito = () => 0.3 * this.ingreso
	}

	montoMaximoCredito() {
		return this.criterioCredito()
	}

	// asignan estrategias de crédito
	// permite encapsular los strategies hacia afuera
	dudoso() {
		this.criterioCredito = () => 100
	}

	especial() {
		this.criterioCredito = () => 0.5 * this.saldo
	}

	// propiedad calculada saldo, se accede como un atributo
	get saldo() {
		return this.ingreso - this.deuda
	}
}
