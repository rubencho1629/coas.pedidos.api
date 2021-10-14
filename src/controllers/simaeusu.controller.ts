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
import { Simaeusu } from "../models";
import { SimaeusuRepository } from "../repositories";

export class SimaeusuController {
  constructor(
    @repository(SimaeusuRepository)
    public simaeusuRepository: SimaeusuRepository
  ) {}

  @post("/simaeusus")
  @response(200, {
    description: "Simaeusu model instance",
    content: { "application/json": { schema: getModelSchemaRef(Simaeusu) } },
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Simaeusu, {
            title: "NewSimaeusu",
            exclude: ["id"],
          }),
        },
      },
    })
    simaeusu: Omit<Simaeusu, "id">
  ): Promise<Simaeusu> {
    return this.simaeusuRepository.create(simaeusu);
  }

  @get("/simaeusus/count")
  @response(200, {
    description: "Simaeusu model count",
    content: { "application/json": { schema: CountSchema } },
  })
  async count(@param.where(Simaeusu) where?: Where<Simaeusu>): Promise<Count> {
    return this.simaeusuRepository.count(where);
  }

  @get("/simaeusus")
  @response(200, {
    description: "Array of Simaeusu model instances",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(Simaeusu, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Simaeusu) filter?: Filter<Simaeusu>
  ): Promise<Simaeusu[]> {
    return this.simaeusuRepository.find(filter);
  }

  @patch("/simaeusus")
  @response(200, {
    description: "Simaeusu PATCH success count",
    content: { "application/json": { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Simaeusu, { partial: true }),
        },
      },
    })
    simaeusu: Simaeusu,
    @param.where(Simaeusu) where?: Where<Simaeusu>
  ): Promise<Count> {
    return this.simaeusuRepository.updateAll(simaeusu, where);
  }

  @get("/simaeusus/{id}")
  @response(200, {
    description: "Simaeusu model instance",
    content: {
      "application/json": {
        schema: getModelSchemaRef(Simaeusu, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string("id") id: string,
    @param.filter(Simaeusu, { exclude: "where" })
    filter?: FilterExcludingWhere<Simaeusu>
  ): Promise<Simaeusu> {
    return this.simaeusuRepository.findById(id, filter);
  }

  @patch("/simaeusus/{id}")
  @response(204, {
    description: "Simaeusu PATCH success",
  })
  async updateById(
    @param.path.string("id") id: string,
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Simaeusu, { partial: true }),
        },
      },
    })
    simaeusu: Simaeusu
  ): Promise<void> {
    await this.simaeusuRepository.updateById(id, simaeusu);
  }

  @put("/simaeusus/{id}")
  @response(204, {
    description: "Simaeusu PUT success",
  })
  async replaceById(
    @param.path.string("id") id: string,
    @requestBody() simaeusu: Simaeusu
  ): Promise<void> {
    await this.simaeusuRepository.replaceById(id, simaeusu);
  }

  @del("/simaeusus/{id}")
  @response(204, {
    description: "Simaeusu DELETE success",
  })
  async deleteById(@param.path.string("id") id: string): Promise<void> {
    await this.simaeusuRepository.deleteById(id);
  }
}
