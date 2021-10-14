import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Nomaeemp} from '../models';
import {NomaeempRepository} from '../repositories';

export class NomaeempController {
  constructor(
    @repository(NomaeempRepository)
    public nomaeempRepository : NomaeempRepository,
  ) {}

  @post('/nomaeemps')
  @response(200, {
    description: 'Nomaeemp model instance',
    content: {'application/json': {schema: getModelSchemaRef(Nomaeemp)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nomaeemp, {
            title: 'NewNomaeemp',
            exclude: ['id'],
          }),
        },
      },
    })
    nomaeemp: Omit<Nomaeemp, 'id'>,
  ): Promise<Nomaeemp> {
    return this.nomaeempRepository.create(nomaeemp);
  }

  @get('/nomaeemps/count')
  @response(200, {
    description: 'Nomaeemp model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Nomaeemp) where?: Where<Nomaeemp>,
  ): Promise<Count> {
    return this.nomaeempRepository.count(where);
  }

  @get('/nomaeemps')
  @response(200, {
    description: 'Array of Nomaeemp model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Nomaeemp, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Nomaeemp) filter?: Filter<Nomaeemp>,
  ): Promise<Nomaeemp[]> {
    return this.nomaeempRepository.find(filter);
  }

  @patch('/nomaeemps')
  @response(200, {
    description: 'Nomaeemp PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nomaeemp, {partial: true}),
        },
      },
    })
    nomaeemp: Nomaeemp,
    @param.where(Nomaeemp) where?: Where<Nomaeemp>,
  ): Promise<Count> {
    return this.nomaeempRepository.updateAll(nomaeemp, where);
  }

  @get('/nomaeemps/{id}')
  @response(200, {
    description: 'Nomaeemp model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Nomaeemp, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Nomaeemp, {exclude: 'where'}) filter?: FilterExcludingWhere<Nomaeemp>
  ): Promise<Nomaeemp> {
    return this.nomaeempRepository.findById(id, filter);
  }

  @patch('/nomaeemps/{id}')
  @response(204, {
    description: 'Nomaeemp PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nomaeemp, {partial: true}),
        },
      },
    })
    nomaeemp: Nomaeemp,
  ): Promise<void> {
    await this.nomaeempRepository.updateById(id, nomaeemp);
  }

  @put('/nomaeemps/{id}')
  @response(204, {
    description: 'Nomaeemp PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() nomaeemp: Nomaeemp,
  ): Promise<void> {
    await this.nomaeempRepository.replaceById(id, nomaeemp);
  }

  @del('/nomaeemps/{id}')
  @response(204, {
    description: 'Nomaeemp DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nomaeempRepository.deleteById(id);
  }
}
