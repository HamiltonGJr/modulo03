
import { Transacao } from "../model/Transaction"

interface ITransacaoParams {
  valor: number,
  descricao: string,
  tipo: string
}

interface IRepository {
  registro: ( transacao: ITransacaoParams ) => void
}

export class TransacaoRepository implements IRepository {
  model: typeof Transacao

  constructor( model: typeof Transacao ) {
     this.model = model
  } 

  async registro( transacao: ITransacaoParams ) {
    try {
      await this.model.create( transacao )
    } catch( error ) {
      console.log( error )
    }
  }
}
