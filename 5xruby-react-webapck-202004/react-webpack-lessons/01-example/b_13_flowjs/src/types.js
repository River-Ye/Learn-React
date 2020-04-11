// TODO
export type UserType = {
  /**
   * name
   */
  name: string;
  /**
   * age
   */
  age: number;
  /**
   * Optional field
   * other 可以是 undefined ，但不能是 null
   * @link https://flow.org/en/docs/types/primitives/#toc-optional-function-parameters
   */
  other?: string;
  /**
   * maybe 可以是 null undefiend
   * @link https://flow.org/en/docs/types/maybe/
   */
  maybe: ?string;

  /**
   * @link https://flow.org/en/docs/types/literals/
   */
  literal: 'success' | 'warning' | 'error'
}
