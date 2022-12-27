import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSubmits = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Submits, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly speakerDegree?: string | null;
  readonly speakerTitleAndInstitution?: string | null;
  readonly speakerFirstAndLastname?: string | null;
  readonly contactPersonFirstAndLastName?: string | null;
  readonly contactPersonEmail?: string | null;
  readonly adminEmail: string;
  readonly sponsoringDepartmentOrganization?: string | null;
  readonly phoneNumberMoreInfo?: string | null;
  readonly isPublished: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubmits = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Submits, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly speakerDegree?: string | null;
  readonly speakerTitleAndInstitution?: string | null;
  readonly speakerFirstAndLastname?: string | null;
  readonly contactPersonFirstAndLastName?: string | null;
  readonly contactPersonEmail?: string | null;
  readonly adminEmail: string;
  readonly sponsoringDepartmentOrganization?: string | null;
  readonly phoneNumberMoreInfo?: string | null;
  readonly isPublished: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Submits = LazyLoading extends LazyLoadingDisabled ? EagerSubmits : LazySubmits

export declare const Submits: (new (init: ModelInit<Submits>) => Submits) & {
  copyOf(source: Submits, mutator: (draft: MutableModel<Submits>) => MutableModel<Submits> | void): Submits;
}