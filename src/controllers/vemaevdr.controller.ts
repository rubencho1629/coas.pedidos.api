import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from "@loopback/repository";
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from "@loopback/rest";
import { Vemaevdr } from "../models";
import { VemaevdrRepository, VimaecxzRepository } from "../repositories";

export class VemaevdrController {
  constructor(
    @repository(VimaecxzRepository)
    private vimaecxzRepository: VimaecxzRepository,
    @repository(VemaevdrRepository)
    private vemaevdrRepository: VemaevdrRepository
  ) {}

  @post("/vemaevdrs")
  @response(200, {
    description: "Vemaevdr model instance",
    content: { "application/json": { schema: getModelSchemaRef(Vemaevdr) } },
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Vemaevdr, {
            title: "NewVemaevdr",
            exclude: ["id"],
          }),
        },
      },
    })
    vemaevdr: Omit<Vemaevdr, "id">
  ): Promise<Vemaevdr> {
    return this.vemaevdrRepository.create(vemaevdr);
  }

  @get("/vemaevdrs/count")
  @response(200, {
    description: "Vemaevdr model count",
    content: { "application/json": { schema: CountSchema } },
  })
  async count(@param.where(Vemaevdr) where?: Where<Vemaevdr>): Promise<Count> {
    var vimaecxzData = await this.vimaecxzRepository.execute(`
    select
	    vimaedrg.codcia ,vimaedrg.coddrog	,vimaedrg.nitdrog,nomdrog,dirdrog ,coddpto,dep_nomb
      ,codmun ,mun_nomb ,barrio ,revisita ,diahabil ,diarevis ,tranfer
    from
      vimaedxz ,vimaedrg ,gnmaedep ,gnmaemun
    where
      vimaedxz.estado=0
	    and gnmaedep.dep_codi = coddpto
	    and gnmaedep.dep_codi=gnmaemun.dep_codi
	    and codmun=gnmaemun.mun_codi
	    and vimaedxz.codcia=vimaedrg.codcia
	    and vimaedxz.coddrog=vimaedrg.coddrog
	    and codzona='A37'
    `);

    console.log(vimaecxzData);
    return this.vemaevdrRepository.count(where);
  }

  @get("/vemaevdrs")
  @response(200, {
    description: "Array of Vemaevdr model instances",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(Vemaevdr, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Vemaevdr) filter?: Filter<Vemaevdr>
  ): Promise<Vemaevdr[]> {
    return this.vemaevdrRepository.find(filter);
  }

  @patch("/vemaevdrs")
  @response(200, {
    description: "Vemaevdr PATCH success count",
    content: { "application/json": { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Vemaevdr, { partial: true }),
        },
      },
    })
    vemaevdr: Vemaevdr,
    @param.where(Vemaevdr) where?: Where<Vemaevdr>
  ): Promise<Count> {
    return this.vemaevdrRepository.updateAll(vemaevdr, where);
  }

  @get("/vemaevdrs/{codvende}/{codcia}")
  @response(200, {
    description: "Vemaevdr model instance",
    content: {
      "application/json": {
        schema: getModelSchemaRef(Vemaevdr, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number("codcia") codcia: number,
    @param.path.string("codvende") codvende: string,
    @param.filter(Vemaevdr)
    filter?: FilterExcludingWhere<Vemaevdr>
  ): Promise<Vemaevdr | null> {
    var result = this.vemaevdrRepository.findOne({
      where: { codcia: codcia, codvende: codvende },
    });

    return result;
  }

  @patch("/vemaevdrs/{codvende}/{codcia}")
  @response(204, {
    description: "Vemaevdr PATCH success",
  })
  async updateById(
    @param.path.number("codcia") codcia: number,
    @param.path.string("codvende") codvende: string,
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Vemaevdr, { partial: true }),
        },
      },
    })
    vemaevdr: Vemaevdr
  ): Promise<number | null> {
    var result = await this.vemaevdrRepository.updateAll(vemaevdr, {
      codcia: codcia,
      codvende: codvende,
    });

    return result.count;
  }

  @put("/vemaevdrs/{id}")
  @response(204, {
    description: "Vemaevdr PUT success",
  })
  async replaceById(
    @param.path.number("codcia") codcia: number,
    @param.path.string("codvende") codvende: number,
    @requestBody() vemaevdr: Vemaevdr
  ): Promise<void> {
    await this.vemaevdrRepository.replaceById(codvende, vemaevdr);
  }

  @del("/vemaevdrs/{id}")
  @response(204, {
    description: "Vemaevdr DELETE success",
  })
  async deleteById(
    @param.path.number("codcia") codcia: number,
    @param.path.string("codvende") codvende: number
  ): Promise<void> {
    await this.vemaevdrRepository.deleteById(codvende);
  }
}
