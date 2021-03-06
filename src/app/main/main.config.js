'use strict';

angular.module('dz4.main', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        data:{
          permissions: {
            only: ['user']
          }
        }
      })
      .state('main.create', {
        url: '/create',
        templateUrl: 'app/main/create/create.html',
        controller: 'CreateCtrl',
        data:{
          permissions: {
            only: ['user']
          }
        }
      })
      .state('main.update', {
        url: '/update/:id',
        templateUrl: 'app/main/update/update.html',
        controller: 'UpdateCtrl',
        data:{
          permissions: {
            only: ['user']
          }
        },
        params: {'id':false}
      })
      .state('main.delete', {
        url: '/delete/:id',
        templateUrl: 'app/main/delete/delete.html',
        controller: 'DeleteCtrl',
        data:{
          permissions: {
            only: ['user']
          }
        },
        params: {'id':false}
      });

  });
