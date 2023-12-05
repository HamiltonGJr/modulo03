
import { Request, Response } from 'express'

interface IController {
  registroTransacaoController: ( request: Request, response: Response ) => void
}

export class TransacaoController implements IController {
  service: any

  constructor( serviceParam: any ) {
    this.service = serviceParam
  }

  async registroTransacaoController( request: Request, response: Response ) {
    try{
      const { valor, descricao, tipo } = request.body

      const result = await this.service.registroTransacao( valor, descricao, tipo )

      response.status( 201 ).json( result )
    } catch( error ) {
      console.log( error)
    }
  }
}
