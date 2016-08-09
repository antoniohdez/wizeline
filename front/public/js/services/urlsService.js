app.factory('urlsFactory', function ($resource, $window) {
    
    return $resource( $window.baseUrl + '/api/urls/', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })

});