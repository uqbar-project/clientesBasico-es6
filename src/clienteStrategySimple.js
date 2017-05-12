class Cliente {

	constructor() {
		this.deuda = 0
		this.ingreso = 10000
		this.criterioCredito = new CriterioCreditoDefault()
	}

	montoMaximoCredito() {
		return this.criterioCredito.montoMaximoCredito(this)
	}

	// asignan estrategias de crédito
	// permite encapsular los strategies hacia afuera
	dudoso() {
		this.criterioCredito = new CriterioCreditoDudoso()
	}

	especial() {
		this.criterioCredito = new CriterioCreditoEspecial()
	}

	// propiedad calculada saldo, se accede como un atributo
	get saldo() {
		return this.ingreso - this.deuda
	}
}

/** Estrategias para calcular el monto máximo */
class CriterioCreditoDefault {
	montoMaximoCredito(cliente) {
		return 0.3 * cliente.ingreso
	}
}

class CriterioCreditoEspecial {
	montoMaximoCredito(cliente) {
		return 0.5 * cliente.saldo
	}
}

class CriterioCreditoDudoso {
	montoMaximoCredito(cliente) {
		return 100
	}
}