import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Recursos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  academico: string;

  @property({
    type: 'string',
    required: true,
  })
  corporativo: string;

  @property({
    type: 'string',
    required: true,
  })
  curso: string;

  @property({
    type: 'string',
    required: true,
  })
  tab: string;

  @property({
    type: 'string',
    required: true,
  })
  enlace: string;

  @property({
    type: 'string',
  })
  imagen?: string;



  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Recursos>) {
    super(data);
  }
}

export interface RecursosRelations {
  // describe navigational properties here
}

export type RecursosWithRelations = Recursos & RecursosRelations;
