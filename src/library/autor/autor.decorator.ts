import { ReflectMetadata } from '@nestjs/common';

export const Autor = (...args: string[]) => ReflectMetadata('autor', args);
