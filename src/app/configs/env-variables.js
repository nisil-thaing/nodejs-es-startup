import Joi from 'joi';

const envVarsSchema = Joi.object().keys({
  NODE_ENV: Joi.string()
    .allow(['development', 'production'])
    .default('development'),
  PORT: Joi.number()
    .default(3000)
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${ error.message }`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT
};

export default config;
