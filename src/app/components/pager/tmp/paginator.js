(function () {
    'use strict';
    angular
        .module('administradorAmco')
        .component('paginator', {
            bindings: {
                pager: '=',
                id: '='
            },
            templateUrl: 'modules/products/common/paginator.html',
            controller: paginatorController,
            controllerAs: 'vm'
        });

    function paginatorController($translate) {
        var vm = this;
        var onscroll = null;
        vm.$onInit = function () {
            onscroll = window.onscroll;
        };

        vm.$onDestroy = function () {
        };


        vm.onchangePage = function (page) {
            var elmnt = document.getElementById("test_scroll_" + vm.id);
            if (elmnt) {
                $("#product_scroll_" + vm.id).hide();
                vm.pager = new PagerService().GetPager(vm.pager.totalItems, page, vm.pager.pageSize);
                vm.pager.offsetTop = elmnt.offsetTop;
                $("#product_scroll_" + vm.id).show();
                $("html").scrollTop(vm.pager.offsetTop + 250);
            } else {
                vm.pager = new PagerService().GetPager(vm.pager.totalItems, page, vm.pager.pageSize);
            }
        };

        vm.next = function () {
            if (vm.pager.currentPage + 1 <= vm.pager.totalPages) {
                vm.pager.currentPage += 1;
            }
            vm.onchangePage(vm.pager.currentPage);
        };
        vm.prev = function () {
            if (vm.pager.currentPage - 1 > 0) {
                vm.pager.currentPage -= 1;
            }
            vm.onchangePage(vm.pager.currentPage);
        };
        vm.last = function () {
            vm.pager.currentPage = vm.pager.totalPages;
            vm.onchangePage(vm.pager.currentPage);
        };
        vm.first = function () {
            vm.pager.currentPage = 1;
            vm.onchangePage(vm.pager.currentPage);
        };

    }
}());