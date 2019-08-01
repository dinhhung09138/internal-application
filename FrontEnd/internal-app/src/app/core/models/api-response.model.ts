/**
 * Structure model of api response data
 *
 * @export
 * @class ApiResponseModel
 */
export class ApiResponseModel {
  success: boolean;     // Status state: true if success, false if has any error
  result: any;          // Object of data (single or list) server response when process was successful
  errors: string[];     // List string of error when process was failed
}
