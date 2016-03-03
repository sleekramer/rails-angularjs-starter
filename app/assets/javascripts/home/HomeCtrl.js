(function () {
  function HomeCtrl () {
    this.text = "First angular text"
  }
  angular
    .module("blocChat")
    .controller("HomeCtrl", HomeCtrl);
})();
