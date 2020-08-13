// import { createValidator, ValidateResult } from '@typeonly/validator';

// export async function validateReplayJson(data: any): Promise<ValidateResult> {
//   // Create the validator using a JSON file with types
//   const validator = createValidator({
//     bundle: require('../generatedtypes.to.json'),
//   });
//   const result = validator.validate('ParsedReplay', data);
//   return new Promise((resolve, reject) => {
//     if (!result.valid) {
//       reject(new Error(`Invalid parser file: ${result.error}`));
//     }
//     resolve(result);
//   });
// }
import Ajv from 'ajv';

export async function validateReplayJson(data: any): Promise<boolean | Ajv.ErrorObject[] | null | undefined> {
  const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
  const validate = ajv.compile(require('../rocketleagueSchema.json'));
  const valid = validate(data);
  return new Promise((resolve, reject) => {
    if (!valid) {
      reject(validate.errors);
    }
    resolve(valid);
  });
}
