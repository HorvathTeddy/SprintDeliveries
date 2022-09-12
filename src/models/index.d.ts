import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DispoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Item {
  readonly id: string;
  readonly name: string;
  readonly imag?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly dispoID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
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
  readonly Items?: (Item | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dispo, DispoMetaData>);
  static copyOf(source: Dispo, mutator: (draft: MutableModel<Dispo, DispoMetaData>) => MutableModel<Dispo, DispoMetaData> | void): Dispo;
}