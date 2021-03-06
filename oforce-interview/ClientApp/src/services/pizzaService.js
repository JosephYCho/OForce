import axios from "axios";
import * as helpers from "./serviceHelpers";

const getAllPizzaWithToppings = () => {
  const config = {
    method: "GET",
    url: helpers.API_HOST_PREFIX + "api/pizzas/toppings",
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const getById = id => {
  const config = {
    method: "GET",
    url: helpers.API_HOST_PREFIX + `api/pizzas/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const getPizzaAndToppingsById = id => {
  const config = {
    method: "GET",
    url: helpers.API_HOST_PREFIX + `api/pizzas/toppings/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const insertPizza = data => {
  const config = {
    method: "POST",
    url: helpers.API_HOST_PREFIX + `api/pizzas`,
    crossdomain: true,
    data,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const updatePizza = (data, id) => {
  const config = {
    method: "PUT",
    url: helpers.API_HOST_PREFIX + `api/pizzas/${id}`,
    crossdomain: true,
    data,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .then(()=> data)
    .then(()=>id)
    .catch(helpers.onGlobalError);
};

const deletePizza = id => {
  const config = {
    method: "DELETE",
    url: helpers.API_HOST_PREFIX + `api/pizzas/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .then(()=>id)
    .catch(helpers.onGlobalError);
};

export {
  getAllPizzaWithToppings,
  getById,
  getPizzaAndToppingsById,
  insertPizza,
  updatePizza,
  deletePizza
};
