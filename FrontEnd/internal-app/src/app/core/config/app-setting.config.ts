export class AppSetting {

  /** Table page size */
  static readonly table = {
    pageSize: 20,
  };

  /** Modal option config */
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
    modalLoadingOptions: {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      scrollable: false,
      size: 'loading' as any
    },
  };

  static readonly FormResponseState = {
    new: 1,
    edit: 2,
    delete: 3
  };

}
