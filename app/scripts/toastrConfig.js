(function() {
  'use strict';
  angular.module('minovateApp')
    .config(toastr);
  toastr.$inject = ['toastrConfig'];

  function toastr(toastrConfig) {
    angular.extend(toastrConfig, {
      allowHtml: false,
      closeButton: true,
      closeHtml: '<button>&times;</button>',
      extendedTimeOut: 1000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      positionClass: 'toast-bottom-right',
      messageClass: 'toast-message',
      onHidden: null,
      onShown: null,
      onTap: null,
      progressBar: false,
      tapToDismiss: true,
      templates: {
        toast: 'directives/toast/toast.html',
        progressbar: 'directives/progressbar/progressbar.html'
      },
      timeOut: 3000,
      titleClass: 'toast-title',
      toastClass: 'toast'
    });

  }
})();
