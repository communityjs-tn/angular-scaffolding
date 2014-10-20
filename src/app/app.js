/**
 * Created by Anis on 20/10/2014.
 */
/*global : angular, define*/
(function (define, angular) {
    'use strict';
    define([], function () {
        var moduleName = "app";
        angular.module(moduleName, [])
            .controller("Test", [function () {
                this.title = "Hello world !";
            }]);
        return moduleName;
    });
}(define, angular));