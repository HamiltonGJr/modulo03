
export class EstoqueService {
  repository: any

  constructor( repositoryParam: any ) {
    this.repository = repositoryParam
  }

  async registroEstoque( nome: string, code: string, quantidade: number ) {
    try {
      const estoqueRegistrado= {
        nome, 
        code,
        quantidade
      }

      await this.repository.registro( estoqueRegistrado )
    } catch( error ) {
      console.log( error )
    }
  }
}
