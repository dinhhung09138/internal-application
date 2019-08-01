export class AppSetting {

  static readonly table = {
    pageSize: 20,
  };

  static readonly ModalOptions = {
    modalOptions: {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      scrollable: false
    },
    modalSmallOptions: {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      scrollable: false,
      size: 'sm' as any
    },
  };

  static readonly FormResponseState = {
    new: 1,
    edit: 2,
    delete: 3
  };

}
