
export class TransacaoService {
  repository: any

  constructor( repositoryParam: any ) {
    this.repository = repositoryParam
  }

  async registroTransacao( valor: number, descricao: string, tipo: string ) {
    try{
      const transacaoResgistada = {
        valor,
        descricao,
        tipo
      }
  
      await this.repository.registro( transacaoResgistada )
    } catch( error ) {
      console.log( error )
    }
  } 
}
