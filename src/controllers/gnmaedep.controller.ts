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
import {Gnmaedep} from '../models';
import {GnmaedepRepository} from '../repositories';

export class GnmaedepController {
  constructor(
    @repository(GnmaedepRepository)
    public gnmaedepRepository : GnmaedepRepository,
  ) {}

  @post('/gnmaedeps')
  @response(200, {
    description: 'Gnmaedep model instance',
    content: {'application/json': {schema: getModelSchemaRef(Gnmaedep)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gnmaedep, {
            title: 'NewGnmaedep',
            exclude: ['id'],
          }),
        },
      },
    })
    gnmaedep: Omit<Gnmaedep, 'id'>,
  ): Promise<Gnmaedep> {
    return this.gnmaedepRepository.create(gnmaedep);
  }

  @get('/gnmaedeps/count')
  @response(200, {
    description: 'Gnmaedep model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Gnmaedep) where?: Where<Gnmaedep>,
  ): Promise<Count> {
    return this.gnmaedepRepository.count(where);
  }

  @get('/gnmaedeps')
  @response(200, {
    description: 'Array of Gnmaedep model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Gnmaedep, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Gnmaedep) filter?: Filter<Gnmaedep>,
  ): Promise<Gnmaedep[]> {
    return this.gnmaedepRepository.find(filter);
  }

  @patch('/gnmaedeps')
  @response(200, {
    description: 'Gnmaedep PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gnmaedep, {partial: true}),
        },
      },
    })
    gnmaedep: Gnmaedep,
    @param.where(Gnmaedep) where?: Where<Gnmaedep>,
  ): Promise<Count> {
    return this.gnmaedepRepository.updateAll(gnmaedep, where);
  }

  @get('/gnmaedeps/{id}')
  @response(200, {
    description: 'Gnmaedep model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Gnmaedep, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Gnmaedep, {exclude: 'where'}) filter?: FilterExcludingWhere<Gnmaedep>
  ): Promise<Gnmaedep> {
    return this.gnmaedepRepository.findById(id, filter);
  }

  @patch('/gnmaedeps/{id}')
  @response(204, {
    description: 'Gnmaedep PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gnmaedep, {partial: true}),
        },
      },
    })
    gnmaedep: Gnmaedep,
  ): Promise<void> {
    await this.gnmaedepRepository.updateById(id, gnmaedep);
  }

  @put('/gnmaedeps/{id}')
  @response(204, {
    description: 'Gnmaedep PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gnmaedep: Gnmaedep,
  ): Promise<void> {
    await this.gnmaedepRepository.replaceById(id, gnmaedep);
  }

  @del('/gnmaedeps/{id}')
  @response(204, {
    description: 'Gnmaedep DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gnmaedepRepository.deleteById(id);
  }
}
