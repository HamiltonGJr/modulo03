
import { Request, Response } from "express";

interface IController {
  registroEstoqueController: ( request: Request, response: Response ) => void
}

export class EstoqueController implements IController {
  service: any

  constructor( serviceParam: any ) {
    this.service = serviceParam
  }

  async registroEstoqueController( request: Request, response: Response ) {
    try {
      const { nome, code, quantidade } = request.body

      const result = await this.service.registroEstoque( nome, code, quantidade )

      response.status( 201 ).json( result )
    } catch( error ) {
      console.log( error )
    }
  }
}
