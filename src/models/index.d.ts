import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  PREPARING = "PREPARING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED"
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BasketItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DispoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Item {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly dispoID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Basket {
  readonly id: string;
  readonly BasketItems?: (BasketItem | null)[] | null;
  readonly userID: string;
  readonly dispoID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Basket, BasketMetaData>);
  static copyOf(source: Basket, mutator: (draft: MutableModel<Basket, BasketMetaData>) => MutableModel<Basket, BasketMetaData> | void): Basket;
}

export declare class BasketItem {
  readonly id: string;
  readonly quantity: number;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BasketItem, BasketItemMetaData>);
  static copyOf(source: BasketItem, mutator: (draft: MutableModel<BasketItem, BasketItemMetaData>) => MutableModel<BasketItem, BasketItemMetaData> | void): BasketItem;
}

export declare class OrderItem {
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrderItem, OrderItemMetaData>);
  static copyOf(source: OrderItem, mutator: (draft: MutableModel<OrderItem, OrderItemMetaData>) => MutableModel<OrderItem, OrderItemMetaData> | void): OrderItem;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly Dispo?: Dispo | null;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderItems?: (OrderItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDispoId?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Dispo {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDelivTime: number;
  readonly maxDelivTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly Items?: (Item | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dispo, DispoMetaData>);
  static copyOf(source: Dispo, mutator: (draft: MutableModel<Dispo, DispoMetaData>) => MutableModel<Dispo, DispoMetaData> | void): Dispo;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}