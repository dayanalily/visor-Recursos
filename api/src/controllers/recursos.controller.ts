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
  HttpErrors,
  RestBindings,
  Request,
  Response,
  oas
} from '@loopback/rest';
import {Recursos} from '../models';
import {RecursosRepository} from '../repositories';
 import { AuthService } from '../services/auth.service';
 import {authenticate} from '@loopback/authentication';

class Credentials{
  run: string
  password: string
}

const AWS = require('aws-sdk');
import multer from 'multer';
import stream from 'stream';
import { inject } from '@loopback/core';
const {Duplex} = stream;
function bufferToStream(buffer: any) {
  const duplexStream = new Duplex();
  duplexStream.push(buffer);
  duplexStream.push(null);
  return duplexStream;
}

@authenticate('jwt')
export class RecursosController {
  authServices: AuthService
  constructor(
    @repository(RecursosRepository)
    public recursosRepository : RecursosRepository,
  ) {
    //this.authServices = new AuthService(RecursosRepository)
    }

  @post('/recursos')
  @response(200, {
    description: 'Recursos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Recursos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recursos, {
            title: 'NewRecursos',
            exclude: ['id'],
          }),
        },
      },
    })
    recursos: Omit<Recursos, 'id'>,
  ): Promise<Recursos> {
    console.log("llwgue  la api", recursos)
    return this.recursosRepository.create(recursos);
  }

  @get('/recursos/count')
  @response(200, {
    description: 'Recursos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Recursos) where?: Where<Recursos>,
  ): Promise<Count> {
    return this.recursosRepository.count(where);
  }

  @get('/recursos')
  @response(200, {
    description: 'Array of Recursos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Recursos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Recursos) filter?: Filter<Recursos>,
  ): Promise<Recursos[]> {
    return this.recursosRepository.find(filter);
  }

  @patch('/recursos')
  @response(200, {
    description: 'Recursos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Recursos, {partial: true}),
        },
      },
    })
    recursos: Recursos,
    @param.where(Recursos) where?: Where<Recursos>,
  ): Promise<Count> {
    return this.recursosRepository.updateAll(recursos, where);
  }

  @get('/recursos/{id}')
  @response(200, {
    description: 'Recursos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Recursos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Recursos, {exclude: 'where'}) filter?: FilterExcludingWhere<Recursos>
  ): Promise<Recursos> {
    return this.recursosRepository.findById(id, filter);
  }


  @del('/recursos/{id}')
  @response(204, {
    description: 'Recursos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.recursosRepository.deleteById(id);
  }

  @post('/recursos/addphoto/{id}', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: '',
      },
    },
  })
  async adjuntarFoto(
    @requestBody({
      description: 'multipart/form-data value.',
      required: true,
      content: {
        'multipart/form-data': {
          // Skip body parsing
          'x-parser': 'stream',
          schema: { type: 'object' },
        },
      },
    })
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @param.path.string('id') id: string,
  ): Promise<object> {
    const config = {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      endpoint: process.env.S3_ENDPOINT,
    };
    const s3 = new AWS.S3(config);
    return new Promise<object>(async (resolve, reject) => {
      const storage = multer.memoryStorage();
      const upload = multer({ storage });
      const usr = await this.recursosRepository.findById(id);
      if (!usr) throw new HttpErrors[404]('User not found')

      upload.any()(request, response, async (err: any) => {
        if (err) reject(err);
        else {
          let res = new Array();
          for (const file of (request as any).files) {
            const ext = file.originalname.slice((file.originalname.lastIndexOf(".") - 1 >>> 0) + 2)
            const params = {
              Bucket: 'smartraining-visorrecursos/recursos',
              Key: new Date().getTime() + '.' + ext,
              Body: bufferToStream(file.buffer),
            };
            try {
              const stored = await s3.upload(params).promise();
              res.push(stored);
              usr.photo = stored.key
              usr.photomimetype = file.mimetype
              this.recursosRepository.updateById(id, usr);
            } catch (err) {
              reject(err);
            }
          }
          resolve(res);
        }
      });
    });
  }
  @get('/recursos/photo/{id}')
  @oas.response.file()
  async descargarDocumento(
    @param.path.string('id') id: string,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    const config = {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      endpoint: process.env.S3_ENDPOINT,
    };
    let usr = await this.recursosRepository.findById(id);
    if (usr.photo && usr.photomimetype) {
      const type = usr.photomimetype ? usr.photomimetype : 'image/jpeg'
      const s3 = new AWS.S3(config);
      return new Promise<object>(async (resolve, reject) => {
        const params = {
          Bucket: 'smartraining-visorrecurso',
          Key: usr.photo,
        };
        s3.getObject(params)
          .promise()
          .then(function (file: any) {
            resolve(
              response
                .status(200)
                .contentType(type)
                .send(file.Body),
            );
          })
          .catch(function (err: any) {
            reject(err);
          });
      });
    } else {
      throw new HttpErrors[404]('La imagen solicitada no existe en la bdd')

    }
  }


}
