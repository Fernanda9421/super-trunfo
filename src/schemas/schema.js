import * as yup from 'yup';

const MAX_ATTR = 90;
const MAX_LENGTH_DESCRIPTION = 38;

const errors = {
  blank: 'Campo é obrigatório',
  attributeError: 'Campo deve receber um número positivo, menor ou igual à 90',
  maxLengthError: 'Campo deve receber no máximo 38 caracteres',
  image: 'Campo "Imagem" é obrigatório',
};

const schema = yup.object({
  name: yup
    .string()
    .required(errors.blank),
  attr1: yup
    .number(errors.attributeError)
    .positive(errors.attributeError)
    .integer(errors.attributeError)
    .max(MAX_ATTR, errors.attributeError)
    .required(errors.blank),
  attr2: yup
    .number(errors.attributeError)
    .positive(errors.attributeError)
    .integer(errors.attributeError)
    .max(MAX_ATTR, errors.attributeError)
    .required(errors.blank),
  attr3: yup
    .number(errors.attributeError)
    .positive(errors.attributeError)
    .integer(errors.attributeError)
    .max(MAX_ATTR, errors.attributeError)
    .required(errors.blank),
  image: yup
    .string()
    .required(errors.blank),
  trunfo: yup
    .bool(),
  description: yup
    .string()
    .max(MAX_LENGTH_DESCRIPTION, errors.maxLengthError)
    .required(errors.blank),
}).required();

export default schema;
