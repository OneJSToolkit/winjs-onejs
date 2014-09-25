class Router {
    /// <summary>Routable mixin, allowing a content control to render a view, given registered routes and browser query params.</summary>

    isRoutingEnabled = true;

    _routes: string[];
    _reroutes: string[];
    _routedContentControl: any;
    _currentRouteDescription: string;
    _onParamsChanged;
    _defaultRequire: string[] = [];
/*
    initialize() {
        /// <summary>Initializes the member variables.</summary>

        this._onParamsChanged = bind(this, this.evaluateRoutes);

        // HACK: what do we do when one mixin depends on another?
        //this.addChangeListener(this.getResource("navigation"), this._onParamsChanged);
 
        this.evaluateRoutes();
    }

    registerRouteContentControl(contentControl) {
        /// <summary>Register the content control to update when the active route changes.</summary>
        /// <param name="contentControl" type="JBase.UI.ContentControl">Content control.</param>

        var _this = this;

        _this._routedContentControl = contentControl;

        mix(contentControl, {
            getControlType: function(dataContext) {
                return dataContext.viewType;
            },
            getChildDataContext: function(dataContext) {
                return null;
            }
        });
    }

    registerRoute(routeResolveCallback, routeDescription) {
        /// <summary>Registers a function(viewParams) callback and a route description.</summary>
        /// <param name="routeResolveCallback" type="Function">Resolver callback that takes viewParams and returns a bool indicating a route match.</param>
        /// <param name="routeDescription" type="Object">
        /// Object in the form { viewType: "Foo.ViewControl", require: [ "Dependency1.js" ], dataContextType: "Foo.DataContext" }.
        /// </param>

        this._routes = this._routes || [];
        this._routes.push({
            resolver: routeResolveCallback,
            description: routeDescription
        });
    }

    registerUrlRoute(routes, routeDescription) {
        /// <summary>Registers a route providing url param matches instead of a function.</summary>
        /// <param name="routes" type="Array">Array of strings to match params against.</param>
        /// <param name="routeDescription" type="Object">
        /// Object in the form { viewType: "Foo.ViewControl", require: [ "Dependency1.js" ], dataContextType: "Foo.DataContext" }.
        /// </param>

        this.registerRoute(function(viewParams) {
            for (var i = 0; i < routes.length; i++) {
                var routeParts = routes[i].split("=");

                if (routeParts[0] == "*" ||
                    (viewParams[routeParts[0]] !== undefined &&
                        (viewParams[routeParts[0]] == routeParts[1] || (viewParams[1] == "*")))) {
                    return true;
                }
            }

            return false;
        }, routeDescription);
    }

    reroute(fromParam, toParam) {
        this._reroutes = this._reroutes || [];

        this._reroutes.push({
            from: fromParam.split("="),
            to: toParam.split("=")
        });
    }

    applyReroutes(viewParams) {
        var rerouted = false;

        for (var i = 0; this._reroutes && i < this._reroutes.length; i++) {
            var reroute = this._reroutes[i];

            if (viewParams[reroute.from[0]] !== undefined && viewParams[reroute.from[0]] === reroute.from[1]) {
                delete viewParams[reroute.from[0]];
                viewParams[reroute.to[0]] = reroute.to[1];
                rerouted = true;
            }
        }

        if (rerouted) {
  //          var navigation = this.getResource("navigation");

            navigation.replace(viewParams);
        }

        return rerouted;
    }

    evaluateRoutes() {
        /// <summary>Forces an evaluation of the routes given viewparam state.</summary>

        var _this = this;

        if (this.isRoutingEnabled) {
            var routeCount = (_this._routes ? _this._routes.length : 0);
//            var navigation = _this.getResource("navigation");
            var viewParams = navigation.getViewParams();
            var defaultRoute = null;
            var selectedRoute = null;
            var shouldContinueNavigationChange = true;

            // Apply reroutes.
            if (!_this.applyReroutes(viewParams)) {
                for (var i = 0; i < routeCount; i++) {
                    var route = _this._routes[i];

                    if (route.resolver(viewParams)) {
                        selectedRoute = route;
                        break;
                    } else if (route.description.isDefault) {
                        defaultRoute = route;
                    }
                }

                selectedRoute = selectedRoute || defaultRoute;

                if (selectedRoute && selectedRoute.description != _this._currentRouteDescription) {
                    var traceCategory = _this["traceCategory"];
                    var logEntry = Trace.log("Applying route: " + (selectedRoute.description.id || "unidentified route"), traceCategory);

                    _this.onRouteChanging && _this.onRouteChanging(_this._currentRouteDescription, selectedRoute.description);

                    _this._currentRouteDescription = selectedRoute.description;
                    _this._executeRoute(selectedRoute.description, viewParams);

                    _this.onRouteChanged && _this.onRouteChanged(selectedRoute.description);

                    Trace.logTo(logEntry, "Complete", traceCategory);

                    shouldContinueNavigationChange = false;
                }
            }
        }

        return shouldContinueNavigationChange;
    }

    onBeforeExecuteRoute(routeDescription, viewParams) {
        /// <summary>Overrideable callback to execute before executing a new route.</summary>
    }

    private _executeRoute(routeDescription, viewParams) {
        /// <summary>Executes a route.</summary>

        var _this = this;

        this.onBeforeExecuteRoute(routeDescription, viewParams);

        if (routeDescription && routeDescription.require && routeDescription.require.length) {
            var appliedRoute = false;

            require(routeDescription.require, function() {
                appliedRoute = true;
                if (_this._currentRouteDescription === routeDescription) {
                    _updateContentControl();
                }
            });

            // If the require asynchronously executes, clear the view.
            if (!appliedRoute) {
                _this._routedContentControl.setDataContext({
                    viewType: null,
                    dataContextType: null
                });
            }
        } else {
            _updateContentControl();
        }
        function _updateContentControl() {
            /// <summary>Closure function to abstract updating the content control, so that we can do it sync or async depending on if there are requires resources provided.</summary>

            var viewType = null;
            var dataContextType = null;

            if (routeDescription) {
                viewType = _resolveType(routeDescription.viewType);
                dataContextType = _resolveType(routeDescription.dataContextType);
            }

            _this._routedContentControl.setDataContext({
                viewType: viewType,
                dataContextType: dataContextType
            });
        }
    }
    */
}

function _resolveType(typeString) {
    /// <summary>Given a string type, resolves to an actual type.</summary>

    var type = null;

    if (typeString) {
        var typeParts = typeString.split(".");

        for (var i = 0; i < typeParts.length; i++) {
            type = (type || window)[typeParts[i]];

            if (!type) {
                break;
            }
        }
    }

    return type;
}
