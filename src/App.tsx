import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./layout";
import NotFound from "./pages/_404";

const { height } = Dimensions.get("screen");

const routes = require("react-router-routes-loader!./pages");
console.log(routes);

const App = () => {
  return (
    <Switch>
      {routes.map(
        (
          route: { component: any; path: string; exact: boolean },
          idx: number
        ) => {
          return (
            <Route
              key={idx}
              path={route.path}
              exact={Boolean(route.exact)}
              render={(routeProps) => (
                <Layout routes={routes}>
                  <route.component.default {...routeProps} />
                </Layout>
              )}
            />
          );
        }
      )}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
