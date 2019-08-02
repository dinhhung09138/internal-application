/**
 * When close modal, response data to the main page
 */
export class FormResponseModel {
  status: boolean;  // Status value
  model: any;       // The single data object return

  constructor(status: boolean, model?: any) {
    this.status = status;
    this.model = model;
  }
}
