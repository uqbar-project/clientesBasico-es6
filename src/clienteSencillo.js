class Cliente {

	constructor() {
		this.deuda = 0
	}

	comprar(monto) {
		this.deuda = this.deuda + monto
	}


	pagarVencimiento(monto) {
		this.deuda = this.deuda - monto
	}

}

let raul = {
	deuda: 150,
	comprar(monto) {
		this.deuda = this.deuda + monto
	},
	pagarVencimiento(monto) {
		this.deuda = this.deuda - monto
	}
}