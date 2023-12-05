
import { Estoque } from '../model/Estoque'

interface IEstoqueParams {
  nome: string,
  code: string,
  quantidade: number
}

interface IRepository {
  registro: ( estoqueParam: IEstoqueParams ) => void
}

export class EstoqueRepository implements IRepository {
  model: typeof Estoque

  constructor( model: typeof Estoque) {
    this.model = model
  }

  async registro( estoqueParam: IEstoqueParams ) {
    try {
      await this.model.create( estoqueParam )
    } catch( error ) {
      console.log( error )
    }
  }
}
